"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { LUMA_EVENTS_URL } from "@/lib/links";
import { cn } from "@/lib/utils";

export interface HeroSectionProps {
  className?: string;
}

const CTA_BASE =
  "inline-flex h-12 min-w-[12.5rem] items-center justify-center gap-1.5 rounded-full px-10 text-sm font-medium";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;
const VENTURES_DELAY = 0.38;
const VENTURES_DURATION = 1.05;
const CTA_DELAY = 0.72;
const CTA_DURATION = 0.95;

interface RevealLineProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

function RevealLine({
  children,
  delay = 0,
  duration = 0.75,
  className,
}: RevealLineProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={cn("overflow-hidden pb-1 sm:pb-2", className)}>
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration, delay, ease: REVEAL_EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface RevealFadeProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

function RevealFade({
  children,
  delay = 0,
  duration = 0.65,
  className,
}: RevealFadeProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration, delay, ease: REVEAL_EASE }}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-white",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
      />

      <section
        aria-labelledby="hero-heading"
        className="relative flex w-full min-h-0 flex-1 flex-col items-center justify-center px-6 py-10 md:px-12 md:py-12 lg:px-12 lg:py-6"
      >
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="relative z-10 flex w-full flex-col items-center text-center">
            <h1
              id="hero-heading"
              className="text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-950 sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.25rem]"
            >
              <RevealLine delay={0}>
                <span className="block">Turn your wild ideas into</span>
              </RevealLine>
              <RevealLine delay={VENTURES_DELAY} duration={VENTURES_DURATION}>
                <span className="block font-semibold text-primary">ventures</span>
              </RevealLine>
            </h1>

            <RevealFade
              delay={CTA_DELAY}
              duration={CTA_DURATION}
              className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:gap-4 lg:mt-7"
            >
              <Button
                asChild
                size="lg"
                className={cn(
                  CTA_BASE,
                  "group shadow-lg shadow-primary/10 transition-all hover:shadow-xl hover:shadow-primary/20"
                )}
              >
                <Link
                  href={LUMA_EVENTS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </Button>

              <Link
                href="/events"
                className={cn(
                  CTA_BASE,
                  "group bg-neutral-100 text-neutral-900 transition-colors hover:bg-neutral-200"
                )}
              >
                See Upcoming Events
                <ArrowUpRight
                  className="size-4 text-neutral-500 transition-colors group-hover:text-neutral-900"
                  aria-hidden="true"
                />
              </Link>
            </RevealFade>
          </div>
        </div>
      </section>
    </div>
  );
}
