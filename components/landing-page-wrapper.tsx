"use client";

import { useState } from "react";

import { AboutLocation } from "./site/about-location";
import { EarlyAccessDrawer } from "./site/early-access-drawer";
import { FightCard } from "./site/fight-card";
import { Hero } from "./site/hero";
import { NewsletterCta } from "./site/newsletter-cta";
import { OpportunitiesPage } from "./site/pages/opportunities-page";
import { SectionBreakBanner } from "./site/section-break-banner";
import { SimonMarcus } from "./site/simon-marcus";
import { SiteFooter } from "./site/site-footer";
import { SiteHeader } from "./site/site-header";

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
        <Hero />
        <SectionBreakBanner />
        <FightCard onOpenEarlyAccess={() => setEarlyAccessOpen(true)} />
        <SimonMarcus />
        <AboutLocation />
        <OpportunitiesPage />
        <NewsletterCta />
      </main>
      <SiteFooter />
      <EarlyAccessDrawer
        open={earlyAccessOpen}
        onOpenChange={setEarlyAccessOpen}
      />
    </>
  );
}
