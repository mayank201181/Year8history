"use client";
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// 1. "Keep your crown" kingship simulator
// ---------------------------------------------------------------------------

type Claim = "inherit" | "disputed" | "chosen" | "conquest";
type Church = "ally" | "neutral" | "quarrel" | "supreme";

interface Reign {
  claim: Claim;
  tax: number;
  castles: number;
  church: Church;
  rewards: number;
  war: boolean;
}

const CLAIMS: { value: Claim; label: string; note: string }[] = [
  { value: "inherit", label: "Undisputed heir", note: "Eldest son of the last king, no rival — the strongest claim (Henry VIII, 1509)." },
  { value: "disputed", label: "Disputed heir", note: "Royal blood, but a rival has a claim too (John versus his nephew Arthur, 1199)." },
  { value: "chosen", label: "Chosen by council", note: "Picked by the great nobles and churchmen, like the Witan choosing Harold in 1066." },
  { value: "conquest", label: "Conquest", note: "Won in battle. Power, yes — but the conquered do not see you as rightful (William, 1066)." },
];

const CHURCH: { value: Church; label: string; note: string }[] = [
  { value: "ally", label: "Loyal ally", note: "The Pope and bishops bless your rule." },
  { value: "neutral", label: "Distant", note: "No quarrel, no special favour." },
  { value: "quarrel", label: "Quarrel with the Pope", note: "Risk of interdict and excommunication — your rule looks ungodly." },
  { value: "supreme", label: "Take over the Church", note: "Make yourself head of the Church and seize its wealth — but anger traditional believers." },
];

const BASE_LEGIT: Record<Claim, number> = { inherit: 75, disputed: 50, chosen: 60, conquest: 30 };
const LAND_INCOME: Record<Claim, number> = { inherit: 40, disputed: 40, chosen: 30, conquest: 60 };
const CHURCH_LEGIT: Record<Church, number> = { ally: 15, neutral: 0, quarrel: -20, supreme: -5 };
const CHURCH_RISK: Record<Church, number> = { ally: 0, neutral: 5, quarrel: 20, supreme: 22 };

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

/** A deliberately simple model: every number is a 'points' score, not a real amount of money or people. */
function simulate(r: Reign) {
  const income = LAND_INCOME[r.claim] + 10 * r.tax + (r.church === "supreme" ? 40 : 0);
  const spending = 15 + 7 * r.castles + 6 * r.rewards + (r.war ? 45 : 0);
  const treasury = income - spending;
  const legit = clamp(BASE_LEGIT[r.claim] + CHURCH_LEGIT[r.church] - (r.tax >= 8 ? 10 : r.tax >= 6 ? 4 : 0) + (r.rewards >= 6 ? 5 : 0), 0, 100);
  const parts = [
    { key: "nobles", value: Math.max(0, 30 - 4 * r.rewards) + Math.max(0, r.tax - 6) * 5 },
    { key: "people", value: 3 * r.tax + (r.claim === "conquest" ? 30 : 0) },
    { key: "church", value: CHURCH_RISK[r.church] },
    { key: "weak", value: Math.round((100 - legit) * 0.25) + (treasury < 0 ? 12 : 0) },
    { key: "war", value: r.war ? 10 : 0 },
    { key: "castles", value: -4 * r.castles },
  ];
  const risk = clamp(parts.reduce((s, p) => s + p.value, 0), 2, 95);
  return { income, spending, treasury, legit, risk, parts };
}

function why(key: string, r: Reign, sim: ReturnType<typeof simulate>): string {
  switch (key) {
    case "nobles":
      return r.tax >= 7 && r.rewards <= 4
        ? "Your barons are squeezed by taxes and get little in return — the recipe for 1215."
        : r.rewards <= 4
          ? "Your nobles feel unrewarded. Loyalty had to be paid for in land and favour."
          : "Heavy taxes are hitting your nobles' pockets.";
    case "people":
      return r.claim === "conquest" ? "A conquered people resent foreign rule — and your taxes." : "Ordinary people resent high taxes.";
    case "church":
      return r.church === "supreme"
        ? "Taking over the Church angers people loyal to the old religion and the monasteries (think 1536)."
        : r.church === "quarrel"
          ? "A quarrel with the Pope makes your rule look ungodly and gives rebels a cause."
          : "Without the Church's active support, you lack God's stamp of approval.";
    case "weak":
      return sim.treasury < 0 ? "Your treasury is empty — a king who cannot pay his soldiers looks beatable." : "Your claim looks weak, so rivals think the throne is up for grabs.";
    case "war":
      return "War abroad drains money and asks nobles to fight and pay — and defeat ruins your reputation.";
    default:
      return "";
  }
}

