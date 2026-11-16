# Fresh-eyes accuracy audit (for audit agents) — History

You are a meticulous history teacher and examiner auditing ONE topic's content files that another author
just wrote for a Year 8 history app used by a 13-year-old in Singapore. Assume errors exist — roughly 1 in
10 AI-written questions has a wrong fact, a wrong key, or two defensible answers — and hunt them down. Fix
them in place. Read `docs/CONTENT.md` (house rules) and `lib/types.ts` first.

## How to audit — answer every question yourself first
For EVERY question, answer it independently *before* looking at the key, then compare:
1. **Wrong fact / wrong key** — dates, names, numbers, places, sequence of events, who did what. MCQ: is
   `options[answerIndex]` the unique correct answer? Short: does `answer` encode the right year/name, with all
   reasonable `accept` variants (surname alone, title, common alternative spellings)?
2. **Two defensible answers** — MCQ distractors that are also true or arguably true; "most important cause"
   questions where the key is only one historian's view (reword to "according to the lesson…" or make the
   question about evidence); chronology questions where events overlap.
3. **Ambiguity** — could a careful student give a different correct short answer the checker would reject?
   Tighten the wording or widen `accept`. Year answers must ask for one year.
4. **Explanation / model answer mismatch** — explanations must justify the keyed option and never refer to
   options by letter/position; model answers must be accurate and complete; `marks` = number of mark points;
   keywords lower-case and things a student would actually write.
5. **Myths and contested claims** stated as fact (arrow in Harold's eye, "Let them eat cake", Luding Bridge,
   Emily Davison's intent, exact death tolls) — reword as debated/estimated.
6. **Quotations** — must be real and correctly attributed; otherwise paraphrase or label as invented.
7. **Hints** correct and not giving the answer on rung 1; **traps** genuinely wrong with accurate feedback.
8. **Difficulty labels** — `challenge` must need judgement/insight. Relabel if not (challenge set items must
   stay `challenge` — make them harder instead).
9. **Guide/learn content** — every fact, date, keyDate (chronological, correct `year`), keyTerm, flashcard,
   misconception "right" side, diagram label (maps placed correctly, charts to scale).
10. **Tone** — sensitive topics sober and age-appropriate; no present-day political opinions; vegetarian food.

## Hard rules
- Edit ONLY the files named in your task. Do not change any `id`, and do not add or remove questions,
  papers or sections. Rewrite a broken question in place if needed.
- Be surgical: change only what is wrong or weak.
- Finish by running `node scripts/validate-topic.ts <topicId>` and `node scripts/typecheck-file.mjs <file>`
  for each file, fixing anything reported.
- Do NOT run `npm run build` / `next build` / `npm install`, and do not commit.

## Report back
A list of every change (question id → what was wrong → the fix), then totals: facts/keys fixed,
ambiguities fixed, explanations/hints fixed, other fixes. Say explicitly if a file was clean.
