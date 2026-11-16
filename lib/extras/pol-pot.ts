import type { TopicExtras } from "../types.ts";

const mapSvg = `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic map of Cambodia and its neighbours in the Vietnam War era: Thailand to the west, Laos to the north-east, Vietnam to the east, the Gulf of Thailand to the south-west; the Ho Chi Minh trail running down through Laos and eastern Cambodia; Phnom Penh, the Tonle Sap lake, the Mekong river, Siem Reap, Battambang, Sihanoukville and Anlong Veng marked">
<rect x="0" y="0" width="480" height="340" fill="#ffffff"/>
<polygon points="0,248 122,212 140,225 168,262 195,276 232,288 252,340 0,340" fill="#bae6fd"/>
<text x="70" y="305" font-family="sans-serif" font-size="11" font-style="italic" fill="#1f2937">Gulf of Thailand</text>
<line x1="255" y1="78" x2="236" y2="0" stroke="#334155" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="360" y1="85" x2="412" y2="0" stroke="#334155" stroke-width="1" stroke-dasharray="3 3"/>
<polygon points="140,95 255,78 360,85 378,150 372,215 340,250 300,262 232,288 195,276 168,262 140,225 122,180 120,130" fill="#fde68a" stroke="#1f2937" stroke-width="2"/>
<ellipse cx="210" cy="165" rx="34" ry="11" transform="rotate(35 210 165)" fill="#bae6fd" stroke="#334155" stroke-width="1"/>
<line x1="236" y1="183" x2="275" y2="215" stroke="#0369a1" stroke-width="1.5"/>
<polyline points="335,0 330,40 322,85 318,115 306,160 276,214 300,250 330,300 345,340" fill="none" stroke="#0369a1" stroke-width="2.5"/>
<text x="321" y="140" font-family="sans-serif" font-size="10" font-style="italic" fill="#0369a1">Mekong</text>
<polyline points="398,0 372,40 364,82 370,125 366,175 362,215 372,250" fill="none" stroke="#b91c1c" stroke-width="2" stroke-dasharray="6 4"/>
<text x="386" y="110" font-family="sans-serif" font-size="10" fill="#b91c1c">Ho Chi Minh</text>
<text x="386" y="122" font-family="sans-serif" font-size="10" fill="#b91c1c">trail (schematic)</text>
<text x="55" y="120" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1f2937">THAILAND</text>
<text x="292" y="36" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1f2937">LAOS</text>
<text x="402" y="200" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1f2937">VIETNAM</text>
<text x="200" y="252" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1f2937">CAMBODIA</text>
<circle cx="276" cy="214" r="5" fill="#fecaca" stroke="#1f2937" stroke-width="1.5"/>
<text x="286" y="222" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937">Phnom Penh</text>
<circle cx="200" cy="133" r="3.5" fill="#1f2937"/>
<text x="206" y="130" font-family="sans-serif" font-size="10" fill="#1f2937">Siem Reap (Angkor)</text>
<circle cx="158" cy="170" r="3.5" fill="#1f2937"/>
<text x="158" y="186" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">Battambang</text>
<circle cx="215" cy="96" r="3.5" fill="#1f2937"/>
<text x="221" y="108" font-family="sans-serif" font-size="10" fill="#1f2937">Anlong Veng</text>
<circle cx="180" cy="268" r="3.5" fill="#1f2937"/>
<text x="172" y="283" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="end">Sihanoukville</text>
<circle cx="384" cy="262" r="3.5" fill="#1f2937"/>
<text x="391" y="266" font-family="sans-serif" font-size="10" fill="#1f2937">Saigon</text>
<circle cx="40" cy="205" r="3.5" fill="#1f2937"/>
<text x="40" y="198" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">Bangkok</text>
<text x="455" y="30" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">N</text>
<line x1="455" y1="58" x2="455" y2="36" stroke="#1f2937" stroke-width="2"/>
<polygon points="450,42 460,42 455,34" fill="#1f2937"/>
<text x="470" y="332" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="end">Schematic, not to scale</text>
</svg>`;

