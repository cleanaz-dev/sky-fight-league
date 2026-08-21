import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { FightCard } from '@/components/fight-card'
import { AboutLocation } from '@/components/about-location'
import { NewsletterCta } from '@/components/newsletter-cta'
import { SiteFooter } from '@/components/site-footer'

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
