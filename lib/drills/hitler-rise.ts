// Skill drills for "Hitler's Rise to Power".
// Bank-based: every fact below is taken from (and consistent with)
// lib/topics/hitler-rise/guide.ts and lib/extras/hitler-rise.ts.
// Persecution is deliberately NOT turned into quick-fire drill items.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";

type Tier = 1 | 2 | 3;

/** Tier 1 = headline items only; tier 2 = tiers 1–2; tier 3 = the finer (tier 2–3) items. */
function pool<T extends { tier: Tier }>(bank: readonly T[], tier: Tier): T[] {
  return bank.filter((i) => (tier === 1 ? i.tier === 1 : tier === 2 ? i.tier <= 2 : i.tier >= 2));
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function txt(accept: string[], display?: string): AnswerSpec {
  return { type: "text", accept, display: display ?? accept[0] };
}

function num(value: number, display?: string): AnswerSpec {
  return display ? { type: "number", value, display } : { type: "number", value };
}

function trapT(accept: string[], feedback: string): Trap {
  return { spec: { type: "text", accept }, feedback };
}

function trapN(value: number, feedback: string): Trap {
  return { spec: { type: "number", value }, feedback };
}

// ---------------------------------------------------------------------------
// Generic question-and-answer bank
// ---------------------------------------------------------------------------

interface QA {
  tier: Tier;
  /** One or more wordings of the same question. */
  prompts: string[];
  answer: AnswerSpec;
  sol: string[];
  hint: string;
  traps?: Trap[];
}

/** `frame` is an optional lead-in naming the period, used on about half the questions. */
function qaItem(rng: Rng, bank: readonly QA[], tier: Tier, frame: string): DrillItem {
  const q = rng.pick(pool(bank, tier));
  const base = rng.pick(q.prompts);
  const prompt = rng.bool() ? `**${frame}** ${base}` : base;
  return { prompt, answer: q.answer, solution: q.sol, hint: q.hint, traps: q.traps };
}

// Shared accept lists
const A_ARTICLE48 = ["Article 48", "Art 48", "Art. 48", "Article forty-eight"];
const A_ENABLING = ["Enabling Act", "Enabling Law", "the Enabling Act of 1933"];
const A_SA = ["SA", "Sturmabteilung", "stormtroopers", "storm troopers", "brownshirts", "brown shirts"];
const A_SS = ["SS", "Schutzstaffel"];
const A_FUHRER = ["Führer", "Fuhrer", "Fuehrer", "Der Führer", "Der Fuhrer"];
const A_HYPER = ["hyperinflation", "hyper-inflation", "hyper inflation"];
const A_RENTENMARK = ["Rentenmark", "Rentenmarks", "the Rentenmark", "Renten mark"];
const A_ROHM = ["Röhm", "Rohm", "Roehm", "Ernst Röhm", "Ernst Rohm", "Ernst Roehm"];
const A_HINDENBURG = ["Hindenburg", "Paul von Hindenburg", "von Hindenburg", "President Hindenburg", "Field Marshal Hindenburg"];
const A_PAPEN = ["Papen", "von Papen", "Franz von Papen"];
const A_SCHLEICHER = ["Schleicher", "von Schleicher", "Kurt von Schleicher", "General Schleicher"];
const A_LUDENDORFF = ["Ludendorff", "Erich Ludendorff", "General Ludendorff"];
const A_BRUNING = ["Brüning", "Bruning", "Bruening", "Heinrich Brüning", "Heinrich Bruning"];

// ---------------------------------------------------------------------------
// 1. Key terms (weimar-republic)
// ---------------------------------------------------------------------------

interface Term {
  tier: Tier;
  def: string;
  accept: string[];
  sol: string;
  traps?: Trap[];
}

const TERMS: Term[] = [
  {
    tier: 1,
    def: "The part of the Weimar constitution that let the President rule by decree in an emergency, bypassing the Reichstag.",
    accept: A_ARTICLE48,
    sol: "**Article 48** — meant for genuine emergencies, from 1930 it let Hindenburg govern without parliament.",
    traps: [trapT(A_ENABLING, "The Enabling Act (1933) gave power to Hitler's cabinet. This was the President's emergency power, written into the 1919 constitution.")],
  },
  {
    tier: 1,
    def: "The law of 23 March 1933 that let Hitler's government make laws without the Reichstag for four years.",
    accept: A_ENABLING,
    sol: "The **Enabling Act** passed by 444 votes to 94 — parliament voted away its own power.",
    traps: [trapT(A_ARTICLE48, "Article 48 was the President's emergency power. This 1933 law handed law-making to Hitler's own government.")],
  },
  {
    tier: 1,
    def: "Prices rising so fast that money becomes almost worthless — as in Germany in 1923.",
    accept: A_HYPER,
    sol: "**Hyperinflation**: a loaf went from 0.63 marks (1918) to about 201 billion marks (November 1923).",
    traps: [trapT(["inflation"], "Close — but ordinary inflation is a steady rise. What do we call inflation that is completely out of control?")],
  },
  {
    tier: 1,
    def: "An attempt to seize power by force — like Hitler's failed attempt in Munich in November 1923.",
    accept: ["putsch", "coup", "coup d'etat", "coup d'état", "uprising", "revolt"],
    sol: "A **putsch** (or coup). Hitler's Munich Putsch of 8–9 November 1923 failed, so he switched to winning power legally.",
  },
  {
    tier: 1,
    def: "The Nazi Party's paramilitary force, set up to guard its meetings and break up opponents' meetings; led by Ernst Röhm.",
    accept: A_SA,
    sol: "The **SA** (*Sturmabteilung*, 'stormtroopers' or 'brownshirts') had about 400,000 members by 1932.",
    traps: [trapT(A_SS, "The SS was the elite force that murdered the SA's leaders in 1934. This is the larger street army led by Röhm.")],
  },
  {
    tier: 1,
    def: "Hitler's title from August 1934, after he merged the posts of President and Chancellor.",
    accept: A_FUHRER,
    sol: "**Führer** means 'leader'. Hitler took the title when Hindenburg died on 2 August 1934.",
    traps: [trapT(["Chancellor"], "He had been Chancellor since January 1933. After Hindenburg died he took a new title combining both top jobs.")],
  },
  {
    tier: 1,
    def: "Payments Germany had to make for war damage under the Treaty of Versailles.",
    accept: ["reparations", "reparation", "war reparations", "reparation payments"],
    sol: "**Reparations** were fixed in 1921 at 132 billion gold marks (£6.6 billion).",
  },
  {
    tier: 1,
    def: "A voting system that gives each party seats in proportion to its share of the vote.",
    accept: ["proportional representation", "PR"],
    sol: "**Proportional representation** was fair, but it gave seats to many small parties, so governments were unstable coalitions.",
  },
  {
    tier: 1,
    def: "A government made up of several parties working together, because no single party has a majority.",
    accept: ["coalition", "coalition government", "a coalition government"],
    sol: "A **coalition**. Under PR no party ever won a majority, so Weimar governments were coalitions that often collapsed.",
  },
  {
    tier: 2,
    def: "The German name for the Treaty of Versailles, because Germany was not allowed to negotiate its terms.",
    accept: ["Diktat", "dictated peace", "a dictated peace"],
    sol: "**Diktat** ('dictated peace') — Germany had to sign or face renewed war.",
  },
  {
    tier: 2,
    def: "An agreement to stop fighting, like the one signed on 11 November 1918.",
    accept: ["armistice", "ceasefire", "cease-fire", "truce"],
    sol: "The **armistice** ended the fighting of the First World War on 11 November 1918.",
    traps: [trapT(["Treaty of Versailles", "Versailles"], "The treaty came later (June 1919). This was the ceasefire that stopped the fighting.")],
  },
  {
    tier: 2,
    def: "Armed bands of ex-soldiers, mostly right-wing, used by the government to crush the Spartacists in 1919.",
    accept: ["Freikorps", "Free Corps", "Freecorps"],
    sol: "The **Freikorps** crushed the Spartacists — but in 1920 some of them backed the Kapp Putsch against the government.",
  },
  {
    tier: 2,
    def: "Refusing to work for the occupiers, as the German government urged Ruhr workers to do in 1923.",
    accept: ["passive resistance"],
    sol: "**Passive resistance**: workers went on strike, and the government paid them by printing money — feeding hyperinflation.",
  },
  {
    tier: 2,
    def: "The false claim that the German army was not defeated in 1918 but betrayed by politicians at home.",
    accept: ["stab in the back", "stab-in-the-back myth", "stab in the back myth", "stab in the back legend", "Dolchstoss", "Dolchstosslegende", "Dolchstoß"],
    sol: "The **'stab in the back' myth**. In fact the army's own commanders, Hindenburg and Ludendorff, said the war could not be won.",
  },
  {
    tier: 2,
    def: "Nationalists' insulting name for the politicians who signed the armistice in November 1918.",
    accept: ["November Criminals", "November Criminal"],
    sol: "The **'November Criminals'** — blamed by nationalists for a defeat the generals themselves had admitted.",
  },
  {
    tier: 2,
    def: "Information, often one-sided or false, spread to persuade people — Joseph Goebbels' speciality.",
    accept: ["propaganda"],
    sol: "**Propaganda**: Goebbels used posters, rallies, films and radio with short, repeated messages like 'Work and Bread'.",
  },
  {
    tier: 2,
    def: "The elected assembly in Berlin that made Germany's laws; its building burned on 27 February 1933.",
    accept: ["Reichstag", "parliament", "German parliament", "Reichstag building"],
    sol: "The **Reichstag**. The Nazis blamed the fire on the communists and used it to suspend civil rights.",
  },
  {
    tier: 3,
    def: "Hitler's aim, set out in Mein Kampf, of conquering land in eastern Europe for Germans to settle.",
    accept: ["Lebensraum", "living space"],
    sol: "**Lebensraum** ('living space') — an aim that pointed towards war in the east.",
  },
  {
    tier: 3,
    def: "The new currency introduced in November 1923 that ended hyperinflation.",
    accept: A_RENTENMARK,
    sol: "The **Rentenmark**, brought in under Stresemann, ended hyperinflation.",
  },
  {
    tier: 3,
    def: "The clause of the Treaty of Versailles in which Germany accepted responsibility for the war's loss and damage.",
    accept: ["war guilt clause", "war guilt", "Article 231", "guilt clause"],
    sol: "**Article 231**, the 'war guilt' clause — the B for Blame in LAMB.",
    traps: [trapT(A_ARTICLE48, "Article 48 was in the Weimar constitution. The Versailles clause about blame had a different number.")],
  },
  {
    tier: 3,
    def: "The worldwide economic slump that followed the Wall Street Crash of October 1929.",
    accept: ["Great Depression", "Depression", "the Depression", "slump", "economic depression"],
    sol: "The **Great Depression**: unemployment in Germany reached over 6 million at its peak in 1932.",
    traps: [trapT(A_HYPER, "Hyperinflation was the crisis of 1923. The slump after 1929 was a different crisis.")],
  },
  {
    tier: 3,
    def: "A law made by order of the President, without a vote in the Reichstag.",
    accept: ["decree", "decrees", "presidential decree", "emergency decree"],
    sol: "A **decree**. By 1932 there were 66 presidential decrees but only 5 laws passed by the Reichstag.",
  },
  {
    tier: 3,
    def: "Head of the German government, appointed by the President and supposed to have the support of the Reichstag.",
    accept: ["Chancellor", "Reich Chancellor"],
    sol: "The **Chancellor**. Hitler was appointed Chancellor — not elected — on 30 January 1933.",
    traps: [trapT(["President"], "The President (elected every 7 years) appointed this person, who ran the government day to day.")],
  },
];

// ---------------------------------------------------------------------------
// 2. Versailles (LAMB)
// ---------------------------------------------------------------------------

type Lamb = "Land" | "Army" | "Money" | "Blame";

const LAMB_ACCEPT: Record<Lamb, string[]> = {
  Land: ["Land", "L", "territory"],
  Army: ["Army", "A", "military", "armed forces"],
  Money: ["Money", "M", "reparations"],
  Blame: ["Blame", "B", "war guilt", "guilt"],
};

interface LambTerm {
  term: string;
  cat: Lamb;
  why: string;
  /** A tempting wrong category, with feedback. */
  wrong?: [Lamb, string];
}

const LAMB_TERMS: LambTerm[] = [
  { term: "Alsace-Lorraine was returned to France.", cat: "Land", why: "Germany lost about 13% of its European land, including Alsace-Lorraine." },
  { term: "West Prussia and Posen went to Poland, creating the 'Polish Corridor'.", cat: "Land", why: "The Polish Corridor cut East Prussia off from the rest of Germany." },
  { term: "All of Germany's colonies were taken away.", cat: "Land", why: "Germany's overseas colonies were taken — territory lost." },
  { term: "Germany lost about 13% of its European land.", cat: "Land", why: "This is the headline figure for the land Germany lost in Europe." },
  { term: "The army was limited to 100,000 men.", cat: "Army", why: "Limits on the armed forces are the A in LAMB." },
  { term: "Conscription (compulsory military service) was banned.", cat: "Army", why: "Germany could not force men to serve — an armed-forces limit." },
  { term: "Germany was allowed no air force.", cat: "Army", why: "A ban on military aircraft limits the armed forces." },
  { term: "Germany was allowed no submarines.", cat: "Army", why: "A naval limit — part of the armed-forces terms." },
  { term: "The navy was cut to 6 battleships.", cat: "Army", why: "A naval limit — part of the armed-forces terms." },
  {
    term: "The Rhineland was demilitarised.",
    cat: "Army",
    why: "The Rhineland stayed German, but no troops were allowed there — a military restriction.",
    wrong: ["Land", "The Rhineland stayed German. The term was about soldiers: none were allowed there."],
  },
  { term: "Reparations were fixed in 1921 at £6.6 billion.", cat: "Money", why: "Reparations for war damage are the M in LAMB." },
  { term: "Germany had to pay 132 billion gold marks for war damage.", cat: "Money", why: "132 billion gold marks (£6.6 billion) was the reparations bill fixed in 1921." },
  { term: "Article 231 — the 'war guilt' clause.", cat: "Blame", why: "Germany had to accept responsibility for the war's loss and damage." },
  {
    term: "Germany had to accept responsibility for the loss and damage caused by the war.",
    cat: "Blame",
    why: "This is the war guilt clause, Article 231.",
    wrong: ["Money", "Reparations were justified by it, but this term itself is about accepting responsibility."],
  },
];

const LAMB_DETAIL: QA[] = [
  {
    tier: 2,
    prompts: ["Under the Treaty of Versailles, how many men could the German army have?", "Versailles limited the German army to how many soldiers?"],
    answer: num(100000, "100,000"),
    sol: ["**100,000 men**, with no conscription — tiny compared with the millions who had fought in 1914–18."],
    hint: "A round number with five zeros.",
  },
  {
    tier: 2,
    prompts: ["Which region did Germany have to return to France under the Treaty of Versailles?"],
    answer: txt(["Alsace-Lorraine", "Alsace Lorraine", "Alsace and Lorraine", "Alsace"], "Alsace-Lorraine"),
    sol: ["**Alsace-Lorraine**, which Germany had taken from France in 1871."],
    hint: "Two names joined by a hyphen, on the French border.",
  },
  {
    tier: 2,
    prompts: ["What number was the 'war guilt' clause of the Treaty of Versailles? (Article …)"],
    answer: num(231),
    sol: ["**Article 231** — Germany accepted responsibility for the war's loss and damage."],
    hint: "A three-digit number beginning with 2.",
    traps: [trapN(48, "Article 48 is the Weimar constitution's emergency power. The war guilt clause is in the treaty.")],
  },
  {
    tier: 2,
    prompts: ["In 1921 reparations were fixed at how many billion pounds? (Give the number of billions.)"],
    answer: num(6.6, "£6.6 billion"),
    sol: ["**£6.6 billion** (132 billion gold marks), fixed in 1921."],
    hint: "Between 6 and 7.",
    traps: [trapN(132, "132 billion was the figure in gold marks. In pounds it was much smaller.")],
  },
  {
    tier: 2,
    prompts: ["What was the strip of land given to Poland, which cut East Prussia off from the rest of Germany, called?"],
    answer: txt(["Polish Corridor", "corridor", "Danzig corridor"], "the Polish Corridor"),
    sol: ["The **Polish Corridor** gave Poland access to the sea."],
    hint: "Named after the country that gained it.",
  },
  {
    tier: 2,
    prompts: ["Which German region, along the border with France, had to be kept free of troops?"],
    answer: txt(["Rhineland", "the Rhineland", "Rhine"], "the Rhineland"),
    sol: ["The **Rhineland** was demilitarised — a buffer to protect France."],
    hint: "It's named after a great river.",
    traps: [trapT(["Ruhr", "the Ruhr"], "The Ruhr was occupied by France in 1923. The demilitarised zone was named after a river further west.")],
  },
  {
    tier: 2,
    prompts: ["In which year was the Treaty of Versailles signed?"],
    answer: num(1919),
    sol: ["**28 June 1919**, in the Hall of Mirrors at Versailles."],
    hint: "The year after the armistice.",
    traps: [trapN(1918, "1918 was the armistice. The treaty was signed the following June.")],
  },
  {
    tier: 3,
    prompts: ["Under Versailles, how many battleships could the German navy keep?"],
    answer: num(6),
    sol: ["**6 battleships**, and no submarines."],
    hint: "Fewer than ten.",
  },
  {
    tier: 3,
    prompts: ["Which French leader at the peace conference wanted to make Germany pay most heavily? Give his surname."],
    answer: txt(["Clemenceau", "Georges Clemenceau"]),
    sol: ["**Clemenceau** — France had suffered huge damage and wanted security and revenge."],
    hint: "One of the 'Big Three', with Lloyd George and Wilson.",
    traps: [trapT(["Lloyd George", "David Lloyd George"], "Lloyd George was the British leader. The French leader was the hardest-liner.")],
  },
  {
    tier: 3,
    prompts: ["In which year were reparations finally fixed at £6.6 billion?"],
    answer: num(1921),
    sol: ["**1921** — two years after the treaty was signed."],
    hint: "The treaty left the figure to be decided later.",
    traps: [trapN(1919, "The treaty was signed in 1919, but the bill was only fixed later.")],
  },
  {
    tier: 3,
    prompts: ["About what percentage of its European land did Germany lose at Versailles?"],
    answer: num(13, "13%"),
    sol: ["About **13%** — Germany kept most of its land and industry, one reason historians debate how harsh the treaty really was."],
    hint: "Between 10 and 15.",
  },
  {
    tier: 3,
    prompts: ["In which room of the Palace of Versailles was the treaty signed?"],
    answer: txt(["Hall of Mirrors", "the Hall of Mirrors", "Galerie des Glaces"], "the Hall of Mirrors"),
    sol: ["The **Hall of Mirrors** — where the German Empire had been proclaimed in 1871, so France chose it deliberately."],
    hint: "The room's walls are lined with glass.",
  },
  {
    tier: 3,
    prompts: ["Which international organisation, set up by the peace settlement, was Germany at first not allowed to join?"],
    answer: txt(["League of Nations", "the League", "League"], "the League of Nations"),
    sol: ["The **League of Nations**. Germany was finally admitted in 1926 under Stresemann."],
    hint: "Germany joined it in 1926.",
  },
];

function lambClassify(rng: Rng): DrillItem {
  const t = rng.pick(LAMB_TERMS);
  const prompt = rng.bool()
    ? `Under **LAMB**, which part of the Treaty of Versailles is this? Answer *Land*, *Army*, *Money* or *Blame*.\n\n> ${t.term}`
    : `Remember LAMB (Land, Army, Money, Blame). Which letter does this term of the Treaty of Versailles belong to?\n\n> ${t.term}`;
  const traps: Trap[] = t.wrong ? [trapT(LAMB_ACCEPT[t.wrong[0]], t.wrong[1])] : [];
  return {
    prompt,
    answer: txt(LAMB_ACCEPT[t.cat], t.cat),
    solution: [`**${t.cat}.** ${t.why}`],
    hint: "Land = territory lost; Army = limits on armed forces; Money = reparations; Blame = war guilt.",
    traps,
  };
}

// ---------------------------------------------------------------------------
// 3. Key dates, 1918–1934
// ---------------------------------------------------------------------------

interface DateFact {
  year: number;
  tier: Tier;
  q: string;
  name: string;
  sol: string;
  trap?: [number, string];
}

const DATES: DateFact[] = [
  { year: 1918, tier: 1, q: "In which year was the armistice signed that ended the fighting of the First World War?", name: "the armistice ends the First World War", sol: "**11 November 1918** — two days after the Kaiser abdicated." },
  { year: 1919, tier: 1, q: "In which year was the Treaty of Versailles signed?", name: "the Treaty of Versailles is signed", sol: "**28 June 1919**, in the Hall of Mirrors.", trap: [1918, "1918 was the armistice. The treaty came the following June."] },
  { year: 1923, tier: 1, q: "In which year did hyperinflation reach its peak in Germany?", name: "hyperinflation peaks", sol: "**1923** — by November a loaf cost about 201 billion marks.", trap: [1929, "1929 brought the Wall Street Crash and the Depression — a different crisis."] },
  { year: 1923, tier: 1, q: "In which year did Hitler's Munich (Beer Hall) Putsch take place?", name: "the Munich Putsch", sol: "**8–9 November 1923**, at the height of hyperinflation.", trap: [1933, "1933 is when Hitler was appointed Chancellor. The putsch was ten years earlier."] },
  { year: 1929, tier: 1, q: "In which year did the Wall Street Crash happen?", name: "the Wall Street Crash", sol: "**October 1929** — American banks then recalled their loans to Germany." },
  { year: 1933, tier: 1, q: "In which year was Hitler appointed Chancellor?", name: "Hitler is appointed Chancellor", sol: "**30 January 1933**, by President Hindenburg.", trap: [1932, "In 1932 the Nazis became the largest party, but Hitler was only appointed the following January."] },
  { year: 1933, tier: 1, q: "In which year was the Enabling Act passed?", name: "the Enabling Act is passed", sol: "**23 March 1933**, by 444 votes to 94." },
  { year: 1934, tier: 1, q: "In which year did the Night of the Long Knives take place?", name: "the Night of the Long Knives", sol: "**30 June 1934** — Röhm and other SA leaders were murdered." },
  { year: 1934, tier: 1, q: "In which year did Hitler become Führer after Hindenburg's death?", name: "Hitler becomes Führer", sol: "**2 August 1934** — Hindenburg died and Hitler merged the posts of President and Chancellor.", trap: [1933, "In 1933 he became Chancellor. He became Führer when Hindenburg died, the following year."] },
  { year: 1919, tier: 2, q: "In which year did the Spartacist uprising take place in Berlin?", name: "the Spartacist uprising", sol: "**January 1919** — crushed by the Freikorps." },
  { year: 1920, tier: 2, q: "In which year did the Kapp Putsch take place?", name: "the Kapp Putsch", sol: "**March 1920** — defeated by a general strike.", trap: [1923, "1923 was Hitler's Munich Putsch. Kapp's attempt in Berlin came three years earlier."] },
  { year: 1923, tier: 2, q: "In which year did French and Belgian troops occupy the Ruhr?", name: "the occupation of the Ruhr", sol: "**January 1923**, after Germany fell behind with reparations." },
  { year: 1924, tier: 2, q: "In which year was the Dawes Plan agreed?", name: "the Dawes Plan", sol: "**1924** — reparations made manageable and American loans flowed in.", trap: [1929, "1929 was the Young Plan. Dawes came first."] },
  { year: 1929, tier: 2, q: "In which year was the Young Plan agreed?", name: "the Young Plan", sol: "**1929** — reparations reduced and spread over 59 years.", trap: [1924, "1924 was the Dawes Plan. The Young Plan came five years later."] },
  { year: 1929, tier: 2, q: "In which year did Gustav Stresemann die?", name: "Stresemann dies", sol: "**October 1929** — the same month as the Wall Street Crash." },
  { year: 1932, tier: 2, q: "In which year did the Nazis become the largest party in the Reichstag, winning 37.3% of the vote?", name: "the Nazis become the largest party (37.3%)", sol: "**July 1932** — 230 seats, their best result in a free election.", trap: [1933, "1933 is when Hitler was appointed. The Nazis' best free-election result came the year before."] },
  { year: 1933, tier: 2, q: "In which year did the Reichstag Fire happen?", name: "the Reichstag Fire", sol: "**27 February 1933** — four weeks after Hitler became Chancellor." },
  { year: 1919, tier: 2, q: "In which year did the Weimar constitution come into force?", name: "the Weimar constitution comes into force", sol: "**August 1919** — votes for all over 20, PR and Article 48." },
  { year: 1925, tier: 2, q: "In which year were the Locarno Treaties signed?", name: "the Locarno Treaties", sol: "**1925** — Germany accepted its western borders." },
  { year: 1926, tier: 2, q: "In which year was Germany admitted to the League of Nations?", name: "Germany joins the League of Nations", sol: "**1926** — a sign Germany was accepted as a great power again." },
  { year: 1921, tier: 3, q: "In which year were reparations fixed at £6.6 billion?", name: "reparations fixed at £6.6 billion", sol: "**1921** — two years after the treaty.", trap: [1919, "The treaty was signed in 1919, but the bill was fixed later."] },
  { year: 1923, tier: 3, q: "In which year was the Rentenmark introduced?", name: "the Rentenmark is introduced", sol: "**November 1923** — the new currency ended hyperinflation." },
  { year: 1928, tier: 3, q: "In which year did the Nazis win just 2.6% of the vote (12 seats)?", name: "the Nazis win only 2.6%", sol: "**May 1928**, during the 'Golden Years'.", trap: [1930, "In 1930 they won 18.3%. Their 2.6% came in the election before."] },
  { year: 1930, tier: 3, q: "In which year did the Nazis jump to 107 seats (18.3% of the vote)?", name: "the Nazis win 107 seats", sol: "**September 1930** — the first election after the Wall Street Crash." },
  { year: 1930, tier: 3, q: "In which year did Chancellor Brüning start governing by Article 48 decrees?", name: "Brüning begins governing by decree", sol: "**1930** — Brüning had no majority, so Hindenburg signed decrees instead." },
  { year: 1932, tier: 3, q: "In which year did Hitler lose the presidential election to Hindenburg?", name: "Hitler loses the presidential election", sol: "**1932** — Hindenburg won the run-off with about 53% to Hitler's 37%." },
  { year: 1889, tier: 3, q: "In which year was Hitler born?", name: "Hitler is born in Austria", sol: "**1889**, in Braunau am Inn, Austria." },
  { year: 1924, tier: 3, q: "In which year did Hitler write Mein Kampf in Landsberg prison?", name: "Mein Kampf is written", sol: "**1924** — after his trial for the Munich Putsch." },
  { year: 1920, tier: 3, q: "In which year was the German Workers' Party renamed the NSDAP (the Nazi Party)?", name: "the DAP becomes the NSDAP", sol: "**1920** — the same year as the 25-Point Programme.", trap: [1919, "Hitler joined the DAP in 1919. The name changed the following year."] },
  { year: 1921, tier: 3, q: "In which year did Hitler become leader of the Nazi Party?", name: "Hitler becomes party leader", sol: "**1921** — his speaking skill made him the party's star." },
  { year: 1922, tier: 3, q: "In which year was the foreign minister Walther Rathenau murdered?", name: "Rathenau is murdered", sol: "**1922** — one of hundreds of political murders, mostly by right-wing groups." },
];

function dateItem(rng: Rng, tier: Tier): DrillItem {
  const f = rng.pick(pool(DATES, tier));
  const prompt = rng.bool() ? f.q : `Date check — **${cap(f.name)}**. In which year?`;
  const traps: Trap[] = f.trap ? [trapN(f.trap[0], f.trap[1])] : [];
  return { prompt, answer: num(f.year), solution: [f.sol], hint: "Anchor it: 1918 defeat · 1923 crisis year · 1929 Crash · 1933 Chancellor · 1934 Führer.", traps };
}

// ---------------------------------------------------------------------------
// 4. Years of crisis, 1919–1923
// ---------------------------------------------------------------------------

const CRISES: QA[] = [
  {
    tier: 1,
    prompts: [
      "Name the event: **January 1919** — communists led by Rosa Luxemburg and Karl Liebknecht try to start a revolution in Berlin, and the Freikorps crush them.",
      "Which uprising is described here?\n\n> Berlin, January 1919. Communists try to seize power; the government sends in the Freikorps; the two leaders are murdered.",
    ],
    answer: txt(["Spartacist uprising", "Spartacist revolt", "Spartacist rising", "Spartacists", "Spartacist", "Spartacus uprising"], "the Spartacist uprising"),
    sol: ["The **Spartacist uprising** (January 1919) — a threat from the left, crushed with the help of right-wing ex-soldiers."],
    hint: "The communists named themselves after a slave who led a revolt against Rome.",
  },
  {
    tier: 1,
    prompts: [
      "Name the event: **March 1920** — right-wing Freikorps seize Berlin; the army refuses to fire on them, but a general strike defeats them in about four days.",
      "Which putsch is described here?\n\n> Berlin, March 1920. Right-wing ex-soldiers take over the capital and the government flees — until workers go on a general strike.",
    ],
    answer: txt(["Kapp Putsch", "Kapp", "Kapp-Lüttwitz Putsch"], "the Kapp Putsch"),
    sol: ["The **Kapp Putsch** (1920) — a threat from the right. The army stood aside; workers saved the republic."],
    hint: "Named after its leader, Wolfgang …",
    traps: [trapT(["Munich Putsch", "Beer Hall Putsch"], "Hitler's putsch was in Munich in 1923. This one was in Berlin, three years earlier.")],
  },
  {
    tier: 1,
    prompts: [
      "Name the event: **January 1923** — French and Belgian troops march into Germany's industrial heartland to take coal and goods instead of reparations.",
      "Which crisis is described here?\n\n> 1923. Foreign troops occupy Germany's main coal and steel region after Germany falls behind with its payments.",
    ],
    answer: txt(["occupation of the Ruhr", "Ruhr occupation", "Ruhr crisis", "invasion of the Ruhr", "Ruhr", "the Ruhr"], "the occupation of the Ruhr"),
    sol: ["The **occupation of the Ruhr** (January 1923). Workers' passive resistance, paid for by printing money, pushed Germany into hyperinflation."],
    hint: "It's named after Germany's industrial region.",
    traps: [trapT(["Rhineland"], "The Rhineland was demilitarised by Versailles. The 1923 occupation was of the industrial region next to it.")],
  },
  {
    tier: 1,
    prompts: [
      "Name the crisis: in **1923** the government prints so much money that a loaf costing 0.63 marks in 1918 costs about 201 billion marks by November.",
      "Which crisis is described here?\n\n> 1923. Workers are paid twice a day and rush to spend their wages before prices rise again. Life savings become worthless.",
    ],
    answer: txt(A_HYPER, "hyperinflation"),
    sol: ["**Hyperinflation** (1923): with far more money chasing far fewer goods, prices spiralled out of control."],
    hint: "Inflation — but completely out of control.",
    traps: [trapT(["Depression", "Great Depression"], "The Depression came after 1929. This was the money crisis of 1923.")],
  },
  {
    tier: 1,
    prompts: ["Why did France occupy the Ruhr in January 1923? Germany had fallen behind with paying its …"],
    answer: txt(["reparations", "reparation payments", "reparation"], "reparations"),
    sol: ["**Reparations** — so French and Belgian troops went to take coal and goods instead."],
    hint: "The M in LAMB.",
  },
  {
    tier: 1,
    prompts: ["In the Ruhr crisis, what did the German government urge workers to do instead of working for the French? (Two words.)"],
    answer: txt(["passive resistance"], "passive resistance"),
    sol: ["**Passive resistance** — and the government paid the striking workers by printing more money."],
    hint: "Resisting without fighting back.",
  },
  {
    tier: 1,
    prompts: ["What defeated the Kapp Putsch in 1920?", "The army refused to stop the Kapp Putsch. What did Berlin's workers do that defeated it?"],
    answer: txt(["general strike", "a general strike", "strike", "strikes", "workers' strike", "workers strike"], "a general strike"),
    sol: ["A **general strike** — with no water, gas, electricity or transport, the putsch collapsed in about four days."],
    hint: "Workers stopped working.",
    traps: [trapT(["army", "the army", "Reichswehr"], "The army stood aside and refused to fire on the putschists. Someone else saved the government.")],
  },
  {
    tier: 1,
    prompts: ["Hyperinflation, 1923: who **gained** — savers or people with debts? Answer *savers* or *debtors*."],
    answer: txt(["debtors", "debtor", "people with debts", "borrowers"], "debtors"),
    sol: ["**Debtors** could pay off loans with almost worthless money — some farmers and businessmen gained."],
    hint: "If money is worthless, what happens to a debt written in marks?",
    traps: [trapT(["savers", "saver"], "Savers were ruined — their savings became worthless.")],
  },
  {
    tier: 1,
    prompts: ["Hyperinflation, 1923: who was **ruined** — savers or people with debts? Answer *savers* or *debtors*."],
    answer: txt(["savers", "saver", "people with savings"], "savers"),
    sol: ["**Savers** (and pensioners, people on fixed incomes) — a lifetime's savings would not buy a loaf."],
    hint: "Whose money sat in the bank, losing value every hour?",
    traps: [trapT(["debtors", "debtor"], "Debtors gained — they paid off loans with almost worthless money.")],
  },
  {
    tier: 1,
    prompts: ["In which city did the Spartacists try to start a revolution in January 1919?"],
    answer: txt(["Berlin"]),
    sol: ["**Berlin** — which is why the new National Assembly met in the quieter town of Weimar."],
    hint: "The capital.",
    traps: [trapT(["Munich"], "Munich was where Hitler's putsch happened in 1923.")],
  },
  {
    tier: 2,
    prompts: ["Which social class was hit hardest by losing its savings in 1923 — and never forgot it?"],
    answer: txt(["middle class", "middle classes", "the middle class", "middle-class", "middle"], "the middle classes"),
    sol: ["The **middle classes** — many blamed democracy and later turned to the Nazis when the Depression hit."],
    hint: "Not the very rich, not the poorest workers.",
  },
  {
    tier: 2,
    prompts: ["Which communist leader co-led the Spartacist uprising and was murdered by the Freikorps in January 1919? (She led it with Karl Liebknecht.)"],
    answer: txt(["Rosa Luxemburg", "Luxemburg", "Luxembourg", "Rosa Luxembourg"], "Rosa Luxemburg"),
    sol: ["**Rosa Luxemburg**, murdered with Karl Liebknecht."],
    hint: "Her surname sounds like a small European country.",
  },
  {
    tier: 2,
    prompts: ["Who led the right-wing putsch in Berlin in March 1920? Give his surname."],
    answer: txt(["Kapp", "Wolfgang Kapp"]),
    sol: ["**Wolfgang Kapp** — his putsch lasted about four days."],
    hint: "The putsch is named after him.",
  },
  {
    tier: 2,
    prompts: ["Which country led the occupation of the Ruhr in January 1923, together with Belgium?"],
    answer: txt(["France", "the French", "French"], "France"),
    sol: ["**France** (with Belgium) — determined to get reparations one way or another."],
    hint: "Germany's western neighbour, which had suffered most damage in the war.",
  },
  {
    tier: 2,
    prompts: ["What were the armed groups of ex-soldiers, mostly right-wing, that crushed the Spartacists called?"],
    answer: txt(["Freikorps", "Free Corps", "Freecorps"], "the Freikorps"),
    sol: ["The **Freikorps** — the government relied on right-wing ex-soldiers to defeat the left."],
    hint: "German for 'free corps'.",
  },
  {
    tier: 2,
    prompts: ["What new currency ended hyperinflation in November 1923?"],
    answer: txt(A_RENTENMARK, "the Rentenmark"),
    sol: ["The **Rentenmark**, introduced under Stresemann."],
    hint: "Its name ends in '-mark'.",
  },
  {
    tier: 3,
    prompts: ["Which foreign minister was murdered by right-wing extremists in 1922? Give his surname."],
    answer: txt(["Rathenau", "Walther Rathenau", "Walter Rathenau"]),
    sol: ["**Walther Rathenau** — right-wing killers often got light sentences from sympathetic judges."],
    hint: "Initial R.",
  },
  {
    tier: 3,
    prompts: ["Which politician, who had signed the armistice, was murdered by right-wing extremists in 1921? Give his surname."],
    answer: txt(["Erzberger", "Matthias Erzberger"]),
    sol: ["**Matthias Erzberger** — killed for signing the armistice, branded a 'November Criminal'."],
    hint: "Initial E.",
  },
  {
    tier: 3,
    prompts: ["According to textbook figures, how many marks did a loaf of bread cost in January 1923?"],
    answer: num(250),
    sol: ["About **250 marks** — up from 0.63 in 1918. By November it was about 201 billion."],
    hint: "A few hundred.",
    traps: [trapN(163, "163 marks was the price in 1922. It had risen further by January 1923.")],
  },
  {
    tier: 3,
    prompts: ["According to textbook figures, how many marks did a loaf of bread cost in 1918?"],
    answer: num(0.63),
    sol: ["About **0.63 marks** — less than one mark."],
    hint: "Less than one mark.",
  },
  {
    tier: 3,
    prompts: ["By November 1923, roughly how many marks was one US dollar worth? Give the number of trillions."],
    answer: num(4.2, "about 4.2 trillion"),
    sol: ["About **4.2 trillion marks** to the dollar — the mark was effectively worthless."],
    hint: "Between 4 and 5.",
  },
];

// ---------------------------------------------------------------------------
// 5. The early Nazi Party and the Munich Putsch
// ---------------------------------------------------------------------------

const EARLY_NAZI: QA[] = [
  {
    tier: 1,
    prompts: ["In which country was Hitler born?"],
    answer: txt(["Austria", "Austria-Hungary", "Braunau", "Braunau am Inn"], "Austria"),
    sol: ["**Austria** — in Braunau am Inn, in 1889. He was not German by birth."],
    hint: "Germany's southern neighbour.",
    traps: [trapT(["Germany"], "He was born just across the border — not German by birth.")],
  },
  {
    tier: 1,
    prompts: ["What were the initials of the Nazi Party's official name from 1920?"],
    answer: txt(["NSDAP", "National Socialist German Workers' Party", "National Socialist German Workers Party", "Nationalsozialistische Deutsche Arbeiterpartei"], "NSDAP"),
    sol: ["**NSDAP** — the National Socialist German Workers' Party. 'Nazi' comes from 'National'."],
    hint: "Five letters: the old party's initials with two added at the front.",
    traps: [trapT(["DAP"], "DAP was the party's name when Hitler joined in 1919. It was renamed in 1920.")],
  },
  {
    tier: 1,
    prompts: ["What was the Nazi Party called when Hitler joined it in 1919?"],
    answer: txt(["German Workers' Party", "German Workers Party", "DAP", "Deutsche Arbeiterpartei"], "the German Workers' Party (DAP)"),
    sol: ["The **German Workers' Party (DAP)**, founded by Anton Drexler. It became the NSDAP in 1920."],
    hint: "Three words, initials DAP.",
    traps: [trapT(["NSDAP", "Nazi Party"], "That was its name from 1920. When Hitler joined in 1919 it had a shorter name.")],
  },
  {
    tier: 1,
    prompts: ["What book did Hitler write in prison in 1924?"],
    answer: txt(["Mein Kampf", "My Struggle"], "Mein Kampf"),
    sol: ["**Mein Kampf** ('My Struggle') set out his hatred of Jewish people and communists and his aim of conquering land in the east."],
    hint: "German for 'My Struggle'.",
  },
  {
    tier: 1,
    prompts: ["The Munich Putsch of November 1923 is also known as the … Putsch?"],
    answer: txt(["Beer Hall Putsch", "Beer Hall", "Beerhall Putsch", "Beerhall", "Hitler Putsch"], "the Beer Hall Putsch"),
    sol: ["The **Beer Hall Putsch** — Hitler began it by bursting into a Munich beer hall."],
    hint: "Where did Hitler announce his 'national revolution'?",
  },
  {
    tier: 1,
    prompts: ["In which city did Hitler attempt to seize power in November 1923?"],
    answer: txt(["Munich", "München", "Muenchen"], "Munich"),
    sol: ["**Munich**, in Bavaria — police opened fire and the putsch collapsed."],
    hint: "The capital of Bavaria.",
    traps: [trapT(["Berlin"], "Berlin was where the Kapp Putsch happened in 1920.")],
  },
  {
    tier: 1,
    prompts: ["What talent did Hitler discover at German Workers' Party meetings that made crowds grow wherever he went?"],
    answer: txt(["public speaking", "speaking", "speeches", "speech", "oratory", "making speeches", "giving speeches", "speaking skills"], "public speaking"),
    sol: ["**Public speaking** — his emotional, simple speeches drew ever bigger crowds."],
    hint: "Something he did on stage.",
  },
  {
    tier: 1,
    prompts: ["After the failed putsch, Hitler decided to win power a different way. How? (One or two words.)"],
    answer: txt(["legally", "elections", "by elections", "through elections", "votes", "by votes", "ballot box", "the ballot box", "democratically", "legal means"], "legally, through elections"),
    sol: ["**Legally, through elections** — the ballot box instead of force. He rebuilt the party across Germany from 1925."],
    hint: "Not by force, but by …",
  },
  {
    tier: 2,
    prompts: ["Who founded the German Workers' Party (DAP)? Give his surname."],
    answer: txt(["Drexler", "Anton Drexler"]),
    sol: ["**Anton Drexler** — Hitler soon overshadowed him and became leader in 1921."],
    hint: "First name Anton.",
  },
  {
    tier: 2,
    prompts: ["Which famous First World War general marched beside Hitler in the Munich Putsch?"],
    answer: txt(A_LUDENDORFF, "Ludendorff"),
    sol: ["**Erich Ludendorff** — his fame brought attention, but the putsch still failed."],
    hint: "Hindenburg's wartime partner.",
    traps: [trapT(A_HINDENBURG, "Hindenburg became President in 1925. It was his old partner who joined the putsch.")],
  },
  {
    tier: 2,
    prompts: ["In which prison did Hitler write Mein Kampf?"],
    answer: txt(["Landsberg", "Landsberg prison", "Landsberg am Lech"], "Landsberg"),
    sol: ["**Landsberg prison** — he served about nine months in comfortable conditions."],
    hint: "Initial L.",
  },
  {
    tier: 2,
    prompts: ["How many points were in the Nazi Party's 1920 programme?"],
    answer: num(25),
    sol: ["The **25-Point Programme** — tear up Versailles, unite German-speakers, gain land."],
    hint: "A quarter of a hundred.",
  },
  {
    tier: 2,
    prompts: ["Which Italian leader's 'March on Rome' (1922) inspired the Munich Putsch? Give his surname."],
    answer: txt(["Mussolini", "Benito Mussolini"]),
    sol: ["**Mussolini** — his march had brought him to power in Italy, and Hitler hoped to copy it."],
    hint: "The Italian Fascist leader.",
  },
  {
    tier: 2,
    prompts: ["What were the Nazis' 'stormtroopers', nicknamed the 'brownshirts', called? Give the initials."],
    answer: txt(A_SA, "the SA"),
    sol: ["The **SA** (*Sturmabteilung*) — violence was part of the movement from the start."],
    hint: "Two letters.",
    traps: [trapT(A_SS, "The SS was set up later as an elite force. The brownshirts were the larger street army.")],
  },
  {
    tier: 2,
    prompts: ["Hitler was sentenced to five years for the Munich Putsch. About how many months did he actually serve?"],
    answer: num(9),
    sol: ["About **9 months** — a sign of sympathy from right-wing judges."],
    hint: "Less than a year.",
  },
  {
    tier: 2,
    prompts: ["Which medal did Hitler win for bravery as a message runner in the First World War?"],
    answer: txt(["Iron Cross", "the Iron Cross"], "the Iron Cross"),
    sol: ["The **Iron Cross** — he later used his war record to present himself as a patriot."],
    hint: "A metal and a shape.",
  },
  {
    tier: 2,
    prompts: ["In which year did Hitler become leader of the Nazi Party?"],
    answer: num(1921),
    sol: ["**1921** — two years after he joined."],
    hint: "Soon after the party was renamed in 1920.",
  },
  {
    tier: 3,
    prompts: ["In which city was Hitler twice rejected by the Academy of Fine Arts?"],
    answer: txt(["Vienna", "Wien"], "Vienna"),
    sol: ["**Vienna** — where he drifted into poverty among extreme nationalist and antisemitic politics."],
    hint: "The capital of Austria.",
  },
  {
    tier: 3,
    prompts: ["What did Mein Kampf call the land in eastern Europe that Hitler wanted Germany to conquer?"],
    answer: txt(["Lebensraum", "living space"], "Lebensraum"),
    sol: ["**Lebensraum** ('living space') — an aim that pointed towards war."],
    hint: "German for 'living space'.",
  },
  {
    tier: 3,
    prompts: ["Who led the SA? Give his surname."],
    answer: txt(A_ROHM, "Röhm"),
    sol: ["**Ernst Röhm** — murdered on Hitler's orders in the Night of the Long Knives (1934)."],
    hint: "He was killed in 1934.",
    traps: [trapT(["Goebbels", "Joseph Goebbels"], "Goebbels ran propaganda. The SA's leader was killed in 1934.")],
  },
  {
    tier: 3,
    prompts: ["Hitler's 1924 trial was front-page news. In one word, what did it give him?"],
    answer: txt(["publicity", "fame", "attention", "a platform", "platform", "a stage", "stage", "exposure", "coverage"], "publicity"),
    sol: ["**Publicity** — he used the courtroom as a stage and became known across Germany."],
    hint: "What does a politician get from being in every newspaper?",
  },
  {
    tier: 3,
    prompts: ["From 1925 Hitler rebuilt the party, including which youth organisation?"],
    answer: txt(["Hitler Youth", "Hitlerjugend", "HJ"], "the Hitler Youth"),
    sol: ["The **Hitler Youth** — part of building a national movement rather than a local Bavarian party."],
    hint: "It was named after him.",
  },
];

// ---------------------------------------------------------------------------
// 6. Recovery, then the Great Depression
// ---------------------------------------------------------------------------

const RECOVERY: QA[] = [
  {
    tier: 1,
    prompts: ["Who led Germany's recovery as Chancellor in 1923 and then Foreign Minister until 1929? Give his surname."],
    answer: txt(["Stresemann", "Gustav Stresemann"]),
    sol: ["**Gustav Stresemann** — the Rentenmark, Dawes Plan, Locarno, the League and the Young Plan."],
    hint: "He died in October 1929.",
  },
  {
    tier: 1,
    prompts: ["What new currency ended hyperinflation in November 1923?"],
    answer: txt(A_RENTENMARK, "the Rentenmark"),
    sol: ["The **Rentenmark** — the first step in Stresemann's recovery."],
    hint: "R in 'Really Daring Leaders Look Young'.",
  },
  {
    tier: 1,
    prompts: ["Which 1924 plan made reparations manageable and brought American loans into Germany?"],
    answer: txt(["Dawes Plan", "Dawes", "the Dawes Plan"], "the Dawes Plan"),
    sol: ["The **Dawes Plan** (1924) — recovery built on borrowed American money."],
    hint: "Named after an American banker; it begins with D.",
    traps: [trapT(["Young Plan", "Young"], "The Young Plan came in 1929. The 1924 plan came first.")],
  },
  {
    tier: 1,
    prompts: ["Which 1929 plan reduced reparations and spread them over 59 years?"],
    answer: txt(["Young Plan", "Young", "the Young Plan"], "the Young Plan"),
    sol: ["The **Young Plan** (1929) — the Nazis joined a noisy campaign against it."],
    hint: "Its name is the opposite of 'old'.",
    traps: [trapT(["Dawes Plan", "Dawes"], "The Dawes Plan was 1924. This was the later one.")],
  },
  {
    tier: 1,
    prompts: ["What event in the USA in October 1929 led American banks to recall their loans to Germany?"],
    answer: txt(["Wall Street Crash", "Wall Street", "the Crash", "Great Crash", "stock market crash", "Wall St Crash"], "the Wall Street Crash"),
    sol: ["The **Wall Street Crash** — German firms closed and unemployment soared."],
    hint: "A New York street.",
  },
  {
    tier: 1,
    prompts: ["What name is given to the years 1924–1929 in Weimar Germany, when the economy recovered?"],
    answer: txt(["Golden Years", "the Golden Years", "Golden Age", "Golden Twenties"], "the 'Golden Years'"),
    sol: ["The **'Golden Years'** — but the recovery rested on short-term American loans."],
    hint: "A precious metal.",
  },
  {
    tier: 1,
    prompts: ["Which international organisation was Germany admitted to in 1926?"],
    answer: txt(["League of Nations", "the League", "League"], "the League of Nations"),
    sol: ["The **League of Nations** — Germany was accepted again as a great power."],
    hint: "Set up after the First World War to keep the peace.",
  },
  {
    tier: 1,
    prompts: ["From 1930, which President used Article 48 to pass laws by decree? Give his surname."],
    answer: txt(A_HINDENBURG, "Hindenburg"),
    sol: ["**Hindenburg** — signing decrees for Chancellors who had no Reichstag majority."],
    hint: "The war hero elected President in 1925.",
    traps: [trapT(["Ebert", "Friedrich Ebert"], "Ebert died in 1925. Who was President from 1925 to 1934?")],
  },
  {
    tier: 2,
    prompts: ["In 1925 Germany accepted its western borders in which treaties?"],
    answer: txt(["Locarno", "Locarno Treaties", "Locarno Pact", "Treaty of Locarno", "Locarno Treaty"], "the Locarno Treaties"),
    sol: ["The **Locarno Treaties** (1925) improved relations with France and Britain."],
    hint: "Named after a Swiss town; L in 'Really Daring Leaders Look Young'.",
  },
  {
    tier: 2,
    prompts: ["In which year was Germany admitted to the League of Nations?"],
    answer: num(1926),
    sol: ["**1926** — accepted again as a great power."],
    hint: "The year after Locarno.",
  },
  {
    tier: 2,
    prompts: ["What percentage of the vote did the Nazis win in May 1928?"],
    answer: num(2.6, "2.6%"),
    sol: ["Just **2.6%** (12 seats) — extremists faded in the Golden Years."],
    hint: "Less than 3%.",
    traps: [trapN(18.3, "18.3% was September 1930, after the Crash. In 1928 they were tiny.")],
  },
  {
    tier: 2,
    prompts: ["About how many million Germans were unemployed at the peak of the Depression in 1932?"],
    answer: num(6, "about 6 million"),
    sol: ["Over **6 million** at the peak — up from about 1.4 million in 1928."],
    hint: "Roughly one in three workers.",
  },
  {
    tier: 2,
    prompts: ["Which Chancellor, from March 1930, governed using Hindenburg's emergency decrees? Give his surname."],
    answer: txt(A_BRUNING, "Brüning"),
    sol: ["**Heinrich Brüning** — he had no Reichstag majority, so Hindenburg used Article 48."],
    hint: "Initial B.",
    traps: [trapT(A_PAPEN, "Papen followed later, in 1932. The Chancellor from 1930 came first.")],
  },
  {
    tier: 2,
    prompts: ["Which article of the constitution did Hindenburg use to pass laws by decree from 1930? (Article …)"],
    answer: num(48),
    sol: ["**Article 48** — Germany was governed without a working parliament before Hitler came to power."],
    hint: "The emergency-powers article.",
    traps: [trapN(231, "Article 231 is the Versailles war guilt clause.")],
  },
  {
    tier: 2,
    prompts: ["After the Crash, American banks ______ their loans to Germany. Fill the gap with one word."],
    answer: txt(["recalled", "recall", "withdrew", "called in", "called back", "demanded", "cancelled"], "recalled"),
    sol: ["They **recalled** them — the recovery had depended on that borrowed money."],
    hint: "They wanted the money back.",
  },
  {
    tier: 3,
    prompts: ["In 1932, how many laws did the Reichstag pass?"],
    answer: num(5),
    sol: ["Just **5** — compared with 66 presidential decrees."],
    hint: "Fewer than ten.",
    traps: [trapN(66, "66 was the number of presidential decrees in 1932. The Reichstag passed far fewer laws.")],
  },
  {
    tier: 3,
    prompts: ["In 1932, how many presidential decrees were issued?"],
    answer: num(66),
    sol: ["**66** decrees, but only 5 Reichstag laws — power had moved to the President."],
    hint: "More than 60.",
    traps: [trapN(5, "5 was the number of Reichstag laws. Decrees were far more numerous.")],
  },
  {
    tier: 3,
    prompts: ["Which nationalist press owner allied with Hitler in the 1929 campaign against the Young Plan? Give his surname."],
    answer: txt(["Hugenberg", "Alfred Hugenberg"]),
    sol: ["**Alfred Hugenberg** — his newspapers gave Hitler national publicity."],
    hint: "Initial H, first name Alfred.",
  },
  {
    tier: 3,
    prompts: ["The Young Plan spread reparations payments over how many years?"],
    answer: num(59),
    sol: ["**59 years** — to 1988."],
    hint: "Just under 60.",
  },
  {
    tier: 3,
    prompts: ["In which year did French troops leave the Ruhr, after the Dawes Plan?"],
    answer: num(1925),
    sol: ["**1925** — the year after the Dawes Plan."],
    hint: "The year after Dawes.",
  },
  {
    tier: 3,
    prompts: ["About how many million Germans were unemployed in 1928, before the Depression?"],
    answer: num(1.4, "about 1.4 million"),
    sol: ["About **1.4 million** — it rose to over 6 million by 1932."],
    hint: "Between 1 and 2.",
  },
  {
    tier: 3,
    prompts: ["Which group of Germans was already struggling with low food prices even before 1929?"],
    answer: txt(["farmers", "farmer", "peasants", "agricultural workers"], "farmers"),
    sol: ["**Farmers** — many later turned to the Nazis' promises of better prices."],
    hint: "They grew the food.",
  },
];

// ---------------------------------------------------------------------------
// 7. Who's who
// ---------------------------------------------------------------------------

interface Person {
  tier: Tier;
  desc: string;
  accept: string[];
  display: string;
  sol: string;
  traps?: Trap[];
}

const PEOPLE: Person[] = [
  { tier: 1, desc: "War hero field marshal, elected President in 1925 and again in 1932, who appointed Hitler Chancellor.", accept: A_HINDENBURG, display: "Hindenburg", sol: "**Paul von Hindenburg** — aged 85 when he appointed Hitler on 30 January 1933.", traps: [trapT(A_LUDENDORFF, "Ludendorff was his wartime partner who joined Hitler's putsch. This man became President.")] },
  { tier: 1, desc: "Chancellor in 1923 and Foreign Minister until 1929, who led the 'Golden Years' recovery.", accept: ["Stresemann", "Gustav Stresemann"], display: "Stresemann", sol: "**Gustav Stresemann** — died in October 1929, weeks before the Crash." },
  { tier: 1, desc: "Head of Nazi propaganda from 1930, master of simple, repeated slogans such as 'Work and Bread'.", accept: ["Goebbels", "Joseph Goebbels", "Josef Goebbels"], display: "Goebbels", sol: "**Joseph Goebbels** — posters, rallies, films, loudspeaker vans and radio." },
  { tier: 1, desc: "Former Chancellor who, in January 1933, persuaded Hindenburg to appoint Hitler — and became Vice-Chancellor himself.", accept: A_PAPEN, display: "von Papen", sol: "**Franz von Papen** — he wanted revenge on Schleicher and believed he could control Hitler.", traps: [trapT(A_SCHLEICHER, "Schleicher was the Chancellor Papen wanted to remove. Who made the deal with Hitler?")] },
  { tier: 1, desc: "Leader of the SA, murdered on Hitler's orders in the Night of the Long Knives.", accept: A_ROHM, display: "Röhm", sol: "**Ernst Röhm** — the SA had grown to about three million men, alarming the army." },
  { tier: 1, desc: "Social Democrat leader who took charge when the Kaiser abdicated in 1918 and became the Republic's first President.", accept: ["Ebert", "Friedrich Ebert"], display: "Ebert", sol: "**Friedrich Ebert** — President until his death in 1925; Hindenburg succeeded him.", traps: [trapT(A_HINDENBURG, "Hindenburg was the second President, from 1925. Who came first?")] },
  { tier: 1, desc: "The Kaiser who abdicated on 9 November 1918 and fled to the Netherlands.", accept: ["Wilhelm II", "Kaiser Wilhelm", "Wilhelm", "Kaiser Wilhelm II", "William II", "Kaiser Bill"], display: "Kaiser Wilhelm II", sol: "**Kaiser Wilhelm II** — his abdication made way for a republic." },
  { tier: 1, desc: "Austrian-born ex-soldier who joined the German Workers' Party in 1919 and became its leader in 1921.", accept: ["Hitler", "Adolf Hitler"], display: "Hitler", sol: "**Adolf Hitler** — born in Braunau am Inn, Austria, in 1889." },
  { tier: 2, desc: "Chancellor from 1930 who governed by Article 48 decrees and cut spending during the Depression.", accept: A_BRUNING, display: "Brüning", sol: "**Heinrich Brüning** — his cuts deepened hardship, and parliament mattered less and less." },
  { tier: 2, desc: "General who was the last Chancellor before Hitler (December 1932 – January 1933), later murdered in the Night of the Long Knives.", accept: A_SCHLEICHER, display: "von Schleicher", sol: "**Kurt von Schleicher** — Papen's rival; murdered by the SS in June 1934.", traps: [trapT(A_PAPEN, "Papen survived 1934. The last Chancellor before Hitler was murdered.")] },
  { tier: 2, desc: "First World War general who marched beside Hitler in the Munich Putsch.", accept: A_LUDENDORFF, display: "Ludendorff", sol: "**Erich Ludendorff** — he had also admitted in 1918 that the war could not be won.", traps: [trapT(A_HINDENBURG, "Hindenburg became President. His old partner marched with Hitler.")] },
  { tier: 2, desc: "She co-led the communist Spartacist uprising and was murdered by the Freikorps in January 1919.", accept: ["Rosa Luxemburg", "Luxemburg", "Luxembourg", "Rosa Luxembourg"], display: "Rosa Luxemburg", sol: "**Rosa Luxemburg** — murdered with Karl Liebknecht." },
  { tier: 2, desc: "Right-wing politician who led the putsch in Berlin in March 1920.", accept: ["Kapp", "Wolfgang Kapp"], display: "Kapp", sol: "**Wolfgang Kapp** — defeated by a general strike." },
  { tier: 2, desc: "Founder of the German Workers' Party, which Hitler joined in 1919.", accept: ["Drexler", "Anton Drexler"], display: "Drexler", sol: "**Anton Drexler** — soon overshadowed by Hitler." },
  { tier: 2, desc: "French leader at the Paris peace conference, determined to make Germany pay.", accept: ["Clemenceau", "Georges Clemenceau"], display: "Clemenceau", sol: "**Georges Clemenceau** — one of the 'Big Three'." },
  { tier: 2, desc: "Young Dutch communist arrested at the scene of the Reichstag Fire.", accept: ["van der Lubbe", "Lubbe", "Marinus van der Lubbe", "Vanderlubbe"], display: "van der Lubbe", sol: "**Marinus van der Lubbe** — historians still debate whether he acted alone; the Nazis exploited the fire either way." },
  { tier: 3, desc: "Nationalist press owner who joined Hitler's 1929 campaign against the Young Plan.", accept: ["Hugenberg", "Alfred Hugenberg"], display: "Hugenberg", sol: "**Alfred Hugenberg** — his newspapers gave the Nazis national publicity." },
  { tier: 3, desc: "Social Democrat leader who spoke against the Enabling Act in the Reichstag in March 1933.", accept: ["Wels", "Otto Wels"], display: "Wels", sol: "**Otto Wels** — the last free speech against Hitler in a German parliament." },
  { tier: 3, desc: "Foreign minister murdered by right-wing extremists in 1922.", accept: ["Rathenau", "Walther Rathenau", "Walter Rathenau"], display: "Rathenau", sol: "**Walther Rathenau** — one of hundreds of political murders." },
  { tier: 3, desc: "Politician who signed the armistice and was murdered by right-wing extremists in 1921.", accept: ["Erzberger", "Matthias Erzberger"], display: "Erzberger", sol: "**Matthias Erzberger** — branded a 'November Criminal'." },
  { tier: 3, desc: "He co-led the Spartacist uprising with Rosa Luxemburg and was murdered with her in January 1919.", accept: ["Liebknecht", "Karl Liebknecht"], display: "Liebknecht", sol: "**Karl Liebknecht** — murdered by the Freikorps with Rosa Luxemburg." },
  { tier: 3, desc: "British Prime Minister at the Paris peace conference.", accept: ["Lloyd George", "David Lloyd George"], display: "Lloyd George", sol: "**David Lloyd George** — one of the 'Big Three' with Clemenceau and Wilson.", traps: [trapT(["Clemenceau"], "Clemenceau led France. Who led Britain?")] },
  { tier: 3, desc: "American President at the Paris peace conference.", accept: ["Wilson", "Woodrow Wilson"], display: "Wilson", sol: "**Woodrow Wilson** — he hoped for a fairer peace than France wanted." },
  { tier: 3, desc: "Italian dictator whose 'March on Rome' in 1922 inspired Hitler's putsch.", accept: ["Mussolini", "Benito Mussolini"], display: "Mussolini", sol: "**Benito Mussolini** — Hitler hoped to copy his route to power." },
];

function personItem(rng: Rng, tier: Tier): DrillItem {
  const p = rng.pick(pool(PEOPLE, tier));
  const t = rng.int(0, 2);
  const prompt =
    t === 0
      ? `Who am I? ${p.desc} Give the surname.`
      : t === 1
        ? `Name this person (surname is enough):\n\n> ${p.desc}`
        : `Who's who? ${p.desc}`;
  return { prompt, answer: txt(p.accept, p.display), solution: [p.sol], hint: "Think about when this person mattered: 1918–23, the Golden Years, or 1930–34?", traps: p.traps };
}

// ---------------------------------------------------------------------------
// 8. From Chancellor to dictator, 1933–1934
// ---------------------------------------------------------------------------

const DICTATORSHIP: QA[] = [
  {
    tier: 1,
    prompts: ["Which building burned on 27 February 1933?"],
    answer: txt(["Reichstag", "the Reichstag", "Reichstag building", "parliament", "German parliament"], "the Reichstag"),
    sol: ["The **Reichstag** — the next day an emergency decree suspended civil rights."],
    hint: "Where the German parliament met.",
  },
  {
    tier: 1,
    prompts: ["Which law of 23 March 1933 let Hitler's government make laws without the Reichstag?", "Name the law: March 1933, passed 444 votes to 94, lets the government make laws for four years without parliament."],
    answer: txt(A_ENABLING, "the Enabling Act"),
    sol: ["The **Enabling Act** — the legal foundation of Hitler's dictatorship."],
    hint: "It 'enabled' Hitler to rule alone.",
    traps: [trapT(A_ARTICLE48, "Article 48 was the President's emergency power. This new law gave power to Hitler's cabinet.")],
  },
  {
    tier: 1,
    prompts: ["What name is given to 30 June 1934, when Röhm and other SA leaders were murdered?"],
    answer: txt(["Night of the Long Knives", "Night of Long Knives", "Long Knives"], "the Night of the Long Knives"),
    sol: ["The **Night of the Long Knives** — at least 85 people killed, probably more; Hitler then declared the killings legal."],
    hint: "A night, and a weapon.",
  },
  {
    tier: 1,
    prompts: ["What title did Hitler take when Hindenburg died in August 1934?"],
    answer: txt(A_FUHRER, "Führer"),
    sol: ["**Führer** ('leader') — combining the posts of President and Chancellor."],
    hint: "German for 'leader'.",
    traps: [trapT(["Chancellor"], "He was already Chancellor. The new title combined both top jobs.")],
  },
  {
    tier: 1,
    prompts: ["In August 1934 every soldier swore an oath of loyalty to whom?"],
    answer: txt(["Hitler", "Adolf Hitler", "the Führer", "Führer", "Fuhrer"], "Hitler personally"),
    sol: ["To **Hitler personally** — not to the constitution or the nation."],
    hint: "Not to a country or a law, but to a person.",
    traps: [trapT(A_HINDENBURG, "Hindenburg had just died — that's what made the new oath possible.")],
  },
  {
    tier: 1,
    prompts: ["Which political group did the Nazis blame for the Reichstag Fire?"],
    answer: txt(["communists", "communist", "KPD", "the Communists", "Communist Party"], "the communists"),
    sol: ["The **communists** — thousands were arrested under the emergency decree."],
    hint: "Hitler's enemies on the far left.",
  },
  {
    tier: 1,
    prompts: ["Who carried out the murders in the Night of the Long Knives? Give the initials."],
    answer: txt(A_SS, "the SS"),
    sol: ["The **SS** — the SA's leaders were the victims."],
    hint: "Two letters — not the SA.",
    traps: [trapT(A_SA, "The SA were the victims. Another Nazi force did the killing.")],
  },
  {
    tier: 2,
    prompts: ["The Enabling Act passed by how many votes to 94?"],
    answer: num(444),
    sol: ["**444 to 94** — with communists arrested and SA men packing the building."],
    hint: "A three-digit number with one digit repeated.",
  },
  {
    tier: 2,
    prompts: ["Which was the only party to vote against the Enabling Act?"],
    answer: txt(["SPD", "Social Democrats", "Social Democratic Party", "Social Democrat", "Social Democratic Party of Germany"], "the Social Democrats (SPD)"),
    sol: ["The **Social Democrats (SPD)** — all 94 present voted no."],
    hint: "The party of Ebert and Otto Wels.",
    traps: [trapT(["KPD", "Communists", "Communist Party"], "Communist deputies had been arrested or were in hiding — they could not vote.")],
  },
  {
    tier: 2,
    prompts: ["What percentage of the vote did the Nazis win in the election of 5 March 1933?"],
    answer: num(43.9, "43.9%"),
    sol: ["**43.9%** — even amid intimidation, still not a majority on their own."],
    hint: "Between 40 and 45.",
    traps: [trapN(37.3, "37.3% was July 1932, their best free election. In March 1933 they did better — but still under half.")],
  },
  {
    tier: 2,
    prompts: ["On 2 May 1933 trade unions were abolished. Which Nazi-run organisation replaced them?"],
    answer: txt(["German Labour Front", "German Labor Front", "Labour Front", "Labor Front", "DAF", "Deutsche Arbeitsfront"], "the German Labour Front"),
    sol: ["The **German Labour Front** — workers lost their independent voice."],
    hint: "Initials DAF in German.",
  },
  {
    tier: 2,
    prompts: ["After the law of 14 July 1933, how many legal political parties were there in Germany?"],
    answer: num(1, "1 (the Nazi Party)"),
    sol: ["**One** — the Nazi Party. Germany was now a one-party state."],
    hint: "Guess which one.",
  },
  {
    tier: 2,
    prompts: ["What size of majority did the Enabling Act need in the Reichstag?"],
    answer: txt(["two-thirds", "two thirds", "2/3", "two-thirds majority", "2/3 majority", "two thirds majority"], "two-thirds"),
    sol: ["A **two-thirds** majority — because it changed the constitution."],
    hint: "More than half — a fraction.",
  },
  {
    tier: 2,
    prompts: ["Which Nazi organisation's leaders were murdered in the Night of the Long Knives? Give the initials."],
    answer: txt(A_SA, "the SA"),
    sol: ["The **SA** — army leaders and big business feared Röhm's three million stormtroopers."],
    hint: "The brownshirts.",
    traps: [trapT(A_SS, "The SS did the killing. Whose leaders were killed?")],
  },
  {
    tier: 3,
    prompts: ["In August 1934 Hitler merged the post of Chancellor with which other post?"],
    answer: txt(["President", "the President", "Reich President", "presidency", "the presidency"], "President"),
    sol: ["**President** — the post Hindenburg had held until his death on 2 August 1934."],
    hint: "Hindenburg's job.",
  },
  {
    tier: 3,
    prompts: ["What did the emergency decree signed the day after the Reichstag Fire suspend?"],
    answer: txt(["civil rights", "civil liberties", "rights", "freedoms", "basic rights", "human rights", "free speech", "freedom of speech"], "civil rights"),
    sol: ["**Civil rights** — free speech, a free press and protection from arrest."],
    hint: "The freedoms in the Weimar bill of rights.",
  },
  {
    tier: 3,
    prompts: ["Which Catholic party voted for the Enabling Act after being given promises that were later broken?"],
    answer: txt(["Centre Party", "Centre", "Center Party", "Center", "Zentrum"], "the Centre Party"),
    sol: ["The **Centre Party** — its votes helped reach the two-thirds majority."],
    hint: "Its name is a position in the middle.",
  },
  {
    tier: 3,
    prompts: ["Which former Chancellor was also murdered in the Night of the Long Knives? Give his surname."],
    answer: txt(A_SCHLEICHER, "von Schleicher"),
    sol: ["**Kurt von Schleicher** — Hitler settled old scores as well as crushing the SA."],
    hint: "The last Chancellor before Hitler.",
    traps: [trapT(A_PAPEN, "Papen survived. The other former Chancellor was killed.")],
  },
  {
    tier: 3,
    prompts: ["For how many years did the Enabling Act first give Hitler's government the power to make laws?"],
    answer: num(4),
    sol: ["**Four years** — in practice it was renewed and the Reichstag never got its power back."],
    hint: "The same as the length of a normal Reichstag term.",
  },
  {
    tier: 3,
    prompts: ["In which month of 1934 did Hindenburg die?"],
    answer: txt(["August", "Aug", "2 August", "August 2"], "August"),
    sol: ["**August** (2 August 1934) — Hitler became Führer the same day."],
    hint: "About five weeks after the Night of the Long Knives.",
  },
  {
    tier: 3,
    prompts: ["In which month of 1933 was Hitler appointed Chancellor?"],
    answer: txt(["January", "Jan", "30 January", "January 30"], "January"),
    sol: ["**January** (30 January 1933)."],
    hint: "The very start of the year.",
  },
];

// ---------------------------------------------------------------------------
// 9. Which came first?
// ---------------------------------------------------------------------------

interface Ev {
  tier: Tier;
  label: string;
  accept: string[];
  year: number;
  /** yyyymm, for ordering. */
  key: number;
}

const EVENTS: Ev[] = [
  { tier: 1, label: "the armistice", accept: ["armistice", "the armistice", "ceasefire"], year: 1918, key: 191811 },
  { tier: 1, label: "the Treaty of Versailles", accept: ["Treaty of Versailles", "Versailles", "Versailles treaty"], year: 1919, key: 191906 },
  { tier: 1, label: "the Kapp Putsch", accept: ["Kapp Putsch", "Kapp"], year: 1920, key: 192003 },
  { tier: 1, label: "the Munich Putsch", accept: ["Munich Putsch", "Munich", "Beer Hall Putsch", "Munich Beer Hall Putsch"], year: 1923, key: 192311 },
  { tier: 1, label: "the Dawes Plan", accept: ["Dawes Plan", "Dawes"], year: 1924, key: 192404 },
  { tier: 1, label: "the Wall Street Crash", accept: ["Wall Street Crash", "Wall Street", "the Crash", "Crash"], year: 1929, key: 192910 },
  { tier: 1, label: "Hitler's appointment as Chancellor", accept: ["Hitler's appointment as Chancellor", "Hitler appointed Chancellor", "appointment as Chancellor", "Chancellor", "appointment"], year: 1933, key: 193301 },
  { tier: 1, label: "the Night of the Long Knives", accept: ["Night of the Long Knives", "Night of Long Knives", "Long Knives"], year: 1934, key: 193406 },
  { tier: 2, label: "the Spartacist uprising", accept: ["Spartacist uprising", "Spartacists", "Spartacist", "Spartacist revolt"], year: 1919, key: 191901 },
  { tier: 2, label: "the occupation of the Ruhr", accept: ["occupation of the Ruhr", "Ruhr", "Ruhr occupation"], year: 1923, key: 192301 },
  { tier: 2, label: "the Locarno Treaties", accept: ["Locarno Treaties", "Locarno", "Locarno Treaty"], year: 1925, key: 192512 },
  { tier: 2, label: "Germany joining the League of Nations", accept: ["Germany joining the League of Nations", "League of Nations", "League", "joining the League"], year: 1926, key: 192609 },
  { tier: 2, label: "Brüning starting to govern by decree", accept: ["Brüning starting to govern by decree", "Brüning", "Bruning", "Bruening", "rule by decree", "decree"], year: 1930, key: 193007 },
  { tier: 2, label: "the Reichstag Fire", accept: ["Reichstag Fire", "fire", "the fire"], year: 1933, key: 193302 },
  { tier: 2, label: "Hindenburg's death", accept: ["Hindenburg's death", "Hindenburg dies", "death of Hindenburg", "Hindenburg"], year: 1934, key: 193408 },
  { tier: 3, label: "the murder of Rathenau", accept: ["murder of Rathenau", "Rathenau", "Rathenau's murder"], year: 1922, key: 192206 },
  { tier: 3, label: "reparations being fixed at £6.6 billion", accept: ["reparations being fixed at £6.6 billion", "reparations fixed", "reparations", "reparations bill"], year: 1921, key: 192104 },
  { tier: 3, label: "the Young Plan", accept: ["Young Plan", "Young"], year: 1929, key: 192906 },
  { tier: 3, label: "Hitler losing the presidential election", accept: ["Hitler losing the presidential election", "presidential election", "the presidential election", "losing the presidential election"], year: 1932, key: 193204 },
  { tier: 3, label: "Mein Kampf being written", accept: ["Mein Kampf being written", "Mein Kampf", "writing Mein Kampf"], year: 1924, key: 192407 },
  { tier: 3, label: "the Enabling Act", accept: ["Enabling Act"], year: 1933, key: 193303 },
  { tier: 3, label: "the Rentenmark", accept: ["Rentenmark", "the Rentenmark", "Rentenmark introduced"], year: 1923, key: 192311 },
];

function whichFirst(rng: Rng, tier: Tier): DrillItem {
  const bank = tier === 3 ? EVENTS : pool(EVENTS, tier);
  const a = rng.pick(bank);
  const b = rng.pick(bank.filter((e) => e.year !== a.year));
  const [early, late] = a.key < b.key ? [a, b] : [b, a];
  if (tier === 3 && rng.bool(0.35)) {
    const gap = late.year - early.year;
    return {
      prompt: `Count the years: **${cap(a.label)}** happened in ${a.year}. How many years separate it from **${b.label}**? (Subtract the earlier year from the later one.)`,
      answer: num(gap),
      solution: [`${cap(b.label)} was in **${b.year}**.`, `${late.year} − ${early.year} = **${gap}** year${gap === 1 ? "" : "s"}.`],
      hint: `First recall the year of ${b.label}.`,
    };
  }
  const prompt = rng.bool()
    ? `Which came first: **${a.label}** or **${b.label}**?`
    : `Chronology check — which happened earlier: **${cap(a.label)}** or **${b.label}**?`;
  return {
    prompt,
    answer: txt(early.accept, cap(early.label)),
    solution: [`**${cap(early.label)}** (${early.year}) came before ${late.label} (${late.year}).`],
    hint: "Anchor each event: before or after the 1923 crisis? Before or after the 1929 Crash?",
    traps: [trapT(late.accept, `Not quite — ${late.label} came later, in ${late.year}. ${cap(early.label)} was in ${early.year}.`)],
  };
}

// ---------------------------------------------------------------------------
// 10. Crisis, weak government or charismatic leadership?
// ---------------------------------------------------------------------------

type Factor = "crisis" | "weak" | "leader";

const FACTOR_ACCEPT: Record<Factor, string[]> = {
  crisis: ["crisis", "crises", "a crisis", "economic crisis"],
  weak: ["weak government", "weakness of government", "weakness of the government", "weak gov", "government weakness", "weak govt", "weak"],
  leader: ["charismatic leadership", "charisma", "leadership", "charismatic leader", "charismatic"],
};

const FACTOR_NAME: Record<Factor, string> = {
  crisis: "Crisis",
  weak: "Weak government",
  leader: "Charismatic leadership",
};

interface FactorItem {
  tier: Tier;
  text: string;
  f: Factor;
  why: string;
}

const FACTORS: FactorItem[] = [
  { tier: 1, text: "Hyperinflation in 1923 wiped out middle-class savings.", f: "crisis", why: "An economic disaster that shook trust in the republic." },
  { tier: 1, text: "About 6 million Germans were unemployed by 1932.", f: "crisis", why: "The Depression was the key short-term crisis that made the Nazis a mass party." },
  { tier: 1, text: "Hitler's emotional, simple speeches drew huge crowds.", f: "leader", why: "Hitler presented himself as the one man who could save Germany." },
  { tier: 1, text: "Goebbels' propaganda repeated short messages like 'Work and Bread'.", f: "leader", why: "Propaganda built the image of Hitler as a strong leader — part of the leadership factor." },
  { tier: 1, text: "Proportional representation meant governments were unstable coalitions.", f: "weak", why: "The voting system made strong, lasting government hard." },
  { tier: 1, text: "From 1930 Hindenburg used Article 48 to govern by decree.", f: "weak", why: "Parliament was sidelined, so power lay with the President's small circle." },
  { tier: 1, text: "The Wall Street Crash led American banks to recall their loans to Germany.", f: "crisis", why: "An economic shock from outside that triggered the Depression in Germany." },
  { tier: 1, text: "Many Germans hated the Treaty of Versailles and its war guilt clause.", f: "crisis", why: "Versailles was a lasting national grievance — the first of the crises." },
  { tier: 2, text: "Papen and Hindenburg appointed Hitler, believing they could control him.", f: "weak", why: "The elites' miscalculation — a failure at the top of the system, not a vote." },
  { tier: 2, text: "In 1932 Hitler flew from city to city to speak at several rallies in one day.", f: "leader", why: "Modern campaigning that made Hitler seem energetic and everywhere." },
  { tier: 2, text: "French and Belgian troops occupied the Ruhr in January 1923.", f: "crisis", why: "A national humiliation that led straight into hyperinflation." },
  { tier: 2, text: "Between 1919 and 1933 Germany had 20 different cabinets.", f: "weak", why: "Constant changes of government showed how unstable Weimar coalitions were." },
  { tier: 2, text: "The Nazis built a national party with branches across Germany, the SA and youth groups.", f: "leader", why: "Organisation made the movement look strong when the state looked weak." },
  { tier: 2, text: "The Spartacists tried to start a communist revolution in Berlin in 1919.", f: "crisis", why: "A violent political crisis in the republic's first weeks." },
  { tier: 2, text: "In July 1932 no majority government was possible without the Nazis or the Communists.", f: "weak", why: "Parliament could not produce a working government, so power drifted to Hindenburg." },
  { tier: 3, text: "During the Kapp Putsch the army refused to fire on the rebels.", f: "weak", why: "The republic could not rely on its own army — a sign of weak government." },
  { tier: 3, text: "Right-wing judges gave light sentences to political murderers — and to Hitler in 1924.", f: "weak", why: "Officials from the old empire never fully supported the republic, so it could not protect itself." },
  { tier: 3, text: "Hitler turned his 1924 trial into a stage for his ideas.", f: "leader", why: "He used his skill as a speaker to turn failure into national publicity." },
  { tier: 3, text: "Hitler presented himself as the one man who could save Germany.", f: "leader", why: "The image of a single saviour-leader was central to his appeal." },
  { tier: 3, text: "Brüning had no Reichstag majority and relied on presidential decrees.", f: "weak", why: "A Chancellor without a majority shows parliament was no longer working." },
  { tier: 3, text: "Unemployment rose from about 1.4 million in 1928 to over 6 million in 1932.", f: "crisis", why: "The economic collapse after 1929 created desperation that extremists exploited." },
  { tier: 3, text: "The 'stab in the back' myth let nationalists blame democratic politicians for defeat.", f: "crisis", why: "Defeat and the peace that followed created a lasting grievance against the republic." },
];

function factorItem(rng: Rng, tier: Tier): DrillItem {
  const it = rng.pick(pool(FACTORS, tier));
  const prompt = rng.bool()
    ? `Which enquiry factor does this best illustrate? Answer *crisis*, *weak government* or *charismatic leadership*.\n\n> ${it.text}`
    : `Sort this cause of Hitler's rise into one of the three factors — *crisis*, *weak government* or *charismatic leadership*:\n\n> ${it.text}`;
  const others = (["crisis", "weak", "leader"] as Factor[]).filter((f) => f !== it.f);
  const solution = [`**${FACTOR_NAME[it.f]}.** ${it.why}`];
  if (tier >= 2) solution.push("Strong answers then link it: how did this factor make the other two matter more?");
  return {
    prompt,
    answer: txt(FACTOR_ACCEPT[it.f], FACTOR_NAME[it.f]),
    solution,
    hint: "Crisis = something that went wrong for Germany; weak government = a flaw in how Weimar worked; leadership = what Hitler and the Nazis did.",
    traps: others.map((f) => trapT(FACTOR_ACCEPT[f], `It links to ${FACTOR_NAME[f].toLowerCase()}, but the best fit is ${FACTOR_NAME[it.f].toLowerCase()}: ${it.why}`)),
  };
}

// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  {
    id: "hitler-rise.key-terms",
    topicId: "hitler-rise",
    title: "Key term from its definition",
    level: 1,
    guideRef: "weimar-republic",
    generate(rng, tier) {
      const t = rng.pick(pool(TERMS, tier));
      const k = rng.int(0, 2);
      const prompt =
        k === 0
          ? `Which key term matches this definition?\n\n> ${t.def}`
          : k === 1
            ? `Name the key term: ${t.def}`
            : `Key term check — what is the word or phrase for this?\n\n> ${t.def}`;
      return { prompt, answer: txt(t.accept), solution: [t.sol], hint: "Think about which part of the story (1918–1934) this belongs to.", traps: t.traps };
    },
  },
  {
    id: "hitler-rise.versailles-lamb",
    topicId: "hitler-rise",
    title: "Versailles terms: Land, Army, Money or Blame?",
    level: 1,
    guideRef: "treaty-of-versailles",
    generate(rng, tier) {
      if (tier === 1 || rng.bool(tier === 2 ? 0.5 : 0.3)) return lambClassify(rng);
      return qaItem(rng, LAMB_DETAIL, tier, "Treaty of Versailles.");
    },
  },
  {
    id: "hitler-rise.key-dates",
    topicId: "hitler-rise",
    title: "Key dates, 1918–1934",
    level: 1,
    guideRef: "why-hitler-rose",
    generate(rng, tier) {
      return dateItem(rng, tier);
    },
  },
  {
    id: "hitler-rise.crisis-years",
    topicId: "hitler-rise",
    title: "Years of crisis, 1919–1923",
    level: 1,
    guideRef: "crises-1919-1923",
    generate(rng, tier) {
      return qaItem(rng, CRISES, tier, "Years of crisis, 1919–1923.");
    },
  },
  {
    id: "hitler-rise.early-nazis",
    topicId: "hitler-rise",
    title: "The early Nazi Party and the Munich Putsch",
    level: 2,
    guideRef: "early-nazi-party",
    generate(rng, tier) {
      return qaItem(rng, EARLY_NAZI, tier, "The early Nazi Party.");
    },
  },
  {
    id: "hitler-rise.recovery-depression",
    topicId: "hitler-rise",
    title: "Golden Years and Depression",
    level: 2,
    guideRef: "golden-years-and-depression",
    generate(rng, tier) {
      return qaItem(rng, RECOVERY, tier, "Recovery and Depression, 1923–1932.");
    },
  },
  {
    id: "hitler-rise.whos-who",
    topicId: "hitler-rise",
    title: "Who's who?",
    level: 2,
    guideRef: "road-to-chancellor",
    generate(rng, tier) {
      return personItem(rng, tier);
    },
  },
  {
    id: "hitler-rise.chancellor-to-dictator",
    topicId: "hitler-rise",
    title: "From Chancellor to dictator, 1933–1934",
    level: 2,
    guideRef: "creating-a-dictatorship",
    generate(rng, tier) {
      return qaItem(rng, DICTATORSHIP, tier, "Chancellor to dictator, 1933–1934.");
    },
  },
  {
    id: "hitler-rise.which-came-first",
    topicId: "hitler-rise",
    title: "Which came first?",
    level: 2,
    guideRef: "why-hitler-rose",
    generate(rng, tier) {
      return whichFirst(rng, tier);
    },
  },
  {
    id: "hitler-rise.classify-factors",
    topicId: "hitler-rise",
    title: "Crisis, weak government or charismatic leadership?",
    level: 3,
    guideRef: "why-hitler-rose",
    generate(rng, tier) {
      return factorItem(rng, tier);
    },
  },
];
