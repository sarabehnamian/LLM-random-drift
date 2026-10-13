"""Turn results/*.json into LaTeX macros (paper/numbers.tex) and tables (paper/tables/).

Every number quoted in the manuscript comes from here.
"""
import json
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parents[1]
RES = ROOT / "results"
PAP = ROOT / "paper"
(PAP / "tables").mkdir(parents=True, exist_ok=True)
MODELS = ["haiku", "sonnet", "opus"]
CAP = {"haiku": "Haiku", "sonnet": "Sonnet", "opus": "Opus"}

L = lambda n: json.load(open(RES / n))
ov, bits, rng_, dr, tr, th = (L("calls_overview.json"), L("bits.json"), L("rng_mode.json"), L("direct.json"),
                              L("trajectories.json"), L("theory_checks.json"))
macros = {}


def mac(name, val, fmt="{:.2f}"):
    if isinstance(val, str):
        macros[name] = val
    elif val is None or (isinstance(val, float) and not np.isfinite(val)):
        macros[name] = "--"
    else:
        macros[name] = fmt.format(val)


# ------------------------------------------------------------- calls
mac("nCalls", ov["total_calls"], "{:,}")
mac("nPilot", ov["by_phase"]["pilot"], "{:d}")
mac("nFull", ov["by_phase"]["full"], "{:,}")
for k, v in ov["by_kind"].items():
    ph, kind = k.split("|")
    mac("n" + ph.capitalize() + kind.replace("-", "").capitalize(), v, "{:d}")
for m in MODELS:
    mac("nCalls" + CAP[m], ov["by_model"][m], "{:d}")
    mac("secs" + CAP[m], ov["median_secs"][m], "{:.1f}")
mac("nValid", ov["valid"], "{:,}")
mac("nOtherTools", ov["other_tools"], "{:d}")
mac("ctxTokensM", ov["total_ctx_tokens"] / 1e6, "{:.0f}")

# ------------------------------------------------------------- bits
def bsum(m, p):
    rows = [s for s in bits["summary"] if s["model"] == m and s["p"] == p]
    w = np.array([s["bits"] for s in rows], float)
    agg = lambda k: float(np.sum([s[k] * s["bits"] for s in rows]) / w.sum())
    return rows, agg


tab = []
for m in MODELS:
    rows, agg = bsum(m, 0.5)
    sh = bits["shrinkage"][m]
    vals = dict(freq=agg("freq"), alt=agg("alt"), rho=agg("rho1"), run=agg("mean_run1"),
                maxrun=max(max(s["max_run1"], s["max_run0"]) for s in rows), H=agg("entropy_rate"))
    for k, v in vals.items():
        mac(f"bits{CAP[m]}{k.capitalize()}", v, "{:d}" if k == "maxrun" else ("{:.3f}" if k in ("freq", "alt", "H") else "{:.2f}"))
    mac(f"slope{CAP[m]}", sh["b1"])
    mac(f"slope{CAP[m]}Lo", sh["b1_ci"][0])
    mac(f"slope{CAP[m]}Hi", sh["b1_ci"][1])
    for p, nm in [(0.05, "Five"), (0.2, "Twenty"), (0.8, "Eighty")]:
        mac(f"freq{CAP[m]}{nm}", sh["freq"][sh["p"].index(p)], "{:.3f}")
    allrows = [s for s in bits["summary"] if s["model"] == m]
    mac(f"lenMin{CAP[m]}", min(s["len_min"] for s in allrows), "{:d}")
    mac(f"lenMax{CAP[m]}", max(s["len_max"] for s in allrows), "{:d}")
    mac(f"lenExact{CAP[m]}", 100 * np.mean([s["len_exact"] for s in allrows]), "{:.0f}")
    lags4 = np.mean([s["rho_lags"]["4"] for s in rows])
    lags3 = np.mean([s["rho_lags"]["3"] for s in rows])
    mac(f"rhoFour{CAP[m]}", lags4)
    mac(f"rhoThree{CAP[m]}", lags3)
    c = [bits["cross_call"][f"{m}|{phr}"] for phr in ["plain", "rng"]]
    mac(f"prefix{CAP[m]}", np.mean([x["mean_common_prefix"] for x in c]), "{:.1f}")
    mac(f"topFirst{CAP[m]}", max(x["top_first16_count"] for x in c), "{:d}")
    d = bits["duplicates"].get(m, {})
    mac(f"dupPrefix{CAP[m]}", d.get("mean_common_prefix"), "{:.1f}")
    tab.append(f"{CAP[m]} & {vals['freq']:.3f} & {vals['alt']:.3f} & {vals['rho']:+.2f} & {vals['run']:.2f} & "
               f"{vals['maxrun']:d} & {vals['H']:.3f} & {sh['b1']:.2f} [{sh['b1_ci'][0]:.2f}, {sh['b1_ci'][1]:.2f}] \\\\")
