import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { FightCard } from "@/components/site/fight-card";
import { AboutLocation } from "@/components/site/about-location";
import { NewsletterCta } from "@/components/site/newsletter-cta";
import { SiteFooter } from "@/components/site/site-footer";
import { SectionBreakBanner } from "@/components/site/section-break-banner";
import { OpportunitiesPage } from "@/components/site/pages/opportunities-page";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SectionBreakBanner />
        <FightCard />
        <AboutLocation />
        <OpportunitiesPage />
        <NewsletterCta />
      </main>
      <SiteFooter />
    </>
  );
}
