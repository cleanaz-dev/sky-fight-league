'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/fight-data'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2" aria-label="Sky Fight League home">
          <span className="flex h-8 w-8 items-center justify-center bg-primary text-primary-foreground display text-xl">
            S
          </span>
          <span className="display text-lg tracking-wide">
            Sky Fight <span className="text-primary">League</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            render={<a href="/#fight-card" />}
            nativeButton={false}
            className="rounded-none font-bold uppercase tracking-widest"
          >
            Get Tickets
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="flex flex-col px-4 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              render={<a href="/#fight-card" onClick={() => setOpen(false)} />}
              nativeButton={false}
              className="mt-4 rounded-none font-bold uppercase tracking-widest"
            >
              Get Tickets
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
