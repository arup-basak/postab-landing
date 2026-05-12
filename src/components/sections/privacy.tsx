import { ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { PRIVACY } from "@/constants/content";

export const Privacy = () => {
  return (
    <section id="privacy" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <SectionLabel className="justify-center">
            {PRIVACY.eyebrow}
          </SectionLabel>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
            Captured while held.{" "}
            <span className="italic text-muted">Discarded on release.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base text-muted">
            {PRIVACY.body}
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <ul className="mx-auto mt-12 grid max-w-xl gap-3 text-left">
            {PRIVACY.claims.map((claim) => (
              <li
                key={claim}
                className="flex items-start gap-3 rounded-xl border border-border surface-gradient bg-surface/30 px-4 py-3"
              >
                <ShieldCheckIcon
                  size={16}
                  weight="duotone"
                  className="mt-1 shrink-0 text-primary-soft"
                />
                <span className="font-sans text-sm text-foreground/85">
                  {claim}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl font-mono text-[12px] leading-relaxed tracking-tight text-muted">
            {PRIVACY.setup}
          </p>
        </Reveal>
      </div>
    </section>
  );
};
