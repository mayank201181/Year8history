"use client";
import { useMemo, useState } from "react";
import { WidgetFrame, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Magna Carta clause explorer
// ---------------------------------------------------------------------------

type Survival = "kept" | "dropped" | "moved";

interface Grievance {
  id: string;
  label: string;
  emoji: string;
  clause: string;
  /** What John had been doing. */
  grievance: string;
  /** The promise in plain English. */
  plain: string;
  survival: Survival;
  survivalNote: string;
  legacy: string;
  /** Who the promise mainly protected. */
  who: string;
}

const GRIEVANCES: Grievance[] = [
  {
    id: "scutage",
    label: "Taxes for war (scutage)",
    emoji: "🛡️",
    clause: "12",
    grievance: "John charged scutage 11 times in his reign — far more often than his father or brother — and in 1214 asked a record 3 marks per knight's fee to pay for his failed war in France.",
    plain: "The king may not take scutage or an 'aid' without the common counsel (agreement) of the kingdom — except to ransom the king, knight his eldest son, or marry his eldest daughter once.",
    survival: "dropped",
    survivalNote: "Dropped in 1216 and never restored. Kings needed money too badly to accept it — yet the 1225 reissue was itself granted in return for a tax agreed by the great council.",
    legacy: "The idea that taxes need the consent of the people who pay them grew into Parliament's control of taxation, and later the American cry of 'no taxation without representation'.",
    who: "Barons and knights who owed military service.",
  },
  {
    id: "reliefs",
    label: "Inheritance charges (reliefs)",
    emoji: "🏰",
    clause: "2",
    grievance: "Heirs had to pay a 'relief' to inherit, and John set the price as high as he liked: in 1205 Nicholas de Stuteville was charged 10,000 marks for his inheritance.",
    plain: "The heir of an earl or baron pays at most £100; the heir of a knight at most 100 shillings for a knight's fee.",
    survival: "kept",
    survivalNote: "Kept in the 1225 reissue: a fixed scale replaced the king's whim.",
    legacy: "An early example of the law, not the ruler's mood, deciding what a subject owes.",
    who: "Barons, knights and their heirs.",
  },
  {
    id: "widows",
    label: "Widows forced to remarry",
    emoji: "💍",
    clause: "8",
    grievance: "John sold rich widows and heiresses in marriage to the highest bidder. In 1214 Geoffrey de Mandeville offered 20,000 marks to marry Isabella of Gloucester, John's own former wife.",
    plain: "No widow shall be forced to marry while she wishes to live without a husband (though she must not marry without the king's consent).",
    survival: "kept",
    survivalNote: "Kept in the 1225 reissue.",
    legacy: "A limited protection for women in 1215 — but a sign that the charter dealt with real family hardships, not just abstract rights.",
    who: "Widows of landholding families.",
  },
  {
    id: "justice",
    label: "Selling justice",
    emoji: "⚖️",
    clause: "40",
    grievance: "People offered John money to have their cases heard quickly — or decided in their favour. Justice went to the highest bidder.",
    plain: "“To no one will we sell, to no one deny or delay right or justice.”",
    survival: "kept",
    survivalNote: "Kept: merged with clause 39 into chapter 29 of the 1225 charter — and still law in England and Wales today.",
    legacy: "The principle of equal access to justice and the rule of law: courts must not be for sale.",
    who: "In principle, everyone who came to the king's courts.",
  },
  {
    id: "prison",
    label: "Prison without trial",
    emoji: "⛓️",
    clause: "39",
    grievance: "John punished barons who displeased him without any trial. In 1210 Matilda de Braose and her eldest son died of starvation in his prison.",
    plain: "No free man shall be arrested, imprisoned, stripped of his land, outlawed or exiled except by the lawful judgement of his equals or by the law of the land.",
    survival: "kept",
    survivalNote: "Kept: merged with clause 40 into chapter 29 of the 1225 charter — still law today.",
    legacy: "Read by later lawyers as the root of due process and fair trial: the Habeas Corpus Act (1679), the 'due process' of the US Bill of Rights (1791) and Article 9 of the Universal Declaration of Human Rights (1948).",
    who: "'Free men' only — in 1215 most peasants were unfree villeins, so it did not cover them.",
  },
  {
    id: "hostages",
    label: "Hostages",
    emoji: "🧒",
    clause: "49",
    grievance: "John demanded barons' sons as hostages for their fathers' loyalty. Matilda de Braose refused to hand hers over in 1208 — and her family was destroyed.",
    plain: "The king will at once return all hostages and charters handed over to him as security for peace or loyal service.",
    survival: "dropped",
    survivalNote: "Dropped: it dealt with the 1215 crisis itself, so it had no place in later reissues.",
    legacy: "Little direct legacy — a reminder that Magna Carta was first a peace treaty for one particular quarrel.",
    who: "The barons whose families were held.",
  },
  {
    id: "forest",
    label: "Forest law",
    emoji: "🌲",
    clause: "47–48",
    grievance: "Royal 'forests' covered huge areas where the king's hunting came first. Forest officials fined people heavily for grazing animals, cutting wood or hunting.",
    plain: "Land made into forest in John's reign will be taken out of forest law, and the 'evil customs' of forests will be investigated by 12 knights in every county.",
    survival: "moved",
    survivalNote: "Moved: in 1217 the forest clauses were taken out and expanded into a separate Charter of the Forest, reissued with Magna Carta in 1225.",
    legacy: "The Charter of the Forest protected free men's rights to graze pigs and gather wood — practical rights for ordinary people. It stayed in force until 1971.",
    who: "Free people living in or near royal forests.",
  },
  {
    id: "security",
    label: "A king who breaks promises",
    emoji: "🔑",
    clause: "61",
    grievance: "The barons did not trust John to keep his word. He had broken promises before.",
    plain: "A council of 25 barons will enforce the charter. If the king breaks it, they may seize his castles, lands and possessions until he puts things right.",
    survival: "dropped",
    survivalNote: "Dropped in 1216. No king could accept his own subjects having a legal right to make war on him.",
    legacy: "It failed — John got the Pope to annul the charter within ten weeks — but it raised a huge question: who can force a ruler to obey the law?",
    who: "The rebel barons.",
  },
];

const SURVIVAL_LABEL: Record<Survival, string> = {
  kept: "Kept in 1225",
  dropped: "Dropped",
  moved: "Moved to the Charter of the Forest",
};

function ClauseExplorer() {
  const [selected, setSelected] = useState<string>(GRIEVANCES[0].id);
  const [guesses, setGuesses] = useState<Record<string, Survival | "skip">>({});
  const g = GRIEVANCES.find((x) => x.id === selected) ?? GRIEVANCES[0];
  const guess = guesses[g.id];
  const revealed = guess !== undefined;

  const scored = GRIEVANCES.filter((x) => guesses[x.id] && guesses[x.id] !== "skip");
  const right = scored.filter((x) => guesses[x.id] === x.survival).length;
  const revealedCount = GRIEVANCES.filter((x) => guesses[x.id] !== undefined).length;
  const allRevealed = revealedCount === GRIEVANCES.length;
  const counts = { kept: 0, dropped: 0, moved: 0 };
  for (const x of GRIEVANCES) if (guesses[x.id] !== undefined) counts[x.survival]++;

  const tileClass = (x: Grievance) => {
    if (guesses[x.id] === undefined) return "fill-surface-2 stroke-line";
    return x.survival === "kept" ? "fill-good-soft stroke-good" : x.survival === "dropped" ? "fill-bad-soft stroke-bad" : "fill-accent-soft stroke-accent";
  };

  const ariaSummary = `Survival map: ${revealedCount} of ${GRIEVANCES.length} clauses revealed. ${GRIEVANCES.filter((x) => guesses[x.id] !== undefined)
    .map((x) => `Clause ${x.clause} ${SURVIVAL_LABEL[x.survival].toLowerCase()}`)
    .join("; ")}`;

  return (
    <WidgetFrame
      title="Magna Carta clause explorer"
      tryThis={[
        "Before each reveal, predict: did this promise survive into Henry III's 1225 reissue?",
        "Reveal all eight. What do the **dropped** clauses have in common?",
        "Which clause protected the *most* people in 1215 — and who did clause 39 leave out?",
        "Pick the clause with the biggest legacy today and explain why it outlived the others.",
      ]}
      caption={
        allRevealed ? (
          <p>
            <strong>The pattern:</strong> clauses that solved the 1215 emergency — hostages, the 25 barons, John's taxes for his war — were dropped as soon as John was dead. Clauses that stated a general principle (justice not for sale, no punishment without the law) were kept, because a boy king's regents wanted the barons' loyalty and these promises cost little. Those general principles are what made Magna Carta famous centuries later.
          </p>
        ) : revealed ? (
          <p>
            <strong>Clause {g.clause}:</strong> {g.survivalNote}
          </p>
        ) : (
          <p>
            Pick a grievance the barons had against John, then predict what happened to the promise that answered it. Magna Carta was reissued in 1216, 1217 and 1225 — but not every clause made it.
          </p>
        )
      }
    >
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {GRIEVANCES.map((x) => (
          <button
            key={x.id}
            type="button"
            onClick={() => setSelected(x.id)}
            aria-pressed={x.id === selected}
            className={`min-h-[44px] rounded-xl border px-2 py-2 text-left text-sm font-bold transition ${x.id === selected ? "border-brand bg-brand-soft text-ink" : "border-line bg-surface text-ink-2 hover:text-ink"}`}
          >
            <span aria-hidden className="mr-1">{x.emoji}</span>
            {x.label}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-line bg-surface p-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-brand px-2 py-1 text-xs font-extrabold text-brand-ink">Clause {g.clause}</span>
          <span className="text-sm font-bold text-ink">{g.label}</span>
        </div>
        <p className="mt-2 text-sm text-ink">
          <strong>What John did:</strong> {g.grievance}
        </p>
        <p className="mt-2 text-sm text-ink">
          <strong>What Magna Carta promised:</strong> {g.plain}
        </p>
        <p className="mt-2 text-sm text-ink-2">
          <strong>Who it protected:</strong> {g.who}
        </p>

        {!revealed ? (
          <div className="mt-3">
            <p className="text-sm font-bold text-ink">Predict: what happened to this promise by the 1225 reissue?</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["kept", "dropped", "moved"] as const).map((s) => (
                <button key={s} type="button" className="btn btn-secondary btn-sm" onClick={() => setGuesses({ ...guesses, [g.id]: s })}>
                  {s === "kept" ? "Kept" : s === "dropped" ? "Dropped" : "Moved to another charter"}
                </button>
              ))}
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => setGuesses({ ...guesses, [g.id]: "skip" })}>
                Just show me
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-3 space-y-2">
            {guess !== "skip" ? (
              <p className={`rounded-lg px-3 py-2 text-sm font-bold ${guess === g.survival ? "bg-good-soft text-good" : "bg-bad-soft text-bad"}`}>
                {guess === g.survival ? "Your prediction was right." : `Not quite — you said "${guess}".`}
              </p>
            ) : null}
            <p className="text-sm text-ink">
              <strong>{SURVIVAL_LABEL[g.survival]}.</strong> {g.survivalNote}
            </p>
            <p className="text-sm text-ink">
              <strong>Later legacy:</strong> {g.legacy}
            </p>
          </div>
        )}
      </div>

      <div className="mt-4">
        <svg viewBox="0 0 360 86" className="h-auto w-full" role="img" aria-label={ariaSummary}>
          {GRIEVANCES.map((x, i) => (
            <g key={x.id}>
              <rect x={6 + i * 44} y={8} width={40} height={40} rx={8} className={tileClass(x)} strokeWidth={2} />
              <text x={26 + i * 44} y={33} textAnchor="middle" fontSize={11} fontWeight={700} className="fill-ink">
                {x.clause}
              </text>
            </g>
          ))}
          <text x={6} y={66} fontSize={10} className="fill-good">■ kept</text>
          <text x={56} y={66} fontSize={10} className="fill-bad">■ dropped</text>
          <text x={124} y={66} fontSize={10} className="fill-accent">■ moved (Charter of the Forest)</text>
          <text x={6} y={80} fontSize={10} className="fill-ink-2">Grey = not yet revealed. Numbers are 1215 clause numbers.</text>
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <Readout label="Kept" value={counts.kept} tone="good" />
        <Readout label="Dropped" value={counts.dropped} tone="bad" />
        <Readout label="Predictions right" value={`${right}/${scored.length}`} tone="brand" />
      </div>
      {revealedCount > 0 ? (
        <div className="mt-3">
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => setGuesses({})}>
            Reset predictions
          </button>
        </div>
      ) : null}
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Rebellion pressure gauge, 1199–1215
// ---------------------------------------------------------------------------

type Group = "b" | "c" | "f";
const GROUP_NAME: Record<Group, string> = { b: "Barons", c: "Church", f: "France" };

interface Step {
  date: string;
  title: string;
  what: string;
  /** Change in pressure on a 0–10 judgement scale. */
  d: Record<Group, number>;
  why: string;
}

const STEPS: Step[] = [
  {
    date: "May 1199",
    title: "John is crowned",
    what: "Richard I dies without children. The English barons and John's mother Eleanor back John; Brittany, Anjou and Philip II of France back his nephew Arthur.",
    d: { b: 1, c: 1, f: 3 },
    why: "John starts with a rival claimant and a hostile French king. The English barons accept him — for now.",
  },
  {
    date: "1200",
    title: "John marries Isabella of Angoulême",
    what: "John marries Isabella, who was engaged to Hugh de Lusignan. The Lusignans appeal to Philip II, John's overlord for his French lands.",
    d: { b: 0, c: 0, f: 2 },
    why: "A personal choice hands Philip a legal excuse to summon John to his court.",
  },
  {
    date: "1202",
    title: "Lands declared forfeit; Arthur captured",
    what: "John ignores Philip's summons, so Philip declares his French lands forfeit. John wins a brilliant victory at Mirebeau and captures Arthur — but ignores the advice of his ally William des Roches over Arthur's fate.",
    d: { b: 1, c: 0, f: 1 },
    why: "A military success, but des Roches and other lords of Anjou desert to Philip. Winning battles isn't enough if allies don't trust you.",
  },
  {
    date: "1203",
    title: "Arthur disappears",
    what: "Arthur vanishes in John's custody at Rouen. Rumours spread that John had him murdered.",
    d: { b: 1, c: 0, f: 1 },
    why: "Lords in Normandy and Brittany lose faith in John, and Philip gains support. Fear and distrust spread.",
  },
  {
    date: "1204",
    title: "Normandy is lost",
    what: "Château Gaillard falls in March and Rouen surrenders in June. John is mocked as 'Softsword'.",
    d: { b: 2, c: 0, f: 2 },
    why: "Barons lose their Norman estates. John now lives in England full-time and squeezes it for money to win Normandy back.",
  },
  {
    date: "1205–1207",
    title: "Quarrel over the Archbishop",
    what: "After Hubert Walter dies, John wants his own man as Archbishop of Canterbury. Pope Innocent III consecrates Stephen Langton instead (1207). John refuses to let him in.",
    d: { b: 0, c: 3, f: 0 },
    why: "John takes on the most powerful pope of the Middle Ages over who controls the English Church.",
  },
  {
    date: "1207",
    title: "A huge new tax",
    what: "John levies a tax of a thirteenth on movable goods and income — one of the biggest taxes yet raised in England.",
    d: { b: 1, c: 0, f: 0 },
    why: "It fills John's war chest, but every landholder feels it.",
  },
  {
    date: "1208–1209",
    title: "Interdict and excommunication",
    what: "The Pope places England under an interdict (1208) and excommunicates John (1209). John seizes Church lands and their income.",
    d: { b: 0, c: 4, f: 0 },
    why: "John profits — but a king cut off from the Church gives rebels and Philip a religious excuse to act against him.",
  },
  {
    date: "1208–1210",
    title: "The fall of the de Braose family",
    what: "John hounds his former favourite William de Braose for debts. In 1210 de Braose's wife Matilda and eldest son die of starvation in John's prison.",
    d: { b: 2, c: 0, f: 0 },
    why: "Every baron could see that if the king turned against you, there was no law to protect you.",
  },
  {
    date: "1212",
    title: "A plot to kill or desert John",
    what: "John learns of a plot by barons including Robert FitzWalter and Eustace de Vesci. He calls off his invasion of Wales; the plotters flee.",
    d: { b: 1, c: 0, f: 1 },
    why: "Baronial anger has turned into conspiracy, and the plotters are in contact with Philip.",
  },
  {
    date: "May 1213",
    title: "John submits to the Pope",
    what: "Facing a planned French invasion, John accepts Langton and hands England to the Pope as a fief, paying 1,000 marks a year. His fleet then destroys French ships at Damme.",
    d: { b: 0, c: -6, f: -1 },
    why: "A brilliant U-turn: the Pope becomes John's protector and Philip loses his 'holy war'. But the barons' grievances haven't gone away.",
  },
  {
    date: "1214",
    title: "Defeat at Bouvines and a record scutage",
    what: "John's allies are crushed at Bouvines (27 July). He has demanded scutage at 3 marks per knight's fee, and many northern barons refuse to pay or serve.",
    d: { b: 2, c: 0, f: 1 },
    why: "Years of taxes have bought nothing. John comes home broke and beaten.",
  },
  {
    date: "May 1215",
    title: "The barons rebel and take London",
    what: "Rebel barons renounce their loyalty (5 May) and capture London (17 May). John can't pay an army big enough to win quickly.",
    d: { b: 1, c: 0, f: 0 },
    why: "Pressure boils over into open war. John must negotiate — leading to Runnymede on 15 June 1215.",
  },
];

const COLORS: Record<Group, { stroke: string; fill: string; text: string; bg: string }> = {
  b: { stroke: "stroke-bad", fill: "fill-bad", text: "text-bad", bg: "bg-bad" },
  c: { stroke: "stroke-accent", fill: "fill-accent", text: "text-accent", bg: "bg-accent" },
  f: { stroke: "stroke-info", fill: "fill-info", text: "text-info", bg: "bg-info" },
};

function levelsAfter(n: number): Record<Group, number> {
  const lv = { b: 0, c: 0, f: 0 };
  for (let i = 0; i < n; i++) for (const k of ["b", "c", "f"] as const) lv[k] = Math.max(0, Math.min(10, lv[k] + STEPS[i].d[k]));
  return lv;
}

function biggestMove(s: Step): Group {
  return (["b", "c", "f"] as const).reduce((best, k) => (Math.abs(s.d[k]) > Math.abs(s.d[best]) ? k : best), "b" as Group);
}

function PressureGauge() {
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState<"predict" | "explore">("predict");
  const [picks, setPicks] = useState<Record<number, Group>>({});
  const s = STEPS[step];
  const revealed = mode === "explore" || picks[step] !== undefined;
  const shownSteps = revealed ? step + 1 : step;
  const lv = levelsAfter(shownSteps);
  const series = useMemo(() => STEPS.map((_, i) => levelsAfter(i + 1)), []);
  const big = biggestMove(s);
  const pick = picks[step];
  const done = step === STEPS.length - 1 && revealed;
  const right = Object.entries(picks).filter(([i, g]) => biggestMove(STEPS[Number(i)]) === g).length;

  // Chart geometry
  const W = 360, H = 170, L = 28, R = 10, T = 10, B = 26;
  const px = (i: number) => L + (i * (W - L - R)) / (STEPS.length - 1);
  const py = (v: number) => T + (1 - v / 10) * (H - T - B);

  const ariaLabel = `Pressure chart after ${shownSteps} of ${STEPS.length} decisions: barons ${lv.b} out of 10, Church ${lv.c}, France ${lv.f}.`;

  return (
    <WidgetFrame
      title="Rebellion pressure gauge, 1199–1215"
      tryThis={[
        "At each decision, predict which gauge will move most — then check.",
        "Find the step where Church pressure falls sharply. What did John gain, and what did it cost him?",
        "In 1209 which group was angriest? Was it the same group in 1215? What does that tell you about the **trigger** for rebellion?",
        "Which single decision would you undo to stop Runnymede? Defend your choice.",
      ]}
      caption={
        <div className="space-y-2">
          {revealed ? (
            <p>
              <strong>{s.date} — {s.title}.</strong> {s.why}
            </p>
          ) : (
            <p>
              <strong>{s.date} — {s.title}.</strong> Make your prediction to see the gauges move.
            </p>
          )}
          {done ? (
            <p>
              <strong>Runnymede, 15 June 1215.</strong> Notice the Church line: by 1215 the Pope was on John's side, and France had already won. The pressure that forced Magna Carta came from the barons — built up over years of taxes, broken trust and lost wars, then triggered by the disaster of 1214.
            </p>
          ) : null}
          <p className="text-xs text-ink-2">The 0–10 levels are a teaching model — a judgement about how angry each group was, not a historical measurement.</p>
        </div>
      }
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Segmented
          label="Mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: "predict", label: "Predict" },
            { value: "explore", label: "Just explore" },
          ]}
        />
        <span className="text-sm font-bold text-ink-2">
          Decision {step + 1} of {STEPS.length}
        </span>
      </div>

      <div className="mt-3 rounded-xl border border-line bg-surface p-3">
        <div className="text-xs font-extrabold uppercase tracking-wide text-brand">{s.date}</div>
        <div className="text-base font-extrabold text-ink">{s.title}</div>
        <p className="mt-1 text-sm text-ink">{s.what}</p>

        {mode === "predict" && !revealed ? (
          <div className="mt-3">
            <p className="text-sm font-bold text-ink">Which gauge will move most?</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["b", "c", "f"] as const).map((k) => (
                <button key={k} type="button" className="btn btn-secondary btn-sm" onClick={() => setPicks({ ...picks, [step]: k })}>
                  {GROUP_NAME[k]}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {mode === "predict" && pick !== undefined ? (
          <p className={`mt-3 rounded-lg px-3 py-2 text-sm font-bold ${pick === big ? "bg-good-soft text-good" : "bg-bad-soft text-bad"}`}>
            {pick === big ? "Right" : `Not this time — the ${GROUP_NAME[big]} gauge moved most`}: {GROUP_NAME[big]} {s.d[big] > 0 ? `+${s.d[big]}` : s.d[big]}.
          </p>
        ) : null}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {(["b", "c", "f"] as const).map((k) => (
          <div key={k} className="rounded-xl border border-line bg-surface px-3 py-2">
            <div className={`text-xs font-bold uppercase tracking-wide ${COLORS[k].text}`}>{GROUP_NAME[k]}</div>
            <div className="text-xl font-extrabold tabular-nums text-ink">{lv[k]}/10</div>
            <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-surface-2" aria-hidden>
              <div className={`h-2 rounded-full ${COLORS[k].bg}`} style={{ width: `${lv[k] * 10}%` }} />
            </div>
          </div>
        ))}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 h-auto w-full" role="img" aria-label={ariaLabel}>
        {[0, 5, 10].map((v) => (
          <g key={v}>
            <line x1={L} x2={W - R} y1={py(v)} y2={py(v)} className="stroke-line" strokeWidth={1} />
            <text x={L - 6} y={py(v) + 3} fontSize={9} textAnchor="end" className="fill-ink-2">{v}</text>
          </g>
        ))}
        {STEPS.map((st, i) => (
          <text key={i} x={px(i)} y={H - 12} fontSize={8} textAnchor="middle" className={i === step ? "fill-brand" : "fill-ink-2"}>
            {st.date.slice(-4) === "1207" && st.date.length > 4 ? "1205" : st.date.slice(-4)}
          </text>
        ))}
        <line x1={px(step)} x2={px(step)} y1={T} y2={H - B} className="stroke-brand" strokeDasharray="3 3" strokeWidth={1} />
        {shownSteps > 0
          ? (["b", "c", "f"] as const).map((k) => (
              <g key={k}>
                <polyline
                  points={series.slice(0, shownSteps).map((v, i) => `${px(i)},${py(v[k])}`).join(" ")}
                  fill="none"
                  className={COLORS[k].stroke}
                  strokeWidth={2.5}
                  strokeLinejoin="round"
                />
                {series.slice(0, shownSteps).map((v, i) => (
                  <circle key={i} cx={px(i)} cy={py(v[k])} r={2.5} className={COLORS[k].fill} />
                ))}
              </g>
            ))
          : null}
        <text x={W - R} y={H - 1} fontSize={8} textAnchor="end" className="fill-ink-2">year of each decision</text>
      </svg>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
          ← Back
        </button>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => setStep(Math.min(STEPS.length - 1, step + 1))} disabled={!revealed || step === STEPS.length - 1}>
          Next decision →
        </button>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => {
            setStep(0);
            setPicks({});
          }}
        >
          Start again
        </button>
        {mode === "predict" && Object.keys(picks).length > 0 ? (
          <span className="text-sm font-bold text-ink-2">
            Predictions right: {right}/{Object.keys(picks).length}
          </span>
        ) : null}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "magna-carta-clauses",
    title: "Magna Carta clause explorer",
    blurb: "Pick a grievance against John, see the clause that answered it — and predict whether it survived.",
    Component: ClauseExplorer,
  },
  {
    id: "rebellion-pressure",
    title: "Rebellion pressure gauge",
    blurb: "Step through John's decisions from 1199 to 1215 and watch pressure from the barons, the Church and France build.",
    Component: PressureGauge,
  },
];
