// Skill drills for "King John and Magna Carta".
// Bank-based: every fact below matches lib/topics/king-john/guide.ts.
import type { AnswerSpec, Trap } from "../types.ts";
import type { Drill, DrillItem, Rng } from "./types.ts";

type Tier = 1 | 2 | 3;

/** Tier 1 = headline items; tier 2 = headline + typical detail; tier 3 = detail + finer detail. */
function inTier<T extends { tier: Tier }>(bank: readonly T[], tier: Tier): T[] {
  if (tier === 1) return bank.filter((b) => b.tier === 1);
  if (tier === 2) return bank.filter((b) => b.tier <= 2);
  return bank.filter((b) => b.tier >= 2);
}

const text = (accept: string[], display?: string): AnswerSpec => ({ type: "text", accept, display: display ?? accept[0] });
const year = (value: number): AnswerSpec => ({ type: "number", value });

// ---------------------------------------------------------------------------
// Shared answer lists
// ---------------------------------------------------------------------------

const A = {
  richard: ["Richard I", "Richard", "Richard the Lionheart", "Richard Lionheart", "the Lionheart", "Richard Coeur de Lion", "Richard 1", "King Richard", "King Richard I"],
  arthur: ["Arthur", "Arthur of Brittany", "Prince Arthur", "Duke Arthur", "Arthur of Britanny"],
  philip: ["Philip II", "Philip", "Philip Augustus", "Philip II of France", "King Philip", "Philippe II", "Philippe Auguste", "Philip 2", "Phillip II", "Phillip"],
  innocent: ["Innocent III", "Innocent", "Pope Innocent III", "Pope Innocent", "Innocent 3", "Innocent the Third"],
  langton: ["Stephen Langton", "Langton", "Archbishop Langton", "Archbishop Stephen Langton", "Stephen Langston", "Langston"],
  marshal: ["William Marshal", "Marshal", "William the Marshal", "William Marshall", "Marshall", "Sir William Marshal"],
  eleanor: ["Eleanor of Aquitaine", "Eleanor", "Queen Eleanor", "Eleanor of Acquitaine", "Eleanore of Aquitaine", "Alienor"],
  hubert: ["Hubert Walter", "Archbishop Hubert Walter", "Hubert", "Archbishop Walter"],
  louis: ["Louis", "Prince Louis", "Louis of France", "Louis VIII", "Louis the Lion", "Prince Louis of France"],
  fitzwalter: ["Robert Fitzwalter", "Fitzwalter", "Robert FitzWalter", "Robert Fitz Walter", "Fitz Walter", "FitzWalter"],
  pandulf: ["Pandulf", "Pandulph", "Pandulf Verraccio", "Pandolf"],
  otto: ["Otto IV", "Otto", "Emperor Otto", "Emperor Otto IV", "Otto 4", "Otto of Brunswick"],
  isabellaA: ["Isabella of Angouleme", "Isabella", "Isabelle of Angouleme", "Isabella of Angoulême", "Isabelle", "Queen Isabella"],
  mandeville: ["Geoffrey de Mandeville", "Mandeville", "de Mandeville", "Geoffrey Mandeville"],
  briouze: ["William de Briouze", "de Briouze", "Briouze", "William de Braose", "de Braose", "Braose"],
  lusignan: ["Hugh of Lusignan", "Hugh de Lusignan", "Lusignan", "Hugh", "the Lusignans"],
  geoffrey: ["Geoffrey", "Geoffrey of Brittany", "Geoffrey Duke of Brittany", "Duke Geoffrey", "Geoffrey Plantagenet"],
  montfort: ["Simon de Montfort", "de Montfort", "Montfort", "Simon Montfort", "Simon de Monfort"],
  wendover: ["Roger of Wendover", "Wendover", "Roger Wendover", "Roger de Wendover"],
  paris: ["Matthew Paris", "Paris", "Mathew Paris", "Matthew of Paris"],
};

// ---------------------------------------------------------------------------
// 1. Date recall
// ---------------------------------------------------------------------------

interface Dated {
  tier: Tier;
  year: number;
  /** Question form, after "In which year …". */
  q: string;
  /** Statement form. */
  s: string;
  why: string;
  trap?: [number, string];
}

const DATES: Dated[] = [
  { tier: 1, year: 1166, q: "was John born, the youngest son of Henry II and Eleanor of Aquitaine", s: "John is born, the youngest son of Henry II and Eleanor of Aquitaine", why: "John was born in **1166**. As the youngest son he had no big inheritance of his own — hence the nickname 'Lackland'." },
  { tier: 1, year: 1189, q: "did Richard I 'the Lionheart' become King of England", s: "Richard I 'the Lionheart' becomes King of England", why: "Richard I became king in **1189** when Henry II died, and soon left on the Third Crusade.", trap: [1199, "1199 is when Richard *died* and John was crowned. Richard's reign began ten years earlier."] },
  { tier: 1, year: 1199, q: "was John crowned King of England at Westminster", s: "John is crowned King of England at Westminster (27 May)", why: "John was crowned on 27 May **1199**, about seven weeks after Richard I died.", trap: [1189, "1189 is when Richard I became king. John was crowned after Richard's death, ten years later."] },
  { tier: 1, year: 1204, q: "did John lose Normandy to Philip II of France", s: "Château Gaillard and Rouen fall, and Normandy is lost to Philip II", why: "Normandy was lost in **1204**: Château Gaillard fell in March and Rouen surrendered in June.", trap: [1214, "1214 is Bouvines — John's failed attempt to win Normandy *back*. The loss came ten years earlier."] },
  { tier: 1, year: 1208, q: "did Pope Innocent III place England under an Interdict", s: "Pope Innocent III places England under an Interdict", why: "The Interdict began in March **1208** and lasted until 1214.", trap: [1209, "1209 is when John himself was *excommunicated*. The Interdict on the whole country began a year earlier."] },
  { tier: 1, year: 1209, q: "was John excommunicated by Pope Innocent III", s: "Pope Innocent III excommunicates John", why: "John was excommunicated in **1209**, a year after the Interdict began.", trap: [1208, "1208 is when the Interdict began. John was excommunicated a year later."] },
  { tier: 1, year: 1213, q: "did John submit to the Pope and make England a papal fief", s: "John submits to the Pope and makes England a papal fief", why: "John submitted to the Pope's envoy Pandulf on 15 May **1213**, turning the Pope from enemy into ally." },
  { tier: 1, year: 1214, q: "was the Battle of Bouvines fought", s: "Philip II defeats John's allies at the Battle of Bouvines", why: "Bouvines was fought on 27 July **1214**. It wrecked John's plan to regain Normandy and triggered the barons' revolt.", trap: [1204, "1204 is when Normandy was lost. Bouvines was the failed attempt to win it back, ten years later."] },
  { tier: 1, year: 1215, q: "was Magna Carta agreed at Runnymede", s: "Magna Carta is agreed at Runnymede (dated 15 June)", why: "Magna Carta is dated 15 June **1215**.", trap: [1216, "1216 is the year John died. Magna Carta came the year before."] },
  { tier: 1, year: 1216, q: "did King John die at Newark", s: "John dies at Newark, after losing baggage in the Wash", why: "John died on the night of 18–19 October **1216**; his nine-year-old son became Henry III.", trap: [1215, "1215 is Magna Carta. John died the following year, during the civil war."] },
  { tier: 2, year: 1200, q: "did John marry Isabella of Angoulême", s: "John marries Isabella of Angoulême, giving Philip II an excuse for war", why: "John married Isabella in **1200**. She was already promised to Hugh of Lusignan, whose family appealed to Philip II." },
  { tier: 2, year: 1202, q: "did John capture his nephew Arthur at Mirebeau", s: "John wins at Mirebeau and captures his nephew Arthur", why: "At Mirebeau on 1 August **1202** John captured Arthur and more than 200 knights." },
  { tier: 2, year: 1203, q: "did Arthur of Brittany vanish in John's custody", s: "Arthur of Brittany vanishes in John's custody", why: "Arthur vanished in **1203**; most historians believe John had him killed." },
  { tier: 2, year: 1205, q: "did Archbishop Hubert Walter die, starting the quarrel over Canterbury", s: "Archbishop Hubert Walter dies, starting a fight over who will replace him", why: "Hubert Walter died in **1205**; the quarrel over his successor led to the Interdict." },
  { tier: 2, year: 1207, q: "did Pope Innocent III consecrate Stephen Langton as Archbishop of Canterbury", s: "Pope Innocent III consecrates Stephen Langton as Archbishop of Canterbury", why: "Langton was consecrated in **1207**; John kept him out of England until 1213." },
  { tier: 2, year: 1225, q: "did Henry III issue the version of Magna Carta that became the standard text", s: "Henry III reissues Magna Carta in return for a tax; this becomes the standard version", why: "The **1225** reissue became the standard text of Magna Carta." },
  { tier: 2, year: 1265, q: "did Simon de Montfort's Parliament, including knights and townsmen, meet", s: "Simon de Montfort's Parliament meets, including knights and townsmen", why: "De Montfort's Parliament met in January **1265** — a step towards the House of Commons." },
  { tier: 3, year: 1192, q: "was Richard I captured on his way home from the Third Crusade", s: "Richard I is captured on his way home from crusade", why: "Richard was captured in December **1192** and handed to the German emperor, who demanded 150,000 marks." },
  { tier: 3, year: 1194, q: "was Richard I freed from captivity, after which he forgave John's rebellion", s: "Richard I is freed from captivity and forgives John's rebellion", why: "Richard was freed in **1194** once the ransom was raised, and he forgave John." },
  { tier: 3, year: 1207, q: "did John collect a tax of one-thirteenth on income and movable goods", s: "John collects a tax of one-thirteenth on income and movable goods", why: "The thirteenth of **1207** raised a huge sum for the war to regain Normandy." },
  { tier: 3, year: 1210, q: "did the wife and eldest son of William de Briouze die in John's prison", s: "The wife and eldest son of the baron William de Briouze die in John's prison", why: "In **1210** John hunted down the de Briouze family — a notorious example of his cruelty. He also campaigned in Ireland that year." },
  { tier: 3, year: 1212, q: "was a baronial plot against John uncovered", s: "A baronial plot against John is uncovered", why: "The plot of **1212** showed how unpopular John had become while excommunicated." },
  { tier: 3, year: 1217, q: "was the Charter of the Forest issued alongside a reissue of Magna Carta", s: "The Charter of the Forest is issued alongside a reissue of Magna Carta", why: "In **1217**, after Prince Louis left England, Magna Carta was reissued together with the new Charter of the Forest." },
  { tier: 3, year: 1297, q: "was Magna Carta entered on England's official statute rolls", s: "Magna Carta is entered on England's official statute rolls", why: "In **1297** the 1225 text was entered on the statute rolls." },
  { tier: 3, year: 1628, q: "did Parliament use Magna Carta in the Petition of Right against Charles I", s: "Parliament uses Magna Carta in the Petition of Right against Charles I", why: "The Petition of Right of **1628**, led by Sir Edward Coke, challenged imprisonment without trial and taxes without Parliament's consent." },
];

