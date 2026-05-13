import { Keycap } from "@/components/ui/keycap";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { Feature } from "@/constants/features";
import { FEATURES } from "@/constants/features";
import { cn } from "@/lib/utils";

const FeatureDemo = ({ demo }: { demo: NonNullable<Feature["demo"]> }) => {
  if (demo.kind === "chips") {
    return (
      <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
        {demo.items.map((item, i) => (
          <span
            key={item}
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-1 font-sans text-[11px] tracking-tight",
              i === demo.active
                ? "border-[color-mix(in_oklab,var(--color-primary)_45%,transparent)] bg-[color-mix(in_oklab,var(--color-primary)_14%,transparent)] text-foreground"
                : "border-border bg-surface-2/60 text-muted",
            )}
          >
            <span
              className={cn(
                "mr-1.5 inline-block h-1.5 w-1.5 rounded-full",
                i === demo.active ? "bg-primary" : "bg-border-strong",
              )}
            />
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
      {demo.items.map((item) => (
        <Keycap key={item} size="sm" tone="primary">
          {item}
        </Keycap>
      ))}
    </div>
  );
};

export const Features = () => {
  return (
    <section id="features" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-6 pb-14 sm:grid-cols-[1fr_auto]">
          <div className="grid gap-5">
            <Reveal>
              <SectionLabel>features</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-2xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Engineered for keystrokes,{" "}
                <span className="italic text-muted">not clicks.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            const from = i < 2 ? (i === 0 ? "right" : "left") : "up";
            return (
              <Reveal
                key={f.title}
                delay={(i % 6) * 0.05}
                from={from}
                distance={i < 2 ? 28 : 14}
                className={cn(
                  "group relative flex flex-col gap-4 rounded-2xl border border-border surface-gradient bg-surface/30 p-6 transition-colors hover:border-border-strong",
                  f.large ? "lg:col-span-3" : "lg:col-span-2",
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-2 text-primary",
                  )}
                >
                  <Icon size={18} weight="duotone" />
                </span>
                <h3
                  className={cn(
                    "font-sans text-foreground",
                    f.large ? "text-xl" : "text-lg",
                  )}
                >
                  {f.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted">
                  {f.body}
                </p>
                {f.demo ? <FeatureDemo demo={f.demo} /> : null}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
