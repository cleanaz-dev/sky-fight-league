"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Calendar, MapPin, Bell } from "lucide-react";

import { EVENT, MAIN_EVENT } from "@/lib/fight-data";
import { HeroReveal } from "./hero-reveal";
import { FighterColumn } from "./fighter-column";
import { CenterVs } from "./center-vs";
import { EventInfo } from "./event-info";
import { Button } from "@/components/ui/button";

export function Hero() {
  // TODO: Replace this with your dynamic Event model status later
  const isLocked = true; 

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-accent pt-16">
      
      {/* =========================================================
          ATMOSPHERIC BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0">
        <Image
          src="/arena-smoke.png"
          alt=""
          fill
          priority
          className={`object-cover ${isLocked ? "opacity-60 mix-blend-luminosity" : "opacity-40"}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${isLocked ? "from-background/90 via-accent/60" : "from-accent/60 via-accent/20"} to-background`} />
      </div>

      {/* =========================================================
          DYNAMIC WATERMARK
      ========================================================= */}
      {isLocked ? (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[42%] z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[22vw] opacity-[0.03] display text-transparent [-webkit-text-stroke:2px_white] tracking-tighter"
          initial={{ opacity: 0, x: "-48%" }}
          animate={{ opacity: 0.04, x: "-52%" }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        >
          CLASSIFIED
        </motion.span>
      ) : (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[42%] z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[26vw] opacity-[0.06] display text-stroke"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          FIGHT
        </motion.span>
      )}

      {/* =========================================================
          MAIN HERO CONTAINER
      ========================================================= */}
      <div className={`relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col px-4 sm:px-6 ${isLocked ? "items-center justify-center py-12" : ""}`}>
        
        {/* EVENT EYEBROW (Shared across both states) */}
        <HeroReveal y={-16} delay={0}>
          <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center ${isLocked ? "mb-6 sm:mb-10" : "pt-8"}`}>
            <motion.span className="hazard-stripes h-2 w-12 sm:w-16" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.15 }} style={{ transformOrigin: "left" }} />
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted-foreground sm:text-xs">
              {EVENT.number} <span className="text-primary">/</span> {isLocked ? "TO BE ANNOUNCED" : EVENT.title}
            </p>
            <motion.span className="hazard-stripes h-2 w-12 sm:w-16" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.15 }} style={{ transformOrigin: "right" }} />
          </div>
        </HeroReveal>

        {isLocked ? (
          /* =======================================================
             LOCKED STATE VIEW
          ======================================================= */
          <div className="flex w-full flex-col items-center">
            
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
                {/* Black text with white stroke */}
                <span className="mt-2 text-black [-webkit-text-stroke:1px_white] sm:mt-3 sm:[-webkit-text-stroke:2px_white]">
                  UNLOCKS SOON
                </span>
              </h1>
            </HeroReveal>

            {/* SUBTEXT */}
            <HeroReveal y={20} delay={0.35}>
              <p className="mt-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm md:text-base">
                Toronto&apos;s new home for MMA
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
        ) : (
          /* =======================================================
             UNLOCKED STATE VIEW (STAREDOWN)
          ======================================================= */
          <>
            <div className="relative grid flex-1 grid-cols-2 items-center gap-0 pt-6 md:pt-2">
              <HeroReveal x={-45} y={15} scale={0.96} delay={0.15} duration={0.9} className="relative z-10">
                <FighterColumn
                  image="/fighter-red.png"
                  video="/fighter-white-loop.mp4"
                  name={MAIN_EVENT.red.name}
                  nickname={MAIN_EVENT.red.nickname}
                  record={MAIN_EVENT.red.record}
                  side="red"
                />
              </HeroReveal>

              <CenterVs rounds={MAIN_EVENT.rounds} />

              <HeroReveal x={45} y={15} scale={0.96} delay={0.25} duration={0.9} className="relative z-10">
                <FighterColumn
                  image="/fighter-white.png"
                  video="/fighter-red-loop.mp4"
                  name={MAIN_EVENT.white.name}
                  nickname={MAIN_EVENT.white.nickname}
                  record={MAIN_EVENT.white.record}
                  side="white"
                />
              </HeroReveal>
            </div>
            
            <EventInfo weightClass={MAIN_EVENT.weightClass} date={EVENT.date} venue={EVENT.venue} city={EVENT.city} />
          </>
        )}
      </div>
    </section>
  );
}