import type { TopicGuide } from "../../types.ts";

// ---------------------------------------------------------------------------
// William I and the Norman Conquest — Term 1 enquiry:
// "Under what circumstances did kings rise to power?"
// ---------------------------------------------------------------------------

const familyTree = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified family tree for 1066. King Æthelred II's son Edmund Ironside was the grandfather of Edgar Ætheling. Æthelred and Emma of Normandy were the parents of Edward the Confessor, who married Edith, Earl Godwin's daughter, and had no children. Emma's brother Richard II of Normandy was the grandfather of Duke William."><rect width="480" height="300" fill="#ffffff"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><rect x="20" y="12" width="160" height="34" rx="5" fill="#bae6fd" stroke="#334155"/><text x="100" y="26" font-weight="bold">Æthelred II</text><text x="100" y="40">King of England, d. 1016</text><rect x="200" y="12" width="120" height="34" rx="5" fill="#fde68a" stroke="#334155"/><text x="260" y="26" font-weight="bold">Emma of Normandy</text><text x="260" y="40">his 2nd wife</text><rect x="340" y="12" width="130" height="34" rx="5" fill="#fde68a" stroke="#334155"/><text x="405" y="26" font-weight="bold">Richard II, Duke</text><text x="405" y="40">Emma's brother</text><line x1="180" y1="27" x2="200" y2="27" stroke="#334155"/><line x1="180" y1="31" x2="200" y2="31" stroke="#334155"/><line x1="320" y1="29" x2="340" y2="29" stroke="#334155" stroke-dasharray="3 2"/><line x1="85" y1="46" x2="85" y2="90" stroke="#334155"/><path d="M190 31 V68 H260 V90" fill="none" stroke="#334155"/><line x1="405" y1="46" x2="405" y2="90" stroke="#334155"/><rect x="20" y="90" width="130" height="32" rx="5" fill="#bae6fd" stroke="#334155"/><text x="85" y="104" font-weight="bold">Edmund Ironside</text><text x="85" y="117">son of 1st marriage</text><rect x="190" y="90" width="140" height="32" rx="5" fill="#bae6fd" stroke="#334155"/><text x="260" y="104" font-weight="bold">Edward the Confessor</text><text x="260" y="117">King 1042–1066</text><rect x="340" y="90" width="130" height="32" rx="5" fill="#fde68a" stroke="#334155"/><text x="405" y="104" font-weight="bold">Robert I, Duke</text><text x="405" y="117">d. 1035</text><line x1="85" y1="122" x2="85" y2="165" stroke="#334155"/><line x1="260" y1="122" x2="260" y2="165" stroke="#334155"/><line x1="405" y1="122" x2="405" y2="165" stroke="#334155"/><rect x="20" y="165" width="130" height="32" rx="5" fill="#bae6fd" stroke="#334155"/><text x="85" y="179" font-weight="bold">Edward the Exile</text><text x="85" y="192">d. 1057</text><rect x="190" y="165" width="140" height="32" rx="5" fill="#c7d2fe" stroke="#334155"/><text x="260" y="179">married Edith,</text><text x="260" y="192">Earl Godwin's daughter</text><rect x="340" y="165" width="130" height="32" rx="5" fill="#bbf7d0" stroke="#334155"/><text x="405" y="179" font-weight="bold">William</text><text x="405" y="192">Duke of Normandy 1035</text><line x1="85" y1="197" x2="85" y2="235" stroke="#334155"/><line x1="260" y1="197" x2="260" y2="235" stroke="#334155" stroke-dasharray="3 2"/><rect x="20" y="235" width="130" height="32" rx="5" fill="#bbf7d0" stroke="#334155"/><text x="85" y="249" font-weight="bold">Edgar Ætheling</text><text x="85" y="262">about 14 in 1066</text><rect x="190" y="235" width="140" height="32" rx="5" fill="#fecaca" stroke="#334155"/><text x="260" y="249" font-weight="bold">NO CHILDREN</text><text x="260" y="262">→ succession crisis</text><text x="405" y="250" font-style="italic">claims through</text><text x="405" y="264" font-style="italic">great-aunt Emma</text><text x="240" y="290">Simplified. Harold Godwinson (Edith's brother) had no royal blood.</text></g></svg>`;

const timeline1066 = `<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of 1066 drawn to scale from January to December. Edward dies and Harold is crowned on 5 and 6 January; Halley's comet is seen in late April; William's fleet waits for a wind in August and September; Harold sends his southern army home on 8 September; Fulford Gate on 20 September; Stamford Bridge on 25 September; William lands at Pevensey on 28 September; Hastings on 14 October; William crowned on 25 December."><rect width="480" height="240" fill="#ffffff"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="240" y="20" text-anchor="middle" font-size="13" font-weight="bold">1066 drawn to scale (1 January – 31 December)</text><rect x="30" y="118" width="420" height="16" fill="#c7d2fe" stroke="#334155"/><g stroke="#334155" stroke-width="0.6"><line x1="65.7" y1="118" x2="65.7" y2="134"/><line x1="97.9" y1="118" x2="97.9" y2="134"/><line x1="133.5" y1="118" x2="133.5" y2="134"/><line x1="168.1" y1="118" x2="168.1" y2="134"/><line x1="203.8" y1="118" x2="203.8" y2="134"/><line x1="238.3" y1="118" x2="238.3" y2="134"/><line x1="274" y1="118" x2="274" y2="134"/><line x1="309.7" y1="118" x2="309.7" y2="134"/><line x1="344.2" y1="118" x2="344.2" y2="134"/><line x1="379.9" y1="118" x2="379.9" y2="134"/><line x1="414.4" y1="118" x2="414.4" y2="134"/></g><g text-anchor="middle"><text x="47.8" y="130">J</text><text x="81.8" y="130">F</text><text x="115.7" y="130">M</text><text x="150.8" y="130">A</text><text x="186" y="130">M</text><text x="221" y="130">J</text><text x="256.2" y="130">J</text><text x="291.9" y="130">A</text><text x="327" y="130">S</text><text x="362" y="130">O</text><text x="397.2" y="130">N</text><text x="432.2" y="130">D</text></g><g stroke="#1f2937"><line x1="34.6" y1="74" x2="34.6" y2="118"/><line x1="160" y1="99" x2="160" y2="118"/><line x1="313" y1="50" x2="313" y2="104"/><line x1="442" y1="99" x2="442" y2="118"/><line x1="317.7" y1="134" x2="317.7" y2="146"/><line x1="331.5" y1="134" x2="331.5" y2="164"/><line x1="337.3" y1="134" x2="337.3" y2="182"/><line x1="340.7" y1="134" x2="340.7" y2="200"/><line x1="359.1" y1="134" x2="359.1" y2="146"/></g><g fill="#1f2937"><circle cx="34.6" cy="118" r="3"/><circle cx="160" cy="118" r="3"/><circle cx="442" cy="118" r="3"/><circle cx="317.7" cy="134" r="2.5"/><circle cx="331.5" cy="134" r="2.5"/><circle cx="337.3" cy="134" r="2.5"/><circle cx="340.7" cy="134" r="2.5"/><circle cx="359.1" cy="134" r="3"/></g><rect x="286.6" y="104" width="52.9" height="10" fill="#fde68a" stroke="#334155"/><text x="30" y="70">5–6 Jan: Edward dies; Harold crowned</text><text x="160" y="95" text-anchor="middle">late Apr: Halley's comet seen</text><text x="345" y="45" text-anchor="end">Aug–Sep: William's fleet waits for the right wind</text><text x="470" y="95" text-anchor="end">25 Dec: William crowned</text><g text-anchor="end"><text x="312" y="150">8 Sep: Harold sends his southern army home</text><text x="326" y="168">20 Sep: Fulford Gate (Hardrada wins)</text><text x="332" y="186">25 Sep: Stamford Bridge (Harold wins)</text><text x="336" y="204">28 Sep: William lands at Pevensey</text></g><text x="364" y="150" font-weight="bold">14 Oct: Hastings</text><text x="364" y="164">Harold killed</text><text x="240" y="230" text-anchor="middle" font-style="italic">Three battles and an invasion in under four weeks.</text></g></svg>`;

