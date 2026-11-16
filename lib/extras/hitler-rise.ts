import type { TopicExtras } from "../types.ts";

const timelineSvg = `<svg viewBox="0 0 480 312" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline drawn to scale from 1918 to 1934. Shaded bands show years of crisis from 1919 to 1923, the Golden Years from 1924 to 1929, the Depression from 1929 to early 1933, then Nazi rule. Events: armistice November 1918, Treaty of Versailles 1919, Kapp Putsch 1920, Dawes Plan 1924, hyperinflation peak and Munich Putsch November 1923, Wall Street Crash October 1929, Nazis largest party July 1932, Hitler Chancellor 30 January 1933, Enabling Act March 1933, Night of the Long Knives June 1934, Hitler becomes Führer August 1934."><rect width="480" height="312" fill="#ffffff"/><text x="240" y="22" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">From democracy to dictatorship, 1918–1934</text><rect x="42.3" y="138" width="130.4" height="24" fill="#fecaca"/><rect x="172.7" y="138" width="152.7" height="24" fill="#bbf7d0"/><rect x="325.4" y="138" width="84.9" height="24" fill="#fecaca"/><rect x="410.3" y="138" width="39.3" height="24" fill="#c7d2fe"/><rect x="20" y="138" width="440" height="24" fill="none" stroke="#334155"/><text x="107.5" y="154" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Years of crisis</text><text x="249" y="154" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Golden Years</text><text x="367.8" y="154" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Depression</text><line x1="42.3" y1="138" x2="42.3" y2="98" stroke="#334155"/><text x="42.3" y="94" font-size="11" font-family="sans-serif" fill="#1f2937">Nov 1918 Armistice</text><line x1="76.9" y1="138" x2="76.9" y2="122" stroke="#334155"/><text x="76.9" y="118" font-size="11" font-family="sans-serif" fill="#1f2937">1920 Kapp Putsch</text><line x1="190.8" y1="138" x2="190.8" y2="122" stroke="#334155"/><text x="190.8" y="118" font-size="11" font-family="sans-serif" fill="#1f2937">1924 Dawes Plan</text><line x1="396.6" y1="138" x2="396.6" y2="98" stroke="#334155"/><text x="396.6" y="94" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Jul 1932 Nazis largest party</text><line x1="410.3" y1="138" x2="410.3" y2="74" stroke="#334155"/><text x="410.3" y="70" font-size="11" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#1f2937">30 Jan 1933 Hitler Chancellor</text><line x1="449.6" y1="138" x2="449.6" y2="50" stroke="#334155"/><text x="449.6" y="46" font-size="11" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#1f2937">Aug 1934 Hitler becomes Führer</text><line x1="58.6" y1="162" x2="58.6" y2="179" stroke="#334155"/><text x="58.6" y="190" font-size="11" font-family="sans-serif" fill="#1f2937">1919 Versailles</text><line x1="171.7" y1="162" x2="171.7" y2="203" stroke="#334155"/><text x="171.7" y="214" font-size="11" font-family="sans-serif" fill="#1f2937">Nov 1923 Hyperinflation peaks;</text><text x="171.7" y="228" font-size="11" font-family="sans-serif" fill="#1f2937">Munich Putsch fails</text><line x1="325.4" y1="162" x2="325.4" y2="179" stroke="#334155"/><text x="325.4" y="190" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Oct 1929 Wall St Crash</text><line x1="414.2" y1="162" x2="414.2" y2="241" stroke="#334155"/><text x="414.2" y="252" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Mar 1933 Enabling Act</text><line x1="447" y1="162" x2="447" y2="265" stroke="#334155"/><text x="447" y="276" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Jun 1934 Night of the Long Knives</text><line x1="20" y1="292" x2="460" y2="292" stroke="#334155"/><line x1="20" y1="288" x2="20" y2="296" stroke="#334155"/><line x1="123.5" y1="288" x2="123.5" y2="296" stroke="#334155"/><line x1="227" y1="288" x2="227" y2="296" stroke="#334155"/><line x1="330.5" y1="288" x2="330.5" y2="296" stroke="#334155"/><line x1="434" y1="288" x2="434" y2="296" stroke="#334155"/><text x="20" y="308" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">1918</text><text x="123.5" y="308" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">1922</text><text x="227" y="308" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">1926</text><text x="330.5" y="308" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">1930</text><text x="434" y="308" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">1934</text></svg>`;

