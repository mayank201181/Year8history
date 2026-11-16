import type { TopicGuide } from "../../types.ts";

// ---------------------------------------------------------------------------
// Hitler's Rise to Power — Term 2 enquiry: "Under what circumstances did
// dictatorships come to power?" (crises · weakness of government ·
// charismatic leadership).
// ---------------------------------------------------------------------------

const weimarSvg = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of the Weimar constitution. Voters, all men and women over 20, elect the President every 7 years and the Reichstag by proportional representation. The President appoints the Chancellor, who needs a Reichstag majority. Article 48 lets the President bypass the Reichstag with emergency decrees."><defs><marker id="hrWArr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker><marker id="hrWArrR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#b91c1c"/></marker></defs><rect width="480" height="300" fill="#ffffff"/><rect x="170" y="10" width="140" height="46" rx="6" fill="#c7d2fe" stroke="#1f2937"/><text x="240" y="29" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">President</text><text x="240" y="46" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">elected every 7 years</text><rect x="330" y="10" width="140" height="46" rx="6" fill="#fecaca" stroke="#1f2937"/><text x="400" y="29" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Article 48</text><text x="400" y="46" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">emergency decrees</text><line x1="310" y1="33" x2="328" y2="33" stroke="#334155" stroke-width="1.5" marker-end="url(#hrWArr)"/><rect x="150" y="120" width="150" height="46" rx="6" fill="#fde68a" stroke="#1f2937"/><text x="225" y="139" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Chancellor</text><text x="225" y="156" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">needs Reichstag majority</text><rect x="330" y="120" width="140" height="46" rx="6" fill="#bae6fd" stroke="#1f2937"/><text x="400" y="139" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Reichstag</text><text x="400" y="156" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">parliament: makes laws</text><line x1="225" y1="56" x2="225" y2="117" stroke="#334155" stroke-width="1.5" marker-end="url(#hrWArr)"/><text x="231" y="92" font-size="11" font-family="sans-serif" fill="#1f2937">appoints</text><line x1="330" y1="143" x2="303" y2="143" stroke="#334155" stroke-width="1.5" marker-end="url(#hrWArr)"/><line x1="400" y1="56" x2="400" y2="117" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#hrWArrR)"/><text x="406" y="92" font-size="11" font-family="sans-serif" fill="#b91c1c">can bypass</text><rect x="20" y="236" width="440" height="50" rx="6" fill="#bbf7d0" stroke="#1f2937"/><text x="240" y="258" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Voters: all men and women over 20</text><text x="240" y="276" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">(women first voted in January 1919)</text><line x1="400" y1="236" x2="400" y2="169" stroke="#334155" stroke-width="1.5" marker-end="url(#hrWArr)"/><text x="406" y="206" font-size="11" font-family="sans-serif" fill="#1f2937">vote (PR)</text><polyline points="60,236 60,33 167,33" fill="none" stroke="#334155" stroke-width="1.5" marker-end="url(#hrWArr)"/><text x="66" y="140" font-size="11" font-family="sans-serif" fill="#1f2937">elect the</text><text x="66" y="154" font-size="11" font-family="sans-serif" fill="#1f2937">President</text></svg>`;

const lambSvg = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LAMB grid summarising the Treaty of Versailles. Land: Alsace-Lorraine to France, West Prussia and Posen to Poland, all colonies lost, about 13 percent of land. Army: 100,000 men, no conscription, tanks or air force, navy of 6 battleships and no submarines, Rhineland demilitarised. Money: reparations fixed in 1921 at 132 billion gold marks, 6.6 billion pounds; France gets Saar coal for 15 years. Blame: Article 231, the war guilt clause."><rect width="480" height="300" fill="#ffffff"/><rect x="10" y="10" width="226" height="135" rx="8" fill="#bbf7d0" stroke="#1f2937"/><text x="26" y="44" font-size="28" font-weight="bold" font-family="sans-serif" fill="#1f2937">L</text><text x="56" y="42" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937">Land</text><text x="24" y="68" font-size="11" font-family="sans-serif" fill="#1f2937">Alsace-Lorraine to France</text><text x="24" y="86" font-size="11" font-family="sans-serif" fill="#1f2937">West Prussia &amp; Posen to Poland</text><text x="24" y="104" font-size="11" font-family="sans-serif" fill="#1f2937">(the 'Polish Corridor')</text><text x="24" y="122" font-size="11" font-family="sans-serif" fill="#1f2937">All colonies lost; about 13% of land</text><rect x="244" y="10" width="226" height="135" rx="8" fill="#bae6fd" stroke="#1f2937"/><text x="260" y="44" font-size="28" font-weight="bold" font-family="sans-serif" fill="#1f2937">A</text><text x="290" y="42" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937">Army</text><text x="258" y="68" font-size="11" font-family="sans-serif" fill="#1f2937">Army capped at 100,000 men</text><text x="258" y="86" font-size="11" font-family="sans-serif" fill="#1f2937">No conscription, tanks or air force</text><text x="258" y="104" font-size="11" font-family="sans-serif" fill="#1f2937">Navy: 6 battleships, no submarines</text><text x="258" y="122" font-size="11" font-family="sans-serif" fill="#1f2937">Rhineland demilitarised</text><rect x="10" y="155" width="226" height="135" rx="8" fill="#fde68a" stroke="#1f2937"/><text x="26" y="189" font-size="28" font-weight="bold" font-family="sans-serif" fill="#1f2937">M</text><text x="60" y="187" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937">Money</text><text x="24" y="213" font-size="11" font-family="sans-serif" fill="#1f2937">Reparations fixed in 1921:</text><text x="24" y="231" font-size="11" font-family="sans-serif" fill="#1f2937">132 billion gold marks (£6.6 billion)</text><text x="24" y="249" font-size="11" font-family="sans-serif" fill="#1f2937">France gets Saar coal for 15 years</text><text x="24" y="267" font-size="11" font-family="sans-serif" fill="#1f2937">A huge burden on a weak economy</text><rect x="244" y="155" width="226" height="135" rx="8" fill="#fecaca" stroke="#1f2937"/><text x="260" y="189" font-size="28" font-weight="bold" font-family="sans-serif" fill="#1f2937">B</text><text x="290" y="187" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937">Blame</text><text x="258" y="213" font-size="11" font-family="sans-serif" fill="#1f2937">Article 231: the 'war guilt' clause</text><text x="258" y="231" font-size="11" font-family="sans-serif" fill="#1f2937">Germany accepts responsibility</text><text x="258" y="249" font-size="11" font-family="sans-serif" fill="#1f2937">for the war's loss and damage</text><text x="258" y="267" font-size="11" font-family="sans-serif" fill="#1f2937">Used to justify reparations</text></svg>`;

const breadSvg = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line chart on a logarithmic scale of the price of a loaf of bread in Germany in marks: 0.63 in 1918, 163 in 1922, 250 in January 1923, 3,465 in July 1923, 1.5 million in September 1923 and 201 billion in November 1923."><rect width="480" height="300" fill="#ffffff"/><text x="240" y="20" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Price of a loaf of bread in Germany (marks)</text><line x1="72" y1="243.1" x2="460" y2="243.1" stroke="#e5e7eb"/><line x1="72" y1="192.3" x2="460" y2="192.3" stroke="#e5e7eb"/><line x1="72" y1="141.6" x2="460" y2="141.6" stroke="#e5e7eb"/><line x1="72" y1="90.8" x2="460" y2="90.8" stroke="#e5e7eb"/><line x1="72" y1="40" x2="460" y2="40" stroke="#e5e7eb"/><text x="66" y="247" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">1</text><text x="66" y="196" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">1 thousand</text><text x="66" y="145" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">1 million</text><text x="66" y="95" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">1 billion</text><text x="66" y="44" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">1 trillion</text><line x1="72" y1="260" x2="460" y2="260" stroke="#334155"/><line x1="72" y1="40" x2="72" y2="260" stroke="#334155"/><polyline points="100,246.5 165,205.6 230,202.5 295,183.2 360,138.5 425,51.8" fill="none" stroke="#b91c1c" stroke-width="2"/><circle cx="100" cy="246.5" r="4" fill="#b91c1c"/><circle cx="165" cy="205.6" r="4" fill="#b91c1c"/><circle cx="230" cy="202.5" r="4" fill="#b91c1c"/><circle cx="295" cy="183.2" r="4" fill="#b91c1c"/><circle cx="360" cy="138.5" r="4" fill="#b91c1c"/><circle cx="425" cy="51.8" r="4" fill="#b91c1c"/><text x="100" y="236" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">0.63</text><text x="165" y="222" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">163</text><text x="230" y="219" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">250</text><text x="288" y="175" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">3,465</text><text x="352" y="130" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">1.5 million</text><text x="412" y="56" font-size="11" text-anchor="end" font-family="sans-serif" fill="#1f2937">201 billion</text><text x="100" y="276" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">1918</text><text x="165" y="276" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">1922</text><text x="230" y="276" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Jan 1923</text><text x="295" y="276" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Jul 1923</text><text x="360" y="276" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Sep 1923</text><text x="425" y="276" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Nov 1923</text><text x="240" y="295" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Log scale: each gridline is 1,000 times the one below. Dates not evenly spaced.</text></svg>`;

const routesSvg = `<svg viewBox="0 0 480 262" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Hitler's two routes to power. 1923, the putsch route: seize power by force in Munich, which failed, with 16 Nazis and 4 police killed and Hitler jailed. 1925 to 1933, the legal route: win votes and build a national party, which led to Hitler being appointed Chancellor on 30 January 1933 and then using laws to destroy democracy."><defs><marker id="hrRArr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs><rect width="480" height="262" fill="#ffffff"/><rect x="10" y="10" width="220" height="40" rx="6" fill="#fecaca" stroke="#1f2937"/><text x="120" y="35" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1923: the putsch route</text><rect x="10" y="70" width="220" height="50" rx="6" fill="#ffffff" stroke="#1f2937"/><text x="120" y="91" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Seize power by force</text><text x="120" y="109" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Munich beer hall, 8–9 Nov 1923</text><rect x="10" y="140" width="220" height="62" rx="6" fill="#fecaca" stroke="#1f2937"/><text x="120" y="160" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Result: failure</text><text x="120" y="177" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">16 Nazis and 4 police killed;</text><text x="120" y="193" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Hitler jailed</text><line x1="120" y1="50" x2="120" y2="68" stroke="#334155" stroke-width="1.5" marker-end="url(#hrRArr)"/><line x1="120" y1="120" x2="120" y2="138" stroke="#334155" stroke-width="1.5" marker-end="url(#hrRArr)"/><rect x="250" y="10" width="220" height="40" rx="6" fill="#bbf7d0" stroke="#1f2937"/><text x="360" y="35" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1925–1933: the 'legal' route</text><rect x="250" y="70" width="220" height="50" rx="6" fill="#ffffff" stroke="#1f2937"/><text x="360" y="91" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Win votes, build a national party</text><text x="360" y="109" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">elections, propaganda, the SA</text><rect x="250" y="140" width="220" height="62" rx="6" fill="#c7d2fe" stroke="#1f2937"/><text x="360" y="160" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Result: appointed Chancellor</text><text x="360" y="177" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">30 January 1933 — then used</text><text x="360" y="193" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">laws to destroy democracy</text><line x1="360" y1="50" x2="360" y2="68" stroke="#334155" stroke-width="1.5" marker-end="url(#hrRArr)"/><line x1="360" y1="120" x2="360" y2="138" stroke="#334155" stroke-width="1.5" marker-end="url(#hrRArr)"/><rect x="10" y="218" width="460" height="34" rx="6" fill="#fde68a" stroke="#1f2937"/><text x="240" y="240" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Lesson drawn in prison: use democracy's own rules to destroy it.</text></svg>`;

