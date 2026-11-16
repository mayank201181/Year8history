import type { TopicExtras } from "../types.ts";

const familySvg = `<svg viewBox="0 0 480 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tudor family tree: Henry VII and Elizabeth of York had Arthur, Henry VIII and Margaret; Henry VIII's three children Edward VI, Mary I and Elizabeth I each reigned in turn">
<rect x="0" y="0" width="480" height="330" fill="#ffffff"/>
<text x="240" y="20" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">The Tudor succession</text>
<rect x="95" y="32" width="130" height="40" rx="6" fill="#fecaca" stroke="#334155"/>
<text x="160" y="49" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Henry VII</text>
<text x="160" y="64" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">reigned 1485–1509</text>
<rect x="255" y="32" width="130" height="40" rx="6" fill="#fecaca" stroke="#334155"/>
<text x="320" y="49" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Elizabeth of York</text>
<text x="320" y="64" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">married 1486</text>
<line x1="225" y1="52" x2="255" y2="52" stroke="#334155" stroke-width="2"/>
<line x1="240" y1="52" x2="240" y2="92" stroke="#334155" stroke-width="1.5"/>
<line x1="75" y1="92" x2="405" y2="92" stroke="#334155" stroke-width="1.5"/>
<line x1="75" y1="92" x2="75" y2="104" stroke="#334155" stroke-width="1.5"/>
<line x1="240" y1="92" x2="240" y2="104" stroke="#334155" stroke-width="1.5"/>
<line x1="405" y1="92" x2="405" y2="104" stroke="#334155" stroke-width="1.5"/>
<rect x="15" y="104" width="120" height="40" rx="6" fill="#e5e7eb" stroke="#334155"/>
<text x="75" y="121" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Arthur</text>
<text x="75" y="136" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">1486–1502</text>
<rect x="175" y="104" width="130" height="40" rx="6" fill="#fde68a" stroke="#334155" stroke-width="2"/>
<text x="240" y="121" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Henry VIII</text>
<text x="240" y="136" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">reigned 1509–1547</text>
<rect x="340" y="104" width="130" height="40" rx="6" fill="#e5e7eb" stroke="#334155"/>
<text x="405" y="121" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Margaret</text>
<text x="405" y="136" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">Queen of Scotland</text>
<line x1="240" y1="144" x2="240" y2="176" stroke="#334155" stroke-width="1.5"/>
<line x1="80" y1="176" x2="400" y2="176" stroke="#334155" stroke-width="1.5"/>
<line x1="80" y1="176" x2="80" y2="188" stroke="#334155" stroke-width="1.5"/>
<line x1="240" y1="176" x2="240" y2="188" stroke="#334155" stroke-width="1.5"/>
<line x1="400" y1="176" x2="400" y2="188" stroke="#334155" stroke-width="1.5"/>
<text x="250" y="166" font-family="sans-serif" font-size="10" fill="#1f2937">six marriages</text>
<rect x="6" y="188" width="148" height="58" rx="6" fill="#bae6fd" stroke="#334155"/>
<text x="80" y="205" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Mary I</text>
<text x="80" y="220" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">reigned 1553–1558</text>
<text x="80" y="235" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">mother: Catherine of Aragon</text>
<rect x="166" y="188" width="148" height="58" rx="6" fill="#bbf7d0" stroke="#334155"/>
<text x="240" y="205" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Elizabeth I</text>
<text x="240" y="220" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">reigned 1558–1603</text>
<text x="240" y="235" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">mother: Anne Boleyn</text>
<rect x="326" y="188" width="148" height="58" rx="6" fill="#c7d2fe" stroke="#334155"/>
<text x="400" y="205" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Edward VI</text>
<text x="400" y="220" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">reigned 1547–1553</text>
<text x="400" y="235" font-family="sans-serif" font-size="10" fill="#1f2937" text-anchor="middle">mother: Jane Seymour</text>
<text x="240" y="274" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Order of succession set by the 1544 Act: Edward, then Mary, then Elizabeth.</text>
<text x="240" y="292" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">None of the three had children, so in 1603 the crown passed to</text>
<text x="240" y="310" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Margaret's great-grandson, James VI of Scotland (James I of England).</text>
</svg>`;

