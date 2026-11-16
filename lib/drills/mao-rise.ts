// Skill drills for "Mao Zedong and the Communist Victory in China".
// Bank-based: each drill picks a verified fact and a wording with the seeded RNG.
// Facts are kept consistent with lib/topics/mao-rise/guide.ts.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";

type Tier = 1 | 2 | 3;

const TOPIC = "mao-rise";

function txt(accept: string[], display?: string): AnswerSpec {
  return { type: "text", accept, display: display ?? accept[0] };
}
function yr(value: number): AnswerSpec {
  return { type: "number", value };
}
function trapText(accept: string[], feedback: string): Trap {
  return { spec: { type: "text", accept }, feedback };
}
function trapNum(value: number, feedback: string): Trap {
  return { spec: { type: "number", value }, feedback };
}

/** Pick from the items available at this tier, leaning towards the tier's own items. */
function pickTiered<X extends { tier: Tier }>(rng: Rng, items: readonly X[], tier: Tier): X {
  const pool = items.filter((i) => i.tier <= tier);
  const own = pool.filter((i) => i.tier === tier);
  return tier > 1 && own.length > 0 && rng.bool(0.5) ? rng.pick(own) : rng.pick(pool);
}

// ---------------------------------------------------------------------------
// Shared answer lists (alternative romanisations accepted)
// ---------------------------------------------------------------------------
const MAO = ["Mao Zedong", "Mao Tse-tung", "Mao Tse tung", "Mao Tsetung", "Mao Ze Dong", "Mao", "Chairman Mao"];
const CHIANG = ["Chiang Kai-shek", "Chiang Kai shek", "Chiang Kaishek", "Chiang", "Jiang Jieshi", "Jiang Zhongzheng", "Generalissimo Chiang"];
const SUN = ["Sun Yat-sen", "Sun Yatsen", "Sun Yat sen", "Sun Zhongshan", "Sun Yixian", "Dr Sun Yat-sen", "Sun"];
const ZHOU = ["Zhou Enlai", "Zhou En-lai", "Chou En-lai", "Chou Enlai", "Zhou"];
const PUYI = ["Puyi", "Pu Yi", "Pu-yi", "Emperor Puyi", "Henry Puyi", "Xuantong Emperor"];
const GMD = ["GMD", "Guomindang", "Kuomintang", "KMT", "Nationalists", "Nationalist", "Nationalist Party", "Chinese Nationalist Party"];
const CCP = ["CCP", "Communists", "Communist", "Chinese Communist Party", "Communist Party", "CPC", "Communist Party of China"];

// ---------------------------------------------------------------------------
// Generic bank question
// ---------------------------------------------------------------------------
interface BankQ {
  tier: Tier;
  /** Alternative wordings of the same question. */
  qs: string[];
  answer: AnswerSpec;
  solution: string[];
  hint: string;
  traps?: Trap[];
}

function fromBank(rng: Rng, bank: readonly BankQ[], tier: Tier): DrillItem {
  const q = pickTiered(rng, bank, tier);
  return { prompt: rng.pick(q.qs), answer: q.answer, solution: q.solution, hint: q.hint, traps: q.traps };
}

// ---------------------------------------------------------------------------
// 1. Key terms: China in crisis and the rival parties
// ---------------------------------------------------------------------------
interface TermItem {
  tier: Tier;
  defs: string[];
  accept: string[];
  display?: string;
  solution: string;
  hint: string;
  traps?: Trap[];
}

const CRISIS_TERMS: TermItem[] = [
  {
    tier: 1,
    defs: [
      "a regional general with a private army who controlled territory, taxed peasants heavily and fought rivals, especially in 1916–28",
      "the name for the military strongmen who held real power in China after Yuan Shikai died in 1916",
    ],
    accept: ["warlord", "warlords", "a warlord", "warlordism"],
    solution: "A **warlord** was a regional general with a private army. From 1916 to 1928 warlords held real power and the government in Beijing was weak.",
    hint: "Think of a 'lord' whose power came from war and his own army.",
  },
  {
    tier: 1,
    defs: [
      "agreements forced on China from the 1840s, after the Opium Wars, that gave foreign powers ports, territory and legal privileges",
      "the name Chinese nationalists gave to the one-sided treaties signed with Britain, France, Japan and others in the 1800s",
    ],
    accept: ["unequal treaties", "unequal treaty", "the unequal treaties"],
    solution: "The **unequal treaties** gave foreign powers treaty ports, territory such as Hong Kong and special legal rights — a deep source of national humiliation.",
    hint: "They were treaties — and they were not fair to China.",
  },
  {
    tier: 1,
    defs: [
      "the protests that began in Beijing on 4 May 1919 against the Treaty of Versailles giving Germany's rights in Shandong to Japan",
      "the 1919 student-led movement against foreign bullying that helped spread new ideas, including communism",
    ],
    accept: ["May Fourth Movement", "May Fourth", "May 4th Movement", "May 4th", "May Fourth protests"],
    solution: "The **May Fourth Movement** (4 May 1919) began as a protest against Versailles and spread nationalist and communist ideas among young Chinese.",
    hint: "It is named after the date the protests started.",
  },
  {
    tier: 1,
    defs: [
      "the Soviet-backed alliance of the GMD and CCP against the warlords, 1924–27",
      "the alliance in which communists joined the Guomindang as individual members from 1924, until the Shanghai Massacre of 1927",
    ],
    accept: ["First United Front", "United Front", "1st United Front", "the First United Front"],
    display: "First United Front",
    solution: "The **First United Front** (1924–27) joined the GMD and CCP against the warlords. It collapsed when Chiang attacked the communists in April 1927.",
    hint: "Two parties presenting one 'front' — and it was the first time.",
    traps: [trapText(["Second United Front", "2nd United Front"], "The Second United Front was the truce against Japan from 1937. This one came first, in 1924–27.")],
  },
  {
    tier: 1,
    defs: [
      "China's last imperial dynasty, which had ruled since 1644 and fell in 1911–12",
      "the dynasty whose last emperor, Puyi, abdicated in February 1912",
    ],
    accept: ["Qing", "Qing dynasty", "Ching", "Ch'ing", "Ching dynasty", "Manchu dynasty", "Manchu"],
    display: "the Qing dynasty",
    solution: "The **Qing dynasty** ruled China from 1644 until the revolution of 1911–12, ending more than 2,000 years of emperors.",
    hint: "Its name begins with Q.",
  },
  {
    tier: 2,
    defs: [
      "a Chinese port opened to foreign trade by treaty, where foreigners lived under their own laws",
      "the name for places such as Shanghai's foreign settlements, opened to foreign merchants under the unequal treaties",
    ],
    accept: ["treaty port", "treaty ports", "a treaty port"],
    solution: "A **treaty port** was opened to foreigners by an unequal treaty; foreigners there were tried under their own countries' laws, not China's.",
    hint: "The port was opened by a treaty.",
  },
  {
    tier: 2,
    defs: [
      "an area of China where one foreign power claimed special economic rights, such as building railways and mines",
      "the zones into which foreign powers carved China around 1900 — 'carved up like a melon'",
    ],
    accept: ["spheres of influence", "sphere of influence", "a sphere of influence"],
    solution: "**Spheres of influence** were areas where one foreign power had special rights — for example Germany in Shandong before 1914.",
    hint: "An area where a foreign power had 'influence'.",
  },
  {
    tier: 2,
    defs: [
      "Sun Yat-sen's ideas for China: nationalism, democracy and people's livelihood",
      "the three-part programme of the Guomindang set out by its founder",
    ],
    accept: ["Three Principles of the People", "Three Principles", "the Three Principles", "Three People's Principles", "Sanmin Zhuyi"],
    display: "the Three Principles of the People",
    solution: "Sun Yat-sen's **Three Principles of the People** were nationalism, democracy and people's livelihood.",
    hint: "There were three of them, and they were 'of the People'.",
  },
  {
    tier: 2,
    defs: [
      "Chiang Kai-shek's military campaign, launched in 1926, to defeat the warlords and reunite China",
      "the GMD march north from Guangdong in 1926–28, helped by communist organisers stirring up peasants and workers",
    ],
    accept: ["Northern Expedition", "the Northern Expedition"],
    display: "the Northern Expedition",
    solution: "The **Northern Expedition** (from 1926) was the GMD–CCP campaign to defeat the warlords; its success helped break the alliance.",
    hint: "The army set off from the south and headed in one direction.",
  },
  {
    tier: 2,
    defs: [
      "the attack of 12 April 1927 in which GMD troops and gangsters killed communists and trade unionists",
      "the 1927 event that ended the First United Front and drove surviving communists into the countryside",
    ],
    accept: ["Shanghai Massacre", "Shanghai purge", "April 12 Incident", "12 April Incident", "White Terror", "Shanghai Massacre of 1927"],
    display: "the Shanghai Massacre",
    solution: "In the **Shanghai Massacre** (12 April 1927) Chiang turned on his communist allies; a 'White Terror' then spread to other cities.",
    hint: "It is named after the city where it began.",
  },
  {
    tier: 2,
    defs: [
      "the event of December 1936 when Chiang Kai-shek was held captive by one of his own generals until he agreed to work with the CCP against Japan",
      "the kidnapping of Chiang in 1936 that led to the Second United Front",
    ],
    accept: ["Xi'an Incident", "Xian Incident", "Sian Incident", "Xi'an"],
    display: "the Xi'an Incident",
    solution: "In the **Xi'an Incident** (December 1936) Chiang was held captive until he agreed to cooperate with the communists against Japan.",
    hint: "It is named after the city where Chiang was held.",
  },
  {
    tier: 2,
    defs: [
      "the GMD–CCP truce against Japan formed in 1937",
      "the wartime alliance from 1937 which broke down in practice after the GMD attacked the communist New Fourth Army in 1941",
    ],
    accept: ["Second United Front", "2nd United Front", "United Front", "the Second United Front"],
    display: "the Second United Front",
    solution: "The **Second United Front** (from 1937) was an uneasy truce against Japan; it never meant real trust.",
    hint: "The parties had been allies once before, in 1924–27.",
    traps: [trapText(["First United Front", "1st United Front"], "The First United Front was 1924–27, against the warlords. This one was against Japan, from 1937.")],
  },
  {
    tier: 3,
    defs: [
      "the Soviet-led Communist International that helped found the CCP and sent advisers to the GMD",
      "the organisation, run from Moscow, whose agents told Chinese communists to join the Guomindang in the 1920s",
    ],
    accept: ["Comintern", "Communist International", "Third International", "the Comintern"],
    display: "the Comintern",
    solution: "The **Comintern** (Communist International) was run from Moscow; it helped found the CCP in 1921 and backed the First United Front.",
    hint: "A short form of 'Communist International'.",
  },
  {
    tier: 3,
    defs: [
      "the academy near Guangzhou where the GMD trained a new army under Chiang Kai-shek from 1924",
    ],
    accept: ["Whampoa Military Academy", "Whampoa", "Huangpu Military Academy", "Huangpu", "Whampoa Academy"],
    display: "Whampoa Military Academy",
    solution: "At the **Whampoa Military Academy**, set up with Soviet help, Chiang trained the officers of the GMD's new army.",
    hint: "It begins with W (or H in pinyin).",
  },
  {
    tier: 3,
    defs: [
      "the wars of 1839–42 and 1856–60 after which Britain and others forced unequal treaties on China",
    ],
    accept: ["Opium Wars", "Opium War", "the Opium Wars"],
    display: "the Opium Wars",
    solution: "After the **Opium Wars** China signed unequal treaties, handing Hong Kong to Britain and opening treaty ports.",
    hint: "They were fought over a drug that British merchants sold in China.",
  },
  {
    tier: 3,
    defs: [
      "the Chinese province whose German-held rights the Treaty of Versailles handed to Japan in 1919",
    ],
    accept: ["Shandong", "Shantung", "Shandong province"],
    display: "Shandong",
    solution: "Versailles gave Germany's rights in **Shandong** to Japan, sparking the May Fourth protests of 1919.",
    hint: "The German base of Qingdao was in this coastal province.",
  },
  {
    tier: 3,
    defs: [
      "the first of Sun Yat-sen's Three Principles: ending foreign domination and uniting China",
    ],
    accept: ["nationalism", "Chinese nationalism"],
    display: "nationalism",
    solution: "Sun's first principle was **nationalism**; the others were democracy and people's livelihood.",
    hint: "It gave the GMD its English name.",
    traps: [trapText(["democracy"], "Democracy was the second principle. The first was about the nation.")],
  },
  {
    tier: 3,
    defs: [
      "the third of Sun Yat-sen's Three Principles: a fairer economy and land for farmers",
    ],
    accept: ["people's livelihood", "livelihood", "the people's livelihood", "livelihood of the people"],
    display: "people's livelihood",
    solution: "Sun's third principle was **people's livelihood** — a fairer economy and land for farmers. The GMD did little to carry it out for the peasants.",
    hint: "Think of 'a full rice bowl'.",
  },
];

