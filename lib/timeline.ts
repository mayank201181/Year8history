// ---------------------------------------------------------------------------
// Timeline & Key Facts: turns every topic's `learn.formulas` (name = date or
// label, formula = event/fact, note) into dated timeline entries and undated
// key facts. Pure functions — client-safe and unit-tested.
// ---------------------------------------------------------------------------

export interface ParsedDate {
  /** Start year (negative = BC). */
  year: number;
  /** End year for a range such as "1933–34" or "1208–1214". */
  endYear?: number;
  /** 1–12 when the label names a month. */
  month?: number;
  /** Day of the month when given ("14 October 1066"). */
  day?: number;
  /** "c. 1085", "around 1500". */
  approx: boolean;
  /** Sortable number: year plus a fraction for month/day. */
  sortKey: number;
}

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const MONTH_RE = "(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\\.?";

function monthIndex(word: string): number | undefined {
  const w = word.toLowerCase().replace(/\.$/, "");
  const i = MONTHS.findIndex((m) => m.startsWith(w.slice(0, 3)));
  return i < 0 ? undefined : i + 1;
}

/** "34" after "1933–" → 1934; "1214" stays 1214. */
function expandEnd(start: number, endText: string): number {
  const end = Number(endText);
  if (endText.length >= String(Math.abs(start)).length) return end;
  const base = Math.abs(start);
  const mod = 10 ** endText.length;
  let full = base - (base % mod) + end;
  if (full < base) full += mod;
  return full;
}

/**
 * Read a year (and month/day where present) from a key-fact label.
 * Handles "1066", "14 October 1066", "October 1066", "1933–34", "1208–1214",
 * "c. 1085", "1790s", "AD 43", "55 BC", "c. 3000 BCE", "11th century".
 * Returns null for labels with no date (e.g. "Divine right of kings", "Clause 39").
 */
export function parseYear(label: string): ParsedDate | null {
  const raw = String(label ?? "")
    .replace(/\{\{|\}\}|\*\*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!raw) return null;
  const s = raw.toLowerCase();
  const bc = /\b(bc|bce|b\.c\.?|b\.c\.e\.?)(?![a-z])/.test(s);
  const sign = bc ? -1 : 1;
  const approx = /\b(c\.|c |ca\.|circa|around|about|approx)/.test(s) || /^c\.?\s*\d/.test(s);

  // "11th century" / "the 1st century BC"
  const cent = s.match(/\b(\d{1,2})(?:st|nd|rd|th)\s+century\b/);
  // Plain years: 3–4 digits (not part of a bigger number such as 17,000 or 1.5),
  // or 1–4 digits when marked AD/CE/BC/BCE.
  const marked = s.match(/(?:\b(?:ad|a\.d\.)\s*(\d{1,4})\b)|(?:\b(\d{1,4})\s*(?:ad|a\.d\.|ce|bc|bce|b\.c\.?)(?![a-z]))/);
  const plain = [...s.matchAll(/(?<![\d,.£$:])(\d{3,4})(?![\d,]|\.\d|%)(s)?(?:\s*[–—-]\s*(\d{2,4})(?![\d,]))?/g)].find((mm) => {
    const before = s.slice(0, mm.index);
    // "Article 231", "Clause 61", "Point 25" are references, not years.
    if (/(article|clause|section|chapter|point|page|no\.?|number|psalm|room|cell|act)\s*$/.test(before)) return false;
    // A bare 3-digit number followed by a word ("100 flowers") is a count, not a year.
    const after = s.slice((mm.index ?? 0) + mm[0].length);
    if (mm[1].length === 3 && !mm[2] && !mm[3] && /^\s*[a-z]/.test(after) && !/^\s*(ad|ce|bc|bce|a\.d|b\.c)\b/.test(after)) return false;
    return true;
  });

  let year: number | undefined;
  let endYear: number | undefined;
  if (plain) {
    year = Number(plain[1]);
    if (plain[3]) {
      const e = expandEnd(year, plain[3]);
      if (e > year) endYear = e;
    } else if (plain[2]) {
      // "1790s" — a decade
      endYear = year + 9;
    }
  } else if (marked) {
    year = Number(marked[1] ?? marked[2]);
  } else if (cent) {
    const n = Number(cent[1]);
    if (n < 1 || n > 21) return null;
    year = bc ? n * 100 : (n - 1) * 100 + 1;
    endYear = bc ? (n - 1) * 100 + 1 : n * 100;
  }
  if (year === undefined || !Number.isFinite(year)) return null;
  if (!bc && year > 2100) return null;
  if (year === 0) return null;

  let y = sign * year;
  let ey = endYear !== undefined ? sign * endYear : undefined;
  if (bc && ey !== undefined && ey < y) [y, ey] = [ey, y];
  // A BC range counts down ("55–54 BC"): keep start ≤ end on the number line.
  if (ey !== undefined && ey <= y) ey = undefined;

  let month: number | undefined;
  let day: number | undefined;
  const dm = raw.match(new RegExp(`\\b(\\d{1,2})(?:st|nd|rd|th)?\\s+${MONTH_RE}\\b`, "i"));
  const md = raw.match(new RegExp(`\\b${MONTH_RE}\\s+(\\d{1,2})(?:st|nd|rd|th)?\\b(?!\\d)`, "i"));
  const m = raw.match(new RegExp(`\\b${MONTH_RE}\\b`, "i"));
  if (dm) {
    day = Number(dm[1]);
    month = monthIndex(dm[2]);
  } else if (md && Number(md[2]) <= 31 && Number(md[2]) !== year) {
    month = monthIndex(md[1]);
    day = Number(md[2]);
  } else if (m) {
    // Ignore "may" used as a verb ("may have"); only trust it next to a number.
    if (!/^may$/i.test(m[1]) || /\bmay\s+\d/i.test(raw)) month = monthIndex(m[1]);
  }
  if (day !== undefined && (day < 1 || day > 31)) day = undefined;

  const sortKey = y + ((month ?? 0) * 32 + (day ?? 0)) / (13 * 32);
  return { year: y, endYear: ey, month, day, approx, sortKey };
}

