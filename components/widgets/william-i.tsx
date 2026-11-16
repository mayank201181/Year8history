"use client";
// Explorables for "William I and the Norman Conquest".
// 1. Claim-o-meter — weigh the four 1066 claimants by blood, promise, election and power.
// 2. The 1066 campaign — step through Sept–Dec 1066 on a schematic map and a to-scale timeline.
import { useMemo, useState, type ReactNode } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Claim-o-meter
// ---------------------------------------------------------------------------
type Crit = "blood" | "promise" | "election" | "power";
type Who = "harold" | "william" | "hardrada" | "edgar";
type Moment = "jan" | "oct";
type View = "table" | "english" | "norman";

const CRITS: { id: Crit; label: string; question: string; fill: string; bg: string }[] = [
  { id: "blood", label: "Blood", question: "Royal family?", fill: "fill-bad", bg: "bg-bad" },
  { id: "promise", label: "Promise", question: "Named heir?", fill: "fill-accent", bg: "bg-accent" },
  { id: "election", label: "Election", question: "Chosen by the Witan?", fill: "fill-info", bg: "bg-info" },
  { id: "power", label: "Power", question: "Can he take and hold it?", fill: "fill-brand", bg: "bg-brand" },
];

const PEOPLE: { id: Who; name: string; short: string }[] = [
  { id: "harold", name: "Harold Godwinson", short: "Harold" },
  { id: "william", name: "William of Normandy", short: "William" },
  { id: "hardrada", name: "Harald Hardrada", short: "Hardrada" },
  { id: "edgar", name: "Edgar Ætheling", short: "Edgar" },
];

type Scores = Record<Crit, number>;

/** Rough 0–3 judgements based on the guide's comparison table (✗ = 0, weak = 1, ✓ = 2, ✓✓ = 3). */
function scoresFor(who: Who, moment: Moment, view: View): Scores | null {
  if (moment === "oct" && (who === "harold" || who === "hardrada")) return null; // killed in battle
  const base: Record<Who, Scores> = {
    harold: { blood: 0, promise: 2, election: 2, power: 3 },
    william: { blood: 1, promise: 2, election: 0, power: 2 },
    hardrada: { blood: 0, promise: 1, election: 0, power: 2 },
    edgar: { blood: 3, promise: 0, election: 0, power: 0 },
  };
  const s = { ...base[who] };
  if (view === "english") {
    if (who === "william") s.promise = 0;
  } else if (view === "norman") {
    if (who === "william") s.promise = 3;
    if (who === "harold") s.promise = 0;
  }
  if (moment === "oct") {
    if (who === "william") s.power = 3;
    if (who === "edgar") s.election = 1;
  }
  return s;
}

function evidence(who: Who, crit: Crit, moment: Moment, view: View): string {
  switch (who) {
    case "harold":
      if (moment === "oct") return "Killed at the Battle of Hastings on 14 October, with his brothers Gyrth and Leofwine.";
      return {
        blood: "Not descended from English kings — though his sister Edith was Edward's queen.",
        promise:
          view === "norman"
            ? "Norman writers call him an oath-breaker: in 1064 he swore on holy relics to support William."
            : "The Anglo-Saxon Chronicle and the Life of King Edward say the dying Edward entrusted the kingdom to him.",
        election: "Chosen by the Witan and crowned in Westminster Abbey on 6 January 1066.",
        power: "Earl of Wessex and the richest man after the king; beat the Welsh in 1063 — and he was on the spot.",
      }[crit];
    case "william":
      return {
        blood: "Only a weak family link: Edward's mother Emma was his great-aunt. Not descended from English kings.",
        promise:
          view === "english"
            ? "English sources do not mention a promise to William — that story comes from Norman writers."
            : view === "norman"
              ? "William of Poitiers (William's own chaplain) and the Bayeux Tapestry stress the 1051 promise and Harold's 1064 oath."
              : "Norman writers say Edward promised him the throne in 1051, and that Harold swore to support him in 1064.",
        election: moment === "oct" ? "Not yet accepted by the English leaders — they only submit to him at Berkhamsted later, before his coronation." : "No English support at all in January 1066.",
        power:
          moment === "oct"
            ? "Has just won at Hastings: his army is in England and no English army is left to face him."
            : "Duke of Normandy since 1035, hardened by years of war; he has a huge fleet built over the summer.",
      }[crit];
    case "hardrada":
      if (moment === "oct") return "Killed at the Battle of Stamford Bridge on 25 September, along with Tostig.";
      return {
        blood: "No English royal blood.",
        promise: "Claimed through an old deal between Harthacnut and Magnus of Norway that each would inherit the other's kingdom.",
        election: "No support from the Witan — though Harold's exiled brother Tostig backed him.",
        power: "King of Norway and a famous warrior; he invaded with about 300 ships.",
      }[crit];
    case "edgar":
      return {
        blood: "Grandson of King Edmund Ironside — the best blood claim of all four.",
        promise: "No evidence that Edward named him heir.",
        election:
          moment === "oct"
            ? "After Hastings some English leaders in London chose him as king — but he was never crowned."
            : "Passed over by the Witan in January 1066.",
        power: "Only about 14, with no army and few supporters.",
      }[crit];
  }
}

