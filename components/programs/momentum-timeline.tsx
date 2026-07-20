"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { INCUBATOR_TIMELINE } from "@/lib/incubator";
import { cn } from "@/lib/utils";

const ITEM_WIDTH_CLASS = "w-[13.5rem] sm:w-[14.5rem]";
// Line ends at the center of the last dot (not the end of the last column)
const LINE_END_CLASS = "right-[calc(13.5rem-6px)] sm:right-[calc(14.5rem-6px)]";

function TimelineContent({
  progress,
  prefersReducedMotion,
}: {
  progress?: MotionValue<number>;
  prefersReducedMotion: boolean;
}) {
  const total = INCUBATOR_TIMELINE.length;

  return (
    <div className="relative w-max">
      {/* Connected line + dots */}
      <div className="relative mb-7 h-3">
        {/* Base line: first dot center → last dot center */}
        <div
          aria-hidden="true"
          className={cn(
            "absolute top-1/2 left-[6px] h-px -translate-y-1/2 bg-neutral-200",
            LINE_END_CLASS
          )}
        />

        {/* Progress fill grows left → right with scroll */}
        {progress && !prefersReducedMotion ? (
          <motion.div
            aria-hidden="true"
            className={cn(
              "absolute top-1/2 left-[6px] h-px origin-left -translate-y-1/2 bg-neutral-900",
              LINE_END_CLASS
            )}
            style={{ scaleX: progress }}
          />
        ) : null}

        <div className="relative z-10 flex">
          {INCUBATOR_TIMELINE.map((item, index) => {
            const isLaunch = item.id === "launch";
            const stageAt = index / Math.max(total - 1, 1);

            return (
              <div
                key={item.id}
                className={cn("flex items-center", ITEM_WIDTH_CLASS)}
              >
                {progress && !prefersReducedMotion ? (
                  <MotionDot
                    progress={progress}
                    stageAt={stageAt}
                    isLaunch={isLaunch}
                  />
                ) : (
                  <span
                    className={cn(
                      "size-3 shrink-0 rounded-full",
                      isLaunch ? "bg-primary" : "bg-neutral-900"
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Stage copy */}
      <ol className="flex">
        {INCUBATOR_TIMELINE.map((item, index) => {
          const isLaunch = item.id === "launch";
          const step = index + 1;

          return (
            <li
              key={item.id}
              className={cn("flex shrink-0 flex-col", ITEM_WIDTH_CLASS)}
            >
              <p
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-[0.16em]",
                  isLaunch ? "text-primary" : "text-neutral-400"
                )}
              >
                {String(step).padStart(2, "0")}
              </p>

              <h3
                className={cn(
                  "mt-2 min-h-[3rem] max-w-[12rem] text-base font-semibold leading-snug tracking-tight",
                  isLaunch ? "text-primary" : "text-neutral-950"
                )}
              >
                {item.title}
              </h3>

              <p className="mt-1 max-w-[12rem] text-sm leading-relaxed text-neutral-500">
                {item.description}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function MotionDot({
  progress,
  stageAt,
  isLaunch,
}: {
  progress: MotionValue<number>;
  stageAt: number;
  isLaunch: boolean;
}) {
  const backgroundColor = useTransform(
    progress,
    [stageAt - 0.04, stageAt, stageAt + 0.01],
    isLaunch
      ? ["rgb(212 212 212)", "#ab2e2e", "#ab2e2e"]
      : ["rgb(212 212 212)", "rgb(23 23 23)", "rgb(23 23 23)"]
  );

  return (
    <motion.span
      className="size-3 shrink-0 rounded-full"
      style={{ backgroundColor }}
    />
  );
}

function MobileScrollTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);
  const prefersReducedMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const overflow = Math.max(0, track.scrollWidth - window.innerWidth + 32);
      setTravel(overflow);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className="overflow-x-auto pb-3">
        <TimelineContent prefersReducedMotion />
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="relative -mx-6 h-[200vh]">
      <div className="sticky top-20 flex h-[calc(100svh-5rem)] items-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="will-change-transform px-6 pr-10"
        >
          <TimelineContent
            progress={scrollYProgress}
            prefersReducedMotion={false}
          />
        </motion.div>
      </div>
    </div>
  );
}

export function MomentumTimeline() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <>
      <div className="md:hidden">
        <MobileScrollTimeline />
      </div>

      <div className="hidden md:block">
        <div className="overflow-x-auto pb-3">
          <div className="mx-auto flex w-max min-w-full justify-center">
            <TimelineContent prefersReducedMotion={prefersReducedMotion} />
          </div>
        </div>
      </div>
    </>
  );
}