# iid reference for 300-bit sequences, longest run (simulated)
r = np.random.default_rng(1)
mx = []
for _ in range(4000):
    b = r.integers(0, 2, 300)
    ch = np.flatnonzero(np.diff(b)) + 1
    mx.append(np.max(np.diff(np.r_[0, ch, 300])))
mac("iidMaxRun", float(np.median(mx)), "{:.0f}")
(PAP / "tables" / "bits.tex").write_text(
    "\\begin{tabular}{lccccccc}\n\\toprule\n"
    "Model & freq. of 1s & alternation & $\\hat\\rho_1$ & mean run & longest run & entropy rate & logit slope $\\beta_1$ [95\\% CI] \\\\\n\\midrule\n"
    f"iid ideal & 0.500 & 0.500 & 0 & 2.00 & {np.median(mx):.0f} (median) & 1.000 & 1 \\\\\n"
    + "\n".join(tab) + "\n\\bottomrule\n\\end{tabular}\n")

# ------------------------------------------------------------- RNG mode
for m in MODELS:
    for p, nm in [(0.5, "Half"), (0.2, "Twenty"), (0.05, "Five")]:
        row = next(x for x in rng_["one_bit"] if x["model"] == m and x["N"] == 10 and x["p"] == p)
        mac(f"rngNe{CAP[m]}{nm}", row["NeN"], "{:.1f}")
        mac(f"rngMarkov{CAP[m]}{nm}", row["NeN_pred_markov"], "{:.1f}")
        mac(f"rngAcf{CAP[m]}{nm}", row["NeN_pred_acf"], "{:.1f}")
    row = next(x for x in rng_["one_bit"] if x["model"] == m and x["N"] == 50 and x["p"] == 0.5)
    mac(f"rngNe{CAP[m]}HalfFifty", row["NeN"], "{:.1f}")
    fc = rng_["fair_coin"][m]
    mac(f"fcN{CAP[m]}", fc["llm"]["n"], "{:d}")
    mac(f"fcFixed{CAP[m]}", int(round(fc["llm"]["fix"] * fc["llm"]["n"])), "{:d}")
    mac(f"fcSurFix{CAP[m]}", fc["surrogate"]["fix"])
    mac(f"fcSurNe{CAP[m]}", fc["surrogate"]["NeN"])
    mac(f"fcNe{CAP[m]}", fc["llm"]["NeN"], "{:.1f}")
    mac(f"fcT{CAP[m]}", fc["llm"]["t_mean"], "{:.0f}")
mac("wfTabsTen", rng_["fair_coin"]["opus"]["wf_t_mean"], "{:.1f}")
all_rng = [x for x in rng_["one_bit"]]
mac("rngAcfMaxDev", 100 * max(abs(x["NeN_pred_acf"] / x["NeN"] - 1) for x in all_rng if x["N"] == 10), "{:.0f}")

# ------------------------------------------------------------- direct mode
cells = dr["cells"]
mac("nDirectDraws", dr["n_draws"], "{:,}")
mac("nInvalidDirect", len(dr["invalid"]), "{:d}")
mac("maxAbsBias", max(abs(c["bias"]) for c in cells if c["s"] == 0), "{:.3f}")
mac("medAbsBias", float(np.median([abs(c["bias"]) for c in cells if c["s"] == 0])), "{:.4f}")
for m in MODELS:
    for N in [10, 50, 200]:
        row = next(x for x in dr["summary"] if x["model"] == m and x["N"] == N and x["phrasing"] == "plain+wf")
        mac(f"dNe{CAP[m]}{N}", row["NeN"])
        mac(f"dNe{CAP[m]}{N}Lo", row["NeN_ci"][0])
        mac(f"dNe{CAP[m]}{N}Hi", row["NeN_ci"][1])
    for phr in ["plain", "wf", "rng"]:
        row = next((x for x in dr["summary"] if x["model"] == m and x["N"] == 50 and x["phrasing"] == phr), None)
        mac(f"dNe{CAP[m]}Fifty{phr.capitalize()}", row["NeN"] if row else None)
    mc = [c for c in cells if c["model"] == m]
    mac(f"lagDraw{CAP[m]}", float(np.mean([c["lag1"] for c in mc if np.isfinite(c["lag1"])])))
    mac(f"phiFirst{CAP[m]}", float(np.nanmean([c["phi_first"] for c in mc])))
    mac(f"phiLater{CAP[m]}", float(np.nanmean([c["phi_later"] for c in mc])))
    mac(f"btw{CAP[m]}", float(np.nanmean([c["var_between"] / c["var_th"] for c in mc])), "{:.3f}")
    mac(f"within{CAP[m]}", float(np.nanmean([c["within1sd"] for c in mc])))
    mac(f"exactMean{CAP[m]}", float(np.nanmean([c["exact_mean"] for c in mc if c["N"] >= 50])))
    d = dr["duplicates"].get(m, {})
    mac(f"dupAgree{CAP[m]}", d.get("positional_agreement"))
