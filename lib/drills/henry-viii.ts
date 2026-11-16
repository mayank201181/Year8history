// Skill drills for "Henry VIII: Power, Marriage and the Break with Rome".
// Bank-based: every fact below matches lib/topics/henry-viii/guide.ts.
import type { AnswerSpec, Trap } from "../types.ts";
import type { Drill, DrillItem, Rng } from "./types.ts";
import { ordinal } from "./helpers.ts";

type Tier = 1 | 2 | 3;

/** Tier 1 = headline items; tier 2 = headline + typical detail; tier 3 = detail + finer detail. */
function inTier<T extends { tier: Tier }>(bank: readonly T[], tier: Tier): T[] {
  if (tier === 1) return bank.filter((b) => b.tier === 1);
  if (tier === 2) return bank.filter((b) => b.tier <= 2);
  return bank.filter((b) => b.tier >= 2);
}

const text = (accept: string[], display?: string): AnswerSpec => ({ type: "text", accept, ...(display ? { display } : {}) });
const year = (value: number): AnswerSpec => ({ type: "number", value });

/** A simple question-and-answer bank item (several wordings of the same question). */
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

// ---------------------------------------------------------------------------
// Shared answer lists
// ---------------------------------------------------------------------------

const A = {
  wolsey: ["Thomas Wolsey", "Wolsey", "Cardinal Wolsey", "Cardinal Thomas Wolsey"],
  cromwell: ["Thomas Cromwell", "Cromwell"],
  cranmer: ["Thomas Cranmer", "Cranmer", "Archbishop Cranmer"],
  more: ["Thomas More", "Sir Thomas More", "More", "Saint Thomas More"],
  anneBoleyn: ["Anne Boleyn", "Boleyn", "Queen Anne Boleyn", "Anne Bullen"],
  catherineAragon: ["Catherine of Aragon", "Katherine of Aragon", "Aragon", "Catalina of Aragon", "Queen Catherine of Aragon"],
  janeSeymour: ["Jane Seymour", "Seymour", "Jane", "Queen Jane", "Queen Jane Seymour"],
  anneCleves: ["Anne of Cleves", "Cleves", "Anna of Cleves"],
  catherineHoward: ["Catherine Howard", "Katherine Howard", "Howard", "Kathryn Howard"],
  catherineParr: ["Catherine Parr", "Katherine Parr", "Parr", "Kateryn Parr"],
  charlesV: ["Charles V", "Charles 5", "Charles the Fifth", "Emperor Charles V", "Charles", "Charles V of Spain", "Carlos V"],
  clement: ["Clement VII", "Pope Clement VII", "Clement", "Clement 7", "Pope Clement", "Clement the Seventh"],
  aske: ["Robert Aske", "Aske"],
  holbein: ["Holbein", "Hans Holbein", "Holbein the Younger", "Hans Holbein the Younger"],
  arthur: ["Arthur", "Prince Arthur", "Arthur Tudor", "Arthur Prince of Wales"],
  mary: ["Mary", "Mary I", "Mary 1", "Princess Mary", "Mary Tudor", "Queen Mary", "Mary the First"],
  elizabeth: ["Elizabeth", "Elizabeth I", "Elizabeth 1", "Princess Elizabeth", "Queen Elizabeth", "Elizabeth the First"],
  edward: ["Edward", "Edward VI", "Edward 6", "Prince Edward", "King Edward", "Edward the Sixth"],
};

// ---------------------------------------------------------------------------
// 1. Dates
// ---------------------------------------------------------------------------

interface DatedEvent {
  tier: Tier;
  year: number;
  /** "In which year did …?" */
  q: string;
  /** Statement form: "Henry Tudor wins the Battle of Bosworth". */
  s: string;
  why: string;
  trap?: Trap;
}

const DATES: DatedEvent[] = [
  { tier: 1, year: 1485, q: "did Henry Tudor defeat Richard III at the Battle of Bosworth", s: "Henry Tudor wins the Battle of Bosworth and becomes Henry VII", why: "Richard III was killed at Bosworth on 22 August 1485, ending his reign.", trap: { spec: year(1509), feedback: "1509 is when Henry VIII became king. His father won Bosworth a generation earlier." } },
  { tier: 1, year: 1509, q: "did Henry VIII become king", s: "Henry VIII inherits the crown and marries Catherine of Aragon", why: "Henry VII died in April 1509; his son, not yet 18, inherited peacefully and married Catherine in June.", trap: { spec: year(1485), feedback: "1485 is Bosworth, when Henry's *father* took the crown." } },
  { tier: 1, year: 1520, q: "did Henry VIII meet Francis I of France at the Field of the Cloth of Gold", s: "The Field of the Cloth of Gold near Calais", why: "The 1520 meeting was weeks of feasting and jousting — a display of wealth more than a lasting peace." },
  { tier: 1, year: 1521, q: "did the Pope name Henry VIII ‘Defender of the Faith’", s: "Pope Leo X names Henry ‘Defender of the Faith’", why: "Henry won the title for a book attacking Martin Luther — thirteen years before he broke with Rome." },
  { tier: 1, year: 1533, q: "did Henry VIII marry Anne Boleyn", s: "Henry secretly marries Anne Boleyn", why: "They married in January 1533; Cranmer declared the first marriage void in May and Elizabeth was born in September." },
  { tier: 1, year: 1534, q: "did Parliament pass the Act of Supremacy", s: "The Act of Supremacy makes Henry Supreme Head of the Church of England", why: "The Act of Supremacy came in 1534, the year after the marriage to Anne Boleyn.", trap: { spec: year(1533), feedback: "1533 was the marriage to Anne and Cranmer's verdict. The Act of Supremacy came the next year." } },
  { tier: 1, year: 1536, q: "did the Pilgrimage of Grace break out in the north of England", s: "The Pilgrimage of Grace rises in the north", why: "The rising began in October 1536, the year the smaller monasteries were closed.", trap: { spec: year(1537), feedback: "1537 was the second rising and the executions that followed. The Pilgrimage itself began in 1536." } },
  { tier: 1, year: 1547, q: "did Henry VIII die", s: "Henry VIII dies, aged 55", why: "Henry died on 28 January 1547 and his son became Edward VI." },
  { tier: 1, year: 1529, q: "did Cardinal Wolsey fall from power", s: "Wolsey loses his post as Lord Chancellor", why: "Wolsey fell in 1529 after the Blackfriars court failed to grant the annulment.", trap: { spec: year(1530), feedback: "Wolsey was arrested and died in 1530 — but he lost power in 1529." } },
  { tier: 1, year: 1537, q: "was Henry VIII's son Edward born", s: "Jane Seymour gives birth to Prince Edward", why: "Edward was born in October 1537; his mother Jane Seymour died days later.", trap: { spec: year(1547), feedback: "1547 is when Edward became king. He was born ten years earlier." } },
  { tier: 1, year: 1502, q: "did Prince Arthur die, making his brother Henry heir", s: "Prince Arthur dies, aged 15", why: "Arthur died in April 1502, so his ten-year-old brother Henry became heir to the throne." },
  { tier: 1, year: 1535, q: "was Sir Thomas More executed", s: "Sir Thomas More is beheaded for treason", why: "More was beheaded in July 1535 for refusing to accept Henry's new position as head of the Church.", trap: { spec: year(1534), feedback: "1534 is when More refused the oath. He was tried and executed the following summer." } },
  { tier: 2, year: 1486, q: "did Henry VII marry Elizabeth of York", s: "Henry VII marries Elizabeth of York — the Tudor rose", why: "The 1486 marriage joined Lancaster and York, so their children carried both claims." },
  { tier: 2, year: 1516, q: "was Princess Mary, Catherine of Aragon's daughter, born", s: "Princess Mary is born", why: "Mary was the only one of Catherine's children to survive — the root of Henry's worry about an heir." },
  { tier: 2, year: 1527, q: "did Charles V's troops sack Rome", s: "Charles V's troops sack Rome", why: "After the Sack of Rome in May 1527, Pope Clement VII was in the power of Catherine's nephew." },
  { tier: 2, year: 1513, q: "did the English army defeat the Scots at Flodden", s: "The Battle of Flodden", why: "Flodden (1513) was fought while Henry was campaigning in France and Catherine ruled as regent." },
  { tier: 2, year: 1515, q: "did Thomas Wolsey become Lord Chancellor", s: "Wolsey becomes Lord Chancellor", why: "Wolsey became Lord Chancellor in 1515, a year after becoming Archbishop of York." },
  { tier: 2, year: 1540, q: "did the last monastery, Waltham Abbey, close", s: "Waltham Abbey, the last monastery, closes", why: "The larger monasteries were surrendered between 1538 and 1540; Waltham Abbey was the last, in 1540." },
  { tier: 2, year: 1542, q: "was Catherine Howard, Henry's fifth wife, executed", s: "Catherine Howard is beheaded", why: "Catherine Howard married Henry in 1540 and was executed for adultery in 1542." },
  { tier: 2, year: 1543, q: "did Henry VIII marry his sixth wife, Catherine Parr", s: "Henry marries Catherine Parr", why: "Catherine Parr married Henry in 1543 and outlived him." },
  { tier: 3, year: 1501, q: "did Prince Arthur marry Catherine of Aragon", s: "Prince Arthur marries Catherine of Aragon", why: "Arthur and Catherine married in 1501 to seal an alliance with Spain; Arthur died months later." },
  { tier: 3, year: 1510, q: "were Henry VII's hated tax-gatherers, Empson and Dudley, executed", s: "Empson and Dudley are executed", why: "Executing his father's tax-gatherers in 1510 was one of the young Henry's first, popular acts." },
  { tier: 3, year: 1525, q: "did the Amicable Grant fail", s: "Resistance defeats Wolsey's Amicable Grant", why: "The Amicable Grant (1525) was a tax without Parliament; resistance forced Henry to drop it." },
  { tier: 3, year: 1532, q: "did the clergy accept the Submission of the Clergy", s: "The Submission of the Clergy", why: "In 1532 the clergy accepted they could not make Church laws without the king — the first step of the break." },
  { tier: 3, year: 1539, q: "did the Six Articles confirm Catholic beliefs such as the Mass", s: "The Six Articles keep Catholic beliefs", why: "The Six Articles of 1539 show Henry rejected the Pope, not Catholic belief." },
  { tier: 3, year: 1491, q: "was Henry VIII born", s: "Henry VIII is born", why: "Henry was born in 1491, the second son of Henry VII." },
];

