// ---------------------------------------------------------------------------
// Topic registry: order, strand, icon and the fixed guide-section outline.
// Section ids here are the contract shared by guide authors (who must use
// them) and question / drill authors (whose guideRef must point at them).
// Pure data — safe to import from Node scripts.
//
// Curriculum: Tanglin Trust School Year 8 History — theme "Dictatorship and
// Democracy". Term 1: "Under what circumstances did kings rise to power?"
// (William I, King John, Henry VIII). Term 2: "Under what circumstances did
// dictatorships come to power?" (Hitler, Mao, Pol Pot — crises, weak
// government, charismatic leadership). Term 3: "How and why has democracy
// developed?" (French Revolution, Women's Suffrage UK — change & continuity in
// equality, representation and human rights). Plus a Historian's Toolkit unit
// for the skills that run through every term.
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  /** What this section must teach. */
  covers: string;
  /** Year 9 look-ahead / extension. */
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  /** Which term + enquiry question this topic serves. */
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = ["Historian's Toolkit", "Kings & Power", "Dictatorship", "Democracy"];

/** The enquiry question for each strand (shown on topic pages and the home screen). */
export const STRAND_ENQUIRY: Record<Strand, string> = {
  "Historian's Toolkit": "How do historians find out about the past — and argue about it?",
  "Kings & Power": "Under what circumstances did kings rise to power?",
  Dictatorship: "Under what circumstances did dictatorships come to power?",
  Democracy: "How and why has democracy developed?",
};

