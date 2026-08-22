"use client";

import Image from "next/image";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "motion/react";

import { Calendar, MapPin, Ticket } from "lucide-react";

import { EVENT, MAIN_EVENT } from "@/lib/fight-data";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-accent pt-16"
    >
      {/* =========================================================
          ATMOSPHERIC BACKGROUND
      ========================================================= */}

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

      {/* =========================================================
          GIANT OUTLINED WATERMARK
      ========================================================= */}

      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[26vw] opacity-[0.06] display text-stroke"
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 0.06,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        FIGHT
      </motion.span>

      {/* =========================================================
          MAIN HERO CONTAINER
      ========================================================= */}

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col px-4 sm:px-6">
        {/* =======================================================
            EVENT EYEBROW
        ======================================================= */}

        <HeroReveal y={-16} delay={0}>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-8 text-center">
            <motion.span
              className="hazard-stripes h-2 w-16"
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "left" }}
            />

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-muted-foreground sm:text-sm">
              {EVENT.number} <span className="text-primary">/</span>{" "}
              {EVENT.title}
            </p>

            <motion.span
              className="hazard-stripes h-2 w-16"
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "right" }}
            />
          </div>
        </HeroReveal>

        {/* =======================================================
            STAREDOWN
        ======================================================= */}

        <div className="relative grid flex-1 grid-cols-2 items-center gap-0 pt-6 md:pt-2">
          {/* =====================================================
              RED CORNER
          ===================================================== */}

          <HeroReveal
            x={-45}
            y={15}
            scale={0.96}
            delay={0.15}
            duration={0.9}
            className="relative z-10"
          >
            <FighterColumn
              image="/fighter-red.png"
              video="/fighter-white-loop.mp4"
              name={MAIN_EVENT.red.name}
              nickname={MAIN_EVENT.red.nickname}
              record={MAIN_EVENT.red.record}
              side="red"
            />
          </HeroReveal>

          {/* =====================================================
              WHITE CORNER
          ===================================================== */}

          <HeroReveal
            x={45}
            y={15}
            scale={0.96}
            delay={0.25}
            duration={0.9}
            className="relative z-10"
          >
            <FighterColumn
              image="/fighter-white.png"
              video="/fighter-red-loop.mp4"
              name={MAIN_EVENT.white.name}
              nickname={MAIN_EVENT.white.nickname}
              record={MAIN_EVENT.white.record}
              side="white"
            />
          </HeroReveal>

          {/* =====================================================
              CENTER VS
          ===================================================== */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <motion.div
              className="relative flex h-16 w-16 items-center justify-center bg-primary shadow-[0_0_60px_rgba(220,38,38,0.55)] sm:h-32 sm:w-32"
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: -8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="display text-3xl text-primary-foreground sm:text-6xl">
                VS
              </span>
            </motion.div>

            <HeroReveal y={10} delay={0.7}>
              <p className="mt-2 whitespace-nowrap bg-black px-2 py-1 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-white sm:mt-3 sm:bg-transparent sm:px-0 sm:py-0 sm:text-xs sm:tracking-[0.25em] sm:text-foreground">
                {MAIN_EVENT.rounds} Rounds
              </p>
            </HeroReveal>
          </div>
        </div>

        {/* =======================================================
            EVENT INFORMATION + CTA
        ======================================================= */}

        <div className="relative z-10 pb-10">
          <HeroReveal y={18} delay={0.55}>
            <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-primary">
              {MAIN_EVENT.weightClass}
            </p>
          </HeroReveal>

          <div className="mt-5 flex flex-col items-center gap-4">
            <HeroReveal y={18} delay={0.65}>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  {EVENT.date}
                </span>

                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {EVENT.venue}, {EVENT.city}
                </span>
              </div>
            </HeroReveal>

            <HeroReveal y={22} scale={0.96} delay={0.75}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  render={<a href="#fight-card" />}
                  nativeButton={false}
                  size="lg"
                  className="rounded-none px-8 text-base font-bold uppercase tracking-widest"
                >
                  <Ticket className="h-5 w-5" />
                  Get Tickets
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
            </HeroReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   FIGHTER COLUMN
================================================================ */

function FighterColumn({
  image,
  video,
  name,
  nickname,
  record,
  side,
}: {
  image: string;
  video: string;
  name: string;
  nickname: string;
  record: string;
  side: "red" | "white";
}) {
  const isRed = side === "red";

  return (
    <div
      className={`relative flex flex-col ${
        isRed ? "items-start pr-8" : "items-end pl-8"
      }`}
    >
      <FighterMedia image={image} video={video} name={name} />

      <div className={`mt-1 w-full ${isRed ? "text-left" : "text-right"}`}>
        <HeroReveal y={12} delay={0.5} duration={0.55}>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary sm:text-xs">
            {isRed ? "Red Corner" : "White Corner"}
          </p>
        </HeroReveal>

        <HeroReveal y={18} delay={0.58} duration={0.6}>
          <h2 className="display text-3xl leading-none sm:text-5xl">
            {name}
          </h2>
        </HeroReveal>

        <HeroReveal y={12} delay={0.66} duration={0.55}>
          <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm sm:tracking-widest">
            &ldquo;{nickname}&rdquo;{" "}
            <span className="text-[8px] text-foreground sm:text-sm">
              {record}
            </span>
          </p>
        </HeroReveal>
      </div>
    </div>
  );
}

/* ===============================================================
   FIGHTER MEDIA
================================================================ */

function FighterMedia({
  image,
  video,
  name,
}: {
  image: string;
  video: string;
  name: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const startTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasStartedRef = useRef(false);

  const [videoVisible, setVideoVisible] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const clearStartTimer = useCallback(() => {
    if (startTimerRef.current !== null) {
      clearTimeout(startTimerRef.current);
      startTimerRef.current = null;
    }
  }, []);

  const startVideo = useCallback(() => {
    const element = videoRef.current;

    if (
      !element ||
      hasStartedRef.current ||
      videoFinished ||
      videoFailed
    ) {
      return;
    }

    hasStartedRef.current = true;
    clearStartTimer();

    startTimerRef.current = setTimeout(async () => {
      const currentVideo = videoRef.current;

      if (!currentVideo) {
        return;
      }

      try {
        currentVideo.currentTime = 0;
        await currentVideo.play();

        // Only reveal the video after playback actually starts.
        setVideoVisible(true);
      } catch (error) {
        hasStartedRef.current = false;
        setVideoVisible(false);

        console.warn(`Could not autoplay ${video}:`, error);
      }
    }, 1100);
  }, [clearStartTimer, video, videoFailed, videoFinished]);

  useEffect(() => {
    const element = videoRef.current;

    clearStartTimer();
    hasStartedRef.current = false;
    setVideoVisible(false);
    setVideoFinished(false);
    setVideoFailed(false);

    if (element) {
      element.pause();
      element.currentTime = 0;
      element.load();
    }

    return () => {
      clearStartTimer();

      if (element) {
        element.pause();
      }
    };
  }, [clearStartTimer, video]);

  function handleVideoEnd() {
    clearStartTimer();
    setVideoVisible(false);
    setVideoFinished(true);
  }

  function handleVideoError() {
    clearStartTimer();
    setVideoVisible(false);
    setVideoFailed(true);
  }

  return (
    <div className="relative aspect-[3/4] w-full max-w-[22rem]">
      {/* The image remains visible underneath the video. */}

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          priority
          sizes="(max-width: 640px) 50vw, 22rem"
          className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        />
      </motion.div>

      {/* The <source> type helps the browser select/validate the file. */}

      <motion.video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        aria-label={`${name} fighter animation`}
        className="absolute inset-0 z-10 h-full w-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: videoVisible ? 1 : 0 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        onLoadedData={startVideo}
        onCanPlay={startVideo}
        onPlay={() => setVideoVisible(true)}
        onEnded={handleVideoEnd}
        onError={handleVideoError}
      >
        <source src={video} type="video/mp4" />
      </motion.video>
    </div>
  );
}

/* ===============================================================
   HERO REVEAL
================================================================ */

function HeroReveal({
  children,
  delay = 0,
  y = 20,
  x = 0,
  scale = 1,
  duration = 0.7,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
        x,
        scale,
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}