"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

import { INCUBATOR_TIMELINE } from "@/lib/incubator";
import { cn } from "@/lib/utils";

const ITEM_WIDTH_CLASS = "w-[13.5rem] sm:w-[14.5rem]";
const LINE_END_CLASS =
  "right-[calc(13.5rem-6px)] sm:right-[calc(14.5rem-6px)]";

function DesktopTimelineContent() {
  return (
    <div className="relative w-max">
      <div className="relative mb-7 h-3">
        <div
          aria-hidden="true"
          className={cn(
            "absolute top-1/2 left-[6px] h-px -translate-y-1/2 bg-neutral-200",
            LINE_END_CLASS
          )}
        />

        <div className="relative z-10 flex">
          {INCUBATOR_TIMELINE.map((item) => {
            const isLaunch = item.id === "launch";

            return (
              <div
                key={item.id}
                className={cn("flex items-center", ITEM_WIDTH_CLASS)}
              >
                <span
                  className={cn(
                    "size-3 shrink-0 rounded-full",
                    isLaunch ? "bg-primary" : "bg-neutral-900"
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>

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

function MobileTimelineItem({
  item,
  index,
  progress,
  prefersReducedMotion,
}: {
  item: (typeof INCUBATOR_TIMELINE)[number];
  index: number;
  progress: MotionValue<number>;
  prefersReducedMotion: boolean;
}) {
  const isLaunch = item.id === "launch";
  const isLast = index === INCUBATOR_TIMELINE.length - 1;
  const step = index + 1;
  const total = INCUBATOR_TIMELINE.length;

  const stageStart = index / Math.max(total - 1, 1);
  const stageEnd = Math.min(1, (index + 0.35) / Math.max(total - 1, 1));

  const dotBackground = useTransform(
    progress,
    [stageStart - 0.02, stageStart, stageEnd],
    isLaunch
      ? ["rgb(212 212 212)", "#ab2e2e", "#ab2e2e"]
      : ["rgb(212 212 212)", "rgb(23 23 23)", "rgb(23 23 23)"]
  );

  const segmentStart = index / Math.max(total - 1, 1);
  const segmentEnd = (index + 1) / Math.max(total - 1, 1);
  const segmentProgress = useTransform(
    progress,
    [segmentStart, segmentEnd],
    [0, 1]
  );

  return (
    <li className="relative flex gap-5 pb-10 last:pb-0">
      {/* Connector runs through item padding so it meets the next dot */}
      {!isLast ? (
        <div
          aria-hidden="true"
          className="absolute top-5 bottom-0 left-[5.5px] w-px overflow-hidden bg-neutral-200"
        >
          {prefersReducedMotion ? (
            <div className="absolute inset-0 bg-neutral-900" />
          ) : (
            <motion.div
              className="absolute inset-x-0 top-0 origin-top bg-neutral-900"
              style={{
                height: "100%",
                scaleY: segmentProgress,
              }}
            />
          )}
        </div>
      ) : null}

      <div className="relative z-10 flex w-3 shrink-0 justify-center pt-1.5">
        <motion.span
          className="size-3 shrink-0 rounded-full"
          style={
            prefersReducedMotion
              ? {
                  backgroundColor: isLaunch ? "#ab2e2e" : "rgb(23 23 23)",
                }
              : { backgroundColor: dotBackground }
          }
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col pt-0.5">
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
            "mt-2 text-base font-semibold leading-snug tracking-tight",
            isLaunch ? "text-primary" : "text-neutral-950"
          )}
        >
          {item.title}
        </h3>

        <p className="mt-1 text-sm leading-relaxed text-neutral-500">
          {item.description}
        </p>
      </div>
    </li>
  );
}

function MobileVerticalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 45%"],
  });

  return (
    <div ref={containerRef} className="relative px-1">
      <ol className="flex flex-col">
        {INCUBATOR_TIMELINE.map((item, index) => (
          <MobileTimelineItem
            key={item.id}
            item={item}
            index={index}
            progress={scrollYProgress}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </ol>
    </div>
  );
}

export function MomentumTimeline() {
  return (
    <>
      <div className="md:hidden">
        <MobileVerticalTimeline />
      </div>

      <div className="hidden md:block">
        <div className="overflow-x-auto pb-3">
          <div className="mx-auto flex w-max min-w-full justify-center">
            <DesktopTimelineContent />
          </div>
        </div>
      </div>
    </>
  );
}
