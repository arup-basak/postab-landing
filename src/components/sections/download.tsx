import Link from "next/link";
import { AppleIcon } from "@/components/ui/apple-icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { DOWNLOAD } from "@/constants/content";
import { SITE } from "@/constants/site";

export const Download = () => {
  return (
    <section id="download" className="relative px-6 py-24 sm:py-32">
      <div className="-z-1 absolute inset-0 [background:radial-gradient(60%_50%_at_50%_50%,rgba(255,91,46,0.12),transparent_70%)]" />

      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <SectionLabel className="justify-center">
            {DOWNLOAD.eyebrow}
          </SectionLabel>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl">
            Free to try.{" "}
            <span className="italic text-primary-soft">Yours to keep.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base text-muted">
            {DOWNLOAD.body}
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={SITE.downloadHref}
              className="group inline-flex items-center gap-2.5 rounded-lg bg-primary px-6 py-4 font-sans text-base font-semibold tracking-tight text-primary-ink shadow-[0_14px_40px_-14px_color-mix(in_oklab,var(--color-primary)_70%,transparent)] transition-colors hover:bg-primary-soft"
            >
              <AppleIcon size={18} className="-mt-0.5" />
              {DOWNLOAD.cta.label}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-6 font-hand text-xl text-foreground/70">
            {DOWNLOAD.cta.note}
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {SITE.requirements.map((r) => (
              <span
                key={r}
                className="inline-flex items-center rounded-full border border-border bg-surface/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted"
              >
                {r}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
