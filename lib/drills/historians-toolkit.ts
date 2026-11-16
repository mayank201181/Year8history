// Recall drills for "The Historian's Toolkit": chronology, sources, usefulness/reliability,
// interpretations, causation, significance and change.
import type { Drill, DrillItem, Rng } from "./types.ts";
import { fromBank, whichFirst, yearOf, type BankItem, type DatedEvent } from "./history.ts";

const T = "historians-toolkit";

// One shared list of dated events from across the Year 8 course (and Singapore's story).
const EVENTS: DatedEvent[] = [
  { year: -44, label: "the assassination of Julius Caesar", alt: ["Julius Caesar's assassination", "Caesar's assassination", "assassination of Caesar", "the death of Julius Caesar"], date: "15 March 44 BC" },
  { year: 43, label: "the Roman invasion of Britain", alt: ["Roman invasion of Britain", "the Roman invasion", "Claudius's invasion of Britain"], date: "AD 43" },
  { year: 476, label: "the fall of the Western Roman Empire", alt: ["fall of the Western Roman Empire", "the fall of Rome", "fall of Rome"], date: "AD 476 (the traditional date)" },
  { year: 1066, label: "the Battle of Hastings", alt: ["Battle of Hastings", "Hastings"], date: "14 October 1066" },
  { year: 1086, label: "the Domesday survey", alt: ["Domesday survey", "Domesday Book", "Domesday", "the Domesday Book"], date: "1086 (ordered at Christmas 1085)" },
  { year: 1215, label: "the sealing of Magna Carta", alt: ["Magna Carta", "sealing of Magna Carta"], date: "15 June 1215" },
  { year: 1348, label: "the arrival of the Black Death in England", alt: ["the Black Death", "Black Death", "arrival of the Black Death"], date: "1348" },
  { year: 1485, label: "the Battle of Bosworth", alt: ["Battle of Bosworth", "Bosworth"], date: "22 August 1485" },
  { year: 1534, label: "the Act of Supremacy", alt: ["Act of Supremacy"], date: "1534" },
  { year: 1789, label: "the storming of the Bastille", alt: ["storming of the Bastille", "the Bastille"], date: "14 July 1789" },
  { year: 1819, label: "Stamford Raffles's arrival in Singapore", alt: ["Raffles's arrival in Singapore", "Raffles arrives in Singapore", "Raffles's arrival", "Raffles"], date: "28 January 1819" },
  { year: 1914, label: "the start of the First World War", alt: ["the First World War", "First World War", "World War One", "WW1", "WWI", "start of the First World War"], date: "1914" },
  { year: 1918, label: "the Representation of the People Act", alt: ["Representation of the People Act", "the 1918 Act"], date: "1918 (some women over 30 got the vote)" },
  { year: 1928, label: "the Equal Franchise Act", alt: ["Equal Franchise Act", "the 1928 Act"], date: "1928 (women could vote at 21, like men)" },
  { year: 1933, label: "Hitler becoming Chancellor", alt: ["Hitler became Chancellor", "Hitler becomes Chancellor", "Hitler"], date: "30 January 1933" },
  { year: 1942, label: "the fall of Singapore", alt: ["fall of Singapore"], date: "15 February 1942" },
  { year: 1949, label: "the founding of the People's Republic of China", alt: ["founding of the People's Republic of China", "the People's Republic of China", "People's Republic of China", "PRC"], date: "1 October 1949" },
  { year: 1965, label: "Singapore's independence", alt: ["Singapore independence", "independence of Singapore"], date: "9 August 1965" },
  { year: 1975, label: "the Khmer Rouge capture of Phnom Penh", alt: ["Khmer Rouge capture of Phnom Penh", "the Khmer Rouge take Phnom Penh", "fall of Phnom Penh"], date: "17 April 1975" },
];

function ordinal(n: number): string {
  const r100 = n % 100;
  if (r100 >= 11 && r100 <= 13) return `${n}th`;
  const r10 = n % 10;
  return `${n}${r10 === 1 ? "st" : r10 === 2 ? "nd" : r10 === 3 ? "rd" : "th"}`;
}

/** A year that does not end in 00 (avoids the 1900 / 2000 'which century?' debate). */
function yearNot00(rng: Rng, min: number, max: number): number {
  for (let i = 0; i < 50; i++) {
    const y = rng.int(min, max);
    if (y % 100 !== 0) return y;
  }
  return min + 1;
}

