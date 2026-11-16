// Skill drills for "The Historian's Toolkit": chronology, sources, provenance, interpretations,
// causation, change and continuity, PEEL writing and the year's key concepts.
// Facts are kept consistent with lib/topics/historians-toolkit/guide.ts.
//
// Century answers: the prompt asks for the ordinal with its ending ("Type it like this: 11th").
// Also accepted: "11", "11th century", "C11", and word forms ("eleventh", "eleventh century") —
// except "fifteenth"/"sixteenth", which differ by two letters and so would be confused by the
// checker's spelling forgiveness; for those two, the digit form (15th / 16th) is required.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { ordinal } from "./helpers.ts";

type Tier = 1 | 2 | 3;

/** Tier 1 = headline items; tier 2 = headline + typical detail; tier 3 = everything, weighted to the finer items. */
function poolFor<T extends { tier: Tier }>(rng: Rng, bank: readonly T[], tier: Tier): T[] {
  if (tier === 1) return bank.filter((b) => b.tier === 1);
  if (tier === 2) return bank.filter((b) => b.tier <= 2);
  const hard = bank.filter((b) => b.tier === 3);
  return hard.length && rng.bool(0.6) ? hard : [...bank];
}

function text(accept: string[], display?: string): AnswerSpec {
  return { type: "text", accept, display: display ?? accept[0] };
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ---------------------------------------------------------------------------
// Dated events across the year's topics (exact, well-established years; one event per year)
// ---------------------------------------------------------------------------
interface Ev {
  y: number;
  tier: Tier;
  /** Full description for prompts. */
  name: string;
  /** Short label = display answer. */
  label: string;
  accept: string[];
}

const EVENTS: readonly Ev[] = [
  { y: 1066, tier: 1, name: "William defeated Harold at the Battle of Hastings", label: "Battle of Hastings", accept: ["Battle of Hastings", "Hastings"] },
  { y: 1086, tier: 2, name: "the Domesday Book was compiled", label: "Domesday Book", accept: ["Domesday Book", "Domesday", "Domesday survey", "Doomsday Book", "Doomsday"] },
  { y: 1199, tier: 2, name: "John became king of England", label: "John becomes king", accept: ["John becomes king", "John became king", "John crowned", "John's coronation", "King John", "John"] },
  { y: 1215, tier: 1, name: "Magna Carta was sealed", label: "Magna Carta", accept: ["Magna Carta", "Magna Charta", "the Great Charter", "Great Charter"] },
  { y: 1265, tier: 3, name: "Simon de Montfort's Parliament met", label: "de Montfort's Parliament", accept: ["de Montfort's Parliament", "Simon de Montfort's Parliament", "Montfort's Parliament", "Simon de Montfort", "de Montfort", "Montfort"] },
  { y: 1485, tier: 2, name: "Henry Tudor won the Battle of Bosworth", label: "Battle of Bosworth", accept: ["Battle of Bosworth", "Bosworth"] },
  { y: 1509, tier: 2, name: "Henry VIII became king", label: "Henry VIII becomes king", accept: ["Henry VIII becomes king", "Henry VIII became king", "Henry VIII crowned", "Henry VIII", "Henry 8", "Henry the Eighth", "Henry"] },
  { y: 1534, tier: 1, name: "the Act of Supremacy made Henry VIII Supreme Head of the Church in England", label: "Act of Supremacy", accept: ["Act of Supremacy", "Supremacy", "Break with Rome", "the break with Rome"] },
  { y: 1536, tier: 3, name: "the Dissolution of the Monasteries began", label: "Dissolution of the Monasteries", accept: ["Dissolution of the Monasteries", "Dissolution", "closing the monasteries"] },
  { y: 1789, tier: 1, name: "Parisians stormed the Bastille", label: "Storming of the Bastille", accept: ["Storming of the Bastille", "Bastille", "fall of the Bastille"] },
  { y: 1793, tier: 2, name: "Louis XVI was executed", label: "execution of Louis XVI", accept: ["execution of Louis XVI", "Louis XVI executed", "Louis XVI's execution", "execution of Louis", "Louis XVI", "Louis 16"] },
  { y: 1819, tier: 2, name: "Raffles set up a British trading post in Singapore", label: "Raffles' trading post in Singapore", accept: ["Raffles' trading post in Singapore", "Raffles' trading post", "Raffles trading post", "Raffles", "Raffles in Singapore", "Singapore trading post"] },
  { y: 1897, tier: 3, name: "the NUWSS (suffragists) was founded", label: "NUWSS founded", accept: ["NUWSS founded", "NUWSS", "suffragists founded", "National Union of Women's Suffrage Societies", "suffragists"] },
  { y: 1903, tier: 2, name: "the WSPU (suffragettes) was founded", label: "WSPU founded", accept: ["WSPU founded", "WSPU", "suffragettes founded", "Women's Social and Political Union", "suffragettes"] },
  { y: 1913, tier: 3, name: "Emily Wilding Davison was fatally injured at the Derby", label: "Emily Davison at the Derby", accept: ["Emily Davison at the Derby", "Emily Davison", "Emily Wilding Davison", "Davison", "the Derby", "Derby"] },
  { y: 1918, tier: 1, name: "the Representation of the People Act gave some women the vote", label: "Representation of the People Act", accept: ["Representation of the People Act", "Representation of the People", "1918 Act", "RPA", "women over 30 get the vote"] },
  { y: 1923, tier: 2, name: "Hitler's Munich Putsch failed", label: "Munich Putsch", accept: ["Munich Putsch", "Beer Hall Putsch", "Putsch"] },
  { y: 1928, tier: 2, name: "the Equal Franchise Act gave women the vote on the same terms as men", label: "Equal Franchise Act", accept: ["Equal Franchise Act", "Equal Franchise", "equal votes for women"] },
  { y: 1929, tier: 2, name: "the Wall Street Crash began the Great Depression", label: "Wall Street Crash", accept: ["Wall Street Crash", "Crash", "the Great Depression began", "Great Depression", "Depression"] },
  { y: 1933, tier: 1, name: "Hitler became Chancellor of Germany", label: "Hitler becomes Chancellor", accept: ["Hitler becomes Chancellor", "Hitler became Chancellor", "Hitler Chancellor", "Hitler appointed Chancellor", "Hitler"] },
  { y: 1934, tier: 3, name: "the Long March began", label: "Long March begins", accept: ["Long March begins", "Long March", "the Long March began"] },
  { y: 1948, tier: 3, name: "the Universal Declaration of Human Rights was adopted", label: "Universal Declaration of Human Rights", accept: ["Universal Declaration of Human Rights", "UDHR", "Universal Declaration", "Declaration of Human Rights"] },
  { y: 1949, tier: 1, name: "Mao proclaimed the People's Republic of China", label: "People's Republic of China proclaimed", accept: ["People's Republic of China proclaimed", "People's Republic of China", "People's Republic", "PRC", "Mao proclaims the PRC", "Mao"] },
  { y: 1959, tier: 2, name: "Singapore gained full internal self-government", label: "Singapore self-government", accept: ["Singapore self-government", "self-government", "Singapore self government", "self government"] },
  { y: 1965, tier: 2, name: "Singapore became independent", label: "Singapore independence", accept: ["Singapore independence", "independence", "Singapore independent", "Singapore becomes independent"] },
  { y: 1975, tier: 1, name: "the Khmer Rouge took Phnom Penh", label: "Khmer Rouge take Phnom Penh", accept: ["Khmer Rouge take Phnom Penh", "Khmer Rouge took Phnom Penh", "Khmer Rouge", "Phnom Penh", "fall of Phnom Penh", "Pol Pot"] },
];

// ---------------------------------------------------------------------------
// Centuries
// ---------------------------------------------------------------------------
const ORD_WORDS = [
  "", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth",
  "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth",
  "nineteenth", "twentieth", "twenty-first",
];

/** Accepted spellings for "the nth century" (AD) or "the nth century BC". */
function centuryAccept(n: number, bc: boolean): string[] {
  const o = ordinal(n);
  const out = [o, `${o} century`, String(n), `C${n}`];
  if (bc) out.push(`${o} century BC`, `${o} century BCE`, `${o} BC`, `${o} BCE`);
  else out.push(`${o} century AD`, `${o} century CE`, `${o} C`);
  // Word forms, except 15th/16th: "fifteenth" and "sixteenth" are two letters apart,
  // so spelling forgiveness would accept one for the other.
  if (n !== 15 && n !== 16) {
    const w = ORD_WORDS[n];
    out.push(w, `${w} century`);
    if (bc) out.push(`${w} century BC`, `${w} century BCE`);
  }
  return out;
}

const FORMAT = "Type it like this: **11th**.";

function centuryItem(year: number, intro: string): DrillItem {
  const bc = year < 0;
  const y = Math.abs(year);
  const hundreds = Math.floor(y / 100);
  const n = hundreds + 1;
  const o = ordinal(n);
  const traps: Trap[] = hundreds >= 1
    ? [{ spec: text(centuryAccept(hundreds, bc)), feedback: `That's just the 'hundreds' (${hundreds}). The 1st century was years 1–100, so add one.` }]
    : [];
  const solution = bc
    ? [
        `BC centuries count backwards: the 1st century BC is 100–1 BC, the 2nd century BC is 200–101 BC, and so on.`,
        `${y} BC has ${hundreds} 'hundreds', so add one → the **${o} century BC**.`,
      ]
    : [
        hundreds === 0
          ? `AD ${y} is less than 100, so it is in the first hundred years → the **1st century**.`
          : `Take the 'hundreds' in ${y}: ${hundreds}. Add one → the **${o} century**.`,
        "The 1st century was years 1–100, so the century number is always one more than the hundreds.",
      ];
  return {
    prompt: `${intro} ${FORMAT}`,
    answer: text(centuryAccept(n, bc), bc ? `${o} century BC` : `${o} century`),
    solution,
    hint: "The 1st century was years 1–100. Is the century number the 'hundreds', or one more?",
    traps,
  };
}

// ---------------------------------------------------------------------------
// BC / AD
// ---------------------------------------------------------------------------
function yearLabel(y: number): string {
  return y < 0 ? `${-y} BC` : `AD ${y}`;
}

function yearAccept(y: number): string[] {
  if (y < 0) {
    const n = -y;
    return [`${n} BC`, `${n}BC`, `${n} BCE`, `${n} B.C.`];
  }
  return [`AD ${y}`, `${y} AD`, `${y}`, `${y} CE`, `CE ${y}`, `A.D. ${y}`];
}

/** Draw a year that is not 0 and does not end in 0 (keeps the arithmetic honest). */
function niceYear(rng: Rng, min: number, max: number): number {
  for (let i = 0; i < 50; i++) {
    const v = rng.int(min, max);
    if (v !== 0 && v % 10 !== 0) return v;
  }
  return min === 0 ? 1 : min;
}

// ---------------------------------------------------------------------------
// Classification helper
// ---------------------------------------------------------------------------
interface ClassItem<K extends string> {
  tier: Tier;
  text: string;
  answer: K;
  why: string;
}

function classify<K extends string>(
  rng: Rng,
  tier: Tier,
  bank: readonly ClassItem<K>[],
  answers: Record<K, { accept: string[]; display: string }>,
  templates: readonly ((t: string) => string)[],
  hint: string,
  trapFeedback: (wrong: K, right: K) => string,
): DrillItem {
  const item = rng.pick(poolFor(rng, bank, tier));
  const tpl = rng.pick(templates);
  const right = answers[item.answer];
  const others = (Object.keys(answers) as K[]).filter((k) => k !== item.answer);
  return {
    prompt: tpl(item.text),
    answer: text(right.accept, right.display),
    solution: [`**${cap(right.display)}.** ${item.why}`],
    hint,
    traps: others.map((k) => ({ spec: text(answers[k].accept, answers[k].display), feedback: trapFeedback(k, item.answer) })),
  };
}

// ---------------------------------------------------------------------------
// Banks
// ---------------------------------------------------------------------------
type PS = "primary" | "secondary";
interface SourceItem extends ClassItem<PS> {
  /** The enquiry the learner is investigating. */
  enquiry: string;
}

const SOURCES: readonly SourceItem[] = [
  { tier: 1, enquiry: "William I's control of England", text: "the Domesday Book (1086)", answer: "primary", why: "It was compiled for William I in 1086, during the period being studied." },
  { tier: 1, enquiry: "the Battle of Hastings", text: "the Bayeux Tapestry (made in the 1070s)", answer: "primary", why: "It was made within about ten years of 1066 by people living at the time." },
  { tier: 1, enquiry: "King John's quarrel with the barons", text: "the text of Magna Carta (1215)", answer: "primary", why: "It was produced in 1215, in the middle of the events being studied." },
  { tier: 1, enquiry: "why the Nazis won votes in 1932", text: "a Nazi election poster from 1932", answer: "primary", why: "It was made at the time — even though it is propaganda. Primary does not mean reliable." },
  { tier: 1, enquiry: "the Norman Conquest", text: "a school textbook chapter written in 2015", answer: "secondary", why: "It was written long afterwards by someone looking back." },
  { tier: 1, enquiry: "why the Nazis won votes in 1932", text: "a historian's book written in 2010 analysing voting statistics", answer: "secondary", why: "It was written decades later by a historian looking back — even though it may be very accurate." },
  { tier: 1, enquiry: "Henry VIII's wives", text: "a TV documentary made in the 2010s", answer: "secondary", why: "It was made centuries later by people looking back at the Tudors." },
  { tier: 1, enquiry: "the French Revolution", text: "the Declaration of the Rights of Man and of the Citizen (1789)", answer: "primary", why: "It was written in 1789 by the revolutionaries themselves." },
  { tier: 2, enquiry: "how Henry VIII wanted to be seen", text: "Holbein's portrait of Henry VIII (1537)", answer: "primary", why: "It was painted in Henry's lifetime by his own court painter." },
  { tier: 2, enquiry: "the Battle of Hastings", text: "the entry for 1066 in the *Anglo-Saxon Chronicle* (written by English monks)", answer: "primary", why: "It was written by monks living through the period." },
  { tier: 2, enquiry: "the suffragettes' campaign", text: "a letter written by a suffragette in Holloway prison in 1912", answer: "primary", why: "It was written by a participant at the time." },
  { tier: 2, enquiry: "King John's reign", text: "W. L. Warren's biography of King John (1961)", answer: "secondary", why: "It was written more than 700 years after John's reign by a historian studying the records." },
  { tier: 2, enquiry: "the suffragettes' campaign", text: "a museum display about the suffragettes put together in 2018", answer: "secondary", why: "It was created a century later — it is a later account (and an interpretation) of the campaign." },
  { tier: 2, enquiry: "the French Revolution", text: "Simon Schama's history book *Citizens* (1989)", answer: "secondary", why: "It was written two centuries after 1789 by a historian looking back." },
  { tier: 2, enquiry: "the Battle of Hastings", text: "a painting of the battle made in the 1800s", answer: "secondary", why: "The artist lived about 800 years after 1066 and was imagining the scene." },
  { tier: 3, enquiry: "life in Singapore during the Japanese Occupation (1942–45)", text: "an interview recorded in the 1980s with someone who lived through the Occupation", answer: "primary", why: "It was recorded later, but it is the eyewitness's own account of what they experienced — oral history counts as primary evidence (though memories can fade)." },
  { tier: 3, enquiry: "how people in the 1800s imagined King John", text: "Walter Scott's novel *Ivanhoe* (1819)", answer: "primary", why: "For John's reign it would be secondary, but for *this* question it comes from the time being studied — the 1800s. The question decides." },
  { tier: 3, enquiry: "King John's reign", text: "Walter Scott's novel *Ivanhoe* (1819)", answer: "secondary", why: "It was written about 600 years after John died, by a novelist looking back." },
  { tier: 3, enquiry: "Protestant attitudes during Henry VIII's Reformation", text: "John Bale's play *Kynge Johan* (written about 1538)", answer: "primary", why: "It was written in the 1530s, during the Reformation — so it is primary evidence of Reformation attitudes, even though it is about a king who died in 1216." },
  { tier: 3, enquiry: "King John's reign", text: "John Bale's play *Kynge Johan* (written about 1538)", answer: "secondary", why: "It was written more than 300 years after John's death, so for John's reign it is a later view." },
  { tier: 3, enquiry: "King John's reign", text: "Roger of Wendover's chronicle (written in the 1220s–30s)", answer: "primary", why: "Wendover was a monk alive in John's time and wrote soon after — primary, though hostile and partly based on rumour." },
];

type NOP = "nature" | "origin" | "purpose";
const NOP_ITEMS: readonly ClassItem<NOP>[] = [
  { tier: 1, text: "It is a private diary, not meant to be read by anyone else.", answer: "nature", why: "This tells you what *kind* of source it is — private, not public." },
  { tier: 1, text: "It is an election poster.", answer: "nature", why: "This tells you what kind of source it is." },
  { tier: 1, text: "It was painted by Hans Holbein, Henry VIII's court painter, in 1537.", answer: "origin", why: "This tells you *who* made it and *when*." },
  { tier: 1, text: "It was made to persuade Germans to vote for Hitler.", answer: "purpose", why: "This tells you *why* it was made." },
  { tier: 1, text: "It was written by an eyewitness who stood in the crowd.", answer: "origin", why: "This tells you who made it and whether they were in a position to know." },
  { tier: 1, text: "It was designed to make the king look powerful to visitors at his palace.", answer: "purpose", why: "This tells you why it was made and for whom." },
  { tier: 1, text: "It is a cartoon published in a newspaper.", answer: "nature", why: "This tells you what kind of source it is — a public, visual source." },
  { tier: 1, text: "It was written to convince Parliament to give women the vote.", answer: "purpose", why: "This tells you why it was produced and who it was aimed at." },
  { tier: 2, text: "It was written by Roger of Wendover, a monk at St Albans, in the 1220s–30s.", answer: "origin", why: "This tells you who wrote it, where and when." },
  { tier: 2, text: "It is an official government record of taxes owed.", answer: "nature", why: "This tells you what kind of source it is — an official record." },
  { tier: 2, text: "It was produced by the Nazi Party's propaganda team, led by Joseph Goebbels.", answer: "origin", why: "This tells you who made it." },
  { tier: 2, text: "It was meant to entertain a theatre audience.", answer: "purpose", why: "This tells you why it was made and for whom." },
  { tier: 2, text: "It is an embroidered cloth nearly 70 metres long.", answer: "nature", why: "This tells you what kind of source it is — the Bayeux Tapestry is a visual, embroidered source." },
  { tier: 2, text: "It was written forty years after the events it describes.", answer: "origin", why: "This tells you *when* it was made — and so whether memory or hindsight might affect it." },
  { tier: 2, text: "It was published to recruit new members to the suffragette movement.", answer: "purpose", why: "This tells you why it was produced." },
  { tier: 3, text: "It is the text of a speech given to a large public rally.", answer: "nature", why: "This tells you what kind of source it is — a public speech, written to sway an audience." },
  { tier: 3, text: "Its author had never visited the country he was writing about.", answer: "origin", why: "This is about who made it and whether they were in a position to know." },
  { tier: 3, text: "It was intended to frighten opponents into silence.", answer: "purpose", why: "This tells you why it was made — so it is evidence of the maker's aims, not of what was true." },
  { tier: 3, text: "It was a secret report written for the government's own ministers.", answer: "nature", why: "This tells you what kind of source it is — private and official, not public." },
  { tier: 3, text: "It was made in the 1070s, within about ten years of the battle it shows.", answer: "origin", why: "This tells you when it was made." },
  { tier: 3, text: "It was written to justify the ruler's actions to future generations.", answer: "purpose", why: "This tells you why it was written and for whom." },
];

type SI = "source" | "interpretation";
const SI_ITEMS: readonly ClassItem<SI>[] = [
  { tier: 1, text: "Magna Carta, sealed by King John in 1215", answer: "source", why: "It comes from the past itself — the material historians build arguments from." },
  { tier: 1, text: "W. L. Warren's 1961 book arguing that John was hard-working but unlucky", answer: "interpretation", why: "It is a later historian's argument about the past, built from sources." },
  { tier: 1, text: "the Domesday Book (1086)", answer: "source", why: "It was made at the time, so it is a source." },
  { tier: 1, text: "a TV documentary arguing that William won at Hastings mainly through luck", answer: "interpretation", why: "It is a later view about the past — documentaries are interpretations." },
  { tier: 1, text: "a 1932 Nazi election poster", answer: "source", why: "It comes from the time being studied." },
  { tier: 1, text: "a textbook claim that the Depression was the main reason Hitler became Chancellor", answer: "interpretation", why: "It is a later argument about why something happened." },
  { tier: 1, text: "the Bayeux Tapestry, made in the 1070s", answer: "source", why: "It was made at the time, by people living through the period." },
  { tier: 1, text: "a museum display (2018) presenting the suffragettes as heroes", answer: "interpretation", why: "Museums choose what to show and how — a display is a later interpretation." },
  { tier: 2, text: "Walter Scott's novel *Ivanhoe* (1819), which shows John as a villain", answer: "interpretation", why: "It is a later view of John, written about 600 years after his death." },
  { tier: 2, text: "John Bale's play *Kynge Johan* (about 1538), presenting John as a hero who defied the Pope", answer: "interpretation", why: "It is a later view of John, shaped by the Reformation — over 300 years after his reign." },
  { tier: 2, text: "Holbein's portrait of Henry VIII (1537)", answer: "source", why: "It was painted in Henry's lifetime, so it is a source from the period." },
  { tier: 2, text: "a film about Henry VIII's wives made in the 2000s", answer: "interpretation", why: "Films are interpretations: later views that choose, simplify and dramatise." },
  { tier: 2, text: "the Declaration of the Rights of Man and of the Citizen (1789)", answer: "source", why: "It was written by the revolutionaries at the time." },
  { tier: 2, text: "a website article (2020) arguing that Louis XVI was a weak king", answer: "interpretation", why: "It is a later judgement about the past." },
  { tier: 2, text: "a 1912 letter written by a suffragette in prison", answer: "source", why: "It was written at the time by a participant." },
  { tier: 3, text: "a historian's argument that Mao won the civil war mainly because the Guomindang was corrupt", answer: "interpretation", why: "It is a later argument that weighs causes — exactly what an interpretation does." },
  { tier: 3, text: "the *Anglo-Saxon Chronicle*'s entry for 1066", answer: "source", why: "It was written by monks living through the period — a source, even though it contains their point of view." },
  { tier: 3, text: "a modern atlas map showing the route of the Long March", answer: "interpretation", why: "It was made later, by people who chose and reconstructed the route from evidence — a later representation, not a source from 1934–35." },
  { tier: 3, text: "an Act of Parliament from 1534 making Henry Supreme Head of the Church", answer: "source", why: "The Act of Supremacy was produced at the time." },
];

type CT = "long-term" | "short-term" | "trigger";
type CM = "crisis" | "weak government" | "leader";
interface CauseItem extends ClassItem<CT> {
  event: string;
}

const CAUSES: readonly CauseItem[] = [
  { tier: 1, event: "the French Revolution (1789)", text: "an unfair tax system in which the clergy and nobles paid little tax", answer: "long-term", why: "Resentment at the tax system had built up over many decades." },
  { tier: 1, event: "the French Revolution (1789)", text: "the poor harvest of 1788 and soaring bread prices", answer: "short-term", why: "It struck just before the revolution and made ordinary people desperate." },
  { tier: 1, event: "the French Revolution (1789)", text: "Louis XVI calling the Estates-General, which met in May 1789", answer: "trigger", why: "This was the spark: once the Estates met, the Third Estate challenged the king directly." },
  { tier: 1, event: "Hitler becoming Chancellor (1933)", text: "resentment of the Treaty of Versailles (1919)", answer: "long-term", why: "It had built up since 1919 — but on its own it did not make the Nazis popular in the 1920s." },
  { tier: 1, event: "Hitler becoming Chancellor (1933)", text: "the Great Depression that followed the Wall Street Crash (1929)", answer: "short-term", why: "It hit in the few years just before 1933 and turned the Nazis into a mass party." },
  { tier: 1, event: "Hitler becoming Chancellor (1933)", text: "von Papen persuading President Hindenburg to appoint Hitler in January 1933", answer: "trigger", why: "This backroom deal was the final step that actually put Hitler in power." },
  { tier: 2, event: "the French Revolution (1789)", text: "Enlightenment ideas about rights and liberty spreading through the 1700s", answer: "long-term", why: "These ideas spread over decades and gave people a language to challenge the king." },
  { tier: 2, event: "the French Revolution (1789)", text: "France's near-bankruptcy after costly wars, including helping the Americans (1778–83)", answer: "short-term", why: "The debt crisis came in the years just before 1789 and forced the king to seek new taxes." },
  { tier: 2, event: "Hitler becoming Chancellor (1933)", text: "unemployment rising to about 6 million by 1932", answer: "short-term", why: "It came in the years just before 1933 and drove voters to extreme parties." },
  { tier: 2, event: "Hitler becoming Chancellor (1933)", text: "a young democracy, set up in 1919, with shallow roots and many small parties", answer: "long-term", why: "Weimar's weaknesses were there from the start, more than a decade before 1933." },
  { tier: 2, event: "Magna Carta (1215)", text: "the loss of Normandy in 1204", answer: "long-term", why: "It happened over a decade earlier and began years of costly, failed attempts to win it back." },
  { tier: 2, event: "Magna Carta (1215)", text: "John's defeat at the Battle of Bouvines in 1214", answer: "short-term", why: "It came the year before and destroyed John's hopes — and his authority over the barons." },
  { tier: 2, event: "Magna Carta (1215)", text: "rebel barons capturing London in May 1215", answer: "trigger", why: "Losing London forced John to negotiate within weeks — the spark for Runnymede." },
  { tier: 3, event: "Magna Carta (1215)", text: "years of heavy taxes, such as scutage, to pay for John's wars", answer: "long-term", why: "Anger at John's money-raising built up over much of his reign." },
  { tier: 3, event: "Magna Carta (1215)", text: "John's long quarrel with the Pope (1205–13)", answer: "long-term", why: "It lasted years and lost John support — a background cause, not the spark." },
  { tier: 3, event: "the Break with Rome", text: "Henry VIII's lack of a male heir — only one of Catherine of Aragon's children, Mary, survived", answer: "long-term", why: "The worry about the succession had grown over many years." },
  { tier: 3, event: "the Break with Rome", text: "Anne Boleyn becoming pregnant at the end of 1532", answer: "trigger", why: "Henry suddenly needed his marriage to Catherine ended fast, so the child would be born legitimate — the spark for breaking with Rome." },
  { tier: 3, event: "some women winning the vote in 1918", text: "decades of campaigning for women's suffrage since the 1860s", answer: "long-term", why: "The campaign had built up pressure over half a century." },
  { tier: 3, event: "some women winning the vote in 1918", text: "women's war work during the First World War, for example in munitions factories", answer: "short-term", why: "It came in the years just before 1918 and weakened the arguments against women voting." },
];

const MODEL: readonly ClassItem<CM>[] = [
  { tier: 2, text: "Germany: the Wall Street Crash and the Great Depression from 1929", answer: "crisis", why: "An economic collapse is a crisis." },
  { tier: 2, text: "Germany: hyperinflation in 1923, when money became almost worthless", answer: "crisis", why: "It was an economic crisis that wiped out savings and shook faith in the republic." },
  { tier: 2, text: "Germany: coalition governments that could not agree, so chancellors ruled by emergency decree (Article 48)", answer: "weak government", why: "Government that cannot govern normally is weak government." },
  { tier: 2, text: "Germany: Hitler's powerful speeches and Goebbels' propaganda", answer: "leader", why: "This is about a determined leader and party exploiting the situation." },
  { tier: 2, text: "China: the Japanese invasion from 1937", answer: "crisis", why: "War and invasion are crises." },
  { tier: 2, text: "China: a corrupt Guomindang government that lost the trust of many peasants", answer: "weak government", why: "Corruption and lost support made the government weak." },
  { tier: 3, text: "China: Mao's reputation from the Long March and his promises of land to the peasants", answer: "leader", why: "This is about the leader and party winning support." },
  { tier: 3, text: "Cambodia: civil war from 1970 and spillover from the Vietnam War, including US bombing (1969–73)", answer: "crisis", why: "War and bombing are crises." },
  { tier: 3, text: "Cambodia: the weak and corrupt Lon Nol government", answer: "weak government", why: "It could not win the war or the people's trust." },
  { tier: 3, text: "Cambodia: a secretive, disciplined Khmer Rouge organisation ('Angkar')", answer: "leader", why: "This is the determined party — but note Pol Pot was secretive, not a public showman, so 'charismatic' fits less well here." },
  { tier: 3, text: "Germany: proportional representation producing many small parties and unstable coalitions", answer: "weak government", why: "It made strong, stable government very hard." },
];

type CC = "change" | "continuity";
const CC_ITEMS: readonly ClassItem<CC>[] = [
  { tier: 1, text: "After 1066, Normans replaced almost all the English nobility as the great landowners.", answer: "change", why: "The people at the top of society were replaced." },
  { tier: 1, text: "After 1066, most peasants kept farming the same land, now paying dues to Norman lords.", answer: "continuity", why: "Daily life for most ordinary people stayed much the same." },
  { tier: 1, text: "After the 1534 Act of Supremacy, the king, not the Pope, was head of the Church in England.", answer: "change", why: "Who controlled the Church changed fundamentally." },
  { tier: 1, text: "After the 1918 Representation of the People Act, women under 30 still could not vote.", answer: "continuity", why: "For younger women nothing changed until 1928." },
  { tier: 1, text: "From 1928, women in Britain could vote on the same terms as men.", answer: "change", why: "Voting rights became equal — a major change." },
  { tier: 1, text: "After Magna Carta (1215), most villeins remained unfree.", answer: "continuity", why: "Magna Carta protected free men; the lives of unfree peasants stayed the same." },
  { tier: 1, text: "From 1536 to 1540 the monasteries were closed and their lands sold or given away.", answer: "change", why: "An institution that had existed for centuries disappeared." },
  { tier: 1, text: "The 1918 Act roughly tripled the British electorate.", answer: "change", why: "The number of voters rose from about 8 million to about 21 million." },
  { tier: 2, text: "The Normans kept the Anglo-Saxon system of shires and sheriffs.", answer: "continuity", why: "The new rulers kept using an existing system that worked." },
  { tier: 2, text: "After 1066, most ordinary people kept speaking English, while the new rulers spoke Norman French.", answer: "continuity", why: "Ordinary people's language stayed the same, even though the language of power changed." },
  { tier: 2, text: "In 1792 France abolished its monarchy and became a republic.", answer: "change", why: "The whole system of government changed." },
  { tier: 2, text: "Even after the Revolution began in 1789, France remained a monarchy until 1792.", answer: "continuity", why: "Louis XVI stayed king for three more years — change was not instant." },
  { tier: 2, text: "In 1919, German women gained the vote under the new Weimar constitution.", answer: "change", why: "It was a big extension of democracy in Germany." },
  { tier: 2, text: "In 1959, Singapore gained full internal self-government.", answer: "change", why: "Singaporeans now ran their own internal affairs." },
  { tier: 3, text: "Under the Weimar Republic (1919–33), many judges, army officers and civil servants from the Kaiser's time kept their jobs.", answer: "continuity", why: "The people running the state stayed largely the same — one reason democracy had shallow roots." },
  { tier: 3, text: "When Hitler became Chancellor in January 1933, Hindenburg remained President.", answer: "continuity", why: "Hindenburg stayed in office until his death in August 1934." },
  { tier: 3, text: "After the Break with Rome, Henry VIII's Church kept most Catholic beliefs, such as the Mass.", answer: "continuity", why: "Henry changed who led the Church far more than what it believed (e.g. the Six Articles, 1539)." },
  { tier: 3, text: "After 1066, motte-and-bailey castles, and later stone keeps, spread across England.", answer: "change", why: "Castles were a new way of controlling the land." },
  { tier: 3, text: "In 1933–34, Germany went from a democracy to a one-party dictatorship.", answer: "change", why: "A huge change — but regression, not progress: change does not always mean improvement." },
];

type PEEL = "point" | "evidence" | "explain" | "link";
interface PeelItem extends ClassItem<PEEL> {
  q: string;
}
const PEEL_Q = {
  henry: "Explain why Henry VIII broke with Rome.",
  hastings: "Explain why William won the Battle of Hastings.",
  hitler: "Explain why Hitler became Chancellor in 1933.",
  suffrage: "Explain why some women gained the vote in 1918.",
  john: "Explain why the barons rebelled against King John.",
} as const;

const PEEL_ITEMS: readonly PeelItem[] = [
  { tier: 1, q: PEEL_Q.henry, text: "One reason Henry VIII broke with Rome was his need for a male heir.", answer: "point", why: "It directly answers the question with a reason." },
  { tier: 1, q: PEEL_Q.henry, text: "By 1527 Catherine of Aragon was over 40 and only one child, Mary, had survived.", answer: "evidence", why: "It gives precise detail — a date, a name and a fact." },
  { tier: 1, q: PEEL_Q.henry, text: "This mattered because Henry feared that without a son England could slide back into civil war, as in the Wars of the Roses.", answer: "explain", why: "It shows *how* the evidence answers the question ('This mattered because…')." },
  { tier: 1, q: PEEL_Q.henry, text: "So the succession gave Henry a powerful reason to seek an annulment, which led him into conflict with the Pope.", answer: "link", why: "It ties the paragraph back to the question and on to what happened next." },
  { tier: 1, q: PEEL_Q.hastings, text: "One reason William won the Battle of Hastings was luck.", answer: "point", why: "It answers the question in one clear sentence." },
  { tier: 1, q: PEEL_Q.hastings, text: "Harald Hardrada invaded first, so Harold had to march north and fight at Stamford Bridge on 25 September 1066.", answer: "evidence", why: "It gives precise, relevant detail — names, a place and a date." },
  { tier: 1, q: PEEL_Q.hastings, text: "This meant that Harold's army reached Hastings tired and weakened, which made a Norman victory far more likely.", answer: "explain", why: "It explains how the evidence led to the outcome ('This meant that…')." },
  { tier: 1, q: PEEL_Q.hastings, text: "Therefore luck shaped when and how the battle was fought, helping William to win.", answer: "link", why: "It links the paragraph back to the question." },
  { tier: 1, q: PEEL_Q.hitler, text: "The most important reason Hitler became Chancellor was the Great Depression.", answer: "point", why: "It answers the question and states the argument." },
  { tier: 1, q: PEEL_Q.hitler, text: "After the Wall Street Crash in October 1929, German unemployment rose to about 6 million by 1932.", answer: "evidence", why: "It gives precise dates and numbers." },
  { tier: 1, q: PEEL_Q.hitler, text: "As a result, desperate voters turned to extreme parties that promised simple answers, so the Nazi vote rose sharply.", answer: "explain", why: "It explains how the Depression helped the Nazis ('As a result…')." },
  { tier: 1, q: PEEL_Q.hitler, text: "This shows that the economic crisis was the key factor that turned the Nazis from a fringe party into the largest party in the Reichstag.", answer: "link", why: "It ties the paragraph back to the question with a judgement." },
  { tier: 2, q: PEEL_Q.suffrage, text: "One reason some women gained the vote in 1918 was their contribution to the First World War.", answer: "point", why: "It answers the question with a reason." },
  { tier: 2, q: PEEL_Q.suffrage, text: "Hundreds of thousands of women worked in munitions factories during the war.", answer: "evidence", why: "It gives specific supporting detail." },
  { tier: 2, q: PEEL_Q.suffrage, text: "This weakened the argument that women did not serve the nation, making it harder for politicians to refuse them the vote.", answer: "explain", why: "It explains why the evidence mattered." },
  { tier: 2, q: PEEL_Q.suffrage, text: "So women's war work helps to explain why Parliament passed the Representation of the People Act in 1918.", answer: "link", why: "It links back to the question." },
  { tier: 2, q: PEEL_Q.john, text: "One reason the barons rebelled against King John was his heavy taxation.", answer: "point", why: "It answers the question with a reason." },
  { tier: 2, q: PEEL_Q.john, text: "John demanded scutage — money paid instead of military service — again and again to pay for his wars in France.", answer: "evidence", why: "It gives specific supporting detail." },
  { tier: 2, q: PEEL_Q.john, text: "This angered the barons because it drained their wealth while John kept losing in France, so they felt they were paying for failure.", answer: "explain", why: "It explains why the taxes caused anger ('because…')." },
  { tier: 2, q: PEEL_Q.john, text: "Therefore John's taxes pushed the barons towards rebellion and, in 1215, to force him to agree to Magna Carta.", answer: "link", why: "It links the paragraph back to the question." },
];

interface Concept {
  tier: Tier;
  defs: string[];
  accept: string[];
  display: string;
  why: string;
  traps?: Trap[];
}

const t = (accept: string[], feedback: string): Trap => ({ spec: text(accept), feedback });

const CONCEPTS: readonly Concept[] = [
  { tier: 1, defs: ["the belief that a monarch's authority comes directly from God", "the idea that rebelling against the king is rebelling against God"], accept: ["divine right of kings", "divine right", "divine rights", "the divine right"], display: "divine right of kings", why: "Henry VIII and Louis XVI both relied on it." },
  { tier: 1, defs: ["rule by one person or party with no effective legal limits and no free elections", "a system where the people have no peaceful way to remove their ruler"], accept: ["dictatorship", "a dictatorship", "dictator"], display: "dictatorship", why: "Hitler, Mao and Pol Pot all ran dictatorships.", traps: [t(["democracy"], "The opposite! In a democracy the people choose — and can remove — their rulers.")] },
  { tier: 1, defs: ["rule by the people (from the Greek words for 'people' and 'power')", "a system in which citizens choose their government"], accept: ["democracy", "a democracy"], display: "democracy", why: "From the Greek *demos* (people) and *kratos* (power).", traps: [t(["dictatorship"], "The opposite — in a dictatorship the people have no say.")] },
  { tier: 1, defs: ["spreading ideas, images or information to persuade people to think or act in a certain way", "posters, films and speeches designed to persuade, such as Goebbels' work for the Nazis"], accept: ["propaganda"], display: "propaganda", why: "Propaganda is poor evidence of what was true, but excellent evidence of what rulers wanted people to believe." },
  { tier: 1, defs: ["the right to vote in elections (two words mean this — give either)", "the right to vote — the prize the suffragettes campaigned for"], accept: ["franchise", "suffrage", "the franchise", "the vote", "right to vote", "enfranchisement"], display: "franchise (suffrage)", why: "Franchise and suffrage both mean the right to vote." },
  { tier: 1, defs: ["rule by a king or queen, usually inherited", "a system in which power passes from parent to child in a royal family"], accept: ["monarchy", "a monarchy"], display: "monarchy", why: "William I, John and Henry VIII all ruled monarchies." },
  { tier: 1, defs: ["a source made at the time being studied", "evidence produced during the period you are investigating"], accept: ["primary source", "primary", "primary evidence"], display: "primary source", why: "Primary means from the time — not necessarily reliable.", traps: [t(["secondary source", "secondary"], "Secondary sources are made later, by people looking back.")] },
  { tier: 1, defs: ["putting events in order of time and measuring the gaps between them"], accept: ["chronology", "chronological order"], display: "chronology", why: "Causes must come before consequences, so chronology is the skeleton of history." },
  { tier: 2, defs: ["a dictatorship that tries to control every part of people's lives — work, schools, youth groups, even thoughts", "a system in which the state tries to control all aspects of life"], accept: ["totalitarianism", "totalitarian", "totalitarian state", "totalitarian regime"], display: "totalitarianism", why: "Historians apply it to Nazi Germany, Mao's China and Pol Pot's Cambodia — while debating how complete the control was.", traps: [t(["dictatorship", "dictator"], "Close — but the word for a dictatorship that tries to control *every* part of life is more specific.")] },
  { tier: 2, defs: ["a monarchy in which the monarch's power has few or no legal limits", "the system in France before 1789, where the king's word was law"], accept: ["absolute monarchy", "absolutism", "absolute monarch"], display: "absolute monarchy", why: "France before 1789 is the classic example.", traps: [t(["constitutional monarchy", "limited monarchy"], "That's the opposite — a monarch who rules within the law.")] },
  { tier: 2, defs: ["a monarchy limited by law, where elected governments make the decisions", "the system in the UK today: the King reigns but elected governments rule"], accept: ["constitutional monarchy", "limited monarchy", "constitutional monarch"], display: "constitutional monarchy", why: "Magna Carta was an early step towards putting the king under the law.", traps: [t(["absolute monarchy", "absolutism"], "That's the opposite — a monarch with few or no legal limits.")] },
  { tier: 2, defs: ["the system of granting land in return for loyalty and military service", "William I's system: king → barons → knights → peasants, each owing service to the one above"], accept: ["feudalism", "feudal system", "the feudal system"], display: "feudalism", why: "It let William I control England through his barons." },
  { tier: 2, defs: ["a set of ideas about how society should be organised", "the big set of beliefs behind a regime, such as fascism or communism"], accept: ["ideology", "an ideology", "ideologies"], display: "ideology", why: "Ideology explains what a regime wanted to achieve." },
  { tier: 2, defs: ["citizens elect people to make decisions for them, as in the UK and Singapore", "a system where voters choose MPs to decide laws on their behalf"], accept: ["representative democracy", "parliamentary democracy"], display: "representative democracy", why: "Most modern democracies, including the UK and Singapore, are representative.", traps: [t(["direct democracy"], "In a direct democracy citizens vote on decisions themselves, as in ancient Athens.")] },
  { tier: 2, defs: ["citizens vote on decisions themselves, as in ancient Athens", "a system where the people make the laws directly, without electing representatives"], accept: ["direct democracy"], display: "direct democracy", why: "Ancient Athens — though only adult male citizens could take part.", traps: [t(["representative democracy", "parliamentary democracy"], "In a representative democracy citizens elect others to decide for them.")] },
  { tier: 2, defs: ["the principle that everyone, including the ruler, must obey the law"], accept: ["rule of law", "the rule of law"], display: "rule of law", why: "It is a key test of whether power is limited — Magna Carta's clause 39 is an early example." },
  { tier: 2, defs: ["using fear — secret police, camps and executions — to crush opposition"], accept: ["terror", "the terror", "state terror", "reign of terror", "fear"], display: "terror", why: "Dictatorships used terror alongside propaganda to stay in power." },
  { tier: 2, defs: ["where a source came from: who made it, when, where and why", "the 'background' of a source that you check with NOP"], accept: ["provenance"], display: "provenance", why: "Check provenance with NOP: Nature, Origin, Purpose." },
  { tier: 3, defs: ["presenting the leader as a heroic, all-wise figure to be worshipped", "huge portraits, songs and slogans that turn a leader into a hero — as with Mao's Little Red Book"], accept: ["cult of personality", "personality cult", "cult of the leader"], display: "cult of personality", why: "Hitler as *Führer* and Mao's *Little Red Book* are classic examples.", traps: [t(["propaganda"], "Propaganda is the tool — the word for building worship of the leader is more specific.")] },
  { tier: 3, defs: ["the accepted right to rule", "what William I sought with a papal banner and a coronation on Christmas Day 1066"], accept: ["legitimacy", "legitimate", "legitimate rule"], display: "legitimacy", why: "Rulers need people to accept their right to rule, not just their power." },
  { tier: 3, defs: ["rights that belong to every person, set out in 1789 in France and in a United Nations declaration of 1948"], accept: ["human rights", "rights of man", "universal rights", "natural rights"], display: "human rights", why: "The Declaration of the Rights of Man (1789) and the UDHR (1948)." },
  { tier: 3, defs: ["an extreme nationalist ideology that glorified the nation, the leader and struggle, and rejected democracy (Nazism was a racist form of it)"], accept: ["fascism", "fascist", "fascists"], display: "fascism", why: "Mussolini's Italy and, in an extreme racist form, Nazi Germany.", traps: [t(["communism", "communist"], "Communism aimed at a classless society — the nationalist, anti-democratic ideology here is different.")] },
  { tier: 3, defs: ["an ideology aiming at a classless society without private property, in practice run by a single party (the ideology of Mao and Pol Pot)"], accept: ["communism", "communist", "communists", "marxism"], display: "communism", why: "Mao and Pol Pot both claimed to be building communist societies.", traps: [t(["fascism", "fascist"], "Fascism glorified the nation and leader — the classless-society ideology is different.")] },
  { tier: 3, defs: ["something placed in the wrong time period — like a coin stamped '50 BC'", "a mistake of time, such as a pocket watch at the Battle of Hastings"], accept: ["anachronism", "anachronistic"], display: "anachronism", why: "Spotting anachronisms catches fakes — and lazy thinking." },
  { tier: 3, defs: ["checking a source against other independent evidence to see whether it is confirmed"], accept: ["corroboration", "corroborate", "cross-referencing", "cross referencing", "cross-reference", "cross-checking"], display: "corroboration (cross-referencing)", why: "If independent sources agree, confidence rises; if they clash, investigate why." },
  { tier: 3, defs: ["a later view or argument about the past, built from evidence — such as 'Bad King John'"], accept: ["interpretation", "an interpretation", "interpretations"], display: "interpretation", why: "A source comes from the past; an interpretation is a later argument about it." },
];

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------
const TOPIC = "historians-toolkit";

export const drills: Drill[] = [
  // 1 ---------------------------------------------------------------- centuries
  {
    id: `${TOPIC}.which-century`,
    topicId: TOPIC,
    title: "Which century?",
    level: 1,
    guideRef: "chronology",
    generate(rng, tier) {
      if (tier === 1) {
        const ev = rng.pick(EVENTS);
        const tpl = rng.pick([
          (e: Ev) => `In **${e.y}**, ${e.name}. In which century was that?`,
          (e: Ev) => `${cap(e.name)} in **${e.y}**. Which century is that?`,
        ]);
        return centuryItem(ev.y, tpl(ev));
      }
      if (tier === 2) {
        const y = rng.bool(0.8) ? niceYear(rng, 1001, 1999) : niceYear(rng, 101, 999);
        const tpl = rng.pick([
          (v: number) => `In which century is the year **${v}**?`,
          (v: number) => `A charter is dated **AD ${v}**. Which century is that?`,
          (v: number) => `Which century does the year **${v}** fall in?`,
        ]);
        return centuryItem(y, tpl(y));
      }
      // Tier 3: BC dates, small AD dates and "the 1700s"-style labels.
      const kind = rng.pick(["bc", "bc", "ad-small", "hundreds"] as const);
      if (kind === "bc") {
        const y = niceYear(rng, 1, 999);
        const intro = rng.pick([
          `A Greek coin is dated **${y} BC**. In which century BC was it made?`,
          `In which century BC is the year **${y} BC**?`,
        ]);
        return centuryItem(-y, intro);
      }
      if (kind === "ad-small") {
        const y = niceYear(rng, 1, 99);
        return centuryItem(y, `In which century is **AD ${y}**?`);
      }
      const h = rng.int(10, 19);
      const item = centuryItem(h * 100 + 50, `People often talk about **the ${h}00s**. Which century is that?`);
      return { ...item, solution: [`The ${h}00s are the years ${h}00–${h}99. Their 'hundreds' are ${h}, so add one → the **${ordinal(h + 1)} century**.`, "Strictly a century runs from a year ending 01 to one ending 00, but historians happily call the 1900s the 20th century."] };
    },
  },
  // 2 ---------------------------------------------------------------- BC / AD
  {
    id: `${TOPIC}.bc-ad`,
    topicId: TOPIC,
    title: "BC and AD: order and gaps",
    level: 2,
    guideRef: "chronology",
    generate(rng, tier) {
      const askGap = tier === 1 ? false : rng.bool(0.5);
      if (!askGap) {
        // Which is earlier?
        let a = 0, b = 0;
        for (let i = 0; i < 50; i++) {
          a = -niceYear(rng, 1, tier === 1 ? 900 : 3000);
          b = rng.bool(tier === 1 ? 0.5 : 0.65) ? -niceYear(rng, 1, tier === 1 ? 900 : 3000) : niceYear(rng, 1, 1999);
          if (a !== b && Math.abs(a) !== Math.abs(b)) break;
        }
        const [x, y] = rng.bool() ? [a, b] : [b, a];
        const earlier = Math.min(x, y);
        const later = Math.max(x, y);
        const tpl = rng.pick([
          `Which is earlier: **${yearLabel(x)}** or **${yearLabel(y)}**? Type the year with its label, e.g. 300 BC or AD 50.`,
          `Two objects are dated **${yearLabel(x)}** and **${yearLabel(y)}**. Which date came first? Type the year with its label, e.g. 300 BC or AD 50.`,
        ]);
        const why =
          earlier < 0 && later < 0
            ? `BC years count *down* towards AD 1, so the bigger BC number is further back in time.`
            : `Every BC year comes before every AD year.`;
        return {
          prompt: tpl,
          answer: text(yearAccept(earlier), yearLabel(earlier)),
          solution: [`**${yearLabel(earlier)}** came first. ${why}`],
          hint: "BC years count backwards: 300 BC is earlier than 50 BC.",
          traps: [{ spec: text(yearAccept(later)), feedback: "That's the later date — remember BC numbers get smaller as time moves forwards." }],
        };
      }
      if (tier === 2) {
        // BC to BC gap
        let a = 0, b = 0;
        for (let i = 0; i < 50; i++) {
          a = niceYear(rng, 50, 900);
          b = niceYear(rng, 1, 800);
          if (a > b + 5) break;
        }
        if (a <= b) [a, b] = [b + 20, a];
        return {
          prompt: rng.pick([
            `How many years after **${a} BC** is **${b} BC**?`,
            `A city was founded in **${a} BC** and destroyed in **${b} BC**. How many years did it last?`,
          ]),
          answer: { type: "number", value: a - b },
          solution: [`Both dates are BC, so count down: ${a} − ${b} = **${a - b}** years.`],
          hint: "Both are BC — the numbers count down, so subtract.",
          traps: [{ spec: { type: "number", value: a + b }, feedback: "You added. Both dates are BC, on the same side of AD 1 — subtract instead." }],
        };
      }
      // Tier 3: across the BC/AD line (no year 0).
      const a = niceYear(rng, 1, 600);
      const b = niceYear(rng, 1, 600);
      return {
        prompt: rng.pick([
          `How many years after **${a} BC** is **AD ${b}**? (Careful: there is no year 0.)`,
          `A Roman road was begun in **${a} BC** and repaired in **AD ${b}**. How many years apart are these dates? (There is no year 0.)`,
          `A family kept a coin from **${a} BC** until **AD ${b}**. For how many years did they keep it? (There is no year 0.)`,
        ]),
        answer: { type: "number", value: a + b - 1 },
        solution: [
          `From ${a} BC to 1 BC is ${a - 1} years; from 1 BC to AD 1 is just 1 year (there is no year 0); from AD 1 to AD ${b} is ${b - 1} years.`,
          `Total: ${a - 1} + 1 + ${b - 1} = **${a + b - 1}** years.`,
        ],
        hint: "Add the two numbers — then remember there is no year 0.",
        traps: [{ spec: { type: "number", value: a + b }, feedback: "You counted a year 0 — there isn't one: 1 BC is followed directly by AD 1. Take one away." }],
      };
    },
  },
  // 3 ---------------------------------------------------------------- which came first
  {
    id: `${TOPIC}.which-came-first`,
    topicId: TOPIC,
    title: "Which came first? (across the year)",
    level: 2,
    guideRef: "chronology",
    generate(rng, tier) {
      const pool = tier === 1 ? EVENTS.filter((e) => e.tier <= 2) : [...EVENTS];
      const [minGap, maxGap] = tier === 1 ? [100, 2000] : tier === 2 ? [10, 2000] : [1, 15];
      let a = pool[0], b = pool[1];
      for (let i = 0; i < 200; i++) {
        a = rng.pick(pool);
        b = rng.pick(pool);
        const gap = Math.abs(a.y - b.y);
        if (a.y !== b.y && gap >= minGap && gap <= maxGap) break;
      }
      if (a.y === b.y) b = EVENTS.find((e) => e.y !== a.y)!;
      const first = a.y < b.y ? a : b;
      const second = first === a ? b : a;
      const gap = second.y - first.y;
      if (tier === 3 && rng.bool(0.4)) {
        return {
          prompt: `How many years passed between **${first.label}** and **${second.label}**? (Use the years of each event.)`,
          answer: { type: "number", value: gap },
          solution: [`${cap(first.name)} in ${first.y}; ${second.name} in ${second.y}.`, `${second.y} − ${first.y} = **${gap}** years.`],
          hint: "Recall each year, then subtract the earlier from the later.",
        };
      }
      return {
        prompt: rng.pick([
          `Which came first: **${a.label}** or **${b.label}**? Type the event.`,
          `Put these in order — which happened earlier: **${a.label}** or **${b.label}**?`,
        ]),
        answer: text(first.accept, first.label),
        solution: [`**${first.label}** (${first.y}) came first: ${first.name} in ${first.y}, and ${second.name} in ${second.y} — ${gap} year${gap === 1 ? "" : "s"} later.`],
        hint: "Try to pin each one to a century first, then to a year.",
        traps: [{ spec: text(second.accept, second.label), feedback: `${second.label} was in ${second.y} — later. Pin each event to a year before comparing.` }],
      };
    },
  },
  // 4 ---------------------------------------------------------------- primary or secondary
  {
    id: `${TOPIC}.primary-or-secondary`,
    topicId: TOPIC,
    title: "Primary or secondary?",
    level: 1,
    guideRef: "sources-and-evidence",
    generate(rng, tier) {
      const item = rng.pick(poolFor(rng, SOURCES, tier));
      const tpl = rng.pick([
        (s: SourceItem) => `You are investigating **${s.enquiry}**. Is ${s.text} a **primary** or a **secondary** source? Answer *primary* or *secondary*.`,
        (s: SourceItem) => `For an enquiry into **${s.enquiry}**, would ${s.text} count as a primary or a secondary source? Answer *primary* or *secondary*.`,
      ]);
      const answers = {
        primary: { accept: ["primary", "primary source", "a primary source"], display: "primary" },
        secondary: { accept: ["secondary", "secondary source", "a secondary source"], display: "secondary" },
      };
      const other: PS = item.answer === "primary" ? "secondary" : "primary";
      return {
        prompt: tpl(item),
        answer: text(answers[item.answer].accept, answers[item.answer].display),
        solution: [`**${cap(item.answer)}.** ${item.why}`, "Remember: primary means *from the time being studied* — not *reliable*."],
        hint: "Was it made during the period you are investigating, or later by someone looking back?",
        traps: [{ spec: text(answers[other].accept), feedback: other === "primary" ? "Check when it was made compared with the period you are investigating." : "It doesn't matter how biased or accurate it is — check *when* it was made compared with the period being studied." }],
      };
    },
  },
  // 5 ---------------------------------------------------------------- NOP
  {
    id: `${TOPIC}.nop-element`,
    topicId: TOPIC,
    title: "Nature, Origin or Purpose?",
    level: 2,
    guideRef: "provenance-nop",
    generate(rng, tier) {
      return classify(
        rng,
        tier,
        NOP_ITEMS,
        {
          nature: { accept: ["nature", "n", "nature of the source"], display: "Nature" },
          origin: { accept: ["origin", "origins", "o", "origin of the source"], display: "Origin" },
          purpose: { accept: ["purpose", "p", "purpose of the source"], display: "Purpose" },
        },
        [
          (x) => `In NOP, which question does this detail about a source answer — **Nature**, **Origin** or **Purpose**?\n\n> ${x}`,
          (x) => `Wei Ling is checking a source's provenance. Which part of NOP is she noting here? Answer *Nature*, *Origin* or *Purpose*.\n\n> ${x}`,
        ],
        "Nature = what kind of source; Origin = who made it, when and where; Purpose = why it was made.",
        (wrong) =>
          wrong === "nature"
            ? "Nature is *what kind* of source it is (diary, poster, record) — is that what this detail tells you?"
            : wrong === "origin"
              ? "Origin is *who* made it, *when* and *where* — is that what this detail tells you?"
              : "Purpose is *why* it was made and for whom — is that what this detail tells you?",
      );
    },
  },
  // 6 ---------------------------------------------------------------- source or interpretation
  {
    id: `${TOPIC}.source-or-interpretation`,
    topicId: TOPIC,
    title: "Source or interpretation?",
    level: 2,
    guideRef: "interpretations",
    generate(rng, tier) {
      return classify(
        rng,
        tier,
        SI_ITEMS,
        {
          source: { accept: ["source", "a source", "primary source"], display: "source" },
          interpretation: { accept: ["interpretation", "an interpretation"], display: "interpretation" },
        },
        [
          (x) => `Is this a **source** from the time or a later **interpretation** of the past? Answer *source* or *interpretation*.\n\n> ${cap(x)}`,
          (x) => `Ravi is sorting his evidence. Does this count as a **source** or an **interpretation**? Answer *source* or *interpretation*.\n\n> ${cap(x)}`,
        ],
        "A source comes *from* the past; an interpretation is a later view or argument *about* it.",
        (wrong) => (wrong === "source" ? "When was it made? A later view about the past is an interpretation, even if it's based on sources." : "Was it made at the time? Material from the period is a source, even if it contains opinions."),
      );
    },
  },
  // 7 ---------------------------------------------------------------- causation
  {
    id: `${TOPIC}.cause-type`,
    topicId: TOPIC,
    title: "Long-term, short-term or trigger?",
    level: 3,
    guideRef: "causation",
    generate(rng, tier) {
      if (tier >= 2 && rng.bool(0.35)) {
        return classify(
          rng,
          tier,
          MODEL,
          {
            crisis: { accept: ["crisis", "crises", "a crisis"], display: "crisis" },
            "weak government": { accept: ["weak government", "weakness of government", "weak govt", "government weakness", "weakness", "weak"], display: "weak government" },
            leader: { accept: ["leader", "leadership", "charismatic leader", "charismatic leadership", "determined leader", "leader or party", "party"], display: "leader (or party)" },
          },
          [
            (x) => `In the Term 2 model (**crises + weak government + a determined leader**), which factor is this? Answer *crisis*, *weak government* or *leader*.\n\n> ${x}`,
            (x) => `Classify this cause of a dictatorship's rise as *crisis*, *weak government* or *leader*.\n\n> ${x}`,
          ],
          "Is it something that happened to the country, a failure of those in charge, or the people who exploited it?",
          (wrong) => (wrong === "crisis" ? "A crisis is an emergency such as war or economic collapse — is this one?" : wrong === "weak government" ? "Weak government is about those in power failing to cope — is this?" : "The leader factor is about the person or party who exploited the situation — is this?"),
        );
      }
      const item = rng.pick(poolFor(rng, CAUSES, tier));
      const answers: Record<CT, { accept: string[]; display: string }> = {
        "long-term": { accept: ["long-term", "long term", "longterm", "long-term cause", "long term cause", "long"], display: "long-term" },
        "short-term": { accept: ["short-term", "short term", "shortterm", "short-term cause", "short term cause", "short"], display: "short-term" },
        trigger: { accept: ["trigger", "trigger cause", "a trigger", "spark"], display: "trigger" },
      };
      const tpl = rng.pick([
        (c: CauseItem) => `Was this a **long-term cause**, **short-term cause** or **trigger** of ${c.event}? Answer *long-term*, *short-term* or *trigger*.\n\n> ${cap(c.text)}`,
        (c: CauseItem) => `Long-term, short-term or trigger? Classify this cause of ${c.event}. Answer *long-term*, *short-term* or *trigger*.\n\n> ${cap(c.text)}`,
        (c: CauseItem) => `Priya is sorting the causes of ${c.event}. Where does this one go — *long-term*, *short-term* or *trigger*?\n\n> ${cap(c.text)}`,
      ]);
      const others = (Object.keys(answers) as CT[]).filter((k) => k !== item.answer);
      return {
        prompt: tpl(item),
        answer: text(answers[item.answer].accept, answers[item.answer].display),
        solution: [`**${cap(answers[item.answer].display)}.** ${item.why}`, "Long-term causes build up over years; short-term causes come just before; the trigger is the spark."],
        hint: "How long before the event did this begin — years and decades, the last year or two, or the final moment?",
        traps: others.map((k) => ({
          spec: text(answers[k].accept),
          feedback: k === "trigger" ? "A trigger is the final spark that sets the event off — was this the very last step?" : k === "long-term" ? "Long-term causes build up over many years — did this?" : "Short-term causes come in the year or two just before — is that the timing here?",
        })),
      };
    },
  },
  // 8 ---------------------------------------------------------------- change / continuity
  {
    id: `${TOPIC}.change-or-continuity`,
    topicId: TOPIC,
    title: "Change or continuity?",
    level: 2,
    guideRef: "change-continuity-significance",
    generate(rng, tier) {
      return classify(
        rng,
        tier,
        CC_ITEMS,
        {
          change: { accept: ["change", "a change", "changed"], display: "change" },
          continuity: { accept: ["continuity", "continuities", "stayed the same", "no change"], display: "continuity" },
        },
        [
          (x) => `Is this an example of **change** or **continuity**? Answer *change* or *continuity*.\n\n> ${x}`,
          (x) => `Zara is building a change-and-continuity chart. Which column does this go in — *change* or *continuity*?\n\n> ${x}`,
          (x) => `Change or continuity? Answer *change* or *continuity*.\n\n> ${x}`,
        ],
        "Did something become different, or did it stay the same?",
        (wrong) => (wrong === "change" ? "Read it again — did anything actually become different here?" : "Read it again — something did become different here."),
      );
    },
  },
  // 9 ---------------------------------------------------------------- PEEL
  {
    id: `${TOPIC}.peel-part`,
    topicId: TOPIC,
    title: "Which part of PEEL?",
    level: 2,
    guideRef: "writing-like-a-historian",
    generate(rng, tier) {
      const item = rng.pick(poolFor(rng, PEEL_ITEMS, tier));
      const answers: Record<PEEL, { accept: string[]; display: string }> = {
        point: { accept: ["point", "the point", "p"], display: "Point" },
        evidence: { accept: ["evidence", "the evidence"], display: "Evidence" },
        explain: { accept: ["explain", "explanation", "explaining", "the explanation"], display: "Explain" },
        link: { accept: ["link", "linking", "the link", "l"], display: "Link" },
      };
      const tpl = rng.pick([
        (p: PeelItem) => `The question is: *${p.q}*\n\nWhich part of a PEEL paragraph is this sentence? Answer *Point*, *Evidence*, *Explain* or *Link*.\n\n> ${p.text}`,
        (p: PeelItem) => `Arjun is answering *${p.q}* Is this sentence his Point, Evidence, Explain or Link?\n\n> ${p.text}`,
      ]);
      const others = (Object.keys(answers) as PEEL[]).filter((k) => k !== item.answer);
      const fb: Record<PEEL, string> = {
        point: "A Point answers the question directly in one sentence — does this?",
        evidence: "Evidence is precise detail (dates, names, numbers) — is that what this sentence gives?",
        explain: "Explain shows *how* the evidence answers the question ('This meant that…', 'because…') — does this?",
        link: "A Link ties the paragraph back to the question ('So…', 'Therefore…', 'This shows that…') — does this?",
      };
      return {
        prompt: tpl(item),
        answer: text(answers[item.answer].accept, answers[item.answer].display),
        solution: [`**${answers[item.answer].display}.** ${item.why}`, "PEEL: Point (answer), Evidence (precise detail), Explain (how it answers the question), Link (back to the question)."],
        hint: "Look at the opening words: 'One reason…', a date or number, 'This meant that…', or 'So / Therefore…'?",
        traps: others.map((k) => ({ spec: text(answers[k].accept), feedback: fb[k] })),
      };
    },
  },
  // 10 --------------------------------------------------------------- key concepts
  {
    id: `${TOPIC}.key-concept`,
    topicId: TOPIC,
    title: "Key term from its definition",
    level: 1,
    guideRef: "power-concepts",
    generate(rng, tier) {
      const c = rng.pick(poolFor(rng, CONCEPTS, tier));
      const def = rng.pick(c.defs);
      const tpl = rng.pick([
        (d: string) => `Which key term means: *${d}*?`,
        (d: string) => `Name the concept: *${d}*.`,
        (d: string) => `Mei's revision card says: *"${d}"*. What is the word on the other side?`,
      ]);
      return {
        prompt: tpl(def),
        answer: text(c.accept, c.display),
        solution: [`**${cap(c.display)}** — ${def}.`, c.why],
        hint: "Think about the big ideas of the year: monarchy, dictatorship, democracy — and the historian's tools.",
        traps: c.traps,
      };
    },
  },
];
