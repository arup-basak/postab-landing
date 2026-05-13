import type { Metadata } from "next";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "404 · Page not found — postab",
  description: "This page doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-28">
        {/* Radial glow — primary */}
        <div
          aria-hidden
          className="-z-1 pointer-events-none absolute inset-x-0 top-0 h-[70%] [background:radial-gradient(55%_60%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_14%,transparent),transparent_70%)]"
        />
        {/* Subtle center bloom */}
        <div
          aria-hidden
          className="-z-1 pointer-events-none absolute inset-0 [background:radial-gradient(40%_40%_at_50%_45%,color-mix(in_oklab,var(--color-accent)_4%,transparent),transparent_80%)]"
        />
        {/* Bottom fade */}
        <div
          aria-hidden
          className="-z-1 pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent to-background"
        />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <Reveal>
            <SectionLabel>Error</SectionLabel>
          </Reveal>

          <Reveal delay={0.06}>
            <p
              aria-hidden
              className="font-display select-none text-[clamp(7rem,22vw,14rem)] leading-none tracking-tight text-foreground/6"
            >
              404
            </p>
          </Reveal>

          <Reveal delay={0.1} className="-mt-2">
            <h1 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              Page not found
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="max-w-sm font-sans text-base text-muted">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved. Let&apos;s get you back on track.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3.5 font-sans text-sm font-semibold tracking-tight text-primary-ink shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--color-primary)_70%,transparent)] transition-colors hover:bg-primary-soft"
              >
                <ArrowLeftIcon
                  size={14}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:-translate-x-0.5"
                />
                Back to home
              </Link>
              <Link
                href="/#faq"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3.5 font-sans text-sm font-medium tracking-tight text-foreground transition-colors hover:border-border-strong"
              >
                View FAQ
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted/60">
              postab · poweruser navigation
            </span>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
