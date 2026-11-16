"use client";
// Explorables for "Mao Zedong and the Communist Victory in China".
// 1. Long March route stepper: schematic map, stage by stage, legend vs evidence.
// 2. "Why did the Communists win?" factor balance with evidence cards.
import { useState } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Long March route stepper
// ---------------------------------------------------------------------------

/** Simplified route of the First Front Army (same schematic as the guide's map). */
const ROUTE: [number, number][] = [
  [223, 226.3], [200, 232], [159.3, 226.3], [130, 215], [104.7, 202.9], [89, 194], [100, 212], [70, 234],
  [47.5, 223.7], [45, 191], [43.6, 174.3], [50.1, 162.6], [46, 160], [52.7, 130.1], [65.7, 117.1], [95.6, 100.2],
  [121.6, 83.3], [138.5, 87.2],
];

const COAST =
  "314,48.2 295.8,57.3 290.6,58.6 298.4,48.2 303.6,33.9 289.3,28.7 272.4,43 255.5,53.4 245.1,56 255.5,67.7 260.7,76.8 273.7,79.4 293.2,75.5 302.3,75.5 310.1,76.8 295.8,83.3 280.2,93.7 268.5,102.8 264.6,113.2 278.9,128.8 286.7,139.2 299.7,150.9 299.7,160 288,165.2 298.4,173 299.7,178.2 294.5,191.2 284.1,199 269.8,225 263.3,232.8 250.3,244.5 232.1,258.8 215.2,266.6 199.6,273.1 190.5,274.4 171,279.6 150.2,287.4 147.6,299.1 141.1,290 133.3,283.5 119,283.5";

const CITIES: { name: string; x: number; y: number; anchor: "start" | "end" }[] = [
  { name: "Beijing", x: 228.2, y: 44.3, anchor: "end" },
  { name: "Nanjing", x: 259.4, y: 145.7, anchor: "end" },
  { name: "Shanghai", x: 294.5, y: 157.4, anchor: "end" },
  { name: "Guangzhou", x: 187.9, y: 262.7, anchor: "end" },
  { name: "Chongqing", x: 99.5, y: 178.2, anchor: "start" },
];

interface Stage {
  place: string;
  when: string;
  /** Index in ROUTE where this stage sits. */
  idx: number;
  /** Marker position (offset where needed so labels do not overlap). */
  at: [number, number];
  what: string;
  marchers: string;
  legend: string;
  evidence: string;
}

