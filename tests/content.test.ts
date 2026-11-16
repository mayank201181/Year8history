// Every topic, drill set and exam paper that exists so far passes structural +
// answer-key self-checks, and question ids are unique across the whole app.
// Missing files are skipped (content is written topic by topic).
import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { TOPIC_META } from "../lib/topics/meta.ts";
import { validateExamPaper, validateTopic } from "../lib/validate.ts";
import type { Paper, Topic, TopicGuide, TopicPractice, ExamPaper } from "../lib/types.ts";
import type { Drill } from "../lib/drills/types.ts";
import { makeRng } from "../lib/drills/rng.ts";
import { specSelfCheck } from "../lib/answerCheck.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
/** Import one export from a content file; undefined when the file doesn't exist yet. Import errors are reported. */
const importErrors: string[] = [];
const load = async <T>(rel: string, name: string): Promise<T | undefined> => {
  const p = path.join(root, rel);
  if (!existsSync(p)) return undefined;
  try {
    return (await import(pathToFileURL(p).href))[name] as T;
  } catch (e) {
    importErrors.push(`${rel}: failed to import (${(e as Error).message.split("\n")[0]})`);
    return undefined;
  }
};

/** Expected question counts for the Big Exam papers. */
const EXAM_COUNTS: Record<string, number> = { "exam-k1": 40, "exam-s1": 20 };

test("all present topic files validate and ids are globally unique", async () => {
  const seen = new Set<string>();
  const problems: string[] = [];
  for (const m of TOPIC_META) {
    const guide = await load<TopicGuide>(`lib/topics/${m.id}/guide.ts`, "guide");
    const practice = await load<TopicPractice>(`lib/topics/${m.id}/practice.ts`, "practice");
    const mcqPapers = await load<Paper[]>(`lib/topics/${m.id}/mcq.ts`, "mcqPapers");
    const morePapers = await load<Paper[]>(`lib/topics/${m.id}/practice2.ts`, "morePapers");
    if (!guide && !practice && !mcqPapers && !morePapers) continue; // not written yet
    if (guide) {
      // The guide must follow the plan in meta.ts exactly (ids and order).
      const want = m.sections.map((s) => s.id).join(",");
      const got = (guide.guide ?? []).map((s) => s.id).join(",");
      if (want !== got) problems.push(`${m.id}/guide: sections ${got} should be ${want}`);
      if (guide.id !== m.id || guide.strand !== m.strand) problems.push(`${m.id}/guide: id/strand must match meta.ts`);
    }
    // Question files can arrive before the guide: validate them against the planned sections.
    const stub: TopicGuide = {
      id: m.id,
      title: m.title,
      strand: m.strand,
      icon: m.icon,
      summary: "",
      intro: "",
      guide: m.sections.map((s) => ({ id: s.id, heading: s.heading, body: "" })),
      learn: { flashcards: [], mustKnow: [], misconceptions: [], examMistakes: [], mnemonics: [], realWorld: [], videos: [], formulas: [] },
    };
    const topic: Topic = {
      ...(guide ?? stub),
      quiz: practice?.quiz ?? [],
      mcqPapers: mcqPapers ?? [],
      practicePapers: [...(practice?.papers ?? []), ...(morePapers ?? [])],
      challenge: practice?.challenge ?? [],
    };
    const { issues } = validateTopic(topic, seen);
    for (const i of issues) problems.push(`${i.where}: ${i.problem}`);
  }
  const sections = Object.fromEntries(TOPIC_META.map((t) => [t.id, t.sections.map((s) => s.id)]));
  for (const [e, count] of Object.entries(EXAM_COUNTS)) {
    const paper = await load<ExamPaper>(`lib/exam/${e}.ts`, "paper");
    if (!paper) continue;
    const { issues } = validateExamPaper(paper, sections, count);
    for (const i of issues) problems.push(`${i.where}: ${i.problem}`);
    for (const q of paper.questions) {
      if (seen.has(q.id)) problems.push(`${q.id}: duplicate id`);
      seen.add(q.id);
    }
  }
  assert.deepEqual([...importErrors.filter((e) => !e.startsWith("lib/drills/")), ...problems].slice(0, 30), []);
});

test("all drills generate valid, self-consistent items", async () => {
  const problems: string[] = [];
  const ids = new Set<string>();
  for (const m of TOPIC_META) {
    const drills = await load<Drill[]>(`lib/drills/${m.id}.ts`, "drills");
    if (!drills) continue;
    if (!Array.isArray(drills)) {
      problems.push(`drills/${m.id}: must export drills: Drill[]`);
      continue;
    }
    for (const d of drills) {
      if (ids.has(d.id)) problems.push(`${d.id}: duplicate drill id`);
      ids.add(d.id);
      if (d.topicId !== m.id) problems.push(`${d.id}: topicId should be ${m.id}`);
      for (const tier of [1, 2, 3] as const) {
        for (let seed = 1; seed <= 40; seed++) {
          try {
            const item = d.generate(makeRng(seed * 104729 + tier), tier);
            const r = specSelfCheck(item.answer);
            if (r.status !== "correct") problems.push(`${d.id} t${tier} s${seed}: answer fails self-check`);
            if (!item.prompt || !item.solution?.length) problems.push(`${d.id} t${tier} s${seed}: empty prompt/solution`);
          } catch (e) {
            problems.push(`${d.id} t${tier} s${seed}: threw ${(e as Error).message}`);
          }
        }
      }
    }
  }
  assert.deepEqual([...importErrors.filter((e) => e.startsWith("lib/drills/")), ...problems].slice(0, 30), []);
});
