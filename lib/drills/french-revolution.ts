// Skill drills for "The French Revolution" (Term 3 — How and why has democracy developed?).
// Bank-based: every fact here matches lib/topics/french-revolution/guide.ts.
import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { checkAnswer } from "../answerCheck.ts";

const T = "french-revolution";

type Tier = 1 | 2 | 3;

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function textSpec(accept: string[], display?: string) {
  return { type: "text" as const, accept, display: display ?? accept[0] };
}

/** True if any alias of `a` would be marked correct against `b`'s aliases (or vice versa). */
function crossAccepted(a: string[], b: string[]): boolean {
  const sa = textSpec(a), sb = textSpec(b);
  return a.some((x) => checkAnswer(sb, x).status === "correct") || b.some((x) => checkAnswer(sa, x).status === "correct");
}

// ---------------------------------------------------------------------------
// Shared dated bank (years only — every date is in the guide).
// ---------------------------------------------------------------------------
interface Dated {
  year: number;
  /** Short noun-phrase label, used in "which came first?". */
  label: string;
  /** Accepted ways of naming it. */
  aliases: string[];
  /** Completes "In which year …?" */
  q: string;
  /** Completes "Give the year: …" */
  stmt: string;
  tier: Tier;
  why: string;
  trap?: { year: number; feedback: string };
}

