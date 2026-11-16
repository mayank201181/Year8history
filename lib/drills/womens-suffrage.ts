// Skill drills for "Votes for Women: Suffrage in Britain".
// Bank-based: every fact below is taken from (and consistent with)
// lib/topics/womens-suffrage/guide.ts.
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

function text(accept: string[], display?: string): AnswerSpec {
  return display ? { type: "text", accept, display } : { type: "text", accept };
}

// ---------------------------------------------------------------------------
// Date-recall banks
// ---------------------------------------------------------------------------

interface DateFact {
  year: number;
  tier: Tier;
  /** Full question. */
  q: string;
  /** One-sentence description of what happened (no year in it). */
  desc: string;
  /** Short noun phrase for the "date check" template. */
  name: string;
  sol: string;
  trap?: [number, string];
}

function dateItem(rng: Rng, bank: readonly DateFact[], tier: Tier, hint: string): DrillItem {
  const f = rng.pick(pool(bank, tier));
  const t = rng.int(0, 2);
  const prompt =
    t === 0 ? f.q : t === 1 ? `${f.desc} In which year did this happen?` : `Date check — **${f.name}**. In which year?`;
  const traps: Trap[] = f.trap ? [{ spec: { type: "number", value: f.trap[0] }, feedback: f.trap[1] }] : [];
  return { prompt, answer: { type: "number", value: f.year }, solution: [f.sol], hint, traps };
}

const REFORM_DATES: DateFact[] = [
  {
    year: 1819, tier: 1,
    q: "In which year did the Peterloo Massacre take place in Manchester?",
    desc: "Cavalry charged a peaceful crowd of about 60,000 reformers at St Peter's Field, Manchester, killing around 15–18 people.",
    name: "the Peterloo Massacre",
    sol: "Peterloo happened on 16 August 1819. Its name mocked the victory at Waterloo four years earlier.",
    trap: [1815, "1815 is the Battle of Waterloo — Peterloo was named after it, four years later."],
  },
  {
    year: 1832, tier: 1,
    q: "In which year was the Great Reform Act passed?",
    desc: "Parliament took MPs away from rotten boroughs such as Old Sarum, gave seats to industrial towns and let middle-class men with £10 property vote.",
    name: "the Great Reform Act",
    sol: "The Great Reform Act was passed in 1832 after riots and a political crisis — yet only about 1 in 5 men could then vote.",
    trap: [1867, "1867 is the Second Reform Act. The Great (first) Reform Act came 35 years earlier."],
  },
  {
    year: 1867, tier: 1,
    q: "In which year was the Second Reform Act passed?",
    desc: "Male householders in towns gained the vote, so about 1 in 3 men could vote.",
    name: "the Second Reform Act",
    sol: "The Second Reform Act (1867) gave the vote to male householders in towns. In the same year MPs rejected John Stuart Mill's amendment to include women.",
    trap: [1884, "1884 is the Third Reform Act, which reached the countryside. The Second came in 1867."],
  },
  {
    year: 1872, tier: 1,
    q: "In which year did the Secret Ballot Act end open voting?",
    desc: "Voting became private for the first time, cutting bribery and intimidation by landlords and employers.",
    name: "the Secret Ballot Act",
    sol: "The Secret Ballot Act of 1872 ended open voting — one of the Chartists' six points became law.",
  },
  {
    year: 1884, tier: 1,
    q: "In which year was the Third Reform Act passed?",
    desc: "Male householders in the countryside gained the vote, so about 6 in 10 men could vote — and still no women.",
    name: "the Third Reform Act",
    sol: "The Third Reform Act (1884) extended the householder vote to the countryside: about 60% of men, but zero women, could vote.",
    trap: [1867, "1867 is the Second Reform Act (towns). The Third, for the countryside, came in 1884."],
  },
  {
    year: 1918, tier: 1,
    q: "In which year did the Representation of the People Act give some women the vote?",
    desc: "All men over 21 and women over 30 who met a property qualification gained the vote — about 8.4 million women.",
    name: "the Representation of the People Act (women over 30)",
    sol: "The Representation of the People Act was passed in February 1918, near the end of the First World War.",
    trap: [1928, "1928 is when women won the vote on equal terms at 21. Women over 30 first voted under the 1918 Act."],
  },
  {
    year: 1928, tier: 1,
    q: "In which year did the Equal Franchise Act give women the vote on the same terms as men?",
    desc: "Women gained the vote at 21, on exactly the same terms as men.",
    name: "the Equal Franchise Act",
    sol: "The Equal Franchise Act of 1928 lowered women's voting age from 30 to 21, equal with men.",
    trap: [1918, "1918 gave the vote only to women over 30 with a property qualification. Equal terms came ten years later."],
  },
  {
    year: 1838, tier: 2,
    q: "In which year did the Chartists draw up the People's Charter?",
    desc: "Working men drew up a charter of six points, including votes for all men over 21 and a secret ballot.",
    name: "the People's Charter",
    sol: "The People's Charter was drawn up in 1838. Parliament rejected the Chartists' giant petitions of 1839, 1842 and 1848.",
  },
  {
    year: 1918, tier: 2,
    q: "In which year did the Parliament (Qualification of Women) Act let women stand as MPs?",
    desc: "A new law let women stand for election as MPs from the age of 21.",
    name: "the Parliament (Qualification of Women) Act",
    sol: "The Parliament (Qualification of Women) Act was passed in November 1918 — so a 21-year-old woman could be an MP but not vote.",
    trap: [1919, "1919 is when Nancy Astor took her seat. The law letting women stand was passed in 1918."],
  },
  {
    year: 1969, tier: 2,
    q: "In which year was the UK voting age lowered from 21 to 18?",
    desc: "The UK voting age was lowered from 21 to 18.",
    name: "votes at 18 in the UK",
    sol: "The voting age was lowered to 18 in 1969 — a reminder that the question 'who counts?' kept changing after 1928.",
  },
  {
    year: 1867, tier: 3,
    q: "In which year did MPs vote down John Stuart Mill's amendment to give some women the vote, by 196 votes to 73?",
    desc: "John Stuart Mill proposed changing the word 'man' to 'person' in the Reform Bill, and MPs voted it down by 196 to 73.",
    name: "Mill's 'person' amendment",
    sol: "Mill's amendment was defeated in 1867, during the debates on the Second Reform Act.",
    trap: [1866, "1866 is when Mill presented the women's petition. His amendment to the Reform Bill came the next year."],
  },
  {
    year: 1848, tier: 3,
    q: "In which year did Parliament reject the last great Chartist petition?",
    desc: "Parliament rejected the third and last great Chartist petition, and the movement began to fade.",
    name: "the last great Chartist petition",
    sol: "The Chartists' petitions were rejected in 1839, 1842 and finally 1848 — yet five of their six points later became law.",
  },
  {
    year: 1839, tier: 3,
    q: "In which year did Parliament reject the first Chartist petition?",
    desc: "Parliament rejected the Chartists' first giant petition for the six points of the People's Charter.",
    name: "the first Chartist petition",
    sol: "The first Chartist petition was rejected in 1839, a year after the Charter was drawn up; later petitions failed in 1842 and 1848.",
    trap: [1838, "1838 is when the Charter was drawn up. The first petition was rejected the next year."],
  },
  {
    year: 1950, tier: 3,
    q: "In which year did the UK abolish extra votes for university graduates and business owners?",
    desc: "Extra votes for university graduates and business owners were abolished — one person, one vote.",
    name: "one person, one vote in the UK",
    sol: "Plural voting ended in 1950, so even after 1928 full equality of votes took another 22 years.",
  },
  {
    year: 1869, tier: 3,
    q: "In which year could single women ratepayers first vote in town council elections?",
    desc: "Single women who paid local rates gained the vote in town council elections.",
    name: "local votes for single women ratepayers",
    sol: "From 1869 single women ratepayers could vote in town council elections — local politics was a foot in the door.",
  },
  {
    year: 1866, tier: 3,
    q: "In which year did John Stuart Mill present a petition of about 1,500 women to Parliament?",
    desc: "John Stuart Mill presented a petition signed by about 1,500 women asking for the vote.",
    name: "Mill's women's suffrage petition",
    sol: "Mill presented the petition in 1866 — the start of the organised campaign, 52 years before any women won the vote.",
    trap: [1867, "1867 is Mill's amendment to the Reform Bill. The petition came the year before."],
  },
];