// ---------------------------------------------------------------------------
// 2. Who's who
// ---------------------------------------------------------------------------

interface Person {
  tier: Tier;
  accept: string[];
  clues: string[];
  note: string;
  trap?: Trap;
}

const PEOPLE: Person[] = [
  {
    tier: 1,
    accept: A.richard,
    clues: [
      "John's older brother, king 1189–1199, who led the Third Crusade.",
      "Captured on his way home from crusade and ransomed for 150,000 marks, he forgave John's rebellion.",
      "Nicknamed 'the Lionheart', he died in April 1199 leaving no legitimate children.",
    ],
    note: "**Richard I** spent only about six months of his ten-year reign in England.",
  },
  {
    tier: 1,
    accept: A.arthur,
    clues: [
      "John's nephew, son of his older brother Geoffrey, who had a rival claim to the throne in 1199.",
      "Captured by John at Mirebeau in 1202, he vanished in 1203 — probably murdered.",
      "Aged only 12 in 1199, this rival claimant was backed by Philip II of France.",
    ],
    note: "**Arthur of Brittany** was the son of an *older* brother — but a boy backed by England's enemy.",
  },
  {
    tier: 1,
    accept: A.philip,
    clues: [
      "King of France 1180–1223, John's overlord for his French lands and his great rival.",
      "He conquered Normandy in 1204 and defeated John's allies at Bouvines in 1214.",
      "In 1202 he declared John's French lands forfeit after John refused to attend his court.",
    ],
    note: "**Philip II** of France was patient, clever and determined to break up the Angevin empire.",
    trap: { spec: text(A.louis), feedback: "Louis was Philip's son — the prince who invaded England in 1216. This is his father." },
  },
  {
    tier: 1,
    accept: A.innocent,
    clues: [
      "The Pope who placed England under an Interdict in 1208.",
      "The Pope who excommunicated John in 1209 and declared Magna Carta null and void in August 1215.",
      "The Pope who chose Stephen Langton as Archbishop of Canterbury and, from 1213, was John's overlord.",
    ],
    note: "**Pope Innocent III** (Pope 1198–1216) was John's enemy until 1213 and his protector afterwards.",
    trap: { spec: text(A.langton), feedback: "Langton was the archbishop the Pope chose. The question asks for the Pope himself." },
  },
  {
    tier: 1,
    accept: A.langton,
    clues: [
      "The Archbishop of Canterbury chosen by the Pope, whom John kept out of England until 1213.",
      "An English scholar who had taught in Paris; consecrated archbishop in 1207, he later helped the barons frame their demands.",
    ],
    note: "**Stephen Langton** was consecrated in 1207 and finally entered England after John submitted in 1213.",
    trap: { spec: text(A.hubert), feedback: "Hubert Walter was the archbishop who died in 1205. This is the man chosen to replace him." },
  },
  {
    tier: 1,
    accept: A.marshal,
    clues: [
      "The great knight who backed John in 1199 and later, as regent for Henry III, reissued Magna Carta in 1216.",
      "A loyal baron who helped arrange the talks at Runnymede; his verse biography was written in the 1220s.",
    ],
    note: "**William Marshal** backed John in 1199 and later ruled as regent for the young Henry III.",
  },
  {
    tier: 1,
    accept: A.eleanor,
    clues: [
      "John's mother, Duchess of Aquitaine, who backed him for the throne in 1199.",
      "Henry II's wife; John rescued her at Mirebeau in 1202, and she died in 1204.",
    ],
    note: "**Eleanor of Aquitaine** brought the huge duchy of Aquitaine to the Angevin empire.",
    trap: { spec: text(A.isabellaA), feedback: "Isabella of Angoulême was John's wife. This is his mother." },
  },
  {
    tier: 2,
    accept: A.hubert,
    clues: [
      "The Archbishop of Canterbury who crowned John in 1199; his death in 1205 started the quarrel with the Pope.",
    ],
    note: "**Hubert Walter** was a key royal adviser; the fight over his successor led to the Interdict.",
    trap: { spec: text(A.langton), feedback: "Langton was chosen to *replace* this archbishop after he died in 1205." },
  },
  {
    tier: 2,
    accept: A.louis,
    clues: [
      "The French prince invited by the rebel barons to be their king, who landed in England in May 1216.",
      "Philip II's son, who left England after royal victories at Lincoln and at sea in 1217.",
    ],
    note: "**Prince Louis** of France was welcomed in London in 1216 but left in 1217.",
    trap: { spec: text(A.philip), feedback: "Philip II was the King of France — the invader was his son." },
  },
  {
    tier: 2,
    accept: A.fitzwalter,
    clues: ["Leader of the rebel barons in 1215, who called himself 'Marshal of the Army of God'."],
    note: "**Robert Fitzwalter** led the rebels who renounced their homage in May 1215.",
    trap: { spec: text(A.marshal), feedback: "William Marshal stayed loyal to John. The rebel leader was a different man." },
  },
  {
    tier: 2,
    accept: A.pandulf,
    clues: ["The Pope's envoy to whom John submitted on 15 May 1213, making England a papal fief."],
    note: "**Pandulf** received John's submission on behalf of Innocent III.",
  },
  {
    tier: 2,
    accept: A.montfort,
    clues: ["The rebel baron who summoned a Parliament in 1265 that included knights from the shires and burgesses from the towns."],
    note: "**Simon de Montfort**'s Parliament of 1265 was a step towards the House of Commons.",
  },
  {
    tier: 3,
    accept: A.otto,
    clues: ["John's nephew, the German emperor, whose army was crushed by Philip II at Bouvines in 1214."],
    note: "**Emperor Otto IV** led the northern prong of John's 1214 plan.",
  },
  {
    tier: 3,
    accept: A.isabellaA,
    clues: ["The bride John married in 1200, who was already promised to Hugh of Lusignan."],
    note: "John's marriage to **Isabella of Angoulême** gave Philip II a legal excuse for war.",
    trap: { spec: text(A.eleanor), feedback: "Eleanor of Aquitaine was John's mother. This is the bride he married in 1200." },
  },
  {
    tier: 3,
    accept: A.mandeville,
    clues: ["The baron charged 20,000 marks in 1214 for permission to marry the wealthy Isabella of Gloucester."],
    note: "**Geoffrey de Mandeville**'s huge fine shows how John used marriages to raise money.",
  },
  {
    tier: 3,
    accept: A.briouze,
    clues: ["The baron whose family was hunted down in 1210; his wife and eldest son died in John's prison."],
    note: "The fate of the **de Briouze** family became a symbol of John's cruelty.",
  },
  {
    tier: 3,
    accept: A.lusignan,
    clues: ["The lord in Poitou whose fiancée John married in 1200; his family appealed to Philip II."],
    note: "**Hugh of Lusignan**'s appeal to Philip II led to John's French lands being declared forfeit in 1202.",
  },
  {
    tier: 3,
    accept: A.geoffrey,
    clues: ["John's older brother, Duke of Brittany, who died in 1186 and was the father of Arthur."],
    note: "**Geoffrey** was older than John, which is why his son Arthur had a claim in 1199.",
    trap: { spec: text(A.arthur), feedback: "Arthur was the son. The question asks for his father." },
  },
];

// ---------------------------------------------------------------------------
// 3. Key terms
// ---------------------------------------------------------------------------

interface Term {
  tier: Tier;
  accept: string[];
  defs: string[];
  note: string;
  trap?: Trap;
}

