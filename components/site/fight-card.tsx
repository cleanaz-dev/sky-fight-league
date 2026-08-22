"use client";

import { Crown, Ticket } from "lucide-react";
import { motion } from "motion/react";

import { FIGHT_CARD, EVENT, type Bout } from "@/lib/fight-data";

import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/site/countdown";

export function FightCard() {
  return (
    <section
      id="fight-card"
      className="relative border-t border-border bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              {EVENT.number} &mdash; The Card
            </p>

            <h2 className="display mt-3 text-5xl sm:text-7xl">
              Fight <span className="text-stroke-primary">Card</span>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Five bouts. One night. Every athlete steps into the Sky cage
              with everything on the line.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Countdown scheduledAt={EVENT.scheduledAt} />
            </motion.div>

            <Button
              render={<a href="#newsletter" />}
              nativeButton={false}
              className="w-full rounded-none font-bold uppercase tracking-widest sm:w-auto"
            >
              <Ticket className="h-4 w-4" />
              Buy Tickets
            </Button>
          </div>
        </motion.div>

        {/* =========================================================
            FIGHT LIST
        ========================================================= */}

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-80px",
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-12 flex flex-col gap-3"
        >
          {FIGHT_CARD.map((bout, i) => (
            <BoutRow
              key={bout.weightClass}
              bout={bout}
              index={i}
            />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/* ===============================================================
   BOUT ROW
================================================================ */

function BoutRow({
  bout,
  index,
}: {
  bout: Bout;
  index: number;
}) {
  const title = bout.isTitle;

  return (
    <motion.li
      variants={{
        hidden: {
          opacity: 0,
          y: 28,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden border ${
        title
          ? "border-primary bg-primary/5"
          : "border-border bg-card"
      }`}
    >
      {/* Title fight stripe */}

      {title && (
        <motion.span
          className="hazard-stripes absolute inset-x-0 top-0 h-1.5"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformOrigin: "left",
          }}
        />
      )}

      {/* =========================================================
          WEIGHT CLASS
      ========================================================= */}

      <div className="flex items-center justify-center gap-1.5 border-b border-border/60 py-2">
        {title && (
          <Crown
            className="h-3.5 w-3.5 text-primary"
            aria-hidden="true"
          />
        )}

        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
          {bout.weightClass} &middot; {bout.rounds} Rounds
        </span>
      </div>

      {/* =========================================================
          FIGHTERS
      ========================================================= */}

      <div className="flex items-center gap-2 px-3 py-4 sm:gap-6 sm:px-8 sm:py-6">

        {/* Red fighter */}

        <motion.div
          className="min-w-0 flex-1 text-right"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="display text-lg leading-none text-balance sm:text-3xl">
            {bout.red.name}
          </p>

          <p className="mt-1.5 truncate text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
            <span className="text-primary">
              {bout.red.record}
            </span>

            <span className="hidden sm:inline">
              {" "}
              &middot; &ldquo;{bout.red.nickname}&rdquo;
            </span>
          </p>
        </motion.div>

        {/* =====================================================
            VS
        ===================================================== */}

        <motion.div
          className="flex shrink-0 flex-col items-center"
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="flex h-9 w-9 items-center justify-center bg-primary display text-sm text-primary-foreground shadow-[0_0_25px_rgba(220,38,38,0.2)] sm:h-11 sm:w-11 sm:text-lg">
            VS
          </span>
        </motion.div>

        {/* White fighter */}

        <motion.div
          className="min-w-0 flex-1 text-left"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="display text-lg leading-none text-balance sm:text-3xl">
            {bout.white.name}
          </p>

          <p className="mt-1.5 truncate text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
            <span className="hidden sm:inline">
              &ldquo;{bout.white.nickname}&rdquo; &middot;{" "}
            </span>

            <span className="text-primary">
              {bout.white.record}
            </span>
          </p>
        </motion.div>
      </div>

      {/* =========================================================
          BOUT NUMBER
      ========================================================= */}

      <motion.span
        className="pointer-events-none absolute bottom-1 right-2 display text-3xl text-foreground/[0.04] sm:text-6xl"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>
    </motion.li>
  );
}