export const meta = {
  name: 'full-jobs-4',
  description: 'LLM randomness experiment: 116 independent subagent calls',
  phases: [{ title: 'Calls' }],
}
const SCHEMAS = {"bits": {"type": "object", "properties": {"bits": {"type": "string"}}, "required": ["bits"]}, "counts": {"type": "object", "properties": {"counts": {"type": "array", "items": {"type": "integer"}}}, "required": ["counts"]}, "trajectories": {"type": "object", "properties": {"trajectories": {"type": "array", "items": {"type": "array", "items": {"type": "integer"}}}}, "required": ["trajectories"]}}
const JOBS = [
{
"id": "full|bits|haiku|plain|p0.05|r4",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: d2778c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.05|r2",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 899dde (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.2|r0",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: caf97d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.2|r6",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 78d6a6 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.2|r4",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 5ca3b8 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r2",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: ad4545 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r8",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 3b6466 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r14",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 5ef3d5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r0",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 263a66 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r6",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 70c29c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r12",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 1b9182 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r18",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 476d14 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.8|r4",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 5c75a9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.8|r2",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: abb2fe (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.05|r0",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 0a77a8 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.05|r6",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 993dba (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.05|r4",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: ad4120 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.2|r2",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: fbba79 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.2|r0",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: cbe1ff (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.2|r6",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: ec827e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r4",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: c74edf (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r10",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 2c2b7e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r16",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 018621 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r2",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 7a152b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r8",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 815e14 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r14",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: d9f143 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.8|r0",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: dc2e7f (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.8|r6",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 61cc84 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.8|r4",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 0c8640 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.05|r2",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: d375a6 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.05|r0",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 805520 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.05|r6",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 49e112 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.2|r4",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 054ae9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.2|r2",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 41829c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r0",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: adc606 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r6",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 87f233 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r12",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 1bbe3a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r18",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 55b9aa (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r4",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 92cf38 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r10",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 84e008 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r16",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 8c9030 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.8|r2",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: e1ed1e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.8|r0",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 6b6d8f (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.8|r6",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: bac093 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.05|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 8d7167 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N10|p0.2|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 814806 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N10|p0.5|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 344a8b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.5|s0.05|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: a64a9c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.8|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 3b29f6 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N50|p0.05|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: b45680 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N50|p0.2|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 4a823e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.2|s0.05|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 95da76 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.5|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: b9576d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N50|p0.8|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 80769d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N200|p0.05|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 495a36 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.05|s0.05|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: b0b06d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.2|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: edac58 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N200|p0.5|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: db4a17 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N200|p0.8|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: d6a1ff (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.8|s0.05|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: c11328 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|rng|N50|p0.2|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 20 copies of allele A (frequency 0.2). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 9b42bf (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|rng|N50|p0.8|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 80 copies of allele A (frequency 0.8). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 74d2d7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.05|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 1024a8 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N10|p0.2|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 99742a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N10|p0.5|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 3d8a36 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.5|s0.05|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: ae1e6d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.8|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: bf99d7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N50|p0.05|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 8df4fb (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N50|p0.2|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 612f73 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.2|s0.05|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: d29ff5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.5|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: c116e2 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N50|p0.8|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 3742fc (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N200|p0.05|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: a92fd0 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.05|s0.05|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 5c1a8a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.2|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 4621fe (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N200|p0.5|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 01282c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N200|p0.8|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 38d0bf (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.8|s0.05|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: cf917e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|rng|N50|p0.2|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 20 copies of allele A (frequency 0.2). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 12a46b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|rng|N50|p0.8|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 80 copies of allele A (frequency 0.8). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 74418a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.05|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 9a720c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N10|p0.2|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 5a73aa (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N10|p0.5|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: bff0bf (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.5|s0.05|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 635e3c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.8|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: f2a351 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N50|p0.05|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: d7ba69 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N50|p0.2|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: eba515 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.2|s0.05|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: c7eafa (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.5|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 9af0b7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N50|p0.8|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 813767 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N200|p0.05|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 188bd8 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.05|s0.05|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 68357f (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.2|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 8477cb (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N200|p0.5|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 8c87a8 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N200|p0.8|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: b38c57 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.8|s0.05|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 1521ea (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|rng|N50|p0.2|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 20 copies of allele A (frequency 0.2). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 094859 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|rng|N50|p0.8|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 80 copies of allele A (frequency 0.8). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 966999 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits-dup|haiku|plain|p0.5|r2",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits')."
},
{
"id": "full|bits-dup|sonnet|plain|p0.5|r1",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits')."
},
{
"id": "full|bits-dup|opus|plain|p0.5|r0",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits')."
},
{
"id": "full|bits-dup|opus|plain|p0.5|r3",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits')."
},
{
"id": "full|traj|haiku|N10|p0.05|s0.05|r1",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 1 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 24b1ad (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N10|p0.2|s0.05|r1",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 4 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: a34d8e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N10|p0.5|s0.05|r1",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 10 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 2539fa (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N10|p0.8|s0.05|r1",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 16 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: a8ce4c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N50|p0.5|s0.0|r4",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 50 diploid individuals (2N = 100 gene copies) for 30 generations, each starting from 50 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 100 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 31 integers: the counts at generations 0, 1, ..., 30.\n\nRun code: c53d84 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.05|s0.05|r2",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 1 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: e3f428 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.2|s0.05|r2",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 4 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 442114 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.5|s0.05|r2",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 10 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 059f32 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.8|s0.05|r2",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 16 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 931d60 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.05|s0.0|r0",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 1 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 86154d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.2|s0.0|r0",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 4 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: b1e53d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.5|s0.0|r0",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 10 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 9bfd66 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.8|s0.0|r0",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 16 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: e9814c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N50|p0.5|s0.0|r0",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 50 diploid individuals (2N = 100 gene copies) for 30 generations, each starting from 50 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 100 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 31 integers: the counts at generations 0, 1, ..., 30.\n\nRun code: ee80fe (an arbitrary label used only for bookkeeping)."
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
return {name: 'full-jobs-4', n: JOBS.length, ok, failed: out.filter(o => !o || !o.ok).map(o => o ? o.id : null)}