const TERMS: Term[] = [
  {
    tier: 1,
    accept: ["Angevin empire", "Angevin", "Angevins", "Angevin lands", "Plantagenet empire", "Angevin Empire"],
    defs: [
      "Historians' name for the lands ruled by Henry II and his sons — England plus about half of France — named after Anjou.",
      "The family 'empire' John inherited in 1199, named after the French county of Anjou.",
    ],
    note: "The **Angevin empire** included England, Normandy, Anjou, Maine, Touraine and Aquitaine.",
  },
  {
    tier: 1,
    accept: ["Lackland", "John Lackland", "Lack-land", "Lack land"],
    defs: ["John's nickname as the youngest son, who was not given major lands of his own."],
    note: "**'Lackland'**: his father's lands had already been promised to his older brothers.",
    trap: { spec: text(["Softsword"]), feedback: "'Softsword' came later, after he lost Normandy. This nickname was from his youth." },
  },
  {
    tier: 1,
    accept: ["Softsword", "Soft sword", "Soft-sword"],
    defs: ["The mocking nickname John's critics gave him after he lost Normandy in 1204."],
    note: "**'Softsword'** mocked John's failure to defend Normandy.",
    trap: { spec: text(["Lackland"]), feedback: "'Lackland' was his nickname as a landless youngest son. This one came after 1204." },
  },
  {
    tier: 1,
    accept: ["scutage", "shield money", "scutage tax"],
    defs: [
      "'Shield money' — a payment barons made to the king instead of providing military service.",
      "The payment John levied eleven times, which clause 12 of Magna Carta said needed the kingdom's general consent.",
    ],
    note: "John levied **scutage** eleven times — far more often than earlier kings.",
    trap: { spec: text(["relief", "reliefs"]), feedback: "A relief was paid to inherit land. This payment replaced military service." },
  },
  {
    tier: 1,
    accept: ["Interdict", "the Interdict", "papal interdict"],
    defs: [
      "The Pope's ban on most church services across a whole country — imposed on England from 1208 to 1214.",
      "A punishment for a whole kingdom: no normal church services, no church weddings, the dead buried without the full service.",
    ],
    note: "The **Interdict** punished the whole country; excommunication punished one person.",
    trap: { spec: text(["excommunication", "excommunicated"]), feedback: "Excommunication cuts off one person. This punishment hit a whole country." },
  },
  {
    tier: 1,
    accept: ["excommunication", "excommunicated", "excommunicate", "excommunicating"],
    defs: [
      "Cutting a person off from the Church and its sacraments — done to John in 1209.",
      "A Church punishment for one person which, in theory, released his subjects from their duty to obey him.",
    ],
    note: "John's **excommunication** (1209) made it easier for enemies to plot against him.",
    trap: { spec: text(["Interdict"]), feedback: "The Interdict hit the whole country. This punishment was aimed at one person — John." },
  },
  {
    tier: 1,
    accept: ["papal fief", "fief", "fief of the Pope", "papal fiefdom", "fiefdom", "papal vassal"],
    defs: ["Land held from the Pope as overlord — what John made England and Ireland in 1213, paying 1,000 marks a year."],
    note: "Making England a **papal fief** turned Innocent III into John's protector.",
  },
  {
    tier: 1,
    accept: ["villein", "villeins", "serf", "serfs", "unfree peasant", "unfree peasants"],
    defs: ["An unfree peasant, bound to a lord — not protected by Magna Carta's 'free man' clauses."],
    note: "**Villeins** were a large part of the population, so Magna Carta did not protect everyone.",
  },
  {
    tier: 1,
    accept: ["homage", "their homage", "homage and fealty", "fealty"],
    defs: ["The formal bond of loyalty between a vassal and his lord, which the rebel barons renounced on 5 May 1215."],
    note: "By renouncing their **homage**, the barons broke their bond of loyalty to John.",
  },
  {
    tier: 1,
    accept: ["security clause", "the security clause", "clause 61", "61"],
    defs: ["The name for the clause of Magna Carta that let 25 barons enforce the charter, even by seizing the king's castles and lands."],
    note: "The **security clause** (61) in effect made rebellion legal — no king would accept it for long.",
  },
  {
    tier: 1,
    accept: ["crusade", "crusades", "a crusade", "Third Crusade", "the Third Crusade"],
    defs: ["A holy war fought by Christians for control of the Holy Land — Richard I led the Third one (1190–1192)."],
    note: "Richard's **crusade** and ransom drained Angevin money before John even became king.",
  },
  {
    tier: 2,
    accept: ["relief", "reliefs", "a relief"],
    defs: ["A payment to the king for the right to inherit land — John charged very heavy ones."],
    note: "Heavy **reliefs** were a key grievance; clause 2 of Magna Carta fixed them.",
    trap: { spec: text(["scutage"]), feedback: "Scutage replaced military service. This payment was for inheriting land." },
  },
  {
    tier: 2,
    accept: ["vassal", "vassals", "a vassal"],
    defs: ["Someone who holds land from a lord in return for loyalty and service — John was this to Philip II for his French lands."],
    note: "As Philip's **vassal**, John could be summoned to Philip's court — which gave Philip his excuse for war in 1202.",
  },
  {
    tier: 2,
    accept: ["baron", "barons", "tenant-in-chief", "tenants-in-chief", "tenant in chief", "tenants in chief"],
    defs: ["A great landholder who held land directly from the king in return for military service."],
    note: "The **barons** forced John to accept Magna Carta in 1215.",
  },
  {
    tier: 2,
    accept: ["chronicle", "chronicles", "a chronicle", "annals"],
    defs: ["A year-by-year account of events, often written by monks — Roger of Wendover wrote one that was hostile to John."],
    note: "**Chronicles** are vivid but often biased: always check who wrote them, when and why.",
  },
  {
    tier: 2,
    accept: ["sheriff", "sheriffs", "sheriffship", "sheriffships", "shire reeve"],
    defs: ["The king's official in each shire who collected royal revenue — John sold these posts."],
    note: "Selling the office of **sheriff** was one of John's many ways of raising money.",
  },
  {
    tier: 2,
    accept: ["regent", "a regent", "regency"],
    defs: ["A person who rules on behalf of a child monarch — William Marshal did this for Henry III."],
    note: "As **regent**, William Marshal reissued Magna Carta in 1216 to win rebels back.",
  },
  {
    tier: 2,
    accept: ["seal", "Great Seal", "the Great Seal", "sealed", "royal seal"],
    defs: ["A wax impression used to authenticate royal documents — how Magna Carta was approved instead of with a signature."],
    note: "Magna Carta was **sealed**, not signed.",
  },
  {
    tier: 3,
    accept: ["wardship", "wardships"],
    defs: ["The king's right to control an under-age heir's lands, and take their profits, until the heir came of age."],
    note: "**Wardship** was profitable for the king and resented by the barons.",
  },
  {
    tier: 3,
    accept: ["royal forest", "royal forests", "forest", "forests", "the forest"],
    defs: ["Large areas under special harsh laws protecting the king's hunting — the subject of a separate charter in 1217."],
    note: "The **royal forest** laws were eased by the Charter of the Forest (1217).",
  },
  {
    tier: 3,
    accept: ["mercenaries", "mercenary", "mercenary soldiers", "foreign knights"],
    defs: ["Paid professional soldiers, many from abroad, whom clause 51 of Magna Carta promised to send away once peace returned."],
    note: "John relied on paid **mercenaries**, which angered the barons.",
  },
  {
    tier: 3,
    accept: ["disputed succession", "succession dispute", "succession crisis", "contested succession"],
    defs: ["When more than one person claims the throne and there is no fixed rule — as in 1199 between John and Arthur."],
    note: "1199 was a **disputed succession**: John won through speed and support.",
  },
  {
    tier: 3,
    accept: ["overlord", "overlords", "liege lord", "liege", "suzerain"],
    defs: ["A lord to whom another ruler owes loyalty for his lands — Philip II was this for John's French lands, and the Pope for England after 1213."],
    note: "Having an **overlord** meant owing loyalty and service — and could be used as a legal weapon.",
  },
  {
    tier: 3,
    accept: ["aid", "aids", "an aid", "feudal aid"],
    defs: ["A special payment from vassals which clause 12 allowed without consent only to ransom the king, knight his eldest son or marry his eldest daughter."],
    note: "Clause 12 limited both scutage and **aids**.",
  },
];

// ---------------------------------------------------------------------------
// 4. Places
// ---------------------------------------------------------------------------

interface Place {
  tier: Tier;
  accept: string[];
  clues: string[];
  note: string;
}

