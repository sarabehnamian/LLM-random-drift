export const meta = {
  name: 'full-jobs-0',
  description: 'LLM randomness experiment: 117 independent subagent calls',
  phases: [{ title: 'Calls' }],
}
const SCHEMAS = {"bits": {"type": "object", "properties": {"bits": {"type": "string"}}, "required": ["bits"]}, "counts": {"type": "object", "properties": {"counts": {"type": "array", "items": {"type": "integer"}}}, "required": ["counts"]}, "trajectories": {"type": "object", "properties": {"trajectories": {"type": "array", "items": {"type": "array", "items": {"type": "integer"}}}}, "required": ["trajectories"]}}
const JOBS = [
{
"id": "full|bits|haiku|plain|p0.05|r0",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 081396 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.05|r6",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 4ae9bc (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.05|r4",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 14aca0 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.2|r2",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 1ced30 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.2|r0",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: b5152b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.2|r6",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: d46170 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r4",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 95e52f (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r10",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: b2a9af (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r16",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: b71310 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r2",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: c52b8d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r8",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 71b483 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r14",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: bff580 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.8|r0",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 20e06b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.8|r6",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 033791 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.8|r4",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 0b51c8 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.05|r2",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: acba14 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.05|r0",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 4ab526 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.05|r6",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 3b189a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.2|r4",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 4a5563 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.2|r2",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 1d3945 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r0",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 9fad51 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r6",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 8de85e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r12",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: ca00db (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r18",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 06de7b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r4",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 9c1c2b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r10",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 61687e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r16",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 02632a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.8|r2",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 5dbe64 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.8|r0",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 51d4c4 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.8|r6",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 890912 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.05|r4",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 4f6c58 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.05|r2",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 78c582 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.2|r0",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: d1ebb4 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.2|r6",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 111473 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.2|r4",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 3c7776 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r2",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 90bd27 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r8",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 6e6775 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r14",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: dd43af (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r0",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: a8e4d8 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r6",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 9d9025 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r12",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 3e96fd (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r18",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 4a9515 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.8|r4",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: a898b0 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.8|r2",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 7061b7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N10|p0.05|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: d38bf0 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.05|s0.05|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: c65ee8 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.2|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 8e2c69 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N10|p0.5|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: fd6cf9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N10|p0.8|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 470040 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.8|s0.05|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 55b075 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.05|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: d17c68 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N50|p0.2|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 9bc01d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N50|p0.5|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: a3cad7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.5|s0.05|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: ddac29 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.8|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 4f34e9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N200|p0.05|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 09288b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N200|p0.2|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: d1510b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.2|s0.05|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 4231a9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.5|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 4bd07c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N200|p0.8|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: b8845d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|rng|N50|p0.05|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 5 copies of allele A (frequency 0.05). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 3d54ae (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|rng|N50|p0.5|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 50 copies of allele A (frequency 0.5). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 606019 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N10|p0.05|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: ed38d3 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.05|s0.05|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 4329d6 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.2|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: f5a505 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N10|p0.5|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 7709e3 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N10|p0.8|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: cbc2d7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.8|s0.05|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: ad512e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.05|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: f84919 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N50|p0.2|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 5ae450 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N50|p0.5|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 3bc375 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.5|s0.05|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 7a0878 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.8|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: a94116 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N200|p0.05|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 82c00f (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N200|p0.2|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: d8e656 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.2|s0.05|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: ef8361 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.5|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 0e4d2d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N200|p0.8|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: b8d307 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|rng|N50|p0.05|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 5 copies of allele A (frequency 0.05). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 257eac (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|rng|N50|p0.5|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 50 copies of allele A (frequency 0.5). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 8071af (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N10|p0.05|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: db0c6d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.05|s0.05|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: e7a7bb (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.2|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 91b9de (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N10|p0.5|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: ada896 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N10|p0.8|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 38d36c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.8|s0.05|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 0e3815 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.05|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 2bbf9a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N50|p0.2|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 6d5f1b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N50|p0.5|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 185bd5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.5|s0.05|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: ec013a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.8|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 3b296b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N200|p0.05|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 7686f4 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N200|p0.2|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 510aa4 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.2|s0.05|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: f1e592 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.5|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 594c02 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N200|p0.8|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: d9cbb7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|rng|N50|p0.05|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 5 copies of allele A (frequency 0.05). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: bfc61b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|rng|N50|p0.5|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 50 copies of allele A (frequency 0.5). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 0d877f (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits-dup|haiku|plain|p0.5|r0",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits')."
},
{
"id": "full|bits-dup|haiku|plain|p0.5|r3",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits')."
},
{
"id": "full|bits-dup|sonnet|plain|p0.5|r2",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits')."
},
{
"id": "full|bits-dup|opus|plain|p0.5|r1",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits')."
},
{
"id": "full|traj|haiku|N10|p0.05|s0.0|r0",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 1 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: cdfd71 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N10|p0.2|s0.0|r0",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 4 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 17c901 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N10|p0.5|s0.0|r0",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 10 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 236aa5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N10|p0.8|s0.0|r0",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 16 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 3e9971 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N50|p0.5|s0.0|r0",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 50 diploid individuals (2N = 100 gene copies) for 30 generations, each starting from 50 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 100 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 31 integers: the counts at generations 0, 1, ..., 30.\n\nRun code: 50e6b1 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.05|s0.0|r1",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 1 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 02fe52 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.2|s0.0|r1",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 4 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 09b6c2 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.5|s0.0|r1",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 10 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 84c730 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.8|s0.0|r1",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 16 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 5dce1b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N50|p0.5|s0.0|r1",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 50 diploid individuals (2N = 100 gene copies) for 30 generations, each starting from 50 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 100 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 31 integers: the counts at generations 0, 1, ..., 30.\n\nRun code: b17f46 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.05|s0.0|r2",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 1 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 357ee5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.2|s0.0|r2",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 4 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 9e6b25 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.5|s0.0|r2",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 10 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 2eb8c9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.8|s0.0|r2",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 16 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 01a945 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N50|p0.5|s0.0|r2",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 50 diploid individuals (2N = 100 gene copies) for 30 generations, each starting from 50 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 100 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 31 integers: the counts at generations 0, 1, ..., 30.\n\nRun code: 2f00b5 (an arbitrary label used only for bookkeeping)."
}
]
phase('Calls')
const out = await parallel(JOBS.map(j => () =>
  agent(j.prompt, {label: j.id, phase: 'Calls', model: j.model, effort: 'low', schema: SCHEMAS[j.schema]})
    .then(r => ({id: j.id, ok: r !== null}))
    .catch(e => ({id: j.id, ok: false, err: String(e)}))
))
const ok = out.filter(o => o && o.ok).length
log(`${ok}/${JOBS.length} calls returned output`)
return {name: 'full-jobs-0', n: JOBS.length, ok, failed: out.filter(o => !o || !o.ok).map(o => o ? o.id : null)}
