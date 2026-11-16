# Interactive widgets ("explorables") + engagement extras spec

## 1. Widgets — `components/widgets/<topicId>.tsx`

Each topic gets **2 genuinely useful interactive explorables** in its Explore tab: the learner
changes inputs (sliders, steppers, toggles, drag-to-order, sorting buttons) and watches a
historical model respond live, with a caption that explains what they see — plus "Try this"
challenges that make them predict, argue and test (enquiry-first). Think "interactive museum
exhibit / historian's workbench", not a toy.

Ideas (pick what fits your topic best, or better ones):
- **Claim-o-meter**: weigh the 1066 claimants by blood / promise / election / power — sliders for
  how much each criterion matters; live ranking + caption.
- **Causation balance / diamond ranker**: drag factors (crises, weak government, charisma…) into
  a ranking or weight them; a balance-scale SVG tips; caption reflects the argument the learner
  is making and what evidence supports/challenges it.
- **Hyperinflation price explorer**: slider through 1918–1923 showing the real price of a loaf of
  bread in marks (use real textbook figures, e.g. 1918 ≈ 0.63, Jan 1923 ≈ 250, Nov 1923 ≈ 200
  billion) on a log-scale chart.
- **Reichstag seats explorer**: step through election results 1928–33 (real seat counts),
  coalition maths — can a majority be formed without the Nazis or KPD?
- **Feudal pyramid builder** (who owes what to whom), **Estates tax-burden** slider (share of
  population vs share of land/tax), **Electorate growth** (1832/1867/1884/1918/1928 share of
  adults who could vote — real figures), **Timeline sorter** (drag events into order with
  instant checking), **Source NOP inspector** (toggle who made it / when / why and see how
  reliability and usefulness change), **Long March route stepper** (schematic map),
  **Magna Carta clause matcher**, **Henry's wives / succession tree**, **Suffrage tactics
  sorter** (suffragist vs suffragette methods, impact meter with arguments both ways).

Shape:

    "use client";
    import { useState, useMemo } from "react";
    import { WidgetFrame, Slider, Stepper, Segmented, Readout, type WidgetDef } from "./kit";
    function ClaimOMeter() { … }
    function Another() { … }
    export const widgets: WidgetDef[] = [
      { id: "claim-o-meter", title: "Claim-o-meter", blurb: "Who had the best claim in 1066?", Component: ClaimOMeter },
      …
    ];

Rules:
- Read `components/widgets/kit.tsx` (WidgetFrame, Slider, Stepper, Segmented, Readout) and
  `app/globals.css` (tokens).
- Client component, React 19, TypeScript strict, **no new dependencies**, no network, no
  `Math.random` during render (use useState initialisers or event handlers for randomness).
- Style with Tailwind utilities and theme tokens: `bg-surface`, `bg-surface-2`, `text-ink`,
  `text-ink-2`, `border-line`, `text-brand`, `bg-brand`, `bg-brand-soft`, `text-good`,
  `bg-good-soft`, `text-bad`, `bg-bad-soft`, `text-accent`. In SVG use `className="fill-brand
  stroke-ink"` etc. (works in light and dark mode).
- Responsive: works at 360 px wide (SVG with viewBox and `className="w-full h-auto"`), touch
  friendly (no hover-only interactions; buttons ≥ 40 px; drag interactions must also have a
  tap/button alternative).
- **Historically accurate and honest**: real figures and dates only, label sources of numbers in
  the caption ("Figures: Reichstag election results"), show uncertainty where it exists. Where
  the widget models a *judgement* (weighting causes), make clear it's the learner's argument and
  show evidence for and against — never imply there is one "correct" weighting.
- Sensitive topics (Nazi persecution, the Cambodian genocide, famine) are **not** gamified — no
  scores, sliders or games about deaths. For Pol Pot, prefer e.g. a "Conditions for a takeover"
  causation explorer and a timeline/comparison tool.
- Each widget's `WidgetFrame` gets 2–4 `tryThis` prompts and a live `caption`.
- Accessible: label every control; SVGs get `role="img"` and an `aria-label` describing the
  current state.

Check: `node scripts/typecheck-file.mjs components/widgets/<topicId>.tsx` must pass.

## 2. Extras — `lib/extras/<topicId>.ts`

    import type { TopicExtras } from "../types.ts";
    export const extras: TopicExtras = { hook, didYouKnow, activities, bonusDiagrams, history };

- `hook`: 1–2 sentence curiosity hook (a surprising question or fact) for the top of the guide.
- `didYouKnow`: 4–6 surprising, TRUE facts connected to the topic (no myths; no invented stats).
- `activities`: 2 hands-on activities to do at home (`title, emoji, materials, steps, maths` —
  here `maths` holds **"The history behind it"**: what the activity shows), e.g. make a
  motte-and-bailey model, write a family "Magna Carta", design a propaganda-spotting checklist
  and test it on adverts, interview a grandparent about voting for the first time, map
  Singapore street names to colonial history.
- `bonusDiagrams`: 1–2 extra SVG diagrams (same SVG rules as docs/CONTENT.md) — e.g. a timeline
  or comparison grid.
- `history`: field reused for **"Story behind the story"** — a short (80–150 words) true,
  lesser-known story connected to the topic (e.g. Sophia Duleep Singh, the Bayeux Tapestry's
  journey, the Tennis Court Oath painting), with `title` and `story`.
Text format: docs/CONTENT.md (no `{{ }}`). Check with
`node scripts/typecheck-file.mjs lib/extras/<topicId>.ts`.

Do NOT run `npm run build`, `next build` or `npm install`. Edit only your two files.
