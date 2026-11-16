// History-specific behaviour: forgiving text answers, exact years, the
// Timeline's date parsing, strand presentation and the Quick-fire round.
import test from "node:test";
import assert from "node:assert/strict";
import { checkAnswer, checkWithTraps, yearForm } from "../lib/answerCheck.ts";
import type { AnswerSpec } from "../lib/types.ts";
import { buildTimeline, centuryOf, formatYear, parseYear } from "../lib/timeline.ts";
import { STRANDS, STRAND_ENQUIRY, TOPIC_META } from "../lib/topics/meta.ts";
import { STRAND_STYLES, STRAND_TERM, strandLabel, strandStyle } from "../lib/strands.ts";
import { SPRINT_MODES, SPRINT_MODE_INFO, sprintDrills, sprintItem, sprintStars } from "../lib/sprint.ts";
import { makeRng } from "../lib/drills/rng.ts";
import type { Drill } from "../lib/drills/types.ts";

const st = (spec: AnswerSpec, input: string) => checkAnswer(spec, input).status;

// ---------------------------------------------------------------- text answers

test("text: case, spaces, punctuation and a leading 'the' don't matter", () => {
  const s: AnswerSpec = { type: "text", accept: ["Witan"] };
  for (const i of ["Witan", "witan", "  WITAN ", "the Witan", "The Witan.", "witan!"]) assert.equal(st(s, i), "correct", i);
  assert.equal(st({ type: "text", accept: ["the Bayeux Tapestry"] }, "Bayeux Tapestry"), "correct");
  assert.equal(st({ type: "text", accept: ["Magna Carta"] }, "magna-carta"), "correct");
});

test("text: accents and Æ are optional", () => {
  assert.equal(st({ type: "text", accept: ["Ancien Régime"] }, "ancien regime"), "correct");
  assert.equal(st({ type: "text", accept: ["Edgar Ætheling"] }, "Edgar Aetheling"), "correct");
  assert.equal(st({ type: "text", accept: ["Liberté, Égalité, Fraternité"] }, "liberte egalite fraternite"), "correct");
  assert.equal(st({ type: "text", accept: ["Guomindang", "Kuomintang", "GMD", "KMT"] }, "kuomintang"), "correct");
});

test("text: small spelling slips in longer names are accepted with a nudge", () => {
  const s: AnswerSpec = { type: "text", accept: ["Robespierre", "Maximilien Robespierre"], display: "Robespierre" };
  const r = checkAnswer(s, "Robspierre");
  assert.equal(r.status, "correct");
  assert.match(r.feedback ?? "", /spelling: Robespierre/);
  assert.equal(st({ type: "text", accept: ["Harald Hardrada"] }, "Harold Hardrada"), "correct");
  assert.equal(st({ type: "text", accept: ["Pankhurst"] }, "Pankhurts"), "correct");
  // Two slips in a long answer is still fine; three is not.
  assert.equal(st({ type: "text", accept: ["Emmeline Pankhurst"] }, "Emeline Pankhust"), "correct");
  assert.equal(st({ type: "text", accept: ["Emmeline Pankhurst"] }, "Emline Pnkhust"), "incorrect");
});

test("text: short answers and different names are not 'slips'", () => {
  assert.equal(st({ type: "text", accept: ["Anne"] }, "Anna"), "incorrect");
  assert.equal(st({ type: "text", accept: ["Mao"] }, "Max"), "incorrect");
  assert.equal(st({ type: "text", accept: ["Harold Godwinson"] }, "William"), "incorrect");
  assert.equal(st({ type: "text", accept: ["John"] }, "Joan"), "incorrect");
});

test("text: answers containing numbers must be exact", () => {
  const s: AnswerSpec = { type: "text", accept: ["Clause 39"] };
  assert.equal(st(s, "clause 39"), "correct");
  assert.equal(st(s, "clause 38"), "incorrect");
});

test("text: traps give targeted feedback and never block the right answer", () => {
  const spec: AnswerSpec = { type: "text", accept: ["William", "William I", "William the Conqueror", "Duke William"] };
  const traps = [{ spec: { type: "text", accept: ["Harald Hardrada", "Hardrada"] } as AnswerSpec, feedback: "Hardrada lost at Stamford Bridge — who won at Hastings?" }];
  assert.equal(checkWithTraps(spec, "Hardrada", traps).feedback, traps[0].feedback);
  assert.equal(checkWithTraps(spec, "Hardrada", traps).status, "incorrect");
  assert.equal(checkWithTraps(spec, "william the conqueror", traps).status, "correct");
});

// ---------------------------------------------------------------- years

test("years: must be exact", () => {
  const s: AnswerSpec = { type: "number", value: 1066 };
  assert.equal(st(s, "1066"), "correct");
  assert.equal(st(s, "1067"), "incorrect");
  assert.equal(st(s, "1065"), "incorrect");
  assert.equal(st(s, "10066"), "incorrect");
  assert.equal(st({ type: "number", value: 1215 }, "1216"), "incorrect");
});

test("years: written the way people write them", () => {
  const s: AnswerSpec = { type: "number", value: 1066 };
  for (const i of ["1066", "1066 AD", "AD 1066", "A.D. 1066", "1066ad", "1066 CE", "in 1066", "c. 1066", "1066."]) assert.equal(st(s, i), "correct", i);
  assert.equal(st({ type: "number", value: -55 }, "55 BC"), "correct");
  assert.equal(st({ type: "number", value: -55 }, "55 BCE"), "correct");
  assert.equal(st({ type: "number", value: -55 }, "55"), "incorrect");
  assert.equal(yearForm("in 1789"), "1789");
  assert.equal(yearForm("55 BC"), "-55");
});