const dateRecall: Drill = {
  id: "henry-viii.date-recall",
  topicId: "henry-viii",
  title: "Tudor dates: in which year?",
  level: 1,
  guideRef: "tudor-rise",
  generate(rng, tier) {
    const bank = inTier(DATES, tier);
    if (tier === 3 && rng.bool(0.4)) {
      // Two-step: years between two events.
      const a = rng.pick(bank);
      const others = DATES.filter((d) => Math.abs(d.year - a.year) >= 2);
      const b = rng.pick(others);
      const [early, late] = a.year < b.year ? [a, b] : [b, a];
      const gap = late.year - early.year;
      return {
        prompt: `How many years apart were these two events? Give a whole number of years.\n\n- ${early.s}\n- ${late.s}`,
        answer: { type: "number", value: gap },
        solution: [`${early.s}: ${early.year}. ${late.s}: ${late.year}.`, `${late.year} − ${early.year} = ${gap} years.`],
        hint: "Date each event first, then subtract the earlier year from the later one.",
      };
    }
    const e = rng.pick(bank);
    const prompt = rng.bool() ? `In which year ${e.q}?` : `Put a date on it: **${e.s}**. Which year?`;
    return {
      prompt,
      answer: year(e.year),
      solution: [`${e.year}.`, e.why],
      hint: e.year < 1509 ? "This is before Henry VIII became king in 1509." : e.year < 1530 ? "This is in the first twenty years of Henry's reign (1509–1529)." : "This is in the second half of Henry's reign (1530–1547).",
      traps: e.trap ? [e.trap] : undefined,
    };
  },
};

// ---------------------------------------------------------------------------
// 2. Who's who
// ---------------------------------------------------------------------------

interface Person {
  tier: Tier;
  accept: string[];
  display: string;
  clues: string[];
  fact: string;
  traps?: Trap[];
}

const confuseWolsey: Trap = { spec: text(A.wolsey), feedback: "Wolsey fell in 1529 after *failing* to get the annulment. Cromwell rose after him and made the break happen." };
const confuseCromwell: Trap = { spec: text(A.cromwell), feedback: "Cromwell rose *after* 1529. This is the earlier minister — the cardinal who ran the government from 1515." };

const PEOPLE: Person[] = [
  { tier: 1, accept: A.wolsey, display: "Thomas Wolsey", clues: ["the cardinal and Lord Chancellor who ran Henry's government day to day until 1529", "the son of an Ipswich butcher who built Hampton Court and organised the Field of the Cloth of Gold", "the minister who fell in 1529 after the Blackfriars court failed to grant Henry's annulment"], fact: "Cardinal Thomas Wolsey was Lord Chancellor from 1515 to 1529.", traps: [confuseCromwell] },
  { tier: 1, accept: A.cromwell, display: "Thomas Cromwell", clues: ["Henry's chief minister from about 1532, who used Acts of Parliament to break with Rome", "the blacksmith's son and lawyer who organised the dissolution of the monasteries", "the minister who arranged the Anne of Cleves marriage and was executed in 1540"], fact: "Thomas Cromwell made each step of the break with Rome an Act of Parliament; he was executed in 1540.", traps: [confuseWolsey] },
  { tier: 1, accept: A.cranmer, display: "Thomas Cranmer", clues: ["the Archbishop of Canterbury who declared Henry's first marriage void in 1533", "the Cambridge scholar and religious reformer made Archbishop of Canterbury in 1533"], fact: "Thomas Cranmer became Archbishop of Canterbury in 1533 and declared the marriage to Catherine void in May 1533." },
  { tier: 1, accept: A.more, display: "Sir Thomas More", clues: ["the former Lord Chancellor beheaded in 1535 for refusing to accept Henry as head of the Church", "the scholar reported to have said he died ‘the King's good servant, but God's first’"], fact: "Sir Thomas More would not swear the oath accepting Henry's new position and was beheaded in July 1535." },
  { tier: 1, accept: A.anneBoleyn, display: "Anne Boleyn", clues: ["Henry's second wife, mother of Elizabeth, beheaded in 1536", "the lady-in-waiting, educated at the French court, who refused to be only Henry's mistress"], fact: "Anne Boleyn married Henry in January 1533 and was beheaded in May 1536." },
  { tier: 1, accept: A.catherineAragon, display: "Catherine of Aragon", clues: ["the Spanish princess who married first Prince Arthur, then Henry VIII", "Henry's first wife and the mother of Mary I"], fact: "Catherine of Aragon married Arthur in 1501 and Henry in 1509; the marriage was annulled in 1533." },
  { tier: 1, accept: A.charlesV, display: "Charles V", clues: ["the Holy Roman Emperor who was Catherine of Aragon's nephew", "the emperor whose troops sacked Rome in 1527"], fact: "Charles V, Catherine's nephew, controlled Rome after 1527, so the Pope could not risk annulling her marriage." },
  { tier: 1, accept: A.aske, display: "Robert Aske", clues: ["the lawyer who led the Pilgrimage of Grace in 1536", "the leader of the 1536 Yorkshire rising to save the monasteries, executed in 1537"], fact: "Robert Aske led the Pilgrimage of Grace; after the promises of pardon were broken, he was executed." },
  { tier: 2, accept: A.clement, display: "Pope Clement VII", clues: ["the Pope who would not grant Henry's annulment", "the Pope who was in Charles V's power after the Sack of Rome in 1527"], fact: "Pope Clement VII delayed Henry's ‘Great Matter’ for years because Charles V controlled Rome." },
  { tier: 2, accept: A.holbein, display: "Hans Holbein the Younger", clues: ["Henry's court painter, who created the king's famous powerful pose", "the artist of the 1537 Whitehall wall painting of Henry, Jane Seymour and Henry's parents"], fact: "Hans Holbein the Younger painted the Whitehall image (1537) — royal propaganda." },
  { tier: 2, accept: A.arthur, display: "Prince Arthur", clues: ["Henry VIII's elder brother, whose death in 1502 made Henry heir", "Catherine of Aragon's first husband, who died in 1502 aged 15"], fact: "Prince Arthur married Catherine in 1501 and died in April 1502." },
  { tier: 2, accept: A.janeSeymour, display: "Jane Seymour", clues: ["Henry's third wife, who gave birth to Edward in 1537", "the queen who died days after giving birth to Henry's only legitimate son"], fact: "Jane Seymour married Henry in 1536 and died in 1537, days after Edward was born." },
  { tier: 2, accept: ["Martin Luther", "Luther"], display: "Martin Luther", clues: ["the German monk who began attacking the Catholic Church in 1517", "the reformer whose ideas Henry attacked in the book that won him the title ‘Defender of the Faith’"], fact: "Martin Luther began his attack on the Church in 1517; Henry's book against him earned the title Defender of the Faith (1521)." },
  { tier: 2, accept: ["Francis I", "Francis", "Francis 1", "Francis the First", "King Francis", "Francois I", "Francois"], display: "Francis I of France", clues: ["the French king Henry met at the Field of the Cloth of Gold in 1520"], fact: "Henry met Francis I of France near Calais in 1520 at the Field of the Cloth of Gold." },
  { tier: 2, accept: ["Richard III", "Richard 3", "Richard the Third", "Richard", "King Richard III"], display: "Richard III", clues: ["the Yorkist king killed at the Battle of Bosworth in 1485"], fact: "Richard III was killed at Bosworth, helped by the Stanleys switching to Henry Tudor's side." },
  { tier: 2, accept: A.catherineParr, display: "Catherine Parr", clues: ["Henry's sixth wife, who outlived him", "the clever widow and author who helped reunite Henry with his daughters"], fact: "Catherine Parr married Henry in 1543 and survived him." },
  { tier: 3, accept: ["Duke of Norfolk", "Norfolk", "Thomas Howard", "Thomas Howard Duke of Norfolk"], display: "the Duke of Norfolk", clues: ["the duke who negotiated with the Pilgrimage of Grace rebels, promising pardons and a parliament in the north"], fact: "The Duke of Norfolk's army was much smaller than the rebels', so he negotiated — and Henry later broke the promises." },
  { tier: 3, accept: ["John Fisher", "Fisher", "Bishop Fisher", "Bishop John Fisher", "Saint John Fisher"], display: "Bishop John Fisher", clues: ["the bishop executed in the summer of 1535, the same summer as Thomas More"], fact: "Bishop John Fisher, like More, refused to accept Henry's supremacy and was executed in 1535." },
  { tier: 3, accept: ["Campeggio", "Cardinal Campeggio", "Lorenzo Campeggio"], display: "Cardinal Campeggio", clues: ["the Pope's representative at the Blackfriars court in 1529, who adjourned the case"], fact: "Cardinal Campeggio adjourned the Blackfriars court in July 1529 and the case was moved to Rome." },
  { tier: 3, accept: ["Leo X", "Pope Leo X", "Leo", "Leo 10", "Pope Leo", "Leo the Tenth"], display: "Pope Leo X", clues: ["the Pope who named Henry ‘Defender of the Faith’ in 1521"], fact: "Pope Leo X gave Henry the title Fidei Defensor in 1521." },
  { tier: 3, accept: A.anneCleves, display: "Anne of Cleves", clues: ["the wife from a German state whose marriage was annulled after six months", "the former queen who lived on comfortably in England as the ‘King's sister’"], fact: "Anne of Cleves was a political match arranged by Cromwell; the 1540 marriage was annulled." },
  { tier: 3, accept: ["Margaret Beaufort", "Lady Margaret Beaufort", "Beaufort"], display: "Margaret Beaufort", clues: ["Henry Tudor's mother, through whom his weak Lancastrian claim came"], fact: "Henry Tudor's claim came through his mother, Margaret Beaufort." },
];

