"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { ABOUT_COMMUNITY_IMAGES } from "@/lib/about-images";
import { cn } from "@/lib/utils";

const ROTATING_WORDS = [
  "Founders",
  "Builders",
  "Creatives",
  "Innovators",
  "Dreamers",
] as const;

const WORD_CYCLE_MS = 2800;

const ABOUT_BODY_TEXT =
  "text-base leading-relaxed text-neutral-600 sm:text-lg md:leading-[1.7]";

export interface AboutUsSectionProps {
  className?: string;
}

interface CommunityImageCardProps {
  src: string;
  alt: string;
  priority?: boolean;
}

function CommunityImageCard({ src, alt, priority = false }: CommunityImageCardProps) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 shadow-md shadow-neutral-200/70 ring-1 ring-neutral-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:ring-primary/30">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 45vw, (max-width: 1024px) 220px, 260px"
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
}

function CommunityImageGrid() {
  return (
    <div
      className="grid w-full grid-cols-2 gap-3 sm:gap-4"
      aria-label="Community moments"
    >
      {ABOUT_COMMUNITY_IMAGES.map((image, index) => (
        <CommunityImageCard
          key={image.id}
          src={image.src}
          alt={image.alt}
          priority={index < 2}
        />
      ))}
    </div>
  );
}

function MeaningfulHighlight() {
  return (
    <span className="relative inline-block font-bold text-neutral-800">
      meaningful
      <span
        aria-hidden="true"
        className="absolute -bottom-1 left-0 h-[0.2rem] w-full rounded-full bg-primary"
      />
    </span>
  );
}

export function AboutUsSection({ className }: AboutUsSectionProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % ROTATING_WORDS.length);
    }, WORD_CYCLE_MS);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  const activeWord = ROTATING_WORDS[wordIndex];

  return (
    <section
      id="about-us"
      aria-labelledby="about-us-heading"
      className={cn(
        "relative w-full overflow-hidden border-b border-neutral-200 bg-white lg:flex lg:h-svh lg:min-h-0 lg:flex-col",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(171,46,46,0.05),transparent_60%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center gap-12 px-6 py-20 sm:py-24 md:gap-14 md:px-12 md:py-28 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-0">
        <div className="w-full flex-1 text-left lg:max-w-xl">
          <h2
            id="about-us-heading"
            className="text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.03em] text-neutral-950 sm:text-5xl md:text-6xl lg:text-[3.75rem]"
          >
            <span className="block sm:inline">We exist to support</span>{" "}
            <span
              className="relative mt-1 inline-flex h-[1.15em] min-w-[11.5ch] items-center justify-start overflow-hidden sm:mt-0"
              aria-live={prefersReducedMotion ? "off" : "polite"}
              aria-atomic="true"
            >
              {/* Invisible sizer prevents layout shift across word lengths */}
              <span
                aria-hidden="true"
                className="invisible font-semibold text-primary"
              >
                Innovators
              </span>

              <span className="absolute inset-0 flex items-center justify-start">
                {prefersReducedMotion ? (
                  <span className="text-primary">
                    {ROTATING_WORDS[0]}
                  </span>
                ) : (
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={activeWord}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="text-primary"
                    >
                      {activeWord}
                    </motion.span>
                  </AnimatePresence>
                )}
              </span>
            </span>
          </h2>

          <div className="mt-8 flex max-w-xl flex-col gap-8 sm:mt-10 sm:gap-10 md:mt-12 md:gap-12">
            <p className={ABOUT_BODY_TEXT}>
              We are a community for ambitious people who want to build something{" "}
              <MeaningfulHighlight />.
            </p>

            <p className={ABOUT_BODY_TEXT}>
              Whether you&apos;re launching a startup, creating a side project,
              pursuing a bold idea, or finding your first collaborators,
              we&apos;re here to help you take the next step.
            </p>
          </div>
        </div>

        <div className="w-full flex-1 lg:max-w-[34rem]">
          <CommunityImageGrid />
        </div>
      </div>
    </section>
  );
}