/** "1066", "55 BC", "1933–1934". */
export function formatYear(d: ParsedDate): string {
  const one = (y: number) => (y < 0 ? `${-y} BC` : String(y));
  return d.endYear !== undefined ? `${one(d.year)}–${one(d.endYear)}` : one(d.year);
}

/** Century bucket for headings: "11th century (1001–1100)". */
export function centuryOf(year: number): { key: number; label: string } {
  const bc = year < 0;
  const n = bc ? Math.ceil(-year / 100) : Math.ceil(year / 100);
  const suffix = n % 100 >= 11 && n % 100 <= 13 ? "th" : n % 10 === 1 ? "st" : n % 10 === 2 ? "nd" : n % 10 === 3 ? "rd" : "th";
  const ord = `${n}${suffix}`;
  if (bc) return { key: -n, label: `${ord} century BC` };
  return { key: n, label: `${ord} century (${(n - 1) * 100 + 1}–${n * 100})` };
}

export interface FactSource {
  topicId: string;
  topicTitle: string;
  icon: string;
  strand: string;
  facts: { name: string; formula: string; note?: string }[];
}

export interface TimelineEntry {
  id: string;
  topicId: string;
  topicTitle: string;
  icon: string;
  strand: string;
  /** The label as written ("14 October 1066"). */
  name: string;
  /** The event or fact. */
  text: string;
  note?: string;
  date: ParsedDate | null;
}

/** Split facts into a chronological timeline and undated key facts (in topic order). */
export function buildTimeline(sources: FactSource[]): { dated: TimelineEntry[]; undated: TimelineEntry[] } {
  const dated: TimelineEntry[] = [];
  const undated: TimelineEntry[] = [];
  let order = 0;
  const seq = new Map<TimelineEntry, number>();
  for (const src of sources) {
    src.facts.forEach((f, i) => {
      if (!f || typeof f.name !== "string" || typeof f.formula !== "string") return;
      const e: TimelineEntry = {
        id: `${src.topicId}-${i}`,
        topicId: src.topicId,
        topicTitle: src.topicTitle,
        icon: src.icon,
        strand: src.strand,
        name: f.name,
        text: f.formula,
        note: f.note,
        date: parseYear(f.name),
      };
      seq.set(e, order++);
      (e.date ? dated : undated).push(e);
    });
  }
  dated.sort((a, b) => a.date!.sortKey - b.date!.sortKey || (seq.get(a) ?? 0) - (seq.get(b) ?? 0));
  return { dated, undated };
}