const VIEW_NOTE: Record<View, string> = {
  table: "Promise scores follow the guide's table: both Harold and William get credit.",
  english: "English sources view: Edward's deathbed wish counts for Harold; the promise to William is not mentioned.",
  norman: "Norman sources view: the 1051 promise and the 1064 oath make William's claim strong, and Harold an oath-breaker.",
};

function ClaimOMeter() {
  const [w, setW] = useState<Record<Crit, number>>({ blood: 3, promise: 3, election: 3, power: 3 });
  const [moment, setMoment] = useState<Moment>("jan");
  const [view, setView] = useState<View>("table");
  const [focus, setFocus] = useState<Who>("harold");

  const rows = useMemo(
    () =>
      PEOPLE.map((p) => {
        const s = scoresFor(p.id, moment, view);
        const parts = CRITS.map((c) => ({ crit: c, value: s ? w[c.id] * s[c.id] : 0 }));
        return { ...p, s, parts, total: parts.reduce((a, b) => a + b.value, 0) };
      }),
    [w, moment, view],
  );
  const wSum = CRITS.reduce((a, c) => a + w[c.id], 0);
  const max = Math.max(1, 3 * wSum);
  const alive = rows.filter((r) => r.s);
  const ranked = [...alive].sort((a, b) => b.total - a.total);
  const top = ranked[0];
  const tie = ranked.length > 1 && ranked[1].total === top.total;
  const topCrit = top ? [...top.parts].sort((a, b) => b.value - a.value)[0] : undefined;

  const W = 360;
  const rowH = 46;
  const barX = 96;
  const barW = 220;
  const H = 16 + rowH * rows.length;
  const aria = `Claim scores, ${moment === "jan" ? "January 1066" : "15 October 1066"}: ` +
    rows.map((r) => (r.s ? `${r.short} ${r.total} of ${max}` : `${r.short} killed`)).join(", ") + ".";

  const focusRow = rows.find((r) => r.id === focus)!;

  let caption: ReactNode;
  if (wSum === 0) {
    caption = <>All the weights are at zero, so nobody has a claim at all. Turn up the criteria you think mattered most in 1066.</>;
  } else if (tie) {
    caption = (
      <>
        With your weighting, <b>{ranked.filter((r) => r.total === top.total).map((r) => r.short).join(" and ")}</b> are tied on {top.total} out of {max}. A tie is
        exactly what a succession crisis looks like — when the tests disagree, someone has to decide, and in 1066 that meant the Witan or the sword.
      </>
    );
  } else {
    caption = (
      <>
        With your weighting, <b>{top.name}</b> leads with {top.total} out of {max}
        {topCrit && topCrit.value > 0 ? (
          <>
            , mostly thanks to <b>{topCrit.crit.label.toLowerCase()}</b>
          </>
        ) : null}
        .{" "}
        {moment === "jan"
          ? top.id === "harold"
            ? "That matches what the Witan actually did on 6 January 1066."
            : `But the Witan actually chose Harold. What did they value that your weighting doesn't?`
          : "By 15 October, Harold and Hardrada are dead: whoever has power can now force the other tests — William still had to be crowned to look lawful."}{" "}
        {VIEW_NOTE[view]}
      </>
    );
  }

  return (
    <WidgetFrame
      title="Claim-o-meter: who should be king in 1066?"
      tryThis={[
        "Set **Blood** to 5 and everything else to 0. Who wins — and why didn't the Witan crown him?",
        "Find a weighting that puts **William** on top in January. Which tests did you have to boost?",
        "Switch between **English** and **Norman** sources. How much of William's case depends on whose story you believe?",
        "Jump to **15 October 1066**. Which test matters most now?",
      ]}
      caption={
        <div className="space-y-2">
          <p>{caption}</p>
          <p className="text-xs text-ink-2">
            Scores (0–3 per test) are rough judgements based on the guide&apos;s comparison table — the weighting is <i>your</i> argument, not the answer.
            Historians disagree about how much each test mattered.
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Segmented<Moment>
            label="Moment in 1066"
            value={moment}
            onChange={setMoment}
            options={[
              { value: "jan", label: "6 Jan 1066" },
              { value: "oct", label: "15 Oct 1066" },
            ]}
          />
          <Segmented<View>
            label="Whose evidence about promises?"
            value={view}
            onChange={setView}
            options={[
              { value: "table", label: "Guide table" },
              { value: "english", label: "English sources" },
              { value: "norman", label: "Norman sources" },
            ]}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {CRITS.map((c) => (
            <Slider
              key={c.id}
              label={
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden className={`inline-block h-3 w-3 rounded-sm ${c.bg}`} />
                  {c.label} <span className="font-normal">— {c.question}</span>
                </span>
              }
              value={w[c.id]}
              min={0}
              max={5}
              onChange={(v) => setW((prev) => ({ ...prev, [c.id]: v }))}
              format={(v) => `×${v}`}
            />
          ))}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={aria}>
          {rows.map((r, i) => {
            const y = 8 + i * rowH;
            let x = barX;
            return (
              <g key={r.id} opacity={r.s ? 1 : 0.45}>
                <text x={4} y={y + 18} fontSize={13} fontWeight={700} className="fill-ink">
                  {r.short}
                </text>
                <text x={4} y={y + 33} fontSize={10} className="fill-ink-2">
                  {r.s ? (top && r.id === top.id && !tie ? "leading" : `#${ranked.indexOf(r) + 1}`) : "killed"}
                </text>
                <rect x={barX} y={y + 6} width={barW} height={26} rx={5} className="fill-surface-2 stroke-line" />
                {r.parts.map((p) => {
                  const pw = (p.value / max) * barW;
                  const rect = pw > 0 ? <rect key={p.crit.id} x={x} y={y + 6} width={pw} height={26} className={p.crit.fill} /> : null;
                  x += pw;
                  return rect;
                })}
                <text x={barX + barW + 6} y={y + 24} fontSize={13} fontWeight={800} className="fill-ink">
                  {r.s ? r.total : "—"}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="rounded-xl border border-line bg-surface p-3">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-bold text-ink-2">Evidence for each test</span>
            <Segmented<Who> label="Claimant to inspect" value={focus} onChange={setFocus} options={PEOPLE.map((p) => ({ value: p.id, label: p.short }))} />
          </div>
          <ul className="space-y-2 text-sm">
            {CRITS.map((c) => (
              <li key={c.id} className="flex gap-2">
                <span className="w-24 shrink-0 font-bold text-ink">
                  {c.label}{" "}
                  <span className="tabular-nums text-ink-2">{focusRow.s ? `${focusRow.s[c.id]}/3` : "—"}</span>
                </span>
                <span className="text-ink">{evidence(focus, c.id, moment, view)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. The 1066 campaign stepper
// ---------------------------------------------------------------------------
type RouteId = "hardrada" | "hardrada2" | "haroldN" | "william" | "haroldS" | "williamL";
type Side = "harold" | "william" | "hardrada";
type Follow = "all" | Side;

const ROUTES: Record<RouteId, { side: Side; points: [number, number][] }> = {
  hardrada: { side: "hardrada", points: [[352, 24], [322, 100], [296, 168], [266, 180], [242, 176], [226, 172]] },
  hardrada2: { side: "hardrada", points: [[226, 172], [252, 156]] },
  haroldN: { side: "harold", points: [[282, 316], [258, 250], [236, 190], [232, 160], [252, 156]] },
  william: { side: "william", points: [[318, 420], [292, 398], [262, 372], [286, 366]] },
  haroldS: { side: "harold", points: [[252, 156], [232, 160], [236, 190], [258, 250], [282, 316], [284, 340], [282, 358]] },
  williamL: { side: "william", points: [[282, 358], [322, 346], [302, 334], [258, 322], [234, 308], [252, 296], [282, 316]] },
};

const SIDE_STROKE: Record<Side, string> = { harold: "stroke-info", william: "stroke-bad", hardrada: "stroke-accent" };
const SIDE_FILL: Record<Side, string> = { harold: "fill-info", william: "fill-bad", hardrada: "fill-accent" };
const SIDE_BG: Record<Side, string> = { harold: "bg-info", william: "bg-bad", hardrada: "bg-accent" };
const SIDE_NAME: Record<Side, string> = { harold: "Harold", william: "William", hardrada: "Hardrada & Tostig" };

type PlaceId = "york" | "fulford" | "stamford" | "london" | "pevensey" | "hastings" | "battle" | "stvalery" | "berkhamsted" | "dover";
const PLACES: Record<PlaceId, { x: number; y: number; label: string; dx: number; dy: number; anchor: "start" | "end" | "middle" }> = {
  york: { x: 232, y: 160, label: "York", dx: -6, dy: -6, anchor: "end" },
  fulford: { x: 226, y: 172, label: "Fulford", dx: -6, dy: 12, anchor: "end" },
  stamford: { x: 252, y: 156, label: "Stamford Bridge", dx: 6, dy: -6, anchor: "start" },
  london: { x: 282, y: 316, label: "London", dx: 7, dy: -5, anchor: "start" },
  pevensey: { x: 262, y: 372, label: "Pevensey", dx: -6, dy: 4, anchor: "end" },
  hastings: { x: 286, y: 366, label: "Hastings", dx: 6, dy: 12, anchor: "start" },
  battle: { x: 282, y: 358, label: "", dx: 0, dy: 0, anchor: "middle" },
  stvalery: { x: 318, y: 420, label: "St-Valery", dx: -4, dy: -8, anchor: "end" },
  berkhamsted: { x: 252, y: 296, label: "Berkhamsted", dx: -6, dy: -4, anchor: "end" },
  dover: { x: 322, y: 346, label: "Dover", dx: 6, dy: 4, anchor: "start" },
};

/** Day index counted from 1 September 1066 (0) to 31 December (121). */
const dayIdx = (m: 9 | 10 | 11 | 12, d: number) => ({ 9: 0, 10: 30, 11: 61, 12: 91 })[m] + d - 1;
const TOTAL_DAYS = 122;

interface Step {
  when: string;
  title: string;
  text: string;
  day: number | null;
  range?: [number, number];
  routes: RouteId[];
  current: RouteId[];
  places: PlaceId[];
  battle?: boolean;
  miles: string;
}

const STEPS: Step[] = [
  {
    when: "Jan–Aug 1066",
    title: "Waiting for the invasions",
    text: "Edward the Confessor dies on 5 January; Harold is crowned on 6 January. All summer Harold guards the south coast with the fyrd and a fleet, while William gathers ships and knights in Normandy — and waits for a south wind.",
    day: null,
    routes: [],
    current: [],
    places: ["london", "stvalery"],
    miles: "—",
  },
  {
    when: "8 September",
    title: "The fyrd goes home",
    text: "After months on guard, the southern fyrd's supplies run out and Harold sends it home. William's fleet is still stuck in France; it moves along the coast to St-Valery on the Somme, still waiting for the wind.",
    day: dayIdx(9, 8),
    routes: [],
    current: [],
    places: ["london", "stvalery"],
    miles: "—",
  },
  {
    when: "20 September",
    title: "Battle of Fulford Gate",
    text: "Harald Hardrada and Tostig sail up the Humber with about 300 ships and beat the northern earls Edwin and Morcar at Fulford, near York. News of the invasion sends Harold hurrying north.",
    day: dayIdx(9, 20),
    routes: ["hardrada"],
    current: ["hardrada"],
    places: ["york", "fulford", "london", "stvalery"],
    battle: true,
    miles: "on the march",
  },
  {
    when: "25 September",
    title: "Battle of Stamford Bridge",
    text: "Harold marches about 185 miles north in roughly four or five days and takes the Vikings by surprise. Hardrada and Tostig are killed; the survivors need only about 24 ships to go home.",
    day: dayIdx(9, 25),
    routes: ["hardrada", "hardrada2", "haroldN"],
    current: ["haroldN", "hardrada2"],
    places: ["york", "fulford", "stamford", "london", "stvalery"],
    battle: true,
    miles: "≈ 185",
  },
  {
    when: "28 September",
    title: "William lands at Pevensey",
    text: "At last the wind changes. William's fleet crosses overnight on 27–28 September and lands unopposed at Pevensey. He builds a wooden castle at Hastings and raids the countryside — while Harold is far away in the north.",
    day: dayIdx(9, 28),
    routes: ["hardrada", "hardrada2", "haroldN", "william"],
    current: ["william"],
    places: ["york", "stamford", "london", "pevensey", "hastings", "stvalery"],
    miles: "≈ 185",
  },
  {
    when: "Early October",
    title: "Harold races south",
    text: "News of the landing reaches Harold in the north (exact dates are uncertain). He marches back to London, gathers what men he can, and sets out for Hastings without waiting for his full army.",
    day: null,
    range: [dayIdx(10, 1), dayIdx(10, 13)],
    routes: ["hardrada", "hardrada2", "haroldN", "william", "haroldS"],
    current: ["haroldS"],
    places: ["york", "stamford", "london", "pevensey", "hastings"],
    miles: "≈ 370–430",
  },
  {
    when: "14 October",
    title: "Battle of Hastings",
    text: "Harold's shield wall holds the ridge for hours against Norman archers and cavalry. Feigned retreats draw English soldiers off the hill. Late in the day Harold is killed, with his brothers Gyrth and Leofwine.",
    day: dayIdx(10, 14),
    routes: ["hardrada", "hardrada2", "haroldN", "william", "haroldS"],
    current: ["haroldS", "william"],
    places: ["york", "stamford", "london", "pevensey", "hastings"],
    battle: true,
    miles: "≈ 430",
  },
  {
    when: "25 December",
    title: "William crowned",
    text: "William moves through Kent to Dover, then circles round London instead of attacking it. The English leaders, including Edgar Ætheling, submit at Berkhamsted. William is crowned in Westminster Abbey on Christmas Day 1066.",
    day: dayIdx(12, 25),
    routes: ["hardrada", "hardrada2", "haroldN", "william", "haroldS", "williamL"],
    current: ["williamL"],
    places: ["york", "stamford", "london", "pevensey", "hastings", "dover", "berkhamsted"],
    miles: "≈ 430",
  },
];

const COAST =
  "M150,20 L230,20 L246,60 L258,100 L268,135 L284,152 L276,170 L262,178 L282,186 L292,214 L282,228 L318,236 L336,256 L330,282 L312,298 L300,306 L318,316 L334,332 L330,350 L300,362 L280,376 L250,382 L210,384 L170,388 L130,396 L90,412 L56,418 L70,398 L110,380 L140,356 L118,346 L100,326 L92,300 L110,280 L104,256 L120,240 L136,226 L148,196 L138,160 L150,120 L140,80 Z";
const FRANCE = "M0,440 L0,432 L60,436 L130,428 L200,426 L280,420 L340,410 L360,404 L360,440 Z";

const pts = (p: [number, number][]) => p.map(([x, y]) => `${x},${y}`).join(" ");

function CampaignStepper() {
  const [i, setI] = useState(0);
  const [follow, setFollow] = useState<Follow>("all");
  const step = STEPS[i];
  const stamford = dayIdx(9, 25);
  const sinceStamford = step.day !== null && step.day >= stamford ? step.day - stamford : null;

  const visible = (side: Side) => follow === "all" || follow === side;

  // Timeline geometry
  const tx0 = 34;
  const tx1 = 344;
  const tx = (d: number) => tx0 + (d / TOTAL_DAYS) * (tx1 - tx0);
  const months: { d: number; label: string }[] = [
    { d: 0, label: "Sep" },
    { d: 30, label: "Oct" },
    { d: 61, label: "Nov" },
    { d: 91, label: "Dec" },
  ];

  const mapAria =
    `Schematic map of England, not to scale, at ${step.when}: ${step.title}. ` +
    (step.routes.length ? `Routes shown: ${step.routes.map((r) => SIDE_NAME[ROUTES[r].side]).filter((v, k, a) => a.indexOf(v) === k).join(", ")}.` : "No armies have moved yet.");

  return (
    <WidgetFrame
      title="The 1066 campaign: two invasions, one king"
      tryThis={[
        "Before pressing Next on **25 September**, predict: where is William, and what is he waiting for?",
        "Follow **Harold** only. How far did his army march in under three weeks — and how might that affect 14 October?",
        "Use the timeline: how many days did Harold have between Stamford Bridge and Hastings?",
        "Avoid hindsight: on **8 September**, was sending the fyrd home a mistake? What did Harold know then?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <b>
              {step.when}: {step.title}.
            </b>{" "}
            {step.text}
          </p>
          <p className="text-xs text-ink-2">
            Map is schematic and not to scale; routes are simplified and distances are rough. Dates from the guide&apos;s timeline (Anglo-Saxon Chronicle and
            Norman accounts); the exact days of Harold&apos;s march south are not recorded.
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0} aria-label="Previous step">
            ← Prev
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={() => setI((v) => Math.min(STEPS.length - 1, v + 1))} disabled={i === STEPS.length - 1} aria-label="Next step">
            Next →
          </button>
          <span className="text-sm font-bold text-ink-2">
            Step {i + 1} of {STEPS.length}
          </span>
        </div>
        <Slider label="Jump to step" value={i} min={0} max={STEPS.length - 1} onChange={setI} format={(v) => STEPS[v].when} />

        <Segmented<Follow>
          label="Follow an army"
          value={follow}
          onChange={setFollow}
          options={[
            { value: "all", label: "Everyone" },
            { value: "harold", label: "Harold" },
            { value: "william", label: "William" },
            { value: "hardrada", label: "Hardrada" },
          ]}
        />

        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,14rem)]">
          <svg viewBox="0 0 360 440" className="h-auto w-full rounded-xl bg-info-soft" role="img" aria-label={mapAria}>
            <path d={COAST} className="fill-surface stroke-ink-2" strokeWidth={1.2} strokeLinejoin="round" />
            <path d={FRANCE} className="fill-surface stroke-ink-2" strokeWidth={1.2} />
            <text x={150} y={437} fontSize={11} className="fill-ink-2" fontWeight={700}>
              NORMANDY / FRANCE
            </text>
            <text x={186} y={120} fontSize={12} className="fill-ink-2" fontWeight={700} textAnchor="middle">
              ENGLAND
            </text>
            <text x={290} y={196} fontSize={10} className="fill-ink-2" fontStyle="italic">
              Humber
            </text>
            <text x={200} y={406} fontSize={10} className="fill-ink-2" fontStyle="italic">
              English Channel
            </text>
            <text x={350} y={14} fontSize={10} className="fill-ink-2" textAnchor="end">
              from Norway
            </text>
            <text x={6} y={14} fontSize={10} className="fill-ink-2">
              Schematic — not to scale
            </text>

            {step.routes.map((r) => {
              const route = ROUTES[r];
              const isCurrent = step.current.includes(r);
              const shown = visible(route.side);
              const last = route.points[route.points.length - 1];
              return (
                <g key={r} opacity={shown ? 1 : 0.12}>
                  <polyline
                    points={pts(route.points)}
                    fill="none"
                    className={SIDE_STROKE[route.side]}
                    strokeWidth={isCurrent ? 4 : 2.5}
                    strokeDasharray={isCurrent ? undefined : "6 4"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx={last[0]} cy={last[1]} r={isCurrent ? 5 : 3.5} className={SIDE_FILL[route.side]} />
                </g>
              );
            })}

            {step.places.map((p) => {
              const pl = PLACES[p];
              return (
                <g key={p}>
                  <circle cx={pl.x} cy={pl.y} r={3} className="fill-ink" />
                  {pl.label ? (
                    <text x={pl.x + pl.dx} y={pl.y + pl.dy} fontSize={11} textAnchor={pl.anchor} className="fill-ink" fontWeight={600}>
                      {pl.label}
                    </text>
                  ) : null}
                </g>
              );
            })}

            {step.battle ? (
              <g>
                {(() => {
                  const where = step.title.includes("Fulford") ? PLACES.fulford : step.title.includes("Stamford") ? PLACES.stamford : PLACES.battle;
                  return (
                    <>
                      <circle cx={where.x} cy={where.y} r={11} fill="none" className="stroke-bad" strokeWidth={2} />
                      <text x={where.x} y={where.y + 4} fontSize={12} textAnchor="middle" className="fill-bad" fontWeight={800}>
                        ⚔
                      </text>
                    </>
                  );
                })()}
              </g>
            ) : null}
          </svg>

          <div className="space-y-2">
            <Readout label="Date" value={step.when} tone="ink" />
            <Readout label="Days since Stamford Bridge" value={sinceStamford === null ? "—" : sinceStamford} />
            <Readout label="Harold's men marched (rough miles)" value={step.miles} tone="bad" />
            <ul className="space-y-1 pt-1 text-xs text-ink-2">
              {(["harold", "william", "hardrada"] as Side[]).map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span aria-hidden className={`inline-block h-1.5 w-5 rounded ${SIDE_BG[s]}`} />
                  {SIDE_NAME[s]}
                </li>
              ))}
              <li>Solid line = this step; dashed = earlier.</li>
            </ul>
          </div>
        </div>

        <svg viewBox="0 0 360 64" className="h-auto w-full" role="img" aria-label={`Timeline from September to December 1066, to scale. Current step: ${step.when}.`}>
          <text x={4} y={30} fontSize={9} className="fill-ink-2">
            Jan–
          </text>
          <text x={4} y={41} fontSize={9} className="fill-ink-2">
            Aug
          </text>
          <line x1={tx0} x2={tx1} y1={32} y2={32} className="stroke-ink-2" strokeWidth={1.5} />
          {months.map((m) => (
            <g key={m.label}>
              <line x1={tx(m.d)} x2={tx(m.d)} y1={26} y2={38} className="stroke-ink-2" />
              <text x={tx(m.d) + 3} y={52} fontSize={10} className="fill-ink-2">
                {m.label}
              </text>
            </g>
          ))}
          <line x1={tx1} x2={tx1} y1={26} y2={38} className="stroke-ink-2" />
          {step.range ? <rect x={tx(step.range[0])} y={26} width={tx(step.range[1]) - tx(step.range[0])} height={12} rx={3} className="fill-brand" opacity={0.35} /> : null}
          {STEPS.map((s, k) =>
            s.day !== null ? (
              <circle
                key={s.when}
                cx={tx(s.day)}
                cy={32}
                r={k === i ? 6 : 3.5}
                className={k === i ? "fill-brand stroke-surface" : k < i ? "fill-ink-2" : "fill-surface stroke-ink-2"}
                strokeWidth={k === i ? 2 : 1}
              />
            ) : null,
          )}
          {i === 0 ? <circle cx={18} cy={20} r={5} className="fill-brand" /> : null}
          <text x={tx1} y={14} fontSize={10} textAnchor="end" className="fill-ink" fontWeight={700}>
            {step.when}
          </text>
        </svg>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  { id: "claim-o-meter", title: "Claim-o-meter", blurb: "Who had the best claim to the throne in 1066? Weigh blood, promise, election and power.", Component: ClaimOMeter },
  { id: "campaign-1066", title: "The 1066 campaign", blurb: "Step through September to December 1066 and watch two invasions race for the crown.", Component: CampaignStepper },
];