function centuries(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const kind = tier === 1 ? rng.pick(["ad", "ad", "digits"]) : tier === 2 ? rng.pick(["ad", "early", "digits", "gap"]) : rng.pick(["bc", "span", "span", "early"]);
  if (kind === "ad" || kind === "early") {
    const y = kind === "ad" ? yearNot00(rng, 1001, 2025) : yearNot00(rng, 101, 999);
    const c = Math.ceil(y / 100);
    const wrong = Math.floor(y / 100);
    return {
      prompt: `Which century is the year ${y} in? Type the number (for example, 9 for the 9th century).`,
      answer: { type: "number", value: c, display: `${ordinal(c)} century` },
      solution: [`The 1st century was years 1–100, so each century "number" is one ahead of the hundreds: ${y} is in the ${ordinal(c)} century (years ${(c - 1) * 100 + 1}–${c * 100}).`],
      hint: "Look at the hundreds, then add one.",
      traps: wrong !== c && wrong > 0 ? [{ spec: { type: "number", value: wrong }, feedback: `That's just the hundreds digits. Add one: the ${ordinal(wrong)} century ended in ${wrong * 100}.` }] : undefined,
    };
  }
  if (kind === "digits") {
    const c = rng.int(11, 21);
    return {
      prompt: `Most years in the ${ordinal(c)} century begin with which two digits?`,
      answer: { type: "number", value: c - 1, display: String(c - 1) },
      solution: [`The ${ordinal(c)} century runs from ${(c - 1) * 100 + 1} to ${c * 100}, so most of its years start ${c - 1}.`],
      hint: "We live in the 21st century, but this year starts 20…",
      traps: [{ spec: { type: "number", value: c }, feedback: `Careful — the century number is one MORE than the first digits. Years in the ${ordinal(c)} century mostly start ${c - 1}.` }],
    };
  }
  if (kind === "gap") {
    const ad = EVENTS.filter((e) => e.year > 0);
    let a = rng.pick(ad);
    let b = rng.pick(ad);
    for (let i = 0; i < 50 && a.year === b.year; i++) b = rng.pick(ad);
    if (a.year > b.year) [a, b] = [b, a];
    return {
      prompt: `How many years passed between ${a.label} (${a.year}) and ${b.label} (${b.year})?`,
      answer: { type: "number", value: b.year - a.year },
      solution: [`Both dates are AD, so just subtract: ${b.year} − ${a.year} = ${b.year - a.year} years.`],
      hint: "Both years are AD: take the earlier from the later.",
    };
  }
  if (kind === "bc") {
    const y = yearNot00(rng, 101, 999);
    const c = Math.ceil(y / 100);
    return {
      prompt: `Which century BC is the year ${y} BC in? Type the number.`,
      answer: { type: "number", value: c, display: `${ordinal(c)} century BC` },
      solution: [`BC centuries count backwards from 1 BC: the 1st century BC is 100–1 BC, so ${y} BC is in the ${ordinal(c)} century BC.`],
      hint: "BC centuries work like AD ones, just counting backwards from the birth of Christ.",
      traps: [{ spec: { type: "number", value: Math.floor(y / 100) }, feedback: "Just like AD dates, add one to the hundreds digit." }],
    };
  }
  // span across BC → AD: there is no year 0
  const bc = rng.int(20, 400);
  const ad = rng.int(10, 600);
  return {
    prompt: `A coin was made in ${bc} BC and a wall was built in AD ${ad}. How many years apart are they?`,
    answer: { type: "number", value: bc + ad - 1 },
    solution: [`Count to the BC/AD line and back out: ${bc} + ${ad} = ${bc + ad}, then subtract 1 because there was no year 0 (1 BC is followed directly by AD 1). Answer: ${bc + ad - 1} years.`],
    hint: "Add the two numbers… then remember the calendar has no year 0.",
    traps: [{ spec: { type: "number", value: bc + ad }, feedback: "So close — the calendar jumps from 1 BC straight to AD 1. There's no year 0, so take one away." }],
  };
}

const PRIMARY = { type: "text" as const, accept: ["primary", "primary source", "a primary source"], display: "Primary" };
const SECONDARY = { type: "text" as const, accept: ["secondary", "secondary source", "a secondary source"], display: "Secondary" };
const notSecondary = (why: string) => [{ spec: { type: "text" as const, accept: ["secondary"] }, feedback: why }];
const notPrimary = (why: string) => [{ spec: { type: "text" as const, accept: ["primary"] }, feedback: why }];
const ps = (prompt: string, primary: boolean, solution: string, trapWhy: string, tier: 1 | 2 | 3 = 1): BankItem => ({
  prompt: `${prompt} Primary or secondary?`,
  answer: primary ? PRIMARY : SECONDARY,
  solution,
  hint: "Was it made at the time (or by someone who was there), or later by someone looking back?",
  traps: primary ? notSecondary(trapWhy) : notPrimary(trapWhy),
  tier,
});

