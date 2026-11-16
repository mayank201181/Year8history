import type { TopicExtras } from "../types.ts";

const compareSvg = `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison table of how dictators came to power in Germany, China and Cambodia, by crisis, weak government, leader, outside support and how power came: Hitler was appointed Chancellor in 1933; Mao and Pol Pot won civil wars in 1949 and 1975">
<rect x="0" y="0" width="480" height="340" fill="#ffffff"/>
<text x="240" y="18" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">Three roads to dictatorship</text>
<rect x="100" y="28" width="123" height="26" rx="4" fill="#e2e8f0" stroke="#334155"/>
<text x="161" y="46" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Germany (Hitler)</text>
<rect x="227" y="28" width="123" height="26" rx="4" fill="#e2e8f0" stroke="#334155"/>
<text x="288" y="46" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">China (Mao)</text>
<rect x="354" y="28" width="123" height="26" rx="4" fill="#e2e8f0" stroke="#334155"/>
<text x="415" y="46" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Cambodia (Pol Pot)</text>
<rect x="4" y="58" width="92" height="52" rx="4" fill="#fecaca" stroke="#334155"/>
<text x="50" y="88" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Crisis</text>
<rect x="4" y="114" width="92" height="52" rx="4" fill="#fde68a" stroke="#334155"/>
<text x="50" y="137" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Weak</text>
<text x="50" y="151" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">government</text>
<rect x="4" y="170" width="92" height="52" rx="4" fill="#c7d2fe" stroke="#334155"/>
<text x="50" y="200" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Leader</text>
<rect x="4" y="226" width="92" height="52" rx="4" fill="#bbf7d0" stroke="#334155"/>
<text x="50" y="249" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Outside</text>
<text x="50" y="263" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">support</text>
<rect x="4" y="282" width="92" height="52" rx="4" fill="#bae6fd" stroke="#334155"/>
<text x="50" y="305" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">How power</text>
<text x="50" y="319" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">came</text>
<g fill="none" stroke="#cbd5e1">
<rect x="100" y="58" width="123" height="52"/><rect x="227" y="58" width="123" height="52"/><rect x="354" y="58" width="123" height="52"/>
<rect x="100" y="114" width="123" height="52"/><rect x="227" y="114" width="123" height="52"/><rect x="354" y="114" width="123" height="52"/>
<rect x="100" y="170" width="123" height="52"/><rect x="227" y="170" width="123" height="52"/><rect x="354" y="170" width="123" height="52"/>
<rect x="100" y="226" width="123" height="52"/><rect x="227" y="226" width="123" height="52"/><rect x="354" y="226" width="123" height="52"/>
<rect x="100" y="282" width="123" height="52"/><rect x="227" y="282" width="123" height="52"/><rect x="354" y="282" width="123" height="52"/>
</g>
<g font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">
<text x="161" y="74">Defeat 1918;</text><text x="161" y="87">hyperinflation 1923;</text><text x="161" y="100">Depression 1929</text>
<text x="288" y="74">Civil war;</text><text x="288" y="87">Japanese invasion</text><text x="288" y="100">1937; inflation</text>
<text x="415" y="74">Vietnam War spills</text><text x="415" y="87">over; US bombing</text><text x="415" y="100">1969–73</text>
<text x="161" y="131">Unstable coalitions;</text><text x="161" y="144">Article 48 decrees;</text><text x="161" y="157">elites' deal 1933</text>
<text x="288" y="137">Warlords; corrupt</text><text x="288" y="150">GMD loses trust</text>
<text x="415" y="137">Lon Nol's coup 1970;</text><text x="415" y="150">corrupt, weak army</text>
<text x="161" y="193">Hitler: speeches,</text><text x="161" y="206">rallies, propaganda</text>
<text x="288" y="187">Mao: peasant</text><text x="288" y="200">strategy; Long</text><text x="288" y="213">March legend</text>
<text x="415" y="187">Pol Pot: secrecy,</text><text x="415" y="200">discipline — little</text><text x="415" y="213">public charisma</text>
<text x="161" y="256">Very little</text>
<text x="288" y="249">Soviet advice and</text><text x="288" y="262">help (1920s, 1945)</text>
<text x="415" y="249">North Vietnam and</text><text x="415" y="262">China: arms, troops</text>
<text x="161" y="305">Appointed</text><text x="161" y="318">Chancellor, 1933</text>
<text x="288" y="305">Won civil war;</text><text x="288" y="318">PRC, 1 Oct 1949</text>
<text x="415" y="305">Won civil war; took</text><text x="415" y="318">Phnom Penh, 1975</text>
</g>
</svg>`;

