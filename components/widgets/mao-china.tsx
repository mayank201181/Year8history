"use client";
import { useState } from "react";
import { WidgetFrame, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. The Long March, October 1934 – October 1935
// ---------------------------------------------------------------------------

// Schematic equirectangular projection of central/southern China.
const LON0 = 99;
const LAT0 = 40.3;
const K = 19.5;
const mx = (lon: number) => 18 + (lon - LON0) * K;
const my = (lat: number) => 14 + (LAT0 - lat) * K;
const pt = (lon: number, lat: number) => `${mx(lon).toFixed(1)},${my(lat).toFixed(1)}`;

// Simplified outline of China's land border/coast (lon, lat). Points outside the view are clipped.
const OUTLINE: [number, number][] = [
  [90, 46], [126, 46], [124.3, 39.9], [121.3, 38.9], [121.1, 40.8], [119.5, 39.8], [117.8, 39.0], [118.9, 37.6],
  [119.9, 37.2], [122.6, 37.4], [120.6, 36.1], [119.3, 35.0], [120.8, 32.4], [121.9, 31.0], [121.9, 30.0], [121.0, 28.0],
  [119.5, 25.8], [117.5, 23.7], [114.3, 22.4], [113.5, 22.2], [110.6, 21.2], [110.2, 20.3], [109.7, 21.5], [108.1, 21.5],
  [106.7, 22.8], [105.3, 23.3], [103.0, 22.5], [101.7, 21.2], [100.1, 21.5], [99.2, 22.1], [98.7, 24.1], [97.6, 24.8],
  [98.2, 26.5], [97.6, 28.3], [90, 28],
];
const TAIWAN: [number, number][] = [[121.0, 25.3], [122.0, 25.0], [121.4, 23.2], [120.8, 21.9], [120.1, 23.0], [120.4, 24.5]];
// Yangtze, with its upper course (the Jinsha River).
const YANGTZE: [number, number][] = [
  [98.6, 31.5], [99.2, 28.5], [100.2, 26.9], [101.6, 26.2], [102.2, 26.1], [103.6, 27.0], [104.6, 28.8], [106.5, 29.6],
  [108.5, 30.6], [111.3, 30.7], [112.3, 30.2], [114.3, 30.6], [116.0, 29.7], [117.2, 30.6], [118.8, 32.1], [121.5, 31.6],
];

interface Stop {
  date: string;
  /** Month index from October 1934 (0) for the progress readout. */
  month: number;
  place: string;
  lon: number;
  lat: number;
  title: string;
  text: string;
  strength: string;
  /** Approximate number for the to-scale strength bar; null = too uncertain. */
  strengthNum: number | null;
  debate?: string;
}

const STOPS: Stop[] = [
  {
    date: "16 October 1934",
    month: 0,
    place: "Yudu, Jiangxi",
    lon: 115.4,
    lat: 25.95,
    title: "Breaking out of Jiangxi",
    text: "Surrounded by Chiang Kai-shek's fifth 'encirclement campaign', the main Red Army slipped out of the Jiangxi Soviet. The soldiers carried heavy equipment, even printing presses, and did not know where they were going. Mao was NOT in charge: the party leader Bo Gu and the Comintern adviser Otto Braun made the decisions.",
    strength: "about 86,000",
    strengthNum: 86000,
  },
  {
    date: "late Nov – early Dec 1934",
    month: 1,
    place: "Xiang River, Guangxi",
    lon: 111.1,
    lat: 25.9,
    title: "Disaster at the Xiang River",
    text: "Slowed by its baggage, the column was caught crossing the Xiang River by Nationalist and Guangxi armies. It was the worst defeat of the march. Through battle deaths, desertion and stragglers left behind, the army had shrunk dramatically by the time it was across.",
    strength: "roughly 30,000–40,000 (estimates vary)",
    strengthNum: 35000,
  },
  {
    date: "January 1935",
    month: 3,
    place: "Zunyi, Guizhou",
    lon: 106.9,
    lat: 27.7,
    title: "The Zunyi Conference",
    text: "In the captured town of Zunyi, party leaders met on 15–17 January and blamed Bo Gu and Otto Braun for the defeats. Mao's ideas — move fast, avoid head-on battles — won support and he gained a leading role in military decisions.",
    strength: "roughly 30,000",
    strengthNum: 30000,
    debate: "Later official histories made Zunyi the moment Mao 'took over'. Historians point out that his full control of the party came more gradually, over the next few years.",
  },
  {
    date: "January – March 1935",
    month: 4,
    place: "Chishui River, Guizhou",
    lon: 105.9,
    lat: 28.3,
    title: "Crossing the Chishui River four times",
    text: "Mao led the army back and forth across the Chishui (Red Water) River to confuse the much larger Nationalist forces chasing them, then slipped away to the south-west.",
    strength: "uncertain — losses continued",
    strengthNum: null,
    debate: "Party histories celebrate the 'four crossings' as Mao's military genius; some historians see costly wandering. Both views agree it shook off the pursuit.",
  },
  {
    date: "early May 1935",
    month: 6,
    place: "Jinsha River, Yunnan–Sichuan border",
    lon: 102.2,
    lat: 26.1,
    title: "Crossing the Jinsha (upper Yangtze)",
    text: "Pretending to threaten Kunming, the army raced north and crossed the Jinsha River — the upper Yangtze — at Jiaopingdu, ferrying troops over in a handful of boats for several days and leaving its pursuers behind.",
    strength: "uncertain",
    strengthNum: null,
  },
  {
    date: "29 May 1935",
    month: 7,
    place: "Luding Bridge, Sichuan",
    lon: 102.2,
    lat: 29.9,
    title: "Luding Bridge on the Dadu River",
    text: "The Red Army had to cross the fast Dadu River before Nationalist armies trapped it. It captured the Luding Bridge — thirteen iron chains slung across the gorge — and escaped.",
    strength: "uncertain",
    strengthNum: null,
    debate: "LEGEND vs EVIDENCE: in the official story, 22 volunteers crawled across the bare chains under machine-gun fire, after the defenders removed the planks. Some writers who later interviewed local villagers (such as Sun Shuyun) found accounts of much less fighting; a few claim there was hardly a battle at all, while others defend the official version. What is certain: the crossing happened and saved the army. How dramatic it was is still debated.",
  },
  {
    date: "June 1935",
    month: 8,
    place: "Jiajin Mountains, Sichuan",
    lon: 102.7,
    lat: 30.8,
    title: "The Snowy Mountains",
    text: "The soldiers crossed passes over 4,000 metres high in thin cotton clothes; many died of cold, exhaustion and altitude sickness. At Maogong they met the larger Fourth Front Army of Zhang Guotao. The two leaders soon quarrelled about where to go, and the armies split.",
    strength: "roughly 10,000–20,000 (estimates vary)",
    strengthNum: 15000,
  },
  {
    date: "August 1935",
    month: 10,
    place: "Grasslands, north-west Sichuan",
    lon: 102.96,
    lat: 33.4,
    title: "The grasslands",
    text: "To head north, the army crossed vast swampy grasslands with no villages, little food and almost no dry ground. Soldiers drowned in bogs or died of hunger, cold and disease. Many survivors remembered this as the worst part of the march.",
    strength: "uncertain",
    strengthNum: null,
  },
  {
    date: "19 October 1935",
    month: 12,
    place: "Wuqi, northern Shaanxi",
    lon: 108.2,
    lat: 36.9,
    title: "Arrival in Shaanxi",
    text: "After forcing Lazikou Pass in Gansu in September, Mao's column reached a small Communist base in northern Shaanxi. A year after leaving Jiangxi, only a fraction of the army was left. Other Red Army groups arrived in 1936.",
    strength: "fewer than 10,000 (often put at about 7,000–8,000)",
    strengthNum: 8000,
    debate: "How far? The party's official figure is 25,000 li (about 12,500 km); about 10,000 km is often quoted for the main army's route; two British researchers who retraced it in 2002–03 estimated about 6,000 km.",
  },
  {
    date: "1936–37",
    month: 12,
    place: "Yan'an, Shaanxi",
    lon: 109.5,
    lat: 36.6,
    title: "Yan'an and the making of a legend",
    text: "From early 1937 the Communists made Yan'an their headquarters. Here a desperate retreat was turned into a founding legend: proof that the party — and Mao — could survive anything. Edgar Snow's 1936 interviews with Mao spread the story around the world.",
    strength: "fewer than 10,000 of the original column",
    strengthNum: 8000,
    debate: "“The Long March is a manifesto, a propaganda force, a seeding-machine.” — Mao, December 1935. Ask of every Long March story: who told it, when, and why?",
  },
];

const CITIES: { name: string; lon: number; lat: number; dx: number; dy: number; anchor: "start" | "end" | "middle" }[] = [
  { name: "Beiping (Beijing)", lon: 116.4, lat: 39.9, dx: 5, dy: 4, anchor: "start" },
  { name: "Nanjing (Nationalist capital)", lon: 118.8, lat: 32.1, dx: -5, dy: -5, anchor: "end" },
  { name: "Shanghai", lon: 121.5, lat: 31.2, dx: -4, dy: 12, anchor: "end" },
  { name: "Guangzhou", lon: 113.3, lat: 23.1, dx: -5, dy: 4, anchor: "end" },
  { name: "Ruijin", lon: 116.0, lat: 25.9, dx: 5, dy: 4, anchor: "start" },
  { name: "Kunming", lon: 102.7, lat: 25.0, dx: 0, dy: 12, anchor: "middle" },
];

// Route waypoints: [lon, lat, stop index or -1].
const ROUTE: [number, number, number][] = [
  [115.4, 25.95, 0], [114.6, 25.3, -1], [113.6, 25.5, -1], [112.2, 25.6, -1], [111.1, 25.9, 1], [109.6, 25.9, -1], [109.1, 26.2, -1],
  [107.8, 27.1, -1], [106.9, 27.7, 2], [105.9, 28.3, 3], [106.4, 27.3, -1], [106.5, 26.6, -1], [105.0, 25.9, -1], [103.6, 25.6, -1],
  [102.2, 26.1, 4], [102.25, 26.65, -1], [102.3, 27.9, -1], [102.3, 29.2, -1], [102.2, 29.9, 5], [102.7, 30.8, 6], [102.4, 31.0, -1],
  [103.4, 32.3, -1], [102.96, 33.4, 7], [103.9, 34.2, -1], [104.3, 34.3, -1], [106.2, 35.6, -1], [107.3, 36.4, -1], [108.2, 36.9, 8],
  [109.5, 36.6, 9],
];

function LongMarch() {
  const [i, setI] = useState(0);
  const s = STOPS[i];
  const reachIdx = ROUTE.findIndex((r) => r[2] === i);
  const done = ROUTE.slice(0, reachIdx + 1);
  const toGo = ROUTE.slice(reachIdx);
  const onFinalLeg = i === STOPS.length - 1;
  const line = (pts: [number, number, number][]) => pts.map((p) => pt(p[0], p[1])).join(" ");
  const strengthPct = s.strengthNum ? Math.round((s.strengthNum / 86000) * 100) : null;
  // Current-stop label: a box above the dot (below it near the top edge), kept inside the map.
  const labelW = s.title.length * 6.4 + 12;
  const label = {
    w: labelW,
    x: Math.min(Math.max(mx(s.lon) - labelW / 2, 4), 476 - labelW),
    y: my(s.lat) < 50 ? my(s.lat) + 12 : my(s.lat) - 34,
  };

  return (
    <WidgetFrame
      title="The Long March, October 1934 – October 1935"
      tryThis={[
        "Step to the Xiang River. Roughly what fraction of the army had been lost already?",
        "Find the stop where Mao gained a leading military role. Was he in charge when the march began?",
        "At Luding Bridge, sort the story into what is certain and what is disputed.",
        "Compare about 86,000 at the start with fewer than 10,000 at the end. Why might the party still call the march a victory?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>
              {s.date} — {s.place}.
            </strong>{" "}
            {s.text}
          </p>
          {s.debate ? <p className="rounded-lg border-l-4 border-accent bg-accent-soft p-2 text-ink">{s.debate}</p> : null}
          <p className="text-ink-2">Map is schematic (modern coastline for orientation); the route is simplified. Army numbers are historians&apos; estimates.</p>
        </div>
      }
    >
      <div className="space-y-3">
        <svg viewBox="0 0 480 372" className="h-auto w-full rounded-xl bg-info-soft" role="img" aria-label={`Schematic map of China showing the Long March route from Jiangxi in the south-east to Shaanxi in the north-west. Current stop ${i + 1} of ${STOPS.length}: ${s.place}, ${s.date}.`}>
          <polygon points={OUTLINE.map((p) => pt(p[0], p[1])).join(" ")} className="fill-surface stroke-ink-2" strokeWidth={1.2} />
          <polygon points={TAIWAN.map((p) => pt(p[0], p[1])).join(" ")} className="fill-surface stroke-ink-2" strokeWidth={1} />
          <polyline points={YANGTZE.map((p) => pt(p[0], p[1])).join(" ")} fill="none" className="stroke-info" strokeWidth={2} opacity={0.7} />
          <text x={mx(110.5)} y={my(31.3)} fontSize={11} className="fill-info" fontStyle="italic">
            Yangtze
          </text>
          <text x={mx(100.2)} y={my(28.4)} fontSize={10} className="fill-info" fontStyle="italic" textAnchor="end">
            Jinsha
          </text>
          {CITIES.map((c) => (
            <g key={c.name}>
              <rect x={mx(c.lon) - 2.5} y={my(c.lat) - 2.5} width={5} height={5} className="fill-ink-2" />
              <text x={mx(c.lon) + c.dx} y={my(c.lat) + c.dy} fontSize={11} textAnchor={c.anchor} className="fill-ink-2">
                {c.name}
              </text>
            </g>
          ))}
          <text x={mx(118.4)} y={my(27.6)} fontSize={11} fontWeight={700} className="fill-ink" textAnchor="middle">
            JIANGXI SOVIET
          </text>
          <text x={mx(109.8)} y={my(35.4)} fontSize={11} fontWeight={700} className="fill-ink" textAnchor="middle">
            SHAANXI
          </text>
          <polyline points={line(toGo)} fill="none" className="stroke-ink-2" strokeWidth={2} strokeDasharray="4 4" opacity={0.6} />
          <polyline points={line(done)} fill="none" className="stroke-brand" strokeWidth={3.5} strokeLinejoin="round" strokeLinecap="round" />
          {STOPS.map((st, k) => (
            <g key={st.title}>
              <circle cx={mx(st.lon)} cy={my(st.lat)} r={k === i ? 7 : 4} className={k <= i ? "fill-brand stroke-surface" : "fill-surface stroke-ink-2"} strokeWidth={k === i ? 2.5 : 1.5} />
              {k !== i ? (
                <text x={mx(st.lon) + (st.lon < 104 ? -8 : 8)} y={my(st.lat) + 4} fontSize={11} textAnchor={st.lon < 104 ? "end" : "start"} className="fill-ink-2">
                  {k + 1}
                </text>
              ) : null}
            </g>
          ))}
          <g>
            <rect x={label.x} y={label.y} width={label.w} height={20} rx={4} className="fill-surface stroke-brand" strokeWidth={1.2} />
            <text x={label.x + 6} y={label.y + 14} fontSize={11.5} fontWeight={700} className="fill-brand">
              {s.title}
            </text>
          </g>
          {onFinalLeg ? (
            <text x={mx(109.5) + 8} y={my(36.6) + 14} fontSize={9} className="fill-ink-2">
              HQ from 1937
            </text>
          ) : null}
          <g transform="translate(14 18)">
            <line x1={0} x2={22} y1={0} y2={0} className="stroke-brand" strokeWidth={3.5} />
            <text x={27} y={3.5} fontSize={9} className="fill-ink-2">
              route so far
            </text>
            <line x1={0} x2={22} y1={14} y2={14} className="stroke-ink-2" strokeWidth={2} strokeDasharray="4 4" />
            <text x={27} y={17.5} fontSize={9} className="fill-ink-2">
              still to come
            </text>
          </g>
        </svg>

        <div className="flex items-center justify-between gap-2">
          <button type="button" className="min-h-[40px] rounded-lg border border-line bg-surface px-4 font-bold text-ink disabled:opacity-40" onClick={() => setI(i - 1)} disabled={i === 0}>
            ← Back
          </button>
          <span className="text-sm font-semibold text-ink-2">
            Stop {i + 1} / {STOPS.length}
          </span>
          <button type="button" className="min-h-[40px] rounded-lg bg-brand px-4 font-bold text-brand-ink disabled:opacity-40" onClick={() => setI(i + 1)} disabled={i === STOPS.length - 1}>
            Next →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Readout label="Date" value={<span className="text-base">{s.date}</span>} tone="ink" />
          <Readout label="Months marching" value={s.month === 0 ? "0" : `about ${s.month}`} tone="ink" />
        </div>

        <div className="rounded-xl border border-line bg-surface p-3">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Soldiers in Mao&apos;s column (approx.)</div>
          <div className="mt-1 text-lg font-extrabold text-ink">{s.strength}</div>
          <svg viewBox="0 0 300 40" className="mt-1 h-auto w-full" role="img" aria-label={strengthPct === null ? "Strength at this point is too uncertain to draw." : `Bar drawn to scale: about ${strengthPct}% of the 86,000 who set out.`}>
            <rect x={0} y={4} width={300} height={14} rx={3} className="fill-surface-2 stroke-line" />
            {strengthPct !== null ? <rect x={0} y={4} width={(300 * strengthPct) / 100} height={14} rx={3} className="fill-brand" /> : null}
            <text x={0} y={34} fontSize={10} className="fill-ink-2">
              {strengthPct === null ? "Too uncertain to draw — the army kept shrinking." : `About ${strengthPct}% of the 86,000 who set out (bar drawn to scale).`}
            </text>
          </svg>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. The Great Leap Forward: reported vs real grain harvests
// ---------------------------------------------------------------------------

interface YearRow {
  year: number;
  /** Real grain output, million tonnes (later official statistics; approximate). */
  real: number;
  /** National figure claimed at the time, million tonnes, if one was announced. */
  claimed: number | null;
  claimNote: string;
  /** State procurement (grain taken by the state), million tonnes, approximate. */
  taken: number;
  /** Official crude death rate per 1,000 (figures released in the 1980s). */
  deathRate: number;
  caption: string;
}

const YEARS: YearRow[] = [
  {
    year: 1957,
    real: 195,
    claimed: 195,
    claimNote: "about 195 (roughly accurate)",
    taken: 48,
    deathRate: 10.8,
    caption:
      "Before the Leap. The harvest was about 195 million tonnes and the official figure was roughly accurate. The state took about a quarter of it to feed the cities, pay for industry and trade abroad.",
  },
  {
    year: 1958,
    real: 200,
    claimed: 375,
    claimNote: "375 (claimed in late 1958; quietly cut to 250 in 1959)",
    taken: 56,
    deathRate: 12.0,
    caption:
      "The Leap begins. Communes competed to report record harvests, and officials who reported less risked being attacked as 'rightists'. The leadership claimed 375 million tonnes; the real harvest was about 200. With millions of peasants sent to backyard furnaces, some crops were left unharvested — while communal canteens at first let people eat freely, believing there was plenty.",
  },
  {
    year: 1959,
    real: 170,
    claimed: 270,
    claimNote: "270 (announced in 1960)",
    taken: 67,
    deathRate: 14.6,
    caption:
      "The harvest fell to about 170 million tonnes, but the state — trusting the inflated reports — took about 67 million: around 40%, the highest share of the period. China kept exporting grain. After Peng Dehuai criticised the Leap at Lushan and was sacked, officials were too afraid to tell the truth. Villages that 'hid' grain were punished. Famine spread.",
  },
  {
    year: 1960,
    real: 144,
    claimed: null,
    claimNote: "no reliable figure published",
    taken: 51,
    deathRate: 25.4,
    caption:
      "The worst year. The harvest was about 144 million tonnes. Even China's own official figures, released decades later, show the death rate more than doubling from 1957. Historians estimate that 15–45 million people died in the famine of 1959–61 (about 30 million is often cited). The real numbers were kept secret for years.",
  },
  {
    year: 1961,
    real: 148,
    claimed: null,
    claimNote: "no reliable figure published",
    taken: 41,
    deathRate: 14.2,
    caption:
      "The leadership finally retreated: grain was imported, the state took less, and Liu Shaoqi and Deng Xiaoping allowed private plots and smaller work teams. The harvest was still only about 148 million tonnes; recovery came slowly from 1962. The famine was a man-made disaster caused above all by policy, false reporting and fear.",
  },
];

const CHAIN = [
  "Impossible targets set from above",
  "Local officials exaggerate harvests (fear of being called 'rightists')",
  "The state takes grain based on the false figures",
  "Villages are left with too little to eat",
  "Reporting hunger is punished, so the policy continues",
];

function GreatLeap() {
  const [yi, setYi] = useState(1);
  const [showClaims, setShowClaims] = useState(true);
  const [showTaken, setShowTaken] = useState(false);
  const y = YEARS[yi];
  const left = y.real - y.taken;
  const share = Math.round((y.taken / y.real) * 100);

  const W = 360;
  const H = 258;
  const base = 206;
  const top = 18;
  const vmax = 400;
  const sy = (v: number) => base - (v / vmax) * (base - top);
  const colW = (W - 50) / YEARS.length;
  const cx = (k: number) => 44 + colW * k + colW / 2;
  const bw = 34;

  const aria = `Bar chart of China's grain harvest in million tonnes, 1957 to 1961. Real: ${YEARS.map((r) => `${r.year} ${r.real}`).join(", ")}.${showClaims ? ` Claimed: 1958 375, 1959 270.` : ""}${showTaken ? ` Taken by the state: ${YEARS.map((r) => `${r.year} ${r.taken}`).join(", ")}.` : ""} Selected ${y.year}.`;

  return (
    <WidgetFrame
      title="The Great Leap Forward: reported vs real harvests"
      tryThis={[
        "Find the year with the biggest gap between the claimed harvest and the real one.",
        "Switch on 'State's share'. In which year did the state take its largest share — and was the harvest big or small that year?",
        "Compare the grain left in the countryside in 1957 and 1960. What happened to the death rate?",
        "Why would a local official exaggerate the harvest? Who paid the price?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>{y.year}:</strong> {y.caption}
          </p>
          <p className="text-ink-2">
            Figures are approximate, in million tonnes of unprocessed grain, from later official statistics used by historians. Official death rates are thought to understate the real toll.
          </p>
        </div>
      }
    >
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Segmented label="Choose a year" value={String(y.year)} onChange={(v) => setYi(YEARS.findIndex((r) => String(r.year) === v))} options={YEARS.map((r) => ({ value: String(r.year), label: String(r.year) }))} />
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={showClaims} onClick={() => setShowClaims(!showClaims)} className={`min-h-[40px] rounded-lg border px-3 text-sm font-bold ${showClaims ? "border-brand bg-brand-soft text-ink" : "border-line bg-surface text-ink-2"}`}>
            {showClaims ? "✓ " : ""}Official claims
          </button>
          <button type="button" aria-pressed={showTaken} onClick={() => setShowTaken(!showTaken)} className={`min-h-[40px] rounded-lg border px-3 text-sm font-bold ${showTaken ? "border-bad bg-bad-soft text-ink" : "border-line bg-surface text-ink-2"}`}>
            {showTaken ? "✓ " : ""}State&apos;s share
          </button>
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={aria}>
          {[0, 100, 200, 300, 400].map((v) => (
            <g key={v}>
              <line x1={40} x2={W - 6} y1={sy(v)} y2={sy(v)} className="stroke-line" strokeWidth={1} />
              <text x={34} y={sy(v) + 3} fontSize={9} textAnchor="end" className="fill-ink-2">
                {v}
              </text>
            </g>
          ))}
          <text x={4} y={10} fontSize={9} className="fill-ink-2">
            million tonnes
          </text>
          {YEARS.map((r, k) => {
            const sel = k === yi;
            const x = cx(k) - bw / 2;
            return (
              <g key={r.year} opacity={sel ? 1 : 0.55}>
                {showClaims && r.claimed !== null && r.claimed !== r.real ? (
                  <>
                    <rect x={x - 3} y={sy(r.claimed)} width={bw + 6} height={base - sy(r.claimed)} rx={2} className="fill-brand-soft stroke-brand" strokeDasharray="4 3" strokeWidth={1.5} />
                    <text x={cx(k)} y={sy(r.claimed) - 4} fontSize={10} fontWeight={700} textAnchor="middle" className="fill-brand">
                      {r.claimed}?
                    </text>
                  </>
                ) : null}
                <rect x={x} y={sy(r.real)} width={bw} height={base - sy(r.real)} rx={2} className="fill-info" />
                {showTaken ? <rect x={x} y={sy(r.real)} width={bw} height={base - sy(r.taken)} className="fill-bad" opacity={0.95} /> : null}
                <text x={cx(k)} y={sy(r.real) + 12} fontSize={10} fontWeight={700} textAnchor="middle" className="fill-surface">
                  {r.real}
                </text>
                <text x={cx(k)} y={base + 14} fontSize={11} fontWeight={sel ? 800 : 500} textAnchor="middle" className={sel ? "fill-ink" : "fill-ink-2"}>
                  {r.year}
                </text>
                {sel ? <rect x={cx(k) - colW / 2 + 2} y={base + 18} width={colW - 4} height={3} rx={1.5} className="fill-brand" /> : null}
              </g>
            );
          })}
          <g transform={`translate(44 ${H - 6})`}>
            <rect x={0} y={-8} width={10} height={8} className="fill-info" />
            <text x={14} y={0} fontSize={9} className="fill-ink-2">
              real harvest
            </text>
            {showClaims ? (
              <>
                <rect x={86} y={-8} width={10} height={8} className="fill-brand-soft stroke-brand" strokeDasharray="2 2" />
                <text x={100} y={0} fontSize={9} className="fill-ink-2">
                  claimed
                </text>
              </>
            ) : null}
            {showTaken ? (
              <>
                <rect x={154} y={-8} width={10} height={8} className="fill-bad" />
                <text x={168} y={0} fontSize={9} className="fill-ink-2">
                  taken by the state (top slice)
                </text>
              </>
            ) : null}
          </g>
        </svg>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Real harvest" value={`≈ ${y.real}`} tone="ink" />
          <Readout label="Claimed" value={y.claimed === null ? "—" : y.claimed === y.real ? `≈ ${y.claimed}` : `${y.claimed}`} tone={y.claimed !== null && y.claimed > y.real ? "bad" : "ink"} />
          <Readout label="Taken by state" value={`≈ ${y.taken} (${share}%)`} tone={share >= 35 ? "bad" : "ink"} />
          <Readout label="Left for villages" value={`≈ ${left}`} tone={left < 110 ? "bad" : "ink"} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Readout label="Official death rate per 1,000" value={y.deathRate.toFixed(1)} tone={y.deathRate > 14 ? "bad" : "ink"} />
          <Readout label="Claim at the time" value={<span className="text-sm">{y.claimNote}</span>} tone="ink" />
        </div>

        <div className="rounded-xl border border-line bg-surface p-3">
          <div className="text-sm font-bold text-ink">How a false report became a famine</div>
          <ol className="mt-2 space-y-1 text-sm text-ink">
            {CHAIN.map((c, k) => (
              <li key={c} className="flex gap-2">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-2 text-xs font-extrabold text-ink-2">{k + 1}</span>
                <span>{c}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "long-march-route",
    title: "Long March route",
    blurb: "Follow the Red Army from Jiangxi to Shaanxi, stop by stop — and weigh the legend against the evidence.",
    Component: LongMarch,
  },
  {
    id: "great-leap-harvests",
    title: "Great Leap: reported vs real",
    blurb: "Compare the harvests that were claimed with the real ones, and see how false reports led to famine.",
    Component: GreatLeap,
  },
];
