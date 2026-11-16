"use client";
// The Watch tab: this topic's sitcom episode (MP4), or a "coming soon" card
// while it is being made, plus the topic's hand-picked explainer videos.
import { useEffect } from "react";
import Link from "next/link";
import type { Topic } from "@/lib/types";
import { useStore } from "@/lib/store";
import { SHOW_NAME, episodeFor } from "@/lib/show";
import { EpisodePlayer, formatDuration, useWatchedEpisodes } from "./EpisodePlayer";

const isWebUrl = (u: string) => /^https?:\/\//i.test(u);

export function WatchTab({
  topic,
  onPractise,
  onChallenge,
}: {
  topic: Topic;
  onPractise: () => void;
  onChallenge: () => void;
}) {
  const episode = episodeFor(topic.id);
  const watched = useWatchedEpisodes();
  const episodeDone = !!watched[topic.id];
  const { setBest } = useStore();
  const videos = (topic.learn?.videos ?? []).filter((v) => isWebUrl(v.url));

  useEffect(() => {
    if (episodeDone) setBest(`watch:${topic.id}`, 1);
  }, [episodeDone, topic.id, setBest]);

  return (
    <div className="space-y-5">
      {episode ? (
        <section className="card overflow-hidden p-1 sm:p-2" aria-labelledby="ep-h">
          <EpisodePlayer episode={episode} />
          <div className="flex flex-wrap items-start justify-between gap-2 px-2 pt-3 pb-1">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wide text-brand">
                {SHOW_NAME} · Episode {episode.num} · {formatDuration(episode.durationSec)}
              </p>
              <h2 id="ep-h" className="text-lg font-extrabold">
                &ldquo;{episode.title}&rdquo;
              </h2>
              {episode.logline ? <p className="text-sm text-ink-2">{episode.logline}</p> : null}
            </div>
            {episodeDone ? <span className="chip shrink-0 border-0 bg-good-soft text-good">Watched ✓</span> : null}
          </div>
        </section>
      ) : (
        <section className="card flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:p-6" aria-labelledby="soon-h">
          <span aria-hidden className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-3xl">
            📺
          </span>
          <div className="min-w-0 flex-1">
            <h2 id="soon-h" className="text-lg font-extrabold">
              Episode coming soon
            </h2>
            <p className="mt-0.5 text-sm text-ink-2">
              The <em>{SHOW_NAME}</em> episode for {topic.title} is still being made.
              {videos.length ? " In the meantime, the videos below are a good way in." : " In the meantime, the lesson and flashcards will get you started."}
            </p>
          </div>
          <Link href="/episodes" className="btn btn-secondary btn-sm shrink-0">
            See all episodes
          </Link>
        </section>
      )}

      {videos.length ? (
        <section aria-labelledby="next-h">
          <h2 id="next-h" className="section-title">
            Watch next
          </h2>
          <p className="mt-0.5 text-sm text-ink-2">Hand-picked explainers. They open on YouTube in a new tab.</p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {videos.map((v, i) => (
              <li key={i}>
                <a href={v.url} target="_blank" rel="noopener noreferrer" className="card flex min-h-16 items-center gap-3 p-4 hover:bg-surface-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bad-soft text-bad" aria-hidden>
                    ▶
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold leading-snug">{v.title}</span>
                    <span className="block text-sm text-ink-2">{v.channel}</span>
                  </span>
                  <span aria-hidden className="text-ink-2">
                    ↗
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {episode ? (
            <Link href={`/episodes?ep=${episode.num}`} className="btn btn-secondary btn-sm">
              📺 All episodes
            </Link>
          ) : null}
          <Link href="/watch" className="btn btn-ghost btn-sm">
            🍿 Watch hub
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className="btn btn-secondary btn-sm" onClick={onPractise}>
            ✏️ Practise
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={onChallenge}>
            🧗 Enquiry Challenge →
          </button>
        </div>
      </div>
    </div>
  );
}