const whosWho: Drill = {
  id: "henry-viii.whos-who",
  topicId: "henry-viii",
  title: "Who's who in Henry's England?",
  level: 1,
  guideRef: "young-henry",
  generate(rng, tier) {
    const p = rng.pick(inTier(PEOPLE, tier));
    const clue = tier === 1 ? p.clues[0] : rng.pick(p.clues);
    const prompt = rng.bool() ? `Who was ${clue}?` : `Name the person: ${clue}.`;
    return {
      prompt,
      answer: text(p.accept, p.display),
      solution: [`${p.display}.`, p.fact],
      hint: "Think about which part of the story this belongs to — the Tudor rise, Wolsey's years, the break with Rome, the monasteries or the wives.",
      traps: p.traps,
    };
  },
};

// ---------------------------------------------------------------------------
// 3. Six wives: order and fates
// ---------------------------------------------------------------------------

type Fate = "annulled" | "beheaded" | "died" | "survived";

const FATE_ACCEPT: Record<Fate, string[]> = {
  annulled: ["annulled", "annulment", "marriage annulled", "divorced", "divorce", "annulled (divorced)"],
  beheaded: ["beheaded", "executed", "execution", "beheading", "head cut off"],
  died: ["died", "she died", "died in childbirth", "died after childbirth", "died after giving birth", "death"],
  survived: ["survived", "survived him", "survived Henry", "outlived him", "outlived Henry", "outlived"],
};

interface Wife {
  n: number;
  name: string;
  accept: string[];
  fate: Fate;
  married: number;
  detail: string;
  clues: string[];
  fateTrap?: Trap;
}

const WIVES: Wife[] = [
  { n: 1, name: "Catherine of Aragon", accept: A.catherineAragon, fate: "annulled", married: 1509, detail: "Married 1509; the marriage was annulled in 1533 and she died in 1536. Mother of Mary.", clues: ["the Spanish princess who had first been married to Henry's brother Arthur", "the mother of Mary I, whose 24-year marriage was declared void by Cranmer in 1533"] },
  { n: 2, name: "Anne Boleyn", accept: A.anneBoleyn, fate: "beheaded", married: 1533, detail: "Married January 1533; beheaded May 1536 on charges most historians think were invented. Mother of Elizabeth.", clues: ["the mother of Elizabeth I, executed in 1536", "the wife Henry broke with Rome to marry"] },
  { n: 3, name: "Jane Seymour", accept: A.janeSeymour, fate: "died", married: 1536, detail: "Married 1536, eleven days after Anne's execution; died in 1537 days after giving birth to Edward.", clues: ["the mother of Edward VI, who died days after his birth", "the wife Henry married eleven days after Anne Boleyn's execution"], fateTrap: { spec: text(FATE_ACCEPT.beheaded), feedback: "Jane Seymour was not executed — she died after giving birth to Edward in 1537." } },
  { n: 4, name: "Anne of Cleves", accept: A.anneCleves, fate: "annulled", married: 1540, detail: "Married 1540 as a political match arranged by Cromwell; annulled after six months. She lived on as the ‘King's sister’.", clues: ["the political match arranged by Cromwell, annulled after six months in 1540", "the wife who lived on in England as the ‘King's sister’"], fateTrap: { spec: text(FATE_ACCEPT.beheaded), feedback: "Anne of Cleves kept her head — her marriage was annulled. The fifth wife, Catherine Howard, was beheaded." } },
  { n: 5, name: "Catherine Howard", accept: A.catherineHoward, fate: "beheaded", married: 1540, detail: "Married 1540, much younger than Henry; executed for adultery in 1542.", clues: ["the young wife executed for adultery in 1542", "the wife Henry married in 1540, just after his fourth marriage was annulled"], fateTrap: { spec: text(FATE_ACCEPT.survived), feedback: "That's the sixth wife, Catherine Parr. Catherine Howard, the fifth, was beheaded in 1542." } },
  { n: 6, name: "Catherine Parr", accept: A.catherineParr, fate: "survived", married: 1543, detail: "Married 1543; a clever widow and author who helped reunite Henry with his daughters. She outlived him.", clues: ["the clever widow and author who outlived Henry", "the wife Henry married in 1543, who helped reunite him with his daughters"] },
];

const RHYME = "‘divorced, beheaded, died, divorced, beheaded, survived’";

const sixWives: Drill = {
  id: "henry-viii.six-wives",
  topicId: "henry-viii",
  title: "Six wives: order and fates",
  level: 1,
  guideRef: "six-wives",
  generate(rng, tier) {
    const w = rng.pick(WIVES);
    const kinds = tier === 1 ? ["fate", "fate2", "who", "number"] : tier === 2 ? ["fate", "who", "number", "clue"] : ["clue", "number", "fate2", "married"];
    const kind = rng.pick(kinds);
    const fateLine = `${w.name} was wife number ${w.n}. ${w.detail}`;
    if (kind === "fate" || kind === "fate2") {
      const prompt =
        kind === "fate"
          ? `What happened to Henry VIII's ${ordinal(w.n)} wife, **${w.name}**? Answer *annulled*, *beheaded*, *died* or *survived*.`
          : `How did **${w.name}**'s marriage to Henry end? Answer *annulled*, *beheaded*, *died* or *survived*.`;
      return {
        prompt,
        answer: text(FATE_ACCEPT[w.fate], w.fate),
        solution: [fateLine, w.fate === "annulled" ? `The rhyme ${RHYME} says ‘divorced’, but strictly the marriage was annulled — declared never to have been valid.` : `The rhyme ${RHYME} helps: wife ${w.n} is ‘${["divorced", "beheaded", "died", "divorced", "beheaded", "survived"][w.n - 1]}’.`],
        hint: `Use the rhyme ${RHYME} — count along to wife number ${w.n}.`,
        traps: w.fateTrap ? [w.fateTrap] : undefined,
      };
    }
    if (kind === "who") {
      const prev = WIVES.find((x) => x.n === w.n - 1);
      return {
        prompt: `Who was Henry VIII's ${ordinal(w.n)} wife?`,
        answer: text(w.accept, w.name),
        solution: [fateLine, "In order: Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, Catherine Parr."],
        hint: "Two Annes and three Catherines — Jane is the odd one out, in the middle.",
        traps: prev ? [{ spec: text(prev.accept), feedback: `${prev.name} was wife number ${prev.n}. Count one further on.` }] : undefined,
      };
    }
    if (kind === "number") {
      return {
        prompt: `Was **${w.name}** Henry VIII's 1st, 2nd, 3rd, 4th, 5th or 6th wife? Type a number from 1 to 6.`,
        answer: { type: "number", value: w.n },
        solution: [fateLine, "In order: Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, Catherine Parr."],
        hint: "The first wife married Henry in 1509; the last in 1543.",
      };
    }
    if (kind === "married") {
      return {
        prompt: `In which year did Henry VIII marry his ${ordinal(w.n)} wife, **${w.name}**?`,
        answer: year(w.married),
        solution: [fateLine],
        hint: w.n === 1 ? "The same year he became king." : w.n <= 3 ? "Between 1530 and 1537." : "Between 1540 and 1543.",
      };
    }
    const clue = rng.pick(w.clues);
    return {
      prompt: `Which of Henry VIII's six wives was ${clue}?`,
      answer: text(w.accept, w.name),
      solution: [fateLine],
      hint: "Run through the order: Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, Catherine Parr.",
    };
  },
};

// ---------------------------------------------------------------------------
// 4. Key terms
// ---------------------------------------------------------------------------

interface Term {
  tier: Tier;
  accept: string[];
  display: string;
  def: string;
  note: string;
  traps?: Trap[];
}

const SUPREMACY = ["Act of Supremacy", "Supremacy Act", "Act of Supremacy 1534", "the Act of Supremacy"];
const SUCCESSION = ["Act of Succession", "Acts of Succession", "Succession Act", "the Act of Succession"];

