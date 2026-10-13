# Literature notes

Paper: "Can a language model be random enough to be evolution? Genetic drift with an LLM as the random number source"

Every entry was confirmed with web search on 2026-10-13. Each one lists its BibTeX key, a short summary of why it matters for this paper, and the URL used to confirm it. Direct page fetches (arXiv, Crossref) were blocked from this environment, so the metadata comes from search-indexed publisher, arXiv, PubMed and ACL Anthology records. Numbers marked "(secondary)" come from search snippets or third-party summaries, not a full-text read. Check them against the PDF before quoting them.

## 1. Randomness of LLM outputs

- **koevering2024random**: Van Koevering & Kleinberg (arXiv:2406.00092, 2024; a later revision is titled "Heads, Tails, and AI Fails: LLMs, Randomness, and Human Judgments").
  - Prompts were "Flip 20 coins" at temperatures 0 to 1.5. Each sequence was cut into overlapping 8-flip windows so it could be compared with human data.
  - GPT-4 and Llama 3 reproduce and amplify nearly every human bias tested: over-alternation, aversion to long runs, too many near-50/50 sequences, and first-flip effects. GPT-3.5 behaves closer to random.
  - Humans alternate about 60% of the time against 50% expected. All three LLMs skew higher. At low temperature GPT-4 outputs almost only "H,T,H,T,..." (near-100% alternation, secondary).
  - Under a heads-first prompt, GPT-4 started with heads in 33 runs and tails in 6 (secondary, raw counts from a table).
  - This is the closest prior work to our setting: it predicts negative autocorrelation and under-dispersion. In a drift model that means less variance than binomial, so Ne would be inflated.
  - URL: https://arxiv.org/abs/2406.00092
- **hopkins2023random**: Hopkins, Renda & Carbin (ICML 2023 SODS workshop).
  - Tests LLMs as samplers in domains where the target distribution is known. LLMs struggle to produce reasonable distributions.
  - Headline example: GPT-4 and Codex asked for uniform samples on [0,1) give clearly non-uniform output.
  - URL: https://mlanthology.org/icmlw/2023/hopkins2023icmlw-llms (also https://people.csail.mit.edu/renda/llm-sampling-paper)
- **zhang2024forcing**: Zhang, Schwarzschild, Carlini, Kolter & Ippolito (arXiv:2404.10859, 2024).
  - Instruction-tuned models are poor at random choices. Asked for a uniform number from 1 to 10, Llama-2-13B-chat heavily favors 5.
  - A fine-tuning method that targets diffuse output distributions raises entropy and coverage.
  - Venue (COLM 2024?) not confirmed, so it is cited as arXiv.
  - URL: https://arxiv.org/abs/2404.10859
- **coronado2025deterministic**: Coronado-Blázquez (arXiv:2502.19965, 2025).
  - Six LLMs were asked for "random" numbers across ranges, temperatures and prompt languages. Answers are largely deterministic.
  - For 1 to 100: GPT-3.5-turbo favors 47 and 57, then 42 and 73. Other models favor 37, 47 and 73.
  - For 1 to 10: GPT-4o-mini, Phi-4 and Gemini 2.0 output 7 about 80% of the time (secondary).
  - The number 1 is never chosen.
  - URL: https://arxiv.org/abs/2502.19965
- **harrison2024comparison**: Harrison (arXiv:2408.09656, 2024).
  - Adapts a human random-number-generation task to ChatGPT-3.5.
  - The model avoids repeats and adjacent (sequential) numbers more strongly than humans do, with lower repeat and adjacent-number frequencies. That is an exaggerated form of the human anti-repetition bias.
  - URL: https://arxiv.org/abs/2408.09656
- **gu2025dice**: Gu, Pang, Shen & Cheng (COLING 2025, pp. 5375–5390; arXiv:2404.09043).
  - LLM agents asked to generate behavior sequences that follow an explicit or implicit probability distribution.
  - They appear to understand the distributions but cannot sample from them accurately. Code tools help only partly.
  - URL: https://aclanthology.org/2025.coling-main.360
- **xiao2025flipping**: Xiao, Zenn, Liu, Liu, Bamler & Schölkopf (arXiv:2506.09998, 2025).
  - Shows that LLMs asked to flip biased (Bernoulli) coins produce biased samples.
  - Proposes Verbalized Rejection Sampling, where the model reasons about whether to accept or reject proposals, to reduce that bias.
  - Relevant as a possible mitigation for our setup.
  - URL: https://arxiv.org/abs/2506.09998
- **gupta2025coinflips**: Gupta et al. (ACL 2025, pp. 7634–7655).
  - In biased coin-flip settings, LLMs start from miscalibrated priors and largely ignore explicit bias instructions.
  - Given enough in-context flips, they update in a roughly Bayesian way. Context history therefore shifts their outputs, which matters if a drift simulation feeds back earlier outcomes.
  - URL: https://aclanthology.org/2025.acl-long.377
