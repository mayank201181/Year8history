// ---------------------------------------------------------------------------
// Date Dash: a 60-second sprint of "In what year…?" questions drawn from the
// topics' recall drills (any drill item whose answer is a number).
// ---------------------------------------------------------------------------
import type { Rng } from "./drills/types.ts";
import type { Strand } from "./types.ts";
import { ALL_DRILLS } from "./generated/drills.ts";
import { TOPIC_META } from "./topics/meta.ts";

export type SprintMode = "toolkit" | "kings" | "dictators" | "democracy" | "mixed";
export type SprintFactMode = Exclude<SprintMode, "mixed">;

export const SPRINT_MODES: readonly SprintMode[] = ["kings", "dictators", "democracy", "mixed"];

/** Length of a timed sprint. */
export const SPRINT_SECONDS = 60;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  example: string;
}

const UNIT_OF: Record<SprintFactMode, Strand> = {
  toolkit: "Historian's Toolkit",
  kings: "Kings & Power",
  dictators: "Dictatorships",
  democracy: "Democracy & Rights",
};

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  toolkit: { label: "Toolkit", icon: "🔍", description: "Dates from the skills topic.", example: "1066 · 1215" },
  kings: { label: "Kings & Power", icon: "👑", description: "William I, King John and Henry VIII — Term 1 dates.", example: "Hastings · Magna Carta · Bosworth" },
  dictators: { label: "Dictatorships", icon: "⚡", description: "Germany, China and Cambodia — Term 2 dates.", example: "Hyperinflation · Long March · Year Zero" },
  democracy: { label: "Democracy & Rights", icon: "🗳️", description: "Revolutions, votes and rights — Term 3 dates.", example: "Bastille · 1918 · UDHR" },
  mixed: { label: "Mixed", icon: "🎲", description: "Every unit at once — the truest test.", example: "Any date, any topic" },
};

export interface SprintItem {
  prompt: string;
  /** Exact numeric answer (a year or a count). */
  answer: number;
  suffix?: string;
  /** The complete fact — for feedback and the missed list. */
  fact: string;
  mode: SprintFactMode;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (["toolkit", "kings", "dictators", "democracy", "mixed"] as string[]).includes(v);
}

/** Personal-best key in ProgressDoc.bests. */
export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

/** Idempotency key for the once-per-mode-per-day star award. */
export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

/** Stars for a sprint score: 1 per 5 correct, at most 5. */
export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 5)));
}


const FACT_MODES: SprintFactMode[] = ["kings", "dictators", "democracy", "toolkit"];
const unitOfTopic = new Map(TOPIC_META.map((t) => [t.id, t.strand]));

/** One quick date fact for a sprint mode ("mixed" picks from every unit). */
export function sprintItem(mode: SprintMode, rng: Rng): SprintItem {
  for (let attempt = 0; attempt < 60; attempt++) {
    const m: SprintFactMode = mode === "mixed" ? rng.pick(FACT_MODES) : mode;
    const drills = ALL_DRILLS.filter((d) => unitOfTopic.get(d.topicId) === UNIT_OF[m]);
    if (!drills.length) continue;
    const d = rng.pick(drills);
    const item = d.generate(rng, rng.pick([1, 2] as const));
    if (item.answer.type !== "number") continue;
    return { prompt: item.prompt, answer: item.answer.value, fact: item.solution.join(" "), mode: m };
  }
  return { prompt: "In what year was the Battle of Hastings?", answer: 1066, fact: "The Battle of Hastings: 14 October 1066.", mode: "kings" };
}
