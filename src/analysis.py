"""All analyses. Reads data/raw/, writes results/*.json and results/*.csv.

Usage: python src/analysis.py
"""
import json
import math
import sys
from collections import defaultdict
from pathlib import Path

import numpy as np
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "src"))
import wf  # noqa: E402
from data import MODELS, load_calls, load_memoryless, load_raw_calls, parse_bits  # noqa: E402

RES = ROOT / "results"
RES.mkdir(exist_ok=True)
rng = np.random.default_rng(wf.SEED)
NBOOT = 2000


def logit(x):
    x = np.clip(np.asarray(x, float), 1e-4, 1 - 1e-4)
    return np.log(x / (1 - x))


def ci(a):
    a = np.asarray([v for v in a if np.isfinite(v)])
    if len(a) == 0:
        return [float("nan"), float("nan")]
    return [float(np.percentile(a, 2.5)), float(np.percentile(a, 97.5))]


def entropy_rate(bits, k=3):
    """Block-entropy estimate of the entropy rate, H_k - H_{k-1} (bits/symbol)."""
    def H(m):
        if m == 0:
            return 0.0
        b = np.asarray(bits)
        if len(b) < m:
            return float("nan")
        codes = np.zeros(len(b) - m + 1, int)
        for j in range(m):
            codes = codes * 2 + b[j:len(b) - m + 1 + j]
        _, c = np.unique(codes, return_counts=True)
        q = c / c.sum()
        return float(-(q * np.log2(q)).sum())
    return H(k) - H(k - 1)


def h2(p):
    return 0.0 if p in (0, 1) else float(-(p * math.log2(p) + (1 - p) * math.log2(1 - p)))


def autocorr(b, lag):
    b = np.asarray(b, float)
    if len(b) <= lag + 2 or b.std() == 0:
        return float("nan")
    x, y = b[:-lag], b[lag:]
    if x.std() == 0 or y.std() == 0:
        return float("nan")
    return float(np.corrcoef(x, y)[0, 1])


