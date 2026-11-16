"use client";
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Hyperinflation price explorer
// ---------------------------------------------------------------------------

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * Paper marks per US dollar, monthly averages (Berlin), January 1919 – December 1923.
 * Source: the standard Statistisches Reichsamt series reproduced in most histories of the
 * inflation, rounded. November and December 1923 use the rate fixed on 20 November 1923
 * (4.2 trillion), when the Rentenmark was introduced.
 */
const RATE: number[] = [
  // 1919
  8.9, 9.1, 10.4, 12.6, 12.9, 14.0, 15.1, 18.8, 24.1, 26.8, 38.4, 46.8,
  // 1920
  64.8, 99.1, 83.9, 59.6, 46.5, 39.1, 39.5, 47.7, 58.0, 68.2, 77.2, 73.0,
  // 1921
  64.9, 61.3, 62.5, 63.5, 62.3, 69.4, 76.7, 84.3, 104.9, 150.2, 263.0, 191.9,
  // 1922
  191.8, 207.8, 284.2, 291.0, 290.1, 317.1, 493.2, 1134.6, 1465.9, 3181.0, 7183.1, 7589.3,
  // 1923
  17972, 27918, 21190, 24457, 47670, 109966, 353412, 4620455, 98860000, 25260208000, 4.2e12, 4.2e12,
];

/** Recorded prices of a loaf of bread in Berlin (marks) — the figures most often quoted. */
const BREAD: { from: number; when: string; price: number }[] = [
  { from: -1, when: "1918", price: 0.63 },
  { from: 36, when: "1922", price: 163 },
  { from: 48, when: "January 1923", price: 250 },
  { from: 54, when: "July 1923", price: 3465 },
  { from: 56, when: "September 1923", price: 1512000 },
  { from: 58, when: "November 1923", price: 201000000000 },
];

const monthName = (i: number) => `${MONTHS[i % 12]} ${1919 + Math.floor(i / 12)}`;

/** 1234 → "1,234"; 25,260,208,000 → "about 25 billion". */
function marks(n: number): string {
  if (n < 10) return n.toFixed(2).replace(/\.?0+$/, "");
  if (n < 1000) return String(Math.round(n));
  if (n < 1e6) return Math.round(n).toLocaleString("en-GB");
  const units: [number, string][] = [
    [1e12, "trillion"],
    [1e9, "billion"],
    [1e6, "million"],
  ];
  for (const [u, w] of units) {
    if (n >= u) {
      const v = n / u;
      const s = v >= 100 ? String(Math.round(v)) : v >= 10 ? String(Math.round(v)) : v.toFixed(1).replace(/\.0$/, "");
      return `${s} ${w}`;
    }
  }
  return String(n);
}

function dollars(n: number): string {
  if (n >= 1) return `$${Math.round(n).toLocaleString("en-GB")}`;
  if (n >= 0.01) return `${Math.round(n * 100)} cents`;
  return "less than 1 cent";
}

function inflationCaption(i: number): string {
  if (i < 12)
    return "The mark has already lost more than half its value since 1914, when a dollar cost 4.2 marks: Germany paid for the war by borrowing and printing money. Prices are rising — but money still works.";
  if (i < 30)
    return "Prices jump in early 1920, then steady. Germany is poor and in debt, but life goes on. In 1921 the reparations bill is fixed at 132 billion gold marks.";
  if (i < 41)
    return "Reparations payments begin and the government covers its debts by printing more money. The mark slides again in late 1921.";
  if (i < 48)
    return "June 1922: Foreign Minister Walther Rathenau is murdered by right-wing extremists. Confidence collapses — by December a dollar costs about 7,600 marks.";
  if (i < 56)
    return "January 1923: France and Belgium occupy the Ruhr after Germany misses payments. Workers go on strike (passive resistance) and the government prints money to pay them. Prices now rise by the day.";
  if (i < 58)
    return "Hyperinflation. Prices double every few days. Workers are paid daily — some twice a day — and rush to spend before prices rise again. Savings and pensions are wiped out; people who owed money pay off debts with worthless notes.";
  if (i === 58)
    return "15 November 1923: Stresemann's government brings in the Rentenmark — 1 Rentenmark = 1 trillion paper marks. On 20 November the rate is fixed at 4.2 trillion marks to the dollar: the same 4.2 as in 1914, with twelve zeros added.";
  return "December 1923: prices stop racing upwards and the new money is trusted. But savers never got their losses back — and many never trusted the republic again.";
}

