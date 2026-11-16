"use client";
// The topic's Watch tab: its "Totally Raotional: The History Season" sitcom episode.
import { useEffect } from "react";
import Link from "next/link";
import type { Topic } from "@/lib/types";
import { useStore } from "@/lib/store";
import { sitcomEpisodeFor } from "@/lib/sitcom";
import { EpisodePlayer, formatDuration, useWatchedEpisodes } from "./EpisodePlayer";

export function WatchTab({
  topic,
  onPractise,
  onChallenge,
}: {
  topic: Topic;
  onPractise: () => void;
  onChallenge: () => void;
}) {
  const episode = sitcomEpisodeFor(topic.id);
  const watched = useWatchedEpisodes();
  const done = !!watched[topic.id];
  const { setBest } = useStore();

  useEffect(() => {
    if (done) setBest(`watch:${topic.id}`, 1);
  }, [done, topic.id, setBest]);

  return (
    <div className="space-y-4">
      {episode ? (
        <>
          <div className="card flex items-start gap-3 p-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed] text-xl text-white" aria-hidden>
              📺
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-extrabold">
                  Totally Raotional: The History Season · Ep {episode.num}
                </span>
                {done ? <span className="chip border-0 bg-good-soft text-good">Watched ✓</span> : null}
              </div>
              <p className="mt-0.5 text-sm text-ink-2">
                &ldquo;{episode.title}&rdquo; · {formatDuration(episode.durationSec)} · perfect for dinner. Three pause challenges at the end.
              </p>
            </div>
          </div>
          <div className="card overflow-hidden p-1 sm:p-2">
            <EpisodePlayer episode={episode} />
            {episode.logline ? <p className="px-2 pt-2 text-sm text-ink-2">{episode.logline}</p> : null}
          </div>
        </>
      ) : (
        <div className="card p-6 text-center">
          <div className="text-4xl" aria-hidden>
            🎬
          </div>
          <h2 className="mt-2 text-lg font-extrabold">This episode is still in the edit suite</h2>
          <p className="mx-auto mt-1 max-w-md text-sm text-ink-2">
            The Rao family and Chrono, the 950-year-old hourglass, are recording it now. Meanwhile, the lesson and the interactive tab cover everything.
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2">
        <Link href={episode ? `/episodes?ep=${episode.num}` : "/episodes"} className="btn btn-secondary btn-sm">
          📺 All episodes
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className="btn btn-secondary btn-sm" onClick={onPractise}>
            ✏️ Practise
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={onChallenge}>
            🧗 Challenge →
          </button>
        </div>
      </div>
    </div>
  );
}
