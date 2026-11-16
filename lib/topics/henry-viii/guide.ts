import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "henry-viii",
  title: "Henry VIII and the Tudors",
  strand: "Kings & Power",
  icon: "🌹",
  summary: "A dynasty won in battle, a king desperate for a son, and a break with Rome that made him master of Church and State.",
  intro:
    "Our Term 1 enquiry asks: **under what circumstances did kings rise to power?** William I took the crown by conquest. King John inherited it in a disputed succession. Henry VIII is different again: he inherited the throne **peacefully** in 1509 — but only because his father, Henry VII, had **won it in battle** at Bosworth in 1485 and then spent 24 years making the new Tudor dynasty secure.\n\nSo Henry VIII's rise has two stages. First, a smooth inheritance that his father made possible. Second, a huge *growth* in his power during his reign: desperate for a male heir, he broke with the Pope, made himself Supreme Head of the Church of England and took the wealth of the monasteries. By his death in 1547, an English king had more power over his people's lives — and souls — than ever before.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "wars-of-the-roses",
      heading: "The Wars of the Roses and the first Tudor",
      discovery: {
        problem:
          "It is the evening of **22 August 1485**. You are **Henry Tudor**, aged 28. This morning your army beat King Richard III at Bosworth, and Richard is dead. You are now king — but your blood claim is weak, and for 30 years English nobles have taken the crown from each other by force.\n\nBefore you read on, rank these actions from most to least useful for keeping the crown:\n\n1. Marry Elizabeth of York, daughter of the Yorkist King Edward IV\n2. Build up a large royal treasury\n3. Stop nobles keeping private armies\n4. Execute every Yorkist relative you can find\n5. Ask the Pope to recognise you as king\n\nWhat is the difference between *winning* a crown and *keeping* it?",
        idea:
          "Winning by battle made Henry king, but it also showed that anyone with an army could do the same. So Henry VII worked to make himself *hard to remove*: marriage joined the rival families, money freed him from depending on nobles, and controlling the nobles' armies took away the means to rebel. He did win the Pope's support too, which helped. He did not try to kill every rival — that would have looked like a tyrant and created new enemies — but he defeated every rebellion that came.",
      },
      body:
        "From **1455 to 1485** two branches of the royal family — the **House of Lancaster** and the **House of York** — fought on and off for the throne. Both descended from King Edward III. Later writers called these struggles the **Wars of the Roses**, after the red rose linked with Lancaster and the white rose of York, though the name became popular only centuries later.\n\nOn **22 August 1485** Henry Tudor defeated the Yorkist king **Richard III** at the **Battle of Bosworth**. Richard was killed. Henry's victory owed much to Sir William Stanley, whose troops joined in on Henry's side at the decisive moment.\n\nHenry's blood claim was weak. It came through his mother, **Margaret Beaufort**, from a branch of the Lancaster family that had been born outside marriage and only later made legitimate. So he set out to make the crown secure:\n\n| Method | What Henry VII did |\n|---|---|\n| Marriage | Married **Elizabeth of York** in January 1486, uniting Lancaster and York |\n| Symbol | The **Tudor rose** combined the red and white roses |\n| Defeating rivals | Beat the supporters of the pretender **Lambert Simnel** at the Battle of Stoke (1487) — Simnel, only a boy, was pardoned and put to work in the royal kitchens. Captured **Perkin Warbeck**, who claimed to be one of the 'Princes in the Tower' (1497); he was executed in 1499 |\n| Controlling nobles | Limited private armies; made nobles sign **bonds** promising large sums if they were disloyal |\n| Money | Collected taxes and fines carefully and left the Crown rich |\n\nHe even dated his reign from **21 August 1485**, the day *before* Bosworth, so that anyone who fought against him could be called a traitor.\n\nWhen Henry VII died in **1509**, his son inherited without a battle. That peaceful handover was his father's real achievement.",
      diagram: `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified family tree showing how the houses of Lancaster and York both descend from Edward III and are joined by the marriage of Henry VII and Elizabeth of York, parents of Prince Arthur and Henry VIII"><rect x="165" y="8" width="150" height="30" rx="4" fill="#e2e8f0" stroke="#334155"/><text x="240" y="27" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Edward III (r. 1327–77)</text><line x1="240" y1="38" x2="120" y2="62" stroke="#334155" stroke-width="1.5"/><line x1="240" y1="38" x2="360" y2="62" stroke="#334155" stroke-width="1.5"/><rect x="30" y="62" width="180" height="36" rx="4" fill="#fecaca" stroke="#334155"/><text x="120" y="77" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">John of Gaunt</text><text x="120" y="91" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Duke of Lancaster</text><rect x="270" y="62" width="180" height="36" rx="4" fill="#f8fafc" stroke="#334155"/><text x="360" y="77" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Lionel and Edmund</text><text x="360" y="91" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">ancestors of the York line</text><line x1="120" y1="98" x2="75" y2="122" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="120" y1="98" x2="215" y2="122" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="360" y1="98" x2="385" y2="122" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="10" y="122" width="130" height="36" rx="4" fill="#fecaca" stroke="#334155"/><text x="75" y="137" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Lancastrian kings</text><text x="75" y="151" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Henry IV, V, VI</text><rect x="150" y="122" width="130" height="36" rx="4" fill="#fecaca" stroke="#334155"/><text x="215" y="137" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">The Beauforts</text><text x="215" y="151" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">→ Margaret Beaufort</text><rect x="300" y="122" width="170" height="36" rx="4" fill="#f8fafc" stroke="#334155"/><text x="385" y="137" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Yorkist kings</text><text x="385" y="151" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Edward IV, Richard III</text><line x1="215" y1="158" x2="205" y2="190" stroke="#334155" stroke-width="1.5"/><line x1="385" y1="158" x2="400" y2="190" stroke="#334155" stroke-width="1.5"/><rect x="130" y="190" width="150" height="36" rx="4" fill="#fde68a" stroke="#334155"/><text x="205" y="205" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Henry VII (Tudor)</text><text x="205" y="219" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">won at Bosworth, 1485</text><rect x="330" y="190" width="140" height="36" rx="4" fill="#f8fafc" stroke="#334155"/><text x="400" y="205" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Elizabeth of York</text><text x="400" y="219" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">daughter of Edward IV</text><line x1="280" y1="206" x2="330" y2="206" stroke="#334155" stroke-width="1.5"/><line x1="280" y1="210" x2="330" y2="210" stroke="#334155" stroke-width="1.5"/><text x="305" y="200" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">m. 1486</text><line x1="305" y1="210" x2="305" y2="246" stroke="#334155" stroke-width="1.5"/><line x1="230" y1="246" x2="390" y2="246" stroke="#334155" stroke-width="1.5"/><line x1="230" y1="246" x2="230" y2="262" stroke="#334155" stroke-width="1.5"/><line x1="390" y1="246" x2="390" y2="262" stroke="#334155" stroke-width="1.5"/><rect x="160" y="262" width="140" height="36" rx="4" fill="#e2e8f0" stroke="#334155"/><text x="230" y="277" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Prince Arthur</text><text x="230" y="291" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">died 1502</text><rect x="320" y="262" width="140" height="36" rx="4" fill="#fde68a" stroke="#334155"/><text x="390" y="277" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Henry VIII</text><text x="390" y="291" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">king 1509–1547</text><rect x="10" y="314" width="12" height="12" fill="#fecaca" stroke="#334155"/><text x="27" y="324" font-size="10" font-family="sans-serif" fill="#1f2937">Lancaster</text><rect x="85" y="314" width="12" height="12" fill="#f8fafc" stroke="#334155"/><text x="102" y="324" font-size="10" font-family="sans-serif" fill="#1f2937">York</text><rect x="140" y="314" width="12" height="12" fill="#fde68a" stroke="#334155"/><text x="157" y="324" font-size="10" font-family="sans-serif" fill="#1f2937">Tudor</text><line x1="205" y1="320" x2="230" y2="320" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 3"/><text x="236" y="324" font-size="10" font-family="sans-serif" fill="#1f2937">= several generations skipped</text></svg>`,
      diagramCaption:
        "A simplified family tree. Both Lancaster and York came from Edward III. Henry VII's marriage to Elizabeth of York joined the two lines — and their son Henry VIII carried the blood of both.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain how Henry VII made the Tudor dynasty secure after 1485. (4 marks)",
          steps: [
            "Start from the problem: he won by battle and had a weak blood claim, so others might try the same.",
            "Choose two or three methods and give a precise example of each (marriage 1486; Stoke 1487; bonds on nobles).",
            "For each method explain HOW it made him safer — who did it win over, or what did it take away from rivals?",
            "Finish by linking: the methods worked together, so by 1509 his son inherited peacefully.",
          ],
          answer:
            "Henry VII had won the crown by force at Bosworth in 1485 and his blood claim was weak, so he needed to stop others doing the same. First, in 1486 he married Elizabeth of York, Edward IV's daughter. This united Lancaster and York, so Yorkists had less reason to rebel, and the Tudor rose advertised the union. Second, he defeated pretenders such as Lambert Simnel at Stoke in 1487, showing that rebellion would fail. Third, he controlled the nobles with bonds and limits on private armies, while building up royal wealth so that he did not depend on them. Together these methods worked: in 1509 his son Henry VIII inherited the throne without a fight.",
          yourTurn: {
            question: "In what year was the Battle of Bosworth fought?",
            answer: { type: "number", value: 1485 },
            solution: "The Battle of Bosworth was fought on 22 August 1485. Richard III was killed and Henry Tudor became Henry VII.",
          },
        },
      ],
      keyPoints: [
        "The Wars of the Roses (1455–1485) were fought between the royal houses of Lancaster and York.",
        "Henry Tudor beat and killed Richard III at Bosworth on 22 August 1485 — the crown was won by battle.",
        "Henry VII's blood claim was weak, so he secured it by marrying Elizabeth of York (1486) and using the Tudor rose.",
        "He defeated pretenders (Simnel 1487, Warbeck captured 1497), controlled nobles with bonds and built up royal wealth.",
        "Because his father made the dynasty secure, Henry VIII inherited peacefully in 1509.",
      ],
      whyItWorks:
        "A king who wins by battle has a problem: he has proved that the crown can be taken by force. Henry VII's methods each removed a reason or a means to rebel — the marriage removed the Yorkist grievance, defeating pretenders removed hope, and bonds plus wealth removed the nobles' power to challenge him. This is why his son's rise to power was so different from William I's or Henry VII's own.",
      strategies: ["Use the chronology", "Sort causes into categories", "Link the factors"],
      thinkDeeper:
        "William I and Henry VII both won the crown in battle. Which of them had the harder job keeping it afterwards, and why? Think about who each king had to win over.",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "young-henry",
      heading: "Young Henry: the Renaissance prince",
      discovery: {
        problem:
          "April 1509. You are **17** and have just become king. Your father was respected — but feared, and disliked for his heavy taxes and fines. You inherit a full treasury, a peaceful kingdom and no rival claimants.\n\nPick **three** things you would do in your first months to make people love the new reign. Then predict: what will a young king with money and security *want* to do next?",
        idea:
          "Henry VIII did almost exactly this. Within days he arrested **Empson and Dudley**, his father's hated tax collectors (they were executed in 1510). He married Catherine of Aragon and staged a splendid coronation. A peaceful inheritance meant he did not have to fight for the crown — so he could spend his energy (and his father's money) on image, pleasure and glory in war.",
      },
      body:
        "Henry was born on **28 June 1491**, the *second* son of Henry VII. He was not meant to be king. His elder brother **Prince Arthur** married the Spanish princess **Catherine of Aragon** in 1501 — but Arthur died in **April 1502**, aged 15. Henry, now 10, became heir.\n\nHenry VII died on 21 April 1509, and Henry VIII became king at **17**. It was the first time in almost 100 years that an adult son had inherited the crown from his father without a fight. In June 1509 he married his brother's widow, **Catherine of Aragon**, keeping England's alliance with her parents' powerful Spanish kingdoms. The Pope had given special permission (a *dispensation*) for the marriage, and the couple were crowned together.\n\nThe young king looked the part of a **Renaissance prince**:\n\n- tall, athletic and handsome; a champion at jousting, hunting, archery and tennis\n- well educated: he spoke French and Latin, wrote music and enjoyed debating theology\n- generous and magnificent, with a splendid court\n\n> \"His Majesty is the handsomest potentate I ever set eyes on.\" — a Venetian diplomat, 1515\n\nHenry left much of the hard daily work of government to **Thomas Wolsey**, a butcher's son from Ipswich who rose through the Church. Wolsey became **Lord Chancellor** and a **cardinal** in 1515 and ran the government for nearly 15 years.\n\nHenry wanted glory abroad. He invaded France in 1513, and in **June 1520** he met the French king **Francis I** near Calais at the **Field of the Cloth of Gold** — over two weeks of tents of golden cloth, feasting and jousting, organised by Wolsey. It was a dazzling show of wealth, though the peace it celebrated did not last. In 1521 Henry wrote a book attacking Martin Luther, and the Pope rewarded him with the title **Defender of the Faith**.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Describe two features of Henry VIII's image as a young king. (4 marks)",
          steps: [
            "'Describe' means: name a feature, then add specific supporting detail.",
            "Feature 1: sporting and physically impressive — support with jousting, hunting, the Venetian diplomat's description.",
            "Feature 2: magnificence and display — support with the Field of the Cloth of Gold (1520).",
            "Keep each feature in its own short paragraph, with a date or name in each.",
          ],
          answer:
            "One feature was that Henry was presented as an athletic and handsome prince. He was tall and strong and excelled at jousting, hunting and tennis; a Venetian diplomat in 1515 called him 'the handsomest potentate I ever set eyes on'. A second feature was magnificence. Henry spent heavily on display to show his power, most famously at the Field of the Cloth of Gold in June 1520, where he met Francis I of France near Calais with tents of golden cloth, feasts and tournaments.",
          yourTurn: {
            question: "Which cardinal was Henry VIII's chief minister from 1515 until 1529?",
            answer: { type: "text", accept: ["Thomas Wolsey", "Wolsey", "Cardinal Wolsey", "Cardinal Thomas Wolsey"], display: "Cardinal Thomas Wolsey" },
            solution: "Thomas Wolsey became Lord Chancellor and a cardinal in 1515 and ran the government until his fall in 1529.",
          },
        },
      ],
      keyPoints: [
        "Henry was a second son; he became heir when Prince Arthur died in 1502.",
        "He became king peacefully in April 1509, aged 17, and married Catherine of Aragon, Arthur's widow.",
        "His image was of a Renaissance prince: athletic, educated, musical and magnificent.",
        "Cardinal Thomas Wolsey ran the government as Lord Chancellor from 1515.",
        "The Field of the Cloth of Gold (June 1520) showed off Henry's wealth to Francis I of France.",
      ],
      whyItWorks:
        "Henry's peaceful inheritance shaped his early reign. Because no one challenged his right to rule, he could focus on display, pleasure and war — and leave the work to Wolsey. But one fact from 1509 lay quietly waiting: he had married his brother's widow, which would later become the centre of the biggest crisis of his reign.",
      strategies: ["Check the provenance (NOP)", "Use precise evidence", "Ask \"who benefits?\""],
      thinkDeeper:
        "The Venetian diplomat praised Henry's looks in a report home. Why might a foreign diplomat flatter — or honestly admire — a king? What would you need to know before using his words as evidence of what Henry was really like?",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "the-great-matter",
      heading: "The 'Great Matter': Henry's divorce",
      discovery: {
        problem:
          "It is **1527**. Henry has been married to Catherine of Aragon for 18 years. She has been pregnant many times, but only **one child has survived: Princess Mary**, aged 11. Catherine is now 41.\n\nNo woman had ever been accepted as ruling queen of England. The last time a king's daughter claimed the throne, in the 1100s, England fell into years of civil war. And people still remembered the Wars of the Roses.\n\nYou are Henry's adviser. List his options. Which is safest — and which would Henry choose?",
        idea:
          "Henry's options were: accept Mary as heir and hope; try to make his illegitimate son, Henry Fitzroy, heir; or end his marriage and marry again to have a legitimate son. Henry chose the third. He came to believe — sincerely, it seems — that God was punishing him for marrying his brother's widow. And he had fallen in love with **Anne Boleyn**, who would not settle for being his mistress.",
      },
      body:
        "Henry called the problem of his marriage his **'Great Matter'**. It had several causes, which fed each other:\n\n- **No male heir.** Catherine had at least six pregnancies. A son, Henry, was born in January 1511 but died after about seven weeks. Only **Mary** (born 1516) survived.\n- **Fear of civil war.** The Tudors had won the crown by battle only 40 years before. A disputed succession might start the fighting again.\n- **Anne Boleyn.** By about 1526 Henry was in love with Anne, a lady at court. She refused to be his mistress — she wanted to be queen.\n- **Conscience.** Henry pointed to the Bible. **Leviticus** says a man who marries his brother's wife will be childless. Henry argued that the Pope who allowed his marriage had been wrong, so the marriage had never been valid.\n\nHenry wanted an **annulment** — a ruling that the marriage had never existed. Popes had granted these to kings before. But Pope **Clement VII** was trapped. In **May 1527** the troops of Emperor **Charles V** had sacked Rome, and Charles was **Catherine's nephew**. The Pope dared not offend him.\n\nCatherine fought back. She insisted her marriage to Arthur had never been consummated, so her marriage to Henry was valid. In 1529 a special court met at Blackfriars in London, led by Wolsey and the Pope's representative, **Cardinal Campeggio**. Catherine knelt before Henry and appealed to him in public. In July the court was adjourned, and the case was called back to Rome.\n\nThis was the end for **Wolsey**. He lost his post as Lord Chancellor in **October 1529**. In 1530 he was arrested for treason, but he fell ill and died at Leicester on his way to London.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of the Pope's dilemma: Henry VIII pressed Pope Clement VII for an annulment, while Emperor Charles V, Catherine of Aragon's nephew, controlled Rome after 1527 and pressed the Pope to refuse"><rect x="170" y="20" width="140" height="50" rx="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/><text x="240" y="41" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Pope Clement VII</text><text x="240" y="59" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">must decide the case</text><rect x="20" y="170" width="140" height="50" rx="6" fill="#fde68a" stroke="#334155" stroke-width="1.5"/><text x="90" y="191" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Henry VIII</text><text x="90" y="209" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">wants an annulment</text><rect x="320" y="170" width="140" height="50" rx="6" fill="#fecaca" stroke="#334155" stroke-width="1.5"/><text x="390" y="191" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Charles V</text><text x="390" y="209" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Emperor and King of Spain</text><rect x="320" y="245" width="140" height="44" rx="6" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><text x="390" y="264" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Catherine of Aragon</text><text x="390" y="280" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Charles's aunt</text><line x1="390" y1="220" x2="390" y2="245" stroke="#334155" stroke-width="1.5"/><line x1="100" y1="170" x2="190" y2="76" stroke="#334155" stroke-width="2"/><polygon points="190,76 178,82 186,90" fill="#334155"/><text x="24" y="118" font-size="11" font-family="sans-serif" fill="#1f2937">“End my marriage”</text><line x1="380" y1="170" x2="290" y2="76" stroke="#334155" stroke-width="2"/><polygon points="290,76 294,90 302,82" fill="#334155"/><text x="358" y="112" font-size="10" font-family="sans-serif" fill="#1f2937">“Refuse!” — and his</text><text x="358" y="126" font-size="10" font-family="sans-serif" fill="#1f2937">troops sacked Rome</text><text x="358" y="140" font-size="10" font-family="sans-serif" fill="#1f2937">in May 1527</text><line x1="160" y1="195" x2="320" y2="195" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><text x="240" y="188" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">rivals</text><text x="240" y="245" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">The Pope could not satisfy</text><text x="240" y="260" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">both — so he delayed.</text></svg>`,
      diagramCaption:
        "The Pope's dilemma. Henry needed the Pope's ruling, but the most powerful ruler in Europe — Catherine's nephew — controlled Rome.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why Henry VIII was unable to get an annulment from the Pope. (4 marks)",
          steps: [
            "Notice the question is about the *Pope's* side, not about why Henry wanted the annulment.",
            "Reason 1: Charles V — Catherine's nephew — controlled Rome after his troops sacked it in 1527.",
            "Reason 2: Catherine resisted, claiming her first marriage was never consummated, and appealed to Rome.",
            "Link them: the Pope could not offend Charles, and Catherine's appeal gave him a reason to delay; the 1529 Blackfriars court ended with the case sent back to Rome.",
          ],
          answer:
            "The main reason was politics in Europe. In May 1527 Emperor Charles V's troops sacked Rome, leaving Pope Clement VII under his control. Charles was Catherine of Aragon's nephew, so the Pope could not grant an annulment without angering the most powerful ruler in Europe. A second reason was Catherine's own resistance: she insisted her marriage to Arthur had never been consummated, so her marriage to Henry was valid, and she appealed to Rome. Because of both pressures the Pope delayed; the court at Blackfriars was adjourned in July 1529 and the case was called back to Rome, leaving Henry with no annulment.",
          yourTurn: {
            question: "In what year did the troops of Charles V sack Rome, leaving Pope Clement VII under the Emperor's control?",
            answer: { type: "number", value: 1527 },
            solution: "Rome was sacked in May 1527. From then on Pope Clement VII dared not offend Charles V, Catherine's nephew — so he would not grant Henry's annulment.",
          },
        },
      ],
      keyPoints: [
        "Henry wanted a male heir; only Princess Mary (born 1516) survived of Catherine's children.",
        "He feared a female or disputed succession could bring back civil war.",
        "He fell in love with Anne Boleyn and used the Leviticus argument to claim his marriage was invalid.",
        "Pope Clement VII would not grant an annulment because Charles V, Catherine's nephew, controlled Rome after 1527.",
        "Wolsey failed to get the annulment and fell from power in 1529; he died in 1530.",
      ],
      whyItWorks:
        "The Great Matter shows how a personal problem became a political crisis. A king's marriage decided who would rule next, so Henry's need for a son was a matter of national security. Because the only person who could end the marriage — the Pope — was controlled by Catherine's nephew, the normal route was blocked. That blockage is what pushed Henry towards a radical solution.",
      strategies: ["Sort causes into categories", "Link the factors", "Ask \"who benefits?\""],
      thinkDeeper:
        "If Catherine had given birth to a healthy son who survived, would the Break with Rome still have happened? What does your answer suggest about how important the need for an heir was compared with Henry's feelings for Anne?",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "break-with-rome",
      heading: "The Break with Rome",
      discovery: {
        problem:
          "It is **1532**. The Pope still will not end Henry's marriage, and Anne Boleyn is about to become pregnant. A child born before Henry is free to marry her would be illegitimate — and could never inherit.\n\nHenry has four possible moves:\n\n1. Give up Anne and stay married to Catherine\n2. Wait and hope for a new, friendlier Pope\n3. Invade Italy to free the Pope from Charles V\n4. Declare that the Pope has no power in England, so English churchmen can decide the case\n\nWhich would you choose? What are the risks of each — and what else might move 4 give Henry besides a new wife?",
        idea:
          "Henry chose move 4, the most radical. It solved the marriage problem quickly — the new Archbishop of Canterbury could end it without asking Rome. But it also gave Henry something far bigger: control of the Church, its courts, its appointments and eventually its wealth. A crisis about a marriage became a revolution in royal power.",
      },
      body:
        "Blocked by the Pope, Henry turned to two new advisers:\n\n- **Thomas Cromwell**, a self-made lawyer from Putney, was Henry's chief minister from about 1532. He saw that **Parliament** could pass laws cutting England off from Rome.\n- **Thomas Cranmer**, a scholar who favoured Church reform, became **Archbishop of Canterbury** in 1533.\n\n| Date | Event |\n|---|---|\n| Jan 1533 | Henry secretly marries **Anne Boleyn**, who is pregnant |\n| 1533 | **Act in Restraint of Appeals**: legal cases can no longer be appealed to Rome |\n| May 1533 | Cranmer declares Henry's marriage to Catherine invalid |\n| Sept 1533 | Anne gives birth to a daughter, **Elizabeth** |\n| 1534 | **Act of Succession**: Anne's children are the heirs, and subjects must swear an oath accepting this |\n| Nov 1534 | **Act of Supremacy**: Henry is Supreme Head of the Church of England |\n| 1534 | **Treason Act**: even *saying* the king is a heretic or a tyrant becomes treason |\n| 1535 | Bishop John Fisher and Sir Thomas More are executed |\n\n> \"The King our sovereign lord, his heirs and successors… shall be taken, accepted and reputed the only supreme head in earth of the Church of England.\" — Act of Supremacy, 1534 (modern spelling)\n\n**Sir Thomas More**, Henry's former Lord Chancellor and friend, refused to swear the oath because it rejected the Pope's authority. He was imprisoned in the Tower, tried for treason and beheaded on **6 July 1535**. He is reported to have said on the scaffold that he died \"the King's good servant, but God's first\".\n\nHistorians still debate Henry's **motives**: an **heir** (marrying Anne to get a son), **money** (payments that used to go to Rome now went to the king), **power** (no foreign Pope above him) and **religion** (Protestant ideas were spreading, and Anne, Cranmer and Cromwell favoured reform).\n\nBut England was not yet Protestant. Henry kept most Catholic beliefs, such as the Mass. What changed was who sat at the top: the king, not the Pope.",
      diagram: `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of four motives for the Break with Rome: an heir, money, power and religion, all leading to the central event"><rect x="165" y="145" width="150" height="50" rx="6" fill="#fde68a" stroke="#334155" stroke-width="1.5"/><text x="240" y="166" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">The Break with Rome</text><text x="240" y="184" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1532–1534</text><rect x="10" y="20" width="200" height="80" rx="6" fill="#fecaca" stroke="#334155"/><text x="20" y="40" font-size="13" font-family="sans-serif" fill="#1f2937">1. An heir</text><text x="20" y="58" font-size="10" font-family="sans-serif" fill="#1f2937">Marry Anne Boleyn and have a</text><text x="20" y="72" font-size="10" font-family="sans-serif" fill="#1f2937">legitimate son, to stop a</text><text x="20" y="86" font-size="10" font-family="sans-serif" fill="#1f2937">return to civil war</text><rect x="270" y="20" width="200" height="80" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="280" y="40" font-size="13" font-family="sans-serif" fill="#1f2937">2. Money</text><text x="280" y="58" font-size="10" font-family="sans-serif" fill="#1f2937">Church taxes once paid to Rome</text><text x="280" y="72" font-size="10" font-family="sans-serif" fill="#1f2937">now go to the king; later the</text><text x="280" y="86" font-size="10" font-family="sans-serif" fill="#1f2937">monasteries' land and wealth</text><rect x="10" y="240" width="200" height="80" rx="6" fill="#c7d2fe" stroke="#334155"/><text x="20" y="260" font-size="13" font-family="sans-serif" fill="#1f2937">3. Power</text><text x="20" y="278" font-size="10" font-family="sans-serif" fill="#1f2937">No Pope above the king; Henry</text><text x="20" y="292" font-size="10" font-family="sans-serif" fill="#1f2937">controls bishops, Church courts</text><text x="20" y="306" font-size="10" font-family="sans-serif" fill="#1f2937">and Church appointments</text><rect x="270" y="240" width="200" height="80" rx="6" fill="#bae6fd" stroke="#334155"/><text x="280" y="260" font-size="13" font-family="sans-serif" fill="#1f2937">4. Religion</text><text x="280" y="278" font-size="10" font-family="sans-serif" fill="#1f2937">Protestant ideas spreading;</text><text x="280" y="292" font-size="10" font-family="sans-serif" fill="#1f2937">Anne, Cranmer and Cromwell</text><text x="280" y="306" font-size="10" font-family="sans-serif" fill="#1f2937">favoured reform</text><line x1="150" y1="100" x2="190" y2="145" stroke="#334155" stroke-width="2"/><line x1="330" y1="100" x2="290" y2="145" stroke="#334155" stroke-width="2"/><line x1="150" y1="240" x2="190" y2="195" stroke="#334155" stroke-width="2"/><line x1="330" y1="240" x2="290" y2="195" stroke="#334155" stroke-width="2"/><text x="240" y="122" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">the trigger</text><text x="240" y="225" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">the long-term gains</text></svg>`,
      diagramCaption:
        "Four motives for the Break with Rome. The need for an heir triggered it; money, power and new religious ideas help explain why Henry went so far — and why the change lasted.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "'Henry VIII broke with Rome only because he wanted to marry Anne Boleyn.' How far do you agree? (6 marks)",
          steps: [
            "Plan both sides. FOR: the timing — the break happened exactly when Anne was pregnant (1533) and the Pope had refused the annulment.",
            "AGAINST: other motives — money from the Church, power over the Church, and reformers (Cromwell, Cranmer) pushing Protestant ideas.",
            "Use precise evidence: Act of Supremacy 1534; Treason Act; later the Dissolution of the Monasteries (1536–40).",
            "Judge: the marriage was the trigger, but the gains in power and money explain why Henry made the break so complete and permanent.",
          ],
          answer:
            "I partly agree. The marriage was clearly the trigger. Henry needed a legitimate son, the Pope refused to end his marriage to Catherine, and the key laws came just as Anne became pregnant: he married her in January 1533 and Cranmer declared the old marriage invalid in May. However, the marriage alone does not explain how far Henry went. The Act of Supremacy (1534) made him Supreme Head of the Church, giving him control of bishops, Church courts and Church taxes, and soon the monasteries' wealth. Reformers such as Cromwell and Cranmer also pushed for change for religious reasons. Overall, Anne was the reason the break happened *when* it did, but the power and money it brought explain why Henry made it complete and permanent.",
          yourTurn: {
            question: "In what year did the Act of Supremacy make Henry VIII Supreme Head of the Church of England?",
            answer: { type: "number", value: 1534 },
            solution: "The Act of Supremacy was passed by Parliament in November 1534.",
          },
        },
      ],
      keyPoints: [
        "Thomas Cromwell used Parliament to pass the laws of the Break; Thomas Cranmer became Archbishop of Canterbury in 1533.",
        "Henry married Anne Boleyn in January 1533; Cranmer declared the marriage to Catherine invalid in May 1533.",
        "The Act of Supremacy (1534) made Henry Supreme Head of the Church of England.",
        "The Treason Act (1534) made it treason even to speak against the king's titles; Fisher and More were executed in 1535.",
        "Motives: heir, money, power and religion. Henry broke with the Pope but kept most Catholic beliefs.",
      ],
      whyItWorks:
        "The Break with Rome transformed royal power because it removed the one authority in England that did not answer to the king. Before 1534 the Church had its own courts, its own taxes and its own loyalty to Rome; afterwards all of it answered to Henry. Because the changes were made by Acts of Parliament, they also had the force of law — which made them harder to undo, and quietly increased Parliament's importance.",
      strategies: ["Weigh both sides, then judge", "Ask \"who benefits?\"", "Use the chronology"],
      thinkDeeper:
        "Henry used Parliament to pass the laws that made him Supreme Head. In the long run, did that make the monarchy stronger or did it make Parliament stronger? Could both be true?",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "dissolution-of-the-monasteries",
      heading: "The Dissolution of the Monasteries",
      discovery: {
        problem:
          "In 1535 Thomas Cromwell sent **commissioners** to inspect England's monasteries. Their reports described lazy monks, broken rules and bad behaviour.\n\nBefore you trust those reports, check the provenance:\n\n- Who chose and paid the commissioners?\n- How long did they spend at each monastery — often only a day or two?\n- What did Cromwell and the king *want* them to find?\n\nIf you were a historian, how far would you trust the reports? What other evidence would you look for?",
        idea:
          "The commissioners were Cromwell's men, they visited quickly, and they knew the king wanted reasons to close the monasteries. That does not make every report false — some houses really were small, poor or badly run — but it means the reports were written for a purpose. Historians today think they exaggerated, and that the main motive for the Dissolution was **money**, with **removing loyalty to the Pope** close behind.",
      },
      body:
        "In 1530s England there were **about 800** religious houses — monasteries, nunneries and friaries. Together they owned a huge share of the country's land. Many gave food and alms to the poor, cared for the sick and sheltered travellers.\n\nNow that Henry was Supreme Head of the Church, he could close them. The process moved in stages:\n\n1. **1535 — the Valor Ecclesiasticus**: a survey of the wealth of the whole Church. Cromwell's commissioners also visited monasteries and reported on the monks.\n2. **1536**: an Act of Parliament closed the **smaller** houses, those worth less than £200 a year.\n3. **1538–1540**: the **larger** houses were pressured to \"surrender\" to the king. The last, **Waltham Abbey**, closed in March 1540. A few abbots who resisted, such as the Abbot of Glastonbury, were executed in 1539.\n\nIn **October 1536** the north rose in the **Pilgrimage of Grace**, led by a lawyer, **Robert Aske**. Historians estimate around 30,000 people joined. They wanted the monasteries saved, the old religion protected and \"evil counsellors\" like Cromwell removed — but they said they were loyal to the king.\n\n> \"Ye shall not enter into this our Pilgrimage of Grace for the commonwealth, but only for the love that ye do bear unto Almighty God, his faith, and to Holy Church militant…\" — the pilgrims' oath, 1536\n\nThe Duke of Norfolk, heavily outnumbered, promised a pardon and a parliament, and the rebels went home. But after a new rising in early 1537, Henry broke his promises. About 200 people were executed, including Aske, who was hanged in chains at York.\n\n**Effects:** the Crown gained vast land and income, but much was soon sold to nobles and gentry to pay for wars. Those new landowners now had a reason never to let the Pope return. Monks lost their homes (many received pensions), the poor lost an important source of help, and great abbeys such as Fountains became ruins.",
      diagram: `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow chart showing the wealth of about 800 religious houses passing to the Crown, which kept some, sold or gave some to nobles and gentry, and spent some on wars, while monks, nuns, the poor and rebels lost out"><text x="10" y="34" font-size="13" font-family="sans-serif" fill="#1f2937">Where did the monasteries' wealth go?</text><text x="10" y="52" font-size="11" font-family="sans-serif" fill="#1f2937">1536–1540</text><rect x="10" y="120" width="140" height="80" rx="6" fill="#e2e8f0" stroke="#334155"/><text x="80" y="142" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">About 800</text><text x="80" y="157" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">religious houses</text><text x="80" y="174" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">land, buildings, gold,</text><text x="80" y="188" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">silver, lead roofs</text><rect x="180" y="120" width="130" height="80" rx="6" fill="#fde68a" stroke="#334155"/><text x="245" y="150" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">The Crown</text><text x="245" y="168" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Court of</text><text x="245" y="182" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Augmentations</text><line x1="150" y1="160" x2="176" y2="160" stroke="#334155" stroke-width="2"/><polygon points="180,160 172,155 172,165" fill="#334155"/><rect x="340" y="20" width="130" height="56" rx="6" fill="#fde68a" stroke="#334155"/><text x="405" y="44" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Kept by the king:</text><text x="405" y="60" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">rents and income</text><rect x="340" y="132" width="130" height="56" rx="6" fill="#bbf7d0" stroke="#334155"/><text x="405" y="156" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Sold or given to</text><text x="405" y="172" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">nobles and gentry</text><rect x="340" y="244" width="130" height="56" rx="6" fill="#fecaca" stroke="#334155"/><text x="405" y="268" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Spent on wars</text><text x="405" y="284" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">and coastal forts</text><line x1="310" y1="140" x2="337" y2="76" stroke="#334155" stroke-width="2"/><line x1="310" y1="160" x2="336" y2="160" stroke="#334155" stroke-width="2"/><polygon points="340,160 332,155 332,165" fill="#334155"/><line x1="310" y1="180" x2="337" y2="244" stroke="#334155" stroke-width="2"/><rect x="10" y="230" width="300" height="90" rx="6" fill="#f8fafc" stroke="#334155" stroke-dasharray="5 4"/><text x="20" y="252" font-size="12" font-family="sans-serif" fill="#1f2937">Who lost out?</text><text x="20" y="272" font-size="10" font-family="sans-serif" fill="#1f2937">Monks and nuns: lost their homes</text><text x="20" y="289" font-size="10" font-family="sans-serif" fill="#1f2937">The poor: lost alms, care and shelter</text><text x="20" y="306" font-size="10" font-family="sans-serif" fill="#1f2937">Rebels: Pilgrimage of Grace crushed, 1537</text></svg>`,
      diagramCaption:
        "The wealth of the monasteries flowed to the Crown — but much of it flowed straight out again, to loyal nobles and gentry and to pay for war.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "Explain why Henry VIII dissolved the monasteries. (4 marks)",
          steps: [
            "Sort the reasons: money, power/loyalty, rewarding supporters, and the excuse of corruption.",
            "Money first: the Valor Ecclesiasticus (1535) showed how rich the monasteries were, and Henry needed money for war.",
            "Loyalty: monks belonged to international orders loyal to the Pope — a danger after 1534.",
            "Link: selling the land to gentry raised cash AND gave powerful families a reason to support the Reformation.",
          ],
          answer:
            "The most important reason was money. The Valor Ecclesiasticus of 1535 showed how much land and income the monasteries had, and Henry needed money, especially for wars with France and Scotland. A second reason was power and loyalty: monks belonged to orders that looked to the Pope, so after the Act of Supremacy they were seen as a possible threat. The reports of Cromwell's commissioners about corrupt monks gave Henry a justification. These reasons were linked, because when Henry sold monastery land to nobles and gentry he raised cash and also gave those families a stake in the Break with Rome, so they would resist any return of the Pope.",
          yourTurn: {
            question: "What name is given to the 1536 rebellion in the north of England, led by Robert Aske?",
            answer: { type: "text", accept: ["Pilgrimage of Grace", "the Pilgrimage of Grace"], display: "The Pilgrimage of Grace" },
            solution: "The Pilgrimage of Grace (October 1536). The rebels called themselves pilgrims to show their cause was religious and loyal.",
          },
        },
      ],
      keyPoints: [
        "About 800 monasteries, nunneries and friaries were closed between 1536 and 1540.",
        "The Valor Ecclesiasticus (1535) measured Church wealth; Cromwell's commissioners reported on the monks — reports with a clear purpose.",
        "Main motives: money, removing loyalty to the Pope, and rewarding supporters with land.",
        "The Pilgrimage of Grace (1536) was ended with false promises; about 200 people, including Robert Aske, were executed.",
        "Effects: richer Crown and gentry, loss of help for the poor, monks without homes, and ruined abbeys.",
      ],
      whyItWorks:
        "The Dissolution turned the Break with Rome from words into facts on the ground. Selling monastery land to nobles and gentry gave hundreds of powerful families a personal reason to defend the new order — if the Pope ever returned, they might have to give the land back. That is a key reason the Reformation survived even when Henry's daughter Mary later tried to restore Catholicism.",
      strategies: ["Check the provenance (NOP)", "Ask \"who benefits?\"", "Sort causes into categories"],
      thinkDeeper:
        "The pilgrims of 1536 insisted they were loyal to Henry and only opposed his 'evil counsellors'. Why might rebels in a monarchy present their protest this way? Was it a sincere belief, a clever tactic — or both?",
    },
    // ------------------------------------------------------------------ 6
    {
      id: "henrys-power-and-image",
      heading: "Henry's power, wives and image",
      discovery: {
        problem:
          "In **1537** Hans Holbein painted Henry for a great wall painting in Whitehall Palace. The original burned in 1698, but copies survive. In them, Henry:\n\n- stands facing you, feet planted wide apart, hands near his belt and dagger\n- has hugely broad, padded shoulders and rich jewels\n- fills the picture, larger than life\n\nBefore reading on, write down three messages the painting sends. Then think: 1536–37 saw a rebellion in the north, a queen executed and a king still with no legitimate son. **Why might Henry want this image at exactly this moment?**",
        idea:
          "The painting says: strong, rich, permanent, in control. It was **propaganda** — an image designed to shape what people think. It is most powerful when it hides weakness: Henry was 46, had been badly injured jousting in 1536, faced the Pilgrimage of Grace and was still waiting for a son. Images of power are often made when power feels threatened.",
      },
      body:
        "Henry married **six times**:\n\n| Wife | Married | Fate | Child who survived |\n|---|---|---|---|\n| Catherine of Aragon | 1509 | Annulled 1533; died 1536 | Mary (b. 1516) |\n| Anne Boleyn | 1533 | Executed May 1536 | Elizabeth (b. 1533) |\n| Jane Seymour | 1536 | Died after childbirth, 1537 | Edward (b. 1537) |\n| Anne of Cleves | 1540 | Annulled 1540 | — |\n| Catherine Howard | 1540 | Executed 1542 | — |\n| Catherine Parr | 1543 | Survived Henry | — |\n\nAnne Boleyn was accused of adultery and treason. Most historians think the charges were false, and she was beheaded on 19 May 1536. Catherine Howard, probably still in her late teens, was accused of adultery and executed in February 1542. Jane Seymour gave Henry his son, Edward, but died twelve days later. The marriage to Anne of Cleves was arranged by Cromwell to win a German ally; Henry disliked her, ended it within six months, and Cromwell was executed on 28 July 1540 — the same day Henry married Catherine Howard.\n\n**Image and propaganda:** Holbein's portraits; the title page of the **Great Bible** (1539) showing Henry handing God's word to his people; coins and seals; splendid palaces such as **Hampton Court**, taken over from Wolsey. Late in the reign he lowered the silver in coins to raise money — the copper showing through on his nose earned him the nickname \"Old Coppernose\".\n\n**Power:** Henry ended his reign far stronger than he began it. He was Supreme Head of the Church, he had taken the monasteries' wealth, he brought Wales under English law (the Laws in Wales Acts, 1535–1542), and in 1541 the Irish Parliament declared him **King of Ireland**. He built up the navy. Yet he had used **Parliament** to do much of this — which made Parliament more important too.\n\nHenry died on **28 January 1547**, aged 55. His son became **Edward VI**, aged nine. In 1544 Henry had restored both Mary and Elizabeth to the succession — and all three of his children would rule.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline from 1509 to 1547 showing the length of each of Henry VIII's six marriages, how each ended, and the births of Mary in 1516, Elizabeth in 1533 and Edward in 1537"><line x1="40" y1="30" x2="460" y2="30" stroke="#334155" stroke-width="1.5"/><line x1="40" y1="26" x2="40" y2="34" stroke="#334155"/><line x1="161.6" y1="26" x2="161.6" y2="34" stroke="#334155"/><line x1="272.1" y1="26" x2="272.1" y2="34" stroke="#334155"/><line x1="382.6" y1="26" x2="382.6" y2="34" stroke="#334155"/><line x1="460" y1="26" x2="460" y2="34" stroke="#334155"/><text x="40" y="20" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1509</text><text x="161.6" y="20" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1520</text><text x="272.1" y="20" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1530</text><text x="382.6" y="20" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1540</text><text x="460" y="20" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1547</text><rect x="40" y="45" width="270" height="18" fill="#fecaca" stroke="#334155"/><text x="46" y="58" font-size="10" font-family="sans-serif" fill="#1f2937">1. Catherine of Aragon, m. 1509 — annulled 1533</text><rect x="306" y="78" width="37" height="18" fill="#c7d2fe" stroke="#334155"/><text x="300" y="91" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">2. Anne Boleyn, m. 1533 — executed 1536</text><rect x="343" y="111" width="15" height="18" fill="#bbf7d0" stroke="#334155"/><text x="337" y="124" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">3. Jane Seymour, m. 1536 — died 1537</text><rect x="382.6" y="144" width="6" height="18" fill="#fecaca" stroke="#334155"/><text x="376" y="157" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">4. Anne of Cleves, m. 1540 — annulled 1540</text><rect x="389" y="177" width="17" height="18" fill="#c7d2fe" stroke="#334155"/><text x="383" y="190" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">5. Catherine Howard, m. 1540 — executed 1542</text><rect x="421.6" y="210" width="38.4" height="18" fill="#fde68a" stroke="#334155"/><text x="415" y="223" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">6. Catherine Parr, m. 1543 — survived Henry</text><text x="40" y="244" font-size="10" font-family="sans-serif" fill="#1f2937">Children who lived to adulthood:</text><line x1="40" y1="255" x2="460" y2="255" stroke="#334155" stroke-width="1"/><circle cx="119" cy="255" r="5" fill="#fde68a" stroke="#334155"/><circle cx="313" cy="255" r="5" fill="#fde68a" stroke="#334155"/><circle cx="358" cy="255" r="5" fill="#fde68a" stroke="#334155"/><text x="119" y="274" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Mary, b. 1516</text><text x="316" y="288" font-size="10" text-anchor="end" font-family="sans-serif" fill="#1f2937">Elizabeth, b. 1533</text><text x="354" y="274" font-size="10" font-family="sans-serif" fill="#1f2937">Edward, b. 1537</text></svg>`,
      diagramCaption:
        "Henry's six marriages drawn to scale. The first lasted about 24 years; the next five fitted into the last 14 years of his life. Red = annulled, blue = executed, green = died, yellow = survived.",
      workedExamples: [
        {
          title: "Model answer walkthrough",
          problem: "How useful is Holbein's Whitehall portrait of Henry VIII (1537) to a historian studying how Henry kept power? (4 marks)",
          steps: [
            "Content: what does it show? A huge, confident, richly dressed king standing square to the viewer.",
            "Provenance (NOP): Nature — an official royal painting; Origin — Holbein, the king's painter; Purpose — to impress viewers with Henry's power.",
            "Turn the 'limitation' into a use: it is not reliable about Henry's real health or looks, but it is excellent evidence of how Henry WANTED to be seen.",
            "Judge: very useful for propaganda and image; limited for what Henry was actually like in 1537.",
          ],
          answer:
            "The portrait is very useful for showing how Henry used image to keep power. It shows him standing with feet wide apart, broad padded shoulders and rich jewels, filling the picture — a message of strength, wealth and permanence. Its provenance makes it useful in this way: it was an official painting by Holbein, the king's painter, made for the royal palace at Whitehall to impress visitors. However, because its purpose was propaganda, it is less useful for what Henry was really like: in 1537 he was 46, had been injured jousting and had just faced the Pilgrimage of Grace. Overall it is limited as a picture of the real man, but highly useful as evidence of the image Henry wanted to project.",
          yourTurn: {
            question: "Which of Henry VIII's wives was the mother of his son, Edward VI?",
            answer: { type: "text", accept: ["Jane Seymour", "Seymour", "Queen Jane", "Queen Jane Seymour"], display: "Jane Seymour" },
            solution: "Jane Seymour gave birth to Edward on 12 October 1537 and died twelve days later.",
          },
        },
      ],
      keyPoints: [
        "The six wives in order: Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, Catherine Parr.",
        "Divorced (annulled), beheaded, died; divorced (annulled), beheaded, survived.",
        "Children: Mary (Catherine of Aragon), Elizabeth (Anne Boleyn), Edward (Jane Seymour) — all three later ruled.",
        "Propaganda: Holbein's portraits, the Great Bible title page (1539), coins, palaces and ceremony.",
        "Henry died on 28 January 1547, far more powerful than when he began — but having relied on Parliament to get there.",
      ],
      whyItWorks:
        "Henry's power grew because he controlled things no English king had controlled before: the Church, its land and its loyalty. His image mattered because power in the 1500s depended partly on belief — people obeyed a king who looked unbeatable. The six marriages were not just personal drama: each one was tied to the succession, to foreign alliances or to which group of advisers held power at court.",
      strategies: ["Check the provenance (NOP)", "Ask \"useful for what?\"", "Look for change AND continuity", "Zoom out to the big picture"],
      thinkDeeper:
        "Henry VIII spent most of his reign trying to secure the Tudor succession with a son. Yet the greatest Tudor monarch, many historians argue, was his daughter Elizabeth. What does that suggest about the beliefs that drove the Great Matter?",
    },
  ],
  learn: {
    flashcards: [
      { front: "When was the Battle of Bosworth, and who was killed there?", back: "22 August 1485. Richard III was killed; Henry Tudor became Henry VII." },
      { front: "Which two royal houses fought the Wars of the Roses?", back: "Lancaster (red rose) and York (white rose), both descended from Edward III." },
      { front: "How did Henry VII unite Lancaster and York?", back: "He married Elizabeth of York, Edward IV's daughter, in January 1486. The Tudor rose symbolised the union." },
      { front: "Name two pretenders who challenged Henry VII.", back: "Lambert Simnel (defeated at Stoke, 1487) and Perkin Warbeck (captured 1497, executed 1499)." },
      { front: "Why did Henry VIII become heir to the throne?", back: "His elder brother Prince Arthur died in April 1502." },
      { front: "When did Henry VIII become king, and how old was he?", back: "April 1509, aged 17. He inherited peacefully from his father." },
      { front: "Who was Henry's chief minister from 1515 to 1529?", back: "Cardinal Thomas Wolsey, Lord Chancellor." },
      { front: "What was the Field of the Cloth of Gold?", back: "A splendid meeting between Henry VIII and Francis I of France near Calais in June 1520." },
      { front: "What was the 'Great Matter'?", back: "Henry's attempt (from 1527) to have his marriage to Catherine of Aragon annulled so he could marry Anne Boleyn and have a son." },
      { front: "Why would Pope Clement VII not grant the annulment?", back: "Emperor Charles V, Catherine's nephew, controlled Rome after his troops sacked it in 1527." },
      { front: "What did the Act of Supremacy (1534) do?", back: "Made Henry VIII Supreme Head of the Church of England instead of the Pope." },
      { front: "Who were Thomas Cromwell and Thomas Cranmer?", back: "Cromwell: Henry's chief minister from about 1532, who used Parliament to pass the Break. Cranmer: Archbishop of Canterbury from 1533, who annulled the marriage to Catherine." },
      { front: "Why was Sir Thomas More executed in 1535?", back: "He refused to swear the oath accepting the new order, which rejected the Pope's authority; he was convicted of treason." },
      { front: "What was the Valor Ecclesiasticus?", back: "A 1535 survey of the wealth of the Church, used to plan the Dissolution of the Monasteries." },
      { front: "What was the Pilgrimage of Grace?", back: "A rebellion in northern England (October 1536), led by Robert Aske, against the closing of the monasteries and religious change." },
      { front: "List Henry's six wives in order.", back: "Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, Catherine Parr." },
      { front: "Which wife was the mother of each of Henry's three children?", back: "Mary — Catherine of Aragon; Elizabeth — Anne Boleyn; Edward — Jane Seymour." },
      { front: "When did Henry VIII die, and who succeeded him?", back: "28 January 1547. His nine-year-old son became Edward VI." },
    ],
    mustKnow: [
      "Can you explain how Henry VII won the crown in 1485 and how he made it secure?",
      "Can you explain why Henry VIII's rise to power (a peaceful inheritance) was different from William I's or Henry VII's?",
      "Can you describe Henry's image as a young Renaissance prince, with examples?",
      "Can you explain the causes of the Great Matter, including the need for an heir and Anne Boleyn?",
      "Can you explain why the Pope would not grant an annulment (Charles V, the sack of Rome)?",
      "Can you put the main events of the Break with Rome (1533–1535) in order?",
      "Can you weigh up Henry's motives for the Break with Rome: heir, money, power, religion?",
      "Can you explain why the monasteries were dissolved and what the effects were?",
      "Can you explain the causes and outcome of the Pilgrimage of Grace (1536–37)?",
      "Can you name the six wives in order, their fates and their children?",
      "Can you evaluate a source such as a Holbein portrait using its provenance?",
      "Can you judge how much stronger the monarchy was by 1547, and what role Parliament played?",
    ],
    misconceptions: [
      { wrong: "Henry VIII won the crown at the Battle of Bosworth.", right: "That was his father, Henry VII, in 1485. Henry VIII inherited peacefully in 1509 — which is exactly why his rise to power is a different case study." },
      { wrong: "Henry 'divorced' his wives in the modern sense.", right: "His first and fourth marriages were annulled — declared never to have been valid. The rhyme says 'divorced', but annulment is the accurate word." },
      { wrong: "The Break with Rome made England a Protestant country.", right: "Henry rejected the Pope but kept most Catholic beliefs, such as the Mass. England became more Protestant later, under Edward VI and Elizabeth I." },
      { wrong: "Henry VIII was always fat and unhealthy.", right: "As a young king he was tall, athletic and a champion jouster. His health declined after a bad jousting accident in 1536 and painful leg ulcers." },
      { wrong: "The monasteries were closed because the monks were all corrupt.", right: "The reports of corruption came from Cromwell's commissioners, who knew what he wanted to hear. The main motives were money and removing loyalty to the Pope." },
      { wrong: "Henry wrote the song 'Greensleeves'.", right: "There is no evidence for this. The song is first recorded in 1580, decades after Henry died." },
      { wrong: "Henry called Anne of Cleves a 'Flanders mare'.", right: "That phrase first appears in writing more than a century later. Henry did make it clear he did not like her, and the marriage was annulled after six months." },
    ],
    examMistakes: [
      "Mixing up Henry VII (won at Bosworth, 1485) and Henry VIII (inherited in 1509).",
      "Writing that Henry VIII became a Protestant — he broke with the Pope but kept most Catholic beliefs.",
      "Getting the wives in the wrong order, or mixing up the two Annes and the three Catherines.",
      "Telling the story of the six marriages instead of answering the question about power or the succession.",
      "Explaining only one motive for the Break with Rome. 'Why' questions need several reasons, linked together.",
      "Confusing Thomas Wolsey, Thomas Cromwell, Thomas Cranmer and Thomas More — four different Thomases with four different fates.",
      "Accepting the commissioners' reports on the monasteries or a royal portrait at face value, without checking provenance.",
      "Saying Charles V was Catherine's brother or father — he was her nephew.",
    ],
    mnemonics: [
      { topic: "Fates of the six wives", device: "Divorced, beheaded, died; divorced, beheaded, survived.", explanation: "Catherine of Aragon (annulled), Anne Boleyn (executed), Jane Seymour (died), Anne of Cleves (annulled), Catherine Howard (executed), Catherine Parr (survived)." },
      { topic: "Order of the six wives", device: "A Bold Sailor Crossed Heavy Pacific (Aragon, Boleyn, Seymour, Cleves, Howard, Parr)", explanation: "The first letters of the surnames or titles, in order: Aragon, Boleyn, Seymour, Cleves, Howard, Parr." },
      { topic: "Motives for the Break with Rome", device: "HMPR — 'Heirs Make Popes Rage'", explanation: "Heir, Money, Power, Religion." },
      { topic: "The four Thomases", device: "Wolsey Fell, Cromwell Fixed, Cranmer Freed, More Refused", explanation: "Wolsey fell in 1529; Cromwell fixed the Break through Parliament; Cranmer freed Henry from his first marriage; More refused the oath and was executed." },
    ],
    realWorld: [
      { title: "'Defender of the Faith' on your coins", detail: "The Pope gave Henry the title Defender of the Faith in 1521. British monarchs still use it, and British coins carry the letters F D or FID DEF.", emoji: "🪙" },
      { title: "The Church of England today", detail: "Because of the Break with Rome, the British monarch is still Supreme Governor of the Church of England. The Anglican Communion that grew from it spans the world — St Andrew's Cathedral in Singapore is an Anglican cathedral.", emoji: "⛪" },
      { title: "No more 'Great Matters'", detail: "Since the Succession to the Crown Act 2013, the eldest child of a British monarch inherits regardless of whether they are a boy or a girl. The crisis that drove Henry VIII could not happen in the same way today.", emoji: "👑" },
      { title: "Ruins you can visit", detail: "Abbeys left in ruins by the Dissolution — such as Fountains Abbey in Yorkshire, now a UNESCO World Heritage Site — are still some of England's most visited historic places.", emoji: "🏚️" },
      { title: "Image-making in politics", detail: "Leaders still use carefully chosen images — official portraits, staged photographs, confident poses — to look strong. Henry's Holbein portrait is one of history's most famous examples of political image-making.", emoji: "🖼️" },
    ],
    videos: [
      { title: "Henry VIII and his six wives", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=Henry+VIII+six+wives+explained" },
      { title: "The Break with Rome explained", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=Henry+VIII+break+with+Rome+explained" },
      { title: "The Dissolution of the Monasteries", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=Dissolution+of+the+Monasteries+Henry+VIII" },
      { title: "The Battle of Bosworth and the Wars of the Roses", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=Battle+of+Bosworth+1485+Wars+of+the+Roses" },
      { title: "The Pilgrimage of Grace", channel: "YouTube search", url: "https://www.youtube.com/results?search_query=Pilgrimage+of+Grace+1536" },
    ],
    keyDates: [
      { year: 1455, date: "1455", event: "The Wars of the Roses begin", note: "Lancaster and York start 30 years of on-and-off fighting for the crown." },
      { year: 1485, date: "22 Aug 1485", event: "Battle of Bosworth", note: "Richard III killed; Henry Tudor wins the crown by battle." },
      { year: 1486, date: "Jan 1486", event: "Henry VII marries Elizabeth of York", note: "Lancaster and York united — the Tudor rose." },
      { year: 1487, date: "June 1487", event: "Battle of Stoke", note: "Henry VII defeats the supporters of the pretender Lambert Simnel." },
      { year: 1491, date: "28 June 1491", event: "Henry VIII born", note: "Second son of Henry VII." },
      { year: 1502, date: "April 1502", event: "Prince Arthur dies", note: "Henry becomes heir to the throne." },
      { year: 1509, date: "April 1509", event: "Henry VIII becomes king, aged 17", note: "A peaceful inheritance; he marries Catherine of Aragon in June." },
      { year: 1515, date: "1515", event: "Wolsey becomes Lord Chancellor and a cardinal", note: "He runs Henry's government until 1529." },
      { year: 1516, date: "Feb 1516", event: "Princess Mary born", note: "The only child of Henry and Catherine to survive." },
      { year: 1520, date: "June 1520", event: "Field of the Cloth of Gold", note: "Henry meets Francis I of France near Calais." },
      { year: 1527, date: "May 1527", event: "Charles V's troops sack Rome", note: "The Pope falls under the control of Catherine's nephew." },
      { year: 1529, date: "Oct 1529", event: "Wolsey falls from power", note: "He has failed to get the annulment." },
      { year: 1533, date: "Jan 1533", event: "Henry marries Anne Boleyn", note: "Cranmer declares the first marriage invalid in May; Elizabeth is born in September." },
      { year: 1534, date: "Nov 1534", event: "Act of Supremacy", note: "Henry becomes Supreme Head of the Church of England." },
      { year: 1535, date: "6 July 1535", event: "Sir Thomas More executed", note: "He refused to accept the new order." },
      { year: 1536, date: "1536", event: "Anne Boleyn executed (May); smaller monasteries closed; Pilgrimage of Grace (Oct)", note: "A year of crisis for Henry." },
      { year: 1537, date: "Oct 1537", event: "Prince Edward born; Jane Seymour dies", note: "Henry finally has a legitimate son." },
      { year: 1540, date: "1540", event: "Last monasteries closed (March); Thomas Cromwell executed (July)", note: "The Dissolution is complete; Henry's chief minister falls." },
      { year: 1547, date: "28 Jan 1547", event: "Henry VIII dies", note: "His nine-year-old son becomes Edward VI." },
    ],
    keyTerms: [
      { term: "Wars of the Roses", definition: "The civil wars (1455–1485) between the royal houses of Lancaster and York." },
      { term: "Dynasty", definition: "A family that rules a country for several generations, such as the Tudors (1485–1603)." },
      { term: "Pretender", definition: "Someone who falsely claims a right to the throne, such as Lambert Simnel or Perkin Warbeck." },
      { term: "Tudor rose", definition: "A symbol combining the red rose of Lancaster and the white rose of York, used by the Tudors to show the two houses united." },
      { term: "Renaissance", definition: "The rebirth of learning and the arts in Europe c. 1400–1600, inspired by ancient Greece and Rome. A Renaissance prince was educated, cultured and athletic." },
      { term: "Lord Chancellor", definition: "The king's most senior minister and head of the legal system." },
      { term: "Annulment", definition: "A ruling that a marriage was never valid in the first place. Henry's 'divorces' were annulments." },
      { term: "Dispensation", definition: "Special permission from the Pope to break a Church rule — for example, to marry a brother's widow." },
      { term: "Heir", definition: "The person who will inherit the throne next." },
      { term: "Great Matter", definition: "Henry VIII's name for his attempt to end his marriage to Catherine of Aragon." },
      { term: "Reformation", definition: "The 16th-century movement that challenged the Pope and the Catholic Church and led to Protestant churches." },
      { term: "Protestant", definition: "A Christian who rejected the Pope's authority and many Catholic teachings, following reformers such as Martin Luther." },
      { term: "Act of Supremacy", definition: "The 1534 law making the king Supreme Head of the Church of England." },
      { term: "Excommunication", definition: "Being expelled from the Catholic Church by the Pope." },
      { term: "Dissolution of the Monasteries", definition: "The closing of England's monasteries, nunneries and friaries by Henry VIII, 1536–1540, and the taking of their wealth." },
      { term: "Valor Ecclesiasticus", definition: "The 1535 survey of the wealth of the Church in England and Wales." },
      { term: "Pilgrimage of Grace", definition: "The 1536 rebellion in northern England, led by Robert Aske, against the Dissolution and religious change." },
      { term: "Propaganda", definition: "Images, words or events designed to shape what people think — for example, Holbein's portraits of Henry." },
    ],
  },
};
