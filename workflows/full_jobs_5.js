export const meta = {
  name: 'full-jobs-5',
  description: 'LLM randomness experiment: 116 independent subagent calls',
  phases: [{ title: 'Calls' }],
}
const SCHEMAS = {"bits": {"type": "object", "properties": {"bits": {"type": "string"}}, "required": ["bits"]}, "counts": {"type": "object", "properties": {"counts": {"type": "array", "items": {"type": "integer"}}}, "required": ["counts"]}, "trajectories": {"type": "object", "properties": {"trajectories": {"type": "array", "items": {"type": "array", "items": {"type": "integer"}}}}, "required": ["trajectories"]}}
const JOBS = [
{
"id": "full|bits|haiku|plain|p0.05|r5",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: e436ba (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.05|r3",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 287c56 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.2|r1",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 6935a0 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.2|r7",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: a36567 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.2|r5",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 32aae5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r3",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: dfa878 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r9",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: a1e75b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.5|r15",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: ffea81 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r1",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 759760 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r7",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 93e90b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r13",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 27f6f1 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.5|r19",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 50fed6 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|plain|p0.8|r5",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: aa7591 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|haiku|rng|p0.8|r3",
"model": "haiku",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 2cae0e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.05|r1",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: b73699 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.05|r7",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: bc23b7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.05|r5",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 13853f (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.2|r3",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 75fef5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.2|r1",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 92bf53 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.2|r7",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: fa2498 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r5",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 27cfd3 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r11",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: b3c867 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.5|r17",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 5bf164 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r3",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 4c6048 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r9",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: d72f1a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.5|r15",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 4a861c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.8|r1",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: c130a2 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|plain|p0.8|r7",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 589d44 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|sonnet|rng|p0.8|r5",
"model": "sonnet",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 28c735 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.05|r3",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.05 and 0 with probability 0.95, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 6d8f72 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.05|r1",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 6d39cb (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.05|r7",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.05) samples: each sample is 1 with probability 0.05 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: a4e5c9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.2|r5",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.2 and 0 with probability 0.8, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 024dbb (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.2|r3",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.2) samples: each sample is 1 with probability 0.2 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 42ddbf (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r1",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: c5f8cb (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r7",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: f66680 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r13",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 52b0f6 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.5|r19",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.5 and 0 with probability 0.5, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 56d0b3 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r5",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 2a2f52 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r11",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 07492c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.5|r17",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.5) samples: each sample is 1 with probability 0.5 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 8cc23d (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|plain|p0.8|r3",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nGenerate a sequence of 300 random binary digits (0 or 1). Each digit should be 1 with probability 0.8 and 0 with probability 0.2, independently of all the other digits. Return the digits as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 94bc7e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.8|r1",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 0db00c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|bits|opus|rng|p0.8|r7",
"model": "opus",
"schema": "bits",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator. Output 300 independent, identically distributed Bernoulli(0.8) samples: each sample is 1 with probability 0.8 and 0 otherwise. Return them as one string of 0s and 1s with no spaces or separators (field 'bits').\n\nRun code: 64f6c2 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.05|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: d73d19 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.2|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 43f69c (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N10|p0.5|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 7482a4 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.5|s0.05|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: a47b51 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N10|p0.8|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 9830a7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.05|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: d97a37 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N50|p0.2|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 4f1819 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.2|s0.05|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 2bd8af (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.5|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: ca6741 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N50|p0.8|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: e6f370 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N200|p0.05|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 8178a6 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.05|s0.05|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 0995ee (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.2|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: f9d681 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.5|s0.0|r0",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 4aeaad (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|plain|N200|p0.8|s0.0|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: ccfadf (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|wf|N200|p0.8|s0.05|r1",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: be2ce9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|rng|N50|p0.2|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 20 copies of allele A (frequency 0.2). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: f4daf6 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|haiku|rng|N50|p0.8|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 80 copies of allele A (frequency 0.8). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 371cc3 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.05|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 6d65d9 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.2|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: ab41d5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N10|p0.5|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 7912e5 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.5|s0.05|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 1ef94e (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N10|p0.8|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: c9ab24 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.05|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 4d9a23 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N50|p0.2|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 7ed28f (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.2|s0.05|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: cea9ae (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.5|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 3520ee (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N50|p0.8|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: a5e3bc (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N200|p0.05|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: e61106 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.05|s0.05|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: b0e497 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.2|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 5fef69 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.5|s0.0|r0",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: efb592 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|plain|N200|p0.8|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 05ee66 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|wf|N200|p0.8|s0.05|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: e9fc32 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|rng|N50|p0.2|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 20 copies of allele A (frequency 0.2). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 32d554 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|sonnet|rng|N50|p0.8|s0.0|r2",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 80 copies of allele A (frequency 0.8). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 2ccd87 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.05|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 1 of the 20 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 8b0ea8 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.2|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 4 of the 20 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 4f9266 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N10|p0.5|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 10 diploid individuals, so there are 2N = 20 gene copies. At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 5fcb22 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.5|s0.05|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 10 of the 20 copies carry allele A (frequency 0.5). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: 667f79 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N10|p0.8|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 10 diploid individuals (2N = 20 gene copies). At generation 10, 16 of the 20 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 20 (field 'counts').\n\nRun code: ad49fd (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.05|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 5 of the 100 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: a4be2a (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N50|p0.2|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 50 diploid individuals, so there are 2N = 100 gene copies. At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 59f7fc (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.2|s0.05|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 20 of the 100 copies carry allele A (frequency 0.2). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: eba576 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.5|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: d30bbc (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N50|p0.8|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 80 of the 100 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 7a870f (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N200|p0.05|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: a9e239 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.05|s0.05|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 20 of the 400 copies carry allele A (frequency 0.05). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 8a422f (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.2|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 80 of the 400 copies carry allele A (frequency 0.2). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 8d77a6 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.5|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 200 of the 400 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 30e0c8 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|plain|N200|p0.8|s0.0|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nA population has N = 200 diploid individuals, so there are 2N = 400 gene copies. At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Simulate the number of copies of allele A in the next generation by random sampling. Give 20 independent simulated outcomes: each outcome is a separate, independent random draw of the next generation from the same current state, not a continuation of the previous outcome. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: fd6e23 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|wf|N200|p0.8|s0.05|r1",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 200 diploid individuals (2N = 400 gene copies). At generation 10, 320 of the 400 copies carry allele A (frequency 0.8). Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 400 (field 'counts').\n\nRun code: 60c9ce (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|rng|N50|p0.2|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 20 copies of allele A (frequency 0.2). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 8fcd1b (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct|opus|rng|N50|p0.8|s0.0|r2",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nYou are a random number generator used inside a population-genetics simulation. Population: N = 50 diploid individuals, 2N = 100 gene copies. Generation 10: 80 copies of allele A (frequency 0.8). Output 20 independent random samples of the allele-A count in the next generation under Wright-Fisher sampling. Return a list of 20 integers between 0 and 100 (field 'counts').\n\nRun code: 480d45 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|direct-dup|haiku|wf|N50|p0.5|s0.0|r2",
"model": "haiku",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts')."
},
{
"id": "full|direct-dup|sonnet|wf|N50|p0.5|s0.0|r1",
"model": "sonnet",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts')."
},
{
"id": "full|direct-dup|opus|wf|N50|p0.5|s0.0|r0",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts')."
},
{
"id": "full|direct-dup|opus|wf|N50|p0.5|s0.0|r3",
"model": "opus",
"schema": "counts",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. The population has N = 50 diploid individuals (2N = 100 gene copies). At generation 10, 50 of the 100 copies carry allele A (frequency 0.5). Simulate the number of copies of allele A in generation 11. Produce 20 independent replicate simulations of this single generation step, all starting from the same current state; the replicates must be statistically independent of one another. Return a list of 20 integers between 0 and 100 (field 'counts')."
},
{
"id": "full|traj|haiku|N10|p0.05|s0.05|r2",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 1 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 269616 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N10|p0.2|s0.05|r2",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 4 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: e30e79 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N10|p0.5|s0.05|r2",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 10 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: e27465 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|haiku|N10|p0.8|s0.05|r2",
"model": "haiku",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 16 copies of allele A at generation 0. Allele A is favoured by selection: its relative fitness is 1+s with s = 0.05, compared with 1 for the other allele. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: f4f8a0 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.05|s0.0|r0",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 1 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 892ba1 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.2|s0.0|r0",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 4 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 324f15 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.5|s0.0|r0",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 10 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 416a45 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N10|p0.8|s0.0|r0",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 16 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 82ee4f (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|sonnet|N50|p0.5|s0.0|r0",
"model": "sonnet",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 50 diploid individuals (2N = 100 gene copies) for 30 generations, each starting from 50 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 100 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 31 integers: the counts at generations 0, 1, ..., 30.\n\nRun code: 74a623 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.05|s0.0|r1",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 1 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 1c0dd7 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.2|s0.0|r1",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 4 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 5c1c24 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.5|s0.0|r1",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 10 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 7ef443 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N10|p0.8|s0.0|r1",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 10 diploid individuals (2N = 20 gene copies) for 40 generations, each starting from 16 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 20 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 41 integers: the counts at generations 0, 1, ..., 40.\n\nRun code: 4f4848 (an arbitrary label used only for bookkeeping)."
},
{
"id": "full|traj|opus|N50|p0.5|s0.0|r1",
"model": "opus",
"schema": "trajectories",
"prompt": "You are taking part in a scientific experiment on randomness. Produce the requested random output yourself, directly. Do NOT write or run code, do NOT use any tool other than the required structured-output tool, and do NOT use any external source of randomness. Return only the requested JSON fields.\n\nSimulate exactly as a Wright-Fisher process. Simulate 4 independent trajectories of a population with N = 50 diploid individuals (2N = 100 gene copies) for 30 generations, each starting from 50 copies of allele A at generation 0. At each generation the next count is a random sample given the current count. A count that reaches 0 or 100 stays there. The 4 trajectories must be independent of each other. Return a list of 4 trajectories (field 'trajectories'); each trajectory is a list of 31 integers: the counts at generations 0, 1, ..., 30.\n\nRun code: 48a2b6 (an arbitrary label used only for bookkeeping)."
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
return {name: 'full-jobs-5', n: JOBS.length, ok, failed: out.filter(o => !o || !o.ok).map(o => o ? o.id : null)}