export const TOPIC_META: TopicMeta[] = [
  // --------------------------- HISTORIAN'S TOOLKIT --------------------------
  {
    id: "historians-toolkit",
    title: "The Historian's Toolkit",
    strand: "Historian's Toolkit",
    icon: "🔍",
    curriculum: "All terms — historical skills and the big concepts of Dictatorship & Democracy",
    sections: [
      { id: "chronology", heading: "Chronology: dates, centuries and timelines", covers: "BC/BCE and AD/CE, why 1066 is in the 11th century, decades, periods (medieval, early modern, modern), reading and drawing timelines, ordering events, anachronism." },
      { id: "sources-and-evidence", heading: "Sources, evidence and inference", covers: "Primary vs secondary sources (and why 'primary' doesn't mean 'reliable'), types of source (written, visual, archaeological, oral), making inferences ('this suggests…') vs describing, supporting inferences with detail from the source." },
      { id: "provenance-nop", heading: "Provenance: Nature, Origin, Purpose", covers: "The NOP method; who made it, when, why, for whom; bias; reliability vs usefulness (a biased source can still be useful); propaganda as evidence of what rulers wanted people to believe; corroboration/cross-referencing." },
      { id: "interpretations", heading: "Interpretations: why historians disagree", covers: "Difference between a source and an interpretation; why interpretations differ (evidence used, when written, the historian's questions and values); testing an interpretation against evidence; e.g. 'Bad King John' vs modern views." },
      { id: "causation", heading: "Causation: why things happen", covers: "Long-term, short-term and trigger causes; categories (political, economic, social, religious, military, individuals); linking causes together; ranking causes and justifying the most important; the 'crises + weak government + charismatic leader' model used in Term 2; counterfactual thinking." },
      { id: "change-continuity-significance", heading: "Change, continuity and significance", covers: "Turning points vs gradual change, what stayed the same, rate and extent of change, progress vs regression; judging significance with criteria (Remarkable, Remembered, Resonant, Resulting in change, Revealing)." },
      { id: "writing-like-a-historian", heading: "Writing like a historian: PEEL and judgement", covers: "PEEL paragraphs (Point, Evidence, Explain, Link), using precise evidence (dates, names, numbers), 'how far do you agree' answers that weigh both sides and reach a supported judgement, avoiding 'list-like' description." },
      { id: "power-concepts", heading: "Big ideas: monarchy, dictatorship and democracy", covers: "Key concepts for the whole year: monarchy, divine right of kings, absolute vs limited/constitutional monarchy, legitimacy, feudalism, dictatorship, totalitarianism, ideology (fascism, communism), propaganda, terror, cult of personality, democracy (direct vs representative), franchise/suffrage, rule of law, human rights." },
    ],
  },
  // ------------------------------ KINGS & POWER -----------------------------
  {
    id: "william-i",
    title: "William I and the Norman Conquest",
    strand: "Kings & Power",
    icon: "⚔️",
    curriculum: "Term 1 — Under what circumstances did kings rise to power? (William I)",
    sections: [
      { id: "england-before-1066", heading: "England before 1066", covers: "Anglo-Saxon England as a rich, well-run kingdom; Edward the Confessor (no heir); the Witan; earls (Godwin family); Normandy and its dukes; links between England and Normandy; Viking threat." },
      { id: "claimants", heading: "1066: four claimants to the throne", covers: "Death of Edward the Confessor (5 January 1066); Harold Godwinson (Witan's choice, deathbed promise, most powerful earl), William of Normandy (promise of 1051, Harold's oath of 1064), Harald Hardrada (Viking deal with Harthacnut, backed by Tostig), Edgar Ætheling (blood claim but a teenager); what makes a claim strong — blood, promise, election, power." },
      { id: "battles-of-1066", heading: "The battles of 1066", covers: "Fulford Gate (20 Sept), Stamford Bridge (25 Sept), William lands at Pevensey (28 Sept), Battle of Hastings (14 October 1066); shield wall, feigned retreats, archers, cavalry; Harold's death; why William won — luck (wind, timing), William's skill and preparation (papal banner), Harold's mistakes; the Bayeux Tapestry as a source." },
      { id: "securing-the-kingdom", heading: "Securing the kingdom: castles and the Harrying of the North", covers: "Coronation on Christmas Day 1066 at Westminster Abbey; rebellions (Edwin and Morcar, Northern rebellion 1069, Hereward the Wake); motte-and-bailey castles (built quickly, then stone keeps like the Tower of London); the Harrying of the North 1069–70 and its consequences; ruthlessness as a tool of power." },
      { id: "feudal-system", heading: "The feudal system", covers: "King owns all land; tenants-in-chief/barons, knights, peasants/villeins; land in return for loyalty and service; oath of fealty; knight service; replacing Anglo-Saxon nobility with Normans; how feudalism kept the king in control (and its risks — powerful barons)." },
      { id: "domesday-and-church", heading: "Domesday Book and the Norman Church", covers: "Domesday survey 1085–86 — what it recorded and why (tax, knowing what he owned, control); Archbishop Lanfranc and reform of the Church; huge stone cathedrals (e.g. Durham); Norman French as the language of power; changes and continuities for ordinary people." },
      { id: "why-william-rose", heading: "Enquiry: why did William rise to power?", covers: "Pulling it together: strength of claim, military power and planning, luck, ruthlessness, Church backing, control systems; how William turned conquest into legitimate kingship; comparing with the other Term 1 kings." },
    ],
  },
  {
    id: "king-john",
    title: "King John and Magna Carta",
    strand: "Kings & Power",
    icon: "📜",
    curriculum: "Term 1 — Under what circumstances did kings rise to power? (King John)",
    sections: [
      { id: "becoming-king", heading: "How John became king", covers: "The Angevin empire (Henry II, Eleanor of Aquitaine); Richard I the Lionheart, crusade and ransom; John's rebellion while Richard was away; John crowned 1199; rival claim of his nephew Arthur of Brittany and Arthur's disappearance (1203); youngest son 'Lackland'." },
      { id: "losing-normandy", heading: "Losing Normandy and raising money", covers: "War with Philip II of France; loss of Normandy (1204) — nickname 'Softsword'; John's efforts to win it back; scutage, taxes, fines, selling offices, heavy demands on barons; John as a hard-working but distrusted administrator." },
      { id: "john-and-the-church", heading: "John versus the Pope", covers: "Dispute over who would be Archbishop of Canterbury (Stephen Langton, chosen by Pope Innocent III); the Interdict (1208–1214) — no church services; John excommunicated (1209); John seizes church lands and money; John submits and makes England a papal fief (1213)." },
      { id: "barons-revolt", heading: "The barons rebel", covers: "Defeat at the Battle of Bouvines (1214) wrecks John's plans; the barons' grievances (taxes, arbitrary justice, hostages, cruelty, losing wars); rebel barons renounce their homage, capture London (May 1215); forcing John to negotiate." },
      { id: "magna-carta", heading: "Magna Carta, 1215", covers: "Sealed at Runnymede, 15 June 1215; key clauses — 39 (no free man imprisoned without lawful judgement of his peers or the law of the land), 40 (justice not sold, denied or delayed), 12 (no scutage without common counsel), freedom of the Church, the security clause (25 barons); mostly protected barons, not everyone; Pope annuls it; First Barons' War; French prince Louis invades; John dies (October 1216), losing treasure in the Wash (legend)." },
      { id: "legacy-of-magna-carta", heading: "The legacy of Magna Carta", covers: "Reissues (1216, 1217, 1225); idea that the king is under the law; Simon de Montfort's Parliament (1265) and the growth of Parliament; later use by Parliament against Charles I, by American colonists, US Bill of Rights, Universal Declaration of Human Rights (1948); only a few clauses still law today; myth vs reality." },
      { id: "bad-king-john", heading: "Interpretations: was John a bad king?", covers: "Chroniclers (monks such as Roger of Wendover and Matthew Paris) hated him — why their view is biased; Victorian 'bad King John' and Robin Hood legends; modern historians: hard-working, skilled administrator, unlucky, faced a powerful rival in Philip II — but also cruel and untrustworthy; John's rise compared with William's; how John's weakness led to limits on royal power." },
    ],
  },
  {
    id: "henry-viii",
    title: "Henry VIII: Power, Marriage and the Break with Rome",
    strand: "Kings & Power",
    icon: "🏰",
    curriculum: "Term 1 — Under what circumstances did kings rise to power? (Henry VIII)",
    sections: [
      { id: "tudor-rise", heading: "The Tudors take the throne", covers: "Wars of the Roses (Lancaster vs York); Henry Tudor wins at Bosworth (1485) and becomes Henry VII; marries Elizabeth of York (Tudor rose); weak claim made strong by victory, marriage and control of nobles; Prince Arthur dies (1502); Henry VIII becomes king (1509) and marries Catherine of Aragon." },
      { id: "young-henry", heading: "The young king: Renaissance prince and Wolsey", covers: "Henry as athletic, educated, musical; wars with France (Field of the Cloth of Gold 1520); Cardinal Thomas Wolsey runs government; Henry as 'Defender of the Faith' (1521) for attacking Luther; monarch with divine right but needing money from Parliament." },
      { id: "the-great-matter", heading: "The King's 'Great Matter'", covers: "Need for a male heir (only daughter Mary survived); fear of another civil war; Anne Boleyn; Henry's argument from Leviticus; Pope Clement VII cannot agree — controlled by Charles V, Catherine's nephew (Sack of Rome 1527); fall of Wolsey (1529)." },
      { id: "break-with-rome", heading: "The Break with Rome", covers: "Thomas Cromwell and Thomas Cranmer; Henry marries Anne (January 1533); Cranmer annuls the first marriage; Act of Supremacy (1534) — Henry Supreme Head of the Church of England; Treason Act; execution of Thomas More (1535); was it about love, an heir, money, power or religion?" },
      { id: "dissolution-of-monasteries", heading: "Dissolution of the monasteries", covers: "Visitations (Valor Ecclesiasticus 1535); smaller monasteries closed 1536, larger by 1540; reasons — money and land for the Crown, removing papal loyalty, reports of corruption; who gained (gentry who bought land); effects on the poor, the sick, education; the Pilgrimage of Grace (1536) and its brutal end." },
      { id: "six-wives", heading: "Six wives and the succession", covers: "Catherine of Aragon, Anne Boleyn (executed 1536), Jane Seymour (died after giving birth to Edward, 1537), Anne of Cleves, Catherine Howard (executed 1542), Catherine Parr; 'divorced, beheaded, died, divorced, beheaded, survived'; Acts of Succession; Edward VI, Mary I and Elizabeth I all reign; Henry's growing tyranny later in life; death in 1547." },
      { id: "henry-power", heading: "Enquiry: how powerful was Henry VIII — and how did kings rise?", covers: "Holbein portraits and royal image as propaganda; using Parliament to make the break legal (more power for both king and Parliament); executions as a tool of fear; comparing the rise and power of William I, John and Henry VIII — inheritance, conquest, luck, ruthlessness, Church, barons/nobles." },
    ],
  },
  // ------------------------------ DICTATORSHIP ------------------------------
  {
    id: "hitler-rise",
    title: "Hitler's Rise to Power",
    strand: "Dictatorship",
    icon: "📉",
    curriculum: "Term 2 — Under what circumstances did dictatorships come to power? (Hitler)",
    sections: [
      { id: "weimar-republic", heading: "A new democracy: the Weimar Republic", covers: "Germany's defeat in the First World War (armistice 11 November 1918); the Kaiser abdicates; the Weimar constitution (1919) — votes for all over 20 incl. women, proportional representation (many small parties, coalitions), Article 48 emergency powers; why a new democracy was fragile." },
      { id: "treaty-of-versailles", heading: "The Treaty of Versailles", covers: "Signed June 1919; terms (LAMB: Land — e.g. Alsace-Lorraine, colonies, Polish corridor; Army — 100,000 men, no air force, Rhineland demilitarised; Money — reparations set at £6.6 billion in 1921; Blame — war guilt clause 231); 'Diktat'; the 'stab in the back' myth and the 'November Criminals'." },
      { id: "crises-1919-1923", heading: "Years of crisis, 1919–1923", covers: "Spartacist uprising (1919), Kapp Putsch (1920), political murders; French occupation of the Ruhr (1923); hyperinflation 1923 (bread prices rising to billions of marks; savings wiped out, middle classes hit; some gained); loss of faith in democracy." },
      { id: "early-nazi-party", heading: "The early Nazi Party and the Munich Putsch", covers: "Hitler's background (Austrian, failed artist, soldier); German Workers' Party (1919) becomes NSDAP; 25-Point Programme; Hitler's speaking skill; the SA (stormtroopers); Munich (Beer Hall) Putsch, November 1923 — failure; trial as publicity; prison and Mein Kampf; lessons learned — win power legally." },
      { id: "golden-years-and-depression", heading: "Recovery, then the Great Depression", covers: "Stresemann, the Rentenmark, Dawes Plan (1924), Young Plan (1929), Locarno, League of Nations — 'Golden Years' and low Nazi vote (2.6% in 1928); Wall Street Crash (October 1929); US loans recalled; unemployment reaching about 6 million by 1932; government by decree under Article 48." },
      { id: "road-to-chancellor", heading: "The road to Chancellor, 1930–1933", covers: "Nazi vote rises (18% in 1930, 37% in July 1932 — largest party); propaganda (Goebbels, rallies, posters, radio, simple messages: work and bread); appeal to different groups (farmers, middle class, young people, unemployed); fear of communism; SA violence; backroom deal — von Papen and Hindenburg appoint Hitler Chancellor (30 January 1933), thinking they could control him." },
      { id: "creating-a-dictatorship", heading: "From Chancellor to dictator, 1933–1934", covers: "Reichstag Fire (27 February 1933) and emergency decree; Enabling Act (23 March 1933) — power to make laws without the Reichstag; banning trade unions and other parties (July 1933); Night of the Long Knives (30 June 1934); death of Hindenburg (August 1934) — Hitler becomes Führer, army swears oath; early persecution of Jewish people and opponents (age-appropriate)." },
      { id: "why-hitler-rose", heading: "Enquiry: why did Hitler come to power?", covers: "Weighing crises (Versailles, hyperinflation, Depression), weakness of the Weimar government (proportional representation, Article 48, elites' miscalculation) and charismatic leadership (Hitler's speeches, propaganda, organisation); linking factors; how a democracy can be dismantled legally; the importance of remembering where this led." },
    ],
  },
  {
    id: "mao-rise",
    title: "Mao Zedong and the Communist Victory in China",
    strand: "Dictatorship",
    icon: "⭐",
    curriculum: "Term 2 — Under what circumstances did dictatorships come to power? (Mao)",
    sections: [
      { id: "china-in-crisis", heading: "China in crisis, 1911–1927", covers: "Fall of the Qing dynasty (1911–12) and end of 2,000 years of emperors; foreign humiliation (unequal treaties, spheres of influence); warlord era; May Fourth Movement (1919) after Versailles gave Shandong to Japan; poverty of the peasants (most of the population)." },
      { id: "nationalists-and-communists", heading: "Nationalists vs Communists", covers: "Sun Yat-sen and the Guomindang (GMD/Kuomintang) — Three Principles of the People; Chinese Communist Party founded 1921 (Mao a founding member); First United Front; Chiang Kai-shek; Northern Expedition; Shanghai Massacre (1927) turns the GMD against the communists." },
      { id: "mao-and-the-peasants", heading: "Mao's idea: a peasant revolution", covers: "Mao's background (son of a peasant farmer from Hunan, teacher, librarian); breaking with Soviet-style city revolution — peasants as the revolutionary force; Jiangxi Soviet; land reform; guerrilla warfare rules ('enemy advances, we retreat…'); Red Army discipline (Eight Points of Attention)." },
      { id: "long-march", heading: "The Long March, 1934–1935", covers: "GMD encirclement campaigns; breakout (October 1934); about 86,000 set out and roughly 8,000 reached Shaanxi (Yan'an) a year later; around 9,000–12,500 km claimed; Zunyi Conference (1935) — Mao rises to leadership; Luding Bridge as heroic story (and doubts about it); the March as a military disaster turned propaganda triumph." },
      { id: "japan-and-civil-war", heading: "War with Japan and Civil War, 1937–1949", covers: "Japanese invasion (1937), Second United Front; communists gain support as patriotic fighters in the countryside, GMD weakened, corrupt, inflation; Civil War (1946–49); communist victory; Mao proclaims the People's Republic of China, 1 October 1949; Chiang flees to Taiwan." },
      { id: "mao-in-power", heading: "Mao in power: control and its costs", covers: "One-party state; land reform and campaigns against 'enemies'; cult of personality (portraits, the Little Red Book); the Great Leap Forward (1958–62) and the famine that killed tens of millions (estimates commonly 15–45 million); the Cultural Revolution (1966–76) and the Red Guards — overview only; historians' debates about Mao's legacy." },
      { id: "why-mao-rose", heading: "Enquiry: why did Mao come to power?", covers: "Crises (collapse of imperial China, warlords, Japanese invasion, inflation), weakness of the Nationalist government (corruption, defeats, losing peasants' support), Mao's leadership and ideas (peasant strategy, guerrilla warfare, propaganda, the Long March legend); comparing with Hitler — a revolution/civil war vs a legal route." },
    ],
  },
  {
    id: "pol-pot",
    title: "Pol Pot and the Khmer Rouge",
    strand: "Dictatorship",
    icon: "🕯️",
    curriculum: "Term 2 — Under what circumstances did dictatorships come to power? (Pol Pot)",
    sections: [
      { id: "cambodia-before", heading: "Cambodia: empire, colony, independence", covers: "The Khmer Empire and Angkor Wat as a source of national pride; French colonial rule (from 1863); independence in 1953 under King/Prince Norodom Sihanouk; neutrality during the Cold War; poverty in the countryside." },
      { id: "war-spills-over", heading: "The Vietnam War spills over", covers: "North Vietnamese supply routes (Ho Chi Minh Trail) through Cambodia; secret US bombing (1969–73) — huge tonnage, rural deaths and anger; Lon Nol's coup (1970) removes Sihanouk; Sihanouk allies with the Khmer Rouge — boosting their support among peasants; civil war (1970–75)." },
      { id: "rise-of-khmer-rouge", heading: "Saloth Sar becomes Pol Pot", covers: "Saloth Sar's background (studied in Paris, communist ideas, teacher); secretive Communist Party of Kampuchea; recruiting young, poor rural fighters; ideas — extreme agrarian communism, self-reliance, hatred of cities, foreign influence and the educated; 'Angkar' (the Organisation) as the faceless ruler; capture of Phnom Penh, 17 April 1975." },
      { id: "year-zero", heading: "Year Zero: Democratic Kampuchea", covers: "Cities emptied within days; 'Year Zero' — restarting history; abolishing money, markets, schools, religion, private property and family life; forced labour in rural collectives with impossible rice quotas; 'new people' (city dwellers) vs 'base people'; isolation from the world." },
      { id: "the-genocide", heading: "The Cambodian genocide", covers: "Age-appropriate, respectful treatment: an estimated 1.5–2 million people died (roughly a quarter of the population) from execution, starvation, overwork and disease; targeting of the educated, ethnic minorities (Vietnamese, Cham Muslims, Chinese) and suspected enemies; S-21 (Tuol Sleng) prison and the 'killing fields' (Choeung Ek); sources such as survivor testimony and Khmer Rouge records; why remembering matters." },
      { id: "fall-and-justice", heading: "Downfall, memory and justice", covers: "Border attacks on Vietnam; Vietnamese invasion (December 1978) captures Phnom Penh (7 January 1979); Khmer Rouge continue fighting from the jungle and keep Cambodia's UN seat; Pol Pot dies (1998) never tried; the Extraordinary Chambers in the Courts of Cambodia (tribunal) — convictions of Duch (2010) and of Nuon Chea and Khieu Samphan, including for genocide (2018); memorials and museums today." },
      { id: "comparing-dictators", heading: "Enquiry: comparing Hitler, Mao and Pol Pot", covers: "Term 2 synthesis: crises (war, economic collapse, foreign intervention), weakness of government (Weimar, Nationalists, Lon Nol), charismatic or ideological leadership (Hitler's speeches, Mao's cult, Pol Pot's secrecy — not every dictator is charismatic in the same way); similarities and differences in how each took power and what they did with it; warning signs for democracies." },
    ],
  },
  // -------------------------------- DEMOCRACY -------------------------------
  {
    id: "french-revolution",
    title: "The French Revolution",
    strand: "Democracy",
    icon: "🗽",
    curriculum: "Term 3 — How and why has democracy developed? (French Revolution)",
    sections: [
      { id: "ancien-regime", heading: "The Ancien Régime", covers: "France before 1789; absolute monarchy and divine right; Louis XVI and Marie Antoinette; Versailles; the three estates — First (clergy), Second (nobles), Third (everyone else, ~97%); who paid taxes (taille) and who didn't; tithes and feudal dues." },
      { id: "causes-of-revolution", heading: "Why did revolution break out?", covers: "Long-term: unfair estate system, Enlightenment ideas (Rousseau — general will, Montesquieu — separation of powers, Voltaire — free speech), example of the American Revolution; short-term: royal bankruptcy (debt from wars incl. helping the Americans), failed tax reforms, bad harvest of 1788 and soaring bread prices; trigger: calling the Estates-General." },
      { id: "revolution-1789", heading: "1789: the year everything changed", covers: "Estates-General opens (May 1789), voting dispute; Third Estate declares itself the National Assembly (17 June); Tennis Court Oath (20 June); Storming of the Bastille (14 July); the Great Fear; abolition of feudal privileges (4 August); Women's March on Versailles (October) brings the king to Paris." },
      { id: "rights-of-man", heading: "Rights and their limits", covers: "Declaration of the Rights of Man and of the Citizen (26 August 1789) — liberty, equality before the law, popular sovereignty, free speech; constitutional monarchy (1791 constitution); active vs passive citizens (property qualification); women excluded — Olympe de Gouges' Declaration of the Rights of Woman (1791); slavery and the Haitian Revolution (abolition 1794); 'Liberté, Égalité, Fraternité'." },
      { id: "radical-revolution", heading: "Republic and Terror, 1791–1794", covers: "Flight to Varennes (June 1791); war with Austria and Prussia (1792); storming of the Tuileries and the monarchy abolished; France a republic (September 1792), universal male suffrage for the Convention; execution of Louis XVI (21 January 1793) and Marie Antoinette; Robespierre, the Jacobins and the Committee of Public Safety; the Terror (1793–94) — around 17,000 official executions, the guillotine; Robespierre executed (July 1794)." },
      { id: "napoleon-and-legacy", heading: "Napoleon and the legacy of the Revolution", covers: "The Directory; Napoleon's coup (1799) and becoming Emperor (1804) — a revolution ending in a dictatorship; Napoleonic Code (equality before the law, merit, but fewer rights for women); spread of revolutionary ideas; change and continuity: did the Revolution create democracy? (ideas of rights and the nation vs Terror and empire); links to the Term 2 question of how dictators rise." },
    ],
  },
  {
    id: "womens-suffrage",
    title: "Votes for Women: Suffrage in Britain",
    strand: "Democracy",
    icon: "🗳️",
    curriculum: "Term 3 — How and why has democracy developed? (Women's Suffrage, UK)",
    sections: [
      { id: "britain-becomes-democratic", heading: "How democratic was Britain in 1800?", covers: "Tiny electorate (about 3% of adults could vote), rotten and pocket boroughs, open voting and bribery, no MPs for new industrial towns; Peterloo (1819); Great Reform Act (1832); the Chartists (1838–1850s) and the six points; Second Reform Act (1867), Secret Ballot Act (1872), Third Reform Act (1884) — around 60% of men could vote but no women." },
      { id: "women-in-victorian-britain", heading: "Women's lives and rights in Victorian Britain", covers: "'Separate spheres' ideology; legal position of married women (coverture); Married Women's Property Acts (1870, 1882); access to university education; women in factories, domestic service, teaching and nursing; women could vote in some local elections (from 1869) and be elected to school boards." },
      { id: "suffragists", heading: "The suffragists: NUWSS", covers: "Early campaigns (1866 petition presented by John Stuart Mill); Millicent Garrett Fawcett; National Union of Women's Suffrage Societies (1897); peaceful, law-abiding methods — petitions, meetings, lobbying MPs, marches (e.g. the 1913 Great Pilgrimage); large membership; slow progress — repeated failed bills." },
      { id: "suffragettes", heading: "The suffragettes: WSPU", covers: "Emmeline Pankhurst and daughters Christabel and Sylvia; Women's Social and Political Union (1903); 'Deeds not words'; heckling, window smashing, arson, attacks on property; imprisonment, hunger strikes and force-feeding; the 'Cat and Mouse Act' (1913); Emily Wilding Davison at the Epsom Derby (1913); Black Friday (1910); debates about whether militancy helped or harmed the cause; working-class suffragettes and Sophia Duleep Singh." },
      { id: "arguments-for-and-against", heading: "Arguments for and against votes for women", covers: "Arguments for: equality, women pay taxes, women already run local affairs, educated women vs uneducated men, other countries (New Zealand 1893, Australia 1902, Finland 1906); arguments against: separate spheres, 'too emotional', women don't fight in wars, most women didn't want it, the Anti-Suffrage League (including women such as Mary Augusta Ward); political parties' calculations." },
      { id: "war-and-the-vote", heading: "The First World War and the vote", covers: "Suffrage campaigns largely suspended in 1914; women's war work (munitions — 'munitionettes', transport, nursing, Land Army); soldiers' votes problem (residency rules); Representation of the People Act (1918) — all men over 21, women over 30 who met a property qualification (about 8.4 million women); Parliament (Qualification of Women) Act 1918; Constance Markievicz first woman elected (1918), Nancy Astor first to take her seat (1919); Equal Franchise Act (1928) — women vote on equal terms at 21." },
      { id: "why-women-won", heading: "Enquiry: why did women win the vote — and how has democracy developed?", covers: "Weighing the suffragists, the suffragettes and the war (plus longer-term changes in women's roles); change and continuity in equality, representation and rights from 1789 to 1928 and beyond (e.g. voting age 18 in 1969; Singapore's first elections with women voting, 1948; Universal Declaration of Human Rights 1948); is the story of democracy one of steady progress?" },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
