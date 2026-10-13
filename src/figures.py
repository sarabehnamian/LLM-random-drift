"""Make all figures from results/*.json. Usage: python src/figures.py"""
import json
import sys
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402
import numpy as np  # noqa: E402

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "src"))
import wf  # noqa: E402

RES, FIG = ROOT / "results", ROOT / "figures"
FIG.mkdir(exist_ok=True)
MODELS = ["haiku", "sonnet", "opus"]
COL = {"haiku": "#E69F00", "sonnet": "#009E73", "opus": "#0072B2"}  # Okabe-Ito, validated
MRK = {"haiku": "o", "sonnet": "s", "opus": "D"}
THEORY, NUMPY = "#222222", "#8c8c8c"
plt.rcParams.update({
    "figure.dpi": 200, "savefig.dpi": 200, "font.size": 9, "axes.titlesize": 9.5,
    "axes.labelsize": 9, "legend.fontsize": 8, "axes.spines.top": False, "axes.spines.right": False,
    "axes.grid": True, "grid.color": "#e6e6e6", "grid.linewidth": 0.6, "lines.linewidth": 1.6,
    "font.family": "DejaVu Sans", "axes.axisbelow": True,
})


def load(name):
    return json.load(open(RES / name))


def save(fig, name):
    fig.tight_layout()
    fig.savefig(FIG / f"{name}.png", bbox_inches="tight")
    fig.savefig(FIG / f"{name}.pdf", bbox_inches="tight")
    plt.close(fig)
    print("wrote", name)


# ---------------------------------------------------------------- fig 1
def fig_shrinkage():
    b = load("bits.json")
    fig, axes = plt.subplots(1, 2, figsize=(7.2, 3.2))
    ax = axes[0]
    ax.plot([0, 1], [0, 1], color=THEORY, lw=1, ls="--", label="ideal")
    for m in MODELS:
        for phr, fill in [("plain", True), ("rng", False)]:
            rows = [s for s in b["summary"] if s["model"] == m and s["phrasing"] == phr]
            p = [s["p"] for s in rows]
            f = [s["freq"] for s in rows]
            lo = [s["freq"] - s["freq_ci"][0] for s in rows]
            hi = [s["freq_ci"][1] - s["freq"] for s in rows]
            off = {"haiku": -0.012, "sonnet": 0, "opus": 0.012}[m] + (0.004 if phr == "rng" else -0.004)
            ax.errorbar(np.array(p) + off, f, yerr=[lo, hi], fmt=MRK[m], color=COL[m], ms=5,
                        mfc=COL[m] if fill else "white", capsize=0, lw=1,
                        label=f"{m} ({'plain' if phr == 'plain' else 'RNG'} prompt)")
    ax.set_xlabel("requested P(1)")
    ax.set_ylabel("produced frequency of 1s")
    ax.set_title("a  Produced vs requested probability")
    ax.legend(frameon=False, fontsize=6.5, loc="upper left")
    ax = axes[1]
    xs = np.linspace(-3.2, 1.6, 50)
    ax.plot(xs, xs, color=THEORY, lw=1, ls="--", label="ideal (slope 1)")
    for m in MODELS:
        sh = b["shrinkage"][m]
        lp = np.log(np.array(sh["p"]) / (1 - np.array(sh["p"])))
        f = np.clip(np.array(sh["freq"]), 1e-3, 1 - 1e-3)
        ax.plot(lp, np.log(f / (1 - f)), MRK[m], color=COL[m], ms=5)
        ax.plot(xs, sh["b0"] + sh["b1"] * xs, color=COL[m], lw=1.2,
                label=f"{m}: slope {sh['b1']:.2f} [{sh['b1_ci'][0]:.2f}, {sh['b1_ci'][1]:.2f}]")
    ax.set_xlabel("logit requested p")
    ax.set_ylabel("logit produced frequency")
    ax.set_title("b  Logit fit (slope > 1: exaggeration)")
    ax.legend(frameon=False, fontsize=6.5, loc="upper left")
    save(fig, "fig1_shrinkage")


# ---------------------------------------------------------------- fig 2
def fig_runs():
    b = load("bits.json")
    fig, axes = plt.subplots(1, 3, figsize=(7.4, 2.7))
    cases = [(0.5, "run1_hist", "runs of 1s, p = 0.5"), (0.2, "run0_hist", "runs of 0s, p = 0.2"),
             (0.8, "run1_hist", "runs of 1s, p = 0.8")]
    for ax, (p, key, title) in zip(axes, cases):
        a = p if key == "run1_hist" else 1 - p  # continuation probability under iid
        L = np.arange(1, 16)
        geo = (1 - a) * a ** (L - 1)
        ax.plot(L, geo, color=THEORY, lw=1.2, ls="--", label="geometric (iid)")
        for m in MODELS:
            h = np.zeros(15)
            for s in b["summary"]:
                if s["model"] == m and s["p"] == p:
                    hh = np.array(s[key][:15], float)
                    h[: len(hh)] += hh
            if h.sum() == 0:
                continue
            fr = h / h.sum()
            ok = fr > 0
            ax.plot(L[ok], fr[ok], MRK[m] + "-", color=COL[m], ms=3.5, lw=1, label=m)
        ax.set_yscale("log")
        ax.set_ylim(1e-4, 1.2)
        ax.set_xlabel("run length")
        ax.set_title(title)
    axes[0].set_ylabel("fraction of runs")
    axes[0].legend(frameon=False, fontsize=7)
    save(fig, "fig2_runs")