const DATED: Dated[] = [
  { year: 1614, label: "the Estates-General's last meeting before the Revolution", aliases: ["Estates-General last met", "last Estates-General", "1614 Estates-General"], q: "did the Estates-General last meet before it was summoned in 1789", stmt: "the Estates-General meets for the last time before 1789", tier: 2, why: "It had not met for 175 years — a sign of how absolute royal power had become." },
  { year: 1748, label: "Montesquieu's *The Spirit of the Laws*", aliases: ["The Spirit of the Laws", "Spirit of the Laws", "Montesquieu", "Montesquieu's book"], q: "did Montesquieu publish *The Spirit of the Laws*", stmt: "Montesquieu publishes *The Spirit of the Laws*", tier: 3, why: "It argued for the separation of powers — a long-term cause, decades before 1789." },
  { year: 1762, label: "Rousseau's *The Social Contract*", aliases: ["The Social Contract", "Social Contract", "Rousseau", "Rousseau's book"], q: "did Rousseau publish *The Social Contract*", stmt: "Rousseau publishes *The Social Contract*", tier: 3, why: "Its idea of the general will was a long-term cause of the Revolution." },
  { year: 1770, label: "Louis's marriage to Marie Antoinette", aliases: ["Louis married Marie Antoinette", "the royal marriage", "marriage of Louis and Marie Antoinette", "Louis's marriage", "royal wedding"], q: "did the future Louis XVI marry Marie Antoinette", stmt: "the future Louis XVI marries Marie Antoinette", tier: 3, why: "She came from Austria — which later made her look like the enemy's ally when France fought Austria." },
  { year: 1774, label: "Louis XVI becoming king", aliases: ["Louis XVI becomes king", "Louis XVI became king", "Louis became king", "Louis XVI crowned", "accession of Louis XVI"], q: "did Louis XVI become king of France", stmt: "Louis XVI becomes king of France", tier: 2, why: "He inherited a system of absolute monarchy and growing debt." },
  { year: 1778, label: "France joining the American War of Independence", aliases: ["France joins the American War", "France joined the American War of Independence", "American War of Independence", "American War", "helping the Americans", "France helps the Americans"], q: "did France join the American War of Independence against Britain", stmt: "France joins the American War of Independence", tier: 3, why: "French involvement (1778–83) cost a fortune and spread ideas about rights." },
  { year: 1786, label: "Calonne's plan for a land tax on everyone", aliases: ["Calonne's land tax", "Calonne's plan", "Calonne proposes a land tax", "Calonne's reforms", "Calonne"], q: "did finance minister Calonne propose a land tax that everyone would pay", stmt: "Calonne proposes a land tax that everyone would pay", tier: 3, why: "The privileged refused it — a short-term cause of the crisis." },
  { year: 1787, label: "the Assembly of Notables refusing reform", aliases: ["Assembly of Notables", "the Assembly of Notables refuses reform", "Notables refuse reform", "Assembly of Notables meets"], q: "did the Assembly of Notables refuse to give up the privileged estates' tax exemptions", stmt: "the Assembly of Notables refuses to give up its tax exemptions", tier: 3, why: "Nobles and clergy demanded the Estates-General instead — opening the door to revolution." },
  { year: 1788, label: "Louis agreeing to call the Estates-General", aliases: ["Louis agrees to call the Estates-General", "Estates-General summoned", "calling the Estates-General", "Louis summons the Estates-General", "summoning the Estates-General"], q: "did Louis XVI agree (in August) to summon the Estates-General", stmt: "Louis XVI agrees to summon the Estates-General", tier: 2, why: "Bankrupt and out of options, Louis agreed in August 1788 to call it for May 1789 — the trigger.", trap: { year: 1789, feedback: "It *opened* in May 1789 — but Louis agreed to call it the year before." } },
  { year: 1789, label: "the opening of the Estates-General", aliases: ["Estates-General opens", "opening of the Estates-General", "Estates-General meets", "Estates-General opened", "Estates-General"], q: "did the Estates-General open at Versailles (5 May)", stmt: "the Estates-General opens at Versailles", tier: 1, why: "It opened on 5 May 1789, the first meeting since 1614." },
  { year: 1789, label: "the Tennis Court Oath", aliases: ["Tennis Court Oath", "Oath of the Tennis Court", "tennis court"], q: "did the deputies swear the Tennis Court Oath", stmt: "the Tennis Court Oath is sworn", tier: 1, why: "On 20 June 1789 the deputies swore not to separate until France had a constitution." },
  { year: 1789, label: "the Storming of the Bastille", aliases: ["Storming of the Bastille", "Bastille", "fall of the Bastille", "Bastille stormed", "the Bastille was stormed", "attack on the Bastille"], q: "was the Bastille stormed", stmt: "Parisians storm the Bastille", tier: 1, why: "14 July 1789 — still France's national day." },
  { year: 1789, label: "the Declaration of the Rights of Man", aliases: ["Declaration of the Rights of Man", "Rights of Man", "Declaration of the Rights of Man and of the Citizen", "Declaration of Rights of Man"], q: "was the Declaration of the Rights of Man and of the Citizen issued", stmt: "the Declaration of the Rights of Man and of the Citizen is issued", tier: 1, why: "26 August 1789: liberty, equality before the law and power coming from the nation." },
  { year: 1789, label: "the abolition of feudal privileges", aliases: ["abolition of feudal privileges", "feudal privileges abolished", "abolition of feudalism", "feudalism abolished", "August Decrees", "privileges abolished"], q: "did the National Assembly abolish feudal privileges (4 August)", stmt: "feudal privileges are abolished in a single night session", tier: 2, why: "On 4 August 1789 nobles and clergy gave up tax exemptions, tithes and feudal dues." },
  { year: 1789, label: "the Women's March on Versailles", aliases: ["Women's March on Versailles", "Women's March", "March on Versailles", "October Days", "march to Versailles"], q: "did the Women's March on Versailles bring the royal family to Paris", stmt: "the Women's March on Versailles brings the royal family to Paris", tier: 2, why: "On 5–6 October 1789 Parisian women, angry about bread prices, forced the king to move to Paris." },
  { year: 1791, label: "the Flight to Varennes", aliases: ["Flight to Varennes", "Varennes", "the royal family's flight", "flight of the royal family", "king's flight"], q: "did the royal family try to escape in the Flight to Varennes", stmt: "the royal family flees Paris and is caught at Varennes", tier: 1, why: "June 1791: the failed escape destroyed trust in Louis XVI." },
  { year: 1791, label: "Olympe de Gouges' *Declaration of the Rights of Woman*", aliases: ["Olympe de Gouges' Declaration", "de Gouges' Declaration", "Declaration of the Rights of Woman", "Rights of Woman", "Olympe de Gouges", "de Gouges"], q: "did Olympe de Gouges publish the *Declaration of the Rights of Woman and of the Female Citizen*", stmt: "Olympe de Gouges publishes the *Declaration of the Rights of Woman*", tier: 2, why: "She rewrote the 1789 Declaration clause by clause to expose women's exclusion." },
  { year: 1791, label: "the start of the Saint-Domingue revolt", aliases: ["Saint-Domingue revolt", "Haitian Revolution begins", "revolt in Saint-Domingue", "Saint Domingue revolt", "slave revolt in Saint-Domingue", "Haitian revolt"], q: "did enslaved people in Saint-Domingue begin their great revolt", stmt: "the revolt of enslaved people in Saint-Domingue begins", tier: 2, why: "The revolt began in August 1791 and was later led by Toussaint Louverture." },
  { year: 1791, label: "the Constitution of 1791", aliases: ["Constitution of 1791", "1791 Constitution", "constitutional monarchy", "the constitution"], q: "was the constitution that made France a constitutional monarchy completed", stmt: "France's first written constitution makes it a constitutional monarchy", tier: 2, why: "It kept Louis as king but limited his power, and split men into active and passive citizens." },
  { year: 1792, label: "the start of war with Austria", aliases: ["war with Austria", "war with Austria begins", "France declares war on Austria", "war begins", "Revolutionary Wars begin"], q: "did France declare war on Austria", stmt: "France declares war on Austria", tier: 2, why: "April 1792: war made the king, with his Austrian wife, look like the enemy's ally." },
  { year: 1792, label: "the storming of the Tuileries", aliases: ["storming of the Tuileries", "Tuileries stormed", "Tuileries", "attack on the Tuileries"], q: "did crowds and National Guards storm the Tuileries palace", stmt: "crowds storm the Tuileries palace and the king is suspended", tier: 3, why: "10 August 1792: the monarchy fell weeks later." },
  { year: 1792, label: "France becoming a republic", aliases: ["France becomes a republic", "republic declared", "monarchy abolished", "the republic", "abolition of the monarchy", "First Republic"], q: "was the monarchy abolished and France declared a republic", stmt: "the monarchy is abolished and France becomes a republic", tier: 1, why: "September 1792 — the Convention, elected by almost all men aged 21+, abolished the monarchy.", trap: { year: 1789, feedback: "In 1789 France still had a king — it stayed a monarchy until September 1792." } },
  { year: 1793, label: "the execution of Louis XVI", aliases: ["execution of Louis XVI", "Louis XVI executed", "king executed", "Louis executed", "execution of the king", "regicide"], q: "was Louis XVI executed", stmt: "Louis XVI is executed by guillotine", tier: 1, why: "21 January 1793, after trial by the Convention as “Citizen Louis Capet”.", trap: { year: 1789, feedback: "Louis was still king in 1789 — he was executed after France became a republic." } },
  { year: 1793, label: "the execution of Marie Antoinette", aliases: ["execution of Marie Antoinette", "Marie Antoinette executed", "queen executed", "execution of the queen"], q: "was Marie Antoinette executed", stmt: "Marie Antoinette is executed", tier: 2, why: "16 October 1793, nine months after her husband." },
  { year: 1793, label: "the Law of Suspects", aliases: ["Law of Suspects", "Law of Suspects passed"], q: "was the Law of Suspects passed", stmt: "the Law of Suspects allows arrest on vague suspicion", tier: 3, why: "September 1793: it was the legal basis of the Terror." },
  { year: 1794, label: "the abolition of slavery in French colonies", aliases: ["abolition of slavery", "slavery abolished", "end of slavery", "slavery abolished in French colonies", "abolition"], q: "did France abolish slavery in all its colonies", stmt: "the Convention abolishes slavery in all French colonies", tier: 2, why: "4 February 1794 — under pressure from the revolt in Saint-Domingue." },
  { year: 1794, label: "the execution of Robespierre", aliases: ["execution of Robespierre", "Robespierre executed", "Robespierre's fall", "fall of Robespierre", "Thermidor", "end of the Terror"], q: "was Robespierre executed, ending the Terror", stmt: "Robespierre is guillotined and the Terror ends", tier: 1, why: "28 July 1794 — Convention members feared they would be next." },
  { year: 1795, label: "the start of the Directory", aliases: ["the Directory", "Directory", "Directory begins", "Directory set up", "start of the Directory"], q: "did the Directory (five Directors) begin to govern France", stmt: "the Directory takes power", tier: 3, why: "It ruled 1795–99 and brought back a property qualification for voters." },
  { year: 1799, label: "Napoleon's coup", aliases: ["Napoleon's coup", "coup of 18 Brumaire", "Brumaire", "Napoleon seizes power", "coup", "18 Brumaire"], q: "did Napoleon seize power in a coup", stmt: "Napoleon joins a coup that overthrows the Directory", tier: 1, why: "9 November 1799 (18 Brumaire) — he became First Consul." },
  { year: 1801, label: "Napoleon's agreement with the Pope", aliases: ["agreement with the Pope", "Concordat", "Napoleon's agreement with the Pope", "deal with the Pope"], q: "did Napoleon make his agreement with the Pope", stmt: "Napoleon makes an agreement with the Pope", tier: 3, why: "It brought peace with the Catholic Church while keeping religious toleration." },
  { year: 1802, label: "the restoration of slavery", aliases: ["slavery restored", "restoration of slavery", "Napoleon restores slavery", "slavery brought back", "reintroduction of slavery"], q: "did Napoleon restore slavery in French colonies", stmt: "Napoleon restores slavery in French colonies", tier: 2, why: "A clear reversal of the 1794 abolition." },
  { year: 1802, label: "the creation of the Legion of Honour", aliases: ["Legion of Honour", "Legion of Honor", "Legion d'honneur", "creation of the Legion of Honour"], q: "did Napoleon create the Legion of Honour", stmt: "Napoleon creates the Legion of Honour to reward merit", tier: 3, why: "It rewarded talent, not birth — a revolutionary idea Napoleon kept." },
  { year: 1804, label: "Napoleon's coronation as Emperor", aliases: ["Napoleon crowned Emperor", "Napoleon becomes Emperor", "coronation of Napoleon", "Napoleon's coronation", "Emperor Napoleon", "Napoleon crowns himself"], q: "did Napoleon crown himself Emperor", stmt: "Napoleon crowns himself Emperor in Notre-Dame", tier: 1, why: "December 1804 — a revolution against a king ended with an emperor.", trap: { year: 1799, feedback: "1799 was the coup that made him First Consul — he became Emperor later." } },
  { year: 1804, label: "the Napoleonic Code", aliases: ["Napoleonic Code", "Code Napoleon", "Civil Code", "Napoleonic Code issued"], q: "was the Napoleonic Code (Civil Code) issued", stmt: "the Napoleonic Code becomes law", tier: 2, why: "March 1804: equality before the law for men, but wives had to obey husbands." },
  { year: 1804, label: "Haiti's independence", aliases: ["Haiti independence", "Haitian independence", "Haiti becomes independent", "independence of Haiti", "Haiti"], q: "did Saint-Domingue declare independence as Haiti", stmt: "Saint-Domingue declares independence as Haiti", tier: 2, why: "1 January 1804 — after defeating Napoleon's army." },
  { year: 1848, label: "France restoring universal male suffrage for good", aliases: ["universal male suffrage restored", "universal male suffrage", "1848 revolution", "male suffrage restored"], q: "did France gain lasting universal male suffrage", stmt: "France gains lasting universal male suffrage", tier: 3, why: "Over 50 years after 1792 — democracy grew slowly, not all at once." },
  { year: 1944, label: "French women winning the vote", aliases: ["French women win the vote", "women get the vote", "women's suffrage in France", "votes for women", "women vote"], q: "did French women win the right to vote", stmt: "French women win the right to vote", tier: 3, why: "Women were excluded throughout the Revolution — continuity lasted until 1944." },
];

