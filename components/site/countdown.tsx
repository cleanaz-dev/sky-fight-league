'use client'

import { useEffect, useState } from 'react'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now())
  const totalSeconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

export function Countdown({ scheduledAt }: { scheduledAt: string }) {
  const target = new Date(scheduledAt).getTime()
  // Start null so server and first client render match, avoiding hydration mismatch.
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(getTimeLeft(target))
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const isLive = time !== null && time.days + time.hours + time.minutes + time.seconds === 0

  const units: { label: string; value: number }[] = [
    { label: 'Days', value: time?.days ?? 0 },
    { label: 'Hrs', value: time?.hours ?? 0 },
    { label: 'Min', value: time?.minutes ?? 0 },
    { label: 'Sec', value: time?.seconds ?? 0 },
  ]

  if (isLive) {
    return (
      <div className="flex items-center gap-3 border border-primary bg-primary px-5 py-4">
        <span className="h-3 w-3 animate-pulse rounded-full bg-primary-foreground" aria-hidden="true" />
        <span className="display text-2xl text-primary-foreground sm:text-3xl">Live Now</span>
      </div>
    )
  }

  return (
    <div>
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
        Fight Night Countdown
      </p>
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2" role="timer" aria-label="Time until first bout">
        {units.map((u) => (
          <div
            key={u.label}
            className="flex flex-col items-center border border-border bg-card px-1 py-2.5 sm:px-3 sm:py-3"
          >
            <span className="display text-3xl leading-none tabular-nums sm:text-5xl">
              {String(u.value).padStart(2, '0')}
            </span>
            <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
