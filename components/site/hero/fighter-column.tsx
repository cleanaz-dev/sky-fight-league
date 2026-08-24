"use client";

import { HeroReveal } from "./hero-reveal";
import { FighterMedia } from "./fighter-media";

interface FighterColumnProps {
  image: string;
  video: string;
  name: string;
  nickname: string;
  record: string;
  side: "red" | "white";
  isLocked?: boolean;
}

export function FighterColumn({
  image,
  video,
  name,
  nickname,
  record,
  side,
  isLocked = false,
}: FighterColumnProps) {
  const isRed = side === "red";

  return (
    <div className={`relative flex flex-col ${isRed ? "items-start pr-8" : "items-end pl-8"}`}>
      
      <FighterMedia image={image} video={video} name={name} side={side} isLocked={isLocked} />

      <div className={`mt-1 w-full ${isRed ? "text-left" : "text-right"}`}>
        
        <HeroReveal y={12} delay={0.5} duration={0.55}>
          <p className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary sm:text-xs ${isLocked && "mt-3"}`}>
            {isLocked && !isRed && <span className="ml-auto hazard-stripes h-1.5 w-6 opacity-50" />}
            {isRed ? "Red Corner" : "White Corner"}
            {isLocked && isRed && <span className="hazard-stripes h-1.5 w-6 opacity-50" />}
          </p>
        </HeroReveal>

        <HeroReveal y={18} delay={0.58} duration={0.6}>
          {isLocked ? (
            <h2 className="mt-2 display text-3xl leading-none sm:text-5xl">
              <span className="bg-foreground text-foreground selection:bg-foreground">CLASSIFIED</span>
            </h2>
          ) : (
            <h2 className="display text-3xl leading-none sm:text-5xl">{name}</h2>
          )}
        </HeroReveal>

        <HeroReveal y={12} delay={0.66} duration={0.55}>
          {isLocked ? (
            <p className="mt-2 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm sm:tracking-widest">
              STATUS: <span className="text-primary">UNKNOWN</span>
            </p>
          ) : (
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm sm:tracking-widest">
              &ldquo;{nickname}&rdquo; <span className="text-[8px] text-foreground sm:text-sm">{record}</span>
            </p>
          )}
        </HeroReveal>

      </div>
    </div>
  );
}