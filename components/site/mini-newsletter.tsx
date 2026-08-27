"use client";

import { useState, useTransition, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitNewsletter } from "@/lib/actions/submit-newsletter";

export function MiniNewsletter() {
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) return;

    setError(null);

    const formData = new FormData();
    formData.set("name", "Newsletter Subscriber");
    formData.set("email", email);

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
    <section className="relative overflow-hidden border-y border-border bg-black py-10 sm:py-12">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 select-none text-[14rem] font-black leading-none text-white/[0.025]"
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        SFL
      </motion.div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
            Stay in the fight
          </p>

          <h2 className="display mt-2 text-3xl text-white sm:text-4xl">
            Don&rsquo;t miss what&rsquo;s next.
          </h2>

          <p className="mt-2 max-w-md text-sm text-white/50">
            Fight announcements, tickets and Sky Fight League updates.
          </p>
        </div>

        <div className="w-full md:max-w-md">
          {submitted ? (
            <div className="flex h-12 items-center gap-3 border border-white/20 bg-white/[0.04] px-4">
              <Check className="h-4 w-4 text-primary" />

              <p className="text-xs font-bold uppercase tracking-widest text-white">
                {message ?? "You're in the corner."}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 sm:flex-row"
            >
              <Label htmlFor="mini-newsletter-email" className="sr-only">
                Email address
              </Label>

              <Input
                id="mini-newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-12 min-w-0 flex-1 rounded-none border-white/20 bg-white/[0.04] text-sm text-white placeholder:text-white/30 focus-visible:border-primary"
              />

              <Button
                type="submit"
                disabled={isPending}
                className="h-12 rounded-none bg-primary px-6 font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 disabled:opacity-80"
              >
                {isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Sign Up
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}

          {error && (
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-red-400">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}