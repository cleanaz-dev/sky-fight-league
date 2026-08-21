import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { FightCard } from '@/components/site/fight-card'
import { AboutLocation } from '@/components/site/about-location'
import { NewsletterCta } from '@/components/site/newsletter-cta'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FightCard />
        <AboutLocation />
        <NewsletterCta />
      </main>
      <SiteFooter />
    </>
  )
}
