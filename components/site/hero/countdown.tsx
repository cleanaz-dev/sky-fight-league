"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Lock, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroReveal } from "./hero-reveal";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target Date: November 28, 2026
    const targetDate = new Date("2026-11-28T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <div className="absolute left-1/2 top-1/2 z-30 flex w-full max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
      
      <HeroReveal y={10} delay={0.6}>
        <div className="mb-6 flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 backdrop-blur-md">
          <Lock className="size-3.5 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
            Main Event Locked
          </span>
        </div>
      </HeroReveal>

      <HeroReveal scale={0.9} delay={0.7}>
        <div className="flex items-center gap-2 sm:gap-4">
          <TimeBlock value={formatTime(timeLeft.days)} label="Days" />
          <Separator />
          <TimeBlock value={formatTime(timeLeft.hours)} label="Hrs" />
          <Separator />
          <TimeBlock value={formatTime(timeLeft.minutes)} label="Mins" />
          <Separator />
          <TimeBlock value={formatTime(timeLeft.seconds)} label="Secs" />
        </div>
      </HeroReveal>

      <HeroReveal y={15} delay={0.8} className="mt-10">
        <Button
          size="lg"
          className="group relative h-14 overflow-hidden rounded-none bg-foreground px-8 text-sm font-bold uppercase tracking-widest text-background transition-all hover:bg-primary hover:text-primary-foreground"
        >
          <div className="absolute inset-0 -translate-x-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)] transition-transform duration-500 group-hover:translate-x-0" />
          <span className="relative flex items-center gap-3">
            <ShieldAlert className="size-5" />
            Request Early Access
          </span>
        </Button>
      </HeroReveal>
    </div>
  );
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex h-16 w-16 items-center justify-center border border-border/50 bg-background/50 backdrop-blur-md sm:h-24 sm:w-24">
        <span className="font-display text-3xl font-black text-foreground sm:text-5xl">{value}</span>
      </div>
      <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground sm:text-[11px]">{label}</span>
    </div>
  );
}

function Separator() {
  return (
    <motion.span animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="pb-6 font-display text-2xl font-bold text-primary sm:text-4xl">:</motion.span>
  );
}