function datedFor(tier: Tier): Dated[] {
  return DATED.filter((d) => d.tier <= tier);
}

// ---------------------------------------------------------------------------
// 1. Year recall
// ---------------------------------------------------------------------------
const yearRecall: Drill = {
  id: `${T}.year-recall`,
  topicId: T,
  title: "Match the year to the event",
  level: 1,
  guideRef: "radical-revolution",
  generate(rng, tier) {
    const pool = datedFor(tier).filter((d) => tier === 3 || d.year <= 1804);
    const e = rng.pick(pool);
    const tpl = rng.int(0, 2);
    const prompt = tpl === 0 ? `In which year ${e.q}?` : tpl === 1 ? `Give the year: ${e.stmt}.` : `What year? ${e.stmt.charAt(0).toUpperCase()}${e.stmt.slice(1)}.`;
    const traps: Trap[] = e.trap ? [{ spec: { type: "number", value: e.trap.year }, feedback: e.trap.feedback }] : [];
    return {
      prompt,
      answer: { type: "number", value: e.year },
      solution: [`**${e.year}**. ${e.why}`],
      hint: e.year >= 1789 ? "Anchor it to 1789 (the Bastille) — was this before or after, and by how much?" : "This happened before the Revolution began in 1789.",
      traps,
    };
  },
};

// ---------------------------------------------------------------------------
// 2. Which estate?
// ---------------------------------------------------------------------------
const ESTATE_ACCEPT: Record<1 | 2 | 3, string[]> = {
  1: ["First", "First Estate", "1st", "1st Estate", "1", "one", "clergy", "the clergy"],
  2: ["Second", "Second Estate", "2nd", "2nd Estate", "2", "two", "nobles", "nobility", "the nobility"],
  3: ["Third", "Third Estate", "3rd", "3rd Estate", "3", "three", "commoners"],
};
const ESTATE_NAME = { 1: "First Estate (clergy)", 2: "Second Estate (nobles)", 3: "Third Estate (everyone else)" } as const;

interface EstateItem { who: string; kind: "person" | "group"; estate: 1 | 2 | 3; tier: Tier; why: string; trap?: { estate: 1 | 2 | 3; feedback: string } }
const ESTATES: EstateItem[] = [
  { who: "a bishop", kind: "person", estate: 1, tier: 1, why: "All clergy, from bishops to monks, belonged to the First Estate." },
  { who: "a monk", kind: "person", estate: 1, tier: 1, why: "Monks and nuns were clergy — the First Estate." },
  { who: "a nun", kind: "person", estate: 1, tier: 1, why: "Nuns were members of the clergy — the First Estate." },
  { who: "a duke with a château and great estates", kind: "person", estate: 2, tier: 1, why: "Dukes were nobles — the Second Estate, about 2% of the population." },
  { who: "a count who serves as an army officer", kind: "person", estate: 2, tier: 1, why: "Counts were nobles, and nobles held the top army jobs by birth." },
  { who: "a peasant farmer", kind: "person", estate: 3, tier: 1, why: "Peasants were the largest part of the Third Estate — about 97% of the people." },
  { who: "a Paris baker", kind: "person", estate: 3, tier: 1, why: "Town workers and craftspeople belonged to the Third Estate." },
  { who: "a rich merchant in Bordeaux", kind: "person", estate: 3, tier: 1, why: "However rich, a merchant was a commoner — part of the bourgeoisie in the Third Estate.", trap: { estate: 2, feedback: "Wealth didn't make you noble — the Second Estate was decided by birth (or a bought title)." } },
  { who: "a lawyer", kind: "person", estate: 3, tier: 1, why: "Lawyers were part of the educated bourgeoisie — the Third Estate." },
  { who: "the group that made up about 97% of the population", kind: "group", estate: 3, tier: 1, why: "The Third Estate was everyone who was not clergy or noble — about 97%." },
  { who: "the group that collected the tithe", kind: "group", estate: 1, tier: 1, why: "The tithe — in theory a tenth of the harvest — went to the Church: the First Estate." },
  { who: "the group that paid the taille, the main direct tax", kind: "group", estate: 3, tier: 1, why: "The clergy and almost all nobles were exempt; the Third Estate paid the taille." },
  { who: "a parish priest in a poor village", kind: "person", estate: 1, tier: 2, why: "Parish priests were clergy, so First Estate by law — though many were poor, and many sided with the Third Estate in June 1789.", trap: { estate: 3, feedback: "He was poor and many priests sided with the Third Estate — but by law all clergy were the First Estate." } },
  { who: "an abbot running a wealthy monastery", kind: "person", estate: 1, tier: 2, why: "Abbots were clergy — the First Estate, which owned roughly a tenth of the land." },
  { who: "a marquis who spends his time at Versailles", kind: "person", estate: 2, tier: 2, why: "A marquis was a noble; thousands of nobles competed for royal favour at Versailles." },
  { who: "a doctor in Lyon", kind: "person", estate: 3, tier: 2, why: "Doctors were part of the educated bourgeoisie — the Third Estate." },
  { who: "a landless labourer", kind: "person", estate: 3, tier: 2, why: "The poorest country people were part of the Third Estate." },
  { who: "a banker in Paris", kind: "person", estate: 3, tier: 2, why: "Bankers belonged to the wealthy bourgeoisie — still the Third Estate." },
  { who: "the bourgeoisie", kind: "group", estate: 3, tier: 2, why: "The bourgeoisie — merchants, lawyers, doctors — were the educated middle class of the Third Estate." },
  { who: "the group that was under 1% of the population", kind: "group", estate: 1, tier: 2, why: "The clergy were under 1% of the population." },
  { who: "the group that was about 2% of the population and held the top army jobs by birth", kind: "group", estate: 2, tier: 2, why: "The nobles were about 2% of the population and monopolised top posts." },
  { who: "the group that gave the king a voluntary “free gift” instead of paying the taille", kind: "group", estate: 1, tier: 3, why: "The Church paid a voluntary “free gift” rather than the taille." },
  { who: "the Marquis de Lafayette, who fought for the Americans", kind: "person", estate: 2, tier: 3, why: "Lafayette was a noble (a marquis) — the Second Estate — even though he backed reform." },
  { who: "Maximilien Robespierre, a lawyer from Arras", kind: "person", estate: 3, tier: 3, why: "Robespierre was a lawyer — he was elected to the Estates-General as a Third Estate deputy." },
  { who: "the group whose deputies declared themselves the National Assembly on 17 June 1789", kind: "group", estate: 3, tier: 3, why: "The Third Estate's deputies claimed to represent the whole nation." },
  { who: "a craftsman who owes his lord fees to use the lord's mill and oven", kind: "person", estate: 3, tier: 3, why: "Those who paid feudal dues were commoners — the Third Estate." },
];

const whichEstate: Drill = {
  id: `${T}.which-estate`,
  topicId: T,
  title: "Which estate?",
  level: 1,
  guideRef: "ancien-regime",
  generate(rng, tier) {
    const it = rng.pick(ESTATES.filter((e) => e.tier <= tier));
    const tpl = rng.int(0, 1);
    const q = it.kind === "person"
      ? (tpl === 0 ? `In France in 1788, which estate did **${it.who}** belong to?` : `Ancien Régime France: **${it.who}**. Which estate?`)
      : (tpl === 0 ? `Which estate was **${it.who}**?` : `Before 1789: **${it.who}**. Which estate was this?`);
    const traps: Trap[] = it.trap ? [{ spec: textSpec(ESTATE_ACCEPT[it.trap.estate]), feedback: it.trap.feedback }] : [];
    return {
      prompt: `${q} Answer *First*, *Second* or *Third*.`,
      answer: textSpec(ESTATE_ACCEPT[it.estate], ESTATE_NAME[it.estate]),
      solution: [`**${ESTATE_NAME[it.estate]}**. ${it.why}`],
      hint: "First = clergy, Second = nobles, Third = everyone else.",
      traps,
    };
  },
};