const TERMS: Term[] = [
  { tier: 1, accept: SUPREMACY, display: "the Act of Supremacy", def: "the 1534 law passed by Parliament that made Henry ‘the only Supreme Head in earth of the Church of England’", note: "The Act of Supremacy (1534) transferred the Pope's authority over the English Church to the Crown.", traps: [{ spec: text(SUCCESSION), feedback: "The Acts of Succession set who would inherit the crown. The law about heading the Church was different." }] },
  { tier: 1, accept: ["dissolution of the monasteries", "dissolution", "the dissolution", "dissolving the monasteries"], display: "the dissolution of the monasteries", def: "the closing of every monastery, nunnery and friary between 1536 and 1540, with their land and wealth taken by the Crown", note: "Smaller houses closed in 1536 and the larger ones by 1540." },
  { tier: 1, accept: ["Pilgrimage of Grace", "the Pilgrimage of Grace", "Pilgrimage"], display: "the Pilgrimage of Grace", def: "the 1536 rebellion in the north of England, led by Robert Aske, demanding that the monasteries be saved", note: "About 30,000 rebels rose; the rising ended with broken promises and around 200 executions." },
  { tier: 1, accept: ["annulment", "an annulment", "annul", "annulled", "annulling"], display: "annulment", def: "a declaration that a marriage was never valid in the first place — not the same as a divorce", note: "Henry's first and fourth marriages were annulled.", traps: [{ spec: text(["divorce", "divorced"]), feedback: "Close — but a divorce ends a valid marriage. Henry's lawyers argued his marriage had never been valid at all." }] },
  { tier: 1, accept: ["divine right of kings", "divine right", "the divine right of kings"], display: "the divine right of kings", def: "the belief that a monarch is chosen by God, so disobeying the king means disobeying God", note: "Henry believed in divine right — but still needed Parliament to agree big taxes." },
  { tier: 1, accept: ["Tudor rose", "the Tudor rose"], display: "the Tudor rose", def: "the red-and-white symbol of Henry VII's 1486 marriage, joining the houses of Lancaster and York", note: "Red stood for Lancaster, white for York." },
  { tier: 1, accept: ["Wars of the Roses", "the Wars of the Roses"], display: "the Wars of the Roses", def: "the civil wars of 1455–1487 between the royal houses of Lancaster and York", note: "Memories of these wars made Henry desperate for a clear male heir." },
  { tier: 1, accept: ["Defender of the Faith", "Fidei Defensor", "Defender of Faith", "Fid Def"], display: "Defender of the Faith", def: "the title Pope Leo X gave Henry in 1521 for writing a book attacking Martin Luther", note: "Fidei Defensor — ironic, as Henry broke with Rome thirteen years later." },
  { tier: 1, accept: ["Renaissance", "the Renaissance"], display: "the Renaissance", def: "the ‘rebirth’ of interest in classical learning and the arts that spread from Italy", note: "The young Henry fitted its ideal of a prince: athletic, educated and musical." },
  { tier: 1, accept: ["Treason Act", "the Treason Act", "Treason Act 1534", "Act of Treason"], display: "the Treason Act", def: "the 1534 law that made even spoken or written words against the king's titles a crime of treason", note: "It was used against opponents such as Sir Thomas More." },
  { tier: 1, accept: ["Field of the Cloth of Gold", "the Field of the Cloth of Gold", "Field of Cloth of Gold"], display: "the Field of the Cloth of Gold", def: "the lavish 1520 meeting near Calais between Henry VIII and Francis I of France", note: "Tents of golden fabric, feasting and jousting — a display of wealth and power." },
  { tier: 1, accept: ["Supreme Head", "Supreme Head of the Church of England", "Supreme Head of the Church", "Head of the Church", "Head of the Church of England"], display: "Supreme Head of the Church of England", def: "the title Henry took in place of the Pope's authority over the English Church", note: "Parliament gave Henry this title in the Act of Supremacy (1534)." },
  { tier: 2, accept: ["Valor Ecclesiasticus", "the Valor Ecclesiasticus", "Valor"], display: "the Valor Ecclesiasticus", def: "Cromwell's 1535 survey of the income and wealth of the whole Church", note: "You don't count the money that carefully unless you plan to take it." },
  { tier: 2, accept: ["gentry", "the gentry"], display: "the gentry", def: "wealthy landowners below the nobility, many of whom bought former monastery land", note: "Owning Church land gave them a stake in keeping the break with Rome." },
  { tier: 2, accept: SUCCESSION, display: "an Act of Succession", def: "a law by which Parliament set the order in which Henry's children would inherit the crown", note: "Acts of 1534, 1536 and 1543 — finally Edward, then Mary, then Elizabeth.", traps: [{ spec: text(SUPREMACY), feedback: "The Act of Supremacy made Henry head of the Church. The laws about who inherits were different." }] },
  { tier: 2, accept: ["Six Articles", "the Six Articles", "Act of Six Articles"], display: "the Six Articles", def: "the 1539 law that kept Catholic beliefs such as the Mass, confession and unmarried priests", note: "Proof that Henry rejected the Pope, not Catholic belief." },
  { tier: 2, accept: ["Great Matter", "the Great Matter", "King's Great Matter", "the King's Great Matter"], display: "the King's ‘Great Matter’", def: "the name for Henry's attempt, from 1527, to have his marriage to Catherine of Aragon annulled", note: "The Great Matter led to Wolsey's fall and, in the end, the break with Rome." },
  { tier: 2, accept: ["Lord Chancellor", "Chancellor"], display: "Lord Chancellor", def: "the office Wolsey held from 1515 and Thomas More after him — the king's leading minister and head of the law courts", note: "Wolsey lost the post in 1529; More resigned it in 1532." },
  { tier: 2, accept: ["propaganda"], display: "propaganda", def: "images or writing designed to persuade people of a message — like Holbein's portrait of a mighty Henry", note: "Holbein's Whitehall painting (1537) projected strength when Henry was ageing and injured." },
  { tier: 2, accept: ["Sack of Rome", "the Sack of Rome"], display: "the Sack of Rome", def: "the capture and plunder of the Pope's city by Charles V's troops in 1527", note: "It left Pope Clement VII in the power of Catherine of Aragon's nephew." },
  { tier: 3, accept: ["dispensation", "a dispensation", "papal dispensation"], display: "a dispensation", def: "special permission from the Pope to do something Church law normally forbids — such as marrying your brother's widow", note: "A dispensation of 1503–04 had allowed Henry to marry Catherine." },
  { tier: 3, accept: ["Amicable Grant", "the Amicable Grant"], display: "the Amicable Grant", def: "Wolsey's 1525 attempt to raise a tax without Parliament, dropped after strong resistance", note: "It showed the limits of royal power: big taxes needed Parliament." },
  { tier: 3, accept: ["Act in Restraint of Appeals", "Restraint of Appeals", "the Act in Restraint of Appeals", "Act of Appeals"], display: "the Act in Restraint of Appeals", def: "the 1533 law that stopped legal appeals to Rome, declaring ‘this realm of England is an empire’", note: "It meant Catherine could not appeal to the Pope against Cranmer's verdict." },
  { tier: 3, accept: ["Submission of the Clergy", "the Submission of the Clergy"], display: "the Submission of the Clergy", def: "the 1532 agreement in which the clergy accepted they could not make Church laws without the king", note: "The first step of the break with Rome." },
  { tier: 3, accept: ["visitors", "visitations", "visitation", "commissioners", "royal visitors", "Cromwell's visitors"], display: "visitors (visitations)", def: "the officials Cromwell sent in 1535 to inspect monasteries and report on the monks' behaviour", note: "They worked fast and knew what Cromwell wanted, so their reports must be used with care." },
];

const keyTerms: Drill = {
  id: "henry-viii.key-terms",
  topicId: "henry-viii",
  title: "Key term from its definition",
  level: 2,
  guideRef: "break-with-rome",
  generate(rng, tier) {
    const t = rng.pick(inTier(TERMS, tier));
    const d = t.def.charAt(0).toUpperCase() + t.def.slice(1);
    const prompt = rng.bool() ? `Which key term means: *${t.def}*?` : `Name the key term. **${d}.**`;
    return {
      prompt,
      answer: text(t.accept, t.display),
      solution: [`${t.display.charAt(0).toUpperCase() + t.display.slice(1)}.`, t.note],
      hint: "Look for a date or a name in the definition and place it in the story first.",
      traps: t.traps,
    };
  },
};

// ---------------------------------------------------------------------------
// 5. The Great Matter
// ---------------------------------------------------------------------------

