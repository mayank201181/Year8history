# Interactive widgets ("explorables") + engagement extras spec — History

## 1. Widgets — `components/widgets/<topicId>.tsx`

Each topic gets **2 genuinely useful interactive explorables** in its Interactive tab: the learner changes
inputs (sliders, steppers, toggles, step-through buttons, sorting/ranking) and watches a historical model,
chart, map or argument respond live, with a caption that explains what they see — plus "Try this"
challenges that make them predict, rank and judge (AoPS-style discovery for history). Ideas: a timeline
scrubber that moves armies on a schematic map; an election-results explorer (seats by year, coalition
builder for proportional representation); a hyperinflation price slider; a "keep your crown" kingship
simulator (taxes, castles, Church favour → rebellion risk, with the historical case studies as presets);
a causation ranking board (diamond-9 / rank-and-justify, then compare with a model ranking); a source NOP
inspector (toggle provenance details and watch reliability/utility judgements change); an electorate-growth
chart (1832–1969); a three-estates population vs tax pyramid; change-vs-continuity sorters.

    "use client";
    import { useState, useMemo } from "react";
    import { WidgetFrame, Slider, Stepper, Segmented, Readout, type WidgetDef } from "./kit";
    function CampaignMap() { … }
    function Another() { … }
    export const widgets: WidgetDef[] = [
      { id: "campaign-map", title: "1066 campaign map", blurb: "Scrub through autumn 1066 and watch the armies move.", Component: CampaignMap },
      …
    ];

Rules:
- Read `components/widgets/kit.tsx` (WidgetFrame, Slider, Stepper, Segmented, Readout, `M` for
  inline maths, `makePlane`/`PlaneGrid` for coordinate SVGs) and `app/globals.css` (tokens).
- Client component, React 19, TypeScript strict, **no new dependencies**, no network, no
  `Math.random` during render (use useState initialisers or event handlers for randomness).
- Style with Tailwind utilities and the theme tokens: `bg-surface`, `bg-surface-2`, `text-ink`,
  `text-ink-2`, `border-line`, `text-brand`, `bg-brand`, `bg-brand-soft`, `text-good`,
  `bg-good-soft`, `text-bad`, `bg-bad-soft`, `text-accent`. In SVG use `className="fill-brand
  stroke-ink"` etc. (works in light and dark mode). Avoid hard-coded colours except inside small
  accents.
- Responsive: works at 360 px wide (SVG with viewBox and `className="w-full h-auto"`), touch
  friendly (no hover-only interactions; buttons ≥ 40 px).
- Historically **accurate and honest**: real dates, figures and places (say "about" for estimates);
  charts drawn to scale; maps schematic but correctly placed; sensitive topics handled soberly (no
  gamifying atrocities — for Pol Pot / Nazi persecution prefer timelines, factor-linking and
  conditions-for-power explorers).
- Each widget's `WidgetFrame` gets 2–4 `tryThis` prompts (e.g. "Find the date when Harold
  had to fight on two fronts", "Which single change would have stopped the Nazis winning the most seats?") and a live `caption` explaining the
  history in plain words.
- Accessible: label every control; SVGs get `role="img"` and an `aria-label` describing the
  current state.

Check: `node scripts/typecheck-file.mjs components/widgets/<topicId>.tsx` must pass.

## 2. Extras — `lib/extras/<topicId>.ts`

    import type { TopicExtras } from "../types.ts";
    export const extras: TopicExtras = { hook, didYouKnow, activities, bonusDiagrams, story };

- `hook`: 1–2 sentence curiosity hook (a surprising question or fact) for the top of the guide.
- `didYouKnow`: 4–6 surprising, TRUE facts connected to the topic (no myths; no invented stats).
- `activities`: 2 hands-on activities/puzzles to do at home with everyday items
  (`title, emoji, materials, steps, history` — `history` explains what it teaches).
- `bonusDiagrams`: 1–2 extra SVG diagrams (same SVG rules as docs/CONTENT.md) that illuminate a
  key idea (e.g. a timeline, map or cause-and-consequence chain).
- `story`: a short (80–150 words) true, surprising story connected to the topic (well-attested, not a myth;
  if a famous story is a myth, the story can be about the myth and the evidence).
Use the text format from docs/CONTENT.md (no `{{ }}`). Check with
`node scripts/typecheck-file.mjs lib/extras/<topicId>.ts`.

Do NOT run `npm run build`, `next build` or `npm install`. Edit only your two files.
