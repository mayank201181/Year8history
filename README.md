# Year 8 History Lab

A complete Year 8 History learning and revision app for a learner at Tanglin Trust School,
Singapore. This year's theme is **Dictatorship and Democracy**: enquiry-led lessons, source and
interpretation skills, auto-marked practice, unlimited skill drills, a daily mixed set, spaced
review, a Date Dash sprint, a printable Timeline & Glossary sheet, a cross-topic Big Exam, an
animated sitcom and a PIN-protected parent dashboard.

**Live:** https://year8-history.vercel.app

## What's inside

- **13 topics across 4 strands** (see `lib/topics/meta.ts`), each strand built around its curriculum enquiry question:
  - **Historian's Toolkit** (all year) — *The Historian's Toolkit*: chronology, sources and provenance (NOP), usefulness vs reliability, interpretations, causation and consequence, significance (5 Rs), change & continuity, and PEEL writing.
  - **Term 1 · Kings & Power** — *Under what circumstances did kings rise to power?*
    1. *William I and the Norman Conquest* (1066 claimants, Stamford Bridge & Hastings, castles, Harrying of the North, feudal system & Domesday Book)
    2. *King John and Magna Carta* (Angevin Empire, losing Normandy, the Interdict, barons' rebellion & Runnymede 1215)
    3. *Henry VIII and the Tudors* (Bosworth, the Great Matter, Break with Rome, Dissolution of the Monasteries, power & propaganda)
    4. *How Did Monarchs Gain and Keep Power?* (Term 1 enquiry synthesis comparing William I, King John and Henry VIII, plus monarchy beyond England)
  - **Term 2 · Dictatorships** — *Under what circumstances did dictatorships come to power?*
    5. *Weimar Germany in Crisis* (Treaty of Versailles, Weimar constitution, 1923 hyperinflation & Munich Putsch, Stresemann, Great Depression)
    6. *Hitler's Rise to Power* (NSDAP, electoral growth, backstairs intrigue, Enabling Act, police state, terror & propaganda)
    7. *Mao and Communist China* (fall of Qing, Long March, Civil War, 1949 PRC, Great Leap Forward, Cultural Revolution)
    8. *Pol Pot and the Khmer Rouge* (colonial rule, Vietnam War spillover, Year Zero, genocide, fall of Democratic Kampuchea & ECCC justice)
    9. *Why Do Dictatorships Rise?* (Term 2 enquiry synthesis weighing crisis, weak government and charismatic leadership across all three regimes)
  - **Term 3 · Democracy & Rights** — *How and why has democracy developed?*
    10. *The French Revolution* (Ancien Régime, 1789, Declaration of the Rights of Man, Republic & Reign of Terror, Napoleon, change & continuity)
    11. *Votes for Women* (Victorian Britain, NUWSS suffragists, WSPU suffragettes, WW1 war work, 1918 & 1928 Acts)
    12. *The Road to Democracy and Human Rights* (Term 3 enquiry synthesis from Athens, Magna Carta & 1689 Bill of Rights to widening the franchise, the 1948 UDHR and parliamentary democracy in Singapore)
- **Lessons** — every section opens with a *think-first* puzzle or source prompt, followed by narrative history, diagrams, step-by-step model PEEL paragraphs, a quick "your turn" check, "why it happened — and why it matters", named strategies and stretch prompts, with read-aloud built in.
- **Practice** — per topic: a quick check, multiple-choice papers, practice papers (auto-marked short answers plus extended PEEL/source/judgement answers self-marked against a mark scheme) and an **Enquiry Challenge** set with hint ladders. Independently audited across all 13 topics.
- **Fair, forgiving auto-marking** — accepts case/accent variations, optional leading articles and minor spelling slips on longer historical names while requiring exact years (`1066`, `1066 AD`, `in 1066`), with targeted feedback on classic confusions (Hardrada vs Harthacnut, suffragist vs suffragette, etc.).
- **Skill drills** — adaptive recall and reasoning drills per topic (key dates, people, terms, chronology ordering, cause vs consequence, source NOP) with mastery levels (`New → Practising → Secure → Mastered`, plus "rusty" decay).
- **Date Dash** — a 60-second timed sprint (`Kings & Power`, `Dictatorships`, `Democracy & Rights` or `Mixed`) testing rapid-fire key dates across the course.
- **Timeline & Glossary** — a single printable revision sheet (`/timeline`) gathering every key date (grouped by century from 1066 to today) and glossary term across all 13 topics.
- **The Big Exam** — 3 cross-topic 50-minute papers:
  - *Paper 1: Kings & Power (Term 1)*
  - *Paper 2: Dictatorships (Term 2)*
  - *Paper 3: Democracy & Rights + the whole year* (synoptic across Terms 1–3)
- **Daily 5**, **Spaced Review** (1, 3, 7, 16 and 35 days), **Interactive Explorables** for every topic, **Skills Map** and printable **Certificates**.
- **Watch** — *Totally Raotional: The History Season*, a 13-episode animated sitcom (one ~8-minute MP4 episode per topic in `public/videos`, where Chrono the hourglass monster helps the Rao family untangle history), plus curated explainer videos.
- **Chrono AI Tutor** — an AoPS-style Socratic history tutor ("Ask Chrono") that asks guiding questions and gives single-step hints rather than writing essays for the learner (needs `ANTHROPIC_API_KEY`).
- **Family accounts** with learner profiles, safe multi-device cloud merge and a **PIN-protected Parent Dashboard** (time spent, Daily 5 vs practice accuracy, hint usage, rusty skills, weak topics and focus-topic settings), or **guest mode** on one device. Installable **PWA** with light/dark themes.

## Tech

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS 4 · Vercel Blob
(JSON storage) · Anthropic SDK. Content is typed TypeScript data validated by scripts and tests;
topic content stays on the server and questions are fetched by id.

```
app/                 pages + API routes (/timeline, /sprint, /exam, /episodes, /watch, …)
components/          UI (QuestionCard, PaperRunner, DrillRunner, GuideView, AskAI, …) and widgets/
lib/
  types.ts           content model (questions, answer specs, guides, key dates)
  answerCheck.ts     auto-marking for historical names, terms, years and numbers
  dates.ts           historical date helpers
  sprint.ts          Date Dash 60-second sprint engine
  sitcom.ts          Totally Raotional: The History Season manifest (13 episodes)
  learning.ts        stars, spaced repetition, mastery; mastery.ts topic progress
  store.tsx          client state + safe cloud sync; profileTypes.ts
  topics/<id>/       guide.ts, mcq.ts, practice.ts (13 audited topics)
  drills/<id>.ts     skill & recall drills     extras/<id>.ts   curated videos & extras
  exam/              Big Exam papers (exam-1, exam-2, exam-3)
  server/            blob, auth, rate limits, content
scripts/             validators, registry generator, sitcom pipeline
tests/               node --test suites (answer checking, learning rules, sync, all content)
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
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob — family accounts and cloud progress (use a dedicated Blob store per app) |
| `AUTH_SECRET` | Signs session cookies (recommended; otherwise derived from the Blob token) |
| `ANTHROPIC_API_KEY` | Chrono AI tutor (optional) |
| `AI_MODEL` | Override the tutor model (default `claude-opus-5-5`) |
