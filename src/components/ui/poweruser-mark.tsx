"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Props = {
  word: string;
  annotation?: string;
};

export const PowerUserMark = ({ word, annotation }: Props) => {
  const reduce = useReducedMotion();

  return (
    <span className="relative inline-block whitespace-nowrap pr-1 pb-3 align-baseline">
      <span className="relative inline-flex items-baseline">
        {word.split("").map((ch, i) => (
          <motion.span
            // biome-ignore lint/suspicious/noArrayIndexKey: word is a fixed prop, order never changes
            key={`${ch}-${i}`}
            initial={reduce ? false : { y: "0.18em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: EASE,
              delay: 0.35 + i * 0.04,
            }}
            className="inline-block font-display italic text-primary-soft"
            style={{
              textShadow:
                "0 1px 0 rgba(0,0,0,0.25), 0 0 24px color-mix(in oklab, var(--color-primary) 35%, transparent)",
            }}
          >
            {ch}
          </motion.span>
        ))}
      </span>

      <svg
        aria-hidden
        viewBox="0 0 320 20"
        preserveAspectRatio="none"
        className="absolute inset-x-0 -bottom-1 h-3 w-full text-primary"
      >
        <title>poweruser underline</title>
        <motion.path
          d="M4 12 C 50 4, 110 18, 170 10 S 280 2, 316 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.7 }}
        />
        <motion.path
          d="M10 16 C 90 12, 180 18, 310 14"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity={0.45}
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, ease: EASE, delay: 1.0 }}
        />
      </svg>

      {annotation && (
        <motion.span
          aria-hidden
          initial={reduce ? false : { opacity: 0, x: -6, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: -7 }}
          transition={{ duration: 0.6, ease: EASE, delay: 1.3 }}
          className="pointer-events-none absolute -top-3 -right-2 hidden translate-x-full origin-bottom-left items-center gap-1 font-hand text-2xl leading-none text-primary-soft sm:flex"
        >
          <svg
            viewBox="0 0 40 28"
            className="h-5 w-7 -rotate-12"
            fill="none"
            aria-hidden
          >
            <title>annotation arrow</title>
            <motion.path
              d="M36 24 C 24 24, 14 18, 8 8 M 8 8 L 4 14 M 8 8 L 14 6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 1.5 }}
            />
          </svg>
          <span>{annotation}</span>
        </motion.span>
      )}
    </span>
  );
};
