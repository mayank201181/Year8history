"use client";
import { useState } from "react";
import { WidgetFrame, Readout, Slider, type WidgetDef } from "./kit";

// Sensitive topic: these explorables are about conditions, chronology and
// remembrance. No scores, no game mechanics attached to suffering.

// ---------------------------------------------------------------------------
// 1. Conditions for the Khmer Rouge rise, 1953–1975
// ---------------------------------------------------------------------------

type FactorId = "war" | "bombing" | "coup" | "weak" | "outside" | "rural";

interface Factor {
  id: FactorId;
  label: string;
  /** Two short lines for the SVG node. */
  lines: [string, string];
  /** Node position in the 360×250 diagram. */
  x: number;
  y: number;
  what: string;
  whatIf: string;
}

const FACTORS: Factor[] = [
  {
    id: "war",
    label: "War next door",
    lines: ["War next", "door"],
    x: 70,
    y: 50,
    what: "War in Vietnam: first France's war against the Viet Minh (to 1954), then the Vietnam War. From the mid-1960s North Vietnamese bases and the Ho Chi Minh trail ran through eastern Cambodia, dragging the country into a war it could not control.",
    whatIf: "Without the war next door there would have been no bombing and probably no coup. Most historians see it as the essential background.",
  },
  {
    id: "bombing",
    label: "US bombing",
    lines: ["US", "bombing"],
    x: 180,
    y: 28,
    what: "Secret US bombing (March 1969 – August 1973) killed many civilians, destroyed villages and drove refugees into Phnom Penh. The Khmer Rouge used the destruction in their recruiting.",
    whatIf: "Historians disagree about how much difference the bombing made. Ben Kiernan argues it was a major recruiting tool for the Khmer Rouge; others put more weight on the 1970 coup and Sihanouk's call to arms.",
  },
  {
    id: "coup",
    label: "Coup & Sihanouk's switch",
    lines: ["Coup and", "Sihanouk"],
    x: 290,
    y: 50,
    what: "Lon Nol's coup (18 March 1970) removed the popular Sihanouk. From Beijing, Sihanouk allied with the Khmer Rouge, lending them his name and his peasant followers.",
    whatIf: "Without the coup, Sihanouk would not have backed the Khmer Rouge — many historians see this as the turning point that turned a small rebel group into a mass movement.",
  },
  {
    id: "weak",
    label: "Weak government",
    lines: ["Weak", "government"],
    x: 290,
    y: 200,
    what: "Lon Nol's Khmer Republic was corrupt and divided: officers claimed pay for 'phantom soldiers', and the army depended on US money and air power.",
    whatIf: "A stronger, trusted government might have held on longer — but it would still have faced a war it had not started.",
  },
  {
    id: "outside",
    label: "Outside support",
    lines: ["Outside", "support"],
    x: 180,
    y: 222,
    what: "North Vietnam trained the Khmer Rouge and did much of their fighting in 1970–72. China supplied weapons and hosted Sihanouk in Beijing.",
    whatIf: "Without North Vietnamese troops in 1970–72, the young Khmer Rouge army could probably not have survived Lon Nol's forces.",
  },
  {
    id: "rural",
    label: "Rural grievances",
    lines: ["Rural", "grievances"],
    x: 70,
    y: 200,
    what: "Most Cambodians were poor rice farmers, far from life in Phnom Penh. Anger at forced rice sales (the Samlaut uprising, 1967), debt and later the bombing gave the Khmer Rouge a message for the countryside.",
    whatIf: "Poverty alone did not create the Khmer Rouge — rural poverty was centuries old. It became dangerous once war made people desperate.",
  },
];

type Levels = Record<FactorId, number>;

interface Step {
  year: string;
  title: string;
  events: string[];
  levels: Levels;
  /** Plain-words size of the Khmer Rouge. */
  kr: string;
  krLevel: number;
  summary: string;
}

