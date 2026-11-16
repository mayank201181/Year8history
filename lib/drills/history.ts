// History drill builders: turn fact banks into unlimited, auto-marked practice.
// Pure and deterministic given the rng (never Math.random / Date).
import type { AnswerSpec, Trap } from "../types.ts";
import type { DrillItem, Rng } from "./types.ts";

export interface BankItem {
  prompt: string;
  answer: AnswerSpec;
  /** One or two short sentences explaining the answer. */
  solution: string;
  hint?: string;
  traps?: Trap[];
  /** 1 = core recall (default), 2 = typical Year 8, 3 = stretch. */
  tier?: 1 | 2 | 3;
}

/** Pick a bank item at or below the requested tier (prefers the exact tier half the time). */
export function fromBank(items: BankItem[]) {
  return (rng: Rng, tier: 1 | 2 | 3): DrillItem => {
    const eligible = items.filter((i) => (i.tier ?? 1) <= tier);
    const exact = eligible.filter((i) => (i.tier ?? 1) === tier);
    const pool = exact.length && rng.bool(0.5) ? exact : eligible.length ? eligible : items;
    const it = rng.pick(pool);
    return { prompt: it.prompt, answer: it.answer, solution: [it.solution], hint: it.hint, traps: it.traps };
  };
}

export interface DatedEvent {
  /** Sortable year (negative for BC). */
  year: number;
  /** Short label the learner types back, e.g. "the Battle of Hastings". */
  label: string;
  /** Extra accepted spellings of the label. */
  alt?: string[];
  /** How the date is said, e.g. "14 October 1066". Defaults to the year. */
  date?: string;
}

/** "In what year …?" — asks for the year of a random event. */
export function yearOf(events: DatedEvent[], verb = "happen") {
  return (rng: Rng): DrillItem => {
    const e = rng.pick(events);
    const yr = e.year < 0 ? `${-e.year} BC` : String(e.year);
    return {
      prompt: `In what year did ${e.label} ${verb}?${e.year < 0 ? " (Give the number of years BC.)" : ""}`,
      answer: { type: "number", value: Math.abs(e.year), display: yr },
      solution: [`${capital(e.label)}: ${e.date ?? yr}.`],
      hint: "Picture it on the timeline: which century, then which decade?",
    };
  };
}

/** "Which came first …?" — two events with different years; type the earlier one. */
export function whichFirst(events: DatedEvent[]) {
  return (rng: Rng): DrillItem => {
    let a = rng.pick(events);
    let b = rng.pick(events);
    for (let i = 0; i < 100 && (a.year === b.year || a.label === b.label); i++) b = rng.pick(events);
    if (rng.bool()) [a, b] = [b, a];
    const first = a.year < b.year ? a : b;
    const second = first === a ? b : a;
    const fmt = (e: DatedEvent) => e.date ?? (e.year < 0 ? `${-e.year} BC` : String(e.year));
    return {
      prompt: `Which came first: ${a.label} or ${b.label}? Type the earlier one.`,
      answer: { type: "text", accept: [first.label, ...(first.alt ?? [])], display: capital(first.label) },
      solution: [`${capital(first.label)} (${fmt(first)}) came before ${second.label} (${fmt(second)}).`],
      hint: "Put each one in its century first.",
      traps: [{ spec: { type: "text", accept: [second.label] }, feedback: `That one came later — ${fmt(second)}.` }],
    };
  };
}

function capital(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