const invasionMap = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic map, not to scale, of the invasions of 1066. Harald Hardrada and Tostig sail from Norway to the Humber near York. Battle 1 at Fulford Gate and battle 2 at Stamford Bridge are near York. Harold marches between London and York. William sails from St-Valery-sur-Somme and lands at Pevensey, number 3. Battle 4 is at Hastings."><rect width="480" height="320" fill="#ffffff"/><polygon points="215,15 235,60 255,95 268,122 258,142 282,165 272,172 305,178 318,196 300,214 318,226 312,242 285,250 255,253 200,258 150,262 110,268 62,280 90,258 135,236 105,222 72,212 98,190 92,168 118,152 140,148 133,118 122,92 148,68 175,35" fill="#bbf7d0" stroke="#334155"/><polygon points="400,0 480,0 480,100 462,92 440,70 420,45" fill="#c7d2fe" stroke="#334155"/><path d="M200,320 L230,300 L290,292 L330,284 L350,268 L370,240 L480,230 L480,320 Z" fill="#fde68a" stroke="#334155"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="8" y="16" font-weight="bold">Schematic map: NOT to scale</text><text x="170" y="100" text-anchor="middle" font-weight="bold" font-size="12">ENGLAND</text><text x="455" y="25" text-anchor="middle" font-weight="bold">NORWAY</text><text x="430" y="265" text-anchor="middle" font-weight="bold">FRANCE</text><text x="255" y="313" text-anchor="middle" font-weight="bold">NORMANDY</text><text x="110" y="306" text-anchor="middle" font-style="italic">English Channel</text><path d="M440,75 Q330,70 262,138" fill="none" stroke="#1f2937" stroke-width="2"/><polygon points="262,138 272.6,134.4 265.6,127.4" fill="#1f2937"/><text x="405" y="50" text-anchor="end">Hardrada and Tostig</text><text x="405" y="63" text-anchor="end">(about 300 ships)</text><line x1="333" y1="282" x2="275" y2="259.5" stroke="#1f2937" stroke-width="2"/><polygon points="266,256 277.1,254.9 273.5,264.3" fill="#1f2937"/><text x="205" y="276" text-anchor="middle">William's fleet</text><text x="205" y="289" text-anchor="middle">27–28 Sep</text><circle cx="335" cy="283" r="3" fill="#1f2937"/><text x="340" y="300">St-Valery-sur-Somme</text><line x1="230" y1="156" x2="270" y2="213" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="5 3"/><line x1="274" y1="226" x2="282" y2="240" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="5 3"/><text x="180" y="178" text-anchor="middle" font-weight="bold">Harold marches</text><text x="180" y="191" text-anchor="middle">London → York → London</text><text x="180" y="204" text-anchor="middle">(about 190 miles each way)</text><circle cx="224" cy="130" r="3" fill="#1f2937"/><text x="218" y="134" text-anchor="end">York</text><circle cx="272" cy="220" r="3" fill="#1f2937"/><text x="265" y="224" text-anchor="end">London</text><g stroke="#1f2937" fill="#fecaca"><circle cx="226" cy="147" r="8"/><circle cx="245" cy="128" r="8"/><circle cx="256" cy="252" r="8"/><circle cx="284" cy="248" r="8"/></g><g text-anchor="middle" font-weight="bold"><text x="226" y="151">1</text><text x="245" y="132">2</text><text x="256" y="256">3</text><text x="284" y="252">4</text></g><rect x="326" y="110" width="150" height="98" rx="4" fill="#ffffff" stroke="#334155"/><text x="333" y="126" font-weight="bold">Key</text><text x="333" y="144">1 Fulford Gate, 20 Sep</text><text x="333" y="161">2 Stamford Bridge, 25 Sep</text><text x="333" y="178">3 William lands, 28 Sep</text><text x="333" y="195">4 Hastings, 14 Oct</text></g></svg>`;

const motteAndBailey = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified side view of a motte-and-bailey castle: a wooden keep inside a palisade on top of an earth mound called the motte, a bridge down to the bailey courtyard with a hall, chapel and stables inside a wooden palisade, and ditches around the outside."><rect width="480" height="300" fill="#ffffff"/><g font-family="sans-serif" font-size="11" fill="#1f2937"><text x="240" y="22" text-anchor="middle" font-size="13" font-weight="bold">A motte-and-bailey castle (side view, simplified)</text><line x1="10" y1="250" x2="470" y2="250" stroke="#334155"/><g fill="#bae6fd" stroke="#334155"><path d="M28,250 Q43,272 58,250 Z"/><path d="M222,250 Q236,272 250,250 Z"/><path d="M440,250 Q455,272 470,250 Z"/></g><path d="M58,250 C85,250 100,165 118,160 L162,160 C180,165 195,250 222,250 Z" fill="#bbf7d0" stroke="#334155"/><rect x="124" y="112" width="32" height="40" fill="#fde68a" stroke="#334155"/><polygon points="120,112 140,96 160,112" fill="#fecaca" stroke="#334155"/><rect x="114" y="150" width="52" height="10" fill="#fde68a" stroke="#334155"/><g stroke="#334155"><line x1="122" y1="150" x2="122" y2="160"/><line x1="131" y1="150" x2="131" y2="160"/><line x1="140" y1="150" x2="140" y2="160"/><line x1="149" y1="150" x2="149" y2="160"/><line x1="158" y1="150" x2="158" y2="160"/></g><line x1="168" y1="158" x2="262" y2="230" stroke="#334155" stroke-width="2"/><line x1="168" y1="164" x2="258" y2="234" stroke="#334155" stroke-width="2"/><rect x="252" y="214" width="6" height="36" fill="#fde68a" stroke="#334155"/><rect x="434" y="214" width="6" height="36" fill="#fde68a" stroke="#334155"/><line x1="258" y1="244" x2="434" y2="244" stroke="#334155" stroke-dasharray="4 3"/><rect x="290" y="210" width="60" height="40" fill="#fde68a" stroke="#334155"/><polygon points="286,210 320,190 354,210" fill="#fecaca" stroke="#334155"/><rect x="370" y="220" width="28" height="30" fill="#fde68a" stroke="#334155"/><polygon points="366,220 384,204 402,220" fill="#fecaca" stroke="#334155"/><rect x="405" y="228" width="26" height="22" fill="#fde68a" stroke="#334155"/><polygon points="403,228 418,218 433,228" fill="#fecaca" stroke="#334155"/><text x="320" y="236" text-anchor="middle">hall</text><text x="140" y="70" text-anchor="middle">Wooden keep: lookout and last refuge</text><line x1="140" y1="74" x2="140" y2="95" stroke="#334155"/><text x="140" y="215" text-anchor="middle" font-size="13" font-weight="bold">Motte</text><text x="140" y="231" text-anchor="middle">(earth mound)</text><text x="212" y="182">bridge</text><text x="345" y="160" text-anchor="middle" font-weight="bold">Bailey (courtyard):</text><text x="345" y="174" text-anchor="middle">hall, chapel, stables, stores</text><text x="470" y="192" text-anchor="end">palisade (wooden fence)</text><line x1="437" y1="195" x2="437" y2="214" stroke="#334155"/><text x="360" y="48" text-anchor="middle">Earth and timber: quick to build</text><text x="360" y="62" text-anchor="middle">→ later rebuilt in stone</text><text x="43" y="285" text-anchor="middle">ditch</text><text x="236" y="285" text-anchor="middle">ditch</text><text x="455" y="285" text-anchor="middle">ditch</text></g></svg>`;

const feudalPyramid = `<svg viewBox="0 0 480 298" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Feudal pyramid. The king at the top owns all the land. Below him the tenants-in-chief, barons and bishops. Below them knights, who owe about 40 days' military service a year. At the bottom the peasants, mostly villeins, about 9 in 10 people, who farm the land. An arrow down the left shows land granted downwards; an arrow up the right shows service and loyalty owed upwards."><rect width="480" height="298" fill="#ffffff"/><g stroke="#334155"><polygon points="240,28 276.9,78 203.1,78" fill="#fde68a"/><polygon points="203.1,78 276.9,78 322.6,140 157.4,140" fill="#c7d2fe"/><polygon points="157.4,140 322.6,140 368.4,202 111.6,202" fill="#bae6fd"/><polygon points="111.6,202 368.4,202 420,272 60,272" fill="#bbf7d0"/></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="240" y="68" font-size="13" font-weight="bold">KING</text><text x="240" y="110" font-size="12">Tenants-in-chief</text><text x="240" y="128">(barons and bishops)</text><text x="240" y="166" font-size="12" font-weight="bold">Knights</text><text x="240" y="186">(about 40 days' service a year)</text><text x="240" y="228" font-size="12" font-weight="bold">Peasants (mostly villeins)</text><text x="240" y="252">farm the land; about 9 in 10 people</text><text x="290" y="44" text-anchor="start">The king owns ALL the land</text><text x="20" y="160" transform="rotate(-90 20 160)">LAND granted downwards</text><text x="462" y="160" transform="rotate(90 462 160)">SERVICE and LOYALTY owed upwards</text><text x="240" y="290">Simplified: real feudal ties were messier than a neat triangle.</text></g><line x1="36" y1="60" x2="36" y2="248" stroke="#1f2937" stroke-width="2"/><polygon points="36,262 30,248 42,248" fill="#1f2937"/><line x1="444" y1="260" x2="444" y2="74" stroke="#1f2937" stroke-width="2"/><polygon points="444,60 438,74 450,74" fill="#1f2937"/></svg>`;