const seatsSvg = `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar showing the 608 Reichstag seats after the July 1932 election: Nazis 230, Communists 89, Social Democrats 133, Centre and Bavarian People's Party 97, Nationalists 37, others 22. A majority needed 305 seats. Nazis and Communists together held 319, a majority against the Republic; the pro-republic SPD, Centre and BVP held only 230."><rect width="480" height="260" fill="#ffffff"/><text x="240" y="22" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Reichstag seats after the July 1932 election (608 seats)</text><rect x="20" y="80" width="166.4" height="50" fill="#fecaca" stroke="#1f2937"/><rect x="186.4" y="80" width="64.4" height="50" fill="#fecaca" stroke="#1f2937"/><rect x="250.8" y="80" width="96.2" height="50" fill="#bbf7d0" stroke="#1f2937"/><rect x="347" y="80" width="70.2" height="50" fill="#bbf7d0" stroke="#1f2937"/><rect x="417.2" y="80" width="26.8" height="50" fill="#fde68a" stroke="#1f2937"/><rect x="444" y="80" width="16" height="50" fill="#e5e7eb" stroke="#1f2937"/><text x="103.2" y="110" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Nazis 230</text><text x="213" y="110" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">KPD 89</text><text x="298.9" y="110" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">SPD 133</text><text x="382.1" y="110" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Centre 97</text><text x="430.6" y="72" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">DNVP 37</text><text x="460" y="146" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Others 22</text><line x1="240.7" y1="56" x2="240.7" y2="140" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 4"/><text x="240.7" y="50" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Majority = 305 seats</text><polyline points="20,154 20,160 250.8,160 250.8,154" fill="none" stroke="#b91c1c" stroke-width="1.5"/><text x="135.4" y="178" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#b91c1c">Nazis + KPD = 319 seats</text><text x="135.4" y="194" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">a majority against the Republic</text><polyline points="250.8,154 250.8,160 417.2,160 417.2,154" fill="none" stroke="#15803d" stroke-width="1.5"/><text x="334" y="178" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#15803d">SPD + Centre + BVP = 230</text><text x="334" y="194" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">far short of 305</text><text x="240" y="228" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Figures: Reichstag election of 31 July 1932.</text><text x="240" y="246" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">No majority was possible without the Nazis or the KPD.</text></svg>`;

