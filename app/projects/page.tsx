"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { CAL_BOOKING_URL } from "@/lib/links";
import { PROJECTS, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

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

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3"
    >
      <div className="overflow-hidden rounded-lg bg-neutral-100">
        <img
          src={project.image}
          alt={project.name}
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            {project.name}
          </h3>
          <ArrowUpRight
            className="size-4 shrink-0 text-neutral-400 transition-colors group-hover:text-primary"
            aria-hidden="true"
          />
        </div>
        <p className="text-sm leading-relaxed text-neutral-500">
          {project.description}
        </p>
      </div>
    </a>
  );
}

export default function ProjectsPage() {
  return (
    <main className="flex flex-col">
      {/* Hero header */}
      <div className="relative w-full overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
        />
        <section
          aria-labelledby="projects-heading"
          className="relative mx-auto flex w-full max-w-ui flex-col items-center px-6 py-20 text-center md:px-12 md:py-28"
        >
          <h1
            id="projects-heading"
            className="text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-950 sm:text-5xl md:text-6xl lg:text-[3.75rem]"
          >
            <RevealLine delay={0.1}>
              <span className="block">We believe in</span>
            </RevealLine>
            <RevealLine delay={0.28} duration={1.05}>
              <span className="block text-primary">
                community driven projects
              </span>
            </RevealLine>
          </h1>

          <RevealFade
            delay={0.52}
            duration={0.8}
            className="mt-6 flex max-w-xl flex-col items-center gap-6"
          >
            <p className="text-base leading-relaxed text-neutral-500 sm:text-lg">
              If you&apos;re building a tool, platform, or initiative that
              supports students or founders, we&apos;d love to help get it seen.
            </p>

            <Button size="lg" asChild className="gap-2">
              <Link
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Feature Call
                <PhoneCall className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </RevealFade>
        </section>
      </div>

      {/* Projects grid */}
      <section
        aria-label="Community projects"
        className="mx-auto w-full max-w-ui px-6 pb-24 md:px-12 md:pb-32"
      >
        {PROJECTS.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-24 text-center">
            <p className="text-2xl font-semibold tracking-tight text-neutral-300">
              Projects coming soon
            </p>
            <p className="text-sm text-neutral-400">
              Check back later — we&apos;re gathering the best community builds.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