const PRIMARY_SECONDARY: BankItem[] = [
  ps("A historian is studying the suffragettes. They read a letter written by a suffragette from prison in 1912.", true, "Primary: it was written at the time by someone involved.", "It was written in 1912 by someone in prison — that's from the time."),
  ps("A historian is studying the suffragettes. They watch the film *Suffragette*, released in 2015.", false, "Secondary: it was made about 100 years later by people looking back.", "Films can feel real, but this one was made in 2015, long after the events."),
  ps("A historian is studying Norman England. They use the Domesday Book of 1086.", true, "Primary: it was compiled for William I at the time.", "It was made in 1086, during William's reign."),
  ps("A historian is studying the Battle of Hastings. They look at the Bayeux Tapestry, made in the 1070s.", true, "Primary: it was made by people living at the time of the Conquest.", "It was made in the 1070s, a few years after the battle — a source from the period."),
  ps("A student is studying King John. She reads a history textbook published in 2020.", false, "Secondary: it was written about 800 years later, using other sources.", "It was published in 2020 — written with hindsight, not at the time."),
  ps("A historian is studying King John. They read the text of Magna Carta, sealed in 1215.", true, "Primary: the document was made at the time, during John's reign.", "Magna Carta itself dates from 1215 — it's straight from the period."),
  ps("A historian is studying Nazi Germany. They examine a Nazi propaganda poster printed in 1936.", true, "Primary: it was made at the time — biased, but still primary.", "Being biased doesn't make a source secondary. It was printed in 1936."),
  ps("A historian is studying Nazi Germany. They watch a television documentary made in 2005.", false, "Secondary: it was made decades later, looking back.", "It was made in 2005, so it's an account produced later."),
  ps("A historian is studying Norman England. They examine a silver penny minted during William I's reign.", true, "Primary: objects made at the time are primary sources too.", "It was made during William's reign — objects can be primary sources."),
  ps("A student is studying the French Revolution. She reads a speech that Robespierre gave in 1794.", true, "Primary: Robespierre was a revolutionary leader speaking at the time.", "Robespierre made it during the Revolution itself."),
  ps("A student is studying the French Revolution. He reads an article on a history website written in 2019.", false, "Secondary: written over 200 years later.", "It was written in 2019, long after the Revolution."),
  ps("A historian is studying the Japanese occupation of Singapore. They read a diary kept by a Singaporean civilian in 1942.", true, "Primary: written at the time by someone living through it.", "It was written in 1942 by an eyewitness."),
  ps("A historian is studying Henry VIII. They look at a portrait of Henry painted in the 1530s by his court painter, Hans Holbein.", true, "Primary: painted during Henry's reign by someone who knew him.", "Holbein painted it while Henry was alive and king.", 2),
  ps("A historian is studying Henry VIII. They read a biography of Henry written by a historian in 1968.", false, "Secondary: written over 400 years later.", "1968 is centuries after Henry died (1547).", 2),
  ps("A historian is studying the Battle of Hastings. They look at a painting of Harold's death made by a Victorian artist in the 1860s.", false, "Secondary for 1066: it was made about 800 years later. (It would be a primary source for how Victorians imagined the past!)", "It's old, but 'old' isn't the test — it was made about 800 years after 1066.", 3),
  ps("A historian is studying the Japanese occupation of Singapore. In 2000 they record an interview with a woman who lived through the occupation as a child.", true, "Primary: she is an eyewitness. The interview was recorded later, so memory may have changed — but it is still a first-hand account (oral history).", "It was recorded later, but she was there — eyewitness accounts count as primary, even if memory can fade.", 3),
  ps("A historian is studying Norman castles. A museum shows a modern artist's reconstruction drawing of a motte-and-bailey castle.", false, "Secondary: it is a modern interpretation of what the castle may have looked like.", "It was drawn recently, based on evidence — that's an interpretation made later.", 2),
  ps("A historian is studying the suffragettes. They read a newspaper report of Emily Wilding Davison at the 1913 Derby, printed the next day.", true, "Primary: it was written at the time.", "It was printed the day after the event — that's from the time.", 2),
];

const nop = (prompt: string, ans: "nature" | "origin" | "purpose", solution: string, tier: 1 | 2 | 3 = 1): BankItem => ({
  prompt: `Under which NOP heading does this detail belong? ${prompt}`,
  answer: { type: "text", accept: ans === "nature" ? ["nature", "N"] : ans === "origin" ? ["origin", "O"] : ["purpose", "P"], display: ans.charAt(0).toUpperCase() + ans.slice(1) },
  solution,
  hint: "Nature = what kind of source. Origin = who, when, where. Purpose = why it was made and for whom.",
  traps: (["nature", "origin", "purpose"] as const)
    .filter((x) => x !== ans)
    .map((x) => ({ spec: { type: "text" as const, accept: [x] }, feedback: x === "nature" ? "Nature means the TYPE of source (diary, poster, photo…)." : x === "origin" ? "Origin means WHO made it, WHEN and WHERE." : "Purpose means WHY it was made and who it was for." })),
  tier,
});