# ---------------------------------------------------------------- fig 3
def fig_ne():
    d = load("direct.json")
    r = load("rng_mode.json")
    fig, axes = plt.subplots(1, 3, figsize=(7.6, 2.9), gridspec_kw=dict(width_ratios=[1, 1, 1]))
    ax = axes[0]
    lim = [3e-4, 3e-2]
    ax.plot(lim, lim, color=THEORY, lw=1, ls="--", label="WF theory")
    for m in MODELS:
        c = [x for x in d["cells"] if x["model"] == m]
        ax.plot([x["var_th"] for x in c], [x["var"] for x in c], MRK[m], color=COL[m], ms=3.5,
                alpha=0.85, label=m)
    ax.set_xscale("log")
    ax.set_yscale("log")
    ax.set_xlabel(r"theory $m(1-m)/2N$")
    ax.set_ylabel(r"observed Var($\Delta p$)")
    ax.set_title("a  Direct mode, every cell")
    ax.legend(frameon=False, fontsize=7)
    ax = axes[1]
    Ns = [10, 50, 200]
    for k, m in enumerate(MODELS):
        rows = {x["N"]: x for x in d["summary"] if x["model"] == m and x["phrasing"] == "plain+wf"}
        xs = np.arange(3) + (k - 1) * 0.22
        y = [rows[N]["NeN"] if N in rows else np.nan for N in Ns]
        lo = [rows[N]["NeN"] - rows[N]["NeN_ci"][0] if N in rows else 0 for N in Ns]
        hi = [rows[N]["NeN_ci"][1] - rows[N]["NeN"] if N in rows else 0 for N in Ns]
        ax.errorbar(xs, y, yerr=[lo, hi], fmt=MRK[m], color=COL[m], ms=5, capsize=2, lw=1, label=m)
    ax.axhline(1, color=THEORY, lw=1, ls="--")
    ax.set_xticks(range(3), [f"N = {N}" for N in Ns])
    ax.set_ylabel(r"$N_e/N$")
    ax.set_ylim(0.6, 2.2)
    ax.set_title("b  Direct mode (neutral)")
    ax = axes[2]
    for k, m in enumerate(MODELS):
        rows = [x for x in r["one_bit"] if x["model"] == m and x["N"] == 10]
        ps = [x["p"] for x in rows]
        xs = np.arange(len(ps)) + (k - 1) * 0.22
        y = [x["NeN"] for x in rows]
        lo = [max(x["NeN"] - x["NeN_ci"][0], 0) for x in rows]
        hi = [max(x["NeN_ci"][1] - x["NeN"], 0) for x in rows]
        ax.errorbar(xs, y, yerr=[lo, hi], fmt=MRK[m], color=COL[m], ms=5, capsize=2, lw=1, label=m)
        ax.plot(xs, [x["NeN_pred_markov"] for x in rows], "_", color=COL[m], ms=11, mew=2)
        ax.plot(xs, [x["NeN_pred_acf"] for x in rows], "x", color=COL[m], ms=6, mew=1.2)
    ax.axhline(1, color=THEORY, lw=1, ls="--")
    ax.set_xticks(range(4), ["0.05", "0.2", "0.5", "0.8"])
    ax.set_xlabel("requested p")
    ax.set_ylabel(r"$N_e/N$")
    ax.set_yscale("log")
    ax.set_title("c  RNG mode, N = 10")
    save(fig, "fig3_ne")