const WORLD_DATES: DateFact[] = [
  {
    year: 1789, tier: 1,
    q: "In which year did revolutionary France issue the Declaration of the Rights of Man and of the Citizen?",
    desc: "France's revolutionaries declared that 'men are born and remain free and equal in rights'.",
    name: "the Declaration of the Rights of Man",
    sol: "The Declaration of the Rights of Man came in 1789, at the start of the French Revolution — but its rights were not applied to women.",
  },
  {
    year: 1893, tier: 1,
    q: "In which year did New Zealand give women the vote in national elections?",
    desc: "New Zealand became the first self-governing country where women could vote in national elections.",
    name: "votes for women in New Zealand",
    sol: "New Zealand led the way in 1893 — 25 years before Britain gave the vote to women over 30.",
  },
  {
    year: 1902, tier: 1,
    q: "In which year did women in Australia win the vote in national elections?",
    desc: "Women in Australia won the vote in national elections — though most Aboriginal people were excluded.",
    name: "votes for women in Australia",
    sol: "Australia gave women the national vote in 1902, but most Aboriginal people were shut out — 'votes for women' did not mean all women.",
  },
  {
    year: 1920, tier: 1,
    q: "In which year did women across the USA win the right to vote in national elections?",
    desc: "Women across the USA won the right to vote — though many Black women were blocked from voting until the 1960s.",
    name: "votes for women in the USA",
    sol: "American women won the vote in 1920, two years after women over 30 in Britain.",
  },
  {
    year: 1928, tier: 1,
    q: "In which year did British women finally win the vote on equal terms with men?",
    desc: "British women won the vote at 21, on the same terms as men.",
    name: "equal votes for British women",
    sol: "The Equal Franchise Act of 1928 gave British women the vote at 21, ten years after some women first voted.",
    trap: [1918, "1918 gave the vote only to some women over 30. Equal terms came in 1928."],
  },
  {
    year: 1948, tier: 1,
    q: "In which year did the United Nations adopt the Universal Declaration of Human Rights?",
    desc: "The United Nations adopted a declaration whose Article 21 calls for universal and equal suffrage by secret vote.",
    name: "the Universal Declaration of Human Rights",
    sol: "The Universal Declaration of Human Rights was adopted in 1948 — voting became a human right, not a privilege of property.",
  },
  {
    year: 1969, tier: 1,
    q: "In which year was the UK voting age lowered to 18?",
    desc: "The UK voting age was lowered from 21 to 18.",
    name: "votes at 18 in the UK",
    sol: "The UK lowered the voting age to 18 in 1969 — democracy kept widening after 1928.",
  },
  {
    year: 1906, tier: 2,
    q: "In which year did Finland give women the vote?",
    desc: "Finland gave women the vote — the first country in Europe to do so.",
    name: "votes for women in Finland",
    sol: "Finland gave women the vote in 1906; suffragists used examples like this to show it was normal, not dangerous.",
  },
  {
    year: 1913, tier: 2,
    q: "In which year did Norway give women the vote in national elections?",
    desc: "Norway gave women the vote in national elections, the year before the First World War began.",
    name: "votes for women in Norway",
    sol: "Norway gave women the national vote in 1913 — five years before Britain gave it to women over 30.",
  },
  {
    year: 1791, tier: 2,
    q: "In which year did Olympe de Gouges write the Declaration of the Rights of Woman and of the Female Citizen?",
    desc: "Olympe de Gouges answered France's Declaration of the Rights of Man with a Declaration of the Rights of Woman.",
    name: "Olympe de Gouges' Declaration of the Rights of Woman",
    sol: "De Gouges wrote her Declaration in 1791, two years after the Rights of Man; she was executed during the Terror in 1793.",
    trap: [1789, "1789 is the Declaration of the Rights of Man. De Gouges replied to it two years later."],
  },
  {
    year: 1945, tier: 2,
    q: "In which year did women in France first vote?",
    desc: "Women in France voted for the first time — over 150 years after the Declaration of the Rights of Man.",
    name: "French women's first vote",
    sol: "French women first voted in 1945, seventeen years after British women won equal votes.",
  },
  {
    year: 1948, tier: 2,
    q: "In which year did Singapore hold its first election, to the Legislative Council?",
    desc: "Singapore held its first election, to the Legislative Council, with women and men voting on the same terms (only British subjects could register).",
    name: "Singapore's first election",
    sol: "Singapore's first election was in 1948; only about 23,000 people registered, as only British subjects could vote.",
  },
  {
    year: 1959, tier: 2,
    q: "In which year did Singapore gain self-government, with voting made compulsory?",
    desc: "Singapore gained self-government, and voting became compulsory.",
    name: "Singapore's self-government",
    sol: "Singapore gained self-government in 1959, and voting became compulsory — representation widened fast.",
  },
  {
    year: 1950, tier: 2,
    q: "In which year did the UK abolish extra votes for university graduates and business owners?",
    desc: "The UK abolished extra votes for graduates and business owners — one person, one vote.",
    name: "one person, one vote in the UK",
    sol: "Plural voting ended in 1950; until then some people still had two votes.",
  },
  {
    year: 1970, tier: 3,
    q: "In which year did Britain pass its Equal Pay Act?",
    desc: "Britain passed a law requiring women and men to be paid equally for the same work.",
    name: "Britain's Equal Pay Act",
    sol: "The Equal Pay Act came in 1970 — formal equality in voting did not bring equality at work.",
  },
  {
    year: 1793, tier: 3,
    q: "In which year was Olympe de Gouges executed during the Terror?",
    desc: "Olympe de Gouges, author of the Declaration of the Rights of Woman, was executed during the Terror.",
    name: "the execution of Olympe de Gouges",
    sol: "De Gouges was executed in 1793 — the same year revolutionary France banned women's political clubs.",
    trap: [1791, "1791 is when she wrote her Declaration. She was executed two years later."],
  },
];

// ---------------------------------------------------------------------------
// Term / person recall banks
// ---------------------------------------------------------------------------

interface TermFact {
  tier: Tier;
  desc: string;
  accept: string[];
  display?: string;
  sol: string;
  trap?: [string[], string];
}

function termItem(rng: Rng, bank: readonly TermFact[], tier: Tier, templates: ((d: string) => string)[], hint: string): DrillItem {
  const f = rng.pick(pool(bank, tier));
  const tpl = rng.pick(templates);
  const traps: Trap[] = f.trap ? [{ spec: { type: "text", accept: f.trap[0] }, feedback: f.trap[1] }] : [];
  return { prompt: tpl(f.desc), answer: text(f.accept, f.display), solution: [f.sol], hint, traps };
}

