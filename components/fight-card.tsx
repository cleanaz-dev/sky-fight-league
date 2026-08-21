import { Crown, Ticket } from 'lucide-react'
import { FIGHT_CARD, EVENT, type Bout } from '@/lib/fight-data'
import { Button } from '@/components/ui/button'
import { Countdown } from '@/components/countdown'

export function FightCard() {
  return (
    <section id="fight-card" className="relative border-t border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              {EVENT.number} &mdash; The Card
            </p>
            <h2 className="display mt-3 text-5xl sm:text-7xl">
              Fight <span className="text-stroke-primary">Card</span>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Five bouts. One night. Every athlete steps into the Sky cage with everything on the line.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <Countdown scheduledAt={EVENT.scheduledAt} />
            <Button
              render={<a href="#newsletter" />}
              nativeButton={false}
              className="w-full rounded-none font-bold uppercase tracking-widest sm:w-auto"
            >
              <Ticket className="h-4 w-4" /> Buy Tickets
            </Button>
          </div>
        </div>

        <ul className="mt-12 flex flex-col gap-3">
          {FIGHT_CARD.map((bout, i) => (
            <BoutRow key={bout.weightClass} bout={bout} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function BoutRow({ bout, index }: { bout: Bout; index: number }) {
  const title = bout.isTitle
  return (
    <li
      className={`group relative overflow-hidden border ${
        title ? 'border-primary bg-primary/5' : 'border-border bg-card'
      }`}
    >
      {title && <span className="hazard-stripes absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />}

      {/* Weight class banner (top, centered) */}
      <div className="flex items-center justify-center gap-1.5 border-b border-border/60 py-2">
        {title && <Crown className="h-3.5 w-3.5 text-primary" aria-hidden="true" />}
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
          {bout.weightClass} &middot; {bout.rounds} Rounds
        </span>
      </div>

      <div className="flex items-center gap-2 px-3 py-4 sm:gap-6 sm:px-8 sm:py-6">
        {/* Red fighter */}
        <div className="min-w-0 flex-1 text-right">
          <p className="display text-lg leading-none text-balance sm:text-3xl">{bout.red.name}</p>
          <p className="mt-1.5 truncate text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
            <span className="text-primary">{bout.red.record}</span>
            <span className="hidden sm:inline"> &middot; &ldquo;{bout.red.nickname}&rdquo;</span>
          </p>
        </div>

        {/* Center VS */}
        <div className="flex shrink-0 flex-col items-center">
          <span className="flex h-9 w-9 items-center justify-center bg-primary display text-sm text-primary-foreground sm:h-11 sm:w-11 sm:text-lg">
            VS
          </span>
        </div>

        {/* White fighter */}
        <div className="min-w-0 flex-1 text-left">
          <p className="display text-lg leading-none text-balance sm:text-3xl">{bout.white.name}</p>
          <p className="mt-1.5 truncate text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
            <span className="hidden sm:inline">&ldquo;{bout.white.nickname}&rdquo; &middot; </span>
            <span className="text-primary">{bout.white.record}</span>
          </p>
        </div>
      </div>

      <span className="pointer-events-none absolute bottom-1 right-2 display text-3xl text-foreground/[0.04] sm:text-6xl">
        {String(index + 1).padStart(2, '0')}
      </span>
    </li>
  )
}
