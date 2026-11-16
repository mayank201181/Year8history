# Year 8 History Lab — content authoring spec

You are writing content for a history study app used by a **12–13-year-old (Year 8)** at a British
international school in **Singapore** (Tanglin Trust School; UK National Curriculum KS3 style,
leading to IGCSE). The year's theme is **Dictatorship and Democracy**, organised as three enquiry
questions:

- Term 1 — *Under what circumstances did kings rise to power?* (William I, King John, Henry VIII)
- Term 2 — *Under what circumstances did dictatorships come to power?* (Hitler, Mao, Pol Pot —
  focus on **crises, weakness of government and charismatic leadership** as causes)
- Term 3 — *How and why has democracy developed?* (French Revolution, Women's Suffrage in the UK —
  **change and continuity** in equality, representation and the protection of human rights)

plus a **Historian's Toolkit** topic (chronology, sources, provenance, interpretations, causation,
change/continuity/significance, PEEL writing, key concepts). A parent will hand this app to their
child, so it must be **historically accurate, clear, balanced, engaging and genuinely good history
teaching**.

Read first: `lib/types.ts` (the contract), `lib/topics/_example.ts` (exact shape — it is a maths
example; copy the *shape*, not the content) and, for your topic, its entry in `lib/topics/meta.ts`
(title, strand, the **fixed section ids** and what each section must cover — cover all of it).

## Pedagogy: "Art of Problem Solving" adapted for history — non-negotiable

- **Enquiry first.** Every guide section opens with a `discovery` puzzle the learner tries BEFORE
  the explanation: a dilemma ("You are the Witan in January 1066 — who do you crown, and why?"),
  a short source to make an inference from, a surprising fact to explain, a prediction to make, or
  an odd-one-out. `idea` reveals the historian's insight afterwards.
- **Reason, don't just tell.** `whyItWorks` = **"Why did this happen / why does it matter?"** —
  the causal or analytical reasoning behind the section (not a restatement of facts).
- **Productive struggle.** Every core/challenge question has a **hint ladder** (`hints`, 2–4
  rungs): rung 1 = a strategic nudge ("Think about who benefited from this"), middle = narrower
  clue, last = the key fact or step. Hints never just state the answer.
- **Multiple interpretations.** Where historians disagree, show it. In written questions use
  `solutions` for **alternative valid arguments** (label e.g. "Argument: luck mattered most" /
  "Argument: William's preparation mattered most"), each with 2–4 steps.
- **Name the historical thinking moves** in `strategy` / `strategies`, e.g.: Make an inference ·
  Check the provenance (NOP) · Cross-reference sources · Think about purpose · Long-term vs
  short-term causes · Link the causes · Weigh factors · Compare and contrast · Spot change and
  continuity · Judge significance · Use precise evidence · Consider the counter-argument ·
  Put it in chronological order · Think about who benefited · Ask "how typical?" · Avoid hindsight.
- **Mistakes are data.** `commonError` and `misconceptions` target real Year 8 errors: confusing
  centuries (1066 = 11th century), confusing suffragists and suffragettes, thinking Hitler seized
  power in a coup, thinking Magna Carta gave everyone rights in 1215, thinking primary = reliable,
  describing instead of explaining, etc.
- **Genuine challenge.** `challenge` = demanding for a strong 13-year-old: comparison across topics,
  "how far do you agree" judgements, evaluating competing interpretations, counterfactuals,
  analysing an unfamiliar source's provenance, spotting the flaw in an argument, linking causes.

## Accuracy, balance and sensitivity

- **Accuracy above all.** Use well-established facts and dates that a GCSE/IGCSE textbook would
  give. When a number is genuinely uncertain, say so and give the usual range ("an estimated
  1.5–2 million"), never invent false precision. No myths presented as fact (say "legend says…"
  where relevant, e.g. John's treasure in the Wash, Luding Bridge, "let them eat cake" — which
  Marie Antoinette almost certainly never said). Don't invent quotations: only quote real,
  well-known sources/translations, or clearly label a source as **"(adapted)"** or as a
  **constructed teaching source** ("Source A is a description written for this exercise").
