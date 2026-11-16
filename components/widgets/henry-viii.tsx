"use client";
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Shared: months counted from January 1509 (0) to January 1547 (456).
// ---------------------------------------------------------------------------

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const m = (year: number, month: number) => (year - 1509) * 12 + (month - 1);
const fmt = (t: number) => `${MONTHS[((t % 12) + 12) % 12]} ${1509 + Math.floor(t / 12)}`;
const T_MIN = m(1509, 6);
const T_MAX = m(1547, 1);

// ---------------------------------------------------------------------------
// 1. Six wives & the succession
// ---------------------------------------------------------------------------

interface Wife {
  n: number;
  name: string;
  start: number;
  end: number;
  dates: string;
  rhyme: string;
  ended: string;
  children: string;
  politics: string;
  fill: string;
}

const WIVES: Wife[] = [
  {
    n: 1,
    name: "Catherine of Aragon",
    start: m(1509, 6),
    end: m(1533, 5),
    dates: "married June 1509 – annulled May 1533",
    rhyme: "Divorced",
    ended: "Annulled by Archbishop Cranmer on 23 May 1533 (the rhyme says 'divorced', but Henry claimed the marriage had never been valid). She died in 1536.",
    children: "Mary (born 1516) survived. Several other babies were stillborn or died young, including a son, Henry, who lived for 52 days in 1511.",
    politics: "A Spanish alliance: Catherine was the daughter of Ferdinand and Isabella and aunt of Emperor Charles V. That is exactly why the Pope, controlled by Charles after 1527, would not annul the marriage.",
    fill: "fill-info",
  },
  {
    n: 2,
    name: "Anne Boleyn",
    start: m(1533, 1),
    end: m(1536, 5),
    dates: "married January 1533 – executed May 1536",
    rhyme: "Beheaded",
    ended: "Executed at the Tower of London on 19 May 1536 on charges of adultery and treason that most historians believe were false.",
    children: "Elizabeth (born September 1533). At least one later pregnancy ended in miscarriage, in January 1536.",
    politics: "To marry her, Henry broke with Rome. Anne favoured religious reform and her family rose to power — and fell with her.",
    fill: "fill-bad",
  },
  {
    n: 3,
    name: "Jane Seymour",
    start: m(1536, 5),
    end: m(1537, 10),
    dates: "married May 1536 – died October 1537",
    rhyme: "Died",
    ended: "Died on 24 October 1537, twelve days after giving birth, from complications after childbirth.",
    children: "Edward (born 12 October 1537) — at last, a legitimate son.",
    politics: "She delivered the male heir. Her brothers rose high: Edward Seymour later ruled as Lord Protector for the boy king Edward VI.",
    fill: "fill-good",
  },
  {
    n: 4,
    name: "Anne of Cleves",
    start: m(1540, 1),
    end: m(1540, 7),
    dates: "married January 1540 – annulled July 1540",
    rhyme: "Divorced",
    ended: "Annulled on 9 July 1540, about six months after the wedding. Anne accepted, was given houses and an income, and lived until 1557.",
    children: "None.",
    politics: "A Protestant-leaning German alliance arranged by Thomas Cromwell. Its failure helped bring Cromwell down: he was executed on 28 July 1540.",
    fill: "fill-accent",
  },
  {
    n: 5,
    name: "Catherine Howard",
    start: m(1540, 7),
    end: m(1542, 2),
    dates: "married July 1540 – executed February 1542",
    rhyme: "Beheaded",
    ended: "Executed on 13 February 1542 after accusations about her past and an affair at court. She was still a teenager or barely older.",
    children: "None.",
    politics: "Niece of the conservative Catholic Duke of Norfolk and cousin of Anne Boleyn. Her marriage on the day Cromwell died marked a swing back towards the old religion's supporters.",
    fill: "fill-brand",
  },
  {
    n: 6,
    name: "Catherine Parr",
    start: m(1543, 7),
    end: m(1547, 1),
    dates: "married July 1543 – widowed January 1547",
    rhyme: "Survived",
    ended: "Outlived Henry, remarried, and died in 1548.",
    children: "None with Henry — but she brought his three children together at court.",
    politics: "A well-educated reformer who ruled as regent while Henry fought in France in 1544. The 1544 Act of Succession restored Mary and Elizabeth to the line of succession.",
    fill: "fill-s-ratio",
  },
];

