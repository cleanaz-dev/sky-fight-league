import { NAV_LINKS } from '@/lib/fight-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="flex items-center gap-2" aria-label="Sky Fight League home">
            <span className="flex h-8 w-8 items-center justify-center bg-primary text-primary-foreground display text-xl">
              S
            </span>
            <span className="display text-lg tracking-wide">
              Sky Fight <span className="text-primary">League</span>
            </span>
          </a>

          <nav className="flex flex-wrap gap-x-8 gap-y-2" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
           
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Sky Fight League. All rights reserved.</p>
          <p>Toronto, Ontario &middot; skyfightleague.ca</p>
        </div>
      </div>
    </footer>
  )
}