const domesdayQuestions = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Six Domesday questions matched to why William wanted the answers: who held the land in King Edward's day, to show the Normans as rightful heirs; who holds it now, to show who owes service; how many hides, to work out the geld tax; how many ploughs, mills and fishponds, to measure wealth; how many villeins, cottars and slaves, to count the workforce; what it was worth then and now, to show damage such as waste land."><rect width="480" height="300" fill="#ffffff"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="240" y="16" font-size="12" font-weight="bold">What the Domesday commissioners asked, and why</text><text x="120" y="33" font-weight="bold">Questions asked in each place</text><text x="363" y="33" font-weight="bold">Why William wanted to know</text><g stroke="#334155"><rect x="10" y="40" width="220" height="32" rx="4" fill="#bae6fd"/><rect x="10" y="80" width="220" height="32" rx="4" fill="#bae6fd"/><rect x="10" y="120" width="220" height="32" rx="4" fill="#bae6fd"/><rect x="10" y="160" width="220" height="32" rx="4" fill="#bae6fd"/><rect x="10" y="200" width="220" height="32" rx="4" fill="#bae6fd"/><rect x="10" y="240" width="220" height="32" rx="4" fill="#bae6fd"/><rect x="256" y="40" width="214" height="32" rx="4" fill="#fde68a"/><rect x="256" y="80" width="214" height="32" rx="4" fill="#fde68a"/><rect x="256" y="120" width="214" height="32" rx="4" fill="#fde68a"/><rect x="256" y="160" width="214" height="32" rx="4" fill="#fde68a"/><rect x="256" y="200" width="214" height="32" rx="4" fill="#fde68a"/><rect x="256" y="240" width="214" height="32" rx="4" fill="#fde68a"/><line x1="232" y1="56" x2="248" y2="56"/><line x1="232" y1="96" x2="248" y2="96"/><line x1="232" y1="136" x2="248" y2="136"/><line x1="232" y1="176" x2="248" y2="176"/><line x1="232" y1="216" x2="248" y2="216"/><line x1="232" y1="256" x2="248" y2="256"/></g><g fill="#1f2937"><polygon points="254,56 247,52 247,60"/><polygon points="254,96 247,92 247,100"/><polygon points="254,136 247,132 247,140"/><polygon points="254,176 247,172 247,180"/><polygon points="254,216 247,212 247,220"/><polygon points="254,256 247,252 247,260"/></g><text x="120" y="60">Who held it in King Edward's day?</text><text x="120" y="100">Who holds it now?</text><text x="120" y="140">How many hides (tax units)?</text><text x="120" y="180">How many ploughs, mills, fishponds?</text><text x="120" y="220">How many villeins, cottars, slaves?</text><text x="120" y="260">What was it worth then, and now?</text><text x="363" y="60">Shows Normans as rightful heirs</text><text x="363" y="100">Shows who owes the king service</text><text x="363" y="140">Works out the geld (land tax) due</text><text x="363" y="180">Measures wealth that can be taxed</text><text x="363" y="220">Counts the workforce on the land</text><text x="363" y="260">Shows damage, e.g. "waste" land</text><text x="240" y="291">Over 13,000 places recorded; London, Winchester and the far north were left out.</text></g></svg>`;

const factorWeb = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Causation web. Centre: William I, crowned 25 December 1066, still king when he died in 1087. Left, winning the crown: strength of claim, luck, military planning. Right, keeping the crown: Church backing, ruthlessness, control systems. Dashed links: the Pope backs his claim; planning let him use his luck; terror and castles worked together."><rect width="480" height="300" fill="#ffffff"/><g stroke="#334155"><rect x="6" y="30" width="150" height="40" rx="5" fill="#c7d2fe"/><rect x="6" y="130" width="150" height="40" rx="5" fill="#fde68a"/><rect x="6" y="230" width="150" height="40" rx="5" fill="#c7d2fe"/><rect x="324" y="30" width="150" height="40" rx="5" fill="#bae6fd"/><rect x="324" y="130" width="150" height="40" rx="5" fill="#fecaca"/><rect x="324" y="230" width="150" height="40" rx="5" fill="#bae6fd"/><rect x="168" y="118" width="144" height="64" rx="6" fill="#bbf7d0" stroke-width="2"/><line x1="156" y1="62" x2="190" y2="118"/><line x1="156" y1="150" x2="168" y2="150"/><line x1="156" y1="238" x2="190" y2="182"/><line x1="324" y1="62" x2="290" y2="118"/><line x1="324" y1="150" x2="312" y2="150"/><line x1="324" y1="238" x2="290" y2="182"/><g stroke-dasharray="4 3"><line x1="156" y1="50" x2="324" y2="50"/><line x1="60" y1="170" x2="60" y2="230"/><line x1="420" y1="170" x2="420" y2="230"/></g></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="81" y="20" font-weight="bold">WINNING THE CROWN</text><text x="399" y="20" font-weight="bold">KEEPING THE CROWN</text><text x="81" y="47" font-size="12" font-weight="bold">Strength of claim</text><text x="81" y="62">1051 promise, 1064 oath</text><text x="81" y="147" font-size="12" font-weight="bold">Luck</text><text x="81" y="162">wind, Hardrada, timing</text><text x="81" y="247" font-size="12" font-weight="bold">Military planning</text><text x="81" y="262">fleet, cavalry, archers</text><text x="399" y="47" font-size="12" font-weight="bold">Church backing</text><text x="399" y="62">papal banner, Lanfranc</text><text x="399" y="147" font-size="12" font-weight="bold">Ruthlessness</text><text x="399" y="162">Harrying of the North</text><text x="399" y="247" font-size="12" font-weight="bold">Control systems</text><text x="399" y="262">castles, fealty, Domesday</text><text x="240" y="140" font-size="13" font-weight="bold">WILLIAM I</text><text x="240" y="157">crowned 25 Dec 1066</text><text x="240" y="173">still king at death, 1087</text><text x="240" y="44">Pope backs his claim</text><text x="66" y="204" text-anchor="start">used the luck</text><text x="414" y="204" text-anchor="end">terror + castles</text><text x="240" y="292">Dashed lines = links between factors. Which link matters most?</text></g></svg>`;

