import type { TopicExtras } from "../types.ts";

const timelineSvg = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of King John's reign from 1199 to 1216, with events coloured by whether they involved France, the Church or the barons">
<rect x="0" y="0" width="480" height="300" fill="#ffffff"/>
<text x="240" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">King John's road to Runnymede, 1199–1216</text>
<line x1="30" y1="150" x2="450" y2="150" stroke="#334155" stroke-width="3"/>
<line x1="30" y1="150" x2="30" y2="104" stroke="#334155" stroke-width="1"/>
<circle cx="30" cy="150" r="6" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/>
<text x="26" y="88" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">1199</text>
<text x="26" y="101" font-family="sans-serif" font-size="11" fill="#1f2937">John crowned</text>
<line x1="129" y1="150" x2="129" y2="174" stroke="#334155" stroke-width="1"/>
<circle cx="129" cy="150" r="6" fill="#bae6fd" stroke="#1f2937" stroke-width="1.5"/>
<text x="129" y="187" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">1203</text>
<text x="129" y="200" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Arthur vanishes</text>
<line x1="154" y1="150" x2="154" y2="124" stroke="#334155" stroke-width="1"/>
<circle cx="154" cy="150" r="6" fill="#bae6fd" stroke="#1f2937" stroke-width="1.5"/>
<text x="154" y="108" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">1204</text>
<text x="154" y="121" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Normandy lost</text>
<line x1="252" y1="150" x2="252" y2="174" stroke="#334155" stroke-width="1"/>
<circle cx="252" cy="150" r="6" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/>
<text x="252" y="187" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">1208</text>
<text x="252" y="200" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Interdict</text>
<line x1="277" y1="150" x2="277" y2="124" stroke="#334155" stroke-width="1"/>
<circle cx="277" cy="150" r="6" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/>
<text x="277" y="108" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">1209</text>
<text x="277" y="121" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Excommunicated</text>
<line x1="376" y1="150" x2="376" y2="174" stroke="#334155" stroke-width="1"/>
<circle cx="376" cy="150" r="6" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/>
<text x="376" y="187" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">1213</text>
<text x="376" y="200" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Submits to Pope</text>
<line x1="400" y1="150" x2="400" y2="124" stroke="#334155" stroke-width="1"/>
<circle cx="400" cy="150" r="6" fill="#bae6fd" stroke="#1f2937" stroke-width="1.5"/>
<text x="400" y="108" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">1214</text>
<text x="400" y="121" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Bouvines</text>
<line x1="425" y1="150" x2="425" y2="214" stroke="#334155" stroke-width="1"/>
<circle cx="425" cy="150" r="6" fill="#fecaca" stroke="#1f2937" stroke-width="1.5"/>
<text x="452" y="227" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="end">1215</text>
<text x="452" y="240" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end">Magna Carta</text>
<line x1="450" y1="150" x2="450" y2="84" stroke="#334155" stroke-width="1"/>
<circle cx="450" cy="150" r="6" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/>
<text x="454" y="62" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="end">1216</text>
<text x="454" y="75" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end">John dies</text>
<rect x="40" y="268" width="14" height="14" fill="#bae6fd" stroke="#1f2937"/>
<text x="60" y="279" font-family="sans-serif" font-size="11" fill="#1f2937">France</text>
<rect x="130" y="268" width="14" height="14" fill="#fde68a" stroke="#1f2937"/>
<text x="150" y="279" font-family="sans-serif" font-size="11" fill="#1f2937">Church</text>
<rect x="220" y="268" width="14" height="14" fill="#fecaca" stroke="#1f2937"/>
<text x="240" y="279" font-family="sans-serif" font-size="11" fill="#1f2937">Barons</text>
<rect x="310" y="268" width="14" height="14" fill="#c7d2fe" stroke="#1f2937"/>
<text x="330" y="279" font-family="sans-serif" font-size="11" fill="#1f2937">The crown</text>
</svg>`;

const survivalSvg = `<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart drawn to scale: the 1215 Magna Carta had 63 clauses, the 1225 reissue had 37, and 3 are still law in England and Wales today">
<rect x="0" y="0" width="480" height="220" fill="#ffffff"/>
<text x="240" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">How much of Magna Carta survived?</text>
<text x="104" y="66" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="end">1215 charter</text>
<rect x="110" y="50" width="315" height="26" fill="#c7d2fe" stroke="#334155"/>
<text x="431" y="68" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">63</text>
<text x="104" y="114" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="end">1225 reissue</text>
<rect x="110" y="98" width="185" height="26" fill="#fde68a" stroke="#334155"/>
<text x="301" y="116" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">37</text>
<text x="104" y="162" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="end">Still law today</text>
<rect x="110" y="146" width="15" height="26" fill="#bbf7d0" stroke="#334155"/>
<text x="131" y="164" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">3</text>
<line x1="110" y1="42" x2="110" y2="180" stroke="#334155" stroke-width="1.5"/>
<text x="240" y="204" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Number of clauses (bars drawn to scale: 5 units of width per clause)</text>
</svg>`;

export const extras: TopicExtras = {
  hook: "In 1215 a king's own barons forced him to accept, in writing, that he was not above the law. He broke his promise within weeks — so why are three of its clauses still law in England more than 800 years later?",
  didYouKnow: [
    "John never *signed* Magna Carta. Like other medieval charters, it was authenticated with the king's Great Seal pressed in wax.",
    "Only four copies of the 1215 Magna Carta survive: two in the British Library, one at Lincoln and one at Salisbury Cathedral.",
    "Magna Carta lasted about ten weeks. On 24 August 1215 Pope Innocent III declared it null and void — John had become the Pope's vassal in 1213, so the Pope protected him.",
    "As the youngest son of Henry II, John was nicknamed 'Lackland', because he was not expected to inherit much territory.",
    "In 1213 John surrendered England to the Pope as a fief and agreed to pay 1,000 marks a year — turning his worst enemy into his protector.",
    "English silver pennies made during John's reign still carried the name 'HENRICVS' — the coin design of 1180 was kept, unchanged, through the reigns of Richard I and John.",
  ],
  activities: [
    {
      title: "Seal your own charter",
      emoji: "📜",
      materials: ["A sheet of paper (stain it with a cold tea bag for an old look, if you like)", "A pen", "A lump of modelling clay or playdough", "A coin or bottle cap", "A short piece of string"],
      steps: [
        "Play the barons: list four or five things a 'ruler' at home does that feel unfair (bedtimes changed without warning, chores handed out unequally…).",
        "Turn each grievance into a clause that starts 'No…' or 'The ruler shall not…', as Magna Carta does. Number your clauses.",
        "Negotiate with a family member playing the king. They may accept, reword or refuse each clause — keep a note of what changed.",
        "Add a 'security clause': who will enforce the charter if the ruler breaks it? See whether the 'king' will accept it.",
        "Seal it: thread the string through a hole at the bottom, wrap clay around the string and press the coin into it as your seal.",
        "A week later, check which clauses are still being kept. Which kind lasted — the general principles or the very specific ones?",
      ],
      history: "Magna Carta was a peace treaty negotiated under pressure, not a statement of rights handed down by a generous king. It was sealed, not signed. Like your charter, its very specific crisis clauses (hostages, the 25 barons) vanished fast, while the general principles — no one punished without the law, justice not for sale — survived and grew in importance.",
    },
    {
      title: "Pressure cups",
      emoji: "🥤",
      materials: ["Three cups or glasses labelled Barons, Church and France", "A bag of dried rice, lentils or beans", "A tablespoon", "Ten small cards or scraps of paper"],
      steps: [
        "Write one of John's decisions on each card: crowned 1199; marries Isabella 1200; Arthur vanishes 1203; loses Normandy 1204; refuses Langton 1207; tax of a thirteenth 1207; interdict 1208; de Braose family destroyed 1210; submits to the Pope 1213; Bouvines and a record scutage 1214.",
        "Shuffle the cards, then put them back in date order — check with the timeline in this guide.",
        "Read each card aloud. Decide together which group it angered, and add one to three spoonfuls to that cup. If a decision calmed a group down, take some out.",
        "Explain each choice out loud: *why* would this anger that group?",
        "At the end, compare the cups. Which overflowed? Which was nearly empty by 1215?",
      ],
      history: "This models how long-term causes build up until a trigger tips the balance. By 1215 the Church had been calmed by John's submission and France had already won — it was the barons, squeezed for money year after year and shocked by defeat in 1214, who forced Magna Carta.",
    },
  ],
  bonusDiagrams: [
    {
      title: "King John's road to Runnymede",
      svg: timelineSvg,
      caption: "John's troubles came in waves: first France (1200–1204), then the Church (1205–1213), and finally the barons, who forced Magna Carta in 1215.",
    },
    {
      title: "How much of Magna Carta survived?",
      svg: survivalSvg,
      caption: "Most clauses dealt with the problems of 1215 and were dropped or rewritten. The three still in force protect the English Church, the City of London's liberties, and justice (the old clauses 39 and 40).",
    },
  ],
  story: {
    title: "The charter that changed sides",
    story: "In October 1216 King John died at Newark in the middle of a civil war he was losing. A French prince, Louis, held London, and rebel barons controlled much of England. John's heir, Henry, was nine years old.\n\nHis regent was William Marshal, a knight of about 70 who had served the Angevin kings all his life. Within weeks, Marshal did something surprising: he reissued Magna Carta in the boy king's name — the very charter John had begged the Pope to cancel, now minus the clause letting 25 barons make war on the king.\n\nIn May 1217 the old knight fought in the thick of the Battle of Lincoln, and by September Louis had agreed to go home. The charter the rebels had forced on John had become the royalists' way of winning the peace.",
  },
};
