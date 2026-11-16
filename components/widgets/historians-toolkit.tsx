"use client";
// Interactive explorables for "The Historian's Toolkit".
import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. Century & period calculator
// ---------------------------------------------------------------------------

function ordinal(n: number): string {
  const r100 = n % 100;
  if (r100 >= 11 && r100 <= 13) return `${n}th`;
  const r10 = n % 10;
  return `${n}${r10 === 1 ? "st" : r10 === 2 ? "nd" : r10 === 3 ? "rd" : "th"}`;
}

/** Years are stored as signed integers with no 0: −44 = 44 BC, 1066 = AD 1066. */
function fmtYear(y: number): string {
  return y < 0 ? `${-y} BC` : y < 1000 ? `AD ${y}` : String(y);
}

function centuryOf(y: number): number {
  return Math.ceil(Math.abs(y) / 100);
}

function centuryLabel(y: number): string {
  return `${ordinal(centuryOf(y))} century${y < 0 ? " BC" : ""}`;
}

function periodOf(y: number): { name: string; note: string } {
  if (y < 476) return { name: "Ancient", note: "the ancient world — Egypt, Greece, Rome; it is usually said to end with the fall of the Western Roman Empire (AD 476)" };
  if (y < 1500) return { name: "Medieval", note: "the Middle Ages, c. 500–1500 (in English history often 1066–1485)" };
  if (y < 1750) return { name: "Early modern", note: "c. 1500–1750: the Tudors and Stuarts, the Reformation, the first global empires" };
  return { name: "Modern", note: "c. 1750 to today: revolutions, industry, mass democracy, world wars" };
}

/** Years between two dates, remembering there is no year 0. */
function gapBetween(a: number, b: number): number {
  const lo = Math.min(a, b);
  const hi = Math.max(a, b);
  return lo < 0 && hi > 0 ? hi - lo - 1 : hi - lo;
}

const MIN_Y = -800;
const MAX_Y = 2030;
const fixZero = (v: number, prev: number) => (v === 0 ? (prev > 0 ? -1 : 1) : v);

const PRESETS: { y: number; label: string }[] = [
  { y: 1066, label: "1066" },
  { y: 1215, label: "1215" },
  { y: 1900, label: "1900" },
  { y: 2000, label: "2000" },
  { y: -44, label: "44 BC" },
  { y: -1, label: "1 BC" },
  { y: 1, label: "AD 1" },
];

const TL_W = 360;
const tx = (y: number) => 10 + ((y - MIN_Y) / (MAX_Y - MIN_Y)) * (TL_W - 20);
const BANDS: { from: number; to: number; name: string[]; cls: string }[] = [
  { from: MIN_Y, to: 476, name: ["Ancient"], cls: "fill-accent-soft" },
  { from: 476, to: 1500, name: ["Medieval"], cls: "fill-brand-soft" },
  { from: 1500, to: 1750, name: ["Early", "modern"], cls: "fill-warn-soft" },
  { from: 1750, to: MAX_Y, name: ["Mod-", "ern"], cls: "fill-good-soft" },
];