export const guide: TopicGuide = {
  id: "william-i",
  title: "William I and the Norman Conquest",
  strand: "Kings & Power",
  icon: "⚔️",
  summary: "A childless king, four rivals, three battles in under four weeks, and a duke who turned a gamble into a dynasty.",
  intro:
    "On **5 January 1066** Edward the Confessor died without a child. Within a year England had had two kings crowned, had been invaded twice, and had seen three major battles. By Christmas Day a French-speaking duke from Normandy was being crowned in Westminster Abbey.\n\nThis topic is the first case study for the Term 1 enquiry: **Under what circumstances did kings rise to power?** As you work through it, keep asking: what *circumstances* opened the door (a succession crisis, rival claims, invasions, luck), and what did William *do* to walk through it and then keep it shut behind him (planning, force, Church backing, castles, land and lists)?\n\nBy the end you should be able to argue — with precise evidence — why William, rather than Harold, Hardrada or Edgar, became king, and how he turned a conquest into a kingship that lasted until his death in **1087**.",
  guide: [
    // ---------------------------------------------------------------------
    {
      id: "england-before-1066",
      heading: "England before 1066",
      discovery: {
        problem:
          "Here are three facts about England in 1065:\n\n- The king's silver pennies were made at around 60 mints and were regularly called in and re-struck with a new design.\n- The king could raise a land tax, the **geld**, across the whole kingdom.\n- The king, **Edward the Confessor**, was about 60 years old and had no children.\n\nWas England a strong kingdom or a weak one? Now the twist: why might its *strength* make it *more* likely to be invaded, not less?",
        idea:
          "England was one of the richest and best-organised kingdoms in Europe — and that is exactly what made it a prize. A wealthy, well-run kingdom is worth fighting for, because whoever wins the crown also wins the tax system, the coins and the land. The weakness was not the kingdom but the **succession**: with no son to inherit, the most valuable throne in north-west Europe was suddenly up for grabs. That is our first 'circumstance' for a king's rise: **a succession crisis in a rich kingdom**.",
      },
      body:
        "**A rich, well-run kingdom.** Anglo-Saxon England had perhaps **1.5–2 million people** (historians' estimates vary). It was divided into **shires** (counties), each run for the king by a **sheriff** ('shire-reeve'), and shires were split into **hundreds** with their own courts. Good farmland and the wool trade made it wealthy, and the king's officials could collect the **geld** tax and control the coinage — rare achievements in the 11th century.\n\n**The king and the Witan.** The king ruled with the advice of the **Witan** (or *witenagemot*), a council of leading nobles and churchmen. When a king died, the Witan helped decide who should be the next king: being the old king's son mattered a lot, but it was not automatic.\n\n**The earls and the Godwin family.** Great nobles called **earls** ran huge regions (earldoms). The most powerful family was the **Godwins**: Earl Godwin's son **Harold** was Earl of Wessex, and his daughter **Edith** was married to King Edward. Harold's brothers Tostig, Gyrth and Leofwine were earls too — until Tostig was thrown out of Northumbria by a revolt in **1065** and went into exile, angry with Harold.\n\n**Edward the Confessor (king 1042–1066).** Edward was famously religious and built Westminster Abbey. His mother, **Emma**, was from Normandy, and Edward had spent about 25 years in exile there. He had **no children**.\n\n**Normandy and its dukes.** Normandy, in northern France, was founded by Viking settlers led by **Rollo** in 911. By 1066 the Normans spoke French, were Christian, and were famous for mounted knights and castles. **Duke William** had become duke in **1035**, aged about 8, and survived years of violent rebellion to become a hardened, successful ruler.\n\n**The Viking threat.** England had been ruled by Danish kings (Cnut and his sons) from 1016 to 1042, and Scandinavian kings still believed they had a right to it.\n\n| Who | Link to the English crown |\n|---|---|\n| Normans | Edward's mother Emma was William's great-aunt |\n| Godwins | Harold's sister Edith was the queen |\n| Scandinavians | Danish kings had ruled England 1016–1042 |",
      diagram: familyTree,
      diagramCaption:
        "A simplified family tree. Notice who has royal blood (Edgar), who has only a distant family link (William), and who has none at all (Harold).",
      workedExamples: [
        {
          title: "A modelled 'explain' answer",
          problem: "Explain why so many people wanted to be king of England in 1066. (6 marks)",
          steps: [
            "**Plan.** Two reasons, each a PEEL paragraph: (1) England was rich and well run, so it was a prize; (2) Edward died without an heir, so the throne was open. Then link them.",
            "**Paragraph 1.** One reason was that England was a very rich and well-organised kingdom. For example, it had around 60 mints producing silver coins, and the king could collect the geld tax across the whole country through sheriffs in each shire. This explains why rulers such as Duke William and Harald Hardrada were willing to risk invasion: whoever became king would control all of this wealth and the system for collecting it.",
            "**Paragraph 2.** Another reason was that Edward the Confessor died on 5 January 1066 with no children. Normally a king's son was the obvious heir, so without one the succession was uncertain. This meant several men could argue they had a right to the throne — through family links, promises, election by the Witan or simply power.",
            "**Link and judgement.** The two reasons work together: England's wealth made the crown worth fighting for, but it was Edward's lack of an heir that actually opened the door. Without the succession crisis, England's wealth alone would not have produced four rival claimants.",
          ],
          answer: "Wealth made England a prize; Edward's childlessness made the prize available — the succession crisis was the trigger.",
          yourTurn: {
            question:
              "What was the name of the council of leading nobles and churchmen that advised the Anglo-Saxon king and helped choose a new one?",
            answer: { type: "text", accept: ["Witan", "the Witan", "Witenagemot", "the Witenagemot", "Witangemot", "Witena gemot"], display: "the Witan (witenagemot)" },
            solution: "The Witan advised the king and, when he died, helped decide who should succeed him — in January 1066 it chose Harold.",
          },
        },
      ],
      keyPoints: [
        "Anglo-Saxon England was rich and well organised: shires, sheriffs, hundreds, the geld tax and a controlled coinage.",
        "The king ruled with the Witan, which helped choose a new king — inheritance was important but not automatic.",
        "The Godwin family were the most powerful nobles; Harold Godwinson was Earl of Wessex and the queen's brother.",
        "Edward the Confessor (king 1042–1066) had Norman links through his mother Emma — and no children.",
        "Normandy (founded by Viking settlers in 911) and Scandinavia both had reasons to look at England's crown.",
      ],
      whyItWorks:
        "Why does this matter for the enquiry? Kings 'rise to power' when there is an opening, and the biggest opening in a hereditary system is a missing heir. Edward's childlessness turned England's strengths into a danger: a wealthy, centralised kingdom is a bigger prize, and anyone who could capture the crown would capture a ready-made machine for raising money and armies. The **long-term** causes (England's wealth, the Norman and Viking links) set the scene; the **short-term** cause (Edward's death with no heir) made a contest inevitable.",
      strategies: ["Long-term vs short-term causes", "Make an inference", "Link the causes"],
      thinkDeeper:
        "If Edward the Confessor had had a healthy adult son in 1066, would William still have invaded? What would he have needed instead of a 'claim'?",
    },
    // ---------------------------------------------------------------------
    {
      id: "claimants",
      heading: "1066: four claimants to the throne",
      discovery: {
        problem:
          "It is **6 January 1066**. Edward the Confessor died yesterday. You are a member of the **Witan**, and you must choose a king *today*. Read the four cards.\n\n- **Harold Godwinson** — Earl of Wessex, the richest and most powerful man in England, an experienced commander. Says Edward named him on his deathbed.\n- **William, Duke of Normandy** — Edward's mother's great-nephew. Says Edward promised him the crown in 1051, and that Harold swore an oath to support him in 1064.\n- **Harald Hardrada, King of Norway** — a famous Viking warrior. Says an old deal between earlier kings gives him the right.\n- **Edgar Ætheling** — Edward's great-nephew and the last male of the old royal family. Aged about 14.\n\nWho do you crown? Then decide: which *kind* of claim mattered most — **blood**, a **promise**, **election** or **power**?",
        idea:
          "The real Witan chose **Harold**, and crowned him the very same day Edward was buried. In a crisis, with invasions likely, they wanted an adult, proven leader who was already on the spot — **power and election** beat **blood** (Edgar) and **promises** made abroad (William). But notice: every claimant could argue *something*. A claim was not a fact to be checked; it was an argument that had to be backed up — usually by an army.",
      },
      body:
        "When Edward died on **5 January 1066**, there were four serious claimants. Historians often test their claims against four criteria: **blood** (royal family), **promise** (was he named heir?), **election** (did the Witan choose him?) and **power** (could he take and hold the throne?).\n\n**Harold Godwinson** — Earl of Wessex. The *Anglo-Saxon Chronicle* and the *Life of King Edward* say the dying Edward entrusted the kingdom to him. The Witan elected him, and he was crowned on **6 January 1066** in Westminster Abbey. He had no royal blood, but huge wealth, military experience (he had beaten the Welsh in 1063) and he was there.\n\n**William, Duke of Normandy** — Norman writers such as **William of Poitiers** (William's own chaplain) claim Edward promised him the throne in **1051**. They also say that in **1064** Harold, shipwrecked on the French coast, swore a solemn oath on holy relics to support William's claim — a scene shown on the **Bayeux Tapestry**. To Normans, Harold was therefore an **oath-breaker**. But these sources were written for William, after he had won.\n\n**Harald Hardrada, King of Norway** — claimed through a deal between King **Harthacnut** of England and Denmark and King **Magnus** of Norway, under which each would inherit the other's kingdom. Hardrada said he was Magnus's heir. He was backed by Harold's exiled brother **Tostig**.\n\n**Edgar Ætheling** — grandson of King **Edmund Ironside**, so he had the best **blood** claim. But he was only about **14**, with no army and few supporters.\n\n| Claimant | Blood | Promise | Election | Power |\n|---|---|---|---|---|\n| Harold | ✗ | ✓ (deathbed) | ✓ | ✓✓ |\n| William | weak | ✓ (1051, 1064 oath) | ✗ | ✓ |\n| Hardrada | ✗ | via an old deal | ✗ | ✓ |\n| Edgar | ✓✓ | ✗ | ✗ (not in Jan) | ✗ |\n\nSo in January Harold looked strongest. But the timeline shows what happened next: the year became a race between two invasions.",
      diagram: timeline1066,
      diagramCaption:
        "1066 to scale. Most of the year was waiting; almost everything decisive happened between 20 September and 14 October.",
      workedExamples: [
        {
          title: "A modelled judgement with two valid arguments",
          problem: "Who had the strongest claim to the English throne in January 1066? Explain your answer. (8 marks)",
          steps: [
            "**Plan.** Define 'strongest' using the four criteria. Weigh Harold against William (the two serious contenders), mention Edgar and Hardrada briefly, then reach a judgement.",
            "**Paragraph 1 — Harold.** Harold had the strongest claim in January 1066 because he met the criteria that mattered most in Anglo-Saxon England. The Witan elected him and he was crowned on 6 January, and English sources such as the *Anglo-Saxon Chronicle* say Edward named him on his deathbed. As the most powerful earl, he could also defend the kingdom immediately — vital when invasions were expected.",
            "**Paragraph 2 — William.** However, William could argue he had a prior promise from Edward in 1051 and Harold's own oath in 1064. If Harold really swore on holy relics, his coronation looked like perjury, which later helped William win the Pope's support. But this evidence comes mainly from Norman writers like William of Poitiers, who worked for William and wrote after 1066, so it must be treated with caution.",
            "**Paragraph 3 — the others.** Edgar had the best blood, but at about 14 with no army he could not defend the kingdom; Hardrada's claim rested on a deal between two dead kings.",
            "**Judgement.** Overall Harold's claim was strongest *in January 1066*, because election, a deathbed nomination and real power on the spot outweighed a promise made fifteen years earlier. William's claim mattered mainly because he was able to back it with an army.",
          ],
          answer: "Harold's claim was strongest in January 1066 (election + deathbed promise + power); William's became decisive only once backed by force.",
          yourTurn: {
            question:
              "Which claimant was the grandson of King Edmund Ironside — the best blood claim — but was only about 14 in 1066? Give his name.",
            answer: {
              type: "text",
              accept: ["Edgar", "Edgar Ætheling", "Edgar Aetheling", "Edgar Atheling", "Edgar the Atheling", "Edgar the Ætheling", "Edgar the Aetheling"],
              display: "Edgar Ætheling",
            },
            solution: "Edgar Ætheling ('ætheling' means a prince of the royal family) had the strongest blood claim but no army and too few supporters.",
          },
        },
      ],
      keyPoints: [
        "Edward died on 5 January 1066; Harold was crowned on 6 January.",
        "Four tests of a claim: blood, promise, election and power.",
        "Harold: Witan's choice, deathbed nomination, most powerful earl — but no royal blood.",
        "William: promise of 1051 and Harold's oath of 1064 — but our evidence for both is mostly Norman.",
        "Hardrada claimed via the Harthacnut–Magnus deal and was backed by Tostig; Edgar had the best blood but was a teenager.",
      ],
      whyItWorks:
        "Why does this matter? A 'claim' was not a legal certificate — it was an argument, and arguments need backers. The Witan chose Harold because in a crisis they needed a strong adult leader, which shows that **circumstances** (the threat of invasion) shaped what counted as a good claim. William's claim mattered because it gave him a *justification* to invade and to win allies, including the Pope. That is a pattern for the whole enquiry: kings rise when a **claim** is combined with the **power** to enforce it.",
      strategies: ["Weigh factors", "Check the provenance (NOP)", "Avoid hindsight"],
      thinkDeeper:
        "Almost all our evidence for Harold's oath comes from Norman writers working after 1066. Does that mean the oath never happened? What else would you want to know before deciding?",
    },
    // ---------------------------------------------------------------------
    {
      id: "battles-of-1066",
      heading: "The battles of 1066",
      discovery: {
        problem:
          "It is **1 October 1066**. You are **Harold**, in York. Six days ago you crushed the Norwegians at Stamford Bridge — Hardrada and Tostig are dead. Now a messenger arrives: **William landed at Pevensey on 28 September** and is burning villages near Hastings, about 250 miles away.\n\nYour army is tired and many men are wounded. You could (a) rush south and attack William as fast as possible, or (b) gather fresh troops from all over England and make William come to you.\n\nPredict: what are the risks of each choice? Which would you pick?",
        idea:
          "Harold chose speed. He marched back to London, waited only a few days for reinforcements, and reached the Hastings area on **13 October** — fighting the next day with a tired army that was smaller than it could have been. Some historians call this his biggest mistake; others say he had good reasons (William was ravaging Harold's own lands in Sussex, and a quick victory had just worked at Stamford Bridge). Either way, the *timing* of two invasions in one autumn shaped the result as much as any single decision on the battlefield.",
      },
      body:
        "**Act 1 — the north.** In September Hardrada and Tostig sailed up the Humber with about **300 ships**. On **20 September** they beat the northern earls Edwin and Morcar at **Fulford Gate**, near York. Harold marched north about **185 miles** in roughly four or five days and took them by surprise at **Stamford Bridge** on **25 September**. Hardrada and Tostig were killed; the *Anglo-Saxon Chronicle* says the survivors needed only about **24 ships** to go home.\n\n**Act 2 — the south.** William's fleet had waited for weeks for the right wind. It finally crossed on the night of 27–28 September and landed at **Pevensey** on **28 September**, unopposed — Harold's southern army had been sent home on 8 September when its supplies ran out. William built a wooden castle at Hastings and raided the countryside.\n\n**Act 3 — Hastings, 14 October 1066.** The armies were roughly equal, perhaps 7,000 each (estimates vary). Harold held the top of a ridge with a **shield wall** of **housecarls** (professional soldiers with two-handed axes) and the **fyrd** (part-time soldiers). William had **archers**, foot soldiers and around 2,000 mounted **knights**.\n\n- Norman cavalry charges uphill failed against the shield wall.\n- When William's Breton troops fled, some English broke ranks to chase them and were cut down. A rumour spread that William was dead; he lifted his helmet to show his face.\n- The Normans then used **feigned retreats** — pretending to flee to draw more English off the hill.\n- Late in the day **Harold was killed**, along with his brothers Gyrth and Leofwine. The *Bayeux Tapestry* may show him hit by an arrow; other early sources say he was cut down by knights.\n\n**Why William won.** Historians weigh three groups of factors:\n\n| Factor | Evidence |\n|---|---|\n| **Luck** | the wind delayed William until Harold was in the north; unopposed landing |\n| **William's skill and preparation** | huge fleet, cavalry and archers, a papal banner, adapting tactics, feigned retreats |\n| **Harold's mistakes** | rushing south with a tired army; some English breaking the shield wall |\n\n**The Bayeux Tapestry** is our most famous source: an embroidery about 70 m long, probably made in England in the 1070s for William's half-brother **Bishop Odo**. It is vivid and detailed — but it tells the Norman version.",
      diagram: invasionMap,
      diagramCaption:
        "A schematic (not to scale) map of the invasions. Trace Harold's route: London to York and back, then on to Hastings — all in about three weeks.",
      workedExamples: [
        {
          title: "Weighing factors — two valid lines of argument",
          problem: "Explain why William won the Battle of Hastings. (8 marks)",
          steps: [
            "**Plan.** Three factors: luck, William's skill and preparation, Harold's mistakes. Explain each with precise evidence, then link them and decide which mattered most.",
            "**Luck.** William was lucky with timing. The wind kept his fleet in France until late September, by which time Harold had dismissed his southern army and marched north to fight Hardrada. This meant William landed at Pevensey on 28 September completely unopposed.",
            "**William's skill.** William's preparation turned that luck into victory. He brought cavalry and archers as well as foot soldiers, and when uphill charges failed he adapted, using feigned retreats to draw English soldiers off the ridge. His papal banner also told his men that God was on their side.",
            "**Harold's mistakes.** Harold rushed south after Stamford Bridge and fought on 14 October with a tired army, instead of waiting to gather more troops. During the battle some of his men broke the shield wall to chase retreating Normans.",
            "**Judgement.** Luck gave William his chance, but it did not win the battle by itself: on the day the shield wall held for hours, and it was William's ability to adapt his tactics that finally broke it. So William's skill mattered most, because it allowed him to exploit both his luck and Harold's mistakes.",
          ],
          answer: "Luck opened the door, Harold's haste helped — but William's preparation and adaptable tactics best explain the victory.",
          yourTurn: {
            question: "Name the battle of 25 September 1066 at which Harold defeated Harald Hardrada.",
            answer: { type: "text", accept: ["Stamford Bridge", "Battle of Stamford Bridge", "the Battle of Stamford Bridge"], display: "Stamford Bridge" },
            solution: "Stamford Bridge (25 September) — five days after Hardrada had won at Fulford Gate (20 September).",
          },
        },
      ],
      keyPoints: [
        "20 Sept Fulford Gate (Hardrada wins) → 25 Sept Stamford Bridge (Harold wins) → 28 Sept William lands at Pevensey → 14 Oct Hastings.",
        "Harold's army: housecarls and fyrd in a shield wall on a ridge. William's: archers, infantry and mounted knights.",
        "Feigned retreats drew English soldiers off the hill; Harold and his brothers Gyrth and Leofwine were killed.",
        "Why William won: luck (wind, timing), William's skill and preparation (papal banner, cavalry, tactics), Harold's mistakes.",
        "The Bayeux Tapestry is a Norman-commissioned embroidery — vivid evidence, but one-sided.",
      ],
      whyItWorks:
        "Why did this happen? Hastings was decided by **how the causes interacted**, not by one cause alone. The wind (luck) meant two invasions arrived in sequence rather than together; that pulled Harold north and left the south open; Harold's speed after Stamford Bridge meant he fought tired; and William's flexible, mixed army could exploit the gaps that opened in the shield wall. Linking causes like this — 'because of X, Y became possible' — is what turns a list of factors into an explanation.",
      strategies: ["Link the causes", "Weigh factors", "Check the provenance (NOP)"],
      thinkDeeper:
        "Imagine Hardrada had invaded two weeks later, so that William landed first. Who would probably have won Hastings — and what does your answer tell you about the role of luck?",
    },
    // ---------------------------------------------------------------------
    {
      id: "securing-the-kingdom",
      heading: "Securing the kingdom: castles and the Harrying of the North",
      discovery: {
        problem:
          "William won one battle in 1066 and was crowned at Christmas. Yet in **1069** he was still fighting for control of the North, and in **1070–71** rebels were holding out in the Fens.\n\nHere is the puzzle: perhaps **10,000 or so** Norman newcomers (historians' estimates vary) were trying to rule roughly **2 million** English people. Before you read on, list **three** things you would do if you were William to stop the English from throwing you out.",
        idea:
          "William's answer had three parts: **build castles everywhere** so a small number of Normans could dominate the land around them; **crush rebellion so brutally** that nobody would dare try again; and **replace the English nobles** with Normans who owed everything to him. Winning the crown at Hastings was the *rise*; keeping it took years of force — showing that a king's rise to power is a process, not a single event.",
      },
      body:
        "**Crowned — but not secure.** After Hastings, William circled London and the English leaders submitted to him at Berkhamsted. He was crowned in **Westminster Abbey on Christmas Day 1066**. During the ceremony, Norman guards heard the shouts of acclamation, thought it was a riot and set fire to nearby houses (according to the chronicler Orderic Vitalis) — a sign of how tense things were.\n\n**Rebellions, 1067–1071.**\n\n| Date | Rebellion |\n|---|---|\n| 1068 | Exeter rebels; William besieges the city. Earls **Edwin and Morcar** revolt |\n| 1069 | The **North** rises: rebels kill the new Norman earl at Durham, attack York, and join a Danish fleet with Edgar Ætheling |\n| 1070–71 | **Hereward the Wake** and Danish allies hold out at **Ely** in the Fens |\n\n**Castles.** The Normans built **motte-and-bailey castles**: an earth mound (**motte**) with a wooden keep, and a fenced courtyard (**bailey**) below. They could be put up in weeks, often by forced English labour, and placed in towns and at river crossings. A few hundred knights in castles could control a whole region. Historians estimate the Normans built **around 500** castles by 1100. Later, the most important were rebuilt in stone — like the **White Tower** of the Tower of London, begun around 1078.\n\n**The Harrying of the North, 1069–70.** William's response to the northern rising was deliberately devastating. Over the winter his soldiers burned villages, crops, animals and tools across Yorkshire and beyond, so the land could not feed rebels or invaders. Famine followed. The chronicler Orderic Vitalis (writing about 50 years later) claimed over **100,000** people died — most historians think that figure is exaggerated, but in **1086** the Domesday Book still recorded many Yorkshire villages as **'waste'**.\n\n**Consequences.** The North never rebelled against William again. English nobles who rebelled lost their lands to Normans. But the cost in human suffering was enormous, and even Orderic, who generally admired William, condemned it.",
      diagram: motteAndBailey,
      diagramCaption:
        "A motte-and-bailey castle: quick to build from earth and timber, easy to defend, and a constant reminder of who was in charge.",
      workedExamples: [
        {
          title: "Explain with precise evidence",
          problem: "Explain how William used castles to control England. (6 marks)",
          steps: [
            "**Plan.** Two ways castles gave control: (1) military — a small force could hold an area; (2) psychological — castles showed Norman power and stopped rebellion before it started.",
            "**Paragraph 1.** Castles allowed a small number of Normans to control a large English population. Motte-and-bailey castles could be built in weeks from earth and timber, so William could place them quickly in towns such as York and at key river crossings. From a castle, a few hundred soldiers could ride out to crush trouble and then retreat to safety behind the palisade and up the motte.",
            "**Paragraph 2.** Castles also controlled people through fear and as a symbol. They were often built by forced English labour, sometimes on land where houses had been knocked down, and they towered over the towns around them. Later stone keeps like the White Tower in London made the message permanent: the Normans were here to stay.",
            "**Judgement.** Castles were effective because they turned one victory at Hastings into lasting, local control — but they worked best alongside other methods such as the Harrying of the North and the feudal system.",
          ],
          answer: "Castles let a small Norman minority dominate the land militarily and psychologically, turning conquest into control.",
          yourTurn: {
            question: "What is the name for the raised earth mound of a Norman castle, on which the keep stood?",
            answer: { type: "text", accept: ["motte", "the motte", "mott", "mote"], display: "motte" },
            solution: "The motte is the mound; the bailey is the fenced courtyard below it.",
          },
        },
        {
          title: "Using a source on the Harrying",
          problem:
            "**Source A** — from the *Ecclesiastical History* by Orderic Vitalis, a monk born in England in 1075 to a Norman father and an English mother, writing in Normandy around 1120–1140 (adapted).\n\n> Nowhere else had William shown such cruelty. He gave way to his anger and punished the innocent with the guilty. He ordered that crops and herds, tools and food of every kind should be gathered and burned, so that the whole region north of the Humber was stripped of all means of survival.\n\nHow useful is Source A for studying the Harrying of the North? (6 marks)",
          steps: [
            "**Content.** Source A is useful because it describes the method of the Harrying: crops, animals, tools and food were deliberately burned so the region could not support life. This fits with the Domesday Book of 1086, which still records much of Yorkshire as 'waste'.",
            "**Provenance — strengths.** Orderic was not simply anti-Norman: he had a Norman father and generally admired William, so his strong condemnation is significant — it suggests the destruction was shocking even to William's supporters.",
            "**Provenance — limits.** But Orderic was writing about 50 years later and was not an eyewitness, and as a monk he wanted to teach a moral lesson about cruelty and sin. Details such as his death toll of over 100,000 in the same work are probably exaggerated.",
            "**Judgement.** Source A is very useful for showing what kind of destruction took place and how it was remembered, especially when cross-referenced with Domesday — but less reliable for exact numbers.",
          ],
          answer: "Useful for the methods and the shock it caused (cross-referenced by Domesday), less reliable for scale.",
        },
      ],
      keyPoints: [
        "William was crowned in Westminster Abbey on Christmas Day 1066 — but faced rebellions until 1071.",
        "Rebels included Edwin and Morcar (1068), the North with Danish help (1069) and Hereward the Wake at Ely (1070–71).",
        "Motte-and-bailey castles were quick to build and let a small Norman force dominate; key ones were rebuilt in stone (White Tower).",
        "The Harrying of the North (1069–70) destroyed food and farmland; famine followed and Yorkshire was still 'waste' in 1086.",
        "Ruthlessness worked — the North did not rebel again — but at a huge human cost.",
      ],
      whyItWorks:
        "Why did this work? Conquest creates a **numbers problem**: a small elite ruling a large, hostile population. Castles solved it by multiplying the power of each Norman soldier; the Harrying solved it by removing the *ability* to rebel (no food, no shelter for rebels or Danish allies) and by creating fear; and giving rebels' lands to Normans removed the English leaders who could organise resistance. For the enquiry, this shows that rising to power and **staying** in power need different tools — and that William was willing to use terror.",
      strategies: ["Check the provenance (NOP)", "Cross-reference sources", "Judge significance"],
      thinkDeeper:
        "Can a historian say the Harrying of the North was 'effective' without also saying it was 'justified'? Why is it important to keep those two judgements separate?",
    },
    // ---------------------------------------------------------------------
    {
      id: "feudal-system",
      heading: "The feudal system",
      discovery: {
        problem:
          "You are William in 1070. You now hold **all the land in England** — it was taken from Harold and the rebels, or you claim it as king. You also have thousands of knights who expect to be rewarded, and you need an army ready at any moment. But there is not nearly enough silver to pay them all wages every year.\n\nHow could you use **land** instead of money to reward people *and* keep them loyal? What risk might your solution create?",
        idea:
          "William **granted land in return for service**. Great lords (tenants-in-chief) received huge estates; in return they swore loyalty and supplied a fixed number of knights. They granted parts of their land to knights, who in turn relied on peasants to farm it. Everyone held land *from* someone above them. The risk: a baron with lots of land and knights could become powerful enough to challenge the king — so William had to keep a careful grip on the system.",
      },
      body:
        "The **feudal system** was a way of organising land, loyalty and military service. Historians argue about how neat and 'systematic' it really was, but the basic idea is clear.\n\n**1. The king** owned all the land. William kept about a fifth of it for himself and granted most of the rest.\n\n**2. Tenants-in-chief** — a small group of great barons and senior churchmen (bishops and abbots), a few hundred people at most. They held land directly from the king and swore an **oath of fealty** (loyalty), kneeling to do **homage**. In return they had to provide **knight service**: a fixed number of armed knights when the king demanded.\n\n**3. Knights** received **manors** (estates) from their lord. They owed military service — usually about **40 days a year** — and loyalty.\n\n**4. Peasants** — the vast majority, roughly 9 in 10 people. Most were **villeins**, who were tied to the manor: they worked the lord's land for part of the week and farmed their own strips, and could not leave without permission. Below them were poorer cottars and bordars, and **slaves** (about one in ten people recorded in Domesday).\n\n**A Norman takeover of the land.** Land taken from English nobles who had died at Hastings or rebelled was given to William's followers. By **1086** only two of the major tenants-in-chief were English. A whole ruling class had been replaced.\n\n**How it kept William in control**\n\n- Everyone's land depended on loyalty — a rebel could lose everything.\n- It gave William an army of knights without paying wages.\n- Many barons' estates were scattered across several counties, which made it harder to build a single regional power base.\n- In **1086**, at the **Oath of Salisbury**, major landholders swore loyalty *directly* to William, not just to their own lord.\n\n**The risks.** Powerful barons with many knights could rebel — as some did in the **Revolt of the Earls (1075)**. The system only worked if the king was strong enough to enforce it.",
      diagram: feudalPyramid,
      diagramCaption:
        "The feudal pyramid: land flows down, service and loyalty flow up. Reality was messier — people could hold land from several lords — but this is the core idea.",
      workedExamples: [
        {
          title: "Explain — with the benefits and the risks",
          problem: "Explain how the feudal system helped William to control England. (6 marks)",
          steps: [
            "**Plan.** Two ways it helped: (1) it tied land to loyalty, (2) it provided an army. Then a balancing point on its risks.",
            "**Paragraph 1.** The feudal system helped William control England because every landholder's land depended on loyalty to the king. Tenants-in-chief swore an oath of fealty in return for their estates, so if they rebelled they could lose everything — as happened to English nobles after the rebellions of 1068–71, whose lands were given to Normans.",
            "**Paragraph 2.** It also gave William a ready army without paying wages. Each baron had to supply a set number of knights, and knights served about 40 days a year in return for their manors. This meant William could raise forces quickly to crush revolts or defend against invasion.",
            "**Balance and judgement.** However, the system also created powerful barons who could turn against him, as in the Revolt of the Earls in 1075. William reduced this risk by scattering estates and, in 1086, making landholders swear loyalty directly to him at Salisbury. So feudalism helped William most because he was strong enough to enforce it.",
          ],
          answer: "Feudalism tied land to loyalty and supplied an unpaid army — effective because William was strong enough to manage its risks.",
          yourTurn: {
            question: "What name is given to the oath of loyalty that a vassal swore to his lord in return for land?",
            answer: {
              type: "text",
              accept: ["fealty", "oath of fealty", "an oath of fealty", "the oath of fealty", "homage", "homage and fealty", "fealty and homage"],
              display: "an oath of fealty",
            },
            solution: "The oath of fealty (often sworn together with an act of homage) was a promise of loyalty in return for land.",
          },
        },
      ],
      keyPoints: [
        "The king owned all the land and granted it in return for loyalty and service.",
        "Order: king → tenants-in-chief (barons and bishops) → knights → peasants (mostly villeins).",
        "Oaths of fealty and homage; knight service of about 40 days a year.",
        "By 1086 the English nobility had been almost entirely replaced by Normans.",
        "It kept William in control (loyalty, army, Oath of Salisbury 1086) but created powerful barons who could rebel.",
      ],
      whyItWorks:
        "Why did it work? Feudalism turned the one thing William had in abundance after the Conquest — **land** — into the things he needed: **loyalty** and **soldiers**. Because land was *held* rather than owned outright, it could be taken back, which gave every lord a reason to stay loyal. For the enquiry, this shows how William converted a military victory into a **system of power** — and why the strength of the king personally still mattered, since the same system could be turned against a weak king (as King John would discover).",
      strategies: ["Think about who benefited", "Consider the counter-argument", "Compare and contrast"],
      thinkDeeper:
        "Who benefited most from the feudal system — the king, the barons, the knights or the peasants? Could a villein have seen any benefits?",
    },
    // ---------------------------------------------------------------------
    {
      id: "domesday-and-church",
      heading: "Domesday Book and the Norman Church",
      discovery: {
        problem:
          "**Source A** — from the *Anglo-Saxon Chronicle* for 1085, written in English by monks (adapted).\n\n> The king had deep discussions with his council about this land, how it was occupied and by what sort of men. Then he sent his men all over England into every shire … So very thoroughly did he have it investigated that there was not a single hide, nor a yard of land — nor even, it is a shame to tell, but it seemed no shame to him to do it — one ox, nor one cow, nor one pig that was left out and not put down in his record.\n\nMake **two** inferences: (1) why did William want this information? (2) How did the English monk who wrote this feel about it — and which words tell you?",
        idea:
          "William wanted to know **exactly what he owned, who held it, and what it was worth** — information that meant tax and control. The chronicler's aside, 'it is a shame to tell, but it seemed no shame to him', shows disapproval: counting every animal felt like an intrusion by a foreign king. Both inferences are evidence for the enquiry — Domesday was a tool of power, and the English felt it.",
      },
      body:
        "**The Domesday survey, 1085–86.** At Christmas **1085** at Gloucester, William ordered a survey of England. During **1086** royal commissioners toured the country in groups (circuits), asking the same questions in each place and checking the answers with local juries. The results were written up in Latin in what we call **Domesday Book**.\n\n**What it recorded** for over **13,000 places**: who held the land in **1066** and who held it in **1086**; how many **hides** (tax units) it was assessed at; ploughs, mills, fishponds, woodland and meadow; the number of villeins, cottars and slaves (heads of household, not every person); and the value of the land then and now. London, Winchester and much of the far north were not included.\n\n**Why William wanted it**\n\n- **Tax** — to know how much **geld** each place could pay.\n- **Ownership and control** — to record who held what, settle disputes, and show the Norman takeover as the lawful continuation of King Edward's England.\n- **Defence** — in 1085 England faced a threatened invasion from Denmark, and William needed to know what resources he could call on.\n\nIt was later nicknamed 'Domesday' because, like the Day of Judgement, there was no appeal against it.\n\n**The Norman Church.** William had invaded under a papal banner and wanted a reformed, loyal Church. In **1070** he replaced Archbishop Stigand with **Lanfranc**, an Italian-born scholar and abbot from Caen. Lanfranc held councils, created separate Church courts, and pushed for stricter standards among the clergy. English bishops and abbots were replaced: by the end of William's reign only one bishop was English. Huge **Romanesque** cathedrals and abbeys went up — Canterbury rebuilt from 1070, and later **Durham** (begun 1093, just after William's death).\n\n**Language.** **Norman French** became the language of the court and the nobility; **Latin** was used for official documents; **English** remained the language of most ordinary people.\n\n| Changed for ordinary people | Stayed the same |\n|---|---|\n| New Norman lords and bishops | Farming year and village life |\n| Castles and forced labour | Shires, sheriffs, local courts |\n| Harsh forest laws (e.g. the New Forest) | The English language, spoken daily |\n| Heavier demands from lords | Paying the geld; the coinage |",
      diagram: domesdayQuestions,
      diagramCaption:
        "The Domesday questions (adapted from a survey of the lands of Ely Abbey) and what each answer told William.",
      workedExamples: [
        {
          title: "A source inference answer",
          problem: "What can you infer from Source A about why William ordered the Domesday survey? (4 marks)",
          steps: [
            "**Inference 1 + support.** Source A suggests William wanted to know exactly what resources England had so that he could tax it. The source says not 'one ox, nor one cow, nor one pig' was left out, which implies he wanted a complete record of wealth, not just land.",
            "**Inference 2 + support.** It also suggests he wanted to know who held the land, because the council discussed 'how it was occupied and by what sort of men'. This implies a concern with ownership and control after twenty years of Norman takeover.",
            "**Context (to strengthen it).** This fits with the threatened Danish invasion of 1085, when William needed to know what he could call on.",
          ],
          answer: "William wanted complete knowledge of England's wealth (for tax) and its landholders (for control).",
          yourTurn: {
            question: "In which year did William's commissioners carry out most of the Domesday survey?",
            answer: { type: "number", value: 1086 },
            solution: "William ordered it at Christmas 1085; the commissioners did the survey in 1086.",
          },
        },
      ],
      keyPoints: [
        "Domesday was ordered at Christmas 1085 and carried out in 1086, recording over 13,000 places.",
        "It recorded holders in 1066 and 1086, hides, resources, workers and values — for tax, control and defence.",
        "Lanfranc became Archbishop of Canterbury in 1070 and reformed the Church; English bishops were replaced by Normans.",
        "Huge stone cathedrals (e.g. Canterbury, later Durham) displayed Norman power and piety.",
        "French for the elite, Latin for documents, English for most people — lots of change at the top, much continuity below.",
      ],
      whyItWorks:
        "Why did it matter? Knowledge is power: by recording every landholder and every resource, William made the conquest **permanent on paper**. Domesday treated the Norman lords as the lawful successors of those who held land 'in King Edward's time' — quietly skipping over Harold. Control of the Church gave William religious approval and a network of educated, loyal bishops. Together they show a ruler moving from conquest by force to rule through **information, law and religion**.",
      strategies: ["Make an inference", "Spot change and continuity", "Think about purpose"],
      thinkDeeper:
        "Was the Norman Conquest a revolution for an ordinary villein in a Wiltshire village — or did life mostly carry on? What evidence would help you decide?",
    },
    // ---------------------------------------------------------------------
    {
      id: "why-william-rose",
      heading: "Enquiry: why did William rise to power?",
      discovery: {
        problem:
          "A counterfactual test. For each change below, decide whether William would **still** have become king — and still been king when he died in 1087.\n\n1. The wind changes in August, and William lands *before* Hardrada.\n2. The Pope refuses to support William.\n3. William wins Hastings but builds no castles and does not harry the North.\n4. Edward the Confessor has an adult son.\n\nWhich change would have done most damage to William? What does that tell you about the most important factor?",
        idea:
          "There is no single right answer — but the test shows how factors depend on one another. Without Edward's childlessness (4) there is no opening at all: that is the necessary **circumstance**. Without the right wind (1) William might have met a fresh Harold. Without papal backing (2) recruiting would have been harder. Without castles and the Harrying (3) he might have won the crown but lost it. A strong answer to 'why did William rise to power?' explains how **circumstances**, **luck** and **William's own actions** worked together — and separates *winning* the crown from *keeping* it.",
      },
      body:
        "**Pulling it together.** William's rise can be explained by six factors in two phases.\n\n**Winning the crown (1066)**\n\n- **Strength of claim** — the promise of 1051 and Harold's oath of 1064 gave William a justification, allowing him to present Harold as an oath-breaking usurper.\n- **Military power and planning** — a large fleet built over the summer, mixed forces of knights, archers and infantry, and a commander experienced from years of wars in France.\n- **Luck** — the wind, Hardrada's invasion drawing Harold north, and an unopposed landing.\n\n**Keeping the crown (1066–1087)**\n\n- **Church backing** — the papal banner in 1066; Lanfranc's reforms after 1070.\n- **Ruthlessness** — the Harrying of the North (1069–70) and crushing every rebellion.\n- **Control systems** — castles, the feudal system and the Oath of Salisbury, and the Domesday survey.\n\n**From conqueror to legitimate king.** William worked hard to look like a *lawful* king, not just a winner of battles. He was **crowned and anointed** in Westminster Abbey, where Edward was buried. He promised to keep 'the laws of King Edward'. Domesday describes land as it was 'in the time of King Edward' — as if Harold's reign had never happened. William ruled until his death at Rouen in **1087**, and his sons William II and Henry I succeeded him.\n\n**Comparing the Term 1 kings**\n\n| King | How he came to power | Key circumstances |\n|---|---|---|\n| **William I (1066)** | Conquest backed by a claim | Succession crisis; rival invasions; luck |\n| **John (1199)** | Inherited from his brother Richard I, challenged by his nephew Arthur | Disputed succession; a powerful French rival |\n| **Henry VIII (1509)** | Inherited peacefully from his father | His father Henry VII had won the crown in battle at Bosworth in 1485 |\n\nThe pattern: kings rise most dramatically when **the succession is uncertain**, and they stay in power when they combine **force** with **legitimacy** — Church approval, law and control of land.",
      diagram: factorWeb,
      diagramCaption:
        "A causation web: factors for winning the crown on the left, for keeping it on the right. The dashed lines show how factors reinforced one another.",
      workedExamples: [
        {
          title: "A 'how far do you agree' judgement",
          problem: "'William became king of England mainly because he was lucky.' How far do you agree? (12 marks)",
          steps: [
            "**Plan.** Agree in part: luck explains the opportunity at Hastings. Disagree overall: William's planning, ruthlessness and control systems explain how he won *and kept* the crown. Judgement at the end, using a clear criterion.",
            "**For luck.** There is strong evidence that luck mattered. The wind kept William's fleet in France until late September, by which time Harold had sent his southern army home and marched north to defeat Hardrada at Stamford Bridge. William therefore landed at Pevensey on 28 September unopposed, and faced a tired army at Hastings on 14 October.",
            "**Against — planning and skill.** However, luck only helps a leader who is ready to use it. William had built a large fleet, gathered knights and archers, and won papal backing, so his army was prepared when the wind changed. At Hastings he adapted his tactics, using feigned retreats to break the shield wall.",
            "**Against — keeping power.** Above all, luck cannot explain how William *stayed* king for 21 years. He built castles, crushed rebellions in the Harrying of the North, replaced the English nobility through the feudal system and recorded his control in Domesday.",
            "**Judgement.** I disagree with the statement for the most part. Luck gave William an opportunity in 1066, but he became king — in the full sense of ruling England until 1087 — mainly because of his preparation and his ruthless, systematic control. Luck explains the *when*; William's actions explain the *how*.",
          ],
          answer: "Partly agree for 1066, but overall disagree: preparation and ruthless control explain William's rise and survival more than luck.",
          yourTurn: {
            question: "Which Pope gave William a banner to show support for his invasion of England? Give his name.",
            answer: { type: "text", accept: ["Alexander II", "Pope Alexander II", "Alexander", "Pope Alexander", "Alexander the Second"], display: "Pope Alexander II" },
            solution: "Pope Alexander II backed William, which presented the invasion as a just cause against an oath-breaker.",
          },
        },
      ],
      keyPoints: [
        "Winning the crown: claim, military planning and luck.",
        "Keeping the crown: Church backing, ruthlessness and control systems (castles, feudalism, Domesday).",
        "William built legitimacy through coronation, 'the laws of King Edward' and Domesday's treatment of Harold's reign.",
        "Compared with John and Henry VIII, William's rise was the most dependent on force — but force alone was not enough.",
        "A strong judgement separates necessary circumstances from the actions that exploited them.",
      ],
      whyItWorks:
        "Why does this matter? The enquiry asks about **circumstances**, and William shows the difference between a **necessary condition** (Edward's childlessness, which opened the door) and the **actions** that turned an opportunity into lasting power. Factors also reinforced one another: the claim won the Pope's support, the Pope's support helped recruitment, and planning let William exploit luck. Seeing these links is what lets you reach a supported judgement instead of just listing reasons.",
      strategies: ["Weigh factors", "Link the causes", "Compare and contrast"],
      thinkDeeper:
        "William, John and Henry VIII all became king, but only one had to conquer the country first. Is a king who wins the crown by force more secure, or less secure, than one who simply inherits it?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Edward the Confessor", back: "King of England 1042–1066. Died childless on 5 January 1066, causing the succession crisis." },
      { front: "Harold Godwinson", back: "Earl of Wessex; chosen by the Witan and crowned 6 January 1066; won at Stamford Bridge; killed at Hastings, 14 October 1066." },
      { front: "William of Normandy", back: "Duke of Normandy from 1035; claimed a promise of 1051 and Harold's oath of 1064; won at Hastings; crowned 25 December 1066; died 1087." },
      { front: "Harald Hardrada", back: "King of Norway; claimed the throne via a deal between Harthacnut and Magnus; won at Fulford Gate; killed at Stamford Bridge." },
      { front: "Edgar Ætheling", back: "Grandson of Edmund Ironside with the best blood claim, but only about 14 in 1066 with no army." },
      { front: "Tostig", back: "Harold's brother, exiled as Earl of Northumbria in 1065; joined Hardrada and was killed at Stamford Bridge." },
      { front: "Witan", back: "The council of leading nobles and churchmen who advised the king and helped choose a new king." },
      { front: "Housecarls", back: "Full-time professional soldiers of the king and earls, famous for two-handed axes." },
      { front: "Fyrd", back: "Part-time soldiers — ordinary free men called up to fight when needed." },
      { front: "Shield wall", back: "A tight line of soldiers with overlapping shields; Harold's defensive formation at Hastings." },
      { front: "Feigned retreat", back: "Pretending to run away to lure the enemy out of position — used by the Normans at Hastings." },
      { front: "Bayeux Tapestry", back: "An embroidery about 70 m long telling the Norman version of 1064–66; probably made in England for Bishop Odo in the 1070s." },
      { front: "Motte and bailey", back: "Motte = earth mound with a keep; bailey = fenced courtyard below. Quick-to-build Norman castles." },
      { front: "Harrying of the North", back: "William's destruction of crops, animals and villages in northern England, 1069–70, after a rebellion. Caused famine." },
      { front: "Hereward the Wake", back: "English rebel who held out with Danish help at Ely in the Fens, 1070–71." },
      { front: "Feudal system", back: "Land granted in return for loyalty and service: king → tenants-in-chief → knights → peasants." },
      { front: "Tenant-in-chief", back: "A baron or senior churchman who held land directly from the king and supplied knights." },
      { front: "Villein", back: "A peasant tied to the manor, who worked the lord's land and could not leave without permission." },
      { front: "Fealty", back: "An oath of loyalty sworn by a vassal to his lord in return for land." },
      { front: "Domesday Book", back: "Record of the survey ordered at Christmas 1085 and carried out in 1086: landholders, resources and values of over 13,000 places." },
      { front: "Lanfranc", back: "Italian-born abbot of Caen; Archbishop of Canterbury from 1070; reformed the English Church for William." },
      { front: "Oath of Salisbury (1086)", back: "Major landholders swore loyalty directly to William, strengthening royal control over the feudal system." },
    ],
    mustKnow: [
      "Can you explain why Edward the Confessor's death on 5 January 1066 caused a succession crisis?",
      "Can you compare the four claimants using blood, promise, election and power?",
      "Can you put Fulford Gate, Stamford Bridge, the Pevensey landing and Hastings in order with their dates?",
      "Can you explain at least three reasons why William won at Hastings and say which mattered most?",
      "Can you evaluate the Bayeux Tapestry as a source using Nature, Origin and Purpose?",
      "Can you explain how castles and the Harrying of the North helped William keep control?",
      "Can you draw and explain the feudal pyramid, including its benefits and risks for the king?",
      "Can you explain what Domesday Book recorded and give three reasons why William ordered it?",
      "Can you describe how Lanfranc and the Normans changed the English Church?",
      "Can you reach a supported judgement on why William rose to power, and compare him with John and Henry VIII?",
    ],
    misconceptions: [
      { wrong: "1066 was in the 10th century.", right: "1066 was in the **11th century** (the 1000s). The century number is one more than the first two digits." },
      { wrong: "Harold had no real claim — he just grabbed the throne.", right: "Harold was **elected by the Witan**, was reportedly named by Edward on his deathbed and was crowned properly. He lacked royal blood, but by English custom his claim was strong." },
      { wrong: "William won because he had a much bigger army.", right: "The armies were **roughly equal** (perhaps 7,000 each, though estimates vary). William won through timing, a mixed army, adaptable tactics and Harold's tired troops." },
      { wrong: "The Bayeux Tapestry proves Harold was shot in the eye.", right: "The Tapestry **may** show this, but the scene is unclear and has been restored; other early sources say he was cut down by knights. It is also a Norman source." },
      { wrong: "The Normans conquered England in a single day at Hastings.", right: "Hastings won William the chance to be crowned, but he had to crush rebellions until **1071** and used castles, the Harrying and the feudal system to secure his rule." },
      { wrong: "Domesday Book was a census that counted every person in England.", right: "It recorded **land, resources and values**, and counted mainly heads of household, not everyone. London, Winchester and much of the far north were left out." },
      { wrong: "In the feudal system, barons owned their land outright.", right: "They **held** land from the king in return for loyalty and service — and could lose it if they rebelled." },
    ],
    examMistakes: [
      "Describing what happened at Hastings instead of explaining *why* William won — always use 'this meant that…' or 'this led to…'.",
      "Using vague evidence ('he was lucky') instead of precise detail ('the wind kept his fleet in France until 27–28 September').",
      "Listing factors without linking them or saying which was most important.",
      "Trusting a source because it is primary — William of Poitiers was William's chaplain and the Tapestry was made for Bishop Odo.",
      "Mixing up Fulford Gate (20 September, Hardrada won) and Stamford Bridge (25 September, Harold won).",
      "Using hindsight — saying Harold 'should have known' William would land, when the wind made his timing unpredictable.",
      "Forgetting the second half of the story: William's rise includes *keeping* power (castles, Harrying, feudalism, Domesday), not just Hastings.",
      "Ending a 'how far do you agree' answer without a clear judgement and a reason for it.",
    ],
    mnemonics: [
      {
        topic: "The autumn of 1066",
        device: "\"20, 25, 28 … then 14\"",
        explanation: "Three climbing September dates — Fulford Gate (20), Stamford Bridge (25), William lands at Pevensey (28) — then Hastings on 14 October.",
      },
      {
        topic: "Testing a claim to the throne",
        device: "BPEP — \"Blood, Promise, Election, Power\"",
        explanation: "Royal family? Named as heir? Chosen by the Witan? Able to take and hold the crown? Use all four to compare Harold, William, Hardrada and Edgar.",
      },
      {
        topic: "How William kept control",
        device: "The five Cs: Castles, Cruelty, Church, Contracts, Counting",
        explanation: "Castles (motte-and-bailey), Cruelty (Harrying of the North), Church (Lanfranc, papal backing), Contracts (feudal land-for-service and oaths of fealty), Counting (Domesday Book).",
      },
    ],
    realWorld: [
      {
        title: "A Norman legacy in the English you speak",
        detail: "Thousands of English words came from Norman French. The farm animals kept their Old English names (cow, pig, sheep), while the meat served to French-speaking lords got French ones: beef (boeuf), pork (porc), mutton (mouton).",
        emoji: "🗣️",
      },
      {
        title: "Norman buildings still standing",
        detail: "The Tower of London and Durham Cathedral are both UNESCO World Heritage Sites. Their size was designed to impress — and they still do, more than 900 years later.",
        emoji: "🏰",
      },
      {
        title: "Governments still count",
        detail: "Singapore runs a Census of Population every ten years (most recently in 2020) to plan housing, schools and transport. Like Domesday, it shows that knowing your population and resources is a source of power — though today's censuses are about planning services, not seizing land.",
        emoji: "📊",
      },
      {
        title: "Holding land from the state",
        detail: "Under feudalism, people *held* land from the king rather than owning it outright. In Singapore today most homes are HDB flats on 99-year leases, and most land is owned by the state — a modern, very different system, but a useful way to think about the difference between holding and owning.",
        emoji: "🏢",
      },
      {
        title: "Domesday Book is still at work",
        detail: "Domesday Book is kept at The National Archives in Kew, London, and its entries have been used to help trace the history of places and properties. You can search it online for any English village in the survey.",
        emoji: "📜",
      },
    ],
    videos: [
      { title: "The Norman Conquest explained", channel: "BBC Bitesize", url: "https://www.youtube.com/results?search_query=BBC+Bitesize+Norman+Conquest+1066" },
      { title: "The Battle of Hastings 1066", channel: "Simple History", url: "https://www.youtube.com/results?search_query=Simple+History+Battle+of+Hastings+1066" },
      { title: "Battle of Hastings 1066 — tactics and campaign", channel: "Kings and Generals", url: "https://www.youtube.com/results?search_query=Kings+and+Generals+Battle+of+Hastings" },
      { title: "The Harrying of the North and Norman control", channel: "History documentaries", url: "https://www.youtube.com/results?search_query=Harrying+of+the+North+William+the+Conqueror+KS3" },
      { title: "Domesday Book explained", channel: "The National Archives", url: "https://www.youtube.com/results?search_query=National+Archives+Domesday+Book+explained" },
    ],
    formulas: [
      { name: "1051", formula: "Edward the Confessor allegedly promises the throne to William (Norman sources)." },
      { name: "1064", formula: "Harold swears an oath to William in Normandy (as shown on the Bayeux Tapestry).", note: "Evidence mainly Norman." },
      { name: "5 January 1066", formula: "Edward the Confessor dies without children." },
      { name: "6 January 1066", formula: "Harold Godwinson crowned king in Westminster Abbey." },
      { name: "20 September 1066", formula: "Battle of Fulford Gate — Hardrada and Tostig defeat Edwin and Morcar near York." },
      { name: "25 September 1066", formula: "Battle of Stamford Bridge — Harold defeats and kills Hardrada and Tostig." },
      { name: "28 September 1066", formula: "William lands unopposed at Pevensey." },
      { name: "14 October 1066", formula: "Battle of Hastings — William defeats Harold, who is killed." },
      { name: "25 December 1066", formula: "William crowned in Westminster Abbey." },
      { name: "1069–1070", formula: "Harrying of the North after a northern rebellion backed by the Danes." },
      { name: "1070", formula: "Lanfranc becomes Archbishop of Canterbury." },
      { name: "1070–1071", formula: "Hereward the Wake's resistance at Ely." },
      { name: "1085–1086", formula: "Domesday survey ordered (Christmas 1085) and carried out (1086); Oath of Salisbury (1086)." },
      { name: "1087", formula: "William dies at Rouen; William II becomes king of England." },
    ],
  },
};
