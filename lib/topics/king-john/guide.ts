import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "king-john",
  title: "King John and Magna Carta",
  strand: "Kings & Power",
  icon: "📜",
  summary: "A king who inherited an empire, lost half of it, fell out with the Pope and was forced to seal Magna Carta.",
  intro:
    "Term 1 asks: *under what circumstances did kings rise to power?* William I took the crown by conquest. John's case is different: he **inherited** the throne in 1199 — but only after pushing aside a rival claimant, his 12-year-old nephew Arthur. Then, step by step, he lost the things that kept a medieval king strong: his lands in France, the support of the Church, his money and the trust of his barons. In 1215 the barons forced him to accept **Magna Carta**, a charter saying that even the king must obey the law.\n\nAs you work through this topic, keep two questions in mind: *How did John get power?* and *How did he lose it?* The answers will help you compare John with William I and Henry VIII.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "angevin-inheritance",
      heading: "John's inheritance: the Angevin Empire",
      discovery: {
        problem:
          "April 1199. King Richard I has died in France with no legitimate son. Two men could be the next king:\n\n- **John**, aged 32, Richard's youngest brother. An experienced adult — but six years ago he plotted with the King of France to take Richard's throne while Richard was a prisoner.\n- **Arthur**, aged 12, son of John's *older* brother Geoffrey (who died in 1186). By strict blood order his claim looks stronger. The King of France supports him.\n\nYou are a baron with land in both England and Normandy. Who do you back, and why? Before you read on, decide what matters most to you: **blood**, **age and experience**, **what the dead king wanted**, or **who will protect your lands**.",
        idea:
          "There was no single fixed rule. Strict blood order pointed to Arthur, but custom in England and Normandy, Richard's deathbed wishes, John's age and the support of powerful men all pointed to John. So John rose to power by **inheritance plus choice**: powerful people *accepted* his claim. But the doubt never fully went away — and a living rival claimant gave the King of France a weapon to use against him.",
      },
      body:
        "When John was born in **1166**, his father **Henry II** ruled more land than any other king in western Europe. Historians call it the **Angevin Empire** (from Anjou, Henry's family lands). It stretched from the Scottish border to the Pyrenees: England, Normandy, Anjou, Maine, Touraine and — through Henry's wife **Eleanor of Aquitaine** — the huge duchy of Aquitaine. But for his French lands Henry was a *vassal* of the King of France, who was officially his overlord.\n\nJohn was the youngest of four sons who grew up, so he was nicknamed **“Lackland”**: there seemed to be no great inheritance left for him. Then his brothers died one by one — Henry the Young King (1183), Geoffrey (1186) and finally **Richard I, “the Lionheart”**, who died of a crossbow wound in France on **6 April 1199**.\n\nRichard had been an expensive king. He spent only about six months of his ten-year reign in England. He paid for the **Third Crusade** and, after being captured on his way home, England paid a **ransom of 150,000 marks** — around two to three times the Crown's yearly income. While Richard was a prisoner, John plotted with Philip II of France to take his place. Richard later forgave him.\n\n| Claimant in 1199 | Strengths | Weaknesses |\n|---|---|---|\n| **John**, 32 | Adult; Richard named him as heir as he was dying; backed by his mother Eleanor, William Marshal and Archbishop Hubert Walter; accepted in England and Normandy | Had betrayed Richard; not trusted |\n| **Arthur of Brittany**, 12 | Son of an *older* brother; backed by Philip II and the lords of Anjou, Maine and Touraine | A child; seen as the French king's puppet |\n\nJohn was crowned at Westminster on **27 May 1199**. But Arthur remained a rival. In **1202** John captured him at **Mirebeau**, and by **1203** Arthur had disappeared. Most historians believe John was responsible for his death, though nobody can prove exactly what happened.",
      diagram: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Family tree: Henry II and Eleanor of Aquitaine had four sons who grew up: Henry the Young King, Richard I, Geoffrey and John. Geoffrey's son was Arthur of Brittany."><rect x="120" y="8" width="240" height="40" rx="6" fill="#c7d2fe" stroke="#334155"/><text x="240" y="24" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Henry II, king 1154–1189</text><text x="240" y="40" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">married Eleanor of Aquitaine (1152)</text><line x1="240" y1="48" x2="240" y2="65" stroke="#334155" stroke-width="2"/><line x1="60" y1="65" x2="420" y2="65" stroke="#334155" stroke-width="2"/><line x1="60" y1="65" x2="60" y2="80" stroke="#334155" stroke-width="2"/><line x1="180" y1="65" x2="180" y2="80" stroke="#334155" stroke-width="2"/><line x1="300" y1="65" x2="300" y2="80" stroke="#334155" stroke-width="2"/><line x1="420" y1="65" x2="420" y2="80" stroke="#334155" stroke-width="2"/><rect x="5" y="80" width="110" height="52" rx="6" fill="#ffffff" stroke="#334155"/><text x="60" y="96" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Henry</text><text x="60" y="110" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">the Young King</text><text x="60" y="124" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">died 1183</text><rect x="125" y="80" width="110" height="52" rx="6" fill="#ffffff" stroke="#334155"/><text x="180" y="96" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Richard I</text><text x="180" y="110" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">the Lionheart</text><text x="180" y="124" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">king 1189–1199</text><rect x="245" y="80" width="110" height="52" rx="6" fill="#ffffff" stroke="#334155"/><text x="300" y="96" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Geoffrey</text><text x="300" y="110" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">of Brittany</text><text x="300" y="124" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">died 1186</text><rect x="365" y="80" width="110" height="52" rx="6" fill="#fde68a" stroke="#334155"/><text x="420" y="96" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">John</text><text x="420" y="110" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">‘Lackland’</text><text x="420" y="124" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">born 1166</text><text x="420" y="152" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">crowned</text><text x="420" y="166" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">27 May 1199</text><line x1="300" y1="132" x2="300" y2="165" stroke="#334155" stroke-width="2"/><rect x="235" y="165" width="130" height="44" rx="6" fill="#fecaca" stroke="#334155"/><text x="300" y="182" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Arthur of Brittany</text><text x="300" y="198" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">born 1187; vanished 1203</text><rect x="5" y="150" width="215" height="90" rx="6" fill="#bae6fd" stroke="#334155"/><text x="14" y="168" font-size="11" font-family="sans-serif" fill="#1f2937" font-weight="bold">April 1199: Richard dies</text><text x="14" y="184" font-size="11" font-family="sans-serif" fill="#1f2937">with no legitimate son.</text><text x="14" y="204" font-size="11" font-family="sans-serif" fill="#1f2937">Strict blood order → Arthur</text><text x="14" y="222" font-size="11" font-family="sans-serif" fill="#1f2937">Adult, named, backed → John</text></svg>`,
      diagramCaption:
        "Geoffrey was older than John, so Arthur — Geoffrey's son — had a strong claim by blood. John won because he was an adult and powerful people chose to back him.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why John became king in 1199. (4 marks)",
          steps: [
            "Start with the trigger: Richard I died in April 1199 without a legitimate son, so there was a disputed succession.",
            "Give the first reason with evidence: John was an adult of 32, while Arthur was only 12.",
            "Give a second reason with evidence: Richard named John as heir, and powerful people — Eleanor of Aquitaine, William Marshal, Archbishop Hubert Walter — backed him.",
            "Link the reasons: because there was no fixed rule, the choice of powerful adults decided it, which is why the adult brother beat the child nephew.",
          ],
          answer:
            "John became king because Richard I died in April 1199 without a son, leaving a disputed succession between John and his nephew Arthur. One reason John won was that he was an adult of 32, while Arthur was only 12 and looked like a puppet of the French king. A second reason was support: Richard named John as his heir as he was dying, and powerful people such as his mother Eleanor, William Marshal and Archbishop Hubert Walter backed him. Because there was no fixed rule about whether a brother or a nephew came first, the support of these powerful people decided the matter, and John was crowned on 27 May 1199.",
          yourTurn: {
            question: "John's nephew was his rival for the throne in 1199. What was the nephew's first name?",
            answer: { type: "text", accept: ["Arthur", "Arthur of Brittany", "Arthur, Duke of Brittany", "Duke Arthur", "Arthur I of Brittany"], display: "Arthur (of Brittany)" },
            solution: "Arthur of Brittany, the 12-year-old son of John's older brother Geoffrey.",
          },
        },
        {
          title: "Recall check",
          problem: "Why was John nicknamed “Lackland”, and why is the nickname ironic?",
          steps: [
            "Think about John's place in the family: he was the youngest son.",
            "Youngest sons usually inherited little land.",
            "Then think about what happened later in his reign.",
          ],
          answer:
            "As the youngest of four sons, John was not expected to inherit much land, so he was called “Lackland”. The irony is that he did inherit everything — and then lost most of his French lands by 1204, so he became “lack-land” all over again.",
          yourTurn: {
            question: "In what year did John become king of England?",
            answer: { type: "number", value: 1199 },
            solution: "Richard I died on 6 April 1199 and John was crowned on 27 May 1199.",
          },
        },
      ],
      keyPoints: [
        "Henry II and Eleanor of Aquitaine built the Angevin Empire: England plus about half of France.",
        "Richard I's crusade and ransom (150,000 marks) left the Crown short of money.",
        "In 1199 John (32, Richard's brother) beat Arthur (12, son of an older brother) — inheritance plus the choice of powerful people.",
        "Arthur was captured in 1202 and had vanished by 1203; most historians think John was responsible.",
      ],
      whyItWorks:
        "Medieval succession was not automatic. Inheritance gave John a claim, but it only became a crown because powerful adults accepted him — they wanted a grown-up king who could defend their lands. The same circumstances that helped him also created his first weakness: a rival claimant whom Philip II could use, and a dark rumour about Arthur's fate that made barons fear John.",
      strategies: ["Use the chronology", "Weigh both sides, then judge", "Compare case studies"],
      thinkDeeper:
        "In 1066 the Witan chose the adult Harold Godwinson over Edgar Ætheling, aged about 14, who had the stronger blood claim. In 1199 the adult John beat 12-year-old Arthur. What does this pattern suggest about what really mattered when medieval nobles chose a king?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "losing-normandy",
      heading: "Losing Normandy",
      discovery: {
        problem:
          "It is the winter of 1203. You are a Norman lord. Philip II's army is taking castle after castle. Your lord, King John, distrusts his own nobles, pays foreign mercenaries and has a rumour hanging over him: that he murdered his nephew Arthur. In December he sails back to England.\n\nPhilip promises to let you keep your Norman lands if you accept him as your lord. Do you stay loyal to John? **Predict** what most Norman lords did — and what that meant for Normandy.",
        idea:
          "Loyalty in the Middle Ages was a bargain: a lord protected his vassals, and they served him. When John seemed unable — or unwilling — to protect them, and when people feared what he might do to them, many Norman lords made their peace with Philip. Without their support, Normandy fell in 1204. Castles do not defend themselves; people do.",
      },
      body:
        "**How the war began.** In 1200 John married **Isabella of Angoulême**, who was already engaged to a powerful lord, Hugh de Lusignan. The Lusignans appealed to John's overlord for his French lands, **Philip II** of France. John refused to answer the summons to Philip's court, so in 1202 Philip declared John's French lands **forfeit** and attacked.\n\n**How Normandy was lost.** John won a victory at Mirebeau in 1202, capturing Arthur — but then threw it away. Prisoners were treated harshly, Arthur disappeared, and some of John's own allies changed sides. Philip had growing wealth and a determined army. John, meanwhile, distrusted his barons and left Normandy for England in **December 1203**. Richard's great castle, **Château Gaillard**, fell on **6 March 1204**, and **Rouen** surrendered in **June 1204**. By 1205 Anjou, Maine and Touraine were gone too. John kept Gascony, part of Poitou and the Channel Islands.\n\nSome critics called him **“Softsword”** (Latin *mollegladium*). A chronicler reports the nickname after John gave ground to Philip in a peace treaty in 1200; losing Normandy made it stick.\n\n**Why it mattered.**\n\n- **Land and money:** the rich duchy of Normandy, joined to the English crown since 1066, was gone.\n- **Reputation:** the son of Henry II and brother of the Lionheart had lost his family's heartland.\n- **The barons:** lords with land on both sides of the Channel had to choose — many lost their Norman estates.\n- **Government:** John now stayed in England and ran it closely, squeezing it for money to win Normandy back.\n\n**Trying to win it back.** After years of saving and taxing, John built an alliance with Emperor **Otto IV** (his nephew) and the Count of Flanders. In 1214 John attacked from Poitou but retreated at La Roche-aux-Moines; then his allies were crushed by Philip at **Bouvines on 27 July 1214**. John was not at Bouvines — but the defeat ended his hopes and sent him home broke and humiliated.",
      diagram: `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic map of the Angevin lands around 1200. England, Ireland and Gascony were kept by John. Normandy, Brittany, Maine, Anjou and Touraine were lost to Philip II and his allies between 1203 and 1205. Poitou was fought over. The French king's own lands lay around Paris. Bouvines is marked in the north-east."><text x="320" y="24" font-size="13" font-family="sans-serif" fill="#1f2937" font-weight="bold">Angevin lands, c. 1200</text><text x="320" y="40" font-size="10" font-family="sans-serif" fill="#1f2937">(schematic map, not to scale)</text><ellipse cx="45" cy="85" rx="30" ry="42" fill="#bbf7d0" stroke="#334155"/><text x="45" y="89" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Ireland</text><polygon points="110,10 165,15 185,60 200,110 205,140 150,150 95,148 120,115 100,80 115,45" fill="#bbf7d0" stroke="#334155"/><text x="152" y="98" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">England</text><text x="255" y="160" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-style="italic">English Channel</text><polygon points="175,175 270,166 285,200 232,214 180,210" fill="#fecaca" stroke="#334155"/><text x="228" y="194" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Normandy</text><polygon points="75,195 175,185 180,212 160,245 90,240" fill="#fecaca" stroke="#334155"/><text x="128" y="222" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Brittany</text><polygon points="180,212 232,214 240,240 185,245" fill="#fecaca" stroke="#334155"/><text x="210" y="233" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Maine</text><polygon points="160,245 185,245 240,240 236,270 165,272" fill="#fecaca" stroke="#334155"/><text x="198" y="262" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Anjou</text><polygon points="240,240 290,232 294,266 236,270" fill="#fecaca" stroke="#334155"/><text x="265" y="256" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Touraine</text><polygon points="270,166 350,150 380,200 340,240 290,232 285,200" fill="#c7d2fe" stroke="#334155"/><text x="330" y="194" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">French king's</text><text x="330" y="207" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">lands (Paris)</text><circle cx="372" cy="128" r="4" fill="#1f2937"/><text x="380" y="132" font-size="10" font-family="sans-serif" fill="#1f2937">Bouvines 1214</text><polygon points="165,272 236,270 246,300 170,302" fill="#fde68a" stroke="#334155"/><text x="206" y="290" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Poitou</text><polygon points="170,302 246,300 256,335 176,335" fill="#bbf7d0" stroke="#334155"/><text x="213" y="323" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Gascony</text><line x1="158" y1="274" x2="158" y2="334" stroke="#334155" stroke-width="1.5"/><text x="150" y="308" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">Aquitaine</text><rect x="305" y="250" width="170" height="86" rx="6" fill="#ffffff" stroke="#334155"/><rect x="314" y="260" width="12" height="12" fill="#bbf7d0" stroke="#334155"/><text x="332" y="270" font-size="10" font-family="sans-serif" fill="#1f2937">Kept by John</text><rect x="314" y="279" width="12" height="12" fill="#fecaca" stroke="#334155"/><text x="332" y="289" font-size="10" font-family="sans-serif" fill="#1f2937">Lost to Philip II and</text><text x="332" y="301" font-size="10" font-family="sans-serif" fill="#1f2937">his allies, 1203–05</text><rect x="314" y="306" width="12" height="12" fill="#fde68a" stroke="#334155"/><text x="332" y="316" font-size="10" font-family="sans-serif" fill="#1f2937">Fought over</text><rect x="314" y="320" width="12" height="12" fill="#c7d2fe" stroke="#334155"/><text x="332" y="330" font-size="10" font-family="sans-serif" fill="#1f2937">French royal lands</text></svg>`,
      diagramCaption:
        "By 1205 the heart of the Angevin Empire — Normandy, Anjou, Maine and Touraine — belonged to the French king. John kept England, Ireland and Gascony.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why the loss of Normandy in 1204 was important for John's reign. (4 marks)",
          steps: [
            "Don't describe the fighting — the question asks about *consequences*.",
            "Consequence 1 — money: John wanted Normandy back, so he needed huge sums for armies and allies.",
            "Consequence 2 — the barons: many lost Norman estates and were taxed heavily for wars they did not want.",
            "Link it forward: high taxes plus failure, ending at Bouvines in 1214, turned barons against John — the road to Magna Carta.",
          ],
          answer:
            "The loss of Normandy was important because it set off a chain of problems for John. First, he was determined to win it back, which meant raising huge sums: he charged scutage far more often than earlier kings and squeezed his barons through reliefs and fines. Second, it damaged his reputation — critics called him “Softsword” — so barons were less willing to trust him or fight for him. These linked: barons were asked to pay more and more for wars that kept failing, and when the final attempt ended in defeat at Bouvines in 1214, their anger turned into the rebellion that led to Magna Carta in 1215.",
          yourTurn: {
            question: "In what year did Rouen surrender and Normandy fall to Philip II?",
            answer: { type: "number", value: 1204 },
            solution: "Château Gaillard fell in March 1204 and Rouen surrendered in June 1204.",
          },
        },
        {
          title: "Spot the trap",
          problem: "A student writes: “John lost the Battle of Bouvines in 1214.” What is wrong with this, and how would you correct it?",
          steps: [
            "Check where John actually was in July 1214.",
            "John was campaigning in Poitou, in the south-west; he retreated at La Roche-aux-Moines.",
            "Bouvines (in the north-east) was fought by his allies, led by Emperor Otto IV.",
          ],
          answer:
            "John was not at Bouvines. His allies — Emperor Otto IV and the Count of Flanders — were defeated by Philip II at Bouvines on 27 July 1214, while John was in Poitou. A better sentence: “John's plan to win back his lands collapsed when his allies were defeated at Bouvines in 1214.”",
          yourTurn: {
            question: "Name the battle of 27 July 1214 where Philip II defeated John's allies.",
            answer: { type: "text", accept: ["Bouvines", "Battle of Bouvines", "the Battle of Bouvines"], display: "Bouvines" },
            solution: "The Battle of Bouvines, in Flanders, 27 July 1214.",
          },
        },
      ],
      keyPoints: [
        "War began after John married Isabella of Angoulême (1200) and Philip II declared his French lands forfeit (1202).",
        "Château Gaillard fell in March 1204 and Rouen in June 1204 — Normandy was lost.",
        "Critics called John “Softsword”; many barons lost their Norman estates.",
        "John's 1214 plan to win the lands back ended when his allies were beaten at Bouvines (27 July 1214).",
      ],
      whyItWorks:
        "Losing Normandy changed the whole shape of John's reign. A king who has just lost his family's heartland needs money and victories to recover his reputation — so John taxed harder and stayed in England, where barons felt his demands directly. When the final campaign failed at Bouvines, he had spent the money, lost the war and kept the resentment: the perfect conditions for rebellion.",
      strategies: ["Link the factors", "Use the chronology", "Sort causes into categories"],
      thinkDeeper:
        "Counterfactual: suppose John's allies had won at Bouvines and he had recovered Normandy. Would the barons still have rebelled in 1215? Think about which of their complaints would have disappeared — and which would not.",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "john-and-the-church",
      heading: "John and the Church",
      discovery: {
        problem:
          "A puzzle. From 1208 the Pope ordered almost every church in England to stop holding services — for six years. In 1209 he excommunicated John. Yet in **May 1213** John did something astonishing: he handed the whole kingdom of England to the Pope and received it back as the Pope's vassal, promising to pay 1,000 marks a year.\n\nWhy would a king give away his own kingdom? Was it a humiliation, or a clever move? Write down your guess — and what John might have gained — before reading on.",
        idea:
          "It looked humiliating, but it was shrewd. In 1213 Philip II was preparing to invade England, and the Pope's quarrel with John gave the French and the rebel barons an excuse to call their attack holy. By submitting, John turned the Pope from enemy into protector. It worked: in 1215 Pope Innocent III took John's side against the barons and annulled Magna Carta.",
      },
      body:
        "**The quarrel.** In 1205 Hubert Walter, Archbishop of Canterbury, died. The archbishop was the most important churchman in England and one of the king's chief advisers, so John wanted his own man, John de Gray. Some of the Canterbury monks had secretly chosen one of their own. **Pope Innocent III** rejected both and had **Stephen Langton** elected in Rome; he consecrated Langton in 1207. John refused to accept him and threw the Canterbury monks out.\n\n**The Interdict (1208–1214).** In March 1208 the Pope placed England under an **interdict**:\n\n| Banned under the Interdict | Still allowed |\n|---|---|\n| Normal church services, such as Mass | Baptism of babies |\n| Burial in consecrated churchyards | Confession for the dying |\n\nFor ordinary people, whose lives were shaped by the Church, this was frightening. In **1209** Innocent **excommunicated** John — cut him off from the Church.\n\n**John profits.** John was not frightened. He seized the lands and income of churchmen who obeyed the Pope, and historians think he collected very large sums this way — money he later used for his wars. Most bishops fled abroad.\n\n**The U-turn.** By 1212–13 the danger was real. Philip II was preparing an invasion, and some barons were plotting against John. In **May 1213** John accepted Langton and made England a **papal fief** — a land held from the Pope — paying 1,000 marks a year. Langton arrived and absolved John in July 1213, and the Interdict ended in 1214.\n\n**The irony.** Langton, the man John had refused, later helped the barons put their demands into writing — while the Pope, John's old enemy, became his strongest supporter.",
      diagram: `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vertical timeline of John's reign from 1199 to 1216, colour-coded: France and war in red, Church in blue, barons and money in amber, John in green."><line x1="60" y1="14" x2="60" y2="326" stroke="#334155" stroke-width="2"/><text x="52" y="24" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1199</text><circle cx="60" cy="20" r="5" fill="#bbf7d0" stroke="#334155"/><text x="72" y="24" font-size="11" font-family="sans-serif" fill="#1f2937">John crowned (27 May)</text><text x="52" y="77" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1202</text><circle cx="60" cy="73" r="5" fill="#fecaca" stroke="#334155"/><text x="72" y="77" font-size="11" font-family="sans-serif" fill="#1f2937">Arthur captured at Mirebeau</text><text x="52" y="94" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1203</text><circle cx="60" cy="90" r="5" fill="#fecaca" stroke="#334155"/><text x="72" y="94" font-size="11" font-family="sans-serif" fill="#1f2937">Arthur disappears</text><text x="52" y="112" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1204</text><circle cx="60" cy="108" r="5" fill="#fecaca" stroke="#334155"/><text x="72" y="112" font-size="11" font-family="sans-serif" fill="#1f2937">Normandy lost to Philip II</text><text x="52" y="130" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1205</text><circle cx="60" cy="126" r="5" fill="#c7d2fe" stroke="#334155"/><text x="72" y="130" font-size="11" font-family="sans-serif" fill="#1f2937">Archbishop Hubert Walter dies</text><text x="52" y="165" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1207</text><circle cx="60" cy="161" r="5" fill="#c7d2fe" stroke="#334155"/><text x="72" y="165" font-size="11" font-family="sans-serif" fill="#1f2937">Pope consecrates Stephen Langton</text><text x="52" y="183" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1208</text><circle cx="60" cy="179" r="5" fill="#c7d2fe" stroke="#334155"/><text x="72" y="183" font-size="11" font-family="sans-serif" fill="#1f2937">Interdict on England begins</text><text x="52" y="200" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1209</text><circle cx="60" cy="196" r="5" fill="#c7d2fe" stroke="#334155"/><text x="72" y="200" font-size="11" font-family="sans-serif" fill="#1f2937">John excommunicated</text><text x="52" y="218" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1210</text><circle cx="60" cy="214" r="5" fill="#fde68a" stroke="#334155"/><text x="72" y="218" font-size="11" font-family="sans-serif" fill="#1f2937">De Braose family ruined</text><text x="52" y="253" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1212</text><circle cx="60" cy="249" r="5" fill="#fde68a" stroke="#334155"/><text x="72" y="253" font-size="11" font-family="sans-serif" fill="#1f2937">Barons' plot uncovered</text><text x="52" y="270" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1213</text><circle cx="60" cy="266" r="5" fill="#c7d2fe" stroke="#334155"/><text x="72" y="270" font-size="11" font-family="sans-serif" fill="#1f2937">John submits to the Pope</text><text x="52" y="288" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1214</text><circle cx="60" cy="284" r="5" fill="#fecaca" stroke="#334155"/><text x="72" y="288" font-size="11" font-family="sans-serif" fill="#1f2937">Allies defeated at Bouvines</text><text x="52" y="306" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1215</text><circle cx="60" cy="302" r="5" fill="#fde68a" stroke="#334155"/><text x="72" y="306" font-size="11" font-family="sans-serif" fill="#1f2937">Magna Carta (15 June); war</text><text x="52" y="323" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1216</text><circle cx="60" cy="319" r="5" fill="#bbf7d0" stroke="#334155"/><text x="72" y="323" font-size="11" font-family="sans-serif" fill="#1f2937">John dies (18–19 October)</text><rect x="330" y="14" width="145" height="88" rx="6" fill="#ffffff" stroke="#334155"/><circle cx="344" cy="30" r="5" fill="#fecaca" stroke="#334155"/><text x="356" y="34" font-size="10" font-family="sans-serif" fill="#1f2937">France and war</text><circle cx="344" cy="50" r="5" fill="#c7d2fe" stroke="#334155"/><text x="356" y="54" font-size="10" font-family="sans-serif" fill="#1f2937">The Church</text><circle cx="344" cy="70" r="5" fill="#fde68a" stroke="#334155"/><text x="356" y="74" font-size="10" font-family="sans-serif" fill="#1f2937">Barons and money</text><circle cx="344" cy="90" r="5" fill="#bbf7d0" stroke="#334155"/><text x="356" y="94" font-size="10" font-family="sans-serif" fill="#1f2937">John's reign</text></svg>`,
      diagramCaption:
        "John's troubles overlapped: the quarrel with the Church (blue) ran right through the years when he was taxing hard to win back France (red).",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why John submitted to the Pope in 1213. (4 marks)",
          steps: [
            "Look for the pressures on John in 1212–13: a French invasion threat and a barons' plot.",
            "Explain how the quarrel made those threats worse: an excommunicated king was easier to attack and to rebel against.",
            "Explain what John gained: the Pope as protector.",
            "Give evidence that it worked: the Pope annulled Magna Carta in 1215.",
          ],
          answer:
            "John submitted to the Pope in May 1213 because he faced two dangers at once. Philip II of France was preparing to invade England, and in 1212 some barons had plotted against John. While John was excommunicated, his enemies could present an attack on him as a holy cause. By accepting Stephen Langton and making England a papal fief, John turned Innocent III into his protector. This was a clever move rather than simple defeat, because in 1215 the Pope supported John and annulled Magna Carta.",
          yourTurn: {
            question: "Who was the Archbishop of Canterbury chosen by Pope Innocent III, whom John refused to accept?",
            answer: { type: "text", accept: ["Stephen Langton", "Langton", "Archbishop Langton", "Archbishop Stephen Langton", "Cardinal Langton"], display: "Stephen Langton" },
            solution: "Stephen Langton, consecrated by Innocent III in 1207; John accepted him only in 1213.",
          },
        },
      ],
      keyPoints: [
        "The quarrel began in 1205 over who should be Archbishop of Canterbury; Innocent III chose Stephen Langton.",
        "Interdict on England from 1208; John excommunicated in 1209.",
        "John seized Church lands and income — he profited from the quarrel.",
        "In May 1213 John made England a papal fief (1,000 marks a year) — and gained the Pope as an ally.",
      ],
      whyItWorks:
        "In the Middle Ages the Church gave kings legitimacy: coronation, anointing and the Pope's approval all said a king ruled with God's blessing. Fighting the Pope therefore weakened John's position — it gave his enemies a holy excuse. But it also shows John's skill: he squeezed money from the Church while it suited him, then switched sides at exactly the moment the Pope's support became more valuable than the Church's income.",
      strategies: ["Ask “who benefits?”", "Use the chronology", "Weigh both sides, then judge"],
      thinkDeeper:
        "Henry VIII also quarrelled with a Pope over the Church — but he ended up breaking away from Rome, while John ended up submitting to it. What was different about each king's circumstances that might explain the different outcomes?",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "john-and-the-barons",
      heading: "Money, justice and angry barons",
      discovery: {
        problem:
          "You are a baron in 1214. Here are six things King John has done to you or people like you:\n\n1. Charged you **scutage** (money instead of fighting) again — for a war you think is hopeless.\n2. Demanded a huge fee before you could inherit your father's land.\n3. Made your widowed sister pay to avoid being forced to remarry.\n4. Taken your son as a **hostage** for your good behaviour.\n5. Let your rival pay to have a lawsuit against you decided quickly.\n6. Lost your family's estates in Normandy.\n\n**Rank them** from most to least infuriating. Then sort them into three groups: **money**, **justice** and **trust**. Which group do you think finally pushed the barons into rebellion?",
        idea:
          "Most of these were old royal rights — earlier kings had used them too. What was new was how *often* and how *harshly* John used them, and the fear that came with them. Money complaints made barons angry; the feeling that the king was above the law and could ruin anyone (hostages, crushing debts, the fate of the de Braose family) made them afraid. Anger plus fear, plus a king weakened by defeat, turned complaints into rebellion.",
      },
      body:
        "**The feudal bargain.** Barons held land from the king. In return they owed him military service and certain payments; he owed them protection, fair justice and good lordship. John pushed every royal right to its limit.\n\n| Method | What it meant |\n|---|---|\n| **Scutage** | Money paid instead of fighting. John charged it **11 times in 17 years**, often at higher rates. |\n| **Reliefs** | A fee to inherit land. John set some at enormous sums. |\n| **Widows and heirs** | John sold the right to marry rich widows and heiresses; widows paid to avoid being forced to remarry. |\n| **New taxes** | A 1207 tax on rents and goods raised about £60,000. |\n| **Forest law** | Huge areas were royal forest; people were heavily fined for breaking its rules. |\n| **Selling justice** | People offered the king money to have a case heard, or heard quickly. |\n\n**A hands-on king.** After 1204 John lived in England and travelled constantly, so his government was efficient — and barons felt every demand. He used debts as a weapon: a baron who owed the king money could be ruined whenever John chose. He also took **hostages**, often barons' sons.\n\n**The de Braose case.** William de Braose had been one of John's favourites. By 1208 they had fallen out over huge debts. According to the chronicler Roger of Wendover, his wife **Matilda** refused to hand her sons to a king who had murdered his own nephew. In 1210 Matilda and her eldest son were captured and died in John's prison, probably of starvation. Other barons drew the lesson: nobody was safe.\n\n**Rebellion.** A plot against John was uncovered in 1212; two leaders, Robert fitz Walter and Eustace de Vesci, fled abroad. After Bouvines, many barons refused to pay another scutage. On **5 May 1215** rebels formally renounced their loyalty, and on **17 May 1215** they captured **London**. Not every baron rebelled — many stayed loyal or waited — but without London, John had to negotiate.",
      diagram: `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cause chain: loss of Normandy, the quarrel with the Pope and John's cruelty each fed the barons' anger about money, justice and trust; defeat at Bouvines in 1214 was the trigger; rebels took London in May 1215, leading to Magna Carta on 15 June 1215."><defs><marker id="kj-cause-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs><rect x="10" y="8" width="140" height="44" rx="6" fill="#fecaca" stroke="#334155"/><text x="80" y="26" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Loss of Normandy</text><text x="80" y="42" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1204</text><rect x="170" y="8" width="140" height="44" rx="6" fill="#c7d2fe" stroke="#334155"/><text x="240" y="26" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Quarrel with Pope</text><text x="240" y="42" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1205–1213</text><rect x="330" y="8" width="140" height="44" rx="6" fill="#fde68a" stroke="#334155"/><text x="400" y="26" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Cruelty, distrust</text><text x="400" y="42" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">(Arthur, de Braose)</text><line x1="80" y1="52" x2="80" y2="84" stroke="#334155" stroke-width="1.5" marker-end="url(#kj-cause-arrow)"/><line x1="240" y1="52" x2="240" y2="84" stroke="#334155" stroke-width="1.5" marker-end="url(#kj-cause-arrow)"/><line x1="400" y1="52" x2="400" y2="84" stroke="#334155" stroke-width="1.5" marker-end="url(#kj-cause-arrow)"/><rect x="10" y="86" width="140" height="44" rx="6" fill="#ffffff" stroke="#334155"/><text x="80" y="104" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Needs huge sums to</text><text x="80" y="120" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">win France back</text><rect x="170" y="86" width="140" height="44" rx="6" fill="#ffffff" stroke="#334155"/><text x="240" y="104" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Church income seized;</text><text x="240" y="120" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">king excommunicated</text><rect x="330" y="86" width="140" height="44" rx="6" fill="#ffffff" stroke="#334155"/><text x="400" y="104" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Hostages and debts</text><text x="400" y="120" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">used as threats</text><line x1="80" y1="130" x2="150" y2="166" stroke="#334155" stroke-width="1.5" marker-end="url(#kj-cause-arrow)"/><line x1="240" y1="130" x2="240" y2="166" stroke="#334155" stroke-width="1.5" marker-end="url(#kj-cause-arrow)"/><line x1="400" y1="130" x2="330" y2="166" stroke="#334155" stroke-width="1.5" marker-end="url(#kj-cause-arrow)"/><rect x="70" y="168" width="340" height="46" rx="6" fill="#fde68a" stroke="#334155"/><text x="240" y="186" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Barons angry about money, justice and trust</text><text x="240" y="204" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">scutage 11 times · huge reliefs · justice sold</text><line x1="160" y1="214" x2="120" y2="240" stroke="#334155" stroke-width="1.5" marker-end="url(#kj-cause-arrow)"/><rect x="10" y="242" width="210" height="44" rx="6" fill="#fecaca" stroke="#334155"/><text x="115" y="260" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Trigger: Bouvines, July 1214</text><text x="115" y="276" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">John defeated and broke</text><line x1="220" y1="264" x2="256" y2="264" stroke="#334155" stroke-width="1.5" marker-end="url(#kj-cause-arrow)"/><rect x="260" y="242" width="210" height="44" rx="6" fill="#ffffff" stroke="#334155"/><text x="365" y="260" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Rebels renounce loyalty,</text><text x="365" y="276" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">take London, May 1215</text><line x1="365" y1="286" x2="320" y2="302" stroke="#334155" stroke-width="1.5" marker-end="url(#kj-cause-arrow)"/><rect x="140" y="302" width="200" height="32" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="240" y="323" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Magna Carta, 15 June 1215</text></svg>`,
      diagramCaption:
        "Long-term causes built up anger; a short-term trigger (Bouvines) turned it into rebellion. Notice how the boxes link — that is what a strong causation answer does.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why the barons rebelled against King John in 1215. (4 marks)",
          steps: [
            "Sort the causes into categories first: money, justice/trust, failure in war.",
            "Make a PEEL point about money with precise evidence (scutage 11 times in 17 years; huge reliefs).",
            "Make a second point about fear and trust (hostages, debts, the de Braose family).",
            "Link them and add the trigger: defeat at Bouvines in 1214 meant John had nothing to show for the money, so the barons acted.",
          ],
          answer:
            "One reason the barons rebelled was money. To win back Normandy, John charged scutage 11 times in 17 years and demanded enormous reliefs before barons could inherit land, so they felt they were being squeezed. A second reason was fear. John took barons' sons as hostages and used debts to ruin his enemies; the de Braose family was hunted down and Matilda de Braose and her son died in his prison in 1210, so barons felt no one was safe. These causes came together after the defeat at Bouvines in 1214: John had taken their money and lost anyway, and he was now weak. That is why rebels renounced their loyalty in May 1215 and captured London.",
          yourTurn: {
            question: "What was the name of the payment a baron made to the king instead of providing knights for his army?",
            answer: { type: "text", accept: ["scutage", "shield money", "shield-money"], display: "Scutage" },
            solution: "Scutage (“shield money”). John charged it 11 times in his 17-year reign.",
          },
        },
        {
          title: "Recall check",
          problem: "Which city did the rebel barons capture in May 1215, and why did it matter?",
          steps: ["Think about where the kingdom's wealth and government were concentrated.", "Then think about what John could no longer do without it."],
          answer:
            "The rebels captured London on 17 May 1215. It was the richest city in England, so losing it left John unable to win quickly by force — he had to negotiate, which led to Runnymede.",
          yourTurn: {
            question: "In what year did the rebel barons capture London?",
            answer: { type: "number", value: 1215 },
            solution: "17 May 1215 — about four weeks before Magna Carta.",
          },
        },
      ],
      keyPoints: [
        "John used old royal rights — scutage, reliefs, wardships, forest fines — far more often and more harshly.",
        "He used debts and hostages to control barons; the fate of the de Braose family spread fear.",
        "A plot in 1212 shows opposition growing; defeat at Bouvines in 1214 was the trigger.",
        "Rebels renounced their loyalty on 5 May 1215 and captured London on 17 May 1215. Not all barons rebelled.",
      ],
      whyItWorks:
        "A medieval king's power rested on a bargain: barons served and paid, and the king gave them protection and fair justice. John kept taking but stopped giving — he lost their lands in France, sold justice, and treated loyal men as potential enemies. Once barons believed the king himself was the danger, they looked for a way to bind him by rules. That is why the rebellion produced a charter, not just a new king.",
      strategies: ["Sort causes into categories", "Link the factors", "Use precise evidence"],
      thinkDeeper:
        "Many of John's money-raising methods had been used by Henry II and Richard I too. So why did the barons rebel against John and not against them? Think about success in war, personality and trust.",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "magna-carta",
      heading: "Magna Carta, 1215",
      discovery: {
        problem:
          "June 1215. You are one of the rebel barons. You hold London; John has agreed to talk. You can write any rules you like into a charter. But John has broken promises before.\n\nWrite one rule each to:\n\n1. stop unfair taxes;\n2. stop the king throwing people into prison whenever he likes;\n3. stop him selling justice;\n4. make sure he **actually keeps** the deal.\n\nWhich of the four is hardest to write — and why?",
        idea:
          "The barons came up with almost exactly these: clause 12 (no scutage without the common counsel of the kingdom), clause 39 (no imprisonment without lawful judgement), clause 40 (justice not sold or delayed) and clause 61 (25 barons to enforce it). Number 4 was the hardest. Clause 61 let barons seize the king's castles and lands if he broke his word — something no king would accept for long. That is why the charter collapsed within weeks.",
      },
      body:
        "**Runnymede.** With London lost, John met the barons at **Runnymede**, a meadow by the Thames between Windsor and Staines. The charter is dated **15 June 1215**. John did not *sign* it: copies were sealed with his **Great Seal**. It was written in Latin, and its clauses were only numbered centuries later. Four original 1215 copies survive.\n\nMost of its 63 clauses fixed barons' particular grievances — inheritance fees, widows, forests, fish-weirs on the Thames. A few contained bigger ideas:\n\n| Clause | What it said | Big idea |\n|---|---|---|\n| **1** | The English Church shall be free | Church rights |\n| **12** | No scutage or “aid” without the **common counsel of the kingdom** (except three customary aids) | No tax without consent |\n| **39** | No free man punished except by lawful judgement or the law of the land | Rule of law |\n| **40** | Justice not sold, denied or delayed | Fair justice |\n| **61** | **25 barons** could seize the king's lands and castles if he broke the charter | Enforcement |\n\n> “To no one will we sell, to no one deny or delay right or justice.” — Clause 40, Magna Carta, 1215 (modern English translation)\n\n**It failed — at first.** Neither side trusted the other. John appealed to the Pope, his overlord since 1213, and on **24 August 1215** Innocent III annulled the charter. The **First Barons' War** began. The rebels invited Prince **Louis of France** to be king; he landed in May 1216. In October 1216 John fell ill with dysentery and died at **Newark**.\n\n**It survived — changed.** John's 9-year-old son became **Henry III**. His regent, **William Marshal**, reissued the charter in **1216** and **1217** to win rebels back — without clauses 12 and 61. Louis went home in 1217. In **1225** Henry III reissued it in return for a tax, and that version became part of English law.\n\nRemember: “free man” meant a minority. Most people were unfree peasants (villeins), and the charter did little for them.",
      diagram: `<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow chart of Magna Carta's fate: sealed 15 June 1215, annulled by the Pope 24 August 1215, First Barons' War 1215 to 1217, John dies October 1216, reissued in 1216 and 1217 without clauses 12 and 61, final reissue in 1225 becomes law."><defs><marker id="kj-fate-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs><rect x="8" y="14" width="140" height="66" rx="6" fill="#fde68a" stroke="#334155"/><text x="78" y="36" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">15 June 1215</text><text x="78" y="53" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Charter sealed</text><text x="78" y="68" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">at Runnymede</text><line x1="148" y1="47" x2="166" y2="47" stroke="#334155" stroke-width="1.5" marker-end="url(#kj-fate-arrow)"/><rect x="170" y="14" width="140" height="66" rx="6" fill="#c7d2fe" stroke="#334155"/><text x="240" y="36" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">24 August 1215</text><text x="240" y="53" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Pope Innocent III</text><text x="240" y="68" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">annuls it</text><line x1="310" y1="47" x2="328" y2="47" stroke="#334155" stroke-width="1.5" marker-end="url(#kj-fate-arrow)"/><rect x="332" y="14" width="140" height="66" rx="6" fill="#fecaca" stroke="#334155"/><text x="402" y="36" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1215–1217</text><text x="402" y="53" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">First Barons' War;</text><text x="402" y="68" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Louis of France invades</text><line x1="402" y1="80" x2="100" y2="124" stroke="#334155" stroke-width="1.5" marker-end="url(#kj-fate-arrow)"/><rect x="8" y="126" width="140" height="70" rx="6" fill="#ffffff" stroke="#334155"/><text x="78" y="148" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">October 1216</text><text x="78" y="165" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">John dies; Henry III</text><text x="78" y="180" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">king at 9</text><line x1="148" y1="161" x2="166" y2="161" stroke="#334155" stroke-width="1.5" marker-end="url(#kj-fate-arrow)"/><rect x="170" y="126" width="140" height="70" rx="6" fill="#fde68a" stroke="#334155"/><text x="240" y="148" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1216 and 1217</text><text x="240" y="165" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Reissued without</text><text x="240" y="180" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">clauses 12 and 61</text><line x1="310" y1="161" x2="328" y2="161" stroke="#334155" stroke-width="1.5" marker-end="url(#kj-fate-arrow)"/><rect x="332" y="126" width="140" height="70" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="402" y="148" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1225</text><text x="402" y="165" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Henry III's reissue</text><text x="402" y="180" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">becomes English law</text></svg>`,
      diagramCaption:
        "The 1215 charter failed within weeks — but reissued versions, without the most radical clauses, survived and became law.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why Magna Carta failed to bring peace in 1215. (4 marks)",
          steps: [
            "Point 1 — trust: neither side believed the other would keep the deal.",
            "Point 2 — clause 61: the council of 25 barons could seize the king's lands, which John could not accept.",
            "Point 3 — the Pope: John's overlord annulled the charter on 24 August 1215.",
            "Link and conclude: without trust, and with the Pope on John's side, war followed.",
          ],
          answer:
            "Magna Carta failed to bring peace because neither side trusted the other. The barons feared John would break his word, so they included clause 61, which let a council of 25 barons seize the king's castles and lands if he broke the charter. John saw this as an attack on his power as king, so he looked for a way out. Because he had made England a papal fief in 1213, he could appeal to Pope Innocent III, who annulled the charter on 24 August 1215. With the charter cancelled and no trust on either side, the First Barons' War began within months.",
          yourTurn: {
            question: "Which numbered clause of the 1215 charter set up the council of 25 barons to enforce it?",
            answer: { type: "number", value: 61 },
            solution: "Clause 61, the “security clause”. It was dropped from the reissues of 1216, 1217 and 1225.",
          },
        },
        {
          title: "Change and continuity",
          problem: "How was the 1216 reissue of Magna Carta different from the 1215 charter, and why?",
          steps: [
            "Identify who issued it: William Marshal, regent for 9-year-old Henry III.",
            "Identify what changed: clauses 12 and 61 were dropped.",
            "Explain why: to win rebels back to the young king without tying the Crown's hands so tightly.",
          ],
          answer:
            "In November 1216 William Marshal, ruling for the 9-year-old Henry III, reissued the charter to persuade rebels to abandon Louis of France. He kept most of it — showing the government accepted the idea that the king was bound by law — but dropped clause 12 (no scutage without common counsel) and clause 61 (the 25 barons). That made the charter acceptable to a king while still offering the barons protection.",
        },
      ],
      keyPoints: [
        "Sealed (not signed) at Runnymede; dated 15 June 1215; 63 clauses in Latin.",
        "Key clauses: 12 (no scutage without common counsel), 39 (lawful judgement), 40 (justice not sold), 61 (25 barons).",
        "Annulled by Innocent III on 24 August 1215 → First Barons' War; Louis of France invited.",
        "John died in October 1216; the charter was reissued in 1216, 1217 and 1225 without clauses 12 and 61.",
        "It protected “free men” — not the unfree majority.",
      ],
      whyItWorks:
        "Magna Carta mattered because it put in writing an idea that was already in the air: the king is under the law, not above it. In 1215 it was really a peace treaty that failed. But by reissuing it, Henry III's government accepted that the king was bound by it — and once a promise is written down and repeated, later generations can hold rulers to it.",
      strategies: ["Look for change AND continuity", "Use precise evidence", "Spot the anachronism"],
      thinkDeeper:
        "Clause 12 was dropped in 1216 — yet in 1225 Henry III reissued the charter *in return for* a tax that a great council agreed to. Was the idea of clause 12 really dropped? What does this suggest about the difference between the words of a law and how it works in practice?",
    },
    // ------------------------------------------------------------------ 6
    {
      id: "johns-reputation",
      heading: "Bad King John? Reputation and significance",
      discovery: {
        problem:
          "Read these two views.\n\n> “Foul as it is, Hell itself is made fouler by the presence of John.” — Matthew Paris, monk of St Albans Abbey, writing in the mid-1200s (translated)\n\n**View B (a modern historian, summarised):** the government records show John travelled constantly, worked hard, heard law cases himself and ran an efficient government.\n\nThey can't both be the whole truth. Before reading on, list **three reasons** why a monk writing decades after John's death and a modern historian reading government records might see John so differently.",
        idea:
          "Provenance explains much of it. Matthew Paris was a monk; John had seized Church income during the Interdict, and Paris wrote decades later, using stories and rumours. Modern historians use records that show what John's government *did* — but records don't show feelings, and they also reveal the hostages, debts and harsh treatment of enemies. Different evidence and different questions lead to different interpretations. The best answer uses both.",
      },
      body:
        "**The chroniclers.** The most vivid stories about John come from monks writing *after* his death, especially **Roger of Wendover** and **Matthew Paris** of St Albans Abbey. Wendover wrote in the 1220s and 1230s; Paris continued his chronicle into the 1250s. They describe John as cruel, greedy and godless. *Check the provenance:* John had taxed and quarrelled with the Church, these monks wrote years later, and they relied partly on rumour. That doesn't make them wrong — but we must cross-reference them.\n\n**Modern historians** use another kind of evidence. John's government kept copies of its letters and charters on long parchment rolls, and thousands survive. They show a king who travelled constantly, took a close interest in justice and money, and ran an efficient government. In the 20th century, historians such as W. L. Warren used these records to show John as a capable ruler who faced a brilliant opponent in Philip II.\n\nMost historians today give a **mixed verdict**: John was able and energetic, but also suspicious, cruel and untrustworthy — and those faults cost him the loyalty a medieval king needed.\n\n**Myths.** **Robin Hood** is a legend: the earliest ballads date from the 1400s, and the stories were set in the time of Richard and John only later. Shakespeare's play *King John* (1590s) does not even mention Magna Carta.\n\n**Significance.** In 1215 Magna Carta was a failed peace deal for barons. It became significant **later**, because people kept using it:\n\n- the 1225 version became law, and three of its clauses are still law in England;\n- the idea that taxes need consent helped **Parliament** grow;\n- in the 1600s lawyers used it against Charles I;\n- the US Bill of Rights (1791) echoes clause 39;\n- in 1948 Eleanor Roosevelt hoped the Universal Declaration of Human Rights would become “the international Magna Carta for all men everywhere”.",
      diagram: `<svg viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of Magna Carta's later influence, not to scale: 1215 charter sealed, 1225 reissue becomes law, 1265 Parliament with townsmen, 1628 Petition of Right, 1791 US Bill of Rights, 1948 UN Universal Declaration of Human Rights."><text x="240" y="16" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">Magna Carta's afterlife (not to scale)</text><line x1="20" y1="88" x2="460" y2="88" stroke="#334155" stroke-width="2"/><circle cx="40" cy="88" r="6" fill="#fde68a" stroke="#334155"/><text x="40" y="44" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Magna Carta</text><text x="40" y="58" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">sealed</text><text x="40" y="76" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1215</text><circle cx="120" cy="88" r="6" fill="#bbf7d0" stroke="#334155"/><text x="120" y="108" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1225</text><text x="120" y="124" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Reissue</text><text x="120" y="138" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">becomes law</text><circle cx="200" cy="88" r="6" fill="#c7d2fe" stroke="#334155"/><text x="200" y="44" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Parliament</text><text x="200" y="58" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">with townsmen</text><text x="200" y="76" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1265</text><circle cx="280" cy="88" r="6" fill="#c7d2fe" stroke="#334155"/><text x="280" y="108" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1628</text><text x="280" y="124" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Petition</text><text x="280" y="138" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">of Right</text><circle cx="360" cy="88" r="6" fill="#bae6fd" stroke="#334155"/><text x="360" y="44" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">US Bill</text><text x="360" y="58" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">of Rights</text><text x="360" y="76" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1791</text><circle cx="440" cy="88" r="6" fill="#bae6fd" stroke="#334155"/><text x="440" y="108" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1948</text><text x="440" y="124" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">UN Universal</text><text x="440" y="138" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Declaration</text><text x="240" y="162" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Each later generation reused the charter's ideas for its own struggles.</text></svg>`,
      diagramCaption:
        "Magna Carta's significance grew over time: what mattered was not what it achieved in 1215 but how later people used it.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem:
            "> “Foul as it is, Hell itself is made fouler by the presence of John.” — Matthew Paris, monk of St Albans, mid-1200s (translated)\n\nHow useful is this source for an enquiry into what King John was really like? (4 marks)",
          steps: [
            "Content: what does it tell us? That John was hated — at least by some.",
            "Provenance (NOP): Nature — a chronicle; Origin — a monk of St Albans; Purpose — a moral history with lessons about good and bad rulers.",
            "Limitations: written decades after John died, by a churchman whose Church John had taxed and fought; deliberately exaggerated.",
            "Judgement: limited for John's actual character, but very useful for how churchmen remembered him — answer “useful for what?”",
          ],
          answer:
            "The source is useful because it shows how strongly John was hated after his death: Matthew Paris says even Hell is made worse by John. However, its provenance limits its usefulness for finding out what John was really like. Paris was a monk writing decades after John died, so he relied on stories, and John had quarrelled with the Church and taxed it during the Interdict, so a monk had reasons to be hostile. The extreme language shows he is making a moral point, not giving a balanced account. So it is of limited use for John's real character, which we should check against government records, but very useful for showing how the Church remembered him.",
          yourTurn: {
            question: "Which legendary outlaw is often shown fighting King John in films, even though the stories are not reliable history?",
            answer: { type: "text", accept: ["Robin Hood", "Robin", "Robin of Locksley", "Robin Hode"], display: "Robin Hood" },
            solution: "Robin Hood — a legend. The earliest ballads date from the 1400s; linking him with Richard and John came later.",
          },
        },
        {
          title: "Significance check",
          problem: "Why did Magna Carta become more significant after John's death than it was in 1215?",
          steps: [
            "In 1215: annulled within weeks; a deal mainly for barons.",
            "After 1216: reissued, and in 1225 became law — so it could be quoted in courts and councils.",
            "Later: used by Parliament, by opponents of Charles I, by American colonists and by human-rights campaigners.",
          ],
          answer:
            "In 1215 Magna Carta failed — it was annulled within weeks and mostly helped barons. It became significant because it was reissued and, from 1225, was part of English law, so later generations could appeal to it. Its ideas — that the king is under the law and that taxes need consent — were used to strengthen Parliament, to challenge Charles I in the 1600s and to shape the US Bill of Rights. Its significance comes from how it was reused, not from what it achieved at the time.",
          yourTurn: {
            question: "In what year did Henry III issue the version of Magna Carta that became part of English law?",
            answer: { type: "number", value: 1225 },
            solution: "1225 — Henry III reissued it in return for a tax agreed by a great council.",
          },
        },
      ],
      keyPoints: [
        "The chroniclers Roger of Wendover and Matthew Paris (monks of St Albans) wrote after John's death and were very hostile.",
        "Modern historians use government records, which show an able, hard-working administrator — and a cruel, distrustful ruler.",
        "Robin Hood is a legend; it is not evidence about John.",
        "Magna Carta became significant later: law from 1225, a foundation for Parliament, the US Bill of Rights and human rights.",
      ],
      whyItWorks:
        "Interpretations differ because historians use different evidence and ask different questions. Chronicles tell us what people *said* and *believed*; records tell us what government *did*. Neither is complete alone. As for significance, an event becomes significant when it keeps mattering to later people — and Magna Carta was quoted again and again whenever people wanted to limit a ruler's power.",
      strategies: ["Check the provenance (NOP)", "Ask “useful for what?”", "Cross-reference sources", "Zoom out to the big picture"],
      thinkDeeper:
        "No later English monarch has been called John. Some people say this is because of his reputation — but nobody can prove why. Is a gap in the evidence like this ever good evidence? What would you need to find to support the claim?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Who were King John's parents?", back: "Henry II and Eleanor of Aquitaine — rulers of the Angevin Empire." },
      { front: "Why was John nicknamed “Lackland”?", back: "As the youngest of four sons who grew up, he was not expected to inherit much land." },
      { front: "Who was Arthur of Brittany?", back: "John's nephew, son of his older brother Geoffrey. Aged 12, he was John's rival for the throne in 1199. Captured in 1202, he had vanished by 1203." },
      { front: "When did John become king?", back: "1199 — Richard I died on 6 April and John was crowned on 27 May 1199." },
      { front: "When was Normandy lost, and to whom?", back: "1204, to Philip II of France (Château Gaillard fell in March, Rouen in June)." },
      { front: "What happened at Bouvines on 27 July 1214?", back: "Philip II defeated John's allies, led by Emperor Otto IV. John was not there — he was in Poitou." },
      { front: "What was the Interdict (1208–1214)?", back: "The Pope's order stopping normal church services in England, except baptism of babies and confession for the dying." },
      { front: "Who was Stephen Langton?", back: "The Archbishop of Canterbury chosen by Pope Innocent III. John refused to accept him until 1213." },
      { front: "What did John do in May 1213?", back: "He submitted to the Pope, accepted Langton and made England a papal fief, paying 1,000 marks a year." },
      { front: "What is scutage?", back: "Money paid to the king instead of military service. John charged it 11 times in 17 years." },
      { front: "When and where was Magna Carta sealed?", back: "At Runnymede, by the River Thames; the charter is dated 15 June 1215." },
      { front: "Magna Carta clause 12?", back: "No scutage or aid without the common counsel of the kingdom (except three customary aids) — the idea of no tax without consent." },
      { front: "Magna Carta clause 39?", back: "No free man to be imprisoned, outlawed or punished except by the lawful judgement of his equals or the law of the land." },
      { front: "Magna Carta clause 40?", back: "“To no one will we sell, to no one deny or delay right or justice.”" },
      { front: "Magna Carta clause 61?", back: "A council of 25 barons could seize the king's lands and castles if he broke the charter. Dropped from later reissues." },
      { front: "Who annulled Magna Carta, and when?", back: "Pope Innocent III, on 24 August 1215." },
      { front: "When and how did John die?", back: "Of dysentery at Newark, on the night of 18–19 October 1216, during the First Barons' War." },
      { front: "Who were Roger of Wendover and Matthew Paris?", back: "Monks of St Albans Abbey who wrote very hostile chronicles about John after his death." },
    ],
    mustKnow: [
      "Can you explain how John rose to power in 1199 — inheritance plus the support of powerful people — over his rival Arthur?",
      "Can you describe the Angevin Empire and explain why Richard I left the Crown short of money?",
      "Can you explain why Normandy was lost in 1204 and why that mattered for the rest of John's reign?",
      "Can you explain the quarrel with Pope Innocent III: Langton, the Interdict (1208), excommunication (1209) and John's submission (1213)?",
      "Can you list John's ways of raising money and explain why they angered the barons?",
      "Can you explain the trigger (Bouvines, 1214) and the events of May 1215?",
      "Can you state what clauses 12, 39, 40 and 61 of Magna Carta said?",
      "Can you explain why Magna Carta failed in 1215 but survived through the reissues of 1216, 1217 and 1225?",
      "Can you evaluate the chroniclers' view of John using provenance, and compare it with modern historians' view?",
      "Can you explain why Magna Carta is significant today — and its limits in 1215?",
    ],
    misconceptions: [
      { wrong: "King John signed Magna Carta.", right: "He did not sign it. Copies of the charter were sealed with his Great Seal — that is how medieval kings approved documents." },
      { wrong: "Magna Carta gave rights to everyone in England and created democracy.", right: "It protected “free men” — mainly barons, churchmen and townspeople. Most people were unfree villeins. Democracy came centuries later." },
      { wrong: "Magna Carta solved the problem and ended John's misrule in 1215.", right: "It was annulled by the Pope within ten weeks and war followed. It survived only because it was reissued after John's death." },
      { wrong: "John lost the Battle of Bouvines himself.", right: "John was in Poitou. His allies, led by Emperor Otto IV, were defeated at Bouvines on 27 July 1214." },
      { wrong: "Robin Hood really fought against King John.", right: "Robin Hood is a legend. The earliest ballads date from the 1400s; linking him with Richard and John came later." },
      { wrong: "John became king automatically because he was next in line.", right: "The succession was disputed. Arthur, son of an older brother, had a strong blood claim; John won because powerful people backed the adult brother." },
      { wrong: "Every source agrees John was evil, so he must have been.", right: "The harshest sources are monks writing after his death. Government records show an able ruler — though also a cruel and distrustful one." },
    ],
    examMistakes: [
      "Telling the story of John's reign instead of answering the question (e.g. explaining *why* the barons rebelled).",
      "Saying John “signed” Magna Carta — write that it was sealed.",
      "Mixing up the clause numbers: 12 is tax, 39 is lawful judgement, 40 is justice not sold, 61 is the 25 barons.",
      "Confusing 1204 (Normandy lost), 1214 (Bouvines) and 1215 (Magna Carta).",
      "Treating Matthew Paris or Roger of Wendover as neutral without discussing their provenance.",
      "Listing causes without linking them — e.g. not showing how the loss of Normandy led to higher taxes.",
      "Forgetting the Term 1 enquiry: not explaining both how John *rose* to power (inheritance over Arthur) and how he *lost* it.",
      "Claiming Magna Carta was significant in 1215 without explaining how it was reused later.",
    ],
    mnemonics: [
      {
        topic: "The order of John's troubles",
        device: "A Normal Church Barely Copes",
        explanation: "Arthur (1199–1203) → Normandy lost (1204) → Church quarrel (1205–13) → Bouvines (1214) → Charter (1215).",
      },
      {
        topic: "The four key clauses",
        device: "Twelve taxes, thirty-nine jails, forty sells, sixty-one polices",
        explanation: "Clause 12: no tax without common counsel. 39: nobody jailed without lawful judgement. 40: justice not sold. 61: 25 barons police the king.",
      },
      {
        topic: "The reissues",
        device: "Sixteen, seventeen, twenty-five — that's how the charter stayed alive",
        explanation: "Magna Carta was reissued in 1216, 1217 and 1225; the 1225 version became law.",
      },
    ],
    realWorld: [
      {
        title: "Nobody is above the law",
        detail: "The rule of law — the idea that rulers must obey the law too — is at the heart of modern government. Magna Carta is one of the most famous early statements of it, which is why it is still quoted in courts and parliaments.",
        emoji: "⚖️",
      },
      {
        title: "Singapore's Constitution",
        detail: "Singapore's legal system grew from English common law. Article 9 of Singapore's Constitution says no person shall be deprived of life or personal liberty “save in accordance with law” — an idea with deep roots in clause 39.",
        emoji: "🇸🇬",
      },
      {
        title: "Taxes need consent",
        detail: "Clause 12's idea — the ruler must get agreement before taxing — grew into the rule that parliaments approve taxes and spending. In Singapore, as in the UK, the government's annual Budget must be passed by Parliament.",
        emoji: "🏛️",
      },
      {
        title: "Human rights",
        detail: "When the UN adopted the Universal Declaration of Human Rights in 1948, Eleanor Roosevelt said it might become “the international Magna Carta for all men everywhere”.",
        emoji: "🌍",
      },
      {
        title: "A bargain between ruler and ruled — in Malay tradition too",
        detail: "The Malay Annals (Sejarah Melayu) tell of a covenant between Sri Tri Buana, the legendary ruler linked to Singapura's founding, and Demang Lebar Daun: the ruler would never shame his subjects, and the subjects would never be disloyal. Like Magna Carta, it pictures kingship as a deal with duties on both sides.",
        emoji: "🤝",
      },
      {
        title: "You can still see it",
        detail: "Four original 1215 copies survive: two at the British Library in London, one at Lincoln Castle (owned by Lincoln Cathedral) and one at Salisbury Cathedral.",
        emoji: "📜",
      },
    ],
    videos: [
      { title: "King John and Magna Carta explained", channel: "BBC Teach", url: "https://www.youtube.com/results?search_query=King+John+Magna+Carta+explained" },
      { title: "Why was King John so unpopular?", channel: "History Matters", url: "https://www.youtube.com/results?search_query=why+was+King+John+so+unpopular" },
      { title: "Magna Carta: what it said and why it matters", channel: "British Library", url: "https://www.youtube.com/results?search_query=British+Library+Magna+Carta+what+it+said+why+it+matters" },
      { title: "Loss of Normandy 1204 and the Battle of Bouvines", channel: "Various historians", url: "https://www.youtube.com/results?search_query=loss+of+Normandy+1204+Battle+of+Bouvines" },
    ],
    keyDates: [
      { year: 1166, date: "24 Dec 1166", event: "John is born", note: "The youngest son of Henry II and Eleanor of Aquitaine." },
      { year: 1199, date: "27 May 1199", event: "John is crowned king", note: "He wins the disputed succession against his nephew Arthur." },
      { year: 1203, date: "1203", event: "Arthur of Brittany disappears", note: "Most historians believe John was responsible for his death." },
      { year: 1204, date: "June 1204", event: "Normandy is lost to Philip II", note: "Rouen surrenders; John's reputation and finances suffer." },
      { year: 1208, date: "March 1208", event: "Pope Innocent III places England under an Interdict", note: "The quarrel over Stephen Langton deepens; John is excommunicated in 1209." },
      { year: 1213, date: "May 1213", event: "John submits to the Pope", note: "England becomes a papal fief; the Pope becomes John's ally." },
      { year: 1214, date: "27 Jul 1214", event: "Battle of Bouvines", note: "John's allies are defeated — the trigger for rebellion." },
      { year: 1215, date: "15 Jun 1215", event: "Magna Carta sealed at Runnymede", note: "The king agrees to be bound by law; annulled by the Pope in August." },
      { year: 1216, date: "18–19 Oct 1216", event: "John dies at Newark", note: "His 9-year-old son becomes Henry III; the charter is reissued." },
      { year: 1225, date: "1225", event: "Henry III's reissue of Magna Carta", note: "The version that became part of English law." },
    ],
    keyTerms: [
      { term: "Angevin Empire", definition: "The lands ruled by Henry II and his sons: England plus Normandy, Anjou, Maine, Touraine and Aquitaine in France." },
      { term: "Vassal", definition: "Someone who holds land from a lord in return for loyalty and service. For their French lands, English kings were vassals of the King of France." },
      { term: "Baron", definition: "A great landholder who held land directly from the king, owing him service and payments." },
      { term: "Scutage", definition: "“Shield money”: a payment to the king instead of providing knights for his army." },
      { term: "Relief", definition: "A fee an heir paid the king before inheriting land." },
      { term: "Interdict", definition: "A punishment by the Pope that stopped most church services in a country." },
      { term: "Excommunication", definition: "Being cut off from the Church and its sacraments by the Pope." },
      { term: "Papal fief", definition: "Land held from the Pope as overlord. England became one in 1213." },
      { term: "Charter", definition: "A formal written document granting rights or privileges, approved with a seal." },
      { term: "Magna Carta", definition: "Latin for “Great Charter”: the 1215 agreement between King John and the rebel barons limiting the king's power." },
      { term: "Rule of law", definition: "The principle that everyone, including the ruler, must obey the law." },
      { term: "Chronicler", definition: "A writer, often a monk, who recorded events year by year." },
      { term: "Mark", definition: "A medieval unit of money worth two-thirds of a pound (13 shillings and 4 pence)." },
      { term: "First Barons' War", definition: "The civil war of 1215–1217 between John (then Henry III) and the rebel barons, who invited Louis of France to be king." },
    ],
  },
};