const riskLabel = (v: number) => (v < 25 ? "Low" : v < 45 ? "Medium" : v < 65 ? "High" : "Very high");

const PRESETS: { id: string; label: string; reign: Reign; happened: string }[] = [
  {
    id: "william",
    label: "William, 1069",
    reign: { claim: "conquest", tax: 7, castles: 6, church: "ally", rewards: 8, war: false },
    happened:
      "In 1069 northern rebels, helped by a Danish fleet, wiped out the Norman garrison at York. William crushed them with the Harrying of the North (1069–70), built many more castles and gave English land to Norman followers. By 1071 resistance was broken and he died still king in 1087. Force made up for a weak claim.",
  },
  {
    id: "john",
    label: "John, 1214",
    reign: { claim: "disputed", tax: 9, castles: 5, church: "ally", rewards: 2, war: true },
    happened:
      "John had made peace with the Pope in 1213, but years of scutage, fines and failure abroad had cost him his barons' loyalty. After his allies lost at Bouvines (July 1214), the barons rebelled, took London and forced Magna Carta on him in June 1215. Civil war followed, and he died in October 1216 with a French prince holding London.",
  },
  {
    id: "henry1525",
    label: "Henry VIII, 1525",
    reign: { claim: "inherit", tax: 9, castles: 3, church: "ally", rewards: 6, war: true },
    happened:
      "To pay for war with France, Wolsey demanded the 'Amicable Grant' — a non-parliamentary tax. Taxpayers refused and thousands rose in Suffolk. Henry backed down, cancelled the tax and let Wolsey take the blame. Even an undisputed king could not tax without consent.",
  },
  {
    id: "henry1536",
    label: "Henry VIII, 1536",
    reign: { claim: "inherit", tax: 5, castles: 3, church: "supreme", rewards: 6, war: false },
    happened:
      "Henry had broken with Rome and begun closing the monasteries. In October 1536 tens of thousands rose in the Pilgrimage of Grace. But most nobles stayed loyal, Henry negotiated, promised a pardon — then, after a new rising in 1537, executed Robert Aske and around 200 others. His throne was never in real danger.",
  },
];

function Meter({ label, value, max, tone, text }: { label: string; value: number; max: number; tone: "good" | "bad" | "brand"; text: string }) {
  const fill = tone === "good" ? "bg-good" : tone === "bad" ? "bg-bad" : "bg-brand";
  return (
    <div className="space-y-1" role="img" aria-label={`${label}: ${text}`}>
      <div className="flex justify-between text-sm">
        <span className="font-semibold text-ink-2">{label}</span>
        <span className="font-extrabold tabular-nums text-ink">{text}</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-surface-2">
        <div className={`h-full rounded-full ${fill}`} style={{ width: `${clamp((value / max) * 100, 0, 100)}%` }} />
      </div>
    </div>
  );
}