function termDrillItem(rng: Rng, items: readonly TermItem[], tier: Tier): DrillItem {
  const t = pickTiered(rng, items, tier);
  const def = rng.pick(t.defs);
  const form = rng.int(0, 2);
  const cap = def.charAt(0).toUpperCase() + def.slice(1);
  const prompt =
    form === 0
      ? `Which key term means: ${def}?`
      : form === 1
        ? `Name the key term from its definition: ${def}.`
        : `Key term check. ${cap}. What is it called?`;
  return { prompt, answer: txt(t.accept, t.display), solution: [t.solution], hint: t.hint, traps: t.traps };
}

// ---------------------------------------------------------------------------
// 2. Key terms: Mao's ideas and methods
// ---------------------------------------------------------------------------
const MAO_TERMS: TermItem[] = [
  {
    tier: 1,
    defs: [
      "fighting in small, mobile units that avoid big battles and wear a stronger enemy down",
      "the style of war summed up as 'The enemy advances, we retreat; the enemy camps, we harass; the enemy tires, we attack; the enemy retreats, we pursue'",
    ],
    accept: ["guerrilla warfare", "guerrilla war", "guerrilla tactics", "guerrilla", "guerrillas", "guerilla warfare", "guerilla war", "guerilla tactics", "guerilla", "guerillas"],
    display: "guerrilla warfare",
    solution: "**Guerrilla warfare** let the weak Red Army survive: avoid the enemy's strength, strike where it is weak, and rely on villagers for food and information.",
    hint: "From the Spanish for 'little war'.",
  },
  {
    tier: 1,
    defs: [
      "the communist-run area of 1931–34, based at Ruijin, with Mao as its chairman",
      "the 'Chinese Soviet Republic' that the communists declared in 1931 in a southern province",
    ],
    accept: ["Jiangxi Soviet", "Kiangsi Soviet", "Chinese Soviet Republic", "Jiangxi", "Jiangxi Soviet Republic"],
    display: "the Jiangxi Soviet",
    solution: "The **Jiangxi Soviet** (1931–34) carried out land reform; Chiang's encirclement campaigns forced the communists out of it in October 1934.",
    hint: "It is named after its province.",
  },
  {
    tier: 1,
    defs: [
      "the Red Army's retreat from October 1934 to October 1935, in which about 86,000 set out and roughly 8,000 reached northern Shaanxi",
      "the year-long escape from Jiangxi that communist propaganda turned into a heroic legend",
    ],
    accept: ["Long March", "the Long March"],
    display: "the Long March",
    solution: "The **Long March** was a military disaster but a propaganda triumph — and Mao rose to the leadership during it.",
    hint: "It was a march — and a very long one.",
  },
  {
    tier: 1,
    defs: [
      "taking land from landlords and sharing it out among poor peasants",
      "the communist policy in Jiangxi and later Yan'an that won the support of poor farmers by redistributing land",
    ],
    accept: ["land reform", "land redistribution", "redistribution of land", "land reforms"],
    display: "land reform",
    solution: "**Land reform** won poor peasants' support for the communists — though in practice it was often violent towards landlords.",
    hint: "It changed who owned the fields.",
  },
  {
    tier: 1,
    defs: [
      "the group Mao believed would lead China's revolution, rather than city factory workers",
      "the farmers who made up around 80–90% of China's people",
    ],
    accept: ["peasants", "the peasants", "peasantry", "peasant", "farmers", "the peasantry", "poor peasants"],
    display: "the peasants",
    solution: "Mao argued that the **peasants** — the vast majority of Chinese people — not city workers, would be China's revolutionary force.",
    hint: "Most Chinese people lived and worked on the land.",
    traps: [trapText(["workers", "factory workers", "proletariat", "industrial workers"], "That was Marx's and the Soviet view. Mao broke with it — city workers were well under 1% of China's people.")],
  },
  {
    tier: 2,
    defs: [
      "the Red Army's code of behaviour towards civilians, such as 'speak politely' and 'pay fairly for what you buy'",
      "rules for Red Army soldiers that set them apart from looting warlord troops — for example 'return what you borrow' and 'do not damage crops'",
    ],
    accept: ["Eight Points for Attention", "Eight Points of Attention", "Eight Points", "Three Main Rules of Discipline and Eight Points for Attention", "Three Main Rules of Discipline"],
    display: "the Eight Points for Attention",
    solution: "The **Three Main Rules of Discipline and Eight Points for Attention** helped the Red Army win villagers' trust, though the rules were not always kept.",
    hint: "There were three main rules and eight 'points for…'",
  },
  {
    tier: 2,
    defs: [
      "the meeting of January 1935, during the Long March, at which Mao returned to the military leadership",
      "the 1935 conference in Guizhou where party leaders blamed Bo Gu and Otto Braun for the defeats",
    ],
    accept: ["Zunyi Conference", "Zunyi", "Tsunyi Conference", "Tsunyi"],
    display: "the Zunyi Conference",
    solution: "At the **Zunyi Conference** (January 1935) Mao returned to the top military leadership — usually seen as the turning point in his rise.",
    hint: "It is named after a town in Guizhou.",
  },
  {
    tier: 2,
    defs: [
      "the remote town in Shaanxi that was the CCP's headquarters from 1937 to 1947",
    ],
    accept: ["Yan'an", "Yanan", "Yenan", "Yan an"],
    display: "Yan'an",
    solution: "**Yan'an** in Shaanxi was the communists' base from 1937; there they grew in strength during the war with Japan.",
    hint: "It begins with Y.",
  },
  {
    tier: 2,
    defs: [
      "Chiang Kai-shek's five military campaigns (1930–34) to surround and destroy the Jiangxi Soviet",
    ],
    accept: ["encirclement campaigns", "encirclement campaign", "encirclement", "encirclement and suppression campaigns", "Encirclement Campaigns"],
    display: "encirclement campaigns",
    solution: "Chiang's **encirclement campaigns** ended with the fifth (1933–34), when rings of blockhouses slowly strangled the Jiangxi Soviet.",
    hint: "The aim was to put a ring around the enemy.",
  },
  {
    tier: 2,
    defs: [
      "the communists' army, built by Mao and Zhu De in the countryside from 1927–28",
    ],
    accept: ["Red Army", "the Red Army", "Chinese Red Army", "Workers' and Peasants' Red Army"],
    display: "the Red Army",
    solution: "The **Red Army** was too weak for big battles, so it relied on guerrilla tactics and the support of villagers.",
    hint: "It is named after the colour of communism.",
  },
  {
    tier: 2,
    defs: [
      "Mao's failed rising in Hunan in September 1927, after which he retreated to the Jinggang Mountains",
    ],
    accept: ["Autumn Harvest Uprising", "Autumn Harvest Rising", "Autumn Harvest Revolt", "Autumn Harvest"],
    display: "the Autumn Harvest Uprising",
    solution: "After the **Autumn Harvest Uprising** failed in September 1927, Mao retreated with about 1,000 followers to the Jinggang Mountains.",
    hint: "It is named after the season and what farmers were doing.",
  },
  {
    tier: 3,
    defs: [
      "the mountain base on the Hunan–Jiangxi border where Mao retreated in 1927 and Zhu De joined him in 1928",
    ],
    accept: ["Jinggang Mountains", "Jinggangshan", "Jinggang", "Chingkangshan", "Jinggang Shan"],
    display: "the Jinggang Mountains",
    solution: "In the **Jinggang Mountains** Mao and Zhu De built the Red Army and developed guerrilla tactics.",
    hint: "It begins with J — and it is not Jiangxi itself.",
  },
  {
    tier: 3,
    defs: [
      "Mao's campaign in Yan'an (1942–44) that forced party critics to confess their 'errors' and tightened his control",
    ],
    accept: ["Rectification Movement", "Rectification Campaign", "Rectification", "Zhengfeng", "Yan'an Rectification Movement"],
    display: "the Rectification Movement",
    solution: "The **Rectification Movement** (1942–44) built Mao's control over the party — an early step towards his personality cult.",
    hint: "To 'rectify' means to put right.",
  },
  {
    tier: 3,
    defs: [
      "the purges of 1930 and after, in which thousands of Red Army soldiers and party members accused of being traitors were killed",
    ],
    accept: ["Futian Incident", "Futian", "the Futian Incident"],
    display: "the Futian Incident",
    solution: "The **Futian Incident** (1930) and the purges that followed show that the Jiangxi Soviet was violent as well as reforming.",
    hint: "It is named after a place in Jiangxi beginning with F.",
  },
  {
    tier: 3,
    defs: [
      "the town in Jiangxi that was the capital of the Chinese Soviet Republic and the start of the Long March",
    ],
    accept: ["Ruijin", "Juichin", "Ruijin, Jiangxi"],
    display: "Ruijin",
    solution: "**Ruijin** was the capital of the Jiangxi Soviet; the breakout began from this area in October 1934.",
    hint: "It begins with R.",
  },
];

