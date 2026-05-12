"use client";

import { motion, useScroll, useSpring } from "motion/react";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    mass: 0.4,
  });

  return (
    <motion.span
      aria-hidden
      style={{ scaleX, transformOrigin: "0 50%" }}
      className="absolute inset-x-0 bottom-0 z-50 h-px origin-left bg-gradient-to-r from-transparent via-primary to-primary-soft"
    />
  );
};
