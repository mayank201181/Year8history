// ---------------------------------------------------------------------------
// Quick-fire round: rapid recall of dates, people and key terms, drawn from
// the topics' bank-based recall drills (lib/drills/<topicId>.ts).
// Pure (no React) so it can be unit-tested directly by Node: the drills are
// passed in, never imported here.
// ---------------------------------------------------------------------------
import type { AnswerSpec, Strand, Trap } from "./types.ts";
import type { Drill, Rng } from "./drills/types.ts";
import { TOPIC_META } from "./topics/meta.ts";

export type SprintMode = "toolkit" | "kings" | "dictatorship" | "democracy" | "mixed";

export const SPRINT_MODES: readonly SprintMode[] = ["kings", "dictatorship", "democracy", "toolkit", "mixed"];

/** Length of a timed round (typed names take a little longer than numbers). */
export const SPRINT_SECONDS = 90;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  /** The strand this mode draws from (none = every strand). */
  strand?: Strand;
}

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  kings: {
    label: "Kings & Power",
    icon: "👑",
    description: "William I, King John and Henry VIII — the dates, people and turning points of Term 1.",
    strand: "Kings & Power",
  },
  dictatorship: {
    label: "Dictatorship",
    icon: "📢",
    description: "Hitler, Mao and Pol Pot — crises, key events and how dictators took control.",
    strand: "Dictatorship",
  },
  democracy: {
    label: "Democracy",
    icon: "🗳️",
    description: "The French Revolution and votes for women — rights, reforms and campaigners.",
    strand: "Democracy",
  },
  toolkit: {
    label: "Historian's Toolkit",
    icon: "🔍",
    description: "Key terms and big ideas: sources, chronology, causation, monarchy, dictatorship and democracy.",
    strand: "Historian's Toolkit",
  },
  mixed: {
    label: "Mixed",
    icon: "🎲",
    description: "A bit of everything from the whole year — the truest test of recall.",
  },
};

export interface SprintItem {
  /** Question shown to the learner (markdown-lite). */
  prompt: string;
  answer: AnswerSpec;
  traps?: Trap[];
  /** One short sentence that teaches the fact (for feedback and the missed list). */
  fact: string;
  drillId: string;
  topicId: string;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (SPRINT_MODES as readonly string[]).includes(v);
}

/** Personal-best key in ProgressDoc.bests. */
export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

/** Idempotency key for the once-per-mode-per-day star award. */
export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

/** Stars for a round: 1 per 4 correct, at most 5. */
export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 4)));
}

const STRAND_OF = new Map<string, Strand>(TOPIC_META.map((t) => [t.id, t.strand]));

/**
 * The drills a mode draws from: recall drills (levels 1–2) from its strand.
 * Falls back to every level when a strand only has reasoning drills so far.
 */
export function sprintDrills(mode: SprintMode, drills: readonly Drill[]): Drill[] {
  const strand = SPRINT_MODE_INFO[mode].strand;
  const inMode = drills.filter((d) => !strand || STRAND_OF.get(d.topicId) === strand);
  const recall = inMode.filter((d) => d.level <= 2);
  return recall.length ? recall : inMode;
}

/**
 * One quick question for a mode, or null when no drills exist for it yet.
 * Mostly tier 1 (headline facts) with some tier 2 detail.
 */
export function sprintItem(mode: SprintMode, rng: Rng, drills: readonly Drill[]): SprintItem | null {
  const pool = sprintDrills(mode, drills);
  if (!pool.length) return null;
  for (let attempt = 0; attempt < 5; attempt++) {
    const drill = rng.pick(pool);
    const tier: 1 | 2 = rng.bool(0.7) ? 1 : 2;
    try {
      const item = drill.generate(rng, tier);
      if (!item?.prompt || !item.answer) continue;
      return {
        prompt: item.prompt,
        answer: item.answer,
        traps: item.traps,
        fact: String(item.solution?.[0] ?? "").trim(),
        drillId: drill.id,
        topicId: drill.topicId,
      };
    } catch {
      // A broken drill shouldn't stop the round: try another.
    }
  }
  return null;
}