const NOP_UTILITY: BankItem[] = [
  nop("“It is a private diary.”", "nature", "Nature: the type of source."),
  nop("“It was written in 1913.”", "origin", "Origin: when it was made."),
  nop("“It was written by a monk at St Albans Abbey.”", "origin", "Origin: who made it and where."),
  nop("“It was made to persuade people to vote for the Nazi Party.”", "purpose", "Purpose: why it was made."),
  nop("“It is a photograph.”", "nature", "Nature: the type of source."),
  nop("“It was meant to be read by the king's supporters.”", "purpose", "Purpose includes the intended audience."),
  nop("“It is a speech to a crowd.”", "nature", "Nature: the type of source.", 2),
  nop("“It was made to entertain, not to record facts.”", "purpose", "Purpose: why it was made.", 2),
  {
    prompt: "What word means how far we can **trust** what a source tells us?",
    answer: { type: "text", accept: ["reliability", "reliable"], display: "Reliability" },
    solution: "Reliability = can I trust it to give an accurate account?",
    traps: [{ spec: { type: "text", accept: ["utility", "usefulness", "useful"] }, feedback: "Usefulness (utility) is about how much it helps with a particular question — a different idea." }],
  },
  {
    prompt: "What word (starting with u) means how much a source can help answer a particular question?",
    answer: { type: "text", accept: ["utility", "usefulness", "useful"], display: "Utility (usefulness)" },
    solution: "Utility = how useful a source is FOR a particular enquiry.",
    traps: [{ spec: { type: "text", accept: ["reliability", "reliable"] }, feedback: "Reliability is about trust. Utility is about how much it helps answer your question." }],
  },
  {
    prompt: "A historian asks: “How did the Nazis want Germans to see Hitler?” Is a 1934 Nazi propaganda poster of Hitler useful or useless for this question?",
    answer: { type: "text", accept: ["useful", "very useful", "it is useful"], display: "Useful" },
    solution: "Very useful: its bias IS the evidence — it shows exactly the image the Nazis wanted to create.",
    hint: "Ask “useful FOR what?”",
    traps: [{ spec: { type: "text", accept: ["useless", "not useful"] }, feedback: "Biased doesn't mean useless. For a question about Nazi propaganda, a Nazi poster is perfect evidence." }],
    tier: 2,
  },
  {
    prompt: "A one-sided view that favours one person or group over another is called…?",
    answer: { type: "text", accept: ["bias", "biased", "one-sided"], display: "Bias" },
    solution: "Bias: a one-sided view. A biased source can still be useful.",
  },
  {
    prompt: "Information spread by a government or group to persuade people, often one-sided or misleading, is called…?",
    answer: { type: "text", accept: ["propaganda"], display: "Propaganda" },
    solution: "Propaganda: deliberately persuasive information.",
    traps: [{ spec: { type: "text", accept: ["bias"] }, feedback: "Close — propaganda is usually biased, but the word for deliberately spreading persuasive messages is propaganda." }],
  },
  {
    prompt: "Who were the people a source was made for — for example, the voters a poster was aimed at? This is the source's…?",
    answer: { type: "text", accept: ["audience", "intended audience"], display: "Audience" },
    solution: "Audience: who it was made for. It is part of purpose.",
    tier: 2,
  },
  {
    prompt: "Knowing what happened later — which writers at the time could not know — is called…?",
    answer: { type: "text", accept: ["hindsight"], display: "Hindsight" },
    solution: "Hindsight: knowledge of what came next. Later sources have it; sources from the time don't.",
    tier: 2,
  },
  {
    prompt: "Matthew Paris wrote about King John decades after John died, and the Church had quarrelled bitterly with John. Does this make Paris's view of John MORE or LESS reliable?",
    answer: { type: "text", accept: ["less", "less reliable"], display: "Less reliable" },
    solution: "Less reliable: he wasn't an eyewitness, and as a monk he had reason to dislike a king who quarrelled with the Church. (It is still useful for what monks thought of John.)",
    traps: [{ spec: { type: "text", accept: ["more", "more reliable"] }, feedback: "Check the provenance: written long after, by someone whose Church had clashed with John." }],
    tier: 3,
  },
  {
    prompt: "Is a private diary, written only for the writer, more or less likely than a public speech to have been written to persuade? Type more or less.",
    answer: { type: "text", accept: ["less", "less likely"], display: "Less likely" },
    solution: "Less likely: a private diary has no audience to win over, though the writer can still be mistaken or one-sided.",
    tier: 3,
  },
];

