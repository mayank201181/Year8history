// Engagement extras for "Hitler's Rise to Power" (separate from audited content).
import type { TopicExtras } from "../types.ts";

const STAIRCASE = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A staircase going down from January 1933 to August 1934. Each step is one stage in Hitler destroying German democracy: appointment as Chancellor, the Reichstag Fire Decree, the Enabling Act, trade unions banned, a one-party state, the Night of the Long Knives, and finally Hitler as Führer.">
<text x="10" y="14" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">From Chancellor to Führer in 18 months</text>
<rect x="10" y="22" width="320" height="34" rx="5" fill="#c7d2fe" stroke="#334155"/>
<text x="18" y="36" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">30 Jan 1933</text>
<text x="18" y="50" font-family="sans-serif" font-size="10" fill="#1f2937">Hitler appointed Chancellor (only 3 Nazis in cabinet)</text>
<rect x="30" y="62" width="320" height="34" rx="5" fill="#fde68a" stroke="#334155"/>
<text x="38" y="76" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">28 Feb 1933</text>
<text x="38" y="90" font-family="sans-serif" font-size="10" fill="#1f2937">Reichstag Fire Decree: civil rights suspended</text>
<rect x="50" y="102" width="320" height="34" rx="5" fill="#fde68a" stroke="#334155"/>
<text x="58" y="116" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">23 Mar 1933</text>
<text x="58" y="130" font-family="sans-serif" font-size="10" fill="#1f2937">Enabling Act: laws made without the Reichstag</text>
<rect x="70" y="142" width="320" height="34" rx="5" fill="#fecaca" stroke="#334155"/>
<text x="78" y="156" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">2 May 1933</text>
<text x="78" y="170" font-family="sans-serif" font-size="10" fill="#1f2937">Trade unions banned; German Labour Front set up</text>
<rect x="90" y="182" width="320" height="34" rx="5" fill="#fecaca" stroke="#334155"/>
<text x="98" y="196" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">14 Jul 1933</text>
<text x="98" y="210" font-family="sans-serif" font-size="10" fill="#1f2937">Nazis become the only legal party</text>
<rect x="110" y="222" width="320" height="34" rx="5" fill="#fecaca" stroke="#334155"/>
<text x="118" y="236" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">30 Jun 1934</text>
<text x="118" y="250" font-family="sans-serif" font-size="10" fill="#1f2937">Night of the Long Knives: SA leaders and rivals murdered</text>
<rect x="130" y="262" width="330" height="34" rx="5" fill="#fecaca" stroke="#1f2937" stroke-width="2"/>
<text x="138" y="276" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">2 Aug 1934</text>
<text x="138" y="290" font-family="sans-serif" font-size="10" fill="#1f2937">Hindenburg dies: Hitler becomes Führer; army swears oath</text>
<text x="10" y="314" font-family="sans-serif" font-size="10" fill="#1f2937">Five of the seven steps happened in the first six months.</text>
</svg>`;

const CAUSES = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cause diagram. Three boxes — crisis, weak government and Nazi strengths — lead to the Nazis becoming the largest party in July 1932 but without a majority. That, plus the elites' miscalculation, leads to Hitler's appointment as Chancellor on 30 January 1933.">
<defs><marker id="hr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#334155"/></marker></defs>
<rect x="8" y="8" width="148" height="92" rx="6" fill="#fde68a" stroke="#334155"/>
<text x="82" y="26" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">CRISIS</text>
<text x="16" y="44" font-family="sans-serif" font-size="10" fill="#1f2937">Defeat and Versailles</text>
<text x="16" y="58" font-family="sans-serif" font-size="10" fill="#1f2937">Hyperinflation, 1923</text>
<text x="16" y="72" font-family="sans-serif" font-size="10" fill="#1f2937">Depression: about 6</text>
<text x="16" y="86" font-family="sans-serif" font-size="10" fill="#1f2937">million unemployed</text>
<rect x="166" y="8" width="148" height="92" rx="6" fill="#bae6fd" stroke="#334155"/>
<text x="240" y="26" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">WEAK GOVERNMENT</text>
<text x="174" y="44" font-family="sans-serif" font-size="10" fill="#1f2937">Many parties, short-lived</text>
<text x="174" y="58" font-family="sans-serif" font-size="10" fill="#1f2937">coalitions</text>
<text x="174" y="72" font-family="sans-serif" font-size="10" fill="#1f2937">Rule by Article 48</text>
<text x="174" y="86" font-family="sans-serif" font-size="10" fill="#1f2937">decrees from 1930</text>
<rect x="324" y="8" width="148" height="92" rx="6" fill="#c7d2fe" stroke="#334155"/>
<text x="398" y="26" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">NAZI STRENGTHS</text>
<text x="332" y="44" font-family="sans-serif" font-size="10" fill="#1f2937">Hitler's speeches</text>
<text x="332" y="58" font-family="sans-serif" font-size="10" fill="#1f2937">Goebbels' propaganda</text>
<text x="332" y="72" font-family="sans-serif" font-size="10" fill="#1f2937">SA violence; promises</text>
<text x="332" y="86" font-family="sans-serif" font-size="10" fill="#1f2937">to every group</text>
<line x1="82" y1="100" x2="170" y2="130" stroke="#334155" stroke-width="1.5" marker-end="url(#hr-arrow)"/>
<line x1="240" y1="100" x2="240" y2="130" stroke="#334155" stroke-width="1.5" marker-end="url(#hr-arrow)"/>
<line x1="398" y1="100" x2="310" y2="130" stroke="#334155" stroke-width="1.5" marker-end="url(#hr-arrow)"/>
<rect x="100" y="132" width="280" height="44" rx="6" fill="#ffffff" stroke="#334155"/>
<text x="240" y="150" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">July 1932: Nazis the largest party</text>
<text x="240" y="167" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1f2937">230 seats, about 37% of the vote — but no majority</text>
<line x1="300" y1="176" x2="340" y2="210" stroke="#334155" stroke-width="1.5" marker-end="url(#hr-arrow)"/>
<rect x="8" y="212" width="200" height="66" rx="6" fill="#bbf7d0" stroke="#334155"/>
<text x="108" y="230" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">ELITES' MISCALCULATION</text>
<text x="16" y="248" font-family="sans-serif" font-size="10" fill="#1f2937">Papen and Hindenburg think</text>
<text x="16" y="262" font-family="sans-serif" font-size="10" fill="#1f2937">conservatives can control Hitler</text>
<line x1="208" y1="245" x2="250" y2="245" stroke="#334155" stroke-width="1.5" marker-end="url(#hr-arrow)"/>
<rect x="252" y="212" width="220" height="66" rx="6" fill="#fecaca" stroke="#1f2937" stroke-width="2"/>
<text x="362" y="232" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">30 January 1933</text>
<text x="362" y="249" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1f2937">Hitler appointed Chancellor</text>
<text x="362" y="265" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1f2937">→ Führer by August 1934</text>
<text x="8" y="294" font-family="sans-serif" font-size="10" fill="#1f2937">No single cause was enough: the factors worked together.</text>
</svg>`;

