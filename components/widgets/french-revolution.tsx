"use client";
// Interactive explorables for "The French Revolution".
// Figures and statuses follow lib/topics/french-revolution/guide.ts; approximate
// figures are labelled as approximate in the captions.
import { useMemo, useState } from "react";
import { WidgetFrame, Segmented, Readout, type WidgetDef } from "./kit";

// ===========================================================================
// 1. Estates explorer: numbers versus privilege
// ===========================================================================
type EstateId = 1 | 2 | 3;
type Lens = "people" | "land" | "byOrder" | "byHead";
type Applies = "yes" | "some" | "no";

const ESTATE_INFO: Record<EstateId, { name: string; who: string; dots: number; popLabel: string }> = {
  1: { name: "First Estate", who: "clergy", dots: 1, popLabel: "under 1%" },
  2: { name: "Second Estate", who: "nobles", dots: 4, popLabel: "about 2%" },
  3: { name: "Third Estate", who: "everyone else", dots: 195, popLabel: "about 97%" },
};

const ESTATE_FILL: Record<EstateId, string> = { 1: "fill-brand", 2: "fill-accent", 3: "fill-good" };
const ESTATE_TEXT: Record<EstateId, string> = { 1: "text-brand", 2: "text-warn", 3: "text-good" };

const LENSES: Record<Lens, { label: string; values: Record<EstateId, number>; labels: Record<EstateId, string>; note: string }> = {
  people: {
    label: "Population",
    values: { 1: 0.5, 2: 2, 3: 97.5 },
    labels: { 1: "under 1%", 2: "about 2%", 3: "about 97%" },
    note: "Share of France's roughly 28 million people (approximate — there was no full census).",
  },
  land: {
    label: "Land owned",
    values: { 1: 10, 2: 25, 3: 65 },
    labels: { 1: "about 10%", 2: "about 25%", 3: "the rest (~65%)" },
    note: "Rough estimates: the Church owned about a tenth of the land, nobles perhaps a quarter. The rest belonged mainly to peasants and the bourgeoisie (plus the Crown).",
  },
  byOrder: {
    label: "Votes: by order",
    values: { 1: 33.3, 2: 33.3, 3: 33.3 },
    labels: { 1: "1 vote", 2: "1 vote", 3: "1 vote" },
    note: "Voting by order at the Estates-General (May 1789): one vote per estate, so clergy and nobles could outvote the Third Estate 2–1.",
  },
  byHead: {
    label: "Votes: by head",
    values: { 1: 25, 2: 25, 3: 50 },
    labels: { 1: "about 300 deputies", 2: "about 300 deputies", 3: "about 600 deputies" },
    note: "Voting by head: one deputy, one vote. The Third Estate had about 600 deputies — as many as the other two estates combined (deputy numbers approximate).",
  },
};

interface Burden { id: string; label: string; applies: Record<EstateId, Applies>; note: string }
const BURDENS: Burden[] = [
  { id: "taille", label: "Paid the taille (main direct tax)", applies: { 1: "no", 2: "no", 3: "yes" }, note: "The clergy gave a voluntary “free gift” instead; almost all nobles were exempt. The Third Estate paid." },
  { id: "dues", label: "Owed feudal dues to a lord", applies: { 1: "no", 2: "no", 3: "some" }, note: "Peasants — most of the Third Estate — paid lords to use the mill, oven or wine-press. Many townspeople did not." },
  { id: "corvee", label: "Did unpaid road work (corvée)", applies: { 1: "no", 2: "no", 3: "some" }, note: "The corvée fell on peasants. It was turned into a money tax in 1787." },
  { id: "tithe", label: "Received the tithe", applies: { 1: "yes", 2: "no", 3: "no" }, note: "The tithe — in theory a tenth of the harvest — went to the Church." },
  { id: "jobs", label: "Top army and government jobs by birth", applies: { 1: "no", 2: "yes", 3: "no" }, note: "Nobles held the top posts by birth (bishops, too, were almost all from noble families). Wealthy bourgeois were usually blocked." },
];

