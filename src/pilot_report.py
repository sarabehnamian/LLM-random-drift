"""Summarise the pilot calls: validity, refusals, time, tokens, quick statistics."""
import datetime as dt
import json
from collections import Counter
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parents[1]
recs = [json.loads(l) for l in open(ROOT / "data/raw/calls.jsonl")]
recs = [r for r in recs if r["id"].startswith("pilot|")]


def secs(r):
    f = lambda s: dt.datetime.fromisoformat(s.replace("Z", "+00:00"))
    return (f(r["t_end"]) - f(r["t_start"])).total_seconds()


lines = ["# Pilot report", "", f"Calls: {len(recs)}", ""]
valid = [r for r in recs if isinstance(r["response"], dict) and r["response"]]
other_tools = [r["id"] for r in recs if set(r["tools_used"]) - {"StructuredOutput"}]
lines += [f"Valid structured JSON: {len(valid)}/{len(recs)}",
          f"Calls that used a tool other than StructuredOutput: {len(other_tools)}",
          f"Calls with free text besides the JSON: {sum(1 for r in recs if r['text'])}", ""]
lines += ["| model | calls | median s/call | max s/call | mean context tokens (input+cache) |", "|---|---|---|---|---|"]
for m in ["haiku", "sonnet", "opus"]:
    rs = [r for r in recs if r["model"] == m]
    t = [secs(r) for r in rs]
    ctx = [r["usage"]["input"] + r["usage"]["cache_read"] + r["usage"]["cache_creation"] for r in rs]
    lines.append(f"| {m} | {len(rs)} | {np.median(t):.1f} | {max(t):.1f} | {np.mean(ctx):.0f} |")
lines.append("")
lines.append("## Quick looks")
for r in recs:
    resp = r["response"]
    if "bits" in resp:
        b = np.array([int(c) for c in resp["bits"] if c in "01"])
        alt = np.mean(b[1:] != b[:-1])
        lines.append(f"- {r['id']}: n={len(b)} freq1={b.mean():.3f} alternation={alt:.3f} first40={resp['bits'][:40]}")
    elif "counts" in resp and "|direct|" in r["id"]:
        c = np.array(resp["counts"])
        lines.append(f"- {r['id']}: k={len(c)} mean={c.mean():.2f} var={c.var(ddof=1):.2f} first8={c[:8].tolist()}")
    elif "trajectories" in resp:
        L = [len(t) for t in resp["trajectories"]]
        lines.append(f"- {r['id']}: {len(L)} trajectories, lengths {L}, finals {[t[-1] for t in resp['trajectories']]}")
# duplicate check: identical first 8 draws across models / calls
firsts = Counter(tuple(r["response"]["counts"][:6]) for r in recs if "counts" in r["response"])
lines += ["", "Most common first-6 sequences across all count calls:"]
for k, v in firsts.most_common(3):
    lines.append(f"- {k}: {v} calls")
(ROOT / "results" / "pilot_report.md").write_text("\n".join(lines) + "\n")
print("\n".join(lines))
