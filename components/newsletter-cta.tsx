'use client'

import { useState } from 'react'
import { ArrowRight, Check, Swords } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NewsletterCta() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="newsletter" className="relative overflow-hidden border-t border-border bg-primary py-20 text-primary-foreground sm:py-28">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 display whitespace-nowrap text-[24vw] leading-none text-primary-foreground/10"
      >
        SFL
      </span>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        {/* Newsletter */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary-foreground/70">
            Stay in the fight
          </p>
          <h2 className="display mt-3 text-5xl leading-none sm:text-6xl">
            Never miss <br />a knockout.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/80">
            Fight announcements, ticket presales, and behind-the-cage access &mdash; straight to your
            inbox.
          </p>

          {submitted ? (
            <div className="mt-8 flex items-center gap-3 border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-4">
              <Check className="h-5 w-5" />
              <p className="font-semibold uppercase tracking-wide">You&rsquo;re in the corner. Watch your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-12 flex-1 rounded-none border border-primary-foreground/40 bg-primary-foreground/10 px-4 text-base text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:outline-none"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 rounded-none bg-primary-foreground font-bold uppercase tracking-widest text-primary hover:bg-primary-foreground/90"
              >
                Sign Up <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>

        {/* Opportunity CTA */}
        <div className="border border-primary-foreground/30 bg-accent p-8 text-foreground sm:p-10">
          <Swords className="h-8 w-8 text-primary" />
          <h3 className="display mt-4 text-3xl sm:text-4xl">Think you&rsquo;ve got what it takes?</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We&rsquo;re always scouting fighters, corner staff, and event partners. If you want to build
            something in Canadian MMA, step up.
          </p>
          <Button
            render={<a href="/opportunities" />}
            nativeButton={false}
            size="lg"
            className="mt-6 rounded-none font-bold uppercase tracking-widest"
          >
            View Opportunities <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
