"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { MouseEvent } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(239, 68, 68, 0.12), transparent 80%)`;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <section
      aria-labelledby="hero-heading"
      onMouseMove={handleMouseMove}
      className={cn(
        "relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-secondary px-6 py-24 md:px-12",
        className
      )}
    >
      {/* Geometric mesh / grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[64px_64px] mask-[linear-gradient(to_bottom,black_20%,transparent_90%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(170,46,46,0.08)_0%,transparent_70%)]"
      />

      {/* Mouse-tracking spotlight */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: spotlightBackground }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-1.5 text-sm text-neutral-300">
          <Sparkles className="size-4 text-red-500" aria-hidden="true" />
          <span>Singapore&apos;s Fastest-Growing Youth Founder Ecosystem</span>
        </div>

        <h1
          id="hero-heading"
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="bg-linear-to-r from-red-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            Turn your raw idea into a market-ready reality.
          </span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          Join a hyper-active network of 500+ student builders, operators, and
          creators. We bridge the gap between inspiration and execution with
          corporate access, partner perks, and peer accountability.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group shadow-red-600/20 shadow-lg transition-shadow hover:shadow-xl hover:shadow-red-600/30"
          >
            <Link href="#ready-to-kickoff">
              Build with Us
              <ArrowRight
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="#partners">Explore Partners</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
