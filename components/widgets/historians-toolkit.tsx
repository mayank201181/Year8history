"use client";
// Explorables for "The Historian's Toolkit":
//  1. Source NOP inspector — change who made a source, when and why, and pick an enquiry:
//     watch reliability and usefulness move separately, with reasons.
//  2. Century & timeline explorer — move through time (with no year 0), see the century,
//     decade and period, and place the year's key events on a to-scale timeline.
import { useMemo, useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Source NOP inspector
// ---------------------------------------------------------------------------
type Enquiry = "events" | "aims" | "memory";
type Author = "nazi" | "worker" | "police" | "journalist";
type When = "1932" | "1962";
type Purpose = "private" | "persuade" | "inform";

interface Reason {
  text: string;
  delta: number;
}

const ENQUIRIES: { value: Enquiry; label: string; question: string }[] = [
  { value: "events", label: "What happened?", question: "What actually happened at a Nazi election rally in Berlin in July 1932?" },
  { value: "aims", label: "Nazi aims", question: "What did the Nazis want German voters to believe in 1932?" },
  { value: "memory", label: "Memory", question: "How did ordinary Germans look back on 1932 after the Second World War?" },
];

const AUTHOR_TEXT: Record<Author, string> = {
  nazi: "a Nazi Party propagandist",
  worker: "an unemployed factory worker in the crowd",
  police: "a Berlin police officer on duty at the rally",
  journalist: "a British newspaper reporter",
};

const NATURE_TEXT: Record<Purpose, string> = {
  private: "a private diary entry",
  persuade: "a published leaflet",
  inform: "a written report",
};

const PURPOSE_TEXT: Record<Purpose, string> = {
  private: "to record events for the writer alone",
  persuade: "to persuade readers",
  inform: "to inform its readers or superiors",
};

const SCALE = ["", "very low", "low", "moderate", "high", "very high"];

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}

function reliabilityOf(author: Author, when: When, purpose: Purpose): { score: number; reasons: Reason[] } {
  const reasons: Reason[] = [];
  reasons.push(
    author === "nazi"
      ? { text: "A Nazi propagandist had every reason to exaggerate the size and enthusiasm of the crowd.", delta: -1 }
      : author === "worker"
        ? { text: "An ordinary eyewitness was there — but saw only one corner of the rally and may have shared the crowd's feelings.", delta: 0 }
        : author === "police"
          ? { text: "A police officer was trained to observe and report, and had no need to flatter the Nazis — though officers had political views of their own.", delta: 1 }
          : { text: "An outside reporter was there and less personally involved — but may have missed what was said in German, and newspapers like a dramatic story.", delta: 1 },
  );
  reasons.push(
    when === "1932"
      ? { text: "Written at the time: the details are fresh.", delta: 1 }
      : { text: "Written 30 years later: memories fade, the writer knows what Hitler went on to do (hindsight), and may want to excuse their own past.", delta: -1 },
  );
  reasons.push(
    purpose === "private"
      ? { text: "Written for the writer alone: no audience to impress — though people can still fool themselves.", delta: 1 }
      : purpose === "persuade"
        ? { text: "Written to persuade: facts are chosen and slanted to win readers over.", delta: -2 }
        : { text: "Written to inform: it usually aims at accuracy, but is shaped by what its readers want or expect to hear.", delta: 0 },
  );
  const score = clamp(3 + reasons.reduce((s, r) => s + r.delta, 0), 1, 5);
  return { score, reasons };
}

