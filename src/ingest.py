"""Copy raw LLM calls from workflow transcripts into data/raw/.

For every subagent transcript (agent-*.jsonl) under the workflow directories it
extracts: the label (call id), requested model alias, served model id, start and
end timestamps, token usage, the exact prompt text, every tool the subagent
called (to verify that only the structured-output tool was used), any free text
it wrote, and the structured JSON it returned.

Output: data/raw/calls.jsonl (append-only, de-duplicated by agent id).
Memoryless workflow return values (trajectories) are copied from the task
output files into data/raw/memoryless/<tag>.json.

Usage: python src/ingest.py <workflows_dir> [<task_output_file> ...]
"""
import glob
import json
import os
import re
import time
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "data" / "raw"
CALLS = RAW / "calls.jsonl"

WRAP_RE = re.compile(r"You are taking part in a scientific experiment.*", re.S)


def extract_prompt(text):
    """The harness wraps (and indents) the task text; recover our prompt."""
    m = WRAP_RE.search(text)
    if not m:
        return text
    body = m.group(0)
    # undo harness indentation of continuation lines
    lines = [ln[2:] if ln.startswith("  ") else ln for ln in body.split("\n")]
    return "\n".join(lines).strip()


def parse_agent(path):
    meta = json.load(open(path.replace(".jsonl", ".meta.json")))
    rec = dict(agent_id=os.path.basename(path)[6:-6], id=meta.get("description"),
               model=meta.get("model"), served_model=None, t_start=None, t_end=None,
               prompt=None, tools_used=[], text=[], response=None,
               usage=dict(input=0, cache_read=0, cache_creation=0, output=0), n_turns=0)
    for line in open(path):
        d = json.loads(line)
        ts = d.get("timestamp")
        if ts:
            rec["t_start"] = rec["t_start"] or ts
            rec["t_end"] = ts
        msg = d.get("message") or {}
        if d.get("type") == "user" and rec["prompt"] is None:
            c = msg.get("content")
            if isinstance(c, list):
                c = "\n".join(x.get("text", "") for x in c if isinstance(x, dict))
            rec["prompt"] = extract_prompt(c or "")
        if d.get("type") == "assistant":
            served = msg.get("model") or ""
            # keep only the model family of the served model (haiku / sonnet / opus)
            fam = next((f for f in ("haiku", "sonnet", "opus") if f in served), None)
            rec["served_model"] = fam or rec["served_model"]
            u = msg.get("usage") or {}
            rec["n_turns"] += 1
            rec["usage"]["input"] += u.get("input_tokens", 0) or 0
            rec["usage"]["cache_read"] += u.get("cache_read_input_tokens", 0) or 0
            rec["usage"]["cache_creation"] += u.get("cache_creation_input_tokens", 0) or 0
            rec["usage"]["output"] += u.get("output_tokens", 0) or 0
            for part in msg.get("content") or []:
                if part.get("type") == "tool_use":
                    rec["tools_used"].append(part.get("name"))
                    if part.get("name") == "StructuredOutput":
                        rec["response"] = part.get("input")
                elif part.get("type") == "text" and part.get("text", "").strip():
                    rec["text"].append(part["text"])
    return rec


def main(wf_dirs, task_outputs):
    RAW.mkdir(parents=True, exist_ok=True)
    seen = set()
    if CALLS.exists():
        seen = {json.loads(l)["agent_id"] for l in CALLS.open() if l.strip()}
    new = 0
    with CALLS.open("a") as f:
        for d in wf_dirs:
            for path in sorted(glob.glob(os.path.join(d, "agent-*.jsonl"))):
                aid = os.path.basename(path)[6:-6]
                if aid in seen:
                    continue
                rec = parse_agent(path)
                if rec["t_end"] is None:
                    continue
                # an agent still running has no response yet; leave it for a later pass
                if rec["response"] is None and time.time() - os.path.getmtime(path) < 900:
                    continue
                rec["workflow_run"] = os.path.basename(d.rstrip("/"))
                f.write(json.dumps(rec) + "\n")
                seen.add(aid)
                new += 1
    print(f"ingested {new} new calls -> {CALLS}")
    mdir = RAW / "memoryless"
    mdir.mkdir(exist_ok=True)
    for t in task_outputs:
        out = json.load(open(t))
        res = out.get("result")
        if isinstance(res, list):
            for r in res:
                if isinstance(r, dict) and "traj" in r:
                    name = r["tag"].replace("|", "_")
                    json.dump(r, open(mdir / f"{name}.json", "w"))
                    print("memoryless ->", name)


if __name__ == "__main__":
    args = sys.argv[1:]
    dirs = [a for a in args if os.path.isdir(a)]
    outs = [a for a in args if os.path.isfile(a)]
    main(dirs, outs)
