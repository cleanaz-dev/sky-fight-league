import Link from 'next/link'
import { ArrowLeft, Flame, Shield, Trophy, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'

export const metadata = {
  title: 'About Us | Sky Fight League',
  description:
    'Sky Fight League is Canada\u2019s premier mixed martial arts promotion \u2014 building the next generation of champions from coast to coast.',
}

const STATS = [
  { value: '12', label: 'Events' },
  { value: '80+', label: 'Athletes' },
  { value: '5', label: 'Provinces' },
  { value: '2021', label: 'Founded' },
]

const VALUES = [
  {
    icon: Flame,
    title: 'No Easy Nights',
    desc: 'Every card is stacked top to bottom. We match fighters to test them, not to pad records.',
  },
  {
    icon: Shield,
    title: 'Athletes First',
    desc: 'Fair pay, real medical standards, and a platform that treats fighters like the professionals they are.',
  },
  {
    icon: Trophy,
    title: 'Homegrown Champions',
    desc: 'We scout, develop, and elevate Canadian talent into contenders the whole world has to reckon with.',
  },
]

export default function AboutPage() {
  return (
    <>
    
      <main className="min-h-screen bg-background pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-accent py-24 sm:py-32">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 display text-stroke whitespace-nowrap text-[24vw] opacity-[0.05]"
          >
            THE LEAGUE
          </span>
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
         
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.35em] text-primary">About Us</p>
            <h1 className="display mt-3 text-6xl text-balance sm:text-8xl">
              Built in <span className="text-primary">Canada.</span>
              <br />
              Feared everywhere.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Sky Fight League is Canada&rsquo;s premier mixed martial arts promotion &mdash; a proving
              ground where the country&rsquo;s hardest-hitting prospects and battle-tested veterans settle
              it under one set of lights.
            </p>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`border-border py-8 text-center ${i < 3 ? 'sm:border-r' : ''} ${
                  i % 2 === 0 ? 'border-r' : ''
                } ${i < 2 ? 'border-b sm:border-b-0' : ''}`}
              >
                <p className="display text-4xl text-primary sm:text-6xl">{stat.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
          <h2 className="display text-4xl sm:text-5xl">
            Our <span className="text-stroke-primary">Story</span>
          </h2>
          <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Sky Fight League started with a simple frustration: Canada was producing world-class
              fighters with nowhere to prove it at home. Prospects were forced overseas before their
              country ever got to watch them rise.
            </p>
            <p>
              So we built the promotion Canadian fight fans deserve &mdash; a stage where local legends
              are made, not imported. From our first night in a packed hall to sold-out arenas across five
              provinces, the mission has never changed: put on the fights that matter, and give every
              athlete a real shot.
            </p>
            <p>
              Today, Sky Fight League is where the next generation of Canadian champions announces itself
              to the world. And we&rsquo;re just getting started.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-border bg-accent py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">What We Stand For</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">The Code</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {VALUES.map((value) => (
                <div key={value.title} className="relative border border-border bg-card p-8">
                  <span className="hazard-stripes absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
                  <value.icon className="h-8 w-8 text-primary" />
                  <h3 className="display mt-4 text-2xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-col items-center gap-4 border border-primary bg-primary/5 p-10 text-center">
              <h2 className="display text-4xl text-balance sm:text-5xl">Want to be part of it?</h2>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Fighters, crew, and partners &mdash; there&rsquo;s a place for everyone who refuses to sit
                in the crowd.
              </p>
              <Button
                render={<Link href="/opportunities" />}
                nativeButton={false}
                size="lg"
                className="mt-2 rounded-none font-bold uppercase tracking-widest"
              >
                View Opportunities <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
   
    </>
  )
}