const INTERPRETATIONS: BankItem[] = [
  {
    prompt: "A historian's view or argument about the past, based on evidence, is called an…?",
    answer: { type: "text", accept: ["interpretation", "an interpretation"], display: "Interpretation" },
    solution: "An interpretation: a deliberate view of the past, made later from evidence.",
    traps: [{ spec: { type: "text", accept: ["source", "primary source"] }, feedback: "A source comes from the past. An interpretation is someone's later view OF the past." }],
  },
  {
    prompt: "Interpretation or source? The Bayeux Tapestry, made in the 1070s.",
    answer: { type: "text", accept: ["source", "a source", "primary source"], display: "Source" },
    solution: "A source: it comes from the time. (It has a point of view, but it is evidence, not a later historian's argument.)",
    traps: [{ spec: { type: "text", accept: ["interpretation"] }, feedback: "It has a Norman point of view, but it was made at the time — so it is a source." }],
  },
  {
    prompt: "Interpretation or source? A 2015 book by a historian arguing that King John was a hard-working ruler who has been treated unfairly.",
    answer: { type: "text", accept: ["interpretation", "an interpretation"], display: "Interpretation" },
    solution: "An interpretation: a modern historian's argued view.",
    traps: [{ spec: { type: "text", accept: ["source", "primary source"] }, feedback: "It is a modern historian's argument about John — an interpretation." }],
  },
  {
    prompt: "King John's bad reputation was spread by chroniclers who were monks. Which organisation had John quarrelled with, giving them a reason to dislike him?",
    answer: { type: "text", accept: ["the Church", "Church", "the Catholic Church", "the Pope", "Pope", "the papacy"], display: "The Church (the Pope)" },
    solution: "The Church: England was placed under an interdict (1208) and John was excommunicated (1209).",
    tier: 2,
  },
  {
    prompt: "Name the monk of St Albans, writing in the 1240s–50s, whose chronicle helped create the image of “Bad King John”.",
    answer: { type: "text", accept: ["Matthew Paris", "Paris"], display: "Matthew Paris" },
    solution: "Matthew Paris, who built on the earlier chronicle of Roger of Wendover.",
    traps: [{ spec: { type: "text", accept: ["William Shakespeare", "Shakespeare"] }, feedback: "Shakespeare did write a play about John, but much later (1590s). The St Albans monk was Matthew Paris." }],
    tier: 3,
  },
  {
    prompt: "Historians often disagree because they ask different questions. If one focuses on John's government records and another on his quarrels, they have a different…? (one word: what they look at)",
    answer: { type: "text", accept: ["focus", "focuses", "emphasis"], display: "Focus" },
    solution: "Focus: what a historian chooses to look at shapes their conclusion.",
    tier: 2,
  },
  {
    prompt: "New finds can change interpretations. In 2012 the skeleton of which king was found under a car park in Leicester?",
    answer: { type: "text", accept: ["Richard III", "Richard the Third", "King Richard III"], display: "Richard III" },
    solution: "Richard III: the skeleton showed a curved spine (scoliosis), but not the exaggerated hunchback of Tudor stories.",
    traps: [{ spec: { type: "text", accept: ["Henry VIII", "Henry VII"] }, feedback: "It was the last Yorkist king, killed at Bosworth in 1485: Richard III." }],
    tier: 2,
  },
  {
    prompt: "Richard III was killed at Bosworth by the forces of the first Tudor king. Which family's writers later portrayed Richard as a villain?",
    answer: { type: "text", accept: ["Tudor", "the Tudors", "Tudors", "Tudor writers"], display: "The Tudors" },
    solution: "Tudor writers (and later Shakespeare) had a reason to make the king their dynasty overthrew look bad.",
    tier: 3,
  },
  {
    prompt: "The time and society in which a historian writes, which can shape their view, is called their…?",
    answer: { type: "text", accept: ["context", "historical context"], display: "Context" },
    solution: "Context: e.g. many Victorian historians, proud of Parliament, celebrated Magna Carta and condemned John.",
    tier: 2,
  },
  {
    prompt: "When we test an interpretation, we check it against ___ from the time. (one word)",
    answer: { type: "text", accept: ["evidence", "sources"], display: "Evidence" },
    solution: "Evidence: does the evidence support the interpretation, and how much of it?",
  },
  {
    prompt: "Interpretation or source? A propaganda poster printed in Germany in 1932.",
    answer: { type: "text", accept: ["source", "a source", "primary source"], display: "Source" },
    solution: "A source: it comes from the time, even though it is biased.",
    traps: [{ spec: { type: "text", accept: ["interpretation"] }, feedback: "Propaganda has a viewpoint, but it was made in 1932 — a source." }],
  },
  {
    prompt: "Interpretation or source? A museum display written in 2018 explaining why the suffragettes won the vote.",
    answer: { type: "text", accept: ["interpretation", "an interpretation"], display: "Interpretation" },
    solution: "An interpretation: a modern explanation of the past.",
    traps: [{ spec: { type: "text", accept: ["source"] }, feedback: "It was written in 2018 to explain the past — an interpretation." }],
  },
  {
    prompt: "True or false: if two historians disagree, one of them must be lying.",
    answer: { type: "text", accept: ["false", "f"], display: "False" },
    solution: "False: they may use different evidence, ask different questions, or weigh the same evidence differently.",
  },
  {
    prompt: "True or false: an interpretation can be useful even if it is old and we now think it is wrong.",
    answer: { type: "text", accept: ["true", "t"], display: "True" },
    solution: "True: it shows what people believed when it was written (e.g. Victorian views of King John).",
    tier: 2,
  },
  {
    prompt: "Which Victorian Bishop of Oxford and historian of the English constitution was famously harsh about King John? (surname)",
    answer: { type: "text", accept: ["Stubbs", "William Stubbs"], display: "William Stubbs" },
    solution: "William Stubbs, writing in the 1870s, saw John as one of the worst English kings.",
    tier: 3,
  },
];