export const extras: TopicExtras = {
  hook:
    "In 1928 only about 1 German voter in 40 chose the Nazis. Six years later Hitler was dictator of Germany — and at no point had a majority of Germans voted for him in a free election. How is that possible?",
  didYouKnow: [
    "Hitler was not a German citizen for most of his rise to power. Born in Austria, he only gained German citizenship in **February 1932** — just in time to stand for President.",
    "Hitler **lost** the 1932 presidential election. In the run-off, Hindenburg won about 53% of the vote to Hitler's 37%. Less than a year later, Hindenburg appointed him Chancellor anyway.",
    "The Weimar Republic is named after a small town, not a person: the National Assembly met in **Weimar** in 1919 because Berlin was too violent and unsafe.",
    "By November 1923 one US dollar was worth about **4.2 trillion marks**. Photographs from the time show people using bundles of worthless banknotes as fuel and children playing with stacks of them like building blocks.",
    "Hitler was sentenced to **five years** for trying to overthrow the government in 1923 — but was released after about **nine months**.",
    "When the Enabling Act was debated in March 1933, with SA men lining the chamber, the Social Democrat leader **Otto Wels** gave the last free speech in the Reichstag, telling the Nazis that they could take away freedom and life, but not honour.",
  ],
  activities: [
    {
      title: "Propaganda detective checklist",
      emoji: "🔍",
      materials: [
        "Paper and pen (or a notes app)",
        "5 modern adverts or campaign posters — from magazines, buses, or websites",
        "Optional, with an adult: a museum website's page on 1930s German posters (for example the Imperial War Museums or the US Holocaust Memorial Museum)",
      ],
      steps: [
        "Write a checklist of 6–8 questions a historian asks of propaganda, e.g. *Who made it? Who is it aimed at? What emotion does it use? What is the one simple message? Is anyone blamed? What is left out? Is the claim checkable?*",
        "Test your checklist on 5 modern adverts. Score each question 0–2 for how strongly the advert uses that technique.",
        "Which advert relies most on emotion rather than facts? Which leaves the most out?",
        "With an adult, look at a museum's analysis of the 1932 Nazi poster *'Our last hope: Hitler'*. Run your checklist on it: who was it aimed at, and what did it *not* say?",
        "Improve your checklist: add any question that would have helped you spot the poster's purpose faster.",
      ],
      maths:
        "**The history behind it.** Goebbels' propaganda used techniques that can be studied and named: one simple message repeated endlessly, strong emotion instead of detailed policy, a single saviour-leader, and scapegoats to blame. Historians analyse propaganda for its **purpose and audience**, not as evidence of truth — exactly the skill that protects people against misleading messages today.",
    },
    {
      title: "Can you save Weimar? Coalition maths",
      emoji: "🧮",
      materials: [
        "61 small counters, sweets or coins (1 counter ≈ 10 seats)",
        "6 sheets of paper labelled with the parties below",
        "A pen",
      ],
      steps: [
        "Share out the counters to match the July 1932 election (1 counter ≈ 10 seats): **Nazis 23**, **SPD 13**, **KPD 9**, **Centre + BVP 10**, **DNVP 4**, **Others 2**.",
        "A government needs a majority: more than half of 61, so **31 counters**.",
        "Try to build a coalition **without** the Nazis or the KPD, who both wanted to destroy the republic. Add up the counters. Can you reach 31?",
        "Now see what happens if you add the Nazis or the KPD. Which coalitions are possible — and would those parties ever agree to work together?",
        "Explain in two sentences why President Hindenburg ended up governing by Article 48 decrees — and why that put so much power in the hands of a few people.",
      ],
      maths:
        "**The history behind it.** In July 1932 the Nazis (230 seats) and the KPD (89) together held 319 of the 608 seats — a majority opposed to democracy itself. Every other party combined had only 289, short of the 305 needed. With no workable majority in parliament, power passed to the President and his advisers, who appointed Hitler Chancellor in January 1933.",
    },
  ],
  bonusDiagrams: [
    {
      title: "From democracy to dictatorship, 1918–1934 (to scale)",
      svg: timelineSvg,
      caption:
        "Drawn to scale: notice how short the 'Golden Years' were, and how quickly everything happened once Hitler became Chancellor.",
    },
    {
      title: "The coalition trap of July 1932",
      svg: seatsSvg,
      caption:
        "The two parties that wanted to destroy the republic held a majority between them, so no normal democratic government was possible.",
    },
  ],
  history: {
    title: "The last free speech in the Reichstag",
    story:
      "On **23 March 1933** the Reichstag met in a Berlin opera house, because its own building had burned. SA and SS men lined the walls. Communist deputies had been arrested or forced into hiding, and some Social Democrats were missing too. Hitler demanded the **Enabling Act**. Then **Otto Wels**, leader of the Social Democrats, stood up. Knowing he might be arrested, he told the Nazis that they could take away freedom and life, but not honour. All **94** Social Democrats present voted no; the Act passed anyway, by 444 votes to 94. Within months the SPD was banned. Wels escaped abroad and kept opposing the Nazis from exile until his death in Paris in 1939. His speech is remembered as the last time anyone spoke freely against Hitler in a German parliament.",
  },
};
