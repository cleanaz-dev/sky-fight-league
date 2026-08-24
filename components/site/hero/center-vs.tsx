"use client";

import { motion } from "motion/react";
import { HeroReveal } from "./hero-reveal";

export function CenterVs({ rounds }: { rounds: string | number }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
      <motion.div
        className="relative flex h-16 w-16 items-center justify-center bg-primary shadow-[0_0_60px_rgba(220,38,38,0.55)] sm:h-32 sm:w-32"
        initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span className="display text-3xl text-primary-foreground sm:text-6xl">
          VS
        </span>
      </motion.div>

      <HeroReveal y={10} delay={0.7}>
        <p className="mt-2 whitespace-nowrap bg-black px-2 py-1 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-white sm:mt-3 sm:bg-transparent sm:px-0 sm:py-0 sm:text-xs sm:tracking-[0.25em] sm:text-foreground">
          {rounds} Rounds
        </p>
      </HeroReveal>
    </div>
  );
}