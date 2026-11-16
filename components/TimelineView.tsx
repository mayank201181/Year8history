"use client";
// /timeline — every topic's key dates in one chronological timeline (grouped
// by century, coloured by strand), then the undated key facts and ideas per
// topic. Strand filter + search; prints cleanly on A4.
import Link from "next/link";
import { useMemo, useState } from "react";
import { buildTimeline, centuryOf, type FactSource, type TimelineEntry } from "@/lib/timeline";
import { STRANDS, strandLabel, strandStyle } from "@/lib/strands";
import { Rich, RichInline } from "./Rich";
import { PrintButton, PrintStyles } from "./Certificate";

const ALL = "all";

function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[{}*`|_]/g, " ")
    .replace(/&/g, " and ")
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ");
}

function matches(e: TimelineEntry, terms: string[]): boolean {
  if (!terms.length) return true;
  const hay = norm([e.name, e.text, e.note ?? "", e.topicTitle].join(" | "));
  return terms.every((t) => hay.includes(t));
}

function EntryRow({ e }: { e: TimelineEntry }) {
  const st = strandStyle(e.strand);
  return (
    <li className="relative break-inside-avoid pl-6 print:pl-4">
      <span aria-hidden className={`absolute left-0 top-1.5 h-3 w-3 rounded-full ring-4 ring-surface print:top-1 print:h-2 print:w-2 print:ring-0 ${st.bg} print-exact`} />
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
        <span className={`font-black tabular-nums ${st.text} print-exact`}>
          <RichInline text={e.name} />
        </span>
        <Link href={`/topic/${e.topicId}?tab=learn`} className="no-print text-xs font-bold text-ink-2 hover:text-brand hover:underline">
          <span aria-hidden>{e.icon} </span>
          {e.topicTitle}
        </Link>
        <span className="hidden text-[8pt] text-ink-2 print:inline">{e.topicTitle}</span>
      </div>
      <Rich text={e.text} className="mt-0.5 font-semibold text-ink print:text-[10pt]" />
      {e.note ? <Rich text={e.note} className="mt-0.5 text-sm text-ink-2 print:text-[8.5pt]" /> : null}
    </li>
  );
}

export function TimelineView({ sources }: { sources: FactSource[] }) {
  const [strand, setStrand] = useState<string>(ALL);
  const [query, setQuery] = useState("");

  const { dated, undated } = useMemo(() => buildTimeline(sources), [sources]);
  const terms = useMemo(() => norm(query).trim().split(" ").filter(Boolean), [query]);

  const strandsPresent = useMemo(() => STRANDS.filter((s) => sources.some((x) => x.strand === s)), [sources]);

  const centuries = useMemo(() => {
    const keep = (e: TimelineEntry) => (strand === ALL || e.strand === strand) && matches(e, terms);
    const out: { key: number; label: string; items: TimelineEntry[] }[] = [];
    for (const e of dated) {
      if (!keep(e)) continue;
      const c = centuryOf(e.date!.year);
      const last = out[out.length - 1];
      if (last && last.key === c.key) last.items.push(e);
      else out.push({ key: c.key, label: c.label, items: [e] });
    }
    return out;
  }, [dated, strand, terms]);

  const factGroups = useMemo(() => {
    const keep = (e: TimelineEntry) => (strand === ALL || e.strand === strand) && matches(e, terms);
    return STRANDS.map((s) => {
      const topics: { id: string; title: string; icon: string; items: TimelineEntry[] }[] = [];
      for (const e of undated) {
        if (e.strand !== s || !keep(e)) continue;
        const last = topics[topics.length - 1];
        if (last && last.id === e.topicId) last.items.push(e);
        else topics.push({ id: e.topicId, title: e.topicTitle, icon: e.icon, items: [e] });
      }
      return { strand: s as string, topics };
    }).filter((g) => g.topics.length > 0);
  }, [undated, strand, terms]);

  const shownDated = centuries.reduce((n, c) => n + c.items.length, 0);
  const shownFacts = factGroups.reduce((n, g) => n + g.topics.reduce((m, t) => m + t.items.length, 0), 0);
  const total = dated.length + undated.length;
  const filtered = strand !== ALL || terms.length > 0;

  if (!total) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-black tracking-tight sm:text-3xl">Timeline &amp; key facts</h1>
        <section className="card p-6 text-center sm:p-8">
          <div className="text-4xl" aria-hidden>
            🗓️
          </div>
          <h2 className="mt-2 text-xl font-extrabold">The timeline is on its way</h2>
          <p className="mx-auto mt-2 max-w-md text-ink-2">It fills up automatically as topic lessons are published. In the meantime, every lesson has its own key points.</p>
          <Link href="/topics" className="btn btn-primary mt-5">
            Browse topics
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-6 print:space-y-3">
      <PrintStyles orientation="portrait" margin="12mm" />
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl print:text-xl">Timeline &amp; key facts</h1>
          <p className="mt-1 max-w-2xl text-ink-2 print:hidden">
            Every key date from the lessons in order, from William the Conqueror to votes for women — then the big ideas and key facts for each topic. Search it, filter it, or
            print it for revision.
          </p>
          <p className="mt-1 text-sm font-bold text-ink-2 print:text-xs print:font-normal">
            {dated.length} dated event{dated.length === 1 ? "" : "s"} · {undated.length} key fact{undated.length === 1 ? "" : "s"}
            <span className="hidden print:inline"> · Year 8 History Lab</span>
          </p>
        </div>
        <PrintButton label="Print timeline" />
      </header>

      <div className="no-print space-y-3">
        <div className="relative">
          <label htmlFor="tl-search" className="sr-only">
            Search the timeline
          </label>
          <span aria-hidden className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-2">
            🔍
          </span>
          <input
            id="tl-search"
            type="search"
            autoComplete="off"
            spellCheck={false}
            className="input pl-10"
            placeholder="Search, e.g. “1066”, “Magna Carta” or “Pankhurst”"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape" && query) {
                e.preventDefault();
                setQuery("");
              }
            }}
            aria-describedby="tl-results"
          />
        </div>
        {strandsPresent.length > 1 ? (
          <div role="group" aria-label="Filter by strand" className="nav-scroll relative -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {[ALL, ...strandsPresent].map((s) => {
              const on = strand === s;
              return (
                <button
                  key={s}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setStrand(s)}
                  className={`inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border px-3.5 text-sm font-bold transition-colors ${
                    on ? "border-transparent bg-brand text-brand-ink" : "border-line bg-surface text-ink hover:bg-surface-2"
                  }`}
                >
                  {s !== ALL ? <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${strandStyle(s).bg}`} /> : null}
                  {s === ALL ? "All strands" : s}
                </button>
              );
            })}
          </div>
        ) : null}
        <p id="tl-results" className="text-sm text-ink-2" aria-live="polite" aria-atomic="true">
          {filtered ? `Showing ${shownDated + shownFacts} of ${total}${terms.length ? ` matching “${query.trim()}”` : ""}${strand !== ALL ? ` in ${strand}` : ""}` : null}
        </p>
      </div>

      {/* ------------------------------------------------ timeline */}
      {centuries.length ? (
        <section aria-labelledby="tl-h" className="space-y-5 print:space-y-3">
          <h2 id="tl-h" className="section-title">
            Timeline
          </h2>
          {centuries.map((c) => (
            <section key={c.key} aria-label={c.label} className="card p-4 sm:p-5 print:rounded-none print:border-0 print:p-0 print:shadow-none">
              <h3 className="mb-3 text-xs font-extrabold uppercase tracking-wide text-ink-2 break-after-avoid print:mb-1.5">{c.label}</h3>
              <ol className="relative space-y-4 border-l-2 border-line pl-0 [&>li]:-ml-[7px] print:space-y-2 print:[&>li]:-ml-[5px]">
                {c.items.map((e) => (
                  <EntryRow key={e.id} e={e} />
                ))}
              </ol>
            </section>
          ))}
        </section>
      ) : null}

      {/* ------------------------------------------------ key facts */}
      {factGroups.length ? (
        <section aria-labelledby="kf-h" className="space-y-4 print:break-before-page print:space-y-3">
          <div>
            <h2 id="kf-h" className="section-title">
              Key facts &amp; ideas
            </h2>
            <p className="text-sm text-ink-2 print:hidden">Terms, people and ideas without a single date, topic by topic.</p>
          </div>
          {factGroups.map((g) => {
            const st = strandStyle(g.strand);
            return (
              <section key={g.strand} aria-label={g.strand}>
                <h3 className={`mb-2 flex items-center gap-2 font-black ${st.text} print-exact`}>
                  <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${st.bg} print-exact`} />
                  {strandLabel(g.strand)}
                </h3>
                <div className="gap-4 md:columns-2 print:columns-2 print:gap-5">
                  {g.topics.map((t) => (
                    <article key={t.id} className={`card mb-4 break-inside-avoid border-l-4 p-4 print:mb-3 print:rounded-lg print:p-2.5 print:text-[10pt] print:shadow-none ${st.borderL}`}>
                      <h4 className="font-extrabold leading-snug">
                        <span aria-hidden>{t.icon} </span>
                        {t.title}
                      </h4>
                      <dl className="mt-2 divide-y divide-line">
                        {t.items.map((e) => (
                          <div key={e.id} className="py-2 first:pt-0 last:pb-0 print:py-1.5">
                            <dt className="text-xs font-extrabold uppercase tracking-wide text-ink-2 print:text-[8pt]">
                              <RichInline text={e.name} />
                            </dt>
                            <dd className="mt-0.5">
                              <Rich text={e.text} className="font-semibold text-ink print:text-[10pt]" />
                              {e.note ? <Rich text={e.note} className="mt-0.5 text-sm text-ink-2 print:text-[8.5pt]" /> : null}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </section>
      ) : null}

      {!centuries.length && !factGroups.length ? (
        <div className="card flex flex-col items-center gap-2 p-8 text-center">
          <span aria-hidden className="text-4xl">
            🔍
          </span>
          <p className="font-extrabold">Nothing matches{terms.length ? ` “${query.trim()}”` : ""}</p>
          <p className="text-sm text-ink-2">Try a year, a name or a shorter word.</p>
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={() => {
              setQuery("");
              setStrand(ALL);
            }}
          >
            Clear search and filters
          </button>
        </div>
      ) : null}
    </div>
  );
}
