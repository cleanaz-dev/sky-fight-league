import { MapPin, Clock, Navigation } from 'lucide-react'
import { EVENT } from '@/lib/fight-data'
import { Button } from '@/components/ui/button'

export function AboutLocation() {
  return (
    <section id="about" className="relative border-t border-border bg-accent py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* About */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">The League</p>
            <h2 className="display mt-3 text-5xl sm:text-6xl">
              Built in <br />
              <span className="text-primary">Canada.</span> Feared everywhere.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Sky Fight League is Canada&rsquo;s premier mixed martial arts promotion. We put the
              country&rsquo;s hardest-hitting prospects and battle-tested veterans under one roof and one set
              of lights &mdash; no filler, no easy nights. Every card is a proving ground for the next
              generation of champions.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              From coast to coast, we&rsquo;re building the promotion that Canadian fight fans deserve.
            </p>

            <div className="mt-10 grid grid-cols-3 border-y border-border">
              {[
                { value: '12', label: 'Events' },
                { value: '80+', label: 'Athletes' },
                { value: '5', label: 'Provinces' },
              ].map((stat) => (
                <div key={stat.label} className="border-r border-border py-6 last:border-r-0">
                  <p className="display text-4xl text-primary sm:text-5xl">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div id="location" className="scroll-mt-20">
            <div className="relative h-full border border-border bg-card">
              <span className="hazard-stripes absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
              <div className="p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">Venue</p>
                <h3 className="display mt-3 text-4xl sm:text-5xl">{EVENT.venue}</h3>

                <dl className="mt-8 flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Address
                      </dt>
                      <dd className="mt-1 font-semibold">
                        400 Championship Way
                        <br />
                        {EVENT.city}, M5V 3K2
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Schedule
                      </dt>
                      <dd className="mt-1 font-semibold">{EVENT.doors}</dd>
                    </div>
                  </div>
                </dl>

                <Button
                  render={
                    <a
                      href="https://maps.google.com/?q=Toronto+Ontario+arena"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  nativeButton={false}
                  variant="outline"
                  className="mt-8 w-full rounded-none border-foreground/30 bg-transparent font-bold uppercase tracking-widest hover:bg-foreground hover:text-background"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
