import type { TopicGuide } from "../../types.ts";

// The French Revolution — Term 3 enquiry: "How and why has democracy developed?"
// Lens: change and continuity in equality, representation and the protection of human rights.

const estatesSvg = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pyramid of the three estates: the king at the top, then the clergy, the nobles, and the Third Estate at the wide base. Bars beside it show the Third Estate was about 97 percent of the population and was the only estate that paid the taille." font-family="sans-serif"><rect width="480" height="300" fill="#ffffff"/><text x="10" y="20" font-size="13" font-weight="bold" fill="#1f2937">France in 1788: rank versus numbers</text><polygon points="130,40 150,80 110,80" fill="#fde68a" stroke="#334155"/><text x="130" y="74" font-size="11" text-anchor="middle" fill="#1f2937">King</text><polygon points="110,80 150,80 177.5,135 82.5,135" fill="#c7d2fe" stroke="#334155"/><text x="130" y="104" font-size="11" text-anchor="middle" fill="#1f2937">1st Estate</text><text x="130" y="122" font-size="11" text-anchor="middle" fill="#1f2937">clergy</text><polygon points="82.5,135 177.5,135 207.5,195 52.5,195" fill="#bae6fd" stroke="#334155"/><text x="130" y="160" font-size="11" text-anchor="middle" fill="#1f2937">2nd Estate</text><text x="130" y="178" font-size="11" text-anchor="middle" fill="#1f2937">nobles</text><polygon points="52.5,195 207.5,195 250,280 10,280" fill="#bbf7d0" stroke="#334155"/><text x="130" y="222" font-size="11" text-anchor="middle" fill="#1f2937">3rd Estate</text><text x="130" y="240" font-size="11" text-anchor="middle" fill="#1f2937">peasants, workers,</text><text x="130" y="258" font-size="11" text-anchor="middle" fill="#1f2937">bourgeoisie</text><text x="270" y="60" font-size="12" font-weight="bold" fill="#1f2937">Share of population (approx.)</text><text x="270" y="84" font-size="11" fill="#1f2937">1st</text><rect x="300" y="74" width="2" height="12" fill="#c7d2fe" stroke="#334155"/><text x="309" y="84" font-size="11" fill="#1f2937">under 1%</text><text x="270" y="106" font-size="11" fill="#1f2937">2nd</text><rect x="300" y="96" width="3" height="12" fill="#bae6fd" stroke="#334155"/><text x="310" y="106" font-size="11" fill="#1f2937">about 2%</text><text x="270" y="128" font-size="11" fill="#1f2937">3rd</text><rect x="300" y="118" width="145.5" height="12" fill="#bbf7d0" stroke="#334155"/><text x="306" y="128" font-size="11" fill="#1f2937">about 97%</text><text x="270" y="160" font-size="12" font-weight="bold" fill="#1f2937">Paid the taille (land tax)?</text><rect x="270" y="170" width="12" height="12" fill="#fde68a" stroke="#334155"/><text x="288" y="180" font-size="11" fill="#1f2937">1st: no (gave a “free gift”)</text><rect x="270" y="190" width="12" height="12" fill="#fde68a" stroke="#334155"/><text x="288" y="200" font-size="11" fill="#1f2937">2nd: almost all exempt</text><rect x="270" y="210" width="12" height="12" fill="#fecaca" stroke="#334155"/><text x="288" y="220" font-size="11" fill="#1f2937">3rd: yes, plus the tithe,</text><text x="288" y="236" font-size="11" fill="#1f2937">feudal dues and salt tax</text><text x="270" y="264" font-size="11" fill="#334155">Pyramid = rank, not size.</text><text x="270" y="280" font-size="11" fill="#334155">Figures are estimates.</text></svg>`;

const causesSvg = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Causes web. Long-term causes on the left (unfair estates, Enlightenment ideas, the American Revolution) and short-term causes on the right (royal bankruptcy, the bad harvest of 1788, failed tax reforms) all point to Revolution 1789 in the centre. The trigger below, Louis calling the Estates-General, also points to it, and a dashed arrow shows failed tax reforms leading to the trigger." font-family="sans-serif"><defs><marker id="frc-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs><rect width="480" height="300" fill="#ffffff"/><text x="240" y="22" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">Why 1789?</text><text x="75" y="24" font-size="11" font-weight="bold" text-anchor="middle" fill="#334155">LONG-TERM</text><text x="405" y="24" font-size="11" font-weight="bold" text-anchor="middle" fill="#334155">SHORT-TERM</text><rect x="10" y="34" width="130" height="40" rx="5" fill="#c7d2fe" stroke="#334155"/><text x="75" y="50" font-size="11" text-anchor="middle" fill="#1f2937">Unfair estates:</text><text x="75" y="65" font-size="11" text-anchor="middle" fill="#1f2937">privilege by birth</text><rect x="10" y="84" width="130" height="40" rx="5" fill="#c7d2fe" stroke="#334155"/><text x="75" y="100" font-size="11" text-anchor="middle" fill="#1f2937">Enlightenment ideas</text><text x="75" y="115" font-size="11" text-anchor="middle" fill="#1f2937">Rousseau, Voltaire</text><rect x="10" y="134" width="130" height="40" rx="5" fill="#c7d2fe" stroke="#334155"/><text x="75" y="150" font-size="11" text-anchor="middle" fill="#1f2937">Example of the</text><text x="75" y="165" font-size="11" text-anchor="middle" fill="#1f2937">American Revolution</text><rect x="340" y="34" width="130" height="40" rx="5" fill="#bae6fd" stroke="#334155"/><text x="405" y="50" font-size="11" text-anchor="middle" fill="#1f2937">Royal bankruptcy</text><text x="405" y="65" font-size="11" text-anchor="middle" fill="#1f2937">(war debts)</text><rect x="340" y="84" width="130" height="40" rx="5" fill="#bae6fd" stroke="#334155"/><text x="405" y="100" font-size="11" text-anchor="middle" fill="#1f2937">Bad harvest 1788:</text><text x="405" y="115" font-size="11" text-anchor="middle" fill="#1f2937">bread prices soar</text><rect x="340" y="134" width="130" height="40" rx="5" fill="#bae6fd" stroke="#334155"/><text x="405" y="150" font-size="11" text-anchor="middle" fill="#1f2937">Tax reforms fail</text><text x="405" y="165" font-size="11" text-anchor="middle" fill="#1f2937">(nobles refuse)</text><rect x="175" y="140" width="130" height="46" rx="6" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><text x="240" y="160" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">REVOLUTION</text><text x="240" y="177" font-size="12" text-anchor="middle" fill="#1f2937">1789</text><line x1="140" y1="54" x2="173" y2="150" stroke="#334155" stroke-width="1.5" marker-end="url(#frc-arr)"/><line x1="140" y1="104" x2="173" y2="157" stroke="#334155" stroke-width="1.5" marker-end="url(#frc-arr)"/><line x1="140" y1="154" x2="173" y2="164" stroke="#334155" stroke-width="1.5" marker-end="url(#frc-arr)"/><line x1="340" y1="54" x2="307" y2="150" stroke="#334155" stroke-width="1.5" marker-end="url(#frc-arr)"/><line x1="340" y1="104" x2="307" y2="157" stroke="#334155" stroke-width="1.5" marker-end="url(#frc-arr)"/><line x1="340" y1="154" x2="307" y2="164" stroke="#334155" stroke-width="1.5" marker-end="url(#frc-arr)"/><rect x="130" y="250" width="220" height="40" rx="5" fill="#fecaca" stroke="#334155"/><text x="240" y="266" font-size="11" font-weight="bold" text-anchor="middle" fill="#1f2937">TRIGGER: Louis calls the</text><text x="240" y="281" font-size="11" text-anchor="middle" fill="#1f2937">Estates-General (May 1789)</text><line x1="240" y1="250" x2="240" y2="190" stroke="#334155" stroke-width="1.5" marker-end="url(#frc-arr)"/><path d="M405 174 Q405 270 354 270" fill="none" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#frc-arr)"/><text x="412" y="228" font-size="11" fill="#334155">leads to</text><text x="10" y="214" font-size="11" fill="#334155">Solid arrow: feeds the crisis</text><text x="10" y="230" font-size="11" fill="#334155">Dashed: cause leads to cause</text></svg>`;

const timeline1789Svg = `<svg viewBox="0 0 480 252" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of May to October 1789, drawn to scale: Estates-General opens 5 May; National Assembly 17 June; Tennis Court Oath 20 June; Bastille stormed 14 July; the Great Fear from late July into August; privileges abolished 4 August; Declaration of the Rights of Man 26 August; Women's March to Versailles 5 to 6 October." font-family="sans-serif"><rect width="480" height="252" fill="#ffffff"/><text x="10" y="16" font-size="13" font-weight="bold" fill="#1f2937">1789: the year everything changed (May–Oct, to scale)</text><rect x="30" y="123" width="70.8" height="16" fill="#bae6fd" stroke="#334155"/><rect x="100.8" y="123" width="68.4" height="16" fill="#c7d2fe" stroke="#334155"/><rect x="169.2" y="123" width="70.8" height="16" fill="#bae6fd" stroke="#334155"/><rect x="240" y="123" width="70.8" height="16" fill="#c7d2fe" stroke="#334155"/><rect x="310.8" y="123" width="68.4" height="16" fill="#bae6fd" stroke="#334155"/><rect x="379.2" y="123" width="70.8" height="16" fill="#c7d2fe" stroke="#334155"/><rect x="212.6" y="123" width="38.8" height="16" fill="#fecaca" stroke="#334155" stroke-dasharray="3 2"/><text x="65" y="135" font-size="11" text-anchor="middle" fill="#1f2937">May</text><text x="135" y="135" font-size="11" text-anchor="middle" fill="#1f2937">Jun</text><text x="190" y="135" font-size="11" text-anchor="middle" fill="#1f2937">Jul</text><text x="275" y="135" font-size="11" text-anchor="middle" fill="#1f2937">Aug</text><text x="345" y="135" font-size="11" text-anchor="middle" fill="#1f2937">Sep</text><text x="415" y="135" font-size="11" text-anchor="middle" fill="#1f2937">Oct</text><line x1="39.1" y1="123" x2="39.1" y2="44" stroke="#334155"/><text x="42" y="40" font-size="11" fill="#1f2937">5 May: Estates-General opens</text><line x1="137.3" y1="123" x2="137.3" y2="74" stroke="#334155"/><text x="140" y="70" font-size="11" fill="#1f2937">17 Jun: National Assembly</text><line x1="198.9" y1="123" x2="198.9" y2="104" stroke="#334155"/><text x="202" y="100" font-size="11" font-weight="bold" fill="#1f2937">14 Jul: Bastille stormed</text><line x1="388.4" y1="123" x2="388.4" y2="44" stroke="#334155"/><text x="385" y="40" font-size="11" text-anchor="end" fill="#1f2937">5–6 Oct: Women's March</text><line x1="297.1" y1="139" x2="297.1" y2="151" stroke="#334155"/><text x="300" y="160" font-size="11" font-weight="bold" fill="#1f2937">26 Aug: Rights of Man</text><line x1="246.8" y1="139" x2="246.8" y2="176" stroke="#334155"/><text x="250" y="185" font-size="11" fill="#1f2937">4 Aug: privileges abolished</text><line x1="232" y1="139" x2="232" y2="201" stroke="#334155" stroke-dasharray="3 2"/><text x="235" y="210" font-size="11" fill="#1f2937">Great Fear (late Jul–Aug)</text><line x1="144.1" y1="139" x2="144.1" y2="231" stroke="#334155"/><text x="147" y="240" font-size="11" fill="#1f2937">20 Jun: Tennis Court Oath</text></svg>`;

