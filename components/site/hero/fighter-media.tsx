"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Lock } from "lucide-react";

interface FighterMediaProps {
  image: string;
  video: string;
  name: string;
  side: "red" | "white";
  isLocked?: boolean;
}

export function FighterMedia({ image, video, name, side, isLocked = false }: FighterMediaProps) {
  const shadowColor = side === "red" ? "rgba(220,38,38,0.4)" : "rgba(255,255,255,0.2)";

  // === LOCKED STATE RENDER ===
  if (isLocked) {
    return (
      <div className="group relative aspect-[3/4] w-full max-w-[22rem] cursor-not-allowed overflow-hidden">
        <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <Image
            src={image || "/placeholder.svg"}
            alt="Classified Fighter"
            fill
            priority
            sizes="(max-width: 640px) 50vw, 22rem"
            className="object-contain object-bottom brightness-0 transition-all duration-75 group-hover:brightness-[0.1] group-hover:grayscale group-hover:sepia"
            style={{ filter: `drop-shadow(0 0 30px ${shadowColor}) brightness(0)` }}
          />
        </motion.div>

        {/* Lock Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/5 backdrop-blur-[2px] transition-all group-hover:bg-primary/10 group-hover:backdrop-blur-none">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-background/80 shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-transform duration-300 group-hover:scale-110">
            <Lock className="size-6 text-primary transition-colors group-hover:text-foreground" />
          </div>
          <span className="mt-4 absolute bottom-[35%] font-display text-sm font-bold uppercase tracking-[0.3em] text-primary opacity-0 transition-opacity duration-100 group-hover:opacity-100">
            Access Denied
          </span>
        </div>

        {/* Static Noise */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>
    );
  }

  // === UNLOCKED STATE (Original Video Crossfade Logic) ===
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
    if (!element || hasStartedRef.current || videoFinished || videoFailed) return;

    hasStartedRef.current = true;
    clearStartTimer();

    startTimerRef.current = setTimeout(async () => {
      const currentVideo = videoRef.current;
      if (!currentVideo) return;
      try {
        currentVideo.currentTime = 0;
        await currentVideo.play();
        setVideoVisible(true);
      } catch (error) {
        hasStartedRef.current = false;
        setVideoVisible(false);
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
      if (element) element.pause();
    };
  }, [clearStartTimer, video]);

  return (
    <div className="relative aspect-[3/4] w-full max-w-[22rem]">
      <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
        <Image src={image || "/placeholder.svg"} alt={name} fill priority sizes="(max-width: 640px) 50vw, 22rem" className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]" />
      </motion.div>

      <motion.video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        aria-label={`${name} fighter animation`}
        className="absolute inset-0 z-10 h-full w-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: videoVisible ? 1 : 0 }}
        transition={{ duration: 0.45 }}
        onLoadedData={startVideo}
        onCanPlay={startVideo}
        onPlay={() => setVideoVisible(true)}
        onEnded={() => { clearStartTimer(); setVideoVisible(false); setVideoFinished(true); }}
        onError={() => { clearStartTimer(); setVideoVisible(false); setVideoFailed(true); }}
      >
        <source src={video} type="video/mp4" />
      </motion.video>
    </div>
  );
}