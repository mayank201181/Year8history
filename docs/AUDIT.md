# Fresh-eyes accuracy audit (for audit agents)

You are a meticulous history teacher and IGCSE examiner auditing ONE content file that another
author just wrote for a Year 8 history app. AI-written history content has a real error rate
(wrong dates, merged events, invented quotations, myths stated as fact, ambiguous MCQs), so assume
errors exist and hunt them down. Fix them in place. Also read `docs/CONTENT.md` (house rules) and
`lib/types.ts`.

## How to audit — answer every question yourself first
For EVERY question, decide your own answer *before* looking at the key, then compare:
1. **Wrong key / wrong fact** — MCQ: is `options[answerIndex]` really the unique, defensibly
   correct answer? Could a well-informed teacher argue for another option? Short: does the
   `answer` spec encode the right value, and does `accept` list every reasonable variant
   (alternative names, spellings, with/without titles)? Is a trap accidentally a correct answer?
2. **Dates, numbers, names** — check every one against well-established textbook facts (e.g.
   Hastings 14 Oct 1066; Magna Carta 15 June 1215; Act of Supremacy 1534; Enabling Act 23 March
   1933; PRC proclaimed 1 Oct 1949; Phnom Penh falls 17 April 1975; Bastille 14 July 1789;
   Representation of the People Act 1918; Equal Franchise Act 1928). Where scholars give a range,
   the text must give a range or say "about/estimated".
3. **Myths and invented material** — legends stated as fact, invented or misattributed quotations,
   "sources" presented as real that are not. Real sources must be accurately described; teaching
   sources must be labelled "(adapted)" or "constructed for this exercise".
4. **Ambiguity** — could a careful student reasonably give a different answer the checker would
   reject? Tighten wording ("Give the year", "Give his surname") or widen `accept`.
5. **Explanation/hint mismatch** — explanations must justify the keyed option and must not refer
   to options by letter/position; hints must be correct and must not give the answer on rung 1.
6. **Distractors** — exactly one correct option; each distractor plausibly wrong for a stated reason.
7. **Written questions** — model answer accurate, complete, PEEL-structured; `marks` = number of
   mark points; keywords lower-case and things a student would actually write; mark points reward
   reasoning and judgement.
8. **Difficulty labels** — `challenge` must genuinely demand judgement/comparison/insight.
9. **Guide/learn content** — every fact, date, name, number, diagram label, timeline position,
   flashcard, mnemonic and misconception "right" version is correct; timelines to scale (or
   labelled); maps schematic but honest.
10. **Balance and sensitivity** — neutral tone, no glorification, age-appropriate handling of
    atrocities, no graphic detail, no hate symbols in SVGs.

## Hard rules
- Edit ONLY the file(s) named in your task. Do not change any `id`, and do not add or remove
  questions, papers or sections (counts are fixed). Rewrite a broken question in place if needed.
- Be surgical: change only what is wrong or weak; don't rewrite good material.
- Finish by running `node scripts/validate-topic.ts <topicId>` and
  `node scripts/typecheck-file.mjs <file>` and fixing anything they report for your file.
- Do NOT run `npm run build` / `next build` / `npm install`.

## Report back
A list of every change (question id → what was wrong → the fix), then totals: keys fixed,
facts/dates fixed, ambiguities fixed, explanations/hints fixed, other fixes. Say explicitly if a
section was clean.
