"use client";
// Explorables for "King John and Magna Carta".
// 1. Bad king or unlucky king? — weigh evidence cards on a balance and see how the
//    lens you read through (a St Albans monk, a Victorian, a modern historian) and your
//    trust in the monk-chroniclers shift the verdict. It models the learner's argument,
//    never one "correct" answer.
// 2. Magna Carta clause explorer — match the barons' grievances to the clauses that answered
//    them, then see which clauses survived the reissues and which are still law today.
// Facts follow lib/topics/king-john/guide.ts.
import { useMemo, useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Bad king or unlucky king?
// ---------------------------------------------------------------------------

type Side = "bad" | "able";
type Kind = "chronicle" | "record" | "event" | "historian" | "legend";
type Weight = 0 | 1 | 2;
type Lens = "monk" | "victorian" | "modern" | "own";

interface EvidenceCard {
  id: string;
  side: Side;
  kind: Kind;
  text: string;
  /** Year this view first appeared, for cards that did not exist in earlier ages. */
  from?: number;
  note?: string;
}

const KIND_LABEL: Record<Kind, string> = {
  chronicle: "Monk's chronicle",
  record: "Government records",
  event: "Well-established event",
  historian: "Modern historian",
  legend: "Legend / fiction",
};

const KIND_STYLE: Record<Kind, string> = {
  chronicle: "bg-accent-soft text-ink",
  record: "bg-info-soft text-ink",
  event: "bg-surface-2 text-ink",
  historian: "bg-brand-soft text-ink",
  legend: "bg-warn-soft text-ink",
};

const CARDS: EvidenceCard[] = [
  { id: "b1", side: "bad", kind: "chronicle", text: "Matthew Paris, a St Albans monk writing in the mid-1200s, records the verse: 'Hell itself is made fouler by the presence of John.'" },
  { id: "b2", side: "bad", kind: "chronicle", text: "St Albans chroniclers tell how John lay in bed with his young queen while Normandy was being lost.", note: "Written after John's death; often repeats gossip." },
  { id: "b3", side: "bad", kind: "chronicle", text: "One chronicle claims John killed his nephew Arthur with his own hands.", note: "Most historians think John had Arthur killed — but this detail is one writer's claim." },
  { id: "b4", side: "bad", kind: "event", text: "Arthur vanished in John's custody in 1203; most historians believe John had him killed." },
  { id: "b5", side: "bad", kind: "record", text: "John levied scutage 11 times and charged Geoffrey de Mandeville 20,000 marks to marry an heiress (1214)." },
  { id: "b6", side: "bad", kind: "event", text: "The wife and eldest son of the baron William de Briouze died in John's prison (1210)." },
  { id: "b7", side: "bad", kind: "event", text: "He lost Normandy in 1204 ('Softsword'), and his allies were crushed at Bouvines in 1214." },
  { id: "b8", side: "bad", kind: "event", text: "By 1215 the barons would not trust his word: they demanded 25 barons to enforce Magna Carta." },
  { id: "b9", side: "bad", kind: "legend", text: "Robin Hood stories, from Ivanhoe (1819) to Disney's Robin Hood (1973), make 'Prince John' a greedy villain.", from: 1819, note: "No reliable evidence links John to a real Robin Hood." },
  { id: "b10", side: "bad", kind: "historian", text: "Marc Morris and Stephen Church (2015): able, but cruel, suspicious and untrustworthy.", from: 2015 },
  { id: "a1", side: "able", kind: "record", text: "The government rolls show John travelling constantly and hearing law cases himself." },
  { id: "a2", side: "able", kind: "record", text: "Far more government records survive from John's reign than from earlier ones — careful, efficient administration." },
  { id: "a3", side: "able", kind: "event", text: "He inherited debts from Richard I's wars and Richard's 150,000-mark ransom." },
  { id: "a4", side: "able", kind: "event", text: "He faced Philip II, one of the ablest French kings, whose lands bordered Normandy." },
  { id: "a5", side: "able", kind: "event", text: "A brilliant victory at Mirebeau (1202) and successful campaigns in Ireland (1210) and Wales (1211)." },
  { id: "a6", side: "able", kind: "chronicle", text: "Barnwell chronicle (1220s): 'a great prince, but hardly a happy one', who suffered the ups and downs of fortune." },
  { id: "a7", side: "able", kind: "historian", text: "W.L. Warren (1961), from the government records: intelligent, hard-working, improved royal administration.", from: 1961 },
  { id: "a8", side: "able", kind: "event", text: "His 1213 submission turned Pope Innocent III into an ally who backed him in 1215 — shrewd politics." },
];

interface LensPreset {
  label: string;
  year: number;
  trust: number;
  weights: Record<string, Weight>;
  context: string;
}

const LENSES: Record<Exclude<Lens, "own">, LensPreset> = {
  monk: {
    label: "St Albans monk",
    year: 1250,
    trust: 100,
    weights: { b1: 2, b2: 2, b3: 2, b4: 2, b5: 1, b6: 2, b7: 2, b8: 1, b9: 0, b10: 0, a1: 0, a2: 0, a3: 0, a4: 0, a5: 1, a6: 0, a7: 0, a8: 0 },
    context:
      "A St Albans monk (Roger of Wendover, died 1236; Matthew Paris, died 1259) wrote after John's death, inside a Church that John had squeezed during the Interdict, and liked a moral story of a wicked king punished by God. He trusted the stories — and did not study the government rolls.",
  },
  victorian: {
    label: "Victorian historian",
    year: 1875,
    trust: 100,
    weights: { b1: 2, b2: 2, b3: 1, b4: 2, b5: 1, b6: 2, b7: 2, b8: 1, b9: 1, b10: 0, a1: 0, a2: 0, a3: 1, a4: 1, a5: 1, a6: 1, a7: 0, a8: 0 },
    context:
      "Victorian historians such as William Stubbs and J.R. Green relied heavily on the chronicles and judged John one of the worst kings England ever had. Robin Hood stories such as Ivanhoe (1819) spread the same image.",
  },
  modern: {
    label: "Modern historian",
    year: 2026,
    trust: 40,
    weights: { b1: 1, b2: 1, b3: 1, b4: 2, b5: 2, b6: 2, b7: 2, b8: 2, b9: 0, b10: 2, a1: 2, a2: 2, a3: 2, a4: 2, a5: 1, a6: 1, a7: 2, a8: 1 },
    context:
      "Since the 20th century historians have read the government records. W.L. Warren (1961) found an able, unlucky administrator; Marc Morris and Stephen Church (2015) accept his ability but stress cruelty and distrust. Chronicles are still used — carefully.",
  },
};

const WEIGHT_LABEL: Record<Weight, string> = { 0: "Ignore", 1: "Some", 2: "Strong" };

function BadOrUnlucky() {
  const [lens, setLens] = useState<Lens>("modern");
  const [weights, setWeights] = useState<Record<string, Weight>>(() => ({ ...LENSES.modern.weights }));
  const [trust, setTrust] = useState(LENSES.modern.trust);

  const lensYear = lens === "own" ? 2026 : LENSES[lens].year;
  const available = (c: EvidenceCard) => (c.from ?? 0) <= lensYear;

  function chooseLens(l: Lens) {
    setLens(l);
    if (l !== "own") {
      setWeights({ ...LENSES[l].weights });
      setTrust(LENSES[l].trust);
    }
  }

  const totals = useMemo(() => {
    let bad = 0, able = 0, badChron = 0;
    for (const c of CARDS) {
      if ((c.from ?? 0) > lensYear) continue;
      const w = (weights[c.id] ?? 0) * (c.kind === "chronicle" ? trust / 100 : 1);
      if (c.side === "bad") {
        bad += w;
        if (c.kind === "chronicle") badChron += w;
      } else able += w;
    }
    return { bad, able, badChron };
  }, [weights, trust, lensYear]);

  const total = totals.bad + totals.able;
  const lean = total > 0 ? (totals.able - totals.bad) / total : 0; // −1 bad … +1 able
  const angle = lean * 16;
  const chronShare = totals.bad > 0 ? Math.round((100 * totals.badChron) / totals.bad) : 0;

  // Beam geometry (pivot at 180, 70; arms 120 long).
  const rad = (angle * Math.PI) / 180;
  const px = 180, py = 70, arm = 120;
  const lx = px - arm * Math.cos(rad), ly = py - arm * Math.sin(rad);
  const rx = px + arm * Math.cos(rad), ry = py + arm * Math.sin(rad);

  const verdict =
    total === 0
      ? "nothing yet"
      : lean < -0.25
        ? "tips towards 'bad king'"
        : lean > 0.25
          ? "tips towards 'able but unlucky'"
          : "is roughly balanced";

  const fmt = (n: number) => (Math.round(n * 10) / 10).toString();

  const caption = (
    <div className="space-y-2">
      <p>
        <strong>Your scales {verdict}</strong>
        {total > 0 ? ` (bad king ${fmt(totals.bad)} : able/unlucky ${fmt(totals.able)}).` : " — give some evidence weight."}{" "}
        {lens !== "own" ? LENSES[lens].context : "You are building your own interpretation: every weight is your judgement."}
      </p>
      {totals.bad > 0 && chronShare >= 35 ? (
        <p>
          <strong>{chronShare}%</strong> of the 'bad king' weight comes from monks' chronicles written after John's death by churchmen with a grudge. Lower your trust in them and see whether the verdict survives — the well-established events (Arthur, de Briouze, Normandy, the barons' distrust) still count.
        </p>
      ) : totals.bad > 0 ? (
        <p>
          Only <strong>{chronShare}%</strong> of the 'bad king' weight rests on the chronicles — the case against John here comes mostly from events and records that historians accept.
        </p>
      ) : null}
      <p className="text-ink-2">
        This is your argument, not the answer — historians still disagree. Many now say John was <em>both</em> an able administrator <em>and</em> a cruel, untrustworthy king.
      </p>
    </div>
  );

  return (
    <WidgetFrame
      title="Bad king or unlucky king?"
      tryThis={[
        "Choose the **St Albans monk** lens. Which kinds of evidence does he leave out — and why might that be?",
        "Set trust in chronicles to **0%**. Does the scale still tip towards 'bad king'? Which cards keep it there?",
        "Switch between the **Victorian** and **Modern** lenses. Which single kind of evidence changes the picture most?",
        "Make your **own** case that John was able but unlucky. What is the strongest card against you?",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <div className="space-y-1">
          <div className="text-sm font-semibold text-ink-2">Read the evidence as…</div>
          <Segmented<Lens>
            label="Interpretation lens"
            value={lens}
            onChange={chooseLens}
            options={[
              { value: "monk", label: "Monk (1200s)" },
              { value: "victorian", label: "Victorian (1870s)" },
              { value: "modern", label: "Modern" },
              { value: "own", label: "Your own" },
            ]}
          />
        </div>

        <svg
          viewBox="0 0 360 170"
          className="h-auto w-full"
          role="img"
          aria-label={`Balance scale. Bad king side ${fmt(totals.bad)}, able but unlucky side ${fmt(totals.able)}: the scale ${verdict}.`}
        >
          <polygon points="180,70 160,150 200,150" className="fill-surface-2 stroke-ink-2" strokeWidth={1.5} />
          <line x1={120} y1={150} x2={240} y2={150} className="stroke-ink-2" strokeWidth={2} />
          <line x1={lx} y1={ly} x2={rx} y2={ry} className="stroke-ink" strokeWidth={4} strokeLinecap="round" />
          <circle cx={px} cy={py} r={5} className="fill-ink" />
          {/* left pan: bad king */}
          <line x1={lx} y1={ly} x2={lx - 26} y2={ly + 40} className="stroke-ink-2" strokeWidth={1.2} />
          <line x1={lx} y1={ly} x2={lx + 26} y2={ly + 40} className="stroke-ink-2" strokeWidth={1.2} />
          <path d={`M ${lx - 34} ${ly + 40} Q ${lx} ${ly + 62} ${lx + 34} ${ly + 40} Z`} className="fill-bad-soft stroke-bad" strokeWidth={1.5} />
          <text x={lx} y={ly + 54} fontSize={12} textAnchor="middle" className="fill-ink font-bold">{fmt(totals.bad)}</text>
          {/* right pan: able but unlucky */}
          <line x1={rx} y1={ry} x2={rx - 26} y2={ry + 40} className="stroke-ink-2" strokeWidth={1.2} />
          <line x1={rx} y1={ry} x2={rx + 26} y2={ry + 40} className="stroke-ink-2" strokeWidth={1.2} />
          <path d={`M ${rx - 34} ${ry + 40} Q ${rx} ${ry + 62} ${rx + 34} ${ry + 40} Z`} className="fill-good-soft stroke-good" strokeWidth={1.5} />
          <text x={rx} y={ry + 54} fontSize={12} textAnchor="middle" className="fill-ink font-bold">{fmt(totals.able)}</text>
          <text x={34} y={18} fontSize={13} className="fill-bad font-bold">Bad king</text>
          <text x={326} y={18} fontSize={13} textAnchor="end" className="fill-good font-bold">Able but unlucky</text>
        </svg>

        <div className="grid grid-cols-3 gap-2">
          <Readout label="Bad king" value={fmt(totals.bad)} tone="bad" />
          <Readout label="Able / unlucky" value={fmt(totals.able)} tone="good" />
          <Readout label="From chronicles" value={`${chronShare}%`} tone="ink" />
        </div>

        <Slider
          label="Trust in the chronicles"
          value={trust}
          min={0}
          max={100}
          step={10}
          onChange={(v) => {
            setTrust(v);
            setLens("own");
          }}
          format={(v) => `${v}%`}
        />

        <ul className="space-y-2">
          {CARDS.map((c) => {
            const ok = available(c);
            const w = weights[c.id] ?? 0;
            return (
              <li
                key={c.id}
                className={`rounded-xl border p-3 ${c.side === "bad" ? "border-bad/40" : "border-good/40"} ${ok ? "bg-surface" : "bg-surface-2 opacity-60"}`}
              >
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                  <span className={`rounded-md px-2 py-0.5 ${c.side === "bad" ? "bg-bad-soft text-bad" : "bg-good-soft text-good"}`}>
                    {c.side === "bad" ? "Bad king" : "Able / unlucky"}
                  </span>
                  <span className={`rounded-md px-2 py-0.5 ${KIND_STYLE[c.kind]}`}>{KIND_LABEL[c.kind]}</span>
                  {!ok ? <span className="text-ink-2">Not written yet ({c.from})</span> : null}
                </div>
                <p className="mt-1.5 text-sm text-ink">{c.text}</p>
                {c.note ? <p className="mt-1 text-xs text-ink-2">{c.note}</p> : null}
                <div role="radiogroup" aria-label={`Weight for: ${c.text}`} className="mt-2 flex gap-1">
                  {([0, 1, 2] as Weight[]).map((v) => (
                    <button
                      key={v}
                      type="button"
                      role="radio"
                      aria-checked={w === v}
                      disabled={!ok}
                      onClick={() => {
                        setWeights((prev) => ({ ...prev, [c.id]: v }));
                        setLens("own");
                      }}
                      className={`min-h-[40px] flex-1 rounded-lg border px-2 text-sm font-bold transition ${
                        w === v && ok ? "border-brand bg-brand text-brand-ink" : "border-line bg-surface text-ink-2"
                      } disabled:cursor-not-allowed`}
                    >
                      {WEIGHT_LABEL[v]}
                    </button>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Magna Carta clause explorer
// ---------------------------------------------------------------------------

type Era = "1215" | "reissues" | "today";

interface ClauseInfo {
  n: number;
  short: string;
  text: string;
  gained: string;
  /** In force in the 1216–1225 reissues? */
  reissued: boolean;
  /** Still law in England and Wales today? */
  today: boolean;
}

const CLAUSE_INFO: ClauseInfo[] = [
  { n: 1, short: "Church free", text: "The English Church shall be free, with its rights undiminished and its liberties unimpaired.", gained: "The Church", reissued: true, today: true },
  { n: 2, short: "Reliefs fixed", text: "An heir shall pay a fixed relief to inherit: £100 for the heir of an earl or a baron.", gained: "Barons' heirs", reissued: true, today: false },
  { n: 8, short: "Widows", text: "No widow shall be compelled to marry, so long as she wishes to remain without a husband.", gained: "Wealthy widows", reissued: true, today: false },
  { n: 12, short: "Scutage by consent", text: "No 'scutage' or 'aid' may be levied in our kingdom without its general consent (except in three customary cases).", gained: "Barons", reissued: false, today: false },
  { n: 13, short: "London's liberties", text: "The City of London shall enjoy all its ancient liberties and free customs.", gained: "London's citizens", reissued: true, today: true },
  { n: 39, short: "Lawful judgement", text: "No free man shall be seized or imprisoned … except by the lawful judgement of his equals or by the law of the land.", gained: "Free men (not villeins)", reissued: true, today: true },
  { n: 40, short: "Justice not sold", text: "To no one will we sell, to no one deny or delay right or justice.", gained: "Anyone seeking justice (in theory)", reissued: true, today: true },
  { n: 61, short: "Security clause", text: "Twenty-five barons may enforce the charter, even by seizing the king's castles and lands.", gained: "Barons", reissued: false, today: false },
];

interface GrievanceCard {
  id: string;
  text: string;
  clause: number;
}

const GRIEVANCE_CARDS: GrievanceCard[] = [
  { id: "g1", text: "Barons jailed or stripped of their lands without a fair judgement — think of the de Briouze family.", clause: 39 },
  { id: "g2", text: "Scutage demanded eleven times, without asking the barons.", clause: 12 },
  { id: "g3", text: "Nobody could make John keep his promises.", clause: 61 },
  { id: "g4", text: "John kept Stephen Langton out of England and seized Church lands during the Interdict.", clause: 1 },
  { id: "g5", text: "Justice had a price: pay the king and your case might go faster; refuse and it might be delayed.", clause: 40 },
  { id: "g6", text: "Heirs paid enormous reliefs before they could inherit their fathers' lands.", clause: 2 },
  { id: "g7", text: "London opened its gates to the rebels and wanted its old privileges protected.", clause: 13 },
  { id: "g8", text: "The king sold rich widows' remarriages — or made them pay to stay single.", clause: 8 },
];

function inForce(c: ClauseInfo, era: Era): boolean {
  return era === "1215" ? true : era === "reissues" ? c.reissued : c.today;
}

const ERA_CAPTION: Record<Era, string> = {
  "1215":
    "In 1215 all 63 clauses applied — but only for about ten weeks: Pope Innocent III declared the charter null and void on 24 August 1215, and the First Barons' War followed.",
  reissues:
    "William Marshal's 1216 reissue, made for the nine-year-old Henry III, dropped the security clause (61) and clause 12 to win rebels back from Prince Louis. It was reissued again in 1217, and the 1225 text — granted in return for a tax — became the standard version.",
  today:
    "Only three clauses are still law in England and Wales: the freedom of the English Church, the liberties of the City of London, and clauses 39 and 40 (combined since 1225). The rest were repealed — but the idea that rulers are under the law lives on, for example in Article 9 of the UDHR (1948) and of Singapore's Constitution.",
};

function ClauseExplorer() {
  const [era, setEra] = useState<Era>("1215");
  const [selected, setSelected] = useState<string | null>(null);
  const [focus, setFocus] = useState<number>(39);
  const [matches, setMatches] = useState<Record<string, number>>({});
  const [feedback, setFeedback] = useState<{ ok: boolean; msg: string } | null>(null);

  const matchedCount = Object.keys(matches).length;
  const focusInfo = CLAUSE_INFO.find((c) => c.n === focus) ?? CLAUSE_INFO[0];
  const forceCount = CLAUSE_INFO.filter((c) => inForce(c, era)).length;
  const matchedInForce = GRIEVANCE_CARDS.filter((g) => matches[g.id] !== undefined && inForce(CLAUSE_INFO.find((c) => c.n === g.clause)!, era)).length;

  function pickClause(n: number) {
    setFocus(n);
    if (!selected) return;
    const g = GRIEVANCE_CARDS.find((x) => x.id === selected)!;
    const info = CLAUSE_INFO.find((c) => c.n === n)!;
    if (g.clause === n) {
      setMatches((m) => ({ ...m, [g.id]: n }));
      setFeedback({ ok: true, msg: `Yes — clause ${n} (${info.short}) answers that grievance. Who gained: ${info.gained}.` });
      setSelected(null);
    } else {
      setFeedback({ ok: false, msg: `Not quite — clause ${n} is about ${info.short.toLowerCase()}. Read the grievance again and try another clause.` });
    }
  }

  function reset() {
    setMatches({});
    setSelected(null);
    setFeedback(null);
  }

  const cell = 40;
  const gap = 4;

  const caption = (
    <div className="space-y-2">
      <p>{ERA_CAPTION[era]}</p>
      <p>
        You have matched <strong>{matchedCount} of {GRIEVANCE_CARDS.length}</strong> grievances
        {matchedCount > 0 ? (
          <>
            ; <strong>{matchedInForce}</strong> of those {matchedCount === 1 ? "is" : "are"} still answered by a clause in force {era === "1215" ? "in 1215" : era === "reissues" ? "in the reissues" : "today"}.
          </>
        ) : (
          "."
        )}{" "}
        Notice who gained: mostly barons, the Church and London — clause 39 protected only <em>free</em> men, not villeins.
      </p>
      <p className="text-ink-2">Clause wording: British Library translation (shortened). Clause numbers were added later by scholars.</p>
    </div>
  );

  return (
    <WidgetFrame
      title="Magna Carta clause explorer"
      tryThis={[
        "Tap a grievance, then tap the clause that answers it. Match all eight — which group of people gained most?",
        "Switch to **Today**. Which grievances are still answered by the law? Why might clause 39 have outlived clause 61?",
        "Switch to **Reissues**. Why would a regent ruling for a nine-year-old king drop the security clause?",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<Era>
            label="Which year?"
            value={era}
            onChange={setEra}
            options={[
              { value: "1215", label: "1215" },
              { value: "reissues", label: "Reissues (1216–1225)" },
              { value: "today", label: "Today" },
            ]}
          />
          <button type="button" className="btn btn-secondary min-h-[40px]" onClick={reset}>
            Reset
          </button>
        </div>

        <svg
          viewBox={`0 0 ${CLAUSE_INFO.length * (cell + gap) - gap} 62`}
          className="h-auto w-full"
          role="img"
          aria-label={`Clauses in force ${era === "1215" ? "in 1215" : era === "reissues" ? "in the 1216 to 1225 reissues" : "today"}: ${CLAUSE_INFO.filter((c) => inForce(c, era)).map((c) => c.n).join(", ")}. Not in force: ${CLAUSE_INFO.filter((c) => !inForce(c, era)).map((c) => c.n).join(", ") || "none"}.`}
        >
          {CLAUSE_INFO.map((c, i) => {
            const on = inForce(c, era);
            const x = i * (cell + gap);
            return (
              <g key={c.n}>
                <rect x={x} y={0} width={cell} height={cell} rx={6} className={on ? "fill-good-soft stroke-good" : "fill-bad-soft stroke-bad"} strokeWidth={1.5} strokeDasharray={on ? undefined : "4 3"} />
                <text x={x + cell / 2} y={cell / 2 + 5} fontSize={14} textAnchor="middle" className="fill-ink font-bold">{c.n}</text>
                <text x={x + cell / 2} y={56} fontSize={9} textAnchor="middle" className={on ? "fill-good" : "fill-bad"}>{on ? "in force" : "gone"}</text>
              </g>
            );
          })}
        </svg>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="Matched" value={`${matchedCount} / ${GRIEVANCE_CARDS.length}`} tone="brand" />
          <Readout label="Clauses in force" value={`${forceCount} / ${CLAUSE_INFO.length}`} tone={forceCount === CLAUSE_INFO.length ? "good" : "ink"} />
          <Readout label="Selected clause" value={focus} tone="ink" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className="mb-2 text-sm font-semibold text-ink-2">1. Tap a grievance</div>
            <ul className="space-y-2">
              {GRIEVANCE_CARDS.map((g) => {
                const done = matches[g.id] !== undefined;
                const isSel = selected === g.id;
                const info = done ? CLAUSE_INFO.find((c) => c.n === g.clause)! : null;
                return (
                  <li key={g.id}>
                    <button
                      type="button"
                      aria-pressed={isSel}
                      disabled={done}
                      onClick={() => {
                        setSelected(isSel ? null : g.id);
                        setFeedback(null);
                      }}
                      className={`min-h-[44px] w-full rounded-xl border p-3 text-left text-sm transition ${
                        done ? "border-good/50 bg-good-soft text-ink" : isSel ? "border-brand bg-brand-soft text-ink ring-2 ring-brand" : "border-line bg-surface text-ink"
                      }`}
                    >
                      {g.text}
                      {info ? (
                        <span className={`mt-1 block text-xs font-bold ${inForce(info, era) ? "text-good" : "text-bad"}`}>
                          ✓ Clause {info.n} — {inForce(info, era) ? "in force" : "no longer in force"} {era === "1215" ? "in 1215" : era === "reissues" ? "in the reissues" : "today"}
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold text-ink-2">2. Tap the clause that answers it</div>
            <div className="grid grid-cols-2 gap-2">
              {CLAUSE_INFO.map((c) => {
                const on = inForce(c, era);
                return (
                  <button
                    key={c.n}
                    type="button"
                    aria-pressed={focus === c.n}
                    onClick={() => pickClause(c.n)}
                    className={`min-h-[44px] rounded-xl border px-2 py-2 text-left text-sm transition ${
                      focus === c.n ? "border-brand ring-2 ring-brand" : "border-line"
                    } ${on ? "bg-surface" : "bg-surface-2"}`}
                  >
                    <span className="block font-extrabold text-ink">Clause {c.n}</span>
                    <span className="block text-xs text-ink-2">{c.short}</span>
                    <span className={`block text-xs font-bold ${on ? "text-good" : "text-bad"}`}>{on ? "in force" : "gone"}</span>
                  </button>
                );
              })}
            </div>
            {feedback ? (
              <p role="status" className={`mt-3 rounded-xl p-3 text-sm ${feedback.ok ? "bg-good-soft text-good" : "bg-bad-soft text-bad"}`}>
                {feedback.msg}
              </p>
            ) : null}
            <div className="mt-3 rounded-xl border border-line bg-surface p-3 text-sm">
              <div className="font-extrabold text-ink">Clause {focusInfo.n}: {focusInfo.short}</div>
              <blockquote className="mt-1 border-l-4 border-brand pl-2 italic text-ink">{focusInfo.text}</blockquote>
              <div className="mt-2 text-ink-2">
                <strong className="text-ink">Who gained most:</strong> {focusInfo.gained}
              </div>
              <div className="text-ink-2">
                <strong className="text-ink">Status:</strong>{" "}
                {era === "1215"
                  ? "in the 1215 charter"
                  : era === "reissues"
                    ? focusInfo.reissued
                      ? "kept in the reissues"
                      : "dropped from the 1216 reissue onwards"
                    : focusInfo.today
                      ? "still law in England and Wales"
                      : "no longer law"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "bad-or-unlucky",
    title: "Bad king or unlucky king?",
    blurb: "Weigh the evidence on John — and see how the chroniclers' bias tips the scales.",
    Component: BadOrUnlucky,
  },
  {
    id: "clause-explorer",
    title: "Magna Carta clause explorer",
    blurb: "Match the barons' grievances to clauses — then see which still matter today.",
    Component: ClauseExplorer,
  },
];
