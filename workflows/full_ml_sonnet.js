export const meta = {
  name: 'full-ml-sonnet',
  description: 'Memoryless Wright-Fisher trajectories: one fresh subagent call per generation',
  phases: [{ title: 'Generations' }],
}
const SCHEMA = {"type": "object", "properties": {"counts": {"type": "array", "items": {"type": "integer"}}}, "required": ["counts"]}
const CONFIGS = [
{
"tag": "full|ml|sonnet|N10|s0.0",
"model": "sonnet",
"N": 10,
"s": 0.0,
"init": [
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16
],
"G": 40,
"batch": 40,
"template": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Below are {m} independent populations, each with N = 10 diploid individuals (2N = 20 gene copies), currently at generation {t}. For each population the current number of copies of allele A is listed. For each population, simulate the number of copies of allele A in generation {t1} by random sampling. The populations are independent of one another, so draw each one independently. Return a list of {m} integers between 0 and 20, in the same order as the input (field 'counts').\n\nCurrent counts of allele A: {counts}"
},
{
"tag": "full|ml|sonnet|N10|s0.05",
"model": "sonnet",
"N": 10,
"s": 0.05,
"init": [
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
10,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16
],
"G": 40,
"batch": 40,
"template": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Below are {m} independent populations, each with N = 10 diploid individuals (2N = 20 gene copies), currently at generation {t}. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. For each population the current number of copies of allele A is listed. For each population, simulate the number of copies of allele A in generation {t1} by random sampling. The populations are independent of one another, so draw each one independently. Return a list of {m} integers between 0 and 20, in the same order as the input (field 'counts').\n\nCurrent counts of allele A: {counts}"
},
{
"tag": "full|ml|sonnet|N50|s0.0",
"model": "sonnet",
"N": 50,
"s": 0.0,
"init": [
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50
],
"G": 30,
"batch": 40,
"template": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Below are {m} independent populations, each with N = 50 diploid individuals (2N = 100 gene copies), currently at generation {t}. For each population the current number of copies of allele A is listed. For each population, simulate the number of copies of allele A in generation {t1} by random sampling. The populations are independent of one another, so draw each one independently. Return a list of {m} integers between 0 and 100, in the same order as the input (field 'counts').\n\nCurrent counts of allele A: {counts}"
}
]
function fill(tpl, m, t, counts) {
  return tpl.split('{m}').join(String(m)).split('{t}').join(String(t))
    .split('{t1}').join(String(t + 1)).split('{counts}').join(counts.join(', '))
}
async function runConfig(c) {
  const twoN = 2 * c.N
  let state = c.init.slice()
  const traj = [state.slice()]
  const events = []
  for (let t = 0; t < c.G; t++) {
    const active = []
    for (let k = 0; k < state.length; k++) if (state[k] > 0 && state[k] < twoN) active.push(k)
    if (active.length === 0) break
    const chunks = []
    for (let a = 0; a < active.length; a += c.batch) chunks.push(active.slice(a, a + c.batch))
    const res = await parallel(chunks.map((ch, j) => async () => {
      const counts = ch.map(k => state[k])
      const prompt = fill(c.template, ch.length, t, counts)
      for (let attempt = 0; attempt < 2; attempt++) {
        const r = await agent(prompt, {label: `${c.tag}|t${t}|c${j}|a${attempt}`, phase: 'Generations', model: c.model, effort: 'low', schema: SCHEMA})
        if (r && Array.isArray(r.counts) && r.counts.length === ch.length) return {ch, counts: r.counts, attempt}
        events.push({t, j, attempt, problem: r ? `len ${r.counts ? r.counts.length : 'none'} != ${ch.length}` : 'null'})
      }
      return {ch, counts: null}
    }))
    const next = state.slice()
    for (const r of res) {
      if (!r || !r.counts) continue
      r.ch.forEach((k, idx) => { next[k] = Math.max(0, Math.min(twoN, Math.round(r.counts[idx]))) })
    }
    state = next
    traj.push(state.slice())
  }
  return {tag: c.tag, model: c.model, N: c.N, s: c.s, traj, events}
}
phase('Generations')
const results = await parallel(CONFIGS.map(c => () => runConfig(c)))
return results