// Guerrilla formula and Mao's sayings — completions
const MAO_SAYINGS: BankQ[] = [
  { tier: 1, qs: ["Complete Mao's guerrilla formula: 'The enemy advances, we ___.'", "Guerrilla rule: when the enemy advances, what does the Red Army do?"], answer: txt(["retreat", "we retreat", "retreats"], "retreat"), solution: ["'The enemy advances, **we retreat**' — a weak army avoids the enemy's strength."], hint: "Do the opposite of advancing.", traps: [trapText(["attack", "we attack"], "Attacking an advancing, stronger army is what Mao avoided. That comes when the enemy tires.")] },
  { tier: 1, qs: ["Complete Mao's guerrilla formula: 'The enemy tires, we ___.'", "Guerrilla rule: when the enemy tires, what does the Red Army do?"], answer: txt(["attack", "we attack", "attacks"], "attack"), solution: ["'The enemy tires, **we attack**' — strike when the enemy is weakest."], hint: "Now is the moment to strike.", traps: [trapText(["retreat", "we retreat"], "Retreat is the answer to an advancing enemy. A tired enemy is a target.")] },
  { tier: 2, qs: ["Complete Mao's guerrilla formula: 'The enemy camps, we ___.'", "Guerrilla rule: when the enemy camps, what does the Red Army do?"], answer: txt(["harass", "we harass", "harasses"], "harass"), solution: ["'The enemy camps, **we harass**' — small raids stop the enemy resting."], hint: "Annoy and disturb them, without a big battle." },
  { tier: 2, qs: ["Complete Mao's guerrilla formula: 'The enemy retreats, we ___.'", "Guerrilla rule: when the enemy retreats, what does the Red Army do?"], answer: txt(["pursue", "we pursue", "chase", "follow", "pursues"], "pursue"), solution: ["'The enemy retreats, **we pursue**' — keep up the pressure on a retreating enemy."], hint: "Go after them." },
  { tier: 2, qs: ["Mao compared guerrillas to fish. What did he compare the people to?", "Finish Mao's comparison: guerrillas are like fish, and the people are like the ___ they swim in."], answer: txt(["water", "the water", "the sea", "sea"], "water"), solution: ["The people were the **water**: without villagers' food, shelter and information, the guerrillas could not survive."], hint: "Fish cannot live without it." },
  { tier: 3, qs: ["Complete Mao's 1927 saying: 'Political power grows out of the barrel of a ___.'"], answer: txt(["gun", "a gun", "rifle"], "gun"), solution: ["'Political power grows out of the barrel of a **gun**' — Mao believed the communists needed their own army to win."], hint: "Mao meant that armed force decides who rules." },
  { tier: 3, qs: ["Mao's 1927 report studied the peasant movement in which province — his home province?", "Mao's famous 1927 report was an investigation of the peasant movement in which Chinese province?"], answer: txt(["Hunan", "Hunan province"], "Hunan"), solution: ["Mao's *Report on an Investigation of the Peasant Movement in **Hunan*** (1927) argued that peasants would 'rise like a mighty storm'."], hint: "Mao was born in Shaoshan, in this province." },
];

// ---------------------------------------------------------------------------
// 3. Who's who
// ---------------------------------------------------------------------------
interface Person {
  tier: Tier;
  accept: string[];
  display: string;
  descs: string[];
  fact: string;
  traps?: Trap[];
}

const PEOPLE: Person[] = [
  {
    tier: 1,
    accept: SUN,
    display: "Sun Yat-sen",
    descs: [
      "This doctor, trained in Hong Kong, raised money among overseas Chinese — including in Singapore — for revolution against the Qing.",
      "His followers founded the Guomindang in 1912, and his ideas were called the Three Principles of the People.",
      "He became provisional president of the Republic of China when it was declared on 1 January 1912.",
      "This founder of the GMD died in 1925, opening the way for a new leader to take over the party.",
    ],
    fact: "**Sun Yat-sen** (1866–1925) founded the GMD and is honoured as the 'father of the nation'.",
    traps: [trapText(CHIANG.slice(0, 5), "Chiang Kai-shek took over the GMD after Sun died in 1925 — he did not found it.")],
  },
  {
    tier: 1,
    accept: CHIANG,
    display: "Chiang Kai-shek",
    descs: [
      "He commanded the GMD army and launched the Northern Expedition against the warlords in 1926.",
      "His forces turned on their communist allies in the Shanghai Massacre of April 1927.",
      "This GMD leader retreated to Taiwan in 1949 after losing the Civil War.",
      "This leader's policy was to defeat the communists before resisting Japan.",
      "He was held captive by one of his own generals in the Xi'an Incident of December 1936.",
    ],
    fact: "**Chiang Kai-shek** led the GMD from the mid-1920s until his defeat in 1949.",
    traps: [trapText(SUN.slice(0, 5), "Sun Yat-sen founded the GMD but died in 1925. Who led it afterwards?")],
  },
  {
    tier: 1,
    accept: MAO,
    display: "Mao Zedong",
    descs: [
      "This son of a peasant farmer from Hunan trained as a teacher and worked in the Peking University library.",
      "He was chairman of the Jiangxi Soviet, the communist-run area of 1931–34.",
      "He returned to the military leadership of the communists at the Zunyi Conference in January 1935.",
      "He proclaimed the People's Republic of China in Beijing on 1 October 1949.",
      "In 1927 he wrote that 'several hundred million peasants will rise like a mighty storm'.",
    ],
    fact: "**Mao Zedong** (1893–1976) was a founding member of the CCP and ruled China from 1949 until his death.",
  },
  {
    tier: 1,
    accept: PUYI,
    display: "Puyi",
    descs: [
      "He was China's last emperor, and he abdicated in February 1912 at the age of six.",
      "The abdication of this boy emperor in 1912 ended more than 2,000 years of rule by emperors.",
    ],
    fact: "**Puyi**, the last Qing emperor, abdicated in February 1912; Japan later made him puppet ruler of Manchukuo in Manchuria.",
  },
  {
    tier: 2,
    accept: ZHOU,
    display: "Zhou Enlai",
    descs: [
      "This senior communist became Premier of the People's Republic of China in 1949 and held the post until his death in 1976.",
      "During the First United Front he worked in the political department of the Whampoa Military Academy, alongside Chiang's GMD officers.",
      "This communist leader went to Xi'an in December 1936 to negotiate with the captive Chiang Kai-shek.",
    ],
    fact: "**Zhou Enlai** was one of the CCP's most skilled negotiators and served as Premier from 1949 to 1976.",
    traps: [trapText(MAO.slice(0, 5), "Mao was Chairman, not Premier — and he did not go to Xi'an in 1936. Think of his chief negotiator.")],
  },
  {
    tier: 2,
    accept: ["Yuan Shikai", "Yuan Shih-kai", "Yuan Shi-kai", "Yuan Shih kai", "Yuan"],
    display: "Yuan Shikai",
    descs: [
      "This general became president of the new Republic in 1912 and then tried to make himself emperor.",
      "His death in 1916 left power in the hands of regional warlords.",
    ],
    fact: "**Yuan Shikai** took over the Republic from Sun Yat-sen; after his death in 1916 China fell into the warlord era.",
    traps: [trapText(PUYI.slice(0, 3), "Puyi was the last Qing emperor. This man tried to become a *new* emperor after 1912.")],
  },
  {
    tier: 2,
    accept: ["Zhu De", "Chu Teh", "Zhu"],
    display: "Zhu De",
    descs: [
      "This Red Army commander joined Mao in the Jinggang Mountains in 1928.",
      "With Mao, this commander developed the sixteen-character guerrilla formula.",
    ],
    fact: "**Zhu De** was the Red Army's commander; with Mao he built the guerrilla army in the Jinggang Mountains and Jiangxi.",
  },
  {
    tier: 2,
    accept: ["Edgar Snow", "Snow"],
    display: "Edgar Snow",
    descs: [
      "This American journalist interviewed Mao and wrote Red Star Over China (1937), which presented the communists as heroic patriots.",
    ],
    fact: "**Edgar Snow**'s *Red Star Over China* (1937) spread the Long March legend around the world.",
  },
  {
    tier: 2,
    accept: ["Peng Dehuai", "Peng Te-huai", "Peng Teh-huai", "Peng"],
    display: "Peng Dehuai",
    descs: [
      "This marshal was purged in 1959 after criticising the Great Leap Forward.",
    ],
    fact: "**Peng Dehuai** criticised the Great Leap Forward in 1959 and was purged — a sign that no one could safely contradict Mao.",
  },
  {
    tier: 3,
    accept: ["Otto Braun", "Braun", "Li De"],
    display: "Otto Braun",
    descs: [
      "This German adviser sent by the Comintern was blamed at the Zunyi Conference for fighting head-on battles.",
    ],
    fact: "**Otto Braun**, the Comintern's German agent, was blamed at Zunyi (January 1935) for the defeats in Jiangxi.",
  },
  {
    tier: 3,
    accept: ["Li Dazhao", "Li Ta-chao", "Li Tazhao"],
    display: "Li Dazhao",
    descs: [
      "As head librarian at Peking University, he introduced the young Mao to Marxism in 1918–19.",
    ],
    fact: "**Li Dazhao**, Peking University's head librarian, was one of China's first Marxists and a founder of the CCP.",
  },
  {
    tier: 3,
    accept: ["Chen Duxiu", "Chen Tu-hsiu", "Chen Tuxiu"],
    display: "Chen Duxiu",
    descs: [
      "This co-founder of the CCP was its leader until mid-1927, when he was blamed for the party's disasters that year.",
    ],
    fact: "**Chen Duxiu** led the CCP from 1921 until mid-1927.",
  },
  {
    tier: 3,
    accept: ["Zhang Xueliang", "Chang Hsueh-liang", "Young Marshal", "the Young Marshal", "Zhang"],
    display: "Zhang Xueliang",
    descs: [
      "Known as the 'Young Marshal', this general held Chiang Kai-shek captive in the Xi'an Incident of December 1936.",
    ],
    fact: "**Zhang Xueliang** held Chiang at Xi'an until he agreed to cooperate with the CCP against Japan.",
  },
  {
    tier: 3,
    accept: ["Bo Gu", "Po Ku", "Qin Bangxian"],
    display: "Bo Gu",
    descs: [
      "This young party leader was blamed, along with Otto Braun, for the defeats in Jiangxi at the Zunyi Conference in 1935.",
    ],
    fact: "**Bo Gu** lost his leading role at Zunyi, while Mao returned to the military leadership.",
  },
];