- **guo2025illusion**: Guo et al. (Findings of EMNLP 2025, pp. 8618–8637).
  - 20 LLMs playing rock-paper-scissors fail to randomize as the Nash equilibrium requires.
  - There is a gap between what the models know and how they behave, plus model-specific positional (option-order) biases that pre-training biases alone do not explain.
  - URL: https://aclanthology.org/2025.findings-emnlp.458
- **zhao2026dice**: Zhao, Du & Wang (ACL 2026, pp. 22942–22959; arXiv:2601.05414).
  - Statistically powered audit of 11 frontier LLMs on 15 distributions, using batch generation versus independent stateless calls.
  - Median pass rate was about 13% for batch generation and near 0% for independent calls (secondary, alphaXiv summary).
  - Heavy-tailed distributions (Cauchy, chi-square) were failed by every model.
  - The batch-versus-independent contrast matters directly for how we query the LLM per generation.
  - URL: https://aclanthology.org/2026.acl-long.1051/
- **gu2026stochasticity**: Gu, De, Titsias, Markeeva, Veličković & Pascanu (arXiv:2604.06543, 2026).
  - LLMs fail to turn their internal probability estimates into stochastic outputs.
  - Frontier models can convert a supplied random seed into a target distribution, but direct sampling is fundamentally flawed.
  - URL: https://arxiv.org/abs/2604.06543
- **karanjai2025randomness**: Karanjai, Lu, Chodavarapu, Xu & Shi (arXiv:2510.12080, 2025).
  - Evaluates LLM-produced random numbers, strings and shuffles with entropy measures and the NIST test suite.
  - Randomness quality is inconsistent and depends on tool access, task and prompt.
  - URL: https://arxiv.org/abs/2510.12080
- **yang2025flipcoin**: Yang (arXiv:2506.18928, 2025).
  - Studies whether LLMs recognize when strategic randomization is optimal in game settings, and whether they carry it out, through reasoning and experience.
  - URL: https://arxiv.org/abs/2506.18928

## 2. Human random sequence generation

- **wagenaar1972generation**: Psychological Bulletin 77(1):65–72.
  - Classic critical survey of studies where humans generate random sequences.
  - Humans deviate systematically from randomness, for example through excess alternation and avoidance of repetition, but the studies' differing methods make them hard to compare.
  - URL: https://swov.nl/nl/publicatie/generation-random-sequences-human-subjects-critical-survey-literature
- **falk1997making**: Psychological Review 104(2):301–318.
  - Perceived randomness tracks how hard a sequence is to encode, not its objective randomness.
  - People over-alternate when generating sequences and judge over-alternating sequences (alternation probability around 0.6) as most random.
  - URL: https://philpapers.org/rec/FALMSO
- **nickerson2002production**: Psychological Review 109(2):330–357.
  - Comprehensive review of randomness production and perception tasks.
  - Argues the claim that people cannot produce or recognize randomness is weaker than often stated, because it depends on task definitions.
  - URL: https://pubmed.ncbi.nlm.nih.gov/11990321/
- **barhillel1991perception**: Advances in Applied Mathematics 12(4):428–454.
  - People see clumps and streaks in truly random series and expect more alternation than chance gives.
  - Their "ideal" random sequence matches overall frequencies and is also locally irregular within short segments.
  - URL: https://cris.huji.ac.il/en/publications/the-perception-of-randomness/
- **rapoport1992generation**: JEP: General 121(3):352–363.
  - Random series generated within competitive two-person games still show sequential dependencies, though they come closer to random than explicit randomization tasks.
  - URL: https://www.researchgate.net/publication/232454259_Generation_of_Random_Series_in_Two-Person_Strictly_Competitive_Games
- **gilovich1985hot**: Cognitive Psychology 17(3):295–314.
  - The "hot hand" finding: no positive serial correlation in basketball shooting despite strong beliefs in streaks, which the authors read as a misperception of random sequences.
  - Later contested by Miller & Sanjurjo.
  - URL: https://www.sciencedirect.com/science/article/abs/pii/0010028585900106
- **tversky1971belief**: Psychological Bulletin 76(2):105–110.
  - The "law of small numbers": people expect small random samples to be highly representative of the population. This is the root of the over-balancing and over-alternation biases that LLMs appear to inherit.
  - URL: https://www.researchgate.net/publication/243770566_Belief_in_the_law_of_small_numbers

## 3. Population genetics and RNG quality

- **wright1931evolution**: Genetics 16(2):97–159.
  - Foundational quantitative treatment of drift, effective population size and inbreeding in finite populations. This is the Wright–Fisher model we use.
  - URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC1201091
- **fisher1930genetical**: Clarendon Press, Oxford.
  - Founding text of mathematical population genetics, co-origin of the Wright–Fisher model.
  - URL: https://catalogue.nli.ie/Record/vtls000449087
- **kimura1962probability**: Genetics 47(6):713–719.
  - Diffusion-approximation formula for fixation probability. Under neutrality it equals the initial allele frequency.
  - This is the benchmark our LLM-driven fixation probabilities should meet.
  - URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC16552/ (reference list giving the DOI); PDF https://www.zoology.ubc.ca/~mmosmond/let/pdfs/Kimura_1962.pdf
