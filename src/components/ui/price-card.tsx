"use client";

import { CheckIcon, StarIcon } from "@phosphor-icons/react/dist/ssr";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import type { Plan } from "@/constants/pricing";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export const PriceCard = ({ plan }: { plan: Plan }) => {
  const reduce = useReducedMotion();
  const featured = plan.featured;

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -2 }}
      transition={{ duration: 0.25, ease: EASE }}
      className={cn(
        "relative flex flex-col gap-6 rounded-2xl border p-7 surface-gradient",
        featured
          ? "border-[color-mix(in_oklab,var(--color-primary)_45%,transparent)] bg-surface/80"
          : "border-border bg-surface/40",
      )}
    >
      {featured && (
        <span className="absolute top-5 right-5 flex items-center gap-1 rounded-full border border-[color-mix(in_oklab,var(--color-primary)_45%,transparent)] bg-[color-mix(in_oklab,var(--color-primary)_15%,transparent)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-soft">
          <StarIcon size={10} weight="fill" />
          best value
        </span>
      )}

      <div className="flex items-center justify-between gap-3">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {plan.label}
        </h3>
        {plan.trial && !featured && (
          <span className="inline-flex items-center gap-1 rounded-full border border-[color-mix(in_oklab,var(--color-primary)_35%,transparent)] bg-[color-mix(in_oklab,var(--color-primary)_10%,transparent)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-soft">
            {plan.trial}
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-2">
        <span
          className={cn(
            "font-display text-6xl leading-none",
            featured ? "text-foreground" : "text-foreground",
          )}
        >
          {plan.price}
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
          {plan.cadence}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-sans text-sm text-muted">{plan.note}</p>
        {plan.trial && featured && (
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary-soft">
            {plan.trial} · then one payment
          </p>
        )}
      </div>

      <ul className="grid gap-2.5">
        {plan.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2.5 text-sm">
            <span
              className={cn(
                "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                featured
                  ? "bg-[color-mix(in_oklab,var(--color-primary)_25%,transparent)] text-primary-soft"
                  : "bg-surface-2 text-muted",
              )}
            >
              <CheckIcon size={10} weight="bold" />
            </span>
            <span className="text-foreground/85">{perk}</span>
          </li>
        ))}
      </ul>

      <Link
        href={SITE.downloadHref}
        className={cn(
          "mt-auto inline-flex items-center justify-center rounded-lg px-4 py-3 font-mono text-[12px] uppercase tracking-[0.18em] transition-colors",
          featured
            ? "bg-primary text-primary-ink hover:bg-primary-soft"
            : "border border-border text-foreground hover:border-border-strong",
        )}
      >
        {plan.cta}
      </Link>
    </motion.article>
  );
};
