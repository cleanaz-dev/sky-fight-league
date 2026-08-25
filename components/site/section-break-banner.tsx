"use client";

import { motion } from "framer-motion";

/**
 * Renders the logo with a black and white offset phasing effect behind it.
 */
function PhasingLogo({ className = "" }: { className?: string }) {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Contrast Layer (White Offset) */}
      <img
        src="/banner-logo.png"
        alt=""
        className={`absolute -left-[4px] -top-[4px] z-0 brightness-0 invert filter sm:-left-[8px] sm:-top-[8px] ${className}`}
        aria-hidden="true"
      />
      {/* Contrast Layer (Black Offset) */}
      <img
        src="/banner-logo.png"
        alt=""
        className={`absolute left-[4px] top-[4px] z-0 opacity-80 brightness-0 filter sm:left-[8px] sm:top-[8px] ${className}`}
        aria-hidden="true"
      />
      {/* Main Logo */}
      <img
        src="/banner-logo.png"
        alt="Sky Fight League Logo"
        className={`relative z-10 ${className}`}
      />
    </div>
  );
}

export function SectionBreakBanner() {
  return (
    <section
      aria-label="Sky Fight League"
      // Increased height significantly for desktop to show off the giant logo
      className="relative h-64 w-full overflow-hidden bg-black md:h-96 lg:h-[30rem]"
    >
      {/* =========================================================
          LAYER 0: GIANT BACKGROUND LOGO
          Placed at the very back so the red banner tints it.
      ========================================================= */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            x: ["-2%", "2%", "-2%"],
            y: ["-1%", "1%", "-1%"],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          {/* Sized to be huge and clipped by the container */}
          <PhasingLogo className="h-[22rem] w-auto object-contain opacity-70 md:h-[38rem] lg:h-[45rem]" />
        </motion.div>
      </div>

      {/* =========================================================
          LAYER 1: RED BASE PANEL (Overlays the logo)
      ========================================================= */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/30 via-primary/70 to-primary/30 pointer-events-none" />

      {/* =========================================================
          LAYER 2: DARK ANGULAR PANELS
      ========================================================= */}
      <div aria-hidden="true" className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
        <div className="absolute -left-[8%] -top-[80%] h-[260%] w-[22%] rotate-[28deg] bg-black/10" />
        <div className="absolute left-[18%] -top-[80%] h-[260%] w-[8%] rotate-[28deg] bg-black/10" />
        <div className="absolute right-[17%] -top-[80%] h-[260%] w-[14%] rotate-[28deg] bg-black/15" />
        <div className="absolute -right-[8%] -top-[80%] h-[260%] w-[22%] rotate-[28deg] bg-black/10" />

        {/* Giant outlined circle */}
        <div className="absolute -right-32 top-1/2 h-100 w-100 -translate-y-1/2 rounded-full border-[24px] border-black/10" />

        {/* Giant square */}
        <div className="absolute left-[42%] top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rotate-45 border-[14px] border-black/10" />

        {/* Thin diagonal lines */}
        <div className="absolute left-0 top-[28%] h-px w-full -rotate-6 bg-black/20" />
        <div className="absolute left-0 top-[72%] h-px w-full rotate-6 bg-black/20" />
      </div>

      {/* =========================================================
          LAYER 3: TECHNICAL GRID
      ========================================================= */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-20 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.35) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* =========================================================
          LAYER 4: MOVING SCAN LINE
      ========================================================= */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 z-30 w-px bg-white/30 pointer-events-none"
        animate={{
          left: ["0%", "100%"],
        }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* =========================================================
          LAYER 5: HALFTONE / DOT TEXTURE
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 left-12 z-30 hidden h-20 w-32 opacity-30 sm:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, black 1px, transparent 1px)",
          backgroundSize: "7px 7px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-12 top-12 z-30 hidden h-20 w-32 opacity-30 sm:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, black 1px, transparent 1px)",
          backgroundSize: "7px 7px",
        }}
      />
    </section>
  );
}