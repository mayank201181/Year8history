import type { TopicGuide } from "../../types.ts";

// Sensitive topic: the Khmer Rouge genocide (1975–79). Sober, factual, age-appropriate.
// Death tolls and prisoner numbers are estimates and are presented as such.

const mapSvg = `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic map of Cambodia around 1970, bordered by Thailand to the west, Laos to the north-east and South Vietnam to the east and south-east. It shows Phnom Penh, the Tonle Sap lake, the Mekong river, the port of Sihanoukville on the Gulf of Thailand, the Ho Chi Minh trail running south through Laos and eastern Cambodia, and the heavily bombed eastern border region."><rect x="0" y="0" width="480" height="340" fill="#bae6fd"/><polygon points="0,0 240,0 250,60 260,100 170,120 160,165 170,210 150,230 120,250 0,250" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><polygon points="240,0 400,0 400,60 380,110 375,130 330,100 260,100 250,60" fill="#e5e7eb" stroke="#334155" stroke-width="1.5"/><polygon points="400,0 470,0 440,80 470,170 450,250 400,300 350,320 320,320 300,300 265,285 300,255 355,235 385,185 375,130 380,110 400,60" fill="#fde68a" stroke="#334155" stroke-width="1.5"/><polygon points="170,120 260,100 330,100 375,130 385,185 355,235 300,255 265,285 225,275 200,245 170,210 160,165" fill="#c7d2fe" stroke="#1f2937" stroke-width="2.5"/><polygon points="330,100 375,130 385,185 355,235 318,248 330,190 338,140" fill="#fecaca" stroke="#b91c1c" stroke-width="1" stroke-dasharray="3 3"/><ellipse cx="225" cy="165" rx="26" ry="11" fill="#bae6fd" stroke="#334155" stroke-width="1"/><path d="M300,0 L290,40 L320,80 L335,105 L330,150 L315,190 L295,215 L305,250 L330,290 L345,320" fill="none" stroke="#3b82f6" stroke-width="2.5"/><path d="M440,4 L405,40 L385,90 L372,130 L365,170 L352,215 L362,262" fill="none" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="7 4"/><circle cx="293" cy="215" r="5" fill="#1f2937"/><circle cx="202" cy="246" r="4" fill="#1f2937"/><text x="80" y="130" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">THAILAND</text><text x="345" y="45" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">LAOS</text><text x="255" y="135" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">CAMBODIA</text><text x="419" y="195" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">SOUTH</text><text x="419" y="209" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">VIETNAM</text><text x="225" y="190" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Tonle Sap</text><text x="286" y="219" font-size="11" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#1f2937">Phnom Penh</text><text x="196" y="264" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">Sihanoukville (port)</text><text x="322" y="165" font-size="10" font-style="italic" font-family="sans-serif" fill="#1f2937">Mekong</text><text x="95" y="282" font-size="11" font-style="italic" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Gulf of Thailand</text><line x1="10" y1="305" x2="40" y2="305" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="7 4"/><text x="46" y="309" font-size="10" font-family="sans-serif" fill="#1f2937">Ho Chi Minh trail (supplies from North Vietnam)</text><rect x="10" y="316" width="30" height="11" fill="#fecaca" stroke="#b91c1c" stroke-width="1" stroke-dasharray="3 3"/><text x="46" y="326" font-size="10" font-family="sans-serif" fill="#1f2937">Border areas heavily bombed by the USA</text></svg>`;

const factorsSvg = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Factor diagram: six conditions point to the centre box, Khmer Rouge take Phnom Penh in April 1975. Top row: war spills over from Vietnam; US bombing 1969 to 1973; rural poverty. Bottom row: weak Lon Nol rule; Sihanouk backs the Khmer Rouge; outside support from North Vietnam and China. A dashed arrow links the Lon Nol coup to Sihanouk's backing."><defs><marker id="pp-fac-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs><rect x="5" y="15" width="140" height="56" rx="6" fill="#fde68a" stroke="#334155"/><text x="75" y="38" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">War spills over</text><text x="75" y="55" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">NV bases and the trail</text><rect x="170" y="15" width="140" height="56" rx="6" fill="#fde68a" stroke="#334155"/><text x="240" y="38" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">US bombing 1969–73</text><text x="240" y="55" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">grief, anger, refugees</text><rect x="335" y="15" width="140" height="56" rx="6" fill="#fde68a" stroke="#334155"/><text x="405" y="38" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Rural poverty</text><text x="405" y="55" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">countryside vs city gap</text><rect x="150" y="135" width="180" height="50" rx="6" fill="#fecaca" stroke="#1f2937" stroke-width="2"/><text x="240" y="156" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Khmer Rouge take</text><text x="240" y="173" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Phnom Penh, April 1975</text><rect x="5" y="249" width="140" height="56" rx="6" fill="#c7d2fe" stroke="#334155"/><text x="75" y="272" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Weak Lon Nol rule</text><text x="75" y="289" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">corrupt, US-dependent</text><rect x="170" y="249" width="140" height="56" rx="6" fill="#c7d2fe" stroke="#334155"/><text x="240" y="272" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Sihanouk backs KR</text><text x="240" y="289" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">peasants follow the king</text><rect x="335" y="249" width="140" height="56" rx="6" fill="#c7d2fe" stroke="#334155"/><text x="405" y="272" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Outside support</text><text x="405" y="289" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">North Vietnam and China</text><line x1="90" y1="71" x2="180" y2="133" stroke="#334155" stroke-width="1.5" marker-end="url(#pp-fac-arrow)"/><line x1="240" y1="71" x2="240" y2="133" stroke="#334155" stroke-width="1.5" marker-end="url(#pp-fac-arrow)"/><line x1="390" y1="71" x2="300" y2="133" stroke="#334155" stroke-width="1.5" marker-end="url(#pp-fac-arrow)"/><line x1="90" y1="249" x2="180" y2="187" stroke="#334155" stroke-width="1.5" marker-end="url(#pp-fac-arrow)"/><line x1="240" y1="249" x2="240" y2="187" stroke="#334155" stroke-width="1.5" marker-end="url(#pp-fac-arrow)"/><line x1="390" y1="249" x2="300" y2="187" stroke="#334155" stroke-width="1.5" marker-end="url(#pp-fac-arrow)"/><line x1="145" y1="277" x2="168" y2="277" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#pp-fac-arrow)"/><text x="10" y="110" font-size="10" font-style="italic" font-family="sans-serif" fill="#1f2937">Crisis (top row)</text><text x="10" y="232" font-size="10" font-style="italic" font-family="sans-serif" fill="#1f2937">Politics and allies</text></svg>`;