const chainSvg = `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chain of events in the Break with Rome: 1527 Henry asks for an annulment; 1529 the Pope refuses and Wolsey falls; January 1533 Henry secretly marries a pregnant Anne Boleyn; May 1533 Cranmer declares the first marriage void; 1534 the Act of Supremacy; 1536 the Dissolution of the Monasteries begins">
<rect x="0" y="0" width="480" height="260" fill="#ffffff"/>
<text x="240" y="20" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">From the Great Matter to the Dissolution</text>
<rect x="10" y="36" width="140" height="66" rx="8" fill="#bae6fd" stroke="#334155"/>
<text x="80" y="56" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">1527</text>
<text x="80" y="73" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Henry asks the Pope</text>
<text x="80" y="89" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">to annul his marriage</text>
<rect x="170" y="36" width="140" height="66" rx="8" fill="#bae6fd" stroke="#334155"/>
<text x="240" y="56" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">1529</text>
<text x="240" y="73" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">No annulment;</text>
<text x="240" y="89" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Wolsey falls</text>
<rect x="330" y="36" width="140" height="66" rx="8" fill="#fecaca" stroke="#334155"/>
<text x="400" y="56" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">January 1533</text>
<text x="400" y="73" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Henry secretly marries</text>
<text x="400" y="89" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">a pregnant Anne Boleyn</text>
<rect x="330" y="150" width="140" height="66" rx="8" fill="#fecaca" stroke="#334155"/>
<text x="400" y="170" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">May 1533</text>
<text x="400" y="187" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Cranmer declares the</text>
<text x="400" y="203" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">first marriage void</text>
<rect x="170" y="150" width="140" height="66" rx="8" fill="#fde68a" stroke="#334155"/>
<text x="240" y="170" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">1534</text>
<text x="240" y="187" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Act of Supremacy:</text>
<text x="240" y="203" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Henry heads the Church</text>
<rect x="10" y="150" width="140" height="66" rx="8" fill="#bbf7d0" stroke="#334155"/>
<text x="80" y="170" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">1536</text>
<text x="80" y="187" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Dissolution of the</text>
<text x="80" y="203" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">monasteries begins</text>
<line x1="150" y1="69" x2="162" y2="69" stroke="#334155" stroke-width="2"/>
<polygon points="162,64 170,69 162,74" fill="#334155"/>
<line x1="310" y1="69" x2="322" y2="69" stroke="#334155" stroke-width="2"/>
<polygon points="322,64 330,69 322,74" fill="#334155"/>
<line x1="400" y1="102" x2="400" y2="142" stroke="#334155" stroke-width="2"/>
<polygon points="395,142 400,150 405,142" fill="#334155"/>
<line x1="330" y1="183" x2="318" y2="183" stroke="#334155" stroke-width="2"/>
<polygon points="318,178 310,183 318,188" fill="#334155"/>
<line x1="170" y1="183" x2="158" y2="183" stroke="#334155" stroke-width="2"/>
<polygon points="158,178 150,183 158,188" fill="#334155"/>
<rect x="20" y="232" width="12" height="12" fill="#bae6fd" stroke="#334155"/>
<text x="38" y="242" font-family="sans-serif" font-size="10" fill="#1f2937">the problem</text>
<rect x="120" y="232" width="12" height="12" fill="#fecaca" stroke="#334155"/>
<text x="138" y="242" font-family="sans-serif" font-size="10" fill="#1f2937">the trigger</text>
<rect x="220" y="232" width="12" height="12" fill="#fde68a" stroke="#334155"/>
<text x="238" y="242" font-family="sans-serif" font-size="10" fill="#1f2937">power</text>
<rect x="300" y="232" width="12" height="12" fill="#bbf7d0" stroke="#334155"/>
<text x="318" y="242" font-family="sans-serif" font-size="10" fill="#1f2937">money</text>
</svg>`;