# ======================================================================= bits
def analyse_bits(calls):
    bc = [c for c in calls if c["kind"] == "bits" and c["response"] and "bits" in c["response"]]
    rows, seqs = [], defaultdict(list)
    for c in bc:
        b = parse_bits(c["response"]["bits"])
        if len(b) < 10:
            continue
        dup = c["id"].split("|")[1] == "bits-dup"
        key = (c["model"], c["phrasing"], c["p"], dup)
        seqs[key].append(np.array(b, np.int8))
        rows.append(dict(id=c["id"], model=c["model"], phrasing=c["phrasing"], p=c["p"], dup=dup,
                         n_req=c["n"], n=len(b), freq=float(np.mean(b)),
                         alt=float(np.mean(np.diff(b) != 0)), rho1=autocorr(b, 1)))
    df = pd.DataFrame(rows)
    df.to_csv(RES / "bits_calls.csv", index=False)

    summary = []
    for (m, phr, p, dup), L in sorted(seqs.items()):
        if dup:
            continue
        allb = np.concatenate(L)
        freq = float(allb.mean())
        # bootstrap over calls
        bs_f, bs_alt, bs_rho = [], [], []
        for _ in range(NBOOT):
            idx = rng.integers(0, len(L), len(L))
            s = [L[i] for i in idx]
            cat = np.concatenate(s)
            bs_f.append(cat.mean())
            bs_alt.append(np.mean(np.concatenate([np.diff(x) != 0 for x in s])))
        alt = float(np.mean(np.concatenate([np.diff(x) != 0 for x in L])))
        # lag correlations pooled within calls
        lags = {}
        for lag in range(1, 11):
            xs = np.concatenate([x[:-lag] for x in L]).astype(float)
            ys = np.concatenate([x[lag:] for x in L]).astype(float)
            lags[lag] = float(np.corrcoef(xs, ys)[0, 1]) if xs.std() > 0 and ys.std() > 0 else float("nan")
        rho = lags[1]
        # runs (within calls)
        runs1, runs0 = [], []
        for x in L:
            v, ln = wf.run_lengths(x)
            runs1 += ln[v == 1].tolist()
            runs0 += ln[v == 0].tolist()
        # position effect: first 50 vs rest
        first = np.concatenate([x[:50] for x in L])
        rest = np.concatenate([x[50:] for x in L if len(x) > 50])
        alt_first = float(np.mean(np.concatenate([np.diff(x[:50]) != 0 for x in L])))
        alt_rest = float(np.mean(np.concatenate([np.diff(x[50:]) != 0 for x in L if len(x) > 52])))
        er = float(np.mean([entropy_rate(x, 3) for x in L if len(x) >= 50]))
        summary.append(dict(
            model=m, phrasing=phr, p=p, calls=len(L), bits=int(len(allb)),
            len_mean=float(np.mean([len(x) for x in L])), len_min=int(min(len(x) for x in L)),
            len_max=int(max(len(x) for x in L)),
            freq=freq, freq_ci=ci(bs_f), alt=alt, alt_ci=ci(bs_alt), alt_iid=2 * p * (1 - p),
            alt_iid_at_freq=2 * freq * (1 - freq), rho_lags=lags, rho1=rho,
            mean_run1=float(np.mean(runs1)) if runs1 else float("nan"),
            mean_run0=float(np.mean(runs0)) if runs0 else float("nan"),
            mean_run1_iid=1 / (1 - p), mean_run0_iid=1 / p,
            max_run1=int(max(runs1)) if runs1 else 0, max_run0=int(max(runs0)) if runs0 else 0,
            run1_hist=np.bincount(runs1, minlength=12)[1:].tolist() if runs1 else [],
            run0_hist=np.bincount(runs0, minlength=12)[1:].tolist() if runs0 else [],
            freq_first50=float(first.mean()), freq_rest=float(rest.mean()) if len(rest) else float("nan"),
            alt_first50=alt_first, alt_rest=alt_rest,
            entropy_rate=er, entropy_iid=h2(p), entropy_at_freq=h2(freq),
            # expected longest run in a 300-bit iid sequence is approx log_{1/p}(n(1-p))
        ))

    # shrinkage curve per model (pooled phrasings), logit pi = b0 + b1 logit p
    shrink = {}
    for m in MODELS:
        pts = [(s["p"], s["freq"], s["bits"]) for s in summary if s["model"] == m]
        if not pts:
            continue
        byp = defaultdict(lambda: [0.0, 0])
        for p, f, n in pts:
            byp[p][0] += f * n
            byp[p][1] += n
        ps = np.array(sorted(byp))
        fs = np.array([byp[p][0] / byp[p][1] for p in ps])
        X = np.c_[np.ones(len(ps)), logit(ps)]
        b = np.linalg.lstsq(X, logit(fs), rcond=None)[0]
        # bootstrap over calls within each (p)
        Lm = {p: [x for (mm, phr, pp, d), L in seqs.items() if mm == m and pp == p and not d for x in L]
              for p in ps}
        bb = []
        for _ in range(NBOOT):
            f_b = []
            for p in ps:
                L = Lm[p]
                idx = rng.integers(0, len(L), len(L))
                f_b.append(np.concatenate([L[i] for i in idx]).mean())
            bb.append(np.linalg.lstsq(X, logit(f_b), rcond=None)[0])
        bb = np.array(bb)
        shrink[m] = dict(p=ps.tolist(), freq=fs.tolist(), b0=float(b[0]), b1=float(b[1]),
                         b0_ci=ci(bb[:, 0]), b1_ci=ci(bb[:, 1]))

    # determinism: identical prompts repeated
    dup = {}
    for m in MODELS:
        L = [x for (mm, phr, p, d), LL in seqs.items() if mm == m and d for x in LL]
        if len(L) >= 2:
            strs = ["".join(map(str, x)) for x in L]
            pairs = [(i, j) for i in range(len(L)) for j in range(i + 1, len(L))]
            ident = np.mean([strs[i] == strs[j] for i, j in pairs])
            n = min(len(x) for x in L)
            agree = np.mean([np.mean(L[i][:n] == L[j][:n]) for i, j in pairs])
            pref = np.mean([next((k for k in range(n) if L[i][k] != L[j][k]), n) for i, j in pairs])
            dup[m] = dict(calls=len(L), identical_pairs=float(ident), positional_agreement=float(agree),
                          mean_common_prefix=float(pref))
    # similarity across coded calls (different run codes), p = 0.5, same phrasing
    cross = {}
    for m in MODELS:
        for phr in ["plain", "rng"]:
            L = seqs.get((m, phr, 0.5, False), [])
            if len(L) < 2:
                continue
            n = min(len(x) for x in L)
            pairs = [(i, j) for i in range(len(L)) for j in range(i + 1, len(L))]
            agree = np.mean([np.mean(L[i][:n] == L[j][:n]) for i, j in pairs])
            pref = np.mean([next((k for k in range(n) if L[i][k] != L[j][k]), n) for i, j in pairs])
            first16 = pd.Series(["".join(map(str, x[:16])) for x in L]).value_counts()
            cross[f"{m}|{phr}"] = dict(calls=len(L), positional_agreement=float(agree),
                                       mean_common_prefix=float(pref),
                                       top_first16=first16.index[0], top_first16_count=int(first16.iloc[0]))
    out = dict(summary=summary, shrinkage=shrink, duplicates=dup, cross_call=cross)
    json.dump(out, open(RES / "bits.json", "w"), indent=1)
    return out, seqs


