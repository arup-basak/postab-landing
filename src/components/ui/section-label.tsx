"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export const SectionLabel = ({ children, className }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ staggerChildren: 0.08 }}
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
        className,
      )}
    >
      <motion.span
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: 0.7, ease: EASE }}
        style={{ transformOrigin: "0 50%" }}
        className="block h-px w-6 bg-border-strong"
      />
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 4 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
};
