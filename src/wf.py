"""Wright-Fisher baseline, parametric models of LLM randomness, and theory formulas."""
import numpy as np
from scipy import integrate

SEED = 20261013


# ------------------------------------------------------------------ theory
def p_sel(p, s):
    """Expected frequency after selection (genic, haploid-style WF)."""
    p = np.asarray(p, float)
    return p * (1 + s) / (1 + p * s)


def var_dp_wf(N, p, s=0.0):
    m = p_sel(p, s)
    return m * (1 - m) / (2 * N)


def ne_from_var(p, var):
    return p * (1 - p) / (2 * var)


def kimura_u(p0, N_e, s):
    """Fixation probability (diffusion), u = (1-exp(-4 Ne s p0))/(1-exp(-4 Ne s))."""
    p0 = np.asarray(p0, float)
    if s == 0:
        return p0
    a = 4 * N_e * s
    return -np.expm1(-a * p0) / -np.expm1(-a)


def t_absorb(p0, N_e):
    """Mean time to fixation or loss under neutrality (Kimura & Ohta 1969)."""
    p0 = np.asarray(p0, float)
    with np.errstate(divide="ignore", invalid="ignore"):
        v = -4 * N_e * (np.where(p0 > 0, p0 * np.log(p0), 0) + np.where(p0 < 1, (1 - p0) * np.log(1 - p0), 0))
    return v


def t_fix_cond(p0, N_e):
    """Mean time to fixation conditional on fixation (neutral)."""
    p0 = np.asarray(p0, float)
    return -4 * N_e * (1 - p0) * np.log(1 - p0) / p0


def u_diffusion(p0, M, V):
    """General diffusion fixation probability for drift M(x), variance V(x)."""
    def G(x):
        val, _ = integrate.quad(lambda y: 2 * M(y) / V(y), 0.5, x, limit=200)
        return np.exp(-val)
    num, _ = integrate.quad(G, 1e-9, p0, limit=200)
    den, _ = integrate.quad(G, 1e-9, 1 - 1e-9, limit=200)
    return num / den


def markov_var_factor(rho, n):
    """c(rho, n) = Var(S_n) / (n pi (1-pi)) for a stationary binary Markov chain."""
    if rho == 0:
        return 1.0
    return (1 + rho) / (1 - rho) - 2 * rho * (1 - rho ** n) / (n * (1 - rho) ** 2)


def ne_ratio_rng_bits(p, pi, rho, twoN):
    """Ne/N when each offspring copy uses one LLM bit at requested p (eq. 3)."""
    return p * (1 - p) / (pi * (1 - pi) * markov_var_factor(rho, twoN))


# ------------------------------------------------------------ generators
def markov_bits(rng, n, pi, rho, size=None):
    """Stationary binary Markov chain(s) with P(1)=pi and lag-1 correlation rho."""
    shape = (n,) if size is None else (size, n)
    p11 = pi + rho * (1 - pi)
    p01 = pi * (1 - rho)
    u = rng.random(shape)
    out = np.empty(shape, dtype=np.int8)
    out[..., 0] = u[..., 0] < pi
    for t in range(1, n):
        prob = np.where(out[..., t - 1] == 1, p11, p01)
        out[..., t] = u[..., t] < prob
    return out


def dispersed_counts(rng, twoN, m, phi, size):
    """Counts with mean twoN*m and variance phi*twoN*m(1-m).

    phi > 1: beta-binomial with intra-class correlation (phi-1)/(twoN-1).
    phi < 1: rescaled binomial round(twoN/n' * Binomial(n', m)), n' = twoN/phi.
    """
    m = np.broadcast_to(np.asarray(m, float), size)
    if abs(phi - 1) < 1e-12:
        return rng.binomial(twoN, m)
    if phi > 1:
        icc = min((phi - 1) / (twoN - 1), 0.999)
        ab = (1 - icc) / icc
        mm = np.clip(m, 1e-12, 1 - 1e-12)
        q = rng.beta(mm * ab, (1 - mm) * ab)
        q = np.where(m <= 0, 0, np.where(m >= 1, 1, q))
        return rng.binomial(twoN, q)
    nprime = max(int(round(twoN / phi)), twoN)
    y = rng.binomial(nprime, m)
    return np.clip(np.rint(y * twoN / nprime), 0, twoN).astype(int)


def wf_trajectories(rng, N, p0, G, reps, s=0.0, phi=1.0):
    """Simulate WF (or dispersion-model) trajectories; returns counts (reps, G+1)."""
    twoN = 2 * N
    x = np.full(reps, int(round(p0 * twoN)))
    out = np.empty((reps, G + 1), dtype=int)
    out[:, 0] = x
    for t in range(G):
        m = p_sel(x / twoN, s)
        x = dispersed_counts(rng, twoN, m, phi, reps)
        out[:, t + 1] = x
    return out


def wf_until_absorbed(rng, N, p0, reps, s=0.0, phi=1.0, max_gen=100000):
    """Return (fixed: bool array, time: int array)."""
    twoN = 2 * N
    x = np.full(reps, int(round(p0 * twoN)))
    t = np.zeros(reps, int)
    alive = (x > 0) & (x < twoN)
    g = 0
    while alive.any() and g < max_gen:
        g += 1
        m = p_sel(x[alive] / twoN, s)
        x[alive] = dispersed_counts(rng, twoN, m, phi, alive.sum())
        t[alive] = g
        alive = (x > 0) & (x < twoN)
    return x == twoN, t


# ------------------------------------------------------- bit statistics
def run_lengths(bits):
    bits = np.asarray(bits)
    if len(bits) == 0:
        return np.array([], int), np.array([], int)
    change = np.flatnonzero(np.diff(bits)) + 1
    starts = np.r_[0, change]
    ends = np.r_[change, len(bits)]
    return bits[starts], ends - starts


def fit_markov(bits):
    """MLE-style moment fit: pi = mean, rho = lag-1 autocorrelation."""
    b = np.asarray(bits, float)
    pi = b.mean()
    if pi in (0, 1):
        return pi, 0.0
    x, y = b[:-1], b[1:]
    rho = np.corrcoef(x, y)[0, 1] if x.std() > 0 and y.std() > 0 else 0.0
    return pi, rho


def bernoulli_from_fair_bits(bits, p, n_draws, start=0):
    """Comparison method: Bernoulli(p) draws from a stream of fair bits.

    Returns (draws, next_index). Raises IndexError if the stream runs out.
    """
    d = []  # binary expansion digits of p
    q = p
    for _ in range(40):
        q *= 2
        d.append(int(q >= 1))
        q -= int(q >= 1)
    out = np.empty(n_draws, dtype=np.int8)
    i = start
    for k in range(n_draws):
        j = 0
        while True:
            u = bits[i]
            i += 1
            dj = d[j] if j < len(d) else 0
            if u != dj:
                out[k] = 1 if u < dj else 0
                break
            j += 1
    return out, i