const rightsGridSvg = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid of rights and their limits. Equality before the law: men gained equal laws and taxes, but women stayed under husbands and fathers. Power from the nation: about 4.3 million active citizens voted in 1791 and almost all men 21 and over in 1792, but women never voted and poorer men were shut out in 1791 and again from 1795. Free speech: newspapers and clubs boomed, but the Terror brought arrest on suspicion. Men born free: slavery was abolished in 1794, but only after the Saint-Domingue revolt, and Napoleon restored it in 1802." font-family="sans-serif"><rect width="480" height="300" fill="#ffffff"/><text x="10" y="18" font-size="13" font-weight="bold" fill="#1f2937">Rights and their limits, 1789–1802</text><rect x="10" y="28" width="140" height="26" fill="#e2e8f0" stroke="#334155"/><rect x="150" y="28" width="160" height="26" fill="#e2e8f0" stroke="#334155"/><rect x="310" y="28" width="160" height="26" fill="#e2e8f0" stroke="#334155"/><text x="80" y="46" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">The promise</text><text x="230" y="46" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">Who gained (change)</text><text x="390" y="46" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">The limits</text><rect x="10" y="54" width="140" height="54" fill="#c7d2fe" stroke="#334155"/><rect x="150" y="54" width="160" height="54" fill="#bbf7d0" stroke="#334155"/><rect x="310" y="54" width="160" height="54" fill="#fecaca" stroke="#334155"/><text x="16" y="71" font-size="11" fill="#1f2937">Equality before</text><text x="16" y="84" font-size="11" fill="#1f2937">the law (Art. 1, 6)</text><text x="156" y="71" font-size="11" fill="#1f2937">Same laws, taxes</text><text x="156" y="84" font-size="11" fill="#1f2937">and courts; jobs</text><text x="156" y="97" font-size="11" fill="#1f2937">open to talent</text><text x="316" y="71" font-size="11" fill="#1f2937">Women still legally</text><text x="316" y="84" font-size="11" fill="#1f2937">under husbands</text><text x="316" y="97" font-size="11" fill="#1f2937">and fathers</text><rect x="10" y="108" width="140" height="54" fill="#c7d2fe" stroke="#334155"/><rect x="150" y="108" width="160" height="54" fill="#bbf7d0" stroke="#334155"/><rect x="310" y="108" width="160" height="54" fill="#fecaca" stroke="#334155"/><text x="16" y="125" font-size="11" fill="#1f2937">Power comes from</text><text x="16" y="138" font-size="11" fill="#1f2937">the nation (Art. 3)</text><text x="156" y="125" font-size="11" fill="#1f2937">1791: ~4.3m “active”</text><text x="156" y="138" font-size="11" fill="#1f2937">men vote; 1792: most</text><text x="156" y="151" font-size="11" fill="#1f2937">men 21+ (Convention)</text><text x="316" y="125" font-size="11" fill="#1f2937">Women never vote;</text><text x="316" y="138" font-size="11" fill="#1f2937">poorer men shut out</text><text x="316" y="151" font-size="11" fill="#1f2937">1791 and from 1795</text><rect x="10" y="162" width="140" height="54" fill="#c7d2fe" stroke="#334155"/><rect x="150" y="162" width="160" height="54" fill="#bbf7d0" stroke="#334155"/><rect x="310" y="162" width="160" height="54" fill="#fecaca" stroke="#334155"/><text x="16" y="179" font-size="11" fill="#1f2937">Free speech</text><text x="16" y="192" font-size="11" fill="#1f2937">(Art. 11)</text><text x="156" y="179" font-size="11" fill="#1f2937">Newspapers, clubs</text><text x="156" y="192" font-size="11" fill="#1f2937">and pamphlets boom</text><text x="316" y="179" font-size="11" fill="#1f2937">Terror 1793–94:</text><text x="316" y="192" font-size="11" fill="#1f2937">Law of Suspects,</text><text x="316" y="205" font-size="11" fill="#1f2937">arrest on suspicion</text><rect x="10" y="216" width="140" height="54" fill="#c7d2fe" stroke="#334155"/><rect x="150" y="216" width="160" height="54" fill="#bbf7d0" stroke="#334155"/><rect x="310" y="216" width="160" height="54" fill="#fecaca" stroke="#334155"/><text x="16" y="233" font-size="11" fill="#1f2937">“Men are born and</text><text x="16" y="246" font-size="11" fill="#1f2937">remain free”</text><text x="16" y="259" font-size="11" fill="#1f2937">(Art. 1)</text><text x="156" y="233" font-size="11" fill="#1f2937">Slavery abolished</text><text x="156" y="246" font-size="11" fill="#1f2937">in the colonies</text><text x="156" y="259" font-size="11" fill="#1f2937">(Feb 1794)</text><text x="316" y="233" font-size="11" fill="#1f2937">Only after the 1791</text><text x="316" y="246" font-size="11" fill="#1f2937">Saint-Domingue revolt;</text><text x="316" y="259" font-size="11" fill="#1f2937">restored 1802</text><rect x="10" y="280" width="12" height="12" fill="#bbf7d0" stroke="#334155"/><text x="28" y="290" font-size="11" fill="#1f2937">change (gains)</text><rect x="130" y="280" width="12" height="12" fill="#fecaca" stroke="#334155"/><text x="148" y="290" font-size="11" fill="#1f2937">limits: continuity of inequality</text></svg>`;

const timeline1804Svg = `<svg viewBox="0 0 480 296" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline from 1789 to 1804, drawn to scale. Phases: limited monarchy 1789 to 1792, the National Convention (the first years of the republic) 1792 to 1795, Directory 1795 to 1799, Consulate 1799 to 1804, Empire from 1804. Events: Bastille July 1789, Flight to Varennes June 1791, Louis XVI executed January 1793, slavery abolished February 1794, Robespierre executed July 1794, the Terror 1793 to 1794, Napoleon's coup November 1799, Napoleonic Code March 1804, Napoleon crowned Emperor December 1804." font-family="sans-serif"><rect width="480" height="296" fill="#ffffff"/><text x="10" y="16" font-size="13" font-weight="bold" fill="#1f2937">1789–1804: from revolution to empire (to scale)</text><rect x="38.6" y="140" width="83.3" height="30" fill="#c7d2fe" stroke="#334155"/><text x="80.3" y="152" font-size="11" text-anchor="middle" fill="#1f2937">Monarchy</text><text x="80.3" y="165" font-size="11" text-anchor="middle" fill="#1f2937">(limited)</text><rect x="121.9" y="140" width="77.1" height="30" fill="#fde68a" stroke="#334155"/><text x="160.5" y="152" font-size="11" text-anchor="middle" fill="#1f2937">Convention</text><text x="160.5" y="165" font-size="11" text-anchor="middle" fill="#1f2937">1792–95</text><rect x="199" y="140" width="99.1" height="30" fill="#bae6fd" stroke="#334155"/><text x="248.6" y="152" font-size="11" text-anchor="middle" fill="#1f2937">Directory</text><text x="248.6" y="165" font-size="11" text-anchor="middle" fill="#1f2937">1795–99</text><rect x="298.1" y="140" width="111.9" height="30" fill="#bbf7d0" stroke="#334155"/><text x="354" y="152" font-size="11" text-anchor="middle" fill="#1f2937">Consulate</text><text x="354" y="165" font-size="11" text-anchor="middle" fill="#1f2937">1799–1804</text><rect x="410" y="140" width="40" height="30" fill="#c7d2fe" stroke="#334155"/><text x="430" y="159" font-size="11" text-anchor="middle" fill="#1f2937">Empire</text><line x1="30" y1="170" x2="450" y2="170" stroke="#1f2937"/><line x1="30" y1="170" x2="30" y2="176" stroke="#1f2937"/><line x1="79.4" y1="170" x2="79.4" y2="176" stroke="#1f2937"/><line x1="128.8" y1="170" x2="128.8" y2="176" stroke="#1f2937"/><line x1="178.2" y1="170" x2="178.2" y2="176" stroke="#1f2937"/><line x1="227.6" y1="170" x2="227.6" y2="176" stroke="#1f2937"/><line x1="277.1" y1="170" x2="277.1" y2="176" stroke="#1f2937"/><line x1="326.5" y1="170" x2="326.5" y2="176" stroke="#1f2937"/><line x1="375.9" y1="170" x2="375.9" y2="176" stroke="#1f2937"/><text x="30" y="187" font-size="11" text-anchor="middle" fill="#1f2937">1789</text><text x="79.4" y="187" font-size="11" text-anchor="middle" fill="#1f2937">1791</text><text x="128.8" y="187" font-size="11" text-anchor="middle" fill="#1f2937">1793</text><text x="178.2" y="187" font-size="11" text-anchor="middle" fill="#1f2937">1795</text><text x="227.6" y="187" font-size="11" text-anchor="middle" fill="#1f2937">1797</text><text x="277.1" y="187" font-size="11" text-anchor="middle" fill="#1f2937">1799</text><text x="326.5" y="187" font-size="11" text-anchor="middle" fill="#1f2937">1801</text><text x="375.9" y="187" font-size="11" text-anchor="middle" fill="#1f2937">1803</text><rect x="146.1" y="196" width="21.5" height="12" fill="#fecaca" stroke="#334155"/><text x="172" y="206" font-size="11" font-weight="bold" fill="#1f2937">Terror 1793–94</text><line x1="43.3" y1="140" x2="43.3" y2="38" stroke="#334155"/><text x="46" y="34" font-size="11" fill="#1f2937">Jul 1789: Bastille falls</text><line x1="91" y1="140" x2="91" y2="62" stroke="#334155"/><text x="94" y="58" font-size="11" fill="#1f2937">Jun 1791: Flight to Varennes</text><line x1="130.1" y1="140" x2="130.1" y2="86" stroke="#334155"/><text x="133" y="82" font-size="11" fill="#1f2937">Jan 1793: Louis XVI executed</text><line x1="156" y1="140" x2="156" y2="110" stroke="#334155"/><text x="159" y="106" font-size="11" fill="#1f2937">Feb 1794: slavery abolished</text><line x1="167.6" y1="140" x2="167.6" y2="134" stroke="#334155"/><text x="171" y="130" font-size="11" fill="#1f2937">Jul 1794: Robespierre executed</text><line x1="298.1" y1="170" x2="298.1" y2="232" stroke="#334155"/><text x="295" y="240" font-size="11" font-weight="bold" text-anchor="end" fill="#1f2937">Nov 1799: Napoleon's coup</text><line x1="406" y1="170" x2="406" y2="254" stroke="#334155"/><text x="403" y="262" font-size="11" text-anchor="end" fill="#1f2937">Mar 1804: Napoleonic Code</text><line x1="423.3" y1="170" x2="423.3" y2="276" stroke="#334155"/><text x="420" y="284" font-size="11" text-anchor="end" fill="#1f2937">Dec 1804: crowned Emperor</text></svg>`;

