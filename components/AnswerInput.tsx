"use client";
// Typed-answer box for short answers. History answers are a year (number) or a
// word, name or term (text): a plain box, with the numeric keyboard on phones
// when a year is wanted.
import { useId } from "react";
import type { AnswerSpec } from "@/lib/types";

const PLACEHOLDER: Record<AnswerSpec["type"], string> = {
  number: "Type the year or number, e.g. 1066",
  fraction: "Type your answer",
  list: "Separate answers with commas",
  ratio: "Type your answer",
  expression: "Type your answer",
  text: "Type your answer",
};

export function AnswerInput({
  value,
  onChange,
  onSubmit,
  type,
  disabled,
  autoFocus,
  label = "Your answer",
}: {
  value: string;
  onChange: (v: string) => void;
  onSubmit?: () => void;
  type: AnswerSpec["type"];
  disabled?: boolean;
  autoFocus?: boolean;
  label?: string;
}) {
  const id = useId();
  const numeric = type === "number";

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-bold text-ink-2">
        {label}
      </label>
      <input
        id={id}
        className={`input font-semibold ${numeric ? "max-w-[16rem] tabular-nums" : ""}`}
        value={value}
        disabled={disabled}
        autoFocus={autoFocus}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize={numeric ? "off" : "sentences"}
        spellCheck={false}
        inputMode={numeric ? "numeric" : "text"}
        enterKeyHint="done"
        placeholder={PLACEHOLDER[type] ?? "Type your answer"}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onSubmit) {
            e.preventDefault();
            onSubmit();
          }
        }}
      />
    </div>
  );
}