const VICTORIAN_TERMS: TermFact[] = [
  {
    tier: 1,
    desc: "The legal idea that a married woman's legal identity was absorbed into her husband's, so her property and earnings became his.",
    accept: ["coverture", "couverture", "doctrine of coverture"],
    display: "Coverture",
    sol: "Coverture meant a wife's property and earnings belonged to her husband until the Married Women's Property Acts of 1870 and 1882.",
  },
  {
    tier: 1,
    desc: "The Victorian ideal that men belonged in public life (work, business, politics) and women in the home.",
    accept: ["separate spheres", "separate sphere", "doctrine of separate spheres", "separate spheres ideology"],
    display: "Separate spheres",
    sol: "'Separate spheres' put men in the public sphere and women in the private sphere — an ideal held most strongly by the middle classes.",
  },
  {
    tier: 1,
    desc: "Under 'separate spheres', the sphere women were said to belong in — home, children and caring. (Two words.)",
    accept: ["private sphere", "private", "domestic sphere", "the home", "home"],
    display: "The private sphere",
    sol: "Women were assigned the private sphere of home and family; men the public sphere of work and politics.",
    trap: [["public sphere", "public"], "The public sphere (work, business, politics) was said to be men's."],
  },
  {
    tier: 1,
    desc: "Under 'separate spheres', the sphere men were said to belong in — work, business and politics. (Two words.)",
    accept: ["public sphere", "public", "public life"],
    display: "The public sphere",
    sol: "Men were assigned the public sphere; women, the private sphere of the home.",
    trap: [["private sphere", "private"], "The private sphere (home and family) was said to be women's."],
  },
  {
    tier: 1,
    desc: "Laws of 1870 and 1882 that let wives keep first their own earnings and then all their property.",
    accept: ["Married Women's Property Act", "Married Women's Property Acts", "Married Womens Property Act", "Married Womens Property Acts", "Married Women Property Act", "Women's Property Act", "Womens Property Act", "Property Act", "Property Acts"],
    display: "The Married Women's Property Acts",
    sol: "The Married Women's Property Acts (1870 and 1882) ended the worst of coverture and gave wives economic independence.",
  },
  {
    tier: 1,
    desc: "From 1870, women could vote for — and be elected to — these local bodies that ran the new elementary schools.",
    accept: ["school boards", "school board"],
    display: "School boards",
    sol: "Women could vote for and sit on school boards from 1870 — proof in practice that women could handle public decisions.",
  },
  {
    tier: 1,
    desc: "The largest employer of women in Victorian Britain — well over a million women and girls worked in it.",
    accept: ["domestic service", "domestic servants", "domestic servant", "servants", "servant", "service"],
    display: "Domestic service",
    sol: "Domestic service employed well over a million women — working-class women had always worked, whatever the separate-spheres ideal said.",
  },
  {
    tier: 2,
    desc: "Title of an 1854 poem by Coventry Patmore that became a nickname for the gentle, home-loving ideal Victorian wife.",
    accept: ["Angel in the House", "angel of the house"],
    display: "The 'Angel in the House'",
    sol: "Patmore's 'Angel in the House' (1854) summed up the separate-spheres ideal of the perfect wife.",
  },
  {
    tier: 2,
    desc: "Qualified in 1865 as Britain's first woman doctor, using a loophole that the authorities then closed.",
    accept: ["Elizabeth Garrett Anderson", "Garrett Anderson", "Elizabeth Garrett", "Elizabeth Anderson", "Anderson"],
    display: "Elizabeth Garrett Anderson",
    sol: "Elizabeth Garrett Anderson qualified in 1865; she later became England's first woman mayor (Aldeburgh, 1908).",
  },
  {
    tier: 2,
    desc: "The 1870 law that set up schools for all children, girls included.",
    accept: ["Education Act", "1870 Education Act", "Elementary Education Act", "Forster's Education Act", "Forster Education Act", "Forster Act"],
    display: "The (Elementary) Education Act 1870",
    sol: "The 1870 Education Act set up schools for all children — educated women undermined claims that they were unfit for public life.",
  },
  {
    tier: 2,
    desc: "Women's college at Cambridge, founded in 1869.",
    accept: ["Girton", "Girton College", "Girton College Cambridge"],
    display: "Girton College",
    sol: "Girton College opened in 1869 — though Cambridge did not award degrees to women until 1948.",
  },
  {
    tier: 2,
    desc: "Her nursing school opened in 1860, helping to make nursing a 'respectable' career for women.",
    accept: ["Florence Nightingale", "Nightingale"],
    display: "Florence Nightingale",
    sol: "Florence Nightingale's nursing school opened in 1860; nursing and teaching became growing careers for women.",
  },
  {
    tier: 2,
    desc: "The first British university to award degrees to women, from 1878.",
    accept: ["University of London", "London University", "London"],
    display: "The University of London",
    sol: "London awarded degrees to women from 1878; Oxford only from 1920 and Cambridge from 1948.",
  },
  {
    tier: 3,
    desc: "Writer who campaigned for married women's legal rights after a bitter separation in which her husband kept her from her own children.",
    accept: ["Caroline Norton", "Norton", "Mrs Norton"],
    display: "Caroline Norton",
    sol: "Caroline Norton's campaigns exposed how little legal protection married women had under coverture.",
  },
  {
    tier: 3,
    desc: "Name for people who paid local property taxes — from 1869, single women of this kind could vote in town council elections.",
    accept: ["ratepayers", "ratepayer", "women ratepayers"],
    display: "Ratepayers",
    sol: "Single women ratepayers could vote in town council elections from 1869 — paying taxes was a strong argument for a vote.",
  },
  {
    tier: 3,
    desc: "From 1894, women could sit on these two kinds of local council (name either).",
    accept: ["parish councils", "parish council", "district councils", "district council", "parish and district councils"],
    display: "Parish and district councils",
    sol: "From 1894 women could sit on parish and district councils, and from 1907 on county and borough councils.",
  },
];

