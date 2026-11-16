// ---------------------------------------------------------------------------
// Strand presentation: colour classes, term labels and enquiry questions.
// One map so every page (cards, topic header, progress, skills, daily,
// certificate, timeline) colours a strand the same way. Full class names are
// spelled out so Tailwind can see them. Client-safe.
// ---------------------------------------------------------------------------
import type { Strand } from "./types.ts";
import { STRANDS, STRAND_ENQUIRY } from "./topics/meta.ts";

export interface StrandStyle {
  /** URL-friendly key, e.g. for /topics?strand=dictatorship. */
  slug: string;
  /** Strand colour as text (use at ≥ 20 px bold, or on decorative glyphs). */
  text: string;
  /** Solid strand colour fill. */
  bg: string;
  /** Soft tint of the strand colour, for icon tiles (15%). */
  soft: string;
  /** Fainter tint (10%), for large panels and chips. */
  tint: string;
  /** Solid strand border. */
  border: string;
  /** Faint strand border (30%). */
  borderSoft: string;
  /** Left accent border colour (pair with border-l-4). */
  borderL: string;
}

export const STRAND_STYLES: Record<string, StrandStyle> = {
  "Historian's Toolkit": {
    slug: "toolkit",
    text: "text-s-toolkit",
    bg: "bg-s-toolkit",
    soft: "bg-s-toolkit/15",
    tint: "bg-s-toolkit/10",
    border: "border-s-toolkit",
    borderSoft: "border-s-toolkit/30",
    borderL: "border-l-s-toolkit",
  },
  "Kings & Power": {
    slug: "kings",
    text: "text-s-kings",
    bg: "bg-s-kings",
    soft: "bg-s-kings/15",
    tint: "bg-s-kings/10",
    border: "border-s-kings",
    borderSoft: "border-s-kings/30",
    borderL: "border-l-s-kings",
  },
  Dictatorship: {
    slug: "dictatorship",
    text: "text-s-dictatorship",
    bg: "bg-s-dictatorship",
    soft: "bg-s-dictatorship/15",
    tint: "bg-s-dictatorship/10",
    border: "border-s-dictatorship",
    borderSoft: "border-s-dictatorship/30",
    borderL: "border-l-s-dictatorship",
  },
  Democracy: {
    slug: "democracy",
    text: "text-s-democracy",
    bg: "bg-s-democracy",
    soft: "bg-s-democracy/15",
    tint: "bg-s-democracy/10",
    border: "border-s-democracy",
    borderSoft: "border-s-democracy/30",
    borderL: "border-l-s-democracy",
  },
};

const FALLBACK_STYLE: StrandStyle = {
  slug: "other",
  text: "text-brand",
  bg: "bg-brand",
  soft: "bg-brand-soft",
  tint: "bg-brand-soft",
  border: "border-brand",
  borderSoft: "border-brand/30",
  borderL: "border-l-brand",
};

export function strandStyle(strand: string): StrandStyle {
  return STRAND_STYLES[strand] ?? FALLBACK_STYLE;
}

/** When in the year each strand is taught. */
export const STRAND_TERM: Record<Strand, string> = {
  "Historian's Toolkit": "All year",
  "Kings & Power": "Term 1",
  Dictatorship: "Term 2",
  Democracy: "Term 3",
};

/** "Term 1 · Kings & Power" */
export function strandLabel(strand: string): string {
  const term = STRAND_TERM[strand as Strand];
  return term ? `${term} · ${strand}` : strand;
}

/** The enquiry question a strand answers ("" for an unknown strand). */
export function strandEnquiry(strand: string): string {
  return STRAND_ENQUIRY[strand as Strand] ?? "";
}

/** Position of a strand in teaching order (unknown strands last). */
export function strandOrder(strand: string): number {
  const i = STRANDS.indexOf(strand as Strand);
  return i < 0 ? STRANDS.length : i;
}

export { STRANDS, STRAND_ENQUIRY };