const GREAT_MATTER: QA[] = [
  { tier: 1, prompts: ["Which book of the Bible did Henry use to argue that marrying his brother's widow was against God's law?", "Henry claimed the Bible said a man who marries his brother's wife will be childless. Which book of the Bible?"], answer: text(["Leviticus", "Leviticus 20:21", "Leviticus 20", "the Book of Leviticus"], "Leviticus"), solution: ["Leviticus (20:21).", "Henry argued that his lack of a son was God's punishment for marrying Arthur's widow."], hint: "It is in the Old Testament, among the books of law." },
  { tier: 1, prompts: ["Which Pope refused to annul Henry's marriage to Catherine of Aragon?", "Name the Pope who delayed Henry's ‘Great Matter’ for years."], answer: text(A.clement, "Pope Clement VII"), solution: ["Pope Clement VII.", "After 1527 he was in the power of Charles V, Catherine's nephew, so he played for time."], hint: "Not the Pope who named Henry Defender of the Faith — the next-but-one." },
  { tier: 1, prompts: ["How was the Emperor Charles V related to Catherine of Aragon? (One word.)", "Charles V was Catherine of Aragon's … ? (Give the family relationship.)"], answer: text(["nephew", "her nephew", "he was her nephew"], "her nephew"), solution: ["He was her nephew.", "So annulling Catherine's marriage would insult the most powerful ruler in Europe."], hint: "Catherine was his aunt.", traps: [{ spec: text(["brother", "son", "cousin"]), feedback: "Not quite — Catherine was Charles V's aunt, so he was her nephew." }] },
  { tier: 1, prompts: ["Which city did Charles V's unpaid troops sack in May 1527?", "In 1527 the Pope's own city was captured by Charles V's troops. Which city?"], answer: text(["Rome"], "Rome"), solution: ["Rome.", "After the Sack of Rome, Pope Clement VII was effectively in Charles V's power."], hint: "The city where the Pope lived." },
  { tier: 1, prompts: ["What was the name of Catherine of Aragon's only child to survive?", "By the mid-1520s Henry had only one surviving legitimate child. Who?"], answer: text(A.mary, "Mary (later Mary I)"), solution: ["Princess Mary, born in 1516.", "Catherine had been pregnant at least six times, but only Mary survived."], hint: "She later became Queen Mary I.", traps: [{ spec: text(A.elizabeth), feedback: "Elizabeth was Anne Boleyn's daughter, born in 1533." }] },
  { tier: 1, prompts: ["What is the word for a declaration that a marriage was never valid in the first place?", "Henry did not want a divorce — he wanted his marriage declared never valid. What is this called?"], answer: text(["annulment", "an annulment", "annul", "annulled"], "annulment"), solution: ["An annulment.", "Henry argued that his marriage to his brother's widow had never been a true marriage."], hint: "It begins with ‘ann…’.", traps: [{ spec: text(["divorce", "divorced"]), feedback: "A divorce ends a valid marriage. Henry claimed his marriage had never been valid at all." }] },
  { tier: 1, prompts: ["Which minister fell from power in 1529 after failing to get Henry's annulment?", "Who lost his post as Lord Chancellor in 1529 because the Blackfriars court failed?"], answer: text(A.wolsey, "Cardinal Wolsey"), solution: ["Cardinal Thomas Wolsey.", "He was arrested for treason in 1530 and died on the journey to London."], hint: "The cardinal who had run the government since 1515.", traps: [confuseCromwell] },
  { tier: 1, prompts: ["By about 1526 Henry had fallen in love with which lady-in-waiting?", "Which woman refused to become simply Henry's mistress, making him want a new marriage?"], answer: text(A.anneBoleyn, "Anne Boleyn"), solution: ["Anne Boleyn.", "Marrying her offered Henry both love and — he hoped — a legitimate son."], hint: "She had been educated at the French court." },
  { tier: 1, prompts: ["Which civil wars between Lancaster and York did people fear might return if Henry had no son?", "Without a clear male heir, many feared a return of which civil wars of 1455–1487?"], answer: text(["Wars of the Roses", "the Wars of the Roses"], "the Wars of the Roses"), solution: ["The Wars of the Roses.", "A disputed succession had brought decades of war — the conflict that put the Tudors on the throne."], hint: "Red rose against white rose." },
  { tier: 2, prompts: ["In which year did Charles V's troops sack Rome?", "The Sack of Rome left the Pope in the Emperor's power. Which year?"], answer: year(1527), solution: ["1527 (May).", "It came just as Henry began seeking his annulment."], hint: "The same year Henry first sought his annulment." },
  { tier: 2, prompts: ["In which year was Princess Mary born?", "Catherine of Aragon's daughter Mary was born in which year?"], answer: year(1516), solution: ["1516.", "She was the only one of Catherine's children to survive."], hint: "Seven years after Henry and Catherine married in 1509." },
  { tier: 2, prompts: ["Which woman had tried to rule England in her own right in the 1100s — leading to civil war?", "Henry feared female rule partly because of a 12th-century queen whose claim led to civil war. Who?"], answer: text(["Matilda", "Empress Matilda", "Maud", "Queen Matilda"], "Matilda"), solution: ["Matilda.", "Her struggle for the crown in the 1100s ended in civil war — one reason Henry wanted a son."], hint: "She was the daughter of Henry I." },
  { tier: 2, prompts: ["Where in London did the special church court meet in 1529 to hear Henry's case?", "Catherine knelt before Henry, appealed to him, then walked out of a church court in 1529. Where did it meet?"], answer: text(["Blackfriars", "Blackfriars court", "the Blackfriars court"], "Blackfriars"), solution: ["Blackfriars, London.", "The court was adjourned in July 1529 and the case moved to Rome — Wolsey had failed."], hint: "It was named after a Dominican friary in London." },
  { tier: 2, prompts: ["What name is given to Henry's attempt, from 1527, to have his first marriage annulled?", "Historians call Henry's campaign to end his marriage to Catherine the King's … what?"], answer: text(["Great Matter", "the Great Matter", "King's Great Matter", "the King's Great Matter"], "the King's ‘Great Matter’"), solution: ["The King's ‘Great Matter’.", "It dominated English politics from 1527 until the break with Rome."], hint: "Two words: an adjective and a noun meaning ‘business’." },
  { tier: 2, prompts: ["In which year did Wolsey lose his post as Lord Chancellor?", "The Blackfriars court failed and Wolsey fell. Which year?"], answer: year(1529), solution: ["1529.", "He was arrested for treason in 1530 and died on the way to London."], hint: "Two years after the Sack of Rome.", traps: [{ spec: year(1530), feedback: "Wolsey was arrested and died in 1530 — but he lost his post in 1529." }] },
  { tier: 3, prompts: ["Who was the Pope's representative at the Blackfriars court in 1529?", "Which cardinal, sent by the Pope, adjourned the Blackfriars court in July 1529?"], answer: text(["Campeggio", "Cardinal Campeggio", "Lorenzo Campeggio"], "Cardinal Campeggio"), solution: ["Cardinal Campeggio.", "He adjourned the court and the case moved to Rome, where Charles V's influence was strong."], hint: "An Italian cardinal whose name begins with C." },
  { tier: 3, prompts: ["Which Pope had given the special permission (dispensation) for Henry to marry Catherine in 1503–04?", "Granting Henry's annulment would mean admitting that an earlier Pope had made a mistake. Which Pope had allowed the marriage?"], answer: text(["Julius II", "Pope Julius II", "Julius", "Julius 2", "Pope Julius"], "Pope Julius II"), solution: ["Pope Julius II.", "Annulling the marriage would mean saying a previous Pope had been wrong — one more reason Clement VII hesitated."], hint: "Not Leo X or Clement VII — the Pope before both of them." },
  { tier: 3, prompts: ["Which book of the Bible seemed to say the opposite of Leviticus — that a man should marry his dead brother's widow?", "Catherine's supporters pointed to a passage that seemed to contradict Leviticus. Which book of the Bible was it in?"], answer: text(["Deuteronomy", "Deuteronomy 25:5", "Deuteronomy 25"], "Deuteronomy"), solution: ["Deuteronomy (25:5).", "The Bible could be quoted on both sides — so Henry's case was not as clear-cut as he claimed."], hint: "Another Old Testament book of law, fifth in the Bible." },
];

const greatMatter: Drill = {
  id: "henry-viii.great-matter",
  topicId: "henry-viii",
  title: "The King's ‘Great Matter’: why no annulment?",
  level: 2,
  guideRef: "the-great-matter",
  generate(rng, tier) {
    return fromQA(rng, GREAT_MATTER, tier);
  },
};

// ---------------------------------------------------------------------------
// 6. The succession and Henry's children
// ---------------------------------------------------------------------------

const ORDER_LINE = "The 1543 Act of Succession set the order: Edward, then Mary, then Elizabeth — a son before daughters, then the daughters by age.";