# ================================================================== RNG mode
def analyse_rng(bits_out, seqs):
    res = dict(one_bit=[], fair_coin={})
    fits = {}
    for s in bits_out["summary"]:
        fits[(s["model"], s["p"])] = fits.get((s["model"], s["p"]), []) + [s]
    for m in MODELS:
        for p in [0.05, 0.2, 0.5, 0.8]:
            L = seqs.get((m, "plain", p, False), []) + seqs.get((m, "rng", p, False), [])
            if not L:
                continue
            stream = np.concatenate(L)
            pi, rho = wf.fit_markov(stream)
            # rho pooled within calls
            xs = np.concatenate([x[:-1] for x in L]).astype(float)
            ys = np.concatenate([x[1:] for x in L]).astype(float)
            rho = float(np.corrcoef(xs, ys)[0, 1]) if xs.std() > 0 and ys.std() > 0 else 0.0
            for N in [10, 50, 200]:
                n = 2 * N
                w = len(stream) // n
                if w < 5:
                    continue
                X = stream[: w * n].reshape(w, n).sum(1)
                dp = X / n - p
                var = dp.var(ddof=1)
                bs = []
                for _ in range(NBOOT):
                    d = dp[rng.integers(0, w, w)]
                    v = d.var(ddof=1)
                    bs.append(wf.ne_from_var(p, v) / N if v > 0 else np.inf)
                res["one_bit"].append(dict(
                    model=m, p=p, N=N, windows=int(w), pi=float(pi), rho=rho, mean_dp=float(dp.mean()),
                    var_dp=float(var), var_wf=p * (1 - p) / n,
                    NeN=float(wf.ne_from_var(p, var) / N) if var > 0 else float("inf"), NeN_ci=ci(bs),
                    NeN_pred_markov=float(wf.ne_ratio_rng_bits(p, pi, rho, n)) if 0 < pi < 1 else float("nan")))
    # fair-coin scheme, multi-generation, N = 10, p0 = 0.5, until absorption or bits run out
    for m in MODELS:
        L = seqs.get((m, "plain", 0.5, False), []) + seqs.get((m, "rng", 0.5, False), [])
        if not L:
            continue
        stream = np.concatenate(L)
        N, twoN = 10, 20
        trajs, idx = [], 0
        try:
            while True:
                x = N
                tr = [x]
                while 0 < x < twoN:
                    d, idx = wf.bernoulli_from_fair_bits(stream, x / twoN, twoN, idx)
                    x = int(d.sum())
                    tr.append(x)
                trajs.append(tr)
        except IndexError:
            pass
        # surrogate: fitted Markov chain used the same way, many trajectories
        pi, rho = wf.fit_markov(stream)
        srng = np.random.default_rng(wf.SEED + 1)
        sur = []
        sb = wf.markov_bits(srng, 4_000_000, pi, rho)
        idx2 = 0
        for _ in range(3000):
            x, tr = N, [N]
            while 0 < x < twoN:
                d, idx2 = wf.bernoulli_from_fair_bits(sb, x / twoN, twoN, idx2)
                x = int(d.sum())
                tr.append(x)
            sur.append(tr)
        def stats(T):
            fixed = np.array([t[-1] == twoN for t in T])
            times = np.array([len(t) - 1 for t in T])
            num = sum(((np.diff(np.array(t)) / twoN) ** 2).sum() for t in T)
            den = sum((np.array(t[:-1]) / twoN * (1 - np.array(t[:-1]) / twoN)).sum() for t in T)
            return dict(n=len(T), fix=float(fixed.mean()), t_mean=float(times.mean()),
                        NeN=float(den / (2 * num) / N) if num > 0 else float("nan"))
        res["fair_coin"][m] = dict(bits=int(len(stream)), bits_used=int(idx), pi=float(pi), rho=float(rho),
                                   llm=stats(trajs), surrogate=stats(sur),
                                   wf_t_mean=float(wf.t_absorb(0.5, N)),
                                   example=trajs[:6])
    json.dump(res, open(RES / "rng_mode.json", "w"), indent=1)
    return res


