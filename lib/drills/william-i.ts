// Recall drills for "William I and the Norman Conquest".
import type { Drill, DrillItem, Rng } from "./types.ts";
import { fromBank, whichFirst, type BankItem, type DatedEvent } from "./history.ts";

const T = "william-i";

interface Ev extends DatedEvent {
  /** Last year, for events that ran across two years (e.g. winter 1069–70). */
  to?: number;
  /** The "In what year…?" question. */
  q: string;
  /** Extra context for the solution. */
  note?: string;
}

// Shared dated events (≥15) for Key dates and Which came first?
const EVENTS: Ev[] = [
  { year: 1035, label: "William becoming Duke of Normandy", alt: ["William becomes Duke of Normandy", "William became Duke", "Duke of Normandy"], q: "In what year did William become Duke of Normandy?", note: "He was only about 7 or 8, and survived years of violent plots." },
  { year: 1042, label: "Edward the Confessor becoming king", alt: ["Edward the Confessor becomes king", "Edward becomes king", "Edward the Confessor"], q: "In what year did Edward the Confessor become king of England?" },
  { year: 1047, label: "the Battle of Val-ès-Dunes", alt: ["Battle of Val-es-Dunes", "Val-es-Dunes", "Val-ès-Dunes"], q: "In what year did young William crush rebel Norman lords at the Battle of Val-ès-Dunes?" },
  { year: 1053, label: "Harold becoming Earl of Wessex", alt: ["Harold becomes Earl of Wessex", "Earl of Wessex"], q: "In what year did Harold Godwinson become Earl of Wessex, after his father Godwin died?" },
  { year: 1064, label: "Harold's oath to William", alt: ["Harold's oath", "the oath", "oath to William"], q: "In what year did Harold swear his oath to William in Normandy (the usual date)?", note: "1064 is the usual date; a few historians prefer 1065." },
  { year: 1066, label: "the Battle of Hastings", alt: ["Battle of Hastings", "Hastings"], date: "14 October 1066", q: "In what year was the Battle of Hastings?" },
  { year: 1068, label: "the siege of Exeter", alt: ["siege of Exeter", "Exeter"], q: "In what year did William besiege Exeter?" },
  { year: 1069, label: "the rebellion in the North", alt: ["rebellion in the North", "the Northern rebellion", "Northern rebellion"], q: "In what year did northern rebels and a Danish fleet capture York?" },
  { year: 1069, to: 1070, label: "the Harrying of the North", alt: ["Harrying of the North", "the Harrying", "Harrying"], date: "winter 1069–70", q: "In what year did the Harrying of the North begin?" },
  { year: 1070, label: "Lanfranc becoming Archbishop of Canterbury", alt: ["Lanfranc becomes Archbishop", "Lanfranc"], q: "In what year did Lanfranc become Archbishop of Canterbury?" },
  { year: 1071, label: "the fall of Ely", alt: ["fall of Ely", "Ely", "Hereward's defeat at Ely"], q: "In what year did Hereward the Wake's stronghold at Ely fall?" },
  { year: 1072, label: "Malcolm III's submission at Abernethy", alt: ["submission at Abernethy", "Abernethy", "Treaty of Abernethy"], q: "In what year did King Malcolm III of Scotland submit to William at Abernethy?" },
  { year: 1075, label: "the Revolt of the Earls", alt: ["Revolt of the Earls"], q: "In what year was the Revolt of the Earls?" },
  { year: 1086, label: "the Domesday survey", alt: ["Domesday survey", "Domesday Book", "Domesday", "the Domesday Book"], q: "In what year was the Domesday survey carried out?", note: "William ordered it at Christmas 1085." },
  { year: 1087, label: "William's death", alt: ["death of William", "William dies", "William died"], date: "9 September 1087", q: "In what year did William I die?" },
  { year: 1093, label: "the start of building Durham Cathedral", alt: ["Durham Cathedral", "building Durham Cathedral", "start of Durham Cathedral"], q: "In what year did work begin on Durham Cathedral?" },
];

/** "In what year …?" — like yearOf, but accepts either year for events spanning two years. */
function keyDates(rng: Rng): DrillItem {
  const e = rng.pick(EVENTS);
  const label = e.label.charAt(0).toUpperCase() + e.label.slice(1);
  const note = e.note ? ` ${e.note}` : "";
  if (e.to) {
    return {
      prompt: e.q,
      answer: { type: "number", value: (e.year + e.to) / 2, tolerance: (e.to - e.year) / 2, display: `${e.year}–${String(e.to).slice(2)}` },
      solution: [`${label}: ${e.date}. (${e.year} or ${e.to} are both accepted — it ran through the winter.)${note}`],
      hint: "It came straight after the rebels took York in 1069.",
    };
  }
  return {
    prompt: e.q,
    answer: { type: "number", value: e.year, display: String(e.year) },
    solution: [`${label}: ${e.date ?? e.year}.${note}`],
    hint: "Anchor it to 1066: before or after, and by how much?",
  };
}