const SUCCESSION_QA: QA[] = [
  { tier: 1, prompts: ["Who was the mother of Edward VI?", "Edward VI's mother died days after his birth in 1537. Who was she?"], answer: text(A.janeSeymour, "Jane Seymour"), solution: ["Jane Seymour, Henry's third wife.", "She died soon after Edward was born in October 1537."], hint: "Henry's third wife." },
  { tier: 1, prompts: ["Who was the mother of Elizabeth I?", "Elizabeth was born in September 1533. Who was her mother?"], answer: text(A.anneBoleyn, "Anne Boleyn"), solution: ["Anne Boleyn, Henry's second wife.", "Henry had broken with Rome to marry her — and hoped for a son."], hint: "Henry's second wife." },
  { tier: 1, prompts: ["Who was the mother of Mary I?", "Mary was born in 1516. Who was her mother?"], answer: text(A.catherineAragon, "Catherine of Aragon"), solution: ["Catherine of Aragon, Henry's first wife.", "Mary was Catherine's only child to survive."], hint: "Henry's first wife." },
  { tier: 1, prompts: ["Which of Henry's children ruled first after he died in 1547?", "In 1547 Henry died. Which of his three children became monarch first?"], answer: text(A.edward, "Edward VI"), solution: ["Edward VI (1547–1553), though he was the youngest.", ORDER_LINE], hint: "In Tudor England a son came before his sisters.", traps: [{ spec: text(A.mary), feedback: "Mary was the eldest, but a son came before daughters — she ruled second." }] },
  { tier: 1, prompts: ["Which of Henry's children ruled after Edward VI?", "Edward VI died in 1553. Which of his half-sisters became queen next?"], answer: text(A.mary, "Mary I"), solution: ["Mary I (1553–1558).", ORDER_LINE], hint: "The elder of the two daughters.", traps: [{ spec: text(A.elizabeth), feedback: "Elizabeth was younger, so she came after Mary." }] },
  { tier: 1, prompts: ["Which of Henry's children was the last to rule?", "Who ruled after Mary I, from 1558?"], answer: text(A.elizabeth, "Elizabeth I"), solution: ["Elizabeth I (1558–1603).", ORDER_LINE], hint: "The youngest daughter — and the longest reign." },
  { tier: 1, prompts: ["Henry's only legitimate son — what was his name?", "Which child of Henry VIII was born in 1537?"], answer: text(A.edward, "Edward (Edward VI)"), solution: ["Edward, born October 1537.", "His birth finally gave Henry the male heir he had wanted for over twenty years."], hint: "He became king aged nine." },
  { tier: 1, prompts: ["Which of Henry's children was born in 1533?", "Anne Boleyn gave birth to which child in September 1533?"], answer: text(A.elizabeth, "Elizabeth"), solution: ["Elizabeth, born September 1533.", "Not the hoped-for son — but she later ruled for 45 years."], hint: "She became the last Tudor monarch." },
  { tier: 2, prompts: ["The 1534 Act of Succession made Elizabeth heir. Which of Henry's daughters did it declare illegitimate?", "Under the 1534 Act of Succession, which daughter lost her place as heir?"], answer: text(A.mary, "Mary"), solution: ["Mary.", "With her parents' marriage declared void, Mary was treated as illegitimate."], hint: "The daughter of the annulled first marriage.", traps: [{ spec: text(A.elizabeth), feedback: "In 1534 Elizabeth became heir. It was her half-sister who was declared illegitimate." }] },
  { tier: 2, prompts: ["After Anne Boleyn's fall, the 1536 Act of Succession declared which daughter illegitimate too?", "Which of Henry's daughters was declared illegitimate by the Act of 1536?"], answer: text(A.elizabeth, "Elizabeth"), solution: ["Elizabeth.", "After Anne's execution in 1536, both daughters were now treated as illegitimate."], hint: "Her mother had just been executed.", traps: [{ spec: text(A.mary), feedback: "Mary had already been declared illegitimate in 1534. In 1536 it was her half-sister's turn." }] },
  { tier: 2, prompts: ["In which year did Parliament pass the Act of Succession that set the order Edward, Mary, Elizabeth?", "The final Act of Succession put both daughters back in line after Edward. Which year?"], answer: year(1543), solution: ["1543.", ORDER_LINE], hint: "The year Henry married his last wife.", traps: [{ spec: year(1534), feedback: "The 1534 Act made Elizabeth heir. The final order came in a later Act." }] },
  { tier: 2, prompts: ["In which year did Elizabeth I's reign begin?", "Mary I died and Elizabeth became queen. Which year?"], answer: year(1558), solution: ["1558.", "Elizabeth ruled from 1558 to 1603."], hint: "Edward ruled 1547–53; Mary for five years after him." },
  { tier: 2, prompts: ["In which year did Edward VI's reign end and Mary I's begin?", "Edward VI died young. In which year did Mary I become queen?"], answer: year(1553), solution: ["1553.", "Edward VI ruled 1547–1553; Mary I ruled 1553–1558."], hint: "Edward's reign lasted six years from 1547." },
  { tier: 3, prompts: ["In which year did Elizabeth I's reign end?", "Elizabeth I, the last Tudor monarch, died in which year?"], answer: year(1603), solution: ["1603.", "Her 45-year reign was the longest of Henry's children — a daughter's reign, ironically."], hint: "She reigned for 45 years from 1558." },
  { tier: 3, prompts: ["How many years did Elizabeth I reign (1558–1603)?", "Elizabeth I ruled from 1558 to 1603. How many years is that?"], answer: { type: "number", value: 45 }, solution: ["1603 − 1558 = 45 years.", "Longer than Edward VI (6 years) and Mary I (5 years) put together several times over."], hint: "Subtract the start year from the end year." },
  { tier: 3, prompts: ["How old was Edward VI when he became king in 1547? (He was born in October 1537; Henry died in January 1547.)", "Edward was born in October 1537 and became king in January 1547. How old was he?"], answer: { type: "number", value: 9 }, solution: ["He was 9.", "A child king — so others governed in his name."], hint: "He hadn't yet reached his tenth birthday." },
  { tier: 3, prompts: ["Edward was the youngest of Henry's three children, yet he ruled first. Was that because he was a *son* or because he was the *eldest*? Answer *son* or *eldest*.", "Why did Edward VI rule before Mary and Elizabeth — because he was Henry's *son*, or because he was the *eldest*? Answer *son* or *eldest*."], answer: text(["son", "a son", "because he was a son", "male", "boy", "male heir"], "son"), solution: ["Because he was a son: in Tudor England a son came before daughters.", ORDER_LINE], hint: "Edward was born in 1537 — Mary in 1516 and Elizabeth in 1533.", traps: [{ spec: text(["eldest", "oldest", "the eldest"]), feedback: "Edward was actually the youngest (born 1537). He ruled first because a son came before daughters." }] },
];

const succession: Drill = {
  id: "henry-viii.succession",
  topicId: "henry-viii",
  title: "Henry's children and the succession",
  level: 2,
  guideRef: "six-wives",
  generate(rng, tier) {
    return fromQA(rng, SUCCESSION_QA, tier);
  },
};

// ---------------------------------------------------------------------------
// 7. Which came first?
// ---------------------------------------------------------------------------

interface Ev {
  year: number;
  label: string;
  accept: string[];
  tier: Tier;
}

// One event per year, so no pair can ever share a year.
const EVENTS: Ev[] = [
  { year: 1485, tier: 1, label: "the Battle of Bosworth", accept: ["Battle of Bosworth", "Bosworth", "the Battle of Bosworth"] },
  { year: 1486, tier: 2, label: "Henry VII's marriage to Elizabeth of York", accept: ["Henry VII's marriage to Elizabeth of York", "Henry VII marries Elizabeth of York", "marriage to Elizabeth of York", "Elizabeth of York", "Tudor rose"] },
  { year: 1502, tier: 1, label: "the death of Prince Arthur", accept: ["the death of Prince Arthur", "death of Prince Arthur", "Arthur's death", "Prince Arthur dies", "Arthur dies", "Arthur", "Prince Arthur"] },
  { year: 1509, tier: 1, label: "Henry VIII becoming king", accept: ["Henry VIII becoming king", "Henry VIII becomes king", "Henry becomes king", "Henry VIII king", "Henry's accession", "accession", "Henry VIII"] },
  { year: 1513, tier: 2, label: "the Battle of Flodden", accept: ["the Battle of Flodden", "Battle of Flodden", "Flodden"] },
  { year: 1516, tier: 2, label: "the birth of Princess Mary", accept: ["the birth of Princess Mary", "birth of Mary", "Mary's birth", "Mary born", "Princess Mary", "Mary"] },
  { year: 1517, tier: 3, label: "Martin Luther's first attack on the Catholic Church", accept: ["Martin Luther's first attack on the Catholic Church", "Luther's attack", "Luther", "Martin Luther", "Luther attacks the Church"] },
  { year: 1520, tier: 1, label: "the Field of the Cloth of Gold", accept: ["the Field of the Cloth of Gold", "Field of the Cloth of Gold", "Field of Cloth of Gold", "Cloth of Gold"] },
  { year: 1521, tier: 2, label: "Henry being named Defender of the Faith", accept: ["Henry being named Defender of the Faith", "Defender of the Faith", "Henry named Defender of the Faith", "Fidei Defensor"] },
  { year: 1525, tier: 3, label: "the failure of the Amicable Grant", accept: ["the failure of the Amicable Grant", "Amicable Grant", "the Amicable Grant"] },
  { year: 1527, tier: 2, label: "the Sack of Rome", accept: ["the Sack of Rome", "Sack of Rome", "Rome sacked"] },
  { year: 1529, tier: 1, label: "the fall of Wolsey", accept: ["the fall of Wolsey", "fall of Wolsey", "Wolsey's fall", "Wolsey falls", "Wolsey", "Blackfriars court", "Blackfriars"] },
  { year: 1532, tier: 3, label: "the Submission of the Clergy", accept: ["the Submission of the Clergy", "Submission of the Clergy", "Submission"] },
  { year: 1533, tier: 1, label: "Henry's marriage to Anne Boleyn", accept: ["Henry's marriage to Anne Boleyn", "marriage to Anne Boleyn", "Henry marries Anne Boleyn", "Anne Boleyn", "marrying Anne Boleyn", "marriage to Anne"] },
  { year: 1534, tier: 1, label: "the Act of Supremacy", accept: ["the Act of Supremacy", "Act of Supremacy", "Supremacy"] },
  { year: 1535, tier: 2, label: "the execution of Thomas More", accept: ["the execution of Thomas More", "execution of Thomas More", "Thomas More's execution", "More executed", "Thomas More", "More"] },
  { year: 1536, tier: 1, label: "the Pilgrimage of Grace", accept: ["the Pilgrimage of Grace", "Pilgrimage of Grace", "Pilgrimage"] },
  { year: 1537, tier: 2, label: "the birth of Prince Edward", accept: ["the birth of Prince Edward", "birth of Edward", "Edward's birth", "Edward born", "Prince Edward", "Edward"] },
  { year: 1539, tier: 3, label: "the Six Articles", accept: ["the Six Articles", "Six Articles"] },
  { year: 1540, tier: 2, label: "the execution of Thomas Cromwell", accept: ["the execution of Thomas Cromwell", "execution of Cromwell", "Cromwell's execution", "Cromwell executed", "Thomas Cromwell", "Cromwell"] },
  { year: 1542, tier: 3, label: "the execution of Catherine Howard", accept: ["the execution of Catherine Howard", "execution of Catherine Howard", "Catherine Howard's execution", "Catherine Howard", "Katherine Howard", "Howard"] },
  { year: 1543, tier: 2, label: "Henry's marriage to Catherine Parr", accept: ["Henry's marriage to Catherine Parr", "marriage to Catherine Parr", "Henry marries Catherine Parr", "Catherine Parr", "Katherine Parr", "Parr"] },
  { year: 1547, tier: 1, label: "the death of Henry VIII", accept: ["the death of Henry VIII", "death of Henry VIII", "Henry's death", "Henry dies", "Henry VIII dies", "death of Henry"] },
];

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const whichFirst: Drill = {
  id: "henry-viii.which-came-first",
  topicId: "henry-viii",
  title: "Which came first?",
  level: 2,
  guideRef: "break-with-rome",
  generate(rng, tier) {
    const pool = tier === 1 ? EVENTS.filter((e) => e.tier === 1) : tier === 2 ? EVENTS.filter((e) => e.tier <= 2) : EVENTS;
    // Tier 1: far apart (≥ 8 years). Tier 2: 3+ years. Tier 3: close together (1–4 years).
    let a = pool[0], b = pool[1];
    for (let i = 0; i < 200; i++) {
      a = rng.pick(pool);
      b = rng.pick(pool);
      const gap = Math.abs(a.year - b.year);
      const ok = gap > 0 && (tier === 1 ? gap >= 8 : tier === 2 ? gap >= 3 : gap <= 4);
      if (ok) break;
    }
    const [early, late] = a.year < b.year ? [a, b] : [b, a];
    const prompt = rng.bool() ? `Which came first: **${a.label}** or **${b.label}**?` : `Put these in order — which happened earlier? **${cap(a.label)}** or **${b.label}**.`;
    return {
      prompt,
      answer: text(early.accept, cap(early.label)),
      solution: [`${cap(early.label)} came first (${early.year}); ${late.label} was in ${late.year}.`, `That is ${late.year - early.year} year${late.year - early.year === 1 ? "" : "s"} apart.`],
      hint: "Anchor each event to Henry's reign: before 1509, the Wolsey years (1509–1529), the break (1529–1536), or later.",
      traps: [{ spec: text(late.accept), feedback: `${cap(late.label)} was in ${late.year} — the other event came earlier, in ${early.year}.` }],
    };
  },
};

