"""Numerical checks of the derivations in theory/derivations.md.

Writes results/theory_checks.json. Fixed seed; runs in about a minute.
"""
import json
import sys
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "src"))
import wf  # noqa: E402

rng = np.random.default_rng(wf.SEED)
out = {}

# 1. Markov bits: variance of sums (eq. 2), alternation rate, run lengths
chk = []
for pi, rho, n in [(0.5, -0.2, 20), (0.5, -0.3, 100), (0.2, -0.1, 40), (0.5, 0.2, 400), (0.05, -0.05, 100)]:
    b = wf.markov_bits(rng, n, pi, rho, size=20000)
    S = b.sum(1)
    pred = n * pi * (1 - pi) * wf.markov_var_factor(rho, n)
    alt = np.mean(b[:, 1:] != b[:, :-1])
    _, L = wf.run_lengths(b[0:200].ravel())
    chk.append(dict(pi=pi, rho=rho, n=n, var_sim=float(S.var()), var_pred=float(pred),
                    alt_sim=float(alt), alt_pred=2 * pi * (1 - pi) * (1 - rho)))
out["markov_sum_variance"] = chk

# run lengths of ones: geometric with continuation pi + rho(1-pi)
b = wf.markov_bits(rng, 200000, 0.5, -0.25)
vals, L = wf.run_lengths(b)
a1 = 0.5 + (-0.25) * 0.5
out["run_length_ones"] = dict(mean_sim=float(L[vals == 1].mean()), mean_pred=1 / (1 - a1),
                              p1_sim=float(np.mean(L[vals == 1] == 1)), p1_pred=1 - a1)

# 2. RNG mode, one bit per offspring (eq. 3)
chk = []
for N, p, pi, rho in [(10, 0.5, 0.5, -0.2), (50, 0.5, 0.5, -0.3), (50, 0.2, 0.15, -0.1), (200, 0.05, 0.03, 0.0)]:
    b = wf.markov_bits(rng, 2 * N, pi, rho, size=40000)
    dp = b.mean(1) - p
    ne_sim = wf.ne_from_var(p, dp.var())
    chk.append(dict(N=N, p=p, pi=pi, rho=rho, NeN_sim=float(ne_sim / N),
                    NeN_pred=float(wf.ne_ratio_rng_bits(p, pi, rho, 2 * N)),
                    mean_dp_sim=float(dp.mean()), mean_dp_pred=pi - p))
out["rng_one_bit_Ne"] = chk

# 3. Dispersion model: Var, heterozygosity decay (eq. 6), fixation (eq. 7-8), time (eq. 9)
chk = []
for N, p, phi in [(10, 0.5, 0.5), (50, 0.2, 0.7), (50, 0.5, 2.0), (200, 0.5, 0.6)]:
    x = wf.dispersed_counts(rng, 2 * N, p, phi, 200000)
    chk.append(dict(N=N, p=p, phi=phi, var_sim=float(x.var()), var_pred=phi * 2 * N * p * (1 - p),
                    NeN_sim=float(wf.ne_from_var(p, (x / (2 * N)).var()) / N), NeN_pred=1 / phi))
out["dispersion_variance"] = chk

chk = []
for N, phi in [(10, 0.5), (10, 1.0), (50, 0.6), (50, 2.0)]:
    tr = wf.wf_trajectories(rng, N, 0.5, 30, 20000, phi=phi)
    p = tr / (2 * N)
    H = (2 * p * (1 - p)).mean(0)
    pred = H[0] * (1 - phi / (2 * N)) ** np.arange(31)
    chk.append(dict(N=N, phi=phi, H30_sim=float(H[30]), H30_pred=float(pred[30]),
                    max_rel_err=float(np.max(np.abs(H - pred) / pred))))
out["heterozygosity_decay"] = chk

chk = []
for N, p0, phi, s in [(10, 0.2, 0.5, 0.0), (10, 0.2, 2.0, 0.0), (10, 0.5, 0.5, 0.05), (10, 0.2, 1.0, 0.05),
                      (10, 0.2, 0.5, 0.05), (50, 0.1, 0.6, 0.02)]:
    fixed, t = wf.wf_until_absorbed(rng, N, p0, 40000, s=s, phi=phi)
    Ne = N / phi
    chk.append(dict(N=N, p0=p0, phi=phi, s=s, u_sim=float(fixed.mean()),
                    u_pred=float(wf.kimura_u(p0, Ne, s)), t_sim=float(t.mean()),
                    t_pred=float(wf.t_absorb(p0, Ne)) if s == 0 else None))
out["fixation"] = chk

# selection-free biased mean: pull toward 0.5 delays absorption; u(p0) by diffusion
kappa, N, phi = 0.02, 10, 1.0
M = lambda x: -kappa * (x - 0.5)
V = lambda x: phi * x * (1 - x) / (2 * N)
out["bias_note"] = ("With M(x) = -kappa (x - 0.5) the integrand G(x) diverges at the boundaries "
                    "(4N kappa/phi > 1 makes fixation from the interior impossible in the diffusion limit); "
                    "only the discrete model can be simulated.")

(ROOT / "results").mkdir(exist_ok=True)
json.dump(out, open(ROOT / "results" / "theory_checks.json", "w"), indent=1)
for k, v in out.items():
    print(k)
    if isinstance(v, list):
        for row in v:
            print("  ", {a: (round(b, 4) if isinstance(b, float) else b) for a, b in row.items()})
    else:
        print("  ", v)
