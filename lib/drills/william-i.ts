// Skill drills for "William I and the Norman Conquest".
// Bank-based: each drill holds verified textbook facts (consistent with
// lib/topics/william-i/guide.ts) and builds a question from the seeded RNG.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";

type Tier = 1 | 2 | 3;

/** Pick from items at or below the tier, leaning towards the tier's own items for tiers 2–3. */
function pickTiered<T extends { t: Tier }>(rng: Rng, items: readonly T[], tier: Tier): T {
  const pool = items.filter((i) => i.t <= tier);
  const exact = pool.filter((i) => i.t === tier);
  return tier > 1 && exact.length > 0 && rng.bool(0.6) ? rng.pick(exact) : rng.pick(pool);
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const textAns = (accept: string[]): AnswerSpec => ({ type: "text", accept, display: accept[0] });
const trap = (accept: string[], feedback: string): Trap => ({ spec: { type: "text", accept, display: accept[0] }, feedback });

// ---------------------------------------------------------------------------
// Name / term banks (shared "who or what?" mechanics)
// ---------------------------------------------------------------------------

interface TermItem {
  t: Tier;
  /** Noun-phrase description (lower-case start). */
  d: string;
  a: string[];
  note: string;
  traps?: Trap[];
}

const TERM_TEMPLATES: ((d: string) => string)[] = [
  (d) => `Who or what is this? ${cap(d)}.`,
  (d) => `Name the person, place or term: ${d}.`,
  (d) => `Give the name for ${d}.`,
];

function termItem(rng: Rng, bank: readonly TermItem[], tier: Tier, hint: string): DrillItem {
  const it = pickTiered(rng, bank, tier);
  return {
    prompt: rng.pick(TERM_TEMPLATES)(it.d),
    answer: textAns(it.a),
    solution: [`**${it.a[0]}** — ${it.d}.`, it.note],
    hint,
    traps: it.traps,
  };
}

const ENGLAND_BANK: TermItem[] = [
  { t: 1, d: "the King of England from 1042 to 1066, famously religious, who died with no children", a: ["Edward the Confessor", "Edward", "King Edward", "Saint Edward", "St Edward"], note: "His death on 5 January 1066 left no obvious heir and started the succession crisis." },
  { t: 1, d: "the council of leading nobles and churchmen who advised the king and helped choose the next king", a: ["Witan", "Witenagemot", "Witangemot", "Witan council"], note: "Being the old king's son mattered, but the Witan's choice could decide who was crowned." },
  { t: 1, d: "the great nobles who ran huge regions of England called earldoms", a: ["earls", "earl"], note: "The Godwin family held the biggest earldoms; Harold was Earl of Wessex." },
  { t: 1, d: "the units, each run for the king by a sheriff, that England was divided into (we call them counties today)", a: ["shires", "shire"], note: "The shire system made Anglo-Saxon England one of the best-run kingdoms in Europe — and the Normans kept it." },
  { t: 1, d: "the king's official who ran each shire for him", a: ["sheriff", "sheriffs", "shire-reeve", "shire reeve", "reeve"], note: "'Sheriff' comes from 'shire-reeve'. Sheriffs collected taxes and kept order." },
  { t: 1, d: "the region of northern France, settled by Vikings, that Duke William ruled", a: ["Normandy", "Duchy of Normandy"], note: "By 1066 the Normans spoke French, were Christian and were famous for knights and castles." },
  { t: 1, d: "the London church built by Edward the Confessor, where both Harold and William were crowned", a: ["Westminster Abbey", "Westminster"], note: "Crowning William where Edward was buried helped present him as Edward's lawful heir." },
  { t: 2, d: "the most powerful noble family in England before 1066, led by Earl Godwin and his sons", a: ["Godwins", "Godwin", "the Godwins", "Godwin family", "Godwinsons", "House of Godwin"], note: "Harold, Tostig, Gyrth and Leofwine were all earls, and their sister Edith was queen." },
  { t: 2, d: "the smaller divisions of a shire, each with its own court", a: ["hundreds", "hundred"], note: "Shires and hundreds gave the king a system of local government that reached every village." },
  { t: 2, d: "the tax that Anglo-Saxon kings could collect across the whole of England", a: ["geld", "Danegeld", "heregeld"], note: "Being able to tax the whole kingdom was rare in the 11th century — and made England a rich prize." },
  { t: 2, d: "the Viking leader who founded Normandy in 911", a: ["Rollo", "Rolf", "Hrolf"], note: "Normandy began as Viking land granted by the French king; William was Rollo's descendant." },
  { t: 2, d: "Edward the Confessor's Norman mother, who was Duke William's great-aunt", a: ["Emma", "Emma of Normandy", "Queen Emma"], note: "Emma was the link between the English royal family and the dukes of Normandy." },
  { t: 2, d: "Harold Godwinson's sister, who was married to Edward the Confessor", a: ["Edith", "Queen Edith", "Edith of Wessex", "Edith Godwinson"], note: "The marriage tied the Godwin family to the throne — but produced no children." },
  { t: 2, d: "the Danish king who ruled England from 1016", a: ["Cnut", "Canute", "Knut", "Cnut the Great", "King Cnut", "Canute the Great"], note: "Danish kings ruled England from 1016 to 1042, so Scandinavian kings still felt they had a claim." },
  { t: 2, d: "Harold's brother, who was thrown out of Northumbria by a revolt in 1065", a: ["Tostig", "Tostig Godwinson", "Earl Tostig"], note: "Angry with Harold, Tostig went into exile and later joined Harald Hardrada's invasion." },
  { t: 2, d: "the earldom in southern England that Harold ruled before he became king", a: ["Wessex"], note: "Wessex was the richest earldom — the base of Harold's power." },
  { t: 3, d: "the northern earldom that Tostig was driven out of in 1065", a: ["Northumbria"], note: "The revolt replaced Tostig with Morcar, and Harold accepted it — turning his brother into an enemy." },
  { t: 3, d: "Edward the Confessor's father, King of England, who died in 1016", a: ["Æthelred", "Aethelred", "Ethelred", "Æthelred II", "Ethelred the Unready", "Aethelred the Unready", "Æthelred the Unready", "Ethelred II"], note: "Edward was the son of Æthelred II and Emma of Normandy, which is why he spent years in exile in Normandy." },
  { t: 3, d: "the trade that, along with good farmland, made Anglo-Saxon England wealthy", a: ["wool", "the wool trade", "wool trade"], note: "England's wealth made it worth fighting for in 1066." },
];

const TERMS_BANK: TermItem[] = [
  { t: 1, d: "the earth mound of a Norman castle, with a wooden keep on top", a: ["motte", "mott", "the motte"], note: "The motte gave defenders height to see and fight from.", traps: [trap(["bailey"], "The bailey is the fenced courtyard below — the mound is the motte.")] },
  { t: 1, d: "the fenced courtyard below the mound of a Norman castle, where soldiers, horses and stores were kept", a: ["bailey", "the bailey"], note: "Motte = mound; bailey = courtyard.", traps: [trap(["motte"], "The motte is the mound — the courtyard below is the bailey.")] },
  { t: 1, d: "the type of quick-to-build Norman castle made of an earth mound and a fenced courtyard", a: ["motte and bailey", "motte-and-bailey", "motte and bailey castle", "motte-and-bailey castle", "motte and bailey castles"], note: "They could go up in weeks, so a few hundred knights could control a whole region." },
  { t: 1, d: "William's destruction of villages, crops and animals across Yorkshire in 1069–70 after a northern rebellion", a: ["Harrying of the North", "the Harrying of the North", "Harrying", "the Harrying", "Harrowing of the North"], note: "Famine followed, and in 1086 Domesday still recorded many Yorkshire villages as 'waste'." },
  { t: 1, d: "an oath of loyalty sworn by a vassal to his lord in return for land", a: ["fealty", "oath of fealty", "an oath of fealty"], note: "Fealty tied land to loyalty: break the oath and you could lose the land.", traps: [trap(["homage"], "Close — homage is the kneeling ceremony; the oath of loyalty itself is fealty.")] },
  { t: 1, d: "the survey of land and resources carried out across England in 1086", a: ["Domesday Book", "Domesday", "Domesday survey", "Doomsday Book", "Doomsday", "Great Survey"], note: "Ordered at Christmas 1085, it recorded who held land, what it was worth and what it could pay in tax." },
  { t: 1, d: "the full-time professional soldiers of the king and earls, famous for their two-handed axes", a: ["housecarls", "housecarl", "huscarls", "huscarl"], note: "They formed the core of Harold's shield wall at Hastings.", traps: [trap(["fyrd"], "The fyrd were part-time soldiers — the professionals were the housecarls.")] },
  { t: 1, d: "the part-time soldiers — ordinary free men called up to fight when needed", a: ["fyrd", "the fyrd", "fyrdmen"], note: "Harold sent the southern fyrd home on 8 September when its supplies ran out.", traps: [trap(["housecarls"], "Housecarls were full-time professionals — part-timers were the fyrd.")] },
  { t: 1, d: "a tight line of soldiers with overlapping shields, used by Harold's army at Hastings", a: ["shield wall", "shieldwall", "shield-wall"], note: "It held for hours against Norman cavalry until men broke ranks." },
  { t: 1, d: "an embroidery about 70 m long telling the Norman version of the events of 1064–66", a: ["Bayeux Tapestry", "the Bayeux Tapestry", "Bayeux"], note: "Probably made in England for Bishop Odo in the 1070s — vivid, but a Norman source." },
  { t: 2, d: "the tactic of pretending to run away to lure the enemy out of position", a: ["feigned retreat", "feigned retreats", "fake retreat", "false retreat", "pretend retreat", "feigned flight"], note: "The Normans used it at Hastings to draw English soldiers off the ridge." },
  { t: 2, d: "the strong central tower of a castle — wooden at first, later rebuilt in stone", a: ["keep", "the keep", "donjon"], note: "The White Tower in London is a famous stone keep." },
  { t: 2, d: "the great stone keep William began in London, now part of the Tower of London", a: ["White Tower", "the White Tower", "Tower of London", "the Tower"], note: "Begun around 1078, it was built to dominate London and impress — and still does." },
  { t: 2, d: "the English rebel who held out at Ely in the Fens with Danish help in 1070–71", a: ["Hereward the Wake", "Hereward", "Hereward the Exile"], note: "He escaped when Ely fell, and later became a hero of English legend." },
  { t: 2, d: "a baron or senior churchman who held land directly from the king and supplied knights", a: ["tenant-in-chief", "tenants-in-chief", "tenant in chief", "tenants in chief"], note: "By 1086 only two of the major tenants-in-chief were English." },
  { t: 2, d: "a peasant tied to the manor, who worked the lord's land and could not leave without permission", a: ["villein", "villeins", "serf", "serfs", "villain"], note: "Villeins were the largest group in Domesday Book." },
  { t: 2, d: "the duty of a tenant-in-chief to provide a fixed number of armed knights when the king demanded", a: ["knight service", "knight's service", "knights service", "knight-service"], note: "It gave William an army without paying wages." },
  { t: 2, d: "an estate granted to a knight, with a village and peasants who worked its land", a: ["manor", "manors"], note: "The manor was the basic unit of land, and of Domesday's records." },
  { t: 3, d: "the ceremony in which a vassal knelt before his lord, put his hands in the lord's hands and became 'his man'", a: ["homage", "doing homage", "paying homage"], note: "Homage went together with the oath of fealty.", traps: [trap(["fealty"], "Close — fealty is the oath of loyalty; the kneeling ceremony is homage.")] },
  { t: 3, d: "the word Domesday Book used for many Yorkshire villages ruined by the Harrying of the North", a: ["waste", "wasta"], note: "More than 15 years after the Harrying, the damage was still visible in the records." },
  { t: 3, d: "the 1086 ceremony at which major landholders swore loyalty directly to William", a: ["Oath of Salisbury", "the Oath of Salisbury", "Salisbury Oath", "Salisbury"], note: "It meant loyalty ran straight to the king, not just to each man's own lord." },
  { t: 3, d: "the island in the Fens where Hereward the Wake held out against William", a: ["Ely", "Isle of Ely"], note: "Surrounded by marsh, Ely was hard to attack until William built a causeway." },
  { t: 3, d: "the two northern earls who lost at Fulford Gate and later rebelled against William", a: ["Edwin and Morcar", "Morcar and Edwin", "Edwin & Morcar"], note: "They submitted after Hastings but rebelled in 1068 — and lost their lands." },
  { t: 3, d: "the chronicler who, about 50 years later, claimed over 100,000 people died in the Harrying of the North", a: ["Orderic Vitalis", "Orderic", "Ordericus Vitalis"], note: "Most historians think his figure is exaggerated — but even Orderic, an admirer of William, condemned the Harrying." },
  { t: 3, d: "the place where English leaders submitted to William after Hastings", a: ["Berkhamsted", "Berkhamstead"], note: "William circled London rather than attacking it, and the English leaders came to him." },
];

interface ChurchItem extends TermItem {
  n?: number;
}

const DOMESDAY_BANK: ChurchItem[] = [
  { t: 1, d: "the great survey of England that William ordered at Christmas 1085", a: ["Domesday Book", "Domesday", "Domesday survey", "Doomsday Book", "Doomsday", "Great Survey"], note: "It was carried out in 1086 and recorded land, resources and values for over 13,000 places." },
  { t: 1, d: "the Italian-born scholar and abbot of Caen who became Archbishop of Canterbury in 1070", a: ["Lanfranc", "Archbishop Lanfranc", "Lanfranc of Bec"], note: "He reformed the English Church and kept it loyal to William." },
  { t: 1, d: "the language used for official documents, including Domesday Book", a: ["Latin"], note: "Latin was the language of the Church and of record-keeping all over Europe." },
  { t: 1, d: "the language of William's court and the new Norman nobility", a: ["French", "Norman French", "Anglo-Norman", "Anglo-Norman French"], note: "That is why so many English words for power and law (court, crown, justice) come from French." },
  { t: 1, d: "the language most ordinary people carried on speaking after 1066", a: ["English", "Old English", "Anglo-Saxon"], note: "A big continuity: village life and everyday speech stayed English." },
  { t: 1, d: "the great Norman cathedral in the north of England, begun in 1093", a: ["Durham Cathedral", "Durham"], note: "Huge Romanesque cathedrals showed Norman power and faith — they were built to impress." },
  { t: 2, d: "the tax that Domesday helped William to assess", a: ["geld", "Danegeld", "the geld"], note: "Knowing what every place was worth meant knowing what it could pay." },
  { t: 2, d: "the units of land used for tax assessment, recorded for each place in Domesday", a: ["hides", "hide"], note: "Each place was 'assessed at' a number of hides — a measure for tax, not exact area." },
  { t: 2, d: "the country that threatened to invade England in 1085, one reason William needed the survey", a: ["Denmark", "the Danes", "Danes", "Danish"], note: "William needed to know what resources he could call on to defend the kingdom." },
  { t: 2, d: "the English Archbishop of Canterbury whom William replaced with Lanfranc in 1070", a: ["Stigand", "Archbishop Stigand"], note: "Replacing English bishops with Normans put the Church in loyal hands." },
  { t: 2, d: "the style of huge Norman churches and cathedrals, with thick walls and round arches", a: ["Romanesque", "Norman", "Norman Romanesque"], note: "Canterbury was rebuilt from 1070 and Durham begun in 1093 in this style." },
  { t: 2, d: "the person in charge of the Norman Church in England from 1070", a: ["Lanfranc", "Archbishop Lanfranc", "Archbishop of Canterbury"], note: "Lanfranc held councils, set up Church courts and pushed for stricter standards." },
  { t: 3, d: "the town where William held court at Christmas 1085 and ordered the survey", a: ["Gloucester"], note: "The *Anglo-Saxon Chronicle* says William held long discussions with his council there about the land." },
  { t: 3, d: "the royal officials who toured England in groups (circuits) in 1086, asking the same questions everywhere", a: ["commissioners", "royal commissioners", "commissioner"], note: "Asking the same questions in every place made the records comparable." },
  { t: 3, d: "the local groups of men who checked the survey's answers in each area", a: ["juries", "jury", "local juries"], note: "Cross-checking with local people made the survey harder to cheat." },
  { t: 3, d: "the day in Christian belief that gave Domesday Book its nickname, because there was no appeal against its verdict", a: ["Judgement Day", "Day of Judgement", "Judgement", "Judgment", "Judgment Day", "Day of Judgment", "the Last Judgement", "Last Judgement", "Last Judgment"], note: "'Doom' meant judgement: like the Last Judgement, Domesday's verdict was final." },
  { t: 3, d: "the harsh Norman laws protecting royal hunting land such as the New Forest", a: ["forest laws", "forest law", "Forest Law"], note: "A change for ordinary people: whole areas were set aside for the king's hunting." },
  { t: 3, d: "the largest town in England, which Domesday Book left out", a: ["London"], note: "London, Winchester and much of the far north were not included in the survey." },
];

const DOMESDAY_NUMBERS: { t: Tier; q: string; n: number; sol: string }[] = [
  { t: 3, q: "How many years after the Battle of Hastings was the Domesday survey carried out?", n: 20, sol: "Hastings was in 1066 and the survey in 1086: 1086 − 1066 = 20 years." },
  { t: 3, q: "How many years after the Battle of Hastings did William die?", n: 21, sol: "Hastings was in 1066 and William died in 1087: 1087 − 1066 = 21 years." },
  { t: 3, q: "How many years after Lanfranc became Archbishop of Canterbury was Durham Cathedral begun?", n: 23, sol: "Lanfranc became archbishop in 1070 and Durham was begun in 1093: 1093 − 1070 = 23 years." },
  { t: 3, q: "How many years passed between the Harrying of the North beginning (1069) and Domesday Book still recording Yorkshire villages as 'waste'?", n: 17, sol: "1086 − 1069 = 17 years — the damage lasted a generation." },
];

// ---------------------------------------------------------------------------
// Dates
// ---------------------------------------------------------------------------

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ordSuffix(d: number): string {
  if (d % 100 >= 11 && d % 100 <= 13) return "th";
  return d % 10 === 1 ? "st" : d % 10 === 2 ? "nd" : d % 10 === 3 ? "rd" : "th";
}

/** Every reasonable way of typing a day and month (with or without 1066). */
function dateAccept(d: number, m: number): string[] {
  const M = MONTHS[m - 1];
  const ab = M.slice(0, 3);
  const s = `${d}${ordSuffix(d)}`;
  const base = [`${d} ${M}`, `${s} ${M}`, `${s} of ${M}`, `${M} ${d}`, `${M} ${s}`, `${d} ${ab}`, `${s} ${ab}`, `${ab} ${d}`];
  if (m === 9) base.push(`${d} Sept`, `${s} Sept`, `Sept ${d}`);
  const out = [...base, ...base.map((x) => `${x} 1066`), `${M} ${d}, 1066`, `${d}/${m}`, `${d}.${m}`, `${d}/${m}/1066`];
  if (d < 10 || m < 10) out.push(`${String(d).padStart(2, "0")}/${String(m).padStart(2, "0")}`, `${String(d).padStart(2, "0")}/${String(m).padStart(2, "0")}/1066`);
  return out;
}

const fmtDate = (d: number, m: number) => `${d} ${MONTHS[m - 1]}`;

interface DateEvent {
  key: string;
  t: Tier;
  q: string; // "did Edward the Confessor die"
  n: string; // "the death of Edward the Confessor"
  d: number;
  m: number;
  note: string;
}

const DATED_1066: DateEvent[] = [
  { key: "edward", t: 1, q: "did Edward the Confessor die", n: "the death of Edward the Confessor", d: 5, m: 1, note: "He died childless, which started the succession crisis." },
  { key: "stamford", t: 1, q: "was the Battle of Stamford Bridge fought", n: "the Battle of Stamford Bridge", d: 25, m: 9, note: "Harold defeated and killed Harald Hardrada and Tostig." },
  { key: "pevensey", t: 1, q: "did William land at Pevensey", n: "William's landing at Pevensey", d: 28, m: 9, note: "He crossed on the night of 27–28 September and landed unopposed." },
  { key: "hastings", t: 1, q: "was the Battle of Hastings fought", n: "the Battle of Hastings", d: 14, m: 10, note: "William defeated Harold, who was killed." },
  { key: "wcrown", t: 1, q: "was William crowned king", n: "William's coronation in Westminster Abbey", d: 25, m: 12, note: "He was crowned on Christmas Day 1066 — not 1067." },
  { key: "hcrown", t: 2, q: "was Harold Godwinson crowned king", n: "Harold Godwinson's coronation", d: 6, m: 1, note: "Just one day after Edward's death — the Witan acted fast." },
  { key: "fulford", t: 2, q: "was the Battle of Fulford Gate fought", n: "the Battle of Fulford Gate", d: 20, m: 9, note: "Hardrada and Tostig beat the northern earls Edwin and Morcar near York." },
  { key: "fyrd", t: 3, q: "did Harold send the southern fyrd home", n: "Harold sending the southern fyrd home", d: 8, m: 9, note: "Its supplies had run out after guarding the coast all summer." },
];

const DATE_TEMPLATES: ((e: DateEvent) => string)[] = [
  (e) => `On what date in 1066 ${e.q}? Give the day and month.`,
  (e) => `Give the day and month: ${e.n} (1066).`,
  (e) => `${cap(e.n)} — on what date in 1066? Give the day and month.`,
  (e) => `Date check: when in 1066 ${e.q}? (day and month)`,
];

const DAY_GAPS: [string, string][] = [
  ["fulford", "stamford"], ["stamford", "pevensey"], ["pevensey", "hastings"], ["stamford", "hastings"], ["fulford", "hastings"],
  ["edward", "hcrown"], ["hastings", "wcrown"], ["fulford", "pevensey"], ["fyrd", "pevensey"], ["fyrd", "fulford"], ["pevensey", "wcrown"],
];

function dayOfYear(d: number, m: number): number {
  let n = d;
  for (let i = 0; i < m - 1; i++) n += MONTH_DAYS[i];
  return n;
}

function gapWorking(a: DateEvent, b: DateEvent): string {
  if (a.m === b.m) return `${b.d} − ${a.d} = ${b.d - a.d} days.`;
  const parts = [`${MONTH_DAYS[a.m - 1] - a.d} left in ${MONTHS[a.m - 1]}`];
  for (let m = a.m + 1; m < b.m; m++) parts.push(`${MONTH_DAYS[m - 1]} in ${MONTHS[m - 1]}`);
  parts.push(`${b.d} in ${MONTHS[b.m - 1]}`);
  return `${parts.join(" + ")} = ${dayOfYear(b.d, b.m) - dayOfYear(a.d, a.m)} days.`;
}

interface YearEvent {
  t: Tier;
  q: string;
  n: string;
  y: number;
  note: string;
  trap?: [number, string];
}

const YEAR_BANK: YearEvent[] = [
  { t: 1, q: "did Edward the Confessor die", n: "the death of Edward the Confessor", y: 1066, note: "He died on 5 January 1066." },
  { t: 1, q: "was the Battle of Hastings fought", n: "the Battle of Hastings", y: 1066, note: "14 October 1066 — the 11th century, not the 10th." },
  { t: 1, q: "was the Battle of Stamford Bridge fought", n: "the Battle of Stamford Bridge", y: 1066, note: "25 September 1066, less than three weeks before Hastings." },
  { t: 1, q: "was the Battle of Fulford Gate fought", n: "the Battle of Fulford Gate", y: 1066, note: "20 September 1066, near York." },
  { t: 1, q: "did William land at Pevensey", n: "William's landing at Pevensey", y: 1066, note: "28 September 1066." },
  { t: 1, q: "was William crowned King of England", n: "William's coronation", y: 1066, note: "Christmas Day 1066, in Westminster Abbey.", trap: [1067, "Christmas Day 1066 — he was crowned before the year ended."] },
  { t: 1, q: "was the Domesday survey carried out", n: "the Domesday survey", y: 1086, note: "Ordered at Christmas 1085, it was carried out during 1086.", trap: [1085, "1085 is when William ordered it, at Christmas; the survey itself was carried out in 1086."] },
  { t: 1, q: "did William the Conqueror die", n: "the death of William the Conqueror", y: 1087, note: "He died at Rouen in 1087; his son William II became king of England." },
  { t: 2, q: "did Edward the Confessor become king", n: "the start of Edward the Confessor's reign", y: 1042, note: "He ruled from 1042, ending the line of Danish kings." },
  { t: 2, q: "did William become Duke of Normandy", n: "William becoming Duke of Normandy", y: 1035, note: "He was only about 8 and survived years of rebellion." },
  { t: 2, q: "did Edward the Confessor supposedly promise the throne to William", n: "Edward's alleged promise of the throne to William", y: 1051, note: "Our evidence for this comes mainly from Norman writers." },
  { t: 2, q: "did Harold swear his oath to William in Normandy", n: "Harold's oath to William", y: 1064, note: "Shown on the Bayeux Tapestry — a Norman source." },
  { t: 2, q: "was Tostig thrown out of Northumbria", n: "the revolt that drove Tostig out of Northumbria", y: 1065, note: "The year before the invasions — Tostig then turned against Harold.", trap: [1066, "Tostig was exiled in 1065, the year before he joined Hardrada's invasion."] },
  { t: 2, q: "did Lanfranc become Archbishop of Canterbury", n: "Lanfranc becoming Archbishop of Canterbury", y: 1070, note: "He replaced Stigand and reformed the English Church." },
  { t: 2, q: "did major landholders swear the Oath of Salisbury", n: "the Oath of Salisbury", y: 1086, note: "The same year as the Domesday survey." },
  { t: 2, q: "did the North rise in the rebellion that led to the Harrying", n: "the northern rebellion that led to the Harrying of the North", y: 1069, note: "Rebels and a Danish fleet attacked York; William's Harrying followed in 1069–70." },
  { t: 3, q: "did Rollo found Normandy", n: "the founding of Normandy by Rollo", y: 911, note: "Viking settlers led by Rollo were granted the land in 911." },
  { t: 3, q: "did the Danish king Cnut become King of England", n: "Cnut becoming King of England", y: 1016, note: "Danish kings then ruled England until 1042." },
  { t: 3, q: "did Harold Godwinson defeat the Welsh", n: "Harold's victory over the Welsh", y: 1063, note: "It proved him an experienced military leader." },
  { t: 3, q: "did William besiege the rebel city of Exeter", n: "William's siege of Exeter", y: 1068, note: "One of a string of rebellions between 1067 and 1071." },
  { t: 3, q: "did the Revolt of the Earls take place", n: "the Revolt of the Earls", y: 1075, note: "It showed the risk of powerful barons — and William crushed it." },
  { t: 3, q: "did William order the Domesday survey at Gloucester", n: "William ordering the Domesday survey", y: 1085, note: "At Christmas 1085; the survey was carried out in 1086.", trap: [1086, "The survey was carried out in 1086 — but William ordered it at Christmas 1085."] },
  { t: 3, q: "was Durham Cathedral begun", n: "the start of work on Durham Cathedral", y: 1093, note: "Just after William's death — a sign of the Normans' lasting building programme." },
];

const YEAR_TEMPLATES: ((e: YearEvent) => string)[] = [
  (e) => `In which year ${e.q}?`,
  (e) => `What year was ${e.n}?`,
  (e) => `${cap(e.n)} — which year?`,
];

// ---------------------------------------------------------------------------
// Chronology: which came first?
// ---------------------------------------------------------------------------

interface ChronoItem {
  t: Tier;
  label: string;
  a: string[];
  from: number;
  to: number;
}

const CHRONO: ChronoItem[] = [
  { t: 3, label: "Rollo founds Normandy", a: ["Rollo founds Normandy", "Rollo", "founding of Normandy", "Normandy founded", "Rollo founding Normandy"], from: 911, to: 911 },
  { t: 3, label: "Cnut becomes King of England", a: ["Cnut becomes King of England", "Cnut", "Canute", "Knut", "Cnut becomes king"], from: 1016, to: 1016 },
  { t: 2, label: "William becomes Duke of Normandy", a: ["William becomes Duke of Normandy", "William becomes duke", "William becoming duke", "Duke of Normandy", "becomes Duke of Normandy"], from: 1035, to: 1035 },
  { t: 2, label: "Edward the Confessor becomes king", a: ["Edward the Confessor becomes king", "Edward becomes king", "Edward becoming king", "Edward crowned", "Edward the Confessor crowned"], from: 1042, to: 1042 },
  { t: 2, label: "Edward is said to promise the throne to William", a: ["Edward is said to promise the throne to William", "the promise", "promise", "Edward's promise", "promise to William", "Edward promises the throne"], from: 1051, to: 1051 },
  { t: 3, label: "Harold defeats the Welsh", a: ["Harold defeats the Welsh", "Welsh", "the Welsh", "Harold beats the Welsh", "defeat of the Welsh"], from: 1063, to: 1063 },
  { t: 1, label: "Harold swears an oath to William in Normandy", a: ["Harold swears an oath to William in Normandy", "oath", "the oath", "Harold's oath", "Harold swears an oath", "Harold's oath to William"], from: 1064, to: 1064 },
  { t: 2, label: "Tostig is driven out of Northumbria", a: ["Tostig is driven out of Northumbria", "Tostig", "Tostig driven out", "Tostig exiled", "Tostig's exile"], from: 1065, to: 1065 },
  { t: 1, label: "the Battle of Hastings", a: ["the Battle of Hastings", "Battle of Hastings", "Hastings"], from: 1066, to: 1066 },
  { t: 1, label: "Edward the Confessor dies", a: ["Edward the Confessor dies", "Edward dies", "Edward died", "death of Edward", "Edward's death", "Edward the Confessor's death"], from: 1066, to: 1066 },
  { t: 1, label: "William is crowned King of England", a: ["William is crowned King of England", "William crowned", "William is crowned", "William's coronation", "coronation", "William crowned king"], from: 1066, to: 1066 },
  { t: 3, label: "William besieges rebel Exeter", a: ["William besieges rebel Exeter", "Exeter", "siege of Exeter", "Exeter rebels"], from: 1068, to: 1068 },
  { t: 1, label: "the Harrying of the North", a: ["the Harrying of the North", "Harrying of the North", "Harrying", "the Harrying"], from: 1069, to: 1070 },
  { t: 2, label: "Lanfranc becomes Archbishop of Canterbury", a: ["Lanfranc becomes Archbishop of Canterbury", "Lanfranc", "Lanfranc becomes archbishop"], from: 1070, to: 1070 },
  { t: 2, label: "Hereward the Wake holds out at Ely", a: ["Hereward the Wake holds out at Ely", "Hereward", "Hereward the Wake", "Ely"], from: 1070, to: 1071 },
  { t: 3, label: "the Revolt of the Earls", a: ["the Revolt of the Earls", "Revolt of the Earls", "Revolt of the Earls 1075"], from: 1075, to: 1075 },
  { t: 1, label: "the Domesday survey", a: ["the Domesday survey", "Domesday survey", "Domesday", "Domesday Book", "Doomsday"], from: 1085, to: 1086 },
  { t: 3, label: "the Oath of Salisbury", a: ["the Oath of Salisbury", "Oath of Salisbury", "Salisbury"], from: 1086, to: 1086 },
  { t: 1, label: "William dies at Rouen", a: ["William dies at Rouen", "William dies", "William died", "William's death", "death of William", "Rouen"], from: 1087, to: 1087 },
  { t: 3, label: "work begins on Durham Cathedral", a: ["work begins on Durham Cathedral", "Durham Cathedral", "Durham"], from: 1093, to: 1093 },
  { t: 3, label: "King John seals Magna Carta", a: ["King John seals Magna Carta", "Magna Carta", "John seals Magna Carta"], from: 1215, to: 1215 },
];

const yrs = (c: ChronoItem) => (c.from === c.to ? `${c.from}` : `${c.from}–${String(c.to).slice(2)}`);

// ---------------------------------------------------------------------------
// Classification banks
// ---------------------------------------------------------------------------

interface Cat {
  key: string;
  a: string[];
  short: string;
}
interface Clue {
  t: Tier;
  c: string;
  d: string;
  why?: string;
}

function otherTraps(cats: readonly Cat[], key: string, prefix = ""): Trap[] {
  return cats.filter((c) => c.key !== key).map((c) => trap(c.a, `${prefix}${c.short}`));
}

const CLAIMANTS: Cat[] = [
  { key: "harold", a: ["Harold Godwinson", "Harold", "Harold II", "King Harold", "Earl Harold", "Harold of Wessex", "Harold Godwineson"], short: "Not Harold Godwinson — he was the English earl chosen by the Witan." },
  { key: "william", a: ["William of Normandy", "William", "Duke William", "William I", "William the Conqueror", "William the Bastard", "William Duke of Normandy"], short: "Not William — he was the Duke of Normandy who claimed a promise and an oath." },
  { key: "hardrada", a: ["Harald Hardrada", "Hardrada", "Harold Hardrada", "Harald Sigurdsson", "Harald Hardraada", "King Harald", "Harald of Norway"], short: "Not Harald Hardrada — he was the King of Norway who invaded the north." },
  { key: "edgar", a: ["Edgar Ætheling", "Edgar Aetheling", "Edgar Atheling", "Edgar", "Edgar the Ætheling", "Edgar the Aetheling", "Edgar the Atheling", "Edgar Etheling"], short: "Not Edgar Ætheling — he was the teenage prince with the best blood claim." },
];

const CLAIMANT_CLUES: Clue[] = [
  { t: 1, c: "harold", d: "was Earl of Wessex and the most powerful noble in England" },
  { t: 1, c: "harold", d: "was elected by the Witan and crowned on 6 January 1066" },
  { t: 1, c: "harold", d: "was said to have been named heir by Edward the Confessor on his deathbed" },
  { t: 2, c: "harold", d: "had no royal blood, but was Edward the Confessor's brother-in-law" },
  { t: 2, c: "harold", d: "was called an oath-breaker by Norman writers" },
  { t: 2, c: "harold", d: "was killed at Hastings, along with his brothers Gyrth and Leofwine" },
  { t: 3, c: "harold", d: "had beaten the Welsh in 1063" },
  { t: 1, c: "william", d: "had been Duke of Normandy since 1035" },
  { t: 1, c: "william", d: "claimed that Edward the Confessor had promised him the throne in 1051" },
  { t: 2, c: "william", d: "said that Harold had sworn on holy relics in 1064 to support his claim" },
  { t: 2, c: "william", d: "invaded under a banner sent by Pope Alexander II" },
  { t: 2, c: "william", d: "landed at Pevensey on 28 September 1066" },
  { t: 3, c: "william", d: "was the great-nephew of Edward the Confessor's mother, Emma" },
  { t: 1, c: "hardrada", d: "was King of Norway" },
  { t: 1, c: "hardrada", d: "was backed by Harold's exiled brother Tostig" },
  { t: 2, c: "hardrada", d: "claimed the throne through a deal between Harthacnut and Magnus of Norway" },
  { t: 2, c: "hardrada", d: "won at Fulford Gate but was killed at Stamford Bridge" },
  { t: 3, c: "hardrada", d: "sailed up the Humber with about 300 ships" },
  { t: 1, c: "edgar", d: "was the grandson of King Edmund Ironside and had the best blood claim" },
  { t: 1, c: "edgar", d: "was only about 14 years old in 1066, with no army" },
  { t: 3, c: "edgar", d: "was chosen as king by some English leaders in London after Hastings, but was never crowned" },
  { t: 3, c: "edgar", d: "joined the northern rebels and a Danish fleet in 1069" },
];

const CLAIMANT_NOTES: Record<string, string> = {
  harold: "Harold's claim rested on election, Edward's deathbed wish and sheer power — but not royal blood.",
  william: "William's claim rested on a promise and an oath — evidence that comes mainly from Norman sources.",
  hardrada: "Hardrada's claim came from an old Scandinavian deal; his real strength was his army.",
  edgar: "Edgar had the strongest blood claim, but in a crisis the Witan wanted a proven adult leader.",
};

const CLAIMANT_TEMPLATES: ((d: string) => string)[] = [
  (d) => `Which claimant to the English throne in 1066 ${d}?`,
  (d) => `Name the 1066 claimant who ${d}.`,
  (d) => `Clue: this claimant ${d}. Who was he?`,
];

const CRITERIA: Cat[] = [
  { key: "blood", a: ["blood", "royal blood", "blood claim", "descent", "family", "hereditary", "heredity"], short: "Not blood — that means being related to the royal family." },
  { key: "promise", a: ["promise", "promised", "oath", "the promise", "named heir", "promise or oath"], short: "Not promise — that means being named heir or sworn support." },
  { key: "election", a: ["election", "elected", "Witan", "chosen", "choice", "election by the Witan"], short: "Not election — that means being chosen by the Witan or English leaders." },
  { key: "power", a: ["power", "military power", "strength", "military strength", "force", "army", "military"], short: "Not power — that means the force to take and hold the throne." },
];

const CRITERIA_CLUES: Clue[] = [
  { t: 1, c: "blood", d: "Edgar Ætheling was the grandson of King Edmund Ironside.", why: "Being a grandson of a king is a claim by **blood**." },
  { t: 2, c: "blood", d: "Duke William's great-aunt Emma was Edward the Confessor's mother.", why: "A family link to the king is a (weak) **blood** claim — William was not descended from English kings." },
  { t: 2, c: "blood", d: "Edgar was descended from the old Anglo-Saxon kings of England.", why: "Descent from earlier kings is a **blood** claim — Edgar's was the strongest." },
  { t: 3, c: "blood", d: "Harold's critics pointed out that he was not descended from any English king.", why: "This is about **blood** — Harold's weakest point." },
  { t: 1, c: "promise", d: "Norman writers say Edward promised William the throne in 1051.", why: "Being named heir is a **promise** — though the evidence is Norman." },
  { t: 1, c: "promise", d: "The *Anglo-Saxon Chronicle* says the dying Edward entrusted the kingdom to Harold.", why: "A deathbed request is a **promise** — and a strong one in English custom." },
  { t: 2, c: "promise", d: "Harold swore an oath on holy relics in 1064 to support William's claim.", why: "A sworn oath to back William is part of William's **promise** case." },
  { t: 2, c: "promise", d: "Hardrada said Magnus of Norway and Harthacnut had agreed that each would inherit the other's kingdom.", why: "An agreement about who inherits is a **promise** — an old and shaky one." },
  { t: 1, c: "election", d: "The Witan chose Harold as king in January 1066.", why: "Being chosen by the Witan is **election**." },
  { t: 2, c: "election", d: "England's leading nobles and churchmen backed Harold the day after Edward died.", why: "Choice by the great men of the kingdom is **election**." },
  { t: 3, c: "election", d: "After Hastings, some English leaders in London chose Edgar as king, though he was never crowned.", why: "Being chosen by English leaders is **election** — but without power it came to nothing." },
  { t: 1, c: "power", d: "Hardrada invaded with about 300 ships.", why: "A huge fleet is military **power**." },
  { t: 1, c: "power", d: "Harold was the richest and most powerful earl in England.", why: "Wealth and control of land and men is **power**." },
  { t: 1, c: "power", d: "William had a huge fleet built over the summer of 1066 and gathered thousands of knights.", why: "Ships and knights are military **power**." },
  { t: 2, c: "power", d: "Harold had beaten the Welsh in 1063 and was an experienced commander.", why: "Military experience and success is **power**." },
  { t: 3, c: "power", d: "Edgar was only about 14 and had no army of his own.", why: "This is about **power** — and Edgar had almost none." },
];

const CRITERIA_TEMPLATES: ((d: string) => string)[] = [
  (d) => `Which part of a claim does this evidence support — *blood*, *promise*, *election* or *power*?\n\n> ${d}`,
  (d) => `Blood, promise, election or power? Sort this piece of evidence:\n\n> ${d}`,
  (d) => `Using the four tests of a claim (*blood*, *promise*, *election*, *power*), which one does this evidence relate to?\n\n> ${d}`,
];

const BATTLES: Cat[] = [
  { key: "fulford", a: ["Fulford Gate", "Fulford", "Battle of Fulford", "Battle of Fulford Gate", "Gate Fulford"], short: "Not Fulford Gate (20 September) — there Hardrada beat Edwin and Morcar." },
  { key: "stamford", a: ["Stamford Bridge", "Battle of Stamford Bridge", "Stamford"], short: "Not Stamford Bridge (25 September) — there Harold beat Hardrada." },
  { key: "hastings", a: ["Hastings", "Battle of Hastings", "Senlac", "Senlac Hill", "Battle of Senlac Hill"], short: "Not Hastings (14 October) — there William beat Harold." },
];

const BATTLE_CLUES: Clue[] = [
  { t: 1, c: "fulford", d: "Harald Hardrada and Tostig defeated the northern earls Edwin and Morcar here" },
  { t: 1, c: "fulford", d: "this battle was fought on 20 September 1066, near York" },
  { t: 2, c: "fulford", d: "this was the first battle of autumn 1066, and the Norwegian invaders won it" },
  { t: 3, c: "fulford", d: "the Vikings won here just five days before Harold took them by surprise" },
  { t: 1, c: "stamford", d: "Harold Godwinson defeated and killed Harald Hardrada here" },
  { t: 1, c: "stamford", d: "this battle was fought on 25 September 1066" },
  { t: 2, c: "stamford", d: "Tostig was killed here, fighting against his own brother, Harold" },
  { t: 2, c: "stamford", d: "Harold took the Vikings by surprise after marching about 185 miles north" },
  { t: 3, c: "stamford", d: "the survivors needed only about 24 of their roughly 300 ships to sail home" },
  { t: 1, c: "hastings", d: "this battle was fought on 14 October 1066" },
  { t: 1, c: "hastings", d: "William of Normandy defeated Harold here, and Harold was killed" },
  { t: 2, c: "hastings", d: "Harold's shield wall on a ridge faced Norman archers and cavalry" },
  { t: 2, c: "hastings", d: "the Normans used feigned retreats to draw the English off the hill" },
  { t: 2, c: "hastings", d: "William lifted his helmet to show his men he was still alive" },
  { t: 3, c: "hastings", d: "Harold's brothers Gyrth and Leofwine were killed here" },
  { t: 3, c: "hastings", d: "William later founded Battle Abbey on the site" },
];

const BATTLE_TEMPLATES: ((d: string) => string)[] = [
  (d) => `Which battle of 1066 is this? ${cap(d)}. Answer *Fulford Gate*, *Stamford Bridge* or *Hastings*.`,
  (d) => `Name the battle: ${d}. (*Fulford Gate*, *Stamford Bridge* or *Hastings*?)`,
  (d) => `Clue: ${d}. Was this *Fulford Gate*, *Stamford Bridge* or *Hastings*?`,
];

const BATTLE_NOTES: Record<string, string> = {
  fulford: "Fulford Gate, 20 September: a Viking victory that pulled Harold north.",
  stamford: "Stamford Bridge, 25 September: Harold's great victory — three days before William landed.",
  hastings: "Hastings, 14 October: William's victory and Harold's death.",
};

const FACTORS: Cat[] = [
  { key: "luck", a: ["luck", "lucky", "chance", "good luck", "fortune", "William's luck"], short: "Not luck — luck is what William could not control." },
  { key: "skill", a: ["William's skill", "skill", "William's skill and preparation", "skill and preparation", "preparation", "William's preparation", "William's leadership"], short: "Not William's skill — that is something William planned or did well." },
  { key: "mistakes", a: ["Harold's mistakes", "Harold's mistake", "mistakes", "mistake", "Harold's errors", "Harold's weaknesses", "Harold"], short: "Not Harold's mistakes — that is a choice made on the English side." },
];

const FACTOR_CLUES: Clue[] = [
  { t: 1, c: "luck", d: "The wind kept William's fleet in France for weeks — until Harold had gone north.", why: "No one controlled the wind: its timing was **luck** for William." },
  { t: 1, c: "luck", d: "Hardrada invaded the north just before William crossed, drawing Harold away from the south coast.", why: "William did not arrange Hardrada's invasion — its timing was **luck**." },
  { t: 2, c: "luck", d: "William landed at Pevensey unopposed, because the southern fyrd had already gone home.", why: "Arriving with no army waiting was **luck** — though some argue Harold could have kept men on the coast." },
  { t: 2, c: "luck", d: "The wind finally changed on 27 September, two days after Harold's victory far away at Stamford Bridge.", why: "The wind's timing was out of anyone's hands — **luck**." },
  { t: 1, c: "skill", d: "William had a huge fleet built over the summer of 1066.", why: "Building and supplying a fleet is planning — **William's skill and preparation**." },
  { t: 1, c: "skill", d: "William brought archers, foot soldiers and around 2,000 mounted knights.", why: "A mixed army was a deliberate choice — **William's skill and preparation**." },
  { t: 1, c: "skill", d: "The Normans used feigned retreats to draw the English down from the ridge.", why: "Changing tactics in battle shows **William's skill**." },
  { t: 2, c: "skill", d: "William carried a papal banner, so his men believed God was on their side.", why: "Winning the Pope's backing was diplomacy and preparation — **William's skill**." },
  { t: 2, c: "skill", d: "William lifted his helmet to show he was alive and stop his men panicking.", why: "Quick, brave leadership in a crisis is **William's skill**." },
  { t: 2, c: "skill", d: "William switched tactics when his cavalry charges uphill failed.", why: "Adapting during the battle is **William's skill**." },
  { t: 3, c: "skill", d: "William kept his army fed and together while it waited weeks for the wind.", why: "Holding a big army together is organisation — **William's skill and preparation**." },
  { t: 3, c: "skill", d: "After landing, William built a wooden castle at Hastings and raided the countryside nearby.", why: "Securing a base and provoking Harold to fight quickly was **William's skill**." },
  { t: 1, c: "mistakes", d: "Harold rushed south to fight instead of waiting to gather a bigger army.", why: "Harold chose to fight quickly — usually counted as **Harold's mistake**." },
  { t: 1, c: "mistakes", d: "Harold's men were tired after marching about 185 miles north and then back south.", why: "Leading a tired army into battle so soon is usually counted among **Harold's mistakes**." },
  { t: 2, c: "mistakes", d: "Some English soldiers broke the shield wall to chase fleeing Normans.", why: "Breaking formation was an English error — **Harold's mistakes** (he could not keep his line together)." },
  { t: 3, c: "mistakes", d: "Harold fought before all the troops he could have called up had arrived.", why: "Fighting without his full strength was a choice — **Harold's mistakes**." },
];

const FACTOR_TEMPLATES: ((d: string) => string)[] = [
  (d) => `Why did William win in 1066? Classify this reason as *luck*, *William's skill* or *Harold's mistakes*.\n\n> ${d}`,
  (d) => `Luck, William's skill or Harold's mistakes? Which group does this reason belong in?\n\n> ${d}`,
  (d) => `Sort this reason William won into *luck*, *William's skill* or *Harold's mistakes*:\n\n> ${d}`,
];

const LEVELS: Cat[] = [
  { key: "king", a: ["king", "the king", "monarch", "William", "William I"], short: "Not the king — he sat at the top and owned all the land." },
  { key: "tic", a: ["tenant-in-chief", "tenants-in-chief", "tenant in chief", "tenants in chief", "baron", "barons", "great baron"], short: "Not a tenant-in-chief — that was a baron or churchman holding land straight from the king." },
  { key: "knight", a: ["knight", "knights"], short: "Not a knight — knights held manors from their lord in return for military service." },
  { key: "peasant", a: ["peasant", "peasants", "villein", "villeins", "serf", "serfs"], short: "Not a peasant — peasants worked the land at the bottom of the pyramid." },
];

const LEVEL_CLUES: Clue[] = [
  { t: 1, c: "king", d: "owned all the land in the kingdom" },
  { t: 1, c: "king", d: "could take land away from anyone who rebelled" },
  { t: 2, c: "king", d: "kept about a fifth of the land and granted most of the rest" },
  { t: 2, c: "king", d: "granted land to barons and senior churchmen in return for knight service" },
  { t: 3, c: "king", d: "received oaths of loyalty directly from major landholders at Salisbury in 1086" },
  { t: 1, c: "tic", d: "held land directly from the king" },
  { t: 1, c: "tic", d: "had to supply a fixed number of knights whenever the king demanded" },
  { t: 2, c: "tic", d: "was one of a few hundred great barons, bishops and abbots" },
  { t: 2, c: "tic", d: "knelt before the king to do homage for a huge estate" },
  { t: 3, c: "tic", d: "held estates scattered across several counties, so could not easily build one regional power base" },
  { t: 3, c: "tic", d: "was almost always Norman by 1086 — only two at this level were still English" },
  { t: 1, c: "knight", d: "received a manor from his lord" },
  { t: 1, c: "knight", d: "owed about 40 days of military service a year" },
  { t: 2, c: "knight", d: "fought on horseback in return for an estate granted by a baron" },
  { t: 3, c: "knight", d: "was lord of a manor and lived off the work of the villeins on it" },
  { t: 1, c: "peasant", d: "worked the lord's land for part of the week" },
  { t: 1, c: "peasant", d: "was tied to the manor and could not leave without permission" },
  { t: 2, c: "peasant", d: "farmed his own strips of land in the village fields" },
  { t: 2, c: "peasant", d: "belonged to the group that made up roughly 9 in 10 people" },
  { t: 3, c: "peasant", d: "might be recorded in Domesday Book as a villein, a cottar or a bordar" },
];

const LEVEL_TEMPLATES: ((d: string) => string)[] = [
  (d) => `In William's feudal system, who ${d}? Answer *king*, *tenant-in-chief*, *knight* or *peasant*.`,
  (d) => `Feudal pyramid: which level ${d}? (*king*, *tenant-in-chief*, *knight* or *peasant*)`,
  (d) => `Someone ${d}. Where were they in the feudal system — *king*, *tenant-in-chief*, *knight* or *peasant*?`,
];

const LEVEL_NOTES: Record<string, string> = {
  king: "The king sat at the top: all land was ultimately his, granted in return for loyalty and service.",
  tic: "Tenants-in-chief (barons and senior churchmen) held land straight from the king and owed knight service.",
  knight: "Knights held manors from their lord and owed military service — usually about 40 days a year.",
  peasant: "Peasants — about 9 in 10 people — worked the land; most were villeins tied to the manor.",
};

const catName = (cats: readonly Cat[], key: string) => cats.find((c) => c.key === key)!.a[0];

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  {
    id: "william-i.england-before-1066",
    topicId: "william-i",
    title: "England before 1066: name the person or term",
    level: 1,
    guideRef: "england-before-1066",
    generate(rng, tier) {
      return termItem(rng, ENGLAND_BANK, tier, "Think about how Anglo-Saxon England was run, and who was linked to the crown.");
    },
  },
  {
    id: "william-i.key-dates",
    topicId: "william-i",
    title: "Match the date to the event",
    level: 1,
    guideRef: "battles-of-1066",
    generate(rng, tier) {
      const r = rng.next();
      if (r < 0.45) {
        const e = pickTiered(rng, YEAR_BANK, tier);
        return {
          prompt: rng.pick(YEAR_TEMPLATES)(e),
          answer: { type: "number", value: e.y },
          solution: [`**${e.y}** — ${e.note}`],
          hint: e.y === 1066 ? "The most famous year in English history." : "Place it before or after 1066 first, then narrow it down.",
          traps: e.trap ? [{ spec: { type: "number", value: e.trap[0] }, feedback: e.trap[1] }] : undefined,
        };
      }
      if (tier === 3 && r > 0.75) {
        const [ka, kb] = rng.pick(DAY_GAPS);
        const a = DATED_1066.find((e) => e.key === ka)!;
        const b = DATED_1066.find((e) => e.key === kb)!;
        const gap = dayOfYear(b.d, b.m) - dayOfYear(a.d, a.m);
        const prompt = rng.bool()
          ? `How many days after ${a.n} came ${b.n}?`
          : `Count the days: from ${a.n} to ${b.n}, how many days passed?`;
        return {
          prompt,
          answer: { type: "number", value: gap },
          solution: [`${cap(a.n)}: ${fmtDate(a.d, a.m)}. ${cap(b.n)}: ${fmtDate(b.d, b.m)}.`, gapWorking(a, b)],
          hint: "Recall both dates first, then count forward.",
        };
      }
      const e = pickTiered(rng, DATED_1066, tier);
      const near = DATED_1066.filter((x) => x.key !== e.key && x.m === e.m);
      const accept = dateAccept(e.d, e.m);
      if (e.key === "wcrown") accept.push("Christmas Day", "Christmas Day 1066", "Christmas", "Christmas 1066");
      return {
        prompt: rng.pick(DATE_TEMPLATES)(e),
        answer: { type: "text", accept, display: fmtDate(e.d, e.m) },
        solution: [`**${fmtDate(e.d, e.m)} 1066** — ${e.note}`],
        hint: e.m === 9 ? "Remember the climbing September dates: 20, 25, 28." : "Think about where it sits in the year: January, September, October or December?",
        traps: near.map((x) => ({ spec: { type: "text", accept: dateAccept(x.d, x.m), display: fmtDate(x.d, x.m) }, feedback: `${fmtDate(x.d, x.m)} is the date of ${x.n}.` })),
      };
    },
  },
  {
    id: "william-i.claimant",
    topicId: "william-i",
    title: "Which claimant?",
    level: 1,
    guideRef: "claimants",
    generate(rng, tier) {
      const cl = pickTiered(rng, CLAIMANT_CLUES, tier);
      return {
        prompt: rng.pick(CLAIMANT_TEMPLATES)(cl.d),
        answer: textAns(CLAIMANTS.find((c) => c.key === cl.c)!.a),
        solution: [`**${catName(CLAIMANTS, cl.c)}** ${cl.d}.`, CLAIMANT_NOTES[cl.c]],
        hint: "The four claimants: Harold Godwinson, William of Normandy, Harald Hardrada and Edgar Ætheling.",
        traps: otherTraps(CLAIMANTS, cl.c),
      };
    },
  },
  {
    id: "william-i.which-battle",
    topicId: "william-i",
    title: "Which battle?",
    level: 1,
    guideRef: "battles-of-1066",
    generate(rng, tier) {
      const cl = pickTiered(rng, BATTLE_CLUES, tier);
      return {
        prompt: rng.pick(BATTLE_TEMPLATES)(cl.d),
        answer: textAns(BATTLES.find((c) => c.key === cl.c)!.a),
        solution: [`**${catName(BATTLES, cl.c)}** — ${cl.d}.`, BATTLE_NOTES[cl.c]],
        hint: "North or south? Vikings or Normans? Remember: 20 September, 25 September, then 14 October.",
        traps: otherTraps(BATTLES, cl.c),
      };
    },
  },
  {
    id: "william-i.claim-tests",
    topicId: "william-i",
    title: "Blood, promise, election or power?",
    level: 2,
    guideRef: "claimants",
    generate(rng, tier) {
      const cl = pickTiered(rng, CRITERIA_CLUES, tier);
      return {
        prompt: rng.pick(CRITERIA_TEMPLATES)(cl.d),
        answer: textAns(CRITERIA.find((c) => c.key === cl.c)!.a),
        solution: [cl.why ?? "", "Testing every claimant against blood, promise, election and power shows that no one had a perfect claim in 1066."],
        hint: "Ask: is this about family, being named heir, being chosen, or having the force to win?",
        traps: otherTraps(CRITERIA, cl.c),
      };
    },
  },
  {
    id: "william-i.key-terms",
    topicId: "william-i",
    title: "Key term from its definition",
    level: 2,
    guideRef: "securing-the-kingdom",
    generate(rng, tier) {
      return termItem(rng, TERMS_BANK, tier, "Think castles, battles, rebellions and the land-for-loyalty system.");
    },
  },
  {
    id: "william-i.feudal-level",
    topicId: "william-i",
    title: "Which level of the feudal system?",
    level: 2,
    guideRef: "feudal-system",
    generate(rng, tier) {
      const cl = pickTiered(rng, LEVEL_CLUES, tier);
      return {
        prompt: rng.pick(LEVEL_TEMPLATES)(cl.d),
        answer: textAns(LEVELS.find((c) => c.key === cl.c)!.a),
        solution: [`${cl.c === "king" ? "The" : "A"} **${catName(LEVELS, cl.c)}** ${cl.d}.`, LEVEL_NOTES[cl.c]],
        hint: "Picture the pyramid: king → tenants-in-chief → knights → peasants. Who gives land, and who gives service?",
        traps: otherTraps(LEVELS, cl.c),
      };
    },
  },
  {
    id: "william-i.domesday-and-church",
    topicId: "william-i",
    title: "Domesday Book and the Norman Church",
    level: 2,
    guideRef: "domesday-and-church",
    generate(rng, tier) {
      if (tier === 3 && rng.bool(0.25)) {
        const q = rng.pick(DOMESDAY_NUMBERS);
        return { prompt: q.q, answer: { type: "number", value: q.n }, solution: [q.sol], hint: "Recall both years, then subtract." };
      }
      return termItem(rng, DOMESDAY_BANK, tier, "Think about the survey of 1085–86, the languages of Norman England and Lanfranc's Church.");
    },
  },
  {
    id: "william-i.which-came-first",
    topicId: "william-i",
    title: "Which came first?",
    level: 2,
    guideRef: "why-william-rose",
    generate(rng, tier) {
      const a = pickTiered(rng, CHRONO, tier);
      const pool = CHRONO.filter((c) => c.t <= tier && (c.to < a.from || a.to < c.from));
      const b = rng.pick(pool);
      const [first, second] = a.from < b.from ? [a, b] : [b, a];
      const firstLetter = first === a ? "A" : "B";
      const secondLetter = firstLetter === "A" ? "B" : "A";
      const intro = rng.pick(["Which came first?", "Chronology check — which happened earlier?", "Put these in order: which happened first?"]);
      return {
        prompt: `${intro}\n\n**A:** ${cap(a.label)}\n\n**B:** ${cap(b.label)}\n\nType A or B (or name the event).`,
        answer: { type: "text", accept: [firstLetter, `(${firstLetter})`, `event ${firstLetter}`, ...first.a], display: `${firstLetter}: ${cap(first.label)}` },
        solution: [`${cap(first.label)}: ${yrs(first)}. ${cap(second.label)}: ${yrs(second)}.`, `So **${firstLetter}** came first.`],
        hint: "Anchor each event to 1066: before, during or after the Conquest?",
        traps: [{ spec: { type: "text", accept: [secondLetter, ...second.a] }, feedback: `That one was later — ${second.label} was in ${yrs(second)}.` }],
      };
    },
  },
  {
    id: "william-i.why-william-won",
    topicId: "william-i",
    title: "Why William won: luck, skill or Harold's mistakes?",
    level: 3,
    guideRef: "battles-of-1066",
    generate(rng, tier) {
      const cl = pickTiered(rng, FACTOR_CLUES, tier);
      return {
        prompt: rng.pick(FACTOR_TEMPLATES)(cl.d),
        answer: textAns(FACTORS.find((c) => c.key === cl.c)!.a),
        solution: [cl.why ?? "", "Historians weigh these three groups differently — the strongest answers show how they link (luck gave William a chance; his preparation let him use it)."],
        hint: "Ask: who controlled this — nobody (luck), William, or Harold and the English?",
        traps: otherTraps(FACTORS, cl.c),
      };
    },
  },
];
