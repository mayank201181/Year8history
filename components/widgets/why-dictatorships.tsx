"use client";
import { useState } from "react";
import { WidgetFrame, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Causes comparison board: Germany / China / Cambodia
// ---------------------------------------------------------------------------

type Country = "germany" | "china" | "cambodia";
type FactorId = "crisis" | "weak" | "leader" | "outside";

const COUNTRIES: { id: Country; label: string; who: string; when: string }[] = [
  { id: "germany", label: "Germany", who: "Hitler", when: "1933–34" },
  { id: "china", label: "China", who: "Mao", when: "1949" },
  { id: "cambodia", label: "Cambodia", who: "Pol Pot", when: "1975" },
];

const FACTORS: { id: FactorId; label: string; short: string }[] = [
  { id: "crisis", label: "Crisis (war, economic collapse)", short: "crisis" },
  { id: "weak", label: "Weak government", short: "weak government" },
  { id: "leader", label: "Leadership", short: "leadership" },
  { id: "outside", label: "Ideology & outside support", short: "ideology and outside support" },
];

const RATING_WORDS = ["minor", "some", "important", "crucial"];

const EVIDENCE: Record<Country, Record<FactorId, [string, string]>> = {
  germany: {
    crisis: [
      "Hyperinflation in 1923 wiped out many families' savings.",
      "The Depression: about 6 million unemployed by 1932; Nazi seats rose from 12 (1928) to 230 (July 1932).",
    ],
    weak: [
      "Proportional representation gave unstable coalitions; from 1930 Brüning ruled by Article 48 decrees.",
      "In January 1933 Papen and Hindenburg appointed Hitler, sure they could control him.",
    ],
    leader: [
      "Hitler's speeches, mass rallies and 'Hitler over Germany' flights in 1932.",
      "Goebbels's propaganda aimed different promises at farmers, workers and the middle classes.",
    ],
    outside: [
      "Nazi ideas — tearing up Versailles, crushing Communism, a 'national community' — appealed in a crisis.",
      "No foreign power helped Hitler to power.",
    ],
  },
  china: {
    crisis: [
      "Decades of foreign humiliation and civil war; Japan's full-scale invasion in 1937.",
      "Runaway inflation in the late 1940s ruined savers in the cities.",
    ],
    weak: [
      "After 1916 warlords ran whole provinces; no central government could keep order.",
      "The GMD was widely seen as corrupt and lost the trust of peasants and city people.",
    ],
    leader: [
      "Mao's guerrilla tactics and land reform won millions of peasant supporters.",
      "The Long March (1934–35) became a legend that built Mao's leadership.",
    ],
    outside: [
      "Communist ideology promised land to poor peasants — most of China's people.",
      "Soviet help: Comintern advisers in the 1920s; captured Japanese weapons in Manchuria, 1945–46.",
    ],
  },
  cambodia: {
    crisis: [
      "The Vietnam War spilled over: North Vietnamese bases and the Ho Chi Minh trail.",
      "Secret US bombing (1969–73) destroyed villages and drove refugees into Phnom Penh.",
    ],
    weak: [
      "Lon Nol's coup (1970) removed the popular Sihanouk, who then backed the Khmer Rouge.",
      "Lon Nol's army was corrupt: officers claimed pay for 'phantom soldiers'.",
    ],
    leader: [
      "Pol Pot built a secretive, disciplined party — but had little public charisma.",
      "It was Sihanouk, not Pol Pot, who rallied peasants to the Khmer Rouge after 1970.",
    ],
    outside: [
      "North Vietnamese troops trained the Khmer Rouge and did much of their fighting in 1970–72.",
      "China supplied weapons; Maoist ideas shaped Khmer Rouge plans.",
    ],
  },
};

type PairKey = `${FactorId}-${FactorId}`;
const LINKS: Record<Country, Partial<Record<PairKey, string>>> = {
  germany: {
    "crisis-weak": "the Depression exposed Weimar's weakness: coalitions collapsed and Brüning ruled by Article 48 decree",
    "crisis-leader": "the Depression made millions desperate enough to listen to Hitler's promises of work and bread",
    "crisis-outside": "in the crisis, Nazi promises to tear up Versailles and crush Communism suddenly sounded like answers",
    "weak-leader": "a weak system let the elites hand power to Hitler, who then used his skills to seize full control",
    "weak-outside": "many judges, generals and elites shared Nazi nationalist ideas and would not defend democracy",
    "leader-outside": "Hitler's speeches turned Nazi ideas into a simple, emotional message",
  },
  china: {
    "crisis-weak": "war with Japan drained the GMD and exposed its corruption",
    "crisis-leader": "the Japanese invasion let Mao's guerrillas pose as patriotic defenders of China",
    "crisis-outside": "in years of war and hunger, the Communist promise of land drew peasants in",
    "weak-leader": "where the GMD failed, Mao's disciplined Communists offered order in the villages",
    "weak-outside": "GMD corruption made Communist ideas of fairness and land reform look attractive",
    "leader-outside": "Mao adapted communism to China's peasants instead of factory workers",
  },
  cambodia: {
    "crisis-weak": "the war and bombing overwhelmed Lon Nol's fragile government",
    "crisis-leader": "war and bombing gave Pol Pot's secretive party recruits it could never have found in peacetime",
    "crisis-outside": "the war brought North Vietnamese troops and Chinese weapons to the Khmer Rouge's side",
    "weak-leader": "Lon Nol's coup pushed Sihanouk into the Khmer Rouge camp, lending them his popularity",
    "weak-outside": "Lon Nol's weak army could not beat a rebel force backed by North Vietnam and China",
    "leader-outside": "Pol Pot's disciplined party used outside help while hiding its true aims",
  },
};

function link(c: Country, a: FactorId, b: FactorId): string {
  const order: FactorId[] = ["crisis", "weak", "leader", "outside"];
  const [x, y] = order.indexOf(a) < order.indexOf(b) ? [a, b] : [b, a];
  return LINKS[c][`${x}-${y}` as PairKey] ?? "";
}

/** One reasonable weighting, following the guide's argument. Historians disagree. */
const MODEL: Record<Country, Record<FactorId, number>> = {
  germany: { crisis: 3, weak: 3, leader: 2, outside: 1 },
  china: { crisis: 3, weak: 3, leader: 2, outside: 2 },
  cambodia: { crisis: 3, weak: 2, leader: 1, outside: 3 },
};

const MODEL_NOTE: Record<Country, string> = {
  germany: "Many historians see the Depression as decisive (Nazi seats 12 → 230), but Hitler was finally *appointed* by the elites, so crisis and weak government work together. Hitler's leadership turned the opportunity into votes. No outside power helped.",
  china: "War with Japan and the GMD's failures were decisive; Mao's peasant strategy meant the Communists were ready to take advantage. Communist ideas and Soviet help mattered, but less.",
  cambodia: "Without the Vietnam War, the bombing and the 1970 coup the Khmer Rouge would probably have stayed tiny, and North Vietnamese and Chinese help was crucial. Pol Pot's own public appeal counted for little.",
};

type Ratings = Record<Country, Record<FactorId, number>>;
const START: Ratings = {
  germany: { crisis: 1, weak: 1, leader: 1, outside: 1 },
  china: { crisis: 1, weak: 1, leader: 1, outside: 1 },
  cambodia: { crisis: 1, weak: 1, leader: 1, outside: 1 },
};

function judgement(c: Country, r: Record<FactorId, number>): string {
  const name = COUNTRIES.find((x) => x.id === c)!;
  const sorted = [...FACTORS].sort((a, b) => r[b.id] - r[a.id]);
  const [top, second] = sorted;
  const low = sorted[sorted.length - 1];
  if (r[top.id] === r[low.id]) return `You have rated every factor the same for ${name.label}. A judgement needs a priority: which one mattered most?`;
  const ev = EVIDENCE[c][top.id][1];
  let s: string;
  if (r[top.id] === r[second.id]) s = `In ${name.label}, ${top.short} and ${second.short} were equally the most important reasons ${name.who} came to power, because ${link(c, top.id, second.id)}.`;
  else s = `In ${name.label}, the most important reason ${name.who} came to power was ${top.short}. Evidence: ${ev} It mattered most because it linked to ${second.short} — ${link(c, top.id, second.id)}.`;
  s += ` ${low.short.charAt(0).toUpperCase()}${low.short.slice(1)} mattered least.`;
  return s;
}

function CausesBoard() {
  const [country, setCountry] = useState<Country>("germany");
  const [ratings, setRatings] = useState<Ratings>(START);
  const [showModel, setShowModel] = useState(false);
  const [openEvidence, setOpenEvidence] = useState<FactorId | null>("crisis");
  const r = ratings[country];
  const m = MODEL[country];

  const setRating = (f: FactorId, v: number) => setRatings((prev) => ({ ...prev, [country]: { ...prev[country], [f]: v } }));

  const totals = FACTORS.map((f) => ({ f, t: COUNTRIES.reduce((s, c) => s + ratings[c.id][f.id], 0) }));
  const maxT = Math.max(...totals.map((x) => x.t));
  const leaders = totals.filter((x) => x.t === maxT).map((x) => x.f);
  const crisisVerdict =
    leaders.length === 1 && leaders[0].id === "crisis"
      ? "Your weightings **support** the claim 'Crisis was the main reason dictators came to power'."
      : leaders.some((f) => f.id === "crisis")
        ? `Your weightings **partly support** the claim: crisis ties with ${leaders.filter((f) => f.id !== "crisis").map((f) => f.short).join(" and ")}.`
        : `Your weightings **challenge** the claim: ${leaders.map((f) => f.short).join(" and ")} score${leaders.length > 1 ? "" : "s"} higher than crisis across the three countries.`;
  const diffs = FACTORS.map((f) => Math.abs(r[f.id] - m[f.id]));
  const close = diffs.every((d) => d <= 1);

  // Bar chart geometry.
  const W = 360;
  const H = 170;
  const barW = 54;
  const gap = (W - 40 - FACTORS.length * barW) / (FACTORS.length - 1);
  const y0 = 140;
  const unit = 36;
  const aria = `Bar chart for ${country}: ${FACTORS.map((f) => `${f.short} rated ${RATING_WORDS[r[f.id]]}${showModel ? `, model ${RATING_WORDS[m[f.id]]}` : ""}`).join("; ")}.`;

  return (
    <WidgetFrame
      title="Causes comparison board"
      tryThis={[
        "Rate the four factors for **all three** countries, then read your judgement sentence. Is it a judgement or just a list?",
        "Does the same factor win in Germany, China and Cambodia? Check the 'across all three' verdict.",
        "Reveal the model weighting. Where do you disagree — and which evidence card would you use to defend your view?",
        "Find the country where leadership matters least. Why can a dictator rise without public charisma?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>Your judgement:</strong> {judgement(country, r)}
          </p>
          <p>
            <strong>Across all three:</strong>{" "}
            {crisisVerdict.split("**").map((part, k) => (k % 2 ? <strong key={k}>{part}</strong> : <span key={k}>{part}</span>))}
          </p>
          {showModel ? (
            <p className="text-ink-2">
              <strong>Model weighting ({COUNTRIES.find((c) => c.id === country)!.label}):</strong>{" "}
              {MODEL_NOTE[country].split("*").map((part, k) => (k % 2 ? <em key={k}>{part}</em> : <span key={k}>{part}</span>))}{" "}
              {close ? "Your weighting is close to it." : "You differ by 2 or more somewhere — fine, if your evidence supports it."} This is one reasonable reading; historians disagree.
            </p>
          ) : null}
        </div>
      }
    >
      <Segmented
        label="Country"
        options={COUNTRIES.map((c) => ({ value: c.id, label: `${c.label} (${c.who})` }))}
        value={country}
        onChange={(v) => setCountry(v)}
      />

      <div className="mt-3 space-y-3">
        {FACTORS.map((f) => (
          <div key={f.id} className="rounded-xl border border-line bg-surface p-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-bold text-ink">{f.label}</span>
              <Segmented
                label={`How important was ${f.short} in ${country}?`}
                options={RATING_WORDS.map((w, k) => ({ value: String(k), label: w }))}
                value={String(r[f.id])}
                onChange={(v) => setRating(f.id, Number(v))}
              />
            </div>
            <button
              type="button"
              className="mt-1 min-h-[40px] text-sm font-semibold text-brand"
              aria-expanded={openEvidence === f.id}
              onClick={() => setOpenEvidence(openEvidence === f.id ? null : f.id)}
            >
              {openEvidence === f.id ? "Hide evidence" : "Show evidence"}
            </button>
            {openEvidence === f.id ? (
              <ul className="mt-1 grid gap-2 sm:grid-cols-2">
                {EVIDENCE[country][f.id].map((e) => (
                  <li key={e} className="rounded-lg bg-surface-2 p-2 text-sm text-ink">
                    {e}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 h-auto w-full" role="img" aria-label={aria}>
        {[0, 1, 2, 3].map((k) => (
          <g key={k}>
            <line x1={20} x2={W - 20} y1={y0 - k * unit} y2={y0 - k * unit} className="stroke-line" strokeWidth={1} />
          </g>
        ))}
        {FACTORS.map((f, k) => {
          const x = 20 + k * (barW + gap);
          const h = r[f.id] * unit;
          return (
            <g key={f.id}>
              <rect x={x} y={y0 - h} width={barW} height={Math.max(h, 2)} rx={4} className="fill-brand" opacity={0.85} />
              {showModel ? (
                <g>
                  <line x1={x - 4} x2={x + barW + 4} y1={y0 - m[f.id] * unit} y2={y0 - m[f.id] * unit} className="stroke-ink" strokeWidth={3} strokeDasharray="5 3" />
                </g>
              ) : null}
              <text x={x + barW / 2} y={y0 + 16} textAnchor="middle" fontSize={11} fontWeight={700} className="fill-ink">
                {f.id === "outside" ? "ideology/outside" : f.id === "weak" ? "weak govt" : f.short}
              </text>
            </g>
          );
        })}
        <text x={W - 20} y={14} textAnchor="end" fontSize={10} className="fill-ink-2">
          {showModel ? "bars = you · dashed line = model" : "bars = your rating"}
        </text>
      </svg>

      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button type="button" className="btn btn-secondary min-h-[44px]" onClick={() => setShowModel(!showModel)} aria-pressed={showModel}>
          {showModel ? "Hide model weighting" : "Compare with a model weighting"}
        </button>
        <button type="button" className="btn btn-ghost min-h-[44px]" onClick={() => setRatings(START)}>
          Reset
        </button>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {totals.map(({ f, t }) => (
          <Readout key={f.id} label={`${f.id === "outside" ? "ideology/outside" : f.short} (all 3)`} value={`${t}/9`} tone={t === maxT ? "brand" : "ink"} />
        ))}
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Democracy ↔ dictatorship spectrum
// ---------------------------------------------------------------------------

type FeatureId = "elections" | "press" | "courts" | "opposition" | "parliament" | "terror" | "cult" | "ideology";

const FEATURES: { id: FeatureId; label: string; democratic: boolean }[] = [
  { id: "elections", label: "Free, competitive elections", democratic: true },
  { id: "press", label: "Free press", democratic: true },
  { id: "courts", label: "Independent courts", democratic: true },
  { id: "opposition", label: "Opposition parties allowed", democratic: true },
  { id: "parliament", label: "Parliament makes the laws", democratic: true },
  { id: "terror", label: "Secret police and terror", democratic: false },
  { id: "cult", label: "Cult of personality", democratic: false },
  { id: "ideology", label: "One ideology imposed (schools, youth)", democratic: false },
];

/** 0 = no, 1 = partly, 2 = yes. */
type Settings = Record<FeatureId, number>;

interface Preset {
  id: string;
  label: string;
  /** Short label for the chart. */
  short: string;
  settings: Settings;
  notes: Partial<Record<FeatureId, string>>;
  summary: string;
}

const PRESETS: Preset[] = [
  {
    id: "britain1928",
    label: "Britain 1928",
    short: "UK 1928",
    settings: { elections: 2, press: 2, courts: 2, opposition: 2, parliament: 2, terror: 0, cult: 0, ideology: 0 },
    notes: {
      elections: "The Equal Franchise Act (1928) gave women the vote on the same terms as men, from age 21.",
      parliament: "Parliament makes the laws and governments can be voted out.",
    },
    summary: "A parliamentary democracy — the comparison point for Term 3.",
  },
  {
    id: "weimar1928",
    label: "Weimar Germany 1928",
    short: "Weimar 1928",
    settings: { elections: 2, press: 2, courts: 1, opposition: 2, parliament: 2, terror: 0, cult: 0, ideology: 0 },
    notes: {
      elections: "Men and women over 20 vote; proportional representation gives seats to many parties (the Nazis won 12).",
      courts: "Courts are independent but many judges favour the right: Hitler was released after about nine months of a five-year sentence for the 1923 putsch.",
      parliament: "Müller's 'grand coalition' governs with a Reichstag majority (1928–30).",
    },
    summary: "A working democracy in the 'Golden Twenties' — with weaknesses (Article 48, judges and generals not loyal to democracy) that would matter later.",
  },
  {
    id: "germany1932",
    label: "Germany 1932",
    short: "Ger. 1932",
    settings: { elections: 2, press: 1, courts: 1, opposition: 2, parliament: 0, terror: 1, cult: 0, ideology: 0 },
    notes: {
      elections: "Two Reichstag elections and a presidential election are held — amid street violence.",
      press: "Emergency decrees allow newspapers to be banned for a time.",
      parliament: "In 1932 the Reichstag passes only 5 laws; the President issues 66 emergency decrees under Article 48.",
      terror: "SA and Communist street fighting kills many — but it is not yet state terror.",
      cult: "The Nazi movement worships Hitler, but he is not yet in power.",
    },
    summary: "Still a democracy on paper, but run by presidential decree: a democracy in danger.",
  },
  {
    id: "germany1934",
    label: "Germany 1934",
    short: "Ger. 1934",
    settings: { elections: 0, press: 0, courts: 0, opposition: 0, parliament: 0, terror: 2, cult: 2, ideology: 2 },
    notes: {
      elections: "Only Nazi candidates stand; votes are held under pressure.",
      press: "Goebbels's ministry controls newspapers and radio.",
      courts: "The People's Court (1934) tries 'treason'; judges must follow Nazi ideas.",
      opposition: "All other parties banned (July 1933).",
      parliament: "The Enabling Act (March 1933) lets Hitler make laws.",
      terror: "Gestapo, SS and concentration camps such as Dachau (1933).",
      cult: "The Führer cult; from August 1934 the army swears an oath to Hitler personally.",
      ideology: "Hitler Youth; schools teach Nazi ideas.",
    },
    summary: "A totalitarian dictatorship, built in about 18 months by dismantling democracy step by step.",
  },
  {
    id: "china1966",
    label: "China 1966",
    short: "China 1966",
    settings: { elections: 0, press: 0, courts: 0, opposition: 0, parliament: 0, terror: 2, cult: 2, ideology: 2 },
    notes: {
      elections: "No competitive elections: Communist Party rule.",
      courts: "Courts serve the Party; in the Cultural Revolution many legal institutions stop working.",
      parliament: "The National People's Congress does not meet between 1965 and 1975.",
      terror: "Red Guards, struggle sessions and labour camps.",
      cult: "The Little Red Book, Mao badges, posters and songs.",
      ideology: "Mao Zedong Thought everywhere; schools and universities are closed in 1966.",
    },
    summary: "A totalitarian dictatorship at the height of the cult of Mao.",
  },
  {
    id: "cambodia1976",
    label: "Cambodia 1976",
    short: "Camb. 1976",
    settings: { elections: 0, press: 0, courts: 0, opposition: 0, parliament: 0, terror: 2, cult: 0, ideology: 2 },
    notes: {
      elections: "A single-list 'election' in March 1976 offers no real choice.",
      press: "No free newspapers; the regime speaks through radio propaganda.",
      courts: "No courts or laws: 'Angkar' decides.",
      parliament: "The new assembly meets only once, in April 1976.",
      terror: "S-21 and other prisons; killing of anyone labelled an 'enemy'.",
      cult: "No personality cult: the leaders hide behind the faceless 'Angkar'.",
      ideology: "Extreme communist and nationalist ideas; children taught to obey Angkar.",
    },
    summary: "One of the most extreme regimes of the twentieth century — even though it had no cult of personality.",
  },
];

const LEVEL3 = ["No", "Partly", "Yes"];

function democracyScore(s: Settings): number {
  let pts = 0;
  for (const f of FEATURES) pts += f.democratic ? s[f.id] : 2 - s[f.id];
  return Math.round((pts / (FEATURES.length * 2)) * 100);
}

function zone(score: number): { label: string; tone: "good" | "brand" | "bad" | "ink" } {
  if (score >= 80) return { label: "Democracy", tone: "good" };
  if (score >= 55) return { label: "Democracy in danger", tone: "brand" };
  if (score >= 25) return { label: "Authoritarian dictatorship", tone: "bad" };
  return { label: "Totalitarian dictatorship", tone: "bad" };
}

function Spectrum() {
  const [settings, setSettings] = useState<Settings>(PRESETS[1].settings);
  const [presetId, setPresetId] = useState<string>(PRESETS[1].id);
  const preset = PRESETS.find((p) => p.id === presetId);
  const matchesPreset = preset ? FEATURES.every((f) => preset.settings[f.id] === settings[f.id]) : false;
  const score = democracyScore(settings);
  const z = zone(score);

  const set = (f: FeatureId, v: number) => setSettings((prev) => ({ ...prev, [f]: v }));

  // Spectrum geometry: democracy on the left (100) → dictatorship on the right (0).
  const X0 = 14;
  const X1 = 346;
  const px = (sc: number) => X0 + ((100 - sc) / 100) * (X1 - X0);
  const presetMarks = PRESETS.map((p) => ({ p, sc: democracyScore(p.settings) })).sort((a, b) => b.sc - a.sc);
  const rows: number[] = [];
  const lastX: number[] = [];
  for (const pm of presetMarks) {
    const x = px(pm.sc);
    let row = 0;
    while (lastX[row] !== undefined && Math.abs(x - lastX[row]) < 92) row++;
    lastX[row] = x;
    rows.push(row);
  }

  const aria = `Democracy to dictatorship spectrum. Current settings score ${score} out of 100: ${z.label}. Reference points: ${presetMarks.map((pm) => `${pm.p.label} ${pm.sc}`).join(", ")}.`;

  return (
    <WidgetFrame
      title="Democracy ↔ dictatorship spectrum"
      tryThis={[
        "Start at Weimar Germany 1928. Which feature had Germany already lost by 1932?",
        "Turn Weimar 1928 into Germany 1934 one feature at a time, in the order Hitler removed them (civil rights Feb 1933 → Enabling Act Mar 1933 → parties banned Jul 1933).",
        "Make a regime that is **authoritarian but not totalitarian**. Which features did you keep?",
        "Compare China 1966 with Cambodia 1976. Which feature differs — and does it make Cambodia any less of a dictatorship?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <strong>
              {matchesPreset && preset ? preset.label : "Your settings"}: {z.label} ({score}/100).
            </strong>{" "}
            {matchesPreset && preset ? preset.summary : "Compare your regime with the historical reference points on the line."}
          </p>
          <p className="text-ink-2">
            This is a simple model: counting features cannot measure how much fear people lived with. Democratic Kampuchea scores slightly higher than Nazi Germany here only because it had no personality cult — yet it was one of the most murderous regimes of the twentieth century. Features are evidence; the judgement is yours.
          </p>
        </div>
      }
    >
      <div className="flex flex-wrap gap-2" role="group" aria-label="Historical examples">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => {
              setPresetId(p.id);
              setSettings(p.settings);
            }}
            aria-pressed={matchesPreset && presetId === p.id}
            className={`min-h-[40px] rounded-xl border px-3 text-sm font-bold transition ${matchesPreset && presetId === p.id ? "border-brand bg-brand-soft text-ink" : "border-line bg-surface text-ink-2"}`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 360 160" className="mt-3 h-auto w-full" role="img" aria-label={aria}>
        <rect x={X0} y={30} width={(X1 - X0) * 0.2} height={18} className="fill-good-soft" />
        <rect x={X0 + (X1 - X0) * 0.2} y={30} width={(X1 - X0) * 0.25} height={18} className="fill-accent-soft" />
        <rect x={X0 + (X1 - X0) * 0.45} y={30} width={(X1 - X0) * 0.3} height={18} className="fill-bad-soft" />
        <rect x={X0 + (X1 - X0) * 0.75} y={30} width={(X1 - X0) * 0.25} height={18} className="fill-brand-soft" />
        <rect x={X0} y={30} width={X1 - X0} height={18} fill="none" className="stroke-ink" strokeWidth={1} />
        <text x={X0} y={20} fontSize={13} fontWeight={700} className="fill-good">
          ← Democracy
        </text>
        <text x={X1} y={20} fontSize={13} fontWeight={700} textAnchor="end" className="fill-brand">
          Dictatorship →
        </text>
        <polygon points={`${px(score)},52 ${px(score) - 9},66 ${px(score) + 9},66`} className="fill-ink" />
        <line x1={px(score)} x2={px(score)} y1={24} y2={52} className="stroke-ink" strokeWidth={3} />
        {presetMarks.map((pm, k) => {
          const x = px(pm.sc);
          const y = 84 + rows[k] * 17;
          const anchor = x < 50 ? "start" : x > 310 ? "end" : "middle";
          return (
            <g key={pm.p.id}>
              <line x1={x} x2={x} y1={48} y2={y - 10} className="stroke-ink-2" strokeWidth={1} strokeDasharray="2 2" />
              <circle cx={x} cy={48} r={3} className="fill-ink-2" />
              <text x={x} y={y} fontSize={12} textAnchor={anchor} className="fill-ink-2">
                {pm.p.short}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        <Readout label="Democracy score" value={`${score}/100`} tone={z.tone} />
        <Readout label="Where it sits" value={<span className="text-base">{z.label}</span>} tone={z.tone} />
      </div>

      <div className="mt-3 space-y-2">
        {FEATURES.map((f) => (
          <div key={f.id} className="rounded-xl border border-line bg-surface p-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-bold text-ink">
                <span aria-hidden className={f.democratic ? "text-good" : "text-bad"}>
                  {f.democratic ? "▲ " : "▼ "}
                </span>
                {f.label}
              </span>
              <Segmented
                label={f.label}
                options={LEVEL3.map((w, k) => ({ value: String(k), label: w }))}
                value={String(settings[f.id])}
                onChange={(v) => set(f.id, Number(v))}
              />
            </div>
            {matchesPreset && preset?.notes[f.id] ? <p className="mt-1 text-xs text-ink-2">{preset.notes[f.id]}</p> : null}
          </div>
        ))}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "causes-board",
    title: "Causes comparison board",
    blurb: "Weigh crisis, weak government, leadership and outside support for Hitler, Mao and Pol Pot — and get a linked judgement.",
    Component: CausesBoard,
  },
  {
    id: "democracy-spectrum",
    title: "Democracy ↔ dictatorship spectrum",
    blurb: "Switch features on and off and see where real regimes — from Weimar 1928 to Cambodia 1976 — sit on the line.",
    Component: Spectrum,
  },
];