export const extras: TopicExtras = {
  hook: "Henry VIII was never meant to be king: he became heir only when his older brother died at 15. Yet he tore England away from the Pope, married six times and made himself head of the Church — so how did a 'spare' prince become England's most powerful king?",
  didYouKnow: [
    "In 1521 Pope Leo X gave Henry the title 'Defender of the Faith' for a book attacking Martin Luther. Henry kept the title after breaking with Rome, and British monarchs still use it — look for 'FID DEF' or 'F D' on British coins.",
    "Henry was 17 when he became king in April 1509, and he married Catherine of Aragon about seven weeks later.",
    "Henry's warship the *Mary Rose* sank in the Solent in July 1545 while sailing out to fight a French fleet. Its wreck was raised in 1982 and is now a museum in Portsmouth.",
    "All three of Henry's children who survived him became monarchs — Edward VI, Mary I and Elizabeth I — but none of them had children, so the Tudor dynasty ended in 1603.",
    "Anne of Cleves, the wife Henry rejected after six months, outlived all of his other wives. She died in 1557.",
    "Henry composed music: the song 'Pastime with Good Company' is credited to him. The legend that he wrote 'Greensleeves' is almost certainly untrue — the tune dates from later in the century.",
  ],
  activities: [
    {
      title: "Coin propaganda detective",
      emoji: "🪙",
      materials: ["Three or four different coins (any country)", "Thin paper", "A soft pencil or crayon", "A magnifying glass if you have one"],
      steps: [
        "Lay paper over each coin and rub gently with the side of the pencil to make a coin rubbing.",
        "List everything on each coin: pictures, words, dates, symbols. What does each one tell you about the country or government that made it?",
        "Ask 'who benefits?': what message does the government want everyone who handles this coin to receive?",
        "Now design a coin for Henry VIII after 1534. Choose a portrait pose, a symbol (a Tudor rose? a crown?) and a short title showing he is Supreme Head of the Church.",
        "Compare your design with a picture of a real Henry VIII coin online. What did you include that he did too?",
      ],
      history: "Coins were the mass media of Tudor England — almost everyone handled them. Henry used coins, Holbein's portraits and ceremonies to project power. His coins also tell a story he didn't intend: from 1544 he 'debased' them with cheaper copper, and as the silver wore off his raised nose he earned the nickname 'Old Coppernose'.",
    },
    {
      title: "Who inherits? The succession puzzle",
      emoji: "👑",
      materials: ["Sticky notes or small pieces of paper", "A pen", "A coin or button to be 'the crown'"],
      steps: [
        "Write a sticky note for each person: Henry VIII, his six wives, Mary (born 1516), Elizabeth (born 1533), Edward (born 1537) and Henry's sister Margaret.",
        "Arrange them as a family tree on a table, with each child under the right mother.",
        "Act of Succession, 1534: put the crown on the person who would inherit if Henry died (Elizabeth — Mary has been declared illegitimate).",
        "Act of Succession, 1536: Elizabeth is declared illegitimate too, and Edward is not yet born. Where does the crown go now? Leave it hovering — the law left it to Jane Seymour's future children or whoever Henry named.",
        "Act of Succession, 1544: line up Edward, Mary and Elizabeth in order. Move the crown down the line, adding their reigns: 1547, 1553, 1558.",
        "Finally move the crown to Margaret's side of the tree for 1603. Why did it end up in Scotland?",
      ],
      history: "Henry used Acts of Parliament to decide who would inherit — a sign of how much power Parliament gained during the Break with Rome. The puzzle shows why the lack of a male heir worried Henry so much: every marriage change rewrote the line of succession, and in 1536 there was briefly no legal heir at all.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The Tudor succession",
      svg: familySvg,
      caption: "Henry VIII's six marriages produced three children who reigned in turn. Because none of them had children, the crown passed through Henry's sister Margaret to the Stuart kings of Scotland.",
    },
    {
      title: "From the Great Matter to the Dissolution",
      svg: chainSvg,
      caption: "The annulment problem came first; Anne's pregnancy was the trigger that made the break urgent in 1533; power and money followed once Henry had cut ties with Rome.",
    },
  ],
  story: {
    title: "The portrait, the disguise and the 'Flanders mare'",
    story: "In 1539 Thomas Cromwell arranged for Henry to marry Anne, sister of the German Duke of Cleves, to win Protestant-leaning allies. Henry's court painter, Hans Holbein, was sent to paint her.\n\nOn 1 January 1540, following a courtly custom, Henry burst in on Anne at Rochester in disguise. She did not recognise the large stranger, and the meeting went badly. Henry reportedly told Cromwell, 'I like her not.' They married on 6 January anyway; by July the marriage was annulled, and Cromwell was executed that same month.\n\nYou may have heard that Henry called Anne a 'Flanders mare'. No record from Henry's lifetime says so — the insult first appears in print more than a century later. Anne, meanwhile, accepted the annulment, received houses and an income, and outlived all his other wives.",
  },
};