const PEOPLE: TermFact[] = [
  {
    tier: 1,
    desc: "Led the NUWSS (the suffragists) and believed women would win the vote by proving they were responsible, law-abiding citizens.",
    accept: ["Millicent Fawcett", "Fawcett", "Millicent Garrett Fawcett", "Mrs Fawcett", "Garrett Fawcett", "Dame Millicent Fawcett", "Millicent"],
    display: "Millicent Garrett Fawcett",
    sol: "Millicent Garrett Fawcett was the NUWSS's leading figure and its president from 1907; it was formed in 1897.",
    trap: [["Emmeline Pankhurst", "Pankhurst", "Mrs Pankhurst"], "Emmeline Pankhurst led the militant WSPU. The peaceful NUWSS was led by Millicent Fawcett."],
  },
  {
    tier: 1,
    desc: "Founded the WSPU in Manchester in 1903 with her daughters, under the motto 'Deeds not words'. (Give her first name too — there were several Pankhursts.)",
    accept: ["Emmeline Pankhurst", "Emmeline", "Mrs Pankhurst", "Mrs Emmeline Pankhurst"],
    display: "Emmeline Pankhurst",
    sol: "Emmeline Pankhurst founded the WSPU in October 1903; her daughter Christabel became its chief strategist.",
    trap: [["Millicent Fawcett", "Fawcett"], "Millicent Fawcett led the peaceful NUWSS. The WSPU was founded by Emmeline Pankhurst."],
  },
  {
    tier: 1,
    desc: "Stepped onto the track in front of the King's horse at the Epsom Derby in June 1913 and died of her injuries four days later.",
    accept: ["Emily Wilding Davison", "Emily Davison", "Davison", "Emily Wilding Davidson", "Emily Davidson", "Davidson"],
    display: "Emily Wilding Davison",
    sol: "Emily Wilding Davison died after the 1913 Derby; historians still debate whether she meant to die.",
  },
  {
    tier: 1,
    desc: "MP and philosopher who presented a women's suffrage petition to Parliament in 1866.",
    accept: ["John Stuart Mill", "Mill", "J S Mill", "JS Mill", "John Mill"],
    display: "John Stuart Mill",
    sol: "John Stuart Mill presented the 1866 petition of about 1,500 women, and in 1867 proposed changing 'man' to 'person' in the Reform Bill.",
  },
  {
    tier: 1,
    desc: "Liberal Prime Minister from 1908 to 1916 who for years opposed votes for women.",
    accept: ["Asquith", "Herbert Asquith", "H H Asquith", "Herbert Henry Asquith"],
    display: "Herbert Asquith",
    sol: "Asquith's opposition was the biggest political barrier before 1914; he said in 1916–17 that women's war work had changed his mind.",
    trap: [["Lloyd George", "David Lloyd George"], "Lloyd George replaced Asquith in December 1916 and was more sympathetic. The long-time opponent was Asquith."],
  },
  {
    tier: 1,
    desc: "Became the first woman to take her seat as an MP, in 1919.",
    accept: ["Nancy Astor", "Astor", "Lady Astor", "Viscountess Astor"],
    display: "Nancy Astor",
    sol: "Nancy Astor took her seat in 1919. Markievicz had been elected first, in 1918, but refused to sit.",
    trap: [["Constance Markievicz", "Markievicz", "Countess Markievicz"], "Markievicz was the first woman elected (1918) but refused to take her seat. The first to sit was Nancy Astor."],
  },
  {
    tier: 1,
    desc: "In December 1918 became the first woman elected as an MP, for Sinn Féin in Dublin, but refused to take her seat at Westminster.",
    accept: ["Constance Markievicz", "Markievicz", "Countess Markievicz", "Markiewicz", "Constance Markiewicz", "Countess Markiewicz"],
    display: "Constance Markievicz",
    sol: "Constance Markievicz won a Dublin seat in 1918 but, like her party Sinn Féin, refused to sit at Westminster.",
    trap: [["Nancy Astor", "Astor"], "Nancy Astor was the first woman to take her seat (1919). The first woman elected was Markievicz."],
  },
  {
    tier: 1,
    desc: "Replaced Asquith as Prime Minister in December 1916 and was more sympathetic to votes for women.",
    accept: ["Lloyd George", "David Lloyd George", "Lloyd-George"],
    display: "David Lloyd George",
    sol: "Lloyd George became Prime Minister in December 1916 and backed the 1918 Representation of the People Act.",
    trap: [["Asquith", "Herbert Asquith"], "Asquith was the Prime Minister who was replaced — and he had opposed votes for women. His successor was Lloyd George."],
  },
  {
    tier: 2,
    desc: "Emmeline Pankhurst's daughter and the WSPU's chief strategist, arrested with Annie Kenney in 1905. (Give her first name and surname.)",
    accept: ["Christabel Pankhurst", "Christabel"],
    display: "Christabel Pankhurst",
    sol: "Christabel Pankhurst planned WSPU strategy; her 1905 arrest with Annie Kenney won national publicity.",
    trap: [["Emmeline Pankhurst", "Emmeline"], "Emmeline was the mother who founded the WSPU. Her daughter Christabel was its chief strategist."],
  },
  {
    tier: 2,
    desc: "A Pankhurst daughter who opposed the First World War and built a working women's movement in London's East End. (Give her first name and surname.)",
    accept: ["Sylvia Pankhurst", "Sylvia"],
    display: "Sylvia Pankhurst",
    sol: "Sylvia Pankhurst was expelled from the WSPU in 1914 and kept campaigning for working women while her mother and Christabel backed the war.",
    trap: [["Christabel Pankhurst", "Christabel"], "Christabel backed the war effort in 1914. The Pankhurst who opposed the war was Sylvia."],
  },
  {
    tier: 2,
    desc: "Oldham mill worker and suffragette, arrested with Christabel Pankhurst in 1905 after interrupting a Liberal meeting.",
    accept: ["Annie Kenney", "Kenney", "Annie Kenny", "Kenny"],
    display: "Annie Kenney",
    sol: "Annie Kenney's arrest in 1905 shows the WSPU was not only middle-class: many suffragettes were working-class women.",
  },
  {
    tier: 2,
    desc: "Daughter of the last Maharaja of the Sikh Empire and goddaughter of Queen Victoria, she marched on Black Friday and sold The Suffragette outside Hampton Court Palace.",
    accept: ["Sophia Duleep Singh", "Duleep Singh", "Sophia Dulip Singh", "Princess Sophia Duleep Singh", "Princess Sophia", "Sophia"],
    display: "Sophia Duleep Singh",
    sol: "Sophia Duleep Singh used her royal connections to draw attention to the suffragette cause.",
  },
  {
    tier: 2,
    desc: "Novelist who was a leader of the Women's National Anti-Suffrage League, founded in 1908.",
    accept: ["Mary Augusta Ward", "Mary Ward", "Mrs Humphry Ward", "Mrs Humphrey Ward", "Ward"],
    display: "Mary Augusta Ward",
    sol: "Mary Augusta Ward shows that many women opposed the vote, believing sincerely in separate spheres.",
  },
  {
    tier: 2,
    desc: "Led the women's suffrage society in Manchester in the early campaign, in the 1860s and 1870s.",
    accept: ["Lydia Becker", "Becker"],
    display: "Lydia Becker",
    sol: "Lydia Becker led the Manchester society — one of the local groups that later joined together as the NUWSS in 1897.",
  },
  {
    tier: 2,
    desc: "Radical speaker whom about 60,000 people gathered to hear at St Peter's Field, Manchester, in 1819.",
    accept: ["Henry Hunt", "Hunt", "Orator Hunt"],
    display: "Henry Hunt",
    sol: "The crowd came to hear Henry Hunt demand reform when cavalry charged — the Peterloo Massacre of 1819.",
  },
  {
    tier: 2,
    desc: "In 1909 became the first suffragette to go on hunger strike in prison.",
    accept: ["Marion Wallace Dunlop", "Wallace Dunlop", "Dunlop", "Marion Dunlop"],
    display: "Marion Wallace Dunlop",
    sol: "Marion Wallace Dunlop began the hunger strikes in 1909; the government answered with force-feeding.",
  },
  {
    tier: 3,
    desc: "In 1791 wrote the Declaration of the Rights of Woman and of the Female Citizen; she was executed during the Terror in 1793.",
    accept: ["Olympe de Gouges", "de Gouges", "Gouges", "Olympe"],
    display: "Olympe de Gouges",
    sol: "Olympe de Gouges demanded that the rights of 1789 apply to women — French women did not vote until 1945.",
  },
  {
    tier: 3,
    desc: "Historian who argues that suffragette militancy hardened opposition and that the NUWSS mattered more.",
    accept: ["Martin Pugh", "Pugh"],
    display: "Martin Pugh",
    sol: "Martin Pugh stresses the suffragists and long-term change; June Purvis stresses the WSPU's impact.",
    trap: [["June Purvis", "Purvis"], "June Purvis argues the opposite — that the WSPU put votes for women at the centre of politics."],
  },
  {
    tier: 3,
    desc: "Historian who argues that the WSPU put votes for women at the centre of national politics.",
    accept: ["June Purvis", "Purvis"],
    display: "June Purvis",
    sol: "June Purvis stresses the suffragettes' impact; Martin Pugh argues militancy hardened opposition.",
    trap: [["Martin Pugh", "Pugh"], "Martin Pugh argues the opposite — that militancy hardened opposition."],
  },
  {
    tier: 3,
    desc: "Millicent Fawcett's sister, who qualified as Britain's first woman doctor and became England's first woman mayor (Aldeburgh, 1908).",
    accept: ["Elizabeth Garrett Anderson", "Garrett Anderson", "Elizabeth Garrett", "Elizabeth Anderson", "Anderson"],
    display: "Elizabeth Garrett Anderson",
    sol: "Elizabeth Garrett Anderson's career was living proof against the claim that women were unfit for public life.",
  },
];