function HyperinflationExplorer() {
  const [i, setI] = useState(48);
  const [scale, setScale] = useState<"log" | "linear">("log");
  const rate = RATE[i];
  const savings = 10000 / rate;
  const bread = [...BREAD].reverse().find((b) => b.from <= i) ?? BREAD[0];

  const W = 360;
  const H = 220;
  const L = 46;
  const R = 350;
  const T = 16;
  const B = 186;
  const x = (k: number) => L + (k / (RATE.length - 1)) * (R - L);
  const yLog = (v: number) => B - (Math.log10(v) / 13) * (B - T);
  const yLin = (v: number) => B - (v / 4.2e12) * (B - T);
  const y = scale === "log" ? yLog : yLin;
  const path = RATE.map((v, k) => `${k ? "L" : "M"}${x(k).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const ticks = scale === "log" ? [1, 1e3, 1e6, 1e9, 1e12] : [0, 1e12, 2e12, 3e12, 4e12];
  const tickLabel = (v: number) => (v === 0 ? "0" : v === 1 ? "1" : v === 1e3 ? "1,000" : marks(v).replace(" ", " "));

  return (
    <WidgetFrame
      title="Hyperinflation price explorer"
      tryThis={[
        "Find the first month when one US dollar cost more than 1,000 marks.",
        "Switch to the ordinary scale. Why does the line look flat until autumn 1923 — and why do historians use a log scale?",
        "Use the bread table: roughly how many times more did a loaf cost in November 1923 than in January 1923?",
        "Watch the savings readout. Who would you rather be in 1923 — a saver or someone with a big loan? Why?",
      ]}
      caption={
        <>
          <p>
            <strong>{monthName(i)}:</strong> {inflationCaption(i)}
          </p>
          <p className="mt-2 text-ink-2">
            Exchange rates are monthly averages, rounded (approximate). On the log scale each grid line is 1,000 times the one below it.
          </p>
        </>
      }
    >
      <div className="space-y-4">
        <Slider label="Month" value={i} min={0} max={RATE.length - 1} onChange={setI} format={monthName} />
        <Segmented
          label="Chart scale"
          value={scale}
          onChange={setScale}
          options={[
            { value: "log", label: "Log scale" },
            { value: "linear", label: "Ordinary scale" },
          ]}
        />
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label={`Line chart of paper marks per US dollar from January 1919 to December 1923 on a ${scale === "log" ? "logarithmic" : "ordinary"} scale. ${monthName(i)}: about ${marks(rate)} marks per dollar.`}
        >
          {ticks.map((t) => (
            <g key={t}>
              <line x1={L} x2={R} y1={y(t)} y2={y(t)} className="stroke-line" strokeWidth={1} />
              <text x={L - 4} y={y(t) + 3} fontSize={9} textAnchor="end" className="fill-ink-2">
                {tickLabel(t)}
              </text>
            </g>
          ))}
          {[0, 12, 24, 36, 48].map((k) => (
            <g key={k}>
              <line x1={x(k)} x2={x(k)} y1={T} y2={B} className="stroke-line" strokeWidth={1} />
              <text x={x(k) + 2} y={B + 12} fontSize={9} className="fill-ink-2">
                {1919 + k / 12}
              </text>
            </g>
          ))}
          {scale === "log" ? (
            <g>
              <line x1={L} x2={R} y1={yLog(4.2)} y2={yLog(4.2)} className="stroke-ink-2" strokeDasharray="3 3" strokeWidth={1} />
              <text x={L + 3} y={yLog(4.2) - 3} fontSize={8.5} className="fill-ink-2">
                1914: 4.2 marks per dollar
              </text>
            </g>
          ) : null}
          <path d={path} fill="none" className="stroke-brand" strokeWidth={2.5} strokeLinejoin="round" />
          {[
            { k: 58, t: "Rentenmark" },
            { k: 48, t: "Ruhr occupied" },
            { k: 41, t: "Rathenau murdered" },
          ].map((a, n) => (
            <g key={a.k}>
              <line x1={x(a.k)} x2={x(a.k)} y1={T + 2 + n * 11} y2={y(RATE[a.k])} className="stroke-ink-2" strokeWidth={0.8} strokeDasharray="2 2" />
              <text x={x(a.k) - 3} y={T + 8 + n * 11} fontSize={8.5} textAnchor="end" className="fill-ink">
                {a.t}
              </text>
            </g>
          ))}
          <line x1={x(i)} x2={x(i)} y1={T} y2={B} className="stroke-accent" strokeWidth={1.5} />
          <circle cx={x(i)} cy={y(rate)} r={5} className="fill-accent stroke-ink" strokeWidth={1} />
        </svg>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="1 US dollar buys" value={i >= 58 ? "4.2 trillion marks" : `${marks(rate)} marks`} tone={i >= 55 ? "bad" : "brand"} />
          <Readout label="10,000 marks of savings (worth $2,380 in 1914) is now worth" value={dollars(savings)} tone={savings < 1 ? "bad" : "ink"} />
          <Readout label={`Loaf of bread (${bread.when})`} value={`${marks(bread.price)} marks`} tone="ink" />
        </div>
        {i >= 58 ? (
          <div className="rounded-xl bg-good-soft p-3 text-sm text-ink">
            <strong className="text-good">The reset:</strong> 1 Rentenmark = 1,000,000,000,000 paper marks, so $1 = 4.2 Rentenmarks. A loaf that cost 201 billion paper marks cost about 0.2 Rentenmarks.
          </div>
        ) : null}
        <table className="w-full text-sm">
          <caption className="mb-1 text-left text-xs font-bold uppercase tracking-wide text-ink-2">Price of a loaf of bread in Berlin (marks)</caption>
          <tbody>
            {BREAD.map((b) => (
              <tr key={b.when} className={b === bread ? "bg-brand-soft font-bold" : ""}>
                <td className="border-b border-line px-2 py-1">{b.when}</td>
                <td className="border-b border-line px-2 py-1 text-right tabular-nums">{b.price < 1e6 ? marks(b.price) : b.price.toLocaleString("en-GB")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Reichstag coalition builder
// ---------------------------------------------------------------------------

type PartyId = "KPD" | "USPD" | "SPD" | "DDP" | "Z" | "BVP" | "DVP" | "DNVP" | "NSFB" | "NSDAP" | "OTH";

const PARTIES: Record<PartyId, { name: string; desc: string; colour: string }> = {
  KPD: { name: "Communists (KPD)", desc: "Wanted a Soviet-style revolution.", colour: "#7f1d1d" },
  USPD: { name: "Independent Socialists (USPD)", desc: "Left-wing socialists who split from the SPD in 1917.", colour: "#e11d48" },
  SPD: { name: "Social Democrats (SPD)", desc: "The main party of the republic, backed by trade unions.", colour: "#ef4444" },
  DDP: { name: "Democrats (DDP / State Party)", desc: "Liberal and pro-republic; renamed the State Party in 1930.", colour: "#eab308" },
  Z: { name: "Centre Party (Z)", desc: "Catholic party; in almost every Weimar government.", colour: "#64748b" },
  BVP: { name: "Bavarian People's Party (BVP)", desc: "The Centre's more conservative Bavarian partner.", colour: "#38bdf8" },
  DVP: { name: "People's Party (DVP)", desc: "Stresemann's party of business; accepted the republic.", colour: "#f59e0b" },
  DNVP: { name: "Nationalists (DNVP)", desc: "Wanted the Kaiser back; hated Versailles.", colour: "#1e40af" },
  NSFB: { name: "Völkisch–Nazi list (NSFB)", desc: "An alliance including the banned Nazis (1924); rejected the republic.", colour: "#a16207" },
  NSDAP: { name: "Nazis (NSDAP)", desc: "Wanted to destroy the republic.", colour: "#92400e" },
  OTH: { name: "Small parties", desc: "Farmers', business and regional parties — too divided to rely on.", colour: "#9ca3af" },
};

const ORDER: PartyId[] = ["KPD", "USPD", "SPD", "DDP", "Z", "BVP", "DVP", "DNVP", "NSFB", "NSDAP", "OTH"];

interface Election {
  id: string;
  label: string;
  seats: Partial<Record<PartyId, number>>;
  happened: string;
}

const ELECTIONS: Election[] = [
  {
    id: "1919",
    label: "Jan 1919",
    seats: { USPD: 22, SPD: 165, DDP: 75, Z: 91, DNVP: 44, DVP: 19, OTH: 7 },
    happened:
      "The SPD, Centre (including its Bavarian wing) and DDP formed the 'Weimar Coalition' with 331 of 423 seats and wrote the constitution. This was the high point: after 1920 the Weimar Coalition never won a majority again.",
  },
  {
    id: "1920",
    label: "Jun 1920",
    seats: { KPD: 4, USPD: 84, SPD: 102, DDP: 39, Z: 64, BVP: 21, DVP: 65, DNVP: 71, OTH: 9 },
    happened:
      "The Weimar Coalition lost its majority as voters moved to both extremes. Constantin Fehrenbach (Centre) led a minority government of the Centre, DDP and DVP.",
  },
  {
    id: "1924a",
    label: "May 1924",
    seats: { KPD: 62, SPD: 100, DDP: 28, Z: 65, BVP: 16, DVP: 45, DNVP: 95, NSFB: 32, OTH: 29 },
    happened:
      "After the crises of 1923 the extremes did well. Wilhelm Marx (Centre) carried on with a minority government; the Reichstag was dissolved and new elections held in December.",
  },
  {
    id: "1924b",
    label: "Dec 1924",
    seats: { KPD: 45, SPD: 131, DDP: 32, Z: 69, BVP: 19, DVP: 51, DNVP: 103, NSFB: 14, OTH: 29 },
    happened:
      "As the economy recovered, the extremes shrank. In January 1925 Hans Luther formed a centre-right government that included the Nationalists (DNVP) — who walked out in October 1925 in protest at Locarno.",
  },
  {
    id: "1928",
    label: "May 1928",
    seats: { KPD: 54, SPD: 153, DDP: 25, Z: 61, BVP: 16, DVP: 45, DNVP: 73, NSDAP: 12, OTH: 52 },
    happened:
      "Hermann Müller (SPD) led a 'Grand Coalition' stretching from the SPD to Stresemann's DVP — about 300 of 491 seats. It collapsed in March 1930 when the SPD and DVP could not agree how to pay for unemployment benefits.",
  },
  {
    id: "1930",
    label: "Sep 1930",
    seats: { KPD: 77, SPD: 143, DDP: 20, Z: 68, BVP: 19, DVP: 30, DNVP: 41, NSDAP: 107, OTH: 72 },
    happened:
      "No majority could be built from parties that supported the republic. Heinrich Brüning (Centre) governed with President Hindenburg's Article 48 decrees, while the SPD 'tolerated' him rather than vote him out. Decrees replaced laws: 5 in 1930, 44 in 1931, 66 in 1932.",
  },
  {
    id: "1932a",
    label: "Jul 1932",
    seats: { KPD: 89, SPD: 133, DDP: 4, Z: 75, BVP: 22, DVP: 7, DNVP: 37, NSDAP: 230, OTH: 11 },
    happened:
      "The Nazis and Communists together held a majority (319 of 608) — but both wanted to end the republic. Hitler demanded to be Chancellor and Hindenburg refused (August 1932). Franz von Papen ruled by decree; in September the Reichstag voted no confidence in him by 512 votes to 42 and was dissolved.",
  },
  {
    id: "1932b",
    label: "Nov 1932",
    seats: { KPD: 100, SPD: 121, DDP: 2, Z: 70, BVP: 20, DVP: 11, DNVP: 52, NSDAP: 196, OTH: 12 },
    happened:
      "The Nazis lost seats but Nazis and Communists still blocked any other majority (296 of 584). Papen resigned; Kurt von Schleicher lasted under two months. On 30 January 1933 Hindenburg appointed Hitler Chancellor of a Nazi–Nationalist cabinet with only 248 seats — no majority. Backroom deals, not votes, put him in power.",
  },
];

type Link = "ok" | "uneasy" | "refuse";

/** Simplified willingness of two parties to govern together (for teaching, not a precise record). */
function link(a: PartyId, b: PartyId): { kind: Link; why?: string } {
  const has = (p: PartyId) => a === p || b === p;
  const pair = (p: PartyId, q: PartyId) => (a === p && b === q) || (a === q && b === p);
  if (has("KPD")) return { kind: "refuse", why: "The Communists wanted a revolution and refused to share power with any other party." };
  if (has("USPD")) {
    if (pair("USPD", "SPD")) return { kind: "uneasy", why: "The USPD had split from the SPD in anger at its moderation." };
    return { kind: "refuse", why: "The Independent Socialists refused to govern with middle-class parties." };
  }
  if (has("NSFB")) {
    if (pair("NSFB", "DNVP")) return { kind: "uneasy" };
    return { kind: "refuse", why: "The 1924 Nazi–völkisch list rejected the republic and every party that supported it." };
  }
  if (has("NSDAP")) {
    if (pair("NSDAP", "SPD") || pair("NSDAP", "DDP"))
      return { kind: "refuse", why: "The Nazis wanted to destroy democracy; the SPD and the Democrats were its strongest defenders." };
    return { kind: "uneasy", why: "Hitler would only join a government if he was Chancellor with full powers." };
  }
  if (pair("SPD", "DNVP")) return { kind: "refuse", why: "The SPD defended the republic; the DNVP wanted the Kaiser back. They never governed together." };
  if (pair("SPD", "DVP")) return { kind: "uneasy", why: "Workers' party versus business party: they clashed over wages and benefits." };
  if (has("DNVP")) return { kind: "uneasy", why: "The DNVP joined coalitions in 1925 and 1927 but kept attacking the republic and walked out over Locarno." };
  return { kind: "ok" };
}

function analyse(sel: PartyId[], e: Election) {
  const total = ORDER.reduce((s, p) => s + (e.seats[p] ?? 0), 0);
  const majority = Math.floor(total / 2) + 1;
  const seats = sel.reduce((s, p) => s + (e.seats[p] ?? 0), 0);
  const refusals: { a: PartyId; b: PartyId; why: string }[] = [];
  let uneasy = 0;
  for (let x = 0; x < sel.length; x++)
    for (let y = x + 1; y < sel.length; y++) {
      const l = link(sel[x], sel[y]);
      if (l.kind === "refuse") refusals.push({ a: sel[x], b: sel[y], why: l.why ?? "" });
      if (l.kind === "uneasy") uneasy++;
    }
  return { total, majority, seats, refusals, uneasy };
}

/** All coalitions with no refusals that reach a majority (small parties excluded). */
function realisticMajorities(e: Election) {
  const ids = ORDER.filter((p) => p !== "OTH" && e.seats[p]);
  const out: PartyId[][] = [];
  for (let mask = 1; mask < 1 << ids.length; mask++) {
    const sel = ids.filter((_, k) => mask & (1 << k));
    const a = analyse(sel, e);
    if (a.refusals.length === 0 && a.seats >= a.majority) out.push(sel);
  }
  // keep only minimal ones (no party could be dropped)
  return out
    .filter((s) => !out.some((t) => t.length < s.length && t.every((p) => s.includes(p))))
    .sort((p, q) => p.length - q.length);
}

function CoalitionBuilder() {
  const [eid, setEid] = useState("1919");
  const [sel, setSel] = useState<PartyId[]>([]);
  const e = ELECTIONS.find((x) => x.id === eid) ?? ELECTIONS[0];
  const present = ORDER.filter((p) => e.seats[p]);
  const chosen = sel.filter((p) => e.seats[p]);
  const a = analyse(chosen, e);
  const options = realisticMajorities(e);
  const withoutNazis = options.filter((s) => !s.includes("NSDAP") && !s.includes("NSFB"));

  const toggle = (p: PartyId) => setSel((s) => (s.includes(p) ? s.filter((q) => q !== p) : [...s, p]));

  let verdict: { tone: "good" | "bad" | "ink"; text: string };
  if (chosen.length === 0) verdict = { tone: "ink", text: "Pick parties to build a coalition." };
  else if (a.refusals.length)
    verdict = { tone: "bad", text: `Not realistic: ${PARTIES[a.refusals[0].a].name} and ${PARTIES[a.refusals[0].b].name} refused to work together. ${a.refusals[0].why}` };
  else if (a.seats < a.majority)
    verdict = { tone: "bad", text: `Minority: ${a.majority - a.seats} seats short. A minority government survives only while its opponents choose not to vote it down.` };
  else if (chosen.length <= 3 && a.uneasy === 0) verdict = { tone: "good", text: `Workable majority: ${a.seats} of ${a.total} seats with ${chosen.length} like-minded part${chosen.length === 1 ? "y" : "ies"}.` };
  else
    verdict = {
      tone: "ink",
      text: `Fragile majority: ${a.seats} of ${a.total} seats, but ${chosen.length} parties${a.uneasy ? ` and ${a.uneasy} uneasy partnership${a.uneasy === 1 ? "" : "s"}` : ""}. One walk-out could bring it down.`,
    };

  const W = 340;
  const pct = (n: number) => (n / a.total) * W;
  const names = (s: PartyId[]) => s.map((p) => PARTIES[p].name.replace(/ \(.*\)$/, "")).join(" + ");

  return (
    <WidgetFrame
      title="Reichstag coalition builder"
      tryThis={[
        "Jan 1919: build the 'Weimar Coalition' (SPD + Centre + DDP). How big was its majority?",
        "Sep 1930: try to build a majority only from parties that supported the republic. Why can't you?",
        "Jul 1932: add the Nazis and the Communists together. What is a 'negative majority' — and why couldn't it govern?",
        "Nov 1932: is any majority possible without the Nazis? What does that tell you about January 1933?",
      ]}
      caption={
        <>
          <p>
            <strong>Why so hard?</strong> Proportional representation gave seats to every party with enough votes, so the Reichstag had many parties and no single one ever won a majority. Every government was a coalition — and coalitions of parties that disagreed kept breaking up (about 20 governments in 14 years). When no majority could be found, Chancellors relied on the President’s emergency powers under <strong>Article 48</strong>.
          </p>
          <p className="mt-2">
            <strong>What actually happened ({e.label}):</strong> {e.happened}
          </p>
          <p className="mt-2 text-ink-2">Seat totals are the official results. Which parties would work together is simplified to help you think — real negotiations were messier.</p>
        </>
      }
    >
      <div className="space-y-4">
        <div className="space-y-1">
          <div className="text-sm font-semibold text-ink-2">Election</div>
          <Segmented label="Election" value={eid} onChange={setEid} options={ELECTIONS.map((x) => ({ value: x.id, label: x.label }))} />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" role="group" aria-label="Parties">
          {present.map((p) => {
            const on = chosen.includes(p);
            const disabled = p === "OTH";
            return (
              <button
                key={p}
                type="button"
                aria-pressed={on}
                disabled={disabled}
                onClick={() => toggle(p)}
                className={`flex min-h-[44px] items-start gap-2 rounded-xl border px-3 py-2 text-left text-sm transition ${on ? "border-brand bg-brand-soft" : "border-line bg-surface"} ${disabled ? "opacity-60" : ""}`}
              >
                <span aria-hidden className="mt-1 inline-block h-3 w-3 shrink-0 rounded-full" style={{ background: PARTIES[p].colour }} />
                <span className="flex-1">
                  <span className="flex justify-between gap-2 font-bold text-ink">
                    <span>{PARTIES[p].name}</span>
                    <span className="tabular-nums">{e.seats[p]}</span>
                  </span>
                  <span className="block text-xs text-ink-2">{disabled ? `${PARTIES[p].desc} (Not selectable.)` : PARTIES[p].desc}</span>
                </span>
              </button>
            );
          })}
        </div>
        <svg viewBox={`0 0 ${W} 74`} className="h-auto w-full" role="img" aria-label={`Reichstag of ${e.label}: ${a.total} seats, majority ${a.majority}. Your coalition has ${a.seats} seats.`}>
          {present.map((p, i) => {
            const w = pct(e.seats[p] ?? 0);
            const x0 = present.slice(0, i).reduce((sum, q) => sum + pct(e.seats[q] ?? 0), 0);
            return <rect key={p} x={x0} y={4} width={w} height={22} fill={PARTIES[p].colour} opacity={chosen.includes(p) ? 1 : 0.25} className="stroke-surface" strokeWidth={1} />;
          })}
          <rect x={0} y={38} width={W} height={18} className="fill-surface-2 stroke-line" strokeWidth={1} />
          <rect x={0} y={38} width={pct(a.seats)} height={18} className={a.refusals.length ? "fill-bad" : a.seats >= a.majority ? "fill-good" : "fill-brand"} />
          <line x1={pct(a.majority)} x2={pct(a.majority)} y1={0} y2={60} className="stroke-ink" strokeWidth={1.5} strokeDasharray="3 2" />
          <text x={pct(a.majority) + 3} y={70} fontSize={9} className="fill-ink">
            majority: {a.majority}
          </text>
        </svg>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="Your coalition" value={`${a.seats} seats`} tone={a.seats >= a.majority && !a.refusals.length ? "good" : "ink"} />
          <Readout label="Needed for a majority" value={`${a.majority} of ${a.total}`} tone="ink" />
          <Readout label="Parties in coalition" value={chosen.length} tone="ink" />
        </div>
        <p className={`rounded-xl p-3 text-sm ${verdict.tone === "good" ? "bg-good-soft text-ink" : verdict.tone === "bad" ? "bg-bad-soft text-ink" : "bg-surface-2 text-ink"}`} aria-live="polite">
          {verdict.text}
        </p>
        <details className="rounded-xl border border-line p-3 text-sm">
          <summary className="cursor-pointer font-bold text-ink">Check: was any realistic majority possible in {e.label}?</summary>
          <div className="mt-2 space-y-1 text-ink">
            {options.length === 0 ? (
              <p>
                <strong className="text-bad">No.</strong> Every combination that reaches {a.majority} seats includes parties that refused to work together. Government by Article 48 decree was the only way left.
              </p>
            ) : (
              <>
                <p>
                  {options.length} smallest workable combination{options.length === 1 ? "" : "s"}. The simplest: <strong>{names(options[0])}</strong>.
                </p>
                {!e.seats.NSDAP && !e.seats.NSFB ? null : withoutNazis.length === 0 ? (
                  <p className="text-bad">
                    <strong>Every possible majority needed the Nazis</strong> — and Hitler would only join as Chancellor.
                  </p>
                ) : (
                  <p>Possible without the Nazis: {names(withoutNazis[0])}.</p>
                )}
              </>
            )}
          </div>
        </details>
        <button type="button" className="kbd min-h-[40px] px-3" onClick={() => setSel([])}>
          Clear coalition
        </button>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "hyperinflation-explorer",
    title: "Hyperinflation price explorer",
    blurb: "Slide from 1919 to 1923 and watch the mark collapse — then see the Rentenmark reset.",
    Component: HyperinflationExplorer,
  },
  {
    id: "coalition-builder",
    title: "Reichstag coalition builder",
    blurb: "Pick an election from 1919 to 1932 and try to build a working majority.",
    Component: CoalitionBuilder,
  },
];