const CAUSES: BankItem[] = [
  {
    prompt: "The immediate event that sets off something that has been building up for a long time is called the…?",
    answer: { type: "text", accept: ["trigger", "trigger cause", "the trigger"], display: "Trigger" },
    solution: "The trigger: the spark, not the fuel.",
    traps: [{ spec: { type: "text", accept: ["short-term cause", "short term"] }, feedback: "A trigger is even more immediate than a short-term cause — it's the final spark." }],
  },
  {
    prompt: "A cause that built up over many years is a ___-term cause.",
    answer: { type: "text", accept: ["long", "long-term", "long term"], display: "Long-term" },
    solution: "Long-term: years or decades of build-up.",
  },
  {
    prompt: "Category of cause: the Wall Street Crash of 1929 led to mass unemployment in Germany.",
    answer: { type: "text", accept: ["economic"], display: "Economic" },
    solution: "Economic: it is about money, jobs and trade.",
    hint: "Political, economic, social, religious, military or individual?",
  },
  {
    prompt: "Category of cause: Henry VIII was influenced by new Protestant ideas questioning the Pope's power.",
    answer: { type: "text", accept: ["religious", "religion"], display: "Religious" },
    solution: "Religious: it is about beliefs and the Church.",
    hint: "Political, economic, social, religious, military or individual?",
  },
  {
    prompt: "Category of cause: by 1789 the French government was nearly bankrupt after costly wars.",
    answer: { type: "text", accept: ["economic", "financial"], display: "Economic" },
    solution: "Economic: a money crisis.",
    hint: "Political, economic, social, religious, military or individual?",
  },
  {
    prompt: "Category of cause: Hitler's powerful speeches and personal appeal won over many voters.",
    answer: { type: "text", accept: ["individual", "individuals", "the individual", "role of the individual"], display: "Individual" },
    solution: "Individual: the role of one person's actions and character.",
    hint: "Political, economic, social, religious, military or individual?",
  },
  {
    prompt: "Category of cause: at Hastings the Normans had cavalry and archers, while the English fought on foot.",
    answer: { type: "text", accept: ["military"], display: "Military" },
    solution: "Military: armies, weapons and tactics.",
    hint: "Political, economic, social, religious, military or individual?",
  },
  {
    prompt: "Category of cause: the Reichstag Fire Decree of February 1933 suspended Germans' civil rights.",
    answer: { type: "text", accept: ["political"], display: "Political" },
    solution: "Political: laws, government and power.",
    hint: "Political, economic, social, religious, military or individual?",
    traps: [{ spec: { type: "text", accept: ["Enabling Act"] }, feedback: "Careful — that's a different law (March 1933). And the question asks for a category: political." }],
    tier: 2,
  },
  {
    prompt: "Category of cause: during the First World War, women's work in factories changed many people's attitudes towards women.",
    answer: { type: "text", accept: ["social"], display: "Social" },
    solution: "Social: how people lived and what they believed about each other.",
    hint: "Political, economic, social, religious, military or individual?",
    tier: 2,
  },
  {
    prompt: "Long-term cause or trigger? The assassination of Archduke Franz Ferdinand in June 1914, as a cause of the First World War.",
    answer: { type: "text", accept: ["trigger", "the trigger"], display: "Trigger" },
    solution: "Trigger: it set off a crisis built on years of rivalry and alliances.",
    traps: [{ spec: { type: "text", accept: ["long-term", "long term"] }, feedback: "It happened just weeks before the war began — it was the spark." }],
    tier: 2,
  },
  {
    prompt: "Long-term cause or trigger? Edward the Confessor having no children during his 24-year reign, as a cause of the 1066 crisis.",
    answer: { type: "text", accept: ["long-term", "long term", "long-term cause"], display: "Long-term" },
    solution: "Long-term: the problem existed for years. His death on 5 January 1066 was the trigger.",
    traps: [{ spec: { type: "text", accept: ["trigger"] }, feedback: "The childlessness built up over years. His DEATH was the trigger." }],
    tier: 2,
  },
  {
    prompt: "A result that nobody planned or wanted is an ___ consequence.",
    answer: { type: "text", accept: ["unintended", "unintentional", "unplanned"], display: "Unintended" },
    solution: "Unintended: e.g. the Treaty of Versailles was meant to weaken Germany but created resentment that extremists exploited.",
    tier: 2,
  },
  {
    prompt: "Asking “What would have happened if…?” to test how important a cause was is called a ___ argument.",
    answer: { type: "text", accept: ["counterfactual"], display: "Counterfactual" },
    solution: "Counterfactual: if removing a cause changes everything, it was probably very important.",
    tier: 3,
  },
  {
    prompt: "When historians show how one cause made another worse, they are ___ the causes. (one word)",
    answer: { type: "text", accept: ["linking", "connecting", "link"], display: "Linking" },
    solution: "Linking: e.g. the Depression (economic) made Hitler's promises (individual) more attractive.",
    tier: 2,
  },
  {
    prompt: "An explanation that blames just one single cause is called…? (starts with mono-)",
    answer: { type: "text", accept: ["monocausal", "mono-causal"], display: "Monocausal" },
    solution: "Monocausal: historians usually show several causes working together.",
    tier: 3,
  },
  {
    prompt: "Category of cause: the Pope's support for William, shown by a papal banner, as a reason the Normans felt God was on their side in 1066.",
    answer: { type: "text", accept: ["religious", "religion"], display: "Religious" },
    solution: "Religious: belief in God's approval mattered to medieval soldiers.",
    hint: "Political, economic, social, religious, military or individual?",
    tier: 3,
  },
];