const chainSvg = `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cause-and-consequence chain: the Vietnam War next door and secret US bombing destroyed villages and created anger; North Vietnamese bases angered Cambodia's army, leading to Lon Nol's coup in 1970; Sihanouk then backed the Khmer Rouge; civil war and a weak, corrupt government, plus help from North Vietnam and China, led to the Khmer Rouge capturing Phnom Penh on 17 April 1975">
<rect x="0" y="0" width="480" height="340" fill="#ffffff"/>
<text x="240" y="22" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">How war opened the door, 1965–1975</text>
<text x="110" y="36" font-family="sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">War</text>
<text x="370" y="36" font-family="sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Politics</text>
<rect x="20" y="42" width="180" height="44" rx="6" fill="#bae6fd" stroke="#1f2937"/>
<text x="110" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">Vietnam War next door:</text>
<text x="110" y="76" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">N. Vietnam bases and trail</text>
<rect x="20" y="110" width="180" height="44" rx="6" fill="#bae6fd" stroke="#1f2937"/>
<text x="110" y="128" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">Secret US bombing</text>
<text x="110" y="144" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">March 1969 – August 1973</text>
<rect x="20" y="178" width="180" height="44" rx="6" fill="#bae6fd" stroke="#1f2937"/>
<text x="110" y="196" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">Villages destroyed:</text>
<text x="110" y="212" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">anger, refugees, recruits</text>
<rect x="280" y="42" width="180" height="44" rx="6" fill="#fde68a" stroke="#1f2937"/>
<text x="370" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">Lon Nol's coup</text>
<text x="370" y="76" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">18 March 1970</text>
<rect x="280" y="110" width="180" height="44" rx="6" fill="#fde68a" stroke="#1f2937"/>
<text x="370" y="128" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">Sihanouk backs the</text>
<text x="370" y="144" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Khmer Rouge: peasants join</text>
<rect x="280" y="178" width="180" height="44" rx="6" fill="#fde68a" stroke="#1f2937"/>
<text x="370" y="196" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">Civil war 1970–75:</text>
<text x="370" y="212" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">weak, corrupt government</text>
<rect x="165" y="236" width="150" height="40" rx="6" fill="#c7d2fe" stroke="#1f2937"/>
<text x="240" y="252" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">Outside help: North</text>
<text x="240" y="268" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Vietnam and China</text>
<rect x="20" y="292" width="440" height="36" rx="6" fill="#fecaca" stroke="#1f2937" stroke-width="1.5"/>
<text x="240" y="315" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">17 April 1975: the Khmer Rouge capture Phnom Penh</text>
<line x1="110" y1="86" x2="110" y2="104" stroke="#334155" stroke-width="2"/>
<polygon points="105,104 115,104 110,110" fill="#334155"/>
<line x1="110" y1="154" x2="110" y2="172" stroke="#334155" stroke-width="2"/>
<polygon points="105,172 115,172 110,178" fill="#334155"/>
<line x1="110" y1="222" x2="110" y2="286" stroke="#334155" stroke-width="2"/>
<polygon points="105,286 115,286 110,292" fill="#334155"/>
<line x1="370" y1="86" x2="370" y2="104" stroke="#334155" stroke-width="2"/>
<polygon points="365,104 375,104 370,110" fill="#334155"/>
<line x1="370" y1="154" x2="370" y2="172" stroke="#334155" stroke-width="2"/>
<polygon points="365,172 375,172 370,178" fill="#334155"/>
<line x1="370" y1="222" x2="370" y2="286" stroke="#334155" stroke-width="2"/>
<polygon points="365,286 375,286 370,292" fill="#334155"/>
<line x1="240" y1="276" x2="240" y2="286" stroke="#334155" stroke-width="2"/>
<polygon points="235,286 245,286 240,292" fill="#334155"/>
<line x1="200" y1="64" x2="274" y2="64" stroke="#334155" stroke-width="2"/>
<polygon points="274,59 274,69 280,64" fill="#334155"/>
<text x="240" y="58" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">army angry</text>
</svg>`;

