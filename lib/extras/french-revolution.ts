import type { TopicExtras } from "../types.ts";

const declarationsVennSvg = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram comparing the Declaration of the Rights of Man of 1789 with Olympe de Gouges' Declaration of the Rights of Woman of 1791. Both share liberty, property, resistance to oppression and the sovereignty of the nation. Only the 1789 text says men are born free and equal and became law; only the 1791 text says woman is born free and equal to man and claims women's right to speak in politics, and it was never adopted." font-family="sans-serif"><rect width="480" height="300" fill="#ffffff"/><circle cx="165" cy="160" r="115" fill="#c7d2fe" fill-opacity="0.7" stroke="#334155"/><circle cx="315" cy="160" r="115" fill="#fecaca" fill-opacity="0.7" stroke="#334155"/><text x="120" y="30" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">Rights of Man (1789)</text><text x="360" y="30" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">Rights of Woman (1791)</text><text x="118" y="118" font-size="11" text-anchor="middle" fill="#1f2937">“Men are born</text><text x="118" y="132" font-size="11" text-anchor="middle" fill="#1f2937">and remain free</text><text x="118" y="146" font-size="11" text-anchor="middle" fill="#1f2937">and equal”</text><text x="118" y="172" font-size="11" text-anchor="middle" fill="#1f2937">Written by male</text><text x="118" y="186" font-size="11" text-anchor="middle" fill="#1f2937">deputies</text><text x="118" y="212" font-size="11" font-weight="bold" text-anchor="middle" fill="#1f2937">Became law</text><text x="362" y="118" font-size="11" text-anchor="middle" fill="#1f2937">“Woman is born</text><text x="362" y="132" font-size="11" text-anchor="middle" fill="#1f2937">free and lives</text><text x="362" y="146" font-size="11" text-anchor="middle" fill="#1f2937">equal to man”</text><text x="362" y="172" font-size="11" text-anchor="middle" fill="#1f2937">Right to speak</text><text x="362" y="186" font-size="11" text-anchor="middle" fill="#1f2937">in politics</text><text x="362" y="212" font-size="11" font-weight="bold" text-anchor="middle" fill="#1f2937">Never adopted</text><text x="240" y="112" font-size="11" text-anchor="middle" fill="#1f2937">Liberty</text><text x="240" y="132" font-size="11" text-anchor="middle" fill="#1f2937">Property</text><text x="240" y="152" font-size="11" text-anchor="middle" fill="#1f2937">Resisting</text><text x="240" y="166" font-size="11" text-anchor="middle" fill="#1f2937">oppression</text><text x="240" y="186" font-size="11" text-anchor="middle" fill="#1f2937">Nation is</text><text x="240" y="200" font-size="11" text-anchor="middle" fill="#1f2937">sovereign</text><text x="240" y="294" font-size="11" text-anchor="middle" fill="#334155">De Gouges copied the 1789 text clause by clause to expose who it left out.</text></svg>`;

const atlanticSvg = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic map, not to scale, of the Atlantic connections of Saint-Domingue. Goods went from France to West Africa, enslaved Africans were forcibly carried from West Africa to Saint-Domingue, and sugar and coffee went from Saint-Domingue to France. Key dates: 1791 revolt of enslaved people, 1794 France abolishes slavery, 1802 Napoleon sends an army to restore it, 1804 Haiti wins independence." font-family="sans-serif"><defs><marker id="frx-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs><rect width="480" height="300" fill="#ffffff"/><text x="10" y="18" font-size="13" font-weight="bold" fill="#1f2937">Saint-Domingue and the Atlantic</text><text x="10" y="34" font-size="11" font-style="italic" fill="#334155">Schematic map — not to scale</text><polygon points="360,50 400,45 425,70 410,100 370,100 355,75" fill="#c7d2fe" stroke="#334155"/><text x="390" y="78" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">France</text><polygon points="350,160 420,150 470,175 480,200 480,300 420,300 400,250 360,215" fill="#fde68a" stroke="#334155"/><text x="425" y="215" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">West Africa</text><ellipse cx="90" cy="160" rx="34" ry="12" fill="#bbf7d0" stroke="#334155"/><text x="90" y="140" font-size="12" font-weight="bold" text-anchor="middle" fill="#1f2937">Saint-Domingue (Haiti)</text><text x="240" y="150" font-size="12" font-style="italic" text-anchor="middle" fill="#334155">ATLANTIC OCEAN</text><path d="M405 102 Q440 125 425 152" fill="none" stroke="#334155" stroke-width="1.5" marker-end="url(#frx-arr)"/><text x="442" y="128" font-size="11" fill="#1f2937">goods</text><path d="M355 195 Q230 230 128 170" fill="none" stroke="#b91c1c" stroke-width="2" marker-end="url(#frx-arr)"/><text x="262" y="232" font-size="11" text-anchor="middle" fill="#1f2937">enslaved Africans (forced)</text><path d="M120 150 Q230 60 352 72" fill="none" stroke="#334155" stroke-width="1.5" marker-end="url(#frx-arr)"/><text x="232" y="80" font-size="11" text-anchor="middle" fill="#1f2937">sugar and coffee</text><text x="10" y="250" font-size="11" fill="#1f2937">1791: enslaved people revolt</text><text x="10" y="265" font-size="11" fill="#1f2937">1794: France abolishes slavery</text><text x="10" y="280" font-size="11" fill="#1f2937">1802: Napoleon sends an army to restore it</text><text x="10" y="295" font-size="11" font-weight="bold" fill="#1f2937">1804: Haiti wins independence</text></svg>`;