// ---------------------------------------------------------------------------
// 3. Key term from its definition
// ---------------------------------------------------------------------------
interface Term { accept: string[]; def: string; tier: Tier; note: string; confuse?: number }
const TERMS: Term[] = [
  /* 0 */ { accept: ["taille", "the taille", "la taille"], def: "The king's main direct (land) tax, paid by the Third Estate but not by the clergy or almost all nobles.", tier: 1, note: "The taille's exemptions were the heart of the unfair tax system.", confuse: 1 },
  /* 1 */ { accept: ["tithe", "the tithe", "dime", "dîme"], def: "A payment to the Church, in theory a tenth of a person's harvest or income.", tier: 1, note: "The tithe went to the First Estate; it was abolished in August 1789.", confuse: 0 },
  /* 2 */ { accept: ["bourgeoisie", "bourgeois", "the middle class", "middle class", "middle classes"], def: "The wealthy, educated middle class of the Third Estate — merchants, lawyers, doctors — who led the Revolution.", tier: 1, note: "Blocked from top jobs by birth, they had the most to gain from equality." },
  /* 3 */ { accept: ["divine right", "divine right of kings", "the divine right of kings"], def: "The belief that a king's power comes from God, so he answers to no parliament or people.", tier: 1, note: "Louis XVI claimed to rule by divine right." },
  /* 4 */ { accept: ["Estates-General", "Estates General", "States-General", "Etats-Generaux"], def: "France's representative assembly of clergy, nobles and commoners, not called between 1614 and 1789.", tier: 1, note: "It opened on 5 May 1789 — calling it was the trigger of the Revolution." },
  /* 5 */ { accept: ["republic", "a republic", "the republic"], def: "A state with no king or queen — what France became in September 1792.", tier: 1, note: "France became a republic in September 1792." },
  /* 6 */ { accept: ["guillotine", "the guillotine"], def: "The execution machine, meant to be quick and equal for all, used during the Terror.", tier: 1, note: "Louis XVI, Marie Antoinette and Robespierre all died by it." },
  /* 7 */ { accept: ["the Terror", "Terror", "Reign of Terror", "the Reign of Terror"], def: "The period from about September 1793 to July 1794 when around 17,000 people were officially executed as enemies of the Revolution.", tier: 1, note: "Not the whole Revolution — just 1793–94." },
  /* 8 */ { accept: ["Ancien Régime", "Ancien Regime", "old regime", "old order", "the old order"], def: "The name revolutionaries gave to France before 1789: absolute monarchy, three estates and privilege by birth. (Give the French phrase.)", tier: 1, note: "It means “old order”." },
  /* 9 */ { accept: ["National Assembly", "the National Assembly", "Assemblee nationale", "Constituent Assembly"], def: "The name the Third Estate's deputies took on 17 June 1789, claiming to speak for the whole people of France.", tier: 1, note: "Three days later its members swore the Tennis Court Oath." },
  /* 10 */ { accept: ["gabelle", "the gabelle", "salt tax"], def: "The hated royal tax on salt, an everyday necessity for preserving food. (Give the French word.)", tier: 2, note: "Peasants paid it on top of the taille." },
  /* 11 */ { accept: ["corvée", "corvee", "the corvée"], def: "Unpaid work on royal roads demanded of peasants (turned into a money tax in 1787).", tier: 2, note: "Another burden that fell only on the Third Estate." },
  /* 12 */ { accept: ["feudal dues", "seigneurial dues", "dues", "feudal fees", "feudal dues and fees"], def: "Fees peasants paid their local lord — for example to use his mill, oven or wine-press.", tier: 2, note: "Peasants burned the records of them during the Great Fear." },
  /* 13 */ { accept: ["cahiers de doléances", "cahiers de doleances", "cahiers", "cahier", "lists of grievances", "grievance lists"], def: "Lists of complaints written by communities all over France in early 1789, ready for the Estates-General.", tier: 2, note: "Nearly all were loyal to the king but attacked privilege." },
  /* 14 */ { accept: ["separation of powers", "the separation of powers"], def: "Montesquieu's idea that making laws, carrying them out and judging should be kept in different hands so no one becomes a tyrant.", tier: 2, note: "The 1791 Constitution put it into practice.", confuse: 15 },
  /* 15 */ { accept: ["general will", "the general will"], def: "Rousseau's idea that legitimate power comes from the shared will of the whole people.", tier: 2, note: "Article 6 of the Declaration calls law “the expression of the general will”.", confuse: 14 },
  /* 16 */ { accept: ["sans-culottes", "sans culottes", "sansculottes", "sans-culotte"], def: "Radical Parisian working people — literally “without knee-breeches” — who backed the Jacobins.", tier: 2, note: "Their pressure pushed the Revolution in a more radical direction.", confuse: 17 },
  /* 17 */ { accept: ["Jacobins", "Jacobin", "Jacobin Club", "the Jacobin Club"], def: "The radical political club, led by Robespierre, that dominated the Convention in 1793–94.", tier: 2, note: "Robespierre led them during the Terror.", confuse: 16 },
  /* 18 */ { accept: ["Committee of Public Safety"], def: "The twelve-man committee, dominated by Robespierre, that ran France during the Terror.", tier: 2, note: "It was given sweeping emergency powers in 1793." },
  /* 19 */ { accept: ["constitutional monarchy", "a constitutional monarchy", "limited monarchy"], def: "A system in which a king reigns but his power is limited by a written constitution and an elected assembly.", tier: 2, note: "France's system under the 1791 Constitution, until September 1792." },
  /* 20 */ { accept: ["plebiscite", "a plebiscite", "referendum"], def: "A yes/no vote of the whole people on one question — used by Napoleon to make his power look popular.", tier: 2, note: "Historians have shown the 1800 result was heavily inflated." },
  /* 21 */ { accept: ["Napoleonic Code", "Code Napoleon", "Code Napoléon", "Civil Code", "the Civil Code"], def: "The set of laws issued in 1804 that kept equality before the law for men but made wives obey their husbands.", tier: 2, note: "It still shapes legal systems in many countries." },
  /* 22 */ { accept: ["Law of Suspects", "the Law of Suspects"], def: "The September 1793 law that allowed the arrest of anyone suspected of opposing the Revolution.", tier: 3, note: "It was the legal basis of the Terror." },
  /* 23 */ { accept: ["the Directory", "Directory", "Directoire"], def: "The government of five men and two councils that ran France from 1795 to 1799.", tier: 3, note: "Napoleon overthrew it in 1799." },
  /* 24 */ { accept: ["coup", "coup d'état", "coup d'etat", "putsch"], def: "A sudden, illegal seizure of power by a small group — as Napoleon did in November 1799.", tier: 3, note: "18 Brumaire (9 November 1799)." },
  /* 25 */ { accept: ["regicide"], def: "The killing of a king — for example the execution of Louis XVI in January 1793.", tier: 3, note: "Louis XVI was executed on 21 January 1793." },
  /* 26 */ { accept: ["Great Fear", "the Great Fear", "Grande Peur", "la Grande Peur"], def: "The panic in the countryside in summer 1789, when peasants attacked châteaux and burned records of feudal dues.", tier: 3, note: "It helped push the Assembly to abolish privileges on 4 August." },
  /* 27 */ { accept: ["active citizens", "active citizen", "active"], def: "Under the 1791 Constitution, men over 25 who paid enough tax to be allowed to vote (about 4.3 million).", tier: 3, note: "Poorer men, servants and all women were passive citizens.", confuse: 28 },
  /* 28 */ { accept: ["passive citizens", "passive citizen", "passive"], def: "Under the 1791 Constitution, people protected by the law but not allowed to vote — poorer men, servants and all women.", tier: 3, note: "Their rights existed on paper but they had no say in government.", confuse: 27 },
];

