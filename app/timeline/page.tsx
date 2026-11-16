import type { Metadata } from "next";
import Link from "next/link";
import type { KeyDate, Topic } from "@/lib/types";
import { TOPICS } from "@/lib/server/content";
import { Rich, RichInline } from "@/components/Rich";
import { PrintButton, PrintStyles } from "@/components/Certificate";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Timeline & glossary",
  description: "Every key date and key term from the Year 8 History course in one place — from 1066 to today. Print it for revision.",
};

const UNIT_STYLE: Record<string, { text: string; dot: string; border: string }> = {
  "Historian's Toolkit": { text: "text-s-number", dot: "bg-s-number", border: "border-s-number" },
  "Kings & Power": { text: "text-s-ratio", dot: "bg-s-ratio", border: "border-s-ratio" },
  Dictatorships: { text: "text-s-algebra", dot: "bg-s-algebra", border: "border-s-algebra" },
  "Democracy & Rights": { text: "text-s-geometry", dot: "bg-s-geometry", border: "border-s-geometry" },
};

interface Row extends KeyDate {
  topic: Topic;
}

function centuryLabel(year: number): string {
  if (year < 0) return "BC";
  const c = Math.floor((year - 1) / 100) + 1;
  const suf = c % 10 === 1 && c !== 11 ? "st" : c % 10 === 2 && c !== 12 ? "nd" : c % 10 === 3 && c !== 13 ? "rd" : "th";
  return `${c}${suf} century (${(c - 1) * 100 + 1}–${c * 100})`;
}

export default function TimelinePage() {
  const seen = new Set<string>();
  const rows: Row[] = [];
  for (const t of TOPICS) {
    for (const d of t.learn?.keyDates ?? []) {
      const key = `${d.year}|${d.event.toLowerCase()}`;
      if (seen.has(key)) continue;
      seen.add(key);
      rows.push({ ...d, topic: t });
    }
  }
  rows.sort((a, b) => a.year - b.year);
  const groups: { label: string; rows: Row[] }[] = [];
  for (const r of rows) {
    const label = centuryLabel(r.year);
    if (groups[groups.length - 1]?.label !== label) groups.push({ label, rows: [] });
    groups[groups.length - 1].rows.push(r);
  }
  const terms = TOPICS.flatMap((t) => (t.learn?.keyTerms ?? []).map((k) => ({ ...k, topic: t })));
  const termSeen = new Set<string>();
  const glossary = terms
    .filter((k) => {
      const n = k.term.toLowerCase();
      if (termSeen.has(n)) return false;
      termSeen.add(n);
      return true;
    })
    .sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="space-y-8 print:space-y-4">
      <PrintStyles orientation="portrait" margin="12mm" />
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl print:text-xl">Timeline &amp; glossary</h1>
          <p className="mt-1 max-w-2xl text-ink-2 print:hidden">
            Every key date from the lessons on one timeline, and every key term A–Z. Chronology is a historian&apos;s superpower: see how 1066, 1215, 1789 and 1933 connect.
          </p>
          <p className="mt-1 text-sm font-bold text-ink-2">
            {rows.length} dates · {glossary.length} terms
          </p>
        </div>
        {rows.length ? <PrintButton label="Print" /> : null}
      </header>

      <nav className="no-print flex flex-wrap gap-2" aria-label="Jump to">
        <a href="#timeline" className="btn btn-secondary btn-sm min-h-10">🕰️ Timeline</a>
        <a href="#glossary" className="btn btn-secondary btn-sm min-h-10">📖 Glossary</a>
        {Object.entries(UNIT_STYLE).map(([u, st]) => (
          <span key={u} className="chip">
            <span aria-hidden className={`h-2 w-2 rounded-full ${st.dot}`} />
            {u}
          </span>
        ))}
      </nav>

      {!rows.length ? (
        <section className="card p-6 text-center sm:p-8">
          <div className="text-4xl" aria-hidden>🕰️</div>
          <h2 className="mt-2 text-xl font-extrabold">The timeline is on its way</h2>
          <p className="mx-auto mt-2 max-w-md text-ink-2">It fills up automatically as topic lessons are published.</p>
          <Link href="/topics" className="btn btn-primary mt-5">Browse topics</Link>
        </section>
      ) : (
        <section id="timeline" className="scroll-mt-20" aria-label="Timeline">
          <h2 className="mb-3 text-lg font-black">🕰️ Timeline</h2>
          {groups.map((g) => (
            <div key={g.label} className="mb-5 break-inside-avoid">
              <h3 className="mb-2 text-xs font-extrabold uppercase tracking-wide text-ink-2">{g.label}</h3>
              <ol className="relative space-y-2 border-l-2 border-line pl-4">
                {g.rows.map((r, i) => {
                  const st = UNIT_STYLE[r.topic.strand] ?? UNIT_STYLE["Historian's Toolkit"];
                  return (
                    <li key={`${r.year}-${i}`} className="relative">
                      <span aria-hidden className={`absolute -left-[1.4rem] top-1.5 h-3 w-3 rounded-full ring-2 ring-surface ${st.dot}`} />
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className={`font-black tabular-nums ${st.text}`}>
                          <RichInline text={r.date} />
                        </span>
                        <span className="font-bold text-ink">
                          <RichInline text={r.event} />
                        </span>
                        <Link href={`/topic/${r.topic.id}`} className="no-print text-xs font-bold text-ink-2 hover:text-brand">
                          {r.topic.icon} {r.topic.title}
                        </Link>
                      </div>
                      {r.note ? <Rich text={r.note} className="text-sm text-ink-2" /> : null}
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </section>
      )}

      {glossary.length ? (
        <section id="glossary" className="scroll-mt-20" aria-label="Glossary">
          <h2 className="mb-3 text-lg font-black">📖 Glossary</h2>
          <dl className="gap-4 md:columns-2 print:columns-2">
            {glossary.map((k) => {
              const st = UNIT_STYLE[k.topic.strand] ?? UNIT_STYLE["Historian's Toolkit"];
              return (
                <div key={k.term} className={`card mb-3 break-inside-avoid border-l-4 p-3 ${st.border}`}>
                  <dt className="font-extrabold">
                    <RichInline text={k.term} />
                  </dt>
                  <dd className="mt-0.5 text-sm text-ink-2">
                    <RichInline text={k.definition} />
                  </dd>
                </div>
              );
            })}
          </dl>
        </section>
      ) : null}
    </div>
  );
}