const cc = (prompt: string, change: boolean, solution: string, tier: 1 | 2 | 3 = 1): BankItem => ({
  prompt: `Change or continuity? ${prompt}`,
  answer: change ? { type: "text", accept: ["change"], display: "Change" } : { type: "text", accept: ["continuity"], display: "Continuity" },
  solution,
  hint: "Did things become different, or stay the same?",
  traps: [{ spec: { type: "text", accept: [change ? "continuity" : "change"] }, feedback: change ? "Something became different here — that's change." : "Something stayed the same here — that's continuity." }],
  tier,
});

const SIGNIFICANCE_CHANGE: BankItem[] = [
  {
    prompt: "In PEEL paragraphs, what does the P stand for?",
    answer: { type: "text", accept: ["point"], display: "Point" },
    solution: "Point, Evidence, Explain, Link.",
  },
  {
    prompt: "In PEEL paragraphs, what does the L stand for?",
    answer: { type: "text", accept: ["link"], display: "Link" },
    solution: "Link: tie your paragraph back to the question (or to the next factor).",
  },
  {
    prompt: "In PEEL, the first E stands for Evidence. What does the second E stand for?",
    answer: { type: "text", accept: ["explain", "explanation"], display: "Explain" },
    solution: "Explain: say HOW your evidence proves your point.",
  },
  cc("After 1066, most English peasants still farmed the land in much the same way.", false, "Continuity: daily life on the land carried on."),
  cc("After 1066, almost all the English earls were replaced by Norman lords.", true, "Change: a new ruling class took over."),
  cc("In 1918, some women over 30 were allowed to vote in British elections for the first time.", true, "Change: a new group joined the electorate."),
  cc("Kings before and after Magna Carta still believed they were chosen by God.", false, "Continuity: Magna Carta limited the king but didn't end that belief.", 2),
  cc("After Henry VIII's break with Rome, the monarch, not the Pope, was head of the Church in England.", true, "Change: authority over the Church moved to the king.", 2),
  {
    prompt: "A moment when the direction of history changes sharply is called a…?",
    answer: { type: "text", accept: ["turning point", "a turning point", "turningpoint"], display: "Turning point" },
    solution: "A turning point: things go a different way afterwards.",
  },
  {
    prompt: "In Counsell's “5 Rs” of significance, an event that tells us a lot about life or ideas at the time is…?",
    answer: { type: "text", accept: ["revealing"], display: "Revealing" },
    solution: "Revealing: it shows us something important about the past.",
    hint: "Remarkable, Remembered, Resonant, Resulting in change, Revealing.",
    tier: 2,
  },
  {
    prompt: "In the 5 Rs of significance, an event that was noticed and talked about by people at the time and since is…?",
    answer: { type: "text", accept: ["remarkable"], display: "Remarkable" },
    solution: "Remarkable: it was ‘remarked upon’.",
    hint: "Remarkable, Remembered, Resonant, Resulting in change, Revealing.",
    traps: [{ spec: { type: "text", accept: ["remembered"] }, feedback: "Remembered is about collective memory and commemoration; noticed and talked about is Remarkable." }],
    tier: 2,
  },
  {
    prompt: "In the 5 Rs, an event that people today connect with their own experiences or issues (for example, comparing modern protests with the suffragettes) is…?",
    answer: { type: "text", accept: ["resonant"], display: "Resonant" },
    solution: "Resonant: it ‘echoes’ across time.",
    hint: "Remarkable, Remembered, Resonant, Resulting in change, Revealing.",
    tier: 3,
  },
  {
    prompt: "In the 5 Rs, an event that had big consequences for the future scores on which R? (three words)",
    answer: { type: "text", accept: ["resulting in change", "resulted in change"], display: "Resulting in change" },
    solution: "Resulting in change: it had consequences, ideally deep and long-lasting ones.",
    hint: "Remarkable, Remembered, Resonant, Resulting in change, Revealing.",
    tier: 2,
  },
  {
    prompt: "When historians ask how FAST things changed, they are judging the ___ of change.",
    answer: { type: "text", accept: ["rate", "speed", "pace"], display: "Rate" },
    solution: "Rate: quick or gradual? (Extent asks how MUCH changed.)",
    traps: [{ spec: { type: "text", accept: ["extent"] }, feedback: "Extent is how much changed. How fast is the rate." }],
    tier: 3,
  },
  {
    prompt: "When historians ask how MUCH things changed, they are judging the ___ of change.",
    answer: { type: "text", accept: ["extent", "scale"], display: "Extent" },
    solution: "Extent: a little, a lot, or completely?",
    traps: [{ spec: { type: "text", accept: ["rate", "speed"] }, feedback: "Rate is how fast. How much is the extent." }],
    tier: 3,
  },
  {
    prompt: "A judgement that is backed up with specific evidence is called a ___ judgement. (starts with s)",
    answer: { type: "text", accept: ["substantiated", "supported"], display: "Substantiated" },
    solution: "Substantiated: your verdict is supported by evidence and reasons.",
    tier: 3,
  },
  {
    prompt: "A change that makes things worse (going backwards) is sometimes called…? (starts with r)",
    answer: { type: "text", accept: ["regression", "regress"], display: "Regression" },
    solution: "Regression: the opposite of progress. Change isn't always for the better.",
    tier: 3,
  },
];

