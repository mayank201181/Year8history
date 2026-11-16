"use client";
// Interactive explorables for "William I and the Norman Conquest".
import { useEffect, useState } from "react";
import { Readout, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Shared schematic geography (lat, lon), projected to a 350 × 427 SVG.
// ---------------------------------------------------------------------------
type Pt = readonly [number, number];
const S = 70;
const px = (p: Pt) => (p[1] + 5.8) * 0.6088 * S;
const py = (p: Pt) => (55.3 - p[0]) * S;
const MAP_W = Math.round((2.4 + 5.8) * 0.6088 * S);
const MAP_H = Math.round(6.1 * S);

const GB: Pt[] = [[55.3,-1.57],[55.0,-1.42],[54.69,-1.2],[54.58,-1.05],[54.49,-0.61],[54.28,-0.4],[54.12,-0.08],[53.9,-0.15],[53.73,0.03],[53.58,0.11],[53.73,-0.25],[53.72,-0.57],[53.7,-0.72],[53.68,-0.6],[53.68,-0.43],[53.62,-0.2],[53.57,-0.07],[53.34,0.26],[53.14,0.34],[53.1,0.33],[52.9,0.05],[52.76,0.38],[52.94,0.49],[52.93,1.3],[52.61,1.73],[52.48,1.76],[52.33,1.68],[52.08,1.57],[51.95,1.35],[51.85,1.27],[51.79,1.15],[51.77,0.92],[51.53,0.8],[51.5,0.45],[51.46,0.37],[51.45,0.7],[51.4,0.9],[51.36,1.03],[51.39,1.39],[51.38,1.45],[51.33,1.42],[51.22,1.4],[51.12,1.32],[51.08,1.18],[51.07,1.08],[50.91,0.98],[50.95,0.75],[50.85,0.57],[50.84,0.47],[50.8,0.34],[50.73,0.24],[50.78,0.05],[50.82,-0.14],[50.81,-0.37],[50.72,-0.79],[50.78,-1.08],[50.85,-1.35],[50.75,-1.55],[50.72,-1.75],[50.7,-1.98],[50.58,-2.06],[50.55,-2.44],[50.72,-2.93],[50.61,-3.41],[50.46,-3.53],[50.22,-3.64],[50.36,-4.14],[50.35,-4.45],[50.33,-4.64],[50.22,-4.8],[50.15,-5.06],[49.96,-5.2],[50.12,-5.53],[50.07,-5.71],[50.21,-5.48],[50.42,-5.08],[50.55,-4.94],[50.83,-4.55],[51.02,-4.52],[51.05,-4.25],[51.21,-4.12],[51.21,-3.47],[51.35,-2.98],[51.5,-2.7],[51.61,-2.64],[51.75,-2.45],[51.64,-2.67],[51.55,-2.98],[51.46,-3.17],[51.39,-3.27],[51.48,-3.7],[51.6,-3.95],[51.57,-3.98],[51.56,-4.33],[51.66,-4.16],[51.7,-4.4],[51.67,-4.7],[51.6,-4.93],[51.68,-5.17],[51.9,-5.31],[52.01,-4.98],[52.11,-4.68],[52.21,-4.36],[52.41,-4.09],[52.54,-4.05],[52.72,-4.06],[52.86,-4.11],[52.92,-4.13],[52.89,-4.41],[52.82,-4.5],[52.8,-4.72],[52.94,-4.52],[53.14,-4.27],[53.2,-4.45],[53.25,-4.58],[53.31,-4.63],[53.42,-4.45],[53.32,-4.04],[53.23,-4.13],[53.33,-3.83],[53.32,-3.49],[53.35,-3.32],[53.25,-3.1],[53.4,-3.18],[53.4,-2.99],[53.48,-3.05],[53.65,-3.01],[53.73,-2.95],[53.82,-3.06],[53.93,-3.01],[54.07,-2.86],[54.15,-2.95],[54.1,-3.22],[54.21,-3.27],[54.35,-3.41],[54.51,-3.64],[54.64,-3.56],[54.71,-3.5],[54.87,-3.39],[54.95,-3.1],[54.98,-3.26],[54.84,-4.05],[54.68,-4.39],[54.85,-4.45],[54.63,-4.86],[54.84,-5.12],[55.0,-5.16],[55.1,-5.0],[55.24,-4.86],[55.3,-4.83]];
const FR: Pt[] = [[49.2,-1.62],[49.5,-1.86],[49.72,-1.94],[49.65,-1.62],[49.7,-1.26],[49.58,-1.27],[49.36,-1.15],[49.37,-0.85],[49.34,-0.45],[49.29,-0.25],[49.29,-0.1],[49.43,0.24],[49.45,0.4],[49.49,0.11],[49.69,0.17],[49.76,0.37],[49.87,0.7],[49.93,1.08],[50.06,1.38],[50.18,1.63],[50.22,1.55],[50.4,1.56],[50.73,1.6],[50.87,1.58],[50.95,1.86],[51.03,2.37],[51.05,2.4],[49.2,2.4]];
const IOW: Pt[] = [[50.77,-1.55],[50.76,-1.3],[50.73,-1.07],[50.6,-1.2],[50.66,-1.52]];
const shape = (pts: Pt[]) => pts.map((p, i) => `${i ? "L" : "M"}${px(p).toFixed(1)} ${py(p).toFixed(1)}`).join(" ") + " Z";

interface Place {
  name: string;
  at: Pt;
  dx: number;
  dy: number;
  anchor: "start" | "middle" | "end";
}
const PL = {
  london: { name: "London", at: [51.51, -0.13], dx: -7, dy: 4, anchor: "end" },
  york: { name: "York", at: [53.96, -1.08], dx: -8, dy: -4, anchor: "end" },
  fulford: { name: "Gate Fulford", at: [53.93, -1.07], dx: -8, dy: 10, anchor: "end" },
  stamford: { name: "Stamford Bridge", at: [53.99, -0.91], dx: 8, dy: -6, anchor: "start" },
  riccall: { name: "Riccall", at: [53.83, -1.06], dx: 6, dy: 12, anchor: "start" },
  tadcaster: { name: "Tadcaster", at: [53.88, -1.26], dx: -8, dy: 12, anchor: "end" },
  scarborough: { name: "Scarborough", at: [54.28, -0.4], dx: 7, dy: 4, anchor: "start" },
  pevensey: { name: "Pevensey", at: [50.82, 0.34], dx: -6, dy: 14, anchor: "end" },
  hastings: { name: "Hastings", at: [50.86, 0.57], dx: 7, dy: 12, anchor: "start" },
  battle: { name: "Battle (Senlac)", at: [50.92, 0.48], dx: 6, dy: -6, anchor: "start" },
  dives: { name: "Dives-sur-Mer", at: [49.29, -0.1], dx: 0, dy: 14, anchor: "middle" },
  stvalery: { name: "St-Valery", at: [50.18, 1.63], dx: -6, dy: 14, anchor: "end" },
  rouen: { name: "Rouen", at: [49.44, 1.1], dx: 6, dy: 4, anchor: "start" },
  wight: { name: "Isle of Wight", at: [50.69, -1.3], dx: 0, dy: 16, anchor: "middle" },
  dover: { name: "Dover", at: [51.13, 1.31], dx: 6, dy: 10, anchor: "start" },
  canterbury: { name: "Canterbury", at: [51.28, 1.08], dx: 6, dy: -4, anchor: "start" },
  wallingford: { name: "Wallingford", at: [51.6, -1.13], dx: -6, dy: 4, anchor: "end" },
  berkhamsted: { name: "Berkhamsted", at: [51.76, -0.56], dx: -6, dy: -6, anchor: "end" },
} satisfies Record<string, Place>;
type PlaceId = keyof typeof PL;

const NORTH_SEA: Pt = [55.25, 0.9];
const ROAD_NORTH: Pt = [52.9, -0.75];
const ROMNEY: Pt = [50.98, 0.94];

interface Step {
  date: string;
  title: string;
  text: string;
  /** Waypoints travelled during this step (the last one is where the army ends up). null = army gone. */
  H?: Pt[] | null;
  N?: Pt[] | null;
  W?: Pt[] | null;
  battle?: PlaceId;
  labels: PlaceId[];
}

const STEPS: Step[] = [
  {
    date: "5–6 January",
    title: "Edward dies; Harold is crowned",
    text: "Edward the Confessor dies on 5 January with no children. The next day the Witan's choice, Harold Godwinson, is crowned. In Normandy, William says the crown was promised to him; in Norway, Harald Hardrada has a claim of his own.",
    H: [PL.london.at],
    W: [PL.rouen.at],
    labels: ["london", "rouen"],
  },
  {
    date: "24 April",
    title: "A “long-haired star”",
    text: "Halley's Comet blazes in the sky for about a week. The Anglo-Saxon Chronicle records it, and the Bayeux Tapestry later shows people pointing at it in alarm — many saw it as an omen.",
    labels: ["london", "rouen"],
  },
  {
    date: "May",
    title: "Tostig raids the coast",
    text: "Harold's exiled brother Tostig raids the south and east coasts. Earls Edwin and Morcar drive him off and he flees to Scotland — he will be back with Hardrada.",
    labels: ["london"],
  },
  {
    date: "Summer",
    title: "Waiting for the invasion",
    text: "Harold guards the south coast all summer with the fyrd and his fleet, based around the Isle of Wight. William's fleet gathers at Dives-sur-Mer but stays in port: the sources say the winds were against him (some historians think he was also waiting for the right moment).",
    H: [PL.wight.at],
    W: [PL.rouen.at, PL.dives.at],
    labels: ["wight", "dives", "london"],
  },
  {
    date: "8 September",
    title: "The fyrd goes home",
    text: "Food runs out. Harold sends the fyrd home and returns to London; the fleet sails there too, and many ships are lost on the way. Around the same time William moves his fleet up the coast to Saint-Valery-sur-Somme. The south coast is now unguarded.",
    H: [PL.london.at],
    W: [[49.6, 0.2], PL.stvalery.at],
    labels: ["london", "stvalery"],
  },
  {
    date: "Mid-September",
    title: "The Vikings land",
    text: "Harald Hardrada and Tostig, with around 300 ships, burn Scarborough, sail up the Humber and the River Ouse, and land at Riccall, about 10 miles from York. Harold hears the news and gathers his housecarls to march north.",
    N: [NORTH_SEA, PL.scarborough.at, [53.75, 0.25], [53.66, -0.2], [53.71, -0.65], PL.riccall.at],
    labels: ["scarborough", "riccall", "york", "london"],
  },
  {
    date: "20 September",
    title: "Battle of Gate Fulford",
    text: "Hardrada defeats Earls Edwin and Morcar just south of York. York surrenders and agrees to hand over hostages at Stamford Bridge. Meanwhile Harold is racing north, gathering men as he goes.",
    N: [PL.fulford.at],
    H: [ROAD_NORTH],
    battle: "fulford",
    labels: ["fulford", "york", "london"],
  },
  {
    date: "24 September",
    title: "Harold reaches Tadcaster",
    text: "Harold arrives at Tadcaster, near York, having covered roughly 185 miles from London in a few days — an astonishing march. The Norwegians, not expecting him, move to Stamford Bridge to collect their hostages.",
    H: [PL.tadcaster.at],
    N: [PL.york.at, PL.stamford.at],
    labels: ["tadcaster", "york", "stamford"],
  },
  {
    date: "25 September",
    title: "Battle of Stamford Bridge",
    text: "Harold marches through York and takes the Norwegians by surprise — according to later Norse sagas, many had left their mail armour at their ships. Hardrada and Tostig are both killed. The survivors need only 24 of their ships to sail home.",
    H: [PL.york.at, PL.stamford.at],
    N: null,
    battle: "stamford",
    labels: ["stamford", "york", "fulford"],
  },
  {
    date: "28 September",
    title: "William lands at Pevensey",
    text: "The wind changes. William's fleet crosses overnight and lands unopposed at Pevensey — no English army or fleet is there to stop him. He builds a fort inside the old Roman walls, then moves to Hastings, builds a wooden castle and raids the countryside: Harold's own family lands.",
    W: [[50.5, 1.0], PL.pevensey.at, PL.hastings.at],
    labels: ["pevensey", "hastings", "stamford", "york"],
  },
  {
    date: "Early October",
    title: "Harold races south",
    text: "News reaches Harold in the north, probably around 1 October. He hurries back to London — about 200 miles — arriving by about 6 October. He waits only a few days for more troops before setting off again.",
    H: [PL.york.at, ROAD_NORTH, PL.london.at],
    labels: ["london", "york", "hastings"],
  },
  {
    date: "13 October",
    title: "The armies face each other",
    text: "Harold marches about 60 miles from London and gathers his army at the “hoary apple tree” on Caldbec Hill, near Hastings. According to the chronicler John of Worcester, many of his men had not yet arrived.",
    H: [PL.battle.at],
    labels: ["battle", "hastings", "london"],
  },
  {
    date: "14 October",
    title: "Battle of Hastings",
    text: "From about 9 a.m. until dusk the English shield wall holds the ridge. Norman archers, cavalry and (according to William of Poitiers) feigned retreats slowly break it. Late in the day Harold is killed, with his brothers Gyrth and Leofwine.",
    H: null,
    W: [PL.battle.at],
    battle: "battle",
    labels: ["battle", "hastings", "pevensey"],
  },
  {
    date: "Late Oct – Nov",
    title: "William secures the south-east",
    text: "The English do not surrender. In London the Witan chooses the teenage Edgar Ætheling as king — but he is never crowned. William takes Romney, Dover and Canterbury, securing the ports he needs.",
    W: [PL.hastings.at, ROMNEY, PL.dover.at, PL.canterbury.at],
    labels: ["dover", "canterbury", "london"],
  },
  {
    date: "Late Nov – early Dec",
    title: "Round London",
    text: "William burns Southwark but cannot cross London Bridge. He circles west, crosses the Thames at Wallingford, and at Berkhamsted the English leaders — Edgar, Archbishop Ealdred and Earls Edwin and Morcar — submit to him.",
    W: [[51.49, -0.08], PL.wallingford.at, PL.berkhamsted.at],
    labels: ["london", "wallingford", "berkhamsted"],
  },
  {
    date: "25 December",
    title: "Coronation",
    text: "Archbishop Ealdred crowns William in Westminster Abbey. Norman guards outside hear the crowd shouting, think it is an attack and set fire to nearby houses — a tense start to the new reign.",
    W: [PL.london.at],
    labels: ["london", "berkhamsted"],
  },
];

type Army = "H" | "N" | "W";

function trail(army: Army, upTo: number): { pts: Pt[]; here: Pt | null } {
  const pts: Pt[] = [];
  let here: Pt | null = null;
  for (let i = 0; i <= upTo; i++) {
    const m = STEPS[i][army];
    if (m === null) here = null;
    else if (m) {
      for (const p of m) if (!pts.length || pts[pts.length - 1] !== p) pts.push(p);
      here = m[m.length - 1];
    }
  }
  return { pts, here };
}

/** Straight-line miles along a list of points (haversine). */
function miles(pts: Pt[]): number {
  let total = 0;
  for (let i = 1; i < pts.length; i++) {
    const [la1, lo1] = pts[i - 1].map((d) => (d * Math.PI) / 180);
    const [la2, lo2] = pts[i].map((d) => (d * Math.PI) / 180);
    const h = Math.sin((la2 - la1) / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin((lo2 - lo1) / 2) ** 2;
    total += 2 * 3959 * Math.asin(Math.sqrt(h));
  }
  return total;
}

const ARMY_STYLE: Record<Army, { name: string; line: string; dot: string; dash?: string; letter: string }> = {
  H: { name: "Harold", line: "stroke-brand", dot: "fill-brand", letter: "H" },
  N: { name: "Hardrada", line: "stroke-bad", dot: "fill-bad", dash: "6 4", letter: "N" },
  W: { name: "William", line: "stroke-accent", dot: "fill-accent", dash: "2 3", letter: "W" },
};

const BATTLES: { at: PlaceId; step: number }[] = [
  { at: "fulford", step: 6 },
  { at: "stamford", step: 8 },
  { at: "battle", step: 12 },
];

function CampaignMap() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const last = STEPS.length - 1;

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setStep((s) => {
        if (s >= last) {
          setPlaying(false);
          return s;
        }
        return s + 1;
      });
    }, 2600);
    return () => window.clearInterval(id);
  }, [playing, last]);

  const st = STEPS[step];
  const armies = (["N", "H", "W"] as Army[]).map((a) => ({ a, ...trail(a, step) }));
  const harold = armies.find((x) => x.a === "H")!;
  const william = armies.find((x) => x.a === "W")!;
  const hardrada = armies.find((x) => x.a === "N")!;
  // Harold's land marching from mid-September (step 5) onwards.
  const haroldMarch = trail("H", step).pts.slice(trail("H", 4).pts.length - 1);
  const marched = step >= 6 ? Math.round(miles(haroldMarch) / 5) * 5 : 0;
  const invaders = (hardrada.here ? 1 : 0) + (william.here && px(william.here) && william.here[0] > 50.5 && step >= 9 ? 1 : 0);
  const apart = harold.here && william.here && step >= 9 ? Math.round(miles([harold.here, william.here]) / 5) * 5 : null;
  const labelSet = new Set<PlaceId>(st.labels);

  const ariaParts = armies
    .filter((x) => x.here)
    .map((x) => `${ARMY_STYLE[x.a].name}'s army near ${nearest(x.here as Pt)}`)
    .join("; ");

  return (
    <WidgetFrame
      title="1066 campaign map"
      tryThis={[
        "Find the date when Harold was **furthest** from the place where William landed.",
        "How many days were there between Stamford Bridge and Hastings? (Count from 25 September to 14 October.)",
        "Stop at **8 September**. If the fyrd had been fed for three more weeks, what might have happened on 28 September?",
        "Which step shows the biggest piece of **luck** for William? Which shows his best **decision**?",
      ]}
      caption={
        <>
          <strong>{st.date} 1066 — {st.title}.</strong> {st.text}
        </>
      }
    >
      <div className="space-y-3">
        <Slider label="Date" value={step} min={0} max={last} onChange={(v) => { setPlaying(false); setStep(v); }} format={(v) => STEPS[v].date} />
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => { setPlaying(false); setStep((s) => Math.max(0, s - 1)); }} disabled={step === 0} aria-label="Previous step">
            ◀ Back
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={() => { if (step >= last) setStep(0); setPlaying((p) => !p); }} aria-label={playing ? "Pause" : "Play through 1066"}>
            {playing ? "❚❚ Pause" : "▶ Play"}
          </button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => { setPlaying(false); setStep((s) => Math.min(last, s + 1)); }} disabled={step === last} aria-label="Next step">
            Next ▶
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Readout label="Date" value={st.date} tone="ink" />
          <Readout label="Harold's march" value={marched ? `≈ ${marched} mi` : "—"} />
          <Readout label={apart !== null ? "Harold ↔ William" : "Invaders in England"} value={apart !== null ? `≈ ${apart} mi` : String(invaders)} tone={invaders ? "bad" : "ink"} />
        </div>

        <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="mx-auto h-auto w-full max-w-md rounded-xl border border-line bg-info-soft" role="img" aria-label={`Schematic map of England and Normandy on ${st.date} 1066: ${st.title}. ${ariaParts || "No armies on the move."}`}>
          <path d={shape(GB)} className="fill-surface stroke-ink-2" strokeWidth={1} />
          <path d={shape(IOW)} className="fill-surface stroke-ink-2" strokeWidth={1} />
          <path d={shape(FR)} className="fill-surface stroke-ink-2" strokeWidth={1} />
          <text x={135} y={210} fontSize={13} fontWeight={800} textAnchor="middle" className="fill-ink-2" opacity={0.5}>ENGLAND</text>
          <text x={295} y={418} fontSize={11} fontWeight={800} textAnchor="middle" className="fill-ink-2" opacity={0.5}>NORMANDY</text>
          <text x={300} y={34} fontSize={10} textAnchor="middle" className="fill-ink-2">North Sea</text>
          <text x={300} y={46} fontSize={10} textAnchor="middle" className="fill-ink-2">(to Norway ↗)</text>

          {armies.map(({ a, pts }) =>
            pts.length > 1 ? (
              <polyline key={`t${a}`} points={pts.map((p) => `${px(p).toFixed(1)},${py(p).toFixed(1)}`).join(" ")} fill="none" className={ARMY_STYLE[a].line} strokeWidth={2.5} strokeDasharray={ARMY_STYLE[a].dash} strokeLinejoin="round" opacity={0.85} />
            ) : null,
          )}

          {BATTLES.filter((b) => step >= b.step).map((b) => {
            const p = PL[b.at].at;
            const x = px(p);
            const y = py(p);
            return (
              <g key={b.at}>
                <circle cx={x} cy={y} r={step === b.step ? 11 : 7} className="fill-accent-soft stroke-bad" strokeWidth={2} />
                <path d={`M${x - 4} ${y - 4} L${x + 4} ${y + 4} M${x + 4} ${y - 4} L${x - 4} ${y + 4}`} className="stroke-bad" strokeWidth={2} />
              </g>
            );
          })}

          {(Object.keys(PL) as PlaceId[]).map((id) => {
            const p = PL[id];
            const show = labelSet.has(id);
            return (
              <g key={id}>
                <circle cx={px(p.at)} cy={py(p.at)} r={2} className="fill-ink-2" />
                {show ? (
                  <text x={px(p.at) + p.dx} y={py(p.at) + p.dy} fontSize={10.5} fontWeight={700} textAnchor={p.anchor} className="fill-ink">
                    {p.name}
                  </text>
                ) : null}
              </g>
            );
          })}

          {armies.map(({ a, here }) =>
            here ? (
              <g key={`a${a}`}>
                <circle cx={px(here)} cy={py(here)} r={9} className={`${ARMY_STYLE[a].dot} stroke-surface`} strokeWidth={2} />
                <text x={px(here)} y={py(here) + 3.5} fontSize={10} fontWeight={800} textAnchor="middle" className="fill-surface">{ARMY_STYLE[a].letter}</text>
              </g>
            ) : null,
          )}
        </svg>

        <div className="flex flex-wrap gap-3 text-xs text-ink-2">
          {(["H", "N", "W"] as Army[]).map((a) => (
            <span key={a} className="inline-flex items-center gap-1.5">
              <svg width="26" height="12" aria-hidden>
                <line x1="1" y1="6" x2="25" y2="6" className={ARMY_STYLE[a].line} strokeWidth={2.5} strokeDasharray={ARMY_STYLE[a].dash} />
              </svg>
              {ARMY_STYLE[a].letter} = {a === "H" ? "Harold Godwinson" : a === "N" ? "Harald Hardrada (Norway)" : "William of Normandy"}
            </span>
          ))}
          <span>✕ = battle · Routes are simplified; mileages are straight-line estimates (real roads were longer).</span>
        </div>
      </div>
    </WidgetFrame>
  );
}