const changeGridSvg = `<svg viewBox="0 0 480 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Change and continuity grid for 1788, 1791, 1793 to 94 and 1804. Equality: weak in 1788, partial in 1791, 1793 to 94 and 1804. Representation: weak in 1788, partial in 1791 and 1793 to 94 (almost all men 21 and over elected the Convention), weak again under Napoleon in 1804. Rights protected: weak in 1788, strong in 1791, weak during the Terror and weak again in 1804. The shading is a judgement to argue with." font-family="sans-serif"><rect width="480" height="310" fill="#ffffff"/><text x="10" y="18" font-size="13" font-weight="bold" fill="#1f2937">Did the Revolution bring democracy? 1788–1804</text><rect x="100" y="26" width="92.5" height="34" fill="#e2e8f0" stroke="#334155"/><rect x="192.5" y="26" width="92.5" height="34" fill="#e2e8f0" stroke="#334155"/><rect x="285" y="26" width="92.5" height="34" fill="#e2e8f0" stroke="#334155"/><rect x="377.5" y="26" width="92.5" height="34" fill="#e2e8f0" stroke="#334155"/><text x="146.25" y="40" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">1788</text><text x="146.25" y="54" font-size="11" text-anchor="middle" fill="#1f2937">Ancien Régime</text><text x="238.75" y="40" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">1791</text><text x="238.75" y="54" font-size="11" text-anchor="middle" fill="#1f2937">Ltd monarchy</text><text x="331.25" y="40" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">1793–94</text><text x="331.25" y="54" font-size="11" text-anchor="middle" fill="#1f2937">Republic</text><text x="423.75" y="40" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">1804</text><text x="423.75" y="54" font-size="11" text-anchor="middle" fill="#1f2937">Empire</text><text x="55" y="101" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">Equality</text><text x="55" y="176" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">Representation</text><text x="55" y="244" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">Rights</text><text x="55" y="259" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">protected</text><rect x="100" y="60" width="92.5" height="75" fill="#fecaca" stroke="#334155"/><text x="146.25" y="84" font-size="11" text-anchor="middle" fill="#1f2937">Privilege by</text><text x="146.25" y="98" font-size="11" text-anchor="middle" fill="#1f2937">birth; Third</text><text x="146.25" y="112" font-size="11" text-anchor="middle" fill="#1f2937">Estate taxed</text><rect x="192.5" y="60" width="92.5" height="75" fill="#fde68a" stroke="#334155"/><text x="238.75" y="84" font-size="11" text-anchor="middle" fill="#1f2937">Privileges</text><text x="238.75" y="98" font-size="11" text-anchor="middle" fill="#1f2937">abolished; but</text><text x="238.75" y="112" font-size="11" text-anchor="middle" fill="#1f2937">votes unequal</text><rect x="285" y="60" width="92.5" height="75" fill="#fde68a" stroke="#334155"/><text x="331.25" y="84" font-size="11" text-anchor="middle" fill="#1f2937">Titles gone;</text><text x="331.25" y="98" font-size="11" text-anchor="middle" fill="#1f2937">women still</text><text x="331.25" y="112" font-size="11" text-anchor="middle" fill="#1f2937">shut out</text><rect x="377.5" y="60" width="92.5" height="75" fill="#fde68a" stroke="#334155"/><text x="423.75" y="84" font-size="11" text-anchor="middle" fill="#1f2937">Code: men</text><text x="423.75" y="98" font-size="11" text-anchor="middle" fill="#1f2937">equal, merit;</text><text x="423.75" y="112" font-size="11" text-anchor="middle" fill="#1f2937">wives obey</text><rect x="100" y="135" width="92.5" height="75" fill="#fecaca" stroke="#334155"/><text x="146.25" y="159" font-size="11" text-anchor="middle" fill="#1f2937">No national</text><text x="146.25" y="173" font-size="11" text-anchor="middle" fill="#1f2937">parliament</text><text x="146.25" y="187" font-size="11" text-anchor="middle" fill="#1f2937">since 1614</text><rect x="192.5" y="135" width="92.5" height="75" fill="#fde68a" stroke="#334155"/><text x="238.75" y="159" font-size="11" text-anchor="middle" fill="#1f2937">Vote for</text><text x="238.75" y="173" font-size="11" text-anchor="middle" fill="#1f2937">“active” men</text><text x="238.75" y="187" font-size="11" text-anchor="middle" fill="#1f2937">(~4.3 million)</text><rect x="285" y="135" width="92.5" height="75" fill="#fde68a" stroke="#334155"/><text x="331.25" y="159" font-size="11" text-anchor="middle" fill="#1f2937">Most men 21+</text><text x="331.25" y="173" font-size="11" text-anchor="middle" fill="#1f2937">elected it,</text><text x="331.25" y="187" font-size="11" text-anchor="middle" fill="#1f2937">then Terror</text><rect x="377.5" y="135" width="92.5" height="75" fill="#fecaca" stroke="#334155"/><text x="423.75" y="159" font-size="11" text-anchor="middle" fill="#1f2937">Plebiscites:</text><text x="423.75" y="173" font-size="11" text-anchor="middle" fill="#1f2937">yes/no only;</text><text x="423.75" y="187" font-size="11" text-anchor="middle" fill="#1f2937">no real choice</text><rect x="100" y="210" width="92.5" height="75" fill="#fecaca" stroke="#334155"/><text x="146.25" y="234" font-size="11" text-anchor="middle" fill="#1f2937">Arrest by</text><text x="146.25" y="248" font-size="11" text-anchor="middle" fill="#1f2937">royal letter;</text><text x="146.25" y="262" font-size="11" text-anchor="middle" fill="#1f2937">censorship</text><rect x="192.5" y="210" width="92.5" height="75" fill="#bbf7d0" stroke="#334155"/><text x="238.75" y="234" font-size="11" text-anchor="middle" fill="#1f2937">Rights of Man;</text><text x="238.75" y="248" font-size="11" text-anchor="middle" fill="#1f2937">free press;</text><text x="238.75" y="262" font-size="11" text-anchor="middle" fill="#1f2937">fair trials</text><rect x="285" y="210" width="92.5" height="75" fill="#fecaca" stroke="#334155"/><text x="331.25" y="234" font-size="11" text-anchor="middle" fill="#1f2937">Terror:</text><text x="331.25" y="248" font-size="11" text-anchor="middle" fill="#1f2937">arrest on</text><text x="331.25" y="262" font-size="11" text-anchor="middle" fill="#1f2937">suspicion</text><rect x="377.5" y="210" width="92.5" height="75" fill="#fecaca" stroke="#334155"/><text x="423.75" y="234" font-size="11" text-anchor="middle" fill="#1f2937">Censorship;</text><text x="423.75" y="248" font-size="11" text-anchor="middle" fill="#1f2937">police spies;</text><text x="423.75" y="262" font-size="11" text-anchor="middle" fill="#1f2937">property safe</text><rect x="10" y="291" width="12" height="12" fill="#bbf7d0" stroke="#334155"/><text x="28" y="301" font-size="11" fill="#1f2937">strong</text><rect x="80" y="291" width="12" height="12" fill="#fde68a" stroke="#334155"/><text x="98" y="301" font-size="11" fill="#1f2937">partial</text><rect x="155" y="291" width="12" height="12" fill="#fecaca" stroke="#334155"/><text x="173" y="301" font-size="11" fill="#1f2937">weak</text><text x="215" y="301" font-size="11" font-style="italic" fill="#334155">Shading = a judgement: challenge it!</text></svg>`;

