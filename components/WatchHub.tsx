"use client";
// /watch — the sitcom and every topic's episode status in one place.
import { useState } from "react";
import Link from "next/link";
import { EPISODES, SHOW_NAME, episodeFor } from "@/lib/show";
import { STRANDS, strandLabel, strandStyle } from "@/lib/strands";
import { formatDuration, useWatchedEpisodes } from "./EpisodePlayer";

export interface WatchTopicItem {
  id: string;
  num: number;
  title: string;
  icon: string;
  strand: string;
  summary: string;
}

const ALL = "All";

export function WatchHub({ topics }: { topics: WatchTopicItem[] }) {
  const [strand, setStrand] = useState<string>(ALL);
  const epDone = useWatchedEpisodes();

  const strands = [ALL, ...STRANDS.filter((s) => topics.some((t) => t.strand === s))];
  const visible = strand === ALL ? topics : topics.filter((t) => t.strand === strand);
  const watchedCount = EPISODES.filter((e) => epDone[e.topicId]).length;
  const totalMin = Math.round(EPISODES.reduce((s, e) => s + e.durationSec, 0) / 60);

  return (
    <div className="space-y-6 pb-8">
      <section className="card overflow-hidden p-5 sm:p-6" aria-labelledby="watch-h">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip border-0 bg-brand-soft text-brand">
            📺 {EPISODES.length ? `${EPISODES.length} episode${EPISODES.length === 1 ? "" : "s"} · ${totalMin} min` : "Season 1 in production"}
          </span>
          {EPISODES.length ? <span className="chip">⭐ {watchedCount}/{EPISODES.length} watched</span> : null}
        </div>
        <h1 id="watch-h" className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
          Watch: <span className="italic">{SHOW_NAME}</span>
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-ink-2 sm:text-base">
          An animated sitcom with one episode per Year 8 topic — a funny way into the story before (or after) the lesson. Each episode ends with questions to pause
          and answer.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {EPISODES.length ? (
            <Link href="/episodes" className="btn btn-primary">
              ▶ Play episodes
            </Link>
          ) : null}
          <Link href="/topics" className="btn btn-secondary">
            📚 Go to topics
          </Link>
        </div>
      </section>

      <div role="group" aria-label="Filter by strand" className="flex flex-wrap gap-2">
        {strands.map((s) => (
          <button key={s} type="button" aria-pressed={strand === s} onClick={() => setStrand(s)} className={`btn btn-sm ${strand === s ? "btn-primary" : "btn-secondary"}`}>
            {s}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {visible.map((t) => {
          const ep = episodeFor(t.id);
          const st = strandStyle(t.strand);
          return (
            <article key={t.id} className={`card flex flex-col justify-between gap-3 border-l-4 p-4 ${st.borderL}`}>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-ink-2">{strandLabel(t.strand)}</span>
                  {epDone[t.id] ? <span className="chip border-0 bg-good-soft text-good">Watched ✓</span> : null}
                </div>
                <h2 className="mt-1 text-lg font-extrabold">
                  <span aria-hidden>{t.icon} </span>
                  {t.title}
                </h2>
                {ep ? (
                  <p className="mt-0.5 text-sm text-ink-2">
                    Ep {ep.num}: &ldquo;{ep.title}&rdquo; · {formatDuration(ep.durationSec)}
                  </p>
                ) : (
                  <p className="mt-0.5 text-sm text-ink-2">Episode coming soon — explainer videos are ready now.</p>
                )}
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {ep ? (
                  <Link href={`/episodes?ep=${ep.num}`} className="btn btn-primary btn-sm">
                    📺 Play episode
                  </Link>
                ) : null}
                <Link href={`/topic/${t.id}?tab=watch`} className={`btn btn-sm ${ep ? "btn-secondary" : "btn-primary"}`}>
                  🎬 Open Watch tab
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
