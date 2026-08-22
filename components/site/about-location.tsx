"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock,
  MapPin,
  Navigation,
  Radio,
  Users,
  Video,
} from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { EVENT } from "@/lib/fight-data";

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

export function AboutLocation() {
  const locationQuery = encodeURIComponent(
    `${EVENT.address}, ${EVENT.city}`
  );

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border bg-accent py-20 sm:py-28"
    >
      {/* Background watermark */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap display text-[28vw] leading-none text-stroke opacity-[0.035]"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 0.035, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        SFL
      </motion.span>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* About */}
          <div>
            <Reveal y={20}>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
                About Sky Fight League
              </p>
            </Reveal>

            <Reveal delay={0.08} y={30}>
              <h2 className="display mt-3 text-5xl leading-[0.92] sm:text-6xl">
                Built for the
                <br />
                <span className="text-primary">next fight.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.16} y={24}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Sky Fight League is a new Canadian combat-sports property built
                around athletes, live energy and original content. We are
                creating something from the ground up and inviting fighters,
                fans, partners and creators to build it with us.
              </p>
            </Reveal>

            <Reveal delay={0.22} y={24}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Canada has incredible combat-sports talent. Sky Fight League
                exists to give that talent another place to compete, another
                audience to reach and another story to tell.
              </p>
            </Reveal>

            <Reveal delay={0.28} y={24}>
              <p className="mt-5 max-w-xl border-l-2 border-primary pl-5 text-base font-semibold leading-relaxed text-foreground">
                We are not looking to simply put another fight card on a
                calendar. We are building an experience people can follow
                before, during and after fight night.
              </p>
            </Reveal>

            {/* League focus */}
            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {LEAGUE_FOCUS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.title}
                    delay={0.32 + index * 0.08}
                    y={24}
                    scale={0.97}
                    className="bg-card"
                  >
                    <div className="relative h-full p-5">
                      <span
                        aria-hidden="true"
                        className="hazard-stripes absolute inset-x-0 top-0 h-1"
                      />

                      <Icon className="mt-1 h-6 w-6 text-primary" />

                      <h3 className="display mt-4 text-xl leading-none">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.56} y={20}>
              <Button
                render={<Link href="/about" />}
                nativeButton={false}
                variant="outline"
                className="mt-6 rounded-none border-foreground/30 bg-transparent font-bold uppercase tracking-widest hover:bg-foreground hover:text-background"
              >
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>

          {/* Location */}
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
              <motion.span
                aria-hidden="true"
                className="hazard-stripes absolute inset-x-0 top-0 h-1.5"
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
                <Reveal delay={0.25} y={15}>
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
                    Fight Night Venue
                  </p>
                </Reveal>

                <Reveal delay={0.32} y={25}>
                  <h3 className="display mt-3 text-4xl leading-none sm:text-5xl">
                    {EVENT.venue}
                  </h3>
                </Reveal>

                <Reveal delay={0.36} y={20}>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                    The next chapter of Sky Fight League happens under the
                    lights. Find the venue, check the schedule and be there
                    when the doors open.
                  </p>
                </Reveal>

                <dl className="mt-8 flex flex-col gap-6 border-y border-border py-7">
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

                        <dd className="mt-1 font-semibold">{EVENT.doors}</dd>
                      </div>
                    </div>
                  </Reveal>
                </dl>

                <Reveal delay={0.56} y={20}>
                  <div className="relative mt-8 overflow-hidden border border-border">
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
                      src={`https://www.google.com/maps?q=${locationQuery}&output=embed`}
                      className="h-56 w-full grayscale-[0.7] contrast-[1.05] sm:h-48"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-primary/5 mix-blend-multiply"
                    />

                    <div className="pointer-events-none absolute bottom-3 left-3 border border-border/60 bg-background/90 px-3 py-1.5 backdrop-blur-sm">
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-primary">
                        SFL // Fight Night
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.66} y={20}>
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