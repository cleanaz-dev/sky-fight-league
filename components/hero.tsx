import Image from 'next/image'
import { MapPin, Calendar, Ticket } from 'lucide-react'
import { EVENT, MAIN_EVENT } from '@/lib/fight-data'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-accent pt-16">
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <Image
          src="/arena-smoke.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/60 via-accent/20 to-background" />
      </div>

      {/* Giant outlined watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[42%] -z-0 -translate-x-1/2 -translate-y-1/2 display text-stroke whitespace-nowrap text-[26vw] opacity-[0.06]"
      >
        FIGHT
      </span>

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-8 text-center">
          <span className="hazard-stripes h-2 w-16" aria-hidden="true" />
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-muted-foreground sm:text-sm">
            {EVENT.number} <span className="text-primary">/</span> {EVENT.title}
          </p>
          <span className="hazard-stripes h-2 w-16" aria-hidden="true" />
        </div>

        {/* Staredown */}
        <div className="grid flex-1 grid-cols-2 items-center gap-0 pt-6 md:pt-2">
          {/* Red corner */}
          <FighterColumn
            image="/fighter-red.png"
            name={MAIN_EVENT.red.name}
            nickname={MAIN_EVENT.red.nickname}
            record={MAIN_EVENT.red.record}
            side="red"
          />
          {/* White corner */}
          <FighterColumn
            image="/fighter-white.png"
            name={MAIN_EVENT.white.name}
            nickname={MAIN_EVENT.white.nickname}
            record={MAIN_EVENT.white.record}
            side="white"
          />

          {/* Center VS */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-24 w-24 items-center justify-center bg-primary shadow-[0_0_60px_rgba(220,38,38,0.55)] sm:h-32 sm:w-32">
              <span className="display text-4xl text-primary-foreground sm:text-6xl">VS</span>
            </div>
            <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-foreground sm:text-xs">
              {MAIN_EVENT.rounds} Rounds
            </p>
          </div>
        </div>

        {/* Details + CTA */}
        <div className="relative z-10 pb-10">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-primary">
            {MAIN_EVENT.weightClass}
          </p>
          <div className="mt-5 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" /> {EVENT.date}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> {EVENT.venue}, {EVENT.city}
              </span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="#fight-card" />}
                nativeButton={false}
                size="lg"
                className="rounded-none px-8 text-base font-bold uppercase tracking-widest"
              >
                <Ticket className="h-5 w-5" /> Get Tickets
              </Button>
              <Button
                render={<a href="#fight-card" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="rounded-none border-foreground/30 bg-transparent px-8 text-base font-bold uppercase tracking-widest hover:bg-foreground hover:text-background"
              >
                View Fight Card
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FighterColumn({
  image,
  name,
  nickname,
  record,
  side,
}: {
  image: string
  name: string
  nickname: string
  record: string
  side: 'red' | 'white'
}) {
  const isRed = side === 'red'
  return (
    <div className={`relative flex flex-col ${isRed ? 'items-start pr-8' : 'items-end pl-8'}`}>
      <div className="relative aspect-[3/4] w-full max-w-[22rem]">
        <Image
          src={image || '/placeholder.svg'}
          alt={`${name} "${nickname}"`}
          fill
          priority
          className={`object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] ${
            isRed ? '' : ''
          }`}
        />
      </div>
      <div className={`mt-1 w-full ${isRed ? 'text-left' : 'text-right'}`}>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary sm:text-xs">
          {isRed ? 'Red Corner' : 'White Corner'}
        </p>
        <h2 className="display text-3xl leading-none sm:text-5xl">{name}</h2>
        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:text-sm">
          &ldquo;{nickname}&rdquo; <span className="text-foreground">{record}</span>
        </p>
      </div>
    </div>
  )
}
