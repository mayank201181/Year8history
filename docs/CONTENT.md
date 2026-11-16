# Year 8 History Lab — content authoring spec

You are writing content for a history study app used by a **12–13-year-old (Year 8)** at a British
international school in **Singapore** (Tanglin Trust School; UK KS3-style course). The Year 8 theme is
**Dictatorship and Democracy**:

- Term 1 — *Under what circumstances did kings rise to power?* (William I, King John, Henry VIII)
- Term 2 — *Under what circumstances did dictatorships come to power?* (Hitler, Mao, Pol Pot; the impact
  of crises, weak government and charismatic leadership — **causation**)
- Term 3 — *How and why has democracy developed?* (French Revolution, Women's Suffrage (UK); **change and
  continuity** in equality, representation and human rights)

A parent will hand this to their child, so it must be **historically accurate, clear, engaging and
genuinely good history teaching**.

Read first: `lib/types.ts` (the contract), `lib/topics/_example.ts` (exact shape, written for history) and,
for your topic, its entry in `lib/topics/meta.ts` (title, unit/strand, icon, the **fixed section ids** and
what each section covers). Your guide must use exactly those section ids, in that order, with those
headings (you may polish heading wording slightly).

## Accuracy is non-negotiable
- Every date, name, number, quotation and claim must be **correct**. Where historians genuinely disagree
  or figures are estimates (death tolls, crowd sizes, vote shares), say so ("historians estimate…",
  "around…") and use mainstream, well-sourced figures. Never invent quotations: if you quote, it must be a
  real, well-known quotation, attributed correctly; otherwise paraphrase.
- Don't over-claim precision for medieval events (e.g. Domesday "about 13,000 places").
- Distinguish fact from interpretation, and myth from evidence (e.g. the arrow-in-the-eye story is
  uncertain; "Let them eat cake" was probably never said by Marie Antoinette).

## Pedagogy: Art of Problem Solving (AoPS) style, adapted for history — non-negotiable
- **Enquiry first.** Every guide section opens with a `discovery` problem the learner tries BEFORE being
  told: a decision to make ("You are Hindenburg in Jan 1933…"), a puzzle in the evidence, two sources that
  disagree, a prediction, a ranking task. `idea` reveals the insight afterwards.
- **Explain, don't just list.** `whyItWorks` = "Why it happened / why it matters": the causal mechanism or
  the significance, in 2–4 sentences.
- **Productive struggle.** Every core/challenge question has a **hint ladder** (`hints`, 2–4 rungs): rung 1
  = a strategic nudge ("Sort the reasons into categories first"), middle rungs = more help, last rung = the
  key fact or step. Hints never just state the answer.
- **Name the historical thinking moves** in `strategy` / `strategies`: Use the chronology · Sort causes into
  categories · Link the factors · Weigh both sides, then judge · Check the provenance (NOP) · Ask "useful for
  what?" · Cross-reference sources · Look for change AND continuity · Compare case studies · Ask "who
  benefits?" · Spot the anachronism · Use precise evidence · Consider the counterfactual · Zoom out to the big
  picture.
- **Mistakes are data.** Write `commonError` notes and `traps` (predictable wrong answers with targeted
  feedback — e.g. confusing Harold with Harald, suffragists with suffragettes, 1918 with 1928).
- **Genuine challenge.** `challenge` difficulty means *hard for a strong 13-year-old*: needs judgement and
  insight, not just more recall — weighing factors, "how far do you agree", comparing case studies across
  topics, evaluating a source's utility with provenance, spotting a flawed argument, counterfactuals,
  significance judgements.

## Voice, context and sensitivity
- Warm, direct, second person, short sentences. Treat the learner as capable — **never babyish**, no "Great
  job!!!" filler. British spelling (colour, recognise, programme).
- Singapore links where natural and accurate (Singapore's history, the region, e.g. comparing kingship with
  Malay sultanates, Japan's occupation of Singapore 1942–45 when discussing WWII, Singapore's democracy).
- Diverse names in invented scenarios (Aisha, Wei Ling, Arjun, Priya, Marcus, Siti, Ethan, Mei, Ravi, Hana).
- **Sensitive topics** (the Holocaust, the Khmer Rouge genocide, famine, the Terror, the Harrying of the
  North, force-feeding): sober, factual, respectful, age-appropriate. No graphic detail, no jokes, no
  gamified framing of atrocities, never present perpetrators admiringly. Name victims as people. It is fine
  — important — to be clear that these were crimes.
- Political neutrality about present-day politics (Singapore, China, Cambodia, UK): factual, no opinions on
  current parties or governments.

## Text format (every rendered string)
Markdown-lite (see the header of `lib/types.ts`):
- `**bold**`, `*italic*`, blank line = new paragraph, `- ` bullets, `1. ` numbered lines,
  `| a | b |` pipe tables (great for claimants, causes, terms of treaties, election results), `> ` callout
  (use for **source extracts**: `> "Quoted source text…" — Origin, date`), lines indented 4 spaces = a block.
- Do **not** use `{{ }}` (that is maths markup); write dates and numbers in plain text (1066, 14 October,
  £6.6 billion, 37%). Use en dashes for ranges (1934–35) and the real minus sign only if needed.