# ============================================================== direct mode
def analyse_direct(calls):
    dc = [c for c in calls if c["kind"] == "direct"]
    rows, invalid = [], []
    for c in dc:
        r = c["response"] or {}
        cnt = r.get("counts")
        twoN = 2 * c["N"]
        ok = isinstance(cnt, list) and len(cnt) > 0
        if not ok:
            invalid.append(dict(id=c["id"], reason="no counts"))
            continue
        if len(cnt) != c["k"]:
            invalid.append(dict(id=c["id"], reason=f"length {len(cnt)} != {c['k']}"))
        for pos, x in enumerate(cnt):
            if not (0 <= x <= twoN):
                invalid.append(dict(id=c["id"], reason=f"value {x} out of range"))
                continue
            rows.append(dict(id=c["id"], model=c["model"], phrasing=c["phrasing"], N=c["N"], p=c["p"],
                             s=c["s"], i=c["i"], pos=pos, x=x, dup=c["id"].split("|")[1] == "direct-dup"))
    df = pd.DataFrame(rows)
    df.to_csv(RES / "direct_draws.csv", index=False)

    cells = []
    for key, g in df[~df.dup].groupby(["model", "phrasing", "N", "p", "s"]):
        m, phr, N, p, s = key
        twoN = 2 * N
        p0 = g.i.iloc[0] / twoN
        mexp = float(wf.p_sel(p0, s))
        y = g.x.values / twoN
        var = y.var(ddof=1)
        var_th = mexp * (1 - mexp) / twoN
        ids = g.id.unique()
        groups = [g[g.id == k].x.values / twoN for k in ids]
        bs = []
        for _ in range(NBOOT):
            pick = rng.integers(0, len(groups), len(groups))
            yy = np.concatenate([groups[k] for k in pick])
            bs.append(var_th / yy.var(ddof=1) if yy.var(ddof=1) > 0 else np.inf)
        within = np.mean([gg.var(ddof=1) for gg in groups if len(gg) > 1])
        between = np.var([gg.mean() for gg in groups], ddof=1) if len(groups) > 1 else float("nan")
        mean = float(y.mean())
        s_eff = (mean - p0) / (p0 * (1 - mean)) if 0 < mean < 1 else float("nan")
        # round-number preference: share of counts that are multiples of 5 vs binomial expectation
        xs = g.x.values
        k = np.arange(twoN + 1)
        from scipy.stats import binom
        pmf = binom.pmf(k, twoN, mexp)
        mult5_exp = float(pmf[k % 5 == 0].sum())
        # first draw vs later draws
        first = g[g.pos == 0].x.values / twoN
        later = g[g.pos > 0].x.values / twoN
        # within-call lag-1 autocorrelation of successive draws
        ac = []
        for gg in groups:
            if len(gg) > 3 and gg.std() > 0:
                ac.append(np.corrcoef(gg[:-1], gg[1:])[0, 1])
        # chi-square-free goodness: fraction of draws within +-1 sd of mean vs binomial
        sd = math.sqrt(twoN * mexp * (1 - mexp))
        within1 = float(np.mean(np.abs(xs - twoN * mexp) <= sd))
        within1_exp = float(pmf[np.abs(k - twoN * mexp) <= sd].sum())
        cells.append(dict(
            model=m, phrasing=phr, N=int(N), p=float(p), s=float(s), p0=float(p0), calls=len(groups),
            draws=int(len(y)), mean=mean, m_exp=mexp, bias=mean - mexp, var=float(var), var_th=float(var_th),
            phi=float(var / var_th), NeN=float(var_th / var), NeN_ci=ci(bs),
            var_within=float(within), var_between=float(between),
            s_eff=float(s_eff) if s > 0 else None,
            mult5=float(np.mean(xs % 5 == 0)), mult5_exp=mult5_exp,
            exact_mean=float(np.mean(xs == round(twoN * mexp))), exact_mean_exp=float(pmf[int(round(twoN * mexp))]),
            phi_first=float(first.var(ddof=1) / var_th) if len(first) > 1 else float("nan"),
            phi_later=float(later.var(ddof=1) / var_th),
            lag1=float(np.mean(ac)) if ac else float("nan"),
            within1sd=within1, within1sd_exp=within1_exp,
            n_unique_seqs=len({tuple(gg) for gg in groups}),
        ))
    cdf = pd.DataFrame(cells)
    cdf.to_csv(RES / "direct_cells.csv", index=False)

    # per model x N: Ne/N from mean phi over p (neutral, plain + wf phrasing), with cluster bootstrap
    summ = []
    for m in MODELS:
        for N in [10, 50, 200]:
            for phrs, label in [(["plain", "wf"], "plain+wf"), (["plain"], "plain"), (["wf"], "wf"), (["rng"], "rng")]:
                sub = df[(~df.dup) & (df.model == m) & (df.N == N) & (df.s == 0) & (df.phrasing.isin(phrs))]
                if sub.empty:
                    continue
                cellg = {}
                for (p, phr), g in sub.groupby(["p", "phrasing"]):
                    cellg[(p, phr)] = [g[g.id == k].x.values / (2 * N) for k in g.id.unique()]

                def mean_phi(cg):
                    phis = []
                    for (p, phr), groups in cg.items():
                        yy = np.concatenate(groups)
                        vt = p * (1 - p) / (2 * N)
                        phis.append(yy.var(ddof=1) / vt)
                    return float(np.mean(phis))
                phi = mean_phi(cellg)
                bs = []
                for _ in range(500):
                    cg = {k: [v[i] for i in rng.integers(0, len(v), len(v))] for k, v in cellg.items()}
                    bs.append(1 / mean_phi(cg))
                summ.append(dict(model=m, N=N, phrasing=label, cells=len(cellg), phi=phi, NeN=1 / phi, NeN_ci=ci(bs)))
    # selection: effective s, pooled
    sel = []
    for m in MODELS:
        sub = cdf[(cdf.model == m) & (cdf.s > 0)]
        neu = cdf[(cdf.model == m) & (cdf.s == 0) & (cdf.phrasing == "wf")]
        for N in [10, 50, 200]:
            a = sub[sub.N == N]
            b = neu[neu.N == N]
            if a.empty:
                continue
            sel.append(dict(model=m, N=N, mean_shift_sel=float((a["mean"] - a.p0).mean()),
                            mean_shift_neutral=float((b["mean"] - b.p0).mean()),
                            expected_shift=float((a.m_exp - a.p0).mean()),
                            s_eff_mean=float(a.s_eff.mean())))
    # determinism
    dup = {}
    for m in MODELS:
        g = df[df.dup & (df.model == m)]
        seqsd = [tuple(g[g.id == k].x.values) for k in g.id.unique()]
        if len(seqsd) > 1:
            pairs = [(i, j) for i in range(len(seqsd)) for j in range(i + 1, len(seqsd))]
            dup[m] = dict(calls=len(seqsd), identical_pairs=float(np.mean([seqsd[i] == seqsd[j] for i, j in pairs])),
                          positional_agreement=float(np.mean([np.mean(np.array(seqsd[i][:20]) == np.array(seqsd[j][:20]))
                                                              for i, j in pairs])))
    # cross-call similarity for coded replicates: identical first draws
    fd = df[(~df.dup) & (df.pos < 3)].groupby("id").x.apply(tuple)
    meta = df[~df.dup].groupby("id").first()
    same3 = []
    for key, g in meta.groupby(["model", "phrasing", "N", "p", "s"]):
        t = [fd[i] for i in g.index]
        if len(t) > 1:
            pairs = [(i, j) for i in range(len(t)) for j in range(i + 1, len(t))]
            same3.append(np.mean([t[i] == t[j] for i, j in pairs]))
    out = dict(cells=cells, summary=summ, selection=sel, invalid=invalid, duplicates=dup,
               replicate_first3_identical=float(np.mean(same3)) if same3 else None,
               n_calls=len(dc), n_draws=int(len(df)))
    json.dump(out, open(RES / "direct.json", "w"), indent=1, default=float)
    return out


