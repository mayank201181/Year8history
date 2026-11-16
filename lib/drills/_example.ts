// REFERENCE EXAMPLE for drill authors — NOT imported by the app.
// Real files: lib/drills/<topicId>.ts exporting `drills: Drill[]`.
import type { Drill } from "./types.ts";
import { fromBank, whichFirst, yearOf, type DatedEvent } from "./history.ts";

const EVENTS: DatedEvent[] = [
  { year: 1066, label: "the Battle of Hastings", alt: ["Hastings", "Battle of Hastings"], date: "14 October 1066" },
  { year: 1086, label: "the Domesday survey", alt: ["Domesday", "Domesday Book"], date: "1085–86" },
  // … at least 12–15 events
];

export const drills: Drill[] = [
  {
    id: "example.key-dates",
    topicId: "example",
    title: "Key dates",
    level: 1,
    guideRef: "succession-crisis-1066",
    generate: yearOf(EVENTS),
  },
  {
    id: "example.which-first",
    topicId: "example",
    title: "Which came first?",
    level: 2,
    generate: whichFirst(EVENTS),
  },
  {
    id: "example.who-was-who",
    topicId: "example",
    title: "Who was who?",
    level: 1,
    guideRef: "succession-crisis-1066",
    generate: fromBank([
      {
        prompt: "Which Earl of Wessex was crowned king on 6 January 1066?",
        answer: { type: "text", accept: ["Harold Godwinson", "Harold", "Harold II", "Godwinson"], display: "Harold Godwinson" },
        solution: "Harold Godwinson, chosen by the Witan the day after Edward died.",
        hint: "Not the Viking — the English earl.",
        traps: [{ spec: { type: "text", accept: ["Harald Hardrada"] }, feedback: "Hardrada was the Norwegian invader." }],
      },
      // … at least 15 items; tier 2/3 items can be harder ("Who …, and why did it matter?" is NOT allowed — answers must be a word, name, number or short phrase)
    ]),
  },
];