const tollSvg = `<svg viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar drawn to scale: Cambodia's population in 1975 was about 8 million. Historians estimate that 1.5 to 2 million people died under the Khmer Rouge, roughly one in five to one in four people."><text x="240" y="22" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Cambodia 1975–79: population and estimated deaths (to scale)</text><rect x="40" y="45" width="400" height="40" fill="#e5e7eb" stroke="#334155"/><rect x="40" y="45" width="75" height="40" fill="#334155"/><rect x="115" y="45" width="25" height="40" fill="#94a3b8"/><line x1="40" y1="85" x2="40" y2="92" stroke="#334155"/><line x1="140" y1="85" x2="140" y2="92" stroke="#334155"/><line x1="240" y1="85" x2="240" y2="92" stroke="#334155"/><line x1="340" y1="85" x2="340" y2="92" stroke="#334155"/><line x1="440" y1="85" x2="440" y2="92" stroke="#334155"/><text x="40" y="104" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">0</text><text x="140" y="104" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2 million</text><text x="240" y="104" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">4 million</text><text x="340" y="104" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">6 million</text><text x="440" y="104" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">8 million</text><text x="40" y="128" font-size="11" font-family="sans-serif" fill="#1f2937">Estimated deaths: 1.5–2 million</text><text x="440" y="128" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Population: about 8 million</text><rect x="40" y="145" width="12" height="12" fill="#334155"/><text x="58" y="155" font-size="10" font-family="sans-serif" fill="#1f2937">lower estimate (1.5 million)</text><rect x="230" y="145" width="12" height="12" fill="#94a3b8"/><text x="248" y="155" font-size="10" font-family="sans-serif" fill="#1f2937">range of estimates up to 2 million</text></svg>`;

const timelineSvg = `<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline drawn to scale from 1953 to 2018: independence 1953; Lon Nol coup March 1970; US bombing 1969 to 1973; Khmer Rouge take Phnom Penh 17 April 1975; Khmer Rouge rule 1975 to 1979; Vietnamese army takes Phnom Penh 7 January 1979; Paris Peace Agreements 1991; Pol Pot dies 1998; Duch convicted 2010; genocide verdict November 2018."><line x1="22" y1="100" x2="462" y2="100" stroke="#334155" stroke-width="2"/><rect x="133" y="93" width="26" height="14" fill="#fde68a" stroke="#334155" stroke-width="0.5"/><rect x="172" y="93" width="26" height="14" fill="#fecaca" stroke="#334155" stroke-width="0.5"/><circle cx="30" cy="100" r="4" fill="#c7d2fe" stroke="#1f2937"/><circle cx="140" cy="100" r="4" fill="#c7d2fe" stroke="#1f2937"/><circle cx="172" cy="100" r="4" fill="#c7d2fe" stroke="#1f2937"/><circle cx="198" cy="100" r="4" fill="#c7d2fe" stroke="#1f2937"/><circle cx="276" cy="100" r="4" fill="#c7d2fe" stroke="#1f2937"/><circle cx="321" cy="100" r="4" fill="#c7d2fe" stroke="#1f2937"/><circle cx="398" cy="100" r="4" fill="#c7d2fe" stroke="#1f2937"/><circle cx="450" cy="100" r="4" fill="#c7d2fe" stroke="#1f2937"/><line x1="30" y1="96" x2="30" y2="70" stroke="#334155"/><text x="24" y="64" font-size="10" font-weight="bold" font-family="sans-serif" fill="#1f2937">1953</text><text x="24" y="51" font-size="10" font-family="sans-serif" fill="#1f2937">Independence from France</text><line x1="172" y1="96" x2="172" y2="37" stroke="#334155"/><text x="172" y="31" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">17 Apr 1975</text><text x="172" y="18" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Khmer Rouge take Phnom Penh</text><line x1="276" y1="96" x2="276" y2="70" stroke="#334155"/><text x="276" y="64" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1991</text><text x="276" y="51" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Paris Peace Agreements</text><line x1="398" y1="96" x2="398" y2="37" stroke="#334155"/><text x="398" y="31" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2010</text><text x="398" y="18" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Duch convicted</text><line x1="140" y1="104" x2="140" y2="122" stroke="#334155"/><text x="140" y="134" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Mar 1970</text><text x="140" y="147" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Lon Nol coup</text><line x1="198" y1="104" x2="198" y2="160" stroke="#334155"/><text x="198" y="172" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">7 Jan 1979</text><text x="198" y="185" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Vietnamese army takes Phnom Penh</text><line x1="321" y1="104" x2="321" y2="122" stroke="#334155"/><text x="321" y="134" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1998</text><text x="321" y="147" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Pol Pot dies, never tried</text><line x1="450" y1="104" x2="450" y2="160" stroke="#334155"/><text x="470" y="172" font-size="10" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#1f2937">Nov 2018</text><text x="470" y="185" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">Genocide verdict</text><rect x="30" y="200" width="14" height="10" fill="#fde68a" stroke="#334155" stroke-width="0.5"/><text x="50" y="209" font-size="10" font-family="sans-serif" fill="#1f2937">US bombing 1969–73</text><rect x="200" y="200" width="14" height="10" fill="#fecaca" stroke="#334155" stroke-width="0.5"/><text x="220" y="209" font-size="10" font-family="sans-serif" fill="#1f2937">Khmer Rouge rule 1975–79</text></svg>`;