function usefulnessOf(enquiry: Enquiry, author: Author, when: When, purpose: Purpose, reliability: number): { score: number; reasons: Reason[] } {
  const reasons: Reason[] = [];
  if (enquiry === "events") {
    reasons.push({ text: "For a question about what actually happened, usefulness depends heavily on reliability — so it follows the reliability score.", delta: 0 });
    if (author === "nazi" && purpose === "persuade") reasons.push({ text: "It can still show *some* facts — that a rally took place and what the Nazis claimed — if you cross-reference it.", delta: 0 });
    return { score: reliability, reasons };
  }
  if (enquiry === "aims") {
    let base = 2;
    if (author === "nazi") {
      base += 2;
      reasons.push({ text: "It comes straight from the Nazis' own propaganda machine — direct evidence of the message they wanted to spread.", delta: 2 });
      if (purpose === "persuade") {
        base += 1;
        reasons.push({ text: "Its persuasive purpose *is* the evidence: the slant shows exactly what they wanted voters to believe.", delta: 1 });
      }
    } else {
      reasons.push({ text: "It can report what the Nazis said, but only second-hand, through someone else's eyes.", delta: 0 });
    }
    if (when === "1932") {
      base += 1;
      reasons.push({ text: "Made at the time, so it shows the message as it was actually used in 1932.", delta: 1 });
    } else {
      base -= 1;
      reasons.push({ text: "Written in 1962, it gives a later memory of the message, filtered through hindsight.", delta: -1 });
    }
    return { score: clamp(base, 1, 5), reasons };
  }
  // memory
  let base = 1;
  if (when === "1962") {
    base += 3;
    reasons.push({ text: "Written in 1962, it is direct evidence of how someone looked back after the war — exactly what this enquiry needs.", delta: 3 });
    if (author === "worker") {
      base += 1;
      reasons.push({ text: "It is an ordinary person's memory, not an official or propaganda view.", delta: 1 });
    }
    if (purpose === "private") {
      base += 1;
      reasons.push({ text: "Written privately, so it may be a more honest reflection than a published memoir.", delta: 1 });
    }
  } else {
    reasons.push({ text: "Written in 1932, it cannot tell you anything about how people remembered events later.", delta: 0 });
  }
  return { score: clamp(base, 1, 5), reasons };
}

function Meter({ label, score }: { label: string; score: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-bold text-ink-2">{label}</span>
        <span className="font-extrabold text-ink">{SCALE[score]}</span>
      </div>
      <div className="mt-1 flex gap-1" role="img" aria-label={`${label}: ${score} out of 5 (${SCALE[score]})`}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`h-3 flex-1 rounded-full ${i <= score ? "bg-brand" : "bg-surface-2"}`} />
        ))}
      </div>
    </div>
  );
}

function ReasonList({ reasons }: { reasons: Reason[] }) {
  return (
    <ul className="mt-2 space-y-1 text-sm text-ink-2">
      {reasons.map((r) => (
        <li key={r.text} className="flex gap-2">
          <span aria-hidden className={`font-extrabold ${r.delta > 0 ? "text-good" : r.delta < 0 ? "text-bad" : "text-ink-2"}`}>
            {r.delta > 0 ? "+" : r.delta < 0 ? "−" : "•"}
          </span>
          <span>{r.text.split("*").map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part))}</span>
        </li>
      ))}
    </ul>
  );
}

