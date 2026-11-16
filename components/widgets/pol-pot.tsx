"use client";
// Explorables for "Pol Pot and the Khmer Rouge".
// Sensitive topic: nothing here scores, counts or gamifies deaths. Both widgets are about
// HOW dictatorships came to power (Term 2 enquiry): weighing causes with evidence, and
// comparing Hitler, Mao and Pol Pot on a to-scale timeline.
import { useMemo, useState, type ReactNode } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Conditions for a takeover — causation explorer
// ---------------------------------------------------------------------------
type CaseId = "cambodia" | "germany" | "china";
type FactorId = "crisis" | "weak" | "lead";

const FACTOR_LABEL: Record<FactorId, string> = { crisis: "Crisis", weak: "Weak government", lead: "Leadership" };
const FACTOR_FILL: Record<FactorId, string> = { crisis: "fill-bad", weak: "fill-info", lead: "fill-brand" };
const FACTOR_BG: Record<FactorId, string> = { crisis: "bg-bad", weak: "bg-info", lead: "bg-brand" };

interface CaseData {
  label: string;
  dictator: string;
  took: string;
  evidence: Record<FactorId, { for: string[]; against: string }>;
  links: string[];
}

const CASES: Record<CaseId, CaseData> = {
  cambodia: {
    label: "Cambodia, 1975",
    dictator: "the Khmer Rouge (Pol Pot)",
    took: "captured Phnom Penh on 17 April 1975 after a five-year civil war",
    evidence: {
      crisis: {
        for: [
          "The Vietnam War spilled over: the Ho Chi Minh Trail ran through eastern Cambodia.",
          "US bombing (1969–73) — at least 500,000 tonnes — destroyed villages; hundreds of thousands of refugees fled to Phnom Penh.",
          "Civil war (1970–75) brought fear and loss, making extreme answers more attractive.",
        ],
        against: "Crisis hit everyone, but only the Khmer Rouge were organised enough to win — so crisis alone cannot explain why *they* took power.",
      },
      weak: {
        for: [
          "Lon Nol's Khmer Republic depended on US money and weapons.",
          "It was riddled with corruption: some officers claimed pay for soldiers who did not exist.",
          "After US bombing stopped in 1973 it could not defend the countryside; by early 1975 Phnom Penh was surrounded.",
        ],
        against: "Much of Lon Nol's weakness was caused by the war itself — is it really a separate factor, or a result of the crisis?",
      },
      lead: {
        for: [
          "A secret, disciplined party ruled as 'Angkar'; leaders used code names and demanded total obedience.",
          "Sihanouk's radio appeals from Beijing brought thousands of peasants to the resistance — borrowed charisma.",
          "A clear, extreme ideology blamed cities, foreigners and the educated for Cambodia's suffering.",
        ],
        against: "Pol Pot was not a charismatic public figure: most Cambodians did not know his name in 1975. Historians also stress help from North Vietnam and China.",
      },
    },
    links: [
      "Crisis → weak government: the war and the bombing drained Lon Nol's government of trust and territory.",
      "Weak government → leadership: Lon Nol's 1970 coup pushed Sihanouk into alliance with the Khmer Rouge, lending them his popularity.",
      "Crisis → leadership: angry, uprooted villagers were easier for a disciplined movement to recruit.",
    ],
  },
  germany: {
    label: "Germany, 1933",
    dictator: "Hitler",
    took: "was appointed Chancellor legally on 30 January 1933",
    evidence: {
      crisis: {
        for: [
          "Defeat in 1918 left many Germans angry and humiliated.",
          "Hyperinflation in 1923 wiped out savings.",
          "The Great Depression (from 1929) left around 6 million unemployed by 1932, and Nazi votes rose sharply.",
        ],
        against: "Germany survived the 1923 crisis without Hitler taking power — crisis did not automatically produce a dictator.",
      },
      weak: {
        for: [
          "Weimar governments relied on unstable coalitions.",
          "From 1930 chancellors ruled by emergency decree under Article 48 instead of through parliament.",
          "Conservative politicians persuaded President Hindenburg to appoint Hitler, thinking they could control him.",
        ],
        against: "Weimar's weakness got much worse because of the Depression — so it is closely tied to the crisis.",
      },
      lead: {
        for: [
          "Hitler was a powerful speaker who used mass rallies, radio and propaganda.",
          "In July 1932 the Nazis became the largest party in the Reichstag.",
        ],
        against: "The Nazis never won a majority in a free election — Hitler needed a backroom deal to become Chancellor.",
      },
    },
    links: [
      "Crisis → weak government: the Depression broke the coalition, leading to rule by decree.",
      "Crisis → leadership: as unemployment rose, so did votes for Hitler's message.",
      "Weak government → leadership: politicians who could not govern without him brought Hitler into power.",
    ],
  },
  china: {
    label: "China, 1949",
    dictator: "Mao",
    took: "proclaimed the People's Republic of China on 1 October 1949 after winning a civil war",
    evidence: {
      crisis: {
        for: [
          "Japan invaded China in 1937 and occupied large areas until 1945.",
          "Civil war between Communists and Nationalists, and runaway inflation, wrecked normal life.",
        ],
        against: "War and inflation hit the whole country — they explain the chaos, but not why the Communists rather than anyone else won.",
      },
      weak: {
        for: [
          "Chiang Kai-shek's Nationalist (GMD) government was seen as corrupt.",
          "It was losing control of the economy and of large parts of the country.",
        ],
        against: "When the civil war restarted in 1946 the Nationalists had a larger army and US support — they were not obviously the weaker side.",
      },
      lead: {
        for: [
          "The legend of the Long March (1934–35) gave Mao a heroic image.",
          "The Communists built a disciplined peasant army in the countryside.",
        ],
        against: "Mao's vast cult of personality mostly came *after* 1949 — before then, organisation and peasant support mattered as much as charisma.",
      },
    },
    links: [
      "Crisis → weak government: the Japanese invasion exhausted and discredited the Nationalists.",
      "Weak government → leadership: corruption and inflation made peasants willing to listen to the Communists.",
      "Crisis → leadership: the war gave the Communists the chance to build their army in the countryside.",
    ],
  },
};