// ---------------------------------------------------------------------------
// 4. Key dates 1911–1949
// ---------------------------------------------------------------------------
interface DatedEvent {
  tier: Tier;
  year: number;
  /** "In which year …?" clause. */
  q: string;
  /** Short noun phrase. */
  label: string;
  fact: string;
  trap?: Trap;
}

const DATES: DatedEvent[] = [
  { tier: 1, year: 1911, q: "did the revolution that overthrew the Qing dynasty break out with an army mutiny at Wuchang", label: "the Wuchang Uprising begins the revolution against the Qing", fact: "In October 1911 a mutiny at Wuchang set off revolts across China's provinces." },
  { tier: 1, year: 1912, q: "was the Republic of China declared, with Sun Yat-sen as provisional president", label: "the Republic of China is declared", fact: "The Republic of China was declared on 1 January 1912; Puyi abdicated that February." },
  { tier: 1, year: 1919, q: "did the May Fourth Movement begin", label: "the May Fourth Movement", fact: "On 4 May 1919 students protested against the Treaty of Versailles giving Shandong to Japan." },
  { tier: 1, year: 1921, q: "was the Chinese Communist Party founded in Shanghai", label: "the CCP is founded in Shanghai", fact: "The CCP was founded in Shanghai in July 1921 with only about 50 members.", trap: trapNum(1949, "1949 is when the CCP took power. The party itself was founded much earlier.") },
  { tier: 1, year: 1927, q: "did the Shanghai Massacre end the First United Front", label: "the Shanghai Massacre", fact: "On 12 April 1927 Chiang's forces attacked the communists in Shanghai." },
  { tier: 1, year: 1934, q: "did the Long March begin", label: "the Long March begins", fact: "About 86,000 broke out of Jiangxi in October 1934.", trap: trapNum(1935, "1935 is when the march ended. It began the year before.") },
  { tier: 1, year: 1937, q: "did Japan launch its full-scale invasion of China", label: "Japan's full-scale invasion of China", fact: "Full-scale war began after fighting at the Marco Polo Bridge on 7 July 1937.", trap: trapNum(1931, "In 1931 Japan seized Manchuria. The full-scale invasion of China came six years later.") },
  { tier: 1, year: 1949, q: "did Mao proclaim the People's Republic of China", label: "the People's Republic of China is proclaimed", fact: "Mao proclaimed the People's Republic on 1 October 1949; Chiang retreated to Taiwan.", trap: trapNum(1921, "1921 is when the CCP was founded. When did it take power?") },
  { tier: 1, year: 1945, q: "did Japan surrender, ending the war in China", label: "Japan surrenders", fact: "Japan surrendered in August 1945; full civil war followed in 1946." },
  { tier: 2, year: 1916, q: "did Yuan Shikai die, opening the warlord era", label: "Yuan Shikai dies and the warlord era begins", fact: "After Yuan Shikai's death in 1916, warlords held real power until 1928." },
  { tier: 2, year: 1924, q: "was the First United Front formed", label: "the First United Front is formed", fact: "The Soviet-backed GMD–CCP alliance lasted from 1924 to 1927." },
  { tier: 2, year: 1925, q: "did Sun Yat-sen die", label: "Sun Yat-sen dies", fact: "Sun died in 1925, and Chiang Kai-shek rose to lead the GMD." },
  { tier: 2, year: 1926, q: "did Chiang Kai-shek launch the Northern Expedition", label: "the Northern Expedition begins", fact: "Chiang launched the Northern Expedition against the warlords in 1926." },
  { tier: 2, year: 1931, q: "did Japan seize Manchuria", label: "Japan seizes Manchuria", fact: "Japan seized Manchuria in September 1931 — the same year the Jiangxi Soviet was declared.", trap: trapNum(1937, "1937 is the full-scale invasion. Manchuria was seized earlier.") },
  { tier: 2, year: 1935, q: "was the Zunyi Conference held, bringing Mao back into the leadership", label: "the Zunyi Conference", fact: "The Zunyi Conference met in January 1935, during the Long March.", trap: trapNum(1934, "The Long March began in October 1934; Zunyi came a few months later.") },
  { tier: 2, year: 1946, q: "did full-scale civil war begin between the Nationalists and the Communists", label: "full-scale Civil War begins", fact: "American peace efforts failed and full civil war began in 1946; it ended with communist victory in 1949." },
  { tier: 3, year: 1936, q: "did the Xi'an Incident take place", label: "the Xi'an Incident", fact: "In December 1936 Chiang was held captive until he agreed to cooperate with the CCP against Japan." },
  { tier: 3, year: 1928, q: "did Zhu De join Mao in the Jinggang Mountains", label: "Zhu De joins Mao in the Jinggang Mountains", fact: "Zhu De joined Mao in 1928; together they built the Red Army." },
  { tier: 3, year: 1941, q: "did GMD forces attack the communist New Fourth Army, wrecking the Second United Front", label: "the GMD attacks the New Fourth Army", fact: "The attack in January 1941 showed that the Second United Front never meant real trust." },
  { tier: 3, year: 1948, q: "did the GMD launch a new currency that became almost worthless within months", label: "the GMD's new currency collapses", fact: "A new currency launched in August 1948 was almost worthless within months — hyperinflation wrecked GMD cities." },
  { tier: 3, year: 1940, q: "did the communists launch the Hundred Regiments Offensive against Japan", label: "the Hundred Regiments Offensive", fact: "The Hundred Regiments Offensive (1940) was one of the CCP's few big offensives; mostly it fought as guerrillas." },
  { tier: 3, year: 1933, q: "was Hitler appointed Chancellor of Germany (useful for comparing his legal route with Mao's)", label: "Hitler is appointed Chancellor of Germany", fact: "Hitler was appointed Chancellor in January 1933 — legally — whereas Mao won power through civil war in 1949." },
];

// ---------------------------------------------------------------------------
// 5. Event from a date
// ---------------------------------------------------------------------------
interface DateEvent {
  tier: Tier;
  date: string;
  prep: "on" | "in";
  clue: string;
  accept: string[];
  display: string;
  fact: string;
}

const DATE_EVENTS: DateEvent[] = [
  { tier: 1, date: "4 May 1919", prep: "on", clue: "students marched in Beijing against the Treaty of Versailles", accept: ["May Fourth Movement", "May Fourth", "May 4th Movement", "May Fourth protests", "May Fourth Incident", "student protests", "protests against Versailles"], display: "the May Fourth Movement began", fact: "The May Fourth Movement began on 4 May 1919, angry that Versailles gave Shandong to Japan." },
  { tier: 1, date: "1 October 1949", prep: "on", clue: "a ceremony at Tiananmen in Beijing", accept: ["People's Republic of China proclaimed", "People's Republic of China", "People's Republic proclaimed", "PRC proclaimed", "PRC", "founding of the PRC", "founding of the People's Republic of China", "Mao proclaimed the People's Republic of China", "Mao proclaimed the PRC", "PRC founded", "People's Republic of China founded"], display: "Mao proclaimed the People's Republic of China", fact: "On 1 October 1949 Mao proclaimed the People's Republic of China in Beijing." },
  { tier: 1, date: "12 April 1927", prep: "on", clue: "GMD troops and gangsters turned on communists and trade unionists", accept: ["Shanghai Massacre", "Shanghai purge", "April 12 Incident", "12 April Incident", "White Terror", "Chiang attacked the communists"], display: "the Shanghai Massacre", fact: "The Shanghai Massacre (12 April 1927) ended the First United Front." },
  { tier: 1, date: "October 1934", prep: "in", clue: "about 86,000 communists broke out of Jiangxi", accept: ["Long March began", "Long March", "start of the Long March", "Long March started", "Long March begins", "breakout from Jiangxi"], display: "the Long March began", fact: "The Long March began in October 1934 and ended in northern Shaanxi in October 1935." },
  { tier: 1, date: "July 1921", prep: "in", clue: "about a dozen delegates met in Shanghai", accept: ["CCP founded", "founding of the CCP", "Chinese Communist Party founded", "founding of the Chinese Communist Party", "Communist Party founded", "CCP", "Chinese Communist Party", "first congress of the CCP"], display: "the Chinese Communist Party was founded", fact: "The CCP held its first congress in Shanghai in July 1921; Mao was a delegate." },
  { tier: 1, date: "1 January 1912", prep: "on", clue: "Sun Yat-sen became provisional president", accept: ["Republic of China declared", "Republic of China", "Republic declared", "Republic of China founded", "China became a republic", "Republic of China proclaimed", "founding of the Republic of China", "Republic proclaimed"], display: "the Republic of China was declared", fact: "The Republic of China was declared on 1 January 1912." },
  { tier: 1, date: "January 1935", prep: "in", clue: "a meeting in Guizhou during the Long March", accept: ["Zunyi Conference", "Zunyi", "Tsunyi Conference"], display: "the Zunyi Conference", fact: "At the Zunyi Conference (January 1935) Mao returned to the military leadership." },
  { tier: 1, date: "7 July 1937", prep: "on", clue: "fighting at the Marco Polo Bridge near Beijing", accept: ["Japanese invasion", "Japan invaded China", "full-scale Japanese invasion", "Marco Polo Bridge Incident", "Marco Polo Bridge", "Second Sino-Japanese War began", "war with Japan began", "Sino-Japanese War", "Japan invaded"], display: "Japan's full-scale invasion of China began", fact: "Fighting at the Marco Polo Bridge on 7 July 1937 began full-scale war with Japan." },
  { tier: 2, date: "February 1912", prep: "in", clue: "the six-year-old ruler gave up the throne", accept: ["Puyi abdicated", "Puyi's abdication", "abdication of Puyi", "the emperor abdicated", "last emperor abdicated", "abdication", "Qing dynasty ended", "end of the Qing dynasty", "Qing fell", "Pu Yi abdicated"], display: "Puyi, the last emperor, abdicated", fact: "Puyi's abdication in February 1912 ended the Qing dynasty." },
  { tier: 2, date: "September 1931", prep: "in", clue: "Japan moved into China's north-eastern provinces", accept: ["Japan seized Manchuria", "Japan invaded Manchuria", "Japanese invasion of Manchuria", "invasion of Manchuria", "Mukden Incident", "Manchurian Incident", "Japan took Manchuria", "Japan occupied Manchuria", "Manchuria"], display: "Japan seized Manchuria", fact: "Japan seized Manchuria in September 1931; Chiang chose to fight the communists first." },
  { tier: 2, date: "December 1936", prep: "in", clue: "Chiang Kai-shek was held captive by one of his own generals", accept: ["Xi'an Incident", "Xian Incident", "Sian Incident", "Chiang was kidnapped", "kidnapping of Chiang", "Chiang kidnapped", "Chiang was captured"], display: "the Xi'an Incident", fact: "The Xi'an Incident (December 1936) forced Chiang into the Second United Front." },
  { tier: 2, date: "August 1945", prep: "in", clue: "the war that began in 1937 ended", accept: ["Japan surrendered", "Japanese surrender", "Japan surrenders", "end of the war with Japan", "surrender of Japan", "Second World War ended", "World War Two ended", "end of the Second World War", "WW2 ended"], display: "Japan surrendered", fact: "Japan surrendered in August 1945; the GMD and CCP soon turned on each other." },
  { tier: 2, date: "1926", prep: "in", clue: "Chiang Kai-shek's army set out to defeat the warlords", accept: ["Northern Expedition", "Northern Expedition began", "start of the Northern Expedition", "Northern Expedition started"], display: "the Northern Expedition began", fact: "Chiang launched the Northern Expedition in 1926." },
  { tier: 2, date: "October 1911", prep: "in", clue: "an army mutiny at Wuchang", accept: ["Wuchang Uprising", "Wuchang Rising", "Wuchang mutiny", "1911 Revolution", "Xinhai Revolution", "revolution", "revolution against the Qing", "Chinese Revolution", "the revolution began"], display: "the 1911 Revolution began (Wuchang Uprising)", fact: "The Wuchang Uprising of October 1911 set off the revolution that ended the Qing dynasty." },
  { tier: 3, date: "29 May 1935", prep: "on", clue: "the legend says about 22 volunteers crawled along iron chains over the Dadu River", accept: ["Luding Bridge", "crossing of Luding Bridge", "Battle of Luding Bridge", "Luding Bridge crossing", "Luding", "crossing of the Dadu River", "Dadu River crossing"], display: "the crossing of Luding Bridge", fact: "The Red Army crossed Luding Bridge on 29 May 1935; how much fighting took place is disputed." },
  { tier: 3, date: "1916", prep: "in", clue: "a would-be emperor's death left power to regional generals", accept: ["Yuan Shikai died", "death of Yuan Shikai", "Yuan Shikai's death", "warlord era began", "warlord era", "start of the warlord era", "warlords took over", "Yuan Shikai dies"], display: "Yuan Shikai died and the warlord era began", fact: "Yuan Shikai's death in 1916 began the warlord era (1916–28)." },
  { tier: 3, date: "1946", prep: "in", clue: "American attempts to arrange a peace failed", accept: ["civil war began", "Civil War", "Chinese Civil War", "full-scale civil war", "start of the civil war", "civil war started", "Chinese Civil War began", "civil war resumed"], display: "full-scale Civil War began", fact: "Full civil war began in 1946 and ended with communist victory in 1949." },
  { tier: 3, date: "1924", prep: "in", clue: "Soviet advisers brought the two rival parties together", accept: ["First United Front", "United Front formed", "First United Front formed", "United Front", "GMD-CCP alliance", "alliance of the GMD and CCP"], display: "the First United Front was formed", fact: "The First United Front (1924–27) united the GMD and CCP against the warlords." },
];