const linkSvg = `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Linking the factors: crisis leads to weak government failing, which creates desperation, which a leader exploits, leading to dictatorship; examples from Germany, China and Cambodia under each step; dictators then keep control with terror, propaganda and ideology">
<rect x="0" y="0" width="480" height="250" fill="#ffffff"/>
<text x="240" y="20" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">Linking the factors</text>
<rect x="4" y="34" width="84" height="40" rx="6" fill="#fecaca" stroke="#1f2937"/>
<text x="46" y="58" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Crisis</text>
<rect x="101" y="34" width="84" height="40" rx="6" fill="#fde68a" stroke="#1f2937"/>
<text x="143" y="51" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">Weak govt</text>
<text x="143" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">fails</text>
<rect x="198" y="34" width="84" height="40" rx="6" fill="#e2e8f0" stroke="#1f2937"/>
<text x="240" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">Desperation</text>
<rect x="295" y="34" width="84" height="40" rx="6" fill="#c7d2fe" stroke="#1f2937"/>
<text x="337" y="51" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">Leader</text>
<text x="337" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">exploits it</text>
<rect x="392" y="34" width="84" height="40" rx="6" fill="#bae6fd" stroke="#1f2937" stroke-width="1.5"/>
<text x="434" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">Dictatorship</text>
<g stroke="#334155" stroke-width="2">
<line x1="88" y1="54" x2="95" y2="54"/><line x1="185" y1="54" x2="192" y2="54"/><line x1="282" y1="54" x2="289" y2="54"/><line x1="379" y1="54" x2="386" y2="54"/>
</g>
<g fill="#334155">
<polygon points="95,49 95,59 101,54"/><polygon points="192,49 192,59 198,54"/><polygon points="289,49 289,59 295,54"/><polygon points="386,49 386,59 392,54"/>
</g>
<g font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">
<text x="46" y="94">Ger: Depression</text><text x="46" y="109">Chi: Japan invades</text><text x="46" y="124">Cam: US bombing</text>
<text x="143" y="94">Ger: rule by decree</text><text x="143" y="109">Chi: corrupt GMD</text><text x="143" y="124">Cam: Lon Nol</text>
<text x="240" y="94">Ger: 6m jobless</text><text x="240" y="109">Chi: inflation</text><text x="240" y="124">Cam: refugees</text>
<text x="337" y="94">Ger: Hitler</text><text x="337" y="109">Chi: Mao</text><text x="337" y="124">Cam: Pol Pot</text>
<text x="434" y="94">Ger: 1933–34</text><text x="434" y="109">Chi: 1949</text><text x="434" y="124">Cam: 1975</text>
</g>
<rect x="60" y="160" width="360" height="56" rx="8" fill="#f1f5f9" stroke="#334155" stroke-dasharray="4 3"/>
<text x="240" y="182" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Then: keeping control</text>
<text x="240" y="200" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">terror · propaganda · ideology · control of the young</text>
<line x1="472" y1="74" x2="472" y2="188" stroke="#334155" stroke-width="2"/>
<line x1="472" y1="188" x2="426" y2="188" stroke="#334155" stroke-width="2"/>
<polygon points="426,183 426,193 420,188" fill="#334155"/>
<text x="240" y="240" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">A strong answer explains the arrows, not just the boxes.</text>
</svg>`;

