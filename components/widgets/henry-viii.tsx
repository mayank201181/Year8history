"use client";
// Interactive explorables for "Henry VIII: Power, Marriage and the Break with Rome".
//  1. Why break with Rome? — the learner weights five factors (love, an heir,
//     money, power, religion); a causation web resizes live, and the caption
//     states the argument they are making, tests it against the question
//     (why it *started* vs why it *lasted*) and gives evidence for and against.
//  2. Six wives and the succession — step through Henry's reign from 1509 to
//     1547 and watch each marriage, birth and Act of Succession change who
//     would inherit the crown. Optional "predict first" mode.
// Facts match lib/topics/henry-viii/guide.ts.
import { useMemo, useState, type ReactNode } from "react";
import { WidgetFrame, Segmented, Readout, Stepper, Slider, type WidgetDef } from "./kit";

/* ------------------------------------------------------------------------ */
/* 1. Why break with Rome? — causation web                                   */
/* ------------------------------------------------------------------------ */

type Factor = "love" | "heir" | "money" | "power" | "religion";
type Lens = "start" | "last";

const FACTORS: Factor[] = ["love", "heir", "money", "power", "religion"];

interface FactorInfo {
  name: string;
  short: string;
  /** Tailwind classes for the SVG node (token-based, works in dark mode). */
  node: string;
  line: string;
  chip: string;
  supports: string[];
  challenges: string[];
  lens: Record<Lens, string>;
}

const INFO: Record<Factor, FactorInfo> = {
  love: {
    name: "Love for Anne Boleyn",
    short: "Love",
    node: "fill-bad-soft stroke-bad",
    line: "stroke-bad",
    chip: "bg-bad-soft text-bad",
    supports: [
      "Henry had been married to Catherine for nearly 20 years, yet only pushed for an annulment after he fell for Anne Boleyn (about 1526).",
      "Anne refused to be only his mistress. Henry married her in secret in January 1533 — four months before Cranmer declared the first marriage void.",
    ],
    challenges: [
      "Anne was beheaded in 1536, yet Henry never went back to the Pope.",
      "Without the heir problem, Henry could have kept Anne as a mistress, as he had others.",
    ],
    lens: {
      start: "Strong on **timing**: Anne explains *when* Henry pushed (from 1527) and why he rushed in 1533.",
      last: "Weak here: Anne was executed in 1536, but the break with Rome lasted for the rest of Henry's reign.",
    },
  },
  heir: {
    name: "The need for a male heir",
    short: "Heir",
    node: "fill-brand-soft stroke-brand",
    line: "stroke-brand",
    chip: "bg-brand-soft text-brand",
    supports: [
      "Only one of Catherine's children, Mary (born 1516), survived — and by the mid-1520s Catherine was around 40.",
      "Henry feared a female ruler meant civil war (Matilda in the 1100s) or a return of the Wars of the Roses.",
    ],
    challenges: [
      "Edward was born in 1537, yet Henry kept his supremacy over the Church.",
      "The Act of Supremacy gave the Church to Henry ‘and his heirs and successors’ for ever — far more than one marriage needed.",
    ],
    lens: {
      start: "Strong: many historians see the need for a son as the **underlying cause** of the ‘Great Matter’.",
      last: "Weaker here: once Edward was born in 1537 the heir problem was solved — but the break stayed.",
    },
  },
  money: {
    name: "Money and Church wealth",
    short: "Money",
    node: "fill-accent-soft stroke-accent",
    line: "stroke-accent",
    chip: "bg-accent-soft text-accent",
    supports: [
      "After the break, payments from the English Church to Rome stopped.",
      "The Valor Ecclesiasticus (1535) counted the Church's wealth; the dissolution brought the Crown land and income worth well over £100,000 a year.",
    ],
    challenges: ["Most of the money came *after* 1534 — it looks more like a result of the break than its starting point."],
    lens: {
      start: "Careful: the big gains (the monasteries, 1536–1540) came *after* the break, so money struggles to explain how it **began**.",
      last: "Strong: nobles and gentry who bought monastery land would lose it if the Pope returned — so the break became hard to reverse.",
    },
  },
  power: {
    name: "Royal power over the Church",
    short: "Power",
    node: "fill-info-soft stroke-info",
    line: "stroke-info",
    chip: "bg-info-soft text-info",
    supports: [
      "The Act of Supremacy (1534) made Henry ‘the only Supreme Head in earth of the Church of England’.",
      "The Act in Restraint of Appeals (1533): ‘this realm of England is an empire’ — no more appeals to Rome.",
    ],
    challenges: ["In 1521 Henry defended the Pope so loyally that he was named Defender of the Faith — he showed no wish to break until the Pope blocked his marriage."],
    lens: {
      start: "Mixed: Henry only challenged the Pope's authority once the Pope stood in the way of his marriage.",
      last: "Strong: control of Church courts, appointments and wealth explains why Henry never gave it back.",
    },
  },
  religion: {
    name: "Religion and conscience",
    short: "Religion",
    node: "fill-good-soft stroke-good",
    line: "stroke-good",
    chip: "bg-good-soft text-good",
    supports: [
      "Henry seems genuinely to have believed (from Leviticus 20:21) that marrying his brother's widow was a sin.",
      "Reformers — Cranmer, Cromwell and Anne Boleyn — pushed for change; an English Bible went into every parish church (1539).",
    ],
    challenges: ["Henry kept most Catholic beliefs: the Six Articles (1539) defended the Mass, confession and unmarried priests."],
    lens: {
      start: "Mixed: Henry's conscience about Leviticus seems real, but he was not a Protestant.",
      last: "Mixed: reformers gained influence, but Henry's Church stayed Catholic in belief — a halfway house.",
    },
  },
};

