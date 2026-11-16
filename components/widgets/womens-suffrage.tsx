"use client";
import { useMemo, useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Electorate explorer, 1832–1928
// ---------------------------------------------------------------------------

interface Stage {
  label: string;
  law: string;
  /** Approximate UK parliamentary electorate, millions. */
  total: number;
  /** Women voters, millions (approximate). */
  women: number;
  menNote: string;
  womenNote: string;
}

// Figures as used in the topic guide (approximate; historians' estimates vary slightly).
const STAGES: Stage[] = [
  { label: "Before 1832", law: "The old system: property rules, rotten boroughs, open voting", total: 0.5, women: 0, menNote: "about 3% of adults — all men", womenNote: "none" },
  { label: "1832", law: "Great Reform Act: middle-class men with £10 property", total: 0.8, women: 0, menNote: "about 1 in 5 men (England and Wales)", womenNote: "none — the Act said voters must be a ‘male person’" },
  { label: "1867", law: "Second Reform Act: male householders in towns", total: 2.5, women: 0, menNote: "about 1 in 3 men", womenNote: "none — Mill's amendment lost 196 to 73" },
  { label: "1884", law: "Third Reform Act: male householders in the countryside", total: 5.7, women: 0, menNote: "about 6 in 10 men", womenNote: "none" },
  { label: "1918", law: "Representation of the People Act: all men over 21; women over 30 with a property qualification", total: 21.4, women: 8.4, menNote: "all men over 21 (19 if they had served in the war)", womenNote: "about 8.4 million women over 30 — roughly 40% of voters" },
  { label: "1928", law: "Equal Franchise Act: women vote at 21 on the same terms as men", total: 28.9, women: 15.2, menNote: "all men over 21", womenNote: "all women over 21 — now just over half of all voters" },
];

type Status = "yes" | "no" | "unlikely" | "depends";

interface Voter {
  id: string;
  name: string;
  who: string;
  /** One status per stage, with a short reason. */
  at: [Status, string][];
}

const VOTERS: Voter[] = [
  {
    id: "shop",
    name: "Mr Clarke",
    who: "middle-class shop owner in Manchester, property worth well over £10 a year",
    at: [
      ["depends", "Manchester had no MP of its own; he could only vote for the county if he owned freehold land worth 40 shillings a year."],
      ["yes", "The £10 property rule was made for men like him."],
      ["yes", "Still a property-owning man."],
      ["yes", "Still a property-owning man."],
      ["yes", "All men over 21."],
      ["yes", "All men over 21."],
    ],
  },
  {
    id: "factory",
    name: "Tom",
    who: "factory worker who rents a small house in a town",
    at: [
      ["unlikely", "Voting rules varied by borough, but few working men qualified."],
      ["unlikely", "Most working men's rents were below the £10 line."],
      ["yes", "Male householders in towns gained the vote."],
      ["yes", "Still a male householder."],
      ["yes", "All men over 21."],
      ["yes", "All men over 21."],
    ],
  },
  {
    id: "farm",
    name: "Will",
    who: "farm labourer who rents a cottage in the countryside",
    at: [
      ["no", "County votes needed land worth 40 shillings a year."],
      ["no", "1832 helped middle-class men, not labourers."],
      ["no", "1867 helped householders in towns, not the countryside."],
      ["yes", "1884 gave the vote to male householders in the countryside."],
      ["yes", "All men over 21."],
      ["yes", "All men over 21."],
    ],
  },
  {
    id: "son",
    name: "Harry",
    who: "22-year-old who lives in his parents' house (not a householder)",
    at: [
      ["no", "No property of his own."],
      ["no", "No property of his own."],
      ["unlikely", "The householder vote did not cover sons living at home."],
      ["unlikely", "Still not a householder — about 4 in 10 men still had no vote."],
      ["yes", "From 1918 men no longer needed to be householders: age 21 was the test."],
      ["yes", "All men over 21."],
    ],
  },
  {
    id: "wife",
    name: "Mrs Brown",
    who: "35-year-old married woman whose husband is a householder",
    at: [
      ["no", "No woman could vote for Parliament."],
      ["no", "The 1832 Act said ‘male person’."],
      ["no", "No woman could vote for Parliament."],
      ["no", "No woman could vote for Parliament."],
      ["yes", "Over 30 and married to a householder."],
      ["yes", "All women over 21."],
    ],
  },
  {
    id: "single",
    name: "Miss Hale",
    who: "40-year-old unmarried woman who owns her house and pays rates",
    at: [
      ["no", "No woman could vote for Parliament."],
      ["no", "The 1832 Act said ‘male person’."],
      ["no", "Not for Parliament — though from 1869 she could vote in town council elections."],
      ["no", "Not for Parliament, though she pays rates and can vote locally."],
      ["yes", "Over 30 and a householder."],
      ["yes", "All women over 21."],
    ],
  },
  {
    id: "worker",
    name: "Ellen",
    who: "25-year-old unmarried mill worker who lodges in someone else's house",
    at: [
      ["no", "No woman could vote for Parliament."],
      ["no", "No woman could vote for Parliament."],
      ["no", "No woman could vote for Parliament."],
      ["no", "No woman could vote for Parliament."],
      ["no", "Under 30 and no property — yet from November 1918 she could stand as an MP at 21!"],
      ["yes", "All women over 21."],
    ],
  },
];

const STATUS_STYLE: Record<Status, { label: string; cls: string }> = {
  yes: { label: "Can vote", cls: "bg-good-soft text-good" },
  no: { label: "Cannot vote", cls: "bg-bad-soft text-bad" },
  unlikely: { label: "Almost certainly not", cls: "bg-bad-soft text-bad" },
  depends: { label: "It depends", cls: "bg-surface-2 text-ink-2" },
};

function ElectorateExplorer() {
  const [i, setI] = useState(0);
  const [voterId, setVoterId] = useState("factory");
  const s = STAGES[i];
  const voter = VOTERS.find((v) => v.id === voterId) ?? VOTERS[0];
  const [status, reason] = voter.at[i];
  const firstYes = voter.at.findIndex(([st]) => st === "yes");

  const W = 480, H = 250, left = 40, right = 10, top = 16, bottom = 40;
  const max = 30;
  const bw = (W - left - right) / STAGES.length;
  const y = (v: number) => H - bottom - (v / max) * (H - top - bottom);
  const prev = i > 0 ? STAGES[i - 1] : null;
  const growth = prev ? s.total / prev.total : null;

  return (
    <WidgetFrame
      title="Who could vote? The electorate, 1832–1928"
      tryThis={[
        "Pick **Tom the factory worker**. Which Act first gave him the vote — and why not 1832?",
        "Step from 1884 to 1918. How many times bigger did the electorate get, and how much of the jump was women?",
        "Pick **Ellen**. Find the years when she could stand as an MP but still not vote. What does that tell you about the 1918 compromise?",
        "Which person waited longest? Is the story one of steady progress — or bursts?",
      ]}
      caption={
        <>
          <p>
            <strong>{s.label}:</strong> {s.law}. About <strong>{s.total} million</strong> people could vote — men: {s.menNote}; women: {s.womenNote}.
            {growth ? <> That is about <strong>{growth.toFixed(1)}×</strong> the electorate after {prev!.label}.</> : null}
          </p>
          <p className="mt-2">
            <strong>{voter.name}</strong> ({voter.who}): <strong>{STATUS_STYLE[status].label.toLowerCase()}</strong> — {reason}{" "}
            {firstYes >= 0 ? <>First able to vote: <strong>{STAGES[firstYes].label}</strong>.</> : null}
          </p>
          <p className="mt-2 text-xs text-ink-2">
            Figures: approximate UK parliamentary electorates after each Act, as used in this topic's guide; historians' estimates vary slightly, and the 1928 split
            (women about 53% of voters at the 1929 election) is approximate. Individual cases are simplified — before 1918 the rules varied from place to place.
          </p>
        </>
      }
    >
      <div className="space-y-4">
        <Slider label="Reform stage" value={i} min={0} max={STAGES.length - 1} onChange={setI} format={(v) => STAGES[v].label} />

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label={`Bar chart of the approximate UK electorate. Selected: ${s.label}, about ${s.total} million voters, of whom about ${s.women} million were women.`}
        >
          {[0, 10, 20, 30].map((v) => (
            <g key={v}>
              <line x1={left} x2={W - right} y1={y(v)} y2={y(v)} className="stroke-line" strokeWidth={1} />
              <text x={left - 6} y={y(v) + 4} fontSize={11} textAnchor="end" className="fill-ink-2">{v}m</text>
            </g>
          ))}
          {STAGES.map((st, k) => {
            const x = left + k * bw + bw * 0.15;
            const w = bw * 0.7;
            const on = k === i;
            const menTop = y(st.total);
            const womenTop = y(st.women);
            return (
              <g key={st.label} onClick={() => setI(k)} style={{ cursor: "pointer" }}>
                <rect x={x} y={menTop} width={w} height={y(0) - menTop} className={on ? "fill-brand" : "fill-ink-2"} opacity={on ? 1 : 0.35} rx={3} />
                {st.women > 0 ? (
                  <rect x={x} y={womenTop} width={w} height={y(0) - womenTop} className="fill-accent" opacity={on ? 1 : 0.45} />
                ) : null}
                <text x={x + w / 2} y={menTop - 5} fontSize={11} textAnchor="middle" className={on ? "fill-ink" : "fill-ink-2"} fontWeight={on ? 800 : 400}>
                  {st.total}m
                </text>
                <text x={x + w / 2} y={H - bottom + 16} fontSize={11} textAnchor="middle" className={on ? "fill-ink" : "fill-ink-2"} fontWeight={on ? 800 : 400}>
                  {k === 0 ? "pre-1832" : st.label}
                </text>
              </g>
            );
          })}
          <rect x={left + 4} y={H - 16} width={10} height={10} className="fill-brand" />
          <text x={left + 18} y={H - 7} fontSize={11} className="fill-ink-2">men</text>
          <rect x={left + 58} y={H - 16} width={10} height={10} className="fill-accent" />
          <text x={left + 72} y={H - 7} fontSize={11} className="fill-ink-2">women</text>
        </svg>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="Electorate" value={`≈ ${s.total}m`} />
          <Readout label="Women voters" value={s.women ? `≈ ${s.women}m` : "0"} tone={s.women ? "good" : "bad"} />
          <Readout label="Men voters" value={`≈ ${Math.round((s.total - s.women) * 10) / 10}m`} tone="ink" />
        </div>

        <div>
          <div className="mb-2 text-sm font-semibold text-ink-2">Choose a person:</div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" role="radiogroup" aria-label="Choose a person">
            {VOTERS.map((v) => (
              <button
                key={v.id}
                type="button"
                role="radio"
                aria-checked={v.id === voterId}
                onClick={() => setVoterId(v.id)}
                className={`min-h-[2.75rem] rounded-xl border px-2 py-1.5 text-left text-sm font-bold transition ${
                  v.id === voterId ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink-2 hover:text-ink"
                }`}
              >
                {v.name}
              </button>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-line bg-surface p-3">
            <div className="text-sm text-ink-2">{voter.name}: {voter.who}</div>
            <div className="mt-2 flex flex-wrap gap-1.5" aria-label={`Voting status of ${voter.name} at each stage`}>
              {STAGES.map((st, k) => {
                const [stt] = voter.at[k];
                return (
                  <button
                    key={st.label}
                    type="button"
                    onClick={() => setI(k)}
                    aria-label={`${st.label}: ${STATUS_STYLE[stt].label}`}
                    className={`min-h-[2.5rem] rounded-lg px-2 py-1 text-xs font-bold ${STATUS_STYLE[stt].cls} ${k === i ? "ring-2 ring-brand" : ""}`}
                  >
                    {k === 0 ? "pre-1832" : st.label} {stt === "yes" ? "✓" : stt === "depends" ? "?" : "✗"}
                  </button>
                );
              })}
            </div>
            <div className={`mt-2 inline-block rounded-lg px-2 py-1 text-sm font-extrabold ${STATUS_STYLE[status].cls}`}>{STATUS_STYLE[status].label}</div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Tactics sorter + impact debate
// ---------------------------------------------------------------------------

type Group = "suffragist" | "suffragette";
type Rating = "helped" | "mixed" | "backfired";

interface Tactic {
  id: string;
  name: string;
  detail: string;
  group: Group;
  helped: string;
  hurt: string;
}

const TACTICS: Tactic[] = [
  {
    id: "petitions",
    name: "Petitions and public meetings",
    detail: "From Mill's petition of 1866 onwards; leaflets and the newspaper The Common Cause (1909).",
    group: "suffragist",
    helped: "Showed huge, respectable support and slowly won a majority of MPs to the principle.",
    hurt: "Easy for the government to ignore — bills kept running out of time.",
  },
  {
    id: "pilgrimage",
    name: "The Great Pilgrimage (1913)",
    detail: "Women walked from all over Britain to a rally of about 50,000 people in Hyde Park.",
    group: "suffragist",
    helped: "Proved support was nationwide and law-abiding — the opposite of the ‘hysterical’ stereotype.",
    hurt: "Got far less press attention than suffragette militancy.",
  },
  {
    id: "lobbying",
    name: "Lobbying MPs and the Election Fighting Fund",
    detail: "Persuading MPs; from 1912 backing Labour candidates, the only party officially in favour.",
    group: "suffragist",
    helped: "Built alliances in Parliament and with Labour that were still there when the moment came in 1916–18.",
    hurt: "Could not overcome Asquith, who controlled Parliament's timetable until 1916.",
  },
  {
    id: "mudmarch",
    name: "The ‘Mud March’ (1907)",
    detail: "A procession through rain-soaked London — one of the first big suffrage marches.",
    group: "suffragist",
    helped: "Showed respectable women were willing to march in public for the vote.",
    hurt: "Won sympathy but no change in the law.",
  },
  {
    id: "heckling",
    name: "Heckling politicians and choosing prison (1905)",
    detail: "Christabel Pankhurst and Annie Kenney were arrested at a Liberal meeting and chose prison for publicity.",
    group: "suffragette",
    helped: "Put votes for women on front pages nationwide in a way polite meetings had not.",
    hurt: "Critics called it unladylike disruption.",
  },
  {
    id: "windows",
    name: "Mass window-smashing (March 1912)",
    detail: "Hundreds of shop windows smashed in London's West End.",
    group: "suffragette",
    helped: "Made the issue impossible to ignore — ‘the argument of the broken pane of glass’.",
    hurt: "Handed opponents a ready-made argument: ‘women who break windows are not fit to vote’.",
  },
  {
    id: "hunger",
    name: "Hunger strikes in prison (from 1909)",
    detail: "Begun by Marion Wallace Dunlop; the government answered with force-feeding.",
    group: "suffragette",
    helped: "Force-feeding was widely condemned and won public sympathy.",
    hurt: "The 1913 ‘Cat and Mouse Act’ let the government wear hunger strikers down without making martyrs.",
  },
  {
    id: "arson",
    name: "Arson and bombs on empty buildings (1913–14)",
    detail: "Postboxes, churches and a house being built for Lloyd George were attacked.",
    group: "suffragette",
    helped: "Kept the cause in the headlines and showed how strongly women felt.",
    hurt: "Lost public sympathy, could have killed people, and let the government refuse to ‘give in to violence’.",
  },
];

const RATING_VALUE: Record<Rating, number> = { helped: 1, mixed: 0, backfired: -1 };

function TacticsSorter() {
  const [mode, setMode] = useState<"sort" | "weigh">("sort");
  const [guess, setGuess] = useState<Record<string, Group>>({});
  const [rating, setRating] = useState<Record<string, Rating>>({});

  const sorted = Object.keys(guess).length;
  const correct = TACTICS.filter((t) => guess[t.id] === t.group).length;

  const { ist, ette } = useMemo(() => {
    let a = 0, b = 0;
    for (const t of TACTICS) {
      const v = RATING_VALUE[rating[t.id] ?? "mixed"];
      if (t.group === "suffragist") a += v;
      else b += v;
    }
    return { ist: a, ette: b };
  }, [rating]);

  // Beam tilts down towards the side the learner judges more effective.
  const diff = ist - ette; // −8 … 8
  const angle = Math.max(-18, Math.min(18, -diff * 2.25));
  const verdict =
    diff > 1
      ? "In your judgement, the suffragists' peaceful methods did more. That is close to historian Martin Pugh, who argues militancy hardened opposition and the NUWSS mattered more."
      : diff < -1
        ? "In your judgement, the suffragettes' militancy did more. That is close to historian June Purvis, who argues the WSPU put votes for women at the centre of national politics."
        : "Your judgement is roughly balanced. Many historians argue the two campaigns worked together: suffragettes won attention, suffragists won respectability and allies.";

  const W = 360, H = 170, cx = 180, cy = 60, arm = 120;
  const rad = (angle * Math.PI) / 180;
  const lx = cx - arm * Math.cos(rad), ly = cy - arm * Math.sin(rad);
  const rx = cx + arm * Math.cos(rad), ry = cy + arm * Math.sin(rad);

  return (
    <WidgetFrame
      title="Suffragist or suffragette? Sort the tactics, then weigh their impact"
      tryThis={[
        "**Sort** all eight tactics. Which clues gave each one away — the law, the group or the leader?",
        "In **Weigh** mode, rate every suffragette tactic ‘helped’. Now read the ‘backfired’ arguments — would an MP in 1912 agree with you?",
        "Can you make the scale level? What argument would justify that judgement?",
        "Remember: neither campaign had won the vote by 1914. What does that suggest about the role of the war?",
      ]}
      caption={
        mode === "sort" ? (
          <p>
            {sorted === 0
              ? "Tap a group for each tactic. Suffragists (NUWSS, Millicent Fawcett) used peaceful, legal methods; suffragettes (WSPU, Emmeline Pankhurst) used ‘Deeds not words’."
              : `You have sorted ${sorted} of ${TACTICS.length} tactics, ${correct} correctly. ${
                  sorted === TACTICS.length
                    ? correct === TACTICS.length
                      ? "All correct — now switch to Weigh to judge which methods worked."
                      : "Check the ones marked ✗, then switch to Weigh."
                    : ""
                }`}
          </p>
        ) : (
          <>
            <p>
              Suffragist score <strong>{ist > 0 ? `+${ist}` : ist}</strong>, suffragette score <strong>{ette > 0 ? `+${ette}` : ette}</strong> (helped = +1,
              mixed = 0, backfired = −1). {verdict}
            </p>
            <p className="mt-2 text-xs text-ink-2">
              This scale shows <em>your</em> argument, not a right answer. Historians still disagree, and a strong answer links factors: by 1914 the campaigns had
              largely won the argument, and the First World War provided the opportunity.
            </p>
          </>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: "sort", label: "1 · Sort" },
            { value: "weigh", label: "2 · Weigh" },
          ]}
        />

        {mode === "weigh" ? (
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-auto w-full"
            role="img"
            aria-label={`Balance scale. Suffragist methods score ${ist}, suffragette methods score ${ette}. ${
              diff > 0 ? "The scale tips towards the suffragists." : diff < 0 ? "The scale tips towards the suffragettes." : "The scale is level."
            }`}
          >
            <polygon points={`${cx},${cy} ${cx - 22},${H - 14} ${cx + 22},${H - 14}`} className="fill-surface-2 stroke-ink-2" strokeWidth={1.5} />
            <line x1={lx} y1={ly} x2={rx} y2={ry} className="stroke-ink" strokeWidth={4} strokeLinecap="round" />
            <circle cx={cx} cy={cy} r={5} className="fill-ink" />
            {[
              { x: lx, y: ly, label: "Suffragists", score: ist, cls: "fill-brand" },
              { x: rx, y: ry, label: "Suffragettes", score: ette, cls: "fill-accent" },
            ].map((p) => (
              <g key={p.label}>
                <line x1={p.x} y1={p.y} x2={p.x - 28} y2={p.y + 40} className="stroke-ink-2" strokeWidth={1} />
                <line x1={p.x} y1={p.y} x2={p.x + 28} y2={p.y + 40} className="stroke-ink-2" strokeWidth={1} />
                <rect x={p.x - 40} y={p.y + 40} width={80} height={12} rx={6} className={p.cls} />
                <text x={p.x} y={p.y + 70} fontSize={12} textAnchor="middle" fontWeight={800} className="fill-ink">{p.label}</text>
                <text x={p.x} y={p.y + 85} fontSize={11} textAnchor="middle" className="fill-ink-2">score {p.score > 0 ? `+${p.score}` : p.score}</text>
              </g>
            ))}
          </svg>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            <Readout label="Sorted" value={`${sorted} / ${TACTICS.length}`} tone="ink" />
            <Readout label="Correct" value={`${correct}`} tone={correct === sorted ? "good" : "bad"} />
          </div>
        )}

        <ul className="space-y-3">
          {TACTICS.map((t) => {
            const g = guess[t.id];
            const right = g === t.group;
            return (
              <li key={t.id} className="rounded-xl border border-line bg-surface p-3">
                <div className="font-extrabold text-ink">{t.name}</div>
                <div className="text-sm text-ink-2">{t.detail}</div>
                {mode === "sort" ? (
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {(["suffragist", "suffragette"] as Group[]).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        aria-pressed={g === opt}
                        onClick={() => setGuess((m) => ({ ...m, [t.id]: opt }))}
                        className={`btn btn-sm ${g === opt ? "btn-primary" : "btn-secondary"}`}
                      >
                        {opt === "suffragist" ? "Suffragist (NUWSS)" : "Suffragette (WSPU)"}
                      </button>
                    ))}
                    {g ? (
                      <span className={`rounded-lg px-2 py-1 text-sm font-bold ${right ? "bg-good-soft text-good" : "bg-bad-soft text-bad"}`}>
                        {right ? "✓ Correct" : `✗ It was the ${t.group === "suffragist" ? "suffragists" : "suffragettes"}`}
                      </span>
                    ) : null}
                  </div>
                ) : (
                  <div className="mt-2 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
                      {t.group === "suffragist" ? "Suffragists (NUWSS)" : "Suffragettes (WSPU)"}
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="rounded-lg bg-good-soft p-2 text-sm text-ink"><strong className="text-good">Helped: </strong>{t.helped}</div>
                      <div className="rounded-lg bg-bad-soft p-2 text-sm text-ink"><strong className="text-bad">Limits / backfired: </strong>{t.hurt}</div>
                    </div>
                    <Segmented
                      label={`Your judgement on ${t.name}`}
                      value={rating[t.id] ?? "mixed"}
                      onChange={(v) => setRating((m) => ({ ...m, [t.id]: v }))}
                      options={[
                        { value: "helped", label: "Helped" },
                        { value: "mixed", label: "Mixed" },
                        { value: "backfired", label: "Backfired" },
                      ]}
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => (mode === "sort" ? setGuess({}) : setRating({}))}>
            Reset {mode === "sort" ? "sorting" : "judgements"}
          </button>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "electorate-explorer",
    title: "Who could vote? 1832–1928",
    blurb: "Step through each Reform Act, watch the electorate grow and test who could vote when.",
    Component: ElectorateExplorer,
  },
  {
    id: "tactics-sorter",
    title: "Tactics sorter and impact debate",
    blurb: "Sort suffragist and suffragette tactics, then weigh which methods did more to win the vote.",
    Component: TacticsSorter,
  },
];
