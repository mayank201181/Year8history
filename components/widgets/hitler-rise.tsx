"use client";
import { useMemo, useState } from "react";
import { WidgetFrame, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Election explorer, 1928 – March 1933
// ---------------------------------------------------------------------------

type PartyKey = "kpd" | "spd" | "lib" | "centre" | "dnvp" | "nsdap" | "other";

interface Party {
  key: PartyKey;
  short: string;
  name: string;
  fill: string;
  bg: string;
  stance: string;
}

// Left → right across the political spectrum.
const PARTIES: Party[] = [
  { key: "kpd", short: "KPD", name: "Communists (KPD)", fill: "fill-brand", bg: "bg-brand", stance: "wanted a Soviet-style revolution — against the Republic" },
  { key: "spd", short: "SPD", name: "Social Democrats (SPD)", fill: "fill-bad", bg: "bg-bad", stance: "the Republic's strongest defenders" },
  { key: "lib", short: "Liberals", name: "Liberals (DDP/DStP + DVP)", fill: "fill-s-geometry", bg: "bg-s-geometry", stance: "middle-class parties that collapsed after 1930" },
  { key: "centre", short: "Centre", name: "Catholic Centre (Zentrum + BVP)", fill: "fill-s-number", bg: "bg-s-number", stance: "Catholic parties, Brüning's base" },
  { key: "dnvp", short: "DNVP", name: "Nationalists (DNVP)", fill: "fill-s-ratio", bg: "bg-s-ratio", stance: "conservative nationalists, Hugenberg's party" },
  { key: "nsdap", short: "Nazis", name: "Nazis (NSDAP)", fill: "fill-ink", bg: "bg-ink", stance: "wanted to destroy the Republic" },
  { key: "other", short: "Others", name: "All other small parties", fill: "fill-ink-2", bg: "bg-ink-2", stance: "regional and single-issue parties" },
];

interface Election {
  id: string;
  label: string;
  total: number;
  /** Registered unemployed, millions, approximate (nearest month). */
  unemployed: number;
  unemployedNote: string;
  seats: Record<PartyKey, number>;
  votes: Record<PartyKey, number>;
  caption: string;
}

// Reichstag results (seats; vote %). Parties grouped: Centre = Zentrum + BVP; Liberals = DDP/DStP + DVP.
const ELECTIONS: Election[] = [
  {
    id: "1928",
    label: "May 1928",
    total: 491,
    unemployed: 1.4,
    unemployedNote: "about 1.4 million (1928 average)",
    seats: { kpd: 54, spd: 153, lib: 70, centre: 78, dnvp: 73, nsdap: 12, other: 51 },
    votes: { kpd: 10.6, spd: 29.8, lib: 13.6, centre: 15.2, dnvp: 14.2, nsdap: 2.6, other: 14.0 },
    caption:
      "The 'Golden Years': American loans had helped the economy recover and unemployment was relatively low. The Nazis were a fringe party with 12 seats (2.6%). The pro-Republic SPD was by far the largest party and led a broad coalition.",
  },
  {
    id: "1930",
    label: "Sep 1930",
    total: 577,
    unemployed: 3.0,
    unemployedNote: "about 3 million",
    seats: { kpd: 77, spd: 143, lib: 50, centre: 87, dnvp: 41, nsdap: 107, other: 72 },
    votes: { kpd: 13.1, spd: 24.5, lib: 8.5, centre: 14.8, dnvp: 7.0, nsdap: 18.3, other: 13.8 },
    caption:
      "A year after the Wall Street Crash, about 3 million were unemployed and Chancellor Brüning was governing by Article 48 decrees. The Nazis leapt from 12 to 107 seats — now the second-largest party. The Communists grew too: voters were moving to the extremes, and the middle-class Liberal and Nationalist parties lost heavily.",
  },
  {
    id: "jul1932",
    label: "Jul 1932",
    total: 608,
    unemployed: 5.4,
    unemployedNote: "about 5.4 million (over 6 million early in 1932)",
    seats: { kpd: 89, spd: 133, lib: 11, centre: 97, dnvp: 37, nsdap: 230, other: 11 },
    votes: { kpd: 14.3, spd: 21.6, lib: 2.2, centre: 15.7, dnvp: 5.9, nsdap: 37.3, other: 3.0 },
    caption:
      "The Nazis' peak in a free election: 230 seats and about 37% — the largest party, but no majority. Nazis and Communists together held 319 of 608 seats, so the two anti-democratic parties could vote down any government: the Reichstag was paralysed. In August Hindenburg still refused to make Hitler Chancellor.",
  },
  {
    id: "nov1932",
    label: "Nov 1932",
    total: 584,
    unemployed: 5.1,
    unemployedNote: "about 5.1 million",
    seats: { kpd: 100, spd: 121, lib: 13, centre: 90, dnvp: 52, nsdap: 196, other: 12 },
    votes: { kpd: 16.9, spd: 20.4, lib: 2.9, centre: 15.0, dnvp: 8.3, nsdap: 33.1, other: 3.4 },
    caption:
      "The Nazis lost 34 seats and about 2 million votes; party funds were running out and some thought the Nazi tide had peaked. But the Communists reached 100 seats, frightening business leaders and conservatives. Two months later Papen persuaded Hindenburg to appoint Hitler — the Nazis came to power after their vote had started to fall.",
  },
  {
    id: "mar1933",
    label: "Mar 1933",
    total: 647,
    unemployed: 5.6,
    unemployedNote: "about 5.6 million",
    seats: { kpd: 81, spd: 120, lib: 7, centre: 92, dnvp: 52, nsdap: 288, other: 7 },
    votes: { kpd: 12.3, spd: 18.3, lib: 2.0, centre: 14.0, dnvp: 8.0, nsdap: 43.9, other: 1.5 },
    caption:
      "Not a free election: Hitler was already Chancellor, the Reichstag Fire Decree had suspended civil rights, Communist leaders were in prison and the SA broke up opponents' meetings. Even so, the Nazis won only about 44%. With the DNVP's 52 seats they had a bare majority (340 of 647) — but not the two-thirds needed for the Enabling Act.",
  },
];

const SEAT_MAX = 330;
const VOTE_MAX = 55;

function ElectionExplorer() {
  const [ei, setEi] = useState(2);
  const [mode, setMode] = useState<"seats" | "votes">("seats");
  const [coalition, setCoalition] = useState<PartyKey[]>([]);
  const e = ELECTIONS[ei];
  const majority = Math.floor(e.total / 2) + 1;
  const coalitionSeats = coalition.reduce((s, k) => s + e.seats[k], 0);
  const hasMajority = coalitionSeats >= majority;
  const largest = PARTIES.reduce((best, p) => (e.seats[p.key] > e.seats[best.key] ? p : best), PARTIES[0]);

  const toggle = (k: PartyKey) => setCoalition((c) => (c.includes(k) ? c.filter((x) => x !== k) : [...c, k]));

  // Main bar chart geometry.
  const W = 360;
  const x0 = 92;
  const barMax = 236;
  const top = 26;
  const rowH = 25;
  const scale = (v: number) => (mode === "seats" ? (v / SEAT_MAX) * barMax : (v / VOTE_MAX) * barMax);
  const majorityX = x0 + (mode === "seats" ? scale(majority) : scale(50));
  const chartH = top + PARTIES.length * rowH + 8;

  // Coalition bar.
  const cbTop = 8;
  const cbScale = (v: number) => (v / e.total) * 300;
  let acc = 0;

  const ariaMain = `${e.label} Reichstag election, ${mode === "seats" ? "seats" : "vote share"}: ${PARTIES.map((p) => `${p.short} ${mode === "seats" ? e.seats[p.key] : e.votes[p.key] + "%"}`).join(", ")}. Majority needs ${majority} of ${e.total} seats.`;

  const coalitionNames = PARTIES.filter((p) => coalition.includes(p.key)).map((p) => p.short);

  return (
    <WidgetFrame
      title="Election explorer: Reichstag 1928 – March 1933"
      tryThis={[
        "Step from May 1928 to July 1932. How did unemployment and the Nazi vote change together?",
        "In July 1932, add every party EXCEPT the Nazis and the Communists to the coalition. Can they reach a majority?",
        "Which election first made the Nazis the largest party? Did they have a majority on their own?",
        "In March 1933, which single party did the Nazis need to reach a majority? Did that give them the two-thirds needed to change the constitution?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>{e.label}:</strong> {e.caption}
          </p>
          <p className="text-ink-2">
            Largest party: <strong className="text-ink">{largest.name}</strong> with {e.seats[largest.key]} of {e.total} seats
            {e.seats[largest.key] >= majority ? " — a majority." : ` — ${majority - e.seats[largest.key]} short of a majority.`} Unemployment and Nazi votes rose together, but a link is not automatically a cause: historians also point to propaganda, fear of Communism and Hitler&apos;s appeal.
          </p>
        </div>
      }
    >
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Segmented
            label="Choose an election"
            value={ELECTIONS[ei].id}
            onChange={(v) => setEi(ELECTIONS.findIndex((x) => x.id === v))}
            options={ELECTIONS.map((x) => ({ value: x.id, label: x.label }))}
          />
          <Segmented
            label="Show seats or vote share"
            value={mode}
            onChange={setMode}
            options={[
              { value: "seats", label: "Seats" },
              { value: "votes", label: "Vote %" },
            ]}
          />
        </div>

        <svg viewBox={`0 0 ${W} ${chartH}`} className="h-auto w-full" role="img" aria-label={ariaMain}>
          <text x={4} y={12} fontSize={10} className="fill-ink-2">
            {mode === "seats" ? `Seats (of ${e.total}) — drawn to scale` : "Share of the vote (%) — drawn to scale"}
          </text>
          <line x1={majorityX} x2={majorityX} y1={top - 6} y2={chartH - 4} className="stroke-ink" strokeDasharray="4 3" strokeWidth={1.2} />
          <text x={Math.min(majorityX + 3, W - 2)} y={top - 8} fontSize={9} textAnchor={majorityX > W - 80 ? "end" : "start"} className="fill-ink">
            {mode === "seats" ? `majority: ${majority}` : "50%"}
          </text>
          {PARTIES.map((p, i) => {
            const y = top + i * rowH;
            const v = mode === "seats" ? e.seats[p.key] : e.votes[p.key];
            const w = Math.max(1, scale(v));
            const inCoalition = coalition.includes(p.key);
            return (
              <g key={p.key}>
                <text x={4} y={y + 14} fontSize={11} fontWeight={p.key === "nsdap" ? 800 : 600} className="fill-ink">
                  {p.short}
                </text>
                <rect x={x0} y={y + 3} width={w} height={rowH - 8} rx={3} className={p.fill} opacity={p.key === "other" ? 0.55 : 0.9} />
                {inCoalition ? <rect x={x0 - 1} y={y + 2} width={w + 2} height={rowH - 6} rx={3} fill="none" className="stroke-good" strokeWidth={2} /> : null}
                <text x={x0 + w + 4} y={y + 14} fontSize={10} className="fill-ink tabular-nums">
                  {mode === "seats" ? v : `${v.toFixed(1)}%`}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="rounded-xl border border-line bg-surface-2 p-3">
          <div className="text-sm font-bold text-ink">Coalition builder — tap parties to try to make a majority government</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {PARTIES.map((p) => {
              const on = coalition.includes(p.key);
              return (
                <button
                  key={p.key}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(p.key)}
                  className={`min-h-[40px] rounded-lg border px-3 text-sm font-bold transition ${on ? "border-good bg-good-soft text-ink" : "border-line bg-surface text-ink-2"}`}
                >
                  <span aria-hidden className={`mr-1.5 inline-block h-2.5 w-2.5 rounded-full ${p.bg}`} />
                  {p.short} ({e.seats[p.key]})
                </button>
              );
            })}
            <button type="button" onClick={() => setCoalition([])} className="min-h-[40px] rounded-lg px-3 text-sm font-semibold text-ink-2 underline">
              Clear
            </button>
          </div>
          <svg viewBox="0 0 320 34" className="mt-2 h-auto w-full" role="img" aria-label={`Coalition of ${coalitionNames.join(", ") || "no parties"}: ${coalitionSeats} seats; ${majority} needed for a majority.`}>
            <rect x={10} y={cbTop} width={300} height={16} rx={3} className="fill-surface stroke-line" />
            {PARTIES.filter((p) => coalition.includes(p.key)).map((p) => {
              const w = cbScale(e.seats[p.key]);
              const r = <rect key={p.key} x={10 + acc} y={cbTop} width={w} height={16} className={p.fill} opacity={0.85} />;
              acc += w;
              return r;
            })}
            <line x1={10 + cbScale(majority)} x2={10 + cbScale(majority)} y1={2} y2={30} className="stroke-ink" strokeWidth={1.5} strokeDasharray="3 2" />
            <text x={10 + cbScale(majority) + 3} y={33} fontSize={8} className="fill-ink">
              majority
            </text>
          </svg>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
            <Readout label="Coalition seats" value={coalitionSeats} tone={hasMajority ? "good" : "bad"} />
            <Readout label="Needed" value={majority} tone="ink" />
            <Readout label="Result" value={coalition.length === 0 ? "—" : hasMajority ? "Majority" : `${majority - coalitionSeats} short`} tone={hasMajority ? "good" : "bad"} />
          </div>
          {coalition.length > 0 ? (
            <p className="mt-2 text-sm text-ink">
              {hasMajority
                ? coalition.includes("nsdap") && coalition.includes("kpd")
                  ? "On paper a majority — but Nazis and Communists were sworn enemies who fought each other in the streets. They could only agree on voting governments DOWN."
                  : coalition.includes("nsdap")
                    ? "A majority that includes the Nazis — exactly what conservatives like Papen tried to build, believing they could control Hitler."
                    : "A majority without the Nazis. Check: would these parties really have worked together? Many disagreed about almost everything."
                : "Not enough. Without a majority, a Chancellor depended on the President's Article 48 emergency decrees — so Hindenburg and his advisers held the real power."}
            </p>
          ) : null}
        </div>

        <UnemploymentStrip ei={ei} />
      </div>
    </WidgetFrame>
  );
}

function UnemploymentStrip({ ei }: { ei: number }) {
  const colW = 64;
  const x = (i: number) => 44 + i * colW;
  const uH = (v: number) => (v / 6) * 44;
  const nH = (v: number) => (v / 50) * 44;
  const aria = `Unemployment and Nazi vote by election: ${ELECTIONS.map((e) => `${e.label}: about ${e.unemployed} million unemployed, Nazis ${e.votes.nsdap}%`).join("; ")}.`;
  return (
    <div>
      <svg viewBox="0 0 360 150" className="h-auto w-full" role="img" aria-label={aria}>
        <text x={4} y={11} fontSize={10} fontWeight={700} className="fill-ink-2">
          Unemployed (millions, approx.)
        </text>
        <text x={4} y={84} fontSize={10} fontWeight={700} className="fill-ink-2">
          Nazi share of the vote (%)
        </text>
        {ELECTIONS.map((e, i) => {
          const sel = i === ei;
          const cx = x(i);
          return (
            <g key={e.id}>
              {sel ? <rect x={cx - 26} y={14} width={52} height={134} rx={6} className="fill-brand-soft" /> : null}
              <rect x={cx - 12} y={66 - uH(e.unemployed)} width={24} height={uH(e.unemployed)} className="fill-ink-2" opacity={sel ? 1 : 0.6} />
              <text x={cx} y={62 - uH(e.unemployed)} fontSize={9} textAnchor="middle" className="fill-ink">
                {e.unemployed.toFixed(1)}
              </text>
              <rect x={cx - 12} y={136 - nH(e.votes.nsdap)} width={24} height={nH(e.votes.nsdap)} className="fill-ink" opacity={sel ? 1 : 0.6} />
              <text x={cx} y={132 - nH(e.votes.nsdap)} fontSize={9} textAnchor="middle" className="fill-ink">
                {Math.round(e.votes.nsdap)}%
              </text>
              <text x={cx} y={147} fontSize={9} textAnchor="middle" fontWeight={sel ? 800 : 400} className={sel ? "fill-brand" : "fill-ink-2"}>
                {e.label}
              </text>
            </g>
          );
        })}
        <line x1={14} x2={356} y1={66} y2={66} className="stroke-line" />
        <line x1={14} x2={356} y1={136} y2={136} className="stroke-line" />
      </svg>
      <p className="text-xs text-ink-2">
        Unemployment: registered unemployed near each election, rounded ({ELECTIONS[ei].unemployedNote} in {ELECTIONS[ei].label}). Vote shares: official results; Centre includes the Bavarian BVP.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 2. Steps to dictatorship, 30 Jan 1933 → 2 Aug 1934
// ---------------------------------------------------------------------------

type PillarKey = "rights" | "parliament" | "parties" | "unions" | "states" | "checks";
type Level = 0 | 1 | 2;

const PILLARS: { key: PillarKey; label: string }[] = [
  { key: "rights", label: "Civil rights & free press" },
  { key: "parliament", label: "Parliament makes laws" },
  { key: "parties", label: "Rival parties" },
  { key: "unions", label: "Trade unions" },
  { key: "states", label: "Self-governing states" },
  { key: "checks", label: "President & army as a check" },
];

interface DStep {
  date: string;
  /** Days after 30 Jan 1933 (for the to-scale timeline). */
  day: number;
  title: string;
  what: string;
  meaning: string;
  quote?: string;
  state: Record<PillarKey, Level>;
}

const dayOf = (y: number, m: number, d: number) => Math.round((Date.UTC(y, m - 1, d) - Date.UTC(1933, 0, 30)) / 86400000);

const STEPS: DStep[] = [
  {
    date: "30 January 1933",
    day: 0,
    title: "Hitler appointed Chancellor",
    what: "Hindenburg appointed Hitler Chancellor of a coalition cabinet with only three Nazis (Hitler, Frick and Göring). Papen became Vice-Chancellor.",
    meaning: "Hitler came to power legally, through a backstairs deal — not by winning a majority. Democracy was already damaged: since 1930 Chancellors had governed mostly by the President's emergency decrees, and in July 1932 Papen's government had taken over Prussia, the largest state.",
    state: { rights: 2, parliament: 1, parties: 2, unions: 2, states: 1, checks: 2 },
  },
  {
    date: "27–28 February 1933",
    day: dayOf(1933, 2, 28),
    title: "Reichstag Fire and the Fire Decree",
    what: "The Reichstag building burned on 27 February. The Nazis claimed a Communist uprising was starting, and the next day Hindenburg signed the Reichstag Fire Decree.",
    meaning: "Freedom of speech, of the press and of assembly were suspended; police could hold people without trial ('protective custody'). Thousands of Communists were arrested. The decree stayed in force for the whole Nazi period.",
    state: { rights: 0, parliament: 1, parties: 1, unions: 2, states: 1, checks: 2 },
  },
  {
    date: "5 March 1933",
    day: dayOf(1933, 3, 5),
    title: "The March 1933 election",
    what: "An election held amid arrests, SA violence and Nazi control of radio. The Nazis won 288 seats (about 44%); with the DNVP's 52 they had 340 of 647.",
    meaning: "Even with terror and propaganda, most Germans did not vote Nazi. A bare majority was not enough to change the constitution: that needed two-thirds.",
    state: { rights: 0, parliament: 1, parties: 1, unions: 2, states: 1, checks: 2 },
  },
  {
    date: "22 March 1933",
    day: dayOf(1933, 3, 22),
    title: "Dachau concentration camp opens",
    what: "The SS opened the first concentration camp at Dachau, near Munich, for political prisoners — Communists, Social Democrats and trade unionists.",
    meaning: "No new law, but a message: opposing the Nazis could mean imprisonment without trial. Fear made the next steps easier.",
    state: { rights: 0, parliament: 1, parties: 1, unions: 2, states: 1, checks: 2 },
  },
  {
    date: "23 March 1933",
    day: dayOf(1933, 3, 23),
    title: "The Enabling Act",
    what: "Meeting in the Kroll Opera House, surrounded by SA and SS men, the Reichstag voted 444 to 94 to let the government make laws without it, for four years. The Communist deputies were arrested or in hiding; the Centre Party voted yes after promises from Hitler. Only the SPD voted no.",
    meaning: "Parliament voted away its own power. From now on Hitler's cabinet could make any law — even ones that broke the constitution.",
    quote: "“You can take our lives and our freedom, but you cannot take our honour.” — Otto Wels, SPD leader, 23 March 1933",
    state: { rights: 0, parliament: 0, parties: 1, unions: 2, states: 1, checks: 2 },
  },
  {
    date: "31 March – 7 April 1933",
    day: dayOf(1933, 4, 7),
    title: "The states taken over",
    what: "New laws put every German state under Nazi-controlled governments and appointed Reich governors over them. (The state parliaments were abolished altogether in January 1934.)",
    meaning: "Germany had been a federal country where states ran their own police and schools. Now power was centralised in Berlin — this was 'Gleichschaltung', bringing everything into line.",
    state: { rights: 0, parliament: 0, parties: 1, unions: 2, states: 0, checks: 2 },
  },
  {
    date: "2 May 1933",
    day: dayOf(1933, 5, 2),
    title: "Trade unions banned",
    what: "The day after a huge May Day celebration of workers, the SA and SS occupied trade union offices across Germany and arrested union leaders. Unions were replaced by the Nazi-run German Labour Front.",
    meaning: "Workers lost the right to bargain and strike. The biggest organised force that could have resisted — millions of union members — was gone.",
    state: { rights: 0, parliament: 0, parties: 1, unions: 0, states: 0, checks: 2 },
  },
  {
    date: "14 July 1933",
    day: dayOf(1933, 7, 14),
    title: "A one-party state",
    what: "The SPD had been banned in June; the other parties dissolved themselves under pressure. A law of 14 July made the Nazi Party the only legal party.",
    meaning: "No legal opposition remained. Elections after this offered only a Nazi list.",
    state: { rights: 0, parliament: 0, parties: 0, unions: 0, states: 0, checks: 2 },
  },
  {
    date: "30 June 1934",
    day: dayOf(1934, 6, 30),
    title: "The Night of the Long Knives",
    what: "On Hitler's orders the SS killed Ernst Röhm and other SA leaders, along with old enemies such as the former Chancellor von Schleicher. Historians count at least 85 people killed, without trial. A law passed days later declared the killings legal.",
    meaning: "Hitler removed the SA threat that worried the army, and showed that the law no longer protected anyone. The army leadership welcomed it — tying itself to Hitler.",
    state: { rights: 0, parliament: 0, parties: 0, unions: 0, states: 0, checks: 1 },
  },
  {
    date: "2 August 1934",
    day: dayOf(1934, 8, 2),
    title: "Hindenburg dies: Hitler becomes Führer",
    what: "When President Hindenburg died, Hitler merged the offices of President and Chancellor and took the title Führer. The same day every soldier swore an oath of loyalty to Hitler personally. A vote on 19 August, held under heavy pressure, approved the change by about 90%.",
    meaning: "The last check on Hitler — a President who could sack him, backed by the army — was gone. Germany was a dictatorship.",
    quote: "“I swear by God this sacred oath, that I shall render unconditional obedience to Adolf Hitler, the Führer of the German Reich and people…” — the army oath, August 1934",
    state: { rights: 0, parliament: 0, parties: 0, unions: 0, states: 0, checks: 0 },
  },
];

const LEVEL_LABEL: Record<Level, string> = { 2: "Working", 1: "Weakened", 0: "Destroyed" };
const LEVEL_CLASS: Record<Level, string> = {
  2: "border-good bg-good-soft text-good",
  1: "border-accent bg-accent-soft text-ink",
  0: "border-bad bg-bad-soft text-bad",
};

function StepsToDictatorship() {
  const [i, setI] = useState(0);
  const [guesses, setGuesses] = useState<Record<number, PillarKey | "none">>({});
  const s = STEPS[i];
  const score = PILLARS.reduce((t, p) => t + s.state[p.key], 0);
  const pct = Math.round((score / (PILLARS.length * 2)) * 100);
  const next = STEPS[i + 1];
  const drops = useMemo(() => (next ? PILLARS.filter((p) => next.state[p.key] < s.state[p.key]).map((p) => p.key) : []), [next, s]);
  const guess = guesses[i];
  const guessRight = guess !== undefined && (guess === "none" ? drops.length === 0 : drops.includes(guess));

  const W = 360;
  const tx = (day: number) => 16 + (day / STEPS[STEPS.length - 1].day) * (W - 32);
  const months = [
    { label: "Jan 1933", day: 0 },
    { label: "Jul 1933", day: dayOf(1933, 7, 1) },
    { label: "Jan 1934", day: dayOf(1934, 1, 1) },
    { label: "Aug 1934", day: STEPS[STEPS.length - 1].day },
  ];

  return (
    <WidgetFrame
      title="Steps to dictatorship: January 1933 – August 1934"
      tryThis={[
        "Before pressing Next, predict which part of democracy will be damaged next.",
        "Which single step took away the Reichstag's power to make laws?",
        "Find the step that tied the army to Hitler personally. Why did that matter more than winning votes?",
        "Look at the timeline: how much of the destruction happened in the first six months?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>
              Step {i + 1} of {STEPS.length} — {s.date}: {s.title}.
            </strong>{" "}
            {s.meaning}
          </p>
          <p className="text-ink-2">
            The meter is a rough guide for comparing steps, not a measurement. Notice how many steps were dressed up as legal decrees and laws: Hitler destroyed democracy partly by using its own rules.
          </p>
        </div>
      }
    >
      <div className="space-y-3">
        <svg viewBox={`0 0 ${W} 58`} className="h-auto w-full" role="img" aria-label={`Timeline drawn to scale from 30 January 1933 to 2 August 1934. Current step: ${s.date}, ${s.title}, day ${s.day}.`}>
          <line x1={16} x2={W - 16} y1={24} y2={24} className="stroke-line" strokeWidth={3} />
          {STEPS.map((st, k) => (
            <circle key={st.date} cx={tx(st.day)} cy={24} r={k === i ? 7 : 4.5} className={k === i ? "fill-brand stroke-surface" : k < i ? "fill-ink-2" : "fill-surface stroke-ink-2"} strokeWidth={k === i ? 2 : 1.2} />
          ))}
          {months.map((m) => (
            <text key={m.label} x={tx(m.day)} y={50} fontSize={9} textAnchor={m.day === 0 ? "start" : m.day === STEPS[STEPS.length - 1].day ? "end" : "middle"} className="fill-ink-2">
              {m.label}
            </text>
          ))}
          <text x={tx(s.day)} y={10} fontSize={9} fontWeight={700} textAnchor={s.day < 60 ? "start" : s.day > 480 ? "end" : "middle"} className="fill-brand">
            {s.date}
          </text>
        </svg>

        <div className="flex items-center justify-between gap-2">
          <button type="button" className="min-h-[40px] rounded-lg border border-line bg-surface px-4 font-bold text-ink disabled:opacity-40" onClick={() => setI(i - 1)} disabled={i === 0}>
            ← Back
          </button>
          <span className="text-sm font-semibold text-ink-2">
            Step {i + 1} / {STEPS.length}
          </span>
          <button type="button" className="min-h-[40px] rounded-lg bg-brand px-4 font-bold text-brand-ink disabled:opacity-40" onClick={() => setI(i + 1)} disabled={i === STEPS.length - 1}>
            Next →
          </button>
        </div>

        <div className="rounded-xl border border-line bg-surface p-3">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">{s.date}</div>
          <div className="text-lg font-extrabold text-ink">{s.title}</div>
          <p className="mt-1 text-sm text-ink">{s.what}</p>
          {s.quote ? <blockquote className="mt-2 border-l-4 border-brand pl-3 text-sm italic text-ink-2">{s.quote}</blockquote> : null}
        </div>

        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-ink-2">Democracy remaining (rough guide)</span>
            <span className="font-extrabold tabular-nums text-ink">{pct}%</span>
          </div>
          <div className="mt-1 h-4 w-full overflow-hidden rounded-full bg-surface-2" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} aria-label="Democracy remaining">
            <div className={`h-full rounded-full transition-all ${pct > 60 ? "bg-good" : pct > 25 ? "bg-accent" : "bg-bad"}`} style={{ width: `${Math.max(pct, 2)}%` }} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {PILLARS.map((p) => {
            const lv = s.state[p.key];
            const changed = i > 0 && STEPS[i - 1].state[p.key] !== lv;
            return (
              <div key={p.key} className={`rounded-xl border-2 px-3 py-2 ${LEVEL_CLASS[lv]} ${changed ? "ring-2 ring-brand" : ""}`}>
                <div className="text-xs font-bold text-ink">{p.label}</div>
                <div className="text-sm font-extrabold">
                  {LEVEL_LABEL[lv]}
                  {changed ? " ← this step" : ""}
                </div>
              </div>
            );
          })}
        </div>

        {next ? (
          <div className="rounded-xl bg-surface-2 p-3">
            <div className="text-sm font-bold text-ink">Predict: which part of democracy will be damaged at the next step?</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {[...PILLARS.map((p) => ({ key: p.key as PillarKey | "none", label: p.label })), { key: "none" as const, label: "None — but fear grows" }].map((o) => (
                <button
                  key={o.key}
                  type="button"
                  aria-pressed={guess === o.key}
                  onClick={() => setGuesses((g) => ({ ...g, [i]: o.key }))}
                  disabled={s.state[o.key as PillarKey] === 0}
                  className={`min-h-[40px] rounded-lg border px-3 text-sm font-semibold disabled:opacity-35 ${guess === o.key ? "border-brand bg-brand-soft text-ink" : "border-line bg-surface text-ink-2"}`}
                >
                  {o.label}
                </button>
              ))}
            </div>
            {guess !== undefined ? (
              <p className={`mt-2 text-sm font-semibold ${guessRight ? "text-good" : "text-bad"}`}>
                {guessRight ? "Your prediction matches. " : "Not this time. "}
                Next: {next.title} ({next.date}) —{" "}
                {drops.length ? `damages ${PILLARS.filter((p) => drops.includes(p.key)).map((p) => p.label.toLowerCase()).join(" and ")}.` : "no pillar falls, but it changes what people dare to do."} Press Next to see why.
              </p>
            ) : null}
          </div>
        ) : (
          <p className="rounded-xl bg-bad-soft p-3 text-sm font-semibold text-ink">
            From appointment to Führer took about 18 months. Every check on Hitler&apos;s power — parliament, parties, unions, states, the President and the army — had gone.
          </p>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "reichstag-elections",
    title: "Election explorer 1928–1933",
    blurb: "Step through five Reichstag elections, compare them with unemployment, and try to build a majority government.",
    Component: ElectionExplorer,
  },
  {
    id: "steps-to-dictatorship",
    title: "Steps to dictatorship",
    blurb: "Walk from Chancellor (January 1933) to Führer (August 1934) and watch each part of democracy disappear.",
    Component: StepsToDictatorship,
  },
];