// ---------------------------------------------------------------------------
// 6. Long March facts
// ---------------------------------------------------------------------------
const LONG_MARCH: BankQ[] = [
  { tier: 1, qs: ["Roughly how many soldiers and party workers set out on the Long March in October 1934?", "The Long March: about how many people broke out of Jiangxi in October 1934?"], answer: { type: "number", value: 86000, display: "about 86,000" }, solution: ["About **86,000** set out in October 1934, carrying heavy equipment such as printing presses."], hint: "It was tens of thousands — between 80,000 and 90,000.", traps: [trapNum(8000, "About 8,000 *arrived* in Shaanxi. Many more set out.")] },
  { tier: 1, qs: ["Roughly how many of the original marchers reached northern Shaanxi in October 1935?", "Of those who left Jiangxi in 1934, about how many reached northern Shaanxi a year later?"], answer: { type: "number", value: 8000, display: "about 8,000" }, solution: ["Roughly **8,000** of the original marchers arrived — around 90% did not, through battle, cold, hunger, disease or desertion."], hint: "About a tenth of those who set out.", traps: [trapNum(86000, "About 86,000 *set out*. Far fewer arrived.")] },
  { tier: 1, qs: ["In which year did the Long March begin?", "The breakout from the Jiangxi Soviet took place in October of which year?"], answer: yr(1934), solution: ["The Long March began in **October 1934**, after Chiang's fifth encirclement campaign."], hint: "Three years after the Jiangxi Soviet was declared in 1931.", traps: [trapNum(1935, "1935 is when it ended. It began the year before.")] },
  { tier: 1, qs: ["In which year did the Long Marchers reach northern Shaanxi?", "The Long March ended in October of which year?"], answer: yr(1935), solution: ["Roughly 8,000 marchers reached northern Shaanxi in **October 1935**, a year after setting out."], hint: "It took about a year.", traps: [trapNum(1934, "1934 is when it began. It lasted about a year.")] },
  { tier: 1, qs: ["At which town's conference in January 1935 did Mao return to the leadership?", "Name the town in Guizhou where a 1935 conference marked the turning point in Mao's rise."], answer: txt(["Zunyi", "Zunyi Conference", "Tsunyi"], "Zunyi"), solution: ["At **Zunyi** (January 1935) the defeats were blamed on Bo Gu and Otto Braun, and Mao returned to the military leadership."], hint: "It begins with Z." },
  { tier: 1, qs: ["From which province did the communists break out to begin the Long March?", "The Long March began in which province, home of the Chinese Soviet Republic?"], answer: txt(["Jiangxi", "Kiangsi", "Jiangxi province", "Jiangxi Soviet"], "Jiangxi"), solution: ["The march began in **Jiangxi**, where Chiang's blockhouses were strangling the soviet."], hint: "The soviet of 1931–34 was named after it." },
  { tier: 1, qs: ["In which province did the Long Marchers end their journey in October 1935?", "The Long March ended in the north of which province?"], answer: txt(["Shaanxi", "northern Shaanxi", "north Shaanxi", "Shensi"], "Shaanxi"), solution: ["They reached northern **Shaanxi**; from early 1937 Yan'an in Shaanxi was their headquarters."], hint: "Yan'an is in this province." },
  { tier: 1, qs: ["Name the chain bridge over the Dadu River whose capture in May 1935 became a famous — and disputed — legend.", "Which bridge is at the centre of the Long March legend of about 22 volunteers crawling along iron chains under fire?"], answer: txt(["Luding Bridge", "Luding", "Luding chain bridge", "Luting Bridge"], "Luding Bridge"), solution: ["The legend of **Luding Bridge** (29 May 1935) is doubted by some historians, who argue there was much less fighting."], hint: "It begins with L." },
  { tier: 2, qs: ["Official Chinese accounts say the Long March covered 25,000 *li*. About how many kilometres is that?", "What distance in kilometres do official Chinese accounts claim for the Long March?"], answer: { type: "number", value: 12500, display: "about 12,500 km" }, solution: ["Official accounts claim 25,000 *li*, about **12,500 km**. Researchers who walked the main route estimated roughly 6,000 km."], hint: "One *li* is about half a kilometre.", traps: [trapNum(6000, "About 6,000 km is the estimate of researchers who retraced the main route — not the official claim.")] },
  { tier: 2, qs: ["In 2002–03 Ed Jocelyn and Andrew McEwen walked the main Long March route. Roughly how many kilometres did they estimate it was?", "Researchers who retraced the main route in 2002–03 estimated it at roughly how many km?"], answer: { type: "number", value: 6000, display: "about 6,000 km" }, solution: ["They estimated roughly **6,000 km** — about half the official 12,500 km. Distances depend on what you count, but a longer march also made a more heroic story."], hint: "About half the official claim.", traps: [trapNum(12500, "12,500 km is the official claim. The researchers' figure was much lower.")] },
  { tier: 2, qs: ["How many 'encirclement campaigns' did Chiang Kai-shek launch against the Jiangxi Soviet between 1930 and 1934?", "Chiang's campaigns to destroy the Jiangxi Soviet: how many were there?"], answer: yr(5), solution: ["There were **five**. The communists beat off the early ones, but the fifth (1933–34) used rings of blockhouses and forced them out."], hint: "The last one was the fifth." },
  { tier: 2, qs: ["Which German adviser sent by the Comintern was blamed at Zunyi for the defeats in Jiangxi?", "Name the Comintern's German agent who, with Bo Gu, was blamed at the Zunyi Conference."], answer: txt(["Otto Braun", "Braun", "Li De"], "Otto Braun"), solution: ["**Otto Braun** had pushed head-on battles instead of Mao's mobile guerrilla tactics; at Zunyi he lost his influence."], hint: "His surname is also a German word for 'brown'." },
  { tier: 2, qs: ["Which town in Shaanxi became the communists' headquarters from early 1937?", "Name the Shaanxi town that was the CCP's base from 1937 to 1947."], answer: txt(["Yan'an", "Yanan", "Yenan", "Yan an"], "Yan'an"), solution: ["**Yan'an** became the CCP's headquarters from early 1937 — the end point of the Long March story."], hint: "It begins with Y." },
  { tier: 2, qs: ["Which river did the Red Army cross at Luding Bridge?", "Luding Bridge crosses which river?"], answer: txt(["Dadu River", "Dadu", "Tatu River", "Tatu"], "the Dadu River"), solution: ["Luding Bridge crosses the **Dadu River** in western Sichuan."], hint: "It begins with D." },
  { tier: 3, qs: ["Which American journalist's book *Red Star Over China* (1937) spread the heroic Long March story worldwide?"], answer: txt(["Edgar Snow", "Snow"], "Edgar Snow"), solution: ["**Edgar Snow** interviewed Mao in 1936; his book made the communists look like heroic patriots."], hint: "His surname is a kind of weather." },
  { tier: 3, qs: ["At which river, in late 1934, were the marchers caught and lost perhaps half their strength?", "Name the river where the Long Marchers suffered their heaviest early losses, in late 1934."], answer: txt(["Xiang River", "Xiang", "Hsiang River"], "the Xiang River"), solution: ["At the **Xiang River** in late 1934 the Red Army lost perhaps half its strength — losses later blamed on Bo Gu and Otto Braun."], hint: "It begins with X." },
  { tier: 3, qs: ["What did Chiang's armies build in rings around the Jiangxi Soviet during the fifth encirclement campaign?", "Chiang's fifth campaign slowly strangled the Jiangxi Soviet with rings of fortified what?"], answer: txt(["blockhouses", "blockhouse", "fortified blockhouses", "forts", "fortifications"], "blockhouses"), solution: ["Rings of fortified **blockhouses** slowly cut off the soviet — guerrilla tactics could not break them."], hint: "Small fortified buildings, built in lines." },
  { tier: 3, qs: ["Roughly what percentage of those who left Jiangxi in October 1934 did NOT reach northern Shaanxi?", "About 86,000 set out and about 8,000 arrived. Roughly what percentage did not arrive?"], answer: { type: "number", value: 90, display: "about 90%" }, solution: ["About 78,000 of 86,000 did not arrive — roughly **90%**. Some died, some deserted or were left behind, and new recruits joined along the way."], hint: "8,000 is roughly a tenth of 86,000.", traps: [trapNum(10, "About 10% *arrived*. The question asks how many did not.")] },
  { tier: 3, qs: ["What were the boggy swamps crossed in August 1935, where many marchers died, called?"], answer: txt(["grasslands", "the grasslands", "grassland", "swamps", "marshes", "bogs"], "the grasslands"), solution: ["The **grasslands** were treacherous bogs; many marchers died there of cold, hunger and exhaustion."], hint: "Grass grew on top — but underneath was bog." },
];

