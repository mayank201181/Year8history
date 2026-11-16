"use client";
import { useState } from "react";
import { WidgetFrame, Segmented, Slider, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Three Estates: who paid? (+ the Estates-General voting problem)
// ---------------------------------------------------------------------------

type View = "people" | "land" | "taille" | "deputies";
type EstateId = "first" | "second" | "third";

const ESTATES: { id: EstateId; name: string; who: string; fill: string; text: string }[] = [
  { id: "first", name: "First Estate", who: "Clergy", fill: "fill-brand", text: "text-brand" },
  { id: "second", name: "Second Estate", who: "Nobility", fill: "fill-accent", text: "text-accent" },
  { id: "third", name: "Third Estate", who: "Everyone else", fill: "fill-good", text: "text-good" },
];

/** Shares in %, historians' estimates (rounded). Labels say how precise they are. */
const VIEWS: Record<View, { title: string; values: Record<EstateId, number>; labels: Record<EstateId, string>; note: string }> = {
  people: {
    title: "Share of the population",
    values: { first: 0.5, second: 2, third: 97.5 },
    labels: { first: "under 1%", second: "about 2%", third: "about 97%" },
    note: "About 28 million people lived in France. The two privileged estates together were only a few hundred thousand of them — the slivers on the left are drawn to scale.",
  },
  land: {
    title: "Share of the land",
    values: { first: 10, second: 25, third: 65 },
    labels: { first: "about 10%", second: "about 25%", third: "about 65%" },
    note: "Estimates vary (the Church owned roughly 6–10% of the land, the nobles roughly 20–30%). The Third Estate's share was split between rich bourgeois landowners and millions of peasants, many with tiny plots or none.",
  },
  taille: {
    title: "Who paid the taille (the main direct tax)",
    values: { first: 0, second: 0, third: 100 },
    labels: { first: "exempt", second: "exempt", third: "all of it" },
    note: "The clergy and nobility were exempt. The privileged did pay some newer taxes and the Church gave the king a voluntary “free gift” — but the Third Estate also paid the tithe to the Church, feudal dues to its lords and the gabelle on salt.",
  },
  deputies: {
    title: "Deputies at the Estates-General, May 1789",
    values: { first: 25, second: 25, third: 50 },
    labels: { first: "about 300", second: "about 300", third: "about 600" },
    note: "In December 1788 the king agreed to double the Third Estate's deputies — but not to say how votes would be counted. That was the row that started the Revolution.",
  },
};

/** Land share ÷ population share: how much land per person compared with the average. */
function landPerPerson(id: EstateId): string {
  const r = VIEWS.land.values[id] / VIEWS.people.values[id];
  return r >= 10 ? `about ${Math.round(r)}×` : `about ${r.toFixed(1)}×`;
}

const DEPUTIES = { first: 300, second: 300, third: 600 };

function ThreeEstates() {
  const [view, setView] = useState<View>("people");
  const [voting, setVoting] = useState<"order" | "head">("order");
  const [clergyJoin, setClergyJoin] = useState(0);
  const [noblesJoin, setNoblesJoin] = useState(0);
  const v = VIEWS[view];

  // Stacked 100% bar, to scale.
  const W = 440;
  const X0 = 20;
  let x = X0;
  const segs = ESTATES.map((e) => {
    const w = (v.values[e.id] / 100) * W;
    const s = { e, x, w };
    x += w;
    return s;
  });

  // Voting on the motion "Vote by head and write a constitution".
  const yesHead = DEPUTIES.third + clergyJoin + noblesJoin;
  const noHead = DEPUTIES.first - clergyJoin + DEPUTIES.second - noblesJoin;
  const clergyYes = clergyJoin > DEPUTIES.first / 2;
  const noblesYes = noblesJoin > DEPUTIES.second / 2;
  const yesOrder = 1 + (clergyYes ? 1 : 0) + (noblesYes ? 1 : 0);
  const noOrder = 3 - yesOrder;
  const passes = voting === "order" ? yesOrder > noOrder : yesHead > noHead;
  const tie = voting === "head" && yesHead === noHead;

  // Seat grid: one square = 10 deputies (120 squares), drawn to scale.
  const squares: { key: string; estate: EstateId; yes: boolean }[] = [];
  const addSquares = (estate: EstateId, total: number, joined: number) => {
    for (let i = 0; i < total / 10; i++) squares.push({ key: `${estate}${i}`, estate, yes: estate === "third" || i < joined / 10 });
  };
  addSquares("first", DEPUTIES.first, clergyJoin);
  addSquares("second", DEPUTIES.second, noblesJoin);
  addSquares("third", DEPUTIES.third, DEPUTIES.third);

  const resultText =
    voting === "order"
      ? `Vote by order: ${yesOrder} estate${yesOrder === 1 ? "" : "s"} for, ${noOrder} against — the motion ${passes ? "passes" : "fails"}.`
      : tie
        ? `Vote by head: ${yesHead} for, ${noHead} against — a dead tie.`
        : `Vote by head: about ${yesHead} for, about ${noHead} against — the motion ${passes ? "passes" : "fails"}.`;

  return (
    <WidgetFrame
      title="Three Estates: who paid?"
      tryThis={[
        "Switch between **Population** and **Land**. Which estate has the most land per person — and roughly how many times the average?",
        "Look at **Taille**. Why was it the 97% with the least land per person who paid the main tax?",
        "In the voting model, keep every privileged deputy loyal. Can the Third Estate EVER win if votes are counted by order?",
        "Switch to **vote by head**. What is the smallest number of liberal clergy or nobles the Third Estate needs to win?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>{v.title}:</strong> {v.note}
          </p>
          <p>
            <strong>The voting problem:</strong>{" "}
            {voting === "order"
              ? "Counted by order, each estate gets one vote. The two privileged estates can always outvote the Third Estate 2–1, however many people it represents — unless a majority inside the clergy or the nobility changes sides."
              : "Counted by head, every deputy has one vote. The Third Estate's 600 deputies match the other two together, so a handful of liberal nobles or parish priests tips the balance. In June 1789 a majority of the clergy's deputies voted to join the Third Estate, and 47 liberal nobles followed on 25 June."}{" "}
            That is why the Third Estate refused to back down, declared itself the National Assembly on 17 June and swore the Tennis Court Oath on 20 June.
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        <Segmented<View>
          label="What to compare"
          value={view}
          onChange={setView}
          options={[
            { value: "people", label: "Population" },
            { value: "land", label: "Land" },
            { value: "taille", label: "Taille" },
            { value: "deputies", label: "Deputies" },
          ]}
        />
        <svg
          viewBox="0 0 480 120"
          className="h-auto w-full"
          role="img"
          aria-label={`${v.title}, drawn to scale: ${ESTATES.map((e) => `${e.who} ${v.labels[e.id]}`).join(", ")}.`}
        >
          <text x={X0} y={18} fontSize={13} className="fill-ink" fontWeight={700}>
            {v.title}
          </text>
          <rect x={X0} y={30} width={W} height={40} rx={4} className="fill-surface-2 stroke-line" />
          {segs.map((s) =>
            s.w > 0 ? <rect key={s.e.id} x={s.x} y={30} width={Math.max(s.w, 1.5)} height={40} className={s.e.fill} opacity={0.85} /> : null,
          )}
          {segs.map((s) =>
            s.w > 0 && s.x > X0 ? <line key={`gap${s.e.id}`} x1={s.x} x2={s.x} y1={30} y2={70} className="stroke-surface" strokeWidth={2} /> : null,
          )}
          {ESTATES.map((e, i) => (
            <g key={e.id}>
              <rect x={X0 + i * 150} y={86} width={12} height={12} rx={2} className={e.fill} opacity={0.85} />
              <text x={X0 + i * 150 + 18} y={96} fontSize={11} className="fill-ink">
                {e.who}: {v.labels[e.id]}
              </text>
            </g>
          ))}
          <text x={X0 + W} y={116} fontSize={9} textAnchor="end" className="fill-ink-2">
            Bar = 100% · historians&apos; estimates
          </text>
        </svg>

        {view === "land" || view === "people" ? (
          <div className="grid grid-cols-3 gap-2">
            {ESTATES.map((e) => (
              <Readout key={e.id} label={`${e.who}: land per person vs average`} value={landPerPerson(e.id)} tone={e.id === "third" ? "bad" : "ink"} />
            ))}
          </div>
        ) : null}

        <div className="rounded-xl border border-line bg-surface p-3">
          <h4 className="text-sm font-extrabold text-ink">May 1789: the motion “Vote by head and give France a constitution”</h4>
          <div className="mt-2">
            <Segmented<"order" | "head">
              label="How votes are counted"
              value={voting}
              onChange={setVoting}
              options={[
                { value: "order", label: "Vote by order (1 per estate)" },
                { value: "head", label: "Vote by head (1 per deputy)" },
              ]}
            />
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Slider label="Clergy deputies who side with the Third" value={clergyJoin} min={0} max={300} step={10} onChange={setClergyJoin} format={(n) => `${n} of ~300`} />
            <Slider label="Noble deputies who side with the Third" value={noblesJoin} min={0} max={300} step={10} onChange={setNoblesJoin} format={(n) => `${n} of ~300`} />
          </div>
          <svg
            viewBox="0 0 480 110"
            className="mt-3 h-auto w-full"
            role="img"
            aria-label={`Seat chart, one square per 10 deputies. ${resultText}`}
          >
            {squares.map((s, i) => {
              const col = i % 30;
              const row = Math.floor(i / 30);
              return (
                <rect
                  key={s.key}
                  x={20 + col * 14.6}
                  y={6 + row * 18}
                  width={12}
                  height={14}
                  rx={2}
                  className={s.yes ? "fill-good stroke-good" : "fill-surface-2 stroke-ink-2"}
                  strokeWidth={1}
                />
              );
            })}
            <text x={20} y={90} fontSize={10} className="fill-ink-2">
              Row 1: clergy · Row 2: nobles · Rows 3–4: Third Estate · one square = 10 deputies
            </text>
            <text x={20} y={105} fontSize={10} className="fill-ink-2">
              Green = votes for the motion · grey = votes against
            </text>
          </svg>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Readout label="By order (estates)" value={`${yesOrder}–${noOrder}`} tone={voting === "order" ? (yesOrder > noOrder ? "good" : "bad") : "ink"} />
            <Readout label="By head (deputies, approx.)" value={`${yesHead}–${noHead}`} tone={voting === "head" ? (yesHead > noHead ? "good" : "bad") : "ink"} />
          </div>
          <p className={`mt-2 text-sm font-bold ${passes ? "text-good" : "text-bad"}`} aria-live="polite">
            {resultText}
          </p>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Revolution timeline: change or continuity? (1788 → 1804)
// ---------------------------------------------------------------------------

type GroupId = "peasants" | "women" | "enslaved";
const GROUPS: { id: GroupId; name: string; emoji: string }[] = [
  { id: "peasants", name: "Peasants and poorer men", emoji: "🌾" },
  { id: "women", name: "Women", emoji: "👩" },
  { id: "enslaved", name: "Enslaved people in the colonies", emoji: "⛓️" },
];
const CRITERIA = ["Equality", "Representation", "Rights"] as const;

interface Step {
  label: string;
  date: string;
  headline: string;
  /** [equality, representation, rights], each 0–4 (a judgement, not a measurement). */
  scores: Record<GroupId, [number, number, number]>;
  notes: Record<GroupId, string>;
  ruler: number;
  rulerNote: string;
}

const STEPS: Step[] = [
  {
    label: "1788",
    date: "1788",
    headline: "The Ancien Régime",
    scores: { peasants: [0, 0, 1], women: [0, 0, 0], enslaved: [0, 0, 0] },
    notes: {
      peasants: "Paid the taille, the tithe, the gabelle and feudal dues. No elected parliament; the king could imprison without trial.",
      women: "No political rights. A married woman's property was largely controlled by her husband.",
      enslaved: "Hundreds of thousands of enslaved people worked on plantations in France's Caribbean colonies, above all Saint-Domingue.",
    },
    ruler: 4,
    rulerNote: "Louis XVI: absolute monarch by Divine Right.",
  },
  {
    label: "Aug 1789",
    date: "August 1789",
    headline: "Privileges abolished; the Rights of Man",
    scores: { peasants: [2, 1, 3], women: [0, 0, 1], enslaved: [0, 0, 0] },
    notes: {
      peasants: "Feudal privileges abolished on 4 August (though many dues on land still had to be bought out). The Declaration promised liberty, equality in rights and a fair trial.",
      women: "The Declaration spoke of the rights of “men”. Women marched on Versailles in October, but gained no political rights.",
      enslaved: "The Declaration was not applied to the colonies. The Assembly avoided the question of slavery.",
    },
    ruler: 3,
    rulerNote: "Still king, but the National Assembly is writing a constitution — and in October the royal family is forced to Paris.",
  },
  {
    label: "1791",
    date: "1791",
    headline: "A constitutional monarchy",
    scores: { peasants: [3, 1, 3], women: [0, 0, 1], enslaved: [0, 0, 0] },
    notes: {
      peasants: "Equal before the law, but only “active citizens” — men who paid enough tax — could vote. Poorer men were “passive citizens”.",
      women: "Olympe de Gouges published her Declaration of the Rights of Woman. The Assembly ignored it.",
      enslaved: "In August 1791 enslaved people in Saint-Domingue rose up — taking freedom by force, though France did not yet recognise it.",
    },
    ruler: 2,
    rulerNote: "The 1791 Constitution limits the king's power. After the Flight to Varennes, trust in him collapses.",
  },
  {
    label: "1792",
    date: "September 1792",
    headline: "The Republic",
    scores: { peasants: [3, 3, 3], women: [1, 0, 2], enslaved: [0, 0, 0] },
    notes: {
      peasants: "The National Convention was elected by almost all adult men — the widest vote yet.",
      women: "A divorce law (September 1792) let wives and husbands divorce on equal terms. Still no vote.",
      enslaved: "Slavery continued in law, while the revolt in Saint-Domingue went on.",
    },
    ruler: 0,
    rulerNote: "Monarchy abolished on 21 September 1792. No single ruler.",
  },
  {
    label: "1793–94",
    date: "1793–94",
    headline: "The Terror",
    scores: { peasants: [4, 2, 1], women: [1, 0, 1], enslaved: [3, 2, 3] },
    notes: {
      peasants: "Remaining feudal dues abolished without compensation (1793). But the Law of Suspects swept away fair trials, and more than half of those officially executed were peasants and workers.",
      women: "Women's political clubs banned (October 1793). Olympe de Gouges was guillotined in November 1793.",
      enslaved: "Slavery abolished in all French colonies on 4 February 1794, driven by the revolt. Deputies from Saint-Domingue, including the formerly enslaved Jean-Baptiste Belley, sat in the Convention.",
    },
    ruler: 1,
    rulerNote: "Power is concentrated in the Committee of Public Safety — a small group, not one ruler.",
  },
  {
    label: "1795–99",
    date: "1795–99",
    headline: "The Directory",
    scores: { peasants: [4, 1, 2], women: [1, 0, 1], enslaved: [3, 2, 3] },
    notes: {
      peasants: "The Terror is over and feudalism stays dead, but voting is limited by property again.",
      women: "No change: no vote, no clubs.",
      enslaved: "Abolition stays in force for now.",
    },
    ruler: 1,
    rulerNote: "Five Directors share power, increasingly propped up by the army.",
  },
  {
    label: "1802",
    date: "1802",
    headline: "Napoleon, Consul for life",
    scores: { peasants: [4, 1, 2], women: [1, 0, 1], enslaved: [0, 0, 0] },
    notes: {
      peasants: "Peasants keep their land and freedom from feudal dues. Plebiscites replace real choice.",
      women: "No political rights.",
      enslaved: "Napoleon restores slavery in the colonies. In Saint-Domingue, war breaks out against his army.",
    },
    ruler: 3,
    rulerNote: "Napoleon made Consul for life after a plebiscite.",
  },
  {
    label: "1804",
    date: "1804",
    headline: "The Emperor and the Code",
    scores: { peasants: [4, 1, 2], women: [0, 0, 0], enslaved: [0, 0, 0] },
    notes: {
      peasants: "The Napoleonic Code keeps equality before the law for men. But newspapers are censored and elected assemblies have little power.",
      women: "The Code says wives owe obedience to their husbands; divorce becomes harder, especially for wives.",
      enslaved: "Slavery continues in the French colonies until 1848. But in Haiti people freed themselves — independence on 1 January 1804.",
    },
    ruler: 4,
    rulerNote: "Napoleon crowns himself Emperor — one-man rule again, but resting on the army and plebiscites, not Divine Right.",
  },
];

function Meter({ value, base, label }: { value: number; base?: number; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-28 shrink-0 text-xs font-bold text-ink-2">{label}</span>
      <div className="flex gap-1" role="img" aria-label={`${label}: ${value} out of 4${base !== undefined ? `, was ${base} in 1788` : ""}`}>
        {[1, 2, 3, 4].map((n) => (
          <span
            key={n}
            className={`h-4 w-7 rounded-sm border ${n <= value ? "border-brand bg-brand" : base !== undefined && n <= base ? "border-ink-2 bg-surface-2" : "border-line bg-surface"}`}
          />
        ))}
      </div>
      {base !== undefined && value !== base ? (
        <span className={`text-xs font-extrabold ${value > base ? "text-good" : "text-bad"}`}>{value > base ? `▲${value - base}` : `▼${base - value}`}</span>
      ) : null}
    </div>
  );
}

function ChangeContinuity() {
  const [step, setStep] = useState(0);
  const [compare, setCompare] = useState(true);
  const s = STEPS[step];
  const first = STEPS[0];
  const total = (g: GroupId, st: Step) => st.scores[g].reduce((a, b) => a + b, 0);

  // Small line chart of each group's total (0–12) across all steps, drawn to scale.
  const cw = 440;
  const ch = 110;
  const px = (i: number) => 30 + (i / (STEPS.length - 1)) * (cw - 40);
  const py = (v: number) => 12 + (1 - v / 12) * (ch - 30);
  const lineClass: Record<GroupId, string> = { peasants: "stroke-good", women: "stroke-brand", enslaved: "stroke-accent" };
  const dotClass: Record<GroupId, string> = { peasants: "fill-good", women: "fill-brand", enslaved: "fill-accent" };

  return (
    <WidgetFrame
      title="Revolution timeline: change or continuity?"
      tryThis={[
        "Step to **1804**. Which group ends up roughly where it started in 1788? Is that continuity — or did things get worse?",
        "Find the step when enslaved people's meters were highest. What caused the jump — and what undid it?",
        "Which group's gains **lasted**? Use the ▲ arrows to compare 1804 with 1788.",
        "Watch the **Ruler** meter. Is 1804 a return to 1788, or something new? Give one difference.",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>
              {s.date}: {s.headline}.
            </strong>{" "}
            {s.rulerNote}
          </p>
          <p>
            The meters are <em>judgements</em> on a 0–4 scale, not measurements — argue with them. The pattern they show is real, though: change came fastest for groups who could put pressure on the government (the Paris crowd, property-owning men, enslaved people in revolt) and stalled or went backwards for women. Ask of any change: <strong>for whom?</strong> and <strong>did it last?</strong>
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-1" role="group" aria-label="Choose a point in time">
          {STEPS.map((st, i) => (
            <button
              key={st.label}
              type="button"
              onClick={() => setStep(i)}
              aria-pressed={i === step}
              className={`min-h-[40px] rounded-lg px-2.5 text-sm font-bold transition ${i === step ? "bg-brand text-brand-ink" : "bg-surface-2 text-ink-2 hover:text-ink"}`}
            >
              {st.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className="btn btn-secondary min-h-[40px]" onClick={() => setStep((n) => Math.max(0, n - 1))} disabled={step === 0}>
            ◀ Earlier
          </button>
          <button type="button" className="btn btn-primary min-h-[40px]" onClick={() => setStep((n) => Math.min(STEPS.length - 1, n + 1))} disabled={step === STEPS.length - 1}>
            Later ▶
          </button>
          <label className="ml-auto flex min-h-[40px] items-center gap-2 text-sm font-semibold text-ink-2">
            <input type="checkbox" checked={compare} onChange={(e) => setCompare(e.target.checked)} />
            Compare with 1788
          </label>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {GROUPS.map((g) => (
            <div key={g.id} className="rounded-xl border border-line bg-surface p-3">
              <div className="text-sm font-extrabold text-ink">
                <span aria-hidden className="mr-1">{g.emoji}</span>
                {g.name}
              </div>
              <div className="mt-2 space-y-1">
                {CRITERIA.map((c, ci) => (
                  <Meter key={c} label={c} value={s.scores[g.id][ci]} base={compare && step > 0 ? first.scores[g.id][ci] : undefined} />
                ))}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-ink-2">{s.notes[g.id]}</p>
            </div>
          ))}
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="text-sm font-extrabold text-ink">
              <span aria-hidden className="mr-1">👑</span>
              The ruler
            </div>
            <div className="mt-2">
              <Meter label="Power of one ruler" value={s.ruler} base={compare && step > 0 ? first.ruler : undefined} />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-ink-2">{s.rulerNote}</p>
          </div>
        </div>

        <svg
          viewBox={`0 0 ${cw} ${ch}`}
          className="h-auto w-full"
          role="img"
          aria-label={`Line chart of each group's total score out of 12 from 1788 to 1804. At ${s.label}: ${GROUPS.map((g) => `${g.name} ${total(g.id, s)}`).join(", ")}.`}
        >
          {[0, 6, 12].map((v) => (
            <g key={v}>
              <line x1={30} x2={cw - 10} y1={py(v)} y2={py(v)} className="stroke-line" strokeWidth={1} />
              <text x={24} y={py(v) + 3} fontSize={9} textAnchor="end" className="fill-ink-2">
                {v}
              </text>
            </g>
          ))}
          <line x1={px(step)} x2={px(step)} y1={8} y2={ch - 18} className="stroke-ink-2" strokeDasharray="3,3" />
          {GROUPS.map((g) => (
            <polyline
              key={g.id}
              fill="none"
              className={lineClass[g.id]}
              strokeWidth={2}
              points={STEPS.map((st, i) => `${px(i)},${py(total(g.id, st))}`).join(" ")}
            />
          ))}
          {GROUPS.map((g) => (
            <circle key={g.id} cx={px(step)} cy={py(total(g.id, s))} r={4.5} className={`${dotClass[g.id]} stroke-surface`} strokeWidth={2} />
          ))}
          {STEPS.map((st, i) => (
            <text key={st.label} x={px(i)} y={ch - 4} fontSize={9} textAnchor="middle" className={i === step ? "fill-ink" : "fill-ink-2"} fontWeight={i === step ? 700 : 400}>
              {st.label}
            </text>
          ))}
        </svg>
        <div className="flex flex-wrap gap-3 text-xs font-semibold text-ink-2">
          {GROUPS.map((g) => (
            <span key={g.id} className="flex items-center gap-1">
              <svg width="18" height="8" aria-hidden>
                <line x1="0" x2="18" y1="4" y2="4" className={lineClass[g.id]} strokeWidth={2} />
              </svg>
              {g.name}: {total(g.id, s)}/12
            </span>
          ))}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "three-estates",
    title: "Three Estates: who paid?",
    blurb: "Compare population, land and tax for the three estates — then see why the voting rule in May 1789 mattered so much.",
    Component: ThreeEstates,
  },
  {
    id: "change-or-continuity",
    title: "Revolution timeline: change or continuity?",
    blurb: "Step from 1788 to 1804 and watch equality, representation and rights rise and fall for different groups.",
    Component: ChangeContinuity,
  },
];