export const guide: TopicGuide = {
  id: "pol-pot",
  title: "Pol Pot and the Khmer Rouge",
  strand: "Dictatorships",
  icon: "🕯️",
  summary: "How war, bombing and a collapsing government opened the door to one of the 20th century's worst crimes — and how Cambodia remembers.",
  intro:
    "Between 1975 and 1979 a small, secretive communist movement called the Khmer Rouge ruled Cambodia. Its leader, Pol Pot, tried to rebuild the country from scratch as a nation of peasant farmers. Historians estimate that around 1.5–2 million people — roughly a quarter of the population — died from execution, starvation, overwork and disease.\n\nThis is a hard topic, and it deserves care. The people who died were teachers, farmers, monks, children, grandparents — people with names and families. Your job as a historian is to understand **how** this could happen: which crises, weaknesses and outside forces gave a tiny group the chance to seize power, and how Cambodia has tried to find justice and remember. That is the same enquiry you use for Hitler and Mao: *under what circumstances do dictatorships come to power?*",
  guide: [
    // ------------------------------------------------------------------
    {
      id: "cambodia-before-1970",
      heading: "Cambodia before 1970",
      discovery: {
        problem:
          "In the 1960s Cambodia was mostly at peace while war raged next door in Vietnam. Within fifteen years it would suffer one of the worst disasters of the 20th century.\n\nBefore you read on: list three things a country might already have *before* a crisis that would make it vulnerable if a crisis came. Think about who is poor, who holds power, and who is angry or ignored.",
        idea:
          "Historians look for **long-term conditions** — weaknesses that do not cause a disaster on their own but make one possible. In Cambodia these were a poor rural majority far from the capital, a political system that depended on one man (Prince Sihanouk), and a small, determined communist movement waiting for its chance. None of these made genocide inevitable. They were the conditions that war would later exploit.",
      },
      body:
        "**A proud past.** From about the 9th to the 15th century the Khmer Empire ruled much of mainland South-East Asia from Angkor. Angkor Wat, built in the 12th century, is still on Cambodia's flag. The Khmer Rouge later used this glorious past to argue that Cambodians could achieve anything — if they relied only on themselves.\n\n**French rule and independence.** Cambodia became a French protectorate in **1863** and later part of French Indochina. It won independence on **9 November 1953** under King **Norodom Sihanouk**. In 1955 Sihanouk gave up the throne to lead the government as Prince, and for 15 years he dominated politics. Opponents on the left and right were watched and often harassed by the police.\n\n**Neutrality in a dangerous neighbourhood.** Sihanouk tried to keep Cambodia out of the Vietnam War. He broke off relations with the USA in 1965, and quietly let North Vietnamese troops use remote border areas and receive supplies through the port of Sihanoukville. It was a balancing act that could not last.\n\n**Two Cambodias.** Most Cambodians were rice farmers, many poor and in debt. Phnom Penh, with its French-style boulevards, schools and government offices, felt like a different world. This gap between city and countryside later shaped Khmer Rouge ideas.\n\n**Saloth Sar.** Born in 1925 (some records say 1928), Saloth Sar — later known as **Pol Pot** — studied radio-electronics in **Paris** from 1949 to 1953. There he joined a circle of Cambodian Marxist students and the French Communist Party. Back home he worked as a teacher while organising in secret. In 1963 he became leader of the small Cambodian communist party and fled to the jungle. Sihanouk called these rebels the **Khmer Rouge** (\"Red Khmers\"). In 1968 they began an armed struggle, but they had only a few thousand fighters and little support.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain two features of Cambodia before 1970 that made it vulnerable to a revolutionary movement. (4 marks)",
          steps: [
            "Pick features that are **conditions**, not events: rural poverty, dependence on Sihanouk, the war next door.",
            "For each feature give a precise fact (most people were poor rice farmers; Sihanouk let North Vietnamese troops use border areas).",
            "Explain *how* each one made Cambodia vulnerable — the word 'because' is your friend.",
            "Keep it causal: do not drift into the events of 1975.",
          ],
          answer:
            "One feature was the gap between the poor countryside and Phnom Penh. Most Cambodians were rice farmers, many in debt, and they felt far from the educated city elite. This made them open to a movement that promised to end the city's power over them.\n\nA second feature was Cambodia's position next to the Vietnam War. Sihanouk tried to stay neutral but let North Vietnamese troops use the border areas. This meant that if the war widened, Cambodia would be dragged in — which is exactly what happened after 1969.",
          yourTurn: {
            question: "In what year did Cambodia gain independence from France?",
            answer: { type: "number", value: 1953 },
            solution: "Cambodia became independent on 9 November 1953 under King Norodom Sihanouk.",
          },
        },
      ],
      keyPoints: [
        "French protectorate from 1863; independent on 9 November 1953 under Norodom Sihanouk.",
        "Sihanouk dominated politics and tried to keep Cambodia neutral in the Vietnam War.",
        "Most Cambodians were poor rice farmers; Phnom Penh felt like a different world.",
        "Saloth Sar (Pol Pot) became a communist while studying in Paris (1949–53) and led the party from 1963.",
        "Before 1970 the Khmer Rouge were small, with only a few thousand fighters.",
      ],
      whyItWorks:
        "Long-term conditions matter because they decide who will listen when a crisis comes. A poor, ignored countryside and a state built around one man meant that if Sihanouk fell and war arrived, there would be millions of angry, frightened people and no strong institutions to hold the country together.",
      strategies: ["Sort causes into categories", "Use the chronology", "Zoom out to the big picture"],
      thinkDeeper:
        "In 1969 the Khmer Rouge were a tiny jungle movement with little support. If you had been a historian in 1969, what evidence would have made you predict they could *never* take power? Which of those reasons stopped being true by 1975?",
    },
    // ------------------------------------------------------------------
    {
      id: "war-spills-over",
      heading: "The Vietnam War spills into Cambodia",
      discovery: {
        problem:
          "Why might people in a bombed countryside support a group promising to fix everything?\n\nPicture a farming village in eastern Cambodia in 1972. Bombs fall from planes flying too high to see. The government in Phnom Penh seems far away and corrupt. On the radio, the former ruler whom many villagers deeply respect is urging them to join the rebels.\n\nBefore you read on: list the different *kinds* of reason a villager might have for joining or supporting the Khmer Rouge. Which do you think would matter most?",
        idea:
          "People rarely join an extreme movement because they understand and agree with all its ideas. Grief and anger at the bombing, loyalty to Sihanouk, hatred of a corrupt government, fear, and the simple lack of any other choice all pushed people towards the Khmer Rouge. Historians call this the difference between **ideology** (what the leaders believed) and **motivation** (why ordinary people followed).",
      },
      body:
        "**The war crosses the border.** North Vietnamese troops used eastern Cambodia for bases and for the **Ho Chi Minh trail**, their supply route south through Laos and Cambodia. From **March 1969** US President Nixon ordered **secret bombing** of these areas, hidden from the American public and Congress. The bombing widened after 1970 and only stopped in **August 1973**, when Congress cut off the money. Historians' estimates of the deaths range from tens of thousands to well over 100,000, and hundreds of thousands of people fled their villages. Phnom Penh swelled with refugees to around 2 million people.\n\n**The coup of 1970.** On **18 March 1970**, while Sihanouk was abroad, the National Assembly voted to remove him. General **Lon Nol** took control and set up the US-backed **Khmer Republic**. In April 1970 US and South Vietnamese troops crossed into Cambodia to attack North Vietnamese bases.\n\n**Sihanouk changes sides.** From exile in Beijing, Sihanouk formed an alliance with his old enemies, the Khmer Rouge, and called on Cambodians to join the fight. Many peasants revered him, so his name brought the rebels thousands of recruits. The Khmer Rouge kept the real power for themselves.\n\n**Outside support.** North Vietnamese troops did much of the early fighting against Lon Nol's army and helped train the Khmer Rouge; China supplied weapons and hosted Sihanouk.\n\n**A failing government.** Lon Nol's regime was weak and corrupt. Officers claimed pay for \"phantom soldiers\" who did not exist, prices soared, and the government depended on US aid. Lon Nol himself was weakened by a stroke in 1971. By 1975 the Khmer Rouge — now tens of thousands strong — had surrounded the capital.",
      diagram: mapSvg,
      diagramCaption:
        "Schematic map, not to scale. The Ho Chi Minh trail ran south through Laos and eastern Cambodia. US bombing hit the eastern border areas first and spread across much of the country by 1973.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain how the Vietnam War helped the Khmer Rouge to grow between 1969 and 1975. (4 marks)",
          steps: [
            "Start from the link: North Vietnamese bases and the Ho Chi Minh trail ran through Cambodia.",
            "Point 1 — the US bombing: what did it do to villagers, and how did the Khmer Rouge use that?",
            "Point 2 — the war led to the 1970 coup and Sihanouk's alliance with the Khmer Rouge.",
            "Show the chain: war → bombing and coup → anger and loyalty to Sihanouk → recruits.",
          ],
          answer:
            "The Vietnam War spread into Cambodia because North Vietnamese troops used Cambodian border areas and the Ho Chi Minh trail. To attack them, the USA secretly bombed Cambodia from 1969 to 1973. The bombing killed many villagers and drove hundreds of thousands from their homes, so grief and anger made people willing to join the Khmer Rouge, who blamed the USA and Lon Nol.\n\nThe war also helped cause Lon Nol's US-backed coup in 1970. This pushed Sihanouk into an alliance with the Khmer Rouge, and because many peasants were loyal to him, they joined the rebels. So the war turned a small movement into an army of tens of thousands.",
          yourTurn: {
            question: "In what year did Lon Nol's coup remove Prince Sihanouk from power?",
            answer: { type: "number", value: 1970 },
            solution: "The National Assembly voted to remove Sihanouk on 18 March 1970, while he was abroad. Lon Nol then led the new Khmer Republic.",
          },
        },
      ],
      keyPoints: [
        "North Vietnamese bases and the Ho Chi Minh trail dragged Cambodia into the Vietnam War.",
        "Secret US bombing (March 1969 – August 1973) killed many villagers and created refugees and anger.",
        "Lon Nol's coup (18 March 1970) removed Sihanouk and created the US-backed Khmer Republic.",
        "Sihanouk then backed the Khmer Rouge, bringing them peasant recruits.",
        "Lon Nol's government was corrupt and weak; North Vietnam and China helped the Khmer Rouge.",
      ],
      whyItWorks:
        "A crisis is most dangerous when it hits a weak government. The war and bombing created desperate, angry people; the coup removed the one figure many peasants trusted and handed his prestige to the Khmer Rouge; and Lon Nol's corrupt regime could neither protect people nor win the war. Each factor made the others worse.",
      strategies: ["Link the factors", "Ask \"who benefits?\"", "Sort causes into categories"],
      thinkDeeper:
        "Counterfactual: if there had been no US bombing, would the Khmer Rouge still have won in 1975? Think about which other factors (the coup, Sihanouk's support, North Vietnamese help, Lon Nol's weakness) would still have been there.",
    },
    // ------------------------------------------------------------------
    {
      id: "khmer-rouge-take-power",
      heading: "The Khmer Rouge take power",
      discovery: {
        problem:
          "On **17 April 1975** young soldiers in black uniforms entered Phnom Penh. Some people in the city cheered — they hoped the war was over. Within hours the soldiers ordered everyone to leave, saying the Americans were about to bomb the city and they could return in three days.\n\nBefore you read on: why might a new government empty its own capital city? List as many possible reasons as you can, then decide which would tell you most about the new rulers' aims.",
        idea:
          "Possible reasons fall into three groups: **practical** (the leaders claimed the city could not be fed), **control** (scattering people made organised opposition almost impossible) and **ideological** (the Khmer Rouge saw cities as corrupt, foreign and capitalist, and wanted city people remade through farm labour). Historians stress the ideological motive: the evacuation was the first step in starting society again from nothing.",
      },
      body:
        "**Capture of Phnom Penh.** Lon Nol fled on 1 April 1975, and the Khmer Rouge entered the capital on **17 April 1975**. Within days the whole city — swollen to over 2 million people — was forced out into the countryside, including the sick from hospitals. Many elderly and ill people died on the roads. Other towns were emptied too. Officials and officers of the old government were singled out, and many were killed.\n\n**Democratic Kampuchea.** In January 1976 the country was renamed **Democratic Kampuchea**. Sihanouk returned as a figurehead but resigned in 1976 and was kept under house arrest. A man calling himself **Pol Pot** became Prime Minister — few Cambodians knew he was Saloth Sar.\n\n**Rule by \"Angkar\".** People were told to obey **Angkar** (\"the Organisation\"), but not who led it. The Communist Party only announced its own existence in September 1977. The leaders used code names: Pol Pot was **Brother Number One** and **Nuon Chea** was Brother Number Two. Others included **Ieng Sary** (foreign affairs) and **Khieu Samphan** (head of state).\n\n| Influence | How it shaped the regime |\n|---|---|\n| Maoism | Peasants as the heart of the revolution; the leaders even claimed a \"Super Great Leap Forward\" |\n| Extreme nationalism | Pride in Angkor; deep hostility to Vietnam |\n| Self-reliance | Cut off from almost every country except allies such as China |\n\nPol Pot met Mao Zedong in Beijing in 1975, and China became the regime's main foreign supporter. But the Khmer Rouge went further and faster than any other communist state.",
      diagram: factorsSvg,
      diagramCaption:
        "Conditions for the Khmer Rouge rise. Crises (top) created desperate people; politics and allies (bottom) gave a small movement the support it needed. The dashed arrow shows one link: the 1970 coup drove Sihanouk to back the Khmer Rouge.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why the Khmer Rouge were able to take power in 1975. (4 marks)",
          steps: [
            "Sort the causes: crisis (war, bombing), weak government (Lon Nol), support (Sihanouk, North Vietnam, China).",
            "Choose the two you can support best with precise facts.",
            "For each, explain the mechanism: how did it make the Khmer Rouge stronger or their enemies weaker?",
            "Link them: the coup that created the weak Lon Nol government also gave the Khmer Rouge Sihanouk's support.",
          ],
          answer:
            "One reason was the crisis caused by the Vietnam War. Secret US bombing from 1969 to 1973 devastated the countryside, and grief and anger helped the Khmer Rouge recruit thousands of peasants.\n\nA second reason was the weakness of Lon Nol's government after the 1970 coup. It was corrupt — officers claimed pay for 'phantom soldiers' — and depended on US aid, so when US bombing stopped in 1973 it could not hold back the rebels. The two factors were linked: the same coup that created Lon Nol's weak regime drove Sihanouk to back the Khmer Rouge, bringing them peasant support. Together they turned a small movement into a force that captured Phnom Penh on 17 April 1975.",
          yourTurn: {
            question: "What name did the Khmer Rouge use for their secret leadership — a word meaning 'the Organisation'?",
            answer: { type: "text", accept: ["Angkar", "Angka", "the Angkar", "Angkar Padevat", "Angkar Loeu"], display: "Angkar" },
            solution: "Angkar — 'the Organisation'. People had to obey Angkar without being told who its leaders were.",
          },
        },
      ],
      keyPoints: [
        "The Khmer Rouge captured Phnom Penh on 17 April 1975 and emptied the city within days.",
        "The country was renamed Democratic Kampuchea (1976); Pol Pot became Prime Minister.",
        "Power was secretive: people obeyed 'Angkar' (the Organisation) without knowing its leaders.",
        "Pol Pot was 'Brother Number One'; Nuon Chea was 'Brother Number Two'.",
        "Influences: Maoism, extreme nationalism, hostility to Vietnam and total self-reliance.",
      ],
      whyItWorks:
        "Secrecy was a source of power. Because no one knew who Angkar was, no one could appeal to it, criticise it or organise against it — Angkar seemed to be everywhere. This is very different from Hitler, whose power depended on his public face and speeches.",
      strategies: ["Sort causes into categories", "Link the factors", "Compare case studies"],
      thinkDeeper:
        "Hitler and Mao both built a cult of personality. Pol Pot hid his identity for years. Why might a regime choose secrecy over fame? What are the risks for a dictator of each approach?",
    },
    // ------------------------------------------------------------------
    {
      id: "year-zero",
      heading: "'Year Zero': a society torn apart",
      discovery: {
        problem:
          "Within months of taking power the Khmer Rouge abolished money, markets, schools, religion and private property, and in many areas made families eat in communal canteens.\n\nBefore you read on: sort these five changes into two columns — **'aimed to build an ideal society'** and **'aimed to control people'**. Then look at your columns. What do you notice?",
        idea:
          "Almost every change fits **both** columns. The leaders believed they were creating a pure, equal society of peasant farmers — and that belief was used to justify total control over every part of people's lives. When a regime is certain it is building a perfect future, anyone who seems to stand in the way can be treated as an enemy. That is why utopian ideas and terror went together.",
      },
      body:
        "**The aim.** The Khmer Rouge wanted a completely self-sufficient, classless society of peasant farmers, with rice as its foundation. Historians often call this idea **\"Year Zero\"**: history was to start again from nothing, with no trace of the old society.\n\n**What was abolished.**\n- **Money and markets** — the national bank in Phnom Penh was blown up.\n- **Private property** — land, tools and even cooking pots were taken by the collective.\n- **Schools and universities** — closed; most books were destroyed.\n- **Religion** — Buddhist monks were forced to leave their orders; Islam, the faith of the Cham minority, was banned.\n- **Family life** — children were often moved to youth groups and encouraged to report on adults; Angkar arranged marriages.\n\n**Forced labour.** People were organised into **cooperatives** and made to work very long days digging canals and growing rice. The national plan demanded about 3 tonnes of rice per hectare — roughly three times normal yields. Rations were tiny, and medicine was almost non-existent.\n\n**Two classes of people.**\n\n| \"Base\" (Old) people | \"New\" people |\n|---|---|\n| Peasants from areas the Khmer Rouge held before 1975 | City dwellers forced out in 1975 (\"17 April people\") |\n| Slightly more food and trust | Least food, hardest work, constant suspicion |\n\n**Who was targeted.** Former officials and soldiers; educated people such as teachers, doctors and students (survivors describe hiding that they could read or speak French); ethnic minorities — Vietnamese, Cham Muslims and Chinese Cambodians; Buddhist monks; and, increasingly, Khmer Rouge members accused of treachery.\n\n> \"To keep you is no gain; to lose you is no loss.\" — Khmer Rouge slogan, remembered by many survivors",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Describe two ways the Khmer Rouge tried to create a 'Year Zero' society. (4 marks)",
          steps: [
            "'Describe' means: name the feature, then add precise detail. You do not need to explain causes.",
            "Choose two clear policies, e.g. abolishing money and religion, or forced labour in cooperatives.",
            "Add a specific detail to each (the national bank blown up; monks forced to leave their orders; 3 tonnes per hectare).",
            "Link each back to the aim of starting society again.",
          ],
          answer:
            "One way was abolishing the old economy. Money, markets and private property were banned, and the national bank in Phnom Penh was blown up, so that no one could be richer than anyone else.\n\nA second way was forcing everyone into rural cooperatives. City people ('New people') were made to work long days growing rice and digging canals to meet impossible targets of about 3 tonnes per hectare. The aim was to turn the whole population into peasant farmers with no link to the old society.",
          yourTurn: {
            question: "What name was given to the city people forced into the countryside in 1975, who were treated with the most suspicion?",
            answer: { type: "text", accept: ["New people", "the New people", "17 April people", "April 17 people", "New"], display: "New people" },
            solution: "They were called 'New people' (or '17 April people'), in contrast to the 'Base' or 'Old' people of the countryside.",
          },
        },
      ],
      keyPoints: [
        "Aim: a pure, self-sufficient, classless society of peasant farmers — 'Year Zero'.",
        "Money, markets, private property, schools and religion were abolished.",
        "Everyone was forced into cooperatives; impossible rice targets led to hunger.",
        "'New people' from the cities were treated worse than 'Base' (Old) people.",
        "Targets included the educated, former officials, monks, Vietnamese, Cham and Chinese Cambodians, and the regime's own members.",
      ],
      whyItWorks:
        "The regime believed society could be rebuilt by force in a few years. Because the plan was impossible, it kept failing — and the leaders blamed the failures on hidden 'enemies' rather than on the plan. That logic drove ever-wider purges, which is why the killing grew worse over time instead of settling down.",
      strategies: ["Ask \"who benefits?\"", "Look for change AND continuity", "Use precise evidence"],
      thinkDeeper:
        "Mao's Great Leap Forward (1958–62) also set impossible farming targets and caused a terrible famine. What similarities can you see with the Khmer Rouge plans? Why might a leader who knew about the Great Leap still copy parts of it?",
    },
    // ------------------------------------------------------------------
    {
      id: "genocide-and-fall",
      heading: "Genocide and the fall of the regime",
      discovery: {
        problem:
          "In January 1979 the Khmer Rouge regime collapsed in about two weeks, even though it had seemed to control every part of life.\n\nBefore you read on: think about a regime that starves its own people, kills its own officers and attacks a much stronger neighbour. Predict *three* ways those actions might weaken it.",
        idea:
          "The regime destroyed its own strength. Terror broke trust, hunger weakened the population, purges killed experienced commanders and drove some Khmer Rouge officials to flee to Vietnam, and raids on Vietnam provoked a large, battle-hardened army. When the invasion came, very few Cambodians were willing to fight for Angkar.",
      },
      body:
        "**The human cost.** Historians estimate that around **1.5–2 million** people — roughly a quarter of a population of about 8 million — died between 1975 and 1979. Many were executed; even more died of starvation, overwork and diseases such as malaria that went untreated. Exact numbers will never be known.\n\n**S-21 and the killing fields.** In Phnom Penh, a former high school called **Tuol Sleng** became a secret prison, **S-21**, run by **Kaing Guek Eav**, known as **Duch**. Prisoners — including many Khmer Rouge members — were photographed and forced to sign false confessions. Estimates of the number held range from about 12,000 to 20,000; only a handful are known to have survived. Most were killed at **Choeung Ek**, about 15 km from the city, one of thousands of mass-grave sites across Cambodia now known as the \"killing fields\".\n\n**Genocide.** Genocide means acts intended to destroy a national, ethnic, racial or religious group. The regime's targeting of Vietnamese and Cham people was later judged to be genocide.\n\n**The fall.** From 1977 the Khmer Rouge raided villages across the border in Vietnam, killing thousands of civilians. Purges in Cambodia's Eastern Zone in 1978 drove some Khmer Rouge officers, such as **Heng Samrin**, to flee to Vietnam. On **25 December 1978** Vietnam invaded with around 150,000 troops and Cambodian defectors, and on **7 January 1979** captured Phnom Penh. A new government, the People's Republic of Kampuchea, was set up.\n\n**Not the end.** The Khmer Rouge retreated to the jungle near the Thai border. Because of Cold War politics — China, the USA and ASEAN all opposed Vietnam's occupation — they kept Cambodia's seat at the United Nations for years. Civil war continued until the 1991 Paris Peace Agreements, and the movement only collapsed in the late 1990s. Pol Pot was put under house arrest by his own comrades in 1997 and died in April **1998**, never tried in a court.",
      diagram: tollSvg,
      diagramCaption:
        "Drawn to scale. Estimates vary, but roughly one in five to one in four Cambodians died under the Khmer Rouge — each of them a person with a name and a family.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why the Khmer Rouge regime fell in 1979. (4 marks)",
          steps: [
            "Separate the **trigger** (the Vietnamese invasion) from the **underlying weaknesses**.",
            "Explain why Vietnam invaded: Khmer Rouge raids on Vietnamese border villages.",
            "Explain why the regime could not resist: purges, hunger, terror, defectors.",
            "Link them: the regime's own actions both provoked the invasion and left it too weak to stop it.",
          ],
          answer:
            "The immediate cause was the Vietnamese invasion of 25 December 1978. Vietnam invaded partly because Khmer Rouge forces had been raiding Vietnamese border villages since 1977, killing thousands of civilians. Vietnam had a large army hardened by decades of war, and it captured Phnom Penh on 7 January 1979.\n\nHowever, the regime was also weakened from within. Purges, such as those in the Eastern Zone in 1978, killed experienced officers and drove others like Heng Samrin to join Vietnam, while starvation and terror meant few people would fight for Angkar. So the Khmer Rouge's own brutality both provoked the invasion and left them too weak to resist it.",
          yourTurn: {
            question: "In what year did Vietnamese forces capture Phnom Penh and end Khmer Rouge rule?",
            answer: { type: "number", value: 1979 },
            solution: "Vietnam invaded on 25 December 1978 and captured Phnom Penh on 7 January 1979.",
          },
        },
      ],
      keyPoints: [
        "Around 1.5–2 million people (about a quarter of the population) died, 1975–79 — estimates.",
        "Causes of death: execution, starvation, overwork and untreated disease.",
        "S-21 (Tuol Sleng) prison was run by Duch; most prisoners were killed at Choeung Ek.",
        "Vietnam invaded on 25 December 1978 and captured Phnom Penh on 7 January 1979.",
        "The Khmer Rouge survived in the jungle into the 1990s; Pol Pot died in 1998 without trial.",
      ],
      whyItWorks:
        "Regimes built on terror often weaken themselves: fear destroys loyalty, and purges remove the very people who know how to fight and govern. The Khmer Rouge also misjudged its power, attacking a neighbour with a far stronger army. Its fall was triggered from outside but prepared from within.",
      strategies: ["Separate trigger and underlying causes", "Use the chronology", "Consider the counterfactual"],
      thinkDeeper:
        "The Khmer Rouge kept Cambodia's seat at the UN for years after 1979, with support from countries that condemned their crimes. Why might governments make such a choice? What does this show about how the Cold War shaped events in South-East Asia?",
    },
    // ------------------------------------------------------------------
    {
      id: "justice-and-memory",
      heading: "Justice and memory",
      discovery: {
        problem:
          "Pol Pot died in 1998 without ever facing a court. Two survivors disagree about the trials that came later:\n\n- Survivor 1: \"Trials thirty years later are pointless — the leaders are old and most are already dead.\"\n- Survivor 2: \"A verdict, even a late one, is the official record that this happened to us.\"\n\nBefore you read on: which view do you find more convincing? What would a trial need to achieve for you to call it a success?",
        idea:
          "Justice has several purposes: **punishment**, **truth** (a permanent, tested record of what happened), **recognition** of victims and their suffering, and **deterrence**. A late trial can still achieve truth and recognition even if punishment is limited — which is why many survivors valued the trials while also feeling they came too late and convicted too few.",
      },
      body:
        "**Why justice took so long.** For years the Khmer Rouge still had an army, held Cambodia's UN seat and had powerful foreign backers. Civil war lasted until the 1990s. Only after the movement collapsed could a court be set up.\n\n**The ECCC.** In 2003 Cambodia and the United Nations agreed to create the **Extraordinary Chambers in the Courts of Cambodia (ECCC)**, which began work in 2006. It was a \"hybrid\" court with both Cambodian and international judges.\n\n| Accused | Role | Verdict |\n|---|---|---|\n| Kaing Guek Eav (Duch) | Head of S-21 | Convicted 2010 of crimes against humanity; life sentence on appeal 2012 |\n| Nuon Chea | Brother Number Two | Convicted 2014 and, of genocide, 2018 — life |\n| Khieu Samphan | Head of state | Convicted 2014 and, of genocide, 2018 — life |\n| Ieng Sary | Foreign minister | Died in 2013 before a verdict |\n\nCritics point out that only three people were convicted, after many years and great cost. Supporters reply that thousands of survivors took part as civil parties, and the trials created a detailed, tested record.\n\n**Memory.** Tuol Sleng is now a genocide museum, and a memorial at Choeung Ek honours the victims. The Documentation Center of Cambodia collects evidence and survivors' stories, and the history of Democratic Kampuchea has been taught in Cambodian schools since 2009. Survivors such as the painter **Vann Nath** and the writer **Loung Ung** (*First They Killed My Father*) have told their stories so the victims are remembered as people, not numbers.\n\n**Comparing dictators.**\n\n| | Hitler | Mao | Pol Pot |\n|---|---|---|---|\n| Crisis | WWI defeat, Depression | Japanese invasion, civil war | Vietnam War, US bombing, civil war |\n| Weak government | Weimar Republic | Nationalist (GMD) regime | Lon Nol's Khmer Republic |\n| Route to power | Appointed Chancellor, 1933 | Won civil war, 1949 | Won civil war, 1975 |\n| Leadership style | Charismatic public speaker | Cult of personality | Hidden behind Angkar |",
      diagram: timelineSvg,
      diagramCaption:
        "Timeline drawn to scale, 1953–2018. Notice the long gap between the crimes (1975–79) and the verdicts (2010–18).",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain one similarity and one difference between how Pol Pot and Hitler came to power. (4 marks)",
          steps: [
            "Use the comparison categories: crisis, weak government, route to power, leadership.",
            "Similarity: both exploited a deep crisis and a weak government. Give a precise example for each man.",
            "Difference: route to power or leadership style — legal appointment vs civil war; public charisma vs secrecy.",
            "Use comparative words: 'both', 'whereas', 'unlike'.",
          ],
          answer:
            "One similarity is that both men exploited a crisis and a weak government. Hitler gained support during the Depression, when the Weimar Republic seemed unable to cope, while Pol Pot's Khmer Rouge grew during the Vietnam War and the US bombing, when Lon Nol's corrupt government was failing.\n\nOne difference is how they took power. Hitler was legally appointed Chancellor in January 1933 after the Nazis became the largest party, whereas Pol Pot won power by force, when Khmer Rouge armies captured Phnom Penh in April 1975 after a five-year civil war.",
          yourTurn: {
            question: "In what year were Nuon Chea and Khieu Samphan convicted of genocide by the ECCC?",
            answer: { type: "number", value: 2018 },
            solution: "On 16 November 2018 the ECCC convicted Nuon Chea and Khieu Samphan of genocide and sentenced them to life imprisonment.",
          },
        },
      ],
      keyPoints: [
        "The UN-backed ECCC was agreed in 2003 and began work in 2006, with Cambodian and international judges.",
        "Duch, head of S-21, was convicted in 2010; his sentence became life imprisonment on appeal in 2012.",
        "Nuon Chea and Khieu Samphan were convicted of genocide in 2018.",
        "Museums, archives, school lessons and survivors' testimony keep the memory of the victims alive.",
        "Like Hitler and Mao, Pol Pot rose through crisis and weak government — but by civil war and secrecy, not elections or charisma.",
      ],
      whyItWorks:
        "Remembering matters because genocide depends on turning people into categories and numbers. Trials, museums and testimony reverse that: they name victims, establish facts that cannot easily be denied, and show that leaders can be held responsible — even decades later.",
      strategies: ["Compare case studies", "Weigh both sides, then judge", "Check the provenance (NOP)"],
      thinkDeeper:
        "The ECCC convicted only three people. Was it a failure, or did it achieve things that matter more than the number of convictions? Decide what 'success' should mean for a court like this, then judge it against your own definition.",
    },
  ],
  learn: {
    flashcards: [
      { front: "When did Cambodia gain independence from France?", back: "9 November 1953, under King Norodom Sihanouk." },
      { front: "What was Pol Pot's real name?", back: "Saloth Sar. He studied in Paris (1949–53), where he became a communist." },
      { front: "Who gave the Khmer Rouge their name?", back: "Prince Sihanouk — 'Khmer Rouge' means 'Red Khmers' (red = communist)." },
      { front: "When did the secret US bombing of Cambodia take place?", back: "March 1969 to August 1973." },
      { front: "What happened on 18 March 1970?", back: "Sihanouk was removed while abroad; Lon Nol took power and set up the US-backed Khmer Republic." },
      { front: "Why did Sihanouk's support matter to the Khmer Rouge?", back: "Many peasants revered him, so when he backed the Khmer Rouge from exile, thousands joined them." },
      { front: "When did the Khmer Rouge capture Phnom Penh?", back: "17 April 1975. The city was emptied within days." },
      { front: "What was 'Angkar'?", back: "'The Organisation' — the secret Khmer Rouge leadership that everyone had to obey." },
      { front: "What was Democratic Kampuchea?", back: "The Khmer Rouge's name for Cambodia, 1976–79." },
      { front: "Who were the 'New people'?", back: "City dwellers forced into the countryside in 1975; they got the least food and the most suspicion." },
      { front: "What was S-21?", back: "A secret prison in a former Phnom Penh high school (Tuol Sleng), run by Duch." },
      { front: "How many people died under the Khmer Rouge?", back: "Historians estimate around 1.5–2 million — roughly a quarter of about 8 million people." },
      { front: "When and how did Khmer Rouge rule end?", back: "Vietnam invaded on 25 December 1978 and captured Phnom Penh on 7 January 1979." },
      { front: "What happened to Pol Pot?", back: "He was put under house arrest by his own movement in 1997 and died in 1998, never tried in court." },
      { front: "What is the ECCC?", back: "The Extraordinary Chambers in the Courts of Cambodia — a UN-backed court with Cambodian and international judges." },
      { front: "Who was convicted of genocide in 2018?", back: "Nuon Chea and Khieu Samphan." },
    ],
    mustKnow: [
      "Can you explain how French rule, Sihanouk's neutrality and rural poverty shaped Cambodia before 1970?",
      "Can you explain how the Vietnam War and the US bombing (1969–73) helped the Khmer Rouge grow?",
      "Can you explain why Lon Nol's coup (1970) and Sihanouk's alliance with the Khmer Rouge mattered?",
      "Can you describe the capture and evacuation of Phnom Penh on 17 April 1975?",
      "Can you describe at least four 'Year Zero' policies and who was targeted?",
      "Can you explain the difference between 'Base' and 'New' people?",
      "Can you give the estimated death toll and explain why it is an estimate?",
      "Can you explain why the regime fell in January 1979?",
      "Can you describe the ECCC verdicts (Duch 2010/2012; Nuon Chea and Khieu Samphan 2018) and judge how successful the trials were?",
      "Can you compare how Pol Pot, Hitler and Mao came to power?",
    ],
    misconceptions: [
      { wrong: "The Khmer Rouge were always a big, popular movement.", right: "Before 1970 they had only a few thousand fighters. War, bombing, the 1970 coup and Sihanouk's backing turned them into a large army." },
      { wrong: "Pol Pot was a famous, charismatic leader like Hitler.", right: "He was secretive. People obeyed 'Angkar' without knowing who led it; few Cambodians even knew Pol Pot was Saloth Sar." },
      { wrong: "Most victims were shot at the killing fields.", right: "Executions were widespread, but even more people died of starvation, overwork and untreated disease caused by the regime's policies." },
      { wrong: "The Khmer Rouge regime ended with Pol Pot's death.", right: "The regime fell in January 1979 to a Vietnamese invasion. Pol Pot lived until 1998, and the movement fought on into the 1990s." },
      { wrong: "Vietnam and the Khmer Rouge were always enemies.", right: "North Vietnam helped the Khmer Rouge fight Lon Nol in the early 1970s. They only became bitter enemies after 1975." },
      { wrong: "Pol Pot was tried and convicted for his crimes.", right: "He died in 1998 without facing any court. The ECCC tried other leaders: Duch, Nuon Chea and Khieu Samphan were convicted." },
      { wrong: "The US bombing alone explains the Khmer Rouge victory.", right: "It was important, but it worked together with Lon Nol's weak government, Sihanouk's backing and support from North Vietnam and China." },
    ],
    examMistakes: [
      "Telling the story of 1970–75 instead of explaining *why* the Khmer Rouge grew — use 'because' and 'this meant that'.",
      "Giving the death toll as an exact figure. Write 'historians estimate around 1.5–2 million'.",
      "Mixing up Lon Nol (US-backed general who led the 1970 coup) with Pol Pot (Khmer Rouge leader).",
      "Forgetting that Sihanouk *backed* the Khmer Rouge after 1970 — a key reason peasants joined them.",
      "Confusing 1975 (Khmer Rouge take Phnom Penh) with 1979 (Vietnamese take Phnom Penh).",
      "In comparison questions, describing Pol Pot and Hitler separately without using 'both', 'whereas' or 'unlike'.",
      "Using graphic detail instead of precise historical evidence — examiners reward accuracy and explanation, not shock.",
    ],
    mnemonics: [
      { topic: "Why the Khmer Rouge rose (1969–75)", device: "Some Wars Bring Lasting Ordeals", explanation: "Sihanouk's backing, War spillover from Vietnam, Bombing by the USA, Lon Nol's weak government, Outside support from North Vietnam and China." },
      { topic: "Three key dates", device: "'70 Coup, '75 Capture, '79 Collapse", explanation: "1970: Lon Nol's coup. 1975: the Khmer Rouge capture Phnom Penh. 1979: the regime collapses when Vietnam captures Phnom Penh." },
      { topic: "What 'Year Zero' abolished", device: "MMPSR — Money, Markets, Property, Schools, Religion", explanation: "Picture five doors being shut, one after another, as society was 'started again'." },
    ],
    realWorld: [
      { title: "Cambodia's memorials", detail: "The Tuol Sleng Genocide Museum and the Choeung Ek memorial in Phnom Penh are visited by Cambodians and people from around the world, including many from Singapore, as places of remembrance and learning.", emoji: "🕯️" },
      { title: "ASEAN and Singapore", detail: "After 1979, ASEAN — including Singapore — campaigned at the United Nations against Vietnam's occupation of Cambodia, a stance that meant a coalition including the Khmer Rouge kept Cambodia's UN seat. Cambodia joined ASEAN in 1999 once peace returned.", emoji: "🌏" },
      { title: "International justice", detail: "The ECCC is one of several courts — like those for the former Yugoslavia and Rwanda — that show leaders can be tried for genocide and crimes against humanity, even decades later.", emoji: "⚖️" },
      { title: "Survivors' voices", detail: "Memoirs and films by survivors, such as Loung Ung's *First They Killed My Father* and Rithy Panh's documentaries, help the world remember victims as people.", emoji: "📖" },
      { title: "Recognising warning signs", detail: "Studying how war, weak government and dehumanising language led to genocide helps people today recognise warning signs early — a key aim of genocide education worldwide.", emoji: "🔎" },
    ],
    videos: [
      { title: "How the Khmer Rouge came to power", channel: "Search: history explainers", url: "https://www.youtube.com/results?search_query=how+did+the+khmer+rouge+come+to+power+explained" },
      { title: "The Khmer Rouge tribunal genocide verdict (2018)", channel: "BBC News", url: "https://www.youtube.com/results?search_query=khmer+rouge+tribunal+genocide+verdict+2018+bbc+news" },
      { title: "Survivors remember: Tuol Sleng", channel: "Documentary search", url: "https://www.youtube.com/results?search_query=tuol+sleng+survivor+vann+nath+chum+mey" },
      { title: "The secret bombing of Cambodia", channel: "Search: documentaries", url: "https://www.youtube.com/results?search_query=secret+bombing+of+cambodia+1969+1973+history" },
    ],
    keyDates: [
      { year: 1863, date: "1863", event: "Cambodia becomes a French protectorate", note: "Start of 90 years of French control." },
      { year: 1953, date: "9 Nov 1953", event: "Independence from France under King Norodom Sihanouk", note: "Sihanouk then dominates Cambodian politics until 1970." },
      { year: 1963, date: "1963", event: "Saloth Sar (Pol Pot) becomes leader of the Cambodian communist party", note: "He flees to the jungle to build the movement." },
      { year: 1969, date: "Mar 1969", event: "Secret US bombing of Cambodia begins", note: "The bombing devastates the countryside until August 1973." },
      { year: 1970, date: "18 Mar 1970", event: "Lon Nol's coup removes Sihanouk", note: "Sihanouk allies with the Khmer Rouge; civil war begins." },
      { year: 1973, date: "Aug 1973", event: "US bombing of Cambodia ends", note: "Lon Nol's government loses vital military support." },
      { year: 1975, date: "17 Apr 1975", event: "Khmer Rouge capture Phnom Penh and empty the city", note: "Start of Khmer Rouge rule." },
      { year: 1976, date: "Jan 1976", event: "Country renamed Democratic Kampuchea", note: "Pol Pot becomes Prime Minister in 1976." },
      { year: 1978, date: "25 Dec 1978", event: "Vietnam invades Cambodia", note: "Provoked by Khmer Rouge border raids." },
      { year: 1979, date: "7 Jan 1979", event: "Vietnamese forces capture Phnom Penh", note: "Khmer Rouge rule ends; the movement retreats to the jungle." },
      { year: 1991, date: "23 Oct 1991", event: "Paris Peace Agreements", note: "Start of the UN-supervised peace process." },
      { year: 1998, date: "15 Apr 1998", event: "Pol Pot dies", note: "He was never tried in a court." },
      { year: 2010, date: "26 Jul 2010", event: "ECCC convicts Duch, head of S-21", note: "First conviction; his sentence became life imprisonment on appeal in 2012." },
      { year: 2018, date: "16 Nov 2018", event: "Nuon Chea and Khieu Samphan convicted of genocide", note: "Life sentences; a formal legal record of genocide." },
    ],
    keyTerms: [
      { term: "Khmer Rouge", definition: "'Red Khmers' — the name Sihanouk gave to Cambodia's communist movement, led by Pol Pot." },
      { term: "Angkar", definition: "'The Organisation' — the secret Khmer Rouge leadership that people had to obey without knowing who it was." },
      { term: "Democratic Kampuchea", definition: "The Khmer Rouge state, 1975–79 (named in January 1976)." },
      { term: "Year Zero", definition: "The idea of restarting history from nothing, wiping out the old society; often used to describe Khmer Rouge aims." },
      { term: "Base (Old) people", definition: "Peasants from areas the Khmer Rouge controlled before 1975; treated slightly better." },
      { term: "New people", definition: "City dwellers forced into the countryside in 1975 ('17 April people'); treated with the most suspicion." },
      { term: "Cooperative", definition: "A collective farm where people were forced to work and eat together under Khmer Rouge control." },
      { term: "Agrarian", definition: "Based on farming. The Khmer Rouge wanted an agrarian society of peasant rice farmers." },
      { term: "Ho Chi Minh trail", definition: "North Vietnam's supply route to the south, running through Laos and eastern Cambodia." },
      { term: "Coup", definition: "A sudden, illegal seizure of power — e.g. the removal of Sihanouk in March 1970." },
      { term: "Khmer Republic", definition: "Lon Nol's US-backed government, 1970–75." },
      { term: "S-21 (Tuol Sleng)", definition: "A secret Khmer Rouge prison in a former Phnom Penh high school; now a genocide museum." },
      { term: "Killing fields", definition: "Sites where the Khmer Rouge killed and buried victims, such as Choeung Ek near Phnom Penh." },
      { term: "Purge", definition: "Removing people seen as disloyal, often by imprisonment or killing — including the regime's own members." },
      { term: "Genocide", definition: "Acts committed with intent to destroy, in whole or in part, a national, ethnic, racial or religious group." },
      { term: "Cham", definition: "A Muslim ethnic minority in Cambodia, persecuted by the Khmer Rouge; the ECCC found genocide against them." },
      { term: "ECCC", definition: "Extraordinary Chambers in the Courts of Cambodia — the UN-backed hybrid court that tried Khmer Rouge leaders." },
      { term: "Civil party", definition: "A victim who formally joins a trial at the ECCC, able to take part and seek reparations." },
    ],
  },
};