// ---------------------------------------------------------------------------
// 7. GMD or CCP?
// ---------------------------------------------------------------------------
interface PartyStatement {
  tier: Tier;
  party: "GMD" | "CCP";
  s: string;
  why: string;
}

const PARTY: PartyStatement[] = [
  { tier: 1, party: "GMD", s: "This party was founded by Sun Yat-sen's followers in 1912.", why: "Sun Yat-sen founded the Guomindang (Nationalists)." },
  { tier: 1, party: "GMD", s: "This party was led by Chiang Kai-shek.", why: "Chiang led the Nationalists from the mid-1920s." },
  { tier: 1, party: "GMD", s: "This party's forces carried out the Shanghai Massacre in April 1927.", why: "Chiang's GMD troops turned on their communist allies." },
  { tier: 1, party: "GMD", s: "This party's government retreated to Taiwan in 1949.", why: "After losing the Civil War, Chiang's Republic of China government continued on Taiwan." },
  { tier: 1, party: "GMD", s: "This party launched the Northern Expedition against the warlords in 1926.", why: "The Northern Expedition was Chiang's GMD campaign (with communist help at first)." },
  { tier: 1, party: "CCP", s: "This party was founded in Shanghai in July 1921 with about 50 members.", why: "The Chinese Communist Party was founded in 1921; Mao was a delegate." },
  { tier: 1, party: "CCP", s: "This party set up the Jiangxi Soviet with Mao as chairman.", why: "The Jiangxi Soviet (1931–34) was the communists' base." },
  { tier: 1, party: "CCP", s: "This party's army made the Long March of 1934–35.", why: "The Red Army escaped Chiang's encirclement on the Long March." },
  { tier: 1, party: "CCP", s: "This party's leader proclaimed the People's Republic of China in 1949.", why: "Mao, leader of the communists, proclaimed the PRC on 1 October 1949." },
  { tier: 1, party: "CCP", s: "This party's main support came from poor peasants in the villages.", why: "Mao built the communists' strength among the peasants." },
  { tier: 2, party: "GMD", s: "This party's main support came from the army, the cities, business and landlords.", why: "The Nationalists were backed by property-owners who feared revolution." },
  { tier: 2, party: "GMD", s: "This party launched five encirclement campaigns against its rivals in Jiangxi.", why: "Chiang's Nationalists launched the encirclement campaigns of 1930–34." },
  { tier: 2, party: "GMD", s: "This party's government moved inland to Chongqing during the war with Japan.", why: "Chiang's Nationalist government retreated to Chongqing after Japan took the coast." },
  { tier: 2, party: "GMD", s: "This party fought most of the big battles against Japan, 1937–45.", why: "The Nationalists bore the brunt of the war — and were badly weakened by it." },
  { tier: 2, party: "GMD", s: "This party received over $2 billion in US aid.", why: "The US backed Chiang's Nationalists, but aid could not save them." },
  { tier: 2, party: "CCP", s: "This party grew from about 40,000 members in 1937 to about 1.2 million in 1945.", why: "The communists grew fast as patriotic guerrillas during the war with Japan." },
  { tier: 2, party: "CCP", s: "This party's headquarters was at Yan'an from 1937.", why: "Yan'an in Shaanxi was the communist base from 1937 to 1947." },
  { tier: 2, party: "CCP", s: "This party's soldiers had to follow the Eight Points for Attention.", why: "The Red Army's code of discipline helped win villagers' trust." },
  { tier: 2, party: "CCP", s: "This party cut rents and interest rates in the areas it controlled during the war with Japan.", why: "Communist reforms in their base areas won peasant support." },
  { tier: 3, party: "GMD", s: "This party attacked the New Fourth Army in January 1941, despite the Second United Front.", why: "Nationalist forces attacked the communist New Fourth Army — the truce never meant real trust." },
  { tier: 3, party: "GMD", s: "This party's new currency, launched in August 1948, was almost worthless within months.", why: "Hyperinflation wrecked the Nationalists' support in the cities." },
  { tier: 3, party: "GMD", s: "This party's officers were trained at the Whampoa Military Academy under Chiang Kai-shek.", why: "Whampoa (1924) was the Nationalists' academy, set up with Soviet help." },
  { tier: 3, party: "GMD", s: "This party followed the policy 'first internal pacification, then external resistance'.", why: "Chiang's Nationalists aimed to defeat the communists before fighting Japan." },
  { tier: 3, party: "CCP", s: "This party launched the Hundred Regiments Offensive against Japan in 1940.", why: "The Hundred Regiments Offensive was one of the communists' few big offensives." },
  { tier: 3, party: "CCP", s: "This party held the Rectification Movement of 1942–44 in Yan'an.", why: "Mao used Rectification to force critics to confess and tighten his grip on the communists." },
  { tier: 3, party: "CCP", s: "This party took large stocks of captured Japanese weapons in Manchuria with Soviet help.", why: "The Soviet Union let the communists take Japanese weapons in Manchuria in 1945–46." },
  { tier: 3, party: "CCP", s: "This party won the huge Huaihai campaign of 1948–49.", why: "The communists destroyed whole Nationalist armies at Huaihai." },
];

// ---------------------------------------------------------------------------
// 8. Mao in power
// ---------------------------------------------------------------------------
const MAO_POWER: BankQ[] = [
  { tier: 1, qs: ["In which year did Mao launch the Great Leap Forward?", "The Great Leap Forward began in which year?"], answer: yr(1958), solution: ["Mao launched the **Great Leap Forward** in 1958; it lasted until about 1962 and caused the famine of 1959–61."], hint: "Nine years after the PRC was proclaimed.", traps: [trapNum(1966, "1966 is the start of the Cultural Revolution, not the Great Leap Forward.")] },
  { tier: 1, qs: ["In which year did the Cultural Revolution begin?", "Mao launched the Cultural Revolution in which year?"], answer: yr(1966), solution: ["The **Cultural Revolution** began in 1966 and ended only with Mao's death in 1976."], hint: "It lasted ten years and ended in 1976.", traps: [trapNum(1958, "1958 is the Great Leap Forward. The Cultural Revolution came later.")] },
  { tier: 1, qs: ["What was the name of Mao's 1958–62 drive to industrialise at great speed, which caused a terrible famine?", "Which Mao policy, begun in 1958, led to the Great Famine of 1959–61?"], answer: txt(["Great Leap Forward", "the Great Leap Forward", "Great Leap"], "the Great Leap Forward"), solution: ["False harvest reports and grain requisitioning during the **Great Leap Forward** led to a famine in which an estimated 15–45 million people died."], hint: "It promised a giant jump forward.", traps: [trapText(["Cultural Revolution"], "The Cultural Revolution (1966–76) came later. This policy began in 1958.")] },
  { tier: 1, qs: ["What is the term for propaganda that presents a leader as heroic and all-wise, such as Mao's portraits everywhere?", "Name the key term: making a leader into an object of near-worship through portraits, slogans and books."], answer: txt(["cult of personality", "personality cult", "cult of the personality", "leader cult"], "cult of personality"), solution: ["A **cult of personality** made it dangerous to contradict Mao — built partly on the Long March legend."], hint: "Like a religious 'cult', but around one person." },
  { tier: 1, qs: ["What was the popular name for *Quotations from Chairman Mao*, printed by the army from 1964?", "Which small book of Mao's sayings circulated in hundreds of millions of copies from 1964?"], answer: txt(["Little Red Book", "the Little Red Book", "Quotations from Chairman Mao", "Red Book"], "the Little Red Book"), solution: ["The **Little Red Book** was a key part of Mao's cult of personality."], hint: "Its name describes its size and colour." },
  { tier: 1, qs: ["What were the young people called who attacked teachers, officials and 'old' culture in the Cultural Revolution?", "Name the young militants who carried out Mao's Cultural Revolution from 1966."], answer: txt(["Red Guards", "Red Guard", "the Red Guards"], "the Red Guards"), solution: ["Millions of young **Red Guards** attacked teachers, officials and Mao's rivals; schools closed."], hint: "A colour plus a word for protectors." },
  { tier: 1, qs: ["What is the term for a state in which only one party is allowed to hold power?", "After 1949 the Communist Party controlled government, courts, newspapers and schools. What kind of state is this?"], answer: txt(["one-party state", "one party state", "single-party state", "one-party dictatorship"], "a one-party state"), solution: ["China became a **one-party state**: small parties survived only if they accepted communist leadership."], hint: "Count the parties allowed to rule." },
  { tier: 1, qs: ["What were the huge collective farms set up in 1958 called?", "During the Great Leap Forward, villages were organised into huge units called what?"], answer: txt(["people's communes", "communes", "commune", "peoples communes"], "people's communes"), solution: ["Villagers were organised into huge **people's communes** during the Great Leap Forward."], hint: "Everything was meant to be held 'in common'." },
  { tier: 2, qs: ["Which marshal was purged in 1959 for criticising the Great Leap Forward?", "Name the marshal whose criticism of the Great Leap Forward in 1959 ended his career."], answer: txt(["Peng Dehuai", "Peng Te-huai", "Peng Teh-huai", "Peng"], "Peng Dehuai"), solution: ["**Peng Dehuai** was purged — showing officials it was dangerous to report bad news, so the famine went uncorrected."], hint: "His surname is Peng." },
  { tier: 2, qs: ["What were the small furnaces called in which villagers melted down pots and tools during the Great Leap Forward?"], answer: txt(["backyard furnaces", "backyard furnace", "backyard steel furnaces", "backyard steel furnace"], "backyard furnaces"), solution: ["Millions worked in **backyard furnaces**, taking labour away from farming; much of the metal produced was useless."], hint: "They were built close to people's homes." },
  { tier: 2, qs: ["In which year did Mao die, ending the Cultural Revolution?", "The Cultural Revolution ended with Mao's death in which year?"], answer: yr(1976), solution: ["Mao died on 9 September **1976**; the Cultural Revolution ended with him."], hint: "The Cultural Revolution lasted ten years from 1966." },
  { tier: 2, qs: ["Which 1956–57 campaign invited people to criticise the Communist Party — before critics were punished?", "Name the campaign in which Mao invited criticism in 1956–57."], answer: txt(["Hundred Flowers", "Hundred Flowers Campaign", "Hundred Flowers Movement", "100 Flowers", "100 Flowers Campaign"], "the Hundred Flowers campaign"), solution: ["In the **Hundred Flowers** campaign Mao invited criticism; the Anti-Rightist Campaign of 1957 then punished hundreds of thousands who had spoken out."], hint: "'Let a hundred … bloom.'" },
  { tier: 3, qs: ["In which year was the Agrarian Reform Law passed, sharing landlords' land among the peasants?"], answer: yr(1950), solution: ["The **Agrarian Reform Law (1950)** redistributed land; many landlords were beaten or killed at village meetings."], hint: "The year after the PRC was proclaimed." },
  { tier: 3, qs: ["In which year did the Anti-Rightist Campaign punish people who had criticised the party?"], answer: yr(1957), solution: ["The **Anti-Rightist Campaign** (1957) followed straight after the Hundred Flowers campaign."], hint: "The year after the Hundred Flowers campaign began in 1956.", traps: [trapNum(1958, "1958 is the Great Leap Forward. The Anti-Rightist Campaign came the year before.")] },
  { tier: 3, qs: ["Over which gate in Beijing does Mao's portrait still hang?"], answer: txt(["Tiananmen", "Tiananmen Gate", "Tian'anmen", "Gate of Heavenly Peace", "Tiananmen Square"], "Tiananmen Gate"), solution: ["Mao's portrait hangs over **Tiananmen Gate**, where he proclaimed the People's Republic in 1949."], hint: "Its name means 'Gate of Heavenly Peace'." },
  { tier: 3, qs: ["Mao was presented in propaganda as the 'Great ___' — a ship's steersman guiding the nation.", "Complete Mao's propaganda title: the 'Great ___'."], answer: txt(["Helmsman", "Great Helmsman", "the Great Helmsman"], "Helmsman"), solution: ["Propaganda called Mao the 'Great **Helmsman**' who had led the Long March and saved China."], hint: "The person at the wheel of a ship." },
  { tier: 3, qs: ["In 1981 the Communist Party judged Mao's achievements 'primary'. What word did it use for his mistakes?"], answer: txt(["secondary"], "secondary"), solution: ["The party's 1981 verdict: achievements 'primary', mistakes '**secondary**'. Many historians, such as Frank Dikötter, emphasise the enormous human cost instead."], hint: "The opposite of 'primary'." },
  { tier: 3, qs: ["Which Chinese journalist, whose father died of hunger in 1959, researched the famine for his book *Tombstone*?"], answer: txt(["Yang Jisheng", "Yang"], "Yang Jisheng"), solution: ["**Yang Jisheng** spent years researching the famine; his book helps us remember the families behind the estimates."], hint: "His surname is Yang." },
];