const CAMPAIGN_TERMS: TermFact[] = [
  {
    tier: 1,
    desc: "The three-word motto of the WSPU.",
    accept: ["Deeds not words", "Deeds, not words"],
    display: "'Deeds not words'",
    sol: "'Deeds not words' summed up the WSPU's belief that 40 years of polite requests had failed.",
  },
  {
    tier: 1,
    desc: "Nickname of the 1913 law that let hunger strikers be released when weak and re-arrested once they recovered.",
    accept: ["Cat and Mouse Act", "Cat and Mouse", "Cat & Mouse Act", "Cat & Mouse", "Cat and Mouse Bill"],
    display: "The 'Cat and Mouse Act'",
    sol: "The 1913 Prisoners (Temporary Discharge for Ill-Health) Act was nicknamed the 'Cat and Mouse Act' — like a cat toying with a mouse.",
  },
  {
    tier: 1,
    desc: "Name given to 18 November 1910, when about 300 women marching on Parliament were violently treated by police and bystanders for hours.",
    accept: ["Black Friday"],
    display: "Black Friday",
    sol: "Black Friday (1910) convinced many suffragettes that only greater pressure would work.",
  },
  {
    tier: 1,
    desc: "What prison authorities did to hunger strikers from 1909 — holding them down and feeding them through tubes.",
    accept: ["force-feeding", "force feeding", "forcible feeding", "force fed", "forced feeding"],
    display: "Force-feeding",
    sol: "Force-feeding was painful and dangerous, and generated public sympathy for the suffragettes.",
  },
  {
    tier: 1,
    desc: "The prison protest — refusing all food — that suffragettes began in 1909.",
    accept: ["hunger strike", "hunger strikes", "hunger striking", "hunger-strike"],
    display: "Hunger strike",
    sol: "Hunger strikes began in 1909 with Marion Wallace Dunlop; the government replied with force-feeding.",
  },
  {
    tier: 1,
    desc: "The initials of the union of local suffrage societies formed in 1897 and led by Millicent Fawcett.",
    accept: ["NUWSS", "National Union of Women's Suffrage Societies", "National Union of Womens Suffrage Societies"],
    display: "NUWSS",
    sol: "The NUWSS (National Union of Women's Suffrage Societies) was the peaceful suffragist organisation, formed in 1897.",
    trap: [["WSPU"], "The WSPU was Emmeline Pankhurst's militant group (1903). Fawcett's was the NUWSS."],
  },
  {
    tier: 1,
    desc: "The initials of the organisation Emmeline Pankhurst founded in 1903.",
    accept: ["WSPU", "Women's Social and Political Union", "Womens Social and Political Union"],
    display: "WSPU",
    sol: "The WSPU (Women's Social and Political Union) was the militant suffragette organisation, founded in Manchester in 1903.",
    trap: [["NUWSS"], "The NUWSS was Millicent Fawcett's peaceful union (1897). Pankhurst's was the WSPU."],
  },
  {
    tier: 1,
    desc: "Nickname, ending in '-ettes', for the women who made shells and weapons in the First World War — about 900,000 by 1918.",
    accept: ["munitionettes", "munitionette"],
    display: "Munitionettes",
    sol: "About 900,000 'munitionettes' did dangerous war work — evidence that undermined claims women were unfit for public life.",
  },
  {
    tier: 2,
    desc: "The 1913 NUWSS march in which women walked from all over Britain to a rally of about 50,000 people in Hyde Park.",
    accept: ["Great Pilgrimage", "the Pilgrimage", "Pilgrimage", "Suffrage Pilgrimage", "Women's Pilgrimage"],
    display: "The Great Pilgrimage",
    sol: "The Great Pilgrimage of 1913 showed huge, peaceful support — but got far less press attention than militancy.",
  },
  {
    tier: 2,
    desc: "Nickname for the NUWSS procession through rain-soaked London in 1907.",
    accept: ["Mud March", "the Mud March"],
    display: "The 'Mud March'",
    sol: "The 1907 'Mud March' was one of the first big suffragist processions.",
  },
  {
    tier: 2,
    desc: "Bills of 1910–12 that would have given the vote to a limited number of propertied women — all of them collapsed.",
    accept: ["Conciliation Bills", "Conciliation Bill"],
    display: "The Conciliation Bills",
    sol: "The Conciliation Bills failed because of party calculations and Asquith's opposition — fuelling suffragette anger.",
  },
  {
    tier: 2,
    desc: "Group formed in 1907 by members who left the WSPU over the Pankhursts' tight control; it broke laws without violence, e.g. boycotting the 1911 census.",
    accept: ["Women's Freedom League", "Womens Freedom League", "Freedom League", "WFL"],
    display: "The Women's Freedom League",
    sol: "The Women's Freedom League (1907) used non-violent law-breaking such as refusing to pay taxes.",
  },
  {
    tier: 2,
    desc: "Organisation founded in 1908, with Mary Augusta Ward as a leader, to oppose votes for women.",
    accept: ["Women's National Anti-Suffrage League", "Womens National Anti-Suffrage League", "Anti-Suffrage League", "Anti Suffrage League", "National Anti-Suffrage League"],
    display: "The Women's National Anti-Suffrage League",
    sol: "The Women's National Anti-Suffrage League (1908) shows many women opposed the vote; it merged with the men's league in 1910.",
  },
  {
    tier: 2,
    desc: "Nickname for munitions workers whose skin was turned yellow by the explosive TNT.",
    accept: ["canaries", "canary", "canary girls"],
    display: "'Canaries'",
    sol: "TNT turned some munitions workers' skin yellow, so they were nicknamed 'canaries' — a sign of how dangerous war work was.",
  },
  {
    tier: 2,
    desc: "Meeting of MPs from all parties in 1916–17 that recommended votes for all men and for some women.",
    accept: ["Speaker's Conference", "Speakers Conference"],
    display: "The Speaker's Conference",
    sol: "The Speaker's Conference (1916–17) produced the compromise that became the 1918 Representation of the People Act.",
  },
  {
    tier: 2,
    desc: "Organisation formed in 1917 to keep Britain's farms running with women workers.",
    accept: ["Women's Land Army", "Womens Land Army", "Land Army"],
    display: "The Women's Land Army",
    sol: "The Women's Land Army (1917) was one of many ways women's war work changed attitudes.",
  },
  {
    tier: 2,
    desc: "The newspaper that, in 1906, mocked WSPU members by calling them 'suffragettes'.",
    accept: ["Daily Mail", "The Daily Mail", "Mail"],
    display: "The Daily Mail",
    sol: "The Daily Mail coined 'suffragettes' in 1906 as an insult — and the WSPU proudly adopted it.",
  },
  {
    tier: 3,
    desc: "NUWSS fund, set up in 1912, that backed Labour candidates in elections.",
    accept: ["Election Fighting Fund", "EFF"],
    display: "The Election Fighting Fund",
    sol: "From 1912 the Election Fighting Fund backed Labour, the only party officially in favour of votes for women.",
  },
  {
    tier: 3,
    desc: "The NUWSS newspaper, launched in 1909.",
    accept: ["The Common Cause", "Common Cause"],
    display: "The Common Cause",
    sol: "The Common Cause (1909) was the suffragists' newspaper; the WSPU's was The Suffragette.",
    trap: [["The Suffragette", "Suffragette"], "The Suffragette was the WSPU's paper. The NUWSS paper was The Common Cause."],
  },
  {
    tier: 3,
    desc: "The November 1918 law that let women stand as MPs from the age of 21.",
    accept: ["Parliament (Qualification of Women) Act", "Parliament Qualification of Women Act", "Qualification of Women Act"],
    display: "The Parliament (Qualification of Women) Act",
    sol: "The Parliament (Qualification of Women) Act 1918 meant a 21-year-old woman could be an MP but not yet vote.",
  },
  {
    tier: 3,
    desc: "The February 1918 law that gave the vote to all men over 21 and to women over 30 who met a property qualification.",
    accept: ["Representation of the People Act", "Representation of the People Act 1918", "RPA"],
    display: "The Representation of the People Act",
    sol: "The 1918 Representation of the People Act enfranchised about 8.4 million women — roughly 40% of the electorate.",
    trap: [["Equal Franchise Act"], "The Equal Franchise Act was 1928 (women at 21). The 1918 law was the Representation of the People Act."],
  },
  {
    tier: 3,
    desc: "The 1928 law that gave women the vote at 21, on the same terms as men.",
    accept: ["Equal Franchise Act", "Equal Franchise Act 1928", "Representation of the People (Equal Franchise) Act"],
    display: "The Equal Franchise Act",
    sol: "The Equal Franchise Act of 1928 finally gave women the vote on equal terms with men.",
    trap: [["Representation of the People Act", "RPA"], "The Representation of the People Act was 1918 (women over 30). The 1928 law was the Equal Franchise Act."],
  },
  {
    tier: 3,
    desc: "The voting rule — a man must have lived at the same address for 12 months — that would have cut millions of soldiers off the register.",
    accept: ["residence qualification", "residency qualification", "residence rule", "residency rule", "residence requirement", "residency requirement", "residence rules", "residency rules"],
    display: "The residence qualification",
    sol: "Soldiers abroad failed the 12-month residence rule, so Parliament had to rewrite the voting rules anyway — the opening for women's suffrage.",
  },
];

// ---------------------------------------------------------------------------
// Classify banks
// ---------------------------------------------------------------------------

interface ClassFact<L extends string> {
  tier: Tier;
  desc: string;
  label: L;
  sol: string;
}

const SUFFRAGIST = ["suffragist", "suffragists", "a suffragist", "NUWSS"];
const SUFFRAGETTE = ["suffragette", "suffragettes", "a suffragette", "WSPU"];