// --- 1066 day by day --------------------------------------------------------
interface Day {
  /** Day of the year 1066 (not a leap year): 1 = 1 January. */
  d: number;
  label: string;
  alt: string[];
  date: string;
  /** True when only the month/part of month is known. */
  vague?: boolean;
}

const Y1066: Day[] = [
  { d: 5, label: "the death of Edward the Confessor", alt: ["death of Edward the Confessor", "Edward's death", "Edward dies", "death of Edward"], date: "5 January" },
  { d: 6, label: "Harold's coronation", alt: ["Harold crowned", "coronation of Harold", "Harold is crowned"], date: "6 January" },
  { d: 114, label: "the sighting of Halley's Comet", alt: ["Halley's Comet", "the comet", "sighting of Halley's Comet"], date: "late April", vague: true },
  { d: 135, label: "Tostig's raids on the coast", alt: ["Tostig's raids", "Tostig raids the coast", "Tostig"], date: "May", vague: true },
  { d: 225, label: "William's fleet gathering at Dives-sur-Mer", alt: ["William's fleet gathers", "fleet at Dives", "Dives-sur-Mer", "Dives"], date: "August", vague: true },
  { d: 251, label: "Harold sending the fyrd home", alt: ["Harold sends the fyrd home", "the fyrd sent home", "fyrd sent home", "fyrd"], date: "8 September" },
  { d: 258, label: "Hardrada landing at Riccall", alt: ["Hardrada lands at Riccall", "Hardrada lands", "Riccall"], date: "mid-September", vague: true },
  { d: 263, label: "the Battle of Gate Fulford", alt: ["Battle of Gate Fulford", "Gate Fulford", "Fulford", "Battle of Fulford"], date: "20 September" },
  { d: 268, label: "the Battle of Stamford Bridge", alt: ["Battle of Stamford Bridge", "Stamford Bridge"], date: "25 September" },
  { d: 271, label: "William's landing at Pevensey", alt: ["William lands at Pevensey", "landing at Pevensey", "Pevensey"], date: "28 September" },
  { d: 287, label: "the Battle of Hastings", alt: ["Battle of Hastings", "Hastings"], date: "14 October" },
  { d: 295, label: "Edgar Ætheling being chosen as king", alt: ["Edgar chosen as king", "Edgar Aetheling chosen", "Edgar Atheling chosen", "Edgar"], date: "late October", vague: true },
  { d: 340, label: "the English leaders' submission at Berkhamsted", alt: ["submission at Berkhamsted", "Berkhamsted"], date: "early December", vague: true },
  { d: 359, label: "William's coronation", alt: ["William crowned", "coronation of William", "William is crowned"], date: "25 December" },
];

