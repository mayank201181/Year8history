"use client";
import { useMemo, useState } from "react";
import { WidgetFrame, Segmented, Stepper, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. The road to democracy: a timeline with a "who is represented?" meter
// ---------------------------------------------------------------------------

type Judgement = "turning" | "step" | "little";
type ChangeKind = "who" | "how" | "power";

const JUDGEMENT_LABEL: Record<Judgement, string> = {
  turning: "Turning point",
  step: "Important step",
  little: "Little change",
};

const KIND_LABEL: Record<ChangeKind, string> = {
  who: "Changed WHO has a say",
  how: "Changed HOW people vote",
  power: "Changed WHO RULES",
};

interface Stop {
  id: string;
  /** Sortable year (negative = BC). */
  year: number;
  date: string;
  title: string;
  what: string;
  kind: ChangeKind;
  /** Groups with a say after this change. */
  inGroups: string[];
  /** Groups still left out. */
  outGroups: string[];
  /** % of adults in Britain who could vote afterwards; null = no reliable count. */
  share: number | null;
  shareNote: string;
  model: Judgement;
  why: string;
}

const STOPS: Stop[] = [
  {
    id: "athens",
    year: -508,
    date: "c. 508 BC",
    title: "Athens: the first democracy",
    what: "Cleisthenes' reforms gave power to the Assembly, where citizens met — often several thousand at a time — to vote on laws, war and peace themselves. Most officials were chosen by lot.",
    kind: "who",
    inGroups: ["Adult male citizens, rich and poor alike"],
    outGroups: ["All women", "Enslaved people", "Foreign residents (metics)"],
    share: null,
    shareNote: "No reliable count. Historians estimate a few tens of thousands of citizen men — a minority of the adults living in Attica.",
    model: "turning",
    why: "A turning point for the *idea* of democracy: ordinary citizen men really did rule. But it was not the first step on a continuous road — Athenian democracy ended in 322 BC, and Britain's Parliament grew from quite different roots 1,500 years later.",
  },
  {
    id: "magna-carta",
    year: 1215,
    date: "15 June 1215",
    title: "Magna Carta",
    what: "Rebel barons forced King John to accept that the king is under the law: no special taxes without the 'common counsel' of the kingdom, and no free man imprisoned without lawful judgement.",
    kind: "power",
    inGroups: ["The barons, as a check on the king"],
    outGroups: ["Nobody voted at all", "Unfree peasants (villeins) — most people — were not covered by clause 39", "All women had no political say"],
    share: null,
    shareNote: "Nobody voted: Magna Carta limited the king; it did not create elections.",
    model: "step",
    why: "The Pope annulled it within about ten weeks and civil war followed, so little changed at once. Its importance grew later, when reissues (1225) and later lawyers turned it into a symbol of the rule of law.",
  },
  {
    id: "montfort",
    year: 1265,
    date: "January 1265",
    title: "Simon de Montfort's Parliament",
    what: "Ruling in the name of his captive, Henry III, de Montfort summoned barons and bishops, two knights from each county — and, for the first time, burgesses from the towns.",
    kind: "who",
    inGroups: ["Great lords and bishops", "Knights of the shire", "Burgesses from some towns"],
    outGroups: ["Almost everyone: representatives were chosen by a small, wealthy few", "All women"],
    share: null,
    shareNote: "No reliable count — a tiny wealthy elite chose the representatives.",
    model: "step",
    why: "A real first: townsmen in Parliament. But de Montfort was killed at Evesham that August, and he called this Parliament to win support for his side, not to build a democracy.",
  },
  {
    id: "model-parliament",
    year: 1295,
    date: "1295",
    title: "Edward I's Model Parliament",
    what: "Needing money for wars with France, Scotland and Wales, Edward I summoned lords, bishops, representatives of the lower clergy, two knights from each county and two burgesses from each borough.",
    kind: "who",
    inGroups: ["Lords and bishops", "Lower clergy", "Knights of the shire", "Burgesses from the boroughs"],
    outGroups: ["Most people had no say in choosing representatives", "All women"],
    share: null,
    shareNote: "No reliable count — still a tiny elite.",
    model: "step",
    why: "It set the pattern later Parliaments followed, and Parliament's key power — agreeing to taxes — grew from here. But the king still ruled, and Parliament met only when he chose to call it.",
  },
  {
    id: "bill-of-rights",
    year: 1689,
    date: "1689",
    title: "The Bill of Rights",
    what: "After James II fled, William and Mary accepted the Declaration of Right. Monarchs could no longer raise taxes, keep an army in peacetime or suspend laws without Parliament; elections were to be free.",
    kind: "power",
    inGroups: ["Parliament (Lords and Commons) now shares power with the monarch", "Voters: a minority of men, mostly with property"],
    outGroups: ["Most men", "All women", "Catholics could not sit in Parliament (until 1829)"],
    share: null,
    shareNote: "No reliable count — voters were a small minority of men.",
    model: "turning",
    why: "A turning point in WHO RULES: from now on monarchs governed with Parliament, which has met every year since 1689 — a constitutional monarchy. But it did nothing to widen WHO VOTES.",
  },
  {
    id: "reform-1832",
    year: 1832,
    date: "1832",
    title: "The Great Reform Act",
    what: "56 rotten and pocket boroughs lost both their MPs, and growing towns like Manchester and Birmingham got MPs. Men in towns occupying property worth £10 a year gained the vote.",
    kind: "who",
    inGroups: ["Landowners and wealthier tenants", "Middle-class men in towns (£10 householders)"],
    outGroups: ["Most working men", "All women — the Act said 'male persons'"],
    share: 7,
    shareNote: "About 5% of adults before, about 7% after.",
    model: "step",
    why: "A small change in numbers (about 5% to 7%) but a big change in principle: it proved the system could be reformed, and more Acts followed. Many historians call it a turning point for that reason — the numbers alone say 'not much'.",
  },
  {
    id: "reform-1867",
    year: 1867,
    date: "1867",
    title: "The Second Reform Act",
    what: "Steered through by Disraeli, it gave the vote to all male householders in towns and to lodgers paying £10 a year — many skilled working men for the first time. The electorate roughly doubled.",
    kind: "who",
    inGroups: ["Landowners and middle-class men", "Working men who were householders in towns"],
    outGroups: ["Farm labourers and miners in the countryside", "All women"],
    share: 16,
    shareNote: "About 7% before, about 16% after.",
    model: "step",
    why: "The electorate roughly doubled and working men entered it for the first time — but most adults still could not vote.",
  },
  {
    id: "ballot-1872",
    year: 1872,
    date: "1872",
    title: "The Ballot Act",
    what: "Voting became secret. Before this, men declared their votes in public, so landlords and employers could see — and bribe or bully — them.",
    kind: "how",
    inGroups: ["The same voters as 1867 — now voting in secret"],
    outGroups: ["Farm labourers and miners in the countryside", "All women"],
    share: 16,
    shareNote: "No change in who could vote: still about 16% of adults.",
    model: "step",
    why: "It added no voters at all, but made each vote freer — one of the Chartists' six points. Bribery carried on until the Corrupt Practices Act of 1883.",
  },
  {
    id: "reform-1884",
    year: 1884,
    date: "1884",
    title: "The Third Reform Act",
    what: "Gladstone's government gave men in the countryside the same householder vote as men in towns: farm labourers and miners. About 2 in 3 men could now vote. In 1885 most constituencies became single-member seats of more equal size.",
    kind: "who",
    inGroups: ["Male householders in towns and countryside"],
    outGroups: ["About 1 in 3 men (e.g. sons living with parents, servants)", "All women"],
    share: 28,
    shareNote: "About 16% before, about 28% after.",
    model: "step",
    why: "Another step on the same ladder: still based on owning or renting a home, and still men only.",
  },
  {
    id: "rpa-1918",
    year: 1918,
    date: "1918",
    title: "Representation of the People Act",
    what: "After the First World War, all men over 21 (no property needed) and women over 30 who met a property qualification (or whose husband did) could vote. The electorate almost tripled.",
    kind: "who",
    inGroups: ["All men aged 21 and over", "Women aged 30 and over meeting the property rule"],
    outGroups: ["Women aged 21–29", "Women over 30 without the property qualification", "Everyone under 21"],
    share: 74,
    shareNote: "About 28% before, about 74% after — the biggest jump on the chart.",
    model: "turning",
    why: "The biggest single jump: from about 28% to about 74% of adults. For the first time property no longer decided whether a man could vote, and women joined the electorate.",
  },
  {
    id: "efa-1928",
    year: 1928,
    date: "1928",
    title: "The Equal Franchise Act",
    what: "Women could vote at 21 on the same terms as men. About 5 million more women gained the vote, and women now made up just over half of the electorate.",
    kind: "who",
    inGroups: ["All men and women aged 21 and over"],
    outGroups: ["Everyone under 21", "Equality not quite complete: some graduates and business owners had a second vote until 1948"],
    share: 97,
    shareNote: "About 74% before, about 97% after.",
    model: "turning",
    why: "Political equality between women and men. After 1928 the argument was no longer about which adults deserve a vote, but about what age counts as adult.",
  },
  {
    id: "rpa-1969",
    year: 1969,
    date: "1969",
    title: "Voting age lowered to 18",
    what: "The voting age fell from 21 to 18; 18-year-olds first voted in the general election of 1970.",
    kind: "who",
    inGroups: ["All adults aged 18 and over"],
    outGroups: ["Under-18s", "A few groups by law, e.g. people serving prison sentences"],
    share: 100,
    shareNote: "Nearly all adults (about 100%) could now vote.",
    model: "step",
    why: "A real widening, but smaller than 1918 or 1928: votes for all adults were already settled. The debate is now about what age counts as adult — Singapore keeps 21, while Austria lowered its voting age to 16 in 2007.",
  },
];

/** Britain's share of adults who could vote (step changes). */
const SHARE_POINTS: [number, number][] = [
  [1831, 5],
  [1832, 7],
  [1867, 16],
  [1884, 28],
  [1918, 74],
  [1928, 97],
  [1969, 100],
];

function shareBefore(year: number): number | null {
  let v: number | null = null;
  for (const [y, s] of SHARE_POINTS) if (y < year) v = s;
  return v;
}

/** Step-line path for the share chart up to (and including) `upTo`. */
function stepPath(px: (y: number) => number, py: (s: number) => number, upTo: number, end: number): string {
  const pts = SHARE_POINTS.filter(([y]) => y <= upTo);
  if (!pts.length) return "";
  let d = `M ${px(pts[0][0])} ${py(pts[0][1])}`;
  for (let i = 1; i < pts.length; i++) {
    d += ` H ${px(pts[i][0])} V ${py(pts[i][1])}`;
  }
  d += ` H ${px(Math.min(end, Math.max(upTo, pts[pts.length - 1][0])))}`;
  return d;
}

function RoadToDemocracy() {
  const [idx, setIdx] = useState(0);
  const [judged, setJudged] = useState<Record<string, Judgement>>({});
  const stop = STOPS[idx];
  const mine = judged[stop.id];

  // Timeline strip: Athens alone, then a break, then 1200–1970 to scale.
  const tx = (y: number) => (y < 0 ? 22 : 62 + ((y - 1200) * 288) / 770);
  // Share chart: 1830–1970 to scale, 0–100%.
  const cx = (y: number) => 40 + ((y - 1830) * 305) / 140;
  const cy = (s: number) => 140 - s * 1.1;

  const judgedCount = Object.keys(judged).length;
  const agree = STOPS.filter((s) => judged[s.id] === s.model).length;
  const before = stop.year >= 1831 ? shareBefore(stop.year) : null;
  const upTo = stop.year < 1831 ? 0 : stop.year;

  const shareText = stop.share === null ? "No reliable count" : stop.share >= 100 ? "about 100%" : `about ${stop.share}%`;
  const changeText =
    stop.share === null || before === null ? "—" : stop.share === before ? "no change" : `+${stop.share - before} points`;

  const chartLabel =
    stop.share === null
      ? `Chart of the share of adults in Britain who could vote, 1830 to 1970. At ${stop.date} there is no reliable count; the chart starts in 1831 at about 5 percent.`
      : `Chart of the share of adults in Britain who could vote, 1830 to 1970, drawn up to ${stop.date}: ${shareText} of adults.`;

  return (
    <WidgetFrame
      title="The road to democracy"
      tryThis={[
        "Find the stop where the share of adults who could vote jumped the most.",
        "Which stop changed **how** people voted but not **who** voted?",
        "Two stops changed **who rules** rather than who votes. Which ones?",
        "Judge every stop as a turning point or not, then compare your verdicts with the model ones. Where do you disagree — and can you defend your view?",
      ]}
      caption={
        <p>
          <strong>{stop.date}:</strong>{" "}
          {stop.share === null
            ? `${stop.shareNote} Notice that before 1832 the question is mostly about who rules and who sits in Parliament — not about counting voters.`
            : `${stop.shareNote} The coloured line on the chart is drawn to scale: compare how long each flat stretch lasts with how big each jump is.`}{" "}
          A <em>turning point</em> means things are significantly different afterwards; an <em>important step</em> moves things on without changing direction.
        </p>
      }
    >
      <div className="flex items-center justify-between gap-2">
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0}>
          ← Earlier
        </button>
        <span className="text-sm font-bold text-ink-2">
          Stop {idx + 1} of {STOPS.length}
        </span>
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => setIdx(Math.min(STOPS.length - 1, idx + 1))} disabled={idx === STOPS.length - 1}>
          Later →
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-1" role="group" aria-label="Jump to a stop on the timeline">
        {STOPS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setIdx(i)}
            aria-pressed={i === idx}
            aria-label={`${s.date}: ${s.title}`}
            className={`min-h-[40px] min-w-[52px] rounded-lg border px-2 text-xs font-bold tabular-nums transition ${
              i === idx ? "border-brand bg-brand-soft text-ink" : judged[s.id] ? "border-line bg-surface-2 text-ink" : "border-line bg-surface text-ink-2"
            }`}
          >
            {s.year < 0 ? "508 BC" : s.year}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 360 60" className="mt-3 h-auto w-full" role="img" aria-label={`Timeline from about 508 BC to 1969, with a break between Athens and 1200. Current stop: ${stop.date}, ${stop.title}.`}>
        <line x1={10} y1={28} x2={40} y2={28} className="stroke-ink-2" strokeWidth={2} />
        <path d="M 42 22 L 46 34 M 48 22 L 52 34" className="stroke-ink-2" strokeWidth={1.5} fill="none" />
        <line x1={56} y1={28} x2={352} y2={28} className="stroke-ink-2" strokeWidth={2} />
        <text x={47} y={14} fontSize={9} textAnchor="middle" className="fill-ink-2">
          ≈1,700-year gap
        </text>
        {[1200, 1400, 1600, 1800].map((y) => (
          <g key={y}>
            <line x1={tx(y)} x2={tx(y)} y1={24} y2={32} className="stroke-ink-2" strokeWidth={1} />
            <text x={tx(y)} y={48} fontSize={10} textAnchor="middle" className="fill-ink-2">
              {y}
            </text>
          </g>
        ))}
        <text x={22} y={48} fontSize={10} textAnchor="middle" className="fill-ink-2">
          508 BC
        </text>
        <text x={350} y={48} fontSize={10} textAnchor="end" className="fill-ink-2">
          1969
        </text>
        {STOPS.map((s) => (
          <circle key={s.id} cx={tx(s.year)} cy={28} r={s.id === stop.id ? 6 : 3} className={s.id === stop.id ? "fill-brand stroke-ink" : "fill-surface stroke-ink-2"} strokeWidth={1.5} />
        ))}
      </svg>

      <div className="mt-3 rounded-xl border border-line bg-surface p-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-brand px-2 py-1 text-xs font-extrabold text-brand-ink">{stop.date}</span>
          <span className="text-base font-extrabold text-ink">{stop.title}</span>
          <span className="chip">{KIND_LABEL[stop.kind]}</span>
        </div>
        <p className="mt-2 text-sm text-ink">{stop.what}</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg bg-good-soft p-2">
            <p className="text-xs font-extrabold uppercase tracking-wide text-good">Has a say</p>
            <ul className="mt-1 space-y-1 text-sm text-ink">
              {stop.inGroups.map((g) => (
                <li key={g}>✔ {g}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-bad-soft p-2">
            <p className="text-xs font-extrabold uppercase tracking-wide text-bad">Left out</p>
            <ul className="mt-1 space-y-1 text-sm text-ink">
              {stop.outGroups.map((g) => (
                <li key={g}>✘ {g}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-sm font-bold text-ink-2">Who is represented? Share of adults in Britain who could vote</p>
        <svg viewBox="0 0 360 165" className="mt-1 h-auto w-full" role="img" aria-label={chartLabel}>
          {[0, 25, 50, 75, 100].map((s) => (
            <g key={s}>
              <line x1={40} x2={345} y1={cy(s)} y2={cy(s)} className="stroke-line" strokeWidth={1} />
              <text x={34} y={cy(s) + 3} fontSize={10} textAnchor="end" className="fill-ink-2">
                {s}%
              </text>
            </g>
          ))}
          {[1830, 1850, 1870, 1890, 1910, 1930, 1950, 1970].map((y) => (
            <text key={y} x={cx(y)} y={156} fontSize={10} textAnchor="middle" className="fill-ink-2">
              {y}
            </text>
          ))}
          <path d={stepPath(cx, cy, 1970, 1970)} fill="none" className="stroke-line" strokeWidth={3} strokeDasharray="4 3" />
          {upTo > 0 ? <path d={stepPath(cx, cy, upTo, 1970)} fill="none" className="stroke-accent" strokeWidth={3} /> : null}
          {stop.share !== null ? (
            <circle cx={cx(stop.year)} cy={cy(stop.share)} r={6} className="fill-brand stroke-ink" strokeWidth={1.5} />
          ) : (
            <text x={192} y={80} fontSize={11} textAnchor="middle" className="fill-ink-2">
              No reliable count before 1831 — the line starts at about 5%
            </text>
          )}
        </svg>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <Readout label="Adults who could vote" value={shareText} tone={stop.share === null ? "ink" : "brand"} />
          <Readout label="Change at this stop" value={changeText} tone={changeText.startsWith("+") ? "good" : "ink"} />
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-line bg-surface p-3">
        <p className="text-sm font-bold text-ink">Your judgement: was this a turning point for democracy?</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {(["turning", "step", "little"] as const).map((j) => (
            <button
              key={j}
              type="button"
              aria-pressed={mine === j}
              onClick={() => setJudged({ ...judged, [stop.id]: j })}
              className={`btn btn-sm ${mine === j ? "btn-primary" : "btn-secondary"}`}
            >
              {JUDGEMENT_LABEL[j]}
            </button>
          ))}
        </div>
        {mine ? (
          <div className="mt-3 space-y-2">
            <p className={`rounded-lg px-3 py-2 text-sm font-bold ${mine === stop.model ? "bg-good-soft text-good" : "bg-surface-2 text-ink"}`}>
              Model verdict: {JUDGEMENT_LABEL[stop.model]}
              {mine === stop.model ? " — you agree." : " — you disagree. That is allowed if you can back it with evidence!"}
            </p>
            <p className="text-sm text-ink">{stop.why}</p>
          </div>
        ) : (
          <p className="mt-2 text-sm text-ink-2">Choose first — then the model verdict and reasoning appear.</p>
        )}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Readout label="Stops judged" value={`${judgedCount}/${STOPS.length}`} tone="ink" />
        <Readout label="Agree with model" value={`${agree}/${judgedCount}`} tone="brand" />
      </div>
      {judgedCount > 0 ? (
        <div className="mt-3">
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => setJudged({})}>
            Reset judgements
          </button>
        </div>
      ) : null}
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Design a fair vote
// ---------------------------------------------------------------------------

type Who = "property-men" | "all-men" | "men-women30" | "all-adults";
type System = "fptp" | "pr";
type Seats = "population" | "unequal";

interface Design {
  who: Who;
  age: number;
  secret: boolean;
  compulsory: boolean;
  system: System;
  seats: Seats;
}

const WHO_LABEL: Record<Who, string> = {
  "property-men": "Only men with property",
  "all-men": "All adult men",
  "men-women30": "All men + women 30+ with property",
  "all-adults": "All adult citizens",
};

interface Preset extends Design {
  id: string;
  name: string;
  note: string;
}

const PRESETS: Preset[] = [
  {
    id: "britain-1831",
    name: "Britain in 1831",
    who: "property-men",
    age: 21,
    secret: false,
    compulsory: false,
    system: "fptp",
    seats: "unequal",
    note: "About 5% of adults could vote, all men with property. Votes were declared out loud at the hustings. Rotten boroughs like Old Sarum had a handful of voters, while Manchester and Birmingham had no MPs of their own.",
  },
  {
    id: "britain-1885",
    name: "Britain in 1885",
    who: "property-men",
    age: 21,
    secret: true,
    compulsory: false,
    system: "fptp",
    seats: "population",
    note: "After the 1884 Reform Act about 28% of adults — roughly 2 in 3 men, all householders — could vote, in secret since 1872. The 1885 Redistribution Act made most seats single-member, of more equal size.",
  },
  {
    id: "britain-1918",
    name: "Britain in 1918",
    who: "men-women30",
    age: 21,
    secret: true,
    compulsory: false,
    system: "fptp",
    seats: "population",
    note: "All men over 21 and women over 30 who met a property qualification: about 74% of adults.",
  },
  {
    id: "britain-1928",
    name: "Britain in 1928",
    who: "all-adults",
    age: 21,
    secret: true,
    compulsory: false,
    system: "fptp",
    seats: "population",
    note: "Equal votes for women and men at 21: about 97% of adults. One catch: some university graduates and business owners still had a second vote until 1948.",
  },
  {
    id: "britain-today",
    name: "Britain since 1969",
    who: "all-adults",
    age: 18,
    secret: true,
    compulsory: false,
    system: "fptp",
    seats: "population",
    note: "Voting age 18; voting is voluntary; each constituency elects one MP — whoever gets the most votes wins.",
  },
  {
    id: "singapore-today",
    name: "Singapore today",
    who: "all-adults",
    age: 21,
    secret: true,
    compulsory: true,
    system: "fptp",
    seats: "population",
    note: "Citizens vote from 21; voting has been compulsory since 1959. Seats are won by most votes, in single-member constituencies (SMCs) and in team seats (GRCs), where the winning team takes all the seats. Boundaries are reviewed before each election.",
  },
  {
    id: "weimar-1919",
    name: "Weimar Germany, 1919–33",
    who: "all-adults",
    age: 20,
    secret: true,
    compulsory: false,
    system: "pr",
    seats: "population",
    note: "Men and women over 20, with proportional representation: many parties won seats, and governments were usually coalitions. (See your Hitler topic.)",
  },
  {
    id: "belgium-today",
    name: "Belgium today",
    who: "all-adults",
    age: 18,
    secret: true,
    compulsory: true,
    system: "pr",
    seats: "population",
    note: "Compulsory voting since 1893, and in 1899 Belgium became the first country to use proportional representation for its national parliament.",
  },
  {
    id: "netherlands-today",
    name: "The Netherlands today",
    who: "all-adults",
    age: 18,
    secret: true,
    compulsory: false,
    system: "pr",
    seats: "population",
    note: "Proportional representation for the whole country. Compulsory voting was abolished in 1970.",
  },
];

function differences(d: Design, p: Design): string[] {
  const out: string[] = [];
  if (d.who !== p.who) out.push(`who votes: ${WHO_LABEL[p.who].toLowerCase()}`);
  if (d.age !== p.age) out.push(`voting age ${p.age}`);
  if (d.secret !== p.secret) out.push(p.secret ? "secret ballot" : "open (public) voting");
  if (d.compulsory !== p.compulsory) out.push(p.compulsory ? "compulsory voting" : "voluntary voting");
  if (d.system !== p.system) out.push(p.system === "pr" ? "proportional representation" : "most-votes-wins seats");
  if (d.system === "fptp" && p.system === "fptp" && d.seats !== p.seats) out.push(p.seats === "unequal" ? "old, unequal seats" : "seats drawn up by population");
  return out;
}

type Verdict = "met" | "partly" | "not";

function FairVote() {
  const [d, setD] = useState<Design>({ who: "property-men", age: 21, secret: false, compulsory: false, system: "fptp", seats: "unequal" });
  function set<K extends keyof Design>(k: K, v: Design[K]) {
    setD((old) => ({ ...old, [k]: v }));
  }

  const ranked = useMemo(
    () => PRESETS.map((p) => ({ p, diff: differences(d, p) })).sort((a, b) => a.diff.length - b.diff.length),
    [d],
  );
  const exact = ranked.filter((r) => r.diff.length === 0);
  const close = ranked.filter((r) => r.diff.length > 0).slice(0, 2);

  const universal: Verdict = d.who !== "all-adults" ? "not" : d.age > 21 ? "partly" : "met";
  const equal: Verdict = d.who === "men-women30" || (d.system === "fptp" && d.seats === "unequal") ? "not" : "met";
  const secret: Verdict = d.secret ? "met" : "not";
  const metCount = [universal, equal, secret].filter((v) => v === "met").length;

  const leftOut: string[] = [];
  if (d.who === "property-men") leftOut.push("men without property", "all women");
  if (d.who === "all-men") leftOut.push("all women");
  if (d.who === "men-women30") leftOut.push(`women aged ${d.age}–29`, "women over 30 without property");
  if (d.age > 18) leftOut.push(`${d.age === 19 ? "18-year-olds" : `18–${d.age - 1}-year-olds`}`);

  const universalWhy =
    universal === "met"
      ? `Every adult citizen from ${d.age} can vote.`
      : universal === "partly"
        ? `All citizens can vote — but only from ${d.age}, so many adults are left out.`
        : `Left out: ${leftOut.filter((x) => !/year-olds/.test(x)).join(", ")}.`;
  const equalWhy =
    d.who === "men-women30"
      ? "Women must be older than men to vote, so votes are not equal."
      : d.system === "fptp" && d.seats === "unequal"
        ? "A voter in a rotten borough counts for far more than a voter in a big town."
        : "Each vote carries roughly the same weight.";
  const secretWhy = d.secret ? "No one can see how you voted." : "Landlords and employers can see your vote — and punish you for it.";

  const tone = (v: Verdict) => (v === "met" ? "bg-good-soft text-good" : v === "partly" ? "bg-accent-soft text-ink" : "bg-bad-soft text-bad");
  const mark = (v: Verdict) => (v === "met" ? "✔ Met" : v === "partly" ? "◐ Partly" : "✘ Not met");

  const systemCaption =
    d.system === "pr"
      ? "With proportional representation, parties win seats in proportion to their share of the vote, so smaller parties get seats and governments are often coalitions."
      : "With most-votes-wins seats, a party can win a majority of seats with less than half of all votes, and single-party governments are more common.";
  const compulsoryCaption = d.compulsory
    ? "Compulsory voting makes turnout high, so the result reflects almost every voter."
    : "With voluntary voting, turnout depends on who bothers to vote.";

  const ariaSummary = `Article 21 check: universal suffrage ${mark(universal)}, equal suffrage ${mark(equal)}, secret vote ${mark(secret)}. ${
    exact.length ? `Matches ${exact.map((r) => r.p.name).join(" and ")}.` : `Closest real system: ${close[0]?.p.name}.`
  }`;

  return (
    <WidgetFrame
      title="Design a fair vote"
      tryThis={[
        "Recreate Britain in 1831. How many of the Article 21 principles does it meet?",
        "Change ONE setting to turn Britain 1918 into Britain 1928.",
        "Build Singapore's system today. Which two settings differ from Britain's today?",
        "Find a design that meets every Article 21 principle but matches no real system on the list.",
      ]}
      caption={
        <p>
          {exact.length ? (
            <>
              <strong>You have built {exact.map((r) => r.p.name).join(" / ")}.</strong> {exact[0].p.note}{" "}
            </>
          ) : (
            <>
              <strong>No exact match.</strong> Closest: {close[0]?.p.name} (differs in {close[0]?.diff.join(", ")}).{" "}
            </>
          )}
          {systemCaption} {compulsoryCaption} Article 21 of the Universal Declaration of Human Rights (1948) asks for <em>universal and equal suffrage</em> and a <em>secret vote</em> — it does not say whether voting should be compulsory or how seats should be counted, and democracies choose differently.
        </p>
      }
    >
      <div className="space-y-3">
        <div>
          <p className="mb-1 text-sm font-semibold text-ink-2">Who can vote?</p>
          <Segmented<Who>
            label="Who can vote"
            value={d.who}
            onChange={(v) => set("who", v)}
            options={(Object.keys(WHO_LABEL) as Who[]).map((w) => ({ value: w, label: WHO_LABEL[w] }))}
          />
        </div>
        <Stepper
          label={d.who === "men-women30" ? "Voting age (men; women 30)" : "Voting age"}
          value={d.age}
          min={16}
          max={25}
          onChange={(v) => set("age", v)}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <p className="mb-1 text-sm font-semibold text-ink-2">How do people vote?</p>
            <Segmented<"secret" | "open">
              label="Secret or open voting"
              value={d.secret ? "secret" : "open"}
              onChange={(v) => set("secret", v === "secret")}
              options={[
                { value: "open", label: "Out loud, in public" },
                { value: "secret", label: "Secret ballot" },
              ]}
            />
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold text-ink-2">Must people vote?</p>
            <Segmented<"vol" | "comp">
              label="Voluntary or compulsory voting"
              value={d.compulsory ? "comp" : "vol"}
              onChange={(v) => set("compulsory", v === "comp")}
              options={[
                { value: "vol", label: "Voluntary" },
                { value: "comp", label: "Compulsory" },
              ]}
            />
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold text-ink-2">How are seats won?</p>
            <Segmented<System>
              label="Electoral system"
              value={d.system}
              onChange={(v) => set("system", v)}
              options={[
                { value: "fptp", label: "Most votes wins each seat" },
                { value: "pr", label: "Proportional representation" },
              ]}
            />
          </div>
          {d.system === "fptp" ? (
            <div>
              <p className="mb-1 text-sm font-semibold text-ink-2">How are constituencies drawn?</p>
              <Segmented<Seats>
                label="Constituency sizes"
                value={d.seats}
                onChange={(v) => set("seats", v)}
                options={[
                  { value: "unequal", label: "Old, unequal (rotten boroughs)" },
                  { value: "population", label: "By population" },
                ]}
              />
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm font-bold text-ink">UDHR Article 21 check</p>
        <svg viewBox="0 0 360 40" className="mt-1 h-auto w-full" role="img" aria-label={ariaSummary}>
          {[universal, equal, secret].map((v, i) => (
            <rect
              key={i}
              x={4 + i * 118}
              y={6}
              width={112}
              height={28}
              rx={8}
              strokeWidth={2}
              className={v === "met" ? "fill-good-soft stroke-good" : v === "partly" ? "fill-accent-soft stroke-accent" : "fill-bad-soft stroke-bad"}
            />
          ))}
          {["Universal", "Equal", "Secret"].map((t, i) => (
            <text key={t} x={60 + i * 118} y={24} fontSize={12} fontWeight={700} textAnchor="middle" className="fill-ink">
              {t}
            </text>
          ))}
        </svg>
        <ul className="mt-2 space-y-2 text-sm">
          <li className={`rounded-lg px-3 py-2 ${tone(universal)}`}>
            <strong>{mark(universal)} — universal suffrage.</strong> <span className="text-ink">{universalWhy}</span>
          </li>
          <li className={`rounded-lg px-3 py-2 ${tone(equal)}`}>
            <strong>{mark(equal)} — equal suffrage.</strong> <span className="text-ink">{equalWhy}</span>
          </li>
          <li className={`rounded-lg px-3 py-2 ${tone(secret)}`}>
            <strong>{mark(secret)} — secret vote.</strong> <span className="text-ink">{secretWhy}</span>
          </li>
          <li className="rounded-lg bg-surface-2 px-3 py-2 text-ink">
            <strong>Not covered by Article 21:</strong> compulsory or voluntary voting, and most-votes-wins or proportional representation.
          </li>
        </ul>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Readout label="Principles met" value={`${metCount}/3`} tone={metCount === 3 ? "good" : metCount === 0 ? "bad" : "brand"} />
        <Readout label="Matches" value={exact.length ? exact[0].p.name : "none exactly"} tone="ink" />
      </div>

      <div className="mt-3 rounded-xl border border-line bg-surface p-3">
        <p className="text-sm font-bold text-ink">Jump to a real system</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`btn btn-sm ${exact.some((r) => r.p.id === p.id) ? "btn-primary" : "btn-secondary"}`}
              onClick={() => setD({ who: p.who, age: p.age, secret: p.secret, compulsory: p.compulsory, system: p.system, seats: p.seats })}
            >
              {p.name}
            </button>
          ))}
        </div>
        {!exact.length && close.length ? (
          <p className="mt-2 text-sm text-ink-2">
            Nearest: {close.map((r) => `${r.p.name} (needs ${r.diff.join(", ")})`).join("; ")}.
          </p>
        ) : null}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "road-to-democracy",
    title: "The road to democracy",
    blurb: "Step from Athens to 1969, watch who gets a say, and judge which moments were real turning points.",
    Component: RoadToDemocracy,
  },
  {
    id: "design-a-fair-vote",
    title: "Design a fair vote",
    blurb: "Set the voting rules yourself and see which real systems you have built — and whether they meet Article 21 of the UDHR.",
    Component: FairVote,
  },
];
