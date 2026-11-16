"use client";
// Explorables for "Hitler's Rise to Power":
//   1. Hyperinflation price explorer (bread prices 1918–1923, log vs ordinary scale)
//   2. Reichstag seats explorer (elections 1928 – March 1933, coalition maths)
// Figures match lib/topics/hitler-rise/guide.ts and lib/extras/hitler-rise.ts.
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Number formatting (no locale APIs, so server and client render identically)
// ---------------------------------------------------------------------------

function commas(n: number): string {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/** 0.63 → "0.63", 3465 → "3,465", 1512000 → "1.5 million", 2.01e11 → "201 billion". */
function words(n: number): string {
  if (n < 1) return n.toFixed(2);
  if (n < 1e6) return commas(n);
  const units: [number, string][] = [
    [1e12, "trillion"],
    [1e9, "billion"],
    [1e6, "million"],
  ];
  for (const [u, w] of units) {
    if (n >= u) {
      const v = n / u;
      const s = v >= 100 ? String(Math.round(v)) : String(parseFloat(v.toPrecision(2)));
      return `${s} ${w}`;
    }
  }
  return commas(n);
}

/** Round to 2 significant figures, then put into words: 258.7 → "260", 3.19e11 → "320 billion". */
function twoSig(n: number): string {
  if (n < 1) return n.toFixed(2);
  const p = Math.pow(10, Math.floor(Math.log10(n)) - 1);
  return words(Math.round(n / p) * p);
}

// ---------------------------------------------------------------------------
// 1. Hyperinflation price explorer
// ---------------------------------------------------------------------------

const BREAD = [
  {
    short: "1918",
    long: "1918",
    price: 0.63,
    note: "Germany loses the war. It had paid for the fighting by borrowing and printing money, so prices are already creeping up.",
  },
  {
    short: "1922",
    long: "1922",
    price: 163,
    note: "Prices have kept rising since the war, and Germany is struggling to pay reparations. Savings are already losing value.",
  },
  {
    short: "Jan 23",
    long: "January 1923",
    price: 250,
    note: "French and Belgian troops occupy the Ruhr. The government backs passive resistance and pays the striking workers by printing more money.",
  },
  {
    short: "Jul 23",
    long: "July 1923",
    price: 3465,
    note: "Far more money is chasing far fewer goods. People rush to spend their wages the moment they are paid, before prices rise again.",
  },
  {
    short: "Sep 23",
    long: "September 1923",
    price: 1512000,
    note: "A loaf now costs over a million marks. In September the new Chancellor, Stresemann, calls off passive resistance.",
  },
  {
    short: "Nov 23",
    long: "November 1923",
    price: 201000000000,
    note: "The peak: about 201 billion marks a loaf, and one US dollar is worth about 4.2 trillion marks. In November the new Rentenmark ends the crisis.",
  },
] as const;

const SAVINGS = [
  { value: "1000", amount: 1000, label: "1,000 marks" },
  { value: "100000", amount: 100000, label: "100,000 marks" },
  { value: "1000000", amount: 1000000, label: "1 million marks" },
] as const;

type SavingsKey = (typeof SAVINGS)[number]["value"];
type Scale = "log" | "linear";

// Chart geometry
const CX0 = 78;
const CX1 = 462;
const CY0 = 42;
const CY1 = 246;
const LOG_MIN = -1; // 0.1 marks
const LOG_MAX = 12; // 1 trillion marks
const xAt = (i: number) => CX0 + 26 + i * ((CX1 - CX0 - 52) / (BREAD.length - 1));

function HyperinflationExplorer() {
  const [step, setStep] = useState(0);
  const [scale, setScale] = useState<Scale>("log");
  const [savingsKey, setSavingsKey] = useState<SavingsKey>("100000");

  const cur = BREAD[step];
  const savings = SAVINGS.find((s) => s.value === savingsKey) ?? SAVINGS[1];
  const ratio = cur.price / BREAD[0].price;
  const loaves = savings.amount / cur.price;

  const top = cur.price;
  const yAt = (v: number) =>
    scale === "log" ? CY1 - ((Math.log10(v) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * (CY1 - CY0) : CY1 - (v / top) * (CY1 - CY0);

  const grid =
    scale === "log"
      ? [
          { v: 1, label: "1" },
          { v: 1e3, label: "1 thousand" },
          { v: 1e6, label: "1 million" },
          { v: 1e9, label: "1 billion" },
          { v: 1e12, label: "1 trillion" },
        ]
      : [
          { v: 0, label: "0" },
          { v: cur.price / 2, label: words(cur.price / 2) },
          { v: cur.price, label: words(cur.price) },
        ];

  const shown = BREAD.slice(0, step + 1);
  const points = shown.map((b, i) => `${xAt(i)},${yAt(b.price)}`).join(" ");
  const ariaLabel = `Chart of the price of a loaf of bread in marks on ${scale === "log" ? "a logarithmic" : "an ordinary"} scale, from 1918 to ${cur.long}: ${shown
    .map((b) => `${b.long} ${words(b.price)} marks`)
    .join("; ")}.`;

  const loavesText = loaves >= 1 ? `${commas(Math.floor(loaves))} loa${Math.floor(loaves) === 1 ? "f" : "ves"}` : "Not one loaf";

  return (
    <WidgetFrame
      title="Hyperinflation price explorer"
      tryThis={[
        "**Predict** first: how many times dearer was bread in November 1923 than in 1918? Then slide to check.",
        "Reach November 1923, then switch to the **ordinary scale**. Where have all the earlier prices gone?",
        "Choose savings of **100,000 marks**. At which date can a lifetime's savings no longer buy a single loaf?",
        "Someone **borrowed** 100,000 marks in 1918. Why were they delighted by September 1923?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>{cur.long}:</strong> {cur.note}
          </p>
          <p>
            A loaf costs <strong>{words(cur.price)} marks</strong>
            {step > 0 ? <> — about <strong>{twoSig(ratio)} times</strong> the 1918 price.</> : "."}{" "}
            {loaves >= 1 ? (
              <>Savings of {savings.label} still buy {loavesText.toLowerCase()}.</>
            ) : (
              <>
                Savings of {savings.label} are now worth <strong>less than one loaf</strong> — you would need about {twoSig(1 / loaves)} times as much money
                to buy one.
              </>
            )}{" "}
            The flip side: a <strong>debt</strong> of the same size has shrunk just as much, so borrowers could repay it with almost worthless notes —
            savers lost, debtors gained.
          </p>
          <p>
            {scale === "log"
              ? "Log scale: each gridline is 1,000 times the one below. It is the only way to fit 0.63 and 201 billion on one chart."
              : `Ordinary scale running up to ${words(cur.price)}: ${step > 0 ? "every earlier price is squashed flat against the bottom. That is why historians use a log scale for hyperinflation." : "slide forward to see what happens to this point."}`}
          </p>
          <p className="text-xs text-ink-2">
            Figures: textbook prices for a loaf of bread in Germany, in marks. Dates are evenly spaced on the chart, not to scale in time. The savings
            amounts are examples.
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        <Slider label="Date" value={step} min={0} max={BREAD.length - 1} onChange={setStep} format={(v) => BREAD[v]?.long ?? ""} />
        <div className="flex flex-wrap items-center gap-3">
          <Segmented<Scale>
            label="Chart scale"
            value={scale}
            onChange={setScale}
            options={[
              { value: "log", label: "Log scale" },
              { value: "linear", label: "Ordinary scale" },
            ]}
          />
          <Segmented<SavingsKey>
            label="Savings in the bank"
            value={savingsKey}
            onChange={setSavingsKey}
            options={SAVINGS.map((s) => ({ value: s.value, label: s.label }))}
          />
        </div>

        <svg viewBox="0 0 480 290" className="mx-auto block h-auto w-full max-w-2xl" role="img" aria-label={ariaLabel}>
          <text x={240} y={18} fontSize={13} fontWeight={700} textAnchor="middle" className="fill-ink">
            Price of a loaf of bread (marks)
          </text>
          {grid.map((g) => (
            <g key={g.label}>
              <line x1={CX0} x2={CX1} y1={yAt(g.v)} y2={yAt(g.v)} className="stroke-line" strokeWidth={1} />
              <text x={CX0 - 6} y={yAt(g.v) + 4} fontSize={11} textAnchor="end" className="fill-ink-2">
                {g.label}
              </text>
            </g>
          ))}
          <line x1={CX0} x2={CX0} y1={CY0} y2={CY1} className="stroke-ink-2" strokeWidth={1.5} />
          <line x1={CX0} x2={CX1} y1={CY1} y2={CY1} className="stroke-ink-2" strokeWidth={1.5} />
          {BREAD.map((b, i) => (
            <text key={b.short} x={xAt(i)} y={CY1 + 18} fontSize={11} textAnchor="middle" className={i <= step ? "fill-ink" : "fill-ink-2"}>
              {b.short}
            </text>
          ))}
          {BREAD.map((b, i) =>
            i > step ? (
              <text key={`q${b.short}`} x={xAt(i)} y={CY1 - 8} fontSize={13} fontWeight={700} textAnchor="middle" className="fill-ink-2">
                ?
              </text>
            ) : null,
          )}
          {shown.length > 1 ? <polyline points={points} fill="none" className="stroke-bad" strokeWidth={2.5} strokeLinejoin="round" /> : null}
          {shown.map((b, i) => (
            <circle key={`p${b.short}`} cx={xAt(i)} cy={yAt(b.price)} r={i === step ? 6 : 4} className={i === step ? "fill-bad stroke-surface" : "fill-bad"} strokeWidth={2} />
          ))}
          <text
            x={Math.min(xAt(step), CX1 - 4)}
            y={Math.max(yAt(cur.price) - 12, CY0 - 4)}
            fontSize={12}
            fontWeight={700}
            textAnchor={step >= BREAD.length - 2 ? "end" : "middle"}
            className="fill-ink"
          >
            {words(cur.price)}
          </text>
          <text x={CX1} y={CY1 + 36} fontSize={10} textAnchor="end" className="fill-ink-2">
            {scale === "log" ? "Log scale — each gridline ×1,000" : "Ordinary scale"}
          </text>
        </svg>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Loaf of bread" value={`${words(cur.price)} marks`} tone="bad" />
          <Readout label="Times the 1918 price" value={step === 0 ? "×1" : `×${twoSig(ratio)}`} tone="ink" />
          <Readout label={`${savings.label} buys`} value={loavesText} tone={loaves >= 1 ? "good" : "bad"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Reichstag seats explorer
// ---------------------------------------------------------------------------

type PartyId = "KPD" | "SPD" | "DDP" | "Z" | "DVP" | "DNVP" | "NSDAP" | "OTH";

interface Party {
  id: PartyId;
  short: string;
  name: string;
  stance: string;
  fill: string;
  swatch: string;
}

// Ordered roughly left to right. Colours group parties by attitude to the republic.
const PARTIES: Party[] = [
  { id: "KPD", short: "KPD", name: "Communists (KPD)", stance: "wanted a communist revolution — against the republic", fill: "fill-bad", swatch: "bg-bad" },
  { id: "SPD", short: "SPD", name: "Social Democrats (SPD)", stance: "the republic's main defenders", fill: "fill-good", swatch: "bg-good" },
  { id: "DDP", short: "DDP", name: "Democrats (DDP; State Party from 1930)", stance: "liberal; supported the republic", fill: "fill-good", swatch: "bg-good" },
  { id: "Z", short: "Centre + BVP", name: "Centre Party + Bavarian People's Party", stance: "Catholic parties; mostly supported the republic", fill: "fill-good", swatch: "bg-good" },
  { id: "DVP", short: "DVP", name: "People's Party (DVP)", stance: "Stresemann's party; accepted the republic and often joined coalitions", fill: "fill-info", swatch: "bg-info" },
  { id: "DNVP", short: "DNVP", name: "Nationalists (DNVP)", stance: "hostile — wanted the Kaiser back or an authoritarian government", fill: "fill-accent", swatch: "bg-accent" },
  { id: "NSDAP", short: "Nazis", name: "Nazis (NSDAP)", stance: "wanted to destroy the republic", fill: "fill-s-dictatorship", swatch: "bg-s-dictatorship" },
  { id: "OTH", short: "Others", name: "Small parties", stance: "regional and special-interest parties with mixed views", fill: "fill-ink-2", swatch: "bg-ink-2" },
];

interface Election {
  id: string;
  label: string;
  nazi: string;
  seats: Record<PartyId, number>;
  note: string;
}

const ELECTIONS: Election[] = [
  {
    id: "1928",
    label: "May 1928",
    nazi: "2.6%",
    seats: { KPD: 54, SPD: 153, DDP: 25, Z: 77, DVP: 45, DNVP: 73, NSDAP: 12, OTH: 52 },
    note: "The 'Golden Years'. A Grand Coalition (SPD, Centre, BVP, DDP and DVP) led by the Social Democrat Hermann Müller governed until March 1930, when it split over unemployment benefits.",
  },
  {
    id: "1930",
    label: "Sep 1930",
    nazi: "18.3%",
    seats: { KPD: 77, SPD: 143, DDP: 20, Z: 87, DVP: 30, DNVP: 41, NSDAP: 107, OTH: 72 },
    note: "The first election after the Wall Street Crash. The Nazis leap from 12 to 107 seats. Chancellor Brüning has no majority and governs by Article 48 decrees instead.",
  },
  {
    id: "1932a",
    label: "Jul 1932",
    nazi: "37.3%",
    seats: { KPD: 89, SPD: 133, DDP: 4, Z: 97, DVP: 7, DNVP: 37, NSDAP: 230, OTH: 11 },
    note: "The Depression at its worst. The Nazis are the largest party — their best result in a free election — but Hitler refuses to join any government he does not lead.",
  },
  {
    id: "1932b",
    label: "Nov 1932",
    nazi: "33.1%",
    seats: { KPD: 100, SPD: 121, DDP: 2, Z: 90, DVP: 11, DNVP: 51, NSDAP: 196, OTH: 13 },
    note: "The Nazi vote falls for the first time. Papen, then Schleicher, try to govern without a majority. On 30 January 1933 Hindenburg appoints Hitler Chancellor.",
  },
  {
    id: "1933",
    label: "Mar 1933",
    nazi: "43.9%",
    seats: { KPD: 81, SPD: 120, DDP: 5, Z: 92, DVP: 2, DNVP: 52, NSDAP: 288, OTH: 7 },
    note: "Not a free election: it came after the Reichstag Fire, amid SA intimidation, with communist leaders arrested. The KPD's deputies were arrested or in hiding and never took their seats.",
  },
];

const PRESETS: { label: string; ids: PartyId[] }[] = [
  { label: "Pro-republic parties", ids: ["SPD", "Z", "DDP"] },
  { label: "+ DVP (Grand Coalition)", ids: ["SPD", "Z", "DDP", "DVP"] },
  { label: "Everyone except Nazis & KPD", ids: ["SPD", "DDP", "Z", "DVP", "DNVP", "OTH"] },
  { label: "Nazis + DNVP", ids: ["NSDAP", "DNVP"] },
  { label: "Clear", ids: [] },
];

function ReichstagExplorer() {
  const [ei, setEi] = useState(0);
  const [sel, setSel] = useState<PartyId[]>(["SPD", "Z", "DDP", "DVP"]);

  const e = ELECTIONS[ei];
  const total = PARTIES.reduce((s, p) => s + e.seats[p.id], 0);
  const majority = Math.floor(total / 2) + 1;
  const coalition = sel.reduce((s, id) => s + e.seats[id], 0);
  const hasNazi = sel.includes("NSDAP");
  const hasKpd = sel.includes("KPD");
  const extremes = e.seats.NSDAP + e.seats.KPD;
  const withoutExtremes = total - extremes;
  const diff = coalition - majority;
  const grand = e.seats.SPD + e.seats.Z + e.seats.DDP + e.seats.DVP;

  const toggle = (id: PartyId) => setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  // Bar geometry
  const BX0 = 12;
  const BW = 456;
  const sx = (seats: number) => (seats / total) * BW;
  /** Lay parties end to end: each bar starts where the seats before it end. */
  const stack = (parties: typeof PARTIES) =>
    parties.map((p, i) => {
      const before = parties.slice(0, i).reduce((n, q) => n + e.seats[q.id], 0);
      return { p, x: BX0 + sx(before), w: sx(e.seats[p.id]) };
    });
  const chamber = stack(PARTIES);
  const coalBars = stack(PARTIES.filter((p) => sel.includes(p.id)));
  const majX = BX0 + sx(majority);

  const selNames = PARTIES.filter((p) => sel.includes(p.id)).map((p) => p.short);
  const ariaLabel = `Reichstag after the ${e.label} election: ${total} seats, majority ${majority}. ${PARTIES.map((p) => `${p.short} ${e.seats[p.id]}`).join(", ")}. Your coalition: ${
    selNames.length ? selNames.join(", ") : "no parties"
  }, ${coalition} seats, ${diff >= 0 ? "a majority" : `${-diff} short of a majority`}.`;

  let warning: string | null = null;
  if (hasNazi && hasKpd) {
    warning =
      "On paper only. Nazis and Communists were sworn enemies who fought each other in the streets — they would never govern together. What they could do was vote together against every other government.";
  } else if (hasNazi && sel.length > 1 && ei < 4) {
    warning = "Any coalition with the Nazis needed Hitler's agreement — and in 1932 he refused to join any government unless he was Chancellor.";
  } else if (hasKpd && sel.length > 1) {
    warning = "The KPD refused to work with the 'bourgeois' parties and attacked the SPD as traitors to the workers, so no coalition including them was realistic.";
  }

  return (
    <WidgetFrame
      title="Reichstag seats explorer"
      tryThis={[
        "In **May 1928**, build a majority **without** the Nazis or the KPD. How many seats do you have to spare?",
        "**Predict** which election first made a democratic majority impossible. Then step through and test it with *Everyone except Nazis & KPD*.",
        "In **July 1932**, add up the Nazis and the KPD. What could two parties that hated democracy do with a majority between them?",
        "In **March 1933**, why did Hitler still need the DNVP — and why do historians treat this result with caution?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>{e.label}</strong> — {total} seats, so a majority needs <strong>{majority}</strong>. Nazi vote: {e.nazi} ({e.seats.NSDAP} seats). {e.note}
          </p>
          <p>
            {sel.length === 0 ? (
              <>Tap parties to build a coalition.</>
            ) : (
              <>
                Your coalition ({selNames.join(" + ")}) has <strong>{coalition}</strong> seats —{" "}
                {diff >= 0 ? (
                  <strong className="text-good">a majority, with {diff} to spare</strong>
                ) : (
                  <strong className="text-bad">{-diff} short of a majority</strong>
                )}
                .
              </>
            )}{" "}
            Without the Nazis and the KPD, the most any coalition could have was <strong>{withoutExtremes}</strong> seats —{" "}
            {withoutExtremes < majority
              ? "not enough. A majority government of democratic parties had become impossible."
              : grand >= majority
                ? `enough — the Grand Coalition parties (SPD, Centre, BVP, DDP, DVP) alone had ${grand}.`
                : `enough on paper, but the Grand Coalition parties had only ${grand}, so it meant relying on the hostile Nationalists and a crowd of small parties.`}{" "}
            Nazis + KPD together: <strong>{extremes}</strong>
            {extremes >= majority ? " — a majority of the Reichstag held by parties that wanted to destroy it." : "."}
          </p>
          {warning ? <p className="rounded-lg bg-bad-soft p-2 text-ink">{warning}</p> : null}
          <p className="text-xs text-ink-2">
            Figures: official Reichstag election results (seats). Centre and BVP are combined; &lsquo;Others&rsquo; are small regional and
            special-interest parties. Colours group parties by their attitude to the republic.
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => setEi((i) => Math.max(0, i - 1))} disabled={ei === 0} aria-label="Previous election">
            ◀
          </button>
          <Segmented<string>
            label="Election"
            value={e.id}
            onChange={(id) => setEi(Math.max(0, ELECTIONS.findIndex((x) => x.id === id)))}
            options={ELECTIONS.map((x) => ({ value: x.id, label: x.label }))}
          />
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setEi((i) => Math.min(ELECTIONS.length - 1, i + 1))}
            disabled={ei === ELECTIONS.length - 1}
            aria-label="Next election"
          >
            ▶
          </button>
        </div>

        <svg viewBox="0 0 480 150" className="mx-auto block h-auto w-full max-w-2xl" role="img" aria-label={ariaLabel}>
          <text x={BX0} y={16} fontSize={12} fontWeight={700} className="fill-ink">
            Reichstag, {e.label} ({total} seats)
          </text>
          {chamber.map(({ p, x, w }) => (
            <rect
              key={p.id}
              x={x}
              y={24}
              width={Math.max(0, w)}
              height={34}
              className={`${p.fill} stroke-surface`}
              strokeWidth={1.5}
              opacity={sel.includes(p.id) ? 1 : 0.3}
            />
          ))}
          <text x={BX0} y={84} fontSize={12} fontWeight={700} className="fill-ink">
            Your coalition: {coalition} seats
          </text>
          <rect x={BX0} y={92} width={BW} height={34} rx={3} className="fill-surface-2 stroke-line" strokeWidth={1} />
          {coalBars.map(({ p, x, w }) => (
            <rect key={`c${p.id}`} x={x} y={92} width={Math.max(0, w)} height={34} className={`${p.fill} stroke-surface`} strokeWidth={1.5} />
          ))}
          <line x1={majX} x2={majX} y1={70} y2={132} className="stroke-ink" strokeWidth={2} strokeDasharray="5 3" />
          <text x={majX} y={146} fontSize={11} fontWeight={700} textAnchor="middle" className="fill-ink">
            Majority: {majority}
          </text>
        </svg>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Your coalition" value={`${coalition} seats`} tone={sel.length === 0 ? "ink" : diff >= 0 ? "good" : "bad"} />
          <Readout label="Majority needed" value={`${majority} of ${total}`} tone="ink" />
          <Readout label="Nazis + KPD" value={`${extremes} seats`} tone={extremes >= majority ? "bad" : "ink"} />
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-ink-2">Tap parties to add or remove them:</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {PARTIES.map((p) => {
              const on = sel.includes(p.id);
              return (
                <button
                  key={p.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(p.id)}
                  className={`flex min-h-[2.75rem] items-start gap-2 rounded-xl border px-3 py-2 text-left text-sm transition ${
                    on ? "border-brand bg-brand-soft" : "border-line bg-surface"
                  }`}
                >
                  <span aria-hidden className={`mt-1 inline-block h-3 w-3 shrink-0 rounded-sm ${p.swatch}`} />
                  <span className="flex-1">
                    <span className="flex justify-between gap-2 font-bold text-ink">
                      <span>{p.name}</span>
                      <span className="tabular-nums">{e.seats[p.id]}</span>
                    </span>
                    <span className="block text-xs text-ink-2">{p.stance}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {PRESETS.map((pr) => (
            <button key={pr.label} type="button" className="btn btn-secondary btn-sm" onClick={() => setSel(pr.ids)}>
              {pr.label}
            </button>
          ))}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "hyperinflation-explorer",
    title: "Hyperinflation price explorer",
    blurb: "Watch the price of a loaf of bread explode between 1918 and 1923 — and see who lost and who gained.",
    Component: HyperinflationExplorer,
  },
  {
    id: "reichstag-seats-explorer",
    title: "Reichstag seats explorer",
    blurb: "Step through the elections of 1928–1933 and try to build a majority without the Nazis or the Communists.",
    Component: ReichstagExplorer,
  },
];
