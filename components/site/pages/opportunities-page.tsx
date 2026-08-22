"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

export function OpportunitiesPage() {
  const steps = [
    "Meet the Sky Fight League team",
    "Review the event plan, media plan and final cage map",
    "Select the right partnership structure",
    "Confirm the agreement and deliverables",
    "Launch the campaign leading into November 28",
  ];

  return (
    <section
      id="opportunities"
      className="relative overflow-hidden border-t border-border bg-accent py-20 sm:py-28"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12rem] top-32 h-[30rem] w-[30rem] rounded-full border-[50px] border-primary/[0.035]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-40 left-[-10rem] h-80 w-80 rotate-45 border-[30px] border-primary/[0.025]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="max-w-4xl">
          <Reveal y={20}>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              The Opportunity
            </p>
          </Reveal>

          <Reveal delay={0.08} y={30}>
            <h2 className="display mt-3 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Build it
              <br />
              <span className="text-primary">
                from the beginning.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16} y={24}>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              This is more than the launch of an event. It is an opportunity to
              help shape Sky Fight League from the beginning and grow alongside
              a new Canadian combat-sports property built around athletes, live
              energy and original content.
            </p>
          </Reveal>
        </div>

        {/* =======================================================
            PARTNERSHIP OPPORTUNITIES
        ======================================================= */}

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {/* BRAND PARTNERS */}

          <Reveal x={-45} y={10} scale={0.96}>
            <div className="group relative h-full overflow-hidden border border-border bg-card transition-colors duration-500 hover:border-primary/40">

              <span
                className="hazard-stripes absolute inset-x-0 top-0 h-1.5"
                aria-hidden="true"
              />

              <div className="p-8 sm:p-10">

                <Reveal delay={0.1} y={15}>
                  <div className="flex h-12 w-12 items-center justify-center border border-border bg-background transition-colors duration-300 group-hover:border-primary/50">
                    <BriefcaseBusiness className="h-5 w-5 text-primary" />
                  </div>
                </Reveal>

                <Reveal delay={0.18} y={20}>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-primary">
                    For Brand Partners
                  </p>
                </Reveal>

                <Reveal delay={0.26} y={25}>
                  <h3 className="display mt-3 text-4xl sm:text-5xl">
                    Put your
                    <br />
                    <span className="text-primary">
                      brand in the fight.
                    </span>
                  </h3>
                </Reveal>

                <Reveal delay={0.34} y={20}>
                  <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    Choose your partnership level, secure preferred inventory
                    and build an activation that connects with the audience.
                  </p>
                </Reveal>

                <Reveal delay={0.42} y={15}>
                  <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                    <span className="h-px w-8 bg-primary transition-all duration-300 group-hover:w-14" />
                    Brand Partnership
                  </div>
                </Reveal>

              </div>
            </div>
          </Reveal>

          {/* MEDIA PARTNERS */}

          <Reveal x={45} y={10} scale={0.96} delay={0.08}>
            <div className="group relative h-full overflow-hidden border border-border bg-card transition-colors duration-500 hover:border-primary/40">

              <span
                className="hazard-stripes absolute inset-x-0 top-0 h-1.5"
                aria-hidden="true"
              />

              <div className="p-8 sm:p-10">

                <Reveal delay={0.16} y={15}>
                  <div className="flex h-12 w-12 items-center justify-center border border-border bg-background transition-colors duration-300 group-hover:border-primary/50">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                </Reveal>

                <Reveal delay={0.24} y={20}>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-primary">
                    For Media Partners
                  </p>
                </Reveal>

                <Reveal delay={0.32} y={25}>
                  <h3 className="display mt-3 text-4xl sm:text-5xl">
                    Tell the
                    <br />
                    <span className="text-primary">
                      story.
                    </span>
                  </h3>
                </Reveal>

                <Reveal delay={0.4} y={20}>
                  <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    Explore event distribution, production, original content
                    and longer-term media collaboration.
                  </p>
                </Reveal>

                <Reveal delay={0.48} y={15}>
                  <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                    <span className="h-px w-8 bg-primary transition-all duration-300 group-hover:w-14" />
                    Media Partnership
                  </div>
                </Reveal>

              </div>
            </div>
          </Reveal>
        </div>

        {/* =======================================================
            NEXT STEPS
        ======================================================= */}

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

          {/* INTRO */}

          <div>
            <Reveal x={-30} y={20}>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
                Next Steps
              </p>
            </Reveal>

            <Reveal delay={0.08} x={-30} y={25}>
              <h3 className="display mt-3 text-4xl sm:text-5xl">
                Let's make
                <br />
                <span className="text-primary">
                  it official.
                </span>
              </h3>
            </Reveal>

            <Reveal delay={0.16} x={-20} y={20}>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                From partnership structure to campaign launch, we'll work
                together to build an activation that fits the event and your
                objectives.
              </p>
            </Reveal>
          </div>

          {/* STEPS */}

          <Reveal x={40} y={10} scale={0.97} delay={0.12}>
            <div className="border border-border bg-card">
              <div className="p-7 sm:p-9">

                {steps.map((step, index) => (
                  <Reveal
                    key={step}
                    delay={0.2 + index * 0.08}
                    x={20}
                    y={10}
                    className="flex items-start gap-5 border-b border-border py-5 first:pt-0 last:border-b-0 last:pb-0"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-primary/40 text-xs font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      <CheckCircle2 className="hidden h-4 w-4 shrink-0 text-primary sm:block" />

                      <p className="text-sm font-semibold leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </Reveal>
                ))}

              </div>
            </div>
          </Reveal>
        </div>

        {/* =======================================================
            CONTACTS
        ======================================================= */}

        <div className="mt-16 border-y border-border">
          <div className="grid md:grid-cols-2">

            {/* SIMON */}

            <Reveal
              x={-35}
              y={10}
              className="border-b border-border md:border-b-0 md:border-r"
            >
              <div className="p-8 sm:p-10">

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                  Co-Founder & League Lead
                </p>

                <h3 className="display mt-3 text-4xl sm:text-5xl">
                  Simon Marcus
                </h3>

                <div className="mt-6">
                  <a
                    href="tel:6479240584"
                    className="flex items-center gap-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    647-924-0584
                  </a>
                </div>

              </div>
            </Reveal>

            {/* JONATHAN */}

            <Reveal x={35} y={10} delay={0.08}>
              <div className="p-8 sm:p-10">

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                  Partnerships & Creative
                </p>

                <h3 className="display mt-3 text-4xl sm:text-5xl">
                  Jonathan Poirier
                </h3>

                <div className="mt-6 flex flex-col gap-3">

                  <a
                    href="mailto:jpoirier@sidalgroup.com"
                    className="flex items-center gap-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    jpoirier@sidalgroup.com
                  </a>

                  <a
                    href="tel:6475454295"
                    className="flex items-center gap-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    647-545-4295
                  </a>

                </div>

              </div>
            </Reveal>
          </div>
        </div>

        {/* =======================================================
            EVENT FOOTER
        ======================================================= */}

        <Reveal y={30} scale={0.97} delay={0.1}>
          <div className="mt-10 flex flex-col gap-6 border border-border bg-card p-7 sm:p-9 md:flex-row md:items-center md:justify-between">

            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  Tentative Event
                </p>

                <p className="mt-2 text-sm font-bold uppercase tracking-widest">
                  November 28, 2026 · Demo Room · Toronto
                </p>
              </div>
            </div>

            <Button
              render={
                <a href="mailto:jpoirier@sidalgroup.com" />
              }
              nativeButton={false}
              className="rounded-none font-bold uppercase tracking-widest"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

        {/* =======================================================
            DISCLAIMER
        ======================================================= */}

        <Reveal delay={0.15} y={15}>
          <p className="mt-8 max-w-5xl text-[11px] leading-relaxed text-muted-foreground/70">
            Final bouts, media rights, placements and deliverables are subject
            to regulatory approval, availability and signed agreements. Any
            Simon Marcus endorsement or personal social-media content must be
            agreed upon separately in writing.
          </p>
        </Reveal>

      </div>
    </section>
  );
}