function EstatesExplorer() {
  const [lens, setLens] = useState<Lens>("people");
  const [burdenId, setBurdenId] = useState<string>("taille");
  const burden = BURDENS.find((b) => b.id === burdenId) ?? BURDENS[0];
  const L = LENSES[lens];

  // 200 dots, each about half a per cent of the population.
  const dots = useMemo(() => {
    const out: { estate: EstateId; i: number }[] = [];
    ([1, 2, 3] as EstateId[]).forEach((e) => {
      for (let i = 0; i < ESTATE_INFO[e].dots; i++) out.push({ estate: e, i: out.length });
    });
    return out;
  }, []);

  const highlighted = dots.filter((d) => burden.applies[d.estate] !== "no").length;
  const third = burden.applies[3];
  const W = 400;
  const barX = 120;
  const barMax = W - barX - 12;

  const lensCaption: Record<Lens, string> = {
    people: "Almost everyone in France — about 97% — was in the Third Estate. The two privileged estates together were roughly 1 person in 40.",
    land: "The clergy and nobles, under 3% of the people, owned roughly a third of the land between them. Compare this bar with the population bar.",
    byOrder: "Voting by order gives each estate one vote — so the 3% could outvote the 97%. That is why the Third Estate refused it in June 1789.",
    byHead: "Voting by head gives the Third Estate half the votes — and with a few sympathetic priests and nobles, a majority. That is why the privileged resisted it.",
  };

  return (
    <WidgetFrame
      title="Estates explorer: numbers versus privilege"
      tryThis={[
        "Switch from **Population** to **Land owned**. Which estates owned far more than their share of people?",
        "Compare **Votes: by order** with **Votes: by head**. Why would the Third Estate refuse to vote by order?",
        "Tap each burden. Which ones fell *only* on the Third Estate — and which estate received money rather than paying it?",
      ]}
      caption={
        <>
          <p><strong>{L.label}:</strong> {lensCaption[lens]}</p>
          <p className="mt-2"><strong>{burden.label}:</strong> {burden.note} {third === "yes" ? `That is about ${highlighted} of these 200 people.` : third === "some" ? "Most of the Third Estate's dots are shaded lightly because it applied to many, but not all, of them." : `Only ${highlighted} of these 200 people.`}</p>
          <p className="mt-2 text-xs text-ink-2">{L.note} Each dot = about half a per cent of the population. Figures from the topic guide; all approximate.</p>
        </>
      }
    >
      <div className="space-y-4">
        <Segmented<Lens>
          label="Choose what to compare"
          value={lens}
          onChange={setLens}
          options={(Object.keys(LENSES) as Lens[]).map((k) => ({ value: k, label: LENSES[k].label }))}
        />
        <svg
          viewBox={`0 0 ${W} 130`}
          className="mx-auto block w-full h-auto max-w-xl"
          role="img"
          aria-label={`${L.label}: First Estate ${L.labels[1]}, Second Estate ${L.labels[2]}, Third Estate ${L.labels[3]}.`}
        >
          {([1, 2, 3] as EstateId[]).map((e, row) => {
            const y = 10 + row * 40;
            const w = Math.max(3, (L.values[e] / 100) * barMax);
            return (
              <g key={e}>
                <text x={0} y={y + 13} fontSize={12} fontWeight={700} className="fill-ink">{ESTATE_INFO[e].name}</text>
                <text x={0} y={y + 27} fontSize={11} className="fill-ink-2">{ESTATE_INFO[e].who}</text>
                <rect x={barX} y={y + 2} width={barMax} height={24} rx={6} className="fill-surface-2" />
                <rect x={barX} y={y + 2} width={w} height={24} rx={6} className={ESTATE_FILL[e]} style={{ transition: "width 300ms" }} />
                <text
                  x={w > 150 ? barX + w - 6 : barX + w + 6}
                  y={y + 18}
                  fontSize={12}
                  fontWeight={700}
                  textAnchor={w > 150 ? "end" : "start"}
                  className={w > 150 ? "fill-surface" : "fill-ink"}
                >
                  {L.labels[e]}
                </text>
              </g>
            );
          })}
        </svg>

        <div>
          <p className="text-sm font-semibold text-ink-2">Who was affected? Tap a burden or privilege:</p>
          <div className="mt-2 flex flex-wrap gap-2" role="radiogroup" aria-label="Burdens and privileges">
            {BURDENS.map((b) => (
              <button
                key={b.id}
                type="button"
                role="radio"
                aria-checked={b.id === burdenId}
                onClick={() => setBurdenId(b.id)}
                className={`btn btn-sm ${b.id === burdenId ? "btn-primary" : "btn-secondary"}`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        <svg
          viewBox="0 0 400 112"
          className="mx-auto block w-full h-auto max-w-xl"
          role="img"
          aria-label={`France as 200 people: 1 clergy, 4 nobles, 195 Third Estate. Highlighted for "${burden.label}": First Estate ${burden.applies[1]}, Second Estate ${burden.applies[2]}, Third Estate ${burden.applies[3]}.`}
        >
          {dots.map((d) => {
            const col = d.i % 25;
            const row = Math.floor(d.i / 25);
            const a = burden.applies[d.estate];
            const opacity = a === "yes" ? 1 : a === "some" ? 0.45 : 0.12;
            return (
              <circle
                key={d.i}
                cx={8 + col * 16}
                cy={8 + row * 13}
                r={d.estate === 3 ? 5 : 6}
                className={`${ESTATE_FILL[d.estate]} stroke-ink`}
                strokeWidth={d.estate === 3 ? 0 : 1.5}
                opacity={opacity}
              />
            );
          })}
        </svg>
        <div className="flex flex-wrap gap-3 text-xs font-bold">
          {([1, 2, 3] as EstateId[]).map((e) => (
            <span key={e} className={ESTATE_TEXT[e]}>
              ● {ESTATE_INFO[e].name} ({ESTATE_INFO[e].dots} {ESTATE_INFO[e].dots === 1 ? "dot" : "dots"}): {burden.applies[e] === "yes" ? "yes" : burden.applies[e] === "some" ? "many" : "no"}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="Privileged estates (people)" value="under 3%" tone="ink" />
          <Readout label="Their share of land" value="about 35%" tone="bad" />
          <Readout label="Dots shaded now" value={`${highlighted} / 200`} tone="brand" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// 2. Did rights grow? Change and continuity 1788 → 1804
// ===========================================================================
type Year = "1788" | "1789" | "1791" | "1793" | "1804";
type Status = "yes" | "partly" | "no";
const YEARS: Year[] = ["1788", "1789", "1791", "1793", "1804"];

const YEAR_INFO: Record<Year, { title: string; summary: string }> = {
  "1788": { title: "Ancien Régime", summary: "An absolute king ruling by divine right. No national elections — the Estates-General had not met since 1614. Rank and tax were decided by birth." },
  "1789": { title: "After the Declaration (August 1789)", summary: "Privileges abolished on 4 August; the Declaration of the Rights of Man (26 August) promised equality before the law. The Assembly sitting was the one elected in spring 1789 for the Estates-General." },
  "1791": { title: "Constitutional monarchy", summary: "The 1791 Constitution: an elected Legislative Assembly, but only active citizens (about 4.3 million men over 25 paying enough tax) could vote." },
  "1793": { title: "Republic and Terror", summary: "The Convention had been elected in 1792 by almost all men aged 21+. But under the Law of Suspects (September 1793) anyone could be arrested on suspicion." },
  "1804": { title: "Napoleon's Empire", summary: "Napoleon crowned himself Emperor. Men voted only in yes/no plebiscites. The Napoleonic Code kept equality before the law for men." },
};

interface Group { id: string; name: string; vote: Record<Year, [Status, string]>; rights: Record<Year, [Status, string]> }
const GROUPS: Group[] = [
  {
    id: "bourgeois",
    name: "A rich bourgeois man",
    vote: {
      "1788": ["no", "No national elections at all."],
      "1789": ["partly", "In spring 1789 men on the tax rolls helped choose Estates-General deputies — indirectly, through local assemblies."],
      "1791": ["yes", "An active citizen: over 25 and paying enough tax."],
      "1793": ["yes", "Universal male suffrage (men 21+) for the 1792 Convention elections."],
      "1804": ["partly", "Only yes/no plebiscites — no real choice of government."],
    },
    rights: {
      "1788": ["no", "Paid the taille; often blocked from top jobs by birth."],
      "1789": ["yes", "Equality before the law; jobs open to all on merit."],
      "1791": ["yes", "Equal before the law, with a free press and a written constitution."],
      "1793": ["partly", "Equal in law — but anyone could be arrested under the Law of Suspects."],
      "1804": ["partly", "Equal before the law under the Code — but censorship and police spies."],
    },
  },
  {
    id: "poor",
    name: "A poor working man",
    vote: {
      "1788": ["no", "No national elections at all."],
      "1789": ["partly", "Could take part in the spring 1789 elections only if on the tax rolls, and only indirectly."],
      "1791": ["no", "A passive citizen: paid too little tax to vote."],
      "1793": ["yes", "Universal male suffrage (men 21+) for the 1792 Convention elections — though turnout was low."],
      "1804": ["partly", "Could vote in plebiscites — yes or no only."],
    },
    rights: {
      "1788": ["no", "Paid the taille, the tithe and (if a peasant) feudal dues."],
      "1789": ["yes", "Equal before the law; privileges and the tithe abolished (some dues had to be bought out until 1793)."],
      "1791": ["partly", "Equal before the law, but shut out of politics as a passive citizen."],
      "1793": ["partly", "Rights promised, but the Terror's courts mostly struck ordinary people."],
      "1804": ["partly", "Equal before the law; peasants kept land gained in the Revolution — but no free press."],
    },
  },
  {
    id: "noble",
    name: "A noble",
    vote: {
      "1788": ["no", "No national elections at all."],
      "1789": ["yes", "Nobles chose the Second Estate's deputies in spring 1789."],
      "1791": ["yes", "Titles abolished in 1790 — but a former noble paying enough tax was an active citizen."],
      "1793": ["partly", "Men 21+ could vote in 1792 — but many nobles had fled abroad, and former nobles were often treated as suspects."],
      "1804": ["partly", "Only yes/no plebiscites."],
    },
    rights: {
      "1788": ["partly", "Privileged, not equal: almost all exempt from the taille, top jobs by birth — yet even nobles could be imprisoned without trial by a lettre de cachet."],
      "1789": ["yes", "Lost privileges on 4 August — now equal with everyone else, not above them."],
      "1791": ["yes", "Equal before the law (no special privileges)."],
      "1793": ["no", "Former nobles were often treated as suspects during the Terror."],
      "1804": ["partly", "Equal before the law; Napoleon later created a new nobility."],
    },
  },
  {
    id: "women",
    name: "A woman (any class)",
    vote: {
      "1788": ["no", "No national elections at all."],
      "1789": ["no", "Women were not given a vote by the Revolution's assemblies."],
      "1791": ["no", "All women were passive citizens. Olympe de Gouges protested in her Declaration of the Rights of Woman."],
      "1793": ["no", "Universal male suffrage only — no women. Women's political clubs were banned in autumn 1793."],
      "1804": ["no", "No vote — French women only won it in 1944."],
    },
    rights: {
      "1788": ["no", "Legally unequal to men."],
      "1789": ["partly", "The Declaration spoke of the “rights of man”; women were left out of political rights."],
      "1791": ["partly", "Protected by the law but excluded from politics."],
      "1793": ["no", "Olympe de Gouges was guillotined in November 1793; women's clubs banned."],
      "1804": ["no", "The Napoleonic Code said wives must obey their husbands."],
    },
  },
  {
    id: "enslaved",
    name: "An enslaved person in Saint-Domingue",
    vote: {
      "1788": ["no", "Enslaved — no rights at all."],
      "1789": ["no", "The Declaration did not free enslaved people."],
      "1791": ["no", "Still enslaved in law. The great revolt began in August 1791."],
      "1793": ["no", "French law still allowed slavery; the revolt continued. Abolition followed on 4 February 1794."],
      "1804": ["no", "No vote in France's plebiscites. Napoleon restored slavery in 1802 — but Saint-Domingue defeated his army and became independent Haiti on 1 January 1804."],
    },
    rights: {
      "1788": ["no", "Enslaved and treated as property."],
      "1789": ["no", "Slave-owners used the Declaration's protection of property to defend slavery."],
      "1791": ["no", "Still enslaved — so they rose up and fought for freedom themselves."],
      "1793": ["no", "Still enslaved under French law (abolition came in February 1794, under pressure from the revolt)."],
      "1804": ["partly", "Slavery restored in French colonies (1802) — but in Haiti, people had won their freedom by fighting."],
    },
  },
  {
    id: "protestant",
    name: "A Protestant man (paying enough tax)",
    vote: {
      "1788": ["no", "No national elections at all."],
      "1789": ["partly", "Protestants took part in the spring 1789 elections — a Protestant pastor was even elected a deputy."],
      "1791": ["yes", "A full citizen since 1789; with enough tax, an active citizen."],
      "1793": ["yes", "Universal male suffrage (men 21+) in 1792."],
      "1804": ["partly", "Only yes/no plebiscites."],
    },
    rights: {
      "1788": ["partly", "Granted civil status in 1787, but still barred from many public posts."],
      "1789": ["yes", "Became full citizens in 1789."],
      "1791": ["yes", "Full citizens; religious freedom."],
      "1793": ["partly", "Equal in law — but the Terror threatened everyone's rights."],
      "1804": ["yes", "Napoleon kept religious toleration (agreement with the Pope, 1801)."],
    },
  },
];

const STATUS_CLS: Record<Status, string> = { yes: "bg-good-soft text-good", partly: "bg-warn-soft text-warn", no: "bg-bad-soft text-bad" };
const STATUS_LABEL: Record<Status, string> = { yes: "Yes", partly: "Partly", no: "No" };
const STATUS_Y: Record<Status, number> = { yes: 0, partly: 1, no: 2 };

function RightsExplorer() {
  const [yi, setYi] = useState(0);
  const [groupId, setGroupId] = useState("bourgeois");
  const year = YEARS[yi];
  const group = GROUPS.find((g) => g.id === groupId) ?? GROUPS[0];

  const votersNow = GROUPS.filter((g) => g.vote[year][0] === "yes").length;
  const rightsNow = GROUPS.filter((g) => g.rights[year][0] === "yes").length;

  // Tracker chart for the selected group.
  const W = 400, H = 150, left = 64, right = 16, top = 16, rowH = 32;
  const x = (i: number) => left + (i * (W - left - right)) / (YEARS.length - 1);
  const y = (s: Status, offset: number) => top + STATUS_Y[s] * rowH + offset;
  const votePts = YEARS.map((yr, i) => `${x(i)},${y(group.vote[yr][0], -4)}`).join(" ");
  const rightPts = YEARS.map((yr, i) => `${x(i)},${y(group.rights[yr][0], 4)}`).join(" ");

  const first = group.rights["1788"][0];
  const last = group.rights["1804"][0];
  const trend =
    STATUS_Y[last] < STATUS_Y[first]
      ? "By 1804 this group had more legal equality than in 1788 — a real change."
      : STATUS_Y[last] > STATUS_Y[first]
        ? "By 1804 this group had lost status compared with 1788."
        : "By 1804 this group's position looked much as it did in 1788 — strong continuity.";

  return (
    <WidgetFrame
      title="Did rights grow? Change and continuity, 1788–1804"
      tryThis={[
        "Step from **1788** to **1793** with **A poor working man** selected. When did he first get a vote — and were his rights safer then?",
        "Pick **A woman**. Does anything change on the vote line between 1788 and 1804?",
        "Compare **1793** and **1804**: in which year could more groups vote? In which were rights better protected? Is more voting the same as more rights?",
        "Pick **An enslaved person in Saint-Domingue**. Who brought about the change — the Assembly, or enslaved people themselves?",
      ]}
      caption={
        <>
          <p><strong>{year} — {YEAR_INFO[year].title}.</strong> {YEAR_INFO[year].summary}</p>
          <p className="mt-2"><strong>{group.name}:</strong> vote — {group.vote[year][1]} Rights — {group.rights[year][1]}</p>
          <p className="mt-2">{trend}</p>
          <p className="mt-2 text-xs text-ink-2">“Yes / Partly / No” is a simplified judgement to help you compare — argue with it! Facts from the topic guide; the vote line asks “could this person vote for a national assembly?”.</p>
        </>
      }
    >
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <button type="button" className="kbd" onClick={() => setYi((v) => Math.max(0, v - 1))} disabled={yi === 0} aria-label="Previous year">◀</button>
          <Segmented<Year> label="Year" value={year} onChange={(v) => setYi(YEARS.indexOf(v))} options={YEARS.map((yr) => ({ value: yr, label: yr }))} />
          <button type="button" className="kbd" onClick={() => setYi((v) => Math.min(YEARS.length - 1, v + 1))} disabled={yi === YEARS.length - 1} aria-label="Next year">▶</button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Readout label={`Groups who could vote (${year})`} value={`${votersNow} of ${GROUPS.length}`} tone={votersNow >= 3 ? "good" : "bad"} />
          <Readout label={`Groups with full legal rights (${year})`} value={`${rightsNow} of ${GROUPS.length}`} tone={rightsNow >= 3 ? "good" : "bad"} />
        </div>

        <div className="overflow-hidden rounded-xl border border-line">
          <div className="grid grid-cols-[1fr_auto_auto] gap-x-2 bg-surface-2 px-3 py-2 text-xs font-bold uppercase tracking-wide text-ink-2">
            <span>Who? (tap to track)</span>
            <span className="w-16 text-center">Vote</span>
            <span className="w-16 text-center">Rights</span>
          </div>
          {GROUPS.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setGroupId(g.id)}
              aria-pressed={g.id === groupId}
              className={`grid min-h-[44px] w-full grid-cols-[1fr_auto_auto] items-center gap-x-2 border-t border-line px-3 py-2 text-left text-sm ${g.id === groupId ? "bg-brand-soft font-bold text-ink" : "bg-surface text-ink"}`}
            >
              <span>{g.name}</span>
              <span className={`w-16 rounded-lg py-1 text-center text-xs font-extrabold ${STATUS_CLS[g.vote[year][0]]}`}>{STATUS_LABEL[g.vote[year][0]]}</span>
              <span className={`w-16 rounded-lg py-1 text-center text-xs font-extrabold ${STATUS_CLS[g.rights[year][0]]}`}>{STATUS_LABEL[g.rights[year][0]]}</span>
            </button>
          ))}
        </div>

        <div>
          <p className="text-sm font-semibold text-ink-2">Tracker: {group.name}, 1788–1804</p>
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="mx-auto block w-full h-auto max-w-xl"
            role="img"
            aria-label={`${group.name}: vote ${YEARS.map((yr) => `${yr} ${group.vote[yr][0]}`).join(", ")}; rights ${YEARS.map((yr) => `${yr} ${group.rights[yr][0]}`).join(", ")}.`}
          >
            {(["yes", "partly", "no"] as Status[]).map((s) => (
              <g key={s}>
                <line x1={left} x2={W - right} y1={y(s, 0)} y2={y(s, 0)} className="stroke-line" strokeWidth={1} />
                <text x={left - 8} y={y(s, 4)} fontSize={11} textAnchor="end" className="fill-ink-2">{STATUS_LABEL[s]}</text>
              </g>
            ))}
            <rect x={x(yi) - 14} y={4} width={28} height={rowH * 2 + 24} rx={6} className="fill-brand-soft" />
            {YEARS.map((yr, i) => (
              <text key={yr} x={x(i)} y={H - 8} fontSize={11} textAnchor="middle" fontWeight={i === yi ? 800 : 400} className={i === yi ? "fill-ink" : "fill-ink-2"}>{yr}</text>
            ))}
            <polyline points={votePts} fill="none" className="stroke-brand" strokeWidth={2.5} />
            <polyline points={rightPts} fill="none" className="stroke-accent" strokeWidth={2.5} strokeDasharray="6 4" />
            {YEARS.map((yr, i) => (
              <g key={`p${yr}`}>
                <circle cx={x(i)} cy={y(group.vote[yr][0], -4)} r={4.5} className="fill-brand" />
                <rect x={x(i) - 4} y={y(group.rights[yr][0], 4) - 4} width={8} height={8} className="fill-accent" />
              </g>
            ))}
          </svg>
          <div className="flex flex-wrap gap-4 text-xs font-bold">
            <span className="text-brand">● Vote (solid line)</span>
            <span className="text-warn">■ Equal rights protected (dashed line)</span>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  { id: "estates-explorer", title: "Estates explorer", blurb: "Compare each estate's share of people, land and votes — and who carried the burdens.", Component: EstatesExplorer },
  { id: "did-rights-grow", title: "Did rights grow?", blurb: "Step through 1788 → 1804 and track who could vote and whose rights were protected.", Component: RightsExplorer },
];
