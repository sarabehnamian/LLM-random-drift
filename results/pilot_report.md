# Pilot report

Calls: 30

Valid structured JSON: 30/30
Calls that used a tool other than StructuredOutput: 0
Calls with free text besides the JSON: 3

| model | calls | median s/call | max s/call | mean context tokens (input+cache) |
|---|---|---|---|---|
| haiku | 10 | 4.9 | 10.1 | 95463 |
| sonnet | 10 | 3.6 | 12.8 | 52512 |
| opus | 10 | 4.1 | 17.2 | 62046 |

## Quick looks
- pilot|direct|opus|plain|N50|p0.2|s0.0|r0: k=20 mean=19.85 var=14.98 first8=[18, 23, 21, 15, 20, 26, 19, 17]
- pilot|direct|haiku|wf|N10|p0.5|s0.0|r0: k=20 mean=10.00 var=3.47 first8=[11, 9, 12, 8, 10, 13, 7, 10]
- pilot|traj|haiku|N10|p0.5|s0.0|r0: 4 trajectories, lengths [41, 41, 41, 41], finals [16, 0, 20, 2]
- pilot|direct|opus|wf|N50|p0.5|s0.05|r0: k=20 mean=51.85 var=25.08 first8=[53, 47, 56, 50, 44, 58, 52, 49]
- pilot|bits|opus|plain|p0.5|r0: n=200 freq1=0.515 alternation=0.603 first40=0110100111010001011011100010110100111001
- pilot|bits|haiku|rng|p0.2|r0: n=182 freq1=0.137 alternation=0.276 first40=0010000100000000100001000000010010000010
- pilot|direct|sonnet|rng|N200|p0.05|s0.0|r0: k=20 mean=20.00 var=15.26 first8=[17, 23, 19, 26, 15, 21, 18, 24]
- pilot|bits|sonnet|plain|p0.05|r0: n=206 freq1=0.034 alternation=0.068 first40=0000000000000010000000000000000000001000
- pilot|direct|haiku|wf|N50|p0.5|s0.05|r0: k=20 mean=51.00 var=15.26 first8=[49, 54, 47, 52, 56, 50, 45, 53]
- pilot|direct|sonnet|wf|N10|p0.5|s0.0|r0: k=20 mean=10.00 var=3.79 first8=[9, 12, 10, 7, 11, 10, 13, 8]
- pilot|direct|haiku|plain|N50|p0.2|s0.0|r0: k=20 mean=19.95 var=10.16 first8=[19, 22, 17, 24, 20, 18, 21, 15]
- pilot|direct|opus|rng|N200|p0.05|s0.0|r0: k=20 mean=19.80 var=20.06 first8=[18, 23, 14, 21, 26, 19, 17, 22]
- pilot|bits|sonnet|rng|p0.2|r0: n=200 freq1=0.145 alternation=0.291 first40=0001000010000001000000100010000000010000
- pilot|bits|haiku|plain|p0.5|r0: n=269 freq1=0.506 alternation=0.608 first40=0110100110101100101100011101001100101100
- pilot|bits|opus|plain|p0.05|r0: n=200 freq1=0.025 alternation=0.050 first40=0000000000000010000000000000000000000000
- pilot|traj|sonnet|N10|p0.5|s0.0|r0: 4 trajectories, lengths [41, 41, 41, 41], finals [20, 0, 16, 1]
- pilot|direct|sonnet|wf|N50|p0.5|s0.05|r0: k=20 mean=51.30 var=13.27 first8=[53, 48, 55, 51, 46, 57, 50, 52]
- pilot|traj|opus|N10|p0.5|s0.0|r0: 4 trajectories, lengths [41, 41, 41, 41], finals [20, 0, 7, 20]
- pilot|bits|haiku|plain|p0.05|r0: n=194 freq1=0.036 alternation=0.073 first40=0000100000000000000001000000000000000001
- pilot|direct|sonnet|plain|N50|p0.2|s0.0|r0: k=20 mean=20.35 var=14.03 first8=[18, 23, 20, 15, 26, 21, 19, 17]
- pilot|direct|opus|wf|N10|p0.5|s0.0|r0: k=20 mean=10.10 var=5.57 first8=[9, 12, 10, 7, 11, 13, 8, 10]
- pilot|direct|haiku|rng|N200|p0.05|s0.0|r0: k=20 mean=19.90 var=12.31 first8=[19, 23, 17, 21, 14, 26, 20, 18]
- pilot|bits|opus|rng|p0.2|r0: n=200 freq1=0.160 alternation=0.302 first40=0010000001000100000011000000010010000000
- pilot|bits|sonnet|plain|p0.5|r0: n=242 freq1=0.517 alternation=0.656 first40=0110100111001010011010110001011100101001

Most common first-6 sequences across all count calls:
- (9, 12, 10, 7, 11, 10): 2 calls
- (9, 12, 10, 7, 11, 13): 2 calls
- (18, 23, 21, 15, 20, 26): 1 calls