- **Balanced and neutral** on contested present-day politics; let evidence and historians'
  debates speak. Never glorify dictators or violence.
- **Sensitive topics** (the Holocaust, Nazi persecution, the Cambodian genocide, the Great Leap
  Forward famine, executions): serious, factual and humane, age-appropriate for 12–13 — no
  graphic detail, no jokes, no gamified framing of atrocities, centre victims' humanity and
  "why remembering matters". Do not reproduce hate propaganda in a way that could persuade;
  describe it and analyse its purpose instead.
- British spelling (colour, organise, programme). Diverse names in examples (Aisha, Wei Ling,
  Arjun, Priya, Marcus, Siti, Ethan, Mei, Ravi, Hana, Jun, Zara). Singapore links where natural
  and true (e.g. Singapore's 1948 Legislative Council election, Singapore's 1959 self-government,
  the Japanese Occupation 1942–45 as context for the Second World War in Asia).
- Warm, direct, second person, short sentences; treat the learner as capable — **never babyish**,
  no "Great job!!!" filler.

## Text format (every rendered string)

Markdown-lite (see the header of `lib/types.ts`): `**bold**`, `*italic*`, blank line = new
paragraph, `- ` bullets, `1. ` numbered lines, `| a | b |` tables (great for timelines,
comparison grids, factor tables), `> ` callout lines (**use these for quoted sources**), lines
indented 4 spaces = a monospace block (rarely needed). The `{{ … }}` maths markup exists but
**never write `{{` or `}}` in history text**.

**Sources in questions/discovery:** put the provenance in bold then the text as a callout, e.g.

    "**Source A** — from the *Anglo-Saxon Chronicle*, written by English monks (adapted).\n\n> King Harold was killed, and earls Leofwine and Gyrth his brothers… and the French had possession of the place of slaughter.\n\nWhat can you infer from Source A about how the English saw the battle?"

Inside TypeScript use double-quoted strings; use a backtick template literal only for SVG. The
**only** escapes allowed are `\n` and `\"`. Never `\t`, `\f`, `\b`.

## Diagrams (inline SVG) — ≥ 4 sections must have one

Timelines, maps (simple, schematic, clearly labelled "not to scale"), the feudal pyramid, family
trees, causation webs, factor-balance scales, estate pie charts, election bar charts (real
figures), Venn/compare grids.
- A backtick string starting `<svg viewBox="…" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="…">`
  and ending `</svg>`. No `${`, no backticks inside, no scripts, no external images, no `<style>`.