export const guide: TopicGuide = {
  id: "french-revolution",
  title: "The French Revolution",
  strand: "Democracy",
  icon: "🗽",
  summary: "1789–1804: how a bankrupt king, hungry crowds and big ideas about rights turned France upside down — and why it ended with an emperor.",
  intro:
    "Our Term 3 enquiry asks: **How and why has democracy developed?** The French Revolution is where many modern ideas about democracy were first fought over in public — that power comes from the **people**, that everyone should be **equal before the law**, and that governments must **protect human rights**.\n\nBut it is not a simple success story. In 1789 the French swept away privilege and declared the Rights of Man. Within five years their king had been executed and thousands of citizens guillotined in the Terror; within fifteen years a general had crowned himself Emperor. Women were shut out of politics throughout.\n\nSo as you work through this topic, keep three questions open — the **change and continuity lens** we will use all term:\n\n- **Equality:** who became more equal, and who did not?\n- **Representation:** who got a say in government?\n- **Rights:** were people's rights actually protected, or only promised?",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "ancien-regime",
      heading: "The Ancien Régime",
      discovery: {
        problem:
          "It is spring 1788. You are a peasant farmer in Burgundy. Each year you hand over part of your harvest to the **Church** (the tithe), pay fees to your **lord** to grind your grain at his mill, and pay the **king's** land tax and salt tax. The bishop down the road owns vast estates but pays no land tax at all.\n\nIf you could send **one message** to the king, what would you ask for? Would you ask him to stop being king? Make a prediction before you read on.",
        idea:
          "Most French people in 1788 wanted **fairer treatment, not an end to the monarchy**. When communities wrote lists of grievances in 1789 (the *cahiers de doléances*), nearly all were loyal to the king; they attacked **privilege** — the special rights of the clergy and nobles — and unfair taxes. That matters for the whole enquiry: the Revolution was not planned. It grew out of a demand for **equality** that the old system could not meet.",
      },
      body:
        "**Ancien Régime** means “old order” — the name revolutionaries later gave to France before 1789.\n\n**Absolute monarchy.** **Louis XVI** (king from **1774**) ruled by **divine right**: he claimed his power came from God, so he answered to no parliament. He could make laws, raise taxes and even imprison people without trial using a *lettre de cachet* (a sealed royal order). France's national representative body, the **Estates-General**, had not met since **1614**.\n\n**Versailles.** The court lived at the vast palace of **Versailles**, about 20 km from Paris. Thousands of nobles competed there for royal favour. Louis's Austrian-born queen, **Marie Antoinette** (married 1770), was attacked in pamphlets for extravagance — yet court spending was only around 6% of the royal budget. War debts were the real drain. (And no, she almost certainly never said “Let them eat cake” — see the worked example.)\n\n**The three estates.** By law, society was split into three orders:\n\n| Estate | Who | Share of population (approx.) | Paid the *taille*? |\n|---|---|---|---|\n| First | Clergy | under 1% | No — gave a voluntary “free gift” |\n| Second | Nobles | about 2% | Almost all exempt |\n| Third | Everyone else: peasants, town workers and the **bourgeoisie** (middle classes) | about 97% | Yes |\n\nThe Church owned roughly a **tenth** of the land; nobles perhaps a **quarter**. Nobles held the top jobs in the army, Church and government.\n\n**The burden on the Third Estate.** A peasant could owe:\n- the **taille** (main direct tax) and the **gabelle** (salt tax) to the king;\n- the **tithe** (*dîme*) to the Church — in theory a tenth of the harvest;\n- **feudal dues** to the local lord — fees to use his mill, oven or wine-press, and payments when land changed hands;\n- the **corvée** — unpaid work on royal roads (turned into a money tax in 1787).\n\n**Not all the Third Estate was poor.** Rich merchants, lawyers and doctors — the bourgeoisie — were educated and ambitious, but often blocked from top posts by birth. That frustration matters: these were the people who would lead the Revolution.",
      diagram: estatesSvg,
      diagramCaption: "The pyramid shows rank; the bars show numbers. The smallest groups held the most privilege, and the largest group paid the most tax.",
      workedExamples: [
        {
          title: "Modelled answer: describe",
          problem: "Describe two features of the Ancien Régime that members of the Third Estate found unfair. (4 marks)",
          steps: [
            "**Plan.** A describe question rewards two *different* features, each with a precise supporting detail (1 mark for the feature, 1 for the detail). No judgement needed.",
            "**Feature 1:** “One feature was the unequal tax system. The Third Estate paid the **taille**, the main direct tax, while the clergy and almost all nobles were exempt — even though the Church owned around a tenth of the land.”",
            "**Feature 2:** “Another feature was the burden of **feudal dues** and the **tithe**. Peasants had to pay their local lord for using his mill or oven, and give part of their harvest to the Church, on top of royal taxes.”",
            "**Check.** Each feature is named *and* backed with specific evidence. Avoid vague lines such as “it was unfair to poor people” — say *what* was unfair and *who* benefited.",
          ],
          answer: "Two features, each supported: the unequal taxation of the taille, and the tithe and feudal dues paid to Church and lord.",
          yourTurn: {
            question: "Your turn: name the main direct tax that the Third Estate paid but the clergy and (almost all) nobles did not.",
            answer: { type: "text", accept: ["taille", "the taille", "la taille"], display: "the taille" },
            solution: "The **taille** was the king's main direct tax; the privileged First and Second Estates were exempt.",
          },
        },
        {
          title: "Myth-busting: “Let them eat cake”",
          problem:
            "Many websites claim that when Marie Antoinette was told the poor had no bread, she said “Let them eat cake.” How reliable is this claim?",
          steps: [
            "**Trace the earliest source.** The story appears in Jean-Jacques Rousseau's *Confessions*, about “a great princess” who said “Let them eat brioche” (a rich bread). Rousseau wrote that part in the **mid-1760s**.",
            "**Check the dates.** Marie Antoinette was born in **1755** and lived in Austria until **1770**. When Rousseau wrote, she was about ten years old and not yet in France — so the “great princess” cannot have been her.",
            "**Ask who benefited.** Revolutionaries and pamphlet writers wanted to portray the queen as heartless and foreign; the line was firmly attached to her name only much later. A catchy quotation that fits a villain's image should make a historian *more* suspicious, not less.",
            "**Judgement.** “Historians agree the quotation is almost certainly a myth. The story existed before she arrived in France, and no reliable source records her saying it.”",
          ],
          answer: "Unreliable: the story predates Marie Antoinette's arrival in France — a myth that suited her enemies.",
        },
      ],
      keyPoints: [
        "Louis XVI (king from 1774) was an **absolute monarch** who claimed **divine right**; the Estates-General had not met since **1614**.",
        "Society had three estates: **clergy** (under 1%), **nobles** (about 2%) and the **Third Estate** (about 97%).",
        "The privileged estates were largely **exempt from the taille**; the Third Estate also paid the **tithe**, **feudal dues** and the **gabelle**.",
        "The **bourgeoisie** were educated and often wealthy but blocked by birth — they became the Revolution's leaders.",
        "Marie Antoinette almost certainly never said “Let them eat cake” — the story was told before she came to France.",
      ],
      whyItWorks:
        "**Why did this matter?** A system where the people with the most wealth paid the least tax could only survive while the king had enough money and people accepted that birth decided rank. By the 1780s neither was true: the king was going broke, and the only way out — taxing the rich — meant attacking privilege. The Ancien Régime was not just unfair; it had trapped itself. And because the bourgeoisie had wealth and education but no political power, there was a ready-made group able to challenge it.",
      strategies: ["Think about who benefited", "Use precise evidence", "Check the provenance (NOP)"],
      thinkDeeper:
        "The Third Estate included both a rich Bordeaux merchant and a landless labourer. Did they really want the same things in 1789? What might they have disagreed about?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "causes-of-revolution",
      heading: "Why did revolution break out?",
      discovery: {
        problem:
          "Here is a puzzle. Privilege by birth had existed in France for **centuries**. Enlightenment books criticising kings had been read for **forty years**. Yet revolution did not break out in 1750 or 1770 — it broke out in **1789**.\n\nWhat must have been **different** about 1788–89? Write down two or three things before reading on.",
        idea:
          "Long-term causes explain why people were **ready** for change, but not why it happened **then**. Something had to turn resentment into action: in 1788–89 the king was **bankrupt**, bread was **expensive**, and he had to call the **Estates-General** — giving the Third Estate a stage to demand power. Think of a **bonfire**: long-term causes are the fuel, short-term causes the dry weather, and the trigger the spark. You need all three.",
      },
      body:
        "Historians sort causes into **long-term**, **short-term** and **trigger** — then look for the **links** between them.\n\n**Long-term causes (built up over decades)**\n- **An unfair system.** Privilege by birth and an unequal tax burden (see the Ancien Régime).\n- **Enlightenment ideas.** 18th-century thinkers argued that reason, not tradition, should shape society. **Rousseau** (*The Social Contract*, 1762) said legitimate power comes from the people's **general will**: “Man is born free, and everywhere he is in chains.” **Montesquieu** (*The Spirit of the Laws*, 1748) argued for the **separation of powers** — making laws, carrying them out and judging kept in different hands so no one can become a tyrant. **Voltaire** attacked censorship and religious intolerance and championed **free speech**. These ideas spread through books, pamphlets, salons and cafés, mainly among the educated bourgeoisie.\n- **The American example.** France helped the American colonists defeat Britain (French involvement 1778–83). Soldiers such as **Lafayette** came home having fought for “no taxation without representation” and seen a new republic founded on a declaration of rights.\n\n**Short-term causes (1786–89)**\n- **Bankruptcy.** Wars — above all helping the Americans, which cost over a billion livres — were paid for by borrowing. By 1788 about **half** of royal spending went on interest payments.\n- **Failed tax reforms.** In 1786 finance minister **Calonne** proposed a land tax that everyone would pay. The **Assembly of Notables** (1787) and the **parlements** (law courts run by nobles) refused to give up their exemptions and demanded the **Estates-General** instead.\n- **Hunger.** A hailstorm in July 1788 wrecked crops, then came a freezing winter. In Paris the price of a four-pound loaf rose from about 8–9 sous to **14½ sous** by July 1789; for poor families bread could swallow well over half their income.\n\n**The trigger**\nIn **August 1788**, out of money and options, Louis agreed to summon the **Estates-General** for **May 1789** — the first since 1614. Communities wrote **cahiers de doléances** (lists of grievances). The pamphlet ***What is the Third Estate?*** by **Abbé Sieyès** (January 1789) answered: “Everything.” Expectations soared.\n\n**Link the causes:** bankruptcy only became a crisis because **privilege** made it impossible to tax the rich; and Enlightenment ideas gave angry people a **language** — rights, the nation, the general will — to demand a new system rather than just cheaper bread.",
      diagram: causesSvg,
      diagramCaption: "Long-term causes made France ready to explode; short-term crises made 1788–89 dangerous; calling the Estates-General lit the spark.",
      workedExamples: [
        {
          title: "Modelled answer: explain why",
          problem: "Explain why revolution broke out in France in 1789. (8 marks)",
          steps: [
            "**Plan.** Choose three causes of different *types* (short-term, long-term, trigger), give each a PEEL paragraph, then show how they **link**. Don't just list.",
            "**Paragraph 1 — bankruptcy (short-term):** “One reason was royal bankruptcy. By 1788 about half of royal spending went on interest, largely because of the cost of helping the American colonists. This mattered because Louis had to find new money, and when Calonne proposed taxing the privileged, the nobles refused. The financial crisis therefore forced the king to call the Estates-General.”",
            "**Paragraph 2 — privilege and ideas (long-term):** “A deeper reason was the unfair estates system combined with Enlightenment ideas. The Third Estate was about 97% of the population and paid most taxes, yet had little say. Writers such as Rousseau argued that power should come from the general will of the people, so educated bourgeois deputies arrived at Versailles believing they had the right to speak for the nation.”",
            "**Paragraph 3 — hunger and the trigger:** “Finally, the poor harvest of 1788 drove the price of bread in Paris up to 14½ sous a loaf. When the Estates-General deadlocked over voting, hungry crowds were ready to act — as they did at the Bastille in July.”",
            "**Judgement:** “The causes were linked. Bankruptcy was the immediate reason Louis lost control, but it only became a *revolution* because long-term resentment of privilege and new ideas about rights gave people both a motive and a language for change.”",
          ],
          answer: "Bankruptcy forced the crisis; privilege, Enlightenment ideas and hunger turned it into a revolution — the causes worked together.",
          yourTurn: {
            question: "Your turn: in which year had the Estates-General last met before it was summoned in 1789?",
            answer: { type: "number", value: 1614 },
            solution: "**1614** — 175 years earlier, a sign of how absolute royal power had become.",
          },
        },
      ],
      keyPoints: [
        "**Long-term:** unfair estates and privilege; Enlightenment ideas (Rousseau — general will; Montesquieu — separation of powers; Voltaire — free speech); the American Revolution.",
        "**Short-term:** bankruptcy (about half of spending on debt interest by 1788); failed tax reforms blocked by nobles; the bad harvest of 1788 and soaring bread prices.",
        "**Trigger:** Louis summoned the **Estates-General** (agreed August 1788, opened May 1789).",
        "Helping the Americans was doubly dangerous: it **cost money** and spread **ideas**.",
        "Strong answers **link** causes rather than listing them.",
      ],
      whyItWorks:
        "**Why does the long/short/trigger idea help?** It answers two different questions at once: *why was France unstable?* (long-term) and *why did it collapse in 1789?* (short-term and trigger). The key link is money: the king needed the privileged to pay, the privileged refused, and the only way to break the deadlock was to call the nation together. Once the Third Estate had a stage, Enlightenment ideas turned a tax dispute into a fight about who should hold power.",
      strategies: ["Long-term vs short-term causes", "Link the causes", "Weigh factors"],
      thinkDeeper:
        "Was the American Revolution more important for the **money** it cost France or the **ideas** it spread? Could either have caused the Revolution on its own?",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "revolution-1789",
      heading: "1789: the year everything changed",
      discovery: {
        problem:
          "**Source A** — Louis XVI's personal journal, entry for **14 July 1789**, the day the Bastille was stormed.\n\n> Rien. *(Nothing.)*\n\nA classmate says: “This proves Louis didn't care about the Revolution.” Is that a safe inference? What else would you want to know about this journal before deciding?",
        idea:
          "**Check the provenance.** Louis used this journal mainly to record his **hunting** — “Rien” most likely means he caught nothing that day. The news from Paris reached Versailles only later that evening. So the source tells us more about Louis's daily habits than about his feelings. Historians still use it, carefully: a king who recorded hunting on the day the Bastille fell can suggest how **out of touch** court life was — but that is an argument, not proof.",
      },
      body:
        "**May–June: the fight over voting.** The **Estates-General** opened at Versailles on **5 May 1789**. The Third Estate had about 600 deputies — as many as the other two estates combined — but voting was **by order**: one vote per estate, so clergy and nobles could outvote the Third 2–1. The Third Estate demanded voting **by head** (one deputy, one vote). Deadlock.\n\n- **17 June** — the Third Estate declared itself the **National Assembly**, claiming to represent the whole nation.\n- **20 June** — locked out of their hall, the deputies crowded into a nearby indoor **tennis court** and swore the **Tennis Court Oath**: never to separate until France had a **constitution**.\n- Many clergy and some nobles joined them; on 27 June Louis ordered the rest to do the same — while also moving troops towards Paris.\n\n**July: Paris rises.** On 11 July Louis sacked **Necker**, a popular minister. Parisians feared the troops would crush the Assembly. On **14 July** crowds looking for gunpowder stormed the **Bastille**, a royal fortress-prison and symbol of power without trial. It held just **seven** prisoners. Around 100 attackers were killed, and the governor was killed by the crowd. Louis pulled back his troops and recalled Necker: the people had protected the Assembly.\n\n**Summer: the countryside rises.** In late July and early August, rumours that nobles were sending “brigands” to destroy crops caused panic — the **Great Fear**. Peasants attacked châteaux and burned the records of their feudal dues.\n\n**4 August: privilege falls.** In one night session, nobles and clergy in the Assembly gave up their privileges: tax exemptions, tithes, feudal dues and the sale of official posts were abolished. (Some dues had to be bought out; they were cancelled outright only in 1793.)\n\n**October: the king comes to Paris.** On **5 October** thousands of Parisian women, furious about bread prices, marched about 20 km to **Versailles**, followed by the National Guard. Next day the royal family was brought back to Paris, now effectively under the people's watch.\n\n| Date | Event | Who acted? |\n|---|---|---|\n| 17 June | National Assembly | Middle-class deputies |\n| 20 June | Tennis Court Oath | Deputies |\n| 14 July | Bastille stormed | Paris crowd |\n| Late July | Great Fear | Peasants |\n| 4 August | Privileges abolished | Assembly, under pressure |\n| 5–6 October | Women's March | Paris women |",
      diagram: timeline1789Svg,
      diagramCaption: "Drawn to scale: notice how quickly June's events happened, and how each action by deputies was followed by pressure from crowds.",
      workedExamples: [
        {
          title: "Modelled answer: which was more significant?",
          problem: "Which was more significant in 1789: the Tennis Court Oath or the Storming of the Bastille? Explain your answer. (8 marks)",
          steps: [
            "**Plan.** Use significance criteria: what it *changed*, *how many* it affected, how *long-lasting* it was, and what it *symbolised*. Make a case for each, then judge.",
            "**The Oath:** “The Tennis Court Oath (20 June) was significant because it was the moment the Third Estate's deputies claimed that power belonged to the nation, not the king. By swearing not to separate until France had a constitution, they openly defied royal authority — a political revolution made with words.”",
            "**The Bastille:** “However, the Storming of the Bastille (14 July) made that claim real. Louis had moved troops close to Paris; the crowd's action forced him to withdraw them and recall Necker. It showed that ordinary Parisians, not only deputies, could change events — and it became the Revolution's great symbol, still celebrated as France's national day.”",
            "**Counter-argument:** “Yet the Bastille held only seven prisoners, so its *practical* importance is easy to exaggerate; its power was mostly protective and symbolic.”",
            "**Judgement:** “Overall the Bastille was more significant in the short term, because without it the Assembly might have been crushed. But it was defending an idea the Oath had created — words from the deputies and force from the people worked together.”",
          ],
          answer: "The Bastille was more significant in the short term (it saved the Assembly), but it defended the claim the Oath had made.",
          yourTurn: {
            question: "Your turn: how many prisoners were being held in the Bastille when it was stormed on 14 July 1789?",
            answer: { type: "number", value: 7 },
            solution: "Just **seven** — the crowd wanted gunpowder and to destroy a symbol of royal power, not to free crowds of political prisoners.",
          },
        },
      ],
      keyPoints: [
        "**5 May 1789:** the Estates-General opened; the dispute was voting **by order** (per estate) versus **by head** (per deputy).",
        "**17 June:** the Third Estate became the **National Assembly**; **20 June:** the **Tennis Court Oath**.",
        "**14 July:** the **Bastille** was stormed — it held only seven prisoners, but it saved the Assembly and became a symbol.",
        "**Late July–August:** the **Great Fear** in the countryside; **4 August:** feudal privileges abolished.",
        "**5–6 October:** the **Women's March** brought the royal family from Versailles to Paris.",
      ],
      whyItWorks:
        "**Why did events move so fast?** Two forces pushed together. Middle-class deputies had the **ideas** and the legal claim (the nation is sovereign), but no army. Crowds in Paris and peasants in the countryside had **numbers** and anger about bread and dues. Each time the king tried to resist the deputies, popular action forced him back. That partnership — deputies plus crowds — is the engine of 1789, and later the source of tension when the crowds wanted more than the deputies would give.",
      strategies: ["Put it in chronological order", "Judge significance", "Check the provenance (NOP)"],
      thinkDeeper:
        "On 4 August, nobles voted away their own privileges. Was this generosity, fear, or clever tactics? What evidence from July and August would help you decide?",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "rights-of-man",
      heading: "Rights and their limits",
      discovery: {
        problem:
          "**Source B** — Article 1 of the *Declaration of the Rights of Man and of the Citizen*, 26 August 1789 (translated).\n\n> Men are born and remain free and equal in rights. Social distinctions may be founded only upon the general good.\n\nImagine this read aloud in 1789. List **three groups** of people — in France or its colonies — who might hear it and ask: *“Does this include me?”*",
        idea:
          "You might have listed **women**, **poor men**, **servants**, **enslaved people** in the colonies, and religious minorities such as **Protestants** and **Jews**. The Declaration used **universal** language but was applied to a narrower group. That gap is the key to this section — and to the whole history of democracy: excluded groups seized the Declaration's own words to demand inclusion. A promise of rights became a **lever** for change.",
      },
      body:
        "On **26 August 1789** the National Assembly issued the **Declaration of the Rights of Man and of the Citizen**. Its key ideas:\n- **Liberty and equality**: “Men are born and remain free and equal in rights” (Article 1).\n- **Popular sovereignty**: power comes from the **nation**, not the king (Article 3); law is “the expression of the general will” (Article 6).\n- **Equality before the law**, with jobs open to all on **merit** (Article 6).\n- **Free speech** and a free press (Article 11); no arrest except as the law allows (Article 7).\n- **Property** is “inviolable and sacred” (Article 17).\n\n**Constitutional monarchy.** The **Constitution of 1791** kept Louis as king but limited his power: an elected **Legislative Assembly** made the laws, and the king could only delay them (a *suspensive veto*). Power was separated, as Montesquieu had urged.\n\n**But who counted?** Men over 25 who paid tax worth at least three days' wages became **active citizens** with the vote — about **4.3 million**. Poorer men and servants were **passive citizens**: protected by the law but with no vote.\n\n**Women** were all passive. In **1791** the playwright **Olympe de Gouges** published the ***Declaration of the Rights of Woman and of the Female Citizen***, rewriting the 1789 text clause by clause: “Woman is born free and lives equal to man in her rights.” If a woman could “mount the scaffold”, she argued, she must also be able to “mount the rostrum” — speak in politics. She was guillotined in November 1793 for criticising the Jacobin leaders, and women's political clubs were banned that autumn.\n\n**Slavery.** France's richest colony, **Saint-Domingue** (today **Haiti**), had around half a million enslaved Africans producing sugar and coffee. The Declaration did not free them. In **August 1791** they rose in a massive revolt, later led by **Toussaint Louverture**. Under that pressure the Convention **abolished slavery** in all French colonies on **4 February 1794**.\n\nSome groups did gain: **Protestants** (1789) and **Jews** (1791) became full citizens.\n\nThe slogan **“Liberté, Égalité, Fraternité”** (liberty, equality, brotherhood) was used in the 1790s and later became the official motto of the French Republic.\n\n| Promise | Change | Continuity |\n|---|---|---|\n| Equality | Privileges ended for men | Women legally unequal |\n| Representation | Millions of men voted | Poor men and all women excluded (1791) |\n| Rights | Free press, fair trial | Slavery until enslaved people forced change |",
      diagram: rightsGridSvg,
      diagramCaption: "Read across each row: the promise, who gained, and who was still left out. The red column is where the next campaigns for rights would start.",
      workedExamples: [
        {
          title: "Modelled answer: how far?",
          problem: "How far did the French Revolution bring equality to the people of France between 1789 and 1794? (12 marks)",
          steps: [
            "**Plan.** Define equality in three ways — **legal**, **political** (the vote) and **for different groups** (women, the poor, enslaved people, minorities). Look for change *and* continuity, then reach a judgement with “to a large/limited extent… because…”.",
            "**Change — legal equality:** “The Revolution brought major legal equality. The 4 August decrees ended noble and Church privileges, and the Declaration of the Rights of Man stated that men were ‘born and remain free and equal in rights’, with jobs open on merit. Protestants and Jews became full citizens. This was a sharp break from the Ancien Régime, where birth decided rank and tax.”",
            "**Continuity — political inequality:** “However, political equality was limited. The 1791 Constitution divided men into active and passive citizens, so poorer men could not vote, and every woman was excluded — as Olympe de Gouges protested in her Declaration of the Rights of Woman (1791).”",
            "**Development over time:** “Equality widened as the Revolution radicalised. In 1792 almost all men could vote for the Convention, and in February 1794 slavery was abolished — though only after enslaved people in Saint-Domingue had forced the issue by revolt.”",
            "**Judgement:** “The Revolution brought equality to a large extent for men in law, and to a growing extent in politics by 1792–94, but hardly at all for women. Equality was usually *won* by groups who pushed for it, not freely given.”",
          ],
          answer: "Large change in legal equality for men; partial but widening political equality; continuity of exclusion for women.",
          yourTurn: {
            question: "Your turn: who wrote the *Declaration of the Rights of Woman and of the Female Citizen* (1791)? Give her name.",
            answer: { type: "text", accept: ["Olympe de Gouges", "de Gouges", "Gouges", "Olympe de Gouge", "Marie Gouze"], display: "Olympe de Gouges" },
            solution: "**Olympe de Gouges**, a playwright who copied the 1789 Declaration's structure to show women's exclusion.",
          },
        },
      ],
      keyPoints: [
        "The **Declaration of the Rights of Man and of the Citizen** (26 August 1789): liberty, equality before the law, popular sovereignty, free speech, property.",
        "The **1791 Constitution** made France a **constitutional monarchy** with separated powers.",
        "**Active citizens** (about 4.3 million men paying enough tax) could vote; **passive citizens** — poorer men, servants and all women — could not.",
        "**Olympe de Gouges** wrote the *Declaration of the Rights of Woman* (1791) and was guillotined in 1793.",
        "Enslaved people in **Saint-Domingue** revolted in 1791; France **abolished slavery on 4 February 1794**.",
        "“**Liberté, Égalité, Fraternité**” — the slogan that outlived the Revolution.",
      ],
      whyItWorks:
        "**Why does the gap between promise and reality matter?** Because universal words are hard to contain. Once the Assembly said rights belonged to “men” by nature, anyone left out could point to the gap and demand to be included — women like de Gouges, poorer men, and above all enslaved people in Saint-Domingue, who forced abolition by revolt. This is how democracy tends to develop: not by rulers handing out rights, but by excluded groups holding rulers to their own principles. You will see exactly the same pattern with the suffragists and suffragettes.",
      strategies: ["Spot change and continuity", "Ask “how typical?”", "Consider the counter-argument"],
      thinkDeeper:
        "The Assembly said property was “inviolable and sacred” *and* that men were born free. How could slave-owners in Saint-Domingue use the Declaration to defend slavery — and how could enslaved people use it to attack it?",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "radical-revolution",
      heading: "Republic and Terror, 1791–1794",
      discovery: {
        problem:
          "In 1789 almost nobody in France wanted to get rid of the king. In January 1793 he was executed.\n\nHere are four things that happened in between. Rank them: which did **most** to turn people from “reform the king” to “remove the king”?\n- The king vetoed laws the Assembly passed.\n- The king and his family tried to escape abroad in disguise.\n- Foreign armies invaded, and their commander threatened Paris.\n- Bread prices kept rising.",
        idea:
          "Many historians stress **trust** and **war**. The escape attempt (the Flight to Varennes, 1791) suggested the king had never accepted the Revolution. The war (from 1792) turned that distrust into fear: if the king's side won, the revolutionaries would be punished. **Fear plus war** is a powerful radicalising mix — it made extreme measures seem like self-defence. There is no single right ranking; what matters is **linking** the factors.",
      },
      body:
        "**1. Trust breaks: the Flight to Varennes (June 1791).** On the night of **20–21 June 1791** the royal family fled Paris in disguise, heading for the eastern border. They were recognised and stopped at **Varennes** and brought back. Louis had left a note criticising the Revolution. Many now saw him as a traitor, although the Assembly kept him as king under the new constitution.\n\n**2. War (from April 1792).** France declared war on **Austria** in April 1792, and **Prussia** joined Austria. Early defeats, plus the Prussian commander's threat (the **Brunswick Manifesto**, July 1792) to destroy Paris if the royal family were harmed, made Louis — with his Austrian wife — look like the enemy's ally.\n\n**3. The monarchy falls.** On **10 August 1792** Parisian crowds and National Guards stormed the **Tuileries** palace; the king was suspended and imprisoned. A new assembly, the **National Convention**, was elected by almost **all men aged 21+** — **universal male suffrage**, although turnout was low. In **September 1792** it abolished the monarchy: France became a **republic**.\n\n**4. Regicide.** Louis — now called “Citizen Louis Capet” — was tried by the Convention and executed by **guillotine** on **21 January 1793**. Marie Antoinette was executed on **16 October 1793**.\n\n**5. The Terror (about September 1793 – July 1794).** Facing foreign armies, civil war in the **Vendée** region and food shortages, the Convention gave sweeping power to the **Committee of Public Safety**, dominated by **Maximilien Robespierre** and the **Jacobins**, backed by the Paris **sans-culottes** (radical working people). The **Law of Suspects** (September 1793) allowed arrest on vague suspicion. Revolutionary courts sent around **17,000** people to official execution; many more died in prison or without trial, and the war in the Vendée killed far more. Most victims were ordinary people, not nobles. Robespierre defended this: “Terror is nothing other than justice, prompt, severe, inflexible.”\n\n**6. Thermidor.** As French armies began winning, the Terror seemed less necessary, and Convention members feared they might be next. Robespierre was arrested and guillotined on **28 July 1794**.\n\n**Notice the paradox for our enquiry:** the widest franchise of the 1790s went hand in hand with the **least** protection for human rights. More representation did not automatically mean more rights.",
      diagram: timeline1804Svg,
      diagramCaption: "Drawn to scale. The Terror lasted less than a year — yet it shapes how the whole Revolution is remembered. Notice that slavery was abolished in the middle of it.",
      workedExamples: [
        {
          title: "Modelled answer: explain why",
          problem: "Explain why the French Revolution became more radical between 1791 and 1794. (8 marks)",
          steps: [
            "**Plan.** Three linked causes — loss of **trust** in the king, **war**, and **crisis inside France** — each explained, then connected in a judgement.",
            "**Paragraph 1 — trust:** “One reason was the Flight to Varennes in June 1791. When the royal family tried to escape in disguise, many French people concluded that Louis had never accepted the Revolution. This mattered because a constitutional monarchy only works if the king can be trusted, so republican ideas grew.”",
            "**Paragraph 2 — war:** “A more important reason was war. From April 1792 France fought Austria and Prussia, and the Brunswick Manifesto threatened Paris. Louis now looked like an ally of the enemy, which led to the storming of the Tuileries, the republic and his execution in January 1793.”",
            "**Paragraph 3 — crisis and the Jacobins:** “War also created emergencies at home — civil war in the Vendée and food shortages — which allowed Robespierre and the Committee of Public Safety to justify the Terror and the Law of Suspects as necessary to save the Revolution.”",
            "**Judgement:** “War was the most important cause because it linked the others: it turned distrust of the king into fear of betrayal, and fear made extreme measures seem like self-defence. Tellingly, once French armies began winning in 1794, the Terror ended.”",
          ],
          answer: "War was the key cause: it turned distrust into fear, and fear justified the Terror — which ended once the war turned.",
          yourTurn: {
            question: "Your turn: in which year was Louis XVI executed?",
            answer: { type: "number", value: 1793 },
            solution: "**21 January 1793**, after being tried by the National Convention.",
          },
        },
      ],
      keyPoints: [
        "The **Flight to Varennes** (June 1791) destroyed trust in Louis XVI.",
        "**War** with Austria and Prussia (from April 1792) made the king look like a traitor; the **Tuileries** was stormed on **10 August 1792**.",
        "France became a **republic** in **September 1792**; the Convention was elected by **universal male suffrage**.",
        "Louis XVI was executed on **21 January 1793**, Marie Antoinette on 16 October 1793.",
        "**The Terror** (1793–94): Robespierre, the Jacobins and the **Committee of Public Safety**; around **17,000** official executions, most victims ordinary people.",
        "Robespierre was executed in **July 1794**.",
      ],
      whyItWorks:
        "**Why did a revolution for rights produce the Terror?** Revolutionaries believed they were fighting for survival: foreign armies on the border, rebellion inside France, and a king who had tried to flee. In that atmosphere, opponents looked like traitors, and suspending rights looked like protecting the Revolution. This is a pattern you met in Term 2 — **crisis** lets leaders justify extraordinary powers. It also shows that **representation** (who votes) and **protection of rights** (whether the state can arrest you without good reason) are different things.",
      strategies: ["Link the causes", "Avoid hindsight", "Consider the counter-argument"],
      thinkDeeper:
        "Robespierre argued that “virtue” without “terror” was powerless during a revolution. Can a government ever be justified in suspending rights to defend them? Think of a modern example before you answer.",
    },
    // ------------------------------------------------------------------ 6
    {
      id: "napoleon-and-legacy",
      heading: "Napoleon and the legacy of the Revolution",
      discovery: {
        problem:
          "Ten years after the Rights of Man, an army general took power in a **coup**. In **1804** he crowned himself **Emperor** — and in a national vote (a plebiscite) the official result was over 99% “yes”.\n\nUse your **Term 2 checklist** for how dictators rise: was there a **crisis**? A **weak government**? A **charismatic leader**? Predict how a revolution for liberty could end with an emperor.",
        idea:
          "All three conditions were present. **Crisis:** years of war, unstable money and revolts. **Weak government:** the Directory was corrupt and kept overturning elections it disliked. **Charismatic leader:** Napoleon had won spectacular victories and used newspapers and paintings to build his image. People exhausted by upheaval traded **liberty for order** — and the plebiscites gave his power a democratic disguise.",
      },
      body:
        "**The Directory (1795–99).** After the Terror, a new constitution gave power to five **Directors** and two councils — and brought back a **property qualification** for the men who chose deputies. The Directory was corrupt and unpopular, faced war, rising prices and plots from royalists and Jacobins, and cancelled election results it disliked. It relied more and more on the army.\n\n**Napoleon's rise.** **Napoleon Bonaparte**, a Corsican-born artillery officer, became famous by crushing a royalist uprising in Paris (1795) and winning brilliant victories in Italy (1796–97). On **9 November 1799** (18 Brumaire in the revolutionary calendar) he joined a **coup** that overthrew the Directory. As **First Consul** he held real power, became **Consul for life** in 1802 and crowned himself **Emperor** in Notre-Dame in **December 1804**. Each step was approved by a **plebiscite** (a yes/no vote) — and historians have shown the 1800 result was heavily inflated.\n\n**What did Napoleon keep, and what did he destroy?**\n\n| Kept from the Revolution | Reversed or limited |\n|---|---|\n| Equality before the law for men; no feudal privilege | No real elections; censorship; police spies |\n| Careers open to talent — e.g. the **Legion of Honour** (1802) | A hereditary emperor, and later a new nobility |\n| Peasants kept land gained in the Revolution | Wives must obey husbands under the Code |\n| Religious toleration (agreement with the Pope, 1801) | **Slavery restored** in French colonies (1802) |\n\nThe **Napoleonic Code** (Civil Code, **1804**) carried equality before the law and merit across the lands Napoleon conquered, and still shapes legal systems in many countries. Saint-Domingue, however, defeated his army and declared independence as **Haiti** on **1 January 1804**.\n\n**Change and continuity: did the Revolution create democracy?**\n- **Continuity:** after Napoleon's defeat, a Bourbon king — Louis XVI's brother, **Louis XVIII** — was back on the throne by 1815. France gained lasting universal male suffrage only in **1848**; French women won the vote only in **1944** (first voting in 1945).\n- **Change:** the Revolution changed what people believed government was *for* — rights belonging to every citizen, power coming from the nation, equality before the law. Those ideas outlived the Terror, the Empire and the restored kings.\n\nThe British women's suffrage campaign, which you study next, used exactly this language of rights and representation.",
      diagram: changeGridSvg,
      diagramCaption: "A change-and-continuity grid for our three themes. Representation and rights rose and fell — progress was not a straight line. Do you agree with every square?",
      workedExamples: [
        {
          title: "Modelled answer: how far do you agree?",
          problem: "“The French Revolution created democracy in France.” How far do you agree? (16 marks)",
          steps: [
            "**Plan.** Define democracy using our three tests — **representation**, **equality**, **protection of rights**. Argue for, argue against, then judge *how far*, using change and continuity across 1789–1815 and beyond.",
            "**Agree:** “In some ways the Revolution did create democracy. The Declaration of the Rights of Man (1789) said power came from the nation and that men were equal in rights, ending privilege by birth. In 1792 the Convention was elected by almost all adult men — universal male suffrage — something no previous French government had allowed.”",
            "**Disagree — rights:** “However, rights were not protected. During the Terror (1793–94) the Law of Suspects allowed arrest on suspicion, and around 17,000 people were officially executed. A system that elects a parliament but executes its critics is not a democracy.”",
            "**Disagree — representation and equality:** “Representation also went backwards. The Directory restored a property qualification, and Napoleon's plebiscites offered only yes or no. Women were excluded throughout, and by 1815 a Bourbon king had returned.”",
            "**Long-term view:** “Yet the Revolution's ideas lasted. The principles of equality before the law and national sovereignty spread through the Napoleonic Code and inspired later campaigns — France restored universal male suffrage in 1848, and women won the vote in 1944.”",
            "**Judgement:** “I agree only to a limited extent. The Revolution did not create a lasting democracy — it ended in dictatorship and excluded women. But it created the *ideas* of democracy that later generations fought to put into practice, so it was a beginning rather than an achievement.”",
          ],
          answer: "Only to a limited extent: it created democratic ideas and briefly universal male suffrage, but not lasting democracy or protected rights.",
          yourTurn: {
            question: "Your turn: in which year did Napoleon crown himself Emperor of the French?",
            answer: { type: "number", value: 1804 },
            solution: "**1804** — on 2 December in Notre-Dame, the same year as the Napoleonic Code.",
          },
        },
        {
          title: "Modelled answer: comparing across topics",
          problem: "Explain one way in which Napoleon's rise to power was similar to the rise of a dictator you studied in Term 2. (4 marks)",
          steps: [
            "**Plan.** Name the similarity, give precise evidence from *both* cases, and explain why it mattered. Watch out: Hitler did not seize power in a coup, so the similarity is not the method.",
            "**Similarity — crisis and weak government:** “Both rose during a crisis when government was weak. In France the Directory was corrupt, faced war and rising prices, and kept overturning elections; in Germany the Weimar governments of the early 1930s could not solve the Depression or command a majority.”",
            "**Explain:** “This mattered because people lost faith in the existing system and were willing to accept a strong leader who promised order — Napoleon after the 1799 coup, Hitler after being appointed Chancellor in 1933.”",
            "**Extra precision:** “Both also used votes to make their power look popular — Napoleon's plebiscites, Hitler's 1934 plebiscite.”",
          ],
          answer: "Both exploited a crisis and a weak government, and used plebiscites to dress up their power as popular.",
        },
      ],
      keyPoints: [
        "The **Directory** (1795–99) restored a property qualification and was weak, corrupt and dependent on the army.",
        "**Napoleon** seized power in a **coup** (9 November 1799), became First Consul, then **Emperor** (December 1804) — approved by **plebiscites**.",
        "The **Napoleonic Code** (1804) kept equality before the law for men and merit, but made wives subordinate to husbands.",
        "Napoleon **restored slavery** (1802); **Haiti** won independence on **1 January 1804**.",
        "Napoleon's rise fits the Term 2 pattern: **crisis + weak government + charismatic leader**.",
        "Did the Revolution create democracy? It created the **ideas** — rights, national sovereignty, equality — but not a lasting democracy.",
      ],
      whyItWorks:
        "**Why did the Revolution end in dictatorship?** It had destroyed the old source of authority (divine-right monarchy) faster than it could build trusted new ones. Each new constitution failed, war never stopped, and every group — royalists, Jacobins, moderates — had used force. In that vacuum, the institution that worked best was the **army**, and its most successful general offered order and glory. Yet the Revolution's ideas survived the dictatorship because Napoleon himself needed them: his Code, his plebiscites and his career-for-talent all claimed legitimacy from the people rather than from God.",
      strategies: ["Spot change and continuity", "Compare and contrast", "Judge significance"],
      thinkDeeper:
        "Was Napoleon the **betrayer** of the Revolution or its **heir**? Find one piece of evidence for each view — and decide which matters more for the development of democracy.",
    },
  ],
  learn: {
    flashcards: [
      { front: "Ancien Régime", back: "“Old order”: France before 1789 — absolute monarchy, three estates, privilege by birth." },
      { front: "Divine right of kings", back: "The belief that a king's power comes from God, so he answers to no parliament or people." },
      { front: "First Estate", back: "The clergy — under 1% of the population; exempt from the taille; collected the tithe." },
      { front: "Second Estate", back: "The nobles — about 2% of the population; almost all exempt from the taille; held top jobs." },
      { front: "Third Estate", back: "Everyone else (about 97%): peasants, town workers and the bourgeoisie. Paid most of the taxes." },
      { front: "Taille", back: "The main direct (land) tax, paid by the Third Estate; the privileged were exempt." },
      { front: "Tithe (dîme)", back: "Payment to the Church, in theory a tenth of a person's harvest or income." },
      { front: "Bourgeoisie", back: "The wealthy, educated middle class of the Third Estate — merchants, lawyers, doctors. They led the Revolution." },
      { front: "Rousseau", back: "Enlightenment writer: *The Social Contract* (1762); power should come from the people's **general will**." },
      { front: "Montesquieu", back: "Enlightenment writer: *The Spirit of the Laws* (1748); argued for the **separation of powers**." },
      { front: "Voltaire", back: "Enlightenment writer who attacked censorship and religious intolerance; championed **free speech**." },
      { front: "Estates-General", back: "France's assembly of the three estates. Not called between 1614 and 1789; opened 5 May 1789." },
      { front: "Tennis Court Oath (20 June 1789)", back: "Deputies of the new National Assembly swore not to separate until France had a constitution." },
      { front: "Storming of the Bastille (14 July 1789)", back: "Parisians captured the royal fortress-prison (holding seven prisoners), protecting the Assembly from the king's troops." },
      { front: "Great Fear (summer 1789)", back: "Panic in the countryside; peasants attacked châteaux and burned records of feudal dues." },
      { front: "Declaration of the Rights of Man and of the Citizen", back: "26 August 1789: liberty, equality before the law, sovereignty of the nation, free speech, property." },
      { front: "Active and passive citizens", back: "1791: men paying enough tax could vote (active, about 4.3 million); poorer men, servants and all women could not (passive)." },
      { front: "Olympe de Gouges", back: "Wrote the *Declaration of the Rights of Woman and of the Female Citizen* (1791); guillotined 1793." },
      { front: "Toussaint Louverture", back: "Leader of the revolt of enslaved people in Saint-Domingue (Haiti), which began in 1791." },
      { front: "Sans-culottes", back: "Radical Parisian working people (literally “without knee-breeches”) who backed the Jacobins." },
      { front: "Committee of Public Safety", back: "Twelve-man committee, dominated by Robespierre, that ran France during the Terror (1793–94)." },
      { front: "Law of Suspects (September 1793)", back: "Allowed the arrest of anyone suspected of opposing the Revolution — the legal basis of the Terror." },
      { front: "The Directory", back: "Government of five Directors, 1795–99; restored a property qualification; overthrown by Napoleon." },
      { front: "Plebiscite", back: "A yes/no vote of the whole people on one question — used by Napoleon to make his power look popular." },
      { front: "Napoleonic Code (1804)", back: "Civil law code: equality before the law for men, merit, property rights — but wives had to obey husbands." },
    ],
    mustKnow: [
      "Can you describe the three estates, with rough population shares and who paid the taille?",
      "Can you explain at least two long-term, two short-term causes and the trigger of the Revolution — and link them?",
      "Can you name Rousseau, Montesquieu and Voltaire and the key idea of each?",
      "Can you put the events of 1789 in order: Estates-General, National Assembly, Tennis Court Oath, Bastille, Great Fear, 4 August, Rights of Man, Women's March?",
      "Can you explain what the Declaration of the Rights of Man promised and who was left out?",
      "Can you explain the difference between active and passive citizens?",
      "Can you explain why the Revolution became more radical between 1791 and 1794?",
      "Can you describe the Terror and give the approximate number of official executions?",
      "Can you explain how Napoleon came to power and compare it with the Term 2 dictators?",
      "Can you judge how far the Revolution brought change in equality, representation and the protection of rights — and where there was continuity?",
    ],
    misconceptions: [
      {
        wrong: "Marie Antoinette said “Let them eat cake.”",
        right: "Almost certainly a myth: Rousseau told the story of “a great princess” in the mid-1760s, when Marie Antoinette was a child in Austria.",
      },
      {
        wrong: "The Bastille was packed with political prisoners who were freed by the crowd.",
        right: "It held only **seven** prisoners. The crowd wanted its gunpowder, and it was a symbol of royal power to imprison without trial.",
      },
      {
        wrong: "France became a republic and executed the king in 1789.",
        right: "France was a **constitutional monarchy** until **September 1792**; Louis XVI was executed in **January 1793**.",
      },
      {
        wrong: "The Rights of Man gave everyone, including women, equal rights and the vote.",
        right: "Women, poorer men and servants could not vote in 1791, and slavery continued until 1794. The language was universal; the practice was not.",
      },
      {
        wrong: "Most victims of the Terror were nobles.",
        right: "Most victims were ordinary people — peasants, workers and the middle classes. Nobles and clergy were a minority of those executed.",
      },
      {
        wrong: "Voltaire said “I disapprove of what you say, but I will defend to the death your right to say it.”",
        right: "Those words were written in 1906 by Evelyn Beatrice Hall to summarise his attitude — they are not his own quotation.",
      },
      {
        wrong: "Napoleon was unusually short.",
        right: "He was roughly average height for his time. The myth comes partly from British cartoons and his nickname “the little corporal”.",
      },
      {
        wrong: "Dr Guillotin invented the guillotine and was executed by it.",
        right: "He proposed a quick, equal method of execution; the machine was designed by others, and Guillotin died of natural causes in 1814.",
      },
    ],
    examMistakes: [
      "Describing events in order (“and then…”) instead of explaining **why** they happened.",
      "Listing causes without saying whether they are long-term, short-term or the trigger — or without **linking** them.",
      "Mixing up the **Tennis Court Oath** (20 June) and the **Storming of the Bastille** (14 July).",
      "Calling the whole period 1789–1799 “the Terror” — the Terror was roughly September 1793 to July 1794.",
      "Answering a “how far” question one-sidedly, or giving a judgement without explaining **why**.",
      "Treating the Declaration of the Rights of Man as proof that France became a democracy, without discussing who was excluded.",
      "Writing “the 17th century” for the 1700s — 1789 is in the **18th century**.",
      "Saying Napoleon was elected: he took power in a **coup** in 1799; plebiscites came afterwards.",
    ],
    mnemonics: [
      {
        topic: "Enlightenment thinkers",
        device: "R-M-V: **R**ousseau = **R**ule by the people; **M**ontesquieu = **M**any powers (separated); **V**oltaire = **V**oice (free speech).",
        explanation: "Each thinker's initial matches the idea that the revolutionaries borrowed from him.",
      },
      {
        topic: "Short-term causes and trigger",
        device: "The three Ds: **D**ebt, **D**ough, **D**eadlock.",
        explanation: "Debt = royal bankruptcy; Dough = bread prices after the 1788 harvest; Deadlock = the voting dispute at the Estates-General that led to the National Assembly.",
      },
      {
        topic: "The order of 1789",
        device: "“**E**very **N**ervous **T**eenager **B**uys **G**reat **F**rench **R**olls **W**eekly.”",
        explanation: "Estates-General (May), National Assembly (17 June), Tennis Court Oath (20 June), Bastille (14 July), Great Fear (late July), Feudal privileges abolished (4 August), Rights of Man (26 August), Women's March (October).",
      },
      {
        topic: "How dictators rise (Term 2 link)",
        device: "**C-W-C**: **C**risis + **W**eak government + **C**harismatic leader.",
        explanation: "Napoleon in 1799 fits the same checklist you used for Hitler, Mao and Pol Pot.",
      },
    ],
    realWorld: [
      {
        title: "14 July — France's national day",
        detail: "The storming of the Bastille is still marked every year in France with parades and fireworks. Ask yourself why a nation would celebrate an act of crowd violence — and what that tells you about how history is remembered.",
        emoji: "🎆",
      },
      {
        title: "Left and right in politics",
        detail: "In the National Assembly of 1789, supporters of strong royal power sat on the president's right and those wanting more change sat on the left. We still call political views “left-wing” and “right-wing” today.",
        emoji: "🪑",
      },
      {
        title: "Singapore's Constitution",
        detail: "Article 12 of Singapore's Constitution says “All persons are equal before the law and entitled to the equal protection of the law” — the same principle of legal equality the Revolution fought for in 1789.",
        emoji: "🇸🇬",
      },
      {
        title: "Human rights declarations",
        detail: "The Universal Declaration of Human Rights (1948) opens with words that echo 1789: “All human beings are born free and equal in dignity and rights.” Notice it says *human beings*, not *men*.",
        emoji: "🌍",
      },
      {
        title: "The metric system",
        detail: "Revolutionary France introduced the metre and kilogram to replace hundreds of local measures. Singapore, like most of the world, uses this system today.",
        emoji: "📏",
      },
      {
        title: "Napoleon's legal legacy",
        detail: "Many legal systems in Europe, Latin America, Quebec and Louisiana are based on or influenced by the Napoleonic Code.",
        emoji: "⚖️",
      },
    ],
    videos: [
      { title: "The French Revolution (animated, two parts)", channel: "Oversimplified", url: "https://www.youtube.com/results?search_query=oversimplified+french+revolution" },
      { title: "The French Revolution", channel: "Crash Course World History", url: "https://www.youtube.com/results?search_query=crash+course+world+history+french+revolution" },
      { title: "Causes of the French Revolution", channel: "Simple History", url: "https://www.youtube.com/results?search_query=simple+history+french+revolution" },
      { title: "Was Marie Antoinette really to blame?", channel: "TED-Ed", url: "https://www.youtube.com/results?search_query=ted-ed+marie+antoinette" },
      { title: "The Haitian Revolution", channel: "Crash Course World History", url: "https://www.youtube.com/results?search_query=crash+course+haitian+revolution" },
    ],
    formulas: [
      { name: "1774", formula: "Louis XVI becomes king of France.", note: "He married Marie Antoinette in 1770." },
      { name: "1788", formula: "Royal bankruptcy; poor harvest; Louis agrees (August) to call the Estates-General.", note: "Short-term causes and trigger." },
      { name: "5 May 1789", formula: "The Estates-General opens at Versailles.", note: "First meeting since 1614." },
      { name: "17 & 20 June 1789", formula: "Third Estate declares itself the National Assembly; Tennis Court Oath." },
      { name: "14 July 1789", formula: "Storming of the Bastille.", note: "Only seven prisoners inside." },
      { name: "4 August 1789", formula: "Feudal privileges abolished." },
      { name: "26 August 1789", formula: "Declaration of the Rights of Man and of the Citizen." },
      { name: "5–6 October 1789", formula: "Women's March on Versailles; royal family brought to Paris." },
      { name: "June 1791", formula: "Flight to Varennes." },
      { name: "August 1791", formula: "Revolt of enslaved people in Saint-Domingue begins.", note: "Later led by Toussaint Louverture." },
      { name: "September 1791", formula: "Constitution of 1791: constitutional monarchy; active and passive citizens; de Gouges' Rights of Woman (1791)." },
      { name: "April 1792", formula: "War with Austria (Prussia soon joins)." },
      { name: "September 1792", formula: "Monarchy abolished; France becomes a republic; Convention elected by universal male suffrage." },
      { name: "21 January 1793", formula: "Execution of Louis XVI." },
      { name: "1793–1794", formula: "The Terror: about 17,000 official executions.", note: "Committee of Public Safety, Robespierre." },
      { name: "4 February 1794", formula: "Slavery abolished in French colonies." },
      { name: "28 July 1794", formula: "Robespierre executed; the Terror ends." },
      { name: "1795–1799", formula: "The Directory." },
      { name: "9 November 1799", formula: "Napoleon's coup (18 Brumaire)." },
      { name: "1804", formula: "Napoleonic Code (March); Haiti independent (1 January); Napoleon crowned Emperor (2 December)." },
    ],
  },
};
