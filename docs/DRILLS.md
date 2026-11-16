# Recall drills spec (History)

Drills give a learner **unlimited fresh retrieval practice** on one fine-grained skill, auto-marked, with
an explanation — knowledge-organiser self-quizzing (the school's Learning-to-Learn approach) turned into a
game. You write `lib/drills/<topicId>.ts`. Read `lib/drills/types.ts`, `lib/drills/history.ts` (the
builders `fromBank`, `yearOf`, `whichFirst`), `lib/drills/_example.ts`, `lib/types.ts` (AnswerSpec) and
`docs/CONTENT.md` (text format, accuracy, house style).

    import type { Drill } from "./types.ts";
    import { fromBank, whichFirst, yearOf, type DatedEvent } from "./history.ts";
    export const drills: Drill[] = [ … ];

## Requirements
- **6–8 drills per topic**, ordered `level` 1 → 3, covering every section (`guideRef`) between them:
  - Key dates (`yearOf`) and Which came first? (`whichFirst`) from one shared list of **≥15 dated events**.
  - Who was who? (people → `text` answers), Key terms (definition → term), Cause → consequence / "What
    happened next?", Fill the gap in a key fact, and (where natural) Sources: "Is this primary or
    secondary?", "What is the origin of this source?", tier 3 items asking for a precise piece of evidence.
  - Each `fromBank` drill: **≥15 items**, with tier 2/3 items that are harder (less famous facts, finer
    distinctions), every answer a single number, word, name or short phrase. List all reasonable `accept`
    variants; add `traps` for classic confusions (Harold/Harald, suffragist/suffragette, 1918/1928,
    Enabling Act/Reichstag Fire Decree…).
- `id`: `"<topicId>.<kebab-skill>"`; `topicId` set; a clear `title` a 12-year-old understands.
- Every fact must be **correct** (same standard as the audited content).
- No `{{ }}` maths markup.

## Validation (mandatory)

    node scripts/validate-drills.ts <topicId>
    node scripts/typecheck-file.mjs lib/drills/<topicId>.ts

The validator runs every drill 200× per tier and checks text, answers, traps and variety, and prints a
sample of each drill — read them and check the facts. Fix everything before finishing.
Do NOT run `npm run build`, `next build` or `npm install`. Edit only your drill file.
