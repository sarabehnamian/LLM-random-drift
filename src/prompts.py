"""Prompt templates for every LLM call in the project.

Each call is made by a fresh subagent with no shared context. The subagent must
answer from its own judgment (no code, no tools other than the structured-output
tool) and return machine-readable JSON matching the schema for its task.

The same templates are embedded verbatim in the generated workflow scripts
(src/make_workflow.py), so the prompt stored in data/raw/ is exactly the prompt
that was sent.
"""

PREAMBLE = (
    "You are taking part in a scientific experiment on randomness. "
    "Produce the requested random output yourself, directly. Do NOT write or run code, "
    "do NOT use any tool other than the required structured-output tool, and do NOT use "
    "any external source of randomness. Return only the requested JSON fields.\n\n"
)

# ---------------------------------------------------------------- bit sequences
BITS = {
    "plain": (
        "Generate a sequence of {n} random binary digits (0 or 1). Each digit should be 1 "
        "with probability {p} and 0 with probability {q}, independently of all the other "
        "digits. Return the digits as one string of 0s and 1s with no spaces or separators "
        "(field 'bits')."
    ),
    "rng": (
        "You are a random number generator. Output {n} independent, identically distributed "
        "Bernoulli({p}) samples: each sample is 1 with probability {p} and 0 otherwise. "
        "Return them as one string of 0s and 1s with no spaces or separators (field 'bits')."
    ),
}

# ------------------------------------------------- direct mode, one generation
SEL_CLAUSE = (
    " Allele A is favoured by selection: its relative fitness is 1+s with s = {s}, "
    "compared with 1 for the other allele."
)

DIRECT = {
    "plain": (
        "A population has N = {N} diploid individuals, so there are 2N = {twoN} gene copies. "
        "At generation {t}, {i} of the {twoN} copies carry allele A (frequency {p})."
        "{sel} Simulate the number of copies of allele A in the next generation by random "
        "sampling. Give {k} independent simulated outcomes: each outcome is a separate, "
        "independent random draw of the next generation from the same current state, not "
        "a continuation of the previous outcome. Return a list of {k} integers between 0 "
        "and {twoN} (field 'counts')."
    ),
    "wf": (
        "Simulate exactly as a Wright-Fisher process. The population has N = {N} diploid "
        "individuals (2N = {twoN} gene copies). At generation {t}, {i} of the {twoN} copies "
        "carry allele A (frequency {p}).{sel} Simulate the number of copies of allele A in "
        "generation {t1}. Produce {k} independent replicate simulations of this single "
        "generation step, all starting from the same current state; the replicates must be "
        "statistically independent of one another. Return a list of {k} integers between "
        "0 and {twoN} (field 'counts')."
    ),
    "rng": (
        "You are a random number generator used inside a population-genetics simulation. "
        "Population: N = {N} diploid individuals, 2N = {twoN} gene copies. Generation {t}: "
        "{i} copies of allele A (frequency {p}).{sel} Output {k} independent random samples "
        "of the allele-A count in the next generation under Wright-Fisher sampling. Return "
        "a list of {k} integers between 0 and {twoN} (field 'counts')."
    ),
}

# --------------------------------------- memoryless multi-generation (one step)
MEMORYLESS = (
    "Simulate exactly as a Wright-Fisher process. Below are {m} independent populations, "
    "each with N = {N} diploid individuals (2N = {twoN} gene copies), currently at "
    "generation {t}.{sel} For each population the current number of copies of allele A is "
    "listed. For each population, simulate the number of copies of allele A in generation "
    "{t1} by random sampling. The populations are independent of one another, so draw each "
    "one independently. Return a list of {m} integers between 0 and {twoN}, in the same "
    "order as the input (field 'counts').\n\nCurrent counts of allele A: {counts}"
)

# ----------------------------------------- whole trajectory in a single call
TRAJECTORY = (
    "Simulate exactly as a Wright-Fisher process. Simulate {k} independent trajectories "
    "of a population with N = {N} diploid individuals (2N = {twoN} gene copies) for {G} "
    "generations, each starting from {i} copies of allele A at generation 0.{sel} At each "
    "generation the next count is a random sample given the current count. A count that "
    "reaches 0 or {twoN} stays there. The {k} trajectories must be independent of each "
    "other. Return a list of {k} trajectories (field 'trajectories'); each trajectory is a "
    "list of {G1} integers: the counts at generations 0, 1, ..., {G}."
)

SCHEMAS = {
    "bits": {
        "type": "object",
        "properties": {"bits": {"type": "string"}},
        "required": ["bits"],
    },
    "counts": {
        "type": "object",
        "properties": {"counts": {"type": "array", "items": {"type": "integer"}}},
        "required": ["counts"],
    },
    "trajectories": {
        "type": "object",
        "properties": {
            "trajectories": {
                "type": "array",
                "items": {"type": "array", "items": {"type": "integer"}},
            }
        },
        "required": ["trajectories"],
    },
}


def _fmt(x):
    return f"{x:g}"


def sel_clause(s):
    return SEL_CLAUSE.format(s=_fmt(s)) if s else ""


def render_bits(phrasing, n, p):
    return PREAMBLE + BITS[phrasing].format(n=n, p=_fmt(p), q=_fmt(round(1 - p, 10)))


def render_direct(phrasing, N, i, k, s=0.0, t=10):
    twoN = 2 * N
    return PREAMBLE + DIRECT[phrasing].format(
        N=N, twoN=twoN, i=i, p=_fmt(round(i / twoN, 4)), k=k, sel=sel_clause(s), t=t, t1=t + 1
    )


def render_trajectory(N, i, k, G, s=0.0):
    return PREAMBLE + TRAJECTORY.format(
        N=N, twoN=2 * N, i=i, k=k, G=G, G1=G + 1, sel=sel_clause(s)
    )


def memoryless_template(N, s, m_placeholder="{m}"):
    """Template with {m}, {t}, {t1}, {counts} left open (filled in the workflow)."""
    body = MEMORYLESS.replace("{N}", str(N)).replace("{twoN}", str(2 * N))
    body = body.replace("{sel}", sel_clause(s))
    return PREAMBLE + body


def render_memoryless(N, s, t, counts):
    return memoryless_template(N, s).format(
        m=len(counts), t=t, t1=t + 1, counts=", ".join(str(c) for c in counts)
    )