const PLACES: Place[] = [
  { tier: 1, accept: ["Runnymede", "Runnymeade", "Runnymead", "Runnimede"], clues: ["the meadow beside the Thames, between Windsor and Staines, where Magna Carta was agreed in June 1215"], note: "**Runnymede** — the charter was dated 15 June 1215." },
  { tier: 1, accept: ["Westminster", "Westminster Abbey"], clues: ["the place where John was crowned on 27 May 1199"], note: "John was crowned at **Westminster** by Archbishop Hubert Walter." },
  { tier: 1, accept: ["Normandy"], clues: ["the duchy, ruled by John's family since before 1066, that he lost to Philip II in 1204", "the land that won John the nickname 'Softsword' when he lost it"], note: "Losing **Normandy** (1204) was the turning point of the reign." },
  { tier: 1, accept: ["the Wash", "Wash"], clues: ["the tidal estuary in eastern England where John lost part of his baggage train in October 1216", "the place where, legend says, John's crown jewels were swallowed by the sea"], note: "John lost baggage crossing **the Wash**; what was really lost is unknown — the treasure story is legend." },
  { tier: 1, accept: ["London", "City of London", "the City of London"], clues: ["the city that opened its gates to the rebel barons on 17 May 1215", "England's richest city, whose capture by the rebels forced John to negotiate in 1215"], note: "With **London** in rebel hands, John could not win a quick victory." },
  { tier: 1, accept: ["Canterbury"], clues: ["the city whose archbishopric John and Pope Innocent III fought over after 1205"], note: "The Archbishop of **Canterbury** was the most important churchman in England." },
  { tier: 1, accept: ["Bouvines"], clues: ["the battlefield in Flanders where Philip II crushed John's allies on 27 July 1214"], note: "**Bouvines** wrecked John's plan to regain Normandy." },
  { tier: 1, accept: ["Newark", "Newark Castle", "Newark-on-Trent", "Newark on Trent"], clues: ["the town where John died on the night of 18–19 October 1216"], note: "John died at **Newark**, ill with dysentery." },
  { tier: 2, accept: ["Mirebeau"], clues: ["the place where John won a brilliant victory in 1202, rescuing his mother and capturing Arthur"], note: "**Mirebeau** (1202) — a victory followed by mistakes." },
  { tier: 2, accept: ["Château Gaillard", "Chateau Gaillard", "Gaillard", "Chateau-Gaillard"], clues: ["Richard I's mighty castle guarding the road to Rouen, which fell to Philip II in March 1204"], note: "The fall of **Château Gaillard** opened the way to Rouen." },
  { tier: 2, accept: ["Rouen"], clues: ["the chief city of Normandy, which surrendered to Philip II in June 1204"], note: "When **Rouen** surrendered, Normandy was lost." },
  { tier: 2, accept: ["Rochester", "Rochester Castle"], clues: ["the castle John besieged and captured in October–November 1215, during the First Barons' War"], note: "John took **Rochester** Castle in 1215." },
  { tier: 2, accept: ["St Albans", "Saint Albans", "St Albans Abbey", "St. Albans"], clues: ["the abbey where the monk-chroniclers Roger of Wendover and Matthew Paris wrote their hostile accounts of John"], note: "Both chroniclers were monks of **St Albans**, a Church that had suffered under the Interdict." },
  { tier: 2, accept: ["Gascony", "Gascogne"], clues: ["the land in the far south-west of France that John kept after losing Normandy"], note: "John kept England and **Gascony** after 1204." },
  { tier: 2, accept: ["Anjou"], clues: ["the French county that gave the Angevin empire its name"], note: "'Angevin' means 'from **Anjou**'." },
  { tier: 2, accept: ["Ireland"], clues: ["the land John was made Lord of, where he campaigned successfully in 1210"], note: "John's first visit to **Ireland** in 1185 was a fiasco; his 1210 campaign went much better." },
  { tier: 3, accept: ["Chinon"], clues: ["the castle where John seized the royal treasure as soon as Richard died in 1199"], note: "Seizing the treasure at **Chinon** was part of John's fast move for the crown." },
  { tier: 3, accept: ["Damme"], clues: ["the port where an English fleet destroyed Philip II's ships weeks after John submitted to the Pope in 1213"], note: "The victory at **Damme** (1213) ended Philip's invasion plan." },
  { tier: 3, accept: ["La Roche-aux-Moines", "Roche-aux-Moines", "La Roche aux Moines", "Roche aux Moines"], clues: ["the place where John's army retreated in early July 1214 because the Poitevin lords refused to fight"], note: "The retreat at **La Roche-aux-Moines** came weeks before Bouvines." },
  { tier: 3, accept: ["Poitou"], clues: ["the region where John himself landed in 1214 for the southern prong of his attack on Philip II"], note: "John's **Poitou** campaign of 1214 failed." },
  { tier: 3, accept: ["Lincoln", "Battle of Lincoln"], clues: ["the city where a royal victory in 1217 helped persuade Prince Louis to leave England"], note: "Victories at **Lincoln** and at sea off Sandwich ended Louis's hopes." },
  { tier: 3, accept: ["Falaise"], clues: ["the Norman castle where Arthur was first imprisoned after his capture in 1202"], note: "Arthur was held at **Falaise** and then Rouen before he vanished in 1203." },
];

// ---------------------------------------------------------------------------
// 5. Magna Carta clauses
// ---------------------------------------------------------------------------

interface Clause {
  tier: Tier;
  n: number;
  clues: string[];
  note: string;
  traps?: Trap[];
}

const CLAUSES: Clause[] = [
  {
    tier: 1,
    n: 1,
    clues: ["says that the English Church shall be free, with its rights and liberties undiminished", "protected the Church's freedom, including free elections — the issue behind the Langton quarrel"],
    note: "It mainly protected the **Church**. It is one of the few clauses still law today.",
  },
  {
    tier: 1,
    n: 12,
    clues: ["says that no 'scutage' or 'aid' may be levied in the kingdom without its general consent", "tried to stop the king demanding shield money again and again without asking the kingdom"],
    note: "It mainly protected the **barons**, who had paid scutage eleven times. It was dropped from the 1216 reissue.",
    traps: [{ spec: year(13), feedback: "Clause 13 is about London's liberties. The scutage clause is the one before it." }],
  },
  {
    tier: 1,
    n: 39,
    clues: [
      "says that no free man shall be seized or imprisoned except by the lawful judgement of his equals or by the law of the land",
      "tried to stop the king jailing men or taking their lands without a fair judgement",
    ],
    note: "It protected **free men** — not villeins. Combined with clause 40, it is still law today.",
    traps: [{ spec: year(40), feedback: "Clause 40 is about justice not being sold, denied or delayed. Imprisonment is the clause just before." }],
  },
  {
    tier: 1,
    n: 40,
    clues: ["says: 'To no one will we sell, to no one deny or delay right or justice'", "promised that justice would not be sold, denied or delayed"],
    note: "In theory it helped **anyone seeking justice**. Combined with clause 39, it is still law today.",
    traps: [{ spec: year(39), feedback: "Clause 39 is about imprisonment without lawful judgement. Selling justice is the clause just after." }],
  },
  {
    tier: 1,
    n: 61,
    clues: [
      "lets twenty-five barons enforce the charter, even by seizing the king's castles and lands",
      "is known as the 'security clause', setting up a group of barons who could act against the king if he broke the charter",
    ],
    note: "The **security clause** in effect made rebellion legal. It was dropped from the 1216 reissue.",
    traps: [{ spec: year(25), feedback: "25 is the number of barons in the clause, not the clause number." }],
  },
  {
    tier: 2,
    n: 8,
    clues: ["says that no widow shall be compelled to marry, so long as she wishes to remain without a husband"],
    note: "It protected **wealthy widows**, whose remarriage the king had been selling.",
  },
  {
    tier: 2,
    n: 13,
    clues: ["says that the City of London shall enjoy all its ancient liberties and free customs"],
    note: "It protected **London**. It is one of the few clauses still law today.",
    traps: [{ spec: year(12), feedback: "Clause 12 is the scutage clause. London's liberties come in the clause just after." }],
  },
  {
    tier: 2,
    n: 33,
    clues: ["orders all fish-weirs to be removed from the Thames, the Medway and throughout England, except on the sea coast"],
    note: "It helped people who used the **rivers** for boats and trade.",
  },
  {
    tier: 2,
    n: 41,
    clues: ["says merchants may enter and leave England safely to buy and sell"],
    note: "It protected **merchants** and trade.",
  },
  {
    tier: 3,
    n: 2,
    clues: ["fixes the relief an heir must pay to inherit — £100 for the heir of an earl or a baron"],
    note: "It protected **barons' heirs** from John's huge reliefs.",
  },
  {
    tier: 3,
    n: 14,
    clues: ["explains how to obtain the kingdom's 'general consent' by summoning archbishops, bishops, abbots, earls and greater barons"],
    note: "It set out who must be **consulted** before scutage or an aid — the great men of the kingdom.",
  },
  {
    tier: 3,
    n: 20,
    clues: ["says a free man shall be fined only in proportion to the seriousness of his offence"],
    note: "It protected **free men** from ruinous fines.",
  },
  {
    tier: 3,
    n: 35,
    clues: ["sets standard measures for wine, ale and corn throughout the kingdom"],
    note: "It helped **trade** by making measures the same everywhere.",
  },
  {
    tier: 3,
    n: 45,
    clues: ["promises to appoint as justices, constables, sheriffs or other officials only men who know the law of the realm"],
    note: "It answered complaints about John's **officials**.",
  },
  {
    tier: 3,
    n: 49,
    clues: ["promises to return at once all hostages handed to the king as security for peace or loyal service"],
    note: "It answered the barons' anger about **hostages** — sons taken to guarantee loyalty.",
  },
  {
    tier: 3,
    n: 51,
    clues: ["promises to remove all foreign knights, bowmen and mercenaries from the kingdom as soon as peace is restored"],
    note: "It answered the barons' anger at John's **foreign mercenaries**.",
  },
];

// ---------------------------------------------------------------------------
// 6 & 9. Chronology bank (one event per year, short labels)
// ---------------------------------------------------------------------------

