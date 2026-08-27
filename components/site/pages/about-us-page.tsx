"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

/**
 * Reusable component for the cinematic slow-zoom effect.
 * It gently scales the image in and out endlessly.
 */
function SlowZoomImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      }}
    />
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* =========================================================
          BLOCK 1: FULL WIDTH HERO (WIDER)
      ========================================================= */}
      <section className="relative flex h-[85vh] w-full items-end overflow-hidden border-b border-white/10 pb-20 pt-32">
        <div className="absolute inset-0 z-0 bg-black">
          <SlowZoomImage
            src="/about-1.png"
            alt="Sky Fight League action shot"
            className="opacity-50"
          />
          {/* Gradient overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Increased max-width for a more expansive cinematic feel */}
        <div className="relative z-10 mx-auto w-full max-w-[100rem] px-4 sm:px-6 xl:px-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
                About Sky Fight League
              </p>
              <span className="h-px w-8 bg-white/30" />
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/70">
                Toronto, Canada
              </p>
            </div>

            <h1 className="display mt-2 text-6xl leading-[0.9] text-white sm:text-8xl lg:text-9xl xl:text-[10rem]">
              Built for the
              <br />
              <span className="text-primary">fight ahead.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-white/80 sm:text-xl xl:text-2xl">
              Competition at the centre. The full story around it.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          BLOCK 2: WHITE BACKGROUND & TEXT (SHORT CONTRAST BAND)
      ========================================================= */}
      <section className="bg-white px-4 py-12 text-black sm:px-6 sm:py-16 xl:px-12">
        <div className="mx-auto max-w-[100rem]">
          {/* Aligned items to center to make the block feel cohesive and tight */}
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16 xl:gap-24">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xs font-bold uppercase tracking-[0.35em] text-black/60">
                  What we are building
                </h2>
              </div>
            </div>

            <div className="max-w-5xl">
              <p className="text-xl font-bold leading-snug tracking-tight sm:text-3xl lg:text-4xl">
                Sky Fight League is a Toronto-based combat-sports promotion
                bringing MMA and Muay Thai together inside the cage.
              </p>
              <p className="mt-4 text-base leading-relaxed text-black/70 sm:mt-6 sm:text-lg">
                Built around Canadian fighters, SFL combines live competition,
                high-level production and original storytelling to create an
                experience audiences can follow before, during and after fight
                night.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BLOCK 3: 50/50 IMAGE LEFT, TEXT RIGHT (BLACK BG)
      ========================================================= */}
      <section className="grid w-full border-b border-white/10 bg-black lg:grid-cols-2">
        <div className="relative h-[50vh] overflow-hidden lg:h-auto">
          <SlowZoomImage
            src="/about-2.png"
            alt="Simon Marcus training in Toronto"
          />
          <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1.5 backdrop-blur-md">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">
              Simon Marcus training in Toronto
            </p>
          </div>
        </div>

        {/* Increased padding for wider screens */}
        <div className="flex flex-col justify-center p-10 sm:p-16 lg:p-24 xl:p-32">
          <div className="flex items-center gap-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.35em] text-white/50">
              Why SFL
            </h2>
          </div>

          <h3 className="display mt-6 text-5xl leading-none text-white sm:text-7xl xl:text-8xl">
            Another stage
            <br />
            <span className="text-white/40">at home.</span>
          </h3>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 xl:text-xl">
            Canada continues to produce exceptional combat-sports athletes. Sky
            Fight League was created to give those athletes another stage at
            home—one that respects the competition, presents fighters properly
            and helps audiences connect with the people behind the gloves.
          </p>
        </div>
      </section>

      {/* =========================================================
          BLOCK 4: 50/50 TEXT LEFT, IMAGE RIGHT (BLACK BG)
      ========================================================= */}
      <section className="grid w-full border-b border-white/10 bg-black lg:grid-cols-2">
        {/* TEXT (Rendered first on desktop, second on mobile) */}
        <div className="order-2 flex flex-col justify-center p-10 sm:p-16 lg:order-1 lg:border-r lg:border-white/10 lg:p-24 xl:p-32">
          <div className="flex items-center gap-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.35em] text-white/50">
              Beyond the cage
            </h2>
          </div>

          <h3 className="display mt-6 text-5xl leading-none text-white sm:text-7xl xl:text-8xl">
            The fight is
            <br />
            <span className="text-primary">not the whole story.</span>
          </h3>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 xl:text-xl">
            Training, discipline, personality, rivalry and sacrifice are what
            make each matchup matter.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70 xl:text-xl">
            Through live events and original content, SFL will bring audiences
            closer to the athletes and build anticipation from the first
            announcement to the final bell.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative order-1 h-[50vh] overflow-hidden lg:order-2 lg:h-auto">
          <SlowZoomImage
            src="/about-3.png"
            alt="A professional live fight broadcast setup"
          />
          <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1.5 backdrop-blur-md">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">
              A professional live fight broadcast setup
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          BLOCK 5: FULL WIDTH IMAGE WITH TEXT
      ========================================================= */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden border-b border-white/10 py-32 text-center xl:min-h-[90vh]">
        <div className="absolute inset-0 z-0 bg-black">
          <SlowZoomImage
            src="/about-4.png"
            alt="Sky Fight League venue and crowd"
            className="opacity-40"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.35em] text-white/70">
              The long-term vision
            </h2>
          </div>

          <h3 className="display mt-6 text-6xl leading-[0.9] text-white sm:text-8xl xl:text-9xl">
            Built in Toronto.
            <br />
            <span className="text-primary">Made for Canada.</span>
          </h3>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl xl:text-2xl">
            Sky Fight League launches November 28 at Demo Room in Toronto, with
            the goal of growing into a recurring platform for fighters and fight
            fans across the country.
          </p>

          <Button
            variant="default"
            size="lg"
            className="flex items-center gap-2 mt-12 rounded-none bg-white px-10 py-6 text-sm font-bold uppercase tracking-widest text-black hover:bg-primary hover:text-white"
          >
            Get First Access
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* =========================================================
          BLOCK 6: SIMON BIO (WIDER ALIGNMENT)
      ========================================================= */}
      <section className="bg-black px-4 py-24 text-white sm:px-6 sm:py-32 xl:px-12 xl:py-40">
        <div className="mx-auto max-w-[100rem]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-20 xl:gap-32">
            {/* Bio Image */}
            <div className="relative aspect-[4/5] w-full max-w-xl overflow-hidden border border-white/10">
              <span
                aria-hidden="true"
                className="hazard-stripes absolute inset-x-0 top-0 z-10 h-1"
              />
              <SlowZoomImage src="/about-5.png" alt="Simon 'The One' Marcus" />
            </div>

            {/* Bio Text */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <h2 className="text-xs font-bold uppercase tracking-[0.35em] text-white/50">
                  President
                </h2>
              </div>

              <h3 className="display mt-6 text-6xl leading-none text-white sm:text-8xl xl:text-9xl">
                Simon
                <br />
                <span className="text-white/40">“The One” Marcus</span>
              </h3>

              <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-white/70 xl:text-xl">
                <p>
                  Simon “The One” Marcus is an eight-time Muay Thai world
                  champion and one of Canada’s most accomplished combat-sports
                  athletes.
                </p>
                <p>
                  After competing internationally at the highest levels of Muay
                  Thai and kickboxing, Simon transitioned into MMA and is now
                  bringing a fighter’s perspective to every part of Sky Fight
                  League.
                </p>
                <p className="border-l-2 border-primary pl-6 font-semibold text-white">
                  As president, his vision is to create the kind of platform
                  athletes can trust and audiences can believe in.
                </p>
              </div>

              {/* Event stamp */}
              <div className="mt-12 inline-block max-w-max border border-white/10 bg-white/[0.02] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                  Sky Fight League
                </p>
                <p className="mt-1 font-mono text-sm font-semibold text-primary">
                  SFL 001 · November 28, 2026 · Toronto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BLOCK 7: EFE BIO (MIRRORED ALIGNMENT)
      ========================================================= */}
      <section className="border-t border-white/10 bg-black px-4 py-24 text-white sm:px-6 sm:py-32 xl:px-12 xl:py-40">
        <div className="mx-auto max-w-[100rem]">
          <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr] lg:gap-20 xl:gap-32">
            {/* Bio Text (Left on desktop this time) */}
            <div className="order-2 flex flex-col justify-center lg:order-1">
              <div className="flex items-center gap-3">
                <h2 className="text-xs font-bold uppercase tracking-[0.35em] text-white/50">
                  Co-Founder
                </h2>
              </div>

              <h3 className="display mt-6 text-6xl leading-none text-white sm:text-8xl xl:text-9xl">
                Efe Tarik
                <br />
                <span className="text-white/40">Caliskan</span>
              </h3>

              <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-white/70 xl:text-xl">
                <p>
                  Efe Tarik Caliskan is a three-time Canadian Muay Thai Champion
                  and former BFL 160-lb Kickboxing Champion, with a career built
                  across rings in Canada and Thailand.
                </p>
                <p>
                  A former #1-ranked WBC Muay Thai fighter at 168 lbs, Efe has
                  competed at Rajadamnern Stadium and made a successful
                  transition into MMA, bringing a fighter-first perspective to
                  every decision at Sky Fight League.
                </p>
                <p className="border-l-2 border-primary pl-6 font-semibold text-white">
                  As co-founder, Efe is focused on building a platform that
                  reflects the standards and sacrifice competition demands.
                </p>
              </div>

              {/* Event stamp */}
              <div className="mt-12 inline-block max-w-max border border-white/10 bg-white/[0.02] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                  Sky Fight League
                </p>
                <p className="mt-1 font-mono text-sm font-semibold text-primary">
                  SFL 001 · November 28, 2026 · Toronto
                </p>
              </div>
            </div>

            {/* Bio Image (Right on desktop this time) */}
            <div className="order-1 relative aspect-[4/5] w-full max-w-xl overflow-hidden border border-white/10 lg:order-2 lg:ml-auto">
              <span
                aria-hidden="true"
                className="hazard-stripes absolute inset-x-0 top-0 z-10 h-1"
              />
              <SlowZoomImage
                src="/efe-about.png"
                alt="Efe Tarik Caliskan - Co-Founder"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
