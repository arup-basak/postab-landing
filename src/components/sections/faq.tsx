import { FaqItem } from "@/components/ui/faq-item";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { FAQ } from "@/constants/faq";

export const FaqSection = () => {
  return (
    <section id="faq" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.7fr_1fr]">
        <div className="grid h-fit gap-5 lg:sticky lg:top-28">
          <Reveal>
            <SectionLabel>questions</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              The short <span className="italic text-muted">answers.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-muted">
              Anything else, ask. The maker reads every email.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="rounded-2xl border border-border surface-gradient bg-surface/30 px-6">
            {FAQ.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
