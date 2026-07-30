"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ACCEL_EASE = [0.75, 0, 0.95, 0.25] as const;
const FADE_EASE = [0.22, 1, 0.36, 1] as const;
const REVEAL_EASE = [0.2, 0.8, 0.2, 1] as const;

const BRAND_RED = "#ab2e2e";

const GRID_CLASS =
  "absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_80%)]";

/** Faster red streaks with mixed speeds */
const STREAKS = [
  { top: "3%", width: "22vw", height: 1, delay: 0, duration: 1.15, opacity: 0.55 },
  { top: "6%", width: "38vw", height: 1.5, delay: 0.04, duration: 0.85, opacity: 0.7 },
  { top: "9%", width: "14vw", height: 1, delay: 0.12, duration: 1.4, opacity: 0.45 },
  { top: "12%", width: "50vw", height: 2, delay: 0.02, duration: 0.7, opacity: 0.8 },
  { top: "15%", width: "26vw", height: 1, delay: 0.08, duration: 1.05, opacity: 0.6 },
  { top: "18%", width: "42vw", height: 1.5, delay: 0.18, duration: 0.9, opacity: 0.65 },
  { top: "21%", width: "16vw", height: 1, delay: 0.06, duration: 1.35, opacity: 0.4 },
  { top: "24%", width: "56vw", height: 2, delay: 0.14, duration: 0.65, opacity: 0.75 },
  { top: "27%", width: "30vw", height: 1, delay: 0.1, duration: 1.2, opacity: 0.55 },
  { top: "30%", width: "20vw", height: 1, delay: 0.22, duration: 0.8, opacity: 0.5 },
  { top: "33%", width: "48vw", height: 1.5, delay: 0.05, duration: 1.0, opacity: 0.7 },
  { top: "36%", width: "12vw", height: 1, delay: 0.16, duration: 1.45, opacity: 0.35 },
  { top: "39%", width: "60vw", height: 2, delay: 0.2, duration: 0.6, opacity: 0.85 },
  { top: "42%", width: "34vw", height: 1, delay: 0.08, duration: 1.1, opacity: 0.55 },
  { top: "45%", width: "24vw", height: 1, delay: 0.28, duration: 0.95, opacity: 0.5 },
  { top: "48%", width: "44vw", height: 1.5, delay: 0.12, duration: 0.75, opacity: 0.68 },
  { top: "51%", width: "18vw", height: 1, delay: 0.03, duration: 1.3, opacity: 0.42 },
  { top: "54%", width: "52vw", height: 2, delay: 0.18, duration: 0.7, opacity: 0.72 },
  { top: "57%", width: "28vw", height: 1, delay: 0.25, duration: 1.05, opacity: 0.58 },
  { top: "60%", width: "36vw", height: 1.5, delay: 0.07, duration: 0.88, opacity: 0.62 },
  { top: "63%", width: "15vw", height: 1, delay: 0.15, duration: 1.25, opacity: 0.4 },
  { top: "66%", width: "46vw", height: 2, delay: 0.1, duration: 0.72, opacity: 0.78 },
  { top: "69%", width: "32vw", height: 1, delay: 0.22, duration: 1.0, opacity: 0.55 },
  { top: "72%", width: "58vw", height: 1.5, delay: 0.05, duration: 0.68, opacity: 0.7 },
  { top: "75%", width: "22vw", height: 1, delay: 0.3, duration: 1.15, opacity: 0.48 },
  { top: "78%", width: "40vw", height: 1, delay: 0.14, duration: 0.82, opacity: 0.6 },
  { top: "81%", width: "18vw", height: 1, delay: 0.2, duration: 1.35, opacity: 0.38 },
  { top: "84%", width: "54vw", height: 2, delay: 0.08, duration: 0.7, opacity: 0.74 },
  { top: "87%", width: "26vw", height: 1, delay: 0.26, duration: 0.95, opacity: 0.52 },
  { top: "90%", width: "34vw", height: 1.5, delay: 0.12, duration: 1.1, opacity: 0.58 },
  { top: "93%", width: "20vw", height: 1, delay: 0.18, duration: 0.78, opacity: 0.45 },
  { top: "96%", width: "42vw", height: 1, delay: 0.24, duration: 1.05, opacity: 0.5 },
  { top: "5%", width: "10vw", height: 1, delay: 0.32, duration: 1.4, opacity: 0.35 },
  { top: "29%", width: "8vw", height: 1, delay: 0.35, duration: 0.9, opacity: 0.4 },
  { top: "50%", width: "62vw", height: 2, delay: 0.16, duration: 0.55, opacity: 0.8 },
  { top: "68%", width: "14vw", height: 1, delay: 0.34, duration: 1.2, opacity: 0.42 },
  { top: "85%", width: "48vw", height: 1.5, delay: 0.28, duration: 0.65, opacity: 0.68 },
  { top: "98%", width: "30vw", height: 1, delay: 0.36, duration: 1.0, opacity: 0.45 },
] as const;