- **kimura1969average**: Genetics 61(3):763–771.
  - Mean time to fixation. For a new neutral mutant it is about 4Ne generations. More generally it is -4N[p ln p + (1-p) ln(1-p)]/... in the diffusion limit (see paper).
  - This is the benchmark for our conditional fixation times.
  - URL: https://pubmed.ncbi.nlm.nih.gov/17248440/
- **ewens2004mathematical**: Springer, 2nd ed., Interdisciplinary Applied Mathematics vol. 27.
  - Standard reference for the Wright–Fisher model, diffusion theory and the definitions of effective population size.
  - URL: https://link.springer.com/doi/10.1007/978-0-387-21822-9
- **charlesworth2009effective**: Nature Reviews Genetics 10(3):195–205.
  - Review of the effective population size concept: rate of drift, neutral diversity proportional to Ne·mu, efficacy of selection.
  - URL: https://bionumbers.hms.harvard.edu/bionumber.aspx?id=113338 (citation with DOI); copy at https://duckdna.org/syllabi/core/articles/2_Brian_Charlesworth_2009_nrg2526.pdf
- **crow1970introduction**: Harper & Row, New York.
  - Classic textbook. Gives the inbreeding and variance effective size definitions, where variance Ne is defined from Var(Δp) = p(1-p)/(2Ne).
  - That definition is the one we use to read LLM sampling variance as an "effective population size".
  - URL: https://bemis.marmot.org/Record/.b12781897
- **ferrenberg1992monte**: Physical Review Letters 69:3382–3384.
  - Subtle correlations in "high-quality" pseudo-random generators (Marsaglia–Zaman subtract-with-borrow) produced wrong answers in Wolff-cluster Monte Carlo of the 2D Ising model.
  - Precedent for RNG defects biasing simulation results.
  - URL: https://inspirehep.net/literature/352095
- **lecuyer2007testu01**: ACM Transactions on Mathematical Software 33.
  - TestU01, the standard battery of empirical tests for uniform RNGs. Many widely used generators fail it.
  - DOI confirmed only by an Academia.edu record. Issue and article number were left out because they could not be confirmed.
  - URL: https://www.gerad.ca/en/papers/G-2006-69 ; https://www.academia.edu/20779290/TestU01

## 4. LLMs as simulated agents and in evolutionary computation

- **park2023generative**: UIST '23.
  - "Generative agents": LLM agents with memory, reflection and planning simulate believable human behavior in a sandbox town.
  - URL: https://arxiv.org/abs/2304.03442 (lists the DOI 10.1145/3586183.3606763)
- **horton2023large**: NBER Working Paper 31122.
  - "Homo silicus": GPT-3 used as a simulated economic agent reproduces classic behavioral-economics results qualitatively, such as status-quo bias and fairness.
  - The later arXiv version (2301.07543) adds coauthors.
  - URL: https://www.nber.org/papers/w31122
- **argyle2023out**: Political Analysis 31(3):337–351.
  - "Algorithmic fidelity": GPT-3 conditioned on demographic backstories produces "silicon samples" whose survey responses match those of real subgroups.
  - URL: https://www.cambridge.org/core/journals/political-analysis/article/abs/out-of-one-many-using-language-models-to-simulate-human-samples/035D7C8A55B237942FB6DBAD7CAA4E49
- **aher2023using**: ICML 2023, PMLR 202:337–371.
  - "Turing Experiments": LLMs replicate the Ultimatum Game, garden-path sentences and Milgram results.
  - In wisdom-of-crowds tasks, newer models show a "hyper-accuracy distortion", meaning too little spread across simulated people. Low output diversity is the same problem we face.
  - URL: https://proceedings.mlr.press/v202/aher23a
- **gao2024large**: Humanities and Social Sciences Communications 11(1).
  - Survey of LLM-empowered agent-based modeling and simulation across cyber, physical, social and hybrid domains, including challenges in alignment and evaluation.
  - DOI taken from the RePEc record.
  - URL: https://ideas.repec.org/a/pal/palcom/v11y2024i1d10.1057_s41599-024-03611-3.html
- **lehman2022evolution**: arXiv:2206.08896.
  - Evolution through Large Models (ELM): code LLMs act as mutation operators in genetic programming (MAP-Elites, Sodarace).
  - URL: https://arxiv.org/abs/2206.08896v1
- **meyerson2024language**: ACM TELO 4(4), Article 27, 2024 (arXiv:2302.12170).
  - Language model crossover: few-shot prompting with parent genotypes yields offspring. Tested on bit-strings, sentences, equations, image prompts and code.
  - URL: https://www.kmjn.org/publications/LanguageModelCrossover_TELO24-abstract.html

## Not included or caveats

- "Renda et al." as a separate paper: the only Renda work found is the Hopkins, Renda & Carbin workshop paper (equal contribution, author order set by coin flip).
- Zhang et al. 2024: the COLM 2024 acceptance could not be confirmed, so it is cited as arXiv.
- Kimura & Ohta 1969 note: the exact general formula above is abbreviated. Quote it from the paper itself.
