"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Calendar, MapPin, Bell } from "lucide-react";

import { EVENT } from "@/lib/fight-data";
import { HeroReveal } from "./hero-reveal";
import { Button } from "@/components/ui/button";

export function HeroLocked() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-accent pt-16"
    >
      {/* =========================================================
          ATMOSPHERIC BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0">
        <Image
          src="/arena-smoke.png"
          alt="Arena smoke"
          fill
          priority
          className="object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-accent/60 to-background" />
      </div>

      {/* =========================================================
          CLASSIFIED WATERMARK
      ========================================================= */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[22vw] opacity-[0.03] display tracking-tighter [-webkit-text-stroke:2px_white] text-transparent"
        initial={{ opacity: 0, x: "-48%" }}
        animate={{ opacity: 0.04, x: "-52%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
      >
        CLASSIFIED
      </motion.span>

      {/* =========================================================
          MAIN LOCKED CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-4 py-12 sm:px-6">
        
        {/* EVENT EYEBROW */}
        <HeroReveal y={-16} delay={0}>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center sm:mb-12">
            <motion.span
              className="hazard-stripes h-2 w-12 sm:w-16"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ transformOrigin: "left" }}
            />
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted-foreground sm:text-xs">
              {EVENT.number} <span className="text-primary">/</span> TO BE ANNOUNCED
            </p>
            <motion.span
              className="hazard-stripes h-2 w-12 sm:w-16"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ transformOrigin: "right" }}
            />
          </div>
        </HeroReveal>

        {/* SQUARE REVEAL DATE BOX */}
        <HeroReveal y={20} delay={0.15}>
          <div className="mb-6 flex aspect-square w-32 flex-col items-center justify-center border-2 border-white/20 bg-black/40 backdrop-blur-sm sm:mb-8 sm:w-40">
            <span className="mb-2 text-center text-[9px] font-bold uppercase tracking-[0.3em] text-primary sm:text-[10px]">
              Card Reveal
            </span>
            <span className="text-xl font-black tracking-widest text-white sm:text-2xl">
              09.17.26
            </span>
          </div>
        </HeroReveal>

        {/* MAIN HEADLINE */}
        <HeroReveal y={20} delay={0.25}>
          <h1 className="display flex flex-col items-center text-center text-5xl leading-[0.85] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="text-white">THE CARD</span>
            <span className="mt-2 text-black [-webkit-text-stroke:1px_white] sm:mt-3 sm:[-webkit-text-stroke:2px_white]">
              UNLOCKS SOON
            </span>
          </h1>
        </HeroReveal>

        {/* SUBTEXT */}
        <HeroReveal y={20} delay={0.35}>
          <p className="mt-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm md:text-base">
            Toronto's new home for MMA
          </p>
        </HeroReveal>

        {/* EVENT INFO */}
        <HeroReveal y={20} delay={0.45}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:mt-10 sm:text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
              {EVENT.date}
            </span>

            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
              {EVENT.venue}, {EVENT.city}
            </span>
          </div>
        </HeroReveal>

        {/* CTA BUTTON */}
        <HeroReveal y={20} delay={0.55}>
          <div className="mt-10 sm:mt-12">
            <Button
              size="lg"
              className="rounded-none bg-white px-8 py-6 text-sm font-black uppercase tracking-widest text-red-600 transition-all hover:bg-gray-200 hover:text-red-700 sm:px-10 sm:py-7 sm:text-base"
            >
              <Bell className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Get First Access
            </Button>
          </div>
        </HeroReveal>
        
      </div>
    </section>
  );
}