function SourceInspector() {
  const [enquiry, setEnquiry] = useState<Enquiry>("events");
  const [author, setAuthor] = useState<Author>("nazi");
  const [when, setWhen] = useState<When>("1932");
  const [purpose, setPurpose] = useState<Purpose>("persuade");

  const rel = useMemo(() => reliabilityOf(author, when, purpose), [author, when, purpose]);
  const use = useMemo(() => usefulnessOf(enquiry, author, when, purpose, rel.score), [enquiry, author, when, purpose, rel.score]);
  const q = ENQUIRIES.find((e) => e.value === enquiry)!;

  let verdict: string;
  if (rel.score <= 2 && use.score >= 4) verdict = "Unreliable but very useful: the source's slant is itself the evidence for this question. Biased is not the same as useless.";
  else if (rel.score >= 4 && use.score <= 2) verdict = "Reliable but not much use here: an accurate source can still fail to answer *your* question. Usefulness always depends on the enquiry.";
  else if (rel.score >= 4 && use.score >= 4) verdict = "Strong on both counts — but still cross-reference it: no single source is enough.";
  else if (use.score <= 2) verdict = "Of limited use for this enquiry. Ask what kind of source *would* answer this question.";
  else verdict = "Useful with care: use what it shows, explain its limits, and cross-reference it with other evidence.";

  return (
    <WidgetFrame
      title="Source NOP inspector"
      tryThis={[
        "Make the source as **reliable** as you can. Then switch the enquiry to *Nazi aims* — is it still the most useful version?",
        "Find a combination that is **unreliable but very useful**. What makes it useful?",
        "Change the date to **1962**. For which enquiry does that make the source *more* useful — and why?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>Verdict:</strong> {verdict.split("*").map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part))}
          </p>
          <p className="text-ink-2">
            Reliability asks <em>can I trust what it says?</em> Usefulness asks <em>does it help answer my question?</em> These scores are a
            rule-of-thumb model for practice, not a formula: a real judgement also depends on what the source actually says. Source X is a
            constructed teaching source.
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Your enquiry</div>
          <Segmented label="Enquiry" options={ENQUIRIES.map((e) => ({ value: e.value, label: e.label }))} value={enquiry} onChange={setEnquiry} />
          <p className="mt-1 text-sm font-semibold text-ink">{q.question}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Purpose: why? (sets its nature)</div>
            <Segmented
              label="Purpose"
              options={[
                { value: "private", label: "Private" },
                { value: "persuade", label: "Persuade" },
                { value: "inform", label: "Inform" },
              ]}
              value={purpose}
              onChange={setPurpose}
            />
          </div>
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Origin: who?</div>
            <Segmented
              label="Author"
              options={[
                { value: "nazi", label: "Propagandist" },
                { value: "worker", label: "Worker" },
                { value: "police", label: "Police" },
                { value: "journalist", label: "Reporter" },
              ]}
              value={author}
              onChange={setAuthor}
            />
          </div>
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Origin: when?</div>
            <Segmented
              label="Date written"
              options={[
                { value: "1932", label: "July 1932" },
                { value: "1962", label: "1962 memoir" },
              ]}
              value={when}
              onChange={setWhen}
            />
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface p-3 text-sm">
          <div className="font-extrabold text-ink">Source X</div>
          <p className="mt-1 text-ink">
            <strong>Nature:</strong> {NATURE_TEXT[purpose]} describing a Nazi election rally in Berlin, July 1932.
          </p>
          <p className="text-ink">
            <strong>Origin:</strong> written by {AUTHOR_TEXT[author]}, {when === "1932" ? "at the time (July 1932)" : "as a memoir in 1962, 30 years later"}.
          </p>
          <p className="text-ink">
            <strong>Purpose:</strong> {PURPOSE_TEXT[purpose]}.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface p-3">
            <Meter label="Reliability (as a factual account)" score={rel.score} />
            <ReasonList reasons={rel.reasons} />
          </div>
          <div className="rounded-xl border border-line bg-surface p-3">
            <Meter label="Usefulness for this enquiry" score={use.score} />
            <ReasonList reasons={use.reasons} />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Century & timeline explorer
// ---------------------------------------------------------------------------
interface Ev {
  y: number;
  label: string;
}

const EVENTS: Ev[] = [
  { y: 1066, label: "Battle of Hastings" },
  { y: 1086, label: "Domesday Book" },
  { y: 1215, label: "Magna Carta" },
  { y: 1265, label: "de Montfort's Parliament" },
  { y: 1485, label: "Battle of Bosworth" },
  { y: 1534, label: "Act of Supremacy" },
  { y: 1789, label: "Storming of the Bastille" },
  { y: 1793, label: "Louis XVI executed" },
  { y: 1819, label: "Raffles in Singapore" },
  { y: 1903, label: "WSPU founded" },
  { y: 1918, label: "Some women get the vote" },
  { y: 1928, label: "Equal Franchise Act" },
  { y: 1929, label: "Wall Street Crash" },
  { y: 1933, label: "Hitler becomes Chancellor" },
  { y: 1934, label: "Long March begins" },
  { y: 1948, label: "UDHR" },
  { y: 1949, label: "People's Republic of China" },
  { y: 1959, label: "Singapore self-government" },
  { y: 1965, label: "Singapore independence" },
  { y: 1975, label: "Khmer Rouge take Phnom Penh" },
];

const MIN_YEAR = -600;
const MAX_YEAR = 2025;

/** Astronomical numbering: 1 BC = 0, 2 BC = −1 … so subtraction gives true gaps (no year 0). */
function astro(y: number) {
  return y < 0 ? y + 1 : y;
}
function fromAstro(a: number) {
  return a <= 0 ? a - 1 : a;
}
function label(y: number) {
  return y < 0 ? `${-y} BC` : `AD ${y}`;
}
function ord(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function centuryInfo(y: number): { name: string; note?: string; band: [number, number] } {
  if (y < 0) {
    const n = Math.ceil(-y / 100);
    // n-th century BC = n*100 BC … (n−1)*100+1 BC
    return { name: `${ord(n)} century BC`, band: [astro(-n * 100), astro(-((n - 1) * 100 + 1)) + 1] };
  }
  const h = Math.floor(y / 100);
  if (y % 100 === 0) {
    return {
      name: `${ord(h)} century (strictly)`,
      note: `Strictly, ${y} is the *last* year of the ${ord(h)} century, because centuries run from a year ending 01 to one ending 00 — but most people lump it in with "the ${y}s", the ${ord(h + 1)} century.`,
      band: [Math.max(1, (h - 1) * 100 + 1), h * 100 + 1],
    };
  }
  return { name: `${ord(h + 1)} century`, band: [Math.max(1, h * 100), h * 100 + 100] };
}

function periodOf(y: number): string {
  if (y < 500) return "Ancient world (before c. AD 500)";
  if (y < 1500) return "Medieval (c. 500–1500)";
  if (y < 1750) return "Early modern (c. 1500–1750)";
  return "Modern (c. 1750 onwards)";
}

type Zoom = "long" | "course" | "c20";
const ZOOMS: Record<Zoom, { lo: number; hi: number; ticks: number[]; tickLabel: (y: number) => string; minor: number }> = {
  long: { lo: astro(-600), hi: 2025, ticks: [-500, 1, 500, 1000, 1500, 2000], tickLabel: (y) => (y === 1 ? "AD 1" : y < 0 ? `${-y} BC` : String(y)), minor: 100 },
  course: { lo: 1000, hi: 2025, ticks: [1000, 1200, 1400, 1600, 1800, 2000], tickLabel: (y) => String(y), minor: 100 },
  c20: { lo: 1900, hi: 2000, ticks: [1900, 1920, 1940, 1960, 1980, 2000], tickLabel: (y) => String(y), minor: 10 },
};

function shift(y: number, d: number) {
  return clamp(fromAstro(astro(y) + d), MIN_YEAR, MAX_YEAR);
}

function CenturyTimeline() {
  const [year, setYear] = useState(1066);
  const [zoom, setZoom] = useState<Zoom>("course");

  const c = centuryInfo(year);
  const nearest = useMemo(() => {
    let best = EVENTS[0];
    for (const e of EVENTS) if (Math.abs(astro(year) - e.y) < Math.abs(astro(year) - best.y)) best = e;
    return best;
  }, [year]);
  const gap = Math.abs(astro(year) - nearest.y);
  const decade = year >= 10 ? `the ${Math.floor(year / 10) * 10}s` : "—";

  const z = ZOOMS[zoom];
  const W = 360;
  const L = 20;
  const R = 340;
  const AXIS = 72;
  const x = (a: number) => L + ((a - z.lo) / (z.hi - z.lo)) * (R - L);
  const a = astro(year);
  const inView = a >= z.lo && a <= z.hi;
  const mx = x(clamp(a, z.lo, z.hi));
  const minor: number[] = [];
  for (let v = Math.ceil(z.lo / z.minor) * z.minor; v <= z.hi; v += z.minor) minor.push(v);
  const bandLo = clamp(c.band[0], z.lo, z.hi);
  const bandHi = clamp(c.band[1], z.lo, z.hi);
  const nearestVisible = nearest.y >= z.lo && nearest.y <= z.hi;
  const yearAnchor = mx < 60 ? "start" : mx > W - 60 ? "end" : "middle";
  const evAnchor = x(nearest.y) < 80 ? "start" : x(nearest.y) > W - 80 ? "end" : "middle";

  const aria = `Timeline ${zoom === "long" ? "600 BC to AD 2025" : zoom === "course" ? "1000 to 2025" : "1900 to 2000"}, drawn to scale. Selected year ${label(year)}, ${c.name}${inView ? "" : ", off this scale"}. Nearest course event: ${nearest.label} (${nearest.y}), ${gap} years away.`;

  return (
    <WidgetFrame
      title="Century & timeline explorer"
      tryThis={[
        "Use the ±1 buttons to find the **first and last years of the 11th century** (the 1000s). Watch the shaded band.",
        "Go to **2 BC** and step forward one year at a time. Where is year 0?",
        "Switch to the **20th-century** view. How many of the year's key events fit inside one century?",
        "Set the year to **1900**. Which century is it — strictly, and in everyday speech?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>{label(year)}</strong> is in the <strong>{c.name}</strong>
            {year > 0 && year % 100 !== 0 ? (
              <>
                {" "}
                — the &lsquo;hundreds&rsquo; are {Math.floor(year / 100)}, so add one.
              </>
            ) : year < 0 ? (
              <> — BC centuries count backwards: the 1st century BC is 100–1 BC.</>
            ) : null}{" "}
            The nearest event from this year&rsquo;s topics is <strong>{nearest.label}</strong> ({nearest.y}), {gap === 0 ? "in this very year" : `${gap} year${gap === 1 ? "" : "s"} ${astro(year) < nearest.y ? "later" : "earlier"}`}.
          </p>
          {c.note ? <p>{c.note.split("*").map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part))}</p> : null}
          <p className="text-ink-2">
            Gaps are counted with no year 0 (1 BC is followed directly by AD 1). Period labels are approximate — historians argue about where one
            period ends; in English history &lsquo;medieval&rsquo; often means 1066–1485.
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        <Slider label="Year" value={year} min={MIN_YEAR} max={MAX_YEAR} onChange={(v) => setYear(v === 0 ? (year < 0 ? 1 : -1) : v)} format={label} />
        <div className="flex flex-wrap items-center gap-2" aria-label="Nudge the year">
          {[-100, -10, -1, 1, 10, 100].map((d) => (
            <button key={d} type="button" className="kbd min-h-10 min-w-12" onClick={() => setYear((y) => shift(y, d))} aria-label={`${d > 0 ? "forward" : "back"} ${Math.abs(d)} year${Math.abs(d) === 1 ? "" : "s"}`}>
              {d > 0 ? `+${d}` : `−${-d}`}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Year" value={label(year)} tone="ink" />
          <Readout label="Century" value={c.name} />
          <Readout label="Decade" value={decade} tone="ink" />
          <Readout label="Nearest event gap" value={`${gap} yr${gap === 1 ? "" : "s"}`} tone="good" />
        </div>
        <p className="text-sm text-ink-2">
          <strong className="text-ink">Period:</strong> {periodOf(year)}
        </p>

        <div>
          <Segmented
            label="Timeline view"
            options={[
              { value: "long", label: "600 BC – AD 2025" },
              { value: "course", label: "1000 – 2025" },
              { value: "c20", label: "20th century" },
            ]}
            value={zoom}
            onChange={setZoom}
          />
          <svg viewBox={`0 0 ${W} 120`} className="mx-auto block mt-2 h-auto w-full max-w-lg" role="img" aria-label={aria}>
            {bandHi > bandLo ? <rect x={x(bandLo)} y={AXIS - 14} width={Math.max(1, x(bandHi) - x(bandLo))} height={28} className="fill-brand-soft" /> : null}
            {minor.map((v) => (
              <line key={`m${v}`} x1={x(v)} x2={x(v)} y1={AXIS - 4} y2={AXIS + 4} className="stroke-line" strokeWidth={1} />
            ))}
            <line x1={L} x2={R} y1={AXIS} y2={AXIS} className="stroke-ink-2" strokeWidth={2} />
            {z.ticks.map((t) => (
              <g key={`t${t}`}>
                <line x1={x(astro(t))} x2={x(astro(t))} y1={AXIS - 7} y2={AXIS + 7} className="stroke-ink-2" strokeWidth={1.5} />
                <text x={x(astro(t))} y={AXIS + 20} fontSize={10} textAnchor="middle" className="fill-ink-2">
                  {z.tickLabel(t)}
                </text>
              </g>
            ))}
            {EVENTS.filter((e) => e.y >= z.lo && e.y <= z.hi).map((e) => (
              <circle key={e.y} cx={x(e.y)} cy={AXIS} r={e === nearest ? 4.5 : 3} className={e === nearest ? "fill-accent stroke-ink" : "fill-surface stroke-ink"} strokeWidth={1} />
            ))}
            {nearestVisible ? (
              <text x={x(nearest.y)} y={AXIS + 36} fontSize={10.5} textAnchor={evAnchor} className="fill-ink">
                {nearest.label} ({nearest.y})
              </text>
            ) : null}
            <line x1={mx} x2={mx} y1={26} y2={AXIS - 6} className="stroke-brand" strokeWidth={2} />
            <polygon points={`${mx - 5},${AXIS - 12} ${mx + 5},${AXIS - 12} ${mx},${AXIS - 5}`} className="fill-brand" />
            <text x={mx} y={20} fontSize={12} fontWeight={700} textAnchor={yearAnchor} className="fill-ink">
              {inView ? label(year) : `${a < z.lo ? "◀ " : ""}${label(year)} (off scale)${a > z.hi ? " ▶" : ""}`}
            </text>
          </svg>
          <p className="text-xs text-ink-2">Drawn to scale. Shaded band = the selected century. Orange dot = nearest key event.</p>
        </div>

        <div>
          <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Jump to a key event</div>
          <div className="flex flex-wrap gap-1.5">
            {EVENTS.map((e) => (
              <button
                key={e.y}
                type="button"
                onClick={() => setYear(e.y)}
                className={`min-h-10 rounded-lg border px-2 py-1 text-xs font-bold ${year === e.y ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink-2"}`}
              >
                {e.y} · {e.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  { id: "source-nop-inspector", title: "Source NOP inspector", blurb: "Change who made a source, when and why — and watch reliability and usefulness move apart.", Component: SourceInspector },
  { id: "century-timeline", title: "Century & timeline explorer", blurb: "Move through time with no year 0: find the century, decade and period, and see the year's events to scale.", Component: CenturyTimeline },
];
