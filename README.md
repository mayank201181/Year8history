# Year 8 History Lab

A complete Year 8 History revision app for a learner at Tanglin Trust School, Singapore. This
year's theme is **Dictatorship and Democracy**: enquiry-led lessons, source skills, auto-marked
practice, unlimited skill drills, a daily mixed set, spaced review, a timeline of key dates, a
cross-topic exam, an animated sitcom and a PIN-protected parent dashboard.

Built on the engine of the Year 8 Maths Lab (year8-maths.vercel.app).

## What's inside

- **9 topics in 4 strands**, each strand answering an enquiry question:
  - **Historian's Toolkit** (all year) — chronology, sources and provenance (NOP),
    interpretations, causation, change and continuity, significance, PEEL writing, and the big
    ideas of monarchy, dictatorship and democracy.
  - **Term 1 · Kings & Power** — *Under what circumstances did kings rise to power?* William I,
    King John and Magna Carta, Henry VIII.
  - **Term 2 · Dictatorship** — *Under what circumstances did dictatorships come to power?*
    Hitler, Mao, Pol Pot (crises, weak government, charismatic leadership).
  - **Term 3 · Democracy** — *How and why has democracy developed?* The French Revolution and
    votes for women in Britain.
- **Lessons** — each section opens with a question to think about first, then the history, key
  points, model answers that build a PEEL paragraph step by step (with a quick "your turn" check),
  "why it happened — and why it matters", strategies and think-deeper prompts. Read-aloud built in.
- **Practice** — per topic: a quick check, multiple-choice papers, practice papers (short
  auto-marked answers plus written answers self-marked against a mark scheme) and an **Enquiry
  Challenge** set of big judgement questions with hint ladders.
- **Forgiving, fair auto-marking** — names and terms ignore case, accents, a leading "the" and
  small spelling slips in longer names ("Robspierre" is accepted, with a nudge); years must be
  exact ("1066 AD", "in 1066" and "55 BC" are all understood). Targeted feedback on classic
  confusions (Hardrada vs William, suffragist vs suffragette …).
- **Skill drills** — bank-based recall and reasoning drills (dates, people, key terms, which came
  first, cause or consequence …) with adaptive difficulty and mastery levels (New → Practising →
  Secure → Mastered, with "rusty" decay).
- **Daily 5**, **Review** (spaced repetition at 1, 3, 7, 16 and 35 days), **Quick-fire rounds**,
  **the Big Exam** (Paper 1: Knowledge & Understanding; Paper 2: Sources & Judgement),
  **certificates**, and a printable **Timeline & Key Facts** page built from every topic.
- **Watch** — one animated sitcom episode per topic (MP4) with binge mode, plus hand-picked
  explainer videos.
- **Professor Quill** — a Socratic AI history tutor that asks guiding questions and gives hints,
  and never writes your essay for you (needs `ANTHROPIC_API_KEY`).
- **Family accounts** with learner profiles and cloud sync, or **guest mode** on one device.
- **Parent dashboard** (PIN) — time, accuracy, hint use, skills, topic mastery, "where to help",
  reported questions, and focus-topic / goal settings.
- Installable **PWA**, light/dark themes, mobile-first.

## Tech

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS 4 · Vercel Blob
(JSON storage) · Anthropic SDK. Content is typed TypeScript data validated by scripts and tests;
topic content stays on the server and questions are fetched by id.

```
app/                 pages + API routes
components/          UI (QuestionCard, PaperRunner, DrillRunner, GuideView, TimelineView, …) and widgets/
lib/
  types.ts           content model (questions, answer specs, guides)
  answerCheck.ts     auto-marking (text + years; the numeric engine is kept from the maths app)
  strands.ts         strand colours, terms and enquiry questions
  timeline.ts        date parsing for the Timeline page
  learning.ts        stars, spaced repetition, mastery; mastery.ts topic progress
  store.tsx          client state + safe cloud sync; profileTypes.ts
  topics/<id>/       guide.ts, mcq.ts, practice.ts, practice2.ts (audited content)
  drills/<id>.ts     skill drills        extras/<id>.ts   engagement extras
  exam/              Big Exam papers (exam-k1, exam-s1)   server/  blob, auth, rate limits, content
  sitcom.ts          sitcom episode manifest (generated); show.ts wraps it for the UI
docs/                authoring + audit specs, UI architecture
scripts/             validators, registry generator, per-file type check, sitcom pipeline
tests/               node --test suites (answer checking, history rules, learning, sync, all content)
```

## Develop

```bash
npm install
npm run dev            # http://localhost:3000 (guest mode without env vars)
npm test               # unit + content tests
npm run validate       # every topic, drill set and exam paper
npm run lint
npm run build
```

Local accounts without Vercel Blob: `LOCAL_BLOB_DIR=/tmp/y8h-blob npm run dev`.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob — accounts and cloud progress. Use a store of its own (not the Maths Lab's): keys such as `accounts/` and `names/` are not namespaced per app. |
| `AUTH_SECRET` | Signs session cookies (recommended; otherwise derived from the Blob token) |
| `ANTHROPIC_API_KEY` | Professor Quill (optional) |
| `AI_MODEL` | Override the tutor model (default `claude-opus-5-5`) |