const SS_BANK: ClassFact<"suffragist" | "suffragette">[] = [
  { tier: 1, label: "suffragist", desc: "A member of the organisation led by Millicent Fawcett.", sol: "Fawcett led the NUWSS — the suffragists." },
  { tier: 1, label: "suffragette", desc: "A member of the organisation founded by Emmeline Pankhurst in 1903.", sol: "Emmeline Pankhurst founded the WSPU — the suffragettes." },
  { tier: 1, label: "suffragette", desc: "A campaigner whose motto was 'Deeds not words'.", sol: "'Deeds not words' was the WSPU's motto — the suffragettes." },
  { tier: 1, label: "suffragist", desc: "A campaigner who believed in peaceful, legal methods such as petitions and public meetings.", sol: "Peaceful, law-abiding persuasion was the suffragists' (NUWSS) way." },
  { tier: 1, label: "suffragette", desc: "A campaigner who smashed shop windows in London's West End in March 1912.", sol: "Mass window-smashing in 1912 was WSPU militancy — the suffragettes." },
  { tier: 1, label: "suffragette", desc: "A campaigner who went on hunger strike in prison.", sol: "Hunger strikes from 1909 were a suffragette (WSPU) tactic." },
  { tier: 1, label: "suffragist", desc: "A campaigner who lobbied MPs politely and sent petitions to Parliament.", sol: "Lobbying and petitions were the suffragists' lawful methods." },
  { tier: 1, label: "suffragette", desc: "A campaigner who set fire to empty buildings and postboxes in 1913–14.", sol: "Arson in 1913–14 was the most extreme phase of suffragette militancy." },
  { tier: 2, label: "suffragist", desc: "A woman who walked to Hyde Park in the Great Pilgrimage of 1913.", sol: "The Great Pilgrimage was an NUWSS march — the suffragists." },
  { tier: 2, label: "suffragist", desc: "A campaigner whose organisation's colours were red, white and green.", sol: "Red, white and green were the NUWSS colours; the WSPU used purple, white and green." },
  { tier: 2, label: "suffragette", desc: "A campaigner whose organisation's colours were purple, white and green.", sol: "Purple, white and green were the WSPU colours; the NUWSS used red, white and green." },
  { tier: 2, label: "suffragist", desc: "A reader of the newspaper The Common Cause, launched in 1909.", sol: "The Common Cause was the NUWSS paper — the suffragists." },
  { tier: 2, label: "suffragette", desc: "Annie Kenney, the Oldham mill worker arrested with Christabel Pankhurst in 1905.", sol: "Annie Kenney was a working-class WSPU member — a suffragette." },
  { tier: 2, label: "suffragette", desc: "Emily Wilding Davison, who died after the 1913 Epsom Derby.", sol: "Davison was a WSPU militant — a suffragette." },
  { tier: 2, label: "suffragist", desc: "A campaigner who joined the 'Mud March' through London in 1907.", sol: "The 1907 'Mud March' was an NUWSS procession — the suffragists." },
  { tier: 2, label: "suffragette", desc: "A member of the group the Daily Mail mocked with a new nickname in 1906.", sol: "The Daily Mail coined 'suffragettes' for WSPU members in 1906." },
  { tier: 3, label: "suffragist", desc: "A member of an organisation which, from 1912, used its Election Fighting Fund to back Labour candidates.", sol: "The Election Fighting Fund was an NUWSS tactic — the suffragists worked within elections." },
  { tier: 3, label: "suffragist", desc: "A member of an organisation run by elected committees, with over 50,000 members in hundreds of branches by 1914.", sol: "The NUWSS was large and democratic — the suffragists; the WSPU was tightly controlled by the Pankhursts." },
  { tier: 3, label: "suffragette", desc: "A member of an organisation tightly controlled by one family, with no reliable membership figures.", sol: "The WSPU was run by the Pankhursts — the suffragettes." },
  { tier: 3, label: "suffragette", desc: "Sophia Duleep Singh, who sold The Suffragette outside Hampton Court Palace.", sol: "Sophia Duleep Singh was a WSPU supporter — a suffragette." },
  { tier: 3, label: "suffragist", desc: "Lydia Becker, who led the Manchester women's suffrage society in the 1860s and 1870s.", sol: "Lydia Becker belonged to the early, peaceful campaign — a suffragist." },
  { tier: 3, label: "suffragist", desc: "A campaigner whose organisation turned to relief work and supported women's hospitals at the front in 1914.", sol: "In 1914 the NUWSS turned to relief work — the suffragists." },
  { tier: 3, label: "suffragette", desc: "A campaigner who slashed a painting in the National Gallery in 1914.", sol: "Attacks on property such as the National Gallery painting were WSPU militancy — the suffragettes." },
  { tier: 3, label: "suffragette", desc: "A campaigner whose leaders said they targeted 'property, not people'.", sol: "WSPU leaders claimed militancy targeted property, not people — though arson and bombs could still have killed." },
];

const FOR = ["for", "for votes for women", "in favour", "in favor", "pro", "for women's suffrage"];
const AGAINST = ["against", "against votes for women", "anti", "opposed", "against women's suffrage"];

const ARG_BANK: ClassFact<"for" | "against">[] = [
  { tier: 1, label: "for", desc: "Women are citizens who must obey the law, so they should help to make it.", sol: "This is the equality and justice argument FOR votes for women." },
  { tier: 1, label: "for", desc: "Many women pay taxes — there should be no taxation without representation.", sol: "The taxation argument was used FOR votes for women." },
  { tier: 1, label: "against", desc: "A woman's place is in the home; politics is men's business.", sol: "This 'separate spheres' argument was used AGAINST votes for women." },
  { tier: 1, label: "against", desc: "Women are too emotional to make sensible political decisions.", sol: "'Too emotional' was used AGAINST votes for women — a prejudice of the time, not evidence." },
  { tier: 1, label: "against", desc: "Voters decide on war, and women do not fight in wars.", sol: "The war argument was used AGAINST votes for women before 1914." },
  { tier: 1, label: "for", desc: "Women already serve sensibly on school boards and local councils.", sol: "Women's local experience was an argument FOR votes for women." },
  { tier: 1, label: "for", desc: "An educated woman doctor cannot vote, but an uneducated man can — that is absurd.", sol: "The 'absurdity test' was an argument FOR votes for women." },
  { tier: 1, label: "against", desc: "Most women do not even want the vote.", sol: "Anti-suffragists organised petitions to argue this AGAINST votes for women." },
  { tier: 2, label: "for", desc: "New Zealand gave women the vote in 1893, and the sky did not fall.", sol: "Examples abroad (New Zealand 1893, Australia 1902, Finland 1906) were used FOR votes for women." },
  { tier: 2, label: "for", desc: "Child welfare, health, drink and working conditions need women's voices in Parliament.", sol: "The 'women's issues' argument was used FOR votes for women." },
  { tier: 2, label: "against", desc: "Women who smash windows have proved they are unfit to vote.", sol: "After 1905 opponents used militancy as an argument AGAINST votes for women." },
  { tier: 2, label: "against", desc: "Give women the vote and next they will want to be MPs — men will lose control.", sol: "This 'thin end of the wedge' argument was used AGAINST votes for women." },
  { tier: 2, label: "against", desc: "Queen Victoria (1870): 'this mad, wicked folly of Woman's Rights'.", sol: "Queen Victoria privately opposed votes for women — opposition was not simply men versus women." },
  { tier: 2, label: "for", desc: "Around 900,000 women have made shells in the war — they have earned a say.", sol: "Women's war work became a powerful argument FOR the vote during 1914–18." },
  { tier: 2, label: "against", desc: "1889 'Appeal Against Female Suffrage', signed by 104 prominent women.", sol: "The 1889 Appeal was a women's petition AGAINST votes for women." },
  { tier: 3, label: "against", desc: "A Liberal MP in 1911: 'Women with property would mostly vote Conservative — I cannot back this bill.'", sol: "Party calculation led even sympathetic Liberals to vote AGAINST particular suffrage bills." },
  { tier: 3, label: "against", desc: "Mary Augusta Ward: women have a different but equally valuable role, and politics would coarsen them.", sol: "Ward led the Anti-Suffrage League — a sincere separate-spheres argument AGAINST the vote." },
  { tier: 3, label: "for", desc: "A Labour supporter in 1912: every adult, man or woman, should have the vote.", sol: "Labour wanted votes for all adults — the only party officially FOR votes for women before 1914." },
  { tier: 3, label: "against", desc: "A Conservative MP in 1912: 'Votes for some women will soon mean votes for everyone — and help Labour.'", sol: "Many Conservatives feared any change would open the door to votes for all adults — a party argument AGAINST." },
  { tier: 3, label: "for", desc: "Single women ratepayers have voted in town council elections since 1869 without disaster.", sol: "Women's record in local elections was evidence FOR the parliamentary vote." },
  { tier: 3, label: "for", desc: "Finland gave women the vote in 1906 — Britain is falling behind.", sol: "Examples abroad were used FOR votes for women." },
];

function classifyItem<L extends string>(
  rng: Rng,
  bank: readonly ClassFact<L>[],
  tier: Tier,
  templates: ((d: string) => string)[],
  accepts: Record<L, string[]>,
  displays: Record<L, string>,
  wrongFeedback: (l: L) => string,
  hint: string,
): DrillItem {
  const f = rng.pick(pool(bank, tier));
  const other = (Object.keys(accepts) as L[]).find((k) => k !== f.label)!;
  return {
    prompt: rng.pick(templates)(f.desc),
    answer: { type: "text", accept: accepts[f.label], display: displays[f.label] },
    solution: [f.sol],
    hint,
    traps: [{ spec: { type: "text", accept: [accepts[other][0]] }, feedback: wrongFeedback(f.label) }],
  };
}

// ---------------------------------------------------------------------------
// Chronology bank (which came first / years between)
// ---------------------------------------------------------------------------

interface Ev {
  year: number;
  label: string;
  accept: string[];
  /** Past-tense clause: "the NUWSS was formed". */
  clause: string;
}