mac("withinExp", float(np.mean([c["within1sd_exp"] for c in cells])))
mac("exactMeanExp", float(np.mean([c["exact_mean_exp"] for c in cells if c["N"] >= 50])))
mac("repFirstThree", dr["replicate_first3_identical"])
mac("mfiveObs", float(np.mean([c["mult5"] for c in cells if c["N"] >= 50])))
mac("mfiveExp", float(np.mean([c["mult5_exp"] for c in cells if c["N"] >= 50])))
for x in dr["selection"]:
    mac(f"dSeff{CAP[x['model']]}{x['N']}", x["s_eff_mean"], "{:.3f}")

# ------------------------------------------------------------- trajectories
def get(mode, m, N, p0=0.5, s=0.0):
    return next((x for x in tr[mode] if x["model"] == m and x["N"] == N and abs(x["p0"] - p0) < 1e-9 and x["s"] == s), None)


for m in MODELS:
    for mode, nm in [("memoryless", "Ml"), ("whole", "Wh")]:
        for N in [10, 50]:
            x = get(mode, m, N)
            mac(f"{nm}Ne{CAP[m]}{N}", x["NeN"] if x else None)
            mac(f"{nm}Lag{CAP[m]}{N}", x["lag1"] if x else None)
            mac(f"{nm}Rev{CAP[m]}{N}", x["reversal"] if x else None)
            mac(f"{nm}Hend{CAP[m]}{N}", x["H"][-1] if x else None, "{:.3f}")
        for p0, pn in [(0.05, "Five"), (0.2, "Twenty"), (0.5, "Half"), (0.8, "Eighty")]:
            for s, sn in [(0.0, "Neu"), (0.05, "Sel")]:
                x = get(mode, m, 10, p0, s)
                mac(f"{nm}Fix{CAP[m]}{pn}{sn}", x["fix"] if x else None)
    for t in tr["transitions"]:
        if t["model"] == m and t["bin"] == "all":
            nm = "Ml" if t["mode"] == "memoryless" else "Wh"
            if t["s"] > 0:
                mac(f"{nm}Seff{CAP[m]}", t["s_eff"], "{:.3f}")
                mac("sTrueApprox", t["s_true_approx"], "{:.3f}")
            else:
                mac(f"{nm}Pull{CAP[m]}{t['N']}", t["pull"], "{:.3f}")
    # transition-level phi in the middle bin, memoryless N = 10
    mid = next(t for t in tr["transitions"] if t["model"] == m and t["mode"] == "memoryless" and t["N"] == 10
               and t["s"] == 0 and t["bin"] == [0.35, 0.65])
    mac(f"MlPhiMid{CAP[m]}", mid["phi"])
for x in tr["numpy"]:
    if x["N"] == 10:
        pn = {0.05: "Five", 0.2: "Twenty", 0.5: "Half", 0.8: "Eighty"}[round(x["p0"], 2)]
        mac(f"npFix{pn}{'Neu' if x['s'] == 0 else 'Sel'}", x["fix"])
    if x["N"] == 50:
        mac("npHendFifty", x["H"][-1], "{:.3f}")
    if x["N"] == 10 and x["p0"] == 0.5 and x["s"] == 0:
        mac("npHendTen", x["H"][-1], "{:.3f}")
        mac("npRevTen", x["reversal"])
mac("whBadLength", tr["validity"]["whole"].get("wrong_length", 0), "{:d}")
mac("whBadNumber", tr["validity"]["whole"].get("wrong_number", 0), "{:d}")
mac("whLeftBoundary", tr["validity"]["whole"].get("left_boundary", 0), "{:d}")
mac("mlRetries", tr["validity"]["memoryless_retries"], "{:d}")

