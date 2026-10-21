"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Bell } from "lucide-react";

import { EVENT, formatRevealDate, MAIN_EVENT } from "@/lib/fight-data";

import { HeroReveal } from "./hero-reveal";
import { EventInfo } from "./event-info";
import { Button } from "@/components/ui/button";

interface HeroProps {
  isLocked?: boolean;
  onOpenEarlyAccess?: () => void;
}

export function Hero({ isLocked = true, onOpenEarlyAccess }: HeroProps) {
  const bg = isLocked
    ? {
        mobile: "/cage-hero-mobile.png",
        desktop: "/cage-hero-desktop.png",
      }
    : {
        mobile: "/open-page-hero.png",
        desktop: "/open-page-hero.png",
      };

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-accent pt-16"
    >
      {/* =========================================================
          ATMOSPHERIC BACKGROUND (switches on isLocked)
      ========================================================= */}
      <div className="absolute inset-0 z-0">
        <Image
          key={`bg-mobile-${isLocked}`}
          src={bg.mobile}
          alt=""
          fill
          priority
          className="object-cover sm:hidden"
        />
        <Image
          key={`bg-desktop-${isLocked}`}
          src={bg.desktop}
          alt=""
          fill
          priority
          className="hidden object-cover sm:block"
        />

        {/* Unlocked only: full-width darkening + red glow (no box edges) */}
        {!isLocked && (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_62%,rgba(220,38,38,0.35)_0%,rgba(220,38,38,0.12)_35%,transparent_65%)]"
            />
          </>
        )}
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
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
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
      <div
        className={`relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col px-4 sm:px-6 ${isLocked ? "items-center justify-center py-12" : ""}`}
      >
        {/* EVENT EYEBROW (Shared across both states) */}
        <HeroReveal y={-16} delay={0}>
          <div
            className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center ${isLocked ? "mb-6 sm:mb-10" : "pt-8"}`}
          >
            <motion.span
              className="hazard-stripes h-2 w-12 sm:w-16"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ transformOrigin: "left" }}
            />
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted-foreground sm:text-xs">
              {EVENT.number} <span className="text-primary">/</span>{" "}
              {isLocked ? "November 28th, 2026" : EVENT.title}
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

        {isLocked ? (
          /* =======================================================
             LOCKED STATE VIEW
          ======================================================= */
          <div className="flex w-full flex-col items-center">
            {/* SQUARE REVEAL DATE BOX */}
            <HeroReveal y={20} delay={0.15}>
              <div className="relative mx-auto mb-6 hidden h-48 w-48 flex-col items-center sm:mb-8 sm:flex sm:size-72">
                <div
                  className="absolute inset-0 bg-[url('/lock.png')] bg-contain bg-center bg-no-repeat opacity-40 mix-blend-luminosity transition-opacity duration-300 hover:opacity-50"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-0 top-[62%] z-10 flex -translate-y-1/2 flex-col items-center justify-center px-4">
                  <span className="mb-0.5 text-center text-[10px] font-black uppercase italic tracking-[0.4em] text-red-600 drop-shadow-md sm:text-xs">
                    Card Reveal
                  </span>

                  <span className="text-xl font-black italic tracking-widest text-white drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] sm:text-3xl">
                    {EVENT.cardReveal}
                  </span>
                </div>
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
                  nativeButton={true}
                  onClick={onOpenEarlyAccess}
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
             UNLOCKED STATE VIEW (FIGHTERS)
          ======================================================= */
          <>
            <div className="relative min-h-[340px] flex-1 sm:min-h-[480px] md:min-h-[560px]">
              <HeroReveal
                y={30}
                scale={0.97}
                delay={0.2}
                duration={1}
                className="absolute inset-0"
              >
                {/* Mobile: 125% wide (smaller than before), centered.
                    Desktop: full width. No mask, no opacity. */}
                <div className="absolute bottom-0 left-1/2 h-full w-[125%] -translate-x-1/2 sm:w-full">
                  <Image
                    src="/unlocked-figthers.png"
                    alt="Main card fighters"
                    fill
                    priority
                    sizes="(max-width: 640px) 125vw, 1152px"
                    className="object-contain object-bottom"
                  />
                </div>
              </HeroReveal>
            </div>

            <EventInfo
              weightClass={MAIN_EVENT.weightClass}
              date={EVENT.date}
              venue={EVENT.venue}
              city={EVENT.city}
              ticketUrl={EVENT.ticketUrl}
            />
          </>
        )}
      </div>
    </section>
  );
}