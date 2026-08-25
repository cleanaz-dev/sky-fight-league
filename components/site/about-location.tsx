"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { EVENT } from "@/lib/fight-data";

export function AboutLocation() {
  const locationQuery = encodeURIComponent(
    `${EVENT.address}, ${EVENT.city}`
  );

  // Split venue into parts for the massive typography (e.g., "Demo Room" -> "DEMO", "ROOM")
  const venueParts = EVENT.venue?.split(" ") || ["DEMO", "ROOM"];
  const venueFirst = venueParts[0];
  const venueRest = venueParts.slice(1).join(" ") || "ROOM";
  const cityFirst = EVENT.city?.split(",")[0] || "TORONTO";

  return (
    <section
      id="venue"
      className="relative overflow-hidden bg-[#070707] py-20 sm:py-32 text-white border-t border-white/5"
    >
      {/* Subtle radial gradient to give the background some depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/10 via-[#070707] to-[#070707] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Label */}
        <Reveal y={20}>
          <div className="flex items-center gap-5 mb-16 sm:mb-24">
 
            <span className="text-zinc-500 font-mono text-sm tracking-[0.2em] uppercase font-semibold">
              The Venue
            </span>
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-end">
          {/* Left Column: Content & Typography */}
          <div className="pb-4">
            <Reveal delay={0.1} y={20}>
              <div className="inline-block bg-black border border-white/10 px-8 py-6 mb-10 sm:mb-14">
                <h3 className="display text-2xl font-bold lowercase tracking-tight text-white">
                  {EVENT.venue}
                </h3>
                <p className="text-[10px] text-zinc-400 font-mono mt-1 uppercase tracking-widest">
                  Toronto's Creative Compound
                </p>
              </div>
            </Reveal>

            {/* Massive Display Title */}
            <Reveal delay={0.2} y={30}>
              <h2 className="display text-[4.5rem] leading-[0.85] sm:text-[6rem] lg:text-[7.5rem] font-black uppercase tracking-tighter">
                <span className="block text-white">{venueFirst}</span>
                <span className="block text-white">{venueRest}.</span>
                {/* Outline stroke effect for the city text */}
                <span className="block text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.9)] sm:[-webkit-text-stroke:3px_rgba(255,255,255,0.9)]">
                  {cityFirst}.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.3} y={20}>
              <p className="mt-10 text-xl sm:text-2xl text-zinc-300 max-w-md leading-snug font-medium">
                An intimate fight-night setting built to put every guest close to the action.
              </p>
            </Reveal>

            {/* Event Details Table */}
            <Reveal delay={0.4} y={20}>
              <div className="mt-14 flex flex-col border-t border-white/10">
                {[
                  // Fallbacks added to match the image in case these aren't in your EVENT object yet
                  { label: "Event", value: (EVENT as any).title || "SFL 001" },
                  { label: "Date", value: (EVENT as any).date || "NOVEMBER 28, 2026" },
                  { label: "City", value: EVENT.city || "TORONTO, ONTARIO" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-5 border-b border-white/10 group"
                  >
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em] font-semibold transition-colors group-hover:text-zinc-300">
                      {item.label}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-widest text-white">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.5} y={20}>
              <Button
                render={
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${locationQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
                variant="outline"
                className="mt-12 w-full sm:w-auto px-10 py-7 rounded-none border-white/20 bg-transparent text-white font-mono text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all group"
              >
                Get Directions
                <ArrowRight className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Reveal>
          </div>

          {/* Right Column: Dark Mode Interactive Map */}
          <Reveal delay={0.3} x={40} className="h-full w-full">
            <div className="relative w-full h-[50vh] min-h-[450px] lg:h-[800px] bg-zinc-950 border border-white/10 overflow-hidden group">
              {/* Top Accent Line */}
              <motion.div
                className="absolute inset-x-0 top-0 z-10 h-1 bg-[#ff3333]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "left" }}
              />

              <iframe
                title={`${EVENT.venue} location map`}
                src={`https://www.google.com/maps?q=${locationQuery}&output=embed`}
                className="absolute inset-0 w-full h-full pointer-events-auto filter invert-[0.92] hue-rotate-[180deg] brightness-[0.8] contrast-[1.2] grayscale-[0.2] transition-all duration-700 hover:brightness-[0.95]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Inner vignette overlay to blend iframe harsh edges nicely */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]" />

              {/* Minimal floating map label */}
              <div className="pointer-events-none absolute bottom-5 left-5 border border-white/10 bg-black/80 px-4 py-2 backdrop-blur-md">
                <p className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-white">
                  {EVENT.venue} // MAP
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}