- Inside TypeScript: use double-quoted strings; use a backtick template literal only for SVG. The **only**
  escapes allowed are `\n` (newline: `\n` between bullet lines, `\n\n` between paragraphs) and `\"`. Never
  `\t`, `\f`, `\b`. Curly quotes “ ” ‘ ’ are fine inside strings and avoid escaping.

## Diagrams (inline SVG) — at least 3 sections per guide
- Timelines, simple maps (schematic, labelled, honest — e.g. England 1066 with York, Stamford Bridge,
  Pevensey, Hastings; Germany's lost territory; the Long March route; Cambodia and its neighbours), feudal
  pyramids, three-estates pyramids, election-results bar charts drawn to scale, cause-linking diagrams,
  change/continuity scales.
- A backtick string starting `<svg viewBox="…" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="…">`
  and ending `</svg>`. No `${`, no backticks inside, no scripts, no external images, no `<style>`.
- White/transparent background with dark strokes (#1f2937 / #334155) and soft fills (#c7d2fe, #fde68a,
  #bbf7d0, #fecaca, #bae6fd); text fill #1f2937; font-size 10–14; font-family sans-serif. Keep viewBox
  ≤ 480×340 and everything inside it; no overlapping labels. Bar charts must be drawn to scale.

## Guide sections
Each section: `discovery`, `body` (150–350 words; tables, bullets and a source callout where useful),
`diagram` (≥3 sections), `workedExamples` (≥1 — for history this is a **"Model answer walkthrough"**: an
exam-style question in `problem`, the thinking steps in `steps`, and a model answer in `answer`; at least
one per section has a `yourTurn` recall check with an auto-marked `number` (a year) or `text` answer),
`keyPoints` (3–5), `whyItWorks`, `strategies`, `thinkDeeper`.

`learn` minimums: flashcards ≥12, mustKnow ≥8, misconceptions ≥5, examMistakes ≥6, mnemonics ≥2,
realWorld ≥4 (why this history matters today), videos ≥3 (YouTube **search** URLs only:
`https://www.youtube.com/results?search_query=...`), keyDates ≥6 (chronological; `year` integer, negative
for BC), keyTerms ≥10.

## Question rules (MCQ / short / written)
- **Ids**: exactly as specified (`<topic>-m2-q07`, `<topic>-p1-q14`, `<topic>-quiz-q03`, `<topic>-ch-q08`),
  zero-padded, in order.
- Every question: `difficulty` (`warmup` | `core` | `challenge`), `guideRef` (one of your topic's section
  ids — **every section must be practised**), `hints` (≥1 for warmup, 2–4 for core/challenge), `strategy`
  where natural.
- Spread across the sections and across skill types: recall (dates, people, terms), chronology (put in
  order — as an MCQ of four orderings, or "which happened first"), cause/consequence, source inference
  (include a short `> ` source extract in the question with its provenance), provenance/utility,
  interpretation, significance, change & continuity, compare-and-contrast. **No near-duplicates.**
- **MCQ**: exactly 4 options, exactly one correct, plausible distractors built from real confusions.
  Options are **shuffled at display time**, so never write "option A", "the first answer", "all/none of the
  above", "both of the above". The `explanation` says why the right answer is right and why a tempting
  distractor is wrong (naming it by content). Spread `answerIndex` evenly across 0–3.
- **Short (auto-marked)**:
  - `number` — for years ("In what year…?") and counts. Value only; the question must ask for one number.
  - `text` — names, places, terms. List **every reasonable variant** in `accept` (with/without first name,
    title, common alternative spellings: "Harald Hardrada", "Hardrada"; "Emmeline Pankhurst", "Pankhurst",
    "Mrs Pankhurst"). Small spelling slips are forgiven automatically, so don't list misspellings. Avoid
    questions whose answer is a long phrase — if the answer needs a sentence, make it `written`.
  - Add 1–2 `traps` for classic confusions with targeted feedback (a trap must never be a correct answer).
  - `solution`: 1–3 short steps/facts. `commonError` for the classic slip.
- **Written** (explain / describe / how far do you agree / how useful is this source): `marks` = number of
  `markScheme` points (2–5). Each point has lower-case `keywords` (words a 13-year-old would actually write,
  including key names/dates). `modelAnswer` is a full-mark answer a teacher would give (PEEL style for
  explain questions; a judgement for "how far" questions). Mark points reward **reasoning** (explaining,
  linking, judging), not just naming facts. In the question text show the marks, e.g. "(4 marks)".
- Mix of kinds: the quiz and practice papers are roughly **40% short, 30% MCQ, 30% written**;
  challenge sets are mostly written with some hard MCQ/short.

## Validation (mandatory before you finish)
From the repo root:

    node scripts/validate-topic.ts <topicId>
    node scripts/typecheck-file.mjs lib/topics/<topicId>/<yourfile>.ts

Fix **every** reported issue in your own files (other authors' files may be missing — that's fine). Do NOT
run `npm run build`, `next build` or `npm install`. Do not edit any file other than the ones your task names.