# ---------------------------------------------------------------- fig 4
def fig_het():
    t = load("trajectories.json")
    fig, axes = plt.subplots(1, 3, figsize=(7.6, 2.8), sharey=False)
    panels = [(10, "memoryless", "a  N = 10, fresh call per generation"),
              (10, "whole", "b  N = 10, whole trajectory per call"),
              (50, "memoryless", "c  N = 50, fresh call per generation")]
    for ax, (N, mode, title) in zip(axes, panels):
        ref = next(x for x in t["numpy"] if x["N"] == N and x["p0"] == 0.5 and x["s"] == 0)
        G = len(ref["H"]) - 1
        g = np.arange(G + 1)
        ax.plot(g, ref["H_theory"], color=THEORY, lw=1.2, ls="--", label=r"theory $(1-1/2N)^t$")
        ax.plot(g, ref["H"], color=NUMPY, lw=1.2, label="numpy WF")
        for m in MODELS:
            rows = [x for x in t[mode] if x["model"] == m and x["N"] == N and x["p0"] == 0.5 and x["s"] == 0]
            if rows:
                ax.plot(g[: len(rows[0]["H"])], rows[0]["H"], color=COL[m], lw=1.4,
                        label=f"{m} (n={rows[0]['n']})")
        ax.set_xlabel("generation")
        ax.set_title(title)
        ax.set_ylim(0, 0.55)
        ax.legend(frameon=False, fontsize=6.5)
    axes[0].set_ylabel("mean heterozygosity 2p(1-p)")
    save(fig, "fig4_heterozygosity")


# ---------------------------------------------------------------- fig 5
def fig_fix():
    t = load("trajectories.json")
    fig, axes = plt.subplots(1, 2, figsize=(7.0, 3.0), sharey=True)
    for ax, s in zip(axes, [0.0, 0.05]):
        x = np.linspace(0, 1, 100)
        ax.plot(x, wf.kimura_u(x, 10, s), color=THEORY, lw=1.2, ls="--",
                label="theory (eventual)" if s == 0 else "Kimura, N = 10 (eventual)")
        refs = sorted([r for r in t["numpy"] if r["N"] == 10 and r["s"] == s], key=lambda r: r["p0"])
        ax.plot([r["p0"] for r in refs], [r["fix"] for r in refs], "x", color=NUMPY, ms=7, mew=1.5,
                label="numpy WF, fixed by gen 40")
        for mode, fill, off in [("memoryless", True, -0.012), ("whole", False, 0.012)]:
            for k, m in enumerate(MODELS):
                rows = sorted([r for r in t[mode] if r["model"] == m and r["N"] == 10 and r["s"] == s],
                              key=lambda r: r["p0"])
                if not rows:
                    continue
                p0 = np.array([r["p0"] for r in rows]) + off + (k - 1) * 0.008
                fx = np.array([r["fix"] for r in rows])
                n = np.array([r["n"] for r in rows])
                se = np.sqrt(np.maximum(fx * (1 - fx), 0.25 / n) / n)
                ax.errorbar(p0, fx, yerr=se, fmt=MRK[m], color=COL[m], mfc=COL[m] if fill else "white",
                            ms=4.5, lw=0.8, capsize=0,
                            label=f"{m} {'fresh call/gen' if mode == 'memoryless' else 'whole traj.'}")
        ax.set_xlabel("starting frequency $p_0$")
        ax.set_title(f"{'a' if s == 0 else 'b'}  N = 10, s = {s:g}")
    axes[0].set_ylabel("fraction fixed by generation 40")
    axes[1].legend(frameon=False, fontsize=6, loc="lower right")
    save(fig, "fig5_fixation")


# ---------------------------------------------------------------- fig 6
def fig_traj():
    sys.path.insert(0, str(ROOT / "src"))
    from data import load_calls, load_memoryless
    calls = load_calls("full|")
    mem = {r["tag"]: r for r in load_memoryless("full_")}
    fig, axes = plt.subplots(3, 3, figsize=(7.4, 6.0), sharex=True, sharey=True)
    rngl = np.random.default_rng(wf.SEED + 7)
    for i, m in enumerate(MODELS):
        np_tr = wf.wf_trajectories(rngl, 10, 0.5, 40, 4)
        ml = mem.get(f"full|ml|{m}|N10|s0.0")
        if ml:
            tr = np.array(ml["traj"]).T
            sel = [k for k in range(len(tr)) if tr[k][0] == 10][:4]
            for k in sel:
                axes[i, 0].plot(tr[k] / 20, color=COL[m], lw=1)
        wc = [c for c in calls if c["kind"] == "traj" and c["model"] == m and c["N"] == 10 and c["p"] == 0.5
              and c["s"] == 0.0]
        if wc:
            for t in wc[0]["response"]["trajectories"][:4]:
                axes[i, 1].plot(np.array(t) / 20, color=COL[m], lw=1)
        for t in np_tr:
            axes[i, 2].plot(t / 20, color=NUMPY, lw=1)
        axes[i, 0].set_ylabel(f"{m}\nfrequency of A")
    axes[0, 0].set_title("fresh call per generation")
    axes[0, 1].set_title("whole trajectory in one call")
    axes[0, 2].set_title("numpy Wright-Fisher")
    for ax in axes[-1]:
        ax.set_xlabel("generation")
    save(fig, "fig6_trajectories")


