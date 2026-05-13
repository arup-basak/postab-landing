import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { HeroShowcase } from "@/components/sections/hero-showcase";
import { AppleIcon } from "@/components/ui/apple-icon";
import { PowerUserMark } from "@/components/ui/poweruser-mark";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { HERO } from "@/constants/content";
import { SITE } from "@/constants/site";

export const Hero = () => {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28">
      <div
        aria-hidden
        className="-z-1 pointer-events-none absolute inset-x-0 top-0 h-[70%] [background:radial-gradient(55%_60%_at_18%_15%,color-mix(in_oklab,var(--color-primary)_18%,transparent),transparent_70%)]"
      />
      <div
        aria-hidden
        className="-z-1 pointer-events-none absolute inset-x-0 top-0 h-[55%] [background:radial-gradient(closest-side,rgba(255,91,46,0.08),transparent)]"
      />
      <div
        aria-hidden
        className="-z-1 pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent to-background"
      />

      <div className="relative mx-auto grid max-w-6xl items-end gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-7">
          <Reveal>
            <SectionLabel>{HERO.eyebrow}</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {HERO.tagline.lead}
              <br />
              <span className="text-foreground/85">
                {HERO.tagline.emphasisPre}{" "}
              </span>
              <PowerUserMark
                word={HERO.tagline.emphasisWord}
                annotation={HERO.tagline.annotation}
              />
              <span className="text-foreground/85">
                {HERO.tagline.emphasisPost}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="max-w-xl font-sans text-base text-muted sm:text-lg">
              {HERO.subline}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={SITE.downloadHref}
                className="group inline-flex items-center gap-2.5 rounded-lg bg-primary px-5 py-3.5 font-sans text-sm font-semibold tracking-tight text-primary-ink shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--color-primary)_70%,transparent)] transition-colors hover:bg-primary-soft"
              >
                <AppleIcon size={16} className="-mt-0.5" />
                {HERO.primaryCta.label}
              </Link>
              <Link
                href={HERO.secondaryCta.href}
                className="group inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3.5 font-sans text-sm font-medium tracking-tight text-foreground transition-colors hover:border-border-strong"
              >
                {HERO.secondaryCta.label}
                <ArrowRightIcon
                  size={14}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {HERO.primaryCta.note}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22} className="relative">
          <HeroShowcase />
        </Reveal>
      </div>
    </section>
  );
};