- White background, dark strokes (#1f2937 / #334155), soft fills (#c7d2fe, #fde68a, #bbf7d0,
  #fecaca, #bae6fd), font-size 11–14, font-family sans-serif. viewBox ≤ ~480×320; everything
  inside it, no overlapping labels. Timelines must be to scale (or labelled "not to scale").
  Maps: schematic and honest (relative positions correct). Data charts: real figures only.
- No images of real people; no swastikas or other hate symbols drawn in diagrams.

## Guide (`guide.ts` → `export const guide: TopicGuide`)

- `id`, `title`, `strand`, `icon` exactly as in `meta.ts`. `summary` = one-line hook.
  `intro` = 2–3 short paragraphs setting up the enquiry question.
- `guide` = **exactly the section ids in meta.ts, in order**. Each section: `discovery`,
  `body` (250–450 words, well-structured with sub-points, a table where useful, key dates and
  names in **bold**), `keyPoints` (4–6), `whyItWorks`, `strategies` (2–3), `thinkDeeper`
  (an open, arguable question), `workedExamples` (≥ 1 per section) and `diagram` where useful.
- **Worked examples = modelled historian's answers.** `problem` = an exam-style question
  (e.g. "Explain why William won the Battle of Hastings. (6 marks)"); `steps` = how a strong
  student builds the answer (plan → PEEL paragraph 1 → paragraph 2 → judgement), with the actual
  sentences; `answer` = a one-line summary of the judgement. At least **half** the sections need
  a worked example with a `yourTurn` — a short auto-marked follow-up (a date/name/term/fact) with
  `answer` as an `AnswerSpec` (`number` for years, `text` for words — see below) and a one-line
  `solution`.
- `learn`: `flashcards` ≥ 16 (key terms, people, dates), `mustKnow` ≥ 8 ("Can you…?"),
  `misconceptions` ≥ 5, `examMistakes` ≥ 6, `mnemonics` ≥ 2 (real, useful ones e.g. LAMB for
  Versailles, "Divorced, beheaded, died…"), `realWorld` ≥ 4 (why this matters today / links to
  Singapore or the modern world), `videos` ≥ 3 (YouTube **search** URLs only:
  `https://www.youtube.com/results?search_query=…` — e.g. BBC Bitesize, Simple History,
  Oversimplified, TED-Ed, Kings and Generals, Crash Course), `formulas` ≥ 6 — used as **key
  facts / timeline entries**: `name` = the date or label, `formula` = the event/fact, `note`
  optional (feeds the app's Timeline & Key Facts page).

## Question rules (MCQ / short / written)

- **Ids** exactly as specified in your task (e.g. `william-i-m2-q07`, `william-i-p3-q04`,
  `william-i-quiz-q03`, `william-i-ch-q08`), zero-padded, in order.
- Every question: `difficulty` (`warmup` | `core` | `challenge`), `guideRef` (one of your topic's
  section ids — **every section must be practised**), `hints` (≥1 for warmup, 2–4 for
  core/challenge), `strategy` where natural.
- Spread across sections and skills: knowledge (dates, people, terms), chronology (order events),
  cause/consequence, source inference and provenance, interpretations, significance, change and
  continuity, comparison, judgement. **No near-duplicates.**
- **MCQ**: exactly 4 options, exactly one defensibly correct, distractors built from *real*
  confusions (wrong date, wrong person, a true fact that doesn't answer the question, a
  consequence mistaken for a cause). Options are **shuffled at display time**, so never write
  "option A", "the first answer", "all/none of the above", "both A and B". The `explanation`
  says why the right answer is right and why a tempting distractor is wrong (naming it by its
  content). Spread `answerIndex` evenly across 0–3. Avoid "Which is NOT…" unless the three true
  ones are unambiguously true.
- **Short (auto-marked)** — for crisp facts only:
  - `number` for a year: `{ type: "number", value: 1066 }`. The question must be unambiguous
    about which year ("In which year…").
  - `text` for a name/term/place: list **every reasonable variant** in `accept`
    (e.g. `["William", "William I", "William the Conqueror", "Duke William", "William of Normandy"]`;
    `["Magna Carta", "the Great Charter", "Magna Charta"]`). Small spelling slips in longer names
    are forgiven automatically, but list common alternative spellings anyway
    (`Guomindang`/`Kuomintang`/`GMD`/`KMT`). Ask for **one** thing; say e.g. "Give his surname."
    if a surname is wanted. Set `display` to the canonical answer.
  - Add 1–2 `traps` for predictable wrong answers with targeted feedback
    (e.g. `{ spec: { type: "text", accept: ["Harald Hardrada", "Hardrada"] }, feedback: "Hardrada lost at Stamford Bridge — who won at Hastings?" }`).
    A trap must never be accepted by the real answer.
  - `solution`: 1–3 short steps explaining the answer. `commonError` where useful.
- **Written** (explain / describe / infer from a source / evaluate a source / "how far do you
  agree" / compare): `marks` = number of `markScheme` points (2–6). Each point has lower-case
  `keywords` (words a learner would actually write — include synonyms and key names/dates, e.g.
  `["luck", "lucky", "wind", "timing", "stamford bridge", "tired", "exhausted"]`). `modelAnswer`
  is a complete PEEL-style answer a teacher would give full marks (60–200 words). Mark points
  should reward *reasoning* (explaining *why*, linking to the question, reaching a judgement),
  not just naming facts. Use `solutions` for alternative valid lines of argument on judgement
  questions.

## Validation (mandatory before you finish)

Run, from the repo root:

    node scripts/validate-topic.ts <topicId>
    node scripts/typecheck-file.mjs lib/topics/<topicId>/<yourfile>.ts

Fix **every** reported issue that concerns your file (other authors' files may be missing — that's
fine). Do NOT run `npm run build`, `next build` or `npm install`. Do not edit any file other than
the one(s) your task names.