const chainSvg = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow chart: 1924 Dawes Plan brings US loans into Germany; factories grow and reparations are paid; October 1929 Wall Street Crash; US banks recall their loans; firms close and about 6 million are jobless by 1932; desperate voters turn to the extremes, the Nazis and the Communists."><defs><marker id="hrGArr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs><rect width="480" height="300" fill="#ffffff"/><text x="240" y="24" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A recovery built on borrowed money</text><rect x="20" y="40" width="130" height="62" rx="6" fill="#bbf7d0" stroke="#1f2937"/><text x="85" y="60" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1924 Dawes Plan:</text><text x="85" y="76" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">US loans pour</text><text x="85" y="92" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">into Germany</text><rect x="175" y="40" width="130" height="62" rx="6" fill="#bbf7d0" stroke="#1f2937"/><text x="240" y="60" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Factories grow,</text><text x="240" y="76" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">jobs return,</text><text x="240" y="92" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">reparations paid</text><rect x="330" y="40" width="130" height="62" rx="6" fill="#fecaca" stroke="#1f2937"/><text x="395" y="60" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">October 1929:</text><text x="395" y="76" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Wall Street</text><text x="395" y="92" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Crash (USA)</text><rect x="330" y="180" width="130" height="62" rx="6" fill="#fecaca" stroke="#1f2937"/><text x="395" y="200" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">US banks recall</text><text x="395" y="216" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">their short-term</text><text x="395" y="232" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">loans</text><rect x="175" y="180" width="130" height="62" rx="6" fill="#fecaca" stroke="#1f2937"/><text x="240" y="200" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Firms close: about</text><text x="240" y="216" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">6 million jobless</text><text x="240" y="232" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">by 1932</text><rect x="20" y="180" width="130" height="62" rx="6" fill="#fde68a" stroke="#1f2937"/><text x="85" y="200" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Desperate voters</text><text x="85" y="216" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">turn to extremes:</text><text x="85" y="232" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Nazis and KPD</text><line x1="150" y1="71" x2="172" y2="71" stroke="#334155" stroke-width="1.5" marker-end="url(#hrGArr)"/><line x1="305" y1="71" x2="327" y2="71" stroke="#334155" stroke-width="1.5" marker-end="url(#hrGArr)"/><line x1="395" y1="102" x2="395" y2="177" stroke="#334155" stroke-width="1.5" marker-end="url(#hrGArr)"/><line x1="330" y1="211" x2="308" y2="211" stroke="#334155" stroke-width="1.5" marker-end="url(#hrGArr)"/><line x1="175" y1="211" x2="153" y2="211" stroke="#334155" stroke-width="1.5" marker-end="url(#hrGArr)"/><text x="215" y="140" font-size="11" font-style="italic" text-anchor="middle" font-family="sans-serif" fill="#334155">Stresemann dies, 3 October 1929 — weeks before the Crash</text><text x="240" y="275" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937">1924–29: the 'Golden Years'   then   1929–33: the Great Depression</text></svg>`;

const votesSvg = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart comparing unemployment and the Nazi vote. Bars show yearly average unemployment of about 1.4 million in 1928, 1.9 million in 1929, 3.1 million in 1930, 4.5 million in 1931 and 5.6 million in 1932. Dots show the Nazi share of the vote: 2.6 percent in May 1928, 18.3 percent in September 1930, 37.3 percent in July 1932, 33.1 percent in November 1932 and 43.9 percent in March 1933."><rect width="480" height="300" fill="#ffffff"/><rect x="60" y="7" width="12" height="10" fill="#bae6fd" stroke="#334155"/><text x="78" y="16" font-size="11" font-family="sans-serif" fill="#1f2937">Unemployed, millions (yearly average, approx.)</text><line x1="60" y1="29" x2="72" y2="29" stroke="#b91c1c" stroke-width="2"/><circle cx="66" cy="29" r="3" fill="#b91c1c"/><text x="78" y="33" font-size="11" font-family="sans-serif" fill="#1f2937">Nazi % of the vote at Reichstag elections</text><text x="54" y="44" font-size="11" text-anchor="end" font-family="sans-serif" fill="#0369a1">7</text><text x="54" y="104" font-size="11" text-anchor="end" font-family="sans-serif" fill="#0369a1">5</text><text x="54" y="164" font-size="11" text-anchor="end" font-family="sans-serif" fill="#0369a1">3</text><text x="54" y="224" font-size="11" text-anchor="end" font-family="sans-serif" fill="#0369a1">1</text><text x="54" y="254" font-size="11" text-anchor="end" font-family="sans-serif" fill="#0369a1">0</text><text x="426" y="44" font-size="11" font-family="sans-serif" fill="#b91c1c">50%</text><text x="426" y="86" font-size="11" font-family="sans-serif" fill="#b91c1c">40%</text><text x="426" y="128" font-size="11" font-family="sans-serif" fill="#b91c1c">30%</text><text x="426" y="170" font-size="11" font-family="sans-serif" fill="#b91c1c">20%</text><text x="426" y="212" font-size="11" font-family="sans-serif" fill="#b91c1c">10%</text><text x="426" y="254" font-size="11" font-family="sans-serif" fill="#b91c1c">0%</text><line x1="60" y1="40" x2="60" y2="250" stroke="#334155"/><line x1="420" y1="40" x2="420" y2="250" stroke="#334155"/><rect x="77.7" y="208" width="30" height="42" fill="#bae6fd" stroke="#334155"/><rect x="143.2" y="193" width="30" height="57" fill="#bae6fd" stroke="#334155"/><rect x="208.6" y="157" width="30" height="93" fill="#bae6fd" stroke="#334155"/><rect x="274.1" y="115" width="30" height="135" fill="#bae6fd" stroke="#334155"/><rect x="339.5" y="82" width="30" height="168" fill="#bae6fd" stroke="#334155"/><line x1="60" y1="250" x2="420" y2="250" stroke="#334155"/><polyline points="84.9,239.1 236.7,173.1 359.8,93.3 377.4,111 399,65.6" fill="none" stroke="#b91c1c" stroke-width="2" stroke-dasharray="5 3"/><circle cx="84.9" cy="239.1" r="4" fill="#b91c1c"/><circle cx="236.7" cy="173.1" r="4" fill="#b91c1c"/><circle cx="359.8" cy="93.3" r="4" fill="#b91c1c"/><circle cx="377.4" cy="111" r="4" fill="#b91c1c"/><circle cx="399" cy="65.6" r="4" fill="#b91c1c"/><text x="93" y="223" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#b91c1c">2.6%</text><text x="232" y="152" font-size="11" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#b91c1c">18.3%</text><text x="332" y="92" font-size="11" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#b91c1c">37.3%</text><text x="384" y="125" font-size="11" font-weight="bold" font-family="sans-serif" fill="#b91c1c">33.1%</text><text x="392" y="58" font-size="11" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#b91c1c">43.9%</text><text x="92.7" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">1928</text><text x="158.2" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">1929</text><text x="223.6" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">1930</text><text x="289.1" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">1931</text><text x="354.5" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">1932</text><text x="403.6" y="266" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">1933</text><text x="92.7" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#0369a1">1.4m</text><text x="158.2" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#0369a1">1.9m</text><text x="223.6" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#0369a1">3.1m</text><text x="289.1" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#0369a1">4.5m</text><text x="354.5" y="280" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#0369a1">5.6m</text><text x="240" y="296" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">Figures: Reichstag election results; registered unemployment (approx.)</text></svg>`;

const stepsSvg = `<svg viewBox="0 0 480 312" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline, not to scale, of eight steps from Chancellor to dictator between January 1933 and August 1934, coloured by whether each step used laws and decrees or violence and terror."><rect width="480" height="312" fill="#ffffff"/><text x="240" y="22" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">From Chancellor to dictator in 19 months</text><line x1="112" y1="38" x2="112" y2="282" stroke="#334155" stroke-width="2"/><circle cx="112" cy="46" r="6" fill="#c7d2fe" stroke="#1f2937"/><text x="100" y="50" font-size="11" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#1f2937">30 Jan 1933</text><text x="124" y="50" font-size="11" font-family="sans-serif" fill="#1f2937">Hindenburg appoints Hitler Chancellor</text><circle cx="112" cy="79" r="6" fill="#c7d2fe" stroke="#1f2937"/><text x="100" y="83" font-size="11" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#1f2937">28 Feb 1933</text><text x="124" y="83" font-size="11" font-family="sans-serif" fill="#1f2937">Reichstag Fire Decree suspends civil rights</text><circle cx="112" cy="112" r="6" fill="#c7d2fe" stroke="#1f2937"/><text x="100" y="116" font-size="11" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#1f2937">5 Mar 1933</text><text x="124" y="116" font-size="11" font-family="sans-serif" fill="#1f2937">Election: Nazis 43.9%, still no majority alone</text><circle cx="112" cy="145" r="6" fill="#c7d2fe" stroke="#1f2937"/><text x="100" y="149" font-size="11" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#1f2937">23 Mar 1933</text><text x="124" y="149" font-size="11" font-family="sans-serif" fill="#1f2937">Enabling Act (444 to 94): laws without the Reichstag</text><circle cx="112" cy="178" r="6" fill="#fecaca" stroke="#1f2937"/><text x="100" y="182" font-size="11" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#1f2937">2 May 1933</text><text x="124" y="182" font-size="11" font-family="sans-serif" fill="#1f2937">Trade unions abolished; SA and SS seize their offices</text><circle cx="112" cy="211" r="6" fill="#c7d2fe" stroke="#1f2937"/><text x="100" y="215" font-size="11" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#1f2937">14 Jul 1933</text><text x="124" y="215" font-size="11" font-family="sans-serif" fill="#1f2937">Law makes the Nazis the only legal party</text><circle cx="112" cy="244" r="6" fill="#fecaca" stroke="#1f2937"/><text x="100" y="248" font-size="11" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#1f2937">30 Jun 1934</text><text x="124" y="248" font-size="11" font-family="sans-serif" fill="#1f2937">Night of the Long Knives: SA leaders murdered</text><circle cx="112" cy="277" r="6" fill="#c7d2fe" stroke="#1f2937"/><text x="100" y="281" font-size="11" font-weight="bold" text-anchor="end" font-family="sans-serif" fill="#1f2937">2 Aug 1934</text><text x="124" y="281" font-size="11" font-family="sans-serif" fill="#1f2937">Hindenburg dies: Hitler becomes Führer; army oath</text><circle cx="30" cy="302" r="5" fill="#c7d2fe" stroke="#1f2937"/><text x="40" y="306" font-size="11" font-family="sans-serif" fill="#1f2937">law or decree</text><circle cx="140" cy="302" r="5" fill="#fecaca" stroke="#1f2937"/><text x="150" y="306" font-size="11" font-family="sans-serif" fill="#1f2937">violence and terror</text><text x="470" y="306" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">not to scale</text></svg>`;