export const drills: Drill[] = [
  {
    id: `${T}.key-dates`,
    topicId: T,
    title: "Key dates across the course",
    level: 1,
    guideRef: "chronology-and-periods",
    generate: yearOf(EVENTS),
  },
  {
    id: `${T}.centuries`,
    topicId: T,
    title: "Centuries, BC/AD and time gaps",
    level: 1,
    guideRef: "chronology-and-periods",
    generate: centuries,
  },
  {
    id: `${T}.primary-or-secondary`,
    topicId: T,
    title: "Primary or secondary?",
    level: 1,
    guideRef: "sources-and-evidence",
    generate: fromBank(PRIMARY_SECONDARY),
  },
  {
    id: `${T}.which-first`,
    topicId: T,
    title: "Which came first?",
    level: 2,
    guideRef: "chronology-and-periods",
    generate: whichFirst(EVENTS),
  },
  {
    id: `${T}.nop-and-utility`,
    topicId: T,
    title: "NOP, useful and reliable",
    level: 2,
    guideRef: "utility-and-reliability",
    generate: fromBank(NOP_UTILITY),
  },
  {
    id: `${T}.causes`,
    topicId: T,
    title: "Types of cause",
    level: 2,
    guideRef: "causation-and-consequence",
    generate: fromBank(CAUSES),
  },
  {
    id: `${T}.interpretations`,
    topicId: T,
    title: "Interpretation or source?",
    level: 3,
    guideRef: "interpretations",
    generate: fromBank(INTERPRETATIONS),
  },
  {
    id: `${T}.significance-and-change`,
    topicId: T,
    title: "Significance, change and PEEL",
    level: 3,
    guideRef: "significance-and-change",
    generate: fromBank(SIGNIFICANCE_CHANGE),
  },
];
