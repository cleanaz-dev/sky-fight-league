"use client";

import Link from "next/link";
import { ArrowRight, Radio, Users, Video } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

const LEAGUE_FOCUS = [
  {
    icon: Radio,
    title: "Live Events",
    description:
      "High-energy fight nights built around athletes, competition and an atmosphere fans remember.",
  },
  {
    icon: Users,
    title: "Athlete Opportunities",
    description:
      "A platform where Canadian fighters can compete, grow and build something bigger.",
  },
  {
    icon: Video,
    title: "Original Content",
    description:
      "The stories, personalities and moments behind every athlete and every event.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-black/10 bg-white py-20 text-black sm:py-32"
    >
      {/* =========================================================
          MOVING DIGITAL GRID BACKGROUND
      ========================================================= */}
      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "64px 64px"],
        }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Grid fade masks for top and bottom edges */}
      <div className="absolute inset-x-0 top-0 z-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* =========================================================
          GIANT WATERMARK
      ========================================================= */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap display text-[28vw] leading-none text-black opacity-[0.02]"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 0.02, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        SFL
      </motion.span>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col justify-center">
            <Reveal y={20}>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-bold tracking-widest text-primary">
                  01
                </span>
                <span className="h-px w-12 bg-black/20" />
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-black/60">
                  About Sky Fight League
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} y={30}>
              <h2 className="display mt-6 text-6xl leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
                Built for the <br />
                <span className="text-primary">next fight.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.16} y={24}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/70 sm:text-xl">
                Sky Fight League is a new Canadian combat-sports property built
                around athletes, live energy and original content. We are
                creating something from the ground up and inviting fighters,
                fans, partners and creators to build it with us.
              </p>
            </Reveal>

            <Reveal delay={0.22} y={24}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-black/70">
                Canada has incredible combat-sports talent. Sky Fight League
                exists to give that talent another place to compete, another
                audience to reach and another story to tell.
              </p>
            </Reveal>

            <Reveal delay={0.28} y={24}>
              <p className="mt-8 max-w-xl border-l-4 border-primary bg-black/[0.02] py-4 pl-5 pr-4 text-base font-semibold leading-relaxed text-black">
                We are not looking to simply put another fight card on a
                calendar. We are building an experience people can follow
                before, during and after fight night.
              </p>
            </Reveal>

            <Reveal delay={0.34} y={20}>
              <Button
                variant="default"
                className="mt-10 h-14 rounded-none bg-black px-8 text-sm font-bold uppercase tracking-widest text-white hover:bg-primary hover:text-white"
              >
                <Link href="/about">
                  Read The Full Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: Focus Areas */}
          <div className="flex flex-col justify-center gap-4">
            {LEAGUE_FOCUS.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={0.2 + index * 0.1}
                  x={30}
                  className="group relative border border-black/15 bg-white/80 p-6 backdrop-blur-md transition-colors hover:border-black/30 hover:bg-white sm:p-8"
                >
                  {/* Decorative hazard stripe at the top of each card */}
                  <span
                    aria-hidden="true"
                    className="hazard-stripes absolute inset-x-0 top-0 h-1 opacity-50 transition-opacity group-hover:opacity-100"
                  />

                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-black/[0.04]">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-black/40">
                          0{index + 1}
                        </span>
                        <h3 className="display text-2xl leading-none text-black">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-black/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}