const EVENTS: Ev[] = [
  { year: 1789, label: "the Declaration of the Rights of Man", accept: ["Declaration of the Rights of Man", "Rights of Man", "Declaration of the Rights of Man and of the Citizen"], clause: "revolutionary France issued the Declaration of the Rights of Man" },
  { year: 1819, label: "the Peterloo Massacre", accept: ["Peterloo Massacre", "Peterloo"], clause: "the Peterloo Massacre took place" },
  { year: 1832, label: "the Great Reform Act", accept: ["Great Reform Act", "Great Reform Act 1832", "1832 Reform Act", "First Reform Act"], clause: "the Great Reform Act was passed" },
  { year: 1838, label: "the People's Charter", accept: ["People's Charter", "Peoples Charter", "Charter", "Chartists", "Chartist"], clause: "the Chartists drew up the People's Charter" },
  { year: 1866, label: "Mill's women's suffrage petition", accept: ["Mill's women's suffrage petition", "Mill's petition", "Mills petition", "Mill petition", "John Stuart Mill's petition", "petition"], clause: "John Stuart Mill presented the women's suffrage petition to Parliament" },
  { year: 1870, label: "the first Married Women's Property Act", accept: ["first Married Women's Property Act", "Married Women's Property Act", "Married Womens Property Act", "Property Act"], clause: "the first Married Women's Property Act let wives keep their own earnings" },
  { year: 1872, label: "the Secret Ballot Act", accept: ["Secret Ballot Act", "Ballot Act", "secret ballot"], clause: "the Secret Ballot Act was passed" },
  { year: 1884, label: "the Third Reform Act", accept: ["Third Reform Act", "1884 Reform Act"], clause: "the Third Reform Act was passed" },
  { year: 1893, label: "New Zealand women winning the vote", accept: ["New Zealand women winning the vote", "New Zealand", "NZ", "New Zealand women vote"], clause: "women in New Zealand won the national vote" },
  { year: 1897, label: "the NUWSS being formed", accept: ["NUWSS being formed", "NUWSS", "NUWSS formed", "NUWSS founded", "suffragists", "National Union of Women's Suffrage Societies"], clause: "the NUWSS was formed" },
  { year: 1903, label: "the WSPU being founded", accept: ["WSPU being founded", "WSPU", "WSPU founded", "WSPU formed", "suffragettes", "Women's Social and Political Union"], clause: "the WSPU was founded" },
  { year: 1908, label: "the Anti-Suffrage League being founded", accept: ["Anti-Suffrage League being founded", "Anti-Suffrage League", "Anti Suffrage League", "Women's National Anti-Suffrage League", "Anti-Suffrage League founded"], clause: "the Women's National Anti-Suffrage League was founded" },
  { year: 1909, label: "the first suffragette hunger strike", accept: ["first suffragette hunger strike", "first hunger strike", "hunger strike", "hunger strikes"], clause: "the first suffragette hunger strike took place" },
  { year: 1910, label: "Black Friday", accept: ["Black Friday"], clause: "police and bystanders attacked marchers on Black Friday" },
  { year: 1913, label: "the Cat and Mouse Act", accept: ["Cat and Mouse Act", "Cat and Mouse", "Cat & Mouse Act"], clause: "the Cat and Mouse Act was passed" },
  { year: 1916, label: "Lloyd George becoming Prime Minister", accept: ["Lloyd George becoming Prime Minister", "Lloyd George", "Lloyd George becomes Prime Minister", "Lloyd George becomes PM"], clause: "Lloyd George replaced Asquith as Prime Minister" },
  { year: 1918, label: "the Representation of the People Act", accept: ["Representation of the People Act", "RPA", "1918 Act", "Representation of the People Act 1918"], clause: "the Representation of the People Act gave some women the vote" },
  { year: 1919, label: "Nancy Astor taking her seat", accept: ["Nancy Astor taking her seat", "Nancy Astor", "Astor", "Astor takes her seat"], clause: "Nancy Astor became the first woman to take her seat as an MP" },
  { year: 1928, label: "the Equal Franchise Act", accept: ["Equal Franchise Act", "Equal Franchise Act 1928", "Equal Franchise"], clause: "the Equal Franchise Act gave women the vote at 21" },
  { year: 1948, label: "the Universal Declaration of Human Rights", accept: ["Universal Declaration of Human Rights", "UDHR", "Universal Declaration"], clause: "the United Nations adopted the Universal Declaration of Human Rights" },
  { year: 1969, label: "the UK voting age being lowered to 18", accept: ["UK voting age being lowered to 18", "voting age lowered to 18", "voting age 18", "votes at 18", "voting age lowered"], clause: "the UK voting age was lowered to 18" },
];

/** Two distinct-year events, earlier first, whose gap satisfies `ok`. */
function pickPair(rng: Rng, ok: (gap: number) => boolean): [Ev, Ev] {
  let a = EVENTS[0], b = EVENTS[1];
  for (let i = 0; i < 100; i++) {
    a = rng.pick(EVENTS);
    b = rng.pick(EVENTS);
    if (a.year !== b.year && ok(Math.abs(a.year - b.year))) break;
  }
  if (a.year === b.year) b = EVENTS.find((e) => e.year !== a.year)!;
  return a.year < b.year ? [a, b] : [b, a];
}

// ---------------------------------------------------------------------------
// 1918 vs 1928: who could vote?
// ---------------------------------------------------------------------------

interface Person {
  text: string;
  woman: boolean;
  age: number;
  /** Meets the 1918 property / graduate qualification for women. */
  qualified: boolean;
  /** Man aged 19–20 who served in the war (1918 only). */
  served?: boolean;
  note: string;
}

function makePerson(rng: Rng, tier: Tier, act: 1918 | 1928): Person {
  const kinds = tier === 1 ? [0, 1, 2, 5] : tier === 2 ? [0, 1, 2, 3, 4, 5, 6, 7] : [0, 1, 3, 4, 6, 7, act === 1918 ? 8 : 6];
  const k = rng.pick(kinds);
  const over30 = rng.bool();
  switch (k) {
    case 0: {
      const age = over30 ? rng.int(31, 60) : rng.int(22, 29);
      return { text: `a ${age}-year-old married woman whose husband is a householder`, woman: true, age, qualified: true, note: "She meets the property test through her husband, so her age decides it." };
    }
    case 1: {
      const age = rng.int(22, 29);
      return { text: `a ${age}-year-old unmarried munitions worker who lodges in a room in someone else's house`, woman: true, age, qualified: false, note: "Many war workers like her were young, unmarried and owned or rented no house of their own." };
    }
    case 2: {
      const age = rng.int(22, 60);
      return { text: `a ${age}-year-old man who works as a farm labourer`, woman: false, age, qualified: true, note: "From 1918 men no longer needed to be householders: age 21 was the test." };
    }
    case 3: {
      const age = over30 ? rng.int(31, 60) : rng.int(22, 29);
      return { text: `a ${age}-year-old unmarried woman who rents a house of her own`, woman: true, age, qualified: true, note: "As a householder she meets the property qualification, so her age decides it." };
    }
    case 4: {
      const age = over30 ? rng.int(31, 55) : rng.int(22, 29);
      return { text: `a ${age}-year-old woman who is a university graduate`, woman: true, age, qualified: true, note: "Women graduates qualified in 1918 — but only from the age of 30." };
    }
    case 5: {
      const age = rng.int(18, 20);
      return { text: `a ${age}-year-old woman who works in a textile mill`, woman: true, age, qualified: false, note: "She is under 21, the lowest voting age for anyone except servicemen in 1918." };
    }
    case 6: {
      const age = rng.int(31, 60);
      return { text: `a ${age}-year-old unmarried domestic servant who lives in her employer's house and owns no property`, woman: true, age, qualified: false, note: "She is over 30, but she is not a householder, not married to one and not a graduate — the property qualification shut out many working-class women." };
    }
    case 7: {
      return { text: "a 20-year-old man who has never served in the armed forces", woman: false, age: 20, qualified: true, note: "He is under 21, the voting age for men." };
    }
    default: {
      const age = rng.int(19, 20);
      return { text: `a ${age}-year-old man who served in the army during the war`, woman: false, age, qualified: true, served: true, note: "In 1918 men who had served in the war could vote from the age of 19." };
    }
  }
}

function canVote(p: Person, act: 1918 | 1928): boolean {
  if (act === 1928) return p.age >= 21;
  if (!p.woman) return p.age >= 21 || !!p.served;
  return p.age >= 30 && p.qualified;
}

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

const T = "womens-suffrage";