// ---------------------------------------------------------------------------
// 9. Which came first?
// ---------------------------------------------------------------------------
interface OrderEvent {
  tier: Tier;
  year: number;
  label: string;
  accept: string[];
}

const ORDER: OrderEvent[] = [
  { tier: 1, year: 1911, label: "the Wuchang Uprising", accept: ["Wuchang Uprising", "Wuchang", "Wuchang mutiny", "1911 Revolution", "Xinhai Revolution"] },
  { tier: 1, year: 1919, label: "the May Fourth Movement", accept: ["May Fourth Movement", "May Fourth", "May 4th Movement", "May 4th"] },
  { tier: 1, year: 1921, label: "the founding of the CCP", accept: ["founding of the CCP", "CCP founded", "CCP", "founding of the Chinese Communist Party", "Chinese Communist Party founded"] },
  { tier: 1, year: 1927, label: "the Shanghai Massacre", accept: ["Shanghai Massacre", "Shanghai"] },
  { tier: 1, year: 1934, label: "the start of the Long March", accept: ["start of the Long March", "Long March", "Long March begins", "Long March began"] },
  { tier: 1, year: 1937, label: "Japan's full-scale invasion of China", accept: ["Japan's full-scale invasion of China", "full-scale invasion", "Japanese invasion", "Japan's invasion", "Japan invades China", "Marco Polo Bridge"] },
  { tier: 1, year: 1945, label: "Japan's surrender", accept: ["Japan's surrender", "Japanese surrender", "Japan surrenders", "Japan surrendered"] },
  { tier: 1, year: 1949, label: "the proclamation of the People's Republic", accept: ["proclamation of the People's Republic", "People's Republic", "PRC", "PRC proclaimed", "People's Republic proclaimed", "People's Republic of China"] },
  { tier: 1, year: 1912, label: "Puyi's abdication", accept: ["Puyi's abdication", "Puyi abdicates", "Puyi", "abdication", "Pu Yi"] },
  { tier: 1, year: 1931, label: "Japan's seizure of Manchuria", accept: ["Japan's seizure of Manchuria", "Manchuria", "seizure of Manchuria", "Japan seizes Manchuria", "Mukden Incident"] },
  { tier: 2, year: 1916, label: "the death of Yuan Shikai", accept: ["death of Yuan Shikai", "Yuan Shikai", "Yuan Shikai dies", "Yuan Shikai's death"] },
  { tier: 2, year: 1924, label: "the formation of the First United Front", accept: ["formation of the First United Front", "First United Front", "United Front"] },
  { tier: 2, year: 1925, label: "the death of Sun Yat-sen", accept: ["death of Sun Yat-sen", "Sun Yat-sen", "Sun Yat-sen dies", "Sun Yat-sen's death", "Sun dies"] },
  { tier: 2, year: 1926, label: "the start of the Northern Expedition", accept: ["start of the Northern Expedition", "Northern Expedition"] },
  { tier: 2, year: 1935, label: "the Zunyi Conference", accept: ["Zunyi Conference", "Zunyi"] },
  { tier: 2, year: 1936, label: "the Xi'an Incident", accept: ["Xi'an Incident", "Xian Incident", "Xi'an"] },
  { tier: 2, year: 1946, label: "the start of full-scale Civil War", accept: ["start of full-scale Civil War", "Civil War", "start of the Civil War", "full-scale Civil War"] },
  { tier: 3, year: 1928, label: "Zhu De joining Mao in the Jinggang Mountains", accept: ["Zhu De joining Mao in the Jinggang Mountains", "Zhu De joining Mao", "Zhu De", "Jinggang Mountains"] },
  { tier: 3, year: 1940, label: "the Hundred Regiments Offensive", accept: ["Hundred Regiments Offensive", "Hundred Regiments", "100 Regiments Offensive"] },
  { tier: 3, year: 1941, label: "the GMD attack on the New Fourth Army", accept: ["GMD attack on the New Fourth Army", "New Fourth Army", "attack on the New Fourth Army", "New Fourth Army Incident"] },
  { tier: 3, year: 1942, label: "the start of the Rectification Movement", accept: ["start of the Rectification Movement", "Rectification Movement", "Rectification"] },
  { tier: 3, year: 1948, label: "the GMD's new currency of August 1948", accept: ["GMD's new currency of August 1948", "GMD's new currency", "new currency", "currency"] },
];

// ---------------------------------------------------------------------------
// 10. Crisis, weak government or leadership?
// ---------------------------------------------------------------------------
type Factor = "crisis" | "weak" | "leadership";
const FACTOR_ACCEPT: Record<Factor, string[]> = {
  crisis: ["crisis", "crises", "a crisis", "crisis factor"],
  weak: ["weak government", "weakness of government", "weakness of the government", "government weakness", "weak govt", "weak gov", "weakness of the GMD", "GMD weakness", "weakness", "weak"],
  leadership: ["leadership", "Mao's leadership", "charismatic leadership", "leadership and ideas", "leader", "Mao's leadership and ideas"],
};
const FACTOR_DISPLAY: Record<Factor, string> = { crisis: "crisis", weak: "weak government", leadership: "leadership" };

interface FactorItem {
  tier: Tier;
  f: Factor;
  s: string;
  why: string;
}