# ============================================================ trajectories
def traj_stats(T, twoN):
    """Statistics of a set of trajectories (lists of counts)."""
    num = den = 0.0
    ac_x, ac_y, rev, nrev = [], [], 0, 0
    for t in T:
        t = np.asarray(t, float)
        p = t / twoN
        # only polymorphic starting points
        poly = (t[:-1] > 0) & (t[:-1] < twoN)
        dp = np.diff(p)
        num += (dp[poly] ** 2).sum()
        den += (p[:-1][poly] * (1 - p[:-1][poly])).sum()
        d = dp[poly]
        if len(d) > 1:
            ac_x += d[:-1].tolist()
            ac_y += d[1:].tolist()
            nz = d[d != 0]
            if len(nz) > 1:
                rev += int(np.sum(np.sign(nz[1:]) != np.sign(nz[:-1])))
                nrev += len(nz) - 1
    N = twoN / 2
    return dict(NeN=float(den / (2 * num) / N) if num > 0 else float("nan"),
                lag1=float(np.corrcoef(ac_x, ac_y)[0, 1]) if len(ac_x) > 2 else float("nan"),
                reversal=float(rev / nrev) if nrev else float("nan"), transitions=len(ac_x))


def numpy_reference(N, p0, G, s, reps=20000, seed=0):
    r = np.random.default_rng(wf.SEED + seed)
    return wf.wf_trajectories(r, N, p0, G, reps, s=s)