const webSvg = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Factor web. Three factors, crises, weak government and charismatic leadership, each point to the centre: Hitler appointed Chancellor on 30 January 1933. Dashed links show how the factors fed each other: crises made people listen to Hitler, crises and weak government fed each other, and elites thought they could use Hitler's popularity."><defs><marker id="hrFArr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1f2937"/></marker></defs><rect width="480" height="320" fill="#ffffff"/><rect x="10" y="10" width="160" height="72" rx="8" fill="#fde68a" stroke="#1f2937"/><text x="90" y="30" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">CRISES</text><text x="90" y="48" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Versailles 1919</text><text x="90" y="62" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Hyperinflation 1923</text><text x="90" y="76" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Depression 1929–33</text><rect x="310" y="10" width="160" height="72" rx="8" fill="#bae6fd" stroke="#1f2937"/><text x="390" y="30" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">WEAK GOVERNMENT</text><text x="390" y="48" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">PR and coalitions</text><text x="390" y="62" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Article 48 decrees</text><text x="390" y="76" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Elites' backroom deal</text><rect x="135" y="240" width="210" height="72" rx="8" fill="#c7d2fe" stroke="#1f2937"/><text x="240" y="260" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">CHARISMATIC LEADERSHIP</text><text x="240" y="278" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Hitler's speeches, Goebbels'</text><text x="240" y="294" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">propaganda, the SA, organisation</text><ellipse cx="240" cy="160" rx="86" ry="36" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><text x="240" y="152" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Hitler appointed</text><text x="240" y="167" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif" fill="#1f2937">Chancellor</text><text x="240" y="183" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">30 January 1933</text><line x1="150" y1="82" x2="181" y2="129" stroke="#1f2937" stroke-width="2" marker-end="url(#hrFArr)"/><line x1="330" y1="82" x2="299" y2="129" stroke="#1f2937" stroke-width="2" marker-end="url(#hrFArr)"/><line x1="240" y1="240" x2="240" y2="199" stroke="#1f2937" stroke-width="2" marker-end="url(#hrFArr)"/><line x1="170" y1="44" x2="310" y2="44" stroke="#334155" stroke-dasharray="5 4"/><text x="240" y="38" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">fed each other</text><line x1="60" y1="82" x2="150" y2="240" stroke="#334155" stroke-dasharray="5 4"/><text x="14" y="170" font-size="11" font-family="sans-serif" fill="#334155">desperation:</text><text x="14" y="184" font-size="11" font-family="sans-serif" fill="#334155">people listen</text><line x1="420" y1="82" x2="330" y2="240" stroke="#334155" stroke-dasharray="5 4"/><text x="466" y="180" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">elites think</text><text x="466" y="194" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">they can use him</text></svg>`;

