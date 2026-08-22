"use client";

import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "SFL",
  "TORONTO",
  "ARE YOU READY",
  "SKY FIGHT LEAGUE",
  "SFL",
  "TORONTO",
];

export function SectionBreakBanner() {
  return (
    <section
      aria-label="Sky Fight League"
      className="relative h-50 w-full overflow-hidden bg-black"
    >
      {/* =========================================================
          RED BASE PANEL
      ========================================================= */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary/25 via-primary/65 to-primary/25" />

      {/* =========================================================
          DARK ANGULAR PANELS
      ========================================================= */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
      >
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
          TECHNICAL GRID
      ========================================================= */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.25) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* =========================================================
          MOVING SCAN LINE
      ========================================================= */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 z-10 w-px bg-white/30"
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
          GIANT BACKGROUND SFL
      ========================================================= */}
      <motion.div
        aria-hidden="true"
        className="display pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-[14rem] font-black leading-none tracking-[-0.08em] text-black/10 sm:text-[18rem]"
        animate={{
          x: ["-48%", "-52%", "-48%"],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        SFL
      </motion.div>

      {/* =========================================================
          LEFT TECH LABEL
      ========================================================= */}
      <div
        aria-hidden="true"
        className="absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-black/60 [writing-mode:vertical-rl]">
          Sky Fight League
        </span>

        <span className="h-10 w-px bg-black/30" />

        <span className="text-[9px] font-bold tracking-[0.3em] text-black/60">
          01
        </span>
      </div>

      {/* =========================================================
          RIGHT TECH LABEL
      ========================================================= */}
      <div
        aria-hidden="true"
        className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="text-[9px] font-bold tracking-[0.3em] text-black/60">
          LIVE
        </span>

        <span className="h-10 w-px bg-black/30" />

        <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-black/60 [writing-mode:vertical-rl]">
          Toronto
        </span>
      </div>

      {/* =========================================================
          DESKTOP CONTENT
      ========================================================= */}
      <div className="absolute inset-0 z-20 hidden items-center md:flex">
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex w-max items-center"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center"
              >
                {/* Number */}
                <span className="mr-5 font-mono text-[10px] font-bold tracking-widest text-black/50">
                  {String((index % 3) + 1).padStart(2, "0")}
                </span>

                {/* Main typography */}
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`display whitespace-nowrap font-black uppercase leading-none tracking-[-0.03em] ${
                    item === "SFL"
                      ? "text-7xl text-primary-foreground lg:text-8xl"
                      : item === "ARE YOU READY"
                        ? "text-6xl text-black lg:text-7xl"
                        : "text-5xl text-primary-foreground/90 lg:text-6xl"
                  }`}
                >
                  {item}
                </motion.span>

                {/* Decal separator */}
                <div className="mx-10 flex items-center gap-2">
                  <span className="h-2 w-2 rotate-45 bg-black" />
                  <span className="h-px w-12 bg-black/40" />
                  <span className="h-2 w-2 rotate-45 bg-black" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          MOBILE
      ========================================================= */}
      <div className="absolute inset-0 z-20 flex items-center md:hidden">
        <motion.div
          className="display absolute left-1/2 whitespace-nowrap text-[9rem] font-black leading-none tracking-[-0.1em] text-primary-foreground"
          animate={{
            x: ["-48%", "-52%", "-48%"],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          SFL
        </motion.div>

        {/* Mobile vertical marker */}
        <div className="absolute right-5 top-1/2 flex -translate-y-1/2 flex-col items-center gap-2">
          <span className="font-mono text-[9px] font-bold tracking-widest text-black/60">
            01
          </span>

          <span className="h-8 w-px bg-black/30" />

          <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-black/60 [writing-mode:vertical-rl]">
            SFL
          </span>
        </div>
      </div>

      {/* =========================================================
          HALFTONE / DOT TEXTURE
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 left-12 z-10 hidden h-20 w-32 opacity-20 sm:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, black 1px, transparent 1px)",
          backgroundSize: "7px 7px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-12 top-12 z-10 hidden h-20 w-32 opacity-20 sm:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, black 1px, transparent 1px)",
          backgroundSize: "7px 7px",
        }}
      />

      {/* =========================================================
          TOP BLACK MASK
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-50 h-12 bg-gradient-to-b from-black via-black/90 to-transparent"
      />

      {/* =========================================================
          BOTTOM BLACK MASK
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-50 h-12 bg-gradient-to-t from-black via-black/90 to-transparent"
      />

      {/* Broadcast frame lines */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-12 z-40 h-px bg-black/50"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-12 z-40 h-px bg-black/50"
      />
    </section>
  );
}