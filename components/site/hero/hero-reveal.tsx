"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

interface HeroRevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  className?: string;
}

export function HeroReveal({
  children,
  delay = 0,
  y = 20,
  x = 0,
  scale = 1,
  duration = 0.7,
  className,
}: HeroRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}