export const drills: Drill[] = [
  {
    id: `${T}.reform-act-dates`,
    topicId: T,
    title: "Reform Act dates",
    level: 1,
    guideRef: "britain-becomes-democratic",
    generate(rng, tier) {
      return dateItem(rng, REFORM_DATES, tier, "Anchor it: Great Reform Act 1832, then roughly every 17 years (1867, 1884) — and women only in 1918 and 1928.");
    },
  },
  {
    id: `${T}.victorian-key-terms`,
    topicId: T,
    title: "Women in Victorian Britain: key term from its definition",
    level: 1,
    guideRef: "women-in-victorian-britain",
    generate(rng, tier) {
      return termItem(
        rng,
        VICTORIAN_TERMS,
        tier,
        [(d) => `Which term or name fits this description? ${d}`, (d) => `Key term from its definition: ${d}`, (d) => `Name it — ${d}`],
        "Think about the law, education, work and local politics for women in Victorian Britain.",
      );
    },
  },
  {
    id: `${T}.whos-who`,
    topicId: T,
    title: "Who's who in the fight for the vote?",
    level: 1,
    guideRef: "suffragists",
    generate(rng, tier) {
      return termItem(
        rng,
        PEOPLE,
        tier,
        [(d) => `Who is this? ${d}`, (d) => `Name the person: ${d}`, (d) => `Who's who — ${d}`],
        "Decide first: suffragist, suffragette, politician, opponent or historian?",
      );
    },
  },
  {
    id: `${T}.democracy-milestones`,
    topicId: T,
    title: "Milestones of democracy: match the date",
    level: 1,
    guideRef: "why-women-won",
    generate(rng, tier) {
      return dateItem(rng, WORLD_DATES, tier, "Place it against Britain's dates: 1918 (women over 30) and 1928 (equal votes).");
    },
  },
  {
    id: `${T}.campaign-key-terms`,
    topicId: T,
    title: "Campaign and wartime key terms",
    level: 2,
    guideRef: "suffragettes",
    generate(rng, tier) {
      return termItem(
        rng,
        CAMPAIGN_TERMS,
        tier,
        [(d) => `Name the term: ${d}`, (d) => `Which name or term fits? ${d}`, (d) => `Key term from its definition — ${d}`],
        "Is it about the suffragists, the suffragettes, the government's response or the war?",
      );
    },
  },
  {
    id: `${T}.suffragist-or-suffragette`,
    topicId: T,
    title: "Suffragist or suffragette?",
    level: 2,
    guideRef: "suffragettes",
    generate(rng, tier) {
      return classifyItem(
        rng,
        SS_BANK,
        tier,
        [
          (d) => `Suffragist or suffragette? ${d} (Answer *suffragist* or *suffragette*.)`,
          (d) => `Who is described here — a suffragist (NUWSS) or a suffragette (WSPU)? ${d} Answer *suffragist* or *suffragette*.`,
        ],
        { suffragist: SUFFRAGIST, suffragette: SUFFRAGETTE },
        { suffragist: "Suffragist (NUWSS)", suffragette: "Suffragette (WSPU)" },
        (l) =>
          l === "suffragist"
            ? "Not quite — this fits the peaceful, law-abiding NUWSS: a suffragist."
            : "Not quite — this fits the militant WSPU ('Deeds not words'): a suffragette.",
        "Peaceful and lawful → NUWSS (suffragist). Militant, Pankhursts, 'Deeds not words' → WSPU (suffragette).",
      );
    },
  },
  {
    id: `${T}.for-or-against`,
    topicId: T,
    title: "Argument for or against votes for women?",
    level: 2,
    guideRef: "arguments-for-and-against",
    generate(rng, tier) {
      return classifyItem(
        rng,
        ARG_BANK,
        tier,
        [
          (d) => `Was this used **for** or **against** votes for women? "${d}" (Answer *for* or *against*.)`,
          (d) => `Sort this from the debate before 1918 — for or against votes for women? "${d}" Answer *for* or *against*.`,
        ],
        { for: FOR, against: AGAINST },
        { for: "For", against: "Against" },
        (l) => (l === "for" ? "Look again — this supports giving women the vote." : "Look again — this was used to deny women the vote."),
        "Ask: would a suffragist have said this, or an anti-suffragist?",
      );
    },
  },
  {
    id: `${T}.which-came-first`,
    topicId: T,
    title: "Which came first?",
    level: 2,
    guideRef: "why-women-won",
    generate(rng, tier) {
      const [early, late] = pickPair(rng, (g) => (tier === 1 ? g >= 15 : tier === 2 ? g >= 5 : g <= 8));
      const [x, y] = rng.bool() ? [early, late] : [late, early];
      const t = rng.int(0, 2);
      const prompt =
        t === 0
          ? `Which came first: **${x.label}** or **${y.label}**?`
          : t === 1
            ? `Chronology check — which happened earlier: **${x.label}** or **${y.label}**?`
            : `Put these in order. Which was first: **${x.label}** or **${y.label}**?`;
      return {
        prompt,
        answer: { type: "text", accept: [early.accept[0], ...early.accept.slice(1)], display: cap(early.label) },
        solution: [
          `${cap(early.clause)} in ${early.year}; ${late.clause} in ${late.year}.`,
          `So ${early.label} came first, ${late.year - early.year} year${late.year - early.year === 1 ? "" : "s"} earlier.`,
        ],
        hint: "Anchor each event to a date you know: 1832, 1897, 1903, 1914, 1918, 1928.",
        traps: [{ spec: { type: "text", accept: [late.accept[0]] }, feedback: `${cap(late.label)} came later, in ${late.year}.` }],
      };
    },
  },
  {
    id: `${T}.who-could-vote-1918-1928`,
    topicId: T,
    title: "1918 or 1928 rules: could they vote?",
    level: 3,
    guideRef: "war-and-the-vote",
    generate(rng, tier) {
      const act: 1918 | 1928 = tier === 1 ? (rng.bool(0.7) ? 1918 : 1928) : rng.bool() ? 1918 : 1928;
      const p = makePerson(rng, tier, act);
      const yes = canVote(p, act);
      const law = act === 1918 ? "**1918** Representation of the People Act" : "**1928** Equal Franchise Act";
      const prompt = rng.bool()
        ? `Under the ${law}, could ${p.text} vote in a general election? (Answer *yes* or *no*.)`
        : act === 1918
          ? `It is December 1918, the first general election under the new rules. Could ${p.text} vote? Answer *yes* or *no*.`
          : `It is May 1929, the first general election under the 1928 rules. Could ${p.text} vote? Answer *yes* or *no*.`;
      const rule =
        act === 1918
          ? "1918 rules: all men over 21 (19 if they had served in the war); women over 30 who were householders, married to a householder, or university graduates."
          : "1928 rules: women and men alike could vote from the age of 21.";
      const verdict =
        act === 1918
          ? `${yes ? "Yes" : "No"}. ${p.note}${p.woman && p.age >= 21 ? ` (Age ${p.age}: ${p.age >= 30 ? "over" : "under"} 30.)` : ""}`
          : `${yes ? "Yes" : "No"} — in 1928 property no longer mattered, only age: this person is ${p.age}${yes ? "" : ", under 21"}.`;
      const YES = ["yes", "y", "yes she could", "yes he could"];
      const NO = ["no", "n", "no she could not", "no he could not"];
      return {
        prompt,
        answer: { type: "text", accept: yes ? YES : NO, display: yes ? "Yes" : "No" },
        solution: [rule, verdict],
        hint: act === 1918 ? "Check two things for a woman in 1918: is she over 30, and does she meet the property (or graduate) qualification?" : "In 1928 only one test mattered: age.",
        traps: [{ spec: { type: "text", accept: [yes ? "no" : "yes"] }, feedback: yes ? "Check the rules again — this person did meet them." : "Check the rules again — this person fails at least one test." }],
      };
    },
  },
  {
    id: `${T}.years-between`,
    topicId: T,
    title: "How long did it take?",
    level: 3,
    guideRef: "suffragists",
    generate(rng, tier) {
      const [a, b] = pickPair(rng, (g) => g >= 2 && g <= 70);
      const gap = b.year - a.year;
      let prompt: string;
      if (tier === 1) {
        prompt = `${cap(a.clause)} in ${a.year}. ${cap(b.clause)} in ${b.year}. How many years apart were these events?`;
      } else if (tier === 2) {
        prompt = `${cap(a.clause)} in ${a.year}. How many years after that was it before ${b.clause}?`;
      } else {
        prompt = rng.bool()
          ? `How many years passed between when ${a.clause} and when ${b.clause}? (Recall both dates.)`
          : `Work out the gap: first ${a.clause}; later ${b.clause}. How many years apart were they? (Recall both dates.)`;
      }
      return {
        prompt,
        answer: { type: "number", value: gap },
        solution: [`${cap(a.clause)} in ${a.year}; ${b.clause} in ${b.year}.`, `${b.year} − ${a.year} = ${gap} years.`],
        hint: tier === 1 ? "Subtract the earlier year from the later one." : "Recall each year first, then subtract the earlier from the later.",
        traps: [{ spec: { type: "number", value: gap + 1 }, feedback: "Don't count both end years — just subtract the earlier year from the later one." }],
      };
    },
  },
];