# Ne/N headline table
rows = []
for m in MODELS:
    cellsx = []
    for N in [10, 50, 200]:
        row = next(x for x in dr["summary"] if x["model"] == m and x["N"] == N and x["phrasing"] == "plain+wf")
        cellsx.append(f"{row['NeN']:.2f}")
    for mode in ["memoryless", "whole"]:
        for N in [10, 50]:
            x = get(mode, m, N)
            cellsx.append(f"{x['NeN']:.2f}" if x else "--")
    r10 = next(x for x in rng_["one_bit"] if x["model"] == m and x["N"] == 10 and x["p"] == 0.5)
    cellsx.append(f"{r10['NeN']:.1f}")
    rows.append(f"{CAP[m]} & " + " & ".join(cellsx) + " \\\\")
(PAP / "tables" / "ne.tex").write_text(
    "\\begin{tabular}{lcccccccc}\n\\toprule\n"
    " & \\multicolumn{3}{c}{direct, one generation} & \\multicolumn{2}{c}{fresh call per generation} & "
    "\\multicolumn{2}{c}{whole trajectory} & RNG mode \\\\\n"
    "\\cmidrule(lr){2-4}\\cmidrule(lr){5-6}\\cmidrule(lr){7-8}\\cmidrule(lr){9-9}\n"
    "Model & $N=10$ & $N=50$ & $N=200$ & $N=10$ & $N=50$ & $N=10$ & $N=50$ & $N=10$, $p=0.5$ \\\\\n\\midrule\n"
    + "\n".join(rows) + "\n\\bottomrule\n\\end{tabular}\n")

# selection table
rows = []
for m in MODELS:
    c = [macros.get(f"dSeff{CAP[m]}{N}", "--") for N in [10, 50, 200]]
    c += [macros.get(f"MlSeff{CAP[m]}", "--"), macros.get(f"WhSeff{CAP[m]}", "--")]
    rows.append(f"{CAP[m]} & " + " & ".join(c) + " \\\\")
(PAP / "tables" / "selection.tex").write_text(
    "\\begin{tabular}{lccccc}\n\\toprule\n"
    " & \\multicolumn{3}{c}{direct, one generation} & fresh call/gen. & whole trajectory \\\\\n"
    "\\cmidrule(lr){2-4}\n"
    "Model & $N=10$ & $N=50$ & $N=200$ & $N=10$ & $N=10$ \\\\\n\\midrule\n"
    + "\n".join(rows) + "\n\\bottomrule\n\\end{tabular}\n")

# derived ranges quoted in the discussion
dne = [x["NeN"] for x in dr["summary"] if x["phrasing"] == "plain+wf"]
mac("dNeMin", min(dne))
mac("dNeMax", max(dne))
traj_ne = [x["NeN"] for mode in ["memoryless", "whole"] for x in tr[mode] if x["p0"] == 0.5 and x["s"] == 0]
mac("trajNeMin", min(traj_ne), "{:.1f}")
mac("trajNeMax", max(traj_ne), "{:.1f}")
rng_half = [x for x in rng_["one_bit"] if x["p"] == 0.5 and x["N"] == 10]
mac("rngNeMin", min(x["NeN"] for x in rng_half), "{:.1f}")
mac("rngNeMax", max(x["NeN"] for x in rng_half), "{:.1f}")
mac("markovUnderFactor", max(x["NeN"] / x["NeN_pred_markov"] for x in rng_half), "{:.0f}")
wh_s = [t["s_eff"] for t in tr["transitions"] if t["mode"] == "whole" and t["bin"] == "all" and t["s"] > 0]
s_true = [t["s_true_approx"] for t in tr["transitions"] if t["mode"] == "whole" and t["bin"] == "all" and t["s"] > 0][0]
mac("whSexMin", 100 * (min(wh_s) / s_true - 1), "{:.0f}")
mac("whSexMax", 100 * (max(wh_s) / s_true - 1), "{:.0f}")
calls_tr = [c for c in json.load(open(RES / "trajectories.json"))["whole"]]
mac("nWhTraj", sum(x["n"] for x in calls_tr), "{:d}")

# theory checks
mac("thMaxVarErr", 100 * max(abs(r["var_sim"] / r["var_pred"] - 1) for r in th["markov_sum_variance"]), "{:.1f}")
mac("thMaxNeErr", 100 * max(abs(r["NeN_sim"] / r["NeN_pred"] - 1) for r in th["rng_one_bit_Ne"]), "{:.1f}")

with open(PAP / "numbers.tex", "w") as f:
    f.write("% Auto-generated by src/summary.py from results/*.json. Do not edit by hand.\n")
    for k, v in sorted(macros.items()):
        k = k.replace("200", "TwoHundred").replace("50", "Fifty").replace("10", "Ten")
        assert k.isalpha(), k
        f.write(f"\\newcommand{{\\{k}}}{{{v}}}\n")
print(len(macros), "macros")
