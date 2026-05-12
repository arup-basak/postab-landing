"use client";

import { PlayIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { SITE } from "@/constants/site";

export const HeroShowcase = () => {
  const [failed, setFailed] = useState(false);
  const { kind, src, poster, alt } = SITE.showcase;

  return (
    <div className="relative">
      <div
        aria-hidden
        className="-z-1 pointer-events-none absolute inset-x-4 top-1/4 bottom-4 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border surface-gradient bg-surface/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between gap-3 border-b border-border/60 bg-surface-2/40 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            postab in action
          </div>
          <div className="font-mono text-[10px] text-muted">macOS</div>
        </div>

        <div className="relative aspect-[16/10] w-full bg-background/60">
          {!failed && kind === "video" && (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={src}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onError={() => setFailed(true)}
            >
              <track kind="captions" />
            </video>
          )}

          {!failed && kind === "image" && (
            <img
              src={src}
              alt={alt}
              onError={() => setFailed(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}

          {failed && (
            <div className="absolute inset-0 grid place-items-center">
              <div className="-z-1 absolute inset-0 [background:radial-gradient(closest-side,rgba(255,91,46,0.10),transparent_70%)]" />
              <div className="flex flex-col items-center gap-3">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-border bg-surface-2/60 text-primary-soft">
                  <PlayIcon size={20} weight="fill" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  showcase coming soon
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