const STAGES: Stage[] = [
  {
    place: "Ruijin, Jiangxi",
    when: "October 1934",
    idx: 0,
    at: [223, 226.3],
    what: "About 86,000 soldiers and party workers break out westwards from the Jiangxi Soviet, carrying heavy equipment such as printing presses.",
    marchers: "about 86,000 set out",
    legend: "Communist accounts later presented the march as a heroic journey north to resist Japan.",
    evidence: "It began as a forced retreat. Chiang's fifth encirclement campaign, with rings of blockhouses, was strangling the soviet; the first aim was simply to escape.",
  },
  {
    place: "Xiang River",
    when: "late 1934",
    idx: 2,
    at: [159.3, 226.3],
    what: "GMD forces catch the marchers crossing the Xiang River. The Red Army loses perhaps half its strength.",
    marchers: "perhaps half lost here",
    legend: "Heroic retellings dwell on later, more dramatic episodes rather than this early defeat.",
    evidence: "This was the march's costliest battle, fought under Bo Gu and the Comintern adviser Otto Braun — who were blamed for the defeats at Zunyi.",
  },
  {
    place: "Zunyi, Guizhou",
    when: "January 1935",
    idx: 4,
    at: [104.7, 202.9],
    what: "At the Zunyi Conference party leaders blame the defeats on Bo Gu and Otto Braun. Mao returns to the top military leadership.",
    marchers: "far fewer — no reliable count",
    legend: "Official histories treat Zunyi as the moment Mao took charge of the party.",
    evidence: "Mao rejoined the top military leadership here, a real turning point — but his full control of the party took until the 1940s.",
  },
  {
    place: "Jinsha River",
    when: "May 1935",
    idx: 8,
    at: [47.5, 223.7],
    what: "After weeks of doubling back across the Chishui River to shake off pursuers, the army crosses the Jinsha River (the upper Yangtze).",
    marchers: "no reliable count",
    legend: "Mao's manoeuvres were later celebrated as military genius.",
    evidence: "The constant doubling back shows an army escaping, not conquering — though escape was itself a success against a much larger enemy.",
  },
  {
    place: "Luding Bridge, Dadu River",
    when: "29 May 1935",
    idx: 10,
    at: [43.6, 174.3],
    what: "The Red Army crosses the Dadu River by the iron-chain bridge at Luding.",
    marchers: "no reliable count",
    legend: "About 22 volunteers crawled along the iron chains under heavy fire, after the planks had been removed, and captured the far side.",
    evidence: "Some historians, using local testimony and the lack of reliable records, argue the fighting was much smaller or the bridge barely defended. Others accept a real crossing but see the details as embellished. We cannot be sure.",
  },
  {
    place: "Snowy mountains",
    when: "June 1935",
    idx: 12,
    at: [62, 156],
    what: "The marchers cross high, snow-covered mountain passes. Many die from cold, hunger and exhaustion.",
    marchers: "falling — no reliable count",
    legend: "The mountain crossings became symbols of communist endurance.",
    evidence: "Survivors' memoirs describe many deaths from cold and altitude. The suffering was real, even if exact numbers were never recorded.",
  },
  {
    place: "The grasslands",
    when: "August 1935",
    idx: 13,
    at: [52.7, 130.1],
    what: "The army struggles through boggy grasslands, where many marchers die.",
    marchers: "falling — no reliable count",
    legend: "Retold as a test of willpower that only true communists could pass.",
    evidence: "Survivors recall hunger and deaths in the bogs; again, the numbers were not reliably recorded.",
  },
  {
    place: "Wuqi, northern Shaanxi",
    when: "October 1935",
    idx: 16,
    at: [121.6, 83.3],
    what: "Roughly 8,000 of the original marchers arrive. Other communist armies reach Shaanxi in 1936.",
    marchers: "roughly 8,000 of the original marchers",
    legend: "In December 1935 Mao called the Long March 'a manifesto… a propaganda force… a seeding-machine'.",
    evidence: "Around 90% of those who left Jiangxi did not arrive: many died, others deserted or were left behind, and new recruits joined along the way.",
  },
  {
    place: "Yan'an, Shaanxi",
    when: "from early 1937",
    idx: 17,
    at: [140, 88],
    what: "Yan'an becomes the communists' headquarters (until 1947).",
    marchers: "the survivors become the party's veterans",
    legend: "Edgar Snow's book Red Star Over China (1937) carries the heroic story around the world.",
    evidence: "The march's real 'victory' was political: the party survived, Mao led it, and the legend became a foundation of his later personality cult.",
  },
];

type DistanceView = "official" | "range" | "retraced";

const DISTANCES: Record<DistanceView, { label: string; low: number; high: number; who: string }> = {
  official: {
    label: "Official claim",
    low: 12500,
    high: 12500,
    who: "Official Chinese accounts: 25,000 li (a traditional Chinese unit), about 12,500 km, crossing 18 mountain ranges and 24 rivers.",
  },
  range: {
    label: "Claims quoted",
    low: 9000,
    high: 12500,
    who: "Figures commonly quoted in books range from about 9,000 to 12,500 km — partly because they count different armies, detours and back-tracks.",
  },
  retraced: {
    label: "Retraced route",
    low: 6000,
    high: 6000,
    who: "Ed Jocelyn and Andrew McEwen walked the main route in 2002–03 and estimated roughly 6,000 km.",
  },
};

function fmtKm(n: number): string {
  return n.toLocaleString("en-GB");
}

