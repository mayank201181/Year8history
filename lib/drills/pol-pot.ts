// Skill drills for "Pol Pot and the Khmer Rouge" (Term 2: how dictatorships came to power).
// Sensitive topic: drills test causes, chronology, people, ideas, consequences, evidence and
// justice — never graphic detail. Facts are kept consistent with lib/topics/pol-pot/guide.ts.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";

type Tier = 1 | 2 | 3;

/** Tier 1 = headline items; tier 2 = headline + typical detail; tier 3 = detail + finer points. */
function poolFor<T extends { tier: Tier }>(bank: readonly T[], tier: Tier): T[] {
  return bank.filter((b) => (tier === 1 ? b.tier === 1 : tier === 2 ? b.tier <= 2 : b.tier >= 2));
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function text(accept: string[], display?: string): AnswerSpec {
  return { type: "text", accept, display: display ?? accept[0] };
}

// ---------------------------------------------------------------------------
// Generic "name it from a clue" recall item
// ---------------------------------------------------------------------------
interface RecallItem {
  tier: Tier;
  /** Descriptions that must NOT contain the answer. */
  clues: string[];
  accept: string[];
  display?: string;
  /** Teaching sentence(s) for the solution. */
  why: string;
  hint?: string;
  traps?: Trap[];
}

function recall(rng: Rng, tier: Tier, bank: readonly RecallItem[], templates: readonly ((clue: string) => string)[], hint: string): DrillItem {
  const item = rng.pick(poolFor(bank, tier));
  const clue = rng.pick(item.clues);
  const tpl = rng.pick(templates);
  return {
    prompt: tpl(clue),
    answer: text(item.accept, item.display),
    solution: [`**${cap(item.display ?? item.accept[0])}.** ${item.why}`],
    hint: item.hint ?? hint,
    traps: item.traps,
  };
}

// ---------------------------------------------------------------------------
// Shared dated-event bank (exact, well-established years only)
// ---------------------------------------------------------------------------
interface Ev {
  y: number;
  tier: Tier;
  /** Completes "In which year …?" */
  q: string;
  /** Short label (also the first accepted answer in "which came first"). */
  label: string;
  accept: string[];
  note: string;
}

const EVENTS: readonly Ev[] = [
  { y: 1431, tier: 3, q: "was Angkor attacked by the Thai kingdom of Ayutthaya, after which the Khmer capital moved south", label: "Ayutthaya attacks Angkor", accept: ["Ayutthaya attacks Angkor", "Ayutthaya attack", "attack on Angkor", "Angkor attacked"], note: "After 1431 the capital moved south and Cambodia slowly shrank between stronger neighbours." },
  { y: 1863, tier: 1, q: "did Cambodia become a French protectorate", label: "French protectorate begins", accept: ["French protectorate begins", "French protectorate", "French rule begins", "French rule", "protectorate"], note: "King Norodom accepted French 'protection', partly to shield Cambodia from Siam and Vietnam." },
  { y: 1933, tier: 2, q: "was Hitler appointed Chancellor of Germany", label: "Hitler becomes Chancellor", accept: ["Hitler becomes Chancellor", "Hitler appointed Chancellor", "Hitler Chancellor"], note: "Hitler was appointed legally by President Hindenburg on 30 January 1933 — not by a coup." },
  { y: 1949, tier: 2, q: "did Mao proclaim the People's Republic of China after winning the civil war", label: "Mao proclaims the PRC", accept: ["Mao proclaims the PRC", "Mao proclaims the People's Republic of China", "PRC founded", "People's Republic of China"], note: "Like Pol Pot later, Mao came to power by winning a civil war with a peasant army." },
  { y: 1953, tier: 1, q: "did Cambodia gain independence from France", label: "Independence from France", accept: ["Independence from France", "independence", "Cambodian independence"], note: "France granted independence on 9 November 1953 after King Norodom Sihanouk's campaign." },
  { y: 1955, tier: 3, q: "did Sihanouk give up the throne so he could lead politics directly as a prince", label: "Sihanouk gives up the throne", accept: ["Sihanouk gives up the throne", "Sihanouk abdicates", "abdication", "Sihanouk becomes prince"], note: "He handed the throne to his father and led politics as Prince Sihanouk through his Sangkum movement." },
  { y: 1963, tier: 3, q: "did Saloth Sar, now leader of the secret party, flee to the jungle", label: "Saloth Sar flees to the jungle", accept: ["Saloth Sar flees to the jungle", "flees to the jungle", "flight to the jungle", "Saloth Sar goes to the jungle"], note: "Fearing Sihanouk's police, he went underground among hill peoples in the north-east." },
  { y: 1965, tier: 3, q: "did Sihanouk break off relations with the USA", label: "Sihanouk breaks with the USA", accept: ["Sihanouk breaks with the USA", "breaks with the USA", "Sihanouk breaks with the US", "break with the USA"], note: "Part of his balancing act to keep Cambodia neutral in the Vietnam War." },
  { y: 1966, tier: 3, q: "was the secret party renamed the Communist Party of Kampuchea", label: "Party renamed CPK", accept: ["Party renamed CPK", "party renamed", "CPK", "Communist Party of Kampuchea"], note: "Outsiders still knew it only by Sihanouk's nickname: the Khmer Rouge." },
  { y: 1969, tier: 2, q: "did the secret US bombing of Cambodia begin", label: "US bombing begins", accept: ["US bombing begins", "bombing begins", "start of US bombing", "secret bombing begins"], note: "President Nixon ordered secret raids on North Vietnamese bases in March 1969." },
  { y: 1970, tier: 1, q: "did Lon Nol's coup remove Prince Sihanouk", label: "Lon Nol's coup", accept: ["Lon Nol's coup", "Lon Nol coup", "coup", "Lon Nol"], note: "On 18 March 1970 Lon Nol removed Sihanouk; Sihanouk then allied with the Khmer Rouge." },
  { y: 1973, tier: 2, q: "did the US bombing of Cambodia end, after Congress cut off the money", label: "US bombing ends", accept: ["US bombing ends", "bombing ends", "end of US bombing", "end of bombing"], note: "The bombing stopped in August 1973, leaving Lon Nol's army badly exposed." },
  { y: 1975, tier: 1, q: "did the Khmer Rouge capture Phnom Penh", label: "Khmer Rouge capture Phnom Penh", accept: ["Khmer Rouge capture Phnom Penh", "Khmer Rouge take Phnom Penh", "Khmer Rouge capture", "Khmer Rouge victory"], note: "Khmer Rouge fighters entered the capital on 17 April 1975 and emptied it within days." },
  { y: 1976, tier: 2, q: "did the Khmer Rouge draw up their Four-Year Plan for rice production", label: "Four-Year Plan drawn up", accept: ["Four-Year Plan drawn up", "Four-Year Plan", "four year plan", "4 year plan"], note: "It demanded about 3 tonnes of rice per hectare — roughly three times normal yields." },
  { y: 1977, tier: 3, q: "did the Communist Party of Kampuchea finally admit publicly that it existed", label: "Party admits it exists", accept: ["Party admits it exists", "party admits it exists", "party goes public", "CPK revealed"], note: "The party kept itself secret for over two years after taking power, ruling as 'Angkar'." },
  { y: 1978, tier: 2, q: "did Vietnam invade Cambodia (on 25 December)", label: "Vietnam invades", accept: ["Vietnam invades", "Vietnamese invasion", "invasion of Cambodia", "Vietnam invades Cambodia"], note: "Khmer Rouge raids across the border had provoked a full-scale Vietnamese invasion." },
  { y: 1979, tier: 1, q: "did Vietnamese forces capture Phnom Penh, ending Khmer Rouge rule", label: "Vietnam captures Phnom Penh", accept: ["Vietnam captures Phnom Penh", "Vietnam takes Phnom Penh", "Vietnamese capture Phnom Penh", "end of Khmer Rouge rule"], note: "Phnom Penh fell on 7 January 1979, after 3 years, 8 months and 20 days of Khmer Rouge rule." },
  { y: 1980, tier: 3, q: "did the former S-21 prison open as the Tuol Sleng Genocide Museum", label: "Tuol Sleng museum opens", accept: ["Tuol Sleng museum opens", "Tuol Sleng museum", "museum opens", "Tuol Sleng Genocide Museum"], note: "The museum keeps the regime's own records, which later became evidence at the tribunal." },
  { y: 1989, tier: 3, q: "did Vietnam withdraw its troops from Cambodia", label: "Vietnam withdraws", accept: ["Vietnam withdraws", "Vietnamese withdrawal", "Vietnam leaves", "withdrawal"], note: "The withdrawal opened the way to a peace deal two years later." },
  { y: 1991, tier: 2, q: "were the Paris Peace Agreements signed", label: "Paris Peace Agreements", accept: ["Paris Peace Agreements", "Paris Peace Accords", "Paris Agreements", "peace agreements"], note: "They led to UN-run elections in 1993, which the Khmer Rouge boycotted." },
  { y: 1993, tier: 2, q: "were UN-run elections held in Cambodia", label: "UN-run elections", accept: ["UN-run elections", "UN elections", "UN-run election", "elections"], note: "The Khmer Rouge boycotted them and kept fighting from the jungle." },
  { y: 1998, tier: 1, q: "did Pol Pot die, never having faced a court", label: "Pol Pot dies", accept: ["Pol Pot dies", "Pol Pot died", "death of Pol Pot", "Pol Pot's death"], note: "He died in April 1998 in a Khmer Rouge stronghold — so he was never put on trial." },
  { y: 2006, tier: 2, q: "did the UN-backed tribunal (the ECCC) begin its work", label: "Tribunal begins work", accept: ["Tribunal begins work", "tribunal begins", "ECCC begins", "ECCC begins work", "tribunal starts"], note: "It had both Cambodian and international judges." },
  { y: 2010, tier: 2, q: "did the tribunal convict Duch, the head of S-21", label: "Duch convicted", accept: ["Duch convicted", "Duch", "conviction of Duch", "Duch's conviction"], note: "Duch was the first person convicted; his sentence became life imprisonment on appeal in 2012." },
  { y: 2018, tier: 2, q: "were Nuon Chea and Khieu Samphan convicted of genocide", label: "Genocide convictions", accept: ["Genocide convictions", "genocide conviction", "genocide verdict", "convicted of genocide"], note: "They had already been convicted of crimes against humanity in 2014." },
];

function yearSolution(e: Ev): string {
  return `**${e.y}.** ${e.note}`;
}

// ---------------------------------------------------------------------------
// Banks for the recall drills
// ---------------------------------------------------------------------------
const BEFORE_1970: readonly RecallItem[] = [
  { tier: 1, clues: ["The 12th-century temple, built by Khmer kings, that appears on Cambodia's national flag.", "The world's largest religious monument, built in the early 12th century and a symbol of Khmer national pride."], accept: ["Angkor Wat", "Angkor Vat", "Angkor"], why: "Built under King Suryavarman II, it reminded Cambodians that they had once ruled a great empire — a memory later leaders could use for good or harm." },
  { tier: 1, clues: ["The European country that made Cambodia a protectorate in 1863.", "The colonial power that kept Cambodia's king on the throne but held the real power until 1953."], accept: ["France", "the French", "French"], why: "France ruled Cambodia as part of French Indochina from 1863 until independence in 1953, building few schools.", traps: [{ spec: text(["Britain", "the British", "England", "UK"]), feedback: "Britain ruled Malaya, Singapore and Burma — Cambodia was part of French Indochina." }] },
  { tier: 1, clues: ["The king who campaigned for independence and won it from France in 1953.", "The leader who kept Cambodia neutral during the Vietnam War and was often seen by villagers as a 'god-king'."], accept: ["Sihanouk", "Norodom Sihanouk", "Prince Sihanouk", "King Sihanouk", "King Norodom Sihanouk"], display: "Norodom Sihanouk", why: "Sihanouk led Cambodia from 1953 until Lon Nol overthrew him in 1970.", traps: [{ spec: text(["Lon Nol"]), feedback: "Lon Nol was the general who overthrew Sihanouk in 1970." }] },
  { tier: 1, clues: ["Cambodia's capital city, a world of boulevards, cafés and government jobs before 1970.", "The city on the Mekong that felt like another world compared with Cambodia's poor villages."], accept: ["Phnom Penh"], why: "The gap between Phnom Penh and the countryside was later exploited by the Khmer Rouge, who saw cities as corrupt and foreign." },
  { tier: 1, clues: ["Sihanouk's Cold War policy of officially taking neither side.", "The policy Cambodia followed while the USA and North Vietnam fought next door: siding with nobody."], accept: ["neutrality", "neutral", "being neutral", "non-alignment", "non-aligned"], display: "neutrality", why: "Cambodia was too small to take sides safely — but letting North Vietnamese troops use border areas made it a target anyway." },
  { tier: 1, clues: ["Cambodia's neighbour to the east, at war with the USA in the 1960s.", "The neighbouring country whose war 'spilled over' into Cambodia."], accept: ["Vietnam", "North Vietnam", "Viet Nam"], display: "Vietnam", why: "The Vietnam War next door brought supply routes, bombing and invasion into Cambodia." },
  { tier: 1, clues: ["The way most Cambodians earned a living before 1970, in villages often in debt.", "The main job of Cambodia's rural majority, growing the country's staple crop."], accept: ["rice farming", "rice farmers", "farming", "farmers", "peasants", "peasant farmers", "rice farmer"], display: "rice farming", why: "Most Cambodians were poor rice farmers — the group the Khmer Rouge later called the 'pure' heart of the nation." },
  { tier: 2, clues: ["The great empire that ruled much of mainland South-East Asia from about 802 to 1431.", "The medieval empire whose kings ruled from Angkor and built huge reservoirs and canals."], accept: ["Khmer Empire", "Khmer", "Khmer kingdom", "Angkor Empire", "Angkorian Empire"], display: "the Khmer Empire", why: "Its memory gave Cambodians pride — and gave the Khmer Rouge a myth of a 'pure', powerful past." },
  { tier: 2, clues: ["The French colonial federation Cambodia belonged to, along with Vietnam and Laos.", "The name for France's empire in mainland South-East Asia, which included Cambodia."], accept: ["French Indochina", "Indochina", "Indo-China"], display: "French Indochina", why: "Cambodia was part of French Indochina from 1863; the French built roads and plantations but very few schools." },
  { tier: 2, clues: ["The term for a country that keeps its own ruler but is controlled and 'protected' by a stronger power.", "What Cambodia became in 1863 when King Norodom accepted French 'protection'."], accept: ["protectorate", "a protectorate", "French protectorate"], display: "protectorate", why: "As a protectorate, Cambodia kept its king, but France held the real power." },
  { tier: 2, clues: ["The country that occupied French Indochina during the Second World War (1941–45).", "The Asian power whose wartime occupation showed that European rulers could be pushed aside."], accept: ["Japan", "the Japanese", "Japanese"], display: "Japan", why: "The Japanese occupation weakened French authority — as it weakened British rule in Singapore — and boosted demands for independence." },
  { tier: 2, clues: ["The 1953 achievement of King Sihanouk's campaign against France.", "What Cambodia gained on 9 November 1953."], accept: ["independence", "Cambodian independence", "independence from France", "freedom from France"], display: "independence", why: "France granted independence on 9 November 1953 after Sihanouk's skilful campaign." },
  { tier: 3, clues: ["Sihanouk's political movement, which won every seat in elections while critics were harassed.", "The name of Sihanouk's mass movement in the 1950s and 1960s."], accept: ["Sangkum", "Sangkum Reastr Niyum", "the Sangkum"], display: "the Sangkum", why: "The Sangkum's total dominance meant opposition could not grow through normal politics — so some radicals went underground." },
  { tier: 3, clues: ["The king who built Angkor Wat in the early 12th century.", "The Khmer ruler responsible for building the temple now on Cambodia's flag."], accept: ["Suryavarman II", "Suryavarman", "Suryavarman 2", "Suryavarman the Second"], display: "Suryavarman II", why: "Suryavarman II built Angkor Wat at the height of the Khmer Empire's power." },
  { tier: 3, clues: ["The Thai kingdom that attacked Angkor in 1431.", "The Siamese kingdom whose attack in 1431 led the Khmer capital to move south."], accept: ["Ayutthaya", "Ayudhya", "Ayuthaya", "Siam"], display: "Ayutthaya", why: "After Ayutthaya's attack in 1431, Cambodia slowly shrank between Siam and Vietnam." },
  { tier: 3, clues: ["The Cambodian port through which North Vietnamese supplies also arrived while Sihanouk stayed neutral.", "The port city named after Cambodia's prince, used to bring in supplies for North Vietnamese forces."], accept: ["Sihanoukville", "Kampong Som", "Kompong Som"], display: "Sihanoukville", why: "Sihanouk quietly tolerated North Vietnamese supply lines — part of why neutrality failed." },
];

const PEOPLE: readonly RecallItem[] = [
  { tier: 1, clues: ["Won a scholarship to study in Paris in 1949, where he became a communist; later led the Khmer Rouge.", "Worked as a softly spoken teacher in Phnom Penh while secretly rising to lead the communist party.", "Led Democratic Kampuchea while hiding his face and name behind 'Angkar'."], accept: ["Pol Pot", "Saloth Sar", "Brother Number One"], display: "Pol Pot (Saloth Sar)", why: "Saloth Sar only began using the name Pol Pot publicly in 1976 — most Cambodians did not know who ruled them.", traps: [{ spec: text(["Sihanouk", "Norodom Sihanouk"]), feedback: "Sihanouk lent the Khmer Rouge his popularity, but he did not lead them." }] },
  { tier: 1, clues: ["Overthrown in 1970, he then allied with the communists he had once persecuted, broadcasting appeals from Beijing.", "The prince whose popularity brought thousands of peasants to join the Khmer Rouge resistance after 1970.", "Gave Cambodia's communists the nickname 'Khmer Rouge' ('Red Khmers')."], accept: ["Sihanouk", "Norodom Sihanouk", "Prince Sihanouk", "King Sihanouk"], display: "Norodom Sihanouk", why: "His alliance with the Khmer Rouge 'lent' them his charisma — a key reason for their growth.", traps: [{ spec: text(["Lon Nol"]), feedback: "Lon Nol was the one who overthrew Sihanouk." }] },
  { tier: 1, clues: ["The general and prime minister who removed Sihanouk on 18 March 1970.", "Led the pro-American Khmer Republic (1970–75), which was corrupt and dependent on US aid."], accept: ["Lon Nol", "General Lon Nol"], display: "Lon Nol", why: "Lon Nol's weak, aid-dependent government lost the civil war; he fled on 1 April 1975.", traps: [{ spec: text(["Sihanouk", "Norodom Sihanouk"]), feedback: "Sihanouk was the one overthrown — who overthrew him?" }] },
  { tier: 1, clues: ["The US President who ordered secret bombing of North Vietnamese bases in Cambodia in March 1969.", "The American leader whose secret bombing campaign was hidden even from most of Congress."], accept: ["Nixon", "Richard Nixon", "President Nixon"], display: "Richard Nixon", why: "The bombing (1969–73) destroyed villages and turned many villagers against the US-backed government." },
  { tier: 2, clues: ["The head of S-21 prison, who in 2010 became the first person convicted by the tribunal.", "Kaing Guek Eav's revolutionary alias; he ran the secret prison in a former Phnom Penh high school."], accept: ["Duch", "Comrade Duch", "Kaing Guek Eav", "Kaing Kek Iev"], display: "Duch", why: "Duch was convicted of crimes against humanity in 2010; his sentence became life on appeal in 2012." },
  { tier: 2, clues: ["A painter who survived S-21 because guards made him paint portraits of Pol Pot, then spent his life testifying.", "A survivor whose paintings and testimony helped the world understand what happened at Tuol Sleng."], accept: ["Vann Nath"], why: "Vann Nath's work shows why remembering matters: survivors' voices give victims back their names and dignity." },
  { tier: 2, clues: ["The French priest whose 1977 book popularised the phrase 'Year Zero'.", "An eyewitness to the start of Khmer Rouge rule who wrote *Cambodia: Year Zero* (1977)."], accept: ["Ponchaud", "Francois Ponchaud", "François Ponchaud"], display: "François Ponchaud", why: "His book was one of the first to tell the world what was happening inside sealed-off Cambodia." },
  { tier: 3, clues: ["Known as 'Brother Number Two'; convicted of genocide by the tribunal in 2018 and died the following year.", "The Khmer Rouge's chief ideologist, second only to Pol Pot, convicted in 2014 and 2018."], accept: ["Nuon Chea"], why: "Nuon Chea was convicted of crimes against humanity (2014) and genocide (2018).", traps: [{ spec: text(["Khieu Samphan"]), feedback: "Khieu Samphan was the regime's head of state; 'Brother Number Two' was another leader." }] },
  { tier: 3, clues: ["Head of state of Democratic Kampuchea, convicted of genocide in 2018.", "The Khmer Rouge's public face as head of state, convicted alongside Nuon Chea."], accept: ["Khieu Samphan", "Khieu Samphân"], display: "Khieu Samphan", why: "Khieu Samphan was convicted of crimes against humanity (2014) and genocide (2018).", traps: [{ spec: text(["Nuon Chea"]), feedback: "Nuon Chea was 'Brother Number Two', the chief ideologist — who was head of state?" }] },
  { tier: 3, clues: ["The journalist whose book *Sideshow* (1979) argued that US bombing drove villagers into the Khmer Rouge.", "Author of *Sideshow*, a 1979 book on the US war in Cambodia."], accept: ["Shawcross", "William Shawcross"], display: "William Shawcross", why: "Historians still debate how much weight to give the bombing compared with Sihanouk's alliance and Khmer Rouge discipline." },
  { tier: 3, clues: ["The king who handed the throne to his father in 1955 so he could lead politics directly as a prince.", "The ruler whose movement, the Sangkum, won every seat in elections in the 1950s and 1960s."], accept: ["Sihanouk", "Norodom Sihanouk", "Prince Sihanouk", "King Sihanouk"], display: "Norodom Sihanouk", why: "Sihanouk dominated Cambodian politics from 1953 to 1970 and harassed critics, pushing some radicals underground." },
];

const YEAR_ZERO_TERMS: readonly RecallItem[] = [
  { tier: 1, clues: ["The idea that history would restart from scratch when the Khmer Rouge took power in 1975.", "The phrase, popularised by a 1977 book, for the Khmer Rouge attempt to wipe out the past."], accept: ["Year Zero", "Year 0"], display: "Year Zero", why: "The Khmer Rouge tried to destroy the old society completely — money, schools, religion and family life." },
  { tier: 1, clues: ["'The Organisation' — the faceless name under which the Khmer Rouge ruled.", "The name people were told to obey, which hid the real leaders from ordinary Cambodians."], accept: ["Angkar", "Angka", "the Angkar", "Angkar Padevat", "Angkar Loeu"], display: "Angkar", why: "You cannot argue with, or blame, a ruler you cannot see — secrecy was a deliberate tool." },
  { tier: 1, clues: ["The name for city dwellers forced into the countryside after 17 April 1975, treated with most suspicion.", "Evacuees from the towns, given the lowest rations and harshest work."], accept: ["new people", "new person", "April 17 people", "17 April people"], display: "'new people'", why: "'New people' were seen as tainted by city life and foreign ideas.", traps: [{ spec: text(["base people", "old people"]), feedback: "'Base people' were villagers already under Khmer Rouge control — the evacuees were the opposite group." }] },
  { tier: 1, clues: ["Villagers already living in Khmer Rouge areas before 1975, seen as more loyal and 'pure'.", "The group treated somewhat better than city evacuees, because they had lived under the Khmer Rouge before 1975."], accept: ["base people", "old people", "base person"], display: "'base people'", why: "'Base people' were trusted more than 'new people' — though many of them also suffered.", traps: [{ spec: text(["new people", "new person"]), feedback: "'New people' were the city evacuees — this group had been in Khmer Rouge areas before 1975." }] },
  { tier: 1, clues: ["The official name of the Khmer Rouge state from 1976.", "The name of Cambodia under the Khmer Rouge, 1975–79, which used the word 'democratic' despite banning elections."], accept: ["Democratic Kampuchea", "Kampuchea", "DK"], display: "Democratic Kampuchea", why: "Regimes often call themselves 'democratic' to claim legitimacy they do not have." },
  { tier: 1, clues: ["What the Khmer Rouge abolished when they blew up the National Bank building.", "The thing used to buy and sell in markets, abolished in Democratic Kampuchea."], accept: ["money", "currency", "cash", "the riel", "riel"], display: "money", why: "Abolishing money and markets left people with nothing to rely on except Angkar." },
  { tier: 2, clues: ["Rural work units where people laboured on dams, canals and rice fields under Khmer Rouge control.", "State-run farming groups where many families were made to eat in communal kitchens."], accept: ["collectives", "collective", "cooperatives", "co-operatives", "cooperative", "communes", "collective farms"], display: "collectives", why: "Almost everyone was sent to collectives and worked 12 hours a day or more." },
  { tier: 2, clues: ["The 1976 plan demanding about 3 tonnes of rice per hectare — roughly three times normal yields.", "The Khmer Rouge economic plan whose impossible rice quotas led to famine."], accept: ["Four-Year Plan", "four year plan", "4 year plan", "4-year plan"], display: "the Four-Year Plan", why: "When the impossible quotas failed, leaders blamed hidden 'enemies' instead of the plan." },
  { tier: 2, clues: ["The Khmer Rouge belief that Cambodia must need nothing from any other country.", "The ideal of doing everything alone — no foreign trade, aid or help."], accept: ["self-reliance", "self reliance", "self-reliant", "self-sufficiency", "self sufficiency", "autarky"], display: "self-reliance", why: "Self-reliance led the regime to seal the borders and cut Cambodia off from the world." },
  { tier: 2, clues: ["The official name, from 1966, of the party known by Sihanouk's nickname, the Khmer Rouge.", "The party that ruled Cambodia in secret and did not admit it existed until 1977."], accept: ["Communist Party of Kampuchea", "CPK", "Kampuchean Communist Party", "Communist Party"], display: "the Communist Party of Kampuchea", why: "The party's secrecy hid its communist ideas from villagers who had joined for Sihanouk." },
  { tier: 2, clues: ["The forced emptying of Phnom Penh and other towns within days of 17 April 1975.", "What happened to Phnom Penh's population, told they must leave for 'three days'."], accept: ["evacuation", "the evacuation", "evacuation of the cities", "evacuated", "emptying the cities", "forced evacuation"], display: "evacuation", why: "Perhaps 2 million people were forced out of Phnom Penh; most families never saw their homes again." },
  { tier: 3, clues: ["The Khmer Rouge ideology: an extreme communism that saw poor peasants as 'pure' and cities as corrupt.", "The name for communism built on peasants and farming rather than factory workers."], accept: ["agrarian communism", "agrarian socialism", "peasant communism", "rural communism", "agrarianism"], display: "agrarian communism", why: "Agrarian means 'to do with farming' — the Khmer Rouge wanted everyone to be an equal rice farmer." },
  { tier: 3, clues: ["The French priest François Ponchaud's 1977 book title, which gave a name to the Khmer Rouge experiment.", "The two-word phrase in the title of the book *Cambodia: …* (1977)."], accept: ["Year Zero", "Year 0"], display: "Year Zero", why: "Ponchaud's *Cambodia: Year Zero* made the phrase famous." },
  { tier: 3, clues: ["The Khmer Rouge practice of turning on their own members, accusing them of plotting, in waves from 1976 onwards.", "Removing suspected 'enemies' from inside the party itself."], accept: ["purges", "purge", "party purges", "purging"], display: "purges", why: "Purges drove some Khmer Rouge officers to flee to Vietnam — and some later helped Vietnam's invasion." },
  { tier: 3, clues: ["The Khmer Rouge policy towards Cambodia's borders, embassies, post and foreign news.", "Sealing a country off so that almost no news enters or leaves."], accept: ["isolation", "isolationism", "sealed borders", "closing the borders", "closed borders"], display: "isolation", why: "Isolation meant the outside world knew little of what was happening inside Cambodia." },
];

const JUSTICE: readonly RecallItem[] = [
  { tier: 1, clues: ["The country whose army invaded in December 1978 and ended Khmer Rouge rule.", "The neighbour that captured Phnom Penh on 7 January 1979."], accept: ["Vietnam", "Vietnamese", "the Vietnamese army", "Viet Nam"], display: "Vietnam", why: "Khmer Rouge raids across the border provoked the invasion; Vietnam was allied to the Soviet Union.", traps: [{ spec: text(["China", "the Chinese"]), feedback: "China was the Khmer Rouge's ally — it was their enemy next door that invaded." }, { spec: text(["USA", "United States", "America", "US"]), feedback: "The USA bombed Cambodia in 1969–73, but it did not invade in 1978." }] },
  { tier: 1, clues: ["The Khmer Rouge leader who died in April 1998 without ever facing a court.", "The man who was put under house arrest by his own comrades in 1997 and died the next year, never tried."], accept: ["Pol Pot", "Saloth Sar", "Brother Number One"], display: "Pol Pot", why: "Pol Pot's death without trial is one reason many say justice came too late." },
  { tier: 1, clues: ["The head of S-21 prison and the first person convicted by the tribunal, in 2010.", "The former maths teacher who ran S-21; his conviction in 2010 was the tribunal's first verdict."], accept: ["Duch", "Comrade Duch", "Kaing Guek Eav", "Kaing Kek Iev"], display: "Duch", why: "Duch's trial used S-21's own records as evidence; he was given life imprisonment on appeal in 2012." },
  { tier: 1, clues: ["The former Phnom Penh high school (prison S-21) that became a genocide museum in 1980.", "The genocide museum that keeps the S-21 archive of photographs and records."], accept: ["Tuol Sleng", "Toul Sleng", "Tuol Sleng Genocide Museum"], display: "Tuol Sleng", why: "Tuol Sleng is now a place of memory and evidence, visited by people from around the world." },
  { tier: 2, clues: ["Either of the two senior Khmer Rouge leaders convicted of genocide in 2018 (give one name).", "One of the two leaders convicted of crimes against humanity in 2014 and of genocide in 2018 (give one name)."], accept: ["Nuon Chea", "Khieu Samphan", "Khieu Samphân"], display: "Nuon Chea or Khieu Samphan", why: "Nuon Chea ('Brother Number Two') and Khieu Samphan (head of state) were the most senior surviving leaders." },
  { tier: 2, clues: ["The UN-backed tribunal with Cambodian and international judges, which began work in 2006.", "The court, known by four letters, that tried surviving Khmer Rouge leaders."], accept: ["ECCC", "Extraordinary Chambers in the Courts of Cambodia", "Extraordinary Chambers", "Khmer Rouge Tribunal", "the tribunal", "Cambodia Tribunal"], display: "the ECCC (Extraordinary Chambers in the Courts of Cambodia)", why: "It convicted three people — critics say too few, too late; supporters say it established the truth in law." },
  { tier: 2, clues: ["The international organisation in which the Khmer Rouge kept Cambodia's seat through the 1980s.", "Despite losing power in 1979, the Khmer Rouge government was still recognised in this body in New York."], accept: ["United Nations", "UN", "the UN", "U.N."], display: "the United Nations", why: "Cold War politics: many governments refused to reward Vietnam's invasion by recognising the government it installed." },
  { tier: 2, clues: ["The memorial site outside Phnom Penh where most S-21 prisoners were taken; one of the 'killing fields'.", "The memorial (opened 1988) outside Phnom Penh that is now one of Cambodia's best-known places of remembrance."], accept: ["Choeung Ek", "Cheung Ek", "Choeung Ek Genocidal Center"], display: "Choeung Ek", why: "Choeung Ek is now a memorial, and in 2025 it was added to UNESCO's World Heritage List with Tuol Sleng." },
  { tier: 2, clues: ["The date each year of Cambodia's National Day of Remembrance (give the day and month).", "Day and month when Cambodians remember the victims of the Khmer Rouge each year."], accept: ["20 May", "May 20", "20th May", "May 20th", "20th of May"], display: "20 May", why: "A national day of remembrance keeps the truth alive for generations born after 1979." },
  { tier: 2, clues: ["The Muslim ethnic minority that the tribunal found had suffered genocide by the Khmer Rouge.", "Cambodia's Muslim minority, targeted by the Khmer Rouge for their religion and identity."], accept: ["Cham", "the Cham", "Chams", "Cham Muslims", "Cham people"], display: "the Cham", why: "The 2018 verdict found genocide against the Vietnamese and (for Nuon Chea) the Cham." },
  { tier: 2, clues: ["The country along whose border the Khmer Rouge fought on from jungle bases after 1979.", "The neighbouring country to which hundreds of thousands of Cambodian refugees fled in 1979–80."], accept: ["Thailand", "Thai border", "the Thai border", "Siam"], display: "Thailand", why: "From bases near the Thai border the Khmer Rouge fought a guerrilla war for nearly 20 more years." },
  { tier: 3, clues: ["The government installed by Vietnam in 1979, led by former Khmer Rouge members who had defected.", "The new state created after the Vietnamese capture of Phnom Penh in January 1979."], accept: ["People's Republic of Kampuchea", "Peoples Republic of Kampuchea", "PRK"], display: "the People's Republic of Kampuchea", why: "Many countries refused to recognise it because it depended on Vietnamese troops.", traps: [{ spec: text(["Democratic Kampuchea", "DK"]), feedback: "Democratic Kampuchea was the Khmer Rouge state that was overthrown." }] },
  { tier: 3, clues: ["The 1991 agreements that led to UN-run elections in Cambodia in 1993.", "The peace deal, signed in a European capital in 1991, that began Cambodia's return to elections."], accept: ["Paris Peace Agreements", "Paris Peace Accords", "Paris Agreements", "Paris Accords", "Paris Peace Agreement"], display: "the Paris Peace Agreements", why: "The Khmer Rouge boycotted the 1993 elections, and the movement collapsed through defections later in the 1990s." },
  { tier: 3, clues: ["The global rivalry that explains why China, the USA and ASEAN opposed the Vietnamese-installed government in the 1980s.", "The superpower rivalry in which Vietnam was allied to the Soviet Union."], accept: ["Cold War", "the Cold War"], display: "the Cold War", why: "Strategic interests overrode justice for victims — a choice historians and Cambodians still debate." },
  { tier: 3, clues: ["The name for the thousands of survivors who took part in the tribunal's trials as official participants.", "Survivors who joined the trials formally so their voices were heard in court."], accept: ["civil parties", "civil party", "civil party applicants"], display: "civil parties", why: "Taking part as civil parties meant victims were recognised officially, not just as witnesses." },
  { tier: 3, clues: ["The legal term the tribunal used for killing people for political or class reasons, which the genocide definition does not cover.", "Duch's 2010 conviction was for these crimes, not genocide."], accept: ["crimes against humanity", "crime against humanity"], display: "crimes against humanity", why: "Genocide in law means intent to destroy a national, ethnic, racial or religious group; other mass killing is crimes against humanity." },
  { tier: 3, clues: ["The 1948 UN agreement that defines genocide in international law.", "The international treaty of 1948 the tribunal used to decide whether the Khmer Rouge committed genocide."], accept: ["Genocide Convention", "UN Genocide Convention", "Convention on the Prevention and Punishment of the Crime of Genocide"], display: "the Genocide Convention", why: "It defines genocide as acts intended to destroy a national, ethnic, racial or religious group." },
];

// ---------------------------------------------------------------------------
// Primary or secondary?
// ---------------------------------------------------------------------------
interface SourceItem { tier: Tier; desc: string; primary: boolean; why: string }
const SOURCES: readonly SourceItem[] = [
  { tier: 1, desc: "photographs and prisoner records made by guards at S-21 prison in 1977", primary: true, why: "They were made at the time, by the regime itself." },
  { tier: 1, desc: "an interview in which a survivor describes their own life in a rural work collective in 1977", primary: true, why: "It is an eyewitness account — even though recorded later, it comes from someone who lived through the events." },
  { tier: 1, desc: "a photograph taken by a journalist in Phnom Penh on 17 April 1975", primary: true, why: "It was made at the time, by someone who was there." },
  { tier: 1, desc: "a history textbook chapter about the Khmer Rouge, written in 2020", primary: false, why: "It was written long afterwards by someone using other sources." },
  { tier: 1, desc: "a documentary about the Khmer Rouge made in 2015 by a film-maker born after 1979", primary: false, why: "It was made later, by someone who did not witness the events, interpreting other sources." },
  { tier: 1, desc: "a Year 8 student's essay explaining why the Khmer Rouge came to power", primary: false, why: "It was written long afterwards and is based on other sources." },
  { tier: 1, desc: "a letter written by a Cambodian refugee in a camp on the Thai border in 1979", primary: true, why: "It was written at the time by someone who lived through the events." },
  { tier: 1, desc: "a museum information board written for visitors to Tuol Sleng in 2015", primary: false, why: "It was written later to explain the past, using other evidence." },
  { tier: 2, desc: "a copy of the Khmer Rouge Four-Year Plan, written by party leaders in 1976", primary: true, why: "It is a document produced by the regime at the time." },
  { tier: 2, desc: "a Khmer Rouge radio broadcast made in April 1975", primary: true, why: "It was produced at the time by the people being studied." },
  { tier: 2, desc: "a historian's book analysing the Khmer Rouge regime, published in 1996", primary: false, why: "It is a later interpretation built from many primary sources." },
  { tier: 2, desc: "an encyclopedia article on the Cambodian genocide, written in 2018", primary: false, why: "It summarises the past from other sources, long afterwards." },
  { tier: 2, desc: "a recording of one of Sihanouk's 1970 radio appeals from Beijing urging villagers to join the resistance", primary: true, why: "It was made at the time by a key person in the events." },
  { tier: 2, desc: "a website article written in 2019 summarising the tribunal's verdicts", primary: false, why: "It was written afterwards to explain events, using other sources." },
  { tier: 3, desc: "a painting by Vann Nath showing life inside S-21, based on what he himself lived through", primary: true, why: "Although painted after 1979, it comes from an eyewitness who survived S-21 — historians treat it as primary evidence of his experience." },
  { tier: 3, desc: "US military records of bombing missions over Cambodia from 1970", primary: true, why: "They were created at the time by the people carrying out the bombing." },
  { tier: 3, desc: "a historian's graph, made in the 2000s, estimating Cambodia's population changes using later population studies", primary: false, why: "It is a later analysis built from other evidence — useful, but secondary." },
  { tier: 3, desc: "a podcast episode recorded in 2021 in which a historian explains the secret US bombing", primary: false, why: "It is a later explanation by someone who was not there." },
  { tier: 3, desc: "a diary kept in secret by a 'new person' in a rural collective in 1976", primary: true, why: "It was written at the time by someone experiencing the events." },
];

const PRIMARY = ["primary", "primary source", "a primary source", "p"];
const SECONDARY = ["secondary", "secondary source", "a secondary source", "s"];

// ---------------------------------------------------------------------------
// Crisis, weak government or leadership?
// ---------------------------------------------------------------------------
type Factor = "crisis" | "weak" | "lead";
const FACTOR_ACCEPT: Record<Factor, string[]> = {
  crisis: ["crisis", "crises", "a crisis"],
  weak: ["weak government", "weakness of government", "weak govt", "weak gov", "government weakness", "weak"],
  lead: ["leadership", "leader", "leaders", "charismatic leadership", "charisma", "ideological leadership"],
};
const FACTOR_NAME: Record<Factor, string> = { crisis: "crisis", weak: "weak government", lead: "leadership" };

interface FactorItem { tier: Tier; who: "Hitler" | "Mao" | "Pol Pot"; desc: string; f: Factor; why: string }
const FACTORS: readonly FactorItem[] = [
  { tier: 1, who: "Pol Pot", desc: "US bombing of Cambodia (1969–73) destroyed villages and created hundreds of thousands of refugees.", f: "crisis", why: "The bombing was an emergency imposed from outside — it created anger and upheaval the Khmer Rouge could use to recruit." },
  { tier: 1, who: "Pol Pot", desc: "The Vietnam War spilled over the border as North Vietnamese supply routes ran through eastern Cambodia.", f: "crisis", why: "A neighbouring war dragged Cambodia into violence it could not control — a crisis made largely outside Cambodia." },
  { tier: 1, who: "Pol Pot", desc: "Lon Nol's Khmer Republic depended on US aid, and some officers claimed pay for soldiers who did not exist.", f: "weak", why: "Corruption and dependence on foreign money show a government unable to defend itself or win trust." },
  { tier: 1, who: "Pol Pot", desc: "A secretive, disciplined party ruled through 'Angkar', with leaders using code names and an extreme ideology.", f: "lead", why: "This is leadership as organisation and ideology rather than public charisma — Pol Pot stayed hidden." },
  { tier: 1, who: "Pol Pot", desc: "Sihanouk's radio appeals from Beijing persuaded thousands of peasants to join the resistance.", f: "lead", why: "The Khmer Rouge 'borrowed' Sihanouk's charisma — leadership, though not their own leader's." },
  { tier: 1, who: "Pol Pot", desc: "Civil war raged across Cambodia from 1970 to 1975.", f: "crisis", why: "War brought fear, loss and disruption — the conditions in which extreme answers gain support." },
  { tier: 2, who: "Hitler", desc: "The Great Depression left around 6 million Germans unemployed by 1932.", f: "crisis", why: "Mass unemployment made people desperate and willing to vote for extreme parties." },
  { tier: 2, who: "Hitler", desc: "Weimar governments relied on unstable coalitions and rule by emergency decree under Article 48.", f: "weak", why: "When parliament could not govern, democracy's authority drained away." },
  { tier: 2, who: "Hitler", desc: "Powerful speeches, mass rallies, radio and propaganda won millions of votes.", f: "lead", why: "This is charismatic leadership in its classic, public form." },
  { tier: 2, who: "Mao", desc: "Japan invaded China in 1937 and occupied large areas until 1945.", f: "crisis", why: "Invasion and war shattered normal life and weakened the existing government." },
  { tier: 2, who: "Mao", desc: "Chiang Kai-shek's Nationalist (GMD) government was seen as corrupt and losing control.", f: "weak", why: "A government that loses people's trust cannot solve a crisis — so rivals gain ground." },
  { tier: 2, who: "Mao", desc: "A heroic image was built through the legend of the Long March (1934–35).", f: "lead", why: "The Long March story made Mao a symbol of determination — leadership through image and ideology." },
  { tier: 2, who: "Pol Pot", desc: "When US bombing stopped in 1973, Lon Nol's army could not defend the countryside, and by early 1975 Phnom Penh was surrounded.", f: "weak", why: "The government could not survive without outside support — a sign of deep weakness." },
  { tier: 3, who: "Hitler", desc: "Hyperinflation in 1923 wiped out many Germans' savings.", f: "crisis", why: "Economic collapse destroyed trust in the Weimar Republic among the middle classes." },
  { tier: 3, who: "Hitler", desc: "Defeat in the First World War in 1918 left many Germans angry and humiliated.", f: "crisis", why: "Defeat was a national shock that extremists exploited for years afterwards." },
  { tier: 3, who: "Mao", desc: "The Communists built a disciplined peasant army in the countryside.", f: "lead", why: "Organisation and ideology turned peasant anger into a winning force — leadership as organisation." },
  { tier: 3, who: "Pol Pot", desc: "Hundreds of thousands of refugees fled the bombing and fighting into Phnom Penh.", f: "crisis", why: "Mass displacement is a sign of crisis — it overwhelmed the capital and spread fear." },
  { tier: 3, who: "Pol Pot", desc: "The Khmer Republic was divided and corrupt, and its army's numbers were inflated on paper.", f: "weak", why: "A government that cannot even count its own soldiers cannot win a war." },
];

// ---------------------------------------------------------------------------
// Hitler, Mao or Pol Pot?
// ---------------------------------------------------------------------------
type Who = "Hitler" | "Mao" | "Pol Pot";
const WHO_ACCEPT: Record<Who, string[]> = {
  Hitler: ["Hitler", "Adolf Hitler"],
  Mao: ["Mao", "Mao Zedong", "Mao Tse-tung", "Mao Tse tung", "Chairman Mao"],
  "Pol Pot": ["Pol Pot", "Saloth Sar"],
};
interface WhoItem { tier: Tier; who: Who; desc: string; why: string }
const WHO_BANK: readonly WhoItem[] = [
  { tier: 1, who: "Hitler", desc: "He was appointed head of government legally in January 1933 — not by a coup or a civil war.", why: "President Hindenburg appointed Hitler Chancellor on 30 January 1933." },
  { tier: 1, who: "Mao", desc: "He proclaimed a new People's Republic in 1949 after winning a civil war.", why: "Mao proclaimed the People's Republic of China on 1 October 1949." },
  { tier: 1, who: "Pol Pot", desc: "His forces captured his country's capital in April 1975 after a five-year civil war.", why: "The Khmer Rouge took Phnom Penh on 17 April 1975." },
  { tier: 1, who: "Pol Pot", desc: "He hid his name and face; people were simply told to obey 'the Organisation'.", why: "Pol Pot ruled through the faceless 'Angkar' — the opposite of a personality cult." },
  { tier: 1, who: "Hitler", desc: "He rose to power during the Great Depression, when around 6 million of his countrymen were unemployed.", why: "Nazi votes rose sharply as the Depression hit Germany." },
  { tier: 1, who: "Mao", desc: "He led the Long March (1934–35), which became a heroic legend.", why: "The Long March story became central to Mao's image." },
  { tier: 2, who: "Pol Pot", desc: "His movement fought a corrupt, US-backed government led by Lon Nol.", why: "Lon Nol's Khmer Republic (1970–75) was the weak government the Khmer Rouge defeated." },
  { tier: 2, who: "Mao", desc: "His enemy was Chiang Kai-shek's Nationalist (GMD) government.", why: "Mao's Communists defeated Chiang's Nationalists in the civil war." },
  { tier: 2, who: "Hitler", desc: "He benefited when governments ruled by emergency decree under Article 48.", why: "Article 48 belonged to the Weimar constitution in Germany." },
  { tier: 2, who: "Hitler", desc: "He used mass rallies, radio and propaganda to win votes in elections.", why: "Of the three, only Hitler's party won power through elections and an appointment." },
  { tier: 2, who: "Mao", desc: "He built a peasant army during the Japanese invasion of his country (1937–45).", why: "Japan's invasion of China created the crisis in which Mao's Communists grew." },
  { tier: 2, who: "Pol Pot", desc: "His movement borrowed the popularity of an overthrown prince.", why: "Sihanouk's alliance with the Khmer Rouge after 1970 brought them peasant recruits." },
  { tier: 2, who: "Pol Pot", desc: "He studied in Paris, became a communist there, and later worked as a teacher.", why: "Saloth Sar studied in Paris from 1949 and taught in Phnom Penh after 1953." },
  { tier: 3, who: "Hitler", desc: "He tried to seize power in a failed putsch in Munich in 1923, then switched to winning elections.", why: "After the Munich Putsch failed, Hitler decided to win power legally." },
  { tier: 3, who: "Hitler", desc: "His party became the largest in parliament in July 1932, though it never won a majority in a free election.", why: "The Nazis became the largest party in the Reichstag in July 1932." },
  { tier: 3, who: "Mao", desc: "After taking power he built a vast cult of personality, and his Great Leap Forward caused a terrible famine.", why: "Mao's cult and the Great Leap Forward (from 1958) came after 1949." },
  { tier: 3, who: "Pol Pot", desc: "His ruling party did not publicly admit it existed until September 1977, over two years after taking power.", why: "The Communist Party of Kampuchea kept itself secret behind 'Angkar'." },
  { tier: 3, who: "Pol Pot", desc: "He rose amid a neighbouring war and a foreign bombing campaign (1969–73).", why: "The Vietnam War and US bombing were the crises behind the Khmer Rouge rise." },
  { tier: 3, who: "Mao", desc: "His party was founded in 1921 and was nearly destroyed by its rivals in 1927 before rebuilding in the countryside.", why: "The Chinese Communist Party was founded in 1921; after 1927 Mao turned to the peasants." },
];

// ---------------------------------------------------------------------------
// The drills
// ---------------------------------------------------------------------------
export const drills: Drill[] = [
  {
    id: "pol-pot.cambodia-before-1970",
    topicId: "pol-pot",
    title: "Cambodia before 1970: name it",
    level: 1,
    guideRef: "cambodia-before",
    generate(rng, tier) {
      return recall(
        rng,
        tier,
        BEFORE_1970,
        [
          (c) => `Name the person, place or thing: ${c}`,
          (c) => `Cambodia before the Khmer Rouge. ${c} What is it?`,
          (c) => `Who or what is described here? ${c}`,
        ],
        "Think about the three periods: the Khmer Empire, French rule (1863–1953) and Sihanouk's independent kingdom.",
      );
    },
  },
  {
    id: "pol-pot.key-dates",
    topicId: "pol-pot",
    title: "Match the date to the event",
    level: 1,
    guideRef: "war-spills-over",
    generate(rng, tier) {
      const e = rng.pick(poolFor(EVENTS, tier));
      const tpl = rng.int(0, 2);
      const prompt =
        tpl === 0 ? `In which year ${e.q}?` : tpl === 1 ? `**${e.label}** — in which year did this happen?` : `Put a year on it: **${e.label}**.`;
      const traps: Trap[] = [];
      if (e.y === 1975) traps.push({ spec: { type: "number", value: 1979 }, feedback: "1979 is when Vietnam captured Phnom Penh and ended Khmer Rouge rule — the Khmer Rouge took it four years earlier." });
      if (e.y === 1979) traps.push({ spec: { type: "number", value: 1975 }, feedback: "1975 is when the Khmer Rouge captured Phnom Penh — Vietnam drove them out later." });
      if (e.y === 1978) traps.push({ spec: { type: "number", value: 1979 }, feedback: "Phnom Penh fell in January 1979, but the invasion began on 25 December of the year before." });
      if (e.y === 1969) traps.push({ spec: { type: "number", value: 1973 }, feedback: "1973 is when the bombing ended — it began four years earlier." });
      if (e.y === 1973) traps.push({ spec: { type: "number", value: 1969 }, feedback: "1969 is when the bombing began — when did Congress stop it?" });
      return {
        prompt,
        answer: { type: "number", value: e.y },
        solution: [yearSolution(e)],
        hint: "Anchor it to the big four: independence 1953, coup 1970, Khmer Rouge take Phnom Penh 1975, Vietnam takes Phnom Penh 1979.",
        traps: traps.length ? traps : undefined,
      };
    },
  },
  {
    id: "pol-pot.who-did-this",
    topicId: "pol-pot",
    title: "Who did this?",
    level: 1,
    guideRef: "rise-of-khmer-rouge",
    generate(rng, tier) {
      return recall(
        rng,
        tier,
        PEOPLE,
        [(c) => `Who did this? ${c}`, (c) => `Name the person: ${c}`, (c) => `Who am I? ${c}`],
        "Sort the cast: the prince (Sihanouk), the general (Lon Nol), the hidden leader (Saloth Sar) — then the outsiders and the witnesses.",
      );
    },
  },
  {
    id: "pol-pot.which-came-first",
    topicId: "pol-pot",
    title: "Which came first?",
    level: 2,
    guideRef: "rise-of-khmer-rouge",
    generate(rng, tier) {
      const pool = poolFor(EVENTS, tier);
      let a = pool[0], b = pool[1];
      for (let i = 0; i < 60; i++) {
        a = rng.pick(pool);
        b = rng.pick(pool);
        const gap = Math.abs(a.y - b.y);
        if (a.y === b.y) continue;
        // Tier 3 pairs are close together; tier 1 pairs can be far apart.
        if (tier === 3 && gap > 8) continue;
        break;
      }
      if (a.y === b.y) b = pool.find((e) => e.y !== a.y) ?? b;
      const [first, second] = a.y < b.y ? [a, b] : [b, a];
      return {
        prompt: `Which came first: **${a.label}** or **${b.label}**? Type the earlier event.`,
        answer: text([first.label, ...first.accept], first.label),
        solution: [`**${first.label}** came first (${first.y}); **${second.label}** was in ${second.y}.`, first.note],
        hint: "Place each one in its period: French rule, Sihanouk, the war years (1969–75), Khmer Rouge rule (1975–79), or the long aftermath.",
        traps: [{ spec: text([second.label, ...second.accept], second.label), feedback: `That one came later, in ${second.y}.` }],
      };
    },
  },
  {
    id: "pol-pot.year-zero-terms",
    topicId: "pol-pot",
    title: "Year Zero: key term from its definition",
    level: 2,
    guideRef: "year-zero",
    generate(rng, tier) {
      return recall(
        rng,
        tier,
        YEAR_ZERO_TERMS,
        [(c) => `Key term from its definition: ${c}`, (c) => `What is the term? ${c}`, (c) => `Democratic Kampuchea, 1975–79. ${c} Name the term.`],
        "Think about what the Khmer Rouge wanted to destroy — and what they wanted to put in its place.",
      );
    },
  },
  {
    id: "pol-pot.primary-or-secondary",
    topicId: "pol-pot",
    title: "Primary or secondary?",
    level: 2,
    guideRef: "the-genocide",
    generate(rng, tier) {
      const s = rng.pick(poolFor(SOURCES, tier));
      const tpl = rng.int(0, 2);
      const prompt =
        tpl === 0
          ? `A historian is studying the Khmer Rouge. Is this a primary or a secondary source: ${s.desc}? Answer *primary* or *secondary*.`
          : tpl === 1
            ? `Primary or secondary? **Source:** ${s.desc}. Answer *primary* or *secondary*.`
            : `Classify the evidence for a study of Cambodia under the Khmer Rouge — ${s.desc}. Answer *primary* or *secondary*.`;
      const right = s.primary ? PRIMARY : SECONDARY;
      const wrong = s.primary ? SECONDARY : PRIMARY;
      return {
        prompt,
        answer: text(right, s.primary ? "primary" : "secondary"),
        solution: [
          `**${s.primary ? "Primary" : "Secondary"}.** ${s.why}`,
          "Remember: primary does not mean reliable, and secondary does not mean useless — historians cross-reference both.",
        ],
        hint: "Ask: was it made at the time, or by someone who lived through it? Or was it made later, by someone using other sources?",
        traps: [
          {
            spec: text(wrong, s.primary ? "secondary" : "primary"),
            feedback: s.primary ? "Check who made it: an eyewitness or the regime itself makes it primary, even if it was recorded later." : "It's about the period, but it was made later by someone using other sources — so it is secondary.",
          },
        ],
      };
    },
  },
  {
    id: "pol-pot.justice-and-memory",
    topicId: "pol-pot",
    title: "Downfall, justice and memory: name it",
    level: 2,
    guideRef: "fall-and-justice",
    generate(rng, tier) {
      return recall(
        rng,
        tier,
        JUSTICE,
        [(c) => `Name it: ${c}`, (c) => `After 1979. ${c} Who or what?`, (c) => `Justice and memory: ${c}`],
        "Think about three strands: how the regime fell (1978–79), why justice was slow (the Cold War), and how Cambodia remembers.",
      );
    },
  },
  {
    id: "pol-pot.years-between",
    topicId: "pol-pot",
    title: "How many years between?",
    level: 3,
    guideRef: "fall-and-justice",
    generate(rng, tier) {
      const pool = poolFor(EVENTS, tier).filter((e) => e.y > 1800);
      let a = pool[0], b = pool[1];
      for (let i = 0; i < 60; i++) {
        a = rng.pick(pool);
        b = rng.pick(pool);
        if (a.y !== b.y) break;
      }
      if (a.y === b.y) b = pool.find((e) => e.y !== a.y) ?? b;
      const [first, second] = a.y < b.y ? [a, b] : [b, a];
      const gap = second.y - first.y;
      const tpl = rng.int(0, 1);
      const prompt =
        tpl === 0
          ? `Event 1: **${first.label}**. Event 2: **${second.label}**. How many years apart were they? (Recall both years, then subtract.)`
          : `Work out the gap in years between **${first.label}** and **${second.label}**. (Recall both years, then subtract.)`;
      return {
        prompt,
        answer: { type: "number", value: gap },
        solution: [`${first.label}: **${first.y}**. ${second.label}: **${second.y}**.`, `${second.y} − ${first.y} = **${gap}** years.`],
        hint: "Pin each event to its year first — the subtraction is the easy part.",
        traps: [
          { spec: { type: "number", value: second.y }, feedback: "That's the year of the later event — now subtract the earlier year." },
          { spec: { type: "number", value: first.y }, feedback: "That's the year of the earlier event — find the later year and subtract." },
        ],
      };
    },
  },
  {
    id: "pol-pot.crisis-weakness-leadership",
    topicId: "pol-pot",
    title: "Crisis, weak government or leadership?",
    level: 3,
    guideRef: "comparing-dictators",
    generate(rng, tier) {
      const it = rng.pick(poolFor(FACTORS, tier));
      const tpl = rng.int(0, 2);
      const prompt =
        tpl === 0
          ? `How did ${it.who} come to power? Classify this factor: ${it.desc} Answer *crisis*, *weak government* or *leadership*.`
          : tpl === 1
            ? `Enquiry factors (${it.who}): ${it.desc} Is this mainly a crisis, weak government or leadership factor?`
            : `Term 2 enquiry — the rise of ${it.who}. Which ingredient does this show: *crisis*, *weak government* or *leadership*? ${it.desc}`;
      const others = (["crisis", "weak", "lead"] as Factor[]).filter((f) => f !== it.f);
      return {
        prompt,
        answer: text(FACTOR_ACCEPT[it.f], FACTOR_NAME[it.f]),
        solution: [
          `**${cap(FACTOR_NAME[it.f])}.** ${it.why}`,
          "Factors link: crisis exposes a weak government, and determined leadership exploits both.",
        ],
        hint: "Crisis = an emergency hitting the country; weak government = the rulers failing to cope; leadership = what the rising dictator and his party did.",
        traps: others.map((f) => ({
          spec: text(FACTOR_ACCEPT[f], FACTOR_NAME[f]),
          feedback:
            f === "lead"
              ? "Leadership is about what the rising movement and its leaders did — is this about them?"
              : f === "weak"
                ? "Weak government is about the existing rulers failing to cope — is this about them?"
                : "A crisis is an emergency hitting the whole country, such as war or economic collapse — is that what this is?",
        })),
      };
    },
  },
  {
    id: "pol-pot.hitler-mao-or-pol-pot",
    topicId: "pol-pot",
    title: "Hitler, Mao or Pol Pot?",
    level: 3,
    guideRef: "comparing-dictators",
    generate(rng, tier) {
      const it = rng.pick(poolFor(WHO_BANK, tier));
      const tpl = rng.int(0, 2);
      const prompt =
        tpl === 0
          ? `Hitler, Mao or Pol Pot? ${it.desc}`
          : tpl === 1
            ? `Which dictator does this describe — Hitler, Mao or Pol Pot? ${it.desc}`
            : `Compare the three dictators. ${it.desc} Who is it: Hitler, Mao or Pol Pot?`;
      const others = (["Hitler", "Mao", "Pol Pot"] as Who[]).filter((w) => w !== it.who);
      return {
        prompt,
        answer: text(WHO_ACCEPT[it.who], it.who),
        solution: [`**${it.who}.** ${it.why}`, "Similar circumstances — crisis and weak government — produced dictators who rose in very different ways."],
        hint: "Route to power: Hitler was appointed (1933); Mao (1949) and Pol Pot (1975) won civil wars. Style: Hitler and Mao were public figures; Pol Pot hid.",
        traps: others.map((w) => ({
          spec: text(WHO_ACCEPT[w], w),
          feedback:
            w === "Hitler"
              ? "Hitler rose in Germany through elections and an appointment in 1933 — does that fit?"
              : w === "Mao"
                ? "Mao rose in China and won a civil war in 1949 — does that fit?"
                : "Pol Pot rose in Cambodia, won a civil war in 1975 and stayed hidden — does that fit?",
        })),
      };
    },
  },
];