const FACTORS: FactorItem[] = [
  { tier: 1, f: "crisis", s: "The Qing dynasty collapsed in 1911–12, ending more than 2,000 years of emperors.", why: "The collapse of the old order left no accepted authority — a crisis that opened the door to new forces." },
  { tier: 1, f: "crisis", s: "From 1916 warlords with private armies fought each other and taxed peasants heavily.", why: "Warlord chaos was a crisis: violence became normal politics and ordinary life grew harder." },
  { tier: 1, f: "crisis", s: "Japan launched a full-scale invasion of China in 1937.", why: "The invasion was the biggest crisis of all — and it also deepened the GMD's weakness, so it links to the other factors." },
  { tier: 1, f: "weak", s: "Many GMD officials were corrupt.", why: "Corruption was a failure of the Nationalist government itself, and it cost Chiang support." },
  { tier: 1, f: "weak", s: "The GMD conscripted peasants into its army brutally.", why: "Harsh conscription was a weakness of the government that turned villagers against it." },
  { tier: 1, f: "leadership", s: "Mao argued that the peasants, not city workers, would lead China's revolution.", why: "This was Mao's own idea, and it fitted a country where 80–90% of people were peasants." },
  { tier: 1, f: "leadership", s: "The Red Army used guerrilla tactics: 'The enemy advances, we retreat…'", why: "Guerrilla strategy was a method chosen by Mao and Zhu De that kept a weak army alive." },
  { tier: 1, f: "leadership", s: "Communist propaganda turned the Long March into a heroic legend.", why: "Propaganda was a deliberate leadership method that built the CCP's — and Mao's — reputation." },
  { tier: 2, f: "crisis", s: "In 1919 the Treaty of Versailles handed Germany's rights in Shandong to Japan.", why: "Foreign humiliation was a crisis that made many young Chinese look for radical answers." },
  { tier: 2, f: "crisis", s: "Japan seized Manchuria in 1931.", why: "Foreign invasion was a crisis for China — and Chiang's response to it then exposed his government's weakness." },
  { tier: 2, f: "crisis", s: "Around 80–90% of Chinese people were poor peasants weighed down by rent, debt and taxes.", why: "Widespread peasant poverty was a long-term crisis: millions had little to lose from revolution." },
  { tier: 2, f: "weak", s: "Chiang's GMD was linked to landlords and did little to help the peasants.", why: "Failing to win the majority of the people was a weakness of the Nationalist government." },
  { tier: 2, f: "weak", s: "Chiang's policy was to defeat the communists before resisting Japan, which angered many patriotic Chinese.", why: "This was a choice by the government that made it look unpatriotic — a weakness the CCP exploited." },
  { tier: 2, f: "leadership", s: "Communists took land from landlords and gave it to poor peasants in the areas they controlled.", why: "Land reform was a CCP policy that won peasant support — part of Mao's strategy." },
  { tier: 2, f: "leadership", s: "Red Army soldiers had to follow the Eight Points for Attention, such as paying fairly for what they bought.", why: "Discipline was a deliberate leadership method to win villagers' trust." },
  { tier: 2, f: "leadership", s: "Mao returned to the military leadership at the Zunyi Conference in 1935.", why: "Zunyi changed who led the communists — the leadership factor." },
  { tier: 3, f: "weak", s: "The GMD never fully controlled China, even after the Northern Expedition.", why: "Weak control of the country was a weakness of Chiang's government, not a one-off crisis." },
  { tier: 3, f: "weak", s: "In 1948–49 whole GMD army units changed sides to the communists.", why: "Mass defections showed how far the Nationalist government had lost its own soldiers' loyalty." },
  { tier: 3, f: "weak", s: "Many GMD troops looted villages and mistreated peasants.", why: "Poorly disciplined troops were a weakness of the government — and a contrast the CCP made use of." },
  { tier: 3, f: "leadership", s: "Edgar Snow's book *Red Star Over China* (1937), based on interviews with Mao, presented the communists as heroic patriots.", why: "Mao welcomed Snow and used the book's publicity — propaganda is part of the leadership factor." },
  { tier: 3, f: "leadership", s: "In Yan'an, Mao's Rectification Movement (1942–44) forced critics to confess and tightened his grip on the party.", why: "Building a ruthless party machine was part of Mao's leadership — not every leadership method was attractive." },
  { tier: 3, f: "leadership", s: "During the war with Japan the communists cut rents and interest rates in the areas they controlled.", why: "These reforms were CCP policy that won peasant support (the historian Mark Selden stresses this)." },
  { tier: 3, f: "crisis", s: "Foreign powers held treaty ports and spheres of influence won through unequal treaties.", why: "Long-term foreign domination was a crisis of national pride that fuelled nationalism." },
];

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------
export const drills: Drill[] = [
  {
    id: "mao-rise.crisis-key-terms",
    topicId: TOPIC,
    title: "Key term from its definition: China in crisis",
    level: 1,
    guideRef: "china-in-crisis",
    generate(rng, tier) {
      return termDrillItem(rng, CRISIS_TERMS, tier);
    },
  },
  {
    id: "mao-rise.whos-who",
    topicId: TOPIC,
    title: "Who's who?",
    level: 1,
    guideRef: "nationalists-and-communists",
    generate(rng, tier) {
      const p = pickTiered(rng, PEOPLE, tier);
      const d = rng.pick(p.descs);
      const form = rng.int(0, 2);
      const prompt = form === 0 ? `Who is this? ${d} Give the name.` : form === 1 ? `Name the person: ${d}` : `Who's who in modern China? ${d} Who is it?`;
      return {
        prompt,
        answer: txt(p.accept, p.display),
        solution: [p.fact],
        hint: tier === 1 ? "Think: emperor, GMD founder, GMD leader or communist leader?" : "Was this person a Nationalist, a Communist, or neither?",
        traps: p.traps,
      };
    },
  },
  {
    id: "mao-rise.key-dates",
    topicId: TOPIC,
    title: "Key dates, 1911–1949",
    level: 1,
    guideRef: "japan-and-civil-war",
    generate(rng, tier) {
      const e = pickTiered(rng, DATES, tier);
      const form = rng.int(0, 2);
      const prompt =
        form === 0
          ? `In which year ${e.q}?`
          : form === 1
            ? `A timeline of China is missing a date: "${e.label}". Which year goes there?`
            : `Give the year: ${e.label}.`;
      return {
        prompt,
        answer: yr(e.year),
        solution: [`**${e.year}**. ${e.fact}`],
        hint: e.year < 1928 ? "Think of the years of revolution, warlords and the First United Front (1911–1927)." : "Think of the years of the Long March, war with Japan and Civil War (1928–1949).",
        traps: e.trap ? [e.trap] : undefined,
      };
    },
  },
  {
    id: "mao-rise.mao-methods",
    topicId: TOPIC,
    title: "Mao's ideas and methods: key terms",
    level: 1,
    guideRef: "mao-and-the-peasants",
    generate(rng, tier) {
      // Mix definitions with completions of Mao's guerrilla formula and sayings.
      if (rng.bool(0.3)) return fromBank(rng, MAO_SAYINGS, tier);
      return termDrillItem(rng, MAO_TERMS, tier);
    },
  },
  {
    id: "mao-rise.event-from-date",
    topicId: TOPIC,
    title: "What happened on this date?",
    level: 2,
    guideRef: "china-in-crisis",
    generate(rng, tier) {
      const e = pickTiered(rng, DATE_EVENTS, tier);
      // Only exact-day dates are distinctive enough to ask without a clue.
      const withClue = tier < 3 || e.prep === "in" || rng.bool(0.5);
      const form = rng.int(0, 1);
      const prompt = withClue
        ? form === 0
          ? `What happened in China ${e.prep} ${e.date}? (Clue: ${e.clue}.) Name the event in a few words.`
          : `${e.date} — name the event. Clue: ${e.clue}.`
        : form === 0
          ? `What happened in China ${e.prep} ${e.date}? Name the event in a few words.`
          : `Name the event: China, ${e.date}.`;
      return {
        prompt,
        answer: txt(e.accept, e.display),
        solution: [e.fact],
        hint: `Clue: ${e.clue}.`,
      };
    },
  },
  {
    id: "mao-rise.long-march",
    topicId: TOPIC,
    title: "The Long March: numbers, places and people",
    level: 2,
    guideRef: "long-march",
    generate(rng, tier) {
      return fromBank(rng, LONG_MARCH, tier);
    },
  },
  {
    id: "mao-rise.gmd-or-ccp",
    topicId: TOPIC,
    title: "GMD or CCP?",
    level: 2,
    guideRef: "japan-and-civil-war",
    generate(rng, tier) {
      const st = pickTiered(rng, PARTY, tier);
      const form = rng.int(0, 1);
      const prompt =
        form === 0
          ? `Nationalists or Communists? ${st.s} Answer *GMD* or *CCP*.`
          : `Which party does this describe — the GMD (Guomindang) or the CCP (Chinese Communist Party)? ${st.s}`;
      const isGmd = st.party === "GMD";
      return {
        prompt,
        answer: txt(isGmd ? GMD : CCP, isGmd ? "GMD (Nationalists)" : "CCP (Communists)"),
        solution: [`**${isGmd ? "GMD (Nationalists)" : "CCP (Communists)"}**. ${st.why}`],
        hint: "GMD = Nationalists, led by Sun Yat-sen then Chiang Kai-shek. CCP = Communists, led in the end by Mao.",
        traps: [
          isGmd
            ? { spec: { type: "text", accept: ["CCP", "Communists"] }, feedback: "The communists were the GMD's rivals. Think about which side Chiang Kai-shek led." }
            : { spec: { type: "text", accept: ["GMD", "Nationalists"] }, feedback: "The Nationalists (GMD) were led by Chiang Kai-shek. Think about which side Mao was on." },
        ],
      };
    },
  },
  {
    id: "mao-rise.mao-in-power",
    topicId: TOPIC,
    title: "Mao in power: dates and terms",
    level: 2,
    guideRef: "mao-in-power",
    generate(rng, tier) {
      return fromBank(rng, MAO_POWER, tier);
    },
  },
  {
    id: "mao-rise.which-came-first",
    topicId: TOPIC,
    title: "Which came first?",
    level: 3,
    guideRef: "nationalists-and-communists",
    generate(rng, tier) {
      const pool = ORDER.filter((e) => e.tier <= tier);
      let a = rng.pick(pool);
      let b = rng.pick(pool);
      const minGap = tier === 1 ? 3 : 1;
      const maxGap = tier === 3 ? 4 : 40;
      for (let i = 0; i < 100; i++) {
        const gap = Math.abs(a.year - b.year);
        if (gap >= minGap && gap <= maxGap) break;
        a = rng.pick(pool);
        b = rng.pick(pool);
      }
      if (a.year === b.year) b = ORDER.find((e) => e.year !== a.year)!;
      const [first, second] = a.year < b.year ? [a, b] : [b, a];
      // Tier 3 sometimes asks for the number of years between the two events.
      if (tier === 3 && rng.bool(0.4)) {
        const gap = second.year - first.year;
        return {
          prompt: `Subtract the years: how many years apart were ${first.label} and ${second.label}?`,
          answer: { type: "number", value: gap },
          solution: [`${first.label.charAt(0).toUpperCase() + first.label.slice(1)} was in ${first.year}; ${second.label} was in ${second.year}.`, `${second.year} − ${first.year} = **${gap}** years.`],
          hint: "Work out the year of each event, then subtract.",
        };
      }
      const form = rng.int(0, 1);
      const prompt =
        form === 0
          ? `Which came first: **${a.label}** or **${b.label}**? Type the earlier event.`
          : `Put them in order. Which happened earlier — **${a.label}** or **${b.label}**?`;
      return {
        prompt,
        answer: txt(first.accept, first.label),
        solution: [`**${first.label.charAt(0).toUpperCase() + first.label.slice(1)}** came first (${first.year}); ${second.label} followed in ${second.year}.`],
        hint: "Anchor each event to a year you know: 1911 revolution, 1921 CCP, 1927 massacre, 1934 Long March, 1937 Japan, 1949 PRC.",
        traps: [{ spec: { type: "text", accept: second.accept }, feedback: `That one came later, in ${second.year}.` }],
      };
    },
  },
  {
    id: "mao-rise.crisis-weakness-leadership",
    topicId: TOPIC,
    title: "Crisis, weak government or leadership?",
    level: 3,
    guideRef: "why-mao-rose",
    generate(rng, tier) {
      const it = pickTiered(rng, FACTORS, tier);
      const form = rng.int(0, 1);
      const prompt =
        form === 0
          ? `Crisis, weak government or leadership? ${it.s} Answer *crisis*, *weak government* or *leadership*.`
          : `Sort this cause of Mao's rise into the Term 2 framework: ${it.s} Is it best described as *crisis*, *weak government* or *leadership*?`;
      const others = (["crisis", "weak", "leadership"] as Factor[]).filter((f) => f !== it.f);
      const feedback: Record<Factor, string> = {
        crisis: "A crisis is a disaster or upheaval that hit the country (revolution, invasion, foreign humiliation) — is this one?",
        weak: "Weak government means failures of the government itself (corruption, conscription, losing control) — is this one?",
        leadership: "Leadership means the communists' own ideas, methods and propaganda — is this one?",
      };
      return {
        prompt,
        answer: txt(FACTOR_ACCEPT[it.f], FACTOR_DISPLAY[it.f]),
        solution: [`**${FACTOR_DISPLAY[it.f].charAt(0).toUpperCase() + FACTOR_DISPLAY[it.f].slice(1)}.** ${it.why}`, "Strong answers then link the factors: crises exposed GMD weakness, which Mao's methods exploited."],
        hint: "Ask: did it happen *to* China, was it a failure *of the government*, or was it something the *communists chose to do*?",
        traps: others.map((f) => ({ spec: { type: "text", accept: [FACTOR_ACCEPT[f][0]] }, feedback: feedback[f] })),
      };
    },
  },
];
