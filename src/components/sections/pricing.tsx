import { GiftIcon } from "@phosphor-icons/react/dist/ssr";
import { PriceCard } from "@/components/ui/price-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { PRICING } from "@/constants/pricing";

export const Pricing = () => {
  return (
    <section id="pricing" className="relative px-6 py-24 sm:py-32">
      <div className="-z-1 absolute inset-x-0 top-1/2 mx-auto h-96 max-w-4xl -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(255,91,46,0.10),transparent_70%)]" />

      <div className="mx-auto max-w-5xl">
        <div className="grid gap-5 pb-12 text-center">
          <Reveal>
            <SectionLabel className="justify-center">
              {PRICING.eyebrow}
            </SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto max-w-2xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Pay once.{" "}
              <span className="italic text-muted">Or pay less, often.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto max-w-md font-sans text-base text-muted">
              {PRICING.body}
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--color-primary)_40%,transparent)] bg-[color-mix(in_oklab,var(--color-primary)_12%,transparent)] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-soft">
              <GiftIcon size={12} weight="duotone" />
              {PRICING.trialBanner}
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {PRICING.plans.map((plan, i) => (
            <Reveal key={plan.id} delay={0.06 * i}>
              <PriceCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18}>
          <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            closed source · indie made · free updates on lifetime
          </p>
        </Reveal>
      </div>
    </section>
  );
};
