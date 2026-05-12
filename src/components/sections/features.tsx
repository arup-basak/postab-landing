import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { FEATURES } from "@/constants/features";
import { cn } from "@/lib/utils";

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
            return (
              <Reveal
                key={f.title}
                delay={(i % 6) * 0.04}
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