function KeepYourCrown() {
  const [r, setR] = useState<Reign>(PRESETS[0].reign);
  const [preset, setPreset] = useState<string | null>("william");
  const [changed, setChanged] = useState(false);
  const sim = simulate(r);
  const set = <K extends keyof Reign>(k: K, v: Reign[K]) => {
    setR((old) => ({ ...old, [k]: v }));
    setChanged(true);
  };
  const load = (id: string) => {
    const p = PRESETS.find((x) => x.id === id);
    if (!p) return;
    setR(p.reign);
    setPreset(id);
    setChanged(false);
  };
  const drivers = sim.parts.filter((p) => p.value > 0).sort((a, b) => b.value - a.value).slice(0, 2);
  const castlesHelp = -(sim.parts.find((p) => p.key === "castles")?.value ?? 0);
  const p = PRESETS.find((x) => x.id === preset);

  return (
    <WidgetFrame
      title="Keep your crown"
      tryThis={[
        "Load John, 1214. Can you get rebellion risk below 25 without running out of money? What did you have to give up?",
        "Load William, 1069. Add castles: what happens to the risk — and to the treasury?",
        "Load Henry VIII, 1536, then switch the Church to 'Loyal ally'. Why might Henry still have chosen to break with Rome?",
        "Which claim gives the most legitimacy? Can a king with a strong claim still lose control?",
      ]}
      caption={
        <>
          <p>
            <strong>Rebellion risk: {riskLabel(sim.risk)}.</strong>{" "}
            {drivers.length ? drivers.map((d) => why(d.key, r, sim)).join(" ") : "Nothing much is driving rebellion right now."}{" "}
            {castlesHelp > 0 ? `Castles and soldiers cut the risk by ${castlesHelp} points — but they cost ${7 * r.castles} points of treasury a year.` : "With no castles, nothing deters rebels by force."}
          </p>
          <p className="mt-2 text-ink-2">
            This is a simplified model to help you think about trade-offs (points, not real money). Real reigns also depended on luck, personality and events abroad.
          </p>
        </>
      }
    >
      <div className="space-y-4">
        <div className="space-y-1">
          <div className="text-sm font-semibold text-ink-2">Real case studies</div>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((x) => (
              <button
                key={x.id}
                type="button"
                onClick={() => load(x.id)}
                aria-pressed={preset === x.id && !changed}
                className={`min-h-[40px] rounded-xl border px-3 text-sm font-bold ${preset === x.id && !changed ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink"}`}
              >
                {x.label}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-sm font-semibold text-ink-2">How did you get the crown?</div>
          <Segmented label="Claim to the throne" value={r.claim} onChange={(v) => set("claim", v)} options={CLAIMS.map((c) => ({ value: c.value, label: c.label }))} />
          <p className="text-xs text-ink-2">{CLAIMS.find((c) => c.value === r.claim)?.note}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Slider label="Taxes" value={r.tax} min={0} max={10} onChange={(v) => set("tax", v)} format={(v) => (v <= 3 ? `${v} (light)` : v <= 6 ? `${v} (normal)` : `${v} (heavy)`)} />
          <Slider label="Castles and soldiers" value={r.castles} min={0} max={10} onChange={(v) => set("castles", v)} />
          <Slider label="Rewards to nobles (land, offices)" value={r.rewards} min={0} max={10} onChange={(v) => set("rewards", v)} />
          <div className="space-y-1">
            <div className="text-sm font-semibold text-ink-2">War abroad?</div>
            <button
              type="button"
              aria-pressed={r.war}
              onClick={() => set("war", !r.war)}
              className={`min-h-[40px] rounded-xl border px-3 text-sm font-bold ${r.war ? "border-bad bg-bad-soft text-bad" : "border-line bg-surface text-ink"}`}
            >
              {r.war ? "Yes — fighting in France" : "No — at peace"}
            </button>
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-sm font-semibold text-ink-2">Relations with the Church</div>
          <Segmented label="Relations with the Church" value={r.church} onChange={(v) => set("church", v)} options={CHURCH.map((c) => ({ value: c.value, label: c.label }))} />
          <p className="text-xs text-ink-2">{CHURCH.find((c) => c.value === r.church)?.note}</p>
        </div>
        <div className="grid grid-cols-1 gap-3 rounded-xl border border-line p-3 sm:grid-cols-3">
          <Meter label="Legitimacy" value={sim.legit} max={100} tone={sim.legit >= 60 ? "good" : sim.legit >= 40 ? "brand" : "bad"} text={`${sim.legit}/100`} />
          <Meter label="Rebellion risk" value={sim.risk} max={100} tone={sim.risk < 25 ? "good" : sim.risk < 45 ? "brand" : "bad"} text={`${riskLabel(sim.risk)} (${sim.risk})`} />
          <Meter
            label="Treasury each year"
            value={Math.max(0, sim.treasury + 60)}
            max={160}
            tone={sim.treasury < 0 ? "bad" : "good"}
            text={sim.treasury < 0 ? `${sim.treasury} (debt)` : `+${sim.treasury}`}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Readout label="Income" value={sim.income} tone="ink" />
          <Readout label="Spending" value={sim.spending} tone="ink" />
        </div>
        {p ? (
          <div className="rounded-xl bg-surface-2 p-3 text-sm text-ink">
            <strong>{changed ? `You have changed history. What really happened (${p.label}):` : `What really happened (${p.label}):`}</strong> {p.happened}
          </div>
        ) : null}
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// 2. Compare the three kings
// ---------------------------------------------------------------------------

type King = "william" | "john" | "henry";
type Theme = "force" | "inheritance" | "church" | "nobles" | "money" | "rebellion" | "law" | "image";

const KINGS: { id: King; name: string }[] = [
  { id: "william", name: "William I (1066–87)" },
  { id: "john", name: "John (1199–1216)" },
  { id: "henry", name: "Henry VIII (1509–47)" },
];

const THEMES: { id: Theme; label: string; insight: string }[] = [
  { id: "force", label: "Force and armies", insight: "Only William won the crown by force — but all three needed armed force to survive: castles and the Harrying (William), mercenaries and castles in the civil war (John), and the crushing of the Pilgrimage of Grace (Henry)." },
  { id: "inheritance", label: "Inheritance", insight: "John and Henry VIII both inherited — but John's claim was disputed by his nephew Arthur, while Henry's was unchallenged. William's claim rested on a promise and an oath, then on victory." },
  { id: "church", label: "The Church", insight: "All three needed the Church, in three different ways: William worked with it (papal banner, Lanfranc), John fought it and then surrendered (interdict, 1213), Henry took it over (Supreme Head, 1534)." },
  { id: "nobles", label: "Barons and nobles", insight: "Every king depended on his nobles. William created a new Norman nobility rewarded with land; John's barons turned against him and forced Magna Carta; Henry kept most nobles loyal." },
  { id: "money", label: "Money and taxes", insight: "Money was a constant pressure: Domesday showed William what he could tax; John's scutage and fines were a major cause of Magna Carta; Henry's Amicable Grant failed (1525) but the monasteries made him rich." },
  { id: "rebellion", label: "Rebellion", insight: "All three faced a major rebellion — the North (1069), the barons (1215), the Pilgrimage of Grace (1536). Only John's ended with the king losing control." },
  { id: "law", label: "Law and Parliament", insight: "Law was a tool AND a limit: William used Domesday and oaths; Magna Carta (1215) bound John; Henry needed Parliament's Acts to make his break with Rome lawful." },
  { id: "image", label: "Image and propaganda", insight: "Image mattered — and so does who wrote the sources: the Bayeux Tapestry and Norman writers praised William, Holbein made Henry look magnificent, while John's reputation was shaped by hostile monk chroniclers." },
];

const CRITERIA: { id: string; label: string; cells: Record<King, { text: string; tags: Theme[] }> }[] = [
  {
    id: "gain",
    label: "How he gained the throne",
    cells: {
      william: { text: "Claimed Edward the Confessor had promised him the crown and Harold had sworn an oath to back him. Won it by conquest at Hastings (14 October 1066); crowned on Christmas Day.", tags: ["force", "church"] },
      john: { text: "Inherited when his brother Richard I died in 1199 — but his nephew Arthur of Brittany had a rival claim. His mother Eleanor and leading barons backed John.", tags: ["inheritance", "nobles"] },
      henry: { text: "Inherited peacefully at 17 in April 1509. No rival: his father Henry VII had won the throne at Bosworth (1485) and left a full treasury.", tags: ["inheritance"] },
    },
  },
  {
    id: "threats",
    label: "Main threats",
    cells: {
      william: { text: "English risings (1067–71) helped by Danish fleets, Edgar Ætheling's claim, the Revolt of the Earls (1075).", tags: ["rebellion", "force"] },
      john: { text: "Philip II of France (took Normandy, 1204), the Pope (interdict, 1208), rebel barons (1215) and Prince Louis of France (1216).", tags: ["church", "nobles", "rebellion"] },
      henry: { text: "Years with no male heir; the Pope and Catholic powers after the break with Rome; the Pilgrimage of Grace (1536).", tags: ["church", "rebellion"] },
    },
  },
  {
    id: "tools",
    label: "Tools of control",
    cells: {
      william: { text: "Castles and a loyal Norman army, land for his followers, the Harrying of the North, Norman bishops, the Domesday survey (1086).", tags: ["force", "nobles", "church", "money"] },
      john: { text: "Heavy taxes, scutage and fines; hostages from barons; royal courts; castles and paid soldiers.", tags: ["money", "law", "force"] },
      henry: { text: "Acts of Parliament (Supremacy and Treasons Acts, 1534), Thomas Cromwell's government, executions, monastery wealth, portraits and ceremony.", tags: ["law", "church", "money", "image", "force"] },
    },
  },
  {
    id: "limits",
    label: "Limits on his power",
    cells: {
      william: { text: "Had to keep his Norman barons rewarded with land, and spent long periods defending Normandy.", tags: ["nobles"] },
      john: { text: "The barons forced Magna Carta on him (1215); the Pope's interdict; civil war.", tags: ["nobles", "church", "law", "rebellion"] },
      henry: { text: "Needed Parliament to make the break with Rome lawful; had to abandon the Amicable Grant (1525) when people refused to pay.", tags: ["law", "money"] },
    },
  },
  {
    id: "church",
    label: "Relations with the Church",
    cells: {
      william: { text: "Ally: Norman writers say he fought under a papal banner; he made Lanfranc Archbishop of Canterbury (1070).", tags: ["church", "image"] },
      john: { text: "Enemy, then vassal: refused Stephen Langton, interdict (1208), excommunicated (1209); in 1213 he made England a fief of the Pope.", tags: ["church"] },
      henry: { text: "Took control: made himself Supreme Head of the Church (1534) and dissolved the monasteries (1536–40).", tags: ["church", "money"] },
    },
  },
  {
    id: "image",
    label: "Image and sources",
    cells: {
      william: { text: "The Bayeux Tapestry and Norman writers such as William of Poitiers told his side of 1066.", tags: ["image"] },
      john: { text: "Later monk chroniclers such as Roger of Wendover and Matthew Paris wrote hostile accounts — check their provenance!", tags: ["image", "church"] },
      henry: { text: "Holbein's portraits, coins, palaces and the Field of the Cloth of Gold (1520) showed a magnificent king.", tags: ["image"] },
    },
  },
  {
    id: "end",
    label: "How the reign ended",
    cells: {
      william: { text: "Died in 1087 still firmly in control; his son William II became king.", tags: [] },
      john: { text: "Died in October 1216 in the middle of a civil war, with a French prince holding London; his son Henry III was nine.", tags: ["rebellion", "nobles"] },
      henry: { text: "Died in 1547 still powerful; his nine-year-old son Edward VI succeeded him peacefully.", tags: ["inheritance"] },
    },
  },
];

const MODEL: Record<"start" | "end", { order: King[]; reason: string }> = {
  start: {
    order: ["henry", "john", "william"],
    reason:
      "At the START: Henry VIII had an undisputed inheritance, no rival and a full treasury. John had royal blood but a rival backed by the King of France. William controlled only part of England in 1066 and faced years of rebellion.",
  },
  end: {
    order: ["william", "henry", "john"],
    reason:
      "By the END: William's castles, land grants and Domesday left Norman rule firmly in place. Henry survived the Pilgrimage of Grace and passed the crown peacefully to his son. John died during a civil war with a French prince in London. (You could argue Henry first — he never faced a rival army — so long as you use evidence.)",
  },
};

function CompareKings() {
  const [shown, setShown] = useState<string[]>(["gain", "threats", "tools", "limits"]);
  const [theme, setTheme] = useState<Theme | null>(null);
  const [when, setWhen] = useState<"start" | "end">("start");
  const [rank, setRank] = useState<King[]>([]);

  const toggleCrit = (id: string) => setShown((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const rows = CRITERIA.filter((c) => shown.includes(c.id));
  const sharing = theme ? KINGS.filter((k) => rows.some((c) => c.cells[k.id].tags.includes(theme))).map((k) => k.name.split(" (")[0]) : [];
  const t = THEMES.find((x) => x.id === theme);
  const nameOf = (k: King) => KINGS.find((x) => x.id === k)?.name.split(" (")[0] ?? k;
  const model = MODEL[when];
  const matches = rank.length === 3 && rank.every((k, n) => model.order[n] === k);

  return (
    <WidgetFrame
      title="Compare the three kings"
      tryThis={[
        "Highlight 'The Church'. Is the Church a similarity or a difference between the three kings? (Careful — it can be both.)",
        "Highlight 'Rebellion'. All three faced one — so why did only John lose control?",
        "Rank the kings by how secure they were at the START of their reigns, then switch to the END. Why does the order change?",
      ]}
      caption={
        theme && t ? (
          <>
            <p>
              <strong>{t.label}:</strong> in the rows shown, this appears for {sharing.length === 3 ? "all three kings — a similarity" : sharing.length === 0 ? "none of the kings — try showing more rows" : `${sharing.join(" and ")} only — a difference`}.
            </p>
            <p className="mt-2">{t.insight}</p>
          </>
        ) : (
          <p>
            Pick a theme to light up where it appears. Comparing well means spotting <strong>similarities</strong> (what all three needed) and <strong>differences</strong> (how their circumstances and choices varied) — then judging which mattered most.
          </p>
        )
      }
    >
      <div className="space-y-4">
        <div className="space-y-1">
          <div className="text-sm font-semibold text-ink-2">Rows to compare</div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Criteria to show">
            {CRITERIA.map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={shown.includes(c.id)}
                onClick={() => toggleCrit(c.id)}
                className={`min-h-[40px] rounded-xl border px-3 text-sm font-bold ${shown.includes(c.id) ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink-2"}`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-sm font-semibold text-ink-2">Highlight a theme</div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Theme to highlight">
            {THEMES.map((x) => (
              <button
                key={x.id}
                type="button"
                aria-pressed={theme === x.id}
                onClick={() => setTheme(theme === x.id ? null : x.id)}
                className={`min-h-[40px] rounded-full border px-3 text-sm font-bold ${theme === x.id ? "border-accent bg-accent-soft text-ink" : "border-line bg-surface text-ink-2"}`}
              >
                {x.label}
              </button>
            ))}
          </div>
        </div>
        <div className="hidden grid-cols-3 gap-2 sm:grid">
          {KINGS.map((k) => (
            <div key={k.id} className="text-center text-sm font-extrabold text-ink">
              {k.name}
            </div>
          ))}
        </div>
        {rows.map((c) => (
          <div key={c.id} className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">{c.label}</div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {KINGS.map((k) => {
                const cell = c.cells[k.id];
                const hit = theme ? cell.tags.includes(theme) : false;
                return (
                  <div
                    key={k.id}
                    className={`rounded-xl border p-3 text-sm leading-snug transition ${hit ? "border-accent bg-accent-soft text-ink" : theme ? "border-line bg-surface text-ink-2 opacity-70" : "border-line bg-surface text-ink"}`}
                  >
                    <div className="mb-1 text-xs font-extrabold text-brand sm:hidden">{k.name}</div>
                    {cell.text}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div className="space-y-3 rounded-xl border border-line p-3">
          <div className="font-extrabold text-ink">Your judgement: who was the most secure king?</div>
          <Segmented
            label="Judge security at"
            value={when}
            onChange={(v) => {
              setWhen(v);
              setRank([]);
            }}
            options={[
              { value: "start", label: "At the start of the reign" },
              { value: "end", label: "By the end of the reign" },
            ]}
          />
          <p className="text-sm text-ink-2">Tap the kings from most secure to least secure.</p>
          <div className="flex flex-wrap gap-2">
            {KINGS.map((k) => {
              const pos = rank.indexOf(k.id);
              return (
                <button
                  key={k.id}
                  type="button"
                  disabled={pos >= 0}
                  onClick={() => setRank((r) => [...r, k.id])}
                  className={`min-h-[40px] rounded-xl border px-3 text-sm font-bold ${pos >= 0 ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink"}`}
                >
                  {pos >= 0 ? `${pos + 1}. ` : ""}
                  {k.name.split(" (")[0]}
                </button>
              );
            })}
            <button type="button" className="kbd min-h-[40px] px-3" onClick={() => setRank([])}>
              Reset
            </button>
          </div>
          {rank.length === 3 ? (
            <div className={`rounded-xl p-3 text-sm text-ink ${matches ? "bg-good-soft" : "bg-surface-2"}`} aria-live="polite">
              <p>
                <strong>{matches ? "Your order matches one strong view." : "Your order differs from one strong view — that can be fine if your evidence is good."}</strong> Model order: {model.order.map(nameOf).join(" → ")}.
              </p>
              <p className="mt-1">{model.reason}</p>
              <p className="mt-1 text-ink-2">In your essay, say which criterion you are using — 'secure at the start' and 'secure by the end' give different answers.</p>
            </div>
          ) : null}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "keep-your-crown",
    title: "Keep your crown",
    blurb: "Choose a claim, set taxes, castles, Church relations and rewards — and watch your rebellion risk. Then load the real kings.",
    Component: KeepYourCrown,
  },
  {
    id: "compare-three-kings",
    title: "Compare the three kings",
    blurb: "Light up themes across William, John and Henry VIII to find similarities and differences — then judge who was most secure.",
    Component: CompareKings,
  },
];
