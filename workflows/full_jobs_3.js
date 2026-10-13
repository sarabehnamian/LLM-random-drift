export const meta = {
  name: 'full-jobs-3',
  description: 'LLM randomness experiment: 116 independent subagent calls',
  phases: [{ title: 'Calls' }],
}
const SCHEMAS = {"bits": {"type": "object", "properties": {"bits": {"type": "string"}}, "required": ["bits"]}, "counts": {"type": "object", "properties": {"counts": {"type": "array", "items": {"type": "integer"}}}, "required": ["counts"]}, "trajectories": {"type": "object", "properties": {"trajectories": {"type": "array", "items": {"type": "array", "items": {"type": "integer"}}}}, "required": ["trajectories"]}}
const JOBS = [
{
"id": "full|bits|haiku|plain|p0.05|r3",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 603fa7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.05|r1",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 4fafe5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.05|r7",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 4f6313 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.2|r5",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 15bc32 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.2|r3",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 3d7b01 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r1",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: d13306 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r7",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 699904 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r13",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 11be5e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r19",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 6c3012 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r5",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 421f3a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r11",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: dc5e5d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r17",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 30a624 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.8|r3",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 842e9b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.8|r1",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 92f391 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.8|r7",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 251303 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.05|r5",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 56ffdd (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.05|r3",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: e68316 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.2|r1",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 682453 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.2|r7",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 7c6135 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.2|r5",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 402267 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r3",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: a4b94c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r9",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: b6cb3d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r15",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 51c415 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r1",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 77a187 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r7",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: e647ce (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r13",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 4df625 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r19",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 344017 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.8|r5",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 06291d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.8|r3",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 690271 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.05|r1",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 204a9c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.05|r7",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 385eb7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.05|r5",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 30ceb9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.2|r3",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 00bdf0 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.2|r1",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 740064 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.2|r7",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 7f6dac (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r5",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 4073fc (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r11",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 836d05 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r17",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 4e3d49 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r3",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 3d32da (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r9",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: b65cd9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r15",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 9aa703 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.8|r1",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 6d36b1 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.8|r7",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 8857d9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.8|r5",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 3f672a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.05|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 23b8c2 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N10|p0.2|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 1f95fa (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.2|s0.05|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 8762c0 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.5|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 41088e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.8|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: e7d649 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N50|p0.05|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 16e632 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.05|s0.05|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 156e5d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.2|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: d051be (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.5|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: b0fece (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N50|p0.8|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 6796e0 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.8|s0.05|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: e46bae (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.05|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: f5d05b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.2|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 853d37 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N200|p0.5|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: e796b3 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.5|s0.05|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: dd53f1 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.8|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 6d8feb (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|rng|N50|p0.2|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 20 copies of allele A (frequency 0.2). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: c22eb8 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|rng|N50|p0.8|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 80 copies of allele A (frequency 0.8). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 4d7ffa (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.05|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: f1a266 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N10|p0.2|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 095b48 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.2|s0.05|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 156c22 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.5|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 25d4a9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.8|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: b890bb (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N50|p0.05|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 317783 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.05|s0.05|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 5c1227 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.2|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 234b4e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.5|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 311f9e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N50|p0.8|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 8cb94b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.8|s0.05|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 9732a1 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.05|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: ddcebb (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.2|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 072327 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N200|p0.5|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 532029 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.5|s0.05|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 49b33f (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.8|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: a2b889 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|rng|N50|p0.2|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 20 copies of allele A (frequency 0.2). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 04b238 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|rng|N50|p0.8|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 80 copies of allele A (frequency 0.8). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 81b3de (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.05|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 14aa68 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N10|p0.2|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 5a584a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.2|s0.05|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 6017d1 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.5|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: d1f796 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.8|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 91a76a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N50|p0.05|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 716374 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.05|s0.05|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 0ef672 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.2|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 6f5599 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.5|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: c66840 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N50|p0.8|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: f35810 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.8|s0.05|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 53bf9f (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.05|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 4918f2 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.2|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 66a51d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N200|p0.5|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 85bf5b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.5|s0.05|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 5bee43 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.8|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: fd3442 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|rng|N50|p0.2|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 20 copies of allele A (frequency 0.2). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 41ef30 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|rng|N50|p0.8|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 80 copies of allele A (frequency 0.8). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: ee3926 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct-dup|haiku|wf|N50|p0.5|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts')."
},
{
"id": "full|direct-dup|sonnet|wf|N50|p0.5|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts')."
},
{
"id": "full|direct-dup|sonnet|wf|N50|p0.5|s0.0|r3",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts')."
},
{
"id": "full|direct-dup|opus|wf|N50|p0.5|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts')."
},
{
"id": "full|traj|haiku|N10|p0.05|s0.05|r0",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 1 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 270088 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N10|p0.2|s0.05|r0",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 4 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 20dbb1 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N10|p0.5|s0.05|r0",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 10 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 576432 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N10|p0.8|s0.05|r0",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 16 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: e439e0 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N50|p0.5|s0.0|r3",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 50 diploid individuals (2N = 100 gene copies) for 30 generations, each starting from 50 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 100 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 31 integers: the counts at generations 0, 1, ..., 30.\n\nRun code: f4f76a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.05|s0.05|r1",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 1 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: ebc81e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.2|s0.05|r1",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 4 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: e73b82 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.5|s0.05|r1",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 10 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: b1a61a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.8|s0.05|r1",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 16 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 98131a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N50|p0.5|s0.0|r4",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 50 diploid individuals (2N = 100 gene copies) for 30 generations, each starting from 50 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 100 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 31 integers: the counts at generations 0, 1, ..., 30.\n\nRun code: c6a600 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.05|s0.05|r2",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 1 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 97bc69 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.2|s0.05|r2",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 4 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 0f6cc7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.5|s0.05|r2",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 10 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: b30d0d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.8|s0.05|r2",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 16 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: ef3aaa (an arbitrary label used only for bookkeeping)."
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
return {name: 'full-jobs-3', n: JOBS.length, ok, failed: out.filter(o => !o || !o.ok).map(o => o ? o.id : null)}
