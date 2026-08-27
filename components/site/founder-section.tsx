"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// =========================================================
// REVEAL ANIMATION COMPONENT
// =========================================================
type RevealProps = {
  children: ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  scale?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
};

export function Reveal({
  children,
  delay = 0,
  x = 0,
  y = 24,
  scale = 1,
  className,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  // Asserting as any to bypass strict TS indexing issues with dynamic tags
  const MotionTag = motion[as] as any;

  return (
    <MotionTag
      className={className}
      initial={
        reduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              x,
              y,
              scale,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: "-80px", // triggers slightly before it enters the viewport
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

// =========================================================
// MAIN FOUNDERS PAGE COMPONENT
// =========================================================
export default function FoundersSection() {
  return (
    <div className="flex w-full flex-col bg-background">
      
      {/* =========================================================
          1. SIMON MARCUS
      ========================================================= */}
      <section className="relative min-h-screen overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
        
        {/* ATMOSPHERIC BACKGROUND TEXT */}
        <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 lg:top-1/3">
          <Reveal delay={0.2} y={30}>
            <span
              aria-hidden="true"
              className="whitespace-nowrap text-[20vw] opacity-[0.02] display tracking-tighter text-white"
            >
              PRESIDENT
            </span>
          </Reveal>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            
            {/* IMAGE (Left on Desktop, Top on Mobile) */}
            <div className="order-1 relative mx-auto w-full max-w-md lg:order-none lg:max-w-none">
              <Reveal delay={0.1} y={40} className="relative w-full">
                {/* Red accent behind the image */}
                <div className="absolute -inset-4 bg-red-600/10 blur-2xl" />
                
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-border/50 bg-accent/30 shadow-2xl">
                  <Image
                    src="/simon-portrait.png"
                    alt="Simon Marcus - PRESIDENT"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-cover object-top contrast-125 grayscale transition-all duration-700 hover:grayscale-0"
                  />
                  
                  {/* Subtle gradient overlay to blend bottom edge */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent opacity-80 lg:hidden" />
                </div>
                
                {/* Tech-style corner accents */}
                <div className="absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-primary/50" />
                <div className="absolute -right-2 -bottom-2 h-4 w-4 border-b-2 border-r-2 border-primary/50" />
              </Reveal>
            </div>

            {/* TEXT CONTENT (Right on Desktop, Bottom on Mobile) */}
            <div className="order-2 flex flex-col items-center text-center lg:order-none lg:items-start lg:text-left">
              
              <Reveal delay={0.2} y={20}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="hidden h-[1px] w-8 bg-muted-foreground/30 lg:block" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted-foreground sm:text-xs">
                    8x World Champion
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3} y={20}>
                <div className="mb-8 bg-red-600 px-5 py-2.5 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white sm:text-xs">
                      PRESIDENT
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.4} y={20}>
                <h1 className="display flex flex-col text-[16vw] leading-[0.8] tracking-tight text-white sm:text-8xl md:text-9xl lg:text-[7.5rem]">
                  <span>SIMON</span>
                  <span className="mt-1 sm:mt-2">MARCUS</span>
                </h1>
              </Reveal>

              <Reveal delay={0.5} y={20}>
                <span 
                  className="mt-6 inline-block font-serif text-4xl font-black italic tracking-tighter text-red-600 drop-shadow-md -rotate-3 sm:text-5xl md:text-6xl"
                  style={{ textShadow: "2px 2px 0px rgba(0,0,0,1)" }}
                >
                  &ldquo;THE ONE&rdquo;
                </span>
              </Reveal>

              <Reveal delay={0.6} y={20}>
                <div className="mt-10 max-w-md border-l-0 border-primary/30 pl-0 lg:border-l-2 lg:pl-6">
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    An eight-time Muay Thai World Champion and Canada’s most decorated Muay Thai athlete, Simon Marcus brings an elite championship pedigree and years of world-class competition to Sky Fight League. As President of SFL, he is helping build a fighter-first platform defined by high standards, discipline, and greater opportunity for the next generation of combat athletes.
                  </p>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. EFE
      ========================================================= */}
      <section className="relative min-h-screen overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
        
        {/* ATMOSPHERIC BACKGROUND TEXT */}
        <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 lg:top-1/3">
          <Reveal delay={0.2} y={30}>
            <span
              aria-hidden="true"
              className="whitespace-nowrap text-[20vw] opacity-[0.02] display tracking-tighter text-white"
            >
              CO-FOUNDER
            </span>
          </Reveal>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            
            {/* IMAGE (Reversed: Right on Desktop, Top on Mobile) */}
            <div className="order-1 relative mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
              <Reveal delay={0.1} y={40} className="relative w-full">
                <div className="absolute -inset-4 bg-red-600/10 blur-2xl" />
                
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-border/50 bg-accent/30 shadow-2xl">
                  {/* Priority false for performance since below fold */}
                  <Image
                    src="/efe-hero.png"
                    alt="Efe Caliskan- Co-Founder"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top contrast-125 grayscale transition-all duration-700 hover:grayscale-0"
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent opacity-80 lg:hidden" />
                </div>
                
                <div className="absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-primary/50" />
                <div className="absolute -right-2 -bottom-2 h-4 w-4 border-b-2 border-r-2 border-primary/50" />
              </Reveal>
            </div>

            {/* TEXT CONTENT (Reversed: Left on Desktop, Bottom on Mobile) */}
            <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
              
              <Reveal delay={0.2} y={20}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="hidden h-[1px] w-8 bg-muted-foreground/30 lg:block" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted-foreground sm:text-xs">
                    3x Canadian Champion
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3} y={20}>
                <div className="mb-8 bg-red-600 px-5 py-2.5 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white sm:text-xs">
                    Co-Founder
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.4} y={20}>
                {/* using h2 for accessibility flow since Simon is h1 */}
                <h2 className="display flex flex-col text-[16vw] leading-[0.8] tracking-tight text-white sm:text-8xl md:text-9xl lg:text-[7.5rem]">
                  <span>EFE TARIK CALISKAN</span>
                </h2>
              </Reveal>

              <Reveal delay={0.5} y={20}>
                <div className="mt-10 max-w-md border-l-0 border-primary/30 pl-0 lg:border-l-2 lg:pl-6">
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    A three-time Canadian Muay Thai Champion, former BFL 160-lb Kickboxing Champion, and former #1-ranked WBC MuayThai fighter at 168 lbs. As Co-Founder of Sky Fight League, Efe brings years of competition across Canada and Thailand, including victories at Rajadamnern Stadium, along with a successful transition to MMA and a fighter-first perspective to SFL.
                  </p>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}