const STEPS: Step[] = [
  {
    year: "1953",
    title: "Independence",
    events: [
      "9 November: Cambodia wins independence from France under King Norodom Sihanouk.",
      "Saloth Sar (the future Pol Pot) returns from Paris in January and joins the communist underground.",
      "Next door, the French are still fighting the Viet Minh in Vietnam (until 1954).",
    ],
    levels: { war: 1, bombing: 0, coup: 0, weak: 0, outside: 1, rural: 1 },
    kr: "a tiny underground group",
    krLevel: 0,
    summary: "Sihanouk is popular, and after the Geneva Conference of 1954 Cambodia is at peace and neutral. The communists are a tiny group with some help from Vietnamese communists. Very few conditions favour them yet.",
  },
  {
    year: "1963",
    title: "Into the jungle",
    events: [
      "February: Saloth Sar becomes leader of the Cambodian communist party.",
      "Sihanouk's police hunt left-wingers, so Saloth Sar flees to the jungle.",
      "The war in Vietnam grows; Sihanouk tries to keep Cambodia neutral.",
    ],
    levels: { war: 1, bombing: 0, coup: 0, weak: 0, outside: 1, rural: 1 },
    kr: "a small group hiding in the forests",
    krLevel: 1,
    summary: "The party now has the leader who will take it to power — but leadership alone gets nowhere while Cambodia is stable.",
  },
  {
    year: "1967–68",
    title: "Trouble in the countryside",
    events: [
      "1967: the Samlaut uprising — peasants in Battambang rebel against forced rice sales; Lon Nol's army crushes it.",
      "North Vietnam uses bases in eastern Cambodia, supplied partly through the port of Sihanoukville.",
      "January 1968: the Khmer Rouge launch their armed struggle.",
    ],
    levels: { war: 2, bombing: 0, coup: 0, weak: 1, outside: 1, rural: 2 },
    kr: "small guerrilla bands in remote areas",
    krLevel: 1,
    summary: "Rural anger and the war next door are growing. The Khmer Rouge start fighting — but they are still weak.",
  },
  {
    year: "1969",
    title: "Secret bombing",
    events: [
      "18 March: the USA begins secretly bombing North Vietnamese bases inside Cambodia.",
      "The bombing is kept secret from the American public at first.",
    ],
    levels: { war: 3, bombing: 2, coup: 0, weak: 1, outside: 1, rural: 2 },
    kr: "still only a few thousand fighters (estimates vary)",
    krLevel: 1,
    summary: "The Vietnam War is now falling on Cambodian villages. Pressure is building, but Sihanouk is still in charge and the Khmer Rouge are still small.",
  },
  {
    year: "1970",
    title: "Coup and civil war",
    events: [
      "18 March: Lon Nol's coup removes Sihanouk, who allies with the Khmer Rouge from Beijing.",
      "April–June: US and South Vietnamese troops invade eastern Cambodia; North Vietnamese forces push deeper and fight Lon Nol's army.",
      "Bombing spreads across more of the country. Civil war begins.",
    ],
    levels: { war: 3, bombing: 2, coup: 3, weak: 2, outside: 3, rural: 3 },
    kr: "growing fast under Sihanouk's name",
    krLevel: 2,
    summary: "The big turning point: almost every pressure jumps at once. Sihanouk's call to arms and North Vietnamese troops turn a small rebel group into a serious army.",
  },
  {
    year: "1973",
    title: "The heaviest bombing",
    events: [
      "January: after the Paris Peace Accords, most North Vietnamese troops leave the fighting; the Khmer Rouge fight on largely alone.",
      "February–August: the heaviest US bombing of the war in Cambodia, until Congress stops it on 15 August.",
      "Phnom Penh fills with refugees; Lon Nol's army is riddled with corruption.",
    ],
    levels: { war: 2, bombing: 3, coup: 2, weak: 3, outside: 2, rural: 3 },
    kr: "tens of thousands of fighters controlling much of the countryside",
    krLevel: 3,
    summary: "The Khmer Rouge now control most of the countryside. The government survives mainly on US air power — and that ends in August.",
  },
  {
    year: "1975",
    title: "The fall of Phnom Penh",
    events: [
      "1 January: the Khmer Rouge launch their final offensive; within weeks they cut the Mekong supply route to Phnom Penh.",
      "1 April: Lon Nol flees abroad. 12 April: the US embassy is evacuated.",
      "17 April: the Khmer Rouge enter Phnom Penh. Within days the whole city is forced into the countryside.",
    ],
    levels: { war: 2, bombing: 0, coup: 2, weak: 3, outside: 2, rural: 3 },
    kr: "in power",
    krLevel: 3,
    summary: "The conditions built up over 1969–75 have done their work. What follows — 'Year Zero' and the deaths of around 1.5–2 million people — is why historians study how this happened.",
  },
];

