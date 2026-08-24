"use client";

import { useState, useTransition } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Loader2,
  MapPin,
  MessageSquare,
  ShieldAlert,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { submitOpportunity } from "@/lib/actions/submit-opportunity";

export function OpportunitiesPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("type", "general_conversation");

    startTransition(async () => {
      const result = await submitOpportunity(formData);

      if (result.success) {
        setSuccess(true);
      }
    });
  }

  function handleClose() {
    setDrawerOpen(false);

    setTimeout(() => setSuccess(false), 300);
  }

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
              <span className="text-primary">from the beginning.</span>
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
                    <span className="text-primary">brand in the fight.</span>
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
                    <span className="text-primary">story.</span>
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
            EVENT FOOTER / CONVERSATION CTA
        ======================================================= */}

        <Reveal y={30} scale={0.97} delay={0.1}>
          <div className="mt-14 flex flex-col gap-6 border border-border bg-card p-7 sm:p-9 md:flex-row md:items-center md:justify-between">
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
              nativeButton={true}
              onClick={() => setDrawerOpen(true)}
              className="rounded-none font-bold uppercase tracking-widest"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* =========================================================
          START A CONVERSATION DRAWER
      ========================================================= */}

      <Drawer
        open={drawerOpen}
        onOpenChange={(open) => !open && handleClose()}
      >
        <DrawerContent className="border-t border-primary/20 bg-background">
          <div className="mx-auto flex h-[85vh] w-full max-w-lg flex-col overflow-y-auto px-4 py-6 sm:h-[80vh] sm:px-6">
            <DrawerHeader className="px-0 text-left sm:text-center">
              <div className="mb-4 flex justify-start sm:justify-center">
                <motion.span
                  className="hazard-stripes h-1.5 w-16"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <DrawerTitle className="display text-3xl uppercase tracking-tighter sm:text-5xl">
                START A <span className="text-primary">CONVERSATION</span>
              </DrawerTitle>

              <DrawerDescription className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                Tell us how you&apos;re looking to collaborate with Sky Fight
                League.
              </DrawerDescription>
            </DrawerHeader>

            <div className="mt-6 flex-1">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center border border-primary/20 bg-primary/5 py-10 text-center"
                >
                  <CheckCircle2 className="mb-4 h-12 w-12 text-primary" />

                  <h3 className="display text-2xl uppercase">
                    Message Received
                  </h3>

                  <p className="mt-2 px-6 text-xs uppercase tracking-widest text-muted-foreground">
                    Thank you. A member of our executive team will be in touch
                    shortly.
                  </p>

                  <DrawerClose
                    render={
                      <Button
                        className="mt-8 rounded-none px-8"
                        variant="outline"
                      />
                    }
                  >
                    Close
                  </DrawerClose>
                </motion.div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="flex flex-col gap-4 pb-10"
                >
                  <div className="space-y-1.5">
                    <label
                      htmlFor="conv-name"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Full Name
                    </label>

                    <Input
                      id="conv-name"
                      name="name"
                      required
                      className="h-12 rounded-none border-border/50 bg-accent/30"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="conv-entity"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Company / Organization
                    </label>

                    <Input
                      id="conv-entity"
                      name="entity"
                      required
                      className="h-12 rounded-none border-border/50 bg-accent/30"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="conv-email"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Professional Email
                    </label>

                    <Input
                      id="conv-email"
                      name="email"
                      type="email"
                      required
                      className="h-12 rounded-none border-border/50 bg-accent/30"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="conv-message"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      How can we work together?
                    </label>

                    <textarea
                      id="conv-message"
                      name="message"
                      rows={3}
                      className="flex w-full rounded-none border border-border/50 bg-accent/30 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="mt-4 h-14 w-full rounded-none text-sm font-black uppercase tracking-widest"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Send Message
                        <MessageSquare className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="mt-2 flex items-center justify-center gap-2 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
                    <ShieldAlert className="h-3 w-3" />
                    Secure Transmission
                  </p>
                </form>
              )}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
}