function nearest(p: Pt): string {
  let best = "";
  let d = Infinity;
  for (const id of Object.keys(PL) as PlaceId[]) {
    const q = PL[id].at;
    const dd = (q[0] - p[0]) ** 2 + (q[1] - p[1]) ** 2;
    if (dd < d) {
      d = dd;
      best = PL[id].name;
    }
  }
  return d < 0.3 ? best : "the open country";
}

// ---------------------------------------------------------------------------
// 2. Why did William win? Factor-weighting board
// ---------------------------------------------------------------------------
type Factor = "luck" | "skill" | "harold";

const FACTORS: Record<Factor, { name: string; short: string; tone: string; bar: string }> = {
  luck: { name: "Luck", short: "luck", tone: "text-accent", bar: "fill-accent" },
  skill: { name: "William's skill", short: "William's skill and preparation", tone: "text-brand", bar: "fill-brand" },
  harold: { name: "Harold's mistakes", short: "Harold's mistakes", tone: "text-bad", bar: "fill-bad" },
};

interface Card {
  factor: Factor;
  title: string;
  text: string;
  /** Another factor this evidence links to. */
  link?: Factor;
}

const CARDS: Card[] = [
  { factor: "luck", title: "The wind", text: "William's fleet waited for weeks. When it finally crossed (27–28 September), Harold was 250 miles away in the north. (Some historians think William chose to wait.)", link: "skill" },
  { factor: "luck", title: "Hardrada's timing", text: "The Norwegians invaded in September, dragging Harold north just days before William landed." },
  { factor: "luck", title: "The fyrd goes home", text: "On 8 September Harold had to send the fyrd home because food had run out after guarding the coast all summer.", link: "harold" },
  { factor: "luck", title: "Harold's death", text: "Harold was killed late in the day — perhaps by a chance arrow, perhaps by Norman knights (the sources disagree). With his brothers also dead, the English had no leader." },
  { factor: "skill", title: "Preparation", text: "William built a huge fleet over the summer and brought knights, horses, archers and even timber for a fort. He fortified Pevensey and Hastings straight away." },
  { factor: "skill", title: "The papal banner", text: "William persuaded Pope Alexander II to back him. His men believed God was on their side." },
  { factor: "skill", title: "A mixed army", text: "Archers, foot soldiers and mounted knights worked together; the English fought only on foot, with few archers." },
  { factor: "skill", title: "Leadership and tactics", text: "When a rumour spread that he was dead, William lifted his helmet to show his face. According to William of Poitiers, the Normans used feigned retreats to draw the English down the hill.", link: "harold" },
  { factor: "harold", title: "Rushing south", text: "Harold left London after only a few days instead of waiting to gather a much bigger army.", link: "skill" },
  { factor: "harold", title: "An exhausted army", text: "Many of his best men had fought at Stamford Bridge and then marched about 200 miles back south.", link: "luck" },
  { factor: "harold", title: "Breaking the shield wall", text: "Some English soldiers broke ranks to chase fleeing Normans and were cut down on the slope.", link: "skill" },
  { factor: "harold", title: "Not guarding the coast", text: "With the fyrd gone and the fleet in London, nothing stopped William landing at Pevensey.", link: "luck" },
];