export const extras: TopicExtras = {
  hook:
    "In 1788 a French peasant paid taxes to the king, a share of the harvest to the Church and fees to the local lord — while the richest people in France paid least. Five years later France had no king at all. How did that happen, and did ordinary people actually end up with more say?",
  didYouKnow: [
    "When the Bastille was stormed on 14 July 1789 it held only seven prisoners: four forgers, two men judged to be mentally ill and one nobleman locked up at his own family's request.",
    "The political words “left” and “right” come from the National Assembly of 1789: supporters of the king's power sat on the president's right, and those who wanted more change sat on the left.",
    "Revolutionary France invented the metre, originally defined as one ten-millionth of the distance from the North Pole to the Equator.",
    "The revolutionaries replaced the calendar: Year I began on 22 September 1792, months got new names such as Thermidor and Brumaire, and weeks had ten days. Napoleon scrapped it at the start of 1806.",
    "Thomas Paine, an English-born writer, was elected to the French National Convention in 1792 — then imprisoned during the Terror, having opposed the execution of the king and being treated as a suspect foreigner.",
    "The guillotine was introduced in 1792 partly as an idea of equality: before the Revolution nobles were usually beheaded by sword while commoners were hanged; now everyone sentenced to death faced the same method.",
  ],
  activities: [
    {
      title: "Write a Declaration — then find its gaps",
      emoji: "📜",
      materials: ["Paper and pens", "A copy of Article 1 of the Declaration of the Rights of Man (from the guide)", "A family member or friend to test it on"],
      steps: [
        "Write a five-article “Declaration of Rights” for your household or class, in grand language: “Every member of this house is born free and equal in…”.",
        "Add rules for who gets a vote on big decisions (holidays, screen time, pets). Be honest about how decisions really get made.",
        "Swap with someone else and ask them to find every person or group your Declaration's practice leaves out, even though the words sound universal.",
        "Rewrite one article from the point of view of someone left out, the way Olympe de Gouges rewrote the 1789 Declaration for women.",
        "Discuss: is it better to have fine words that are not fully applied, or no fine words at all?",
      ],
      maths:
        "The Declaration of 1789 used universal words — “men are born and remain free and equal in rights” — but in 1791 only about 4.3 million men qualified to vote, and no women. Excluded groups used the Declaration's own words to demand inclusion: Olympe de Gouges for women, and enslaved people in Saint-Domingue, whose revolt forced France to abolish slavery in 1794. Finding the gaps in your own declaration shows why rights tend to grow through campaigns rather than being handed out.",
    },
    {
      title: "Compile a cahier de doléances",
      emoji: "📝",
      materials: ["Notebook", "Three or four people to interview (family, neighbours, friends)", "Highlighters in three colours"],
      steps: [
        "Ask each person: “If you could send a list of complaints and requests to the people who run your town, school or country, what would be on it?”",
        "Write every grievance down exactly as they say it.",
        "Highlight each one: money and prices in one colour, unfair rules in a second, who gets a say in a third.",
        "Count which colour appears most. Did anyone ask to get rid of the people in charge altogether — or just for things to be fairer?",
        "Compare with 1789: most cahiers asked for reform and stayed loyal to the king. What does that tell you about whether the Revolution was planned?",
      ],
      maths:
        "In spring 1789 communities across France wrote tens of thousands of cahiers de doléances (lists of grievances) for the Estates-General. Historians use them as a snapshot of public opinion: most attacked privilege, unfair taxes and feudal dues, yet still expressed loyalty to Louis XVI. That is strong evidence that the Revolution grew out of events in 1789 rather than a plan to abolish the monarchy.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Two declarations compared",
      svg: declarationsVennSvg,
      caption: "Olympe de Gouges kept the 1789 principles but insisted they applied to women too. Only one of the two declarations became law.",
    },
    {
      title: "Saint-Domingue: rights across the Atlantic",
      svg: atlanticSvg,
      caption: "France's richest colony depended on the labour of around half a million enslaved people. Their revolution tested whether the Rights of Man applied to everyone.",
    },
  ],
  history: {
    title: "The painting that was never finished",
    story:
      "In 1790 the artist Jacques-Louis David was asked to paint the Tennis Court Oath as a giant picture to celebrate the Revolution. He exhibited a large drawing of the scene in 1791: hundreds of deputies with arms raised, and at the centre the astronomer Jean-Sylvain Bailly reading out the oath. But the painting was never completed. Money to pay for it ran short, and as the Revolution grew more radical, several of the heroes in the picture came to be seen as enemies. Bailly himself was guillotined in November 1793. A picture meant to show national unity had become too politically dangerous to finish. Only the drawing and an unfinished fragment of the canvas survive — a reminder that revolutions rewrite their own heroes.",
  },
};
