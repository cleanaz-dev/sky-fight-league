"use client";

import { useState } from "react";

import { AboutLocation } from "./site/about-location";
import { EarlyAccessDrawer } from "./site/early-access-drawer";
import { FightCard } from "./site/fight-card";
import { Hero } from "./site/hero";
import { NewsletterCta } from "./site/newsletter-cta";
import { SectionBreakBanner } from "./site/section-break-banner";
import { SimonMarcus } from "./site/simon-marcus";
import { SiteFooter } from "./site/site-footer";
import { SiteHeader } from "./site/site-header";
import { Opportunities } from "./site/oppurtunities";

export function LandingPageWrapper() {
  const isLocked = true;
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);

  return (
    <>
      <SiteHeader
        isLocked={isLocked}
        onOpenEarlyAccess={() => setEarlyAccessOpen(true)}
      />
      
      <main>
        {/* Pass down isLocked and the drawer trigger to Hero */}
        <Hero 
          isLocked={isLocked}
          onOpenEarlyAccess={() => setEarlyAccessOpen(true)}
        />
        
        <SectionBreakBanner />
        
        {/* Make sure FightCard accepts these props if you updated it too! */}
        <FightCard 
          onOpenEarlyAccess={() => setEarlyAccessOpen(true)} 
        />
        
        <SimonMarcus />
        <AboutLocation />
        <Opportunities />
        
        <NewsletterCta isLocked={isLocked} />
      </main>

      <SiteFooter />

      <EarlyAccessDrawer
        open={earlyAccessOpen}
        onOpenChange={setEarlyAccessOpen}
      />
    </>
  );
}