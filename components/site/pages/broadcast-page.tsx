import {
  Tv,
  Globe2,
  Users,
  Radio,
  BadgeCheck,
  PlaySquare,
} from "lucide-react";

export function BroadcastPage() {
  return (
    <section
      id="broadcast"
      className="relative border-t border-border bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
            The Broadcast
          </p>

          <h2 className="display mt-3 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Sky Fight League{" "}
            <span className="text-primary">×</span>{" "}
            <span className="text-muted-foreground">Fight Network</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Fight Network will serve as the broadcast home of Sky Fight League,
            giving the inaugural event a platform dedicated to combat sports.
            For sponsors, the opportunity can extend beyond the 400–600 guests
            expected inside Demo Room.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Brand visibility can move from the cage and live experience into
            the television broadcast and additional content included in the
            final distribution agreement.
          </p>
        </div>

        {/* Broadcast Stats */}
        <div className="mt-12 grid border-y border-border sm:grid-cols-3">
          <div className="border-b border-border py-7 sm:border-b-0 sm:border-r sm:px-8">
            <div className="flex items-center gap-3">
              <Tv className="h-5 w-5 text-primary" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Traditional Television
              </p>
            </div>

            <p className="display mt-3 text-4xl text-primary sm:text-5xl">
              3M+
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Subscribers
            </p>
          </div>

          <div className="border-b border-border py-7 sm:border-b-0 sm:border-r sm:px-8">
            <div className="flex items-center gap-3">
              <Globe2 className="h-5 w-5 text-primary" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                International Distribution
              </p>
            </div>

            <p className="display mt-3 text-4xl text-primary sm:text-5xl">
              32
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Countries
            </p>
          </div>

          <div className="py-7 sm:px-8">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Reported Footprint
              </p>
            </div>

            <p className="display mt-3 text-4xl text-primary sm:text-5xl">
              43M+
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Television homes
            </p>
          </div>
        </div>

        {/* Sponsor Opportunity */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              For Sponsors
            </p>

            <h3 className="display mt-3 text-4xl sm:text-5xl">
              More than
              <br />
              <span className="text-primary">cage-side.</span>
            </h3>

            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              The broadcast creates another layer of visibility for brands
              attached to Sky Fight League. Your presence can extend beyond
              the room and into the content surrounding the event.
            </p>
          </div>

          {/* Right */}
          <div className="relative border border-border bg-card">
            <span
              className="hazard-stripes absolute inset-x-0 top-0 h-1.5"
              aria-hidden="true"
            />

            <div className="grid sm:grid-cols-2">
              {[
                {
                  icon: BadgeCheck,
                  title: "Cage Branding",
                  description:
                    "Branding designed with camera visibility in mind.",
                },
                {
                  icon: Users,
                  title: "Combat Audience",
                  description:
                    "Access to a dedicated combat sports audience.",
                },
                {
                  icon: Radio,
                  title: "Broadcast Integration",
                  description:
                    "Potential inclusion in graphics and sponsored segments.",
                },
                {
                  icon: PlaySquare,
                  title: "Additional Content",
                  description:
                    "Approved replays, highlights and social content.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="border-b border-border p-7 last:border-b-0 sm:border-r sm:p-8 sm:nth-[2]:border-r-0 sm:nth-[3]:border-b-0"
                  >
                    <Icon className="h-5 w-5 text-primary" />

                    <h4 className="mt-5 text-sm font-bold uppercase tracking-widest">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Network Association */}
        <div className="relative mt-8 overflow-hidden border border-border bg-accent">
          <span
            className="hazard-stripes absolute inset-x-0 top-0 h-1.5"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-background">
                <Tv className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  Broadcast Partner
                </p>

                <h3 className="display mt-2 text-3xl sm:text-4xl">
                  Fight Network
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  An established combat sports network providing the broadcast
                  platform for Sky Fight League.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <span className="inline-flex border border-primary/40 px-5 py-3 text-xs font-bold uppercase tracking-widest text-primary">
                Combat Sports
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 max-w-4xl text-[11px] leading-relaxed text-muted-foreground/70">
          Figures are based on publicly available Anthem Sports &amp;
          Entertainment materials and describe Fight Network&rsquo;s overall
          distribution footprint—not guaranteed viewership for Sky Fight
          League. Broadcast territories, scheduling, sponsor inventory and
          digital usage remain subject to network approval.
        </p>
      </div>
    </section>
  );
}