function CenturyCalculator() {
  const [year, setYear] = useState(1066);
  const [other, setOther] = useState(1215);
  const [quiz, setQuiz] = useState<{ y: number; guess: number; checked: boolean } | null>(null);

  const c = centuryOf(year);
  const n = Math.abs(year);
  const hundreds = Math.floor(n / 100);
  const endsIn00 = n % 100 === 0;
  const period = periodOf(year);
  const gap = gapBetween(year, other);
  const crosses = Math.min(year, other) < 0 && Math.max(year, other) > 0;
  const decade = n < 10 ? "first decade" : year > 0 ? `the ${Math.floor(year / 10) * 10}s` : `the ${Math.floor(n / 10) * 10}s BC`;

  const newQuiz = () => {
    let y = 0;
    for (let i = 0; i < 50 && (y === 0 || Math.abs(y) % 100 === 0); i++) {
      y = Math.random() < 0.2 ? -Math.floor(1 + Math.random() * 799) : Math.floor(101 + Math.random() * 1925);
    }
    setQuiz({ y, guess: 10, checked: false });
  };

  const caption = endsIn00 ? (
    <>
      <strong>{fmtYear(year)}</strong> is a trap! The shortcut (hundreds + 1) would give the {ordinal(hundreds + 1)} century, but because centuries start at
      year 1 (there was no year 0), the {ordinal(c)} century runs {year < 0 ? `${c * 100}–${(c - 1) * 100 + 1} BC` : `${(c - 1) * 100 + 1}–${c * 100}`}. So{" "}
      {fmtYear(year)} is strictly the <strong>last</strong> year of the {centuryLabel(year)}
      {year > 0 ? ` — even though many people celebrate “the ${n}s” as the start of something new.` : "."}
    </>
  ) : (
    <>
      <strong>{fmtYear(year)}</strong> is in the <strong>{centuryLabel(year)}</strong>: take the hundreds ({hundreds}) and add one. The {ordinal(c)} century
      {year < 0 ? ` BC runs from ${c * 100} BC down to ${(c - 1) * 100 + 1} BC — BC years count down towards AD 1.` : ` runs from ${(c - 1) * 100 + 1} to ${c * 100}.`}{" "}
      It belongs to the <strong>{period.name.toLowerCase()}</strong> period — {period.note}.
    </>
  );

  return (
    <WidgetFrame
      title="Century & period calculator"
      tryThis={[
        "Set the year to 1066. Why is it the **11th** century, not the 10th?",
        "Tap **1900** and **2000**. Which century is each one strictly in? Read the caption carefully.",
        "Use the gap tool: how many years passed between **44 BC** and **AD 43**? Why isn't it 87?",
        "Press **Test me** three times in a row and get all three right.",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <Slider label="Year" value={year} min={MIN_Y} max={MAX_Y} onChange={(v) => setYear((p) => fixZero(v, p))} format={fmtYear} />
        <div className="flex flex-wrap items-center gap-3">
          <Stepper label="± 1 year" value={year} min={MIN_Y} max={MAX_Y} onChange={(v) => setYear((p) => fixZero(v, p))} format={fmtYear} />
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Preset years">
          {PRESETS.map((p) => (
            <button key={p.label} type="button" className={`btn btn-sm ${year === p.y ? "btn-primary" : "btn-secondary"}`} onClick={() => setYear(p.y)}>
              {p.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Century" value={centuryLabel(year)} />
          <Readout label="Era" value={year < 0 ? "BC (BCE)" : "AD (CE)"} tone="ink" />
          <Readout label="Decade" value={decade} tone="ink" />
          <Readout label="Period" value={period.name} tone="good" />
        </div>

        <svg viewBox={`0 0 ${TL_W} 80`} className="h-auto w-full" role="img" aria-label={`Timeline from 800 BC to AD 2030 with ${fmtYear(year)} marked in the ${period.name.toLowerCase()} period and ${fmtYear(other)} as the comparison year`}>
          {BANDS.map((b) => (
            <g key={b.name.join("")}>
              <rect x={tx(b.from)} y={20} width={tx(b.to) - tx(b.from)} height={26} className={`${b.cls} stroke-line`} strokeWidth={1} />
              {b.name.map((line, i) => (
                <text key={line} x={(tx(b.from) + tx(b.to)) / 2} y={b.name.length === 1 ? 37 : 31 + i * 10} fontSize={b.name.length === 1 ? 10 : 8.5} textAnchor="middle" className="fill-ink-2">{line}</text>
              ))}
            </g>
          ))}
          <line x1={tx(0)} x2={tx(0)} y1={16} y2={50} className="stroke-ink" strokeWidth={1.5} strokeDasharray="2 2" />
          <text x={tx(0)} y={12} fontSize={8.5} textAnchor="middle" className="fill-ink-2">1 BC | AD 1</text>
          {[-500, 500, 1000, 1500, 2000].map((y) => (
            <text key={y} x={tx(y)} y={60} fontSize={8.5} textAnchor="middle" className="fill-ink-2">{fmtYear(y)}</text>
          ))}
          <line x1={tx(other)} x2={tx(other)} y1={18} y2={48} className="stroke-ink-2" strokeWidth={2} />
          <line x1={tx(year)} x2={tx(year)} y1={14} y2={52} className="stroke-brand" strokeWidth={3} />
          <circle cx={tx(year)} cy={14} r={4} className="fill-brand" />
          <text x={Math.min(TL_W - 30, Math.max(30, tx(year)))} y={75} fontSize={10} fontWeight={700} textAnchor="middle" className="fill-brand">{fmtYear(year)}</text>
        </svg>

        <div className="rounded-xl border border-line p-3">
          <div className="mb-2 text-sm font-bold text-ink">Gap tool: compare with a second year</div>
          <Slider label="Second year" value={other} min={MIN_Y} max={MAX_Y} onChange={(v) => setOther((p) => fixZero(v, p))} format={fmtYear} />
          <div className="mt-2 flex flex-wrap gap-2">
            {[-44, 43, 1066, 1215, 1789, 1945].map((y) => (
              <button key={y} type="button" className={`btn btn-sm ${other === y ? "btn-primary" : "btn-secondary"}`} onClick={() => setOther(y)}>
                {fmtYear(y)}
              </button>
            ))}
          </div>
          <p className="mt-2 text-sm text-ink">
            From {fmtYear(Math.min(year, other))} to {fmtYear(Math.max(year, other))}: <strong className="text-brand">{gap} years</strong>
            {crosses ? ` — that's ${Math.abs(Math.min(year, other))} + ${Math.max(year, other)} − 1, because 1 BC is followed directly by AD 1 (no year 0).` : "."}
          </p>
        </div>

        <div className="rounded-xl bg-brand-soft p-3">
          {quiz === null ? (
            <button type="button" className="btn btn-primary" onClick={newQuiz}>Test me</button>
          ) : (
            <div className="space-y-2">
              <div className="text-sm font-bold text-ink">Which century is {fmtYear(quiz.y)} in?</div>
              <Stepper label="Your answer" value={quiz.guess} min={1} max={25} onChange={(v) => setQuiz({ ...quiz, guess: v, checked: false })} format={(v) => `${ordinal(v)}${quiz.y < 0 ? " BC" : ""}`} />
              <div className="flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary btn-sm" onClick={() => setQuiz({ ...quiz, checked: true })}>Check</button>
                <button type="button" className="btn btn-secondary btn-sm" onClick={newQuiz}>New year</button>
              </div>
              {quiz.checked ? (
                quiz.guess === centuryOf(quiz.y) ? (
                  <p className="text-sm font-bold text-good">Correct — {fmtYear(quiz.y)} is in the {centuryLabel(quiz.y)}.</p>
                ) : (
                  <p className="text-sm font-bold text-bad">
                    Not quite: {fmtYear(quiz.y)} is in the {centuryLabel(quiz.y)}.{" "}
                    {quiz.guess === Math.floor(Math.abs(quiz.y) / 100) ? "You used the hundreds digits — remember to add one." : "Take the hundreds and add one."}
                  </p>
                )
              ) : null}
            </div>
          )}
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Source detective: NOP inspector
// ---------------------------------------------------------------------------

type Nop = "Nature" | "Origin" | "Purpose";
type Level = "High" | "Some" | "Low";

interface Fact {
  nop: Nop;
  text: string;
  /** Effect on how far we can trust the CONTENT: −2 … +2. */
  effect: number;
  why: string;
}

interface Enquiry {
  q: string;
  useful: Level;
  model: string;
}

interface Source {
  id: string;
  short: string;
  title: string;
  content: string;
  facts: Fact[];
  enquiries: Enquiry[];
}

const SOURCES: Source[] = [
  {
    id: "tapestry",
    short: "Bayeux Tapestry",
    title: "The Bayeux Tapestry: Harold's oath",
    content:
      "An embroidered scene shows Harold Godwinson with his hands on two boxes of holy relics, swearing an oath to Duke William. The Latin caption reads: “Where Harold made an oath to Duke William.” Later scenes show Harold crowned king — and William's fleet sailing for England.",
    facts: [
      { nop: "Nature", text: "An embroidery about 70 metres long, telling the story in pictures with short Latin captions.", effect: 0, why: "Pictures show events clearly but can't explain what people meant or promised." },
      { nop: "Origin", text: "Made in the 1070s, only a few years after 1066.", effect: 1, why: "Plenty of people who were at Hastings were still alive: wildly invented details would have been spotted." },
      { nop: "Origin", text: "Probably ordered by Bishop Odo — William's half-brother, who fought at Hastings.", effect: -2, why: "Odo had every reason to show William as the rightful king and Harold as a cheat." },
      { nop: "Origin", text: "Probably stitched by English embroiderers, perhaps at Canterbury.", effect: 0, why: "English makers worked to a Norman plan — though some historians spot small hints of sympathy for Harold." },
      { nop: "Purpose", text: "Made to tell the Norman version: Harold broke a holy oath, so William's conquest was just.", effect: -1, why: "It is one-sided about WHY things happened and who was in the right." },
    ],
    enquiries: [
      { q: "How did the Normans justify the Conquest?", useful: "High", model: "Very useful. This is the Normans' own justification, made for one of William's closest allies. Its bias is the evidence: the oath scene sits at the heart of the story because the Normans wanted everyone to see Harold as an oath-breaker." },
      { q: "Did Harold really promise the crown to William?", useful: "Low", model: "Not much use on its own. Odo wanted Harold to look like a cheat, and the scene never tells us what the oath actually said. English sources tell a different story: the monk Eadmer, writing decades later, said Harold went to Normandy to free family hostages. You would need to cross-reference." },
      { q: "What did weapons and armour look like in 1066?", useful: "High", model: "Very useful. Mail shirts, kite-shaped shields, helmets, spears and horses were drawn by people who had seen them, and there was no reason to invent them. The bias is about motives, not equipment — and archaeology backs up many details." },
    ],
  },
  {
    id: "paris",
    short: "Matthew Paris on John",
    title: "A monk's chronicle on King John",
    content:
      "A medieval chronicle describes King John as cruel, greedy and impossible to trust, and claims that even Hell was made fouler by John's presence when he died.",
    facts: [
      { nop: "Nature", text: "A chronicle: a year-by-year history written by a monk.", effect: 0, why: "Chronicles record lots of real events — but also rumours, gossip and moral lessons." },
      { nop: "Origin", text: "Written by Matthew Paris, a monk at St Albans Abbey.", effect: -1, why: "John quarrelled bitterly with the Church: England was under an interdict from 1208 and John was excommunicated in 1209. Monks had reasons to dislike him." },
      { nop: "Origin", text: "Written in the 1240s–50s, decades after John died in 1216.", effect: -1, why: "Paris was not an eyewitness. He relied partly on an earlier chronicle by Roger of Wendover, and on stories." },
      { nop: "Origin", text: "Paris was well connected: he knew King Henry III (John's son) and many leading people.", effect: 1, why: "He could talk to people who knew the court, so some of his information is good." },
      { nop: "Purpose", text: "Monastic chronicles often set out to teach moral lessons — showing how wicked rulers were punished.", effect: -1, why: "A good moral story mattered more than balance." },
    ],
    enquiries: [
      { q: "What kind of king was John?", useful: "Low", model: "Of limited use on its own. It was written decades later by a monk with reasons to hate John. Government records, which survive in large numbers from John's reign, show a king who worked hard at running the country — historians today use those to test chroniclers' claims." },
      { q: "What did monks think of John after his death?", useful: "High", model: "Very useful. It shows exactly how a leading monk saw John a generation after his death — the bias is what you are studying." },
      { q: "How did the reputation of ‘Bad King John’ develop?", useful: "High", model: "Very useful. Paris's vivid, hostile account was copied and read for centuries, so it helps explain where John's bad reputation came from." },
    ],
  },
  {
    id: "pankhurst",
    short: "Pankhurst's speech",
    title: "Emmeline Pankhurst's speech, 1913",
    content:
      "“I am here as a soldier who has temporarily left the field of battle…” The speaker explains why suffragettes smash windows and set fires: for decades, men in power ignored women's peaceful arguments for the vote, so women had to fight.",
    facts: [
      { nop: "Nature", text: "A public speech to a large audience.", effect: -1, why: "Speeches are made to persuade, so expect strong language and only one side." },
      { nop: "Origin", text: "Given by Emmeline Pankhurst, who founded the suffragettes' WSPU in 1903 and led it.", effect: 0, why: "Nobody knew the suffragettes' aims better — but she was hardly neutral about them." },
      { nop: "Origin", text: "Spoken in Hartford, Connecticut, USA, on 13 November 1913.", effect: 1, why: "It comes from the time, in the middle of the militant campaign, not from hazy memory years later." },
      { nop: "Purpose", text: "To win American sympathy — and money — for the suffragette campaign.", effect: -1, why: "She needed to make the suffragettes sound heroic and reasonable." },
    ],
    enquiries: [
      { q: "Why did the suffragettes use violent methods?", useful: "High", model: "Very useful. This is their leader's own explanation of their motives. It is one-sided, but the question asks why THEY did it, and she tells us." },
      { q: "Did most British women support militant tactics?", useful: "Low", model: "Not useful. She speaks for one organisation, to a foreign audience. Many campaigners — like the much larger suffragist movement led by Millicent Fawcett — opposed violence." },
      { q: "What did suffragettes actually do in 1913?", useful: "Some", model: "Partly useful. She describes real tactics, but presents them in the best possible light. Cross-check with newspapers and police records." },
    ],
  },
  {
    id: "poster",
    short: "Nazi poster, 1932",
    title: "A Nazi election poster, 1932",
    content:
      "A poster shows a crowd of thin, worn-out German men and women staring out at the viewer. The words read: “Unsere letzte Hoffnung: Hitler” — “Our last hope: Hitler”.",
    facts: [
      { nop: "Nature", text: "An election poster, designed to be taken in at a glance in the street.", effect: -1, why: "Posters use simple images and slogans to persuade, not to inform." },
      { nop: "Origin", text: "Made by the Nazi Party's poster artist Hans Schweitzer (“Mjölnir”) for the 1932 presidential election.", effect: -2, why: "Made by the Nazis to promote Hitler — completely one-sided." },
      { nop: "Origin", text: "Made in 1932, when about 6 million Germans were unemployed.", effect: 1, why: "Corroborated: the poverty and despair it shows were real." },
      { nop: "Purpose", text: "To win votes by presenting Hitler as the only answer to Germany's crisis.", effect: -1, why: "It exaggerates the despair and offers one simple solution." },
    ],
    enquiries: [
      { q: "How did the Nazis try to win votes in 1932?", useful: "High", model: "Very useful — even though it is totally unreliable about Hitler! It shows Nazi methods exactly: playing on despair from the Depression and presenting Hitler as a saviour." },
      { q: "Did most Germans see Hitler as their last hope?", useful: "Low", model: "Not useful. Propaganda shows what the Nazis claimed, not what people believed. In fact Hitler lost the 1932 presidential election to Hindenburg, winning about 37% in the second round." },
      { q: "What problems did Germany face in 1932?", useful: "Some", model: "Partly useful. The worn-out faces reflect real poverty and mass unemployment, which other evidence confirms — but the poster exaggerates to frighten voters." },
    ],
  },
];

const LEVELS: Level[] = ["High", "Some", "Low"];

function trustLabel(score: number): { label: string; tone: "good" | "ink" | "bad" } {
  if (score >= 60) return { label: "Fairly trustworthy", tone: "good" };
  if (score >= 35) return { label: "Handle with care", tone: "ink" };
  return { label: "Very one-sided", tone: "bad" };
}

function SourceDetective() {
  const [srcId, setSrcId] = useState(SOURCES[0].id);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [enqIdx, setEnqIdx] = useState(0);
  const [judgement, setJudgement] = useState<Level | null>(null);
  const [showModel, setShowModel] = useState(false);

  const src = SOURCES.find((s) => s.id === srcId) ?? SOURCES[0];
  const enquiry = src.enquiries[Math.min(enqIdx, src.enquiries.length - 1)];
  const key = (i: number) => `${src.id}:${i}`;
  const shown = src.facts.filter((_, i) => revealed[key(i)]);
  const score = Math.max(5, Math.min(95, 50 + 12 * shown.reduce((s, f) => s + f.effect, 0)));
  const trust = trustLabel(score);

  const pickSource = (id: string) => {
    setSrcId(id);
    setEnqIdx(0);
    setJudgement(null);
    setShowModel(false);
  };
  const pickEnquiry = (i: number) => {
    setEnqIdx(i);
    setJudgement(null);
    setShowModel(false);
  };

  const caption =
    shown.length === 0 ? (
      <>Start with the content, then reveal the provenance cards one at a time. Watch how each fact about <strong>who, when and why</strong> changes how far you can trust what the source says.</>
    ) : showModel ? (
      <>
        <strong>Reliability</strong> asks “can I trust it?”; <strong>usefulness</strong> asks “does it help with THIS question?”. Here trust is “{trust.label.toLowerCase()}” but usefulness for “{enquiry.q}” is <strong>{enquiry.useful.toLowerCase()}</strong>.
        {enquiry.useful === "High" && score < 50 ? " A biased source can be extremely useful — when the bias is exactly what you are investigating." : ""}
        {enquiry.useful === "Low" ? " Even an honest source can be useless if it can't answer your question." : ""}
      </>
    ) : (
      <>
        You have revealed {shown.length} of {src.facts.length} provenance cards. Now decide how <strong>useful</strong> the source is for the enquiry — remember, “useful FOR what?” — then compare with a historian.
      </>
    );

  return (
    <WidgetFrame
      title="Source detective: NOP inspector"
      tryThis={[
        "Reveal every card for the **Nazi poster**. Is it reliable? Now choose “How did the Nazis try to win votes?” — is it useful?",
        "Find an enquiry where an **untrustworthy** source is **very useful**.",
        "Which single provenance card lowers your trust in the **Bayeux Tapestry** the most — and why?",
        "For Matthew Paris, which card makes him MORE trustworthy? Does it outweigh the others?",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <Segmented label="Choose a source" value={srcId} onChange={pickSource} options={SOURCES.map((s) => ({ value: s.id, label: s.short }))} />

        <div className="rounded-xl border border-line bg-surface-2 p-3">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Content — what it says or shows</div>
          <div className="mt-1 font-bold text-ink">{src.title}</div>
          <p className="mt-1 text-sm leading-relaxed text-ink">{src.content}</p>
        </div>

        <div>
          <div className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-2">Provenance cards — tap to reveal</div>
          <div className="grid gap-2 sm:grid-cols-2">
            {src.facts.map((f, i) => {
              const on = !!revealed[key(i)];
              return (
                <button
                  key={key(i)}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setRevealed((r) => ({ ...r, [key(i)]: !on }))}
                  className={`min-h-[44px] rounded-xl border p-3 text-left text-sm transition ${on ? "border-brand bg-surface" : "border-line bg-surface-2 hover:border-brand"}`}
                >
                  <span className="chip mr-2">{f.nop}</span>
                  {on ? (
                    <>
                      <span className="text-ink">{f.text}</span>
                      <span className={`mt-1 block font-bold ${f.effect > 0 ? "text-good" : f.effect < 0 ? "text-bad" : "text-ink-2"}`}>
                        {f.effect > 0 ? "▲ more trustworthy" : f.effect < 0 ? `▼ less trustworthy${f.effect <= -2 ? " (a lot)" : ""}` : "● no big change"}
                      </span>
                      <span className="mt-0.5 block text-ink-2">{f.why}</span>
                    </>
                  ) : (
                    <span className="text-ink-2">Hidden — tap to reveal {f.nop === "Origin" ? "an" : "a"} {f.nop.toLowerCase()} detail</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-ink-2">Trust in the content (reliability)</span>
            <span className={`font-extrabold ${shown.length === 0 ? "text-ink-2" : trust.tone === "good" ? "text-good" : trust.tone === "bad" ? "text-bad" : "text-ink"}`}>
              {shown.length === 0 ? "Unknown — check the provenance" : trust.label}
            </span>
          </div>
          <svg viewBox="0 0 300 16" className="h-auto w-full" role="img" aria-label={shown.length === 0 ? "Trust meter: unknown" : `Trust meter at ${score} out of 100: ${trust.label}`}>
            <rect x={0} y={3} width={300} height={10} rx={5} className="fill-surface-2 stroke-line" />
            {shown.length > 0 ? <rect x={0} y={3} width={3 * score} height={10} rx={5} className={trust.tone === "good" ? "fill-good" : trust.tone === "bad" ? "fill-bad" : "fill-accent"} /> : null}
          </svg>
        </div>

        <div className="rounded-xl border border-line p-3">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Enquiry — useful FOR what?</div>
          <div className="mt-2 flex flex-col gap-2">
            {src.enquiries.map((e, i) => (
              <button key={e.q} type="button" onClick={() => pickEnquiry(i)} aria-pressed={i === enqIdx} className={`btn btn-sm justify-start text-left ${i === enqIdx ? "btn-primary" : "btn-secondary"}`}>
                {e.q}
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-ink-2">Your judgement — usefulness:</span>
            <Segmented label="Your usefulness judgement" value={judgement ?? ("" as Level)} onChange={(v) => { setJudgement(v); setShowModel(false); }} options={LEVELS.map((l) => ({ value: l, label: l }))} />
          </div>
          <button type="button" className="btn btn-primary btn-sm mt-3" disabled={!judgement} onClick={() => setShowModel(true)}>
            Compare with a historian
          </button>
          {showModel && judgement ? (
            <div className={`mt-3 rounded-xl p-3 text-sm ${judgement === enquiry.useful ? "bg-good-soft" : "bg-bad-soft"}`}>
              <div className="font-bold text-ink">
                {judgement === enquiry.useful ? "You agree with the model judgement." : `The model judgement is “${enquiry.useful}”, not “${judgement}”.`}
              </div>
              <p className="mt-1 leading-relaxed text-ink">{enquiry.model}</p>
            </div>
          ) : null}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  { id: "century-calculator", title: "Century & period calculator", blurb: "Slide through 2,800 years and watch centuries, BC/AD, decades and periods change — including the traps.", Component: CenturyCalculator },
  { id: "source-detective", title: "Source detective", blurb: "Reveal a source's provenance card by card, then judge how useful it is for different questions.", Component: SourceDetective },
];