export const guide: TopicGuide = {
  id: "hitler-rise",
  title: "Hitler's Rise to Power",
  strand: "Dictatorship",
  icon: "📉",
  summary:
    "In 1928 only 2.6% of Germans voted Nazi. By 1934 Hitler was dictator — without ever winning a majority in a free election. How?",
  intro:
    "This topic answers the Term 2 enquiry question: **Under what circumstances did dictatorships come to power?** Germany is a powerful test case, because in 1919 it became one of the most democratic countries in the world — and by 1934 it was a dictatorship.\n\nYou will follow the story from Germany's defeat in **1918** to Hitler becoming **Führer** in **1934**, and judge it using three factors: **crises** (Versailles, hyperinflation, the Great Depression), **weakness of government** (the Weimar constitution and the choices of powerful people) and **charismatic leadership** (Hitler, his speeches and Nazi propaganda).\n\nKeep one fact in mind throughout: Hitler did **not** seize power in a coup, and the Nazis **never** won a majority in a free election. Working out how a democracy could be taken apart from the inside — and remembering where it led — is the point of this enquiry.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "weimar-republic",
      heading: "A new democracy: the Weimar Republic",
      discovery: {
        problem:
          "It is **November 1918**. Germany has lost the First World War, the Kaiser has fled, sailors have mutinied and there are hungry crowds in Berlin. You have been asked to design a brand-new democratic constitution.\n\nMake two choices, and predict one risk of each:\n\n1. **Voting system:** share out seats in exact proportion to votes (so even small parties win seats), *or* winner-takes-all in each area (which favours a few big parties)?\n2. **Emergencies:** should the President be able to rule by decree, without parliament, during a crisis?",
        idea:
          "Weimar's designers chose **proportional representation** (PR) — very fair, but it produced many parties, so every government was a **coalition** that could easily fall apart: Germany had **20 different cabinets** between 1919 and 1933. They also gave the President **Article 48** emergency powers — sensible for a short crisis, dangerous if the crisis never ends. A constitution can be fair on paper and still fragile in practice.",
      },
      body:
        "**Defeat and revolution.** By autumn 1918 Germany was losing the war. Sailors mutinied at Kiel, strikes spread, and on **9 November 1918** Kaiser **Wilhelm II** abdicated and fled to the Netherlands. A republic was declared, and the Social Democrat leader **Friedrich Ebert** took charge. Two days later, on **11 November 1918**, the new government's representatives signed the **armistice** (ceasefire) that ended the fighting.\n\n**A new constitution.** Berlin was too dangerous, so the new National Assembly met in the quiet town of **Weimar** — which gave the **Weimar Republic** its name. Its constitution (**1919**) was one of the most democratic in the world:\n\n| Feature | What it meant |\n|---|---|\n| Votes for all over 20 | Men **and women** could vote |\n| Reichstag (parliament) | Elected at least every 4 years; made laws |\n| Proportional representation | Seats shared out by share of the vote |\n| President | Elected every 7 years; appointed the Chancellor |\n| Article 48 | President could rule by **decree** in an emergency |\n| Bill of rights | Free speech, freedom of religion, equality before the law |\n\n**Built-in weaknesses**\n- **PR and coalitions.** Even small parties won seats, so no single party ever won a majority. Governments were **coalitions** of several parties that quarrelled and collapsed.\n- **Article 48.** Meant for genuine emergencies, it gave one man a way to govern *without* parliament.\n- **Enemies on both sides.** Communists on the left wanted a Soviet-style revolution; nationalists on the right wanted the Kaiser or a strong leader back. Many judges, army officers and civil servants from the old empire never trusted the republic.\n- **Born in defeat.** The politicians who ended the war were linked in many minds with humiliation — even though the army's own commanders had asked for the armistice.\n\nNone of this made collapse inevitable. Weimar survived serious crises and had good years. But it meant the republic had a thin cushion: when a truly massive crisis came, it had too few loyal defenders and a ready-made emergency button.",
      diagram: weimarSvg,
      diagramCaption:
        "How the Weimar constitution worked (simplified). The dashed red arrow is the 'back door': Article 48 let the President govern without the Reichstag.",
      workedExamples: [
        {
          title: "Modelled answer: explain",
          problem: "Explain why the Weimar Republic was fragile from the start. (6 marks)",
          steps: [
            "**Plan.** Choose three causes and make each one *explain* weakness rather than describe a feature: (1) PR and coalitions, (2) Article 48, (3) born in defeat, with enemies on left and right.",
            "**Paragraph 1 (PEEL).** *Point:* The voting system made strong government hard. *Evidence:* Proportional representation gave seats to many small parties, so no party ever won a majority, and there were 20 different cabinets between 1919 and 1933. *Explain:* Coalitions argued and collapsed, so governments struggled to take tough decisions. *Link:* This made democracy look weak and indecisive to many Germans.",
            "**Paragraph 2.** *Point:* The constitution contained a dangerous 'back door'. *Evidence:* Article 48 let the President rule by decree in an emergency. *Explain:* If parliament was deadlocked, the President could simply bypass it, so democracy could be switched off legally. *Link:* This is exactly what happened from 1930 onwards.",
            "**Paragraph 3.** *Point:* The republic was born in defeat. *Evidence:* Its leaders signed the armistice of 11 November 1918 and later the Treaty of Versailles. *Explain:* Nationalists blamed them for Germany's humiliation, and many judges and officers stayed loyal to the old empire, so the republic had powerful enemies inside the state itself.",
            "**Judgement.** The most serious weakness was the combination: a system that produced weak coalitions *and* gave the President a legal way round them. Defeat explains why many people disliked the republic; the constitution explains how that dislike could later be turned into its destruction.",
          ],
          answer:
            "Weimar was fragile because PR produced unstable coalitions, Article 48 offered a legal way to bypass parliament, and the republic was linked with defeat.",
          yourTurn: {
            question:
              "Your turn: which article of the Weimar constitution let the President rule by decree in an emergency? Give the number.",
            answer: { type: "number", value: 48, display: "Article 48" },
            solution: "**Article 48** — the President's emergency powers, used constantly from 1930.",
          },
        },
      ],
      keyPoints: [
        "Kaiser Wilhelm II abdicated on **9 November 1918**; the **armistice** was signed on **11 November 1918**.",
        "The **Weimar constitution (1919)** gave the vote to all men and women over 20.",
        "**Proportional representation** meant many parties and constant **coalitions** — 20 cabinets in 14 years.",
        "**Article 48** let the President rule by decree in an emergency — a legal 'back door' round parliament.",
        "The republic had enemies on the left (communists) and the right (nationalists), and was linked with defeat.",
      ],
      whyItWorks:
        "**Why does this matter?** A democracy survives crises when most people — and most of the powerful — believe in it. Weimar was very democratic on paper, but it was born in defeat, so millions never felt loyal to it. Its rules then handed its opponents tools: PR made strong governments rare, and Article 48 let one man govern without parliament. Weak loyalty plus fragile machinery is why the 'weakness of government' factor starts here, years before Hitler mattered.",
      strategies: ["Long-term vs short-term causes", "Think about who benefited", "Avoid hindsight"],
      thinkDeeper:
        "Was proportional representation really a weakness? Many stable democracies use PR today. What else had to be true in Weimar Germany for PR to cause such problems?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "treaty-of-versailles",
      heading: "The Treaty of Versailles",
      discovery: {
        problem:
          "**Source A** — from *Deutsche Zeitung*, a German nationalist newspaper, published on the day the treaty was signed, 28 June 1919 (adapted translation).\n\n> Vengeance! German nation! Today in the Hall of Mirrors the disgraceful treaty is being signed. Do not forget it! … There will be vengeance for the shame of 1919.\n\n1. What can you infer about how some Germans felt about the treaty?\n2. Check the provenance: why might *this* newspaper use such strong language?\n3. Predict: why could this feeling be dangerous for the new republic?",
        idea:
          "Many Germans saw the treaty as a **'Diktat'** — a dictated peace they had no say in — and felt shame and anger. A nationalist paper had a clear purpose: to stir up exactly that anger. The danger was that the *republic's* politicians signed it, so the anger could be turned against democracy itself. Hitler later promised to tear the treaty up.",
      },
      body:
        "**The peace.** The **Treaty of Versailles** was signed on **28 June 1919** in the Hall of Mirrors at the Palace of Versailles, near Paris. The 'Big Three' — **Clemenceau** (France), **Lloyd George** (Britain) and **Wilson** (USA) — decided the terms. Germany was not allowed to negotiate: it had to sign or face renewed war. Germans called it a **'Diktat'** (dictated peace).\n\n**The terms — remember LAMB**\n\n| | Terms |\n|---|---|\n| **L**and | About 13% of Germany's European land lost: **Alsace-Lorraine** to France; West Prussia and Posen to Poland (the **'Polish Corridor'**, which cut off East Prussia); the Saar run by the League of Nations for 15 years; **all colonies** taken |\n| **A**rmy | Army limited to **100,000 men**; no conscription, tanks, submarines or air force; navy cut to 6 battleships; the **Rhineland demilitarised** |\n| **M**oney | **Reparations** for war damage — fixed in **1921** at 132 billion gold marks (**£6.6 billion**) |\n| **B**lame | **Article 231**, the 'war guilt' clause: Germany accepted responsibility for the loss and damage of the war |\n\n**Why it hurt so much.** Few Germans had seen enemy soldiers on German soil, and wartime propaganda had said the war was going well. Defeat came as a shock. Many felt the war guilt clause was a national humiliation and that the reparations were impossible to pay.\n\n**The 'stab in the back' myth.** Nationalists, including former army leaders, claimed that the army had not really been beaten but had been **'stabbed in the back'** by politicians, socialists and strikers at home — and, in an antisemitic lie, by Jewish people. The politicians who signed the armistice were branded the **'November Criminals'**. Historians reject the myth completely: by autumn 1918 the army's own commanders, **Hindenburg** and **Ludendorff**, had told the government the war could not be won.\n\n**Was it really so harsh?** Historians still argue. Germany kept most of its land and industry, and in the end paid only a fraction of the reparations. Compared with the treaty Germany itself imposed on Russia at **Brest-Litovsk** (1918), Versailles looks milder. But politically, what mattered was what Germans *believed*: the treaty became a lasting grievance that extremists could exploit for years.",
      diagram: lambSvg,
      diagramCaption: "The Treaty of Versailles in four letters: Land, Army, Money, Blame.",
      workedExamples: [
        {
          title: "Modelled answer: explain",
          problem: "Explain why many Germans hated the Treaty of Versailles. (6 marks)",
          steps: [
            "**Plan.** Use LAMB to find reasons, then pick the three that best explain *feelings*: humiliation (Blame and the 'Diktat'), loss of land and military power, and reparations. Finish with a judgement.",
            "**Paragraph 1 (PEEL).** *Point:* Germans felt humiliated. *Evidence:* Article 231 forced Germany to accept responsibility for the war, and Germany was not allowed to negotiate — it was a 'Diktat'. *Explain:* Many Germans believed they had fought a defensive war, so being blamed felt deeply unjust. *Link:* This shame turned into anger against the treaty and the politicians who signed it.",
            "**Paragraph 2.** *Point:* The treaty weakened Germany's power and pride. *Evidence:* Germany lost about 13% of its European land, including Alsace-Lorraine, and all its colonies; its army was cut to 100,000 men and the Rhineland was demilitarised. *Explain:* Millions of German speakers now lived under foreign rule, and Germany felt defenceless next to France.",
            "**Paragraph 3.** *Point:* Reparations seemed crushing. *Evidence:* In 1921 they were fixed at £6.6 billion. *Explain:* Germans believed they would be paying for generations, and later blamed reparations for economic hardship.",
            "**Judgement.** The war guilt clause caused the most resentment, because it was used to justify all the other terms and it insulted national honour. The 'stab in the back' myth made it worse: people who believed Germany had not really lost the war felt the whole treaty was a betrayal.",
          ],
          answer:
            "Germans hated the treaty mainly because the war guilt clause felt like an unjust humiliation, made worse by lost land, a tiny army and huge reparations.",
          yourTurn: {
            question: "Your turn: the treaty limited the German army to how many men?",
            answer: { type: "number", value: 100000, display: "100,000" },
            solution: "**100,000 men**, with no conscription, tanks or air force.",
          },
        },
      ],
      keyPoints: [
        "Signed on **28 June 1919**; Germany had no say, so Germans called it a **'Diktat'**.",
        "**LAMB:** Land (Alsace-Lorraine, Polish Corridor, colonies), Army (100,000 men, Rhineland demilitarised), Money (£6.6 billion, fixed 1921), Blame (Article 231).",
        "The **'stab in the back'** myth falsely claimed the army had been betrayed at home.",
        "The politicians who signed the armistice were smeared as the **'November Criminals'**.",
        "Historians debate how harsh the treaty really was — but Germans' *belief* that it was unjust is what mattered politically.",
      ],
      whyItWorks:
        "**Why does this matter?** Versailles was a crisis that kept on giving. It tied the new democracy to national humiliation, because democratic politicians had to sign it. It gave nationalists a simple story — 'we were betrayed' — that blamed the republic for defeat. And reparations fed later economic arguments. When Hitler promised to tear up the treaty, he was tapping a grievance millions already felt.",
      strategies: ["Check the provenance (NOP)", "Consider the counter-argument", "Make an inference"],
      thinkDeeper:
        "Was the Treaty of Versailles too harsh, or not harsh enough? Could a treaty that angered Germany but did not cripple it be the most dangerous kind of all?",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "crises-1919-1923",
      heading: "Years of crisis, 1919–1923",
      discovery: {
        problem:
          "**Two Germans in 1923** (a constructed teaching example).\n\n- **Frau Weber**, a retired teacher, has **100,000 marks** saved in the bank — in 1918, enough for a comfortable old age.\n- **Herr Braun**, a farmer, **borrowed 100,000 marks** in 1918 to buy more land.\n\nIn **1918** a loaf of bread cost about **0.63 marks**. By **November 1923** it cost about **201,000,000,000 marks**.\n\nPredict: who is ruined, who is delighted — and why?",
        idea:
          "When money becomes worthless, **savings become worthless**: Frau Weber's 100,000 marks would not buy a single crust. But **debts shrink too**: Herr Braun can pay off his loan with almost worthless notes. Hyperinflation produced winners and losers — and the biggest losers were the saving, respectable middle classes, exactly the people a democracy most needs on its side.",
      },
      body:
        "The young republic faced attacks from both left and right, then an economic disaster.\n\n**Threats from the left and right**\n\n| When | Crisis | What happened |\n|---|---|---|\n| **January 1919** | **Spartacist uprising** | Communists led by **Rosa Luxemburg** and **Karl Liebknecht** tried to start a revolution in Berlin. The government used the **Freikorps** (armed ex-soldiers, mostly right-wing) to crush it; both leaders were murdered. |\n| **March 1920** | **Kapp Putsch** | Right-wing Freikorps under **Wolfgang Kapp** seized Berlin. The army refused to fire on them and the government fled. A **general strike** by workers defeated the putsch in about four days. |\n| **1919–1922** | **Political murders** | Hundreds of killings, mostly by right-wing groups — including **Matthias Erzberger** (1921), who had signed the armistice, and the foreign minister **Walther Rathenau** (1922). Right-wing killers often got light sentences from sympathetic judges. |\n\n**1923: the Ruhr and hyperinflation**\n\nPrices had been rising since the war, which the government had paid for by borrowing and printing money. Then:\n\n1. Germany fell behind with reparations payments.\n2. In **January 1923** French and Belgian troops **occupied the Ruhr**, Germany's industrial heartland, to take coal and goods instead.\n3. The government urged workers to use **passive resistance** (strike rather than work for the French) — and kept paying them by **printing more money**.\n4. With fewer goods and far more money, prices spiralled into **hyperinflation**.\n\n| Date | Loaf of bread (marks) |\n|---|---|\n| 1918 | 0.63 |\n| January 1923 | 250 |\n| July 1923 | 3,465 |\n| September 1923 | 1,512,000 |\n| November 1923 | 201,000,000,000 |\n\n**Who lost and who gained?** People with **savings**, pensions or fixed incomes — many of them **middle class** — were ruined. Wages could not keep up, so workers suffered too. But people with **debts** (including some farmers and businessmen) paid them off cheaply, and some industrialists bought up struggling firms.\n\n**The lasting damage.** The republic survived 1923, but trust did not fully recover. Many middle-class Germans never forgot that democracy had wiped out their savings — a memory that returned when the next economic crisis hit in 1929.",
      diagram: breadSvg,
      diagramCaption:
        "The price of a loaf of bread, 1918–1923 (textbook figures). The scale is logarithmic: an ordinary scale could not fit 0.63 and 201 billion on one page.",
      workedExamples: [
        {
          title: "Modelled answer: explain a chain of causes",
          problem: "Explain why hyperinflation happened in Germany in 1923. (6 marks)",
          steps: [
            "**Plan.** This is a *chain*: long-term pressure → trigger → the decision that made it catastrophic. Show how each link led to the next.",
            "**Paragraph 1 (long-term).** *Point:* Germany's money was already weakening before 1923. *Evidence:* The war had been paid for by borrowing and printing money, and reparations of £6.6 billion added a huge debt. *Explain:* The government had little gold or income to back its currency, so prices were already rising.",
            "**Paragraph 2 (trigger).** *Point:* The occupation of the Ruhr turned a problem into a crisis. *Evidence:* When Germany fell behind with reparations, French and Belgian troops occupied the Ruhr in January 1923. *Explain:* Germany lost its main source of coal and industrial goods, so there was less to buy and less to tax.",
            "**Paragraph 3 (the decision).** *Point:* The government's response made it far worse. *Evidence:* It backed passive resistance and paid striking workers by printing ever more banknotes. *Explain:* Far more money was chasing far fewer goods, so prices rocketed — a loaf cost 201 billion marks by November 1923.",
            "**Judgement.** The Ruhr occupation was the trigger, but the decision to print money to pay the strikers is what turned inflation into *hyperinflation*. The causes are linked: without the earlier weakness, the Ruhr crisis could not have destroyed the currency so quickly.",
          ],
          answer:
            "Long-term war debts and reparations weakened the mark; the Ruhr occupation was the trigger; printing money to pay strikers turned it into hyperinflation.",
          yourTurn: {
            question:
              "Your turn: which German industrial region did French and Belgian troops occupy in January 1923?",
            answer: {
              type: "text",
              accept: ["Ruhr", "the Ruhr", "Ruhr valley", "the Ruhr valley", "Ruhr area", "the Ruhr area", "Ruhrgebiet"],
              display: "the Ruhr",
            },
            solution: "**The Ruhr** — Germany's coal and steel heartland, occupied to seize reparations in goods.",
          },
        },
      ],
      keyPoints: [
        "**Spartacist uprising (January 1919)** — a communist revolt crushed by the Freikorps.",
        "**Kapp Putsch (March 1920)** — a right-wing takeover defeated by a workers' general strike, not by the army.",
        "Hundreds of political murders, mostly by the right, were often punished lightly.",
        "**January 1923:** France and Belgium occupy the **Ruhr**; the government prints money to pay strikers.",
        "**Hyperinflation 1923:** a loaf rose from 0.63 marks (1918) to about 201 billion marks (November 1923); savers were ruined, debtors gained.",
      ],
      whyItWorks:
        "**Why does this matter?** Each crisis taught Germans something damaging about their democracy. The Kapp Putsch showed the army would not reliably defend it. The lenient treatment of right-wing murderers showed that judges were biased. Hyperinflation showed the middle classes that the republic could not protect their savings. None of this destroyed Weimar in 1923 — but it drained the trust it would need in the far bigger crisis of 1929.",
      strategies: ["Link the causes", "Think about who benefited", "Put it in chronological order"],
      thinkDeeper:
        "In 1923 the republic survived hyperinflation, the Ruhr occupation *and* an attempted coup by Hitler. Does that prove Weimar was weak — or surprisingly strong?",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "early-nazi-party",
      heading: "The early Nazi Party and the Munich Putsch",
      discovery: {
        problem:
          "**A surprising fact.** On **9 November 1923** Hitler's attempt to seize power in Munich collapsed in gunfire: 16 of his followers and 4 police officers were killed, and Hitler was arrested two days later. Yet his trial made him famous across Germany, he served only about **9 months** of a **5-year** sentence, and within ten years he was running the country.\n\nHow could a failed, violent coup end up *helping* him? Make two suggestions before you read on.",
        idea:
          "Hitler turned defeat into publicity. The judges let him make long speeches in court, which newspapers reported across Germany. The lenient sentence showed that some judges sympathised with right-wing nationalists. Prison gave him time to write *Mein Kampf* and rethink. His big lesson: don't try to seize power by force — **win it 'legally'** through elections, then destroy democracy from the inside.",
      },
      body:
        "**Who was Hitler?** **Adolf Hitler** was born in **1889** in **Braunau am Inn, Austria** — he was not German by birth. As a young man in Vienna he was twice rejected by the Academy of Fine Arts and drifted into poverty. Vienna's politics were full of extreme nationalism and **antisemitism** (hatred of Jewish people); historians debate exactly when these ideas took hold of him. In **1914** he volunteered for the German (Bavarian) army, served as a message runner and won the **Iron Cross**. He was in hospital, temporarily blinded by a gas attack, when Germany surrendered — and, like many soldiers, he refused to accept the defeat.\n\n**From DAP to NSDAP.** In **1919** the army sent Hitler to report on a tiny group in Munich, the **German Workers' Party (DAP)**, founded by **Anton Drexler**. He joined — and discovered a powerful talent for **public speaking**. Crowds grew wherever he spoke. In **1920** the party was renamed the **National Socialist German Workers' Party (NSDAP)** — the **Nazis** — and published its **25-Point Programme**: tear up Versailles, unite all German-speaking people, gain more land, and deny citizenship to Jewish people. By **1921** Hitler was party leader.\n\n**The SA.** The party set up the **SA** (*Sturmabteilung*, 'stormtroopers'), nicknamed the 'brownshirts'. They guarded Nazi meetings and broke up opponents' meetings — violence was part of the movement from the start.\n\n**The Munich (Beer Hall) Putsch, 8–9 November 1923.** With hyperinflation at its worst, Hitler thought the moment had come. Inspired by Mussolini's 'March on Rome' in Italy (1922), he burst into a Munich beer hall, declared a 'national revolution' and, with the wartime general **Ludendorff**, marched through Munich the next day. Police opened fire and the putsch collapsed.\n\n**Failure turned into opportunity**\n- **The trial (1924)** was front-page news, and Hitler used it as a stage.\n- **The sentence** — five years, of which he served about nine months in comfortable conditions in **Landsberg prison** — showed sympathy from right-wing judges.\n- **Mein Kampf** ('My Struggle'), written in prison, set out his hatred of Jewish people and communists and his aim of conquering 'living space' (*Lebensraum*) in eastern Europe.\n- **The lesson:** power must be won through the ballot box. From 1925 he rebuilt the party with branches across Germany, the **SS** and the **Hitler Youth**, with **Joseph Goebbels** organising propaganda.",
      diagram: routesSvg,
      diagramCaption: "Same aims, new method: Hitler's change of strategy after the failed putsch.",
      workedExamples: [
        {
          title: "Modelled answer: significance",
          problem: "Explain why the Munich Putsch was important for Hitler, even though it failed. (6 marks)",
          steps: [
            "**Plan.** The trick is to explain *consequences*, not retell the story of the putsch. Three consequences: publicity, Mein Kampf, a new strategy. Then judge which mattered most.",
            "**Paragraph 1 (PEEL).** *Point:* The putsch gave Hitler national fame. *Evidence:* His trial in 1924 was reported across Germany, and the judges let him make long speeches. *Explain:* Before 1923 he was a local Bavarian figure; afterwards millions knew his name and his ideas. *Link:* A failure had become a publicity success.",
            "**Paragraph 2.** *Point:* Prison gave him time to set out his ideas. *Evidence:* In Landsberg prison he wrote *Mein Kampf*, which laid out his hatred of Jewish people and communists and his plan to win 'living space' in the east. *Explain:* It gave the movement a single leader's programme, though few people read it closely at the time.",
            "**Paragraph 3.** *Point:* Hitler changed his strategy. *Evidence:* After his release he rebuilt the party to win elections, with branches across Germany, the SS and the Hitler Youth. *Explain:* He realised the army and police would not support a coup, so he would need votes and the cooperation of people in power.",
            "**Judgement.** The change of strategy mattered most, because it led directly to the 'legal' route that made Hitler Chancellor in 1933. The putsch also exposed a weakness of Weimar: a man who tried to overthrow the state by force received a remarkably lenient sentence.",
          ],
          answer:
            "The failed putsch made Hitler nationally famous, produced Mein Kampf and — most importantly — convinced him to win power 'legally'.",
          yourTurn: {
            question: "Your turn: what was the title of the book Hitler wrote while in Landsberg prison?",
            answer: {
              type: "text",
              accept: ["Mein Kampf", "My Struggle", "Mein Kampf (My Struggle)"],
              display: "Mein Kampf",
            },
            solution: "***Mein Kampf*** ('My Struggle'), written in 1924 and published from 1925.",
          },
        },
      ],
      keyPoints: [
        "Hitler was born in **Austria (1889)**, failed as an artist and served in the German army in the First World War.",
        "The **German Workers' Party (1919)** became the **NSDAP (1920)**, with a **25-Point Programme**; Hitler led it from 1921.",
        "Hitler's main early asset was **public speaking**; the **SA** used violence against opponents.",
        "The **Munich Putsch (8–9 November 1923)** failed, but the **trial** gave Hitler national publicity.",
        "In prison he wrote ***Mein Kampf*** and decided to win power **legally**, through elections.",
      ],
      whyItWorks:
        "**Why does this matter?** The putsch shows that charismatic leadership on its own was not enough. In 1923 Hitler had speeches, the SA and a crisis — but the army, police and state were against him, so he failed. The lesson he drew, to work *within* the system, explains the shape of 1930–33: he needed votes, and then powerful people willing to hand him office. The trial also exposed a weakness of Weimar's justice system, which treated right-wing rebels gently.",
      strategies: ["Judge significance", "Consider the counter-argument", "Spot change and continuity"],
      thinkDeeper:
        "Was the failure of the Munich Putsch one of the most useful things that ever happened to Hitler? What might have happened if it had succeeded in Munich but been crushed in Berlin?",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "golden-years-and-depression",
      heading: "Recovery, then the Great Depression",
      discovery: {
        problem:
          "**Make a prediction.** Here is the Nazi share of the vote at three Reichstag elections:\n\n| Election | Nazi vote |\n|---|---|\n| May 1928 | 2.6% |\n| September 1930 | 18.3% |\n| July 1932 | 37.3% |\n\nIn 1928 about 1 voter in 40 chose the Nazis. Four years later it was more than 1 in 3. Hitler's ideas had not changed. Something else had. What? Write your prediction in one sentence.",
        idea:
          "The economy. The 'Golden Years' of 1924–29 were built on **American loans**. When the **Wall Street Crash** (October 1929) made US banks call those loans back, German businesses collapsed and unemployment soared towards **6 million**. Desperate people looked for radical answers. Hitler's message was the same as before — but far more people were now willing to listen.",
      },
      body:
        "**Stresemann and recovery.** **Gustav Stresemann** was Chancellor for about 100 days in 1923 and then Foreign Minister until his death in **October 1929**. With others, he steered Germany out of crisis:\n\n| Achievement | What it did |\n|---|---|\n| **Rentenmark** (Nov 1923) | New currency that ended hyperinflation |\n| **Dawes Plan** (1924) | Reparations made more manageable; **American loans** poured in; French troops left the Ruhr (1925) |\n| **Locarno Treaties** (1925) | Germany accepted its western borders; relations with France and Britain improved |\n| **League of Nations** (1926) | Germany admitted as a great power |\n| **Young Plan** (1929) | Reparations reduced and spread over 59 years |\n\nThese were Weimar's **'Golden Years'**. Industry recovered, wages rose, and Berlin became famous for art, cinema and architecture. Extremist parties faded: in **May 1928** the Nazis won just **2.6%** of the vote (12 seats).\n\n**Weak foundations.** The recovery depended on **borrowed American money**, much of it short-term loans that could be called back. Farmers were struggling with low food prices even before 1929. Meanwhile the Nazis quietly built their organisation, and joining the 1929 campaign against the Young Plan gave Hitler national publicity and allies such as the press owner **Alfred Hugenberg**.\n\n**The Great Depression.** In **October 1929** the US stock market crashed — the **Wall Street Crash**. American banks needed their money back and **recalled their loans**. German firms closed, trade collapsed and unemployment climbed:\n\n| Year | Unemployed (yearly average, approx.) |\n|---|---|\n| 1928 | 1.4 million |\n| 1930 | 3.1 million |\n| 1932 | 5.6 million — over **6 million** at the peak |\n\n**Democracy stalls.** In **March 1930** the coalition government split over how to pay for unemployment benefits. The new Chancellor, **Heinrich Brüning**, had no majority, so President **Hindenburg** used **Article 48** to pass laws by **decree**. Brüning cut spending and wages, which deepened the hardship. Parliament mattered less and less:\n\n| | 1930 | 1931 | 1932 |\n|---|---|---|---|\n| Laws passed by the Reichstag | 98 | 34 | 5 |\n| Presidential decrees | 5 | 44 | 66 |\n\nIn other words, Germany was already being governed without a working parliament *before* Hitler came to power.",
      diagram: chainSvg,
      diagramCaption: "Why the Golden Years ended so suddenly: Germany's recovery was built on American loans.",
      workedExamples: [
        {
          title: "Modelled answer: how far",
          problem: "How far did Germany recover under Stresemann, 1924–1929? (8 marks)",
          steps: [
            "**Plan.** 'How far' needs *both sides* and a judgement: real recovery (economy, diplomacy, politics) versus weak foundations.",
            "**Paragraph 1 — recovery.** *Point:* There was a genuine recovery. *Evidence:* The Rentenmark ended hyperinflation; the Dawes Plan (1924) brought American loans; Locarno (1925) and League membership (1926) restored Germany's international standing. *Explain:* Industry grew and extremist parties faded — the Nazis won only 2.6% in 1928, which suggests most voters trusted the system again.",
            "**Paragraph 2 — limits.** *Point:* The recovery rested on weak foundations. *Evidence:* It depended on short-term American loans; farmers were already in difficulty; and Hindenburg, a monarchist and war hero, was elected President in 1925. *Explain:* If the loans stopped, the economy would collapse — and the republic's head of state was not a committed democrat.",
            "**Paragraph 3 — politics.** *Point:* Political problems had been papered over, not solved. *Evidence:* Coalitions were still unstable, and in 1929 the campaign against the Young Plan gave Hitler national publicity. *Explain:* The anti-republic forces were waiting for the next crisis.",
            "**Judgement.** Germany recovered a great deal on the surface, but the recovery was fragile — Stresemann himself reportedly warned that Germany was 'dancing on a volcano'. The speed of the collapse after October 1929 shows how much depended on borrowed money.",
          ],
          answer:
            "Germany made a real but fragile recovery: stable money and better diplomacy, built on American loans that vanished after 1929.",
          yourTurn: {
            question:
              "Your turn: which politician, Foreign Minister from 1923 to 1929, is most associated with the 'Golden Years'? Give his surname.",
            answer: { type: "text", accept: ["Stresemann", "Gustav Stresemann", "Streseman"], display: "Stresemann" },
            solution: "**Gustav Stresemann** — the Rentenmark, Dawes Plan, Locarno and the League of Nations.",
          },
        },
      ],
      keyPoints: [
        "**Stresemann** led recovery: Rentenmark (1923), **Dawes Plan (1924)**, Locarno (1925), League of Nations (1926), **Young Plan (1929)**.",
        "The 'Golden Years' (1924–29) saw the Nazi vote fall to **2.6% in 1928**.",
        "The recovery depended on **short-term American loans**.",
        "The **Wall Street Crash (October 1929)** led US banks to recall loans; unemployment rose to about **6 million** by 1932.",
        "From **1930**, Chancellor **Brüning** governed by **Article 48 decrees** — parliament was already being sidelined.",
      ],
      whyItWorks:
        "**Why does this matter?** The Depression is the crisis that turned the Nazis from a fringe party into a mass movement: the same Hitler, with the same ideas, won 2.6% in good times and 37.3% in bad times. It also changed *how* Germany was governed. Once Brüning ruled by decree, real power moved from parliament to President Hindenburg and the small circle around him — and that circle would later decide to appoint Hitler.",
      strategies: ["Long-term vs short-term causes", "Link the causes", "Use precise evidence"],
      thinkDeeper:
        "If the Wall Street Crash had never happened, would Weimar democracy have survived? What evidence from 1924–29 supports your answer — and what evidence points the other way?",
    },
    // ------------------------------------------------------------------ 6
    {
      id: "road-to-chancellor",
      heading: "The road to Chancellor, 1930–1933",
      discovery: {
        problem:
          "**The coalition puzzle.** After the **July 1932** election the Reichstag had **608 seats**, so a government needed **305** for a majority.\n\n| Party | Seats | Attitude to the republic |\n|---|---|---|\n| Nazis (NSDAP) | 230 | Wanted to destroy it |\n| Social Democrats (SPD) | 133 | Supported it |\n| Communists (KPD) | 89 | Wanted to destroy it |\n| Centre Party + Bavarian People's Party | 97 | Mostly supported it |\n| Nationalists (DNVP) | 37 | Hostile to it |\n| Others | 22 | Mixed |\n\nTry to build a majority government **without** the Nazis or the Communists. Can you do it? What does that tell you?",
        idea:
          "You can't. Everyone except the Nazis and the KPD adds up to **289** seats — 16 short. The two parties that wanted to destroy democracy held **319 seats between them**, a majority. No normal parliamentary government was possible, so power drifted to President Hindenburg and the few people around him. That is how Hitler could be made Chancellor without ever winning a majority.",
      },
      body:
        "**From fringe to largest party**\n\n| Election | Nazi vote | Nazi seats |\n|---|---|---|\n| May 1928 | 2.6% | 12 |\n| September 1930 | 18.3% | 107 |\n| July 1932 | 37.3% | 230 — largest party |\n| November 1932 | 33.1% | 196 |\n\n**Why did people vote Nazi?** Several things worked together:\n- **The Depression.** Fear and desperation made extreme answers seem worth trying.\n- **Propaganda.** **Joseph Goebbels**, head of Nazi propaganda from 1930, used posters, mass rallies, leaflets, films, loudspeaker vans and newspapers. Messages were short and endlessly repeated: **'Work and Bread'**, a strong leader, national pride, tearing up Versailles. In 1932 Hitler flew from city to city to address several huge crowds in a single day. Propaganda also spread hatred, falsely blaming Jewish people and communists for Germany's problems — scapegoating that was a lie, and dangerous.\n- **Something for everyone.** The Nazis promised farmers better prices, the middle classes protection from communism, the unemployed jobs, and young people excitement and a cause. Support was strongest among Protestants, in the countryside and small towns, and in the middle classes; it was weaker among Catholics and industrial workers, many of whom stayed loyal to the Centre Party, SPD or KPD.\n- **Fear of communism.** The KPD's vote was rising too. Many businessmen and middle-class voters saw the Nazis as a barrier against revolution, and some wealthy industrialists gave money.\n- **The SA.** By 1932 the SA had roughly **400,000** members. To some, their marches looked like order and strength; their street fights with communists caused deaths and intimidated opponents.\n\n**The backroom deal.** Votes alone did not make Hitler Chancellor. In 1932 Hindenburg defeated him in the presidential election, and in November the Nazi vote **fell**. Chancellors came and went — **Brüning**, then **Franz von Papen**, then **Kurt von Schleicher** — none with a majority. In January 1933 Papen, who wanted revenge on Schleicher, persuaded the 85-year-old **Hindenburg** to appoint Hitler Chancellor, with Papen as Vice-Chancellor and only **three Nazis** in the cabinet. They believed they could control Hitler and borrow his mass support. On **30 January 1933** Hitler became Chancellor — **appointed**, not elected, and not by a coup.",
      diagram: votesSvg,
      diagramCaption:
        "Unemployment (bars) and the Nazi share of the vote (dots). The two rise together — but notice the Nazi vote fell in November 1932, two months before Hitler was appointed.",
      workedExamples: [
        {
          title: "Modelled answer: analysing propaganda as a source",
          problem:
            "**Source B** — a Nazi election poster from 1932, described for this exercise. It shows a crowd of thin, exhausted-looking men and women in shabby clothes, drawn in dull greys and browns. Across the bottom, in large letters: *'Our last hope: Hitler'*.\n\nHow useful is Source B for explaining why support for the Nazis grew in 1932? (8 marks)",
          steps: [
            "**Plan.** Usefulness = what the *content* shows + what the *provenance* (who, when, why) shows + what your own knowledge adds + what is missing. Remember: we analyse propaganda; we don't take its claims as facts.",
            "**Content.** The poster targets ordinary people ruined by the Depression. It offers no detailed policies — just one emotional idea: everything else has failed, so Hitler is the only hope. This is useful because it shows *how* the Nazis appealed to desperate voters.",
            "**Provenance.** It was made by the Nazi Party during an election campaign, so its purpose was to persuade, not to inform. That makes it unreliable as evidence of what Germans actually felt — but very reliable evidence of Nazi *methods*: simple slogans, emotion and a single saviour-leader.",
            "**Own knowledge.** It fits the context: unemployment passed 6 million in early 1932, and in July 1932 the Nazis won 37.3% and became the largest party. Goebbels' campaigns relied on exactly this kind of message, repeated through rallies, films and Hitler's flights across Germany.",
            "**Limits.** It hides the darker side of Nazi campaigning — SA violence and the antisemitic scapegoating in other propaganda — and it cannot show how many people were convinced. The Nazi vote *fell* in November 1932, and Hitler was finally appointed through a backroom deal, which no poster can explain.",
            "**Judgement.** Source B is very useful for showing how the Nazis turned economic despair into votes, but less useful for measuring their support or explaining how Hitler actually became Chancellor.",
          ],
          answer:
            "Useful for showing Nazi propaganda methods and their appeal to desperate voters; limited because it is designed to persuade and leaves out violence and the backroom deal.",
        },
        {
          title: "Modelled answer: explain",
          problem: "Explain why Hitler was appointed Chancellor in January 1933. (6 marks)",
          steps: [
            "**Plan.** Two kinds of reason: why Hitler was *strong enough* to be considered (votes) and why the people in power *chose* him (the deal).",
            "**Paragraph 1.** *Point:* The Nazis had become impossible to ignore. *Evidence:* In July 1932 they won 37.3% and 230 seats, the largest party. *Explain:* With the Nazis and Communists together holding a majority, no stable government could be formed without Nazi support.",
            "**Paragraph 2.** *Point:* Conservative elites thought they could use him. *Evidence:* Papen persuaded Hindenburg to appoint Hitler with Papen as Vice-Chancellor and only three Nazis in the cabinet. *Explain:* They wanted Hitler's mass support to back an authoritarian government and to block the communists, and believed they could control him.",
            "**Judgement.** Votes made Hitler a contender, but the decisive cause was the choice made by Hindenburg and Papen — the Nazi vote was actually falling when he was appointed.",
          ],
          answer:
            "Nazi electoral strength made Hitler a contender, but Hindenburg and Papen's miscalculation is what made him Chancellor.",
          yourTurn: {
            question: "Your turn: which President appointed Hitler Chancellor on 30 January 1933? Give his surname.",
            answer: {
              type: "text",
              accept: ["Hindenburg", "von Hindenburg", "Paul von Hindenburg", "President Hindenburg", "President von Hindenburg"],
              display: "Hindenburg",
            },
            solution: "**Paul von Hindenburg**, the 85-year-old President, persuaded by Franz von Papen.",
          },
        },
      ],
      keyPoints: [
        "The Nazi vote rose from **2.6% (1928)** to **18.3% (1930)** and **37.3% (July 1932)** — the largest party, but never a majority.",
        "**Goebbels'** propaganda used simple, repeated messages ('Work and Bread') and modern methods; it also spread hatred and scapegoats.",
        "The Nazis appealed to different groups: farmers, the middle classes, the young and the unemployed — and to **fear of communism**.",
        "The **SA** (about 400,000 by 1932) used intimidation and street violence.",
        "On **30 January 1933** Hindenburg, persuaded by **von Papen**, **appointed** Hitler Chancellor, believing he could be controlled.",
      ],
      whyItWorks:
        "**Why did this happen?** All three enquiry factors meet in 1930–33. **Crisis** (the Depression) created millions of desperate voters. **Leadership and propaganda** turned that desperation into Nazi votes. **Weak government** — no possible majority, rule by Article 48, and a few powerful men making secret deals — turned those votes into office. Take away the backroom deal, and Hitler might have stayed the leader of a large but declining opposition party.",
      strategies: ["Weigh factors", "Check the provenance (NOP)", "Think about purpose"],
      thinkDeeper:
        "The Nazi vote fell from 37.3% to 33.1% between July and November 1932. Some historians argue the Nazis had already peaked. Does that make Hindenburg and Papen more, or less, responsible for what followed?",
    },
    // ------------------------------------------------------------------ 7
    {
      id: "creating-a-dictatorship",
      heading: "From Chancellor to dictator, 1933–1934",
      discovery: {
        problem:
          "**On 30 January 1933 Hitler was Chancellor — but not yet a dictator.** Look at what stood in his way:\n\n1. The **Reichstag** — the Nazis had no majority.\n2. **Other parties and trade unions** — millions of organised opponents.\n3. **President Hindenburg**, who could dismiss him.\n4. The **army**, the most powerful force in the country.\n5. Rivals in his own movement — the SA wanted a 'second revolution'.\n6. **Rights in the constitution** — free speech, a free press, protection from arrest.\n\nPredict: how might he remove each obstacle — and could he do it while appearing to stay 'legal'?",
        idea:
          "In about **19 months** he removed every obstacle, mostly with laws and decrees backed by the threat of violence: the **Reichstag Fire Decree** suspended rights; the **Enabling Act** let him make laws without the Reichstag; unions and other parties were **banned**; the **Night of the Long Knives** destroyed the SA leadership and pleased the army; and when **Hindenburg died**, Hitler took his powers too. It is sometimes called a 'legal revolution' — but the legality was a mask over terror.",
      },
      body:
        "**The Reichstag Fire (27 February 1933).** The parliament building burned. A young Dutch communist, **Marinus van der Lubbe**, was arrested at the scene, and the Nazis claimed a communist uprising was beginning. (Historians still debate whether he acted alone — many think he did — but the Nazis certainly exploited the fire.) Next day Hindenburg signed an **emergency decree** that **suspended civil rights**: free speech, a free press, protection from arrest. Thousands of communists and other opponents were arrested.\n\n**The March election (5 March 1933).** Amid SA intimidation, with communist leaders locked up, the Nazis won **43.9%** — still not a majority on their own.\n\n**The Enabling Act (23 March 1933).** This law let Hitler's government make laws **without the Reichstag** for four years. It needed a two-thirds majority. Communist deputies were arrested or in hiding, SA men packed the building, and the Catholic Centre Party was given promises that were later broken. It passed by **444 votes to 94** — only the **Social Democrats** voted against. Parliament voted away its own power.\n\n**Removing opposition.** On **2 May 1933** trade unions were abolished and replaced by the Nazi-run **German Labour Front**. On **14 July 1933** a law made the Nazis the **only legal party**.\n\n**The Night of the Long Knives (30 June 1934).** The SA, led by **Ernst Röhm**, had grown to around three million men and wanted to absorb the army. Army leaders and big business feared them. Hitler had Röhm and other SA leaders — plus old rivals such as former Chancellor **von Schleicher** — murdered by the **SS**. At least 85 people were killed, probably more. Hitler then declared the killings legal.\n\n**Führer (August 1934).** When **Hindenburg died on 2 August 1934**, Hitler merged the posts of President and Chancellor and took the title **Führer** (leader). The same day, every soldier swore an oath of loyalty to **Hitler personally**.\n\n**Persecution begins.** From the start the regime ruled through fear. Opponents were sent to new **concentration camps** such as **Dachau** (opened March 1933). On **1 April 1933** the Nazis organised a boycott of Jewish-owned shops; within days, Jewish civil servants began to be dismissed, and in May books by Jewish and anti-Nazi writers were burned. These were the first steps on a path that led to the murder of around **six million Jewish people** in the **Holocaust**, along with Roma and Sinti people, disabled people and many others. Remembering how laws were used, step by step, to strip people of their rights is a central reason this history is taught.",
      diagram: stepsSvg,
      diagramCaption:
        "Eight steps to dictatorship. Most were taken through laws and decrees — but each was backed by the threat of violence.",
      workedExamples: [
        {
          title: "Modelled answer: explain",
          problem: "Explain how Hitler turned himself from Chancellor into dictator between 1933 and 1934. (8 marks)",
          steps: [
            "**Plan.** Group the steps by *method*, not just date: (1) legal measures that removed rights and parliament; (2) destroying organised opposition; (3) securing the army and the top job. End by judging the key step.",
            "**Paragraph 1 — legal power.** *Point:* Hitler used emergency laws to remove the limits on his power. *Evidence:* After the Reichstag Fire (27 February 1933) a decree suspended civil rights, and on 23 March 1933 the Enabling Act, passed 444 to 94, let his government make laws without the Reichstag. *Explain:* Because these steps looked legal, many Germans — and the civil service and courts — accepted them.",
            "**Paragraph 2 — removing opposition.** *Point:* He then dismantled every rival organisation. *Evidence:* Trade unions were abolished in May 1933, and from 14 July 1933 the Nazis were the only legal party; opponents were sent to camps such as Dachau. *Explain:* There was now no legal way to organise against him.",
            "**Paragraph 3 — army and presidency.** *Point:* Finally he secured the army and Hindenburg's powers. *Evidence:* In the Night of the Long Knives (30 June 1934) the SS murdered Röhm and other SA leaders; when Hindenburg died on 2 August 1934, Hitler became Führer and the army swore an oath to him personally. *Explain:* The only forces left that could have removed him were now tied to him.",
            "**Judgement.** The Enabling Act was the most important single step, because it gave him the legal power to do everything else. But it worked only because it was backed by terror — the SA in the chamber, opponents in prison. 'Legal' and 'violent' were two sides of the same method.",
          ],
          answer:
            "Hitler combined legal-looking measures (the Fire Decree, the Enabling Act) with terror (camps, the Night of the Long Knives), then secured the army when Hindenburg died.",
          yourTurn: {
            question:
              "Your turn: which law of March 1933 allowed Hitler's government to make laws without the Reichstag?",
            answer: {
              type: "text",
              accept: ["Enabling Act", "the Enabling Act", "Enabling Law", "the Enabling Law", "Ermächtigungsgesetz", "Ermachtigungsgesetz"],
              display: "the Enabling Act",
            },
            solution: "**The Enabling Act** (23 March 1933), passed by 444 votes to 94.",
          },
        },
      ],
      keyPoints: [
        "**Reichstag Fire (27 February 1933)** → emergency decree suspending civil rights; thousands arrested.",
        "**Enabling Act (23 March 1933)** → laws without the Reichstag; passed 444–94, only the SPD voting against.",
        "**Trade unions banned (May 1933)**; Nazis the **only legal party (14 July 1933)**.",
        "**Night of the Long Knives (30 June 1934)** → SA leaders and rivals murdered; the army reassured.",
        "**Hindenburg dies (2 August 1934)** → Hitler becomes **Führer**; the army swears loyalty to him personally.",
        "Persecution began at once: concentration camps, the **April 1933 boycott** of Jewish shops, dismissals and book burnings.",
      ],
      whyItWorks:
        "**Why does this matter?** Hitler destroyed democracy largely with democracy's own tools: a presidential decree, a vote in parliament, new laws. Each step was presented as protection against communists or traitors, so many Germans accepted it, while violence and fear silenced those who did not. That is why historians stress that democracies can be dismantled from the inside — and why many modern constitutions, including post-war Germany's, contain safeguards against exactly this.",
      strategies: ["Put it in chronological order", "Judge significance", "Think about who benefited"],
      thinkDeeper:
        "Which single step made Hitler a dictator: the Reichstag Fire Decree, the Enabling Act, or Hindenburg's death and the army oath? Could anyone have stopped him after the first step — and who?",
    },
    // ------------------------------------------------------------------ 8
    {
      id: "why-hitler-rose",
      heading: "Enquiry: why did Hitler come to power?",
      discovery: {
        problem:
          "**Take one away.** Your enquiry uses three factors: **crises**, **weakness of government** and **charismatic leadership**. Try a thought experiment for each:\n\n1. No **Great Depression** — but Hitler and the Weimar constitution exactly as they were.\n2. No **backroom deal** — Hindenburg and Papen refuse to appoint Hitler.\n3. No **Hitler** — the same crises and constitution, but no gifted Nazi speaker.\n\nIn each case, would a Nazi dictatorship still have arrived in 1933? Rank the three factors — then ask yourself whether ranking them is even the right question.",
        idea:
          "Most historians conclude that **no single factor was enough**. In 1928 Hitler was just as charismatic, but with no crisis he won 2.6%. The Depression created millions of desperate voters, but without Hitler's movement their anger might have gone elsewhere. And even at 37% he was not given power until a small group of elites chose to hand it to him. The strongest answers explain **how the factors linked**: crisis made people listen, leadership turned that into votes, and weak government turned votes into power.",
      },
      body:
        "**Factor 1: Crises**\n- **Versailles (1919)** — a lasting grievance, and the 'stab in the back' myth.\n- **Hyperinflation (1923)** — wiped out middle-class savings and trust.\n- **The Great Depression (1929–33)** — about 6 million unemployed; the key short-term cause of mass Nazi support.\n\n**Factor 2: Weakness of government**\n- **Proportional representation** — coalitions that kept collapsing; by July 1932 no majority was possible without the Nazis or the Communists.\n- **Article 48** — from 1930, government by presidential decree, so power lay with Hindenburg's circle rather than parliament.\n- **Elites' miscalculation** — Papen, Hindenburg and their allies appointed Hitler, believing they could control him.\n\n**Factor 3: Charismatic leadership**\n- **Hitler's speeches** — emotional, simple and repeated; he presented himself as the one man who could save Germany.\n- **Propaganda** — Goebbels' modern, targeted campaigns.\n- **Organisation** — a national party, the SA and youth groups: a movement that looked strong when the state looked weak.\n\n**Linking the factors**\n\n| Link | How it worked |\n|---|---|\n| Crisis → leadership | Desperation made people listen to an extremist they had ignored in 1928 |\n| Crisis → weak government | Coalitions could not agree how to tackle the Depression, so Article 48 took over |\n| Leadership → weak government | Hitler's 37% made him impossible to ignore — and tempting for elites to 'use' |\n\n**Interpretations.** Historians weigh these differently. Some stress Weimar's long-term weaknesses; others the economic collapse; biographers focus on Hitler's personality and skills. Historians such as **Ian Kershaw** emphasise that Hitler's appointment was **not inevitable**: it resulted from decisions made by a small group around Hindenburg. Others, such as **Richard J. Evans**, stress that violence and intimidation mattered alongside votes.\n\n**Why remembering matters.** Hitler never won a majority in a free election. A democracy was taken apart through crisis, fear, propaganda and the choices of people who thought they could control an extremist. The result was dictatorship, world war and the **Holocaust**. That is why historians — and citizens — study the warning signs, and why many democracies, including post-war Germany, built safeguards to protect their constitutions.",
      diagram: webSvg,
      diagramCaption:
        "A factor web. Solid arrows: each factor's direct contribution. Dashed lines: the links between factors — where the best answers earn their marks.",
      workedExamples: [
        {
          title: "Modelled answer: how far do you agree",
          problem:
            "'The Great Depression was the main reason Hitler came to power in 1933.' How far do you agree? (16 marks)",
          steps: [
            "**Plan.** Agree side: the Depression and the Nazi vote. Other side: weak government (the deal, Article 48) and leadership (propaganda, organisation). Then a judgement that *links* them rather than just picking one.",
            "**Agree (PEEL).** *Point:* The Depression transformed Nazi support. *Evidence:* Unemployment rose from about 1.4 million in 1928 to over 6 million in early 1932, and the Nazi vote rose from 2.6% to 37.3% in July 1932. *Explain:* Desperate voters turned to a party promising 'Work and Bread' and a strong leader. *Link:* Without the Depression, Hitler would probably have stayed on the fringe, as in 1928.",
            "**Disagree 1 — weak government.** *Point:* Votes alone did not make Hitler Chancellor. *Evidence:* The Nazis never won a majority, their vote fell to 33.1% in November 1932, and Hitler was appointed after Papen persuaded Hindenburg on 30 January 1933. *Explain:* Because no majority was possible and Article 48 had put power in the President's hands, a few men could decide. Their miscalculation was the final, decisive step.",
            "**Disagree 2 — leadership.** *Point:* Other countries suffered in the Depression without becoming Nazi dictatorships. *Evidence:* Britain and the USA also had mass unemployment. In Germany, Goebbels' propaganda, Hitler's speeches and the 400,000-strong SA turned anger into a disciplined movement. *Explain:* The Depression created the opportunity; Nazi leadership exploited it.",
            "**Judgement.** I partly agree. The Depression was the most important *crisis*, because it created mass support; but it was not sufficient. Hitler came to power because the Depression made voters listen, his leadership turned their anger into votes, and the weakness of Weimar let a small elite hand him power. An equally valid judgement would argue that the elites' decision was the main reason, since it came when Nazi support was already falling.",
          ],
          answer:
            "Partly agree: the Depression created mass support, but Hitler only came to power because Nazi leadership exploited it and weak government let elites appoint him.",
          yourTurn: {
            question:
              "Your turn: in the July 1932 election the Nazis became the largest party. What percentage of the vote did they win, to the nearest whole number?",
            answer: { type: "number", value: 37, tolerance: 0.5, display: "37% (37.3%)" },
            solution: "**37.3%** — the largest party, with 230 seats, but still well short of a majority.",
          },
        },
      ],
      keyPoints: [
        "Three linked factors: **crises**, **weakness of government**, **charismatic leadership**.",
        "The **Depression** turned the Nazis into a mass party — but they **never won a majority** in a free election.",
        "The final step was a **choice by conservative elites** (Papen, Hindenburg), not an election or a coup.",
        "Historians disagree on the weighting; strong answers **link** factors and reach a supported judgement.",
        "Hitler's rise shows how a democracy can be **dismantled legally** — and where that led: war and the Holocaust.",
      ],
      whyItWorks:
        "**Why does this matter?** Your enquiry asks *under what circumstances* dictatorships come to power. Germany shows that circumstances work together: crises create anger, weak institutions create openings, and a leader who can channel the anger walks through the opening. Because the same three factors appear in Mao's China and Pol Pot's Cambodia in different forms, learning to *link* them here gives you a framework for the whole term.",
      strategies: ["Weigh factors", "Link the causes", "Consider the counter-argument"],
      thinkDeeper:
        "Hitler came to power through a legal appointment; Mao and Pol Pot through civil war. Do the three factors — crises, weak government, leadership — work the same way in each case, or does the route to power change which matters most?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Weimar Republic", back: "Germany's democratic republic, 1919–1933, named after the town where its constitution was written." },
      { front: "Armistice (date)", back: "The ceasefire that ended the fighting of the First World War: **11 November 1918**." },
      { front: "Proportional representation (PR)", back: "Seats shared out in proportion to votes — fair, but it produced many parties and unstable coalitions." },
      { front: "Article 48", back: "The part of the Weimar constitution letting the President rule by **decree** in an emergency, bypassing the Reichstag." },
      { front: "Treaty of Versailles", back: "Peace treaty signed **28 June 1919**. Terms: **LAMB** — Land, Army, Money, Blame." },
      { front: "Diktat", back: "'Dictated peace' — Germans' name for Versailles, because they had no say in its terms." },
      { front: "Article 231", back: "The 'war guilt' clause of Versailles: Germany accepted responsibility for the war's loss and damage." },
      { front: "Reparations", back: "Compensation Germany had to pay for war damage — fixed in **1921** at **£6.6 billion** (132 billion gold marks)." },
      { front: "'Stab in the back' myth", back: "The false claim that the army was not defeated in 1918 but betrayed at home by politicians, socialists and (antisemitically) Jewish people." },
      { front: "November Criminals", back: "Nationalists' insult for the politicians who signed the armistice in November 1918." },
      { front: "Spartacist uprising", back: "Communist revolt in Berlin, **January 1919**, crushed by the Freikorps; Luxemburg and Liebknecht were murdered." },
      { front: "Kapp Putsch", back: "Right-wing attempt to seize Berlin, **March 1920**; the army stood aside, but a workers' general strike defeated it." },
      { front: "Hyperinflation (1923)", back: "Prices rising out of control: a loaf went from 0.63 marks (1918) to about **201 billion marks** (November 1923)." },
      { front: "Munich (Beer Hall) Putsch", back: "Hitler's failed attempt to seize power by force in Munich, **8–9 November 1923**." },
      { front: "Mein Kampf", back: "'My Struggle' — the book Hitler wrote in Landsberg prison (1924), setting out his antisemitic and expansionist ideas." },
      { front: "SA", back: "*Sturmabteilung* ('stormtroopers' or 'brownshirts') — the Nazis' paramilitary force, led from 1931 by Ernst Röhm." },
      { front: "Gustav Stresemann", back: "Chancellor (1923) then Foreign Minister (1923–29); led the 'Golden Years' recovery. Died October 1929." },
      { front: "Dawes Plan", back: "**1924** agreement that made reparations manageable and brought American loans into Germany." },
      { front: "Wall Street Crash", back: "US stock market collapse, **October 1929**; American banks recalled loans, triggering the Depression in Germany." },
      { front: "Joseph Goebbels", back: "Nazi propaganda chief from 1930; master of simple, repeated, emotional messages." },
      { front: "30 January 1933", back: "Hitler **appointed** Chancellor by President Hindenburg, persuaded by Franz von Papen." },
      { front: "Reichstag Fire", back: "**27 February 1933** — the parliament building burned; the next day's decree suspended civil rights." },
      { front: "Enabling Act", back: "**23 March 1933** — let Hitler's government make laws without the Reichstag; passed 444 to 94." },
      { front: "Night of the Long Knives", back: "**30 June 1934** — Hitler had Röhm, other SA leaders and rivals murdered by the SS." },
      { front: "Führer", back: "'Leader' — Hitler's title after Hindenburg's death on **2 August 1934**, combining President and Chancellor." },
    ],
    mustKnow: [
      "Can you explain why the Weimar Republic was fragile from the start (defeat, PR, Article 48)?",
      "Can you recall the terms of the Treaty of Versailles using **LAMB**, with at least one precise example each?",
      "Can you explain the causes and effects of **hyperinflation in 1923**, including who lost and who gained?",
      "Can you explain why the **Munich Putsch** failed and why it still helped Hitler?",
      "Can you explain how Stresemann's recovery worked — and why it depended on American loans?",
      "Can you use figures to show how the **Depression** changed the Nazi vote (2.6% → 18.3% → 37.3%)?",
      "Can you explain how Hitler became Chancellor by **appointment**, not election or coup?",
      "Can you put the steps from Chancellor to dictator (January 1933 – August 1934) in order?",
      "Can you weigh **crises**, **weakness of government** and **charismatic leadership** and reach a supported judgement?",
      "Can you analyse a piece of Nazi propaganda for its purpose and audience, without treating its claims as facts?",
    ],
    misconceptions: [
      {
        wrong: "Hitler seized power in a coup.",
        right: "His one coup attempt (Munich, 1923) failed. He was **appointed** Chancellor legally on 30 January 1933, then used laws, decrees and terror to become dictator.",
      },
      {
        wrong: "The Nazis won a majority of the votes.",
        right: "Their best free-election result was **37.3%** (July 1932). Even in March 1933, amid intimidation, they won 43.9% — still not a majority on their own.",
      },
      {
        wrong: "Germans elected Hitler as Chancellor.",
        right: "Germans elected the **Reichstag**; the **President** appointed the Chancellor. Hindenburg appointed Hitler after a backroom deal with Papen.",
      },
      {
        wrong: "Hyperinflation in 1923 brought Hitler to power.",
        right: "In 1923 Hitler's putsch failed, and in 1928 the Nazis won only 2.6%. The economic crisis that made them a mass party was the **Great Depression** after 1929.",
      },
      {
        wrong: "Everyone lost out from hyperinflation.",
        right: "Savers, pensioners and people on fixed incomes were ruined, but **debtors** — including some farmers and businessmen — gained, and some industrialists bought up rivals cheaply.",
      },
      {
        wrong: "The German army was betrayed at home in 1918.",
        right: "That is the **'stab in the back' myth**. Army leaders Hindenburg and Ludendorff themselves told the government the war could not be won.",
      },
      {
        wrong: "The Reichstag Fire proves the communists were plotting a revolution.",
        right: "No communist uprising followed. Historians still debate whether van der Lubbe acted alone — but the Nazis clearly **exploited** the fire to arrest opponents.",
      },
    ],
    examMistakes: [
      "Describing events (what happened) instead of **explaining** why they mattered — always add 'this meant that…' or 'this led to…'.",
      "Mixing up the two economic crises: **hyperinflation (1923)** and the **Depression (1929–33)**.",
      "Writing that Hitler was 'elected' Chancellor — he was **appointed**.",
      "Listing factors without **linking** them or reaching a **judgement** in 'how far' questions.",
      "Making claims with no precise evidence — use dates, names and figures (2.6%, 37.3%, 6 million, 444–94).",
      "Treating Nazi propaganda as fact — always ask who made it and **why**.",
      "Using hindsight: in 1932 many people did not expect Hitler to become a dictator — avoid writing as if it was inevitable.",
    ],
    mnemonics: [
      {
        topic: "Treaty of Versailles terms",
        device: "**LAMB** — Land, Army, Money, Blame",
        explanation:
          "Land: Alsace-Lorraine, Polish Corridor, colonies. Army: 100,000 men, Rhineland demilitarised. Money: £6.6 billion reparations. Blame: Article 231, the war guilt clause.",
      },
      {
        topic: "The three enquiry factors",
        device: "**Can We Cope?** — Crises, Weak government, Charismatic leadership",
        explanation:
          "The question millions of Germans were asking in 1932 — and the three factors you weigh to explain how any dictator came to power this term.",
      },
      {
        topic: "Stresemann's recovery",
        device: "**R**eally **D**aring **L**eaders **L**ook **Y**oung — Rentenmark, Dawes, Locarno, League, Young",
        explanation:
          "In order: Rentenmark (1923), Dawes Plan (1924), Locarno (1925), League of Nations (1926), Young Plan (1929).",
      },
    ],
    realWorld: [
      {
        title: "Germany's 'defensive democracy'",
        detail:
          "West Germany's 1949 constitution (the Basic Law) was written with Weimar in mind: a Chancellor can only be removed if parliament agrees on a replacement, the President has no Article 48-style powers, and a constitutional court can ban parties that aim to destroy democracy. Election law adds a further safeguard: parties normally need 5% of the vote to win seats.",
        emoji: "🏛️",
      },
      {
        title: "Singapore's 'banana money'",
        detail:
          "During the Japanese Occupation of Singapore (1942–45), the occupiers printed so much of their own currency — nicknamed 'banana money' after the banana trees on some notes — that prices soared, and the notes became worthless after the war. Like Germany in 1923, people learned how quickly printed money can lose its value.",
        emoji: "🍌",
      },
      {
        title: "Holocaust Memorial Day",
        detail:
          "Every year on **27 January** — the date Auschwitz-Birkenau was liberated in 1945 — the world marks International Holocaust Remembrance Day, honouring the victims and asking how persecution began with words, laws and exclusion.",
        emoji: "🕯️",
      },
      {
        title: "Spotting propaganda today",
        detail:
          "The questions historians ask of Goebbels' posters — who made this, who is it aimed at, what emotion does it use, who is blamed, what is left out? — are the same ones media-literacy experts recommend for checking adverts, viral videos and online misinformation.",
        emoji: "🔍",
      },
      {
        title: "Hyperinflation since 1923",
        detail:
          "Germany's was not the last: Hungary (1946) and Zimbabwe (2007–09, which printed a 100-trillion-dollar note) suffered even faster price rises. Economists still study 1923 as a warning about printing money to pay for crises.",
        emoji: "💸",
      },
    ],
    videos: [
      {
        title: "How did Hitler rise to power?",
        channel: "TED-Ed",
        url: "https://www.youtube.com/results?search_query=ted-ed+how+did+hitler+rise+to+power",
      },
      {
        title: "Weimar Germany and hyperinflation",
        channel: "BBC Teach / Bitesize",
        url: "https://www.youtube.com/results?search_query=bbc+teach+weimar+germany+hyperinflation",
      },
      {
        title: "The rise of Hitler, animated",
        channel: "Simple History",
        url: "https://www.youtube.com/results?search_query=simple+history+rise+of+hitler",
      },
      {
        title: "Weimar and Nazi Germany revision",
        channel: "Mr Allsop History",
        url: "https://www.youtube.com/results?search_query=mr+allsop+history+weimar+germany",
      },
    ],
    formulas: [
      { name: "11 November 1918", formula: "Armistice ends the fighting; the Kaiser had abdicated on 9 November" },
      { name: "January 1919", formula: "Spartacist uprising crushed by the Freikorps" },
      { name: "28 June 1919", formula: "Treaty of Versailles signed (LAMB)" },
      { name: "August 1919", formula: "Weimar constitution comes into force: PR, votes at 20, Article 48" },
      { name: "March 1920", formula: "Kapp Putsch defeated by a general strike" },
      { name: "1923", formula: "Ruhr occupied (January); hyperinflation; Munich Putsch fails (8–9 November)" },
      { name: "1924", formula: "Dawes Plan — American loans; start of the 'Golden Years'" },
      { name: "May 1928", formula: "Nazis win 2.6% of the vote (12 seats)" },
      { name: "October 1929", formula: "Stresemann dies; Wall Street Crash" },
      { name: "September 1930", formula: "Nazis win 18.3% (107 seats); Brüning governs by Article 48 decree" },
      { name: "July 1932", formula: "Nazis win 37.3% (230 seats) — the largest party", note: "Their best result in a free election" },
      { name: "30 January 1933", formula: "Hitler appointed Chancellor by Hindenburg" },
      { name: "27–28 February 1933", formula: "Reichstag Fire; emergency decree suspends civil rights" },
      { name: "23 March 1933", formula: "Enabling Act passed, 444 votes to 94" },
      { name: "14 July 1933", formula: "Nazis become the only legal party" },
      { name: "30 June 1934", formula: "Night of the Long Knives" },
      { name: "2 August 1934", formula: "Hindenburg dies; Hitler becomes Führer; army oath" },
    ],
  },
};