export const extras: TopicExtras = {
  hook: "In July 1932 the Nazis became the biggest party in Germany — yet nearly two out of three voters had chosen someone else. Six months later Hitler was running the country. How did a man most Germans never voted for get handed power?",
  didYouKnow: [
    "Hitler was born in Austria and only became a German citizen in **February 1932**, weeks before he stood for President. Without citizenship he could not have been a candidate.",
    "The Nazis **never won a majority** in a free election. Their best result was about 37% in July 1932. Even in March 1933 — after opponents had been arrested — they won about 44%.",
    "In 1932 Hitler campaigned **by aeroplane**, flying from city to city to speak at several rallies a day. The 'Hitler over Germany' tour made him look modern and unstoppable.",
    "The Enabling Act was passed in the **Kroll Opera House**, because the Reichstag building had burned. SA and SS men lined the hall, and the 81 Communist deputies had been arrested or forced into hiding.",
    "President Hindenburg privately looked down on Hitler as a mere corporal and refused to make him Chancellor in **August 1932** — then appointed him five months later.",
    "In the Night of the Long Knives (June–July 1934) at least 85 people were killed without trial, including the former Chancellor **Kurt von Schleicher** and his wife. A law passed days later declared the killings legal.",
  ],
  activities: [
    {
      title: "Propaganda detectives",
      emoji: "🔍",
      materials: ["5 adverts (magazine pages, flyers, or screenshots of online ads)", "Highlighter pens in 3 colours", "A sheet of paper for a tally chart"],
      steps: [
        "Collect five adverts or campaign posters from today — food, phones, games, a public-health campaign.",
        "Make a tally chart with these techniques: simple slogan · repetition · strong emotion (fear, pride, belonging) · a hero figure · 'everyone is doing it' (bandwagon) · an enemy or problem to blame.",
        "Highlight each technique you can find in each advert and tally it.",
        "Now look at how historians describe Nazi propaganda: short slogans like 'Work and Bread', endless repetition, huge rallies, Hitler as a saviour, and lies blaming Jewish people and Communists for Germany's problems.",
        "Discuss: which techniques are shared? What is the big difference between an advert for trainers and propaganda that spreads hatred of a group of people?",
      ],
      history: "Goebbels' propaganda used the same persuasion tools as advertising — but to win power and to turn Germans against their own neighbours with racist lies. Learning to spot the techniques is how you stop them working on you. That is why historians (and citizens) ask of every source: who made this, and what do they want me to think?",
    },
    {
      title: "Build the 1932 Reichstag",
      emoji: "🧱",
      materials: ["About 61 LEGO bricks, buttons or coins in 6 colours (or paper squares)", "A table or tray", "Pen and paper"],
      steps: [
        "Let 1 brick = 10 seats. Build the July 1932 Reichstag (608 seats): Nazis 23 bricks, SPD 13, Communists (KPD) 9, Catholic Centre parties 10, DNVP 4, all others 2.",
        "A majority needs more than half: 31 bricks.",
        "Challenge 1: build a majority coalition WITHOUT the Nazis and WITHOUT the Communists. Can you do it?",
        "Challenge 2: count the Nazi and Communist bricks together. What could these two parties, which both wanted to destroy the Republic, do if they both voted against a government?",
        "Write one sentence explaining why the Reichstag could not produce a stable government in 1932.",
      ],
      history: "Every other party together had only 289 of 608 seats — short of the 305 needed. The Nazis and Communists (319 seats) could block anything, so Chancellors governed by emergency decree instead. This deadlock is why the President's choice of Chancellor mattered so much — and why Papen's deal with Hitler was possible.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The staircase down: Chancellor to Führer",
      svg: STAIRCASE,
      caption: "Each step removed a check on Hitler's power. Notice how fast it happened — and that the first steps used legal-looking decrees and laws.",
    },
    {
      title: "Why did Hitler come to power? Linking the factors",
      svg: CAUSES,
      caption: "Crisis and weak government made voters desperate; Nazi strengths turned that into votes. But votes alone did not make Hitler Chancellor — the elites' decision did.",
    },
  ],
  story: {
    title: "The fire, the young Dutchman and a verdict overturned 75 years later",
    story: "On the night of 27 February 1933 the Reichstag building in Berlin burst into flames. Police arrested a 24-year-old Dutch communist, Marinus van der Lubbe, inside. Within hours the Nazis claimed the fire was the signal for a Communist uprising. The next day Hindenburg signed the Reichstag Fire Decree, suspending Germans' basic rights — and thousands of Communists were arrested.\n\nVan der Lubbe was tried, sentenced to death and executed in January 1934. Four other Communists tried with him were acquitted for lack of evidence. Did he act alone? Historians still disagree: most think he did, while some suspect Nazi involvement. Either way, the Nazis used the fire brilliantly. In 2008 German prosecutors formally overturned van der Lubbe's conviction, under a law cancelling unjust Nazi-era verdicts.",
  },
};