const CHILDREN = [
  { name: "Henry †", t: m(1511, 1), note: "lived 52 days" },
  { name: "Mary", t: m(1516, 2), note: "" },
  { name: "Elizabeth", t: m(1533, 9), note: "" },
  { name: "Edward", t: m(1537, 10), note: "" },
];

function heirAt(t: number): { heir: string; detail: string; tone: "good" | "bad" | "ink" } {
  if (t >= T_MAX)
    return { heir: "Edward VI is king", detail: "Henry died on 28 January 1547. His nine-year-old son became Edward VI, with Mary and then Elizabeth next in line — all three would reign.", tone: "good" };
  if (t >= m(1544, 2))
    return { heir: "Edward, then Mary, then Elizabeth", detail: "The Third Act of Succession (1544) put both daughters back in line after Edward, though it did not make them legitimate again.", tone: "good" };
  if (t >= m(1537, 10))
    return { heir: "Prince Edward", detail: "A legitimate son at last — but a baby. If Henry died, England would face a long minority.", tone: "good" };
  if (t >= m(1536, 7))
    return { heir: "No legal heir", detail: "The Second Act of Succession (1536) declared Elizabeth illegitimate too, leaving the crown to Jane's future children or whoever Henry named. Henry's illegitimate son, Henry Fitzroy, died that July.", tone: "bad" };
  if (t >= m(1533, 9))
    return { heir: "Princess Elizabeth", detail: "Mary was declared illegitimate and lost her title of princess. The First Act of Succession (1534) made Anne Boleyn's children the heirs.", tone: "ink" };
  if (t >= m(1516, 2))
    return { heir: "Princess Mary (a daughter)", detail: "No queen had ever ruled England in her own right; the last attempt, by Matilda in the 1130s–40s, ended in civil war. With the Wars of the Roses in living memory, Henry wanted a son.", tone: "ink" };
  if (t >= m(1511, 1) && t < m(1511, 2))
    return { heir: "Prince Henry, Duke of Cornwall", detail: "Born on 1 January 1511 and celebrated with a great tournament — but he died after 52 days.", tone: "ink" };
  return { heir: "No child yet", detail: "Henry's nearest heir was his elder sister Margaret, Queen of Scotland.", tone: "bad" };
}