function order1066(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  if (tier === 3 && rng.bool(0.5)) {
    // How many days between two exactly dated events?
    const exact = Y1066.filter((x) => !x.vague);
    let a = rng.pick(exact);
    let b = rng.pick(exact);
    for (let i = 0; i < 200 && (a.d === b.d || Math.abs(a.d - b.d) > 100); i++) {
      a = rng.pick(exact);
      b = rng.pick(exact);
    }
    if (a.d > b.d) [a, b] = [b, a];
    const gap = b.d - a.d;
    return {
      prompt: `${cap(a.label)} was on ${a.date} 1066 and ${b.label} was on ${b.date} 1066. How many days later was the second event?`,
      answer: { type: "number", value: gap },
      solution: [`Count on from ${a.date} to ${b.date}: ${gap} days. (September has 30 days, October 31, November 30.)`],
      hint: "Count to the end of the first month, then add the days in each later month.",
      traps: gap > 1 ? [{ spec: { type: "number", value: gap + 1 }, feedback: "You counted both end days — count the days AFTER the first date." }] : undefined,
    };
  }
  const minGap = tier === 1 ? 40 : tier === 2 ? 8 : 2;
  let a = rng.pick(Y1066);
  let b = rng.pick(Y1066);
  for (let i = 0; i < 200; i++) {
    const g = Math.abs(a.d - b.d);
    const need = a.vague || b.vague ? Math.max(minGap, 10) : minGap;
    if (a !== b && g >= need) break;
    a = rng.pick(Y1066);
    b = rng.pick(Y1066);
  }
  const first = a.d < b.d ? a : b;
  const second = first === a ? b : a;
  return {
    prompt: `1066: which happened first — ${a.label} or ${b.label}? Type the earlier one.`,
    answer: { type: "text", accept: [first.label, ...first.alt], display: cap(first.label) },
    solution: [`${cap(first.label)} (${first.date}) came before ${second.label} (${second.date}).`],
    hint: "Edward's death (January) … invasions (September) … Hastings (14 October) … coronation (Christmas).",
    traps: [{ spec: { type: "text", accept: [second.label] }, feedback: `That one came later — ${second.date}.` }],
  };
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// --- Banks -----------------------------------------------------------------
const HAROLD = ["Harold Godwinson", "Godwinson", "Harold II", "Harold Godwineson"];
const HARDRADA = ["Harald Hardrada", "Hardrada", "Harald Sigurdsson", "Harald Hardrade"];

const WHO: BankItem[] = [
  {
    prompt: "Which Earl of Wessex was crowned king on 6 January 1066?",
    answer: { type: "text", accept: HAROLD, display: "Harold Godwinson" },
    solution: "Harold Godwinson, chosen by the Witan the day after Edward died.",
    hint: "Not the Viking — the English earl.",
    traps: [{ spec: { type: "text", accept: HARDRADA }, feedback: "Hardrada was the Norwegian king. The English earl was Harold Godwinson." }],
  },
  {
    prompt: "Which King of Norway invaded the north of England in September 1066?",
    answer: { type: "text", accept: HARDRADA, display: "Harald Hardrada" },
    solution: "Harald Hardrada (“hard ruler”), killed at Stamford Bridge on 25 September 1066.",
    traps: [{ spec: { type: "text", accept: ["Harold Godwinson", "Godwinson"] }, feedback: "Harold Godwinson was the English king who defeated him. Watch the spelling: HarAld Hardrada." }],
  },
  {
    prompt: "Which English king died on 5 January 1066 without any children?",
    answer: { type: "text", accept: ["Edward the Confessor", "Edward", "King Edward", "the Confessor"], display: "Edward the Confessor" },
    solution: "Edward the Confessor, king since 1042.",
  },
  {
    prompt: "Which teenage great-nephew of Edward the Confessor was his closest blood relative in 1066?",
    answer: { type: "text", accept: ["Edgar Ætheling", "Edgar Aetheling", "Edgar Atheling", "Edgar", "Edgar the Aetheling"], display: "Edgar Ætheling" },
    solution: "Edgar Ætheling (‘ætheling’ means prince of royal blood). He was about 14 and had little support or experience.",
  },
  {
    prompt: "Which brother of Harold Godwinson, exiled in 1065, joined Hardrada's invasion?",
    answer: { type: "text", accept: ["Tostig", "Tostig Godwinson"], display: "Tostig" },
    solution: "Tostig, the former Earl of Northumbria. He died with Hardrada at Stamford Bridge.",
    traps: [{ spec: { type: "text", accept: ["Gyrth", "Leofwine"] }, feedback: "Gyrth and Leofwine fought FOR Harold (and died at Hastings). The rebel brother was Tostig." }],
  },
  {
    prompt: "Who was Duke of Normandy in 1066?",
    answer: { type: "text", accept: ["William", "William of Normandy", "William the Conqueror", "Duke William", "William I"], display: "William of Normandy" },
    solution: "William, Duke of Normandy since 1035 — later called William the Conqueror.",
  },
  {
    prompt: "Which English rebel held out against the Normans in the marshes around Ely in 1070–71?",
    answer: { type: "text", accept: ["Hereward the Wake", "Hereward"], display: "Hereward the Wake" },
    solution: "Hereward the Wake. Ely fell in 1071; what happened to Hereward afterwards is unknown.",
  },
  {
    prompt: "William's half-brother, the Bishop of Bayeux who probably ordered the Bayeux Tapestry, was called…?",
    answer: { type: "text", accept: ["Odo", "Bishop Odo", "Odo of Bayeux"], display: "Odo of Bayeux" },
    solution: "Bishop Odo, who also fought at Hastings and later became Earl of Kent.",
  },
  {
    prompt: "Which Italian-born churchman did William make Archbishop of Canterbury in 1070?",
    answer: { type: "text", accept: ["Lanfranc"], display: "Lanfranc" },
    solution: "Lanfranc, who reorganised the English Church on Norman lines.",
    traps: [{ spec: { type: "text", accept: ["Stigand"] }, feedback: "Stigand was the English archbishop whom Lanfranc REPLACED in 1070." }],
  },
  {
    prompt: "Name one of the two English earls (brothers) defeated by Hardrada at Gate Fulford.",
    answer: { type: "text", accept: ["Edwin", "Morcar", "Earl Edwin", "Earl Morcar", "Edwin and Morcar"], display: "Edwin or Morcar" },
    solution: "Earls Edwin (of Mercia) and Morcar (of Northumbria).",
  },
  {
    prompt: "What was the name of William's wife, who was crowned queen in 1068?",
    answer: { type: "text", accept: ["Matilda", "Matilda of Flanders", "Queen Matilda"], display: "Matilda of Flanders" },
    solution: "Matilda of Flanders, crowned at Westminster in 1068.",
  },
  {
    prompt: "Harold Godwinson's father, the powerful Earl of Wessex who died in 1053, was called…?",
    answer: { type: "text", accept: ["Godwin", "Earl Godwin", "Godwine"], display: "Godwin" },
    solution: "Earl Godwin. His family became the richest in England after the king.",
  },
  {
    prompt: "Which pope gave William a papal banner to carry into battle in 1066?",
    answer: { type: "text", accept: ["Alexander II", "Pope Alexander II", "Alexander"], display: "Pope Alexander II" },
    solution: "Pope Alexander II — his support made the invasion look like a holy cause.",
    traps: [{ spec: { type: "text", accept: ["Innocent III"] }, feedback: "Innocent III was King John's pope, about 150 years later." }],
  },
  {
    prompt: "Which Archbishop of York crowned William on Christmas Day 1066?",
    answer: { type: "text", accept: ["Ealdred", "Archbishop Ealdred", "Aldred"], display: "Ealdred" },
    solution: "Ealdred, Archbishop of York, at Westminster Abbey.",
    traps: [{ spec: { type: "text", accept: ["Lanfranc"] }, feedback: "Lanfranc only became an archbishop in 1070 (of Canterbury)." }],
    tier: 2,
  },
  {
    prompt: "Which Norman chaplain wrote a life of William (the *Gesta Guillelmi*) that praises him and is a key — but biased — source for 1066?",
    answer: { type: "text", accept: ["William of Poitiers", "Poitiers"], display: "William of Poitiers" },
    solution: "William of Poitiers, William's own chaplain: well informed, but writing to glorify his master.",
    tier: 2,
  },
  {
    prompt: "Which English earl was the only one William had executed, in 1076, after the Revolt of the Earls?",
    answer: { type: "text", accept: ["Waltheof", "Earl Waltheof"], display: "Waltheof" },
    solution: "Waltheof, Earl of Northumbria, beheaded at Winchester in 1076.",
    tier: 3,
  },
  {
    prompt: "Which bishop of Worcester was the only English-born bishop still in office when William died in 1087?",
    answer: { type: "text", accept: ["Wulfstan", "Saint Wulfstan", "St Wulfstan", "Wulfstan of Worcester"], display: "Wulfstan" },
    solution: "Wulfstan of Worcester — every other bishopric was by then held by a Norman or other foreign churchman.",
    tier: 3,
  },
  {
    prompt: "Which king of Denmark sent a fleet to help the northern rebels in 1069?",
    answer: { type: "text", accept: ["Sweyn", "Sweyn Estrithson", "Svein", "Sweyn II", "Svend"], display: "Sweyn Estrithson" },
    solution: "Sweyn (Svein) Estrithson. William later paid the Danes to leave.",
    tier: 3,
  },
  {
    prompt: "Which King of Scotland submitted to William at Abernethy in 1072?",
    answer: { type: "text", accept: ["Malcolm III", "Malcolm", "Malcolm Canmore"], display: "Malcolm III" },
    solution: "Malcolm III (Malcolm Canmore), who had sheltered Edgar Ætheling and married his sister Margaret.",
    tier: 3,
  },
];

const TERMS: BankItem[] = [
  {
    prompt: "The council of leading nobles and churchmen that advised the English king and chose Harold in 1066 was called the…?",
    answer: { type: "text", accept: ["Witan", "the Witan", "Witenagemot"], display: "Witan" },
    solution: "The Witan (Witenagemot).",
  },
  {
    prompt: "What were the English king's and earls' full-time professional bodyguard soldiers called?",
    answer: { type: "text", accept: ["housecarls", "housecarl", "huscarls"], display: "Housecarls" },
    solution: "Housecarls: well-trained warriors with huge two-handed axes.",
    traps: [{ spec: { type: "text", accept: ["fyrd"] }, feedback: "The fyrd were part-time soldiers called up when needed. The professionals were housecarls." }],
  },
  {
    prompt: "What was the English part-time army of ordinary freemen, called up when needed, called?",
    answer: { type: "text", accept: ["fyrd", "the fyrd"], display: "Fyrd" },
    solution: "The fyrd: part-time soldiers who also had farms to run.",
    traps: [{ spec: { type: "text", accept: ["housecarls", "housecarl"] }, feedback: "Housecarls were the full-time professionals. Part-timers were the fyrd." }],
  },
  {
    prompt: "What was the English battle formation of overlapping shields, held firm on top of the hill at Hastings?",
    answer: { type: "text", accept: ["shield wall", "shieldwall", "a shield wall"], display: "Shield wall" },
    solution: "The shield wall: strong as long as it held together.",
  },
  {
    prompt: "In a motte-and-bailey castle, what was the high earth mound with a wooden tower on top called?",
    answer: { type: "text", accept: ["motte", "the motte"], display: "Motte" },
    solution: "The motte (mound). The bailey was the yard below.",
    traps: [{ spec: { type: "text", accept: ["bailey"] }, feedback: "The bailey was the fenced yard at the bottom. The mound was the motte." }],
  },
  {
    prompt: "In a motte-and-bailey castle, what was the fenced yard at the foot of the mound, where soldiers and horses lived, called?",
    answer: { type: "text", accept: ["bailey", "the bailey"], display: "Bailey" },
    solution: "The bailey, protected by a ditch and a wooden fence (palisade).",
    traps: [{ spec: { type: "text", accept: ["motte"] }, feedback: "The motte was the mound. The yard was the bailey." }],
  },
  {
    prompt: "What was the solemn promise of loyalty that a vassal swore to his lord called?",
    answer: { type: "text", accept: ["fealty", "oath of fealty", "homage", "an oath of fealty"], display: "An oath of fealty" },
    solution: "An oath of fealty (often with homage): loyalty in return for land.",
  },
  {
    prompt: "What was an unfree peasant who farmed land for a lord, and could not leave the manor without permission, called?",
    answer: { type: "text", accept: ["villein", "villeins", "serf", "serfs"], display: "Villein (serf)" },
    solution: "A villein: the largest group in the feudal pyramid.",
  },
  {
    prompt: "What were the barons and bishops who held land directly from the king called? (four words with hyphens)",
    answer: { type: "text", accept: ["tenants-in-chief", "tenant-in-chief", "tenants in chief", "tenant in chief"], display: "Tenants-in-chief" },
    solution: "Tenants-in-chief: they held land straight from the king and owed him knights.",
  },
  {
    prompt: "What name do historians give to the system of holding land in return for loyalty and service, with the king at the top?",
    answer: { type: "text", accept: ["feudal system", "the feudal system", "feudalism"], display: "The feudal system" },
    solution: "The feudal system (feudalism).",
  },
  {
    prompt: "What was the strong stone tower at the heart of a later Norman castle called?",
    answer: { type: "text", accept: ["keep", "stone keep", "a keep", "donjon"], display: "Keep" },
    solution: "A keep, like the White Tower in London.",
  },
  {
    prompt: "What is the word for the person entitled to inherit the throne?",
    answer: { type: "text", accept: ["heir", "an heir", "the heir"], display: "Heir" },
    solution: "An heir. Edward the Confessor had no son to be his heir.",
  },
  {
    prompt: "What is the ceremony at which a new monarch is crowned called?",
    answer: { type: "text", accept: ["coronation", "a coronation"], display: "Coronation" },
    solution: "A coronation. William's was at Westminster Abbey on Christmas Day 1066.",
  },
  {
    prompt: "What is the word for soldiers who fight on horseback?",
    answer: { type: "text", accept: ["cavalry", "knights", "mounted knights"], display: "Cavalry" },
    solution: "Cavalry: William's mounted knights. The English fought on foot.",
  },
  {
    prompt: "What was William's great survey of land and resources in 1086 later called?",
    answer: { type: "text", accept: ["Domesday Book", "the Domesday Book", "Domesday", "Doomsday Book"], display: "Domesday Book" },
    solution: "The Domesday Book.",
  },
  {
    prompt: "What was a battle tactic of pretending to run away, to tempt the enemy to break ranks and chase, called?",
    answer: { type: "text", accept: ["feigned retreat", "feigned retreats", "fake retreat", "feigned flight"], display: "Feigned retreat" },
    solution: "A feigned retreat — described by William of Poitiers at Hastings.",
    tier: 2,
  },
  {
    prompt: "The duty to provide armed knights to fight for the king (usually for up to 40 days a year) was called…?",
    answer: { type: "text", accept: ["knight service", "knight's service", "military service"], display: "Knight service" },
    solution: "Knight service: the price of holding land from the king.",
    tier: 2,
  },
  {
    prompt: "A powerful English nobleman who ruled a large region such as Wessex or Mercia for the king was called an…?",
    answer: { type: "text", accept: ["earl", "an earl"], display: "Earl" },
    solution: "An earl. Harold was Earl of Wessex before he became king.",
    tier: 2,
  },
  {
    prompt: "What was the wooden fence of sharpened stakes around a bailey called?",
    answer: { type: "text", accept: ["palisade", "a palisade"], display: "Palisade" },
    solution: "A palisade.",
    tier: 2,
  },
  {
    prompt: "A flag blessed by the Pope, which William carried to show the Church backed his invasion, was called a…?",
    answer: { type: "text", accept: ["papal banner", "the papal banner", "papal flag", "banner"], display: "Papal banner" },
    solution: "A papal banner, from Pope Alexander II.",
    tier: 2,
  },
  {
    prompt: "An Anglo-Saxon landowning nobleman, below an earl, was called a…?",
    answer: { type: "text", accept: ["thegn", "thane", "thegns"], display: "Thegn (thane)" },
    solution: "A thegn. Most lost their lands to Normans after 1066.",
    tier: 3,
  },
  {
    prompt: "Land set aside for the king's hunting, with harsh laws protecting the deer, was called a royal…?",
    answer: { type: "text", accept: ["forest", "royal forest"], display: "Royal forest" },
    solution: "A royal forest, such as the New Forest in Hampshire.",
    tier: 3,
  },
  {
    prompt: "The Old English word for a prince of royal blood, used as Edgar's title, is…?",
    answer: { type: "text", accept: ["ætheling", "aetheling", "atheling", "etheling"], display: "Ætheling" },
    solution: "Ætheling: Edgar Ætheling was Edward the Confessor's great-nephew.",
    tier: 3,
  },
];

// Factor answers for "Why did William win?"
const LUCK = ["luck", "chance", "good luck"];
const SKILL = ["William's skill", "William", "skill", "William's leadership", "William's preparation", "leadership", "preparation", "William's strengths"];
const MISTAKES = ["Harold's mistakes", "Harold", "mistakes", "Harold's decisions", "Harold's errors", "Harold's weaknesses"];
const factor = (prompt: string, accept: string[], display: string, solution: string, tier: 1 | 2 | 3 = 1): BankItem => ({
  prompt: `Luck, William's skill or Harold's mistakes? ${prompt}`,
  answer: { type: "text", accept, display },
  solution,
  hint: "Did someone plan it (William), get it wrong (Harold), or was it out of everyone's control (luck)?",
  tier,
});

const WHY_WON: BankItem[] = [
  factor("The wind finally let William's fleet cross the Channel at the end of September, just after Harold had gone north.", LUCK, "Luck", "Luck — though some historians think William chose his moment deliberately."),
  factor("Harald Hardrada invaded the north of England only days before William landed.", LUCK, "Luck", "Luck: the timing dragged Harold 200 miles away from the south coast."),
  factor("William persuaded the Pope to give him a papal banner.", SKILL, "William's skill", "William's skill: clever diplomacy that made his men believe God was on their side."),
  factor("William spent the summer building a huge fleet to carry men, weapons and horses.", SKILL, "William's skill", "William's skill: careful preparation."),
  factor("The Normans pretended to flee so that English soldiers would chase them down the hill.", SKILL, "William's skill", "William's skill: the feigned retreat (described by William of Poitiers)."),
  factor("When a rumour spread that he was dead, William pushed back his helmet to show his face to his men.", SKILL, "William's skill", "William's skill: leadership in a crisis — shown on the Bayeux Tapestry."),
  factor("Harold left London for Hastings without waiting to gather a much bigger army.", MISTAKES, "Harold's mistakes", "Harold's mistakes: waiting might have given him far more men."),
  factor("William brought a mixed army of archers, foot soldiers and mounted knights.", SKILL, "William's skill", "William's skill: the English army fought only on foot."),
  factor("Harold had to send the fyrd home on 8 September because their food had run out, so the south coast was unguarded.", [...LUCK, ...MISTAKES], "Luck (you could argue Harold's mistakes)", "Mostly bad luck for Harold: he had guarded the coast all summer. Some argue he should have kept a force there."),
  factor("William landed at Pevensey with no English army or fleet there to stop him.", LUCK, "Luck", "Luck: Harold was in the north and his fleet had gone back to London."),
  factor("Many of Harold's best men were exhausted after fighting at Stamford Bridge and marching about 200 miles south.", [...LUCK, ...MISTAKES], "Luck or Harold's mistakes", "Both: Hardrada's timing was bad luck, but Harold CHOSE to rush."),
  factor("William raided and burned the land around Hastings — part of Harold's own earldom — to provoke Harold into fighting quickly.", SKILL, "William's skill", "William's skill: he lured Harold into an early battle."),
  factor("William built a wooden castle at Hastings to protect his base and ships.", SKILL, "William's skill", "William's skill: preparation and a secure base.", 2),
  factor("Some English soldiers broke out of the shield wall to chase fleeing Normans and were cut down.", [...MISTAKES, ...SKILL], "Harold's mistakes (or William's skill)", "A failure of English discipline — but William's tactics caused it, so it links both factors.", 2),
  factor("Harold was killed late in the day, leaving the English leaderless.", [...LUCK, ...SKILL], "Luck (or William's skill)", "Partly luck — perhaps a chance arrow, perhaps Norman knights (sources disagree). His brothers Gyrth and Leofwine had died too.", 2),
  {
    prompt: "The Battle of Hastings lasted most of the day. Does that suggest William's victory was certain or close?",
    answer: { type: "text", accept: ["close", "a close battle", "close-run"], display: "Close" },
    solution: "Close: battles of the time were often over quickly. The English shield wall held for hours — so no single factor made William's win certain.",
    tier: 3,
  },
  {
    prompt: "Which pro-Norman source describes the feigned retreats at Hastings — written by William's own chaplain? (name)",
    answer: { type: "text", accept: ["William of Poitiers", "Poitiers"], display: "William of Poitiers" },
    solution: "William of Poitiers: detailed but biased, writing to glorify William.",
    tier: 3,
  },
];

const NEXT: BankItem[] = [
  {
    prompt: "What happened next? After Hastings, William was crowned on Christmas Day 1066 at…?",
    answer: { type: "text", accept: ["Westminster Abbey", "Westminster"], display: "Westminster Abbey" },
    solution: "Westminster Abbey, by Ealdred, Archbishop of York.",
  },
  {
    prompt: "What happened next? After the rebellion in the North in 1069, William's men laid waste to the land. Historians call this the…?",
    answer: { type: "text", accept: ["Harrying of the North", "the Harrying of the North", "Harrying", "the Harrying"], display: "The Harrying of the North" },
    solution: "The Harrying of the North (winter 1069–70): villages, crops and animals destroyed; thousands of people died.",
  },
  {
    prompt: "To control towns quickly after 1066, the Normans built hundreds of what type of castle?",
    answer: { type: "text", accept: ["motte-and-bailey", "motte and bailey", "motte-and-bailey castles", "motte and bailey castles"], display: "Motte-and-bailey castles" },
    solution: "Motte-and-bailey castles: quick to build from earth and timber.",
  },
  {
    prompt: "What happened next? Soon after Stamford Bridge, Harold heard that William had landed at…?",
    answer: { type: "text", accept: ["Pevensey", "Pevensey Bay"], display: "Pevensey" },
    solution: "Pevensey, Sussex, on 28 September 1066 — three days after Stamford Bridge.",
    traps: [{ spec: { type: "text", accept: ["Hastings"] }, feedback: "He moved to Hastings soon after, but first landed at Pevensey." }],
  },
  {
    prompt: "What happened next? After Harold's death, the Witan in London chose which teenager as king (though he was never crowned)?",
    answer: { type: "text", accept: ["Edgar Ætheling", "Edgar Aetheling", "Edgar Atheling", "Edgar"], display: "Edgar Ætheling" },
    solution: "Edgar Ætheling — he submitted to William at Berkhamsted in December.",
  },
  {
    prompt: "After Gate Fulford (20 September 1066), which city surrendered to Hardrada?",
    answer: { type: "text", accept: ["York"], display: "York" },
    solution: "York — Hardrada then waited for hostages at Stamford Bridge.",
  },
  {
    prompt: "What happened next? Wanting to know how much his kingdom was worth, William ordered a great survey at Christmas 1085. What was it later called?",
    answer: { type: "text", accept: ["Domesday Book", "the Domesday Book", "Domesday", "Domesday survey"], display: "Domesday Book" },
    solution: "Domesday: the survey was carried out in 1086.",
  },
  {
    prompt: "Which great stone tower in London did William begin building in the 1070s?",
    answer: { type: "text", accept: ["the White Tower", "White Tower", "Tower of London", "the Tower of London"], display: "The White Tower (Tower of London)" },
    solution: "The White Tower, the keep of the Tower of London.",
  },
  {
    prompt: "In 1070 William replaced the English Archbishop Stigand with which Italian-born churchman?",
    answer: { type: "text", accept: ["Lanfranc"], display: "Lanfranc" },
    solution: "Lanfranc, who had been abbot in Caen, Normandy.",
  },
  {
    prompt: "The northern rebels of 1069 were helped by a fleet from which country?",
    answer: { type: "text", accept: ["Denmark", "the Danes", "Danes"], display: "Denmark" },
    solution: "Denmark: a Danish fleet joined the rebels and helped take York.",
    traps: [{ spec: { type: "text", accept: ["Norway"] }, feedback: "Norway's invasion was in 1066. In 1069 it was the Danes." }],
  },
  {
    prompt: "In 1086, at Salisbury, William's major landholders swore an oath promising him their…?",
    answer: { type: "text", accept: ["loyalty", "fealty", "allegiance"], display: "Loyalty (fealty)" },
    solution: "Loyalty: the Oath of Salisbury, 1086.",
  },
  {
    prompt: "What happened next? After 1066, who replaced the English earls and thegns as the great landholders?",
    answer: { type: "text", accept: ["Normans", "the Normans", "Norman lords", "Norman barons", "Norman nobles"], display: "Norman lords" },
    solution: "Norman (and other French) lords, rewarded with land for their loyalty.",
  },
  {
    prompt: "William said Harold had broken a promise sworn in Normandy in 1064 on…?",
    answer: { type: "text", accept: ["holy relics", "relics", "saints' relics", "the relics"], display: "Holy relics" },
    solution: "Holy relics — breaking such an oath was a terrible sin, which helped William win the Pope's support.",
    tier: 2,
  },
  {
    prompt: "What did William found on the site of his victory, as a penance for the bloodshed?",
    answer: { type: "text", accept: ["Battle Abbey", "an abbey", "abbey"], display: "Battle Abbey" },
    solution: "Battle Abbey, in the town now called Battle.",
    tier: 2,
  },
  {
    prompt: "What did the destruction of crops, animals and food stores in the Harrying of the North cause over the following months?",
    answer: { type: "text", accept: ["famine", "starvation", "hunger"], display: "Famine" },
    solution: "Famine: many people starved. The chronicler Orderic Vitalis, writing decades later, claimed 100,000 died — historians think his figure may be exaggerated, but the suffering was real.",
    tier: 2,
  },
  {
    prompt: "After Stamford Bridge, the Norwegian survivors needed only how many ships to sail home? (Hardrada had arrived with about 300.)",
    answer: { type: "number", value: 24 },
    solution: "24 ships, according to the Anglo-Saxon Chronicle — a sign of how crushing Harold's victory was.",
    tier: 3,
  },
  {
    prompt: "Which English city did William besiege early in 1068, before it surrendered?",
    answer: { type: "text", accept: ["Exeter"], display: "Exeter" },
    solution: "Exeter, where Harold's mother Gytha had taken refuge. William then built a castle there.",
    tier: 3,
  },
];

const cc = (prompt: string, change: boolean, solution: string, tier: 1 | 2 | 3 = 1): BankItem => ({
  prompt: `Change or continuity after 1066? ${prompt}`,
  answer: change ? { type: "text", accept: ["change"], display: "Change" } : { type: "text", accept: ["continuity"], display: "Continuity" },
  solution,
  hint: "Did it become different, or stay the same?",
  traps: [{ spec: { type: "text", accept: [change ? "continuity" : "change"] }, feedback: change ? "Something new replaced the old — that's change." : "This carried on as before — that's continuity." }],
  tier,
});

const IMPACT: BankItem[] = [
  cc("Norman French became the language of the king's court and the nobles.", true, "Change: the ruling class spoke French."),
  cc("Most peasants still farmed strips of land and owed work to a lord.", false, "Continuity: village life carried on much as before."),
  cc("England was still divided into shires, run for the king by sheriffs.", false, "Continuity: the Normans kept the efficient English shire system."),
  cc("Most English cathedrals were rebuilt in a massive new Norman style.", true, "Change: e.g. Durham, Canterbury and Winchester were rebuilt."),
  cc("Large areas became royal forests with harsh laws protecting the king's deer.", true, "Change: e.g. William created the New Forest."),
  cc("Almost all the English bishops were replaced by Normans.", true, "Change: by 1087 only one English-born bishop remained."),
  cc("English silver pennies went on being made in much the same way.", false, "Continuity: the Normans kept the well-run English coinage."),
  cc("Kings were still crowned at Westminster Abbey.", false, "Continuity: Harold in January and William at Christmas 1066 were both crowned there."),
  cc("By 1086, nearly all the great landholders were Normans or other Frenchmen.", true, "Change: the old English nobility had been swept away."),
  cc("Most ordinary people went on speaking English.", false, "Continuity: English survived among ordinary people (and later absorbed many French words)."),
  {
    prompt: "William wanted Domesday mainly to find out how much ___ he could raise. (one word)",
    answer: { type: "text", accept: ["tax", "taxes", "money", "taxation"], display: "Tax" },
    solution: "Tax — and to know who held what, which strengthened his control.",
  },
  {
    prompt: "What language did the new Norman rulers speak?",
    answer: { type: "text", accept: ["French", "Norman French"], display: "Norman French" },
    solution: "Norman French. Official documents were written in Latin.",
  },
  {
    prompt: "In which language was the Domesday Book written?",
    answer: { type: "text", accept: ["Latin"], display: "Latin" },
    solution: "Latin, the language of the Church and of government records.",
    traps: [{ spec: { type: "text", accept: ["French", "Norman French"] }, feedback: "The nobles spoke French, but records like Domesday were written in Latin." }],
    tier: 2,
  },
  {
    prompt: "Domesday got its name later because, like the Day of ___, there was no appeal against it. (one word)",
    answer: { type: "text", accept: ["Judgement", "Judgment"], display: "Judgement" },
    solution: "Judgement: ‘Domesday’ = Doomsday, the Day of Judgement.",
    tier: 2,
  },
  {
    prompt: "Which royal forest in Hampshire did William create?",
    answer: { type: "text", accept: ["New Forest", "the New Forest"], display: "The New Forest" },
    solution: "The New Forest — still called that over 900 years later.",
    tier: 2,
  },
  {
    prompt: "About how many places are recorded in the Domesday Book? (to the nearest thousand)",
    answer: { type: "number", value: 13000, tolerance: 500, display: "about 13,000" },
    solution: "About 13,000 places — an astonishing amount of information collected in roughly a year.",
    tier: 3,
  },
  {
    prompt: "Name one of the two great towns that were left out of the Domesday Book.",
    answer: { type: "text", accept: ["London", "Winchester"], display: "London or Winchester" },
    solution: "London and Winchester were left out (as was most of the far north).",
    tier: 3,
  },
  {
    prompt: "What name do historians give to the heavy building style the Normans used, with thick walls and round arches?",
    answer: { type: "text", accept: ["Romanesque", "Norman"], display: "Romanesque (Norman)" },
    solution: "Romanesque — in England often just called ‘Norman’ architecture.",
    tier: 3,
  },
];

export const drills: Drill[] = [
  {
    id: `${T}.key-dates`,
    topicId: T,
    title: "Key dates",
    level: 1,
    guideRef: "battles-of-1066",
    generate: keyDates,
  },
  {
    id: `${T}.who-was-who`,
    topicId: T,
    title: "Who was who?",
    level: 1,
    guideRef: "succession-crisis-1066",
    generate: fromBank(WHO),
  },
  {
    id: `${T}.key-terms`,
    topicId: T,
    title: "Key terms: armies, castles and feudalism",
    level: 1,
    guideRef: "feudal-system-domesday",
    generate: fromBank(TERMS),
  },
  {
    id: `${T}.order-1066`,
    topicId: T,
    title: "1066, month by month",
    level: 2,
    guideRef: "battles-of-1066",
    generate: order1066,
  },
  {
    id: `${T}.which-first`,
    topicId: T,
    title: "Which came first?",
    level: 2,
    guideRef: "securing-control",
    generate: whichFirst(EVENTS),
  },
  {
    id: `${T}.why-william-won`,
    topicId: T,
    title: "Why did William win? Sort the evidence",
    level: 2,
    guideRef: "why-william-won",
    generate: fromBank(WHY_WON),
  },
  {
    id: `${T}.what-happened-next`,
    topicId: T,
    title: "What happened next?",
    level: 2,
    guideRef: "securing-control",
    generate: fromBank(NEXT),
  },
  {
    id: `${T}.change-and-domesday`,
    topicId: T,
    title: "Change, continuity and Domesday",
    level: 3,
    guideRef: "impact-of-the-conquest",
    generate: fromBank(IMPACT),
  },
];