test("years: a word instead of a year is not marked wrong", () => {
  const r = checkAnswer({ type: "number", value: 1066 }, "Hastings");
  assert.equal(r.status, "invalid");
  assert.match(r.feedback ?? "", /1066/);
});

// ---------------------------------------------------------------- timeline

test("timeline: parses the date labels key facts use", () => {
  const y = (s: string) => parseYear(s)?.year;
  assert.equal(y("1066"), 1066);
  assert.equal(y("14 October 1066"), 1066);
  assert.equal(parseYear("14 October 1066")?.month, 10);
  assert.equal(parseYear("14 October 1066")?.day, 14);
  assert.equal(y("June 1215"), 1215);
  assert.equal(y("c. 1085"), 1085);
  assert.equal(parseYear("c. 1085")?.approx, true);
  assert.deepEqual([y("1933–34"), parseYear("1933–34")?.endYear], [1933, 1934]);
  assert.deepEqual([y("1208–1214"), parseYear("1208–1214")?.endYear], [1208, 1214]);
  assert.equal(parseYear("1509-47")?.endYear, 1547);
  assert.equal(y("55 BC"), -55);
  assert.equal(y("c. 3000 BCE"), -3000);
  assert.equal(y("AD 43"), 43);
  assert.deepEqual([y("1790s"), parseYear("1790s")?.endYear], [1790, 1799]);
  assert.equal(y("11th century"), 1001);
  assert.equal(y("1928: Equal Franchise Act"), 1928);
  assert.equal(y("Night of the Long Knives, 30 June 1934"), 1934);
});

test("timeline: labels without a date stay undated", () => {
  for (const s of ["Divine right of kings", "Clause 39", "Article 231", "17,000 executions", "PEEL", "100 Flowers", ""]) assert.equal(parseYear(s), null, s);
});

test("timeline: chronological order, with month and day breaking ties", () => {
  const { dated, undated } = buildTimeline([
    {
      topicId: "william-i",
      topicTitle: "William I",
      icon: "⚔️",
      strand: "Kings & Power",
      facts: [
        { name: "14 October 1066", formula: "Battle of Hastings" },
        { name: "25 September 1066", formula: "Battle of Stamford Bridge" },
        { name: "Feudal system", formula: "Land for loyalty" },
        { name: "1086", formula: "Domesday Book completed" },
      ],
    },
    {
      topicId: "womens-suffrage",
      topicTitle: "Votes for Women",
      icon: "🗳️",
      strand: "Democracy",
      facts: [{ name: "1918", formula: "Representation of the People Act" }],
    },
  ]);
  assert.deepEqual(
    dated.map((e) => e.text),
    ["Battle of Stamford Bridge", "Battle of Hastings", "Domesday Book completed", "Representation of the People Act"],
  );
  assert.deepEqual(
    undated.map((e) => e.text),
    ["Land for loyalty"],
  );
  assert.equal(formatYear(parseYear("1933–34")!), "1933–1934");
  assert.equal(centuryOf(1066).label, "11th century (1001–1100)");
  assert.equal(centuryOf(1900).label, "19th century (1801–1900)");
  assert.equal(centuryOf(-55).label, "1st century BC");
});

// ---------------------------------------------------------------- strands

test("strands: every strand has a colour, a term and an enquiry question", () => {
  assert.equal(STRANDS.length, 4);
  const slugs = new Set<string>();
  for (const s of STRANDS) {
    assert.ok(STRAND_STYLES[s], s);
    assert.notEqual(strandStyle(s).slug, "other");
    slugs.add(strandStyle(s).slug);
    assert.ok(STRAND_TERM[s], s);
    assert.ok(STRAND_ENQUIRY[s].endsWith("?"), s);
  }
  assert.equal(slugs.size, 4);
  assert.equal(strandLabel("Kings & Power"), "Term 1 · Kings & Power");
  for (const t of TOPIC_META) assert.ok(STRANDS.includes(t.strand), t.id);
});

// ---------------------------------------------------------------- quick-fire

const fakeDrill = (id: string, topicId: string, level: 1 | 2 | 3, year: number): Drill => ({
  id,
  topicId,
  title: id,
  level,
  generate: (rng) => {
    const y = year + rng.int(0, 3);
    return { prompt: `In which year (${id})?`, answer: { type: "number", value: y }, solution: [`It was ${y}.`] };
  },
});

test("quick-fire: draws recall drills from the chosen strand", () => {
  const drills = [
    fakeDrill("william-i.dates", "william-i", 1, 1066),
    fakeDrill("william-i.why", "william-i", 3, 1066),
    fakeDrill("hitler-rise.dates", "hitler-rise", 1, 1933),
  ];
  assert.deepEqual(sprintDrills("kings", drills).map((d) => d.id), ["william-i.dates"]);
  assert.deepEqual(sprintDrills("dictatorship", drills).map((d) => d.id), ["hitler-rise.dates"]);
  assert.equal(sprintDrills("mixed", drills).length, 2);
  assert.equal(sprintDrills("democracy", drills).length, 0);
  assert.equal(sprintItem("democracy", makeRng(1), drills), null);
  const rng = makeRng(42);
  for (let i = 0; i < 20; i++) {
    const item = sprintItem("kings", rng, drills)!;
    assert.equal(item.topicId, "william-i");
    assert.equal(item.answer.type, "number");
    assert.match(item.fact, /^It was 10\d\d\.$/);
  }
  for (const m of SPRINT_MODES) assert.ok(SPRINT_MODE_INFO[m].label);
  assert.equal(sprintStars(3), 0);
  assert.equal(sprintStars(8), 2);
  assert.equal(sprintStars(100), 5);
});
