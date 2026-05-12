"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export const StepNumeral = ({ number }: { number: string }) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 30%"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [16, -10]);
  const opacityRaw = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0.08, 0.22, 0.32],
  );
  const colorRaw = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#ededf015", "#ededf045", "#ff8a64aa"],
  );

  return (
    <motion.span
      ref={ref}
      style={
        reduce
          ? { color: "var(--color-foreground)", opacity: 0.18 }
          : { y: yRaw, opacity: opacityRaw, color: colorRaw }
      }
      className="block font-display text-7xl leading-none"
    >
      {number}
    </motion.span>
  );
};
