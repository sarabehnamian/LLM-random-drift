export const meta = {
  name: 'full-jobs-2',
  description: 'LLM randomness experiment: 117 independent subagent calls',
  phases: [{ title: 'Calls' }],
}
const SCHEMAS = {"bits": {"type": "object", "properties": {"bits": {"type": "string"}}, "required": ["bits"]}, "counts": {"type": "object", "properties": {"counts": {"type": "array", "items": {"type": "integer"}}}, "required": ["counts"]}, "trajectories": {"type": "object", "properties": {"trajectories": {"type": "array", "items": {"type": "array", "items": {"type": "integer"}}}}, "required": ["trajectories"]}}
const JOBS = [
{
"id": "full|bits|haiku|plain|p0.05|r2",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 080622 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.05|r0",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 85cb4e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.05|r6",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 15e8c5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.2|r4",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 19828d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.2|r2",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: e02a4d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r0",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: c6626a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r6",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: ef9f37 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r12",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 327638 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r18",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 91c553 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r4",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: e8a7e6 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r10",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 2f0759 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r16",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: ed43bf (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.8|r2",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: b9aab7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.8|r0",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 3b8fcb (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.8|r6",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 328000 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.05|r4",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: f4b390 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.05|r2",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 29d705 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.2|r0",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: e58a65 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.2|r6",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: b878a9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.2|r4",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 280daf (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r2",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 4c17e9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r8",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: b68f78 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r14",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 737009 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r0",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 402037 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r6",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: d6bab0 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r12",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 86d5c6 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r18",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 9565b0 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.8|r4",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: bce05c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.8|r2",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 86929f (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.05|r0",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 780730 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.05|r6",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: c7f1d8 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.05|r4",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: e99c21 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.2|r2",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 9364fe (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.2|r0",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: c9fc48 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.2|r6",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: e63b5d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r4",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: c5f941 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r10",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: b8d734 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r16",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 4190f4 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r2",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: c8e314 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r8",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 5b7ce5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r14",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 15c650 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.8|r0",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: cdb02b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.8|r6",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: caeeeb (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.8|r4",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 658804 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N10|p0.05|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 0309a5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N10|p0.2|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 13d2d2 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.2|s0.05|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 50e30c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.5|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: f7a434 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N10|p0.8|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: b3adf7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N50|p0.05|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 79065a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.05|s0.05|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 799d74 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.2|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 86ff3e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N50|p0.5|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 170999 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N50|p0.8|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 824d41 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.8|s0.05|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 9488b5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.05|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: d3354d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N200|p0.2|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 2d75e2 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N200|p0.5|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: f374c9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.5|s0.05|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: d51ac5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.8|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 0543b4 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|rng|N50|p0.05|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 5 copies of allele A (frequency 0.05). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 9e5da7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|rng|N50|p0.5|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 50 copies of allele A (frequency 0.5). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: c86b3e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N10|p0.05|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: d940b5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N10|p0.2|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: a4aa61 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.2|s0.05|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: cc99c8 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.5|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 07e6b0 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N10|p0.8|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: e01b11 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N50|p0.05|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: e13285 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.05|s0.05|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: b424c9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.2|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: dbb2a5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N50|p0.5|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 0cc39a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N50|p0.8|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: a8c499 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.8|s0.05|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 18496b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.05|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 16f7ea (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N200|p0.2|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 181206 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N200|p0.5|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 1008a4 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.5|s0.05|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 8981f5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.8|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 5710aa (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|rng|N50|p0.05|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 5 copies of allele A (frequency 0.05). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: a9c31d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|rng|N50|p0.5|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 50 copies of allele A (frequency 0.5). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 389ac1 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N10|p0.05|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 188db4 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N10|p0.2|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 18baa3 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.2|s0.05|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 950f67 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.5|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: f6a0ef (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N10|p0.8|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: de3339 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N50|p0.05|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 542eec (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.05|s0.05|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: d4c6e5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.2|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 07e68d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N50|p0.5|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 4970d1 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N50|p0.8|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 6f1d5a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.8|s0.05|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: db9845 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.05|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 3a1245 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N200|p0.2|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: e313a5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N200|p0.5|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 472861 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.5|s0.05|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 032071 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.8|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: b46371 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|rng|N50|p0.05|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 5 copies of allele A (frequency 0.05). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: aab777 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|rng|N50|p0.5|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 50 copies of allele A (frequency 0.5). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 5c2507 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits-dup|haiku|plain|p0.5|r1",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits')."
},
{
"id": "full|bits-dup|sonnet|plain|p0.5|r0",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits')."
},
{
"id": "full|bits-dup|sonnet|plain|p0.5|r3",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits')."
},
{
"id": "full|bits-dup|opus|plain|p0.5|r2",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits')."
},
{
"id": "full|traj|haiku|N10|p0.05|s0.0|r2",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 1 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: a05d68 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N10|p0.2|s0.0|r2",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 4 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 412da4 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N10|p0.5|s0.0|r2",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 10 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: dbeadd (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N10|p0.8|s0.0|r2",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 16 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 952633 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N50|p0.5|s0.0|r2",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 50 diploid individuals (2N = 100 gene copies) for 30 generations, each starting from 50 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 100 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 31 integers: the counts at generations 0, 1, ..., 30.\n\nRun code: 592122 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.05|s0.05|r0",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 1 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 4c5547 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.2|s0.05|r0",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 4 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 125239 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.5|s0.05|r0",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 10 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 270568 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.8|s0.05|r0",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 16 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: bef725 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N50|p0.5|s0.0|r3",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 50 diploid individuals (2N = 100 gene copies) for 30 generations, each starting from 50 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 100 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 31 integers: the counts at generations 0, 1, ..., 30.\n\nRun code: cdc2bb (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.05|s0.05|r1",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 1 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 3c0f91 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.2|s0.05|r1",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 4 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 97d644 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.5|s0.05|r1",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 10 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: d84c3d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.8|s0.05|r1",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 16 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: db8c41 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N50|p0.5|s0.0|r4",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 50 diploid individuals (2N = 100 gene copies) for 30 generations, each starting from 50 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 100 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 31 integers: the counts at generations 0, 1, ..., 30.\n\nRun code: 1856af (an arbitrary label used only for bookkeeping)."
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
return {name: 'full-jobs-2', n: JOBS.length, ok, failed: out.filter(o => !o || !o.ok).map(o => o ? o.id : null)}