export const extras: TopicExtras = {
  hook: "Hitler, Mao and Pol Pot were very different men — a spellbinding speaker, a peasant-army general and a secretive schoolteacher. Yet all three rose after war, collapse and failing governments. Coincidence, or a pattern you can use to explain history?",
  didYouKnow: [
    "Hitler never won a majority in a free election. The Nazis' best result was about 37% of the vote in July 1932 — he became Chancellor in January 1933 through a deal among Germany's elites.",
    "In 1932 the Reichstag passed only 5 laws, while President Hindenburg issued 66 emergency decrees under Article 48. Germany was being run without its parliament before Hitler took over.",
    "The word 'totalitarian' was first used in the 1920s by Italian opponents of Mussolini as an insult. Mussolini then adopted it proudly to describe his own state.",
    "Quotations from Chairman Mao — the 'Little Red Book' — was printed in hundreds of millions of copies in the 1960s; some estimates put the total at over a billion.",
    "Pol Pot was so secretive that when 'Pol Pot' became Prime Minister of Democratic Kampuchea in 1976, outside experts were not sure who he was. Only later was he confirmed to be Saloth Sar.",
    "Hannah Arendt, whose book The Origins of Totalitarianism (1951) shaped how historians compare dictatorships, was herself briefly arrested by the Gestapo in 1933 before fleeing Germany.",
  ],
  activities: [
    {
      title: "Diamond nine: rank the causes",
      emoji: "💎",
      materials: ["A sheet of paper", "Scissors", "Coloured pens or pencils (four colours)", "A table to lay cards on"],
      steps: [
        "Cut out nine cards and write one cause on each: Depression 1929; Article 48 rule by decree; Hitler's speeches and propaganda; Japan's invasion of China 1937; corrupt GMD government; Mao's peasant strategy; US bombing of Cambodia 1969–73; Lon Nol's coup 1970; help from North Vietnam and China.",
        "Colour-code each card: red = crisis, yellow = weak government, blue = leadership, green = outside support.",
        "Arrange the cards in a diamond: 1 at the top (most important), then 2, 3, 2, and 1 at the bottom (least important).",
        "Look at the colours. Which colour is nearest the top? Does the same colour win for every country?",
        "Pick two cards that touch and say out loud how one **caused or worsened** the other (for example, the Depression → rule by decree).",
        "Write a two-sentence judgement: 'The most important reason dictators came to power was … because … . However, …'",
      ],
      history: "A diamond nine forces you to **prioritise** causes rather than list them, and colour-coding shows the categories historians use (crisis, weak government, leadership, outside support). Spotting the links between cards is the key move for top marks in 'how far do you agree?' answers about why dictators rose.",
    },
    {
      title: "Build a democracy–dictatorship washing line",
      emoji: "🧺",
      materials: ["About 2 metres of string", "Clothes pegs", "Index cards or paper squares", "A pen"],
      steps: [
        "Tie the string across a room. Label one end 'Democracy' and the other 'Totalitarian dictatorship'.",
        "Write eight feature cards: free elections, free press, independent courts, opposition parties allowed, parliament makes the laws, secret police and terror, cult of personality, one ideology taught in schools.",
        "Write five case-study cards: Britain 1928, Weimar Germany 1928, Germany 1934, China 1966, Cambodia 1976.",
        "For each case study, decide which features it had. Peg the feature cards under it, then peg the case study where you think it belongs on the line.",
        "Now walk Germany from 1928 to 1934: remove its democratic features one at a time, in the order they disappeared (rule by decree from 1930; civil rights suspended February 1933; Enabling Act March 1933; other parties banned July 1933). Move its card along the line as you go.",
        "Discuss: Cambodia in 1976 had no cult of personality — its leaders hid behind 'Angkar'. Does that make it any less of a dictatorship?",
      ],
      history: "Definitions become real when you test them on examples. This activity shows that dictatorship is a **spectrum**, that democracies can be dismantled step by step (as Germany's was in 1930–34), and that no single feature defines a dictatorship — a key idea for comparing Hitler, Mao and Pol Pot.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Three roads to dictatorship",
      svg: compareSvg,
      caption: "Read across each row to compare the three case studies. Crisis and weak government appear in all three; the leaders were very different, and only Hitler was handed power — Mao and Pol Pot won civil wars.",
    },
    {
      title: "Linking the factors",
      svg: linkSvg,
      caption: "Factors work together: a crisis exposes a weak government, desperation grows, and a leader exploits the opening. Once in power, dictators keep control with terror, propaganda and ideology.",
    },
  ],
  story: {
    title: "The deal at the banker's house",
    story: "In November 1932 the Nazi vote fell by about two million. The party was short of money, and Hitler's chance of power seemed to be slipping away.\n\nThen, on 4 January 1933, Franz von Papen — the former Chancellor who had lost his job to General von Schleicher — met Hitler secretly at the Cologne home of the banker Kurt von Schröder. Papen wanted revenge on Schleicher and thought he could use Hitler's mass support for his own ends. Over the next weeks he worked on the ageing President Hindenburg and his son Oskar.\n\nOn 30 January 1933 Hitler was appointed Chancellor, with only three Nazis in the cabinet and Papen as his deputy. Papen believed Hitler was boxed in. Within eighteen months Hitler had made himself Führer. Votes mattered — but so did the miscalculations of a few powerful men.",
  },
};
