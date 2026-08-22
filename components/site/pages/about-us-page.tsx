import Link from "next/link";
import { ArrowLeft, Flame, Shield, Trophy, ArrowRight, Users, Video, Radio } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata = {
  title: "About Us | Sky Fight League",
  description:
    "Sky Fight League is building a new Canadian combat-sports property around athletes, live energy, original content and the fight fans who make it all possible.",
};

const VALUES = [
  {
    icon: Flame,
    title: "The Fight Comes First",
    desc: "We are here to create meaningful matchups, real moments and an environment where athletes can test themselves under the lights.",
  },
  {
    icon: Shield,
    title: "Athletes Matter",
    desc: "Fighters are not just names on a card. We want to build a platform where athletes are respected, developed and given an opportunity to grow.",
  },
  {
    icon: Trophy,
    title: "Built in Canada",
    desc: "Canada has no shortage of talent. Sky Fight League exists to give that talent a stage, a story and an audience at home.",
  },
];

const WHAT_WE_BUILD = [
  {
    icon: Radio,
    title: "Live Events",
    desc: "High-energy fight nights built around athletes, competition and an atmosphere fans remember.",
  },
  {
    icon: Users,
    title: "Athlete Opportunities",
    desc: "A platform for Canadian fighters and the people behind them to grow alongside the league.",
  },
  {
    icon: Video,
    title: "Original Content",
    desc: "The fight doesn't start when the cage door closes. We want to tell the stories, personalities and moments behind every event.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-background pt-16">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative overflow-hidden border-b border-border bg-accent py-24 sm:py-32">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap display text-[24vw] text-stroke opacity-[0.05]"
          >
            SFL
          </span>

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
                About Sky Fight League
              </p>

              <h1 className="display mt-4 text-6xl leading-[0.9] text-balance sm:text-8xl lg:text-9xl">
                Built for the
                <br />
                <span className="text-primary">next fight.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Sky Fight League is a new Canadian combat-sports property built
                around athletes, live energy and original content. We are
                creating something from the ground up — and inviting fighters,
                fans, partners and creators to build it with us.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
              <span className="text-primary">Canadian MMA</span>
              <span className="h-px w-8 bg-border" />
              <span>Live Events</span>
              <span className="h-px w-8 bg-border" />
              <span>Original Content</span>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO / MISSION
        ========================================================= */}
        <section className="border-b border-border bg-background py-20 sm:py-28">
          <div className="mx-auto grid max-w-5xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
                Why We Exist
              </p>

              <h2 className="display mt-3 text-4xl leading-none sm:text-6xl">
                There is more
                <br />
                <span className="text-stroke-primary">to build.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Canada has incredible combat-sports talent. Fighters train
                every day, gyms develop the next generation and communities
                continue to produce athletes capable of competing at the
                highest level.
              </p>

              <p>
                Sky Fight League was created to give that talent another place
                to compete, another audience to reach and another story to
                tell.
              </p>

              <p>
                But we are not looking to simply put another fight card on a
                calendar. We want to build a property that people can follow —
                from the athletes stepping into the cage to the teams,
                personalities and stories surrounding them.
              </p>

              <p className="font-semibold text-foreground">
                This is the beginning of something. And that is exactly what
                makes it exciting.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHAT WE'RE BUILDING
        ========================================================= */}
        <section className="border-t border-border bg-accent py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              More Than A Fight Card
            </p>

            <h2 className="display mt-3 text-4xl sm:text-6xl">
              We&rsquo;re building
              <br />
              <span className="text-primary">the whole experience.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              The cage is at the center of everything, but the league extends
              far beyond fight night. Our goal is to connect athletes, fans,
              media and partners through an experience that continues before,
              during and after the event.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {WHAT_WE_BUILD.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="relative border border-border bg-card p-8"
                  >
                    <span
                      className="hazard-stripes absolute inset-x-0 top-0 h-1.5"
                      aria-hidden="true"
                    />

                    <Icon className="h-8 w-8 text-primary" />

                    <h3 className="display mt-5 text-2xl sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            STORY
        ========================================================= */}
        <section className="border-b border-border bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="flex items-center gap-4">
              <span className="hazard-stripes h-2 w-16" aria-hidden="true" />

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
                The Story
              </p>
            </div>

            <h2 className="display mt-6 text-5xl leading-[0.95] sm:text-7xl">
              Start at the
              <br />
              <span className="text-primary">beginning.</span>
            </h2>

            <div className="mt-10 grid gap-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Sky Fight League is being built from the ground up with a
                simple belief: Canadian fighters deserve a stage that feels
                like it belongs to them.
              </p>

              <p>
                That means creating events where the athletes are the
                attraction, the crowd feels every moment and the production
                makes the entire night feel bigger than the individual
                matchups.
              </p>

              <p>
                It also means creating content that gives fans a reason to
                care about the people behind the gloves. The training. The
                personalities. The rivalries. The sacrifices. The moments that
                happen before anyone ever hears the opening bell.
              </p>

              <p>
                Our first chapter is being written now. Every event, every
                athlete and every piece of content becomes part of that
                foundation.
              </p>

              <p className="border-l-2 border-primary pl-6 font-semibold text-foreground">
                We are not trying to recreate what already exists.
                <br />
                We are building Sky Fight League.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            VALUES
        ========================================================= */}
        <section className="border-t border-border bg-accent py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              What We Stand For
            </p>

            <h2 className="display mt-3 text-4xl sm:text-6xl">
              The <span className="text-stroke-primary">Code.</span>
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {VALUES.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="relative border border-border bg-card p-8"
                  >
                    <span
                      className="hazard-stripes absolute inset-x-0 top-0 h-1.5"
                      aria-hidden="true"
                    />

                    <Icon className="h-8 w-8 text-primary" />

                    <h3 className="display mt-5 text-2xl sm:text-3xl">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {value.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            THE PEOPLE / COMMUNITY
        ========================================================= */}
        <section className="border-t border-border bg-background py-20 sm:py-28">
          <div className="mx-auto grid max-w-5xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
                It Takes A Team
              </p>

              <h2 className="display mt-3 text-4xl leading-none sm:text-6xl">
                The cage is
                <br />
                <span className="text-primary">just the center.</span>
              </h2>
            </div>

            <div>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                A fight promotion is bigger than the two athletes who step
                through the door. It takes fighters, coaches, gyms, officials,
                production crews, photographers, videographers, partners,
                sponsors, media and — most importantly — fans.
              </p>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Sky Fight League is being built as a community. Everyone has a
                role in making the experience bigger, louder and more
                memorable.
              </p>

              <Button
                render={<Link href="/opportunities" />}
                nativeButton={false}
                size="lg"
                className="mt-8 rounded-none font-bold uppercase tracking-widest"
              >
                Get Involved
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* =========================================================
            BIG CLOSING STATEMENT
        ========================================================= */}
        <section className="relative overflow-hidden border-t border-border bg-primary py-24 text-primary-foreground sm:py-32">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap display text-[28vw] leading-none text-primary-foreground/10"
          >
            SFL
          </span>

          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary-foreground/70">
              The Beginning
            </p>

            <h2 className="display mt-4 text-5xl leading-[0.9] sm:text-7xl lg:text-8xl">
              The next chapter
              <br />
              starts <span className="text-primary-foreground/60">now.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
              Sky Fight League is only getting started. The athletes are
              coming. The fights are coming. The stories are coming. We want
              you there when the doors open.
            </p>

            <Button
              render={<Link href="/opportunities" />}
              nativeButton={false}
              size="lg"
              className="mt-9 rounded-none bg-primary-foreground font-bold uppercase tracking-widest text-primary hover:bg-primary-foreground/90"
            >
              Be Part Of It
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}