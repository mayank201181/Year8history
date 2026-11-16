// The Big Exam: cross-topic papers. Each paper file exports `paper: ExamPaper`.
//   exam-k1 — Paper 1: Knowledge & Understanding (mixed MCQ / short, 40 questions, 45 min)
//   exam-s1 — Paper 2: Sources & Judgement (mostly written, 20 questions, 60 min)
// Server only (imports every paper): client code uses lib/examKind.ts.
import type { ExamPaper } from "../types";
import { EXAM_FILES } from "../generated/exam";
import { examKind } from "../examKind";

export { examKind };

export const EXAM_PAPERS: ExamPaper[] = EXAM_FILES.map((p) => ({ ...p, kind: examKind(p) }));
