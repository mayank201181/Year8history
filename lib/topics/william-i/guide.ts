import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "william-i",
  title: "William I and the Norman Conquest",
  strand: "Kings & Power",
  icon: "🏰",
  summary: "A duke with a disputed claim crosses the Channel, wins one long day of battle, and remakes a kingdom.",
  intro:
    "In January 1066 William was Duke of Normandy, a French-speaking ruler across the Channel with a claim most English nobles rejected. By Christmas he had been crowned in Westminster Abbey. Within twenty years almost every great English landowner had been replaced by a Norman, castles stood over the towns, and his officials had counted the kingdom's land, ploughs and pigs.\n\nThis topic is the first case study in our Term 1 enquiry: **Under what circumstances did kings rise to power?** Keep asking it as you read. William rose by **conquest** — but he always insisted he was the **rightful heir**, backed by a promise, an oath and the Pope. Watch how claim and force work together.",
  guide: [
    // ------------------------------------------------------------------
    {
      id: "succession-crisis-1066",
      heading: "The succession crisis of 1066",
      discovery: {
        problem:
          "It is 6 January 1066. King Edward died yesterday with no children. You are a member of the **Witan**, the council of nobles and churchmen that advises the king, and you must help choose the next one.\n\nWhat you know:\n\n- Viking kings have ruled England before, within living memory.\n- The Duke of Normandy, just across the Channel, says Edward promised *him* the crown.\n- The royal family's closest male heir is a boy of about 14 who grew up abroad.\n- England's most powerful earl, an experienced war leader, was at Edward's bedside when he died.\n\nWho do you vote for, and what is your main reason? Then predict: what will the men you *didn't* choose do next?",
        idea:
          "The Witan picked **Harold Godwinson**, and on their terms it was a sensible choice: England faced possible invasion and needed a proven adult war leader, not a teenager. But choosing a king did not end the crisis. Each rejected claimant based his claim on a *different* idea of what made a king legitimate — a promise, an old treaty, royal blood — and none of them accepted the Witan's decision. When the rules disagree, the question tends to be settled by armies.",
      },
      body:
        "On **5 January 1066** Edward the Confessor died at Westminster without children. England had no fixed rule for choosing the next king. Royal blood mattered; so did the dying king's wishes; so did being chosen by the **Witan** — and so did having an army.\n\nOn **6 January 1066**, the day of Edward's funeral, **Harold Godwinson**, Earl of Wessex, was crowned in Westminster Abbey.\n\n| Claimant | Who he was | Basis of claim |\n|---|---|---|\n| Harold Godwinson | Earl of Wessex, the most powerful noble in England; Edward's brother-in-law | Chosen by the Witan; English sources say the dying Edward entrusted the kingdom to him |\n| William, Duke of Normandy | Edward's mother, Emma, was William's great-aunt | Norman writers say Edward promised him the crown in 1051, and that Harold swore an oath on holy relics in 1064 to support him |\n| Harald Hardrada | King of Norway, a famous warrior | An old deal (c. 1040) between King Magnus of Norway and King Harthacnut: whoever died first, the other would inherit his kingdom |\n| Edgar Ætheling | Edward's great-nephew, about 14 | Closest male blood relative — but young, with no army and few supporters |\n\n> “Earl Harold succeeded to the kingdom of England, as the king had granted it to him, and as he had been chosen for it.” — *Anglo-Saxon Chronicle*, entry for 1066 (written by English monks; modern translation)\n\nNotice how the evidence splits. English sources stress Edward's deathbed wish and the Witan's choice. Norman sources — mostly written *after* William had won — stress the promise and the oath. Each side's writers had reasons to tell the story their way.\n\nHarold had a family problem too. His brother **Tostig**, Earl of Northumbria, had been driven out by a Northumbrian rebellion in 1065, and Harold had not backed him. Tostig went looking for foreign allies to win his way back.",
      diagram: `<svg viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline from 1051 to 6 January 1066 showing the claimed promise to William, Harold's oath, Tostig's exile, Edward's death and Harold's coronation"><text x="240" y="18" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">The road to the crisis (not to scale)</text><line x1="20" y1="70" x2="465" y2="70" stroke="#334155" stroke-width="2"/><circle cx="60" cy="70" r="6" fill="#c7d2fe" stroke="#334155"/><circle cx="160" cy="70" r="6" fill="#c7d2fe" stroke="#334155"/><circle cx="255" cy="70" r="6" fill="#fde68a" stroke="#334155"/><circle cx="345" cy="70" r="6" fill="#fecaca" stroke="#334155"/><circle cx="430" cy="70" r="6" fill="#bbf7d0" stroke="#334155"/><text x="60" y="52" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1051</text><text x="160" y="52" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1064</text><text x="255" y="52" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1065</text><text x="345" y="52" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">5 Jan 1066</text><text x="430" y="52" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">6 Jan 1066</text><text x="60" y="95" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Promise to William?</text><text x="60" y="109" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">(Norman sources)</text><text x="160" y="95" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Harold’s oath</text><text x="160" y="109" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">(Norman sources)</text><text x="255" y="95" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Tostig exiled</text><text x="255" y="109" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">from Northumbria</text><text x="345" y="95" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Edward dies,</text><text x="345" y="109" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">no children</text><text x="430" y="95" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Harold crowned,</text><text x="430" y="109" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">chosen by Witan</text><text x="240" y="138" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#334155">Blue = William’s evidence (told by Norman writers after 1066)</text></svg>`,
      diagramCaption: "William's two key pieces of evidence come years before 1066 — and we know about them mainly from Norman writers.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why both Harold Godwinson and William of Normandy believed they had a right to the English throne in 1066. (4 marks)",
          steps: [
            "Spot the command word: *explain why*. You need reasons, not a story — one paragraph per claimant works well.",
            "Harold: name the basis of his claim (chosen by the Witan; named by the dying Edward) and say why that mattered in England (the Witan's choice was the English way of approving a king).",
            "William: name his evidence (Edward's promise of 1051; Harold's oath of 1064; his family link through Emma) and why it mattered to him (an oath sworn on holy relics was sacred — breaking it was a sin).",
            "Finish by linking: the two men relied on *different kinds* of legitimacy, so neither would accept the other's.",
          ],
          answer:
            "Harold believed he had the right to rule because the Witan, England's council of leading nobles and churchmen, chose him on Edward's death, and English sources say the dying Edward entrusted the kingdom to him. In England, being chosen in this way was a normal route to the throne.\n\nWilliam believed the crown was his because, according to Norman writers, Edward had promised it to him in 1051, and Harold himself had sworn an oath on holy relics in 1064 to support William's claim. To William, Harold's coronation was the act of an oath-breaker.\n\nSo both men felt they were in the right, because they were judging by different rules — the Witan's choice versus a promise and a sacred oath.",
          yourTurn: {
            question: "According to Norman writers, in what year did Harold Godwinson swear an oath on holy relics to support William's claim?",
            answer: { type: "number", value: 1064 },
            solution: "1064 — while Harold was in Normandy. Our evidence for it is Norman: William of Poitiers and the Bayeux Tapestry.",
          },
        },
      ],
      keyPoints: [
        "Edward the Confessor died on 5 January 1066 without children; there was no fixed rule of succession.",
        "Four claimants: Harold Godwinson (Witan + deathbed), William (1051 promise + 1064 oath + kinship), Harald Hardrada (old Viking deal), Edgar Ætheling (blood).",
        "Harold was crowned on 6 January 1066, the day of Edward's funeral.",
        "English and Norman sources disagree — check who wrote each one, and when.",
        "Harold's exiled brother Tostig became a dangerous ally for Hardrada.",
      ],
      whyItWorks:
        "Legitimacy in 1066 came from several sources at once — blood, the old king's wishes, election by the Witan, sworn oaths — and in January they pointed at different men. When the rules for becoming king clash, power decides. That is the first answer to our enquiry: kings rise to power when a succession crisis opens a gap, and the winner is often the claimant who can turn a claim into an army.",
      strategies: ["Check the provenance (NOP)", "Sort causes into categories", "Weigh both sides, then judge"],
      thinkDeeper:
        "William's two pieces of evidence — the 1051 promise and the 1064 oath — come mainly from Norman writers working after 1066. Does that make them untrue? What *kind* of evidence would help you decide? (Think about English sources that don't deny the oath, and about why Harold was in Normandy at all.)",
    },
    // ------------------------------------------------------------------
    {
      id: "battles-of-1066",
      heading: "The battles of 1066",
      discovery: {
        problem:
          "A puzzle from the Bayeux Tapestry. Above one scene are the Latin words *Hic Harold Rex interfectus est* — “Here King Harold is killed.” Under the words are **two** figures: one is gripping an arrow near his eye; a few figures along, another man is being cut down by a mounted knight.\n\nWhich one is Harold? Before you read on, list what you would need to know to decide. Who made the Tapestry? When? Has it been changed since? What do other sources say?",
        idea:
          "We genuinely don't know. Some of the earliest accounts describe Harold being hacked down by Norman knights; the famous arrow story is found mainly in later writers. The Tapestry itself was heavily repaired in the 1800s, so even its arrow may not look exactly as first stitched. Historians often think the scene may show both moments, or that the arrow-in-the-eye story grew in the telling. The lesson: a famous image is not automatically a fact — ask who made it, when and why.",
      },
      body:
        "In autumn 1066 England was invaded twice, from opposite ends, within three weeks.\n\n| Date (1066) | Event |\n|---|---|\n| 8 Sept | Harold's southern army has guarded the coast all summer; supplies run out and the men are sent home |\n| 20 Sept | **Gate Fulford**: Harald Hardrada and Tostig defeat the northern earls Edwin and Morcar near York |\n| 25 Sept | **Stamford Bridge**: Harold, after a rapid march north, surprises the Vikings; Hardrada and Tostig are killed |\n| 28 Sept | William lands unopposed at **Pevensey** and builds a wooden fort at Hastings |\n| early Oct | Harold hurries back south, gathering men as he goes |\n| 14 Oct | **Battle of Hastings** |\n\n**The Battle of Hastings.** Harold drew up his army in a **shield wall** along a ridge (Senlac) about seven miles from Hastings. His best men were **housecarls** — professional warriors with two-handed axes; many others were part-time soldiers of the **fyrd**. William attacked uphill with archers, foot soldiers and mounted **knights**. For hours the wall held. At one point a rumour spread that William was dead; he pushed back his helmet to show his face. When some English broke ranks to chase retreating Normans downhill, they were cut down — and Norman writers say William then used **feigned retreats** (pretending to flee) to draw out more. Slowly the wall thinned. Harold's brothers Gyrth and Leofwine were killed, and late in the day Harold himself died. Nobody knows exactly how many fought; historians' estimates run from about 5,000 to 10,000 men on each side.\n\n**The Bayeux Tapestry**, our most famous source, is an embroidery about 70 metres long, probably made in England in the 1070s for **Bishop Odo of Bayeux**, William's half-brother. It is vivid and detailed — but it tells the winners' story.",
      diagram: `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic map of England in 1066 showing Hardrada's landing near York, the battles of Gate Fulford and Stamford Bridge, Harold's marches between London and the north, and William's crossing from St-Valery to Pevensey and Hastings"><polygon points="250,20 300,50 332,96 345,140 392,190 380,225 360,250 388,268 376,290 330,298 280,300 220,302 170,312 128,322 150,296 200,272 206,242 176,230 182,182 206,160 216,120 232,80 236,40" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><path d="M 250 340 L 330 326 L 420 318 L 480 312" fill="none" stroke="#334155" stroke-width="1.5"/><text x="300" y="336" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">NORMANDY</text><text x="250" y="200" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#334155">ENGLAND</text><text x="430" y="296" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#334155">Channel</text><circle cx="300" cy="106" r="4" fill="#1f2937"/><text x="292" y="103" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">York</text><circle cx="303" cy="118" r="4" fill="#fecaca" stroke="#334155"/><text x="294" y="126" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">Fulford 20 Sept</text><circle cx="316" cy="100" r="4" fill="#fecaca" stroke="#334155"/><text x="340" y="116" font-size="10" font-family="sans-serif" fill="#1f2937">Stamford Bridge 25 Sept</text><line x1="318" y1="102" x2="338" y2="112" stroke="#334155" stroke-width="1"/><circle cx="330" cy="244" r="4" fill="#1f2937"/><text x="322" y="240" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">London</text><circle cx="316" cy="293" r="4" fill="#c7d2fe" stroke="#334155"/><text x="308" y="290" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">Pevensey 28 Sept</text><circle cx="340" cy="289" r="4" fill="#fecaca" stroke="#334155"/><text x="352" y="282" font-size="10" font-family="sans-serif" fill="#1f2937">Hastings 14 Oct</text><circle cx="430" cy="318" r="4" fill="#c7d2fe" stroke="#334155"/><text x="440" y="334" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">St-Valery</text><line x1="460" y1="28" x2="324" y2="98" stroke="#334155" stroke-width="2" stroke-dasharray="6 4"/><polygon points="324,98 336,88 340,97" fill="#334155"/><text x="470" y="22" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">Hardrada and Tostig (from Norway)</text><path d="M 326 238 C 300 190 296 160 300 114" fill="none" stroke="#1d4ed8" stroke-width="2"/><path d="M 312 112 C 318 160 326 200 334 238" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="3 3"/><line x1="332" y1="250" x2="338" y2="283" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="3 3"/><line x1="428" y1="315" x2="322" y2="295" stroke="#b91c1c" stroke-width="2"/><polygon points="322,295 334,290 333,299" fill="#b91c1c"/><text x="20" y="40" font-size="10" font-family="sans-serif" fill="#1d4ed8">Blue: Harold north (solid), south (dotted)</text><text x="20" y="56" font-size="10" font-family="sans-serif" fill="#b91c1c">Red: William crosses (27–28 Sept)</text><text x="20" y="72" font-size="10" font-family="sans-serif" fill="#1f2937">Black dashed: Viking invasion</text></svg>`,
      diagramCaption: "Schematic, not to scale. Harold had to fight at both ends of his kingdom within three weeks.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "How useful is the Bayeux Tapestry to a historian studying the Battle of Hastings? (5 marks)",
          steps: [
            "Start with *useful for what?* Pick a purpose — e.g. how the battle was fought, or how the Normans wanted it remembered.",
            "Content: what does it show that fits your own knowledge? (Norman cavalry and archers, the English shield wall, William lifting his helmet, the deaths of Gyrth, Leofwine and Harold.)",
            "Provenance (NOP): Nature — an embroidery, a picture story; Origin — probably made in England in the 1070s for Bishop Odo, William's half-brother; Purpose — to celebrate the Norman victory and show Harold as an oath-breaker.",
            "Limitations: one-sided; no numbers; repaired in the 1800s; it shows a few heroic moments, not the whole day.",
            "Judge: very useful for the Norman view and for equipment and tactics, less reliable on disputed details such as how Harold died.",
          ],
          answer:
            "The Tapestry is very useful for showing *how* the battle was fought. It shows Norman knights on horseback, archers, and the English standing in a shield wall with axes and spears, which matches what we know from written sources. It also shows key moments, such as William lifting his helmet to prove he was alive.\n\nHowever, its provenance limits its reliability. It was probably made in the 1070s for Bishop Odo, William's half-brother, so it tells the Norman story: Harold is shown swearing an oath and then breaking it, so his defeat looks like God's punishment. It was also repaired in the 1800s, so details such as the arrow near Harold's eye are uncertain.\n\nOverall it is extremely useful for weapons, tactics and the Norman point of view, but on disputed details it must be cross-referenced with written sources.",
          yourTurn: {
            question: "Stamford Bridge was fought on 25 September 1066 and William landed at Pevensey on 28 September. How many days after Stamford Bridge did William land?",
            answer: { type: "number", value: 3 },
            solution: "28 − 25 = 3 days. While Harold was still in Yorkshire, William came ashore on the south coast with no army waiting for him.",
          },
        },
      ],
      keyPoints: [
        "Gate Fulford 20 Sept → Stamford Bridge 25 Sept → William lands at Pevensey 28 Sept → Hastings 14 Oct 1066.",
        "At Hastings the English shield wall held the ridge for hours against archers, infantry and cavalry.",
        "Feigned retreats and English troops breaking ranks weakened the wall; Harold and his brothers Gyrth and Leofwine were killed.",
        "The arrow-in-the-eye story is uncertain; army sizes are estimates.",
        "The Bayeux Tapestry is a Norman source, probably made for Bishop Odo in the 1070s.",
      ],
      whyItWorks:
        "The double invasion explains why 1066 turned out as it did. Harold could not be in two places at once: beating Hardrada was a brilliant victory, but it cost him men, energy and time, and left the south coast empty just as the wind finally let William cross. The sequence of events matters as much as the fighting.",
      strategies: ["Use the chronology", "Check the provenance (NOP)", "Ask “useful for what?”", "Cross-reference sources"],
      thinkDeeper:
        "Norman sources make a lot of Harold breaking his oath. Why might it matter to the Normans *how* Harold died? Think about what people in the 11th century believed about God's judgement in battle — and why that would help William, who had just killed an anointed king.",
    },
    // ------------------------------------------------------------------
    {
      id: "why-william-won",
      heading: "Why did William win at Hastings?",
      discovery: {
        problem:
          "Here are six reasons historians give for William's victory:\n\n1. The wind kept William's fleet in port for weeks.\n2. Harald Hardrada invaded the north first.\n3. William brought archers and cavalry as well as foot soldiers.\n4. Harold marched south and attacked quickly instead of waiting for more men.\n5. William had the Pope's support and a papal banner.\n6. The English broke ranks to chase Normans down the hill.\n\nSort them into three boxes: **William's preparation and leadership**, **Harold's decisions and problems**, **luck**. Which card is hardest to place — and why?",
        idea:
          "Several cards fit more than one box, and that is the key insight. The wind (luck) delayed William — but it only helped him because he had the discipline to keep an army fed and together for weeks (skill). Hardrada's invasion (luck) only hurt Harold so badly because of the choice to rush back and fight at once (decision). Good causal explanations don't just list factors; they show how the factors **combined**.",
      },
      body:
        "**William's preparation and leadership**\n\n- He spent the summer of 1066 building and gathering a fleet — probably several hundred ships, perhaps around 700 — and carried horses across the Channel.\n- He persuaded Pope **Alexander II** to support him. A **papal banner** made the invasion look like a holy cause and helped recruit knights from Brittany, Flanders and beyond Normandy.\n- His mixed army — archers, infantry and mounted knights — could attack the shield wall in different ways.\n- In battle he stayed in control: he showed his face to stop a panic, and his knights used **feigned retreats**.\n\n**Harold's decisions and problems**\n\n- His army had marched to Yorkshire, fought a hard battle and marched back — around 200 miles each way between London and York.\n- He chose to fight on 14 October rather than wait for more troops; the northern earls' forces, battered at Fulford, did not join him.\n- The English had few archers, so they could not answer the Norman arrows.\n- Once some of the fyrd broke ranks, the shield wall could not be rebuilt.\n\n**Luck**\n\n- Harold's southern army went home on **8 September** when supplies ran out.\n- Norman writers say contrary winds kept William in port through August and September (some historians think he may also have chosen to wait); when he finally crossed (27–28 September), Harold was about 250 miles away in the north.\n- Harold was killed late in the day. With him and both his brothers dead, the English army had no leader left to rally round.\n\nHistorians still debate how much weight to give each factor. Most agree that no single cause is enough: luck gave William his opportunity, and his preparation and leadership let him take it.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of three linked boxes of causes of William's victory: William's preparation, Harold's problems and luck, with arrows showing how they connect"><rect x="10" y="10" width="200" height="112" rx="8" fill="#c7d2fe" stroke="#334155"/><text x="110" y="30" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">William’s preparation</text><text x="20" y="52" font-size="10" font-family="sans-serif" fill="#1f2937">• hundreds of ships, horses</text><text x="20" y="70" font-size="10" font-family="sans-serif" fill="#1f2937">• papal banner (Alexander II)</text><text x="20" y="88" font-size="10" font-family="sans-serif" fill="#1f2937">• archers + cavalry + infantry</text><text x="20" y="106" font-size="10" font-family="sans-serif" fill="#1f2937">• feigned retreats, leadership</text><rect x="270" y="10" width="200" height="112" rx="8" fill="#fecaca" stroke="#334155"/><text x="370" y="30" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Harold’s problems</text><text x="280" y="52" font-size="10" font-family="sans-serif" fill="#1f2937">• tired after Stamford Bridge</text><text x="280" y="70" font-size="10" font-family="sans-serif" fill="#1f2937">• did not wait for more men</text><text x="280" y="88" font-size="10" font-family="sans-serif" fill="#1f2937">• very few archers</text><text x="280" y="106" font-size="10" font-family="sans-serif" fill="#1f2937">• men broke ranks downhill</text><rect x="140" y="182" width="200" height="112" rx="8" fill="#fde68a" stroke="#334155"/><text x="240" y="202" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Luck</text><text x="150" y="224" font-size="10" font-family="sans-serif" fill="#1f2937">• wind kept William in port</text><text x="150" y="242" font-size="10" font-family="sans-serif" fill="#1f2937">• Hardrada invaded first</text><text x="150" y="260" font-size="10" font-family="sans-serif" fill="#1f2937">• southern army sent home 8 Sept</text><text x="150" y="278" font-size="10" font-family="sans-serif" fill="#1f2937">• Harold killed late in the day</text><line x1="270" y1="66" x2="214" y2="66" stroke="#334155" stroke-width="2"/><polygon points="214,66 224,61 224,71" fill="#334155"/><text x="240" y="58" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">exploited</text><line x1="190" y1="182" x2="140" y2="126" stroke="#334155" stroke-width="2"/><polygon points="140,126 150,131 143,137" fill="#334155"/><text x="152" y="160" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">gave a chance</text><line x1="290" y1="182" x2="340" y2="126" stroke="#334155" stroke-width="2"/><polygon points="340,126 337,137 330,131" fill="#334155"/><text x="328" y="160" font-size="10" font-family="sans-serif" fill="#1f2937">forced a rush</text></svg>`,
      diagramCaption: "The strongest answers explain the arrows, not just the boxes.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "“Harold lost the Battle of Hastings, rather than William winning it.” Give one argument for and one argument against this view, then reach a judgement. (5 marks)",
          steps: [
            "Decode the statement: it claims Harold's mistakes mattered more than William's skill.",
            "Argument for: Harold's choice to fight at once with a tired army, few archers and men missing from the north.",
            "Argument against: William's preparation (fleet, papal banner, mixed army) and leadership (showing his face, feigned retreats).",
            "Link them: Harold's mistakes only proved fatal because William had an army able to exploit them.",
            "Judge, and give your reason: which side does the link point to?",
          ],
          answer:
            "There is some truth in the statement. Harold chose to fight on 14 October with an army worn out by marching to Yorkshire, fighting at Stamford Bridge and marching back, instead of waiting for more men. His army also had very few archers.\n\nHowever, William won the battle through his own skill as well. He had prepared a large fleet, gained the Pope's support, and brought archers and cavalry that could wear down the shield wall. During the battle he stopped a panic by showing his face and used feigned retreats to draw the English off the hill.\n\nOverall, I disagree with the statement. Harold's mistakes created weaknesses, but they only became decisive because William had a well-prepared, flexible army and the leadership to exploit them — a weaker commander might still have lost to a tired shield wall on a strong hill.",
          yourTurn: {
            question: "Which pope gave his support, and a papal banner, to William's invasion of England?",
            answer: { type: "text", accept: ["Alexander II", "Pope Alexander II", "Alexander the Second", "Pope Alexander", "Alexander"], display: "Pope Alexander II" },
            solution: "Pope Alexander II. His support made the invasion look like a holy cause against an oath-breaker, which helped William recruit men.",
          },
        },
      ],
      keyPoints: [
        "Sort causes into William's preparation, Harold's decisions and luck — then link them.",
        "William: large fleet, papal banner from Alexander II, archers and cavalry, feigned retreats, strong leadership.",
        "Harold: exhausted army, fought without waiting for reinforcements, few archers, shield wall broke.",
        "Luck: the wind, Hardrada's timing, the southern army going home on 8 September, Harold's death.",
        "A strong answer reaches a judgement about which factor mattered most and why.",
      ],
      whyItWorks:
        "Big events rarely have one cause. Here, luck created the opportunity (Harold far away in the north, the coast unguarded), Harold's decisions turned that into a real weakness (a tired army fighting at once), and William's preparation and leadership turned the weakness into victory. Remove any one link and the result could have been different.",
      strategies: ["Sort causes into categories", "Link the factors", "Weigh both sides, then judge", "Consider the counterfactual"],
      thinkDeeper:
        "Counterfactual: suppose the wind had changed in mid-August and William had landed while Harold's full army was still waiting on the south coast. Would William still have won? What does your answer tell you about how important luck really was?",
    },
    // ------------------------------------------------------------------
    {
      id: "securing-control",
      heading: "Securing control: castles and the Harrying of the North",
      discovery: {
        problem:
          "It is Christmas 1066 and you are William, newly crowned. You have a few thousand Norman knights and soldiers. Historians estimate England has somewhere between 1.5 and 2 million people, almost none of whom speak your language. Hastings killed Harold, but many English earls, bishops and towns have never fought you.\n\nChoose **three** of these policies and predict what will happen:\n\n- keep the surviving English earls in their jobs\n- build fortified bases in the towns\n- give English land to your followers\n- punish any rebellion so harshly that nobody dares to try again\n- work with the English Church\n- go home to Normandy and leave deputies in charge\n\nWhich would you try first? What would make you change your mind?",
        idea:
          "William actually tried most of these, in roughly that order. At first he kept English earls such as Edwin, Morcar and Waltheof and worked with English bishops. But rebellion broke out again and again, especially while he was away in Normandy. Each rising pushed him towards force: castles in every important town, English land handed to Normans, and in the winter of 1069–70 a deliberate campaign of destruction in the north. Control was not won at Hastings — it took about five more years of fighting.",
      },
      body:
        "William was crowned in Westminster Abbey on **Christmas Day 1066**. Hastings had won him the crown, but not the country.\n\n| Year | Rebellion | Outcome |\n|---|---|---|\n| 1068 | **Exeter** (where Harold's mother Gytha was) | Besieged for 18 days; surrendered; a castle was built |\n| 1068 | Earls Edwin and Morcar | Submitted when William marched north; castle built at York |\n| 1069 | **The North**: Durham and York rise; Edgar Ætheling joins; a Danish fleet arrives | Norman garrisons killed; York's castles captured |\n| 1070–71 | **Hereward the Wake** at Ely, in the Fens, helped at first by the Danes | Ely fell in 1071; Hereward escaped into legend |\n\n**Castles.** The Normans built **motte-and-bailey** castles: an earth mound (motte) topped by a wooden tower, beside a fenced yard (bailey). They were quick to build with forced English labour, and they let a small garrison dominate a town and the roads around it. Historians estimate that hundreds were built in the decades after 1066. Later many were rebuilt in stone — like the **White Tower** in London, begun in the 1070s.\n\n**The Harrying of the North (1069–70).** After the northern rising, William's soldiers spent the winter deliberately destroying villages, crops, animals and ploughs, mainly across Yorkshire. With their food and the means to grow more gone, thousands of people starved. The monk **Orderic Vitalis**, writing about 50–60 years later, claimed that more than 100,000 people died and said he could not praise William for this cruelty. Historians think his figure cannot be checked and may be too high, but even in 1086 the Domesday Book describes many Yorkshire villages as “waste”. It was a deliberate attack on ordinary people, and medieval writers condemned it as cruel too.\n\n**New landowners.** As earls and thegns rebelled or died, their land went to William's followers. By 1086 only a tiny share of England's land was still held by English nobles.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified side view of a motte-and-bailey castle: a wooden keep on an earth mound, a bridge down to a fenced bailey with a hall and stables, and ditches on either side"><text x="240" y="20" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">A motte-and-bailey castle (simplified side view)</text><rect x="16" y="250" width="26" height="16" fill="#bae6fd" stroke="#334155"/><rect x="446" y="250" width="26" height="16" fill="#bae6fd" stroke="#334155"/><line x1="0" y1="250" x2="480" y2="250" stroke="#334155" stroke-width="2"/><polygon points="44,250 106,150 174,150 236,250" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><rect x="118" y="104" width="44" height="46" fill="#fde68a" stroke="#334155"/><rect x="118" y="96" width="8" height="8" fill="#fde68a" stroke="#334155"/><rect x="136" y="96" width="8" height="8" fill="#fde68a" stroke="#334155"/><rect x="154" y="96" width="8" height="8" fill="#fde68a" stroke="#334155"/><text x="140" y="84" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Keep (wooden tower)</text><text x="140" y="210" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Motte</text><text x="140" y="225" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">(earth mound)</text><line x1="172" y1="152" x2="256" y2="214" stroke="#334155" stroke-width="3"/><text x="226" y="170" font-size="10" font-family="sans-serif" fill="#1f2937">bridge</text><line x1="252" y1="196" x2="252" y2="250" stroke="#334155" stroke-width="4"/><line x1="440" y1="196" x2="440" y2="250" stroke="#334155" stroke-width="4"/><line x1="252" y1="200" x2="440" y2="200" stroke="#334155" stroke-width="2" stroke-dasharray="6 3"/><text x="346" y="190" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">palisade (wooden fence)</text><rect x="272" y="216" width="64" height="34" fill="#c7d2fe" stroke="#334155"/><polygon points="268,216 304,204 340,216" fill="#c7d2fe" stroke="#334155"/><text x="304" y="238" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">hall</text><rect x="356" y="226" width="62" height="24" fill="#fecaca" stroke="#334155"/><text x="387" y="242" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">stables</text><text x="340" y="272" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Bailey: yard for soldiers, horses, stores</text><text x="29" y="284" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">ditch</text><text x="459" y="284" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">ditch</text></svg>`,
      diagramCaption: "Earth and timber: quick to build, easy to defend, and a constant reminder of who was in charge.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why William built so many castles after 1066. (4 marks)",
          steps: [
            "Start from William's problem: a small Norman force in a large, hostile country.",
            "Reason 1 — military: a castle let a small garrison hold a town and the roads, and gave a safe base from which to crush rebels.",
            "Reason 2 — speed: motte-and-bailey castles could be put up quickly with forced English labour, exactly when rebellions kept breaking out (Exeter 1068, York 1068–69).",
            "Reason 3 — power and fear: a castle towering over a town was a visible symbol that the Normans were here to stay.",
            "Link back to the question: castles solved the 'few Normans, many English' problem.",
          ],
          answer:
            "William built castles because he had only a few thousand Norman soldiers to control perhaps 1.5–2 million English people. A castle let a small garrison control a town and the roads around it and gave a safe base from which knights could ride out to crush trouble.\n\nThis mattered because rebellions kept breaking out — at Exeter in 1068 and in York in 1068 and 1069 — and each time William built a castle to hold the area afterwards. Motte-and-bailey castles could be built quickly using English labour, so control could be imposed fast.\n\nCastles were also a symbol: a great mound and tower over a town showed the English every day that the Normans were the new masters, which discouraged further resistance.",
          yourTurn: {
            question: "In what year did the Harrying of the North begin (it continued into the following year)?",
            answer: { type: "number", value: 1069 },
            solution: "It began in the winter of 1069, after the northern rising and the capture of York, and continued into early 1070.",
          },
        },
      ],
      keyPoints: [
        "William was crowned on Christmas Day 1066 — but rebellions continued until about 1071.",
        "Key rebellions: Exeter 1068, the North 1069 (with Edgar Ætheling and the Danes), Hereward the Wake at Ely 1070–71.",
        "Motte-and-bailey castles (later stone keeps such as the White Tower) let a few Normans control many English.",
        "The Harrying of the North (1069–70) deliberately destroyed food and farms; thousands died of famine — exact numbers are unknown.",
        "Rebel English earls and thegns lost their land to Normans; by 1086 very little land was in English hands.",
      ],
      whyItWorks:
        "William's problem was numbers: a small conquering elite surrounded by people who had not chosen him. Castles multiplied the power of each soldier, and giving land to Normans tied his followers' wealth to his own survival. The Harrying of the North shows the darkest side of this logic — using terror and famine against civilians so that rebellion could not happen again. It worked as a way to hold power, but it was achieved through great suffering.",
      strategies: ["Use the chronology", "Ask “who benefits?”", "Check the provenance (NOP)", "Use precise evidence"],
      thinkDeeper:
        "Orderic Vitalis was born in England in 1075 to an English mother and a French father who served a Norman lord. He became a monk in Normandy and wrote decades after the Harrying. Does his background make his criticism of William *more* or *less* convincing? Why might a writer who admired much about William, and lived in Normandy, still condemn him?",
    },
    // ------------------------------------------------------------------
    {
      id: "feudal-system-domesday",
      heading: "The feudal system and the Domesday Book",
      discovery: {
        problem:
          "You have just conquered a kingdom. You have little cash and no system of wages — but you now claim to own **all the land**. You need to:\n\n1. reward the barons and knights who fought for you,\n2. have an army ready whenever there is a rebellion or invasion,\n3. make sure the fields are farmed so everyone eats,\n4. make sure everyone is loyal to *you*.\n\nDesign a system that does all four using only land and promises. Sketch it before you read on.",
        idea:
          "Most people design something close to what historians call the **feudal system**: land is handed down the ranks in return for service passed back up. The king grants land to great barons and bishops; they swear loyalty and supply knights; knights receive smaller estates in return for military service; peasants farm the land in return for protection and a strip of their own. Everyone's land depends on staying loyal to the person above them — and ultimately to the king.",
      },
      body:
        "**The feudal system**\n\nWilliam claimed that all land in England belonged to the king. He kept a large share himself and granted the rest in return for service:\n\n| Level | Received | Gave in return |\n|---|---|---|\n| **King** | Owned all the land | Protection and land grants |\n| **Tenants-in-chief** (barons and bishops) | Large estates, often scattered across many counties | Loyalty, advice, and an agreed number of knights |\n| **Knights** | Manors (smaller estates) from their lord | Military service, usually around 40 days a year |\n| **Villeins** (unfree peasants) | A strip of land to farm and protection | Work on the lord's land; could not leave the manor without permission |\n\nA person receiving land knelt before his lord and swore an **oath of fealty** (loyalty). In 1086, at the **Oath of Salisbury**, William had major landholders swear loyalty directly to him. Historians point out that “the feudal system” is a later label and real life was messier than a neat pyramid — but the basic bargain of land for loyalty is clear.\n\n**The Domesday Book**\n\nAt Christmas 1085, at Gloucester, with a Danish invasion threatened, William ordered a great survey. In **1086** royal commissioners visited every county and recorded who held land in 1066 and in 1086, how much it was worth, and how many ploughs, peasants, slaves, mills and woods it had. They covered about 13,000 places — though not London, Winchester or the far north.\n\n> “…there was no single hide nor a yard of land, nor indeed … one ox nor one cow nor one pig which was left out, and not put down in his record.” — *Anglo-Saxon Chronicle*, entry for 1085 (modern translation; the … marks a short phrase left out)\n\nWhy? To know how much tax (**geld**) could be raised, what resources he had for defence, and to settle arguments over land. It also turned the Norman takeover into a written legal record. The English nicknamed it “Domesday” after the Day of Judgement: its verdict could not be appealed.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Feudal pyramid: king at the top, then barons and bishops, then knights, then villeins at the bottom; land flows down and loyalty and service flow up"><polygon points="170,20 202,80 138,80" fill="#fde68a" stroke="#334155" stroke-width="1.5"/><polygon points="138,80 202,80 240,150 100,150" fill="#c7d2fe" stroke="#334155" stroke-width="1.5"/><polygon points="100,150 240,150 277,220 63,220" fill="#bae6fd" stroke="#334155" stroke-width="1.5"/><polygon points="63,220 277,220 320,300 20,300" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><text x="170" y="70" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">King</text><text x="170" y="118" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Barons &amp; bishops</text><text x="170" y="134" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">(tenants-in-chief)</text><text x="170" y="190" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Knights</text><text x="170" y="264" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Villeins (peasants)</text><text x="335" y="56" font-size="10" font-family="sans-serif" fill="#1f2937">owns all the land</text><text x="335" y="112" font-size="10" font-family="sans-serif" fill="#1f2937">get estates; swear fealty;</text><text x="335" y="126" font-size="10" font-family="sans-serif" fill="#1f2937">supply knights</text><text x="335" y="182" font-size="10" font-family="sans-serif" fill="#1f2937">get manors; fight for</text><text x="335" y="196" font-size="10" font-family="sans-serif" fill="#1f2937">their lord</text><text x="335" y="256" font-size="10" font-family="sans-serif" fill="#1f2937">farm the lord’s land;</text><text x="335" y="270" font-size="10" font-family="sans-serif" fill="#1f2937">not free to leave</text><line x1="20" y1="40" x2="20" y2="180" stroke="#334155" stroke-width="2"/><polygon points="20,190 14,178 26,178" fill="#334155"/><text x="20" y="206" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">land</text><line x1="50" y1="190" x2="50" y2="50" stroke="#334155" stroke-width="2"/><polygon points="50,40 44,52 56,52" fill="#334155"/><text x="50" y="30" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">service</text></svg>`,
      diagramCaption: "Land flows down; loyalty and service flow up. Real life was messier, but this was the basic bargain.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Read the Anglo-Saxon Chronicle extract in this section. What can you infer from it about how the English writer felt about the Domesday survey? (2 marks)",
          steps: [
            "Inference = what the source *suggests*, not just what it says. Look for tone and word choice.",
            "Notice the detail: ox, cow, pig. Why list such small things?",
            "Ask about provenance: the Chronicle was written by English monks living under Norman rule.",
            "Make the inference and back it with a quotation.",
          ],
          answer:
            "The source suggests the English writer resented how thorough and intrusive the survey was. By stressing that not “one ox nor one cow nor one pig” was left out, he presents it as an extreme invasion of ordinary people's lives. In the fuller version of the passage he even says it was shameful to relate — a sign that the English saw the survey as a symbol of foreign control and future taxes.",
          yourTurn: {
            question: "The Domesday survey was ordered at Christmas 1085. In what year did the commissioners carry out the survey?",
            answer: { type: "number", value: 1086 },
            solution: "1086 — the same year as the Oath of Salisbury. William died the following year, 1087.",
          },
        },
      ],
      keyPoints: [
        "Feudal system: land granted down (king → barons and bishops → knights → villeins) in return for loyalty and service up.",
        "Oath of fealty: a promise of loyalty to your lord; the Oath of Salisbury (1086) bound major landholders to William himself.",
        "Domesday survey ordered Christmas 1085 at Gloucester; carried out in 1086; about 13,000 places recorded.",
        "Purposes: tax (geld), defence against a threatened Danish invasion, settling land disputes, recording Norman ownership.",
        "“Feudal system” is a later historians' label; reality varied from place to place.",
      ],
      whyItWorks:
        "Land was the main source of wealth in the 11th century, so controlling land meant controlling people. By making every great landholder's estate depend on the king's grant, William tied the Norman elite's fortunes to his own. Domesday then gave the crown knowledge — and knowledge is power: a king who knows exactly what everyone owns can tax them, call up their knights and settle their quarrels on his terms.",
      strategies: ["Make an inference", "Ask “useful for what?”", "Zoom out to the big picture", "Use precise evidence"],
      thinkDeeper:
        "Singapore's government still runs a regular national census and keeps careful land records. In what ways is a modern census like Domesday, and in what important ways is it different? (Think about purpose, who sees the results, and whether people can challenge them.)",
    },
    // ------------------------------------------------------------------
    {
      id: "impact-of-the-conquest",
      heading: "How much did the Conquest change England?",
      discovery: {
        problem:
          "Imagine three English people in the year 1100, about 35 years after Hastings:\n\n- **Godric**, whose father was a thegn (a landowning noble) killed at Hastings\n- **Ælfgifu**, a villein's wife farming strips of land in Essex\n- **Brother Wulfnoth**, a monk at Canterbury\n\nFor each, predict: did the Conquest change their life a lot, a little, or hardly at all? What would each person point to as the biggest difference — or the biggest thing that stayed the same?",
        idea:
          "The answer depends on *who you were*. For the English nobility the Conquest was a catastrophe: lands, titles and power were almost all lost. For the Church there was huge change at the top — new bishops, new buildings, new rules — but the same faith and many of the same services. For most peasants, daily life (ploughing, harvests, the manor, the lord's demands) carried on much as before, although there was a new lord who spoke French, and new castles and forest laws. Good change-and-continuity answers always ask: change *for whom*?",
      },
      body:
        "| Area | Change | Continuity |\n|---|---|---|\n| **Who ruled** | Almost all English earls and great landowners replaced by Normans | Still a king, crowned and anointed in Westminster Abbey |\n| **Language** | Norman French spoken at court; Latin replaced English in government documents | Most people still spoke English, which slowly absorbed French words (*beef*, *pork*, *mutton*) |\n| **Church** | **Lanfranc**, an Italian-born scholar, made Archbishop of Canterbury (1070); English bishops replaced; cathedrals rebuilt in massive Norman style (Canterbury, Winchester, later Durham) | Same Catholic faith, parishes and festivals |\n| **Law and land** | **Forest law**: large areas (e.g. the New Forest, c. 1079) reserved for royal hunting, with harsh punishments | Shires, sheriffs, local courts, silver pennies and the geld tax all carried on |\n| **Peasants** | New Norman lords; castles; heavier demands in some places; slavery slowly declined | Farming, villages and the yearly cycle of work much as before |\n\n**Back to the enquiry: how did William rise to power?**\n\nWilliam did not simply grab a crown by force. He rose through a combination of circumstances:\n\n1. **A succession crisis** — Edward died without an heir and there was no fixed rule.\n2. **A claimed legitimacy** — the promise of 1051, Harold's oath of 1064, his family link, and the Pope's support.\n3. **Military conquest** — a prepared army, and luck at the right moment.\n4. **Making it stick** — coronation, castles, land for loyal followers, ruthless suppression of rebellion, and the Domesday record.\n\nWilliam always presented himself as Edward's lawful heir, not as a foreign usurper. Conquest won him the throne; claimed legitimacy and harsh control let him keep it. He ruled until he died in Normandy in **1087**, and passed England to his son William II (Rufus).",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Change and continuity scale placing landowners, bishops, castles and cathedrals near much change, and shires, peasant farming and everyday English speech near much continuity"><rect x="30" y="44" width="210" height="18" fill="#fecaca" stroke="#334155"/><rect x="240" y="44" width="210" height="18" fill="#bbf7d0" stroke="#334155"/><text x="30" y="34" font-size="11" font-family="sans-serif" fill="#1f2937" font-weight="bold">MUCH CHANGE</text><text x="450" y="34" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937" font-weight="bold">MUCH CONTINUITY</text><text x="240" y="16" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">England after 1066: change or continuity?</text><circle cx="55" cy="90" r="6" fill="#fecaca" stroke="#334155"/><text x="68" y="94" font-size="11" font-family="sans-serif" fill="#1f2937">Earls and great landowners</text><circle cx="75" cy="118" r="6" fill="#fecaca" stroke="#334155"/><text x="88" y="122" font-size="11" font-family="sans-serif" fill="#1f2937">Bishops and abbots</text><circle cx="95" cy="146" r="6" fill="#fecaca" stroke="#334155"/><text x="108" y="150" font-size="11" font-family="sans-serif" fill="#1f2937">Castles and cathedrals</text><circle cx="130" cy="174" r="6" fill="#fde68a" stroke="#334155"/><text x="143" y="178" font-size="11" font-family="sans-serif" fill="#1f2937">Language of government</text><circle cx="175" cy="202" r="6" fill="#fde68a" stroke="#334155"/><text x="188" y="206" font-size="11" font-family="sans-serif" fill="#1f2937">Forest law</text><circle cx="380" cy="230" r="6" fill="#bbf7d0" stroke="#334155"/><text x="367" y="234" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Shires, sheriffs, coins, geld tax</text><circle cx="410" cy="258" r="6" fill="#bbf7d0" stroke="#334155"/><text x="397" y="262" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Peasant farming and village life</text><circle cx="400" cy="286" r="6" fill="#bbf7d0" stroke="#334155"/><text x="387" y="290" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">Everyday English speech</text></svg>`,
      diagramCaption: "A judgement, not a fact: you could argue for moving some of these. Always ask “change for whom?”",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "“The Norman Conquest changed everything in England.” How far do you agree? (6 marks)",
          steps: [
            "Plan two columns: evidence of change and evidence of continuity.",
            "Change paragraph: the ruling class (earls and thegns replaced), the Church (Lanfranc, new bishops, rebuilt cathedrals), castles, forest law, French and Latin in government.",
            "Continuity paragraph: peasant life and farming, shires and sheriffs, coins and geld tax, the English language for most people, the same Christian faith.",
            "Ask *change for whom?* — the top of society versus the majority.",
            "Judge: 'everything' is too strong. Decide how far, and give your reason.",
          ],
          answer:
            "The Conquest brought dramatic change at the top of society. Almost all the English earls and great landowners were replaced by Normans, so that by 1086 very little land was held by English nobles. The Church was transformed too: Lanfranc became Archbishop of Canterbury in 1070, English bishops were replaced, and huge new cathedrals were built. Castles and harsh forest laws were new and visible signs of Norman power.\n\nHowever, a great deal stayed the same. Most people were peasants, and their farming, villages and duties to a lord carried on much as before — they simply had a new, French-speaking lord. The Normans kept Anglo-Saxon government: shires, sheriffs, local courts, coins and the geld tax. Most people still spoke English and practised the same faith.\n\nOverall, I only partly agree. The Conquest changed *who* ruled England almost completely, but it did not change *how* most people lived. It was a revolution for the elite and much more continuity for the majority.",
          yourTurn: {
            question: "Name the Italian-born churchman William made Archbishop of Canterbury in 1070.",
            answer: { type: "text", accept: ["Lanfranc", "Archbishop Lanfranc", "Lanfranc of Pavia", "Lanfranc of Bec"], display: "Lanfranc" },
            solution: "Lanfranc — a famous scholar, previously abbot of St Stephen's in Caen, who reorganised the English Church on Norman lines.",
          },
        },
      ],
      keyPoints: [
        "Huge change at the top: Norman earls, barons, bishops and abbots replaced the English elite.",
        "Church: Lanfranc Archbishop of Canterbury (1070); new cathedrals in Norman (Romanesque) style.",
        "New features: castles, forest law, Norman French at court, Latin in government documents.",
        "Continuity: peasant life, shires and sheriffs, coins, the geld tax, the English language for most people.",
        "Enquiry answer: William rose to power through a succession crisis, claimed legitimacy and conquest — then kept it by force and control.",
      ],
      whyItWorks:
        "Conquerors usually replace the people at the top but keep the systems that already work, because those systems collect taxes and keep order. William kept the efficient Anglo-Saxon machinery of shires, sheriffs and geld, and put Normans in charge of it. That is why the Conquest looks revolutionary if you study the nobility, and much less so if you study a village.",
      strategies: ["Look for change AND continuity", "Ask “who benefits?”", "Compare case studies", "Weigh both sides, then judge"],
      thinkDeeper:
        "Compare William's rise with how Malay sultans claimed authority, through royal descent and *daulat* (sacred sovereignty). William also wanted his rule to seem sacred: he was crowned and anointed, and he flew a papal banner. Why do rulers who gained power by force work so hard to look *legitimate*? Keep this question for King John and Henry VIII.",
    },
  ],
  learn: {
    flashcards: [
      { front: "When did Edward the Confessor die?", back: "5 January 1066, without children." },
      { front: "When was Harold Godwinson crowned?", back: "6 January 1066, the day of Edward's funeral." },
      { front: "What was the Witan?", back: "The council of leading nobles and churchmen that advised the king and helped choose a new one." },
      { front: "What two pieces of evidence did William use for his claim?", back: "Edward's promise (said to be in 1051) and Harold's oath on holy relics (1064) — both reported mainly by Norman sources." },
      { front: "What was Harald Hardrada's claim based on?", back: "An old deal between King Magnus of Norway and King Harthacnut that whoever died first, the other would inherit." },
      { front: "Gate Fulford — date and result?", back: "20 September 1066: Hardrada and Tostig defeat Earls Edwin and Morcar near York." },
      { front: "Stamford Bridge — date and result?", back: "25 September 1066: Harold defeats the Vikings; Hardrada and Tostig are killed." },
      { front: "Where and when did William land?", back: "Pevensey, on the south coast, on 28 September 1066." },
      { front: "What is a feigned retreat?", back: "Pretending to run away to lure enemy soldiers out of a strong position, then turning to attack them." },
      { front: "Who probably commissioned the Bayeux Tapestry?", back: "Bishop Odo of Bayeux, William's half-brother, probably in the 1070s." },
      { front: "When was William crowned?", back: "Christmas Day (25 December) 1066, in Westminster Abbey." },
      { front: "What was the Harrying of the North?", back: "William's deliberate destruction of villages, crops, animals and ploughs in the north (mainly Yorkshire) in 1069–70 after a rebellion, causing famine and many deaths." },
      { front: "Who led resistance from the Isle of Ely in 1070–71?", back: "Hereward the Wake." },
      { front: "What is a motte-and-bailey castle?", back: "An earth mound (motte) with a wooden tower on top, next to a fenced yard (bailey) — quick to build and easy to defend." },
      { front: "What were the main purposes of the Domesday survey?", back: "To work out tax (geld), know the kingdom's resources for defence, settle land disputes, and record who held land." },
      { front: "Who was Lanfranc?", back: "Italian-born scholar whom William made Archbishop of Canterbury in 1070; he reorganised the English Church." },
    ],
    mustKnow: [
      "Can you name the four claimants of 1066 and the basis of each claim?",
      "Can you put Gate Fulford, Stamford Bridge, the Pevensey landing and Hastings in order with their dates?",
      "Can you describe the tactics used at Hastings (shield wall, archers, cavalry, feigned retreats)?",
      "Can you explain why William won, sorting reasons into his preparation, Harold's problems and luck — and linking them?",
      "Can you evaluate the Bayeux Tapestry as a source, using its provenance?",
      "Can you name three rebellions against William and explain how he dealt with them?",
      "Can you describe the Harrying of the North accurately and explain why it was so serious?",
      "Can you draw and explain a motte-and-bailey castle and say why castles helped William?",
      "Can you draw the feudal pyramid and explain land-for-service?",
      "Can you explain what the Domesday Book recorded and why William ordered it?",
      "Can you weigh change against continuity after 1066 — and say for whom things changed?",
      "Can you explain how William's rise answers the enquiry: under what circumstances did kings rise to power?",
    ],
    misconceptions: [
      { wrong: "Harold Godwinson and Harald Hardrada are the same person.", right: "Harold Godwinson was the English king; Harald Hardrada was the King of Norway who invaded the north and was killed at Stamford Bridge." },
      { wrong: "We know for certain that Harold was killed by an arrow in the eye.", right: "It is uncertain. Some early accounts say knights cut him down; the arrow story appears in later writers, and the Tapestry was repaired in the 1800s." },
      { wrong: "William became king the day he won at Hastings.", right: "He was crowned on Christmas Day 1066 after marching round London and receiving the submission of English leaders; full control took until about 1071." },
      { wrong: "The Bayeux Tapestry is a neutral record made by someone who watched the battle.", right: "It was made years later, probably for Bishop Odo, William's half-brother, and tells the Norman version." },
      { wrong: "William had the strongest claim, so of course he won.", right: "His claim depended on disputed evidence; he won because of preparation, luck and Harold's situation, then kept power by force." },
      { wrong: "The Domesday Book was a census that counted every person in England.", right: "It recorded land, resources and (mostly) heads of households, for tax and control — and missed out London, Winchester and the far north." },
      { wrong: "The Conquest changed life completely for everyone.", right: "It transformed the elite, but most peasants' daily lives carried on much as before under new lords." },
    ],
    examMistakes: [
      "Telling the story of the Battle of Hastings when the question asks you to explain *why* William won.",
      "Mixing up Harold (England) and Harald (Norway), or Stamford Bridge with Hastings.",
      "Giving the arrow-in-the-eye story as definite fact.",
      "Calling the Bayeux Tapestry reliable or unreliable without explaining its provenance (made for Bishop Odo, 1070s).",
      "Listing factors without linking them or reaching a judgement about which mattered most.",
      "Writing that Domesday was compiled in 1066 — it was ordered in 1085 and carried out in 1086.",
      "Describing the Harrying of the North vaguely or without its human cost — or quoting Orderic's 100,000 as an exact, proven number.",
      "In change-and-continuity questions, only writing about change.",
    ],
    mnemonics: [
      { topic: "The 1066 sequence", device: "Fierce Swords, Pevensey, Hastings", explanation: "Fulford (20 Sept) → Stamford Bridge (25 Sept) → Pevensey landing (28 Sept) → Hastings (14 Oct)." },
      { topic: "The feudal pyramid, top to bottom", device: "Kings Build Knights’ Villages", explanation: "King → Barons (and bishops) → Knights → Villeins." },
      { topic: "Why William won", device: "PHL — Preparation, Harold, Luck", explanation: "Three boxes for causes: William's Preparation and leadership, Harold's decisions and problems, Luck. Then draw the links between them." },
    ],
    realWorld: [
      { title: "Your English is half Norman", detail: "Thousands of English words came from Norman French after 1066 — beef, pork, mutton, court, justice, prison. The old pairs survive: the English farmer's cow and pig, the Norman lord's beef and pork.", emoji: "🗣️" },
      { title: "The Domesday Book still exists", detail: "The original volumes are kept at The National Archives in Kew, London, and the whole survey can be searched online. Historians and local researchers still use it to trace the history of their own towns and villages.", emoji: "📖" },
      { title: "Castles you can still visit", detail: "The White Tower at the Tower of London, begun in William's reign, still stands. Many towns keep their Norman mottes — grassy mounds that were once the seat of local power.", emoji: "🏰" },
      { title: "Censuses and data", detail: "Like Domesday, modern governments — including Singapore's Department of Statistics — gather data to plan taxes and services. Today, laws limit how such data is used, a protection the English of 1086 never had.", emoji: "📊" },
      { title: "Legitimacy still matters", detail: "Modern leaders seek recognition from elections, courts and international bodies, much as William sought the Pope's banner. Power that looks legitimate is easier to keep.", emoji: "⚖️" },
    ],
    videos: [
      { title: "The Battle of Hastings explained", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=battle+of+hastings+1066+explained" },
      { title: "The Bayeux Tapestry animated", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=bayeux+tapestry+animated" },
      { title: "The Harrying of the North", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=harrying+of+the+north+william+the+conqueror" },
      { title: "Motte-and-bailey castles", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=motte+and+bailey+castle+norman" },
      { title: "The Domesday Book explained", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=domesday+book+explained+for+students" },
    ],
    keyDates: [
      { year: 1028, date: "c. 1028", event: "William born at Falaise, Normandy", note: "Illegitimate son of Duke Robert; he became duke as a child in 1035." },
      { year: 1051, date: "1051", event: "Edward's alleged promise of the crown to William", note: "Reported by Norman writers — the base of William's claim." },
      { year: 1064, date: "1064", event: "Harold swears an oath to William on holy relics (Norman sources)", note: "Made Harold an oath-breaker in Norman eyes." },
      { year: 1066, date: "5 Jan 1066", event: "Edward the Confessor dies without children", note: "The succession crisis begins." },
      { year: 1066, date: "6 Jan 1066", event: "Harold Godwinson crowned", note: "Chosen by the Witan." },
      { year: 1066, date: "20 Sept 1066", event: "Battle of Gate Fulford", note: "Hardrada and Tostig defeat Edwin and Morcar near York." },
      { year: 1066, date: "25 Sept 1066", event: "Battle of Stamford Bridge", note: "Harold defeats and kills Hardrada and Tostig." },
      { year: 1066, date: "28 Sept 1066", event: "William lands at Pevensey", note: "The south coast is undefended." },
      { year: 1066, date: "14 Oct 1066", event: "Battle of Hastings", note: "Harold killed; William victorious." },
      { year: 1066, date: "25 Dec 1066", event: "William crowned in Westminster Abbey", note: "King in law — but not yet in control." },
      { year: 1068, date: "1068", event: "Siege of Exeter", note: "First major revolt; a castle built afterwards." },
      { year: 1069, date: "1069–70", event: "Northern rising and the Harrying of the North", note: "Deliberate destruction causes famine across Yorkshire." },
      { year: 1070, date: "1070", event: "Lanfranc becomes Archbishop of Canterbury", note: "Normanising the English Church." },
      { year: 1071, date: "1071", event: "Ely falls; Hereward's revolt ends", note: "The last major English rising of the Conquest years." },
      { year: 1085, date: "Christmas 1085", event: "William orders the Domesday survey at Gloucester", note: "Prompted partly by a threatened Danish invasion." },
      { year: 1086, date: "1086", event: "Domesday survey carried out; Oath of Salisbury", note: "The kingdom recorded and its landholders bound to the king." },
      { year: 1087, date: "9 Sept 1087", event: "William dies at Rouen, Normandy", note: "His son William II (Rufus) becomes King of England." },
    ],
    keyTerms: [
      { term: "Witan", definition: "Council of leading nobles and churchmen that advised Anglo-Saxon kings and helped choose a new king." },
      { term: "Ætheling", definition: "Anglo-Saxon title for a prince of the royal family who was eligible to be king (as in Edgar Ætheling)." },
      { term: "Claimant", definition: "Someone who says they have a right to something — here, the throne." },
      { term: "Legitimacy", definition: "Being accepted as the rightful ruler — through birth, being chosen, a promise, Church approval or law — rather than just holding power." },
      { term: "Housecarl", definition: "A professional, well-armed warrior in the household of an Anglo-Saxon king or earl." },
      { term: "Fyrd", definition: "The Anglo-Saxon part-time army of men called up from the shires." },
      { term: "Shield wall", definition: "A tight line of soldiers with overlapping shields — strong while it stays unbroken." },
      { term: "Feigned retreat", definition: "Pretending to flee to draw the enemy out of position, then turning to attack." },
      { term: "Papal banner", definition: "A flag sent by the Pope as a sign of his blessing; William's showed the invasion had Church support." },
      { term: "Motte-and-bailey", definition: "Early Norman castle: an earth mound (motte) with a wooden tower, beside a fenced yard (bailey)." },
      { term: "Keep", definition: "The main tower of a castle; later Norman keeps were built of stone, like the White Tower in London." },
      { term: "Harrying of the North", definition: "William's deliberate destruction of food, farms and villages in the north in 1069–70, causing famine." },
      { term: "Feudal system", definition: "Later historians' name for a society organised around land granted in return for loyalty and service." },
      { term: "Tenant-in-chief", definition: "A baron or bishop who held land directly from the king." },
      { term: "Fealty", definition: "Loyalty sworn by a vassal to his lord in a solemn oath." },
      { term: "Villein", definition: "An unfree peasant who farmed land for a lord and could not leave the manor without permission." },
      { term: "Domesday Book", definition: "Record of William's 1086 survey of landholding and resources in England." },
      { term: "Geld", definition: "A land tax collected by English kings before and after 1066." },
      { term: "Forest law", definition: "Harsh Norman laws reserving large areas for royal hunting, with severe punishments for poaching." },
    ],
  },
};