// ---------------------------------------------------------------------------
// 8. Dissolution: who gained, who lost?
// ---------------------------------------------------------------------------

interface Group {
  tier: Tier;
  who: string;
  gained: boolean;
  why: string;
}

const GROUPS: Group[] = [
  { tier: 1, who: "the Crown (Henry VIII's treasury)", gained: true, why: "The Crown took monastery land and income worth well over £100,000 a year." },
  { tier: 1, who: "the gentry who bought former monastery land", gained: true, why: "Wealthy landowners bought estates — and gained a stake in keeping the break with Rome." },
  { tier: 1, who: "the poor, who relied on monks' charity", gained: false, why: "Monasteries had given charity to the poor; that help disappeared." },
  { tier: 1, who: "the sick, who were cared for in monasteries", gained: false, why: "Monasteries cared for the sick; their closure removed that care." },
  { tier: 1, who: "monks, who lost their homes", gained: false, why: "Monks lost their homes and way of life, though many got small pensions." },
  { tier: 1, who: "nuns, who lost their convents", gained: false, why: "Nuns lost their homes, and they were not allowed to marry." },
  { tier: 1, who: "travellers, who had stayed in monasteries", gained: false, why: "Monasteries had housed travellers; those places to stay closed." },
  { tier: 1, who: "nobles granted former monastery estates", gained: true, why: "Land was sold or granted to nobles — by 1547 about two-thirds of it had left the Crown's hands." },
  { tier: 2, who: "local communities whose great abbey churches were stripped of lead and stone", gained: false, why: "Great churches at the heart of local life were stripped and left to ruin." },
  { tier: 2, who: "learning and scholarship, as monastic libraries were scattered", gained: false, why: "Many monastic libraries were scattered or destroyed." },
  { tier: 2, who: "children who had been taught by monks", gained: false, why: "Some monasteries taught children; that teaching stopped." },
  { tier: 2, who: "Henry's plans for wars and coastal forts", gained: true, why: "Monastery wealth paid for Henry's wars and forts without asking Parliament for unpopular taxes." },
  { tier: 3, who: "the Pope's influence in England", gained: false, why: "Monks belonged to orders that looked to Rome, so closing them removed centres of loyalty to the Pope." },
  { tier: 3, who: "abbots who refused to surrender their houses, such as the Abbot of Glastonbury", gained: false, why: "Abbots who resisted were executed — the Abbot of Glastonbury in 1539." },
  { tier: 3, who: "the king's power over the Church", gained: true, why: "With the monasteries gone, the last strongholds of papal loyalty disappeared and the Crown's control grew." },
  { tier: 3, who: "families who wanted the break with Rome to last", gained: true, why: "Families owning former Church land would lose it if the Pope returned — so the break became hard to reverse." },
];

const GAIN = ["gained", "gain", "gains", "won", "winner", "winners", "benefited", "benefit", "better off"];
const LOSE = ["lost", "lose", "loses", "loser", "losers", "worse off", "suffered"];

const gainedOrLost: Drill = {
  id: "henry-viii.gained-or-lost",
  topicId: "henry-viii",
  title: "Dissolution: who gained, who lost?",
  level: 2,
  guideRef: "dissolution-of-monasteries",
  generate(rng, tier) {
    const g = rng.pick(inTier(GROUPS, tier));
    const prompt = rng.pick([
      `Did **${g.who}** gain or lose from the dissolution of the monasteries (1536–1540)? Answer *gained* or *lost*.`,
      `Winner or loser? When the monasteries were closed, **${g.who}** … *gained* or *lost*?`,
      `By 1540 every monastery had closed. Overall, did **${g.who}** gain or lose? Answer *gained* or *lost*.`,
    ]);
    return {
      prompt,
      answer: text(g.gained ? GAIN : LOSE, g.gained ? "gained" : "lost"),
      solution: [`${g.gained ? "Gained" : "Lost"}.`, g.why],
      hint: "Ask: did monasteries give this group something (charity, care, a home) — or did their land and wealth flow to this group?",
      traps: [{ spec: text(g.gained ? LOSE : GAIN), feedback: g.gained ? "Think about where the monasteries' land and money went." : "Think about what the monasteries had provided before 1536." }],
    };
  },
};

// ---------------------------------------------------------------------------
// 9. Why break with Rome? Classify the evidence
// ---------------------------------------------------------------------------

type Cause = "love" | "heir" | "money" | "power" | "religion";

const CAUSE_ACCEPT: Record<Cause, string[]> = {
  love: ["love", "love for Anne", "love for Anne Boleyn", "passion", "Anne Boleyn"],
  heir: ["heir", "an heir", "a male heir", "male heir", "the heir", "succession", "son", "a son"],
  money: ["money", "wealth", "finance", "finances", "riches"],
  power: ["power", "royal power", "control", "authority", "the king's power"],
  religion: ["religion", "religious", "religious belief", "faith", "belief", "beliefs", "religious reform", "reform"],
};

interface Evidence {
  tier: Tier;
  text: string;
  cause: Cause;
  why: string;
}