def summarise_set(T, twoN, G, p0, s, label):
    T = [list(t)[: G + 1] for t in T]
    # pad absorbed early (whole-trajectory lists should already be full length)
    arr = np.array([t + [t[-1]] * (G + 1 - len(t)) for t in T], float)
    p = arr / twoN
    H = (2 * p * (1 - p)).mean(0)
    fixed = float(np.mean(arr[:, -1] == twoN))
    lost = float(np.mean(arr[:, -1] == 0))
    absorbed = (arr == 0) | (arr == twoN)
    t_abs = [int(np.argmax(a)) if a.any() else None for a in absorbed]
    ta = [x for x in t_abs if x is not None]
    return dict(label=label, n=len(T), H=H.tolist(), fix=fixed, lost=lost, poly=1 - fixed - lost,
                t_abs_mean=float(np.mean(ta)) if ta else float("nan"), **traj_stats(T, twoN))


def analyse_trajectories(calls):
    out = dict(memoryless=[], whole=[], numpy=[], validity={})
    # ---- memoryless
    for r in load_memoryless("full_"):
        N, s, model = r["N"], r["s"], r["model"]
        twoN = 2 * N
        traj = np.array(r["traj"]).T.tolist()  # populations x generations
        G = 40 if N == 10 else 30
        init = [t[0] for t in traj]
        for i0 in sorted(set(init)):
            T = [t for t in traj if t[0] == i0]
            st = summarise_set(T, twoN, G, i0 / twoN, s, "memoryless")
            st.update(model=model, N=N, s=s, p0=i0 / twoN, events=len(r["events"]),
                      gens_run=len(r["traj"]) - 1)
            out["memoryless"].append(st)
    # ---- whole trajectories
    tc = [c for c in calls if c["kind"] == "traj"]
    bad = defaultdict(int)
    groups = defaultdict(list)
    for c in tc:
        r = c["response"] or {}
        T = r.get("trajectories") or []
        twoN = 2 * c["N"]
        for t in T:
            if not t:
                bad["empty"] += 1
                continue
            if len(t) != c["G"] + 1:
                bad["wrong_length"] += 1
            if t[0] != c["i"]:
                bad["wrong_start"] += 1
            if any((x < 0 or x > twoN) for x in t):
                bad["out_of_range"] += 1
                t = [min(max(x, 0), twoN) for x in t]
            # absorbing boundary respected?
            arr = np.array(t)
            hit = np.flatnonzero((arr == 0) | (arr == twoN))
            if len(hit) and np.any(arr[hit[0]:] != arr[hit[0]]):
                bad["left_boundary"] += 1
            groups[(c["model"], c["N"], c["p"], c["s"])].append(t[: c["G"] + 1])
        if len(T) != c["k"]:
            bad["wrong_number"] += 1
    out["validity"]["whole"] = dict(bad)
    for (m, N, p, s), T in sorted(groups.items()):
        G = 40 if N == 10 else 30
        i0 = int(round(2 * N * p))
        st = summarise_set(T, 2 * N, G, p, s, "whole")
        st.update(model=m, N=N, s=s, p0=i0 / (2 * N))
        out["whole"].append(st)
    # ---- numpy references for every design point
    seen = set()
    for st in out["memoryless"] + out["whole"]:
        key = (st["N"], st["p0"], st["s"])
        if key in seen:
            continue
        seen.add(key)
        G = 40 if st["N"] == 10 else 30
        arr = numpy_reference(st["N"], st["p0"], G, st["s"], seed=len(seen))
        ref = summarise_set(arr.tolist()[:5000], 2 * st["N"], G, st["p0"], st["s"], "numpy")
        ref.update(N=st["N"], s=st["s"], p0=st["p0"], model="numpy",
                   u_theory=float(wf.kimura_u(st["p0"], st["N"], st["s"])),
                   H_theory=(2 * st["p0"] * (1 - st["p0"]) * (1 - 1 / (2 * st["N"])) ** np.arange(G + 1)).tolist())
        out["numpy"].append(ref)
    # memoryless call validity
    raw = [r for r in load_raw_calls() if r["id"] and r["id"].startswith("full|ml|")]
    out["validity"]["memoryless_calls"] = len(raw)
    out["validity"]["memoryless_retries"] = sum(1 for r in raw if r["id"].endswith("|a1"))
    json.dump(out, open(RES / "trajectories.json", "w"), indent=1)
    return out