interface Ev {
  tier: Tier;
  year: number;
  label: string;
  accept: string[];
}

const EVENTS: Ev[] = [
  { tier: 1, year: 1166, label: "John is born", accept: ["John is born", "John born", "John's birth", "birth of John", "John was born"] },
  { tier: 1, year: 1189, label: "Richard I becomes king", accept: ["Richard I becomes king", "Richard becomes king", "Richard became king", "Richard I crowned", "Richard crowned", "Richard's coronation"] },
  { tier: 1, year: 1199, label: "John is crowned", accept: ["John is crowned", "John crowned", "John's coronation", "coronation of John", "John became king", "John becomes king"] },
  { tier: 1, year: 1204, label: "Normandy is lost", accept: ["Normandy is lost", "Normandy lost", "loss of Normandy", "Normandy", "fall of Normandy", "John lost Normandy"] },
  { tier: 1, year: 1208, label: "the Interdict begins", accept: ["the Interdict begins", "Interdict", "the Interdict", "Interdict begins", "start of the Interdict"] },
  { tier: 1, year: 1213, label: "John submits to the Pope", accept: ["John submits to the Pope", "John submits", "submission to the Pope", "submission", "papal fief", "John's submission"] },
  { tier: 1, year: 1214, label: "the Battle of Bouvines", accept: ["the Battle of Bouvines", "Bouvines", "Battle of Bouvines"] },
  { tier: 1, year: 1215, label: "Magna Carta", accept: ["Magna Carta", "Magna Charta", "Magna Carta sealed", "Runnymede"] },
  { tier: 1, year: 1216, label: "John dies", accept: ["John dies", "John died", "John's death", "death of John"] },
  { tier: 2, year: 1200, label: "John marries Isabella of Angoulême", accept: ["John marries Isabella of Angoulême", "John marries Isabella", "John married Isabella", "marriage to Isabella", "John's marriage", "Isabella"] },
  { tier: 2, year: 1202, label: "the Battle of Mirebeau", accept: ["the Battle of Mirebeau", "Mirebeau", "Battle of Mirebeau", "Arthur captured", "capture of Arthur"] },
  { tier: 2, year: 1203, label: "Arthur vanishes", accept: ["Arthur vanishes", "Arthur vanished", "Arthur disappears", "Arthur's disappearance", "disappearance of Arthur", "Arthur's death"] },
  { tier: 2, year: 1205, label: "Hubert Walter dies", accept: ["Hubert Walter dies", "Hubert Walter died", "death of Hubert Walter", "Hubert Walter's death", "Hubert Walter"] },
  { tier: 2, year: 1207, label: "Stephen Langton is consecrated", accept: ["Stephen Langton is consecrated", "Langton consecrated", "Langton", "Stephen Langton", "consecration of Langton", "Langton made archbishop"] },
  { tier: 2, year: 1209, label: "John is excommunicated", accept: ["John is excommunicated", "John excommunicated", "excommunication", "John's excommunication", "excommunicated"] },
  { tier: 2, year: 1265, label: "Simon de Montfort's Parliament", accept: ["Simon de Montfort's Parliament", "de Montfort's Parliament", "de Montfort Parliament", "Montfort's Parliament", "de Montfort", "Simon de Montfort"] },
  { tier: 2, year: 1628, label: "the Petition of Right", accept: ["the Petition of Right", "Petition of Right", "Petition of Rights"] },
  { tier: 3, year: 1192, label: "Richard I is captured", accept: ["Richard I is captured", "Richard captured", "Richard I captured", "capture of Richard", "Richard's capture", "Richard is captured"] },
  { tier: 3, year: 1194, label: "Richard I is freed", accept: ["Richard I is freed", "Richard freed", "Richard is freed", "Richard released", "release of Richard", "Richard's release"] },
  { tier: 3, year: 1210, label: "the de Briouze family is hunted down", accept: ["the de Briouze family is hunted down", "de Briouze", "de Briouze family", "Briouze", "de Braose", "the de Briouze family"] },
  { tier: 3, year: 1212, label: "a baronial plot is uncovered", accept: ["a baronial plot is uncovered", "baronial plot", "the plot", "plot", "barons' plot", "plot uncovered"] },
  { tier: 3, year: 1217, label: "the Charter of the Forest", accept: ["the Charter of the Forest", "Charter of the Forest", "Forest Charter"] },
  { tier: 3, year: 1225, label: "Henry III's standard reissue of Magna Carta", accept: ["Henry III's standard reissue of Magna Carta", "Henry III's reissue", "the reissue", "reissue", "Henry III reissue"] },
  { tier: 3, year: 1791, label: "the US Bill of Rights", accept: ["the US Bill of Rights", "US Bill of Rights", "Bill of Rights", "American Bill of Rights"] },
  { tier: 3, year: 1948, label: "the Universal Declaration of Human Rights", accept: ["the Universal Declaration of Human Rights", "Universal Declaration of Human Rights", "UDHR", "Universal Declaration", "Declaration of Human Rights"] },
];

