"use client";
// Tap a diagram to open it full screen at a readable size (pan by swiping).
// Content SVGs are drawn ~480 px wide, so on a phone their labels shrink to
// ~8 px; the enlarged view renders them at ≥ 640 px wide.
import { useEffect, useState, type ReactNode } from "react";

export function DiagramZoom({ svg, children }: { svg: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="diagram-zoom-btn block w-full cursor-zoom-in text-left"
        aria-label="Enlarge diagram"
      >
        {children}
        <span className="diagram-zoom-hint">⤢ Tap to enlarge</span>
      </button>
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged diagram"
          className="fixed inset-0 z-[100] flex flex-col bg-black/80"
          onClick={() => setOpen(false)}
        >
          <div className="flex justify-end p-2">
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => setOpen(false)}>
              ✕ Close
            </button>
          </div>
          <div className="flex-1 overflow-auto p-2" onClick={(e) => e.stopPropagation()}>
            <div className="diagram-zoomed" dangerouslySetInnerHTML={{ __html: svg }} />
          </div>
        </div>
      ) : null}
    </>
  );
}
