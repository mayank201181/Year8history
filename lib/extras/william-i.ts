import type { TopicExtras } from "../types.ts";

const reignTimeline = `<svg viewBox="0 0 480 232" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of William's reign drawn to scale from 1066 to 1088. Above: 1066 Hastings and coronation; 1068 rebellions at Exeter and by Edwin and Morcar; 1069 to 1070 northern revolt and the Harrying of the North; 1086 Domesday survey; 1087 William dies. Below: 1070 Lanfranc becomes Archbishop of Canterbury; 1070 to 1071 Hereward the Wake at Ely; 1075 Revolt of the Earls; about 1078 the White Tower begun; 1086 Oath of Salisbury."><rect width="480" height="232" fill="#ffffff"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="240" y="20" text-anchor="middle" font-size="13" font-weight="bold">William's reign, 1066–1087 (drawn to scale)</text><rect x="30" y="112" width="420" height="16" fill="#c7d2fe" stroke="#334155"/><g stroke="#334155" stroke-width="0.6"><line x1="49.1" y1="124" x2="49.1" y2="128"/><line x1="68.2" y1="124" x2="68.2" y2="128"/><line x1="87.3" y1="124" x2="87.3" y2="128"/><line x1="106.4" y1="124" x2="106.4" y2="128"/><line x1="125.5" y1="124" x2="125.5" y2="128"/><line x1="144.5" y1="124" x2="144.5" y2="128"/><line x1="163.6" y1="124" x2="163.6" y2="128"/><line x1="182.7" y1="124" x2="182.7" y2="128"/><line x1="201.8" y1="124" x2="201.8" y2="128"/><line x1="220.9" y1="124" x2="220.9" y2="128"/><line x1="240" y1="124" x2="240" y2="128"/><line x1="259.1" y1="124" x2="259.1" y2="128"/><line x1="278.2" y1="124" x2="278.2" y2="128"/><line x1="297.3" y1="124" x2="297.3" y2="128"/><line x1="316.4" y1="124" x2="316.4" y2="128"/><line x1="335.5" y1="124" x2="335.5" y2="128"/><line x1="354.5" y1="124" x2="354.5" y2="128"/><line x1="373.6" y1="124" x2="373.6" y2="128"/><line x1="392.7" y1="124" x2="392.7" y2="128"/><line x1="411.8" y1="124" x2="411.8" y2="128"/><line x1="430.9" y1="124" x2="430.9" y2="128"/></g><text x="33" y="123">1066</text><g text-anchor="middle"><text x="106.4" y="123">1070</text><text x="201.8" y="123">1075</text><text x="297.3" y="123">1080</text><text x="392.7" y="123">1085</text></g><rect x="87.3" y="102" width="24.8" height="10" fill="#fecaca" stroke="#334155"/><g stroke="#1f2937"><line x1="45.3" y1="52" x2="45.3" y2="112"/><line x1="68.2" y1="72" x2="68.2" y2="112"/><line x1="99.7" y1="92" x2="99.7" y2="102"/><line x1="421.4" y1="72" x2="421.4" y2="112"/><line x1="444.3" y1="52" x2="444.3" y2="112"/><line x1="106.4" y1="128" x2="106.4" y2="191"/><line x1="116" y1="128" x2="116" y2="173"/><line x1="201.8" y1="128" x2="201.8" y2="155"/><line x1="259.1" y1="128" x2="259.1" y2="137"/><line x1="423.3" y1="128" x2="423.3" y2="173"/></g><g fill="#1f2937"><circle cx="45.3" cy="112" r="3"/><circle cx="68.2" cy="112" r="3"/><circle cx="421.4" cy="112" r="3"/><circle cx="444.3" cy="112" r="3"/><circle cx="106.4" cy="128" r="3"/><circle cx="116" cy="128" r="3"/><circle cx="201.8" cy="128" r="3"/><circle cx="259.1" cy="128" r="3"/><circle cx="423.3" cy="128" r="3"/></g><text x="30" y="48">1066: Hastings; coronation</text><text x="64" y="68">1068: Exeter, Edwin and Morcar rebel</text><text x="88" y="88">1069–70: northern revolt and Harrying</text><text x="425" y="68" text-anchor="end">1086: Domesday survey</text><text x="450" y="48" text-anchor="end">1087: William dies</text><text x="255" y="146">c. 1078: White Tower begun</text><text x="198" y="164">1075: Revolt of the Earls</text><text x="112" y="182">1070–71: Hereward the Wake at Ely</text><text x="470" y="182" text-anchor="end">1086: Oath of Salisbury</text><text x="102" y="200">1070: Lanfranc made Archbishop of Canterbury</text><text x="240" y="224" text-anchor="middle" font-style="italic">Most armed resistance was crushed in the first five years.</text></g></svg>`;