function evPool(tier: Tier): Ev[] {
  // Chronology keeps headline events in every tier as anchors.
  if (tier === 1) return EVENTS.filter((e) => e.tier === 1);
  if (tier === 2) return EVENTS.filter((e) => e.tier <= 2);
  return EVENTS;
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function pickPair(rng: Rng, tier: Tier, maxGap: number): [Ev, Ev] {
  const pool = evPool(tier);
  let a = pool[0], b = pool[1];
  for (let i = 0; i < 60; i++) {
    a = rng.pick(pool);
    b = rng.pick(pool);
    const gap = Math.abs(a.year - b.year);
    if (gap > 0 && gap <= maxGap && (tier < 3 || a.tier >= 2 || b.tier >= 2)) break;
  }
  if (a.year === b.year) b = pool.find((e) => e.year !== a.year)!;
  return [a, b];
}

// ---------------------------------------------------------------------------
// 7. Barons' grievances: money, justice or war?
// ---------------------------------------------------------------------------

type GType = "money" | "justice" | "war";

const G_ACCEPT: Record<GType, string[]> = {
  money: ["money", "money demands", "taxes", "tax", "taxation", "finance", "financial", "fines"],
  justice: ["justice", "arbitrary justice", "injustice", "unfair justice", "unfair treatment", "harsh treatment", "treatment", "cruelty"],
  war: ["war", "wars", "losing wars", "military", "military failure", "defeat", "war and defeat"],
};

const G_WHY: Record<GType, string> = {
  money: "It is about the king **taking money** from the barons.",
  justice: "It is about **unfair or harsh treatment** — punishment at the king's will, not by the law.",
  war: "It is about **defeat and lost lands** — a king who lost wars lost prestige and support.",
};

interface Grievance {
  tier: Tier;
  type: GType;
  s: string;
  link: string;
}

const GRIEVANCES: Grievance[] = [
  { tier: 1, type: "money", s: "John levied scutage eleven times — far more often than earlier kings.", link: "Clause 12 said no scutage without the kingdom's general consent." },
  { tier: 1, type: "money", s: "Geoffrey de Mandeville was charged 20,000 marks for permission to marry a rich heiress (1214).", link: "Fines like this were among the barons' fiercest complaints." },
  { tier: 1, type: "money", s: "Heirs had to pay enormous reliefs before they could inherit their fathers' lands.", link: "Clause 2 fixed reliefs at £100 for an earl's or baron's heir." },
  { tier: 1, type: "money", s: "In 1207 John collected a tax of one-thirteenth on income and movable goods.", link: "It raised a huge sum for the war to regain Normandy." },
  { tier: 1, type: "justice", s: "Barons were punished at the king's will instead of by a fair judgement or the law.", link: "Clause 39 promised lawful judgement by a man's equals or the law of the land." },
  { tier: 1, type: "justice", s: "The wife and eldest son of the baron William de Briouze died in John's prison (1210).", link: "This became a symbol of John's cruelty — a background to clause 39." },
  { tier: 1, type: "justice", s: "Barons were forced to hand over their sons as hostages to guarantee their loyalty.", link: "Clause 49 promised to return hostages at once." },
  { tier: 1, type: "justice", s: "Men were imprisoned or had their lands seized without the lawful judgement of their equals.", link: "Clause 39 was written to stop exactly this." },
  { tier: 1, type: "war", s: "Normandy was lost to Philip II of France in 1204.", link: "Losing Normandy also *caused* the money demands: John needed funds to win it back." },
  { tier: 1, type: "war", s: "John's allies were crushed at the Battle of Bouvines in July 1214.", link: "Bouvines was the trigger: it left John weak and his money spent." },
  { tier: 1, type: "war", s: "John's critics mocked him as 'Softsword'.", link: "A king who could not defend his lands lost respect." },
  { tier: 1, type: "war", s: "Anjou, Maine and Touraine were lost to the King of France along with Normandy.", link: "After 1204 John kept only Gascony and parts of Poitou in France." },
  { tier: 2, type: "money", s: "John sold royal offices, such as sheriffships, to the highest bidder.", link: "Clause 45 promised officials who knew the law." },
  { tier: 2, type: "money", s: "John used barons' debts to the Crown as a way of controlling them.", link: "Debts gave John a hold over barons who could not pay." },
  { tier: 2, type: "money", s: "Many northern barons refused to pay the scutage John demanded in 1214.", link: "Their refusal shows how resentment over payments was turning into resistance." },
  { tier: 2, type: "justice", s: "Rumours spread that John had his nephew Arthur murdered in prison (1203).", link: "Arthur's fate made barons fear what John might do to them." },
  { tier: 2, type: "justice", s: "Law cases seemed to depend on the king's favour, not on the law.", link: "Clause 40 promised justice would not be sold, denied or delayed." },
  { tier: 2, type: "war", s: "Richard's great castle, Château Gaillard, fell after John's attempt to relieve it failed (1204).", link: "Its fall opened the road to Rouen." },
  { tier: 2, type: "war", s: "John's army retreated at La Roche-aux-Moines when the Poitevin lords refused to fight (1214).", link: "This failure came weeks before Bouvines." },
  { tier: 2, type: "war", s: "John's 1214 campaign in Poitou failed to win back his lost lands.", link: "Ten years of plans for reconquest ended in failure." },
];

// ---------------------------------------------------------------------------
// 8. Legacy
// ---------------------------------------------------------------------------

interface QA {
  tier: Tier;
  prompts: string[];
  answer: AnswerSpec;
  solution: string[];
  hint: string;
  traps?: Trap[];
}

function fromQA(rng: Rng, bank: readonly QA[], tier: Tier): DrillItem {
  const q = rng.pick(inTier(bank, tier));
  return { prompt: rng.pick(q.prompts), answer: q.answer, solution: q.solution, hint: q.hint, traps: q.traps };
}

const LEGACY: QA[] = [
  {
    tier: 1,
    prompts: [
      "Who summoned a Parliament in 1265 that included knights from the shires and burgesses from the towns?",
      "Which rebel baron's Parliament of 1265 was an important step towards the House of Commons? Give his name.",
    ],
    answer: text(A.montfort),
    solution: ["**Simon de Montfort** summoned knights and townsmen as well as barons and bishops in 1265.", "He was killed at Evesham later that year, but the idea of consulting the wider community survived."],
    hint: "He was a rebel baron against Henry III, killed at the Battle of Evesham.",
  },
  {
    tier: 1,
    prompts: [
      "In 1628 Parliament used Magna Carta in a document challenging Charles I's imprisonment without trial. Name the document.",
      "Name the 1628 document, led by Sir Edward Coke, that used Magna Carta against Charles I.",
    ],
    answer: text(["Petition of Right", "the Petition of Right", "Petition of Rights"]),
    solution: ["The **Petition of Right** (1628) attacked imprisonment without trial and taxes without Parliament's consent — echoing clauses 39 and 12."],
    hint: "It was a *petition* — a formal request to the king.",
    traps: [{ spec: text(["Bill of Rights"]), feedback: "The Bill of Rights is a different document. In 1628 Parliament presented a *petition*." }],
  },
  {
    tier: 1,
    prompts: ["Which king did Parliament challenge with the Petition of Right in 1628?", "The Petition of Right (1628) used Magna Carta against which Stuart king?"],
    answer: text(["Charles I", "Charles", "King Charles I", "Charles the First", "Charles 1", "King Charles"]),
    solution: ["**Charles I**, whose imprisonment without trial and taxes without consent Parliament said broke Magna Carta."],
    hint: "He was later executed in 1649.",
  },
  {
    tier: 1,
    prompts: [
      "Which 1948 United Nations document did Eleanor Roosevelt hope would become an international Magna Carta?",
      "Name the 1948 UN document whose Article 9 says no one shall be subjected to arbitrary arrest, detention or exile.",
    ],
    answer: text(["Universal Declaration of Human Rights", "UDHR", "the Universal Declaration of Human Rights", "Universal Declaration", "Declaration of Human Rights"]),
    solution: ["The **Universal Declaration of Human Rights** (1948) carries forward the principle of clause 39 — this time for everyone."],
    hint: "It is a *declaration* of rights for every human being.",
  },
  {
    tier: 1,
    prompts: [
      "Who, as regent for the nine-year-old Henry III, reissued Magna Carta in 1216?",
      "Which great knight reissued Magna Carta in 1216 to win rebels back from Prince Louis?",
    ],
    answer: text(A.marshal),
    solution: ["**William Marshal**, the regent, reissued it without the security clause to win back the rebels."],
    hint: "He had backed John in 1199; his verse biography was written in the 1220s.",
  },
  {
    tier: 1,
    prompts: ["In which year did Simon de Montfort's Parliament, including knights and townsmen, meet?", "Give the year of Simon de Montfort's Parliament."],
    answer: year(1265),
    solution: ["De Montfort's Parliament met in January **1265**, fifty years after Magna Carta."],
    hint: "Fifty years after Magna Carta.",
  },
  {
    tier: 1,
    prompts: ["In which year was the version of Magna Carta issued that became the standard text?", "Henry III reissued Magna Carta in return for a tax. In which year was this standard version issued?"],
    answer: year(1225),
    solution: ["The **1225** reissue became the standard version; it was entered on the statute rolls in 1297."],
    hint: "Ten years after 1215.",
    traps: [{ spec: year(1215), feedback: "1215 is the original. The standard version came with a later reissue by Henry III." }],
  },
  {
    tier: 1,
    prompts: ["How many clauses of Magna Carta are still law in England and Wales today?", "Only a handful of Magna Carta's clauses remain law in England and Wales. How many?"],
    answer: { type: "number", value: 3 },
    solution: ["**Three**: the freedom of the English Church, the liberties of the City of London, and the combined clauses 39 and 40."],
    hint: "Church, London, and lawful judgement.",
  },
  {
    tier: 1,
    prompts: ["How many clauses does the 1215 Magna Carta have (as numbered by later scholars)?", "Scholars later numbered the clauses of the 1215 charter. How many are there?"],
    answer: { type: "number", value: 63 },
    solution: ["The 1215 charter has **63** clauses; the numbers were added later by scholars."],
    hint: "It's just over sixty.",
  },
  {
    tier: 1,
    prompts: ["How many original copies of the 1215 Magna Carta survive today?", "For the 800th anniversary in 2015, all the surviving 1215 copies were brought together. How many are there?"],
    answer: { type: "number", value: 4 },
    solution: ["**Four** survive: two at the British Library, one at Lincoln and one at Salisbury Cathedral."],
    hint: "Two are at the British Library; two are in cathedrals.",
  },
  {
    tier: 2,
    prompts: ["A charter issued alongside Magna Carta in 1217 eased the harsh laws on the royal forests. Name it.", "Name the charter of 1217 that dealt with the royal forests."],
    answer: text(["Charter of the Forest", "the Charter of the Forest", "Forest Charter"]),
    solution: ["The **Charter of the Forest** (1217) was issued alongside a reissue of Magna Carta."],
    hint: "It is named after what it protected people from — the royal ___.",
  },
  {
    tier: 2,
    prompts: ["Which part of Parliament grew from the knights and burgesses that Simon de Montfort summoned in 1265?", "De Montfort's Parliament of 1265 was an important step towards which house of Parliament?"],
    answer: text(["House of Commons", "the House of Commons", "Commons", "the Commons"]),
    solution: ["Knights and burgesses — the 'commons' — became the **House of Commons**."],
    hint: "Not the Lords…",
    traps: [{ spec: text(["House of Lords", "Lords"]), feedback: "Barons and bishops sat in what became the Lords. Knights and townsmen grew into the other house." }],
  },
  {
    tier: 2,
    prompts: ["Which clause — the 'security clause' — was left out of the 1216 reissue of Magna Carta? Give the number.", "The 1216 reissue dropped the clause letting 25 barons enforce the charter. Which clause number was it?"],
    answer: { type: "number", value: 61 },
    solution: ["Clause **61**, the security clause, was dropped: no royal government would accept 25 barons with the right to seize the king's lands."],
    hint: "It's near the end of the 63 clauses.",
    traps: [{ spec: { type: "number", value: 25 }, feedback: "25 is the number of barons — not the clause number." }],
  },
  {
    tier: 2,
    prompts: ["In which year was Magna Carta reissued together with the new Charter of the Forest?", "Give the year of the reissue that came after Prince Louis left England, alongside the Charter of the Forest."],
    answer: year(1217),
    solution: ["**1217** — after royal victories at Lincoln and at sea, Louis left and the charter was reissued with the Charter of the Forest."],
    hint: "Two years after 1215.",
  },
  {
    tier: 2,
    prompts: ["Which amendment of the US Bill of Rights (1791) echoes clause 39 with the phrase 'due process of law'? Give its number.", "The phrase 'due process of law' in the US Bill of Rights echoes clause 39. Which amendment is it in (give the number)?"],
    answer: { type: "number", value: 5, display: "the Fifth Amendment (5)" },
    solution: ["The **Fifth Amendment** (1791) promises no one shall be deprived of life, liberty or property without due process of law."],
    hint: "It's famous for 'pleading the ___' in American courts.",
  },
  {
    tier: 3,
    prompts: ["Who led Parliament's use of Magna Carta in the Petition of Right (1628)? Give his name.", "Name the lawyer and MP who led the Petition of Right against Charles I in 1628."],
    answer: text(["Edward Coke", "Sir Edward Coke", "Coke"]),
    solution: ["**Sir Edward Coke** argued that Magna Carta bound the king — even Charles I."],
    hint: "His first name was Edward; he was a famous judge and MP.",
  },
  {
    tier: 3,
    prompts: ["Who hoped the Universal Declaration of Human Rights (1948) would become an international Magna Carta?", "Name the American who chaired the drafting of the UDHR and called it a possible 'international Magna Carta'."],
    answer: text(["Eleanor Roosevelt", "Roosevelt", "Mrs Roosevelt"]),
    solution: ["**Eleanor Roosevelt** hoped the 1948 Declaration would become an international Magna Carta for everyone."],
    hint: "She was the widow of a US president.",
  },
  {
    tier: 3,
    prompts: ["In which year was Magna Carta entered on England's official statute rolls?", "The 1225 text of Magna Carta was entered on the statute rolls in which year?"],
    answer: year(1297),
    solution: ["In **1297** the 1225 version went on the statute rolls."],
    hint: "Near the end of the 13th century.",
  },
  {
    tier: 3,
    prompts: ["In return for what did Henry III reissue Magna Carta in 1225? (One word.)", "Henry III's 1225 reissue was a deal: he confirmed the liberties and got … what in return? (One word.)"],
    answer: text(["tax", "a tax", "taxes", "taxation", "money"]),
    solution: ["A **tax** — a deal that linked paying taxes to confirming liberties."],
    hint: "Think about what kings always needed from their subjects.",
  },
  {
    tier: 3,
    prompts: ["In which year was the US Bill of Rights, echoing clause 39, adopted?", "Give the year of the US Bill of Rights, whose Fifth Amendment echoes clause 39."],
    answer: year(1791),
    solution: ["The US Bill of Rights was adopted in **1791**."],
    hint: "Late 18th century, soon after American independence.",
  },
  {
    tier: 3,
    prompts: ["Which Article of the Universal Declaration of Human Rights (1948) says no one shall be subjected to arbitrary arrest, detention or exile? Give the number.", "The UDHR's ban on arbitrary arrest echoes clause 39. Which Article number is it?"],
    answer: { type: "number", value: 9 },
    solution: ["**Article 9** of the UDHR — like clause 39, but for everyone, not just 'free men'."],
    hint: "Singapore's Constitution protects personal liberty in an Article with the same number.",
  },
];

// ---------------------------------------------------------------------------
// 10. Interpretations: critical or sympathetic?
// ---------------------------------------------------------------------------

type View = "critical" | "sympathetic";
const V_ACCEPT: Record<View, string[]> = {
  critical: ["critical", "critic", "critical view", "bad", "bad king", "negative", "hostile", "against"],
  sympathetic: ["sympathetic", "sympathetic view", "sympathy", "positive", "favourable", "favorable", "good", "for", "unlucky", "able"],
};

interface Evidence {
  tier: Tier;
  view: View;
  s: string;
  why: string;
}

const EVIDENCE: Evidence[] = [
  { tier: 1, view: "critical", s: "Matthew Paris, a St Albans monk, recorded the verse: 'Foul as it is, Hell itself is made fouler by the presence of John.'", why: "A damning verdict — but from a monk of a Church John had squeezed, writing decades later." },
  { tier: 1, view: "critical", s: "Arthur of Brittany vanished in John's custody in 1203; most historians believe John had him killed.", why: "Even sympathetic historians find Arthur's fate hard to explain away." },
  { tier: 1, view: "critical", s: "The wife and eldest son of William de Briouze died in John's prison in 1210.", why: "It shows cruelty and explains why barons feared him." },
  { tier: 1, view: "critical", s: "John lost Normandy in 1204, and his plan to win it back collapsed at Bouvines in 1214.", why: "Failure in war was a failure at a key task of medieval kingship." },
  { tier: 1, view: "critical", s: "Victorian historians such as William Stubbs judged John one of the worst kings England ever had.", why: "But they relied heavily on the hostile chronicles." },
  { tier: 1, view: "critical", s: "By 1215 the barons would not trust John's promises — they demanded a security clause to enforce Magna Carta.", why: "Most historians accept that John was untrustworthy." },
  { tier: 1, view: "sympathetic", s: "Government records show John travelling constantly and hearing law cases himself.", why: "Records — not chronicles — reveal a hard-working ruler." },
  { tier: 1, view: "sympathetic", s: "W.L. Warren (1961), using the government records, found an intelligent, hard-working king who improved royal administration.", why: "Warren's records-based study changed the picture of John." },
  { tier: 1, view: "sympathetic", s: "John inherited debts from Richard I's wars and Richard's 150,000-mark ransom.", why: "It suggests some of John's problems were bad luck, not bad kingship." },
  { tier: 1, view: "sympathetic", s: "John faced Philip II, one of the ablest French kings, whose lands bordered Normandy.", why: "A formidable rival makes losing Normandy easier to understand." },
  { tier: 1, view: "sympathetic", s: "The Barnwell chronicler called John 'a great prince, but hardly a happy one', who suffered the ups and downs of fortune.", why: "A more balanced chronicle, written closer to John's time." },
  { tier: 1, view: "sympathetic", s: "Far more government records survive from John's reign than from earlier reigns, showing careful record-keeping.", why: "It points to an efficient administration." },
  { tier: 2, view: "critical", s: "St Albans chroniclers told how John lay in bed with his young queen while Normandy was being lost.", why: "A vivid story — but from hostile monks writing after his death, often repeating gossip." },
  { tier: 2, view: "critical", s: "Historians Marc Morris and Stephen Church (2015) stress John's cruelty, suspicion and untrustworthiness.", why: "Recent historians accept John was able, but still judge him harshly as a person and a ruler." },
  { tier: 2, view: "critical", s: "In Robin Hood stories, from Ivanhoe (1819) to Disney's Robin Hood (1973), 'Prince John' is a greedy villain.", why: "Popular legend fixed his bad image — though nothing reliable links John to a real Robin Hood." },
  { tier: 2, view: "critical", s: "John forced barons to hand over their sons as hostages to guarantee their loyalty.", why: "Rule by fear rather than trust." },
  { tier: 2, view: "sympathetic", s: "John won a brilliant victory at Mirebeau in 1202 after a lightning march of about 80 miles in two days.", why: "It shows real military skill." },
  { tier: 2, view: "sympathetic", s: "John campaigned successfully in Ireland in 1210 and in Wales in 1211.", why: "Not every campaign failed." },
  { tier: 2, view: "sympathetic", s: "John's submission to the Pope in 1213 turned Innocent III into an ally who backed him against the barons in 1215.", why: "Many historians see it as shrewd politics." },
];

const WRITERS: QA[] = [
  {
    tier: 3,
    prompts: ["Name the St Albans monk (died 1236) whose hostile chronicle of John's reign was later copied and expanded by Matthew Paris."],
    answer: text(A.wendover),
    solution: ["**Roger of Wendover** wrote the *Flores Historiarum* at St Albans; Matthew Paris built on it.", "Both were monks of a Church that had suffered under the Interdict — check their provenance."],
    hint: "He wrote first; Matthew Paris copied and expanded his work.",
    traps: [{ spec: text(A.paris), feedback: "Matthew Paris copied and expanded the earlier chronicle. Who wrote the original?" }],
  },
  {
    tier: 3,
    prompts: ["Name the St Albans monk (died 1259) who recorded the verse 'Hell itself is made fouler by the presence of John'."],
    answer: text(A.paris),
    solution: ["**Matthew Paris**, writing in the mid-1200s, built on Roger of Wendover's chronicle — and his hostility."],
    hint: "He died in 1259 and built on Roger of Wendover's work.",
    traps: [{ spec: text(A.wendover), feedback: "Wendover wrote the earlier chronicle. The man who recorded this verse built on it later." }],
  },
  {
    tier: 3,
    prompts: ["Which historian's 1961 book *King John*, based on government records, portrayed John as an able but unlucky ruler? Give his surname."],
    answer: text(["Warren", "W.L. Warren", "W. L. Warren", "Wilfred Warren", "WL Warren"]),
    solution: ["**W.L. Warren** (1961) used the government rolls to show a hard-working administrator.", "Different evidence (records, not chronicles) produced a different interpretation."],
    hint: "His initials are W.L.",
  },
  {
    tier: 3,
    prompts: ["Name the Victorian historian (1870s) who, relying on the chronicles, judged John one of the worst kings England ever had. Give his surname."],
    answer: text(["Stubbs", "William Stubbs", "Bishop Stubbs"]),
    solution: ["**William Stubbs** — like J.R. Green — relied heavily on the hostile monk-chroniclers."],
    hint: "He shares the 1870s 'villain' view with J.R. Green; his first name was William.",
  },
  {
    tier: 3,
    prompts: ["Which priory's chronicle, written in the 1220s, called John 'a great prince, but hardly a happy one'? Give the place name."],
    answer: text(["Barnwell", "Barnwell Priory", "the Barnwell chronicle", "Barnwell chronicle"]),
    solution: ["The **Barnwell** chronicle, written near Cambridge, was closer in time and more balanced than the St Albans writers."],
    hint: "A priory near Cambridge.",
    traps: [{ spec: text(["St Albans"]), feedback: "The St Albans monks were the *hostile* writers. This more balanced chronicle came from a priory near Cambridge." }],
  },
  {
    tier: 3,
    prompts: ["Which novelist's *Ivanhoe* (1819) helped fix the image of 'Prince John' as a greedy villain? Give his surname."],
    answer: text(["Scott", "Walter Scott", "Sir Walter Scott"]),
    solution: ["**Sir Walter Scott**'s *Ivanhoe* (1819) made 'Prince John' a Robin Hood-style villain — fiction, not evidence."],
    hint: "A Scottish novelist, Sir Walter …",
  },
];

const VIEW_PROMPTS = [
  (s: string) => `Does this evidence support a **critical** view of John (a bad king) or a **sympathetic** view (an able or unlucky king)?\n\n> ${s}\n\nAnswer *critical* or *sympathetic*.`,
  (s: string) => `**Interpretations sort.** Which side of the 'bad King John' debate does this support?\n\n> ${s}\n\nAnswer *critical* or *sympathetic*.`,
];

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  {
    id: "king-john.date-recall",
    topicId: "king-john",
    title: "Match the date to the event",
    level: 1,
    guideRef: "losing-normandy",
    generate(rng, tier) {
      const d = rng.pick(inTier(DATES, tier));
      const templates = [
        `In which year ${d.q}?`,
        `**${d.s}.** In which year did this happen?`,
        `Give the year: ${d.s}.`,
      ];
      const decade = Math.floor(d.year / 10) * 10;
      return {
        prompt: rng.pick(templates),
        answer: year(d.year),
        solution: [d.why],
        hint: `It happened in the ${decade}s. Place it in the chain: crowned 1199 → Normandy lost 1204 → Interdict 1208 → submission 1213 → Bouvines 1214 → Magna Carta 1215.`,
        traps: d.trap ? [{ spec: year(d.trap[0]), feedback: d.trap[1] }] : undefined,
      };
    },
  },
  {
    id: "king-john.who-is-who",
    topicId: "king-john",
    title: "Who's who in John's reign?",
    level: 1,
    guideRef: "becoming-king",
    generate(rng, tier) {
      const p = rng.pick(inTier(PEOPLE, tier));
      const clue = rng.pick(p.clues);
      const frame = rng.pick(["Who's who? ", "Name the person: ", "Who is being described? "]);
      return {
        prompt: `${frame}${clue}`,
        answer: text(p.accept),
        solution: [p.note],
        hint: "Is this person family (Angevin), Church, French, or one of the English barons?",
        traps: p.trap ? [p.trap] : undefined,
      };
    },
  },
  {
    id: "king-john.key-terms",
    topicId: "king-john",
    title: "Key term from its definition",
    level: 1,
    guideRef: "john-and-the-church",
    generate(rng, tier) {
      const t = rng.pick(inTier(TERMS, tier));
      const def = rng.pick(t.defs);
      const frame = rng.pick(["Key term: which word or phrase matches this definition?", "Name the term:"]);
      return {
        prompt: `${frame}\n\n> ${def}`,
        answer: text(t.accept),
        solution: [t.note],
        hint: "Look for the clue words in the definition — who did it, to whom, and when.",
        traps: t.trap ? [t.trap] : undefined,
      };
    },
  },
  {
    id: "king-john.places",
    topicId: "king-john",
    title: "Where did it happen?",
    level: 1,
    guideRef: "losing-normandy",
    generate(rng, tier) {
      const p = rng.pick(inTier(PLACES, tier));
      const clue = rng.pick(p.clues);
      const prompt = rng.bool() ? `Where did it happen? Name ${clue}.` : `**Place check.** Name ${clue}.`;
      return {
        prompt,
        answer: text(p.accept),
        solution: [p.note],
        hint: "Is it in England or in France? Think about which part of the story it belongs to.",
      };
    },
  },
  {
    id: "king-john.magna-carta-clause",
    topicId: "king-john",
    title: "Magna Carta clause from its content",
    level: 2,
    guideRef: "magna-carta",
    generate(rng, tier) {
      const c = rng.pick(inTier(CLAUSES, tier));
      const clue = rng.pick(c.clues);
      const prompt = rng.bool()
        ? `Which clause of Magna Carta (1215) ${clue}? Give the clause number.`
        : `**Clause hunt.** A clause of Magna Carta (1215) ${clue}. What is its number?`;
      return {
        prompt,
        answer: { type: "number", value: c.n },
        solution: [`Clause **${c.n}**.`, c.note],
        hint: "Remember the anchors: 1 = the Church, 12 = scutage, 39 = no imprisonment without judgement, 40 = justice not for sale, 61 = the 25 barons.",
        traps: c.traps,
      };
    },
  },
  {
    id: "king-john.which-came-first",
    topicId: "king-john",
    title: "Which came first?",
    level: 2,
    guideRef: "john-and-the-church",
    generate(rng, tier) {
      const [a, b] = pickPair(rng, tier, tier === 3 ? 3 : tier === 2 ? 15 : 60);
      const [first, later] = a.year < b.year ? [a, b] : [b, a];
      const prompt = rng.bool()
        ? `Which came first: **${a.label}** or **${b.label}**?`
        : `Chronology check — which happened earlier: **${a.label}** or **${b.label}**?`;
      return {
        prompt,
        answer: text(first.accept, first.label),
        solution: [`**${cap(first.label)}** (${first.year}) came before **${later.label}** (${later.year}) — ${later.year - first.year} year${later.year - first.year === 1 ? "" : "s"} apart.`],
        hint: "Anchor both events to the big dates: 1199 crowned, 1204 Normandy lost, 1208 Interdict, 1213 submission, 1214 Bouvines, 1215 Magna Carta, 1216 death.",
        traps: [{ spec: text(later.accept), feedback: `Not quite — ${later.label} came later, in ${later.year}.` }],
      };
    },
  },
  {
    id: "king-john.grievance-type",
    topicId: "king-john",
    title: "Barons' grievance: money, justice or war?",
    level: 2,
    guideRef: "barons-revolt",
    generate(rng, tier) {
      const g = rng.pick(tier === 1 ? GRIEVANCES.filter((x) => x.tier === 1) : tier === 2 ? GRIEVANCES : GRIEVANCES.filter((x) => x.tier === 2 || rng.bool(0.3)));
      const prompt = rng.bool()
        ? `Classify this grievance of the barons before 1215:\n\n> ${g.s}\n\nAnswer *money*, *justice* (unfair or harsh treatment) or *war*.`
        : `**Why were the barons angry?**\n\n> ${g.s}\n\nIs this mainly about *money*, *justice* (unfair or harsh treatment) or *war*?`;
      return {
        prompt,
        answer: text(G_ACCEPT[g.type], g.type),
        solution: [`**${cap(g.type)}.** ${G_WHY[g.type]}`, g.link],
        hint: "Ask: is the king taking something, punishing someone, or losing something?",
      };
    },
  },
  {
    id: "king-john.legacy",
    topicId: "king-john",
    title: "The legacy of Magna Carta",
    level: 2,
    guideRef: "legacy-of-magna-carta",
    generate(rng, tier) {
      return fromQA(rng, LEGACY, tier);
    },
  },
  {
    id: "king-john.years-between",
    topicId: "king-john",
    title: "How many years between?",
    level: 3,
    guideRef: "barons-revolt",
    generate(rng, tier) {
      let [a, b] = pickPair(rng, tier, tier === 3 ? 12 : 20);
      if (tier === 3 && rng.bool(0.35)) {
        // Long-range legacy gaps: always measured from 1215 (or the 1225 standard text).
        const later = rng.pick(EVENTS.filter((e) => e.year > 1225));
        const base = rng.pick(EVENTS.filter((e) => e.year === 1215 || (e.year === 1225 && later.year > 1225)));
        [a, b] = [base, later];
      }
      const [first, later] = a.year < b.year ? [a, b] : [b, a];
      const gap = later.year - first.year;
      const prompt = rng.bool()
        ? `How many years were there between **${first.label}** and **${later.label}**? (Subtract the earlier year from the later one.)`
        : `Recall both dates, then work it out: how many years separate **${first.label}** and **${later.label}**?`;
      return {
        prompt,
        answer: { type: "number", value: gap },
        solution: [`${cap(first.label)}: **${first.year}**. ${cap(later.label)}: **${later.year}**.`, `${later.year} − ${first.year} = **${gap}** years.`],
        hint: "First recall each year on its own, then subtract.",
      };
    },
  },
  {
    id: "king-john.interpretations",
    topicId: "king-john",
    title: "Bad king or unlucky king? Sort the evidence",
    level: 3,
    guideRef: "bad-king-john",
    generate(rng, tier) {
      if (tier === 3 && rng.bool(0.4)) return fromQA(rng, WRITERS, 3);
      const e = rng.pick(tier === 1 ? EVIDENCE.filter((x) => x.tier === 1) : tier === 2 ? EVIDENCE : EVIDENCE.filter((x) => x.tier === 2 || rng.bool(0.3)));
      const other: View = e.view === "critical" ? "sympathetic" : "critical";
      return {
        prompt: rng.pick(VIEW_PROMPTS)(e.s),
        answer: text(V_ACCEPT[e.view], e.view),
        solution: [`**${cap(e.view)}.** ${e.why}`, "Remember: one piece of evidence is not a verdict — weigh it against the other side and check its provenance."],
        hint: "Does it make John look cruel or a failure, or able, hard-working or unlucky?",
        traps: [{ spec: text([other]), feedback: `Look again: does this make John look ${e.view === "critical" ? "cruel, untrustworthy or a failure" : "able, hard-working or unlucky"}?` }],
      };
    },
  },
];