function LongMarchStepper() {
  const [stage, setStage] = useState(1);
  const [view, setView] = useState<"legend" | "evidence">("legend");
  const [dist, setDist] = useState<DistanceView>("official");
  const s = STAGES[stage - 1];
  const done = ROUTE.slice(0, s.idx + 1);
  const todo = ROUTE.slice(s.idx);
  const pts = (p: [number, number][]) => p.map(([x, y]) => `${x},${y}`).join(" ");
  const d = DISTANCES[dist];
  const maxKm = 16000;
  const barX = (km: number) => 10 + (km / maxKm) * 290;

  return (
    <WidgetFrame
      title="Long March route stepper"
      tryThis={[
        "Before you reach stage 8, predict how many of the 86,000 arrived. Then check.",
        "At **Luding Bridge**, read *The legend*, then *The evidence*. What source would you need to settle the argument?",
        "Compare the three distance figures. Who might prefer the biggest one — and why?",
        "Find the stage where the *leadership* changed. Why might it matter more than any battle?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>
              Stage {stage} of {STAGES.length}: {s.place}, {s.when}.
            </strong>{" "}
            {s.what}
          </p>
          <p>
            {view === "legend" ? "📣 The legend: " : "🔎 The evidence: "}
            {view === "legend" ? s.legend : s.evidence}
          </p>
          <p className="text-ink-2">
            Militarily a disaster, politically a turning point: historians separate the <em>event</em> from the <em>legend</em>. Route
            simplified (the real one doubled back many times); figures from the topic guide — only the start (about 86,000) and
            arrival (roughly 8,000) are reasonably well attested.
          </p>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
        <svg
          viewBox="0 0 330 310"
          className="mx-auto block h-auto w-full rounded-xl border border-line bg-surface max-w-md"
          role="img"
          aria-label={`Schematic map, not to scale, of the Long March. Stage ${stage} of ${STAGES.length}: ${s.place}, ${s.when}. Route covered so far is drawn solid.`}
          fontFamily="sans-serif"
        >
          <polyline points={COAST} fill="none" className="stroke-line" strokeWidth={1.5} />
          <ellipse cx={288} cy={254.9} rx={10} ry={23} fill="none" className="stroke-line" />
          {CITIES.map((c) => (
            <g key={c.name}>
              <circle cx={c.x} cy={c.y} r={2.2} className="fill-ink-2" />
              <text x={c.anchor === "end" ? c.x - 4 : c.x + 4} y={c.y + 3.5} fontSize={9} textAnchor={c.anchor} className="fill-ink-2">
                {c.name}
              </text>
            </g>
          ))}
          <polyline points={pts(todo)} fill="none" className="stroke-ink-2" strokeWidth={1.5} strokeDasharray="4 4" strokeLinejoin="round" />
          <polyline points={pts(done)} fill="none" className="stroke-bad" strokeWidth={3.5} strokeLinejoin="round" strokeLinecap="round" />
          {STAGES.map((st, i) => {
            const n = i + 1;
            const current = n === stage;
            const reached = n <= stage;
            return (
              <g key={st.place}>
                <circle
                  cx={st.at[0]}
                  cy={st.at[1]}
                  r={current ? 9 : 7}
                  className={current ? "fill-brand stroke-ink" : reached ? "fill-bad-soft stroke-ink" : "fill-surface stroke-ink-2"}
                  strokeWidth={1.2}
                />
                <text
                  x={st.at[0]}
                  y={st.at[1] + 3.5}
                  fontSize={10}
                  fontWeight={700}
                  textAnchor="middle"
                  className={current ? "fill-surface" : "fill-ink"}
                >
                  {n}
                </text>
              </g>
            );
          })}
          <text x={10} y={18} fontSize={11} fontWeight={700} className="fill-ink">
            The Long March, 1934–35
          </text>
          <text x={10} y={302} fontSize={9} fontStyle="italic" className="fill-ink-2">
            Schematic, not to scale
          </text>
        </svg>

        <div className="space-y-3">
          <Stepper label="Stage" value={stage} min={1} max={STAGES.length} onChange={setStage} />
          <div className="flex flex-wrap gap-1">
            {STAGES.map((st, i) => (
              <button
                key={st.place}
                type="button"
                onClick={() => setStage(i + 1)}
                aria-label={`Go to stage ${i + 1}: ${st.place}`}
                aria-pressed={stage === i + 1}
                className={`min-h-10 min-w-10 rounded-lg border px-2 text-sm font-bold ${
                  stage === i + 1 ? "border-brand bg-brand text-brand-ink" : "border-line bg-surface-2 text-ink"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Readout label="When" value={s.when} tone="ink" />
            <Readout label="Original marchers" value={<span className="text-base">{s.marchers}</span>} tone={stage >= 8 ? "bad" : "brand"} />
          </div>
          <Segmented
            label="Show the legend or the evidence"
            value={view}
            onChange={setView}
            options={[
              { value: "legend", label: "📣 The legend" },
              { value: "evidence", label: "🔎 The evidence" },
            ]}
          />
          <div className={`rounded-xl border p-3 text-sm ${view === "legend" ? "border-line bg-warn-soft" : "border-line bg-info-soft"}`}>
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">{view === "legend" ? "Propaganda story" : "What historians can check"}</div>
            <p className="mt-1 text-ink">{view === "legend" ? s.legend : s.evidence}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <div className="text-sm font-bold text-ink">How long was the Long March?</div>
        <Segmented
          label="Choose a distance figure"
          value={dist}
          onChange={setDist}
          options={(Object.keys(DISTANCES) as DistanceView[]).map((k) => ({ value: k, label: DISTANCES[k].label }))}
        />
        <svg
          viewBox="0 0 320 96"
          className="mx-auto block h-auto w-full max-w-md"
          role="img"
          aria-label={`Bar chart of Long March distance figures. Selected: ${d.label}, ${d.low === d.high ? `about ${fmtKm(d.low)} km` : `about ${fmtKm(d.low)} to ${fmtKm(d.high)} km`}.`}
          fontFamily="sans-serif"
        >
          {(Object.keys(DISTANCES) as DistanceView[]).map((k, i) => {
            const v = DISTANCES[k];
            const y = 8 + i * 26;
            const sel = k === dist;
            return (
              <g key={k}>
                {v.low !== v.high ? (
                  <>
                    <rect x={10} y={y} width={barX(v.low) - 10} height={16} rx={3} className={sel ? "fill-brand" : "fill-line"} />
                    <rect
                      x={barX(v.low)}
                      y={y}
                      width={barX(v.high) - barX(v.low)}
                      height={16}
                      rx={3}
                      className={sel ? "fill-brand-soft stroke-brand" : "fill-surface-2 stroke-line"}
                      strokeDasharray="3 2"
                    />
                  </>
                ) : (
                  <rect x={10} y={y} width={barX(v.low) - 10} height={16} rx={3} className={sel ? "fill-brand" : "fill-line"} />
                )}
                <text x={14} y={y + 12} fontSize={10} fontWeight={700} className={sel ? "fill-surface" : "fill-ink"}>
                  {v.label}
                </text>
                <text x={barX(v.high) + 4} y={y + 12} fontSize={10} className="fill-ink">
                  {v.low === v.high ? `≈ ${fmtKm(v.low)} km` : `${fmtKm(v.low)}–${fmtKm(v.high)}`}
                </text>
              </g>
            );
          })}
          <text x={10} y={92} fontSize={9} className="fill-ink-2">
            Dashed band = range of claims. Scale: 0–16,000 km.
          </text>
        </svg>
        <p className="text-sm text-ink-2">
          {d.who} The gap matters: a longer, harder march made a more heroic story — so ask who produced each figure, and why.
        </p>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. "Why did the Communists win?" factor balance
// ---------------------------------------------------------------------------
type FactorId = "gmd" | "japan" | "mao";

interface FactorInfo {
  name: string;
  box: string;
  forCards: string[];
  againstCards: string[];
}

const FACTORS: Record<FactorId, FactorInfo> = {
  gmd: {
    name: "GMD weakness",
    box: "weak government",
    forCards: [
      "Corruption and brutal conscription turned peasants against Chiang's government.",
      "Hyperinflation: a new currency launched in August 1948 was almost worthless within months, so even city supporters turned away.",
      "In 1948–49 whole GMD units changed sides; huge armies were destroyed in campaigns such as Huaihai.",
    ],
    againstCards: [
      "On paper the GMD began the Civil War stronger: about 4 million troops to the CCP's 1.2 million, plus over $2 billion of US aid.",
      "Much of that weakness was *caused* by eight years of war against Japan — so is it really a separate factor?",
    ],
  },
  japan: {
    name: "Japanese invasion",
    box: "crisis",
    forCards: [
      "The GMD fought most of the big battles (1937–45), losing its best soldiers, richest cities and much of its tax income.",
      "Cut off from its wealth, the government printed money — the root of the inflation that later wrecked it.",
      "CCP membership grew from about 40,000 (1937) to about 1.2 million (1945) as patriotic guerrillas: 'peasant nationalism' (Chalmers Johnson).",
    ],
    againstCards: [
      "Japan surrendered in 1945, yet the Civil War was still fought — and won — in 1946–49.",
      "The war created an opportunity; someone still had to exploit it. Why did the CCP, not another group, gain?",
    ],
  },
  mao: {
    name: "Mao's strategy",
    box: "leadership",
    forCards: [
      "A peasant strategy suited a country where around 80–90% of people lived on the land.",
      "Guerrilla tactics, land reform, rent cuts and strict discipline (the Eight Points for Attention) won villages' support.",
      "Propaganda — the Long March legend and Edgar Snow's *Red Star Over China* (1937) — made the communists look heroic and patriotic.",
    ],
    againstCards: [
      "In 1934 the same leaders were nearly destroyed: roughly 90% of the Long Marchers did not reach Shaanxi.",
      "Outside help mattered too: the Soviet Union let the CCP take captured Japanese weapons in Manchuria in 1945–46.",
      "Mao's methods included purges and the Rectification Movement — support was not only won by persuasion.",
    ],
  },
};

const ORDER: FactorId[] = ["gmd", "japan", "mao"];

function closestHistorian(w: Record<FactorId, number>): string {
  const total = w.gmd + w.japan + w.mao;
  if (total === 0) return "Set some weights to build an argument.";
  const max = Math.max(w.gmd, w.japan, w.mao);
  const top = ORDER.filter((f) => w[f] === max);
  if (top.length > 1 || max - Math.min(w.gmd, w.japan, w.mao) <= 1) {
    return "A linked argument: no single factor dominates. Strong answers explain how the factors fed each other.";
  }
  if (top[0] === "gmd") return "Closest to Lloyd Eastman (1984): the GMD's own failures caused its defeat.";
  if (top[0] === "japan") return "Closest to Chalmers Johnson (1962) and Rana Mitter (2013): the war with Japan was decisive.";
  return "Closest to Mark Selden (1971): communist reforms won peasant support.";
}

function FactorBalance() {
  const [w, setW] = useState<Record<FactorId, number>>({ gmd: 5, japan: 5, mao: 5 });
  const [focus, setFocus] = useState<FactorId>("gmd");
  const [side, setSide] = useState<"for" | "against">("for");

  const total = w.gmd + w.japan + w.mao;
  const circ = w.gmd + w.japan;
  const lead = w.mao;
  const share = (f: FactorId) => (total === 0 ? 0 : Math.round((w[f] / total) * 100));
  // Tilt: positive = circumstances side (left) goes down. Max ±16 degrees.
  const tiltDeg = circ + lead === 0 ? 0 : ((circ - lead) / (circ + lead)) * 16;
  const t = (tiltDeg * Math.PI) / 180;
  const cx = 160;
  const cy = 48;
  const half = 112;
  const left: [number, number] = [cx - half * Math.cos(t), cy + half * Math.sin(t)];
  const right: [number, number] = [cx + half * Math.cos(t), cy - half * Math.sin(t)];
  const lean = Math.abs(circ - lead) <= 1 ? "level" : circ > lead ? "circumstances" : "leadership";
  const leanText =
    lean === "level"
      ? "Your scale is roughly level: circumstances and Mao's leadership carry equal weight."
      : lean === "circumstances"
        ? "Your scale tips towards circumstances: you are arguing that crisis and GMD weakness opened the door more than Mao pushed it."
        : "Your scale tips towards leadership: you are arguing that Mao's strategy made the difference.";
  const info = FACTORS[focus];
  const cards = side === "for" ? info.forCards : info.againstCards;
  const setOne = (f: FactorId) => (v: number) => setW((old) => ({ ...old, [f]: v }));

  return (
    <WidgetFrame
      title="Why did the Communists win? Factor balance"
      tryThis={[
        "Set all three to 5. Which way does the scale tip — and is that a fair test when two factors sit on one side?",
        "Make **Mao's strategy** outweigh both others, then read its *Challenge* cards. Can your argument survive 1934?",
        "Drop **Japanese invasion** to 0. Now read the GMD weakness challenge cards — does your argument still hold?",
        "Try to match Lloyd Eastman's view. Which evidence card would he lead with?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>Your argument:</strong> GMD weakness {share("gmd")}% · Japanese invasion {share("japan")}% · Mao&apos;s strategy {share("mao")}%.
          </p>
          <p>{leanText}</p>
          <p>{closestHistorian(w)}</p>
          <p className="text-ink-2">
            This models <em>your</em> judgement — there is no single correct weighting, and historians disagree. Evidence from the topic
            guide (figures approximate). Remember outside factors too, such as Soviet help in Manchuria and US aid to the GMD.
          </p>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <Slider label="GMD weakness (weak government)" value={w.gmd} min={0} max={10} onChange={setOne("gmd")} />
          <Slider label="Japanese invasion (crisis)" value={w.japan} min={0} max={10} onChange={setOne("japan")} />
          <Slider label="Mao's strategy (leadership)" value={w.mao} min={0} max={10} onChange={setOne("mao")} />
          <div className="flex h-4 w-full overflow-hidden rounded-full border border-line bg-surface-2" aria-hidden>
            <div className="bg-bad" style={{ width: `${share("gmd")}%` }} />
            <div className="bg-accent" style={{ width: `${share("japan")}%` }} />
            <div className="bg-good" style={{ width: `${share("mao")}%` }} />
          </div>
        </div>

        <svg
          viewBox="0 0 320 170"
          className="mx-auto block h-auto w-full rounded-xl border border-line bg-surface max-w-md"
          role="img"
          aria-label={`Balance scale. Circumstances (GMD weakness ${w.gmd} plus Japanese invasion ${w.japan}) on the left, Mao's strategy ${w.mao} on the right. ${leanText}`}
          fontFamily="sans-serif"
        >
          <polygon points={`${cx},${cy} ${cx - 26},150 ${cx + 26},150`} className="fill-surface-2 stroke-ink-2" strokeWidth={1.5} />
          <line x1={cx - 60} y1={150} x2={cx + 60} y2={150} className="stroke-ink-2" strokeWidth={2} />
          <line x1={left[0]} y1={left[1]} x2={right[0]} y2={right[1]} className="stroke-ink" strokeWidth={4} strokeLinecap="round" />
          <circle cx={cx} cy={cy} r={5} className="fill-ink" />
          {[
            { p: left, label: "Circumstances", val: circ, sub: `${w.gmd} + ${w.japan}` },
            { p: right, label: "Mao's strategy", val: lead, sub: `${w.mao}` },
          ].map((pan) => (
            <g key={pan.label}>
              <line x1={pan.p[0]} y1={pan.p[1]} x2={pan.p[0] - 30} y2={pan.p[1] + 38} className="stroke-ink-2" />
              <line x1={pan.p[0]} y1={pan.p[1]} x2={pan.p[0] + 30} y2={pan.p[1] + 38} className="stroke-ink-2" />
              <rect x={pan.p[0] - 42} y={pan.p[1] + 38} width={84} height={34} rx={8} className="fill-brand-soft stroke-brand" strokeWidth={1.5} />
              <text x={pan.p[0]} y={pan.p[1] + 52} fontSize={10} fontWeight={700} textAnchor="middle" className="fill-ink">
                {pan.label}
              </text>
              <text x={pan.p[0]} y={pan.p[1] + 66} fontSize={10} textAnchor="middle" className="fill-ink-2">
                {pan.sub} = {pan.val}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="mt-5 space-y-2">
        <div className="text-sm font-bold text-ink">Evidence cards</div>
        <div className="flex flex-wrap gap-2">
          <Segmented
            label="Choose a factor"
            value={focus}
            onChange={setFocus}
            options={ORDER.map((f) => ({ value: f, label: FACTORS[f].name }))}
          />
          <Segmented
            label="Evidence for or a challenge"
            value={side}
            onChange={setSide}
            options={[
              { value: "for", label: "✅ Evidence for" },
              { value: "against", label: "⚖️ Challenge" },
            ]}
          />
        </div>
        <p className="text-xs font-bold uppercase tracking-wide text-ink-2">
          {info.name} — Term 2 box: {info.box} — your weight {w[focus]}/10
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {cards.map((c) => (
            <li key={c} className={`rounded-xl border border-line p-3 text-sm text-ink ${side === "for" ? "bg-good-soft" : "bg-bad-soft"}`}>
              {c.split("*").map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : <span key={i}>{part}</span>))}
            </li>
          ))}
        </ul>
        <p className="text-sm text-ink-2">
          Links matter: the Japanese invasion (crisis) deepened corruption and inflation (weak government), which made peasants more
          willing to trust the communists (leadership).
        </p>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "long-march-stepper",
    title: "Long March route stepper",
    blurb: "Follow the march stage by stage — and test the legend against the evidence.",
    Component: LongMarchStepper,
  },
  {
    id: "communist-victory-balance",
    title: "Why did the Communists win?",
    blurb: "Weigh GMD weakness, the Japanese invasion and Mao's strategy — then test your argument against the evidence.",
    Component: FactorBalance,
  },
];
