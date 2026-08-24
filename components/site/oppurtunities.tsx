"use client";

import { useState, useTransition } from "react";
import { ArrowRight, BriefcaseBusiness, Camera, Tv, CheckCircle2, ShieldAlert, Loader2 } from "lucide-react";
import { motion } from "motion/react";

import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { submitOpportunity } from "@/lib/actions/submit-opportunity";

type DrawerType = "sponsor" | "media" | null;

export function Opportunities() {
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);

  // Form State
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Append the type so the server knows what form this is
    formData.append("type", activeDrawer as string);

    startTransition(async () => {
      const result = await submitOpportunity(formData);
      if (result.success) {
        setSuccess(true);
      }
    });
  }

  function closeDrawer() {
    setActiveDrawer(null);
    // Reset success state after a brief delay so the animation is smooth
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
              Get closer
              <br />
              <span className="text-primary">to the action.</span>
            </h2>
          </Reveal>
        </div>

        {/* =======================================================
            PARTNERSHIP OPPORTUNITIES GRID
        ======================================================= */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {/* 01: BRAND PARTNERS */}
          <Reveal x={-45} y={10} scale={0.96}>
            <div className="group relative flex h-full flex-col overflow-hidden border border-primary/50 bg-primary/5 transition-colors duration-500 hover:bg-primary/10">
              <span className="hazard-stripes absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />

              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <Reveal delay={0.1} y={15}>
                  <div className="flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground">
                    <BriefcaseBusiness className="h-6 w-6" />
                  </div>
                </Reveal>

                <Reveal delay={0.18} y={20}>
                  <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                    01 <span className="mx-2 opacity-50">/</span> For Brands
                  </p>
                </Reveal>

                <Reveal delay={0.26} y={25}>
                  <h3 className="display mt-3 text-4xl sm:text-5xl">
                    Sponsorship <br /> Opportunities
                  </h3>
                </Reveal>

                <Reveal delay={0.34} y={20}>
                  <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Build a partnership around live event visibility, fighter content and meaningful access to the SFL audience.
                  </p>
                </Reveal>

                <div className="mt-auto pt-10">
                  <Reveal delay={0.42} y={15}>
                    <Button
                      onClick={() => setActiveDrawer("sponsor")}
                      className="w-full rounded-none font-bold uppercase tracking-widest sm:w-auto"
                    >
                      Request Deck <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Reveal>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 02: MEDIA PARTNERS */}
          <Reveal x={45} y={10} scale={0.96} delay={0.08}>
            <div className="group relative flex h-full flex-col overflow-hidden border border-border bg-card transition-colors duration-500 hover:border-foreground/30">
              <span className="absolute inset-x-0 top-0 h-1.5 bg-border group-hover:bg-foreground/30 transition-colors" aria-hidden="true" />

              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <Reveal delay={0.16} y={15}>
                  <div className="flex h-12 w-12 items-center justify-center border border-border bg-background">
                    <Camera className="h-5 w-5 text-foreground" />
                  </div>
                </Reveal>

                <Reveal delay={0.24} y={20}>
                  <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                    02 <span className="mx-2 opacity-30">/</span> For Media
                  </p>
                </Reveal>

                <Reveal delay={0.32} y={25}>
                  <h3 className="display mt-3 text-4xl sm:text-5xl">
                    Press & <br /> Media
                  </h3>
                </Reveal>

                <Reveal delay={0.4} y={20}>
                  <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Journalists, photographers, broadcasters and media outlets can request SFL information, assets and event access.
                  </p>
                </Reveal>

                <div className="mt-auto pt-10">
                  <Reveal delay={0.48} y={15}>
                    <Button
                      variant="outline"
                      onClick={() => setActiveDrawer("media")}
                      className="w-full rounded-none font-bold uppercase tracking-widest bg-transparent sm:w-auto hover:bg-foreground hover:text-background"
                    >
                      Media Inquiry <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Reveal>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* =======================================================
            BROADCAST PARTNER
        ======================================================= */}
        <Reveal y={30} scale={0.97} delay={0.2}>
          <div className="mt-16 overflow-hidden border border-border bg-background relative">
            {/* Dark gradient overlay for a premium TV feel */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-0" />

            <div className="relative z-10 flex flex-col p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  <Tv className="h-4 w-4" />
                  Broadcast Partner
                </div>

                <h3 className="display mt-4 text-4xl sm:text-5xl">
                  BUILT TO BE WATCHED.
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Professional live fight broadcast production. SFL pairs an intimate Toronto event with a broadcast platform built for combat-sports audiences.
                </p>
              </div>

              <div className="mt-8 lg:mt-0 flex shrink-0 items-center border-l-0 lg:border-l border-border/50 lg:pl-12">
                <div className="flex flex-col items-start lg:items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    Available On
                  </span>
                  {/* Text placeholder for Fight Network - you can swap this for a <Image /> of their logo if you have it */}
                  <h4 className="display text-3xl text-foreground">
                    FIGHT <span className="text-primary">NETWORK</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>

      {/* =========================================================
          DYNAMIC DRAWER FORM (Sponsor & Media)
      ========================================================= */}
      <Drawer open={activeDrawer !== null} onOpenChange={(open) => !open && closeDrawer()}>
        <DrawerContent className="bg-background border-t border-primary/20">
          <div className="mx-auto w-full max-w-lg overflow-y-auto h-[85vh] sm:h-[80vh] flex flex-col px-4 py-6 sm:px-6">

            <DrawerHeader className="text-left sm:text-center px-0">
              <div className="mb-4 flex justify-start sm:justify-center">
                <motion.span
                  className={`h-1.5 w-16 ${activeDrawer === "sponsor" ? "hazard-stripes" : "bg-foreground/20"}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <DrawerTitle className="display text-3xl sm:text-5xl uppercase tracking-tighter">
                {activeDrawer === "sponsor" ? (
                  <>REQUEST <span className="text-primary">DECK</span></>
                ) : (
                  <>MEDIA <span className="text-primary">INQUIRY</span></>
                )}
              </DrawerTitle>
              <DrawerDescription className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {activeDrawer === "sponsor"
                  ? "Enter your details to receive our official sponsorship deck."
                  : "Submit your credentials for media access and press assets."}
              </DrawerDescription>
            </DrawerHeader>

            <div className="mt-6 flex-1">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center border border-primary/20 bg-primary/5 h-full"
                >
                  <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                  <h3 className="display text-2xl uppercase">Request Sent</h3>
                  <p className="text-xs text-muted-foreground mt-2 tracking-widest uppercase px-6">
                    Our team will review your inquiry and be in touch shortly.
                  </p>
                  <DrawerClose
                    render={
                      <Button className="mt-8 rounded-none px-8" variant="outline" />
                    }
                  >
                    Close
                  </DrawerClose>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-4 pb-10">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Full Name
                    </label>
                    <Input id="name" name="name" required className="h-12 rounded-none border-border/50 bg-accent/30" />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="entity" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      {activeDrawer === "sponsor" ? "Brand / Company Name" : "Media Outlet / Publication"}
                    </label>
                    <Input id="entity" name="entity" required className="h-12 rounded-none border-border/50 bg-accent/30" />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Professional Email
                    </label>
                    <Input id="email" name="email" type="email" required className="h-12 rounded-none border-border/50 bg-accent/30" />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Additional Details (Optional)
                    </label>
                    {/* Using a standard native textarea with Tailwind for the UI to avoid requiring shadcn's textarea if you don't have it installed */}
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="flex w-full rounded-none border border-border/50 bg-accent/30 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="h-14 w-full rounded-none text-sm font-black uppercase tracking-widest mt-4"
                  >
                    {isPending ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                    ) : (
                      <>
                        Submit Request <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-[10px] text-muted-foreground mt-2 uppercase tracking-widest flex items-center justify-center gap-2">
                    <ShieldAlert className="h-3 w-3" /> Secure Submission
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