"use client";

import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

type Props = { q: string; a: string };

const EASE = [0.22, 1, 0.36, 1] as const;

export const FaqItem = ({ q, a }: Props) => {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="font-sans text-base text-foreground sm:text-lg">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="shrink-0 text-muted group-hover:text-foreground"
        >
          <CaretDownIcon size={16} weight="bold" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={
              reduce
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            animate={{ height: "auto", opacity: 1 }}
            exit={
              reduce
                ? { height: "auto", opacity: 0 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-prose pb-6 pr-8 font-sans text-sm leading-relaxed text-muted sm:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