export const extras: TopicExtras = {
  hook: "In April 1975 Cambodia's capital — a city swollen to about two million people — was emptied in a few days, and for nearly four years the country had no money, no markets and no schools. How could a small, secretive rebel movement take over a whole nation?",
  didYouKnow: [
    "Pol Pot was born Saloth Sar. He went to Paris on a scholarship in 1949 to study radio electronics, failed his exams, lost the scholarship and came home in 1953 — but in Paris he had joined the French Communist Party. Several future Khmer Rouge leaders, including Ieng Sary and Khieu Samphan, also studied in France.",
    "The Khmer Rouge hid even their own party. For more than two years after taking power, Cambodians were only told they were ruled by 'Angkar' — 'the Organisation'. Pol Pot first announced publicly that a Communist Party was in charge in September 1977.",
    "The archive of S-21 (Tuol Sleng) prison — prisoner photographs, records and forced 'confessions' — was added to UNESCO's Memory of the World Register in 2009, so that the evidence is protected for the future.",
    "The ECCC allowed survivors to take part in trials as 'civil parties'. Nearly 4,000 survivors joined the court's second major case against Nuon Chea and Khieu Samphan, so victims' voices became part of the official record.",
    "Since 2018, Cambodia has marked 20 May as a National Day of Remembrance for the victims of the Khmer Rouge regime.",
    "In the 1980s Singapore and its ASEAN neighbours led the diplomatic campaign against Vietnam's occupation of Cambodia — one of the strands of the long peace process that ended with the Paris Peace Agreements of 1991.",
  ],
  activities: [
    {
      title: "A reflective timeline: how conditions built up",
      emoji: "🧵",
      materials: ["A long strip of paper (or tape several A4 sheets together)", "A ruler and pencil", "Sticky notes or small paper squares in two colours", "Pens"],
      steps: [
        "Draw a line along the strip and mark these years at even spacing: 1953, 1963, 1967, 1969, 1970, 1973, 1975, 1979, 1998, 2010, 2018.",
        "Above the line, use one colour of sticky note for **events** (independence 1953; secret US bombing begins 1969; Lon Nol's coup 1970; the Khmer Rouge take Phnom Penh 1975; Vietnamese forces take Phnom Penh 1979; Pol Pot dies 1998; Duch convicted 2010; genocide verdict 2018).",
        "Below the line, use the other colour for **conditions** — the pressures that built up: war next door, bombing, refugees, a weak and corrupt government, outside help for the Khmer Rouge. Draw arrows to show which conditions made later events possible.",
        "Look at 1970–75. Write one sentence: which condition do you think did most to open the door to the Khmer Rouge, and why?",
        "Finish the line after 1979. Under the years 1998–2018, write what survivors and the court were trying to achieve: truth, justice and remembering. Notice how long that took.",
        "Leave a blank space at the very end. Write a short sentence of your own about why it matters to remember the people who lived and died through these years.",
      ],
      history: "A timeline turns a jumble of facts into **chronology**, and separating events from conditions trains **causation**: the Khmer Rouge did not appear from nowhere — war, bombing, a coup and a weak government built up the conditions for them. Extending the line past 1979 shows that the history did not end with the regime: survivors spent decades fighting for justice and memory.",
    },
    {
      title: "How do we remember? Reading a memorial",
      emoji: "🕯️",
      materials: ["A notebook and pencil", "A visit to the Civilian War Memorial on Beach Road, Singapore (or photos of it from the National Heritage Board website)", "Photos of the Tuol Sleng Genocide Museum and the Choeung Ek memorial from their official websites"],
      steps: [
        "Visit or look at Singapore's Civilian War Memorial, unveiled in 1967 for civilians who died during the Japanese Occupation (1942–45). Sketch its shape and note what you see.",
        "Find out what its four tall columns stand for (the shared suffering of Singapore's different communities). Note: who is remembered, and how does the design make you feel?",
        "Now look at photos of the Tuol Sleng Genocide Museum in Phnom Penh. It is the real S-21 prison, kept as it was found, with the photographs of prisoners on the walls. Why might survivors want the actual building kept, rather than a new monument?",
        "Look at the memorial stupa at Choeung Ek. Make a four-column table with the headings: Memorial, Who it remembers, How it remembers, What visitors learn. Fill in a row for each of the three memorials.",
        "With a parent, read a short extract of a survivor's testimony from the Documentation Center of Cambodia (DC-Cam) website or Vann Nath's memoir. What does one person's story show that a death toll cannot?",
        "Finish with two sentences: what makes a memorial respectful, and why do memorials name or show victims as individual people?",
      ],
      history: "Historians study not only what happened but how societies **remember** it. Memorials and survivors' testimony are evidence too: they show what a community chose to remember and why. Comparing a Singapore memorial with Cambodia's sites links two parts of Asia's twentieth century and shows why naming victims as people — not numbers — matters.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Cambodia and its neighbours",
      svg: mapSvg,
      caption: "Cambodia sat next to the Vietnam War. North Vietnam's supply route (the Ho Chi Minh trail) ran through Laos and eastern Cambodia, which is why the USA bombed Cambodia from 1969. After 1979 the Khmer Rouge survived near the Thai border; Pol Pot died at Anlong Veng in 1998.",
    },
    {
      title: "How war opened the door, 1965–1975",
      svg: chainSvg,
      caption: "No single cause brought the Khmer Rouge to power. War and bombing (left) and political collapse (right), plus outside help, combined. Try covering one box: would the chain still reach 1975?",
    },
  ],
  story: {
    title: "The painter who would not forget",
    story: "Vann Nath was a young artist from Battambang. At the end of 1977 he was arrested, and in January 1978 he was taken to S-21, the secret prison in Phnom Penh. Of the many thousands of people held there, only a handful survived. Vann Nath lived because the guards discovered he could paint, and set him to work making portraits of Pol Pot.\n\nIn January 1979, as Vietnamese forces reached the city, he got away. Later he went back to the prison — by then the Tuol Sleng Genocide Museum — and painted what he had witnessed, so that the world would know what happened there. His paintings still hang in the museum. In 2009 he gave evidence at the trial of Duch, S-21's commander. He spent the rest of his life, until his death in 2011, making sure the people of S-21 would not be forgotten.",
  },
};