const keyTerm: Drill = {
  id: `${T}.key-term`,
  topicId: T,
  title: "Key term from its definition",
  level: 1,
  guideRef: "ancien-regime",
  generate(rng, tier) {
    const pool = TERMS.filter((t) => t.tier <= tier);
    const t = rng.pick(pool);
    const tpl = rng.int(0, 1);
    const prompt = tpl === 0 ? `Which key term matches this definition?\n\n> ${t.def}` : `Name the key term: ${t.def}`;
    const traps: Trap[] = t.confuse !== undefined ? [{ spec: textSpec(TERMS[t.confuse].accept), feedback: `That's **${TERMS[t.confuse].accept[0]}** — a different idea. Re-read the definition.` }] : [];
    return {
      prompt,
      answer: textSpec(t.accept),
      solution: [`**${t.accept[0]}**. ${t.note}`],
      hint: "Think about which part of the topic this belongs to: the old order, causes, 1789, rights, the Terror or Napoleon.",
      traps,
    };
  },
};

// ---------------------------------------------------------------------------
// 4. The events of 1789 (date ↔ event)
// ---------------------------------------------------------------------------
interface Day { ask: string; d: number; m: string; alsoDates?: string[]; event: string; accept: string[]; tier: Tier; why: string; confuse?: number }
const DAYS: Day[] = [
  /* 0 */ { ask: "did the Estates-General open at Versailles", d: 5, m: "May", event: "the Estates-General opened at Versailles", accept: ["Estates-General opened", "Estates-General", "Estates General", "opening of the Estates-General", "Estates-General met", "Estates-General opens"], tier: 1, why: "It was the first meeting since 1614; the quarrel over voting by order or by head began at once." },
  /* 1 */ { ask: "did the Third Estate declare itself the National Assembly", d: 17, m: "June", event: "the Third Estate declared itself the National Assembly", accept: ["National Assembly", "Third Estate declared itself the National Assembly", "National Assembly declared", "National Assembly formed", "creation of the National Assembly", "Third Estate became the National Assembly"], tier: 1, why: "The deputies claimed to represent the whole nation — a direct challenge to the king.", confuse: 2 },
  /* 2 */ { ask: "did the deputies swear the Tennis Court Oath", d: 20, m: "June", event: "the deputies swore the Tennis Court Oath", accept: ["Tennis Court Oath", "Oath of the Tennis Court", "tennis court"], tier: 1, why: "Locked out of their hall, they swore not to separate until France had a constitution.", confuse: 3 },
  /* 3 */ { ask: "did Parisians storm the Bastille", d: 14, m: "July", event: "Parisians stormed the Bastille", accept: ["Storming of the Bastille", "Bastille", "fall of the Bastille", "Bastille stormed", "the Bastille was stormed", "attack on the Bastille", "Bastille Day"], tier: 1, why: "The fortress held only seven prisoners, but the attack forced Louis to pull back his troops.", confuse: 2 },
  /* 4 */ { ask: "did the Assembly abolish feudal privileges", d: 4, m: "August", event: "the Assembly abolished feudal privileges", accept: ["feudal privileges abolished", "abolition of feudal privileges", "abolition of feudalism", "feudalism abolished", "August Decrees", "privileges abolished", "abolition of privileges", "end of feudal privileges", "feudal dues abolished"], tier: 1, why: "In one night session, tax exemptions, tithes and feudal dues were swept away." },
  /* 5 */ { ask: "was the Declaration of the Rights of Man and of the Citizen issued", d: 26, m: "August", event: "the Declaration of the Rights of Man and of the Citizen was issued", accept: ["Declaration of the Rights of Man", "Declaration of the Rights of Man and of the Citizen", "Rights of Man", "Declaration of Rights of Man", "Declaration of the Rights of Man and the Citizen"], tier: 1, why: "It declared men “born and remain free and equal in rights”." },
  /* 6 */ { ask: "did Parisian women begin the March on Versailles", d: 5, m: "October", alsoDates: ["5-6 October", "5–6 October", "October 5-6", "5th-6th October"], event: "Parisian women began the March on Versailles", accept: ["Women's March on Versailles", "Women's March", "March on Versailles", "October Days", "women marched to Versailles", "march to Versailles", "Women's March to Versailles"], tier: 2, why: "Angry about bread prices, they brought the royal family back to Paris the next day." },
  /* 7 */ { ask: "did Louis XVI sack his popular minister Necker", d: 11, m: "July", event: "Louis XVI sacked his popular minister Necker", accept: ["Necker dismissed", "Necker sacked", "dismissal of Necker", "Necker was dismissed", "Necker was sacked", "Louis sacked Necker", "Necker fired", "sacking of Necker"], tier: 3, why: "Parisians feared the troops would crush the Assembly — three days later they stormed the Bastille." },
];