function SixWives() {
  const [t, setT] = useState(T_MIN);
  const active = WIVES.filter((w) => t >= w.start && t <= w.end);
  const latest = [...WIVES].reverse().find((w) => w.start <= t);
  const heir = heirAt(t);
  const age = Math.floor((t + 210) / 12); // Henry born 28 June 1491
  const livingChildren = CHILDREN.filter((c) => c.t <= t && !(c.name.startsWith("Henry") && t > m(1511, 2))).map((c) => c.name.replace(" †", ""));

  const W = 360, L = 10, R = 10;
  const px = (v: number) => L + (v / T_MAX) * (W - L - R);
  const rowY = (i: number) => 8 + i * 19;

  const aria = `Timeline of Henry VIII's marriages, at ${fmt(t)}. ${active.length ? `Married to ${active.map((w) => w.name).join(" and ")}.` : "Not married."} Heir: ${heir.heir}.`;

  return (
    <WidgetFrame
      title="Six wives and the succession, 1509–1547"
      tryThis={[
        "Find the months when Henry had **no legal heir at all**. Why was that so dangerous?",
        "Drag to January–May 1533. What is odd about Henry's marriages then?",
        "Which marriage ended a chief minister's life? Find the month.",
        "Say the rhyme, then explain why 'divorced' is not quite the right word for wives 1 and 4.",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>{fmt(t)}.</strong> Henry is about {age}.{" "}
            {t >= T_MAX
              ? "Henry dies on 28 January 1547, leaving Catherine Parr a widow."
              : active.length === 0
              ? latest
                ? `He is unmarried — his last marriage, to ${latest.name}, has ended.`
                : "He is not yet married."
              : active.length === 2
                ? `Two marriages overlap this month: ${active[0].name} and ${active[1].name}.`
                : `He is married to ${active[0].name}.`}
          </p>
          {t >= m(1533, 1) && t < m(1533, 5) ? (
            <p>
              Henry married Anne secretly in January 1533 — four months <em>before</em> Cranmer ruled his marriage to Catherine void. Anne was already pregnant, and the child had to be born legitimate.
            </p>
          ) : null}
          <p>
            <strong>Heir:</strong> {heir.detail}
          </p>
        </div>
      }
    >
      <Slider label="Date" value={t} min={T_MIN} max={T_MAX} onChange={setT} format={fmt} />
      <div className="mt-3 flex flex-wrap gap-1" role="group" aria-label="Jump to a wedding">
        {WIVES.map((w) => (
          <button key={w.n} type="button" className={`btn btn-sm ${latest?.n === w.n ? "btn-primary" : "btn-secondary"}`} onClick={() => setT(w.start)} aria-label={`Jump to wedding of ${w.name}`}>
            {w.n}
          </button>
        ))}
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => setT(T_MAX)}>
          1547
        </button>
      </div>

      <svg viewBox={`0 0 ${W} 190`} className="mt-3 h-auto w-full" role="img" aria-label={aria}>
        {[1510, 1520, 1530, 1540].map((y) => (
          <g key={y}>
            <line x1={px(m(y, 1))} x2={px(m(y, 1))} y1={4} y2={170} className="stroke-line" strokeWidth={1} />
            <text x={px(m(y, 1))} y={184} fontSize={9} textAnchor="middle" className="fill-ink-2">{y}</text>
          </g>
        ))}
        {WIVES.map((w, i) => {
          const x1 = px(w.start);
          const x2 = Math.max(px(w.end), x1 + 3);
          const labelRight = i < 3;
          const on = t >= w.start && t <= w.end;
          return (
            <g key={w.n}>
              <rect x={x1} y={rowY(i)} width={x2 - x1} height={13} rx={3} className={w.fill} opacity={on ? 1 : 0.45} />
              <text x={labelRight ? x2 + 4 : x1 - 4} y={rowY(i) + 10} fontSize={9.5} fontWeight={on ? 800 : 500} textAnchor={labelRight ? "start" : "end"} className="fill-ink">
                {w.n} {w.name}
              </text>
            </g>
          );
        })}
        <text x={L} y={136} fontSize={9} fontWeight={700} className="fill-ink-2">Children born:</text>
        {CHILDREN.map((c, i) => (
          <g key={c.name}>
            <circle cx={px(c.t)} cy={148} r={4} className={c.t <= t ? "fill-brand" : "fill-surface-2 stroke-ink-2"} />
            <text x={px(c.t)} y={i % 2 ? 167 : 160} fontSize={8.5} textAnchor="middle" className="fill-ink">
              {c.name}
            </text>
          </g>
        ))}
        <line x1={px(t)} x2={px(t)} y1={2} y2={172} className="stroke-ink" strokeWidth={1.5} />
        <circle cx={px(t)} cy={2} r={3} className="fill-ink" />
      </svg>

      <div className="mt-2 flex flex-wrap justify-center gap-1 text-sm" aria-label="The rhyme">
        {WIVES.map((w) => (
          <span key={w.n} className={`rounded-lg px-2 py-1 font-bold ${latest?.n === w.n ? "bg-brand text-brand-ink" : "bg-surface-2 text-ink-2"}`}>
            {w.rhyme}
          </span>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Readout label="Heir" value={<span className="text-base">{heir.heir}</span>} tone={heir.tone} />
        <Readout label="Children of his marriages alive" value={<span className="text-base">{livingChildren.length ? livingChildren.join(", ") : "none"}</span>} tone="ink" />
      </div>

      {latest ? (
        <div className="mt-3 rounded-xl border border-line bg-surface p-3 text-sm text-ink">
          <div className="font-extrabold">
            Wife {latest.n}: {latest.name} <span className="font-semibold text-ink-2">({latest.dates})</span>
          </div>
          <p className="mt-1"><strong>How it ended:</strong> {latest.ended}</p>
          <p className="mt-1"><strong>Children:</strong> {latest.children}</p>
          <p className="mt-1"><strong>Why it mattered politically:</strong> {latest.politics}</p>
        </div>
      ) : null}
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Break with Rome: motives weighing board
// ---------------------------------------------------------------------------

type MotiveId = "heir" | "money" | "power" | "religion";

interface Card {
  id: string;
  side: "for" | "against";
  text: string;
}

interface Motive {
  id: MotiveId;
  label: string;
  /** Short name for sentences. */
  name: string;
  /** Lower-case phrase for "mainly because of …". */
  phrase: string;
  emoji: string;
  bar: string;
  because: string;
  weakness: string;
  cards: Card[];
}

const MOTIVES: Motive[] = [
  {
    id: "heir",
    label: "A male heir (and Anne Boleyn)",
    name: "The need for an heir",
    phrase: "the need for a male heir (and his wish to marry Anne Boleyn)",
    emoji: "👶",
    bar: "fill-info",
    because: "Henry needed a legitimate son, and only an annulment — which the Pope refused — would let him marry Anne Boleyn",
    weakness: "the annulment explains the timing, but not why Henry went on to seize the Church's wealth and power",
    cards: [
      { id: "h1", side: "for", text: "By 1527 Catherine was over 40 and only one child, Mary, had survived. No queen had ever ruled England in her own right; Matilda's attempt in the 1130s–40s ended in civil war." },
      { id: "h2", side: "for", text: "Anne was pregnant by January 1533. Henry married her secretly that month, and Cranmer annulled the first marriage in May — before Elizabeth was born in September." },
      { id: "h3", side: "against", text: "Henry was also in love with Anne, who refused to be only his mistress. His surviving love letters suggest desire, not just the need for a son, drove the Great Matter." },
    ],
  },
  {
    id: "money",
    label: "Money",
    name: "Money",
    phrase: "money",
    emoji: "💰",
    bar: "fill-accent",
    because: "breaking with Rome let the Crown take the Church's wealth, from annates to the monasteries' lands",
    weakness: "the money came after the break — the Dissolution only began in 1536",
    cards: [
      { id: "m1", side: "for", text: "In 1531 the clergy of the province of Canterbury paid Henry £100,000 to be pardoned for praemunire — proof of how much the Church could be squeezed for." },
      { id: "m2", side: "for", text: "From 1534 annates (a new bishop's first year's income) went to the Crown, not Rome. The Dissolution (1536–40) brought the Crown huge estates." },
      { id: "m3", side: "against", text: "Henry asked for an annulment in 1527 but only began closing monasteries in 1536. The money looks more like a result of the break than its cause." },
    ],
  },
  {
    id: "power",
    label: "Power",
    name: "Power",
    phrase: "power",
    emoji: "👑",
    bar: "fill-bad",
    because: "it made Henry Supreme Head of the Church, with no foreign authority above him",
    weakness: "Henry had accepted the Pope's authority for twenty years until the annulment was refused",
    cards: [
      { id: "p1", side: "for", text: "The Act in Restraint of Appeals (1533) declared that 'this realm of England is an empire': no foreign power, not even the Pope, had authority over it." },
      { id: "p2", side: "for", text: "The Act of Supremacy (1534) made Henry Supreme Head of the Church of England; the Treason Act (1534) made denying his titles, even in words, a capital crime." },
      { id: "p3", side: "against", text: "For twenty years Henry accepted the Pope's authority. In 1521 Pope Leo X named him 'Defender of the Faith' for writing against Luther." },
    ],
  },
  {
    id: "religion",
    label: "Religion (Protestant ideas)",
    name: "Religion",
    phrase: "religion (Protestant ideas)",
    emoji: "✝️",
    bar: "fill-good",
    because: "Protestant ideas, pushed by Anne Boleyn, Cranmer and Cromwell, convinced Henry that the Pope had no right to rule the English Church",
    weakness: "Henry stayed Catholic in belief — the Six Articles (1539) kept the Mass and unmarried priests",
    cards: [
      { id: "r1", side: "for", text: "Later accounts say Anne Boleyn showed Henry Tyndale's *The Obedience of a Christian Man* (1528), which argued that subjects owe obedience to their king, not the Pope." },
      { id: "r2", side: "for", text: "Reformers rose to power: Cranmer became archbishop and Cromwell chief minister, and in 1538 an English Bible was ordered for every parish church." },
      { id: "r3", side: "against", text: "The Act of Six Articles (1539) kept Catholic beliefs such as the Mass and priests not marrying. Protestants could still be burned as heretics." },
    ],
  },
];

/** One possible model weighting, used for comparison only. */
const MODEL: Record<MotiveId, number> = { heir: 9, power: 7, money: 6, religion: 3 };

function MotivesBoard() {
  const [weights, setWeights] = useState<Record<MotiveId, number>>({ heir: 5, money: 5, power: 5, religion: 5 });
  const [ticked, setTicked] = useState<Record<string, boolean>>({});
  const [focus, setFocus] = useState<MotiveId>("heir");
  const [showModel, setShowModel] = useState(false);

  const evidence = (mo: Motive) => mo.cards.reduce((s, c) => s + (ticked[c.id] ? (c.side === "for" ? 1 : -1) : 0), 0);
  const sorted = [...MOTIVES].sort((a, b) => weights[b.id] - weights[a.id]);
  const [top, second] = sorted;
  const lowest = sorted[sorted.length - 1];
  const total = MOTIVES.reduce((s, mo) => s + weights[mo.id], 0);
  const mo = MOTIVES.find((x) => x.id === focus) ?? MOTIVES[0];
  const tickedCount = Object.values(ticked).filter(Boolean).length;

  let judgement: string;
  if (total === 0) judgement = "Every motive is set to zero — but Henry did break with Rome! Give at least one motive some weight.";
  else if (weights[top.id] === weights[second.id])
    judgement = `You rate **${top.name.toLowerCase()}** and **${second.name.toLowerCase()}** equally. A judgement needs a winner — which one best explains why the break happened *when* it did, in 1533–34?`;
  else {
    judgement = `Henry broke with Rome mainly because of **${top.phrase}**: ${top.because}.`;
    if (weights[second.id] >= weights[top.id] - 2 && weights[second.id] > 0) judgement += ` **${second.name}** mattered almost as much: ${second.because}.`;
    else if (weights[second.id] > 0) judgement += ` ${second.name} played a supporting part.`;
    if (weights[lowest.id] < weights[second.id]) judgement += ` ${lowest.name} was the least important, because ${lowest.weakness}.`;
  }

  const warnings: string[] = [];
  for (const x of MOTIVES) {
    const e = evidence(x);
    if (weights[x.id] >= 7 && e <= 0) warnings.push(`You weight **${x.name.toLowerCase()}** heavily but haven't ticked convincing evidence for it yet.`);
    if (weights[x.id] <= 3 && e >= 2) warnings.push(`Your evidence for **${x.name.toLowerCase()}** looks strong — are you underrating it?`);
  }

  const W = 360, L = 92, R = 30;
  const bw = (v: number) => (v / 10) * (W - L - R);
  const aria = `Bar chart of your weights out of 10: ${MOTIVES.map((x) => `${x.label} ${weights[x.id]}`).join(", ")}.${showModel ? ` Model ranking: ${MOTIVES.map((x) => `${x.label} ${MODEL[x.id]}`).join(", ")}.` : ""}`;

  return (
    <WidgetFrame
      title="Why did Henry break with Rome? Weighing the motives"
      tryThis={[
        "Tick only the cards you find convincing, then set the weights. Does the sentence say what you think?",
        "Which motive explains **the timing** — why 1533–34, not 1527 or 1540?",
        "Read the 'against' card for money. Can a motive that came *after* an event be its cause?",
        "Compare with the model view. Where do you disagree, and what evidence would you use?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>Your judgement:</strong>{" "}
            {judgement.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <span key={i}>{part.split("*").map((p, j) => (j % 2 ? <em key={j}>{p}</em> : p))}</span>))}
          </p>
          {warnings.map((w) => (
            <p key={w} className="text-bad">
              ⚠ {w.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))}
            </p>
          ))}
          {showModel ? (
            <p>
              <strong>One model view:</strong> many historians see the Great Matter (an heir, and Anne) as the <em>trigger</em> that explains the timing; power and money explain why Henry went so far once he had started; religion mattered more to Anne, Cranmer and Cromwell than to Henry himself. Historians still debate how far Henry was steered by his advisers — this is one reasonable ranking, not the only right answer.
            </p>
          ) : null}
        </div>
      }
    >
      <Segmented
        label="Motive"
        value={focus}
        onChange={setFocus}
        options={MOTIVES.map((x) => ({ value: x.id, label: `${x.emoji} ${x.label.split(" (")[0]}` }))}
      />

      <div className="mt-3 rounded-xl border border-line bg-surface p-3">
        <div className="font-extrabold text-ink">
          {mo.emoji} {mo.label}
        </div>
        <p className="mt-1 text-xs text-ink-2">Tap the cards you find convincing.</p>
        <div className="mt-2 space-y-2">
          {mo.cards.map((c) => {
            const on = !!ticked[c.id];
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={on}
                onClick={() => setTicked({ ...ticked, [c.id]: !on })}
                className={`block min-h-[44px] w-full rounded-xl border p-2 text-left text-sm transition ${on ? (c.side === "for" ? "border-good bg-good-soft" : "border-bad bg-bad-soft") : "border-line bg-surface-2"}`}
              >
                <span className={`mr-2 rounded px-1.5 py-0.5 text-xs font-extrabold uppercase ${c.side === "for" ? "bg-good text-surface" : "bg-bad text-surface"}`}>{c.side === "for" ? "For" : "Against"}</span>
                <span className="text-ink">{c.text.split("*").map((p, j) => (j % 2 ? <em key={j}>{p}</em> : p))}</span>
                <span className="ml-1 font-bold text-ink-2">{on ? "✓" : ""}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-3">
          <Slider label={`How important was ${mo.label.split(" (")[0].toLowerCase()}?`} value={weights[mo.id]} min={0} max={10} onChange={(v) => setWeights({ ...weights, [mo.id]: v })} format={(v) => `${v}/10`} />
        </div>
      </div>

      <svg viewBox={`0 0 ${W} 132`} className="mt-3 h-auto w-full" role="img" aria-label={aria}>
        {MOTIVES.map((x, i) => {
          const y = 8 + i * 30;
          const e = evidence(x);
          return (
            <g key={x.id}>
              <text x={L - 6} y={y + 12} fontSize={10} textAnchor="end" fontWeight={x.id === focus ? 800 : 500} className="fill-ink">
                {x.label.split(" (")[0]}
              </text>
              <rect x={L} y={y} width={W - L - R} height={16} rx={4} className="fill-surface-2" />
              <rect x={L} y={y} width={bw(weights[x.id])} height={16} rx={4} className={x.bar} />
              {showModel ? <rect x={L} y={y + 18} width={bw(MODEL[x.id])} height={4} rx={2} className="fill-ink-2" /> : null}
              <text x={L + bw(weights[x.id]) + 4} y={y + 12} fontSize={10} fontWeight={700} className="fill-ink">
                {weights[x.id]}
              </text>
              <text x={W - 2} y={y + 12} fontSize={9} textAnchor="end" className={e > 0 ? "fill-good" : e < 0 ? "fill-bad" : "fill-ink-2"}>
                {e > 0 ? `+${e}` : e}
              </text>
            </g>
          );
        })}
        <text x={L} y={128} fontSize={8.5} className="fill-ink-2">
          {showModel ? "Thin grey bars = model view. " : ""}Right-hand number = evidence score (for − against ticked).
        </text>
      </svg>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Readout label="Cards ticked" value={`${tickedCount}/12`} tone="ink" />
        <Readout label="Your top motive" value={<span className="text-base">{total === 0 || weights[top.id] === weights[second.id] ? "undecided" : top.name}</span>} tone="brand" />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowModel(!showModel)} aria-pressed={showModel}>
          {showModel ? "Hide model view" : "Compare with a model view"}
        </button>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => {
            setWeights({ heir: 5, money: 5, power: 5, religion: 5 });
            setTicked({});
            setShowModel(false);
          }}
        >
          Reset
        </button>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "six-wives-succession",
    title: "Six wives and the succession",
    blurb: "Drag through 1509–1547: see each marriage, how it ended, the children born and who was heir at every moment.",
    Component: SixWives,
  },
  {
    id: "break-with-rome-motives",
    title: "Break with Rome: weigh the motives",
    blurb: "Tick the evidence you trust, weight heir, money, power and religion, and watch your judgement sentence change.",
    Component: MotivesBoard,
  },
];