const LEVEL_WORD = ["absent", "present", "strong", "severe"];
const CX = 180;
const CY = 125;

function nodeClass(level: number) {
  if (level <= 0) return "fill-surface-2 stroke-line";
  if (level === 1) return "fill-accent-soft stroke-accent";
  if (level === 2) return "fill-bad-soft stroke-bad";
  return "fill-brand-soft stroke-brand";
}

function ConditionsStepper() {
  const [i, setI] = useState(0);
  const [selected, setSelected] = useState<FactorId>("war");
  const [prediction, setPrediction] = useState<FactorId | "">("");
  const [feedback, setFeedback] = useState<string>("");
  const step = STEPS[i];
  const factor = FACTORS.find((f) => f.id === selected) ?? FACTORS[0];

  const go = (next: number) => {
    if (next < 0 || next >= STEPS.length) return;
    if (next === i + 1 && prediction) {
      const before = STEPS[i].levels;
      const after = STEPS[next].levels;
      const rises = FACTORS.map((f) => ({ f, d: after[f.id] - before[f.id] }));
      const max = Math.max(...rises.map((r) => r.d));
      const winners = rises.filter((r) => r.d === max && max > 0).map((r) => r.f);
      const guess = FACTORS.find((f) => f.id === prediction);
      if (!winners.length) setFeedback(`You predicted "${guess?.label}". In fact no pressure grew between ${STEPS[i].year} and ${STEPS[next].year}.`);
      else if (winners.some((w) => w.id === prediction))
        setFeedback(`Good prediction: "${guess?.label}" was ${winners.length > 1 ? "one of the pressures" : "the pressure"} that grew most by ${STEPS[next].year}.`);
      else
        setFeedback(
          `You predicted "${guess?.label}". The biggest rise by ${STEPS[next].year} was: ${winners.map((w) => w.label).join(", ")}. Read the events to see why.`,
        );
    } else setFeedback("");
    setPrediction("");
    setI(next);
  };

  const ariaLabel = `Factor diagram for ${step.year}: ${FACTORS.map((f) => `${f.label} ${LEVEL_WORD[step.levels[f.id]]}`).join("; ")}. Khmer Rouge: ${step.kr}.`;
  const total = FACTORS.reduce((s, f) => s + step.levels[f.id], 0);

  return (
    <WidgetFrame
      title="Conditions for the Khmer Rouge rise, 1953–1975"
      tryThis={[
        "Before each step, **predict** which pressure will grow most next, then press Next.",
        "Find the year when almost every pressure jumped at once. What event triggered it?",
        "Pick one factor and read its 'what if?'. Could the Khmer Rouge have won without it?",
        "In 1963 the Khmer Rouge already had Pol Pot as leader. Why weren't they close to power yet?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>{step.year} — {step.title}.</strong> {step.summary}
          </p>
          <p>
            <strong>{factor.label}</strong> ({LEVEL_WORD[step.levels[factor.id]]} in {step.year}): {factor.what}
          </p>
          <p className="text-ink-2">
            <strong>What if?</strong> {factor.whatIf}
          </p>
        </div>
      }
    >
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className="btn btn-secondary min-h-[44px]" onClick={() => go(i - 1)} disabled={i === 0} aria-label="Previous year">
          ← Back
        </button>
        <div className="flex-1 text-center">
          <div className="text-2xl font-extrabold tabular-nums text-ink">{step.year}</div>
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
            Step {i + 1} of {STEPS.length}
          </div>
        </div>
        <button type="button" className="btn btn-primary min-h-[44px]" onClick={() => go(i + 1)} disabled={i === STEPS.length - 1} aria-label="Next year">
          Next →
        </button>
      </div>

      {i < STEPS.length - 1 ? (
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <label htmlFor="kr-predict" className="font-semibold text-ink-2">
            Predict: which pressure grows most by {STEPS[i + 1].year}?
          </label>
          <select
            id="kr-predict"
            className="input min-h-[40px] max-w-full"
            value={prediction}
            onChange={(e) => setPrediction(e.target.value as FactorId | "")}
          >
            <option value="">— choose —</option>
            {FACTORS.map((f) => (
              <option key={f.id} value={f.id}>
                {f.label}
              </option>
            ))}
          </select>
        </div>
      ) : null}
      {feedback ? <p className="mt-2 rounded-xl bg-brand-soft p-2 text-sm text-ink" role="status">{feedback}</p> : null}

      <svg viewBox="0 0 360 250" className="mt-3 h-auto w-full" role="img" aria-label={ariaLabel}>
        {FACTORS.map((f) => {
          const lv = step.levels[f.id];
          return (
            <line
              key={`l-${f.id}`}
              x1={f.x}
              y1={f.y}
              x2={CX}
              y2={CY}
              className={lv ? "stroke-brand" : "stroke-line"}
              strokeWidth={lv ? 1 + lv * 2 : 1}
              strokeDasharray={lv ? undefined : "4 4"}
              opacity={lv ? 0.35 + lv * 0.2 : 1}
            />
          );
        })}
        <circle cx={CX} cy={CY} r={22 + step.krLevel * 6} className="fill-surface stroke-ink" strokeWidth={2} />
        <text x={CX} y={CY - 3} textAnchor="middle" fontSize={11} fontWeight={700} className="fill-ink">
          Khmer
        </text>
        <text x={CX} y={CY + 11} textAnchor="middle" fontSize={11} fontWeight={700} className="fill-ink">
          Rouge
        </text>
        {FACTORS.map((f) => {
          const lv = step.levels[f.id];
          const sel = f.id === selected;
          return (
            <g key={f.id}>
              <rect
                x={f.x - 44}
                y={f.y - 19}
                width={88}
                height={38}
                rx={8}
                className={nodeClass(lv)}
                strokeWidth={sel ? 3 : 1.5}
              />
              <text x={f.x} y={f.y - 3} textAnchor="middle" fontSize={10.5} fontWeight={700} className="fill-ink">
                {f.lines[0]}
              </text>
              <text x={f.x} y={f.y + 11} textAnchor="middle" fontSize={10.5} fontWeight={700} className="fill-ink">
                {f.lines[1]}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {FACTORS.map((f) => {
          const lv = step.levels[f.id];
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setSelected(f.id)}
              aria-pressed={f.id === selected}
              className={`min-h-[44px] rounded-xl border px-2 py-1.5 text-left text-sm transition ${f.id === selected ? "border-brand bg-brand-soft" : "border-line bg-surface"}`}
            >
              <span className="block font-bold text-ink">{f.label}</span>
              <span className="flex items-center gap-1" aria-label={`level ${lv} of 3, ${LEVEL_WORD[lv]}`}>
                {[1, 2, 3].map((n) => (
                  <span key={n} className={`inline-block h-2 w-5 rounded-full ${n <= lv ? "bg-brand" : "bg-surface-2"}`} />
                ))}
                <span className="ml-1 text-xs text-ink-2">{LEVEL_WORD[lv]}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <Readout label="Khmer Rouge" value={<span className="text-base">{step.kr}</span>} tone="ink" />
        <Readout label="Total pressure (0–18)" value={total} tone={total >= 12 ? "bad" : total >= 6 ? "brand" : "good"} />
      </div>

      <ul className="mt-3 space-y-1 text-sm text-ink">
        {step.events.map((e) => (
          <li key={e} className="flex gap-2">
            <span aria-hidden className="text-brand">•</span>
            <span>{e}</span>
          </li>
        ))}
      </ul>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Cambodia timeline & map, 1863–2022
// ---------------------------------------------------------------------------

type Overlay = "french" | "trail" | "bombing" | "pp" | "coup" | "evacuation" | "s21" | "invasion" | "retreat" | "anlong" | "eccc" | "peace";

interface TimelineEvent {
  year: number;
  date: string;
  title: string;
  text: string;
  /** Who held power in Phnom Penh after this event. */
  power: string;
  overlays: Overlay[];
  remember?: string;
}

const EVENTS: TimelineEvent[] = [
  {
    year: 1863,
    date: "1863",
    title: "A French protectorate",
    text: "France makes Cambodia a 'protectorate'. The Cambodian king stays on the throne, but French officials hold real power for 90 years.",
    power: "France (with a Cambodian king)",
    overlays: ["french"],
  },
  {
    year: 1953,
    date: "9 November 1953",
    title: "Independence",
    text: "King Norodom Sihanouk wins independence from France. He dominates Cambodian politics for the next 17 years and tries to keep Cambodia neutral as war grows in Vietnam.",
    power: "Norodom Sihanouk",
    overlays: ["pp"],
  },
  {
    year: 1969,
    date: "18 March 1969",
    title: "The war spills over",
    text: "North Vietnam's supply route, the Ho Chi Minh trail, runs through eastern Cambodia. The USA begins secretly bombing its bases there; after 1970 the bombing spreads across much of the country, until August 1973.",
    power: "Norodom Sihanouk",
    overlays: ["trail", "bombing"],
  },
  {
    year: 1970,
    date: "18 March 1970",
    title: "Lon Nol's coup",
    text: "While Sihanouk is abroad, General Lon Nol seizes power and creates the US-backed Khmer Republic. Sihanouk allies with the Khmer Rouge from Beijing. Civil war follows.",
    power: "Lon Nol (Khmer Republic)",
    overlays: ["coup", "trail", "bombing"],
  },
  {
    year: 1975,
    date: "17 April 1975",
    title: "The Khmer Rouge take Phnom Penh",
    text: "The Khmer Rouge capture the capital. Within days its people — about two million, including the sick and the elderly — are forced out into the countryside.",
    power: "The Khmer Rouge (Democratic Kampuchea)",
    overlays: ["evacuation"],
  },
  {
    year: 1976,
    date: "1976–1978",
    title: "Democratic Kampuchea",
    text: "Money, markets, schools and religion are abolished. People are forced to work on collective farms. At S-21 prison in Phnom Penh, thousands are imprisoned and killed. Historians estimate that around 1.5–2 million people — about a quarter of the population — died from execution, starvation, overwork and disease.",
    power: "The Khmer Rouge (Democratic Kampuchea)",
    overlays: ["s21"],
    remember: "Each of these people had a name, a family and a life. Memorials and survivors' testimony help us remember them as people, not numbers.",
  },
  {
    year: 1979,
    date: "25 Dec 1978 – 7 Jan 1979",
    title: "Vietnam invades",
    text: "After Khmer Rouge raids across the border, Vietnam invades. Vietnamese forces capture Phnom Penh on 7 January 1979. The Khmer Rouge retreat to the jungle near the Thai border and fight on through the 1980s.",
    power: "Vietnamese-backed People's Republic of Kampuchea",
    overlays: ["invasion", "retreat"],
    remember: "Vietnamese troops found S-21. In 1980 it opened as the Tuol Sleng Genocide Museum.",
  },
  {
    year: 1991,
    date: "1991–1993",
    title: "Peace agreements and elections",
    text: "The Paris Peace Agreements (23 October 1991) lead to UN-run elections in May 1993. The Khmer Rouge refuse to take part and keep fighting from their border bases.",
    power: "An elected government (from 1993)",
    overlays: ["peace", "retreat"],
  },
  {
    year: 1998,
    date: "15 April 1998",
    title: "Pol Pot dies",
    text: "Pol Pot dies at Anlong Veng, the last Khmer Rouge stronghold near the Thai border, never having faced trial. By 1999 the movement has collapsed.",
    power: "An elected government",
    overlays: ["anlong"],
  },
  {
    year: 2010,
    date: "2006–2010",
    title: "A court for justice",
    text: "The UN-backed Extraordinary Chambers in the Courts of Cambodia (ECCC) begin work near Phnom Penh in 2006. In July 2010 Duch, the head of S-21, becomes the first person convicted. Survivors such as Vann Nath and Chum Mey give evidence.",
    power: "An elected government",
    overlays: ["eccc"],
    remember: "Thousands of survivors took part in the trials as 'civil parties', so their voices became part of the court's record.",
  },
  {
    year: 2018,
    date: "16 Nov 2018 – Sept 2022",
    title: "Genocide verdict",
    text: "The ECCC convicts Nuon Chea and Khieu Samphan of genocide, among other crimes, and sentences them to life imprisonment. In September 2022 the court's final appeal judgment upholds Khieu Samphan's conviction, and the court's trials come to an end.",
    power: "An elected government",
    overlays: ["eccc"],
    remember: "Since 2018 Cambodia has marked 20 May as a National Day of Remembrance.",
  },
];

// Same schematic outline as the bonus map (lib/extras/pol-pot.ts).
const CAMBODIA = "140,95 255,78 360,85 378,150 372,215 340,250 300,262 232,288 195,276 168,262 140,225 122,180 120,130";
const PP = { x: 276, y: 214 };

function Arrow({ x1, y1, x2, y2, className }: { x1: number; y1: number; x2: number; y2: number; className: string }) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = 8;
  const p1 = `${x2},${y2}`;
  const p2 = `${(x2 - h * Math.cos(a - 0.45)).toFixed(1)},${(y2 - h * Math.sin(a - 0.45)).toFixed(1)}`;
  const p3 = `${(x2 - h * Math.cos(a + 0.45)).toFixed(1)},${(y2 - h * Math.sin(a + 0.45)).toFixed(1)}`;
  return (
    <g className={className}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={2.5} />
      <polygon points={`${p1} ${p2} ${p3}`} strokeWidth={1} />
    </g>
  );
}

function TimelineMap() {
  const [idx, setIdx] = useState(0);
  const ev = EVENTS[idx];
  const has = (o: Overlay) => ev.overlays.includes(o);
  const yrs = ev.year - 1975;
  const sinceSeizure = yrs < 0 ? "—" : yrs === 0 ? "that year" : `${yrs} year${yrs === 1 ? "" : "s"}`;

  const aria = (() => {
    const parts = [`Schematic map of Cambodia, ${ev.date}: ${ev.title}.`];
    if (has("trail")) parts.push("The Ho Chi Minh trail runs through eastern Cambodia.");
    if (has("bombing")) parts.push("Eastern Cambodia is shaded where US bombing began.");
    if (has("evacuation")) parts.push("Arrows point out from Phnom Penh to the countryside.");
    if (has("invasion")) parts.push("Arrows point from Vietnam towards Phnom Penh.");
    if (has("retreat")) parts.push("An arrow shows the Khmer Rouge retreating north-west to the Thai border.");
    if (has("anlong")) parts.push("Anlong Veng, near the Thai border, is marked.");
    if (has("s21")) parts.push("S-21 prison in Phnom Penh and the killing field at Choeung Ek are marked.");
    if (has("eccc")) parts.push("The court near Phnom Penh is marked.");
    return parts.join(" ");
  })();

  return (
    <WidgetFrame
      title="Cambodia: timeline and map, 1863–2022"
      tryThis={[
        "Find the moment when the Vietnam War first reaches into Cambodia on the map.",
        "Step from 1975 to 1979. In which direction did the Khmer Rouge retreat, and why there?",
        "How many years passed between the fall of the regime (1979) and the first conviction (2010)? Why might justice take so long?",
        "Use the 'Who held Phnom Penh' box: how many times did power change hands between 1953 and 1979?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>{ev.date}: {ev.title}.</strong> {ev.text}
          </p>
          {ev.remember ? (
            <p className="rounded-lg border border-line bg-surface p-2">
              <span aria-hidden>🕯️ </span>
              {ev.remember}
            </p>
          ) : null}
        </div>
      }
    >
      <Slider
        label="Move through time"
        value={idx}
        min={0}
        max={EVENTS.length - 1}
        onChange={setIdx}
        format={(v) => EVENTS[v].date}
      />
      <div className="mt-2 flex gap-2">
        <button type="button" className="btn btn-secondary min-h-[44px] flex-1" onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0}>
          ← Earlier
        </button>
        <button type="button" className="btn btn-secondary min-h-[44px] flex-1" onClick={() => setIdx(Math.min(EVENTS.length - 1, idx + 1))} disabled={idx === EVENTS.length - 1}>
          Later →
        </button>
      </div>

      <div className="mt-3 overflow-x-auto">
        <ol className="flex min-w-max gap-1" aria-label="Timeline events">
          {EVENTS.map((e, k) => (
            <li key={e.date}>
              <button
                type="button"
                onClick={() => setIdx(k)}
                aria-current={k === idx ? "step" : undefined}
                className={`min-h-[40px] rounded-lg px-2 text-xs font-bold tabular-nums ${k === idx ? "bg-brand text-brand-ink" : "bg-surface-2 text-ink-2"}`}
              >
                {e.year}
              </button>
            </li>
          ))}
        </ol>
      </div>

      <svg viewBox="0 0 480 340" className="mt-3 h-auto w-full" role="img" aria-label={aria}>
        <polygon points="0,248 122,212 140,225 168,262 195,276 232,288 252,340 0,340" className="fill-info-soft" />
        <text x={70} y={305} fontSize={12} fontStyle="italic" className="fill-ink-2">
          Gulf of Thailand
        </text>
        <polygon points={CAMBODIA} className={has("french") ? "fill-info-soft stroke-ink" : "fill-accent-soft stroke-ink"} strokeWidth={2} />
        {has("bombing") ? (
          <polygon points="300,84 360,85 378,150 372,215 345,246 318,200 300,130" className="fill-bad-soft stroke-bad" strokeWidth={1} strokeDasharray="4 3" opacity={0.9} />
        ) : null}
        <ellipse cx={210} cy={165} rx={34} ry={11} transform="rotate(35 210 165)" className="fill-info-soft stroke-ink-2" strokeWidth={1} />
        <polyline points="335,0 330,40 322,85 318,115 306,160 276,214 300,250 330,300 345,340" fill="none" className="stroke-info" strokeWidth={2.5} />
        <text x={55} y={120} fontSize={15} fontWeight={700} className="fill-ink">
          THAILAND
        </text>
        <text x={292} y={36} fontSize={15} fontWeight={700} className="fill-ink">
          LAOS
        </text>
        <text x={402} y={200} fontSize={15} fontWeight={700} className="fill-ink">
          VIETNAM
        </text>
        <text x={180} y={262} fontSize={15} fontWeight={700} className="fill-ink">
          CAMBODIA
        </text>
        {has("french") ? (
          <text x={150} y={118} fontSize={13} fontWeight={700} className="fill-info">
            French protectorate
          </text>
        ) : null}
        {has("trail") ? (
          <g>
            <polyline points="398,0 372,40 364,82 370,125 366,175 362,215 372,250" fill="none" className="stroke-brand" strokeWidth={2.5} strokeDasharray="6 4" />
            <text x={386} y={110} fontSize={11.5} className="fill-brand">
              Ho Chi Minh
            </text>
            <text x={386} y={122} fontSize={11.5} className="fill-brand">
              trail
            </text>
          </g>
        ) : null}
        {has("bombing") ? (
          <text x={12} y={332} fontSize={11.5} fontWeight={700} className="fill-bad">
            Shaded: where US bombing began
          </text>
        ) : null}
        {has("evacuation")
          ? [
              [190, 195],
              [230, 130],
              [300, 140],
              [285, 258],
              [160, 240],
            ].map(([x, y]) => (
              <Arrow key={`e${x}`} x1={PP.x + (x - PP.x) * 0.18} y1={PP.y + (y - PP.y) * 0.18} x2={x} y2={y} className="fill-bad stroke-bad" />
            ))
          : null}
        {has("invasion") ? (
          <g>
            <Arrow x1={445} y1={205} x2={PP.x + 12} y2={PP.y - 2} className="fill-info stroke-info" />
            <Arrow x1={440} y1={240} x2={PP.x + 10} y2={PP.y + 6} className="fill-info stroke-info" />
          </g>
        ) : null}
        {has("retreat") ? (
          <g>
            <Arrow x1={PP.x - 12} y1={PP.y - 10} x2={150} y2={112} className="fill-brand stroke-brand" />
            <text x={128} y={98} fontSize={11.5} fontWeight={700} className="fill-brand">
              Khmer Rouge border bases
            </text>
          </g>
        ) : null}
        {has("peace") ? (
          <text x={290} y={182} fontSize={11.5} fontWeight={700} className="fill-good">
            UN-run elections 1993
          </text>
        ) : null}
        {has("s21") ? (
          <g>
            <circle cx={PP.x - 6} cy={PP.y + 16} r={4} className="fill-ink" />
            <text x={PP.x - 14} y={PP.y + 30} fontSize={11.5} textAnchor="end" className="fill-ink">
              Choeung Ek
            </text>
            <text x={PP.x - 10} y={PP.y - 8} fontSize={11.5} textAnchor="end" className="fill-ink">
              S-21 (Tuol Sleng)
            </text>
          </g>
        ) : null}
        {has("anlong") ? (
          <g>
            <circle cx={215} cy={96} r={5} className="fill-ink" />
            <text x={221} y={110} fontSize={11.5} fontWeight={700} className="fill-ink">
              Anlong Veng
            </text>
          </g>
        ) : null}
        {has("eccc") ? (
          <text x={PP.x - 10} y={PP.y - 8} fontSize={11.5} fontWeight={700} textAnchor="end" className="fill-good">
            ECCC court
          </text>
        ) : null}
        <circle cx={PP.x} cy={PP.y} r={has("pp") || has("coup") ? 8 : 5} className={has("coup") ? "fill-brand stroke-ink" : "fill-surface stroke-ink"} strokeWidth={1.5} />
        <text x={PP.x + 16} y={PP.y - 10} fontSize={12} fontWeight={700} className="fill-ink">
          Phnom Penh
        </text>
        <text x={470} y={332} fontSize={11.5} textAnchor="end" className="fill-ink-2">
          Schematic, not to scale
        </text>
      </svg>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        <Readout label="Date" value={<span className="text-base">{ev.date}</span>} tone="ink" />
        <Readout label="Who held Phnom Penh" value={<span className="text-base">{ev.power}</span>} tone="brand" />
        <Readout label="Since 17 April 1975" value={sinceSeizure} tone="ink" />
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "kr-conditions",
    title: "Conditions for the Khmer Rouge rise",
    blurb: "Step through 1953–1975 and watch the pressures build that opened the door to the Khmer Rouge.",
    Component: ConditionsStepper,
  },
  {
    id: "cambodia-timeline-map",
    title: "Cambodia: timeline and map",
    blurb: "Move from French rule to the genocide verdicts and see where events happened.",
    Component: TimelineMap,
  },
];