# ---------------------------------------------------------------- fig 7
def fig_dependence():
    b = load("bits.json")
    d = load("direct.json")
    t = load("trajectories.json")
    fig, axes = plt.subplots(1, 3, figsize=(7.6, 2.8))
    ax = axes[0]
    for m in MODELS:
        rows = [s for s in b["summary"] if s["model"] == m and s["p"] == 0.5]
        lags = np.arange(1, 11)
        r = np.mean([[s["rho_lags"][str(l)] for l in lags] for s in rows], axis=0)
        ax.plot(lags, r, MRK[m] + "-", color=COL[m], ms=4, lw=1.2, label=m)
    ax.axhline(0, color=THEORY, lw=1, ls="--")
    ax.set_xlabel("lag")
    ax.set_ylabel("autocorrelation")
    ax.set_title("a  Bits, p = 0.5")
    ax.legend(frameon=False, fontsize=7)
    ax = axes[1]
    for k, m in enumerate(MODELS):
        c = [x for x in d["cells"] if x["model"] == m and np.isfinite(x["lag1"])]
        ax.boxplot([x["lag1"] for x in c], positions=[k], widths=0.5, patch_artist=True,
                   boxprops=dict(facecolor=COL[m], alpha=0.5), medianprops=dict(color="black"),
                   flierprops=dict(markersize=3))
    ax.axhline(0, color=THEORY, lw=1, ls="--")
    ax.set_xticks(range(3), MODELS)
    ax.set_ylabel("lag-1 corr. of successive draws")
    ax.set_title("b  Draws within one call")
    ax = axes[2]
    w = 0.25
    labs = ["numpy", "fresh call", "whole traj."]
    for k, m in enumerate(MODELS):
        ml = [x for x in t["memoryless"] if x["model"] == m and x["N"] == 10 and x["s"] == 0 and x["p0"] == 0.5]
        wh = [x for x in t["whole"] if x["model"] == m and x["N"] == 10 and x["s"] == 0 and x["p0"] == 0.5]
        vals = [ml[0]["lag1"] if ml else np.nan, wh[0]["lag1"] if wh else np.nan]
        ax.bar(np.arange(1, 3) + (k - 1) * w, vals, w * 0.92, color=COL[m], label=m)
    ref = next(x for x in t["numpy"] if x["N"] == 10 and x["p0"] == 0.5 and x["s"] == 0)
    ax.bar([0], [ref["lag1"]], w * 0.92, color=NUMPY)
    ax.axhline(0, color=THEORY, lw=1)
    ax.set_xticks(range(3), labs)
    ax.set_ylabel(r"lag-1 corr. of $\Delta p$")
    ax.set_title("c  Trajectories, N = 10, $p_0$ = 0.5")
    save(fig, "fig7_dependence")


if __name__ == "__main__":
    fig_shrinkage()
    fig_runs()
    fig_ne()
    fig_het()
    fig_fix()
    fig_traj()
    fig_dependence()


# ---------------------------------------------------------------- fig 8
def fig_ne_modes():
    d = load("direct.json")
    t = load("trajectories.json")
    r = load("rng_mode.json")
    labels, vals = [], {m: [] for m in MODELS}
    for N in [10, 50, 200]:
        labels.append(f"direct\nN={N}")
        for m in MODELS:
            row = next((x for x in d["summary"] if x["model"] == m and x["N"] == N and x["phrasing"] == "plain+wf"), None)
            vals[m].append(row["NeN"] if row else np.nan)
    for mode, lab in [("memoryless", "fresh call\n/gen"), ("whole", "whole\ntraj.")]:
        for N in [10, 50]:
            labels.append(f"{lab}\nN={N}")
            for m in MODELS:
                row = next((x for x in t[mode] if x["model"] == m and x["N"] == N and x["s"] == 0 and x["p0"] == 0.5), None)
                vals[m].append(row["NeN"] if row else np.nan)
    labels.append("RNG mode\nN=10, p=0.5")
    for m in MODELS:
        row = next(x for x in r["one_bit"] if x["model"] == m and x["N"] == 10 and x["p"] == 0.5)
        vals[m].append(row["NeN"])
    fig, ax = plt.subplots(figsize=(7.4, 3.0))
    x = np.arange(len(labels))
    for k, m in enumerate(MODELS):
        ax.plot(x + (k - 1) * 0.18, vals[m], MRK[m], color=COL[m], ms=6, label=m, ls="none")
    ax.axhline(1, color=THEORY, lw=1, ls="--", label="exact WF")
    ax.set_yscale("log")
    ax.set_yticks([0.5, 1, 2, 4, 8, 16], ["0.5", "1", "2", "4", "8", "16"])
    ax.set_xticks(x, labels, fontsize=7)
    ax.set_ylabel(r"$N_e/N$  (> 1: drift too slow)")
    ax.legend(frameon=False, ncol=4, fontsize=7.5, loc="upper left")
    save(fig, "fig8_ne_by_mode")


if __name__ == "__main__":
    fig_ne_modes()