const LINES_END =
  Math.max(...STREAKS.map((s) => s.delay + s.duration)) + 0.08;

const REVEAL_START = LINES_END;
const REVEAL_DURATION = 1.15;
const MOMENTUM_FADE_DELAY = REVEAL_START + REVEAL_DURATION * 0.58;
const DESCRIPTION_FADE_DELAY = MOMENTUM_FADE_DELAY + 0.55;
const LINE_DRAW_DELAY = DESCRIPTION_FADE_DELAY + 0.55;

function ProgramDescription({
  animateLine = false,
  lineDelay = 0,
}: {
  animateLine?: boolean;
  lineDelay?: number;
}) {
  return (
    <p className="max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
      Momentum is a four month incubator program designed for ambitious
      early-stage founders to validate their problem space, build products that
      customers want, and{" "}
      <span className="relative inline-block font-semibold text-neutral-700">
        launch with confidence
        {animateLine ? (
          <motion.span
            aria-hidden="true"
            className="absolute -bottom-1 left-0 h-[0.2rem] w-full origin-left rounded-full bg-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: lineDelay,
              duration: 0.65,
              ease: FADE_EASE,
            }}
          />
        ) : (
          <span
            aria-hidden="true"
            className="absolute -bottom-1 left-0 h-[0.2rem] w-full rounded-full bg-primary"
          />
        )}
      </span>
      .
    </p>
  );
}

function WarpLines() {
  return (
    <>
      <div className={GRID_CLASS} />
      {STREAKS.map((streak, index) => (
        <motion.div
          key={index}
          className="absolute left-0 rounded-full"
          style={{
            top: streak.top,
            height: streak.height,
            width: streak.width,
            backgroundColor: BRAND_RED,
          }}
          initial={{ x: "-30vw", opacity: 0 }}
          animate={{
            x: ["-30vw", "120vw"],
            opacity: [0, streak.opacity, streak.opacity, 0],
          }}
          transition={{
            duration: streak.duration,
            delay: streak.delay,
            ease: ACCEL_EASE,
            times: [0, 0.12, 0.78, 1],
          }}
        />
      ))}
    </>
  );
}

function CircularReveal() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20"
      style={{ backgroundColor: BRAND_RED }}
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{
        clipPath: [
          "circle(0% at 50% 50%)",
          "circle(150% at 50% 50%)",
          "circle(150% at 50% 50%)",
          "circle(0% at 50% 50%)",
        ],
      }}
      transition={{
        delay: REVEAL_START,
        duration: REVEAL_DURATION,
        ease: REVEAL_EASE,
        times: [0, 0.42, 0.58, 1],
      }}
    />
  );
}

export function MomentumHero() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  if (prefersReducedMotion) {
    return (
      <div className="relative flex min-h-[calc(100svh-5rem)] w-full flex-col overflow-hidden bg-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className={GRID_CLASS} />
        </div>
        <section
          aria-labelledby="momentum-heading"
          className="relative mx-auto flex w-full max-w-ui flex-1 flex-col items-center justify-center px-6 py-16 text-center md:px-12"
        >
          <h1
            id="momentum-heading"
            className="text-6xl font-semibold leading-none tracking-[-0.04em] text-neutral-950 sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          >
            Momentum
          </h1>
          <div className="mt-6 sm:mt-8">
            <ProgramDescription />
          </div>
        </section>
        <div className="relative flex justify-center pb-8">
          <a
            href="#program-timeline"
            aria-label="Scroll to program timeline"
            className="flex size-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 shadow-sm transition-colors hover:border-neutral-300 hover:text-neutral-800"
          >
            <ChevronDown className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[calc(100svh-5rem)] w-full flex-col overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <WarpLines />
      </div>

      <CircularReveal />

      <section
        aria-labelledby="momentum-heading"
        className="relative z-10 mx-auto flex w-full max-w-ui flex-1 flex-col items-center justify-center px-6 py-16 text-center md:px-12"
      >
        <div className="flex w-full flex-col items-center">
          <motion.h1
            id="momentum-heading"
            className="text-6xl font-semibold leading-none tracking-[-0.04em] text-neutral-950 sm:text-7xl md:text-8xl lg:text-[8.5rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: MOMENTUM_FADE_DELAY,
              ease: FADE_EASE,
            }}
          >
            Momentum
          </motion.h1>

          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: DESCRIPTION_FADE_DELAY,
              ease: FADE_EASE,
            }}
          >
            <ProgramDescription animateLine lineDelay={LINE_DRAW_DELAY} />
          </motion.div>
        </div>
      </section>

      <motion.div
        className="relative z-10 flex justify-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: LINE_DRAW_DELAY + 0.35,
          duration: 0.6,
          ease: FADE_EASE,
        }}
      >
        <a
          href="#program-timeline"
          aria-label="Scroll to program timeline"
          className="flex size-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 shadow-sm transition-colors hover:border-neutral-300 hover:text-neutral-800"
        >
          <ChevronDown className="size-5" aria-hidden="true" />
        </a>
      </motion.div>
    </div>
  );
}