const term1Kings = `<svg viewBox="0 0 480 266" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison grid of the three Term 1 kings. William I in 1066: conquest backed by a claim; rivals Harold, Hardrada and Edgar; force needed at Hastings and afterwards; papal banner; king until his death in 1087. John in 1199: inherited from his brother Richard I; rival his nephew Arthur; fought Arthur and Philip II; quarrelled with the Pope and was excommunicated in 1209; forced to seal Magna Carta in 1215. Henry VIII in 1509: inherited from his father Henry VII; no serious rival; no force needed because his father won at Bosworth in 1485; loyal to Rome at first, broke with Rome in the 1530s; king until his death in 1547."><rect width="480" height="266" fill="#ffffff"/><g stroke="#334155"><rect x="6" y="30" width="468" height="28" fill="#c7d2fe"/><rect x="6" y="58" width="90" height="200" fill="#fde68a"/><rect x="96" y="58" width="126" height="200" fill="#bbf7d0"/><rect x="222" y="58" width="126" height="200" fill="#ffffff"/><rect x="348" y="58" width="126" height="200" fill="#ffffff"/><line x1="96" y1="30" x2="96" y2="258"/><line x1="222" y1="30" x2="222" y2="258"/><line x1="348" y1="30" x2="348" y2="258"/><line x1="6" y1="98" x2="474" y2="98"/><line x1="6" y1="138" x2="474" y2="138"/><line x1="6" y1="178" x2="474" y2="178"/><line x1="6" y1="218" x2="474" y2="218"/></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="240" y="20" font-size="13" font-weight="bold">How did the Term 1 kings come to power?</text><text x="159" y="48" font-weight="bold">William I (1066)</text><text x="285" y="48" font-weight="bold">John (1199)</text><text x="411" y="48" font-weight="bold">Henry VIII (1509)</text><text x="51" y="75" font-weight="bold">Route to</text><text x="51" y="89" font-weight="bold">the throne</text><text x="51" y="115" font-weight="bold">Rival</text><text x="51" y="129" font-weight="bold">claimants?</text><text x="51" y="155" font-weight="bold">Force</text><text x="51" y="169" font-weight="bold">needed?</text><text x="51" y="202" font-weight="bold">Church</text><text x="51" y="242" font-weight="bold">Outcome</text><text x="159" y="75">Conquest, backed</text><text x="159" y="89">by a claim</text><text x="285" y="75">Inherited from</text><text x="285" y="89">brother Richard I</text><text x="411" y="75">Inherited from</text><text x="411" y="89">father Henry VII</text><text x="159" y="115">Yes: Harold,</text><text x="159" y="129">Hardrada, Edgar</text><text x="285" y="115">Yes: his nephew</text><text x="285" y="129">Arthur of Brittany</text><text x="411" y="115">No serious rival</text><text x="411" y="129">in 1509</text><text x="159" y="155">Yes: Hastings,</text><text x="159" y="169">castles, Harrying</text><text x="285" y="155">Fought Arthur and</text><text x="285" y="169">Philip II of France</text><text x="411" y="155">No: his father won</text><text x="411" y="169">at Bosworth, 1485</text><text x="159" y="195">Papal banner;</text><text x="159" y="209">Lanfranc's reforms</text><text x="285" y="195">Quarrel with Pope;</text><text x="285" y="209">excommunicated 1209</text><text x="411" y="195">Loyal at first;</text><text x="411" y="209">broke with Rome 1530s</text><text x="159" y="235">King until his</text><text x="159" y="249">death in 1087</text><text x="285" y="235">Forced to seal</text><text x="285" y="249">Magna Carta, 1215</text><text x="411" y="235">King until his</text><text x="411" y="249">death in 1547</text></g></svg>`;

