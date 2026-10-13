"""Experimental design: builds the list of LLM calls for each phase.

Usage: python src/design.py pilot|full
Writes configs/jobs_<phase>.jsonl (one job per line) and workflow scripts in
workflows/. Jobs already present in data/raw/calls.jsonl are skipped, so the
run is resumable.
"""
import hashlib
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "src"))
from prompts import render_bits, render_direct, render_trajectory  # noqa: E402
import make_workflow as mw  # noqa: E402

MODELS = ["haiku", "sonnet", "opus"]
NS = [10, 50, 200]
PS = [0.05, 0.2, 0.5, 0.8]


def run_code(job_id, use=True):
    """Deterministic 6-character label that makes replicate prompts differ."""
    return hashlib.sha256(job_id.encode()).hexdigest()[:6] if use else None


def count_for(N, p):
    return int(round(2 * N * p))


def bits_job(model, phr, p, rep, n, phase, code=True, extra=""):
    jid = f"{phase}|bits{extra}|{model}|{phr}|p{p}|r{rep}"
    c = run_code(jid, code and phase != "pilot")
    return dict(id=jid, kind="bits", model=model, phrasing=phr, p=p, n=n, rep=rep, code=c,
                schema="bits", prompt=render_bits(phr, n, p, c))


def direct_job(model, phr, N, p, s, rep, k, phase, code=True, extra=""):
    i = count_for(N, p)
    jid = f"{phase}|direct{extra}|{model}|{phr}|N{N}|p{p}|s{s}|r{rep}"
    c = run_code(jid, code and phase != "pilot")
    return dict(id=jid, kind="direct", model=model, phrasing=phr, N=N, p=p, i=i, s=s, k=k, rep=rep,
                code=c, schema="counts", prompt=render_direct(phr, N, i, k, s, code=c))


def traj_job(model, N, p, s, rep, k, G, phase):
    i = count_for(N, p)
    jid = f"{phase}|traj|{model}|N{N}|p{p}|s{s}|r{rep}"
    c = run_code(jid, phase != "pilot")
    return dict(id=jid, kind="traj", model=model, N=N, p=p, i=i, s=s, k=k, G=G, rep=rep, code=c,
                schema="trajectories", prompt=render_trajectory(N, i, k, G, s, c))


def pilot():
    jobs = []
    for m in MODELS:
        jobs += [
            bits_job(m, "plain", 0.5, 0, 200, "pilot"),
            bits_job(m, "rng", 0.2, 0, 200, "pilot"),
            bits_job(m, "plain", 0.05, 0, 200, "pilot"),
            direct_job(m, "plain", 50, 0.2, 0.0, 0, 20, "pilot"),
            direct_job(m, "wf", 10, 0.5, 0.0, 0, 20, "pilot"),
            direct_job(m, "rng", 200, 0.05, 0.0, 0, 20, "pilot"),
            direct_job(m, "wf", 50, 0.5, 0.05, 0, 20, "pilot"),
            traj_job(m, 10, 0.5, 0.0, 0, 4, 40, "pilot"),
        ]
    # memoryless: one config per model, 40 populations, 2 generations (2 calls)
    ml = [dict(tag=f"pilot|ml|{m}|N10|s0.0", model=m, N=10, s=0.0, init=[10] * 40, G=2, batch=40)
          for m in MODELS]
    return jobs, ml


def full():
    jobs = []
    # Q1 bit sequences: 4 p x 2 phrasings x 8 reps x 300 bits per model
    for m in MODELS:
        for p in PS:
            for phr in ["plain", "rng"]:
                for r in range(20 if p == 0.5 else 8):  # extra fair bits feed RNG mode
                    jobs.append(bits_job(m, phr, p, r, 300, "full"))
    # Q2 direct mode, one generation, 20 draws per call
    for m in MODELS:
        for N in NS:
            for p in PS:
                for phr in ["plain", "wf"]:
                    for r in range(3):
                        jobs.append(direct_job(m, phr, N, p, 0.0, r, 20, "full"))
                for r in range(2):  # selection, wf phrasing
                    jobs.append(direct_job(m, "wf", N, p, 0.05, r, 20, "full"))
        for p in PS:  # third phrasing on N = 50 only
            for r in range(3):
                jobs.append(direct_job(m, "rng", 50, p, 0.0, r, 20, "full"))
    # determinism test: identical prompts (no run code) repeated 4 times
    for m in MODELS:
        for r in range(4):
            jobs.append(bits_job(m, "plain", 0.5, r, 300, "full", code=False, extra="-dup"))
            jobs.append(direct_job(m, "wf", 50, 0.5, 0.0, r, 20, "full", code=False, extra="-dup"))
    # Q4 whole trajectories in one call
    for m in MODELS:
        for p in PS:
            for s in [0.0, 0.05]:
                for r in range(3):
                    jobs.append(traj_job(m, 10, p, s, r, 4, 40, "full"))
        for r in range(5):
            jobs.append(traj_job(m, 50, 0.5, 0.0, r, 4, 30, "full"))
    # memoryless: N = 10, 20 populations per starting p0, s in {0, 0.05}, 40 generations;
    #             N = 50, 40 populations at p0 = 0.5, s = 0, 30 generations.
    ml = []
    for m in MODELS:
        init10 = sum([[count_for(10, p)] * 20 for p in PS], [])
        for s in [0.0, 0.05]:
            ml.append(dict(tag=f"full|ml|{m}|N10|s{s}", model=m, N=10, s=s, init=init10, G=40, batch=40))
        ml.append(dict(tag=f"full|ml|{m}|N50|s0.0", model=m, N=50, s=0.0, init=[50] * 40, G=30, batch=40))
    return jobs, ml


def done_ids():
    path = ROOT / "data" / "raw" / "calls.jsonl"
    if not path.exists():
        return set()
    return {json.loads(line)["id"] for line in path.open() if line.strip()}


def main(phase, nchunks=4):
    jobs, ml = pilot() if phase == "pilot" else full()
    (ROOT / "configs").mkdir(exist_ok=True)
    with open(ROOT / "configs" / f"jobs_{phase}.jsonl", "w") as f:
        for j in jobs:
            f.write(json.dumps(j) + "\n")
    with open(ROOT / "configs" / f"memoryless_{phase}.json", "w") as f:
        json.dump(ml, f, indent=1)
    done = done_ids()
    todo = [j for j in jobs if j["id"] not in done]
    print(f"{phase}: {len(jobs)} jobs, {len(todo)} to do, {len(ml)} memoryless configs")
    for c in range(nchunks):
        chunk = todo[c::nchunks]
        if chunk:
            print(mw.write(f"{phase}_jobs_{c}", mw.job_list_script(f"{phase}-jobs-{c}", chunk)), len(chunk))
    return jobs, ml


if __name__ == "__main__":
    main(sys.argv[1], int(sys.argv[2]) if len(sys.argv) > 2 else 4)