# ================================================================ overview
def call_overview():
    raw = load_raw_calls()
    import datetime as dt
    f = lambda s: dt.datetime.fromisoformat(s.replace("Z", "+00:00"))
    rows = []
    for r in raw:
        if not r["id"]:
            continue
        phase = r["id"].split("|")[0]
        kind = r["id"].split("|")[1]
        rows.append(dict(phase=phase, kind=kind, model=r["model"], served=r["served_model"],
                         secs=(f(r["t_end"]) - f(r["t_start"])).total_seconds(),
                         valid=bool(r["response"]), other_tools=bool(set(r["tools_used"]) - {"StructuredOutput"}),
                         ctx=r["usage"]["input"] + r["usage"]["cache_read"] + r["usage"]["cache_creation"],
                         out=r["usage"]["output"]))
    df = pd.DataFrame(rows)
    ov = dict(total_calls=int(len(df)), by_phase=df.groupby("phase").size().to_dict(),
              by_kind={f"{a}|{b}": int(v) for (a, b), v in df.groupby(["phase", "kind"]).size().items()},
              by_model=df.groupby("model").size().to_dict(),
              served_models=df.groupby("model").served.unique().apply(list).to_dict(),
              valid=int(df.valid.sum()), other_tools=int(df.other_tools.sum()),
              median_secs=df.groupby("model").secs.median().to_dict(),
              total_ctx_tokens=int(df.ctx.sum()), total_out_tokens=int(df.out.sum()),
              mean_ctx_tokens=df.groupby("model").ctx.mean().to_dict())
    json.dump(ov, open(RES / "calls_overview.json", "w"), indent=1, default=str)
    return ov


if __name__ == "__main__":
    calls = load_calls("full|")
    ov = call_overview()
    print("calls:", ov["total_calls"], ov["by_phase"])
    bits_out, seqs = analyse_bits(calls)
    print("bits done")
    analyse_rng(bits_out, seqs)
    print("rng done")
    analyse_direct(calls)
    print("direct done")
    analyse_trajectories(calls)
    print("trajectories done")