export const extras: TopicExtras = {
  hook: "In 1066 England had three kings, two invasions and three major battles — and the man who ended the year wearing the crown did not speak English. How does a foreign duke become a king, and then stay one for 21 years?",
  didYouKnow: [
    "William became Duke of Normandy in 1035 when he was only about 8 years old. Several of the men appointed to protect him were murdered during the violent years that followed.",
    "Halley's Comet appeared in the sky in late April 1066. The Bayeux Tapestry shows people pointing up at it in amazement — many people at the time saw comets as signs of disaster.",
    "The Bayeux Tapestry is not really a tapestry: it is an embroidery, stitched in coloured wool on linen, about 70 metres long. It was probably made in England, not France.",
    "At William's coronation on Christmas Day 1066, Norman guards outside Westminster Abbey mistook the cheering inside for a riot and set fire to nearby houses, according to the chronicler Orderic Vitalis.",
    "The name 'Domesday' was not William's. It came into use in the following century because, like the Day of Judgement ('Doomsday'), there was no appeal against what the book recorded.",
    "By the end of William's reign, Wulfstan of Worcester was the only English-born bishop left in England — every other bishop was a newcomer from across the Channel.",
  ],
  activities: [
    {
      title: "Build and test a motte-and-bailey castle",
      emoji: "🏰",
      materials: [
        "A tray or shallow box",
        "Sand, soil or modelling clay for the motte",
        "Lolly sticks or cocktail sticks for the palisade",
        "Card, tape and scissors for the keep and bailey buildings",
        "A timer",
      ],
      steps: [
        "Before you build, make a prediction: how long will it take you to build a castle that could be defended? Write your prediction down.",
        "Start the timer. Pile up a steep mound (the motte) at one end of the tray and dig a ditch around it.",
        "Make a small card keep for the top of the motte and surround it with a ring of lolly-stick palisade.",
        "Build a fenced courtyard (the bailey) beside the motte with a hall and stables, and add a sloping bridge from the bailey up to the motte.",
        "Stop the timer. Now play the attacker: where would you try to get in? Where is the castle strongest and where is it weakest?",
        "Finally, write two sentences explaining why the Normans could build hundreds of these so quickly — and why they later rebuilt the most important ones in stone.",
      ],
      maths:
        "The history behind it: motte-and-bailey castles were made from earth and timber, materials found almost everywhere, and dug by gangs of forced English labourers. That speed is why a small number of Normans could dominate England soon after 1066 — a castle in every important town made each Norman soldier far more powerful. Your weakest points (wood burns, earth slumps) are exactly why key castles such as the Tower of London were later rebuilt in stone.",
    },
    {
      title: "Run your own Domesday survey",
      emoji: "📜",
      materials: ["A notebook or spreadsheet", "A pen", "Permission to survey your home, your street or your condo block"],
      steps: [
        "Copy the Domesday-style questions: Who held this place before? Who holds it now? How many people (heads of household) live here? What resources are there (rooms, appliances, bikes, trees, shops)? What is it worth now, and what was it worth when it was first built?",
        "Survey one place carefully — your home or a small part of your neighbourhood — and record your answers in a table.",
        "Ask an older family member to help you answer the 'before' questions.",
        "Look at your finished survey and list three things it does NOT tell you (for example, how people felt, what they did each day, or who was left out).",
        "Write a short paragraph: if a ruler had your survey for every home in Singapore, what could they do with it? Would it give them power?",
      ],
      maths:
        "The history behind it: Domesday recorded land, workers and values for over 13,000 places because information meant tax and control. Your survey shows both its power and its limits — it counts things, but says little about ordinary people's lives, and it reflects what the surveyor chose to ask. That is exactly how historians use Domesday today: as precise evidence about wealth and land, but not a complete picture of Norman England.",
    },
  ],
  bonusDiagrams: [
    {
      title: "William's reign to scale, 1066–1087",
      svg: reignTimeline,
      caption: "Most armed resistance came in the first five years. After the Harrying and the fall of Ely, the big projects were about control: castles in stone, the Church, Domesday and the Oath of Salisbury.",
    },
    {
      title: "Comparing the Term 1 kings",
      svg: term1Kings,
      caption: "Under what circumstances did kings rise to power? William needed force and a claim; John inherited a disputed crown; Henry VIII inherited peacefully a throne his father had won in battle.",
    },
  ],
  history: {
    title: "The tapestry that nearly became a wagon cover",
    story:
      "The Bayeux Tapestry has survived more than 900 years — sometimes only just. The earliest written record of it is a list of Bayeux Cathedral's treasures from 1476, which says it was hung in the cathedral once a year. During the French Revolution in the 1790s, the story goes, soldiers took it to use as a cover for a military wagon, until a local lawyer swapped it for other cloth and saved it. Napoleon put it on display in Paris in 1803–04 while he planned his own invasion of England. In the Second World War, German researchers studied it as 'proof' of a Norse heritage, and in 1944 it was moved to the Louvre in Paris — where, after the city was liberated, it was kept safe before returning home to Bayeux.",
  },
};
