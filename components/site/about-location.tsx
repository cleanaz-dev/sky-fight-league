"use client";

import {
  MapPin,
  Clock,
  Navigation,
} from "lucide-react";

import { motion } from "motion/react";

import { EVENT } from "@/lib/fight-data";

import { Button } from "@/components/ui/button";

import { Reveal } from "@/components/site/reveal";

export function AboutLocation() {
  const stats = [
    { value: "12", label: "Events" },
    { value: "80+", label: "Athletes" },
    { value: "5", label: "Provinces" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border bg-accent py-20 sm:py-28"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full border-[40px] border-primary/5"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-20 h-64 w-64 rotate-45 border-[20px] border-primary/5"
        initial={{ opacity: 0, rotate: 20 }}
        whileInView={{ opacity: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* =====================================================
              ABOUT
          ===================================================== */}

          <div>
            <Reveal y={20}>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
                The League
              </p>
            </Reveal>

            <Reveal delay={0.08} y={30}>
              <h2 className="display mt-3 text-5xl sm:text-6xl">
                Built in
                <br />
                <span className="text-primary">Canada.</span> Feared
                everywhere.
              </h2>
            </Reveal>

            <Reveal delay={0.16} y={24}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                Sky Fight League is Canada&rsquo;s premier mixed martial arts
                promotion. We put the country&rsquo;s hardest-hitting
                prospects and battle-tested veterans under one roof and one
                set of lights &mdash; no filler, no easy nights. Every card is
                a proving ground for the next generation of champions.
              </p>
            </Reveal>

            <Reveal delay={0.22} y={24}>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                From coast to coast, we&rsquo;re building the promotion that
                Canadian fight fans deserve.
              </p>
            </Reveal>

            {/* ===================================================
                STATS
            =================================================== */}

            <div className="mt-10 grid grid-cols-3 border-y border-border">
              {stats.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  delay={0.28 + index * 0.1}
                  y={30}
                  scale={0.94}
                  className="border-r border-border last:border-r-0"
                >
                  <div className="py-6">
                    <motion.p
                      className="display text-4xl text-primary sm:text-5xl"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.45 + index * 0.1,
                        duration: 0.5,
                      }}
                    >
                      {stat.value}
                    </motion.p>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* =====================================================
              LOCATION
          ===================================================== */}

          <Reveal
            x={50}
            y={0}
            scale={0.96}
            delay={0.12}
            className="scroll-mt-20"
          >
            <div
              id="location"
              className="relative h-full border border-border bg-card"
            >
              {/* Hazard stripe */}

              <motion.span
                className="hazard-stripes absolute inset-x-0 top-0 h-1.5"
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "left" }}
              />

              <div className="p-8 sm:p-10">

                {/* Venue heading */}

                <Reveal delay={0.25} y={15}>
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
                    Venue
                  </p>
                </Reveal>

                <Reveal delay={0.32} y={25}>
                  <h3 className="display mt-3 text-4xl sm:text-5xl">
                    {EVENT.venue}
                  </h3>
                </Reveal>

                {/* =================================================
                    LOCATION DETAILS
                ================================================= */}

                <dl className="mt-8 flex flex-col gap-6">

                  {/* Address */}

                  <Reveal delay={0.4} x={20}>
                    <div className="flex items-start gap-4">
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.5,
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      </motion.div>

                      <div>
                        <dt className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                          Address
                        </dt>

                        <dd className="mt-1 font-semibold">
                          {EVENT.address}
                          <br />
                          {EVENT.city}
                        </dd>
                      </div>
                    </div>
                  </Reveal>

                  {/* Schedule */}

                  <Reveal delay={0.48} x={20}>
                    <div className="flex items-start gap-4">
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.58,
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      </motion.div>

                      <div>
                        <dt className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                          Schedule
                        </dt>

                        <dd className="mt-1 font-semibold">
                          {EVENT.doors}
                        </dd>
                      </div>
                    </div>
                  </Reveal>
                </dl>

                {/* =================================================
                    MINI MAP
                ================================================= */}

                <Reveal delay={0.56} y={20}>
                  <div className="relative mt-8 overflow-hidden border border-border">

                    {/* Map accent line */}

                    <motion.div
                      className="absolute inset-x-0 top-0 z-10 h-1 bg-primary"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{ transformOrigin: "left" }}
                    />

                    <iframe
                      title={`${EVENT.venue} location map`}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        `${EVENT.address}, ${EVENT.city}`
                      )}&output=embed`}
                      className="h-56 w-full grayscale-[0.7] contrast-[1.05] sm:h-48"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />

                    {/* Map overlay */}

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-primary/5 mix-blend-multiply"
                    />

                    {/* Coordinates-style label */}

                    <div className="pointer-events-none absolute bottom-3 left-3 border border-border/60 bg-background/90 px-3 py-1.5 backdrop-blur-sm">
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-primary">
                        SFL // Venue
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* =================================================
                    DIRECTIONS
                ================================================= */}

                <Reveal delay={0.66} y={20}>
                  <Button
                    render={
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          `${EVENT.address}, ${EVENT.city}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    nativeButton={false}
                    variant="outline"
                    className="mt-4 w-full rounded-none border-foreground/30 bg-transparent font-bold uppercase tracking-widest hover:bg-foreground hover:text-background"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </Button>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}