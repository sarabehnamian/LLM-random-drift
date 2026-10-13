# Theory: how biased randomness changes Wright–Fisher drift

All results are checked by simulation in `theory/check_theory.py`
(output: `results/theory_checks.json`).

Notation. Diploid population of N individuals, 2N gene copies. Allele A has
frequency p. In the exact Wright–Fisher (WF) model the next count is
X ~ Binomial(2N, p'), with p' = p under neutrality and
p' = p(1+s)/(1+ps) with selection coefficient s. Then
E[Δp] = p' − p and Var(Δp | p) = p'(1−p')/(2N).

The **variance effective size** of any process that takes p to p + Δp is

    Ne = p(1−p) / (2 Var(Δp | p)),                                     (1)

so Ne = N for exact WF (at s = 0). Ne/N > 1 means drift is too slow; Ne/N < 1 too fast.

## 1. A model of LLM bit sequences

We model a stream of LLM "random" bits b_1, b_2, … with requested probability p
as a stationary two-state Markov chain with

* produced frequency π = P(b_t = 1), which may differ from p, and
* lag-1 autocorrelation ρ = corr(b_t, b_{t+1}). ρ < 0 means too much alternation.

Transition probabilities: P(1|1) = π + ρ(1−π), P(1|0) = π(1−ρ).
Consequences:

* lag-k autocorrelation ρ^k;
* alternation rate P(b_{t+1} ≠ b_t) = 2π(1−π)(1−ρ) (= 2p(1−p) for an ideal source);
* run lengths of 1s are geometric with continuation probability a₁ = π + ρ(1−π),
  so P(run = ℓ) = (1−a₁) a₁^{ℓ−1} and mean run 1/(1−a₁);
  runs of 0s likewise with a₀ = (1−π) + ρπ;
* the variance of the sum S_n of n consecutive bits is

      Var(S_n) = n π(1−π) [ 1 + 2 Σ_{k=1}^{n−1} (1 − k/n) ρ^k ]
               = n π(1−π) [ (1+ρ)/(1−ρ) − 2ρ(1−ρ^n) / (n(1−ρ)²) ].       (2)

  For large n, Var(S_n) ≈ n π(1−π)(1+ρ)/(1−ρ).

For requested p ≠ 0.5 we describe the produced frequency with a **shrinkage curve**
on the logit scale, logit π = β₀ + β₁ logit p. β₁ < 1 means the produced frequency
is pulled toward 0.5 (rare outcomes over-produced); β₁ > 1 means it is exaggerated.

## 2. RNG mode: LLM bits inside an exact WF simulation

**One-bit-per-offspring scheme.** Each of the 2N offspring copies takes allele A
iff its bit is 1, with bits produced at requested probability p. Then
X = S_{2N} and, from (2),

    E[Δp] = π − p,
    Var(Δp) = π(1−π)/(2N) · c(ρ, 2N),   c(ρ,n) = (1+ρ)/(1−ρ) − 2ρ(1−ρⁿ)/(n(1−ρ)²),

so

    Ne/N = [p(1−p) / (π(1−π))] · 1/c(ρ, 2N)  ≈  [p(1−p)/(π(1−π))] · (1−ρ)/(1+ρ).   (3)

Over-alternation (ρ < 0) makes drift too slow: ρ = −0.2 gives Ne/N ≈ 1.5.
Shrinkage toward 0.5 (π(1−π) > p(1−p)) pushes the other way, but it also adds a
systematic E[Δp] = π − p that pulls frequencies toward 0.5, like balancing selection
or two-way mutation, which delays fixation and loss.

**Fair-coin scheme (multi-generation).** To simulate many generations at arbitrary
p we turn fair LLM bits (requested p = 0.5) into Bernoulli(p) draws with the standard
comparison method: read bits u₁u₂… and the binary expansion d₁d₂… of p; at the first
j with u_j ≠ d_j return 1 if u_j < d_j. This uses 2 bits per draw on average. Under
the Markov model the draws are biased and correlated in a way that depends on the
binary expansion of p; we evaluate it by simulation from the fitted chain
(`src/analysis_rng.py`) rather than in closed form.

## 3. Direct mode: a dispersion–bias model for counts

When the LLM is asked for the next generation directly, we describe its output
counts by their conditional mean and variance:

    E[X/2N | p] = m(p),      Var(X | p) = φ · 2N m(1−m).                    (4)

φ is a dispersion factor (φ = 1 for WF; φ < 1 under-dispersed; φ > 1 over-dispersed)
and m(p) − p is a systematic bias (for selection, compare m with the WF p').
Under (4),

    Var(Δp) = φ m(1−m)/(2N),    Ne/N = p(1−p) / (φ m(1−m))  ≈ 1/φ when m ≈ p.  (5)

A convenient generative family that covers both sides: for φ > 1 a beta-binomial
with intra-class correlation (φ−1)/(2N−1); for φ < 1 a rescaled binomial
X = round( (2N/n′) Y ), Y ~ Binomial(n′, m), n′ = 2N/φ.

### 3a. Heterozygosity

Let H = 2p(1−p). If the conditional mean is unbiased (m(p) = p), then
E[p′(1−p′) | p] = p(1−p) − Var(p′ | p), so

    E[H_{t+1}] = H_t (1 − φ/(2N)) = H_t (1 − 1/(2Ne)),    E[H_t] = H_0 (1 − φ/(2N))^t.   (6)

A biased m(p) changes this: a pull toward 0.5 slows the decay further and can
create a non-zero plateau.

### 3b. Fixation probability and time (diffusion approximation)

With drift M(p) = m(p) − p and variance V(p) = φ p(1−p)/(2N), the fixation
probability from p₀ is

    u(p₀) = ∫₀^{p₀} G(x) dx / ∫₀¹ G(x) dx,    G(x) = exp(−∫ 2M(y)/V(y) dy).        (7)

* Neutral and unbiased (M = 0): u(p₀) = p₀ **whatever φ is**. Dispersion errors alone
  do not change fixation probabilities; only a biased mean does.
* Selection represented as M = s_eff p(1−p): 2M/V = 4 Ne s_eff and

      u(p₀) = (1 − e^{−4 Ne s_eff p₀}) / (1 − e^{−4 Ne s_eff}).                    (8)

  Ne and s_eff enter only through the product Ne·s_eff. An LLM with Ne/N > 1 and a
  correct s_eff exaggerates selection; ignoring selection is s_eff = 0.
* Mean time to absorption (neutral, unbiased):

      t̄(p₀) = −4Ne [p₀ ln p₀ + (1−p₀) ln(1−p₀)]  generations,                      (9)

  so absorption time scales linearly with Ne/N.

### 3c. Whole trajectories

Under any process with an unbiased conditional mean, successive increments are
uncorrelated: corr(Δp_t, Δp_{t+1}) = 0. A "smooth" imagined trajectory has positive
increment autocorrelation (trends); one with too many reversals has negative
autocorrelation. We measure the lag-1 autocorrelation of Δp and the reversal rate
(fraction of consecutive non-zero increments with opposite signs) and compare
both with the same statistics from numpy WF trajectories run at the same N, p₀, G.

## 4. Numerical checks (summary of `results/theory_checks.json`)

* Eq. (2) and the alternation and run-length formulas agree with simulated Markov
  chains to within Monte Carlo error (1–2%).
* Eq. (3) (RNG mode, one bit per offspring) matches simulated Ne/N to within ~1.5%.
* The dispersion generators have the intended variance, and Eq. (6) predicts the
  simulated heterozygosity decay to within 1.5% for N = 50 and within 6% for N = 10
  with φ = 0.5, where count discreteness matters.
* Neutral fixation probability stays at p₀ for φ = 0.5 and φ = 2, as Eq. (7) predicts.
* Kimura's formula with Ne = N/φ (Eq. 8) agrees within ~3% for N = 10 and is ~8%
  low for N = 50, p₀ = 0.1, φ = 0.6. The difference comes from the rescaled-binomial
  generator: rounding rint(φ·y) is biased upward at very low counts (y = 1 gives 1,
  not 0.6), which protects rare alleles. This is a property of that generator, not
  of the diffusion result, and it is a reminder that how a generator handles counts
  near 0 and 2N matters for fixation.
* Eq. (9) is accurate for φ ≥ 1 but overestimates absorption time by ~15% for N = 10,
  φ = 0.5 (Ne = 20 is still small for the diffusion limit).