const FACTORS: FactorId[] = ["crisis", "weak", "lead"];

function TakeoverConditions() {
  const [caseId, setCaseId] = useState<CaseId>("cambodia");
  const [weights, setWeights] = useState<Record<FactorId, number>>({ crisis: 3, weak: 3, lead: 3 });
  const [focus, setFocus] = useState<FactorId>("crisis");
  const [showLinks, setShowLinks] = useState(false);
  const data = CASES[caseId];

  const total = weights.crisis + weights.weak + weights.lead;
  const share = (f: FactorId) => (total === 0 ? 0 : Math.round((weights[f] / total) * 100));
  const ranked = useMemo(() => [...FACTORS].sort((a, b) => weights[b] - weights[a]), [weights]);
  const top = ranked[0];
  const tiedTop = FACTORS.filter((f) => weights[f] === weights[top]);
  const zeroed = FACTORS.filter((f) => weights[f] === 0);

  const setW = (f: FactorId) => (v: number) => setWeights((w) => ({ ...w, [f]: v }));

  // Bar chart geometry
  const W = 480, H = 150, left = 130, right = 60, barH = 26;
  const maxW = W - left - right;

  const ariaLabel =
    total === 0
      ? `No weight given to any factor for ${data.label}.`
      : `Your weighting for ${data.label}: ` + FACTORS.map((f) => `${FACTOR_LABEL[f]} ${share(f)} per cent`).join(", ") + ".";

  let caption: ReactNode;
  if (total === 0) {
    caption = (
      <p>
        You have given every factor zero weight — but {data.dictator} {data.took}. Something explains it! Raise at least one slider and build an argument.
      </p>
    );
  } else {
    const ev = data.evidence[top];
    caption = (
      <div className="space-y-2">
        <p>
          <strong>Your argument for {data.label}:</strong>{" "}
          {tiedTop.length > 1 ? (
            <>
              you rate {tiedTop.map((f) => FACTOR_LABEL[f].toLowerCase()).join(" and ")} as equally important ({share(top)}% each). A strong answer still explains <em>how</em> they worked together.
            </>
          ) : (
            <>
              <strong>{FACTOR_LABEL[top].toLowerCase()}</strong> mattered most ({share(top)}% of your explanation), then {FACTOR_LABEL[ranked[1]].toLowerCase()} ({share(ranked[1])}%) and {FACTOR_LABEL[ranked[2]].toLowerCase()} ({share(ranked[2])}%).
            </>
          )}
        </p>
        <p>
          <strong>Evidence you could use:</strong> {ev.for[0]}
        </p>
        <p>
          <strong>A historian might challenge you:</strong> {ev.against.replace(/\*/g, "")}
        </p>
        {zeroed.length > 0 ? (
          <p>
            You have given <strong>{zeroed.map((f) => FACTOR_LABEL[f].toLowerCase()).join(" and ")}</strong> no weight at all. Check the evidence for {zeroed.length > 1 ? "them" : "it"} before you rule {zeroed.length > 1 ? "them" : "it"} out — for example: {data.evidence[zeroed[0]].for[0]}
          </p>
        ) : null}
        <p className="text-ink-2">
          This is <em>your</em> judgement, not a correct answer: historians weigh these factors differently. What matters is supporting your weighting with evidence and answering the counter-argument.
        </p>
      </div>
    );
  }

  return (
    <WidgetFrame
      title="Conditions for a takeover"
      tryThis={[
        "Make **crisis** your most important factor for Cambodia. Read the challenge — how would you answer it?",
        "Keep your weights, then switch to **Germany** and **China**. Does the same argument still work?",
        "Turn **leadership** down to 0 for Cambodia. What does the evidence suggest about whether the Khmer Rouge could have won without their secret organisation?",
        "Turn on **Show links**. Pick one link and explain it in a sentence beginning 'This mattered because…'.",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <Segmented<CaseId>
          label="Choose a dictatorship"
          value={caseId}
          onChange={setCaseId}
          options={[
            { value: "cambodia", label: "Pol Pot" },
            { value: "germany", label: "Hitler" },
            { value: "china", label: "Mao" },
          ]}
        />
        <p className="text-sm text-ink-2">
          <strong className="text-ink">{data.label}:</strong> {data.dictator} {data.took}. How much weight does each ingredient deserve in <em>your</em> explanation?
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {FACTORS.map((f) => (
            <Slider key={f} label={FACTOR_LABEL[f]} value={weights[f]} min={0} max={5} onChange={setW(f)} format={(v) => `${v} / 5`} />
          ))}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block w-full h-auto max-w-2xl" role="img" aria-label={ariaLabel}>
          <text x={0} y={14} fontSize={12} className="fill-ink-2">Share of your explanation</text>
          {FACTORS.map((f, i) => {
            const y = 28 + i * (barH + 12);
            const w = total === 0 ? 0 : (weights[f] / total) * maxW;
            return (
              <g key={f}>
                <text x={left - 8} y={y + barH / 2 + 4} fontSize={13} textAnchor="end" className="fill-ink">
                  {FACTOR_LABEL[f]}
                </text>
                <rect x={left} y={y} width={maxW} height={barH} rx={6} className="fill-surface-2 stroke-line" />
                <rect x={left} y={y} width={w} height={barH} rx={6} className={FACTOR_FILL[f]} />
                <text x={left + maxW + 8} y={y + barH / 2 + 4} fontSize={13} className="fill-ink" fontWeight={700}>
                  {share(f)}%
                </text>
              </g>
            );
          })}
        </svg>

        <div className="space-y-2">
          <Segmented<FactorId>
            label="Show evidence for a factor"
            value={focus}
            onChange={setFocus}
            options={FACTORS.map((f) => ({ value: f, label: FACTOR_LABEL[f] }))}
          />
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-xl bg-good-soft p-3 text-sm text-ink">
              <div className="mb-1 flex items-center gap-2 font-bold">
                <span className={`inline-block h-3 w-3 rounded-full ${FACTOR_BG[focus]}`} aria-hidden />
                Evidence that supports it
              </div>
              <ul className="list-disc space-y-1 pl-5">
                {data.evidence[focus].for.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-bad-soft p-3 text-sm text-ink">
              <div className="mb-1 font-bold">Evidence that challenges it</div>
              <p>{data.evidence[focus].against.replace(/\*/g, "")}</p>
            </div>
          </div>
        </div>

        <div>
          <button type="button" className="btn btn-secondary btn-sm" aria-pressed={showLinks} onClick={() => setShowLinks((s) => !s)}>
            {showLinks ? "Hide links between factors" : "Show links between factors"}
          </button>
          {showLinks ? (
            <ul className="mt-2 space-y-1 rounded-xl border border-line bg-surface p-3 text-sm text-ink">
              {data.links.map((l) => (
                <li key={l}>🔗 {l}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Three roads to dictatorship — to-scale timeline + comparison grid
// ---------------------------------------------------------------------------
type LaneId = "hitler" | "mao" | "polpot";
interface LaneEvent { y: number; text: string }
interface Lane {
  id: LaneId;
  name: string;
  country: string;
  power: [number, number];
  /** Main crisis immediately before taking power. */
  crisis: [number, number];
  crisisLabel: string;
  afterText: string;
  events: LaneEvent[];
}

const LANES: Lane[] = [
  {
    id: "hitler",
    name: "Hitler",
    country: "Germany",
    power: [1933, 1945],
    crisis: [1929, 1933],
    crisisLabel: "the Great Depression",
    afterText: "His regime ended with Germany's defeat in 1945.",
    events: [
      { y: 1918, text: "Germany is defeated in the First World War." },
      { y: 1919, text: "The Weimar Republic's democratic constitution is adopted." },
      { y: 1923, text: "Hyperinflation; Hitler's Munich Putsch fails." },
      { y: 1929, text: "The Wall Street Crash: the Great Depression begins." },
      { y: 1932, text: "July: the Nazis become the largest party in the Reichstag." },
      { y: 1933, text: "30 January: Hitler is appointed Chancellor — legally." },
      { y: 1934, text: "After President Hindenburg dies, Hitler makes himself Führer." },
      { y: 1945, text: "Hitler dies as Germany is defeated in the Second World War." },
    ],
  },
  {
    id: "mao",
    name: "Mao",
    country: "China",
    power: [1949, 1976],
    crisis: [1937, 1949],
    crisisLabel: "the Japanese invasion and civil war",
    afterText: "Mao ruled until his death in 1976.",
    events: [
      { y: 1921, text: "The Chinese Communist Party is founded; Mao is a founding member." },
      { y: 1927, text: "The Nationalists turn on the Communists; civil war begins." },
      { y: 1934, text: "The Long March begins (it ends in 1935)." },
      { y: 1937, text: "Japan invades China." },
      { y: 1945, text: "Japan is defeated; civil war soon restarts." },
      { y: 1949, text: "1 October: Mao proclaims the People's Republic of China." },
      { y: 1958, text: "The Great Leap Forward begins, leading to a terrible famine." },
      { y: 1976, text: "Mao dies, still in power." },
    ],
  },
  {
    id: "polpot",
    name: "Pol Pot",
    country: "Cambodia",
    power: [1975, 1979],
    crisis: [1969, 1975],
    crisisLabel: "the Vietnam War, US bombing and civil war",
    afterText: "Driven from Phnom Penh in 1979, the Khmer Rouge fought on from the jungle for nearly 20 years.",
    events: [
      { y: 1949, text: "Saloth Sar (later Pol Pot) goes to Paris and becomes a communist." },
      { y: 1953, text: "Cambodia gains independence from France." },
      { y: 1963, text: "Saloth Sar leads the secret party and flees to the jungle." },
      { y: 1969, text: "Secret US bombing of Cambodia begins (until 1973)." },
      { y: 1970, text: "Lon Nol's coup removes Sihanouk; civil war begins." },
      { y: 1975, text: "17 April: the Khmer Rouge capture Phnom Penh and empty the cities." },
      { y: 1979, text: "7 January: Vietnamese forces capture Phnom Penh, ending Khmer Rouge rule." },
      { y: 1998, text: "Pol Pot dies, never tried by a court." },
    ],
  },
];

const Y0 = 1915, Y1 = 2000;
const ALL_YEARS = Array.from(new Set(LANES.flatMap((l) => l.events.map((e) => e.y)))).sort((a, b) => a - b);

type RowId = "crisis" | "weak" | "lead" | "route" | "base" | "rule";
const ROWS: { id: RowId; label: string; cells: Record<LaneId, string>; note: string }[] = [
  {
    id: "crisis",
    label: "Crisis",
    cells: {
      hitler: "Defeat in 1918, hyperinflation (1923), the Great Depression (from 1929).",
      mao: "Japanese invasion (1937–45), civil war and runaway inflation.",
      polpot: "The Vietnam War spilling over, US bombing (1969–73), civil war (1970–75).",
    },
    note: "The most similar row: every one of the three rose out of deep crisis. That is why historians see crisis as a key *condition* for dictatorship.",
  },
  {
    id: "weak",
    label: "Weak government",
    cells: {
      hitler: "Weimar: unstable coalitions and rule by decree under Article 48.",
      mao: "Chiang Kai-shek's Nationalists (GMD): seen as corrupt and losing control.",
      polpot: "Lon Nol's Khmer Republic: corrupt, divided and dependent on US aid.",
    },
    note: "Also very similar: in each case the existing government could not solve the crisis, so its authority drained away.",
  },
  {
    id: "lead",
    label: "Leadership style",
    cells: {
      hitler: "Public charisma: speeches, mass rallies, radio and propaganda.",
      mao: "Heroic image from the Long March; later a vast cult of personality.",
      polpot: "Hidden: ruled as faceless 'Angkar'; borrowed Sihanouk's popularity.",
    },
    note: "Pol Pot is the odd one out: he hid instead of showing himself. What all three shared was determined, ruthless leadership with a clear ideology — not necessarily charisma.",
  },
  {
    id: "route",
    label: "Route to power",
    cells: {
      hitler: "Appointed Chancellor legally, 30 January 1933.",
      mao: "Won a civil war; proclaimed the PRC, 1 October 1949.",
      polpot: "Won a civil war; captured Phnom Penh, 17 April 1975.",
    },
    note: "Here Hitler is the odd one out: he was appointed within the constitution, while Mao and Pol Pot won civil wars. A common misconception is that Hitler seized power in a coup.",
  },
  {
    id: "base",
    label: "Main support",
    cells: {
      hitler: "Voters across a modern, industrial country.",
      mao: "A peasant army in the countryside.",
      polpot: "A peasant army in the countryside, with many teenage recruits.",
    },
    note: "Mao and Pol Pot built rural, peasant armies; Hitler won votes in towns and countryside alike. Same circumstances, different paths.",
  },
  {
    id: "rule",
    label: "Length of rule",
    cells: {
      hitler: "1933–1945: about 12 years, ended by defeat in war.",
      mao: "1949–1976: about 27 years, until his death.",
      polpot: "1975–1979: 3 years, 8 months and 20 days, ended by Vietnam's invasion.",
    },
    note: "Pol Pot's rule was by far the shortest, yet it changed Cambodia completely: within days the cities were emptied, and an estimated 1.5–2 million people died. Because Cambodia was sealed off, the outside world knew little of what was happening inside.",
  },
];

function statusOf(l: Lane, year: number): { text: string; tone: "brand" | "good" | "bad" | "ink" } {
  if (year < l.power[0]) return { text: year >= l.crisis[0] ? "Crisis — not yet in power" : "Not yet in power", tone: "ink" };
  if (year < l.power[1]) return { text: "In power", tone: "bad" };
  if (year === l.power[1]) return { text: l.id === "mao" ? "Dies in power" : "Rule ends", tone: "ink" };
  return { text: "After his rule", tone: "ink" };
}

function ThreeRoads() {
  const [year, setYear] = useState(1933);
  const [row, setRow] = useState<RowId>("crisis");

  const W = 480, H = 210, left = 78, right = 14, top = 26, laneGap = 54;
  const x = (y: number) => left + ((y - Y0) / (Y1 - Y0)) * (W - left - right);
  const ticks = [1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000];

  const latest = LANES.map((l) => {
    const past = l.events.filter((e) => e.y <= year);
    return past.length ? past[past.length - 1] : null;
  });
  const inPower = LANES.filter((l) => year >= l.power[0] && year < l.power[1]).map((l) => l.name);

  const prevYear = [...ALL_YEARS].reverse().find((y) => y < year);
  const nextYear = ALL_YEARS.find((y) => y > year);

  const ariaLabel =
    `Timeline 1915 to 2000 with three lanes: Hitler in Germany (in power 1933–1945), Mao in China (1949–1976) and Pol Pot in Cambodia (1975–1979). ` +
    `The marker is at ${year}; ` +
    (inPower.length ? `in power that year: ${inPower.join(" and ")}.` : "none of the three is in power that year.");

  const rowData = ROWS.find((r) => r.id === row)!;

  const caption = (
    <div className="space-y-2">
      <p>
        <strong>{year}:</strong>{" "}
        {inPower.length === 0
          ? "none of the three is in power."
          : `${inPower.join(" and ")} ${inPower.length > 1 ? "are" : "is"} in power.`}{" "}
        {LANES.map((l) => {
          if (year >= l.crisis[0] && year < l.power[0]) return `${l.country} is in the grip of ${l.crisisLabel}. `;
          return "";
        }).join("")}
        {LANES.filter((l) => year > l.power[1]).map((l) => l.afterText + " ").join("")}
      </p>
      <p>
        <strong>{rowData.label}:</strong> {rowData.note.replace(/\*/g, "")}
      </p>
      <p className="text-ink-2">Timeline drawn to scale. Shaded bands = the main crisis before each took power; solid bars = years in power. Dates: textbook chronology.</p>
    </div>
  );

  return (
    <WidgetFrame
      title="Three roads to dictatorship"
      tryThis={[
        "Move the marker to **1933**. Who is in power, and what is happening in China and Cambodia?",
        "Look at the shaded crisis bands. What happens in every lane soon after a crisis band ends?",
        "Switch between the comparison rows. Which row is most **similar** for all three — and in which rows is a different dictator the odd one out?",
        "Pol Pot's bar is the shortest. Why might a regime change a whole country so completely in under four years?",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <Slider label="Year" value={year} min={Y0} max={Y1} onChange={setYear} />
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn btn-secondary btn-sm" disabled={prevYear === undefined} onClick={() => prevYear !== undefined && setYear(prevYear)}>
            ◀ Previous event{prevYear !== undefined ? ` (${prevYear})` : ""}
          </button>
          <button type="button" className="btn btn-secondary btn-sm" disabled={nextYear === undefined} onClick={() => nextYear !== undefined && setYear(nextYear)}>
            Next event{nextYear !== undefined ? ` (${nextYear})` : ""} ▶
          </button>
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block w-full h-auto max-w-2xl" role="img" aria-label={ariaLabel}>
          {ticks.map((t) => (
            <g key={t}>
              <line x1={x(t)} x2={x(t)} y1={top - 6} y2={top + laneGap * 3 - 14} className="stroke-line" strokeWidth={1} />
              <text x={x(t)} y={H - 6} fontSize={11} textAnchor="middle" className="fill-ink-2">
                {t}
              </text>
            </g>
          ))}
          {LANES.map((l, i) => {
            const cy = top + 14 + i * laneGap;
            return (
              <g key={l.id}>
                <text x={4} y={cy - 2} fontSize={13} fontWeight={700} className="fill-ink">
                  {l.name}
                </text>
                <text x={4} y={cy + 13} fontSize={11} className="fill-ink-2">
                  {l.country}
                </text>
                <line x1={x(Y0)} x2={x(Y1)} y1={cy} y2={cy} className="stroke-line" strokeWidth={2} />
                <rect x={x(l.crisis[0])} y={cy - 12} width={x(l.crisis[1]) - x(l.crisis[0])} height={24} rx={4} className="fill-accent" opacity={0.25} />
                <rect x={x(l.power[0])} y={cy - 7} width={Math.max(3, x(l.power[1]) - x(l.power[0]))} height={14} rx={3} className="fill-brand" />
                {l.events.map((e) => (
                  <circle
                    key={e.y}
                    cx={x(e.y)}
                    cy={cy}
                    r={e.y === latest[i]?.y ? 6 : 4}
                    className={e.y <= year ? "fill-ink stroke-surface" : "fill-surface stroke-ink-2"}
                    strokeWidth={1.5}
                  />
                ))}
              </g>
            );
          })}
          <line x1={x(year)} x2={x(year)} y1={top - 10} y2={top + laneGap * 3 - 10} className="stroke-bad" strokeWidth={2} />
          <text x={Math.min(Math.max(x(year), 30), W - 30)} y={12} fontSize={12} fontWeight={700} textAnchor="middle" className="fill-bad">
            {year}
          </text>
        </svg>

        <div className="grid gap-2 sm:grid-cols-3">
          {LANES.map((l, i) => {
            const st = statusOf(l, year);
            return (
              <div key={l.id} className="space-y-1">
                <Readout label={`${l.name} · ${l.country}`} value={st.text} tone={st.tone} />
                <p className="px-1 text-xs leading-snug text-ink-2">
                  {latest[i] ? (
                    <>
                      <strong className="text-ink">Latest ({latest[i]!.y}):</strong> {latest[i]!.text}
                    </>
                  ) : (
                    "No events yet on this timeline."
                  )}
                </p>
              </div>
            );
          })}
        </div>

        <div className="space-y-2">
          <Segmented<RowId> label="Compare the three dictators by" value={row} onChange={setRow} options={ROWS.map((r) => ({ value: r.id, label: r.label }))} />
          <div className="grid gap-2 sm:grid-cols-3">
            {LANES.map((l) => (
              <div key={l.id} className="rounded-xl border border-line bg-surface p-3 text-sm">
                <div className="font-bold text-ink">{l.name}</div>
                <div className="text-ink-2">{rowData.cells[l.id]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "conditions-for-a-takeover",
    title: "Conditions for a takeover",
    blurb: "Weigh crisis, weak government and leadership — with evidence for and against — for Pol Pot, Hitler and Mao.",
    Component: TakeoverConditions,
  },
  {
    id: "three-roads-to-dictatorship",
    title: "Three roads to dictatorship",
    blurb: "Scrub a to-scale timeline of Hitler, Mao and Pol Pot, then compare how each came to power.",
    Component: ThreeRoads,
  },
];
