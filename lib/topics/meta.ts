// ---------------------------------------------------------------------------
// Topic registry: order, unit, icon and the fixed guide-section outline.
// Section ids here are the contract shared by guide authors (who must use
// them) and question / drill authors (whose guideRef must point at them).
// Pure data — safe to import from Node scripts.
//
// Curriculum: Tanglin Trust School Year 8 History — theme "Dictatorship and
// Democracy" (Middle School Curriculum Overview p.18):
//   Term 1 — "Under what circumstances did kings rise to power?" (William I, Henry VIII, King John)
//   Term 2 — "Under what circumstances did dictatorships come to power?" (Hitler, Mao, Pol Pot;
//            crises, weak government and charismatic leadership → causation)
//   Term 3 — "How and why has democracy developed?" (French Revolution, Women's Suffrage (UK);
//            change & continuity in equality, representation and human rights)
// plus the historical skills that run through all three terms.
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  /** What this section must teach. */
  covers: string;
  /** Year 9 / GCSE look-ahead. */
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  /** Where this sits in the school's Year 8 course. */
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = ["Historian's Toolkit", "Kings & Power", "Dictatorships", "Democracy & Rights"];

/** One-line enquiry question per unit (shown on the topics page). */
export const STRAND_ENQUIRY: Record<Strand, string> = {
  "Historian's Toolkit": "How do historians think? Sources, causes, change and significance.",
  "Kings & Power": "Term 1 — Under what circumstances did kings rise to power?",
  Dictatorships: "Term 2 — Under what circumstances did dictatorships come to power?",
  "Democracy & Rights": "Term 3 — How and why has democracy developed?",
};

