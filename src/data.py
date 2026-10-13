"""Load raw LLM calls joined with their design parameters."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MODELS = ["haiku", "sonnet", "opus"]


def load_jobs():
    jobs = {}
    for phase in ["pilot", "full"]:
        path = ROOT / "configs" / f"jobs_{phase}.jsonl"
        if path.exists():
            for line in path.open():
                j = json.loads(line)
                jobs[j["id"]] = j
    return jobs


def load_calls(prefix="full|"):
    """Return list of job dicts with 'response' and call metadata attached.

    If the same job id was called more than once (a re-run), the first valid
    response is used.
    """
    jobs = load_jobs()
    out = {}
    for line in open(ROOT / "data" / "raw" / "calls.jsonl"):
        r = json.loads(line)
        jid = r["id"]
        if not jid or not jid.startswith(prefix) or jid not in jobs:
            continue
        if jid in out and out[jid]["response"]:
            continue
        rec = dict(jobs[jid])
        rec.update(response=r["response"], served_model=r["served_model"], t_start=r["t_start"],
                   t_end=r["t_end"], tools_used=r["tools_used"], usage=r["usage"])
        out[jid] = rec
    return list(out.values())


def load_raw_calls():
    return [json.loads(l) for l in open(ROOT / "data" / "raw" / "calls.jsonl")]


def load_memoryless(prefix="full_"):
    out = []
    for p in sorted((ROOT / "data" / "raw" / "memoryless").glob(prefix + "*.json")):
        out.append(json.load(open(p)))
    return out


def parse_bits(s):
    return [int(c) for c in s if c in "01"]