const LINKS: Record<string, string> = {
  "luck+skill": "William's preparation meant he was ready to seize his lucky break the moment the wind changed",
  "luck+harold": "the bad luck of Hardrada's timing made Harold's decision to rush south far more costly",
  "harold+skill": "William's tactics, like the feigned retreats, were designed to exploit English mistakes such as breaking the shield wall",
};
const linkKey = (a: Factor, b: Factor) => [a, b].sort().join("+");

function WhyWilliamWon() {
  const [w, setW] = useState<Record<Factor, number>>({ luck: 5, skill: 5, harold: 5 });
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const [showModel, setShowModel] = useState(false);

  const total = w.luck + w.skill + w.harold;
  const order = (Object.keys(w) as Factor[]).sort((a, b) => w[b] - w[a]);
  const [top, second, third] = order;
  const seen = (f: Factor) => CARDS.filter((c, i) => open[i] && c.factor === f).length;
  const openCount = Object.values(open).filter(Boolean).length;

  let judgement: string;
  if (total === 0) judgement = "Give at least one factor some weight to make a judgement.";
  else if (w[top] === w[second] && w[second] === w[third]) judgement = "You have made every factor equally important. That is a description, not a judgement — a strong answer decides which mattered MOST and explains why.";
  else {
    const close = w[top] - w[second] <= 1;
    const pct = Math.round((100 * w[top]) / total);
    judgement = close
      ? `William won mainly because of ${FACTORS[top].short} and ${FACTORS[second].short} together (about ${Math.round((100 * (w[top] + w[second])) / total)}% of your weighting), because ${LINKS[linkKey(top, second)]}.`
      : `William won mainly because of ${FACTORS[top].short} (about ${pct}% of your weighting), because ${LINKS[linkKey(top, second)]}.`;
    if (w[third] > 0) judgement += ` ${FACTORS[third].name} mattered less, but still played a part.`;
    else judgement += ` You have given ${FACTORS[third].name.toLowerCase()} no weight at all — can you defend that?`;
  }
  const unsupported = total > 0 && seen(top) === 0;

  return (
    <WidgetFrame
      title="Why did William win? Weigh the factors"
      tryThis={[
        "Open at least **two evidence cards for each factor** before you move the sliders.",
        "Set **Luck to 10** and the others to 0. Which evidence card argues most strongly against your judgement?",
        "Find a card that links **two** factors together. How does it change your judgement sentence?",
        "Make your final judgement, then press **Compare with a model answer**. Do you agree?",
      ]}
      caption={
        <>
          The battle lasted most of the day, so William's victory was <strong>not inevitable</strong>. Historians argue about the balance of factors — the best answers weigh them, link them, and back the judgement with precise evidence.{" "}
          {openCount < 4 ? "Open some evidence cards to build your case." : `You have examined ${openCount} of ${CARDS.length} cards.`}
        </>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          {(Object.keys(FACTORS) as Factor[]).map((f) => (
            <div key={f} className="rounded-xl border border-line p-3">
              <Slider label={FACTORS[f].name} value={w[f]} min={0} max={10} onChange={(v) => { setW((o) => ({ ...o, [f]: v })); setShowModel(false); }} />
              <div className="mt-1 text-xs text-ink-2">Evidence examined: {seen(f)} / {CARDS.filter((c) => c.factor === f).length}</div>
            </div>
          ))}
        </div>

        <svg viewBox="0 0 300 36" className="h-auto w-full" role="img" aria-label={`Weighting bar: luck ${w.luck}, William's skill ${w.skill}, Harold's mistakes ${w.harold}`}>
          <rect x={0} y={4} width={300} height={22} rx={6} className="fill-surface-2 stroke-line" />
          {(() => {
            let x = 0;
            return (Object.keys(FACTORS) as Factor[]).map((f) => {
              const width = total ? (300 * w[f]) / total : 0;
              const el = (
                <g key={f}>
                  <rect x={x} y={4} width={width} height={22} className={FACTORS[f].bar} />
                  {width > 40 ? <text x={x + width / 2} y={19} fontSize={10} fontWeight={800} textAnchor="middle" className="fill-surface">{Math.round((100 * w[f]) / total)}%</text> : null}
                </g>
              );
              x += width;
              return el;
            });
          })()}
        </svg>

        <div className="rounded-xl bg-brand-soft p-3 text-sm leading-relaxed text-ink">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Your judgement</div>
          <p className="mt-1">{judgement}</p>
          {unsupported ? <p className="mt-1 font-bold text-bad">Careful: you haven't opened any evidence for {FACTORS[top].name.toLowerCase()} yet. A judgement needs evidence.</p> : null}
        </div>

        <div>
          <div className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-2">Evidence cards — tap to examine</div>
          <div className="grid gap-2 sm:grid-cols-2">
            {CARDS.map((c, i) => {
              const on = !!open[i];
              return (
                <button key={c.title} type="button" aria-pressed={on} onClick={() => setOpen((o) => ({ ...o, [i]: !on }))} className={`min-h-[44px] rounded-xl border p-3 text-left text-sm transition ${on ? "border-brand bg-surface" : "border-line bg-surface-2 hover:border-brand"}`}>
                  <span className={`font-bold ${FACTORS[c.factor].tone}`}>{FACTORS[c.factor].name}:</span> <span className="font-bold text-ink">{c.title}</span>
                  {on ? (
                    <>
                      <span className="mt-1 block text-ink">{c.text}</span>
                      {c.link ? <span className="mt-1 block text-xs font-bold text-ink-2">🔗 Links to {FACTORS[c.link].name.toLowerCase()}</span> : null}
                    </>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        <button type="button" className="btn btn-primary" onClick={() => setShowModel(true)} disabled={openCount < 3}>
          Compare with a model answer
        </button>
        {openCount < 3 ? <p className="text-xs text-ink-2">Examine at least 3 evidence cards first.</p> : null}
        {showModel ? (
          <div className="rounded-xl border border-line bg-surface-2 p-3 text-sm leading-relaxed text-ink">
            <div className="font-bold">One strong model judgement (historians disagree!)</div>
            <p className="mt-1">
              Luck gave William his chance: Hardrada's invasion and the change of wind meant he landed unopposed while Harold was in the north. But luck alone did not win the battle. <strong>William's skill</strong> turned that chance into victory — his long preparation, papal support, mixed army and leadership on the day broke a shield wall that held for hours. Harold's decisions to rush south with a tired army made William's job easier. So the most important factor was William's skill, because without it the lucky timing would have been wasted — but the factors only worked together.
            </p>
            <p className="mt-2 text-ink-2">Another historian might put luck first: if Hardrada had invaded a month later, Harold's full army would probably have been waiting on the south coast. What would YOU need to argue to beat this model answer?</p>
          </div>
        ) : null}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  { id: "campaign-map", title: "1066 campaign map", blurb: "Scrub through 1066 and watch three armies race across England and the Channel.", Component: CampaignMap },
  { id: "why-william-won", title: "Why did William win?", blurb: "Examine the evidence, weigh luck, William's skill and Harold's mistakes, and build a judgement.", Component: WhyWilliamWon },
];
