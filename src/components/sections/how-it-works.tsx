import { Keycap } from "@/components/ui/keycap";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { HOW_IT_WORKS } from "@/constants/how-it-works";

export const HowItWorks = () => {
  return (
    <section id="how" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-6 pb-14 sm:grid-cols-[1fr_auto]">
          <div className="grid gap-5">
            <Reveal>
              <SectionLabel>how it works</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-2xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Hold. <span className="italic text-muted">Type.</span> Release.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <p className="max-w-sm text-sm text-muted">
              Three motions, one gesture. The leader key is the only new thing
              you learn.
            </p>
          </Reveal>
        </div>

        <ol className="grid gap-6 sm:grid-cols-3">
          {HOW_IT_WORKS.map((step, i) => (
            <Reveal
              key={step.number}
              as="li"
              delay={0.06 * i}
              className="relative flex flex-col gap-5 rounded-2xl border border-border surface-gradient bg-surface/30 p-7"
            >
              <span className="font-display text-7xl leading-none text-foreground/15">
                {step.number}
              </span>
              <h3 className="font-sans text-xl text-foreground">
                {step.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-muted">
                {step.body}
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                {step.keys.map((k) => (
                  <Keycap
                    key={k}
                    size="sm"
                    tone={i === 0 ? "primary" : "default"}
                  >
                    {k}
                  </Keycap>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};
