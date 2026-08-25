"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { EVENT } from "@/lib/fight-data";

// ============================================================================
// COMPONENTS
// ============================================================================

/**
 * Advanced, multi-layered moving grid background
 */
function EnhancedDigitalGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Base static grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, black 1px, transparent 1px),
            linear-gradient(to bottom, black 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Moving overlay grid for depth */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, black 2px, transparent 2px),
            linear-gradient(to bottom, black 2px, transparent 2px)
          `,
          backgroundSize: "192px 192px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "192px 192px"],
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      {/* Vertical scanline */}
      <motion.div
        className="absolute inset-y-0 w-px bg-primary/20"
        animate={{
          left: ["-10%", "110%"],
        }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      {/* Fade out masks for edges */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

export default function EventSection() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-primary selection:text-white">
      <section className="relative w-full min-h-screen overflow-hidden pb-24 pt-32 lg:pb-32 lg:pt-40">
        <EnhancedDigitalGrid />

        <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 xl:px-12">
          
          {/* =========================================================
              TOP SECTION: TYPOGRAPHY & IMAGE
          ========================================================= */}
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end lg:gap-8">
            
            {/* LEFT: Typography */}
            <div className="flex-1">
              <Reveal y={20}>
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-black/60">
       
                  <span>{EVENT.title}</span>
                </div>
              </Reveal>

              <Reveal delay={0.1} y={30}>
                <h1 className="display mt-6 flex flex-col text-[4.5rem] leading-[0.85] tracking-tight sm:text-[7rem] md:text-[8rem] lg:text-[9rem]">
                  {/* Solid Text */}
                  <span className="text-black">
                    {EVENT.number}.
                  </span>
                  {/* Outlined Text */}
                  <span className="text-transparent [-webkit-text-stroke:1.5px_black] sm:[-webkit-text-stroke:2px_black]">
                    TORONTO STARTS
                  </span>
                  <span className="text-transparent [-webkit-text-stroke:1.5px_black] sm:[-webkit-text-stroke:2px_black]">
                    HERE.
                  </span>
                </h1>
              </Reveal>
            </div>

            {/* RIGHT: Square Poster/Image */}
            <Reveal delay={0.3} x={30} className="w-full shrink-0 lg:max-w-xs xl:max-w-sm">
              <div className="bg-white p-2 shadow-xl ring-1 ring-black/5">
                {/* Replace src with your actual square event graphic */}
                <img
                  src="/banner-logo.png"
                  alt="SFL Event Poster"
                  className="aspect-square w-full bg-black object-contain"
                />
              </div>
            </Reveal>
          </div>

          {/* =========================================================
              BOTTOM SECTION: 3-COLUMN INFO BANNER
          ========================================================= */}
          <Reveal delay={0.4} y={40} className="mt-16 lg:mt-24">
            <div className="grid w-full grid-cols-1 shadow-2xl md:grid-cols-3">
              
              {/* COLUMN 1: DATE (RED) */}
              <div className="relative flex flex-col items-center justify-center bg-primary p-12 text-center text-white sm:p-16">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em]">
                  Saturday
                </span>
                <span className="display my-1 text-8xl leading-none sm:text-9xl">
                  28
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em]">
                  November 2026
                </span>

                {/* Bottom Right Corner Bracket Decoration */}
                <div className="absolute bottom-8 right-8 h-8 w-8 border-b-2 border-r-2 border-white/40" />
              </div>

              {/* COLUMN 2: VENUE (BLACK) */}
              <div className="flex flex-col justify-center bg-black p-10 text-left text-white sm:p-16">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  {EVENT.venue}
                </span>
                <h2 className="display mt-4 text-5xl uppercase leading-[0.9] sm:text-6xl">
                  Toronto,
                  <br />
                  Ontario
                </h2>
                
                <a 
                  href="#location" 
                  className="group mt-12 flex w-max items-center gap-3 border-b border-white/20 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:border-white hover:text-white"
                >
                  Explore The Venue
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* COLUMN 3: CARD REVEAL (DARK GREY) */}
              <div className="relative flex flex-col justify-center overflow-hidden bg-[#111] p-10 text-left text-white sm:p-16">
                {/* Subtle diagonal lines background for the third column */}
                <div 
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
                    backgroundSize: "8px 8px"
                  }}
                />

                <div className="relative z-10">
                  <Lock className="mb-10 h-6 w-6 text-primary" strokeWidth={2.5} />
                  
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Official Card Reveal
                  </span>
                  
                  <h2 className="display mt-4 text-4xl uppercase leading-[0.9] sm:text-5xl">
                    September 17
                  </h2>
                  
                  <p className="mt-6 max-w-xs text-xs leading-relaxed text-white/40">
                    Released alongside the official SFL launch announcement.
                  </p>
                </div>
              </div>

            </div>
          </Reveal>
          
        </div>
      </section>
    </main>
  );
}