/** Sample arguments the learner can load and test — none is "the answer". */
const PRESETS: { id: string; label: string; w: Record<Factor, number> }[] = [
  { id: "heir", label: "The heir came first", w: { love: 3, heir: 5, money: 1, power: 2, religion: 2 } },
  { id: "love", label: "Love lit the fuse", w: { love: 5, heir: 3, money: 1, power: 1, religion: 1 } },
  { id: "power", label: "A power grab", w: { love: 1, heir: 2, money: 4, power: 5, religion: 1 } },
  { id: "faith", label: "A matter of conscience", w: { love: 2, heir: 3, money: 1, power: 1, religion: 5 } },
];

// Node positions round the centre (a pentagon squashed to fit the viewBox).
const CX = 240;
const CY = 152;
const POS: Record<Factor, { x: number; y: number }> = Object.fromEntries(
  FACTORS.map((f, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
    return [f, { x: Math.round(CX + 178 * Math.cos(a)), y: Math.round(CY + 112 * Math.sin(a)) }];
  }),
) as Record<Factor, { x: number; y: number }>;

// Factors that reinforce each other (dashed links), as in the guide's causation web.
const LINKS: { a: Factor; b: Factor; why: string }[] = [
  { a: "love", b: "heir", why: "Anne offered the chance of a legitimate son" },
  { a: "love", b: "religion", why: "Anne favoured religious reformers" },
  { a: "power", b: "money", why: "power over the Church brought its money" },
];

function BreakWithRome() {
  const [w, setW] = useState<Record<Factor, number>>({ love: 2, heir: 2, money: 2, power: 2, religion: 2 });
  const [lens, setLens] = useState<Lens>("start");
  const [sel, setSel] = useState<Factor>("heir");
  const [showLinks, setShowLinks] = useState(true);

  const total = FACTORS.reduce((s, f) => s + w[f], 0);
  const ranked = useMemo(() => [...FACTORS].sort((a, b) => w[b] - w[a]), [w]);
  const top = ranked[0];
  const topTies = FACTORS.filter((f) => w[f] === w[top]);
  const share = (f: Factor) => (total ? Math.round((100 * w[f]) / total) : 0);
  const allEqual = total > 0 && FACTORS.every((f) => w[f] === w[top]);

  const setOne = (f: Factor, v: number) => setW((old) => ({ ...old, [f]: v }));

  const ariaWeb = total
    ? `Causation web. ${ranked.map((f) => `${INFO[f].short} ${share(f)} per cent`).join(", ")}.`
    : "Causation web with no factors weighted yet.";

  let caption: ReactNode;
  if (total === 0) {
    caption = <p>Give at least one factor some weight to start building your argument.</p>;
  } else if (allEqual) {
    caption = (
      <p>
        You have weighted every factor equally. That describes the causes but doesn't yet <strong>explain</strong> the break — a
        judgement has to decide what mattered <em>most</em>. Try the lens buttons: does your answer change if the question is why
        it <em>started</em> or why it <em>lasted</em>?
      </p>
    );
  } else {
    const lead = topTies.length > 1 ? topTies.map((f) => INFO[f].short.toLowerCase()).join(" and ") : INFO[top].short.toLowerCase();
    const counter = INFO[top].challenges[0];
    caption = (
      <div className="space-y-2">
        <p>
          <strong>Your argument:</strong> {topTies.length > 1 ? "joint top factors are" : "the most important factor was"}{" "}
          <strong>{lead}</strong> ({share(top)}% of the weight{topTies.length > 1 ? " each" : ""}), asking{" "}
          {lens === "start" ? "why the break began (1527–1534)" : "why it went so far and lasted (1534–1547)"}.
        </p>
        <p>
          <strong>Test it:</strong> {stripMd(INFO[top].lens[lens])}
        </p>
        <p>
          <strong>A historian arguing against you might say:</strong> {stripMd(counter)}
        </p>
        <p className="text-ink-2">
          This is your judgement, not a score — historians disagree. Many see the heir as the main cause, love as the trigger for the
          timing, and power and money as the reasons the break went so far.
        </p>
      </div>
    );
  }

  return (
    <WidgetFrame
      title="Why did Henry break with Rome?"
      tryThis={[
        "Load **The heir came first**, then switch the lens to *why it lasted*. Which factor's case gets weaker — and why?",
        "Make **money** your top factor. What problem does the *why it started* lens raise?",
        "Tap each factor and find one piece of evidence that **challenges** it. Which factor is hardest to argue against?",
        "Build an argument where two factors are linked (dashed lines). Can you explain the link in one sentence?",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-ink-2">The question:</span>
          <Segmented<Lens>
            label="Which question are you answering?"
            value={lens}
            onChange={setLens}
            options={[
              { value: "start", label: "Why did it start?" },
              { value: "last", label: "Why did it last?" },
            ]}
          />
        </div>

        <svg viewBox="0 0 480 300" className="h-auto w-full" role="img" aria-label={ariaWeb}>
          {showLinks
            ? LINKS.map((l) => (
                <line
                  key={`${l.a}-${l.b}`}
                  x1={POS[l.a].x}
                  y1={POS[l.a].y}
                  x2={POS[l.b].x}
                  y2={POS[l.b].y}
                  className="stroke-ink-2"
                  strokeWidth={1.5}
                  strokeDasharray="5 4"
                  opacity={0.7}
                />
              ))
            : null}
          {FACTORS.map((f) => (
            <line
              key={`l-${f}`}
              x1={CX}
              y1={CY}
              x2={POS[f].x}
              y2={POS[f].y}
              className={w[f] ? INFO[f].line : "stroke-line"}
              strokeWidth={w[f] ? 1 + w[f] * 2.2 : 1}
              strokeDasharray={w[f] ? undefined : "3 4"}
              strokeLinecap="round"
            />
          ))}
          <circle cx={CX} cy={CY} r={40} className="fill-surface stroke-ink" strokeWidth={2} />
          <text x={CX} y={CY - 4} textAnchor="middle" fontSize={12} fontWeight={800} className="fill-ink">
            Break with
          </text>
          <text x={CX} y={CY + 11} textAnchor="middle" fontSize={12} fontWeight={800} className="fill-ink">
            Rome, 1534
          </text>
          {FACTORS.map((f) => {
            const r = 16 + w[f] * 3.6;
            const below = POS[f].y > CY;
            return (
              <g key={f} opacity={w[f] ? 1 : 0.55}>
                <circle cx={POS[f].x} cy={POS[f].y} r={r} className={INFO[f].node} strokeWidth={sel === f ? 4 : 2} />
                <text x={POS[f].x} y={POS[f].y + 4} textAnchor="middle" fontSize={12} fontWeight={800} className="fill-ink">
                  {INFO[f].short}
                </text>
                <text
                  x={POS[f].x}
                  y={below ? POS[f].y - r - 5 : POS[f].y + r + 13}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={700}
                  className="fill-ink-2"
                >
                  {share(f)}%
                </text>
              </g>
            );
          })}
        </svg>

        <div className="grid gap-2 sm:grid-cols-2">
          {FACTORS.map((f) => (
            <div key={f} className={`rounded-xl border p-2 ${sel === f ? "border-brand bg-surface-2" : "border-line bg-surface"}`}>
              <Stepper
                label={
                  <button
                    type="button"
                    onClick={() => setSel(f)}
                    aria-pressed={sel === f}
                    className="min-h-10 rounded-lg px-1 text-left font-bold text-ink underline decoration-dotted underline-offset-4"
                  >
                    {INFO[f].name}
                  </button>
                }
                value={w[f]}
                min={0}
                max={5}
                onChange={(v) => setOne(f, v)}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-ink-2">Test a sample argument (not the answer):</span>
          {PRESETS.map((p) => (
            <button key={p.id} type="button" className="btn btn-secondary btn-sm" onClick={() => setW(p.w)}>
              {p.label}
            </button>
          ))}
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => setW({ love: 0, heir: 0, money: 0, power: 0, religion: 0 })}>
            Clear
          </button>
          <label className="ml-auto inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-ink-2">
            <input type="checkbox" checked={showLinks} onChange={(e) => setShowLinks(e.target.checked)} />
            Show links between factors
          </label>
        </div>

        {showLinks ? (
          <p className="text-xs text-ink-2">
            Dashed lines: {LINKS.map((l) => `${INFO[l.a].short}–${INFO[l.b].short} (${l.why})`).join("; ")}.
          </p>
        ) : null}

        <div className="rounded-xl border border-line bg-surface p-3" aria-live="polite">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`chip font-bold ${INFO[sel].chip}`}>{INFO[sel].name}</span>
            <span className="text-sm text-ink-2">— the evidence</span>
          </div>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-good">Supports it</div>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-ink">
                {INFO[sel].supports.map((s) => (
                  <li key={s}>{stripMd(s)}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-bad">Challenges it</div>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-ink">
                {INFO[sel].challenges.map((s) => (
                  <li key={s}>{stripMd(s)}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-2 text-sm text-ink">
            <strong>{lens === "start" ? "Why it started:" : "Why it lasted:"}</strong> {stripMd(INFO[sel].lens[lens])}
          </p>
        </div>
      </div>
    </WidgetFrame>
  );
}

/** Drop markdown-lite emphasis markers for plain JSX text. */
function stripMd(s: string): string {
  return s.replace(/\*\*|\*/g, "");
}

/* ------------------------------------------------------------------------ */
/* 2. Six wives and the succession                                           */
/* ------------------------------------------------------------------------ */

type WifeState = "future" | "current" | "annulled" | "beheaded" | "died" | "survived";
type ChildState = "unborn" | "heir" | "illegitimate" | "second" | "third" | "reigned";
type ChildId = "mary" | "elizabeth" | "edward";

interface WifeInfo {
  lines: [string, string];
  full: string;
  married: string;
  ended: string;
  child: string;
  why: string;
}

const WIVES: WifeInfo[] = [
  { lines: ["Catherine", "of Aragon"], full: "Catherine of Aragon", married: "1509", ended: "Annulled 1533; died 1536", child: "Mary (born 1516)", why: "No surviving son after many pregnancies. Henry argued from Leviticus that the marriage to his brother's widow was never valid; Cranmer declared it void in May 1533." },
  { lines: ["Anne", "Boleyn"], full: "Anne Boleyn", married: "January 1533", ended: "Beheaded May 1536", child: "Elizabeth (born 1533)", why: "She lost pregnancies, including one in January 1536. Accused of adultery and treason — charges most historians think were invented — with Cromwell helping to bring her down." },
  { lines: ["Jane", "Seymour"], full: "Jane Seymour", married: "May 1536", ended: "Died October 1537", child: "Edward (born October 1537)", why: "She gave Henry his son, Edward, but died from complications days after the birth." },
  { lines: ["Anne", "of Cleves"], full: "Anne of Cleves", married: "January 1540", ended: "Annulled July 1540", child: "None", why: "A political match arranged by Cromwell to win an ally among the German states. Henry disliked her; she lived on in England as the ‘King's sister’. The fiasco helped bring about Cromwell's execution." },
  { lines: ["Catherine", "Howard"], full: "Catherine Howard", married: "July 1540", ended: "Beheaded 1542", child: "None", why: "Much younger than Henry; executed for adultery in 1542." },
  { lines: ["Catherine", "Parr"], full: "Catherine Parr", married: "1543", ended: "Survived Henry (1547)", child: "None", why: "A clever widow and author who helped reunite Henry with his daughters. She outlived him." },
];

const CHILDREN: { id: ChildId; name: string; reign: string; mother: number }[] = [
  { id: "mary", name: "Mary", reign: "Mary I, 1553–58", mother: 0 },
  { id: "elizabeth", name: "Elizabeth", reign: "Elizabeth I, 1558–1603", mother: 1 },
  { id: "edward", name: "Edward", reign: "Edward VI, 1547–53", mother: 2 },
];

interface Moment {
  year: string;
  title: string;
  wives: WifeState[];
  kids: Record<ChildId, ChildState>;
  /** The line of succession after this moment, in order. */
  line: string[];
  what: string;
  why: string;
}

const F: WifeState = "future";
const MOMENTS: Moment[] = [
  {
    year: "1509",
    title: "Henry becomes king and marries Catherine of Aragon",
    wives: ["current", F, F, F, F, F],
    kids: { mary: "unborn", elizabeth: "unborn", edward: "unborn" },
    line: [],
    what: "Henry, not yet 18, inherits peacefully and marries his brother Arthur's widow, with special permission from the Pope.",
    why: "No children yet — but everyone expects a young king and queen to have sons.",
  },
  {
    year: "1511",
    title: "A son is born — and dies",
    wives: ["current", F, F, F, F, F],
    kids: { mary: "unborn", elizabeth: "unborn", edward: "unborn" },
    line: [],
    what: "Prince Henry is born on New Year's Day 1511, but lives for only about seven weeks.",
    why: "Still no living heir. The succession is only as safe as the next child's survival.",
  },
  {
    year: "1516",
    title: "Princess Mary is born",
    wives: ["current", F, F, F, F, F],
    kids: { mary: "heir", elizabeth: "unborn", edward: "unborn" },
    line: ["Mary"],
    what: "Catherine gives birth to Mary — the only one of her children to survive.",
    why: "England has an heir, but a girl. Henry feared a female ruler meant civil war (as with Matilda in the 1100s) or a foreign husband controlling England.",
  },
  {
    year: "1533–34",
    title: "Anne Boleyn, Elizabeth and the first Act of Succession",
    wives: ["annulled", "current", F, F, F, F],
    kids: { mary: "illegitimate", elizabeth: "heir", edward: "unborn" },
    line: ["Elizabeth"],
    what: "Henry marries Anne in January 1533; Cranmer declares the first marriage void in May; Elizabeth is born in September. The 1534 Act of Succession makes Elizabeth heir.",
    why: "With her parents' marriage declared void, Mary is treated as illegitimate and loses her place. Parliament — not just birth — now decides who inherits.",
  },
  {
    year: "1536",
    title: "Anne is executed; Henry marries Jane Seymour",
    wives: ["annulled", "beheaded", "current", F, F, F],
    kids: { mary: "illegitimate", elizabeth: "illegitimate", edward: "unborn" },
    line: ["any children of Henry and Jane"],
    what: "Anne Boleyn is beheaded in May 1536; eleven days later Henry marries Jane Seymour. A new Act of Succession declares Elizabeth illegitimate too.",
    why: "Both daughters are now out of the line. The crown would go to children Henry and Jane did not yet have — the most uncertain moment of the reign.",
  },
  {
    year: "1537",
    title: "Edward is born; Jane Seymour dies",
    wives: ["annulled", "beheaded", "died", F, F, F],
    kids: { mary: "illegitimate", elizabeth: "illegitimate", edward: "heir" },
    line: ["Edward"],
    what: "In October 1537 Jane gives birth to Edward, then dies from complications days later.",
    why: "At last, a legitimate son. But the whole Tudor future now hangs on one baby boy.",
  },
  {
    year: "1540",
    title: "Anne of Cleves, then Catherine Howard",
    wives: ["annulled", "beheaded", "died", "annulled", "current", F],
    kids: { mary: "illegitimate", elizabeth: "illegitimate", edward: "heir" },
    line: ["Edward"],
    what: "The Anne of Cleves marriage (January) is annulled after six months; Henry marries Catherine Howard in July. Cromwell, who arranged the Cleves match, is executed.",
    why: "The line of succession doesn't change — Edward is still the only heir — but a second son would make it safer.",
  },
  {
    year: "1542",
    title: "Catherine Howard is executed",
    wives: ["annulled", "beheaded", "died", "annulled", "beheaded", F],
    kids: { mary: "illegitimate", elizabeth: "illegitimate", edward: "heir" },
    line: ["Edward"],
    what: "Catherine Howard is executed for adultery.",
    why: "Still only Edward. If he died young, there would be no clear heir at all.",
  },
  {
    year: "1543",
    title: "Catherine Parr and the 1543 Act of Succession",
    wives: ["annulled", "beheaded", "died", "annulled", "beheaded", "current"],
    kids: { mary: "second", elizabeth: "third", edward: "heir" },
    line: ["Edward", "Mary", "Elizabeth"],
    what: "Henry marries Catherine Parr, who helps reunite him with his daughters. Parliament's 1543 Act of Succession puts both daughters back in line.",
    why: "The order is fixed by law: a son before daughters, then the daughters by age — Edward, Mary, Elizabeth.",
  },
  {
    year: "1547",
    title: "Henry dies — all three children reign",
    wives: ["annulled", "beheaded", "died", "annulled", "beheaded", "survived"],
    kids: { mary: "reigned", elizabeth: "reigned", edward: "reigned" },
    line: ["Edward VI (1547–53)", "Mary I (1553–58)", "Elizabeth I (1558–1603)"],
    what: "Henry dies on 28 January 1547, aged 55. Catherine Parr survives him. The 1543 Act and Henry's will decide what happens next.",
    why: "All three children rule, in the order Parliament set. The longest reign of all is a daughter's: Elizabeth I, for 45 years.",
  },
];

const WIFE_STYLE: Record<WifeState, { box: string; label: string; text: string }> = {
  future: { box: "fill-surface stroke-line", label: "", text: "fill-ink-2" },
  current: { box: "fill-brand-soft stroke-brand", label: "married", text: "fill-ink" },
  annulled: { box: "fill-warn-soft stroke-warn", label: "annulled", text: "fill-ink" },
  beheaded: { box: "fill-bad-soft stroke-bad", label: "beheaded", text: "fill-ink" },
  died: { box: "fill-surface-2 stroke-ink-2", label: "died", text: "fill-ink" },
  survived: { box: "fill-good-soft stroke-good", label: "survived", text: "fill-ink" },
};

const CHILD_STYLE: Record<ChildState, { box: string; label: string }> = {
  unborn: { box: "fill-surface stroke-line", label: "not yet born" },
  heir: { box: "fill-good-soft stroke-good", label: "HEIR" },
  illegitimate: { box: "fill-bad-soft stroke-bad", label: "illegitimate" },
  second: { box: "fill-brand-soft stroke-brand", label: "2nd in line" },
  third: { box: "fill-brand-soft stroke-brand", label: "3rd in line" },
  reigned: { box: "fill-accent-soft stroke-accent", label: "" },
};

// Layout: six wife boxes across the viewBox, children under wives 1–3.
const BW = 72;
const GAP = 6;
const X0 = 9;
const wifeX = (i: number) => X0 + i * (BW + GAP);

function SuccessionTree() {
  const [step, setStep] = useState(0);
  const [wife, setWife] = useState<number | null>(null);
  const [predict, setPredict] = useState<"show" | "predict">("show");
  const [revealed, setRevealed] = useState<number>(-1);

  const m = MOMENTS[step];
  const lineVisible = predict === "show" || revealed === step;

  const aria = `Henry VIII's family in ${m.year}. Wives: ${WIVES.map((wi, i) => `${wi.full} ${m.wives[i] === "future" ? "not yet married" : WIFE_STYLE[m.wives[i]].label}`).join("; ")}. Children: ${CHILDREN.map((c) => `${c.name} ${m.kids[c.id] === "reigned" ? c.reign : CHILD_STYLE[m.kids[c.id]].label}`).join("; ")}.`;

  return (
    <WidgetFrame
      title="Six wives and the line of succession"
      tryThis={[
        "Switch on **Predict first**. At each step, say who you think is heir before you reveal it.",
        "Find the moment when **neither** daughter was in the line of succession. Why was it so risky?",
        "Edward was the youngest child — why did he come first in 1543?",
        "Which marriages changed the line of succession, and which made no difference to it?",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <strong>
              {m.year}: {m.title}.
            </strong>{" "}
            {m.what}
          </p>
          <p>
            <strong>What it meant for the succession:</strong> {lineVisible ? m.why : "Make your prediction, then reveal."}
          </p>
          <p className="text-xs text-ink-2">
            The rhyme says ‘divorced’, but strictly the 1st and 4th marriages were annulled — declared never to have been valid.
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<"show" | "predict">
            label="Prediction mode"
            value={predict}
            onChange={(v) => {
              setPredict(v);
              setRevealed(-1);
            }}
            options={[
              { value: "show", label: "Show the line" },
              { value: "predict", label: "Predict first" },
            ]}
          />
          <div className="flex items-center gap-2">
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} aria-label="Previous moment">
              ← Back
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => setStep((s) => Math.min(MOMENTS.length - 1, s + 1))}
              disabled={step === MOMENTS.length - 1}
              aria-label="Next moment"
            >
              Next →
            </button>
          </div>
        </div>

        <Slider label="Year" value={step} min={0} max={MOMENTS.length - 1} onChange={setStep} format={(v) => MOMENTS[v].year} />

        <svg viewBox="0 0 480 204" className="h-auto w-full" role="img" aria-label={aria}>
          {/* Henry */}
          <rect x={180} y={6} width={120} height={36} rx={8} className="fill-surface-2 stroke-ink" strokeWidth={2} />
          <text x={240} y={22} textAnchor="middle" fontSize={13} fontWeight={800} className="fill-ink">
            Henry VIII
          </text>
          <text x={240} y={36} textAnchor="middle" fontSize={11} className="fill-ink-2">
            {step === MOMENTS.length - 1 ? "died 1547" : `in ${m.year}`}
          </text>
          <line x1={240} y1={42} x2={240} y2={54} className="stroke-ink-2" strokeWidth={1.5} />
          <line x1={wifeX(0) + BW / 2} y1={54} x2={wifeX(5) + BW / 2} y2={54} className="stroke-ink-2" strokeWidth={1.5} />

          {/* Wives */}
          {WIVES.map((wi, i) => {
            const st = WIFE_STYLE[m.wives[i]];
            const x = wifeX(i);
            const future = m.wives[i] === "future";
            return (
              <g key={wi.full} opacity={future ? 0.5 : 1}>
                <line x1={x + BW / 2} y1={54} x2={x + BW / 2} y2={64} className="stroke-ink-2" strokeWidth={1.5} strokeDasharray={future ? "3 3" : undefined} />
                <rect
                  x={x}
                  y={64}
                  width={BW}
                  height={62}
                  rx={7}
                  className={st.box}
                  strokeWidth={wife === i ? 3.5 : m.wives[i] === "current" ? 2.5 : 1.5}
                  strokeDasharray={future ? "4 3" : undefined}
                />
                <text x={x + BW / 2} y={78} textAnchor="middle" fontSize={10} fontWeight={700} className="fill-ink-2">
                  {i + 1}
                </text>
                <text x={x + BW / 2} y={92} textAnchor="middle" fontSize={11} fontWeight={800} className={st.text}>
                  {wi.lines[0]}
                </text>
                <text x={x + BW / 2} y={105} textAnchor="middle" fontSize={11} fontWeight={800} className={st.text}>
                  {wi.lines[1]}
                </text>
                <text x={x + BW / 2} y={119} textAnchor="middle" fontSize={10} fontWeight={700} className="fill-ink-2">
                  {future ? "—" : st.label}
                </text>
              </g>
            );
          })}

          {/* Children of wives 1–3 */}
          {CHILDREN.map((c) => {
            const st = m.kids[c.id];
            const style = CHILD_STYLE[st];
            const x = wifeX(c.mother);
            const hidden = !lineVisible && st !== "unborn";
            const label = hidden ? "?" : st === "reigned" ? c.reign.split(",")[0] : style.label;
            return (
              <g key={c.id} opacity={st === "unborn" ? 0.45 : 1}>
                <line x1={x + BW / 2} y1={126} x2={x + BW / 2} y2={148} className="stroke-ink-2" strokeWidth={1.5} strokeDasharray={st === "unborn" ? "3 3" : undefined} />
                <rect
                  x={x}
                  y={148}
                  width={BW}
                  height={48}
                  rx={7}
                  className={hidden ? "fill-surface-2 stroke-ink-2" : style.box}
                  strokeWidth={st === "heir" && !hidden ? 3 : 1.5}
                  strokeDasharray={st === "unborn" ? "4 3" : undefined}
                />
                <text x={x + BW / 2} y={167} textAnchor="middle" fontSize={12} fontWeight={800} className="fill-ink">
                  {c.name}
                </text>
                <text x={x + BW / 2} y={184} textAnchor="middle" fontSize={10} fontWeight={700} className="fill-ink-2">
                  {label}
                </text>
              </g>
            );
          })}

          {/* No-children note under wives 4–6 */}
          <text x={wifeX(4) + BW / 2} y={176} textAnchor="middle" fontSize={11} className="fill-ink-2">
            Wives 4–6 had no children
          </text>
        </svg>
        <p className="-mt-2 text-xs text-ink-2">
          Colours: blue = current marriage or in line · green = heir or survived · amber = annulled · red = beheaded or illegitimate.
        </p>

        <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <div className="rounded-xl border border-line bg-surface p-3" aria-live="polite">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Line of succession after {m.year}</div>
            {lineVisible ? (
              m.line.length ? (
                <ol className="mt-1 list-decimal space-y-0.5 pl-5 text-sm font-bold text-ink">
                  {m.line.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ol>
              ) : (
                <p className="mt-1 text-sm text-ink">No living child — no clear heir yet.</p>
              )
            ) : (
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <p className="text-sm text-ink-2">Who do you think inherits now — and why?</p>
                <button type="button" className="btn btn-primary btn-sm" onClick={() => setRevealed(step)}>
                  Reveal
                </button>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
            <Readout label="Wives so far" value={m.wives.filter((s) => s !== "future").length} tone="ink" />
            <Readout label="Named in line" value={lineVisible ? m.line.filter((l) => !l.startsWith("any")).length : "?"} tone={m.line.length >= 3 ? "good" : "brand"} />
          </div>
        </div>

        <div>
          <div className="mb-1 text-sm font-semibold text-ink-2">Tap a wife for her story:</div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {WIVES.map((wi, i) => (
              <button
                key={wi.full}
                type="button"
                aria-pressed={wife === i}
                onClick={() => setWife(wife === i ? null : i)}
                className={`min-h-10 rounded-xl border px-3 py-2 text-left text-sm font-bold transition ${wife === i ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink hover:bg-surface-2"}`}
              >
                {i + 1}. {wi.full}
              </button>
            ))}
          </div>
          {wife !== null ? (
            <div className="mt-2 rounded-xl bg-surface-2 p-3 text-sm text-ink">
              <p className="font-extrabold">
                {wife + 1}. {WIVES[wife].full}
              </p>
              <p>
                <strong>Married:</strong> {WIVES[wife].married} · <strong>Ended:</strong> {WIVES[wife].ended} · <strong>Child who reigned:</strong> {WIVES[wife].child}
              </p>
              <p className="mt-1">{WIVES[wife].why}</p>
            </div>
          ) : null}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  { id: "break-with-rome-web", title: "Why break with Rome?", blurb: "Weigh love, an heir, money, power and religion — and test your argument against the evidence.", Component: BreakWithRome },
  { id: "succession-tree", title: "Six wives and the succession", blurb: "Step through 1509–1547 and watch each marriage change who would inherit the crown.", Component: SuccessionTree },
];
