# Skill drills spec (history recall & reasoning drills)

Drills give a learner **unlimited fresh practice** on one fine-grained skill, auto-marked, with a
short explanation — they power the Daily 5, the skills map, mastery levels and quick-fire sprints.
In history they are **bank-based**: each drill holds a bank of verified facts and generates a
question by picking items and a wording template with the seeded RNG. You write
`lib/drills/<topicId>.ts`:

    import type { Drill } from "./types.ts";
    export const drills: Drill[] = [ … ];

Read `lib/drills/types.ts`, `lib/types.ts` (AnswerSpec), `lib/answerCheck.ts` (`checkText` is
case/space/punctuation-insensitive, ignores a leading "the", strips accents and forgives a
1–2 letter slip in names of 5+ letters; numbers must be exact) and `docs/CONTENT.md` (house style,
accuracy rules). Your topic's guide (`lib/topics/<topicId>/guide.ts`) may exist — if so, keep your
facts consistent with it.

## Requirements
- **8–10 drills per topic**, covering every section of the topic (set `guideRef` to the section
  id). Order from recall (`level: 1`) to reasoning (`level: 3`). `id`: `"<topicId>.<kebab-skill>"`;
  `topicId` set; a clear `title` ("Match the date to the event", "Who said or did this?",
  "Cause or consequence?", "Which came first?", "Key term from its definition", "Primary or
  secondary?", "Which estate?", "Suffragist or suffragette?").
- Drill types that work well (mix them):
  - **Date recall**: "In which year did …?" → `{ type: "number", value: 1066 }`.
  - **Event from date**: "What happened in England in 1086?" → `text` with generous `accept`
    (e.g. `["Domesday Book", "Domesday survey", "the Domesday Book was completed"]`) — keep
    answers short and distinctive.
  - **Person/term recall** from a description or definition → `text`.
  - **Which came first?** — pick two events from a dated bank, ask which happened first; answer
    `text` with accept variants of the earlier one (short labels!).
  - **Classify**: "Was X a long-term cause, short-term cause or trigger of …?", "Suffragist or
    suffragette?", "Primary or secondary source?", "Crisis, weak government or charismatic
    leadership?" → `text` with all variants (e.g. `["suffragette", "suffragettes", "wspu"]`).
    State the allowed answers in the prompt ("Answer *suffragist* or *suffragette*.").
  - **How many / how long**: years between two events (number), figures with clear sources
    (e.g. "How many soldiers did Versailles allow Germany?" → 100000; accept only exact
    textbook figures).
- `generate(rng, tier)` must be **pure and deterministic** given the rng (only `rng.*`, never
  Math.random or Date). Use `tier` for difficulty: 1 = headline facts, 2 = typical Year 8 detail,
  3 = finer detail or two-step reasoning (e.g. years between events, classify with justification
  in the solution).
- **Variety:** each tier must produce ≥ 15 distinct prompts in 200 seeds — use banks of ≥ 12–20
  items and 2–3 wording templates.
- **Accuracy is paramount**: every fact in a bank must be a well-established textbook fact. If a
  date is disputed or approximate, leave it out. Never two events in a "which came first" pair
  from the same year.
- `solution` = 1–3 short sentences that teach (give the fact and a reason/context). `hint` = one
  nudge. Add `traps` for the most likely wrong answer where natural (e.g. the other claimant, the
  year 1067 for the coronation) — a trap must never be accepted by the real answer.
- Prompts in plain markdown-lite (no `{{ }}`).

## Validation (mandatory)

    node scripts/validate-drills.ts <topicId>
    node scripts/typecheck-file.mjs lib/drills/<topicId>.ts

The validator runs every drill 200× per tier and checks text, answer self-consistency, traps and
variety. It also prints a sample of each drill — **read the samples and answer them yourself** to
confirm facts and accept-lists. Fix everything before finishing.
Do NOT run `npm run build`, `next build` or `npm install`. Edit only your drill file.
