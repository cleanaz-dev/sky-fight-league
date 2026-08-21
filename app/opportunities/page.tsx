import Link from 'next/link'
import { ArrowLeft, Swords, Users, Handshake } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Opportunities | Sky Fight League',
  description:
    'Fight for Sky Fight League. Open calls for athletes, corner staff, and event partners in Canadian MMA.',
}

const ROLES = [
  {
    icon: Swords,
    title: 'Fighters',
    desc: 'Amateur and pro athletes ready to test themselves against Canada\u2019s best. Submit your record, tape, and weight class.',
  },
  {
    icon: Users,
    title: 'Corner & Crew',
    desc: 'Coaches, cutmen, referees, and production crew who live for fight night. Join the team that runs the show.',
  },
  {
    icon: Handshake,
    title: 'Partners',
    desc: 'Sponsors, venues, and media partners who want to grow the sport across the country with us.',
  },
]

export default function OpportunitiesPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="relative border-b border-border bg-accent py-24 sm:py-32">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 display text-stroke whitespace-nowrap text-[24vw] opacity-[0.05]"
          >
            STEP UP
          </span>
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Sky Fight League
            </Link>
            <h1 className="display mt-6 text-6xl sm:text-8xl">
              Fight <span className="text-primary">For Us</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Sky Fight League is built by people who refuse to sit in the crowd. If you want in on
              Canadian MMA, this is where you start.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            {ROLES.map((role) => (
              <div key={role.title} className="relative border border-border bg-card p-8">
                <span className="hazard-stripes absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
                <role.icon className="h-8 w-8 text-primary" />
                <h2 className="display mt-4 text-3xl">{role.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{role.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 border border-border bg-accent p-10 text-center">
            <h2 className="display text-4xl sm:text-5xl">Ready to make your case?</h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Send your background and what you bring to the cage. Our matchmaking team reviews every
              application.
            </p>
            <Button
              render={<a href="mailto:opportunities@skyfightleague.ca" />}
              nativeButton={false}
              size="lg"
              className="mt-2 rounded-none font-bold uppercase tracking-widest"
            >
              Apply Now
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
