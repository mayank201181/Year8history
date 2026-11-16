import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "king-john",
  title: "King John and Magna Carta",
  strand: "Kings & Power",
  icon: "📜",
  summary: "The youngest son nobody expected to be king — who lost an empire and was forced to accept Magna Carta.",
  intro:
    "**Term 1 enquiry: Under what circumstances did kings rise to power?** William I won his crown with an army. John, the youngest son of Henry II, was never expected to be king at all — yet in 1199 he was crowned, ahead of a nephew with a rival claim.\n\nThis topic follows John from 'Lackland' to king, through the loss of Normandy, a six-year quarrel with the Pope and a rebellion by his own barons, to **Magna Carta** in 1215. Along the way you will meet a second question that runs through the whole year: **what happens when a ruler loses the trust of the powerful?**\n\nYou will weigh causes, test biased chronicles against government records, and decide for yourself whether John deserves his reputation as one of England's worst kings.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "becoming-king",
      heading: "How John became king",
      discovery: {
        problem:
          "**April 1199.** Richard the Lionheart has died of a crossbow wound, leaving **no legitimate children**. There is no written rule about who comes next. Two candidates:\n\n| | John | Arthur of Brittany |\n|---|---|---|\n| Relationship | Richard's youngest brother | Son of Geoffrey, Richard's dead *older* brother |\n| Age | 32 | 12 |\n| Supporters | His mother, Eleanor of Aquitaine; many English and Norman barons | Barons of Anjou, Maine, Touraine and Brittany; King Philip II of France |\n| Record | Rebelled against Richard in 1193–94 | Too young to have a record |\n\nYou are a powerful baron. Who do you back — and what does your choice tell you about how kings rose to power?",
        idea:
          "Most barons in England and Normandy backed **John**. The *History of William Marshal* (a verse biography written in the 1220s) reports Marshal arguing that a son is nearer to his father's land than a grandson — so Henry II's son came before Henry II's grandson. A grown man also looked safer than a boy king, and Arthur was being raised under the influence of **Philip II**, the Angevins' great enemy.\n\nBut this was a **disputed succession**, not an automatic one. John rose to power through **speed, the support of powerful people and his rival's youth** — and he began his reign with a living rival.",
      },
      body:
        "**The Angevin empire.** John's father, **Henry II** (king 1154–1189), ruled more of France than the King of France did: England, Normandy, Anjou, Maine and Touraine, and — through his marriage in 1152 to **Eleanor of Aquitaine** — the huge duchy of Aquitaine in the south-west. Historians call this collection of lands the **Angevin empire** (from Anjou). Four of Henry and Eleanor's sons grew up: Henry 'the Young King', Richard, Geoffrey and John.\n\n**The youngest son.** John, born in **1166**, came last, and his father's lands had already been promised to his brothers. He was nicknamed **'Lackland'**. He was later made Lord of Ireland, but his first visit there, in 1185, was a fiasco.\n\n**Richard the Lionheart.** Henry the Young King died in 1183 and Geoffrey in 1186, so **Richard I** became king in **1189**. Richard spent only about six months of his ten-year reign in England. He led the **Third Crusade** (1190–1192); on the way home he was captured by the Duke of Austria and handed to the German emperor, who demanded a ransom of **150,000 marks** — an enormous sum, raised by heavy taxes in England.\n\n**John's rebellion.** While Richard was a prisoner, John allied with **Philip II of France** and tried to seize power (1193–1194). When Richard was freed in 1194 he forgave his brother — but John had shown he could be disloyal.\n\n**1199: a disputed succession.** Richard died in **April 1199**. John moved fast: he seized the royal treasure at Chinon, won the backing of his mother **Eleanor**, the great knight **William Marshal** and **Archbishop Hubert Walter**, and was crowned at Westminster on **27 May 1199**. The barons of Anjou, Maine, Touraine and Brittany, however, backed his nephew **Arthur**, supported by Philip II.\n\n| Claimant | Strengths | Weaknesses |\n|---|---|---|\n| John | Adult; Henry II's son; on the spot; mother's support | Past disloyalty; not trusted |\n| Arthur | Son of an *older* brother | Only 12; backed by the King of France |\n\n**Arthur's disappearance.** In 1202 John captured Arthur at **Mirebeau**. Arthur was imprisoned at Falaise and then Rouen, and in **1203** he vanished. Most historians believe John had him killed — one chronicle claims John did it with his own hands. Rumours of murder spread fast and cost John support exactly when he needed it most.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified Angevin family tree. Henry II married Eleanor of Aquitaine. Their sons: Henry the Young King, died 1183; Richard I, king 1189 to 1199, no legitimate children; Geoffrey, Duke of Brittany, died 1186, father of Arthur, born 1187, vanished 1203; and John Lackland, born 1166, king 1199 to 1216, father of Henry III."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g font-family="sans-serif" fill="#1f2937"><rect x="90" y="10" width="140" height="38" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="160" y="26" font-size="12" font-weight="bold" text-anchor="middle">Henry II</text><text x="160" y="41" font-size="11" text-anchor="middle">king 1154–1189</text><rect x="250" y="10" width="140" height="38" rx="6" fill="#fde68a" stroke="#334155"/><text x="320" y="26" font-size="11" font-weight="bold" text-anchor="middle">Eleanor of Aquitaine</text><text x="320" y="41" font-size="11" text-anchor="middle">died 1204</text><line x1="230" y1="27" x2="250" y2="27" stroke="#334155" stroke-width="2"/><line x1="230" y1="31" x2="250" y2="31" stroke="#334155" stroke-width="2"/><line x1="240" y1="31" x2="240" y2="75" stroke="#334155" stroke-width="1.5"/><line x1="62" y1="75" x2="410" y2="75" stroke="#334155" stroke-width="1.5"/><line x1="62" y1="75" x2="62" y2="90" stroke="#334155" stroke-width="1.5"/><line x1="178" y1="75" x2="178" y2="90" stroke="#334155" stroke-width="1.5"/><line x1="294" y1="75" x2="294" y2="90" stroke="#334155" stroke-width="1.5"/><line x1="410" y1="75" x2="410" y2="90" stroke="#334155" stroke-width="1.5"/><rect x="10" y="90" width="104" height="50" rx="6" fill="#e2e8f0" stroke="#334155"/><text x="62" y="105" font-size="11" font-weight="bold" text-anchor="middle">Henry</text><text x="62" y="119" font-size="11" text-anchor="middle">'the Young King'</text><text x="62" y="133" font-size="11" text-anchor="middle">died 1183</text><rect x="126" y="90" width="104" height="50" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="178" y="105" font-size="11" font-weight="bold" text-anchor="middle">Richard I</text><text x="178" y="119" font-size="11" text-anchor="middle">'the Lionheart'</text><text x="178" y="133" font-size="11" text-anchor="middle">king 1189–1199</text><rect x="242" y="90" width="104" height="50" rx="6" fill="#e2e8f0" stroke="#334155"/><text x="294" y="105" font-size="11" font-weight="bold" text-anchor="middle">Geoffrey</text><text x="294" y="119" font-size="11" text-anchor="middle">Duke of Brittany</text><text x="294" y="133" font-size="11" text-anchor="middle">died 1186</text><rect x="358" y="90" width="104" height="50" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="410" y="105" font-size="11" font-weight="bold" text-anchor="middle">John 'Lackland'</text><text x="410" y="119" font-size="11" text-anchor="middle">born 1166</text><text x="410" y="133" font-size="11" text-anchor="middle">king 1199–1216</text><text x="178" y="158" font-size="11" font-style="italic" text-anchor="middle">no legitimate children</text><line x1="294" y1="140" x2="294" y2="170" stroke="#334155" stroke-width="1.5"/><line x1="410" y1="140" x2="410" y2="170" stroke="#334155" stroke-width="1.5"/><rect x="242" y="170" width="104" height="50" rx="6" fill="#fecaca" stroke="#334155"/><text x="294" y="185" font-size="11" font-weight="bold" text-anchor="middle">Arthur</text><text x="294" y="199" font-size="11" text-anchor="middle">born 1187</text><text x="294" y="213" font-size="11" text-anchor="middle">vanished 1203</text><rect x="358" y="170" width="104" height="50" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="410" y="185" font-size="11" font-weight="bold" text-anchor="middle">Henry III</text><text x="410" y="199" font-size="11" text-anchor="middle">born 1207</text><text x="410" y="213" font-size="11" text-anchor="middle">king 1216–1272</text><text x="240" y="246" font-size="12" font-weight="bold" text-anchor="middle">1199: Richard's brother John, or his nephew Arthur?</text><text x="240" y="265" font-size="11" text-anchor="middle">Arthur's father was older than John — but Arthur was only 12.</text><rect x="110" y="279" width="12" height="12" fill="#bbf7d0" stroke="#334155"/><text x="128" y="289" font-size="11">= crowned king of England</text><rect x="290" y="279" width="12" height="12" fill="#fecaca" stroke="#334155"/><text x="308" y="289" font-size="11">= rival claimant</text></g></svg>`,
      diagramCaption:
        "Simplified Angevin family tree (daughters and other children left out). Follow the lines: in 1199 the crown could have gone to Richard's brother or to the son of an older brother.",
      workedExamples: [
        {
          title: "Modelled answer: explaining a rise to power",
          problem: "Explain why John became king in 1199. (6 marks)",
          steps: [
            "**Plan.** Choose two or three causes and link them: (1) Richard died with no heir and there was no fixed rule; (2) John had powerful supporters; (3) Arthur's weaknesses. Finish by saying which mattered most.",
            "**Paragraph 1 (Point–Evidence–Explain–Link).** One reason John became king was that **Richard I died in April 1199 without a legitimate child**, and there was no fixed rule about whether a brother or a nephew should inherit. This meant the throne went to whoever could win support most quickly. So the circumstances of Richard's death gave John his opportunity.",
            "**Paragraph 2.** Another reason was that John **won the backing of powerful people**. His mother, **Eleanor of Aquitaine**, supported him, the *History of William Marshal* says Marshal argued that a son came before a grandson, and **Archbishop Hubert Walter** crowned him at Westminster on 27 May 1199. This mattered because the great barons and the Church decided in practice whether a claimant could rule.",
            "**Paragraph 3.** Finally, his rival **Arthur was only 12** and was backed by Philip II of France, so English and Norman barons feared a boy king controlled by their enemy.",
            "**Judgement.** The most important reason was John's **support from powerful people**. Richard's death only created the opportunity, and Arthur's youth only mattered because the barons chose the adult who was on the spot.",
          ],
          answer:
            "Richard's childless death created the opportunity, but the backing of Eleanor, William Marshal and Hubert Walter turned John's claim into a crown.",
          yourTurn: {
            question: "In which year was John crowned King of England?",
            answer: { type: "number", value: 1199 },
            solution: "John was crowned at Westminster on 27 May **1199**, about seven weeks after Richard I died.",
          },
        },
      ],
      keyPoints: [
        "Henry II and Eleanor of Aquitaine built the **Angevin empire**: England plus about half of France.",
        "John was the **youngest son**, nicknamed **'Lackland'**, and was not expected to be king.",
        "John rebelled while **Richard I** was a prisoner after the crusade (1193–94); Richard forgave him.",
        "When Richard died childless in **1199**, John moved fast and was crowned on **27 May 1199**.",
        "His nephew **Arthur of Brittany** had a rival claim; Arthur vanished in **1203**, probably murdered on John's orders.",
      ],
      whyItWorks:
        "Why did John become king? In 1199 there was **no fixed rule** about whether a younger brother or the son of an older brother should inherit. So the crown went to whoever could **win support and act quickly**. John had what mattered in practice — he was an adult, he had his mother's backing, he grabbed the treasure and he won over England's leading men. But a disputed succession left him with a rival, and the way that rival vanished convinced many people that John was ruthless and untrustworthy. The circumstances that put him on the throne also planted the seeds of his later problems.",
      strategies: ["Think about who benefited", "Weigh factors", "Avoid hindsight"],
      thinkDeeper:
        "John and William I both had claims that others disputed. Was John's route to the throne in 1199 stronger or weaker than William's in 1066? What does each case suggest about whether *blood* or *power* mattered more in deciding who became king?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "losing-normandy",
      heading: "Losing Normandy and raising money",
      discovery: {
        problem:
          "**A puzzle.** On 1 August 1202, John won a brilliant victory. After a lightning march of about 80 miles in two days, he surprised his enemies at **Mirebeau**, rescued his mother Eleanor, and captured his rival Arthur and more than 200 knights.\n\nYet less than **two years later** he had lost **Normandy** — the duchy his family had ruled since before 1066.\n\nPredict **three** reasons why a king could go from winner to loser so quickly. Write them down, then read on to test your predictions.",
        idea:
          "Historians usually point to a mix of reasons:\n\n1. **Philip II** was patient, determined and close by — Normandy bordered his lands around Paris.\n2. John **lost trust**: harsh treatment of prisoners and Arthur's disappearance turned Breton and Angevin lords against him.\n3. Many Norman lords **chose the likely winner** rather than fight for a king they did not trust.\n4. John's attempt to relieve his great castle, **Château Gaillard**, failed, and he left Normandy for England in December 1203.\n\nNotice how the causes **link**: distrust made lords desert, and desertions made defence impossible.",
      },
      body:
        "**The rival: Philip II of France.** Philip II (king 1180–1223) was clever, patient and determined to break up the Angevin empire. He was John's **overlord** for his French lands — John held them as Philip's vassal.\n\n**The excuse for war.** In 1200 John married **Isabella of Angoulême**, who was already promised to Hugh of Lusignan, a powerful lord in Poitou. The Lusignans appealed to Philip as overlord. When John refused to attend Philip's court, Philip declared in **1202** that John's French lands were forfeit — a legal excuse for war.\n\n**From Mirebeau to disaster.** The victory at Mirebeau (1202) was followed by mistakes. Prisoners were treated harshly and Arthur vanished in 1203. Breton and Angevin lords switched sides. Philip besieged **Château Gaillard**, Richard's mighty castle guarding the road to Rouen; it fell in **March 1204**, and **Rouen** surrendered in **June 1204**. Normandy — along with Anjou, Maine and Touraine — was lost. John kept England and **Gascony** in the far south, and fought on in Poitou. His critics mocked him as **'Softsword'**.\n\n**Was it all John's fault?**\n\n| Factor | Evidence |\n|---|---|\n| Philip's strength | Normandy bordered Philip's heartland; his lands and income were growing (historians debate how they compared with John's) |\n| Money | Richard's wars and ransom had drained Angevin resources |\n| John's leadership | Distrusted his own barons; left Normandy in December 1203 |\n| Loyalty | Many Norman lords felt little loyalty to a king they feared |\n\n**Raising money to win it back.** Losing Normandy shaped the rest of the reign. John now lived mostly in **England** and spent ten years squeezing out money for a reconquest:\n\n- **Scutage** ('shield money'), paid by barons instead of military service — John levied it **eleven times**, far more often than earlier kings.\n- A tax of **one-thirteenth** on income and movable goods in **1207**, which raised a huge sum.\n- **Fines and reliefs**: heavy payments to inherit land, to marry or to win the king's favour. In 1214 Geoffrey de Mandeville was charged **20,000 marks** to marry the wealthy Isabella of Gloucester — John's own former wife.\n- **Selling offices** such as sheriffships, and heavy taxes on England's Jewish communities.\n\n**A hard-working administrator.** John travelled constantly, heard law cases himself and kept careful records — far more government records survive from his reign than from earlier ones. He was efficient. But efficiency at taking money, combined with suspicion and harshness, made his barons fear and distrust him.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic map, not to scale, of the Angevin lands around 1200. England, Ireland and Gascony were kept by John. Normandy, Brittany, Maine, Anjou and Touraine were lost to Philip II in 1203 to 1205. Poitou was fought over. Philip II's royal lands around Paris lay just east of Normandy."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><g font-family="sans-serif" fill="#1f2937"><text x="470" y="18" font-size="11" text-anchor="end">Schematic map — not to scale</text><line x1="455" y1="58" x2="455" y2="32" stroke="#334155" stroke-width="2"/><polygon points="450,38 455,28 460,38" fill="#334155"/><text x="455" y="72" font-size="11" text-anchor="middle">N</text><ellipse cx="62" cy="58" rx="30" ry="40" fill="#bbf7d0" stroke="#334155"/><text x="62" y="62" font-size="11" text-anchor="middle">IRELAND</text><polygon points="112,108 150,96 238,104 236,62 214,14 178,10 168,48 150,70 128,88" fill="#bbf7d0" stroke="#334155"/><text x="196" y="74" font-size="12" font-weight="bold" text-anchor="middle">ENGLAND</text><text x="250" y="128" font-size="11" font-style="italic" fill="#334155" text-anchor="middle">English Channel</text><polygon points="182,142 230,138 290,146 292,182 240,184 182,182" fill="#fecaca" stroke="#334155"/><text x="236" y="160" font-size="11" font-weight="bold" text-anchor="middle">NORMANDY</text><text x="236" y="174" font-size="11" text-anchor="middle">lost 1204</text><polygon points="80,170 178,160 182,184 176,208 110,210 76,196" fill="#fecaca" stroke="#334155"/><text x="128" y="192" font-size="11" font-weight="bold" text-anchor="middle">BRITTANY</text><rect x="182" y="186" width="80" height="26" fill="#fecaca" stroke="#334155"/><text x="222" y="203" font-size="11" font-weight="bold" text-anchor="middle">MAINE</text><rect x="160" y="214" width="70" height="26" fill="#fecaca" stroke="#334155"/><text x="195" y="231" font-size="11" font-weight="bold" text-anchor="middle">ANJOU</text><rect x="232" y="214" width="70" height="26" fill="#fecaca" stroke="#334155"/><text x="267" y="231" font-size="11" font-weight="bold" text-anchor="middle">TOURAINE</text><rect x="150" y="242" width="130" height="26" fill="#e2e8f0" stroke="#334155"/><text x="215" y="259" font-size="11" font-weight="bold" text-anchor="middle">POITOU</text><polygon points="150,270 280,270 270,312 160,312" fill="#bbf7d0" stroke="#334155"/><text x="215" y="290" font-size="11" font-weight="bold" text-anchor="middle">GASCONY</text><text x="215" y="304" font-size="11" text-anchor="middle">kept</text><polygon points="298,150 372,148 380,214 304,220" fill="#bae6fd" stroke="#334155"/><text x="340" y="166" font-size="11" font-weight="bold" text-anchor="middle">Philip II's</text><text x="340" y="180" font-size="11" font-weight="bold" text-anchor="middle">lands</text><circle cx="332" cy="198" r="3" fill="#1f2937"/><text x="340" y="202" font-size="11">Paris</text><rect x="300" y="236" width="12" height="12" fill="#fecaca" stroke="#334155"/><text x="318" y="246" font-size="11">Lost to Philip II, 1203–05</text><rect x="300" y="256" width="12" height="12" fill="#bbf7d0" stroke="#334155"/><text x="318" y="266" font-size="11">Kept by John</text><rect x="300" y="276" width="12" height="12" fill="#e2e8f0" stroke="#334155"/><text x="318" y="286" font-size="11">Fought over</text><rect x="300" y="296" width="12" height="12" fill="#bae6fd" stroke="#334155"/><text x="318" y="306" font-size="11">Philip II's royal lands</text></g></svg>`,
      diagramCaption:
        "Schematic map (not to scale; borders simplified). Poitou and Gascony together made up most of Aquitaine. After 1204 the English king's main French lands were in the south-west.",
      workedExamples: [
        {
          title: "Modelled answer: linking causes",
          problem: "Explain why John lost Normandy in 1204. (6 marks)",
          steps: [
            "**Plan.** Two causes plus a link: (1) Philip II's strength and opportunity; (2) John's own actions — distrust, Arthur, leaving in 1203. Then judge which was more important.",
            "**Paragraph 1.** One reason John lost Normandy was the strength of **Philip II of France**. Philip used John's marriage to Isabella of Angoulême as a legal excuse, declaring John's French lands forfeit in 1202. Normandy bordered Philip's heartland around Paris, so he could attack it again and again. This meant John faced a determined enemy right on his border.",
            "**Paragraph 2.** However, John's **own actions** made things worse. After capturing Arthur at Mirebeau in 1202, John lost the trust of Breton and Angevin lords when Arthur disappeared in 1203. Many nobles switched sides; when **Château Gaillard** was besieged, John's relief attempt failed and he left for England in December 1203. Without its lords' loyalty, Normandy could not be defended.",
            "**Judgement.** Philip's power created the threat, but John's loss of trust turned a difficult war into a collapse — Rouen surrendered in June 1204 without a great battle. So John's leadership was the more important reason.",
          ],
          answer:
            "Philip II created the threat, but John's loss of his nobles' trust (especially over Arthur) explains why Normandy collapsed so quickly in 1204.",
          yourTurn: {
            question: "In which year did Rouen surrender, completing Philip II's conquest of Normandy?",
            answer: { type: "number", value: 1204 },
            solution: "Château Gaillard fell in March **1204** and Rouen surrendered in June 1204.",
          },
        },
      ],
      keyPoints: [
        "**Philip II of France** used John's marriage to Isabella of Angoulême as an excuse to declare his French lands forfeit (1202).",
        "Despite victory at **Mirebeau** (1202), John lost **Normandy** in **1204** when Château Gaillard and Rouen fell.",
        "Critics nicknamed him **'Softsword'**; he kept England and Gascony but lost Normandy, Anjou, Maine and Touraine.",
        "To pay for a reconquest John squeezed out money: **scutage** (11 times), the 1207 tax, huge **fines** and **reliefs**, and selling offices.",
        "John was a **hard-working administrator**, but his barons feared and distrusted him.",
      ],
      whyItWorks:
        "Why does losing Normandy matter so much? It is the **turning point** of the reign. It cost John prestige ('Softsword'), land and income, and gave him one overriding aim — win it back — which needed huge sums of money. Because he now lived in England, his barons felt his demands directly and constantly. So a military defeat in France turned into a **long-term cause** of the rebellion of 1215. Link the causes: defeat → need for money → heavy taxes and fines → angry barons.",
      strategies: ["Link the causes", "Long-term vs short-term causes", "Weigh factors"],
      thinkDeeper:
        "Some historians blame John for losing Normandy; others argue that Philip II's resources and the Norman lords' self-interest made the loss very hard to avoid. If Richard I had lived longer, would Normandy have been saved? What evidence would you need to answer that?",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "john-and-the-church",
      heading: "John versus the Pope",
      discovery: {
        problem:
          "**Imagine this.** For **six years** the churches in your village are closed for normal services. No Sunday Mass. No church weddings. The dead are buried without the full service, outside the churchyard. Babies can still be baptised and the dying can still confess — but little else.\n\nThis really happened in England from **1208 to 1214**, and it was ordered by the **Pope**, not the king.\n\n1. Why might a Pope punish a whole country?\n2. Who do you think suffered most — the king or ordinary people?\n3. Predict: did John become richer or poorer during these years?",
        idea:
          "The Pope used this **Interdict** to pressure John into accepting the Pope's choice of Archbishop of Canterbury. Ordinary people suffered most — but John actually got **richer**, because he seized the lands and income of the Church.\n\nThe real cost came later. An excommunicated king was easier to rebel against, and by 1213 Philip II was preparing to invade. So John did something astonishing: he **submitted to the Pope** and made England a papal fief. Overnight, the Pope became his ally.",
      },
      body:
        "**The quarrel.** When **Hubert Walter**, Archbishop of Canterbury, died in **1205**, a fight began over his replacement. The Archbishop of Canterbury was the most important churchman in England and a key royal adviser. The monks of Canterbury first chose one of their own; then, under pressure from John, they chose **John de Grey**, Bishop of Norwich and a trusted royal servant. **Pope Innocent III** rejected both. In 1206 he had a group of Canterbury monks in Rome elect **Stephen Langton**, an English scholar who had taught for years in Paris, and he consecrated Langton in **1207**.\n\nJohn was furious and refused to let Langton into England. For John, this was about **control**: kings expected a big say in choosing bishops, and Langton had lived for years in the kingdom of John's enemy, Philip II.\n\n**The Interdict, 1208–1214.** In **March 1208** Innocent placed England under an **Interdict**: most church services stopped across the country. In **1209** he **excommunicated** John — cutting him off from the Church, which in theory released his subjects from their duty to obey him.\n\n**John profits.** John hit back by seizing Church lands and revenues, and many bishops fled abroad. Historians estimate that he collected very large sums from the Church — some estimates exceed £100,000. Meanwhile he campaigned successfully in **Ireland (1210)** and **Wales (1211)**.\n\n**The U-turn, 1213.** By 1212–13 danger was growing. A baronial plot against John was uncovered in 1212, and Philip II was preparing to invade England, helped by talk that the Pope would depose John. On **15 May 1213**, John **submitted** to the Pope's envoy, **Pandulf**. He accepted Langton, promised to repay the Church, and made **England and Ireland a papal fief**, paying the Pope **1,000 marks a year**. Weeks later an English fleet destroyed Philip's ships at **Damme**. The Interdict was finally lifted in **1214**.\n\n| Before 1213 | After 1213 |\n|---|---|\n| The Pope is John's enemy | The Pope is John's overlord and protector |\n| A French invasion could look like a holy war | Attacking John means attacking the Pope's vassal |\n| Langton kept out of England | Langton in England — and soon a voice for the barons |\n\nThe submission was clever politics: Innocent III would back John against his barons in 1215. But Langton, now in England, helped the barons turn their complaints into a programme of demands.",
      diagram: `<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline drawn to scale from 1205 to 1215. 1205 Archbishop Hubert Walter dies. 1207 the Pope consecrates Stephen Langton. The Interdict runs from 1208 to 1214. John is excommunicated from 1209 to 1213. In 1213 John submits and England becomes a papal fief. In 1214 the Interdict is lifted."><rect x="0" y="0" width="480" height="220" fill="#ffffff"/><g font-family="sans-serif" fill="#1f2937"><line x1="40" y1="180" x2="440" y2="180" stroke="#334155" stroke-width="2"/><line x1="40" y1="176" x2="40" y2="184" stroke="#334155"/><line x1="80" y1="176" x2="80" y2="184" stroke="#334155"/><line x1="120" y1="176" x2="120" y2="184" stroke="#334155"/><line x1="160" y1="176" x2="160" y2="184" stroke="#334155"/><line x1="200" y1="176" x2="200" y2="184" stroke="#334155"/><line x1="240" y1="176" x2="240" y2="184" stroke="#334155"/><line x1="280" y1="176" x2="280" y2="184" stroke="#334155"/><line x1="320" y1="176" x2="320" y2="184" stroke="#334155"/><line x1="360" y1="176" x2="360" y2="184" stroke="#334155"/><line x1="400" y1="176" x2="400" y2="184" stroke="#334155"/><line x1="440" y1="176" x2="440" y2="184" stroke="#334155"/><text x="40" y="197" font-size="11" text-anchor="middle">1205</text><text x="80" y="197" font-size="11" text-anchor="middle">1206</text><text x="120" y="197" font-size="11" text-anchor="middle">1207</text><text x="160" y="197" font-size="11" text-anchor="middle">1208</text><text x="200" y="197" font-size="11" text-anchor="middle">1209</text><text x="240" y="197" font-size="11" text-anchor="middle">1210</text><text x="280" y="197" font-size="11" text-anchor="middle">1211</text><text x="320" y="197" font-size="11" text-anchor="middle">1212</text><text x="360" y="197" font-size="11" text-anchor="middle">1213</text><text x="400" y="197" font-size="11" text-anchor="middle">1214</text><text x="440" y="197" font-size="11" text-anchor="middle">1215</text><rect x="168" y="124" width="252" height="18" fill="#fecaca" stroke="#334155"/><text x="294" y="137" font-size="11" text-anchor="middle">Interdict, 1208–1214</text><rect x="234" y="148" width="148" height="18" fill="#fde68a" stroke="#334155"/><text x="300" y="161" font-size="11" text-anchor="middle">Excommunicated 1209–13</text><line x1="60" y1="44" x2="60" y2="180" stroke="#334155" stroke-dasharray="3,3"/><circle cx="60" cy="180" r="4" fill="#1f2937"/><text x="44" y="24" font-size="11" font-weight="bold">1205 Archbishop</text><text x="44" y="37" font-size="11">Hubert Walter dies</text><line x1="138" y1="78" x2="138" y2="180" stroke="#334155" stroke-dasharray="3,3"/><circle cx="138" cy="180" r="4" fill="#1f2937"/><text x="122" y="58" font-size="11" font-weight="bold">1207 Pope consecrates</text><text x="122" y="71" font-size="11">Stephen Langton</text><line x1="374" y1="44" x2="374" y2="180" stroke="#334155" stroke-dasharray="3,3"/><circle cx="374" cy="180" r="4" fill="#1f2937"/><text x="300" y="24" font-size="11" font-weight="bold">1213 John submits:</text><text x="300" y="37" font-size="11">England a papal fief</text><line x1="420" y1="78" x2="420" y2="124" stroke="#334155" stroke-dasharray="3,3"/><text x="470" y="58" font-size="11" font-weight="bold" text-anchor="end">1214 Interdict</text><text x="470" y="71" font-size="11" text-anchor="end">lifted</text><text x="240" y="214" font-size="11" text-anchor="middle">Drawn to scale: 40 px = 1 year</text></g></svg>`,
      diagramCaption:
        "The quarrel with the Pope, drawn to scale. Notice how long the Interdict lasted — and that John's submission came first, before the Interdict was lifted.",
      workedExamples: [
        {
          title: "Modelled answer: success or failure?",
          problem: "Was John's quarrel with the Pope (1205–1213) more of a success or a failure for him? Explain your answer. (8 marks)",
          steps: [
            "**Plan.** Success: money; the 1213 submission turned the Pope into an ally. Failure: excommunication weakened him; he had to accept Langton and pay tribute; the monk-chroniclers turned against him. Then a judgement that separates the short term from the long term.",
            "**Paragraph 1 (success).** In some ways the quarrel was a success for John. During the **Interdict (1208–1214)** he seized Church lands and income and collected very large sums. This meant he could pay for campaigns in Ireland (1210) and Wales (1211) and build up money for a war to win back Normandy.",
            "**Paragraph 2 (success).** His **submission in 1213** was also shrewd. By making England a papal fief, John turned **Innocent III** from an enemy into a protector, so a French invasion could no longer claim the Pope's blessing. In 1215 the Pope would back John against the rebel barons.",
            "**Paragraph 3 (failure).** However, John had to accept **Stephen Langton**, the very man he had kept out for six years, and pay **1,000 marks a year**. Being **excommunicated (1209)** weakened his authority and encouraged plots such as the one in 1212. It also turned the monks who wrote history against him.",
            "**Judgement.** In the short term the quarrel was more a success than a failure: John made money and ended with the Pope on his side. In the long term it was damaging, because it hurt his reputation and brought Langton into England, where he helped the barons put their demands into words.",
          ],
          answer:
            "A short-term success (money and, from 1213, papal support) but a long-term failure (weakened authority, Langton, hostile chroniclers).",
          yourTurn: {
            question: "Pope Innocent III chose a new Archbishop of Canterbury whom John refused to let into England. Give the archbishop's name.",
            answer: {
              type: "text",
              accept: ["Stephen Langton", "Langton", "Archbishop Langton", "Archbishop Stephen Langton", "Stephen Langston", "Langston"],
              display: "Stephen Langton",
            },
            solution: "**Stephen Langton** was consecrated by Innocent III in 1207; John kept him out of England until 1213.",
          },
        },
      ],
      keyPoints: [
        "After 1205, Pope **Innocent III** chose **Stephen Langton** as Archbishop of Canterbury; John refused to accept him.",
        "**Interdict (1208–1214)**: most church services stopped across England.",
        "John was **excommunicated in 1209** but grew richer by seizing Church lands and income.",
        "In **1213** John submitted, accepted Langton and made England a **papal fief** (1,000 marks a year).",
        "The Pope became John's ally — but the quarrel damaged John's reputation, especially with monk-chroniclers.",
      ],
      whyItWorks:
        "Why did John fight the Pope — and then give in? Medieval kings and popes competed for control of the Church's wealth and appointments. John gained money in the short term, which shows his skill as a fundraiser. But excommunication weakened the idea that his subjects had a religious duty to obey him, and it made a French invasion look justified. Submitting in 1213 removed that danger at a stroke. The quarrel matters for **historians** too: the monks who wrote the chronicles had watched their Church being plundered, which helps explain why they described John so harshly.",
      strategies: ["Think about who benefited", "Spot change and continuity", "Consider the counter-argument"],
      thinkDeeper:
        "Was John's submission to the Pope in 1213 a humiliation or a masterstroke? Think about what he gave up, what he gained — and how his barons might have seen it.",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "barons-revolt",
      heading: "The barons rebel",
      discovery: {
        problem:
          "**Sort these four events into 'long-term grievance' or 'trigger'.**\n\n1. Geoffrey de Mandeville is charged **20,000 marks** to marry a rich heiress (1214).\n2. The family of the baron **William de Briouze** is hunted down; his wife and eldest son die in John's prison (1210).\n3. Barons are asked to pay **scutage** yet again, for a war in France (1214).\n4. John's allies are crushed at the **Battle of Bouvines** (27 July 1214).\n\nWhich one turned years of grumbling into open rebellion — and why?",
        idea:
          "Events 1–3 are **long-term grievances**: barons had been angry about money and cruelty for years. Event 4, **Bouvines**, is the **trigger**. John had spent a decade and a fortune building an alliance to win back Normandy. When his allies lost, his plans collapsed, his money was spent and he came home weak.\n\nA king who wins wars can get away with heavy demands; a defeated king who has emptied his treasury cannot. Historians often explain rebellions this way: **long-term grievances + a short-term trigger**.",
      },
      body:
        "**Bouvines, 1214.** John's grand plan was a two-pronged attack on Philip II. John himself landed in **Poitou**, while his allies — his nephew **Emperor Otto IV**, the Count of Flanders and English troops under John's half-brother, the Earl of Salisbury — attacked from the north-east. In early July 1214 John's army retreated at **La Roche-aux-Moines** when the Poitevin lords refused to fight. Then, on **27 July 1214**, Philip crushed the allies at **Bouvines** in Flanders. John's hope of regaining Normandy was finished. He returned to England in October 1214 having spent huge sums for nothing.\n\n**The barons' grievances.**\n\n| Grievance | Example |\n|---|---|\n| Heavy taxes | Scutage levied 11 times; many northern barons refused the 1214 scutage |\n| Fines and reliefs | Huge payments to inherit land or marry; debts used to control barons |\n| Arbitrary justice | Barons punished at the king's will rather than by the law or a fair judgement |\n| Cruelty and fear | The de Briouze family destroyed; Arthur's fate remembered |\n| Hostages | Barons forced to hand over sons as guarantees of loyalty |\n| Losing wars | Normandy lost (1204); Bouvines (1214) |\n\nMany barons, especially from the **north** and East Anglia, felt John had broken the customs that limited what a king could demand. They looked back to the **Coronation Charter of Henry I** (1100), in which an earlier king had promised to rule fairly, as a model.\n\n**From protest to rebellion.** In **January 1215** a group of barons met John in London and demanded that he confirm their 'ancient liberties'. John played for time: he took a vow to go on crusade (which gave him the Church's protection) and appealed to the Pope. On **5 May 1215** the rebels formally **renounced their homage** — breaking the bond of loyalty between lord and vassal. Their leader, **Robert Fitzwalter**, called himself 'Marshal of the Army of God'. On **17 May 1215** the city of **London** opened its gates to the rebels.\n\n**Why John had to negotiate.** Only a minority of barons were active rebels; many stayed loyal or waited to see who would win. But with London — England's richest city — in rebel hands, John could not win a quick victory, and waverers were drifting towards the rebels. Archbishop **Langton** and loyal barons such as **William Marshal** helped arrange talks, and John agreed to meet the rebels at **Runnymede**, a meadow beside the Thames between Windsor and Staines.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Causation web. Five long-term grievances — the loss of Normandy, money demands, arbitrary justice and cruelty, distrust and hostages, and the clash with the Church — all lead to the barons renouncing homage in May 1215. The loss of Normandy links to money demands because John needed money to win it back. Bouvines in July 1214 is shown as the trigger."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g font-family="sans-serif" fill="#1f2937"><line x1="95" y1="54" x2="210" y2="128" stroke="#334155" stroke-width="1.5"/><line x1="385" y1="54" x2="270" y2="128" stroke="#334155" stroke-width="1.5"/><line x1="160" y1="150" x2="180" y2="150" stroke="#334155" stroke-width="1.5"/><line x1="320" y1="150" x2="300" y2="150" stroke="#334155" stroke-width="1.5"/><line x1="95" y1="246" x2="210" y2="172" stroke="#334155" stroke-width="1.5"/><line x1="385" y1="246" x2="270" y2="172" stroke="#b91c1c" stroke-width="3"/><line x1="180" y1="38" x2="300" y2="38" stroke="#334155" stroke-width="1.5" stroke-dasharray="4,3"/><polygon points="294,34 302,38 294,42" fill="#334155"/><text x="240" y="31" font-size="11" text-anchor="middle">to pay to win it back</text><rect x="10" y="10" width="170" height="44" rx="6" fill="#fde68a" stroke="#334155"/><text x="95" y="28" font-size="11" font-weight="bold" text-anchor="middle">Loss of Normandy, 1204</text><text x="95" y="44" font-size="11" text-anchor="middle">land, prestige, 'Softsword'</text><rect x="300" y="10" width="170" height="44" rx="6" fill="#fde68a" stroke="#334155"/><text x="385" y="28" font-size="11" font-weight="bold" text-anchor="middle">Money demands</text><text x="385" y="44" font-size="11" text-anchor="middle">scutage, fines, reliefs</text><rect x="10" y="128" width="150" height="44" rx="6" fill="#fde68a" stroke="#334155"/><text x="85" y="146" font-size="11" font-weight="bold" text-anchor="middle">Arbitrary justice</text><text x="85" y="162" font-size="11" text-anchor="middle">cruelty, e.g. de Briouze</text><rect x="320" y="128" width="150" height="44" rx="6" fill="#fde68a" stroke="#334155"/><text x="395" y="146" font-size="11" font-weight="bold" text-anchor="middle">Distrust</text><text x="395" y="162" font-size="11" text-anchor="middle">hostages, broken word</text><rect x="10" y="246" width="170" height="44" rx="6" fill="#c7d2fe" stroke="#334155"/><text x="95" y="264" font-size="11" font-weight="bold" text-anchor="middle">Clash with the Church</text><text x="95" y="280" font-size="11" text-anchor="middle">Interdict 1208–1214</text><rect x="300" y="246" width="170" height="44" rx="6" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/><text x="385" y="264" font-size="11" font-weight="bold" text-anchor="middle">TRIGGER: Bouvines</text><text x="385" y="280" font-size="11" text-anchor="middle">July 1214, plans wrecked</text><rect x="180" y="128" width="120" height="44" rx="6" fill="#bae6fd" stroke="#334155" stroke-width="2"/><text x="240" y="146" font-size="11" font-weight="bold" text-anchor="middle">Barons renounce</text><text x="240" y="162" font-size="11" text-anchor="middle">homage, May 1215</text><text x="240" y="214" font-size="11" text-anchor="middle">Yellow, purple: long-term</text><text x="240" y="228" font-size="11" text-anchor="middle">Red: short-term trigger</text></g></svg>`,
      diagramCaption:
        "Causation web: long-term grievances (yellow and purple) built up for a decade; Bouvines (red) was the spark. Notice the link between losing Normandy and the money demands.",
      workedExamples: [
        {
          title: "Modelled answer: 'how far do you agree?'",
          problem: "'The Battle of Bouvines was the main reason the barons rebelled in 1215.' How far do you agree? (8 marks)",
          steps: [
            "**Plan.** Agree: Bouvines as the trigger. Disagree: long-term grievances (money, justice, cruelty). Judgement: link them — the grievances were the fuel, Bouvines the spark.",
            "**Paragraph 1 (agree).** Bouvines was important because it **wrecked John's plans**. On 27 July 1214 Philip II defeated John's allies, ending his hope of winning back Normandy after ten years of preparation. This meant John returned to England weak and short of money, so barons who had been afraid to resist him now felt they could.",
            "**Paragraph 2 (disagree).** However, the barons' anger came from **long-term grievances**. John had levied scutage eleven times and charged enormous fines, such as 20,000 marks to Geoffrey de Mandeville. He punished barons without a fair judgement — the de Briouze family were hunted down and William's wife and son died in John's prison. These grievances explain *what* the barons demanded in Magna Carta.",
            "**Judgement.** I partly agree. Bouvines was the **trigger** that explains *when* the rebellion happened, but the long-term grievances explain *why* it happened. Without years of heavy taxes and arbitrary justice, one defeat abroad would not have led barons to renounce their homage.",
          ],
          answer: "Bouvines was the trigger (it explains when), but long-term grievances over money and justice were the main cause (they explain why).",
          yourTurn: {
            question: "Name the battle of 27 July 1214 at which Philip II defeated John's allies.",
            answer: { type: "text", accept: ["Bouvines", "Battle of Bouvines", "the Battle of Bouvines"], display: "Bouvines" },
            solution: "At **Bouvines** in Flanders, Philip II beat Emperor Otto IV and John's other allies, wrecking John's plan to regain Normandy.",
          },
        },
      ],
      keyPoints: [
        "**Bouvines (27 July 1214)**: Philip II defeated John's allies and John's plan to regain Normandy collapsed.",
        "Long-term grievances: **taxes, fines, arbitrary justice, cruelty, hostages and lost wars**.",
        "Rebels looked back to Henry I's **Coronation Charter (1100)** as a model of good kingship.",
        "Rebel barons **renounced their homage** on 5 May 1215 and took **London** on 17 May 1215.",
        "Holding London forced John to **negotiate** at Runnymede.",
      ],
      whyItWorks:
        "Why did the barons rebel in 1215 and not earlier? Grievances had been building for a decade, but barons only risked their lands and lives once John was **weak**. Bouvines destroyed his chance of a victory that could have paid for everything and silenced his critics. You will meet this pattern again in Term 2: **crises and weak government** create the circumstances in which power can be challenged. In 1215, though, the barons did not try to *replace* the king — at first they tried to **limit** him.",
      strategies: ["Long-term vs short-term causes", "Link the causes", "Weigh factors"],
      thinkDeeper:
        "If John had won at Bouvines, would there ever have been a Magna Carta? Use evidence about the barons' grievances to argue one way, then the other.",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "magna-carta",
      heading: "Magna Carta, 1215",
      discovery: {
        problem:
          "**Read three real clauses** from the 1215 charter (British Library translation):\n\n> **Clause 8:** No widow shall be compelled to marry, so long as she wishes to remain without a husband.\n\n> **Clause 33:** All fish-weirs shall be removed from the Thames, the Medway, and throughout the whole of England, except on the sea coast.\n\n> **Clause 39:** No free man shall be seized or imprisoned, or stripped of his rights or possessions, or outlawed or exiled, or deprived of his standing in any other way, nor will we proceed with force against him, or send others to do so, except by the lawful judgement of his equals or by the law of the land.\n\nFor each clause, ask: **who benefited?** Then decide: was Magna Carta a charter of rights for *everyone*?",
        idea:
          "Clause 8 protected **wealthy widows**, whose remarriage the king had been selling. Clause 33 helped people who used the **rivers** for boats and trade — fish-weirs (wooden fish traps) blocked them. Clause 39 protected **free men** — but in 1215 a large part of the population were **villeins** (unfree peasants), who were not covered.\n\nMagna Carta was a **peace treaty** written mainly for barons and the Church, mixing big principles with very practical complaints. Its famous principles came to apply to everyone only much later.",
      },
      body:
        "**Runnymede, June 1215.** After days of negotiation the terms were agreed, and the charter was dated **15 June 1215**. It was **sealed** with the king's Great Seal, not signed. On 19 June the rebels renewed their homage and peace was declared; copies were written out and sent around the country. The charter was written in **Latin** and has **63 clauses** — the numbers were added later by scholars.\n\n**Key clauses** (British Library translation):\n\n| Clause | What it says | Who gained most |\n|---|---|---|\n| 1 | The English Church shall be free | The Church |\n| 12 | No 'scutage' or 'aid' may be levied in our kingdom without its general consent (apart from three customary cases) | Barons |\n| 39 | No free man shall be seized or imprisoned … except by the lawful judgement of his equals or by the law of the land | Free men |\n| 40 | To no one will we sell, to no one deny or delay right or justice | Anyone seeking justice |\n| 61 | The barons shall elect twenty-five of their number to keep … the peace and liberties granted | Barons |\n\nClause 61 is the **security clause**: if John broke the charter, the 25 barons could seize his castles and lands until he put things right. In effect it made rebellion legal — something no king would accept for long.\n\n**Who was protected?** Most clauses dealt with barons' complaints: payments to inherit (reliefs), wardships, widows, debts and the royal forests. Clause 39 protected only **free men**, so villeins were left out. Women appear mainly as widows and heiresses. Magna Carta did **not** give everyone rights in 1215.\n\n**It failed — fast.** Neither side trusted the other. John asked **Pope Innocent III**, now his overlord, to cancel it, and on **24 August 1215** the Pope declared the charter null and void. By September the **First Barons' War** had begun. John besieged and captured **Rochester Castle** (October–November 1215). The rebels invited **Prince Louis** of France to be their king; he landed in **May 1216** and was welcomed in London.\n\n**John's death.** In **October 1216**, while campaigning in eastern England, John lost part of his baggage train crossing the tidal estuary of **the Wash**. **Legend says** his crown jewels were swallowed by the sea; what was really lost is unknown. Already ill with dysentery, John died at **Newark** on the night of **18–19 October 1216**. His nine-year-old son became **Henry III**.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid of six Magna Carta clauses and who gained. Clause 1, the English Church shall be free: the Church. Clause 12, no scutage or aid without general consent: barons. Clause 39, no free man imprisoned except by lawful judgement or the law of the land: free men only. Clause 40, justice not sold, denied or delayed: all, in theory. Clause 8, widows not forced to remarry: noble widows. Clause 61, twenty-five barons may enforce the charter by force: barons."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g font-family="sans-serif" fill="#1f2937"><text x="240" y="20" font-size="13" font-weight="bold" text-anchor="middle">Six clauses of Magna Carta (1215) — who gained?</text><rect x="10" y="32" width="148" height="118" rx="8" fill="#c7d2fe" stroke="#334155"/><text x="84" y="52" font-size="13" font-weight="bold" text-anchor="middle">Clause 1</text><text x="84" y="72" font-size="11" text-anchor="middle">The English Church</text><text x="84" y="87" font-size="11" text-anchor="middle">shall be free</text><text x="84" y="132" font-size="11" font-weight="bold" text-anchor="middle">Gained: the Church</text><rect x="166" y="32" width="148" height="118" rx="8" fill="#fde68a" stroke="#334155"/><text x="240" y="52" font-size="13" font-weight="bold" text-anchor="middle">Clause 12</text><text x="240" y="72" font-size="11" text-anchor="middle">No scutage or aid</text><text x="240" y="87" font-size="11" text-anchor="middle">without the kingdom's</text><text x="240" y="102" font-size="11" text-anchor="middle">general consent</text><text x="240" y="132" font-size="11" font-weight="bold" text-anchor="middle">Gained: barons</text><rect x="322" y="32" width="148" height="118" rx="8" fill="#bbf7d0" stroke="#334155"/><text x="396" y="52" font-size="13" font-weight="bold" text-anchor="middle">Clause 39</text><text x="396" y="72" font-size="11" text-anchor="middle">No free man jailed</text><text x="396" y="87" font-size="11" text-anchor="middle">except by lawful</text><text x="396" y="102" font-size="11" text-anchor="middle">judgement or the law</text><text x="396" y="132" font-size="11" font-weight="bold" text-anchor="middle">Gained: free men only</text><rect x="10" y="162" width="148" height="118" rx="8" fill="#bbf7d0" stroke="#334155"/><text x="84" y="182" font-size="13" font-weight="bold" text-anchor="middle">Clause 40</text><text x="84" y="202" font-size="11" text-anchor="middle">Justice not to be</text><text x="84" y="217" font-size="11" text-anchor="middle">sold, denied</text><text x="84" y="232" font-size="11" text-anchor="middle">or delayed</text><text x="84" y="262" font-size="11" font-weight="bold" text-anchor="middle">Gained: all, in theory</text><rect x="166" y="162" width="148" height="118" rx="8" fill="#fde68a" stroke="#334155"/><text x="240" y="182" font-size="13" font-weight="bold" text-anchor="middle">Clause 8</text><text x="240" y="202" font-size="11" text-anchor="middle">Widows not forced</text><text x="240" y="217" font-size="11" text-anchor="middle">to remarry</text><text x="240" y="262" font-size="11" font-weight="bold" text-anchor="middle">Gained: noble widows</text><rect x="322" y="162" width="148" height="118" rx="8" fill="#fde68a" stroke="#334155"/><text x="396" y="182" font-size="13" font-weight="bold" text-anchor="middle">Clause 61</text><text x="396" y="202" font-size="11" text-anchor="middle">25 barons may</text><text x="396" y="217" font-size="11" text-anchor="middle">enforce the charter</text><text x="396" y="232" font-size="11" text-anchor="middle">by force</text><text x="396" y="262" font-size="11" font-weight="bold" text-anchor="middle">Gained: barons</text><text x="240" y="295" font-size="11" text-anchor="middle">Paraphrases. Clause numbers were added later by scholars.</text></g></svg>`,
      diagramCaption:
        "A clause grid: yellow = mainly for barons and wealthy families, purple = the Church, green = free men more widely. Most of the 63 clauses were about barons' complaints.",
      workedExamples: [
        {
          title: "Modelled answer: making inferences from a source",
          problem:
            "**Source A** — Clause 39 of Magna Carta, 1215 (British Library translation).\n\n> No free man shall be seized or imprisoned, or stripped of his rights or possessions, or outlawed or exiled, or deprived of his standing in any other way, nor will we proceed with force against him, or send others to do so, except by the lawful judgement of his equals or by the law of the land.\n\nWhat can you infer from Source A about how King John had treated his barons? (4 marks)",
          steps: [
            "**Plan.** An inference is something the source *suggests* but doesn't say outright. Clauses were written to stop things that had *already happened*. Make two inferences, support each with a quotation, and back it with your own knowledge.",
            "**Inference 1.** Source A suggests that John had **imprisoned or punished men without a fair trial**. It says no free man shall be 'seized or imprisoned … except by the lawful judgement of his equals'. The barons would only demand this if it had happened — for example, the de Briouze family were hunted down, and William's wife and son died in John's prison in 1210.",
            "**Inference 2.** It also suggests John had **taken men's lands and property by force** — the clause forbids anyone being 'stripped of his rights or possessions'. I know John seized the lands of barons who owed him money or whom he distrusted.",
            "**Conclusion.** So Source A suggests John ruled by his own will rather than by the law, and the barons wanted to tie him to proper legal judgement.",
          ],
          answer: "Source A suggests John had imprisoned men and seized their lands without lawful judgement — ruling by will, not by law.",
          yourTurn: {
            question:
              "Which clause of Magna Carta (1215) says that no free man shall be imprisoned except by the lawful judgement of his equals or by the law of the land? Give the clause number.",
            answer: { type: "number", value: 39 },
            solution: "**Clause 39.** In the 1225 reissue it was combined with clause 40, and that combined clause is still law today.",
          },
        },
      ],
      keyPoints: [
        "Magna Carta was agreed at **Runnymede** and dated **15 June 1215**; it was **sealed**, not signed.",
        "**Clause 39**: no free man imprisoned except by lawful judgement of his equals or the law of the land; **clause 40**: justice not sold, denied or delayed.",
        "**Clause 12**: no scutage or aid without the kingdom's general consent; **clause 1**: the English Church shall be free; **clause 61**: 25 barons to enforce it.",
        "It mainly protected **barons, the Church and free men** — not the unfree villeins.",
        "The Pope **annulled** it (August 1215); the **First Barons' War** followed and Prince **Louis** of France invaded (1216).",
        "John died in **October 1216**; the story of treasure lost in the Wash is partly **legend**.",
      ],
      whyItWorks:
        "Why did Magna Carta fail in 1215 — and why does it still matter? It failed because it was a **peace treaty between enemies who did not trust each other**, and clause 61 gave 25 barons a power no king would accept. But it matters because it wrote down the idea that the king must govern **according to the law** and could be held to account. So the same circumstances that had weakened John — lost wars, money crises and broken trust — produced the first major written **limits on royal power** in England. That is the other side of the Term 1 enquiry: circumstances can bring kings down as well as raise them up.",
      strategies: ["Make an inference", "Ask \"how typical?\"", "Think about purpose"],
      thinkDeeper:
        "Clause 39 protected only 'free men'. Does that make Magna Carta less important — or was writing the principle down the real breakthrough? Who could later claim that the principle applied to them too?",
    },
    // ------------------------------------------------------------------ 6
    {
      id: "legacy-of-magna-carta",
      heading: "The legacy of Magna Carta",
      discovery: {
        problem:
          "**A prediction puzzle.** By the end of August 1215, the Pope had declared Magna Carta null and void. Within weeks England was at war. As a peace treaty it **failed completely**.\n\nYet today the surviving copies are displayed under special glass, the charter is celebrated around the world, and a memorial at Runnymede was paid for by the **American Bar Association** (an organisation of US lawyers).\n\nPredict: how could a failed peace treaty become one of the most famous documents in history? Write down two possible explanations before reading on.",
        idea:
          "Two things saved it. First, it was **reissued** — in 1216, 1217 and 1225 — by Henry III's government, which needed the barons' support; the 1225 version became the permanent one. Second, later generations **reinterpreted** it. Each new struggle against power — Parliament against Charles I, American colonists against Britain, campaigners for human rights — read its own ideas into it.\n\nIts fame owes as much to what people *believed* it said as to what it actually did in 1215.",
      },
      body:
        "**Reissues: a failure becomes law.** After John's death the regent, **William Marshal**, ruling for the nine-year-old **Henry III**, reissued Magna Carta in **1216** — without the security clause (61) or clause 12 — to win rebels back from Prince Louis. After royal victories at **Lincoln** and at sea off Sandwich in 1217, Louis left England, and the charter was reissued again in **1217** alongside a new **Charter of the Forest**. In **1225** Henry III reissued it in return for a tax — a deal that linked taxation to confirming liberties. The **1225** text became the standard version, and in **1297** it was entered on the official statute rolls.\n\n**The big idea: the king is under the law.** Magna Carta's lasting principle was that the king must rule according to the law and can be held to account by his subjects.\n\n**The growth of Parliament.** Henry III's constant need for money led to great councils that began to be called **parliaments**. In **1265** the rebel baron **Simon de Montfort** summoned a Parliament that included not only barons and bishops but also **knights from the shires and burgesses from the towns** — an important step towards the House of Commons. De Montfort was killed at the Battle of Evesham later that year, but the idea of consulting the wider community survived.\n\n**Later uses of Magna Carta.**\n\n| When | Who | How they used it |\n|---|---|---|\n| 1628 | Parliament, led by Sir Edward Coke | **Petition of Right** against Charles I's imprisonment without trial and taxes without Parliament's consent |\n| 1600s–1700s | American colonists | Claimed the 'rights of Englishmen', including no taxation without consent |\n| 1791 | United States | **Bill of Rights** — the Fifth Amendment's 'due process of law' echoes clause 39 |\n| 1948 | United Nations | **Universal Declaration of Human Rights**; Eleanor Roosevelt hoped it would become an international Magna Carta |\n\n**Myth vs reality.**\n\n- *Myth:* Magna Carta gave everyone rights and created democracy in 1215. *Reality:* it protected mainly barons, the Church and free men; democracy came centuries later.\n- *Myth:* it introduced trial by jury. *Reality:* clause 39 speaks of the 'lawful judgement of his equals'; it did not create the jury system.\n- *Reality:* only **three clauses** remain law in England and Wales today — the freedom of the English Church, the liberties of the City of London, and the combined clauses 39 and 40.",
      diagram: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chain of influence, not to scale. 1215 sealed at Runnymede; 1216 to 1217 reissued without clause 61; 1225 Henry III's version for a tax; 1265 de Montfort's Parliament; 1628 Petition of Right against Charles I; 1791 US Bill of Rights; 1948 UN Universal Declaration of Human Rights; today three clauses are still law."><rect x="0" y="0" width="480" height="260" fill="#ffffff"/><g font-family="sans-serif" fill="#1f2937"><line x1="60" y1="64" x2="420" y2="64" stroke="#334155" stroke-width="2"/><path d="M428,64 L462,64 L462,184 L428,184" fill="none" stroke="#334155" stroke-width="2"/><line x1="60" y1="184" x2="420" y2="184" stroke="#334155" stroke-width="2"/><polygon points="116,60 124,64 116,68" fill="#334155"/><polygon points="236,60 244,64 236,68" fill="#334155"/><polygon points="356,60 364,64 356,68" fill="#334155"/><polygon points="458,120 462,128 466,120" fill="#334155"/><polygon points="364,180 356,184 364,188" fill="#334155"/><polygon points="244,180 236,184 244,188" fill="#334155"/><polygon points="124,180 116,184 124,188" fill="#334155"/><circle cx="60" cy="64" r="8" fill="#fde68a" stroke="#334155"/><text x="60" y="46" font-size="12" font-weight="bold" text-anchor="middle">1215</text><text x="60" y="88" font-size="11" text-anchor="middle">Sealed at</text><text x="60" y="102" font-size="11" text-anchor="middle">Runnymede</text><circle cx="180" cy="64" r="8" fill="#fde68a" stroke="#334155"/><text x="180" y="46" font-size="12" font-weight="bold" text-anchor="middle">1216–17</text><text x="180" y="88" font-size="11" text-anchor="middle">Reissued without</text><text x="180" y="102" font-size="11" text-anchor="middle">clause 61</text><circle cx="300" cy="64" r="8" fill="#fde68a" stroke="#334155"/><text x="300" y="46" font-size="12" font-weight="bold" text-anchor="middle">1225</text><text x="300" y="88" font-size="11" text-anchor="middle">Henry III's version,</text><text x="300" y="102" font-size="11" text-anchor="middle">granted for a tax</text><circle cx="420" cy="64" r="8" fill="#c7d2fe" stroke="#334155"/><text x="420" y="46" font-size="12" font-weight="bold" text-anchor="middle">1265</text><text x="420" y="88" font-size="11" text-anchor="middle">de Montfort's</text><text x="420" y="102" font-size="11" text-anchor="middle">Parliament</text><circle cx="420" cy="184" r="8" fill="#c7d2fe" stroke="#334155"/><text x="420" y="166" font-size="12" font-weight="bold" text-anchor="middle">1628</text><text x="420" y="208" font-size="11" text-anchor="middle">Petition of Right</text><text x="420" y="222" font-size="11" text-anchor="middle">against Charles I</text><circle cx="300" cy="184" r="8" fill="#bbf7d0" stroke="#334155"/><text x="300" y="166" font-size="12" font-weight="bold" text-anchor="middle">1791</text><text x="300" y="208" font-size="11" text-anchor="middle">US Bill of Rights</text><text x="300" y="222" font-size="11" text-anchor="middle">(Fifth Amendment)</text><circle cx="180" cy="184" r="8" fill="#bbf7d0" stroke="#334155"/><text x="180" y="166" font-size="12" font-weight="bold" text-anchor="middle">1948</text><text x="180" y="208" font-size="11" text-anchor="middle">UN Universal</text><text x="180" y="222" font-size="11" text-anchor="middle">Declaration</text><circle cx="60" cy="184" r="8" fill="#bae6fd" stroke="#334155"/><text x="60" y="166" font-size="12" font-weight="bold" text-anchor="middle">Today</text><text x="60" y="208" font-size="11" text-anchor="middle">3 clauses</text><text x="60" y="222" font-size="11" text-anchor="middle">still law</text><text x="240" y="252" font-size="11" text-anchor="middle">Not to scale. Each age reused the Charter for its own struggles.</text></g></svg>`,
      diagramCaption:
        "Follow the arrows: a chain of influence from 1215 to today (not to scale). Yellow = the medieval charter, purple = Parliament's struggles, green = rights beyond England.",
      workedExamples: [
        {
          title: "Modelled answer: explaining significance",
          problem: "Explain why Magna Carta is seen as significant today. (6 marks)",
          steps: [
            "**Plan.** Significance = impact at the time + long-term influence + how it is remembered. Two paragraphs, then a judgement about which kind of significance is greater.",
            "**Paragraph 1 (at the time).** In 1215 Magna Carta had little immediate success: the Pope annulled it in August 1215 and civil war followed. However, it was **reissued in 1216, 1217 and 1225**, so its key idea — that the king must obey the law — became part of English law. This meant later kings, such as Henry III, could be held to its promises.",
            "**Paragraph 2 (long term).** Magna Carta also became significant because later people **reinterpreted** it. In 1628 Parliament used it in the **Petition of Right** to challenge Charles I's imprisonment without trial. American colonists drew on it, and the Fifth Amendment of the US Bill of Rights (1791) echoes clause 39. It was even seen as a model for the **Universal Declaration of Human Rights** in 1948.",
            "**Judgement.** Magna Carta is significant today mainly because of its **long-term, symbolic influence** rather than its results in 1215: it gave later generations a powerful precedent that rulers are under the law.",
          ],
          answer: "Its results in 1215 were small, but its reissue and later reinterpretation made it a lasting symbol that rulers are under the law.",
          yourTurn: {
            question: "In which year did Simon de Montfort's Parliament, which included knights and townsmen, meet?",
            answer: { type: "number", value: 1265 },
            solution: "Simon de Montfort's Parliament met in January **1265** and included knights of the shires and burgesses from the towns.",
          },
        },
      ],
      keyPoints: [
        "Reissued in **1216, 1217 and 1225**; the 1225 text became the standard version (on the statute rolls from 1297).",
        "Lasting principle: the **king is under the law**.",
        "**Simon de Montfort's Parliament (1265)** included knights and townsmen — a step towards the House of Commons.",
        "Used against **Charles I** (Petition of Right, 1628) and by **American colonists**; echoed in the **US Bill of Rights** (1791) and the **UDHR** (1948).",
        "Only **three clauses** are still law today; much of its fame comes from later **reinterpretation and myth**.",
      ],
      whyItWorks:
        "Why does Magna Carta matter so much? Its significance comes less from what it achieved in 1215 than from what it **became**. Because it was reissued and became law, later people could point to it as proof that rulers had always been bound by the law, and each generation reinterpreted it to fight its own battles. This is a key lesson about **significance**: an event can be significant because of how it is remembered and used, not only because of its immediate results. It also links Term 1 to Term 3 — the long road from limiting kings to democracy and human rights.",
      strategies: ["Judge significance", "Spot change and continuity", "Avoid hindsight"],
      thinkDeeper:
        "Is Magna Carta significant because of what it *did* in 1215, or because of what later people *believed* it said? Can a document be important partly because of a myth?",
    },
    // ------------------------------------------------------------------ 7
    {
      id: "bad-king-john",
      heading: "Interpretations: was John a bad king?",
      discovery: {
        problem:
          "**Two views from the 13th century.**\n\n**Source A** — a verse recorded by **Matthew Paris**, a monk of St Albans Abbey, writing in the mid-1200s. This famous line is often quoted in translation (wording varies):\n\n> Foul as it is, Hell itself is made fouler by the presence of John.\n\n**Source B** — from the *Barnwell chronicle*, written by a canon of Barnwell Priory near Cambridge in the 1220s (adapted):\n\n> John was indeed a great prince, but hardly a happy one; like Marius, he experienced the ups and downs of fortune.\n\nWhy might two churchmen writing within about 40 years of John's death disagree so strongly? Make **two** suggestions using what you know about John and the Church.",
        idea:
          "Matthew Paris was a **monk at St Albans**, writing decades after John's death and copying and expanding the work of an earlier St Albans monk, **Roger of Wendover**. Monasteries had suffered during the **Interdict**, when John seized Church wealth, so monk-chroniclers had reasons to dislike him. They also liked a moral story — a wicked king punished by God.\n\nThe Barnwell writer was closer in time and more balanced. The lesson: **check the provenance (NOP — Nature, Origin, Purpose)** before trusting a chronicle.",
      },
      body:
        "**The chroniclers.** Much of what we 'know' about John's character comes from monk-chroniclers, especially **Roger of Wendover** (died 1236) and **Matthew Paris** (died 1259), both of **St Albans Abbey**. They tell vivid stories: John lying in bed with his young queen while Normandy fell, cruelty to prisoners, mocking religion. But they wrote **after** John's death, often repeated gossip, and belonged to a Church that John had squeezed during the Interdict. Their purpose was partly moral: to show how God punished a wicked king.\n\n**The Victorians.** In the 1800s historians such as **William Stubbs** and **J.R. Green** relied heavily on these chronicles and judged John one of the worst kings England ever had. Popular culture agreed: in Robin Hood stories, from Walter Scott's novel *Ivanhoe* (1819) to Disney's *Robin Hood* (1973), 'Prince John' is a greedy villain. (No reliable evidence links John to any real Robin Hood.)\n\n**Modern historians.** In the 20th century historians studied the government **records** — the rolls that survive in large numbers from John's reign. **W.L. Warren** (*King John*, 1961) and others found an intelligent, hard-working king who travelled constantly, heard law cases himself and improved royal administration. Some argued he was **unlucky**: he inherited debts from Richard's wars and ransom and faced **Philip II**, one of the ablest French kings. More recently, historians such as **Marc Morris** and **Stephen Church** (both writing in 2015) have stressed John's **cruelty, suspicion and untrustworthiness** again — while accepting that he was able.\n\n| View | Evidence for | Evidence against |\n|---|---|---|\n| Wicked tyrant | Arthur's fate; the de Briouze family; hostages; fines | Mostly based on hostile chronicles |\n| Able but unlucky | Records show skilled government; Philip II was formidable | Bad luck doesn't explain why the barons distrusted him |\n| Able but untrustworthy | Barons repeatedly refused to rely on his promises | Hard to argue against: most historians accept it |\n\n**John and the enquiry.** Compare John's rise with **William I's**. William won the crown by **conquest** and kept it with force, castles and a loyal Norman elite. John won it by **inheritance, speed and support** — but his claim was disputed, and he lost the trust of the very barons who had backed him. William's strength produced strong royal power; John's weakness — military defeat, money crises, broken trust — produced **Magna Carta**, the first major written limit on royal power in England.",
      diagram: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spectrum of interpretations of King John from villain to able but unlucky. Near the villain end: monk chroniclers Wendover and Paris, 1220s to 1250s, and Victorian historians Stubbs and Green, 1870s. Towards the middle: recent historians Morris and Church, 2015, able but cruel and untrustworthy, and the Barnwell chronicle of the 1220s, a great prince but unlucky. Near the able end: W.L. Warren, 1961, able but unlucky ruler."><rect x="0" y="0" width="480" height="250" fill="#ffffff"/><g font-family="sans-serif" fill="#1f2937"><text x="240" y="18" font-size="13" font-weight="bold" text-anchor="middle">How has John been judged?</text><line x1="90" y1="125" x2="400" y2="125" stroke="#334155" stroke-width="3"/><text x="84" y="129" font-size="12" font-weight="bold" text-anchor="end">Villain</text><text x="406" y="122" font-size="12" font-weight="bold">Able but</text><text x="406" y="136" font-size="12" font-weight="bold">unlucky</text><line x1="100" y1="119" x2="100" y2="102" stroke="#334155"/><circle cx="100" cy="125" r="6" fill="#fecaca" stroke="#334155"/><text x="100" y="70" font-size="11" font-weight="bold" text-anchor="middle">Monk chroniclers</text><text x="100" y="84" font-size="11" text-anchor="middle">Wendover, Paris</text><text x="100" y="98" font-size="11" text-anchor="middle">1220s–1250s</text><line x1="125" y1="131" x2="125" y2="146" stroke="#334155"/><circle cx="125" cy="125" r="6" fill="#fecaca" stroke="#334155"/><text x="125" y="158" font-size="11" font-weight="bold" text-anchor="middle">Victorians, 1870s</text><text x="125" y="172" font-size="11" text-anchor="middle">Stubbs, J.R. Green:</text><text x="125" y="186" font-size="11" text-anchor="middle">a wicked tyrant</text><line x1="215" y1="131" x2="215" y2="196" stroke="#334155"/><circle cx="215" cy="125" r="6" fill="#fde68a" stroke="#334155"/><text x="215" y="208" font-size="11" font-weight="bold" text-anchor="middle">Recent: Morris, Church</text><text x="215" y="222" font-size="11" text-anchor="middle">(2015): able, but</text><text x="215" y="236" font-size="11" text-anchor="middle">cruel, untrustworthy</text><line x1="255" y1="119" x2="255" y2="66" stroke="#334155"/><circle cx="255" cy="125" r="6" fill="#fde68a" stroke="#334155"/><text x="255" y="34" font-size="11" font-weight="bold" text-anchor="middle">Barnwell chronicle</text><text x="255" y="48" font-size="11" text-anchor="middle">1220s: a great prince,</text><text x="255" y="62" font-size="11" text-anchor="middle">but unlucky</text><line x1="372" y1="119" x2="372" y2="102" stroke="#334155"/><circle cx="372" cy="125" r="6" fill="#bbf7d0" stroke="#334155"/><text x="372" y="70" font-size="11" font-weight="bold" text-anchor="middle">W.L. Warren, 1961</text><text x="372" y="84" font-size="11" text-anchor="middle">able ruler,</text><text x="372" y="98" font-size="11" text-anchor="middle">unlucky</text></g></svg>`,
      diagramCaption:
        "A spectrum of interpretations (positions are a rough guide, not exact). Ask of each: when was it written, what evidence did they use, and why?",
      workedExamples: [
        {
          title: "Modelled answer: evaluating an interpretation",
          problem: "'King John was a bad king.' How far do you agree? (12 marks)",
          steps: [
            "**Plan.** First define 'bad': bad at ruling (wars, money, keeping support) or bad as a person? Agree: lost Normandy, cruelty, lost the barons' trust → civil war. Disagree: able administrator, unlucky, biased sources. Then a clear judgement.",
            "**Paragraph 1 (agree).** John was a bad king in that he **failed at the key tasks of kingship**. He lost Normandy in 1204, earning the nickname 'Softsword', and his expensive plan to win it back collapsed at **Bouvines** in 1214. By 1215 so many barons distrusted him that they renounced their homage and forced him to accept Magna Carta. A king who loses his lands and his barons' loyalty has failed.",
            "**Paragraph 2 (disagree).** However, some of his reputation is unfair. Our harshest sources, **Roger of Wendover and Matthew Paris**, were St Albans monks writing after his death, and their Church had suffered under the Interdict, so they had reasons to exaggerate. Historians using government records, such as **W.L. Warren**, show that John worked hard, heard law cases himself and ran an efficient government. He also faced Philip II, a very able rival.",
            "**Paragraph 3 (counter-check).** Yet even sympathetic historians accept that John was **cruel and untrustworthy**: Arthur's disappearance and the fate of the de Briouze family are hard to explain away, and they explain why the barons would not trust his promises.",
            "**Judgement.** I largely agree. John was an able administrator, but kingship depended on trust and success in war, and John failed at both. His weakness is the reason the barons were able to put limits on royal power in 1215.",
          ],
          answer:
            "Largely agree: an able administrator, but cruel, distrusted and unsuccessful in war — and those failures led directly to Magna Carta.",
          yourTurn: {
            question:
              "Name the St Albans monk (died 1236) whose hostile chronicle of John's reign was later copied and expanded by Matthew Paris.",
            answer: {
              type: "text",
              accept: ["Roger of Wendover", "Wendover", "Roger Wendover", "Roger de Wendover"],
              display: "Roger of Wendover",
            },
            solution: "**Roger of Wendover** wrote the *Flores Historiarum* at St Albans; Matthew Paris built his own chronicle on it.",
          },
        },
      ],
      keyPoints: [
        "Monk-chroniclers **Roger of Wendover** and **Matthew Paris** (St Albans) hated John — partly because of the Interdict; always check their **provenance**.",
        "Victorian historians and **Robin Hood** legends fixed the image of 'bad King John'.",
        "Modern historians using government **records** found an able, hard-working administrator who was also **unlucky** (Philip II, Richard's debts).",
        "Most historians today still see John as **cruel and untrustworthy**, which explains why the barons would not trust him.",
        "Unlike William I, John's **weakness** led to **limits on royal power**.",
      ],
      whyItWorks:
        "Why do interpretations of John differ so much? Because historians use **different evidence** and ask **different questions**. Chroniclers judged his morals; modern historians reading government records judge his administration. Both can be partly right: John could be an efficient ruler *and* a cruel, distrusted man. Working out *why* an interpretation was formed — the writer's sources, time and purpose — is a core historian's skill. For the enquiry, John shows that inheriting the crown was not enough: a king also needed the **trust of the powerful** to keep it.",
      strategies: ["Check the provenance (NOP)", "Compare and contrast", "Consider the counter-argument"],
      thinkDeeper:
        "'John was not a bad king — just an unlucky one.' What evidence would you need to prove or disprove this? Is 'bad king' even a useful historical judgement — bad at what, and by whose standards?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Angevin empire", back: "The lands ruled by Henry II and his sons: England, Normandy, Anjou, Maine, Touraine and Aquitaine (plus a claim to Brittany and Ireland). Named after Anjou." },
      { front: "Henry II", back: "King 1154–1189; John's father; built the Angevin empire with his wife Eleanor of Aquitaine." },
      { front: "Eleanor of Aquitaine", back: "John's mother; Duchess of Aquitaine; backed John in 1199; died 1204." },
      { front: "Richard I 'the Lionheart'", back: "King 1189–1199; led the Third Crusade; captured on the way home and ransomed for 150,000 marks; died 1199 with no legitimate children." },
      { front: "'Lackland'", back: "John's nickname as the youngest son, who was not given major lands of his own." },
      { front: "Arthur of Brittany", back: "John's nephew (son of his older brother Geoffrey); rival claimant in 1199; captured at Mirebeau (1202); vanished 1203." },
      { front: "Philip II of France", back: "King of France 1180–1223; John's overlord and great rival; conquered Normandy (1204); won at Bouvines (1214)." },
      { front: "'Softsword'", back: "Mocking nickname for John after he lost Normandy in 1204." },
      { front: "Scutage", back: "'Shield money' — a payment by barons instead of military service. John levied it 11 times." },
      { front: "Relief", back: "A payment to the king for the right to inherit land. John charged very heavy reliefs." },
      { front: "Interdict (1208–1214)", back: "The Pope's ban on most church services in England, used to pressure John over Stephen Langton." },
      { front: "Excommunication", back: "Being cut off from the Church. Innocent III excommunicated John in 1209." },
      { front: "Stephen Langton", back: "Archbishop of Canterbury chosen by Innocent III (consecrated 1207); kept out by John until 1213; helped the barons frame their demands." },
      { front: "Innocent III", back: "Pope 1198–1216; imposed the Interdict; made England a papal fief (1213); annulled Magna Carta (August 1215)." },
      { front: "Papal fief (1213)", back: "John made England and Ireland lands held from the Pope, paying 1,000 marks a year — turning the Pope into his ally." },
      { front: "Battle of Bouvines", back: "27 July 1214: Philip II defeated John's allies; John's plan to regain Normandy collapsed — the trigger for the barons' revolt." },
      { front: "Renouncing homage", back: "Formally breaking the bond of loyalty to one's lord. The rebel barons did this on 5 May 1215." },
      { front: "Runnymede", back: "Meadow by the Thames between Windsor and Staines where Magna Carta was agreed; dated 15 June 1215." },
      { front: "Clause 39", back: "No free man shall be seized or imprisoned … except by the lawful judgement of his equals or by the law of the land." },
      { front: "Clause 40", back: "To no one will we sell, to no one deny or delay right or justice." },
      { front: "Clause 61 (security clause)", back: "25 barons could enforce the charter, even by seizing the king's castles and lands." },
      { front: "Villein", back: "An unfree peasant, bound to a lord — not protected by the 'free man' clauses of Magna Carta." },
      { front: "First Barons' War (1215–1217)", back: "Civil war after Magna Carta was annulled; rebels invited Prince Louis of France, who invaded in 1216." },
      { front: "Simon de Montfort's Parliament (1265)", back: "Included knights from the shires and burgesses from towns — an important step towards the House of Commons." },
      { front: "Roger of Wendover / Matthew Paris", back: "Monk-chroniclers of St Albans who wrote very hostile accounts of John after his death." },
    ],
    mustKnow: [
      "Can you explain how the Angevin empire was built and why John was called 'Lackland'?",
      "Can you explain why John, not Arthur, became king in 1199?",
      "Can you give three linked reasons why John lost Normandy in 1204?",
      "Can you describe at least three ways John raised money, and explain why the barons resented them?",
      "Can you explain the causes and results of John's quarrel with Pope Innocent III (1205–1213)?",
      "Can you separate the long-term grievances from the trigger (Bouvines) of the 1215 rebellion?",
      "Can you paraphrase clauses 1, 12, 39, 40 and 61 and say who each protected?",
      "Can you explain why Magna Carta failed in 1215 but became significant later?",
      "Can you evaluate interpretations of John, explaining why the monk-chroniclers were hostile?",
      "Can you compare how John and William I rose to power, and link John's weakness to limits on royal power?",
    ],
    misconceptions: [
      { wrong: "Magna Carta gave everyone in England rights in 1215.", right: "It protected mainly the barons, the Church and free men. Villeins — unfree peasants, a large part of the population — were left out. Its principles were applied more widely only centuries later." },
      { wrong: "King John signed Magna Carta.", right: "It was sealed with the king's Great Seal. Medieval kings authenticated documents with seals, not signatures." },
      { wrong: "Magna Carta created Parliament and democracy.", right: "It said nothing about Parliament. Parliament grew later (for example de Montfort's Parliament of 1265), and democracy came many centuries after that." },
      { wrong: "Magna Carta ended the conflict between John and his barons.", right: "It failed within weeks: the Pope annulled it in August 1215 and the First Barons' War followed. It survived only because it was reissued after John's death." },
      { wrong: "John lost his crown jewels in the Wash — that's a fact.", right: "John did lose part of his baggage crossing the Wash in October 1216, but what was lost is unknown. The 'lost treasure' story is legend." },
      { wrong: "The monk-chroniclers lived at the time, so their accounts must be reliable.", right: "Primary does not mean reliable. Wendover and Paris wrote after John's death, repeated gossip and belonged to a Church John had plundered — check their provenance." },
      { wrong: "John became king automatically as the next heir.", right: "The succession was disputed: his nephew Arthur, son of an older brother, also had a strong claim. John won through speed and support." },
      { wrong: "1215 is in the 12th century.", right: "1215 is in the 13th century (1201–1300). Add one to the 'hundreds': 12__ → 13th century." },
    ],
    examMistakes: [
      "Describing the clauses of Magna Carta instead of explaining *why* the barons wanted them.",
      "Writing that Magna Carta 'gave everyone rights' — always say who it actually protected (barons, the Church, free men).",
      "Muddling the order of events: Normandy lost (1204) → Interdict (1208) → excommunication (1209) → submission (1213) → Bouvines (1214) → Magna Carta (1215) → death (1216).",
      "Treating Bouvines as the only cause — separate the trigger from the long-term causes, and link them.",
      "Quoting Roger of Wendover or Matthew Paris as plain fact without considering their provenance and purpose.",
      "Calling 1215 the '12th century' — it is the 13th century.",
      "Forgetting the judgement in 'how far do you agree?' questions — end with a clear, justified verdict.",
      "Saying John 'signed' Magna Carta — it was sealed.",
    ],
    mnemonics: [
      {
        topic: "Causes of the barons' revolt",
        device: "John lost a LIMB",
        explanation:
          "**L**ost lands (Normandy, 1204) · **I**nterdict and the quarrel with the Pope (1208–13) · **M**oney demands (scutage, fines, reliefs) · **B**ouvines (1214) — the trigger. The causes come roughly in chronological order.",
      },
      {
        topic: "The last four years of the reign",
        device: "Kneel, Lose, Seal, Die (1213–1216)",
        explanation:
          "**1213** John kneels to the Pope (papal fief) · **1214** he loses at Bouvines · **1215** he seals Magna Carta · **1216** he dies at Newark. One event a year keeps the endgame in order.",
      },
      {
        topic: "Clauses 39 and 40",
        device: "39: no cell without trial · 40: justice not for sale",
        explanation:
          "Clause **39** — no free man imprisoned except by the lawful judgement of his equals or the law of the land. Clause **40** — justice must not be sold, denied or delayed.",
      },
    ],
    realWorld: [
      {
        title: "Singapore's Constitution",
        detail:
          "Article 9(1) of Singapore's Constitution says: 'No person shall be deprived of his life or personal liberty save in accordance with law.' The idea that power must work through the law echoes clause 39 — and Singapore's legal system grew from English common law.",
        emoji: "🇸🇬",
      },
      {
        title: "Human rights today",
        detail:
          "Article 9 of the Universal Declaration of Human Rights (1948) states: 'No one shall be subjected to arbitrary arrest, detention or exile.' It carries forward the principle of clause 39 — this time for everyone, not just 'free men'.",
        emoji: "🌍",
      },
      {
        title: "The rule of law",
        detail:
          "Whenever people argue that a government or leader must obey the courts and the law like everyone else, they are using the principle Magna Carta helped establish: no ruler is above the law.",
        emoji: "⚖️",
      },
      {
        title: "Taxation and consent",
        detail:
          "Clause 12 tied taxes to the kingdom's 'general consent'. Today, in many countries, taxes must be approved by an elected parliament — in Singapore, the annual Budget is debated and passed by Parliament.",
        emoji: "🏛️",
      },
      {
        title: "Four surviving originals",
        detail:
          "Four copies of the 1215 charter survive: two at the British Library in London, one at Lincoln and one at Salisbury Cathedral. For the 800th anniversary in 2015, all four were brought together for the first time.",
        emoji: "📜",
      },
    ],
    videos: [
      { title: "King John and Magna Carta", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=bbc+bitesize+king+john+magna+carta" },
      { title: "King John explained", channel: "Simple History", url: "https://www.youtube.com/results?search_query=simple+history+king+john" },
      { title: "Magna Carta explained", channel: "TED-Ed", url: "https://www.youtube.com/results?search_query=ted-ed+magna+carta" },
      { title: "Magna Carta at the British Library", channel: "British Library", url: "https://www.youtube.com/results?search_query=british+library+magna+carta" },
    ],
    formulas: [
      { name: "1166", formula: "John is born, the youngest son of Henry II and Eleanor of Aquitaine." },
      { name: "1189", formula: "Richard I becomes king; he soon leaves on the Third Crusade (1190–1192)." },
      { name: "1193–1194", formula: "John rebels with Philip II's help while Richard is a prisoner; Richard forgives him." },
      { name: "27 May 1199", formula: "John is crowned at Westminster after Richard's death; Arthur of Brittany is a rival claimant." },
      { name: "1203", formula: "Arthur vanishes in John's custody — probably murdered." },
      { name: "1204", formula: "Château Gaillard (March) and Rouen (June) fall: Normandy is lost.", note: "John is mocked as 'Softsword'." },
      { name: "1208–1214", formula: "The Interdict: most church services stop in England.", note: "John is excommunicated in 1209." },
      { name: "15 May 1213", formula: "John submits to the Pope and makes England a papal fief." },
      { name: "27 July 1214", formula: "Battle of Bouvines: Philip II defeats John's allies." },
      { name: "5 and 17 May 1215", formula: "Rebel barons renounce their homage (5 May) and take London (17 May)." },
      { name: "15 June 1215", formula: "Magna Carta agreed at Runnymede.", note: "Annulled by Pope Innocent III on 24 August 1215." },
      { name: "October 1216", formula: "John loses baggage in the Wash and dies at Newark (18–19 October); Henry III becomes king aged nine." },
      { name: "1225", formula: "Henry III's reissue of Magna Carta becomes the standard version." },
      { name: "1265", formula: "Simon de Montfort's Parliament includes knights and townsmen." },
    ],
  },
};
