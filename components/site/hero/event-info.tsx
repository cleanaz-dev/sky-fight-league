"use client";

import { Calendar, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroReveal } from "./hero-reveal";

interface EventInfoProps {
  weightClass: string;
  date: string;
  venue: string;
  city: string;
}

export function EventInfo({ weightClass, date, venue, city }: EventInfoProps) {
  return (
    <div className="relative z-10 pb-10">
      <HeroReveal y={18} delay={0.55}>
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-primary">
          {weightClass}
        </p>
      </HeroReveal>

      <div className="mt-5 flex flex-col items-center gap-4">
        <HeroReveal y={18} delay={0.65}>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              {date}
            </span>

            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {venue}, {city}
            </span>
          </div>
        </HeroReveal>

        <HeroReveal y={22} scale={0.96} delay={0.75}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#fight-card" />}
              nativeButton={false}
              size="lg"
              className="rounded-none px-8 text-base font-bold uppercase tracking-widest"
            >
              <Ticket className="h-5 w-5" />
              Get Tickets
            </Button>

            <Button
              render={<a href="#fight-card" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-none border-foreground/30 bg-transparent px-8 text-base font-bold uppercase tracking-widest hover:bg-foreground hover:text-background"
            >
              View Fight Card
            </Button>
          </div>
        </HeroReveal>
      </div>
    </div>
  );
}