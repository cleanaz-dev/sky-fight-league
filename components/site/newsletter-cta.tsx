"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Swords, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitNewsletter } from "@/lib/actions/submit-newsletter";

/**
 * Renders the logo with a black and white offset phasing effect behind it.
 */
function PhasingLogo({ className = "" }: { className?: string }) {
  return (
    <div className="relative inline-flex items-center justify-center">
      <img
        src="/banner-logo.png"
        alt=""
        className={`absolute -left-[4px] -top-[4px] z-0 brightness-0 invert filter sm:-left-[8px] sm:-top-[8px] ${className}`}
        aria-hidden="true"
      />
      <img
        src="/banner-logo.png"
        alt=""
        className={`absolute left-[4px] top-[4px] z-0 opacity-80 brightness-0 filter sm:left-[8px] sm:top-[8px] ${className}`}
        aria-hidden="true"
      />
      <img
        src="/banner-logo.png"
        alt="Sky Fight League Logo"
        className={`relative z-10 ${className}`}
      />
    </div>
  );
}

export function NewsletterCta({ isLocked = true }: { isLocked?: boolean }) {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setError(null);

    startTransition(async () => {
      const result = await submitNewsletter(formData);
      if (result.success) {
        setSubmitted(true);
        setMessage(result.message ?? null);
      } else {
        setError(result.error ?? "Something went wrong. Please try again.");
      }
    });
  }

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden border-t border-border bg-primary py-20 text-primary-foreground sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-10 sm:opacity-15">
        <motion.div
          animate={{
            x: ["-2%", "2%", "-2%"],
            y: ["-1%", "1%", "-1%"],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <PhasingLogo className="w-[200vw] max-w-none object-contain sm:w-[130vw] lg:w-[100vw]" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary-foreground/70">
            {isLocked ? "Classified Access" : "Stay in the fight"}
          </p>

          <h2 className="mt-3 text-5xl leading-none display sm:text-6xl">
            {isLocked ? (
              <>
                Unlock the <br /> Card Early.
              </>
            ) : (
              <>
                Never miss <br /> a knockout.
              </>
            )}
          </h2>

          <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/80">
            {isLocked
              ? "Sign up for first access to ticket drops, classified card reveals, and VIP experiences before the general public."
              : "Fight announcements, ticket presales, and behind-the-cage access — straight to your inbox."}
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex items-center gap-3 border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-4"
            >
              <Check className="h-5 w-5 text-primary-foreground" />
              <p className="font-semibold uppercase tracking-wide">
                {message ?? "You're in the corner. Watch your inbox."}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3">
              <Label htmlFor="newsletter-name" className="sr-only">
                Full Name
              </Label>
              <Input
                id="newsletter-name"
                name="name"
                type="text"
                required
                placeholder="Fighter / Fan Name"
                className="h-12 w-full rounded-none border-primary-foreground/40 bg-primary-foreground/10 text-base text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:border-primary-foreground"
              />

              <div className="flex flex-col gap-3 sm:flex-row">
                <Label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </Label>
                <Input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="h-12 flex-1 rounded-none border-primary-foreground/40 bg-primary-foreground/10 text-base text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:border-primary-foreground"
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={isPending}
                  className="h-12 rounded-none bg-primary-foreground font-bold uppercase tracking-widest text-primary hover:bg-primary-foreground/90 disabled:opacity-80"
                >
                  {isPending ? (
                    <>
                      Processing <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      {isLocked ? "Lock It In" : "Sign Up"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>

              {error && (
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-foreground">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>

        <div className="border border-primary-foreground/30 bg-accent p-8 text-foreground shadow-2xl sm:p-10">
          <Swords className="h-8 w-8 text-primary" />

          <h3 className="mt-4 text-3xl display sm:text-4xl">
            Think you&rsquo;ve got what it takes?
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We&rsquo;re always scouting fighters, corner staff, and event
            partners. If you want to build something in Canadian MMA, step up.
          </p>

          <Button
            render={<a href="/opportunities" />}
            nativeButton={false}
            size="lg"
            className="mt-6 rounded-none font-bold uppercase tracking-widest"
          >
            View Opportunities
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}