export const TOPIC_META: TopicMeta[] = [
  // --------------------------- HISTORIAN'S TOOLKIT --------------------------
  {
    id: "historians-toolkit",
    title: "The Historian's Toolkit",
    strand: "Historian's Toolkit",
    icon: "🔍",
    curriculum: "Year 8 skills running through all three terms: chronology, sources, interpretations, causation, significance, change & continuity, PEEL writing",
    sections: [
      { id: "chronology-and-periods", heading: "Chronology: dates, centuries and periods", covers: "BC/AD and BCE/CE, counting centuries (1066 is in the 11th century), decades, the big periods (ancient, medieval, early modern, modern), reading and building timelines, anachronism." },
      { id: "sources-and-evidence", heading: "Sources and evidence", covers: "Primary vs secondary sources, inference (what a source suggests beyond what it says), content vs provenance, NOP (Nature, Origin, Purpose), corroboration/cross-referencing." },
      { id: "utility-and-reliability", heading: "Usefulness and reliability", covers: "Difference between useful and reliable; bias, exaggeration, propaganda; why a biased source can still be very useful; 'useful FOR what?'; judging with content + provenance + own knowledge." },
      { id: "interpretations", heading: "Interpretations: why historians disagree", covers: "Interpretation vs source; why accounts differ (evidence available, focus, when/why written, the historian's values); how to evaluate an interpretation with evidence; examples like 'Bad King John'." },
      { id: "causation-and-consequence", heading: "Causation and consequence", covers: "Long-term, short-term and trigger causes; categories (political, economic, social, religious, military, individuals); linking and ranking causes; consequences (intended/unintended, short/long-term)." },
      { id: "significance-and-change", heading: "Significance, change and continuity", covers: "Judging significance (e.g. Counsell's 5 Rs: Remarkable, Remembered, Resonant, Resulting in change, Revealing); change vs continuity, turning points, rate and extent of change; writing a PEEL paragraph and a substantiated judgement." },
    ],
  },

  // ------------------------------ KINGS & POWER -----------------------------
  {
    id: "william-i",
    title: "William I and the Norman Conquest",
    strand: "Kings & Power",
    icon: "🏰",
    curriculum: "Term 1 enquiry — Under what circumstances did kings rise to power? Case study 1: William I",
    sections: [
      { id: "succession-crisis-1066", heading: "The succession crisis of 1066", covers: "Death of Edward the Confessor (5 Jan 1066) with no heir; the claimants Harold Godwinson, William of Normandy, Harald Hardrada and Edgar Ætheling; the basis of each claim (Witan, promise, oath of 1064, blood, Viking claim); Harold crowned 6 Jan 1066." },
      { id: "battles-of-1066", heading: "The battles of 1066", covers: "Gate Fulford (20 Sept), Stamford Bridge (25 Sept), William lands at Pevensey (28 Sept), the forced march south, Battle of Hastings 14 Oct 1066: shield wall, feigned retreats, archers, Harold's death; the Bayeux Tapestry as a source." },
      { id: "why-william-won", heading: "Why did William win at Hastings?", covers: "Causation: William's preparation and leadership (fleet, papal banner, cavalry, archers, feigned retreat), Harold's decisions (exhausted army, not waiting), luck (wind direction, Hardrada's invasion timing); weighing and linking the factors." },
      { id: "securing-control", heading: "Securing control: castles and the Harrying of the North", covers: "Coronation Christmas Day 1066; rebellions (e.g. Exeter 1068, the North 1069, Hereward the Wake at Ely 1070–71); motte-and-bailey castles then stone keeps; the Harrying of the North 1069–70 and its human cost; replacing English earls with Normans." },
      { id: "feudal-system-domesday", heading: "The feudal system and the Domesday Book", covers: "The feudal pyramid (king, tenants-in-chief/barons, knights, peasants/villeins), land in return for loyalty and service, oath of fealty, knight service; the Domesday survey of 1085–86 — what it recorded and why (tax, control)." },
      { id: "impact-of-the-conquest", heading: "How much did the Conquest change England?", covers: "Change and continuity: new ruling class, Norman French at court, rebuilt churches and cathedrals, Archbishop Lanfranc, the forest laws; what stayed the same for most peasants; how William rose to power — conquest plus claimed legitimacy." },
    ],
  },
  {
    id: "king-john",
    title: "King John and Magna Carta",
    strand: "Kings & Power",
    icon: "📜",
    curriculum: "Term 1 enquiry — Under what circumstances did kings rise to power? Case study 2: King John",
    sections: [
      { id: "angevin-inheritance", heading: "John's inheritance: the Angevin Empire", covers: "Henry II and the Angevin Empire, Richard I (the Lionheart) and crusade/ransom costs, John becomes king in 1199 over his nephew Arthur of Brittany; Arthur's disappearance (1203) and the rumours; how John rose to power through inheritance and choice." },
      { id: "losing-normandy", heading: "Losing Normandy", covers: "Conflict with Philip II of France, loss of Normandy in 1204 and the 'Softsword' nickname; why it mattered (lost land, reputation, barons' estates); John's costly attempts to win it back and defeat at Bouvines (1214)." },
      { id: "john-and-the-church", heading: "John and the Church", covers: "The dispute over the Archbishop of Canterbury (Stephen Langton); Pope Innocent III's interdict on England (1208) and John's excommunication (1209); John takes Church income; his submission in 1213, making England a papal fief." },
      { id: "john-and-the-barons", heading: "Money, justice and angry barons", covers: "Heavy taxes: scutage, reliefs, fines, forest law; selling justice; hostages and harsh treatment of barons (e.g. the de Braose family); why the barons rebelled and captured London in May 1215." },
      { id: "magna-carta", heading: "Magna Carta, 1215", covers: "Runnymede, 15 June 1215; key clauses (no taxes without the common counsel of the realm — clause 12; no free man imprisoned without lawful judgement — 39; justice not sold or delayed — 40; council of 25 barons — 61); annulled by the Pope; First Barons' War; John dies Oct 1216; reissues 1216, 1217, 1225." },
      { id: "johns-reputation", heading: "Bad King John? Reputation and significance", covers: "Interpretations: monastic chroniclers (Roger of Wendover, Matthew Paris) vs modern historians; Robin Hood legend; why Magna Carta became significant later (Parliament, US Constitution, Universal Declaration of Human Rights); limits on a king's power." },
    ],
  },
  {
    id: "henry-viii",
    title: "Henry VIII and the Tudors",
    strand: "Kings & Power",
    icon: "🌹",
    curriculum: "Term 1 enquiry — Under what circumstances did kings rise to power? Case study 3: Henry VIII",
    sections: [
      { id: "wars-of-the-roses", heading: "The Wars of the Roses and the first Tudor", covers: "Lancaster vs York, Battle of Bosworth (22 Aug 1485), Henry VII's weak blood claim and how he secured the throne (marriage to Elizabeth of York, the Tudor rose, defeating pretenders, controlling nobles, building wealth)." },
      { id: "young-henry", heading: "Young Henry: the Renaissance prince", covers: "Prince Arthur's death (1502) makes Henry heir; accession 1509 at 17; marriage to Catherine of Aragon; image as a sporting, educated Renaissance prince; Cardinal Wolsey as chief minister; Field of the Cloth of Gold (1520)." },
      { id: "the-great-matter", heading: "The 'Great Matter': Henry's divorce", covers: "Need for a male heir (only Princess Mary survived), fear of civil war returning, Anne Boleyn, the Leviticus argument; Pope Clement VII under the control of Charles V (Catherine's nephew); Wolsey's failure and fall (1529)." },
      { id: "break-with-rome", heading: "The Break with Rome", covers: "Thomas Cromwell and Thomas Cranmer; Henry marries Anne Boleyn (1533); Act of Supremacy 1534 makes Henry Supreme Head of the Church of England; Treason Act; execution of Thomas More (1535); motives: heir, money, power, religion (Protestant ideas)." },
      { id: "dissolution-of-the-monasteries", heading: "The Dissolution of the Monasteries", covers: "1536–1540: visitations and the Valor Ecclesiasticus, closing ~800 religious houses; motives (wealth, removing papal loyalty, rewarding supporters); the Pilgrimage of Grace (1536) and its brutal end; effects on the poor and on the gentry." },
      { id: "henrys-power-and-image", heading: "Henry's power, wives and image", covers: "The six wives in order (divorced, beheaded, died, divorced, beheaded, survived) and their children (Mary, Elizabeth, Edward); propaganda — Holbein's portraits, coins, ceremony; how Henry kept power and how much stronger the monarchy became; his death 1547." },
    ],
  },
  {
    id: "power-of-monarchs",
    title: "How Did Monarchs Gain and Keep Power?",
    strand: "Kings & Power",
    icon: "👑",
    curriculum: "Term 1 enquiry synthesis — Under what circumstances did kings rise to power? Comparing William I, King John and Henry VIII",
    sections: [
      { id: "claims-to-the-throne", heading: "Claims to the throne: what made a king legitimate?", covers: "Inheritance and bloodline (primogeniture), being chosen (the Witan/nobles), conquest ('right by the sword'), Church approval and coronation (anointing), Divine Right of Kings; legitimacy vs power." },
      { id: "tools-of-control", heading: "Tools of control", covers: "Armies and castles, land and patronage (rewarding loyal nobles), law and justice, taxation, the Church, propaganda (coins, seals, portraits, the Bayeux Tapestry, ceremonies) — with examples from William, John and Henry." },
      { id: "limits-on-power", heading: "Limits on royal power", covers: "Barons and nobles, the Pope and the Church, rebellions (Harrying of the North, Barons' War, Pilgrimage of Grace), Magna Carta, the growing role of Parliament (Henry VIII used Parliament to pass the Reformation laws); kingship as a bargain." },
      { id: "comparing-three-kings", heading: "Comparing three kings' rise to power", covers: "The circumstances of each rise — William: succession crisis + conquest; John: inheritance + disputed succession; Henry VIII: peaceful inheritance after his father won by battle. Similarities and differences; who was most secure and why." },
      { id: "monarchy-beyond-england", heading: "Monarchy beyond England", covers: "Legitimacy elsewhere: China's Mandate of Heaven, the Malay sultanates and the Sang Nila Utama legend of Singapura's founding, Mughal emperors (e.g. Akbar) — common ideas of sacred kingship, lineage and force." },
      { id: "writing-a-causation-essay", heading: "Writing the enquiry essay", covers: "Answering 'Under what circumstances did kings rise to power?': planning by factors (inheritance, conquest, crisis, Church, personal qualities), PEEL paragraphs, linking factors, comparing case studies, reaching a substantiated judgement." },
    ],
  },

  // ------------------------------ DICTATORSHIPS -----------------------------
  {
    id: "weimar-germany",
    title: "Weimar Germany in Crisis",
    strand: "Dictatorships",
    icon: "🏚️",
    curriculum: "Term 2 enquiry — Under what circumstances did dictatorships come to power? Hitler (1): the crises that opened the door",
    sections: [
      { id: "germany-after-ww1", heading: "Germany after the First World War", covers: "The Kaiser abdicates (Nov 1918), armistice 11 Nov 1918, revolution and the new Weimar Republic (Ebert, constitution 1919); the 'November Criminals' and the stab-in-the-back myth; Spartacist (1919) and Kapp (1920) risings." },
      { id: "treaty-of-versailles", heading: "The Treaty of Versailles", covers: "Signed 28 June 1919; terms: land (Alsace-Lorraine, Polish Corridor, colonies, 13% of territory), army (100,000 men, no tanks/air force, demilitarised Rhineland), reparations (£6.6 billion set in 1921), blame (Article 231 'War Guilt'); why Germans called it a Diktat." },
      { id: "weimar-constitution", heading: "The Weimar Constitution: strengths and weaknesses", covers: "Democratic rights (votes for men and women over 20, freedoms); proportional representation and many small parties → unstable coalitions; Article 48 emergency powers for the President; judges, army and civil service not loyal to democracy." },
      { id: "crises-of-1923", heading: "1923: the year of crisis", covers: "Germany misses reparations payments; French and Belgian occupation of the Ruhr (Jan 1923); passive resistance and printing money → hyperinflation (a loaf of bread cost 200 billion marks by Nov 1923); who lost and who gained; Munich (Beer Hall) Putsch Nov 1923, Hitler's trial and Mein Kampf." },
      { id: "golden-twenties", heading: "Recovery: the 'Golden Twenties'", covers: "Gustav Stresemann; the Rentenmark (1923); Dawes Plan (1924) and US loans; Locarno Treaties (1925); joining the League of Nations (1926); Young Plan (1929); culture and stability — but recovery built on borrowed American money." },
      { id: "great-depression", heading: "The Great Depression", covers: "Wall Street Crash (Oct 1929); US loans recalled; businesses collapse; unemployment ~6 million by 1932; coalition collapses and government by Article 48 decree under Brüning; growing support for extremists (Nazis and Communists)." },
    ],
  },
  {
    id: "hitler-rise",
    title: "Hitler's Rise to Power",
    strand: "Dictatorships",
    icon: "⚡",
    curriculum: "Term 2 enquiry — Under what circumstances did dictatorships come to power? Hitler (2): from party leader to Führer",
    sections: [
      { id: "early-nazi-party", heading: "The early Nazi Party", covers: "Hitler joins the German Workers' Party (1919); NSDAP and the 25-Point Programme (1920); the SA (Brownshirts); key ideas — extreme nationalism, overturning Versailles, Lebensraum, antisemitism and racism, the 'national community'; lessons of the failed Putsch → winning power through elections." },
      { id: "why-people-voted-nazi", heading: "Why did Germans vote Nazi?", covers: "Seats/vote share: 12 seats (2.6%) in 1928 → 107 (1930) → 230 (37%, July 1932, largest party) → 196 (Nov 1932); propaganda (Goebbels, rallies, posters, radio, 'Hitler over Germany' flights); promises to different groups; fear of Communism; Hitler's speaking skills; SA violence." },
      { id: "becoming-chancellor", heading: "How Hitler became Chancellor", covers: "Chancellors Brüning, von Papen, von Schleicher; President Hindenburg's distrust of Hitler; backstairs intrigue — Papen persuades Hindenburg to appoint Hitler Chancellor on 30 Jan 1933 believing he could be controlled; only 3 Nazis in the cabinet." },
      { id: "consolidating-power", heading: "From Chancellor to Führer", covers: "Reichstag Fire (27 Feb 1933) and emergency decree; March 1933 election; Enabling Act (23 March 1933) lets Hitler make laws without the Reichstag; trade unions banned (May 1933), other parties banned (July 1933); Night of the Long Knives (30 June 1934, Röhm); Hindenburg dies (2 Aug 1934) → Führer; army oath of loyalty." },
      { id: "the-nazi-police-state", heading: "Controlling Germany: terror and propaganda", covers: "SS (Himmler), Gestapo, concentration camps (Dachau 1933); propaganda and censorship (Goebbels, book burnings, radio, Berlin Olympics 1936); control of young people (Hitler Youth, schools); persecution of Jewish people (boycott 1933, Nuremberg Laws 1935, Kristallnacht Nov 1938), leading to the Holocaust — treated soberly and age-appropriately." },
      { id: "why-hitler-came-to-power", heading: "Why did Hitler come to power?", covers: "Causation judgement: long-term (Versailles, weak Weimar constitution), short-term (Depression, fear of Communism), Nazi strengths (propaganda, Hitler's leadership, organisation), the role of elites' miscalculation; linking crisis + weak government + charismatic leadership; judging the most important factor." },
    ],
  },
  {
    id: "mao-china",
    title: "Mao and Communist China",
    strand: "Dictatorships",
    icon: "⭐",
    curriculum: "Term 2 enquiry — Under what circumstances did dictatorships come to power? Case study: Mao Zedong",
    sections: [
      { id: "china-in-crisis", heading: "China in crisis, 1839–1927", covers: "The 'century of humiliation' (Opium Wars, unequal treaties); fall of the Qing dynasty in the 1911 Revolution; Sun Yat-sen and the Republic; the warlord era; May Fourth Movement (1919); founding of the Chinese Communist Party (1921)." },
      { id: "nationalists-vs-communists", heading: "Nationalists vs Communists", covers: "The Guomindang (GMD/KMT) under Chiang Kai-shek; the Shanghai Massacre (1927) ends cooperation; Mao's peasant-based communism; the Jiangxi Soviet; the Long March (1934–35, ~10,000 km, ~10% survived) and Mao's rise to leadership; Yan'an." },
      { id: "war-and-communist-victory", heading: "War and Communist victory, 1937–1949", covers: "Japanese invasion (1937) and the Second United Front; Communist guerrilla war and land reform win peasant support; GMD corruption, inflation and losses; Civil War (1946–49); Mao proclaims the People's Republic of China on 1 Oct 1949; Chiang retreats to Taiwan; why the CCP won." },
      { id: "maos-new-china", heading: "Building Mao's China in the 1950s", covers: "One-party state; land reform and campaigns against landlords and 'counter-revolutionaries'; the First Five-Year Plan (1953–57, Soviet-style industry); the Hundred Flowers Campaign (1956–57) and the Anti-Rightist Campaign that followed." },
      { id: "great-leap-forward", heading: "The Great Leap Forward", covers: "1958–62: aim to overtake Britain in industry; people's communes; backyard furnaces; false harvest reports and grain requisitions; the Great Famine (historians estimate roughly 15–45 million deaths; 30 million is a commonly cited figure); Mao steps back from day-to-day leadership." },
      { id: "cultural-revolution", heading: "The Cultural Revolution and the cult of Mao", covers: "1966–76: Mao's return to power; Red Guards, the 'Four Olds', the Little Red Book; persecution, closed schools, sending youth to the countryside; cult of personality (posters, songs, badges); Mao's death (1976); later CCP verdict '70% right, 30% wrong' and historians' interpretations." },
    ],
  },
  {
    id: "pol-pot",
    title: "Pol Pot and the Khmer Rouge",
    strand: "Dictatorships",
    icon: "🕯️",
    curriculum: "Term 2 enquiry — Under what circumstances did dictatorships come to power? Case study: Pol Pot (sensitive topic — sober, age-appropriate)",
    sections: [
      { id: "cambodia-before-1970", heading: "Cambodia before 1970", covers: "Angkor and Khmer heritage; French colonial rule (1863–1953); independence under Prince Norodom Sihanouk; neutrality during the Vietnam War; rural poverty and the gap between countryside and Phnom Penh; Saloth Sar (later Pol Pot) studies in Paris and joins the communist movement." },
      { id: "war-spills-over", heading: "The Vietnam War spills into Cambodia", covers: "North Vietnamese supply routes through Cambodia; secret US bombing (1969–73) devastates the countryside; Lon Nol's coup against Sihanouk (March 1970); Sihanouk backs the Khmer Rouge, giving them peasant support; civil war 1970–75 and a weak, corrupt Lon Nol government." },
      { id: "khmer-rouge-take-power", heading: "The Khmer Rouge take power", covers: "Khmer Rouge capture Phnom Penh on 17 April 1975; the whole city evacuated within days; 'Democratic Kampuchea'; secretive leadership ('Angkar' — the Organisation); Pol Pot as Brother Number One; influences from Maoism and extreme nationalism." },
      { id: "year-zero", heading: "'Year Zero': a society torn apart", covers: "Aim of a pure agrarian communist society; money, markets, schools, religion and private property abolished; families separated; forced labour on collective farms; 'Old/Base people' vs 'New people'; targeting of the educated, ethnic minorities (Vietnamese, Cham) and suspected enemies." },
      { id: "genocide-and-fall", heading: "Genocide and the fall of the regime", covers: "Around 1.5–2 million people (about a quarter of the population) died from execution, starvation, overwork and disease (1975–79); S-21 (Tuol Sleng) prison and the 'killing fields' such as Choeung Ek; border attacks on Vietnam; Vietnamese invasion and fall of Phnom Penh (7 Jan 1979); Khmer Rouge survive in the jungle; Pol Pot dies in 1998." },
      { id: "justice-and-memory", heading: "Justice and memory", covers: "The UN-backed Extraordinary Chambers in the Courts of Cambodia (ECCC): Duch convicted (2010), Nuon Chea and Khieu Samphan convicted of genocide (2018); memorials and survivors' testimony; why remembering matters; comparing how Pol Pot rose (war, weak government, outside support) with Hitler and Mao." },
    ],
  },
  {
    id: "why-dictatorships",
    title: "Why Do Dictatorships Rise?",
    strand: "Dictatorships",
    icon: "🧭",
    curriculum: "Term 2 enquiry synthesis — the impact of crises, weak government and charismatic leadership on causation",
    sections: [
      { id: "democracy-vs-dictatorship", heading: "Democracy vs dictatorship: key ideas", covers: "Definitions: democracy, dictatorship, authoritarian, totalitarian, autocracy, ideology (communism, fascism/Nazism), one-party state, cult of personality, propaganda, censorship; spotting the features of each." },
      { id: "crisis", heading: "Crisis: war, defeat and economic collapse", covers: "How crises create desperation and demand for strong leadership: Germany (defeat, Versailles, hyperinflation, Depression), China (foreign invasion, civil war, inflation), Cambodia (US bombing, civil war, refugees)." },
      { id: "weak-government", heading: "Weak government", covers: "Weak governments that could not solve problems or keep order: Weimar coalitions and Article 48, the Qing collapse and the corrupt GMD, the Lon Nol regime; elites who thought they could control extremists." },
      { id: "charismatic-leadership", heading: "Leadership and individuals", covers: "Hitler's speaking and propaganda, Mao's peasant strategy and the Long March legend, Pol Pot's secretive organisation (a contrast — power without public charisma); the 'great man' view vs circumstances (structure vs individual)." },
      { id: "keeping-control", heading: "How dictators kept control", covers: "Comparing terror (Gestapo/SS, Red Guards and campaigns, Angkar's purges), propaganda and the cult of personality, controlling education and young people, removing rivals and opposition, ideology; similarities and differences across the three regimes." },
      { id: "judging-causes", heading: "Making a judgement about causes", covers: "Answering 'Crisis was the main reason dictators came to power. How far do you agree?': selecting evidence from all three case studies, linking factors (crisis → weak government → opening for a leader), counter-arguments, a substantiated conclusion." },
    ],
  },

  // ---------------------------- DEMOCRACY & RIGHTS ---------------------------
  {
    id: "french-revolution",
    title: "The French Revolution",
    strand: "Democracy & Rights",
    icon: "🇫🇷",
    curriculum: "Term 3 enquiry — How and why has democracy developed? Case study: the French Revolution",
    sections: [
      { id: "ancien-regime", heading: "France under the Ancien Régime", covers: "Absolute monarchy and Divine Right; Louis XVI and Marie Antoinette; the Three Estates (clergy, nobility, everyone else ~97%); who paid taxes (taille, tithe, salt tax) and who had privileges; Versailles." },
      { id: "causes-of-the-revolution", heading: "Causes of the Revolution", covers: "Long-term: unfair estates system, Enlightenment ideas (Rousseau, Voltaire, Montesquieu), the American example; short-term: royal debt (helping the American Revolution), failed reforms, bad harvest of 1788 and bread prices; trigger: calling the Estates-General." },
      { id: "revolution-of-1789", heading: "1789: the year everything changed", covers: "Estates-General (May 1789); Third Estate becomes the National Assembly; Tennis Court Oath (20 June); Storming of the Bastille (14 July); the Great Fear; abolition of feudal privileges (4 Aug); Declaration of the Rights of Man and of the Citizen (26 Aug); Women's March on Versailles (Oct)." },
      { id: "radical-revolution", heading: "From monarchy to Republic and Terror", covers: "Flight to Varennes (June 1791); war with Austria and Prussia (1792); monarchy abolished, Republic declared (Sept 1792); Louis XVI executed (21 Jan 1793); Robespierre, the Committee of Public Safety and the Reign of Terror (1793–94; ~17,000 official executions); Robespierre executed (July 1794)." },
      { id: "napoleon", heading: "Napoleon and the end of the Revolution", covers: "The Directory; Napoleon's coup (Nov 1799) and rule as First Consul then Emperor (1804); the Napoleonic Code (equality before the law but limits on women's rights); did Napoleon end or spread the Revolution?" },
      { id: "revolution-change-and-continuity", heading: "How much did the Revolution change?", covers: "Change & continuity in equality, representation and rights: 'Liberty, Equality, Fraternity'; who gained rights (men, Protestants, Jews) and who did not (women — Olympe de Gouges's Declaration of the Rights of Woman 1791; slavery abolished 1794 but restored 1802; Haitian Revolution); legacy for democracy." },
    ],
  },
  {
    id: "womens-suffrage",
    title: "Votes for Women",
    strand: "Democracy & Rights",
    icon: "🗳️",
    curriculum: "Term 3 enquiry — How and why has democracy developed? Case study: Women's Suffrage (UK)",
    sections: [
      { id: "women-in-victorian-britain", heading: "Women's lives and rights in Victorian Britain", covers: "'Separate spheres'; limited legal rights (property before the Married Women's Property Acts 1870/1882, divorce, education, jobs); who could vote after the 1832/1867/1884 Reform Acts (men only, with property); arguments used against women voting; small gains (local elections, education)." },
      { id: "suffragists", heading: "The suffragists", covers: "NUWSS founded 1897 under Millicent Fawcett; peaceful, law-abiding methods (petitions, meetings, lobbying MPs, marches like the 1907 'Mud March' and the 1913 Pilgrimage); large membership (~50,000 by 1914); support from some Labour and Liberal MPs." },
      { id: "suffragettes", heading: "The suffragettes", covers: "WSPU founded 1903 by Emmeline Pankhurst (with Christabel and Sylvia); 'Deeds not words'; escalating militancy (heckling, window smashing, arson, attacking post boxes); imprisonment, hunger strikes, force-feeding; the 'Cat and Mouse Act' 1913; Emily Wilding Davison at the Derby (June 1913)." },
      { id: "the-opposition", heading: "Opposition to votes for women", covers: "Anti-suffrage arguments; the Women's National Anti-Suffrage League (1908, including women such as Mary Humphry Ward); Prime Minister Asquith; Parliament's 'Conciliation Bills' (1910–12) that failed; did militancy harden opposition?" },
      { id: "the-vote-is-won", heading: "War work and the vote, 1914–1928", covers: "WW1 (1914): WSPU suspends militancy, NUWSS supports war work; women in munitions, transport, nursing; Representation of the People Act 1918 (women over 30 meeting a property qualification — about 8.4 million; all men over 21); Parliament (Qualification of Women) Act 1918; Constance Markievicz elected 1918, Nancy Astor first to take her seat 1919; Equal Franchise Act 1928 (women over 21)." },
      { id: "why-women-won-the-vote", heading: "Why did women win the vote?", covers: "Weighing the factors: suffragists' long campaign, suffragettes (help or hindrance?), the impact of the war, changing attitudes and the need to reform voting for soldiers anyway; interpretations; global comparison — New Zealand 1893, Singapore women voted from the first elections in 1948 and the Women's Charter (1961)." },
    ],
  },
  {
    id: "democracy-rights",
    title: "The Road to Democracy and Human Rights",
    strand: "Democracy & Rights",
    icon: "⚖️",
    curriculum: "Term 3 enquiry synthesis — How and why has democracy developed? Change and continuity in equality, representation and human rights",
    sections: [
      { id: "early-democracy", heading: "Early ideas: Athens to the first Parliaments", covers: "Athenian direct democracy (5th century BC; citizens were adult free men only); the Roman Republic; Magna Carta 1215; Simon de Montfort's Parliament (1265) and the Model Parliament (1295); limits — who was represented?" },
      { id: "parliament-vs-crown", heading: "Parliament vs the Crown", covers: "The English Civil War (1642–51); execution of Charles I (1649); the Glorious Revolution (1688) and Bill of Rights (1689) creating a constitutional monarchy; Divine Right rejected." },
      { id: "age-of-revolutions", heading: "The age of revolutions and natural rights", covers: "John Locke and natural rights (life, liberty, property); US Declaration of Independence (1776) and Constitution/Bill of Rights; French Declaration of the Rights of Man (1789); the contradiction of slavery; abolition (British slave trade 1807, slavery 1833)." },
      { id: "widening-the-vote", heading: "Widening the vote in Britain", covers: "Great Reform Act 1832; the Chartists' six points (1838); Reform Acts 1867 and 1884; secret ballot (1872); 1918 and 1928 Acts; voting age lowered to 18 (1969); measuring change: % of adults who could vote over time." },
      { id: "human-rights-after-1945", heading: "Human rights after 1945", covers: "Lessons of the Second World War and the Holocaust; the United Nations (1945); the Universal Declaration of Human Rights (10 Dec 1948, Eleanor Roosevelt); examples of rights (articles on equality, freedom from torture, fair trial, voting); civil rights movements (e.g. US 1950s–60s, apartheid's end in South Africa 1994)." },
      { id: "democracy-in-singapore", heading: "Democracy in Singapore", covers: "Colonial Legislative Council elections (1948); the Rendel Constitution and 1955 election; full internal self-government (1959); merger with Malaysia (1963) and independence (9 Aug 1965); parliamentary democracy today — compulsory voting, voting age 21, elected President, GRCs and NCMPs; change and continuity in representation (neutral, factual)." },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
