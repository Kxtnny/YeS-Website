"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin, PhoneCall } from "lucide-react";
import { Suspense, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { CAL_BOOKING_URL } from "@/lib/links";
import { OPPORTUNITIES, type Opportunity } from "@/lib/opportunities";
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

function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <a
      href={opportunity.applyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 sm:p-6"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          {opportunity.type}
        </span>
        {opportunity.remote ? (
          <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600">
            Remote-friendly
          </span>
        ) : null}
        {opportunity.tags?.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-neutral-950 transition-colors group-hover:text-primary">
              {opportunity.roleTitle}
            </h3>
            <p className="mt-0.5 text-sm font-medium text-neutral-600">
              {opportunity.companyName}
            </p>
          </div>
          <ArrowUpRight
            className="size-5 shrink-0 text-neutral-400 transition-colors group-hover:text-primary"
            aria-hidden="true"
          />
        </div>

        <div className="flex items-center gap-1.5 text-sm text-neutral-500">
          <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
          <span>{opportunity.location}</span>
        </div>

        <p className="text-sm leading-relaxed text-neutral-500">
          {opportunity.description}
        </p>
      </div>
    </a>
  );
}

function OpportunitiesGrid() {
  const searchParams = useSearchParams();
  const companyFilter = searchParams.get("company");
  const opportunities = companyFilter
    ? OPPORTUNITIES.filter(
        (opportunity) => opportunity.companyId === companyFilter
      )
    : OPPORTUNITIES;

  if (opportunities.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-24 text-center">
        <p className="text-2xl font-semibold tracking-tight text-neutral-300">
          {companyFilter
            ? "No open roles for this company"
            : "Opportunities coming soon"}
        </p>
        <p className="text-sm text-neutral-400">
          {companyFilter
            ? "Check back later or browse all opportunities."
            : "Check back later — we're gathering roles from founder-led teams."}
        </p>
        {companyFilter ? (
          <Button asChild variant="outline" className="mt-2">
            <Link href="/opportunities">View all opportunities</Link>
          </Button>
        ) : null}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {opportunities.map((opportunity) => (
        <OpportunityCard key={opportunity.id} opportunity={opportunity} />
      ))}
    </div>
  );
}

export default function OpportunitiesPage() {
  return (
    <main className="flex flex-col">
      <div className="relative w-full overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
        />
        <section
          aria-labelledby="opportunities-heading"
          className="relative mx-auto flex w-full max-w-ui flex-col items-center px-6 py-20 text-center md:px-12 md:py-28"
        >
          <h1
            id="opportunities-heading"
            className="text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-950 sm:text-5xl md:text-6xl lg:text-[3.75rem]"
          >
            <RevealLine delay={0.1}>
              <span className="block">Find your next</span>
            </RevealLine>
            <RevealLine delay={0.28} duration={1.05}>
              <span className="block text-primary">startup opportunity.</span>
            </RevealLine>
          </h1>

          <RevealFade
            delay={0.52}
            duration={0.8}
            className="mt-6 flex max-w-2xl flex-col items-center gap-6"
          >
            <p className="text-base leading-relaxed text-neutral-500 sm:text-lg">
              Discover roles, internships, projects, and founder-led teams hiring
              across Singapore and the world.
            </p>

            <Button size="lg" asChild className="gap-2">
              <Link
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share an Opportunity
                <PhoneCall className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </RevealFade>
        </section>
      </div>

      <section
        aria-label="Open opportunities"
        className="mx-auto w-full max-w-ui px-6 pb-24 md:px-12 md:pb-32"
      >
        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {OPPORTUNITIES.map((opportunity) => (
                <div
                  key={opportunity.id}
                  className="h-48 animate-pulse rounded-2xl border border-neutral-200 bg-neutral-100"
                  aria-hidden="true"
                />
              ))}
            </div>
          }
        >
          <OpportunitiesGrid />
        </Suspense>
      </section>
    </main>
  );
}