function ord(n: number): string {
  const s = ["th", "st", "nd", "rd"], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function dateAccept(x: Day): string[] {
  const out = [`${x.d} ${x.m}`, `${x.m} ${x.d}`, `${ord(x.d)} ${x.m}`, `${x.m} ${ord(x.d)}`, `${x.d} ${x.m} 1789`, `${x.m} ${x.d}, 1789`, `${ord(x.d)} of ${x.m}`, `the ${ord(x.d)} of ${x.m}`];
  return [...out, ...(x.alsoDates ?? [])];
}

const events1789: Drill = {
  id: `${T}.events-1789`,
  topicId: T,
  title: "1789: match the date to the event",
  level: 1,
  guideRef: "revolution-1789",
  generate(rng, tier) {
    const pool = DAYS.filter((x) => x.tier <= tier);
    const x = rng.pick(pool);
    const tpl = rng.int(0, 3);
    if (tpl <= 1) {
      // date → event
      const prompt = tpl === 0 ? `What happened in France on **${x.d} ${x.m} 1789**?` : `1789 timeline: what event took place on **${x.d} ${x.m}**?`;
      const traps: Trap[] = x.confuse !== undefined ? [{ spec: textSpec(DAYS[x.confuse].accept), feedback: `That was on ${DAYS[x.confuse].d} ${DAYS[x.confuse].m}. Check the date again.` }] : [];
      return {
        prompt,
        answer: textSpec(x.accept),
        solution: [`On ${x.d} ${x.m} 1789 ${x.event}.`, x.why],
        hint: "Order of 1789: Estates-General (May) → National Assembly and Oath (June) → Bastille (July) → privileges and rights (August) → march (October).",
        traps,
      };
    }
    // event → date
    const ev = x.event.charAt(0).toUpperCase() + x.event.slice(1);
    const prompt = tpl === 2 ? `On what date in 1789 (day and month) ${x.ask}?` : `Give the day and month in 1789: ${ev}.`;
    const traps: Trap[] = x.confuse !== undefined ? [{ spec: textSpec(dateAccept(DAYS[x.confuse])), feedback: `${DAYS[x.confuse].d} ${DAYS[x.confuse].m} is a different event. Check the order of 1789.` }] : [];
    return {
      prompt,
      answer: textSpec(dateAccept(x), `${x.d} ${x.m}`),
      solution: [`**${x.d} ${x.m} 1789**: ${x.event}.`, x.why],
      hint: "Type the day and month, e.g. 4 August.",
      traps,
    };
  },
};

// ---------------------------------------------------------------------------
// 5. Who's who?
// ---------------------------------------------------------------------------
interface Person { name: string; accept: string[]; clues: string[]; tier: Tier; confuse?: number; confuseNote?: string }
const PEOPLE: Person[] = [
  /* 0 */ { name: "Louis XVI", accept: ["Louis XVI", "Louis 16", "Louis the Sixteenth", "Louis", "King Louis", "King Louis XVI", "Louis Capet", "Citizen Capet"], tier: 1, clues: [
    "King of France from 1774, he ruled as an absolute monarch by divine right.",
    "He was caught at Varennes in June 1791 trying to escape with his family.",
    "Tried as “Citizen Louis Capet”, he was guillotined on 21 January 1793.",
  ], confuse: 4, confuseNote: "Napoleon was an emperor, not the king who was executed." },
  /* 1 */ { name: "Marie Antoinette", accept: ["Marie Antoinette", "Marie-Antoinette", "Antoinette", "the queen", "Queen Marie Antoinette"], tier: 1, clues: [
    "Austrian-born queen of France, attacked in pamphlets for extravagance.",
    "She almost certainly never said “Let them eat cake”, though the myth stuck to her.",
    "Queen of France, she was executed on 16 October 1793.",
  ], confuse: 3, confuseNote: "Olympe de Gouges was a writer, not the queen." },
  /* 2 */ { name: "Robespierre", accept: ["Robespierre", "Maximilien Robespierre", "Maximilien de Robespierre"], tier: 1, clues: [
    "Jacobin leader who dominated the Committee of Public Safety during the Terror.",
    "A lawyer from Arras, he said: “Terror is nothing other than justice, prompt, severe, inflexible.”",
    "Guillotined on 28 July 1794, his death ended the Terror.",
  ], confuse: 5, confuseNote: "Sieyès wrote *What is the Third Estate?* — think of who led the Terror." },
  /* 3 */ { name: "Olympe de Gouges", accept: ["Olympe de Gouges", "de Gouges", "Gouges", "Olympe", "Marie Gouze"], tier: 1, clues: [
    "Playwright who wrote the *Declaration of the Rights of Woman and of the Female Citizen* (1791).",
    "She argued that if a woman could “mount the scaffold”, she must be able to “mount the rostrum”.",
    "Guillotined in November 1793 for criticising the Jacobin leaders, she had demanded rights for women.",
  ], confuse: 1, confuseNote: "Marie Antoinette was the queen — think of the woman who demanded women's rights." },
  /* 4 */ { name: "Napoleon Bonaparte", accept: ["Napoleon", "Napoleon Bonaparte", "Bonaparte", "Napoléon", "Napoleon I", "Emperor Napoleon"], tier: 1, clues: [
    "Corsican-born general who seized power in a coup in November 1799.",
    "He crowned himself Emperor in Notre-Dame in December 1804.",
    "His Civil Code of 1804 kept equality before the law for men but made wives obey husbands.",
  ], confuse: 0, confuseNote: "Louis XVI was the king executed in 1793 — this man rose afterwards." },
  /* 5 */ { name: "Abbé Sieyès", accept: ["Sieyès", "Sieyes", "Abbé Sieyès", "Abbe Sieyes", "Emmanuel Sieyès", "Emmanuel-Joseph Sieyès"], tier: 2, clues: [
    "Author of the January 1789 pamphlet *What is the Third Estate?* — answer: “Everything.”",
    "A clergyman whose pamphlet raised the Third Estate's hopes before the Estates-General met.",
  ], confuse: 2, confuseNote: "Robespierre led the Terror; this writer's pamphlet came out before the Estates-General." },
  /* 6 */ { name: "Rousseau", accept: ["Rousseau", "Jean-Jacques Rousseau", "Jean Jacques Rousseau"], tier: 2, clues: [
    "Enlightenment writer of *The Social Contract* (1762), who said power should come from the people's general will.",
    "He wrote: “Man is born free, and everywhere he is in chains.”",
  ], confuse: 7, confuseNote: "Montesquieu argued for the separation of powers — the general will was someone else's idea." },
  /* 7 */ { name: "Montesquieu", accept: ["Montesquieu", "Baron de Montesquieu", "Charles de Montesquieu"], tier: 2, clues: [
    "Enlightenment writer of *The Spirit of the Laws* (1748), who argued for the separation of powers.",
    "He argued that making laws, carrying them out and judging should be in different hands.",
  ], confuse: 6, confuseNote: "Rousseau wrote about the general will — the separation of powers was someone else's idea." },
  /* 8 */ { name: "Voltaire", accept: ["Voltaire"], tier: 2, clues: [
    "Enlightenment writer who attacked censorship and religious intolerance and championed free speech.",
    "A famous line about defending “to the death your right to say it” is wrongly credited to him — it was written in 1906.",
  ] },
  /* 9 */ { name: "Toussaint Louverture", accept: ["Toussaint Louverture", "Toussaint L'Ouverture", "Toussaint", "Louverture", "L'Ouverture"], tier: 2, clues: [
    "Leader of the revolt of enslaved people in Saint-Domingue (Haiti), which began in 1791.",
    "He led the rising that pushed France to abolish slavery in 1794.",
  ] },
  /* 10 */ { name: "Necker", accept: ["Necker", "Jacques Necker"], tier: 3, clues: [
    "Popular finance minister whose sacking on 11 July 1789 alarmed Paris just before the Bastille fell.",
    "Louis recalled this minister after the Storming of the Bastille.",
  ], confuse: 11, confuseNote: "Calonne proposed the land tax in 1786; the minister sacked in July 1789 was someone else." },
  /* 11 */ { name: "Calonne", accept: ["Calonne", "Charles Alexandre de Calonne", "Charles-Alexandre de Calonne"], tier: 3, clues: [
    "Finance minister who in 1786 proposed a land tax that everyone, including the privileged, would pay.",
    "His tax plan was rejected by the Assembly of Notables in 1787.",
  ], confuse: 10, confuseNote: "Necker was the popular minister sacked in July 1789; the 1786 tax plan was someone else's." },
  /* 12 */ { name: "Lafayette", accept: ["Lafayette", "La Fayette", "Marquis de Lafayette", "the Marquis de Lafayette"], tier: 3, clues: [
    "Noble who fought for the American colonists and came home with ideas about rights.",
    "A marquis who had served in the American War of Independence and backed reform in 1789.",
  ] },
];

const whosWho: Drill = {
  id: `${T}.whos-who`,
  topicId: T,
  title: "Who's who?",
  level: 2,
  guideRef: "causes-of-revolution",
  generate(rng, tier) {
    const p = rng.pick(PEOPLE.filter((x) => x.tier <= tier));
    const clue = rng.pick(p.clues);
    const tpl = rng.int(0, 1);
    const prompt = tpl === 0 ? `Who is this?\n\n> ${clue}\n\nGive the name.` : `Name the person: ${clue}`;
    const traps: Trap[] = p.confuse !== undefined ? [{ spec: textSpec(PEOPLE[p.confuse].accept), feedback: p.confuseNote ?? "That's a different person." }] : [];
    const others = p.clues.filter((c) => c !== clue);
    return {
      prompt,
      answer: textSpec(p.accept, p.name),
      solution: [`**${p.name}**.`, ...(others.length ? [`Also: ${others[0]}`] : [])],
      hint: "Place the clue in time: before 1789, during 1789–91, the Terror (1793–94), or Napoleon's rule?",
      traps,
    };
  },
};

// ---------------------------------------------------------------------------
// 6. Active or passive citizen? (1791 Constitution)
// ---------------------------------------------------------------------------
interface Citizen { who: string; active: boolean; tier: Tier; why: string }
const CITIZENS: Citizen[] = [
  { who: "a wealthy 40-year-old merchant who pays plenty of tax", active: true, tier: 1, why: "A man over 25 paying tax worth at least three days' wages was an active citizen." },
  { who: "a 35-year-old lawyer who pays plenty of tax", active: true, tier: 1, why: "Men over 25 who paid enough tax could vote." },
  { who: "a 50-year-old landowning farmer who pays plenty of tax", active: true, tier: 1, why: "He was male, over 25 and paid enough tax — an active citizen." },
  { who: "a woman who owns a successful shop", active: false, tier: 1, why: "All women were passive citizens, however much tax they paid." },
  { who: "a domestic servant", active: false, tier: 1, why: "Servants were passive citizens — thought to be under their employer's influence." },
  { who: "a poor day-labourer who pays almost no tax", active: false, tier: 1, why: "Poorer men who paid less than three days' wages in tax were passive citizens." },
  { who: "Olympe de Gouges", active: false, tier: 1, why: "As a woman she was a passive citizen — which is exactly what she protested against." },
  { who: "a wealthy widow who owns land", active: false, tier: 1, why: "Women were excluded from voting, even if they were rich property owners." },
  { who: "a 45-year-old doctor who pays plenty of tax", active: true, tier: 1, why: "A man over 25 who paid enough tax could vote." },
  { who: "a Paris journeyman whose tax is worth less than three days' wages", active: false, tier: 2, why: "The property qualification was tax worth at least three days' wages — he fell below it." },
  { who: "a beggar", active: false, tier: 2, why: "Men who paid no tax were passive citizens." },
  { who: "the wife of a rich banker", active: false, tier: 2, why: "All women, rich or poor, were passive citizens." },
  { who: "a Protestant merchant, aged 30, who pays plenty of tax", active: true, tier: 2, why: "Protestants became full citizens in 1789; as a man over 25 paying enough tax he could vote." },
  { who: "a 22-year-old son of a rich banker", active: false, tier: 3, why: "Active citizens had to be over 25 — he was too young, however rich his family." },
  { who: "a former noble, aged 50, who pays plenty of tax", active: true, tier: 3, why: "Privilege had gone, but as a man over 25 paying enough tax he still had the vote." },
  { who: "a nun", active: false, tier: 3, why: "As a woman she had no vote — all women were passive citizens." },
];
const ACTIVE = ["active", "active citizen", "an active citizen"];
const PASSIVE = ["passive", "passive citizen", "a passive citizen"];

const activePassive: Drill = {
  id: `${T}.active-or-passive`,
  topicId: T,
  title: "Active or passive citizen?",
  level: 2,
  guideRef: "rights-of-man",
  generate(rng, tier) {
    const c = rng.pick(CITIZENS.filter((x) => x.tier <= tier));
    const tpl = rng.int(0, 1);
    const q = tpl === 0
      ? `Under the **Constitution of 1791**, was **${c.who}** an active or a passive citizen?`
      : `1791: only active citizens could vote. Was **${c.who}** active or passive?`;
    return {
      prompt: `${q} Answer *active* or *passive*.`,
      answer: textSpec(c.active ? ACTIVE : PASSIVE),
      solution: [`**${c.active ? "Active" : "Passive"}**. ${c.why}`, "Active citizens (about 4.3 million) were men over 25 who paid tax worth at least three days' wages."],
      hint: "Three tests: male? over 25? paying enough tax (and not a servant)?",
      traps: [{ spec: textSpec(c.active ? PASSIVE : ACTIVE), feedback: c.active ? "Check the three tests again — this person passes all of them." : "Check the three tests: male, over 25, and paying enough tax (not a servant)." }],
    };
  },
};

// ---------------------------------------------------------------------------
// 7. Long-term, short-term or trigger?
// ---------------------------------------------------------------------------
type CauseType = "long" | "short" | "trigger";
interface Cause { text: string; type: CauseType; tier: Tier; why: string }
const CAUSES: Cause[] = [
  { text: "the unfair estates system, with privilege decided by birth", type: "long", tier: 1, why: "Privilege had existed for centuries — it made people resentful, but doesn't explain why 1789." },
  { text: "Enlightenment ideas about reason, rights and liberty", type: "long", tier: 1, why: "These ideas spread through books, salons and cafés over decades." },
  { text: "the example of the American Revolution and its declaration of rights", type: "long", tier: 1, why: "It showed a new republic could be built on rights — an idea that built up over years." },
  { text: "royal bankruptcy — by 1788 about half of royal spending went on interest", type: "short", tier: 1, why: "The money crisis came to a head in 1786–89 and forced the king to act." },
  { text: "the bad harvest of 1788 and soaring bread prices", type: "short", tier: 1, why: "Hunger in 1788–89 made people ready to act right then." },
  { text: "Louis XVI's decision (August 1788) to summon the Estates-General", type: "trigger", tier: 1, why: "Calling the Estates-General gave the Third Estate a stage — the spark." },
  { text: "Rousseau's idea of the general will", type: "long", tier: 2, why: "*The Social Contract* was published in 1762 — part of the long build-up of ideas." },
  { text: "Montesquieu's argument for the separation of powers", type: "long", tier: 2, why: "*The Spirit of the Laws* (1748) shaped ideas for decades." },
  { text: "Voltaire's attacks on censorship and religious intolerance", type: "long", tier: 2, why: "Voltaire's ideas spread over many decades." },
  { text: "the Third Estate paying most taxes while the clergy and nobles were largely exempt", type: "long", tier: 2, why: "The unequal tax system was centuries old." },
  { text: "Calonne's failed plan (1786) for a land tax on everyone", type: "short", tier: 2, why: "The failed reform in 1786–87 deepened the immediate crisis." },
  { text: "the Assembly of Notables refusing (1787) to give up tax exemptions", type: "short", tier: 2, why: "The privileged blocked reform in 1787, pushing the crisis towards the Estates-General." },
  { text: "the hailstorm of July 1788 that wrecked crops, then a freezing winter", type: "short", tier: 2, why: "This disaster of 1788–89 sent bread prices soaring." },
  { text: "a four-pound loaf in Paris reaching 14½ sous by July 1789", type: "short", tier: 2, why: "Bread prices that year made poor families desperate." },
  { text: "the calling of the Estates-General to meet in May 1789, for the first time since 1614", type: "trigger", tier: 2, why: "It gave the Third Estate a stage to demand power — the spark that lit the fuel." },
  { text: "the bourgeoisie being blocked from top jobs by birth", type: "long", tier: 3, why: "The frustration of an educated middle class had been building for generations." },
  { text: "the debts from helping the Americans (1778–83) that left the treasury unable to pay its way by 1788", type: "short", tier: 3, why: "The guide treats the resulting bankruptcy as short-term; but the American *ideas* count as long-term — the same event can feed both." },
  { text: "Louis XVI's summoning of a national assembly of the three estates, agreed in August 1788", type: "trigger", tier: 3, why: "It turned resentment into action by giving the Third Estate a voice — the trigger." },
];
const CAUSE_ACCEPT: Record<CauseType, string[]> = {
  long: ["long-term", "long term", "longterm", "long-term cause", "long", "long term cause"],
  short: ["short-term", "short term", "shortterm", "short-term cause", "short", "short term cause"],
  trigger: ["trigger", "the trigger", "trigger cause", "spark"],
};
const CAUSE_NAME: Record<CauseType, string> = { long: "Long-term cause", short: "Short-term cause", trigger: "Trigger" };

const causeType: Drill = {
  id: `${T}.cause-type`,
  topicId: T,
  title: "Long-term, short-term or trigger?",
  level: 2,
  guideRef: "causes-of-revolution",
  generate(rng, tier) {
    const c = rng.pick(CAUSES.filter((x) => x.tier <= tier));
    const tpl = rng.int(0, 2);
    const q = tpl === 0
      ? `Was **${c.text}** a long-term cause, a short-term cause or the trigger of the French Revolution?`
      : tpl === 1
        ? `Classify this cause of the 1789 Revolution: **${c.text}**.`
        : `You are building a causation diagram for 1789. Where does **${c.text}** go?`;
    const wrong: CauseType = c.type === "long" ? "short" : c.type === "short" ? "long" : "short";
    const fb: Record<CauseType, string> = {
      long: "Long-term causes built up over decades and made people *ready* for change — ask how long this had existed.",
      short: "Short-term causes are the crises of 1786–89 that made the timing dangerous — ask when this happened.",
      trigger: "The trigger is the single event that set things off.",
    };
    return {
      prompt: `${q} Answer *long-term*, *short-term* or *trigger*.`,
      answer: textSpec(CAUSE_ACCEPT[c.type], CAUSE_NAME[c.type]),
      solution: [`**${CAUSE_NAME[c.type]}**. ${c.why}`, "Think of a bonfire: long-term causes are the fuel, short-term causes the dry weather, the trigger the spark."],
      hint: "Did this build up over decades, become a crisis in 1786–89, or set things off directly?",
      traps: [{ spec: textSpec(CAUSE_ACCEPT[wrong]), feedback: fb[wrong] }],
    };
  },
};

// ---------------------------------------------------------------------------
// 8. Which came first?
// ---------------------------------------------------------------------------
function pickPair(rng: Rng, pool: Dated[], minGap: number, maxGap: number): [Dated, Dated] {
  let a = pool[0], b = pool[pool.length - 1];
  for (let i = 0; i < 200; i++) {
    const x = rng.pick(pool), y = rng.pick(pool);
    const gap = Math.abs(x.year - y.year);
    if (gap < minGap || gap > maxGap) continue;
    if (crossAccepted(x.aliases, y.aliases)) continue;
    a = x; b = y;
    break;
  }
  return [a, b];
}

const whichFirst: Drill = {
  id: `${T}.which-came-first`,
  topicId: T,
  title: "Which came first?",
  level: 2,
  guideRef: "napoleon-and-legacy",
  generate(rng, tier) {
    const pool = datedFor(tier).filter((d) => d.year >= 1770 && d.year <= 1804);
    const [x, y] = tier === 1 ? pickPair(rng, pool, 2, 40) : tier === 2 ? pickPair(rng, pool, 1, 40) : pickPair(rng, pool, 1, 3);
    const [early, late] = x.year < y.year ? [x, y] : [y, x];
    const tpl = rng.int(0, 1);
    const prompt = tpl === 0
      ? `Which came first: **${x.label}** or **${y.label}**?`
      : `Put in order — which happened earlier?\n\n- ${x.label}\n- ${y.label}`;
    return {
      prompt,
      answer: textSpec([...early.aliases, early.label.replace(/\*/g, "")], early.label.replace(/\*/g, "")),
      solution: [`**${cap(early.label)}** came first (${early.year}); ${late.label} was in ${late.year}.`, early.why],
      hint: "Anchor both to 1789: before the Revolution, during the constitutional monarchy (1789–92), the republic and Terror (1792–94), or Napoleon (1799 onwards)?",
      traps: [{ spec: textSpec([...late.aliases, late.label.replace(/\*/g, "")]), feedback: `That was later — ${late.year}.` }],
    };
  },
};

// ---------------------------------------------------------------------------
// 9. Kept or reversed by Napoleon?
// ---------------------------------------------------------------------------
interface Legacy { change: string; kept: boolean; tier: Tier; why: string }
const LEGACY: Legacy[] = [
  { change: "equality before the law for men", kept: true, tier: 1, why: "The Napoleonic Code (1804) kept equality before the law for men." },
  { change: "the end of feudal privileges", kept: true, tier: 1, why: "Feudal privilege was not brought back." },
  { change: "careers open to talent rather than birth", kept: true, tier: 1, why: "He rewarded merit, e.g. with the Legion of Honour (1802)." },
  { change: "peasants keeping the land they gained in the Revolution", kept: true, tier: 1, why: "Peasants kept their land — one reason many supported him." },
  { change: "free elections with a real choice", kept: false, tier: 1, why: "There were no real elections — only yes/no plebiscites, and the 1800 result was heavily inflated." },
  { change: "freedom of the press", kept: false, tier: 1, why: "Napoleon used censorship and police spies." },
  { change: "the abolition of slavery (1794)", kept: false, tier: 1, why: "He restored slavery in French colonies in 1802." },
  { change: "government without a hereditary ruler", kept: false, tier: 1, why: "He crowned himself Emperor in 1804 — a hereditary ruler again." },
  { change: "religious toleration", kept: true, tier: 2, why: "His agreement with the Pope (1801) kept religious toleration." },
  { change: "the abolition of noble titles", kept: false, tier: 2, why: "He later created a new nobility." },
  { change: "greater rights for married women", kept: false, tier: 2, why: "The Code said wives must obey their husbands." },
  { change: "the right to criticise the government openly", kept: false, tier: 2, why: "Critics faced censorship and police spies." },
  { change: "a single set of laws for the whole country, the same for every man", kept: true, tier: 3, why: "The Civil Code of 1804 applied the same laws to every man." },
];
const KEPT = ["kept", "keep", "kept it", "continued", "maintained", "kept or continued"];
const REVERSED = ["reversed", "reversed or limited", "limited", "reverse", "undone", "taken away", "restricted", "removed"];

const keptOrReversed: Drill = {
  id: `${T}.kept-or-reversed`,
  topicId: T,
  title: "Napoleon: kept or reversed?",
  level: 3,
  guideRef: "napoleon-and-legacy",
  generate(rng, tier) {
    const l = rng.pick(LEGACY.filter((x) => x.tier <= tier));
    const tpl = rng.int(0, 2);
    const q = tpl === 2
      ? `By 1804 France had an emperor. Under Napoleon, what happened to *${l.change}*?`
      : tpl === 0
      ? `Napoleon claimed to protect the Revolution. Did he **keep** or **reverse/limit** this revolutionary change: *${l.change}*?`
      : `Change and continuity under Napoleon (1799–1815): was *${l.change}* kept or reversed?`;
    return {
      prompt: `${q} Answer *kept* or *reversed*.`,
      answer: textSpec(l.kept ? KEPT : REVERSED, l.kept ? "kept" : "reversed (or limited)"),
      solution: [`**${l.kept ? "Kept" : "Reversed or limited"}**. ${l.why}`, "Napoleon kept the Revolution's equality for men and merit, but took away political rights — a revolution that ended in dictatorship."],
      hint: "Think of the two columns: equality and merit (kept) versus elections, free speech and rights for some groups (reversed).",
      traps: [{ spec: textSpec(l.kept ? REVERSED : KEPT), feedback: l.kept ? "Look again — this is one of the revolutionary gains Napoleon kept." : "Look again — this is one of the freedoms Napoleon took away or limited." }],
    };
  },
};

// ---------------------------------------------------------------------------
// 10. How many years between?
// ---------------------------------------------------------------------------
const yearsBetween: Drill = {
  id: `${T}.years-between`,
  topicId: T,
  title: "How many years between?",
  level: 3,
  guideRef: "radical-revolution",
  generate(rng, tier) {
    const pool = datedFor(tier).filter((d) => tier === 3 || (d.year >= 1770 && d.year <= 1804));
    let a = pool[0], b = pool[1];
    for (let i = 0; i < 200; i++) {
      a = rng.pick(pool);
      b = rng.pick(pool);
      if (a.year !== b.year && (tier > 1 || a.year === 1789 || b.year === 1789)) break;
    }
    if (a.year === b.year) { a = DATED.find((d) => d.year === 1789)!; b = DATED.find((d) => d.year === 1804)!; }
    const [early, late] = a.year < b.year ? [a, b] : [b, a];
    const gap = late.year - early.year;
    const tpl = rng.int(0, 1);
    const prompt = tpl === 0
      ? `How many years were there between **${early.label}** and **${late.label}**?`
      : `**${late.label.charAt(0).toUpperCase()}${late.label.slice(1)}** came how many years after **${early.label}**?`;
    return {
      prompt,
      answer: { type: "number", value: gap },
      solution: [`${early.label.charAt(0).toUpperCase()}${early.label.slice(1)} was in **${early.year}**; ${late.label} was in **${late.year}**.`, `${late.year} − ${early.year} = **${gap}** year${gap === 1 ? "" : "s"}.`],
      hint: "Recall both years first, then subtract the earlier from the later.",
      traps: [{ spec: { type: "number", value: gap + 1 }, feedback: "Don't add one — just subtract the earlier year from the later one." }],
    };
  },
};

export const drills: Drill[] = [
  yearRecall,
  whichEstate,
  keyTerm,
  events1789,
  whosWho,
  activePassive,
  causeType,
  whichFirst,
  keptOrReversed,
  yearsBetween,
];

