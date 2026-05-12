"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

type Props = {
  children: ReactNode;
  delay?: number;
  distance?: number;
  from?: Direction;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "article" | "li";
};

const EASE = [0.22, 1, 0.36, 1] as const;

const offsetFor = (from: Direction, distance: number) => {
  switch (from) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
  }
};

export const Reveal = ({
  children,
  delay = 0,
  distance = 12,
  from = "up",
  className,
  as = "div",
}: Props) => {
  const reduce = useReducedMotion();
  const Component = motion[as];
  const offset = offsetFor(from, distance);

  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.75, ease: EASE, delay }}
    >
      {children}
    </Component>
  );
};