const EVIDENCE: Evidence[] = [
  { tier: 1, cause: "love", text: "Henry had been married to Catherine for nearly 20 years, but only pressed for an annulment after he fell for Anne Boleyn in about 1526.", why: "This shows love for Anne drove the *timing* of the break." },
  { tier: 1, cause: "love", text: "Anne Boleyn refused to become simply Henry's mistress — he would have to marry her.", why: "Henry's passion for Anne could only be satisfied by a new marriage, which the Pope would not allow." },
  { tier: 1, cause: "heir", text: "After many pregnancies, only one of Catherine's children — a daughter, Mary — had survived.", why: "Henry needed a valid marriage so that a son would be legitimate." },
  { tier: 1, cause: "heir", text: "Henry feared that a female ruler would bring civil war, as with Matilda in the 1100s.", why: "The succession was the key to peace — Henry wanted a male heir." },
  { tier: 1, cause: "money", text: "After the break, payments from the English Church to Rome stopped.", why: "Church money now stayed in England — the Crown gained financially." },
  { tier: 1, cause: "money", text: "Within two years of the break, Cromwell's Valor Ecclesiasticus (1535) carefully counted the Church's wealth.", why: "You don't count the money that carefully unless you plan to take it." },
  { tier: 1, cause: "power", text: "The Act of Supremacy (1534) made Henry ‘and his heirs and successors’ Supreme Head of the Church of England.", why: "Far more than one marriage needed: a permanent transfer of power from the Pope to the Crown." },
  { tier: 1, cause: "power", text: "Henry would accept no foreign Pope above an English king.", why: "Henry wanted to be master in his own kingdom, Church included." },
  { tier: 1, cause: "religion", text: "Henry seems genuinely to have believed that marrying his brother's widow was a sin against God's law.", why: "His reading of Leviticus suggests real religious conviction, not just convenience." },
  { tier: 1, cause: "religion", text: "Reformers such as Thomas Cranmer pushed for change in the Church.", why: "Religious reformers around Henry encouraged the break." },
  { tier: 2, cause: "heir", text: "Catherine was around 40 by the mid-1520s and unlikely to have more children.", why: "Time was running out for a son with Catherine." },
  { tier: 2, cause: "heir", text: "Many people still remembered the Wars of the Roses, fought over a disputed succession.", why: "Without a clear male heir, rivals might fight again." },
  { tier: 2, cause: "power", text: "The Act in Restraint of Appeals (1533) declared ‘this realm of England is an empire’ and stopped appeals to Rome.", why: "The Crown claimed full authority within England, with no higher court abroad." },
  { tier: 2, cause: "power", text: "After the break, the Crown controlled Church courts and Church appointments.", why: "Control of the Church greatly increased royal power." },
  { tier: 2, cause: "money", text: "Closing the monasteries brought the Crown land and income worth well over £100,000 a year.", why: "The Church's wealth helps explain why the break went so far." },
  { tier: 2, cause: "religion", text: "Anne Boleyn favoured religious reformers at court.", why: "Anne encouraged reform as well as offering Henry a new marriage." },
  { tier: 3, cause: "love", text: "Henry married Anne in secret in January 1533 — four months before Cranmer declared the first marriage void.", why: "The rush shows how much Henry's passion (and Anne's pregnancy) shaped the timing." },
  { tier: 3, cause: "money", text: "Henry needed money for wars with France and Scotland and for coastal forts, but big taxes needed Parliament's agreement.", why: "Church wealth offered money without unpopular taxes." },
  { tier: 3, cause: "power", text: "The Treason Act (1534) made even spoken words against the king's titles treason.", why: "It protected Henry's new authority over the Church — a sign that power was at stake." },
  { tier: 3, cause: "religion", text: "Henry allowed an official English Bible to be placed in every parish church (1539).", why: "A step reformers wanted — religion in English, with the king, not the Pope, handing it to the people." },
];

const causeOfBreak: Drill = {
  id: "henry-viii.cause-of-break",
  topicId: "henry-viii",
  title: "Why break with Rome? Classify the evidence",
  level: 3,
  guideRef: "break-with-rome",
  generate(rng, tier) {
    const e = rng.pick(inTier(EVIDENCE, tier));
    const ask = "Answer *love*, *heir*, *money*, *power* or *religion*.";
    const prompt = rng.bool()
      ? `Historians debate why Henry broke with Rome. Which factor does this evidence best support? ${ask}\n\n> ${e.text}`
      : `Love, an heir, money, power or religion? Classify this evidence about the break with Rome. ${ask}\n\n> ${e.text}`;
    const solution = [`${cap(e.cause)}. ${e.why}`];
    if (tier === 3) solution.push("Many historians see the heir as the main cause, love as the trigger for the timing, and power and money as the reasons the break went so far and lasted.");
    return {
      prompt,
      answer: text(CAUSE_ACCEPT[e.cause], e.cause),
      solution,
      hint: "Ask what Henry (or the Crown) gains in this piece of evidence: a wife, a son, wealth, control or a purer Church?",
    };
  },
};

// ---------------------------------------------------------------------------
// 10. Comparing kings: William I, John or Henry VIII?
// ---------------------------------------------------------------------------

type King = "william" | "john" | "henry";

const KING_ACCEPT: Record<King, string[]> = {
  william: ["William I", "William", "William the Conqueror", "William 1", "William of Normandy", "King William", "William the First"],
  john: ["John", "King John"],
  henry: ["Henry VIII", "Henry 8", "Henry the Eighth", "Henry", "King Henry VIII", "King Henry"],
};
const KING_NAME: Record<King, string> = { william: "William I", john: "John", henry: "Henry VIII" };

interface KingClue {
  tier: Tier;
  king: King;
  clue: string;
  why: string;
  trap?: King;
  trapWhy?: string;
}

const KINGS: KingClue[] = [
  { tier: 1, king: "william", clue: "became king by conquest in 1066", why: "William defeated Harold at Hastings in 1066." },
  { tier: 1, king: "john", clue: "was forced by rebel barons to accept Magna Carta (1215)", why: "John's barons rebelled and forced Magna Carta on him in 1215." },
  { tier: 1, king: "henry", clue: "made himself Supreme Head of the Church of England (1534)", why: "The Act of Supremacy (1534) put Henry in place of the Pope." },
  { tier: 1, king: "henry", clue: "inherited the crown peacefully in 1509", why: "Henry VIII inherited from his father in 1509." },
  { tier: 1, king: "john", clue: "became king in 1199 when his brother Richard I died", why: "John inherited in 1199 — against a rival claim." },
  { tier: 1, king: "william", clue: "ordered the Harrying of the North (1069–70)", why: "William crushed northern resistance in the Harrying of the North." },
  { tier: 1, king: "william", clue: "had the Pope's backing for his invasion", why: "The Pope backed William's invasion of England." },
  { tier: 1, king: "john", clue: "lost his quarrel with the Pope, leaving England under an Interdict (1208–14)", why: "John lost his quarrel with the Pope; England was under an Interdict from 1208 to 1214." },
  { tier: 2, king: "william", clue: "replaced English lords with his own followers from Normandy", why: "William replaced the English nobility with Normans." },
  { tier: 2, king: "henry", clue: "used Acts of Parliament to make his power law", why: "Cromwell made each step of the break an Act of Parliament." },
  { tier: 2, king: "henry", clue: "used Holbein's portraits as propaganda", why: "Holbein's Whitehall image (1537) projected Henry's strength." },
  { tier: 2, king: "john", clue: "left a kingdom in civil war when he died in 1216", why: "John died in 1216 during a civil war with his barons." },
  { tier: 2, king: "john", clue: "faced a brilliant rival, Philip II of France", why: "Philip II of France outmanoeuvred John and took Normandy." },
  { tier: 2, king: "henry", clue: "relied on low-born ‘new men’ such as Wolsey and Cromwell", why: "Henry relied on ‘new men’ rather than over-mighty nobles." },
  { tier: 3, king: "henry", clue: "only became heir because his elder brother Arthur died", why: "Prince Arthur's death in 1502 made Henry heir.", trap: "john", trapWhy: "John also had an Arthur in his story — but that Arthur was his *nephew* and rival, not an elder brother." },
  { tier: 3, king: "john", clue: "had his claim to the throne challenged by his nephew Arthur", why: "John's nephew Arthur of Brittany had a rival claim in 1199.", trap: "henry", trapWhy: "Henry's Arthur was his elder *brother*, whose death made Henry heir — not a rival." },
  { tier: 3, king: "william", clue: "rewarded his followers with conquered English land", why: "Conquest gave William land to hand out to his supporters.", trap: "henry", trapWhy: "Henry rewarded supporters with *Church* land after the dissolution, not conquered land." },
  { tier: 3, king: "henry", clue: "rewarded supporters with land taken from the Church", why: "Henry sold and granted monastery land to nobles and gentry.", trap: "william", trapWhy: "William handed out *conquered* English land; this land came from the monasteries." },
  { tier: 3, king: "william", clue: "was helped by luck when his rival's army was worn out after Stamford Bridge", why: "Harold had to march south after defeating Hardrada at Stamford Bridge." },
  { tier: 3, king: "john", clue: "made England a papal fief in 1213 to end his quarrel with the Pope", why: "John surrendered his kingdom to the Pope as a fief in 1213." },
];

const compareKings: Drill = {
  id: "henry-viii.compare-kings",
  topicId: "henry-viii",
  title: "William I, John or Henry VIII?",
  level: 3,
  guideRef: "henry-power",
  generate(rng, tier) {
    const k = rng.pick(inTier(KINGS, tier));
    const prompt = rng.bool()
      ? `Which king ${k.clue}? Answer *William I*, *John* or *Henry VIII*.`
      : `Compare the kings: who ${k.clue} — William I, John or Henry VIII?`;
    const solution = [`${KING_NAME[k.king]}. ${k.why}`];
    if (tier === 3) solution.push("Keeping power depended on controlling the Church, the nobles and money: William and Henry did; John did not.");
    return {
      prompt,
      answer: text(KING_ACCEPT[k.king], KING_NAME[k.king]),
      solution,
      hint: "William conquered (1066), John inherited and struggled (1199–1216), Henry inherited and grew stronger (1509–1547).",
      traps: k.trap && k.trapWhy ? [{ spec: text(KING_ACCEPT[k.trap]), feedback: k.trapWhy }] : undefined,
    };
  },
};

export const drills: Drill[] = [dateRecall, whosWho, sixWives, keyTerms, greatMatter, succession, whichFirst, gainedOrLost, causeOfBreak, compareKings];
