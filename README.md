# Can a language model be random enough to be evolution?

Genetic drift with a large language model (LLM) as the random number source.

In the Wright–Fisher model the next generation's allele count is Binomial(2N, p). This project asks
what happens to drift when an LLM supplies that randomness. The answer is given in population-genetic
units: the variance effective population size, Ne = p(1−p) / (2 Var(Δp)), implied by the LLM's
sampling. Ne/N > 1 means drift is too slow.

The manuscript is **[`paper/main.pdf`](paper/main.pdf)**.

## Main findings

* Bits: all three models (Haiku, Sonnet, Opus) over-alternate (alternation 0.62–0.66 against 0.5),
  avoid long runs, and **exaggerate** requested probabilities instead of shrinking them toward 0.5
  (logit slope 1.22–1.32; rare outcomes are under-produced).
* Direct mode (the LLM is asked for the next generation): means are right, variance is too small.
  Ne/N = 1.04–1.53 depending on model and N.
* Multi-generation runs: Ne/N up to 4.6 (one fresh call per generation) and 2.2 (one call per whole
  trajectory). Heterozygosity decays too slowly; fixation is delayed. Sonnet and Opus trajectories
  reverse direction too often; Haiku's are too smooth.
* Selection is applied in the right direction; whole-trajectory runs exaggerate it by 32–47%.
* RNG mode (LLM bits drive an exact WF step): Ne/N = 6.5–13.9 at N = 10. A first-order Markov model of
  the alternation bias predicts only ~1.6–1.9; the full autocorrelation function explains it.
* The largest model is closest to WF in the direct modes, but its raw bits are no better.

All numbers come from `results/*.json` via `src/summary.py` (`paper/numbers.tex`).

## Repository layout

| Path | Contents |
|---|---|
| `src/prompts.py` | every prompt template and the JSON schemas |
| `src/design.py` | experimental design; writes `configs/jobs_*.jsonl` and workflow scripts |
| `src/make_workflow.py` | generates the JavaScript workflow scripts that launch one subagent per call |
| `src/ingest.py` | extracts prompt, response, timing, tool use and model family from subagent transcripts into `data/raw/` |
| `src/wf.py` | numpy Wright–Fisher baseline, parametric randomness models, theory formulas |
| `src/analysis.py` | all analyses → `results/*.json`, `results/*.csv` |
| `src/figures.py` | figures → `figures/*.png|pdf` (200 dpi, Okabe–Ito colours) |
| `src/summary.py` | LaTeX macros and tables → `paper/numbers.tex`, `paper/tables/` |
| `src/pilot_report.py` | pilot summary → `results/pilot_report.md` |
| `theory/` | `derivations.md` and `check_theory.py` (numerical checks → `results/theory_checks.json`) |
| `configs/` | job lists and memoryless-run configurations |
| `data/raw/calls.jsonl` | one record per LLM call: id, model, prompt, raw JSON response, timestamps, tools used, token usage |
| `data/raw/memoryless/` | trajectories from the fresh-call-per-generation runs |
| `workflows/` | the generated workflow scripts actually run |
| `paper/` | `main.tex`, `references.bib`, `literature_notes.md`, `main.pdf` |

## How the LLM calls were made

No API key was available. Each call was a fresh subagent launched by the Claude Code agent harness
(Workflow tool) with model tier `haiku`, `sonnet` or `opus` and low reasoning effort. The subagent got
one prompt, no shared context, and had to answer through a schema-validated structured-output tool.
Prompts forbid code, tools and external randomness; the transcripts confirm that no call used any
tool other than the structured-output tool. Replicate prompts differ only by a six-character run code
(a hash of the call id).

## Call counts and cost

| Phase | Type | Calls |
|---|---|---|
| pilot | all modes | 30 |
| full | bit sequences | 264 |
| full | direct mode, one generation | 324 |
| full | fresh call per generation | 464 |
| full | whole trajectory per call | 87 |
| full | determinism test (identical prompts) | 24 |
| **total** | | **1,193** |

By model: Haiku 433, Sonnet 379, Opus 381. All 1,193 returned valid JSON; none refused.
Median wall time per call 3.3–4.6 s; the full run took about 15 minutes with nine workflows in parallel.
Because every subagent carries the agent harness's system prompt, each call used roughly 50–90k input
tokens of (mostly cached) context, about 83 million input tokens in total, and very little output.
The calls ran under the session's subscription, so there is no separate API bill; at list API prices
the cached-context volume would dominate the cost.

## Reproducing

```bash
pip install -r requirements.txt
python theory/check_theory.py          # theory checks (seconds)
python src/analysis.py                 # results/ from data/raw/
python src/figures.py                  # figures/
python src/summary.py                  # paper/numbers.tex, paper/tables/
cd paper && pdflatex main && bibtex main && pdflatex main && pdflatex main
```

To collect new LLM data: `python src/design.py full 6` writes `configs/` and `workflows/*.js`; run each
workflow script with the Claude Code Workflow tool; then `python src/ingest.py <workflow transcript
dirs> <task output files>` appends to `data/raw/calls.jsonl` (resumable: jobs already present are
skipped by `design.py`). LLM outputs are not reproducible call-for-call; all numpy parts use fixed seeds
(`wf.SEED = 20261013`).

## Caveats

See the Limitations section of the paper. In short: subagents run inside an agent harness, sampling
temperature could not be set, only three models of one family were tested, the multi-generation grid
was trimmed to N = 10 and N = 50, and batched prompts (20 draws or 40 populations per call) create
dependence that the paper measures but cannot remove.
