"""Generate Workflow scripts (JavaScript) that run LLM calls as fresh subagents.

Two kinds of script:
  * job-list scripts: a fixed list of independent calls (bits, direct mode,
    whole trajectories). Prompts are rendered in Python and embedded verbatim.
  * memoryless scripts: multi-generation runs where each generation is a fresh
    call whose prompt depends on the previous call's output. The prompt template
    (from src/prompts.py) is embedded and filled in JavaScript.

Raw outputs are recovered afterwards from the workflow journal by src/ingest.py.
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "src"))
from prompts import SCHEMAS, memoryless_template  # noqa: E402

EFFORT = "low"


def job_list_script(name, jobs):
    """jobs: list of dicts with id, model, schema (key of SCHEMAS), prompt."""
    slim = [{"id": j["id"], "model": j["model"], "schema": j["schema"], "prompt": j["prompt"]} for j in jobs]
    return f"""export const meta = {{
  name: '{name}',
  description: 'LLM randomness experiment: {len(jobs)} independent subagent calls',
  phases: [{{ title: 'Calls' }}],
}}
const SCHEMAS = {json.dumps(SCHEMAS)}
const JOBS = {json.dumps(slim, indent=0)}
phase('Calls')
const out = await parallel(JOBS.map(j => () =>
  agent(j.prompt, {{label: j.id, phase: 'Calls', model: j.model, effort: '{EFFORT}', schema: SCHEMAS[j.schema]}})
    .then(r => ({{id: j.id, ok: r !== null}}))
    .catch(e => ({{id: j.id, ok: false, err: String(e)}}))
))
const ok = out.filter(o => o && o.ok).length
log(`${{ok}}/${{JOBS.length}} calls returned output`)
return {{name: '{name}', n: JOBS.length, ok, failed: out.filter(o => !o || !o.ok).map(o => o ? o.id : null)}}
"""


def memoryless_script(name, configs):
    """configs: list of dicts with tag, model, N, s, init (list of counts), G, batch.

    Each generation, all still-polymorphic populations of a config are split into
    batches of `batch` and each batch is one fresh call. Invalid replies (wrong
    length) are retried once; if still invalid, those populations keep their
    current count for that generation and the event is recorded.
    """
    cfgs = []
    for c in configs:
        cfgs.append(dict(c, template=memoryless_template(c["N"], c["s"])))
    return f"""export const meta = {{
  name: '{name}',
  description: 'Memoryless Wright-Fisher trajectories: one fresh subagent call per generation',
  phases: [{{ title: 'Generations' }}],
}}
const SCHEMA = {json.dumps(SCHEMAS['counts'])}
const CONFIGS = {json.dumps(cfgs, indent=0)}
function fill(tpl, m, t, counts) {{
  return tpl.split('{{m}}').join(String(m)).split('{{t}}').join(String(t))
    .split('{{t1}}').join(String(t + 1)).split('{{counts}}').join(counts.join(', '))
}}
async function runConfig(c) {{
  const twoN = 2 * c.N
  let state = c.init.slice()
  const traj = [state.slice()]
  const events = []
  for (let t = 0; t < c.G; t++) {{
    const active = []
    for (let k = 0; k < state.length; k++) if (state[k] > 0 && state[k] < twoN) active.push(k)
    if (active.length === 0) break
    const chunks = []
    for (let a = 0; a < active.length; a += c.batch) chunks.push(active.slice(a, a + c.batch))
    const res = await parallel(chunks.map((ch, j) => async () => {{
      const counts = ch.map(k => state[k])
      const prompt = fill(c.template, ch.length, t, counts)
      for (let attempt = 0; attempt < 2; attempt++) {{
        const r = await agent(prompt, {{label: `${{c.tag}}|t${{t}}|c${{j}}|a${{attempt}}`, phase: 'Generations', model: c.model, effort: '{EFFORT}', schema: SCHEMA}})
        if (r && Array.isArray(r.counts) && r.counts.length === ch.length) return {{ch, counts: r.counts, attempt}}
        events.push({{t, j, attempt, problem: r ? `len ${{r.counts ? r.counts.length : 'none'}} != ${{ch.length}}` : 'null'}})
      }}
      return {{ch, counts: null}}
    }}))
    const next = state.slice()
    for (const r of res) {{
      if (!r || !r.counts) continue
      r.ch.forEach((k, idx) => {{ next[k] = Math.max(0, Math.min(twoN, Math.round(r.counts[idx]))) }})
    }}
    state = next
    traj.push(state.slice())
  }}
  return {{tag: c.tag, model: c.model, N: c.N, s: c.s, traj, events}}
}}
phase('Generations')
const results = await parallel(CONFIGS.map(c => () => runConfig(c)))
return results
"""


def write(name, text):
    path = ROOT / "workflows" / f"{name}.js"
    path.write_text(text)
    return path
