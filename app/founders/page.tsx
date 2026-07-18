"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import type { ReactNode } from "react";

import { TeamAvatarGroup } from "@/components/founders/team-avatar-group";
import { Button } from "@/components/ui/button";
import { ShinyText } from "@/components/ui/shiny-text";
import { CAL_BOOKING_URL } from "@/lib/links";
import {
  FOUNDER_COMPANIES,
  type FounderCompany,
} from "@/lib/founder-companies";
import { companyHasOpportunities } from "@/lib/opportunities";
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

function CompanyCard({ company }: { company: FounderCompany }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm shadow-neutral-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10">
      {company.bannerImage ? (
        <div className="overflow-hidden bg-neutral-100">
          <img
            src={company.bannerImage}
            alt={`${company.name} product banner`}
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="aspect-video w-full bg-neutral-100"
        />
      )}

      <div className="flex flex-col gap-6 p-5 sm:p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              {company.website ? (
                <Link
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/name inline-flex items-center gap-1.5 text-2xl font-semibold tracking-tight text-neutral-950 transition-colors hover:text-primary"
                >
                  {company.name}
                  <ArrowUpRight
                    className="size-5 text-neutral-400 transition-colors group-hover/name:text-primary"
                    aria-hidden="true"
                  />
                </Link>
              ) : (
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
                  {company.name}
                </h2>
              )}
              {company.tagline ? (
                <p className="mt-1 text-sm font-medium text-primary">
                  {company.tagline}
                </p>
              ) : null}
            </div>
            {companyHasOpportunities(company.id) ? (
              <Link
                href={`/opportunities?company=${company.id}`}
                className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/15"
              >
                Hiring
              </Link>
            ) : null}
          </div>

          {company.description ? (
            <p className="text-sm leading-relaxed text-neutral-500">
              {company.description}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 border-t border-neutral-200 pt-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Meet the team
          </span>
          <p className="text-xs text-neutral-400 sm:hidden">
            Tap a face to learn more about them
          </p>
          <TeamAvatarGroup members={company.team} />
        </div>
      </div>
    </article>
  );
}

export default function FoundersPage() {
  return (
    <main className="flex flex-col">
      <div className="relative w-full overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
        />
        <section
          aria-labelledby="founders-heading"
          className="relative mx-auto flex w-full max-w-ui flex-col items-center px-6 py-20 text-center md:px-12 md:py-28"
        >
          <h1
            id="founders-heading"
            className="text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-950 sm:text-5xl md:text-6xl lg:text-[3.75rem]"
          >
            <RevealLine delay={0.1}>
              <span className="block">Meet the companies of</span>
            </RevealLine>
            <RevealLine delay={0.28} duration={1.05}>
              <ShinyText className="inline-block">tomorrow.</ShinyText>
            </RevealLine>
          </h1>

          <RevealFade
            delay={0.52}
            duration={0.8}
            className="mt-6 flex max-w-2xl flex-col items-center gap-6"
          >
            <p className="text-base leading-relaxed text-neutral-500 sm:text-lg">
              If you&apos;re building one too, we&apos;d love to hear more about
              it.
            </p>

            <Button size="lg" asChild className="gap-2">
              <Link
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in Touch
                <PhoneCall className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </RevealFade>
        </section>
      </div>

      <section
        aria-label="Founder companies"
        className="mx-auto w-full max-w-ui px-6 pb-24 md:px-12 md:pb-32"
      >
        {FOUNDER_COMPANIES.length === 0 ? (
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 rounded-2xl border border-neutral-200 bg-white px-6 py-16 text-center shadow-sm shadow-neutral-200/60">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
                Founder companies coming soon
              </h2>
              <p className="text-sm leading-relaxed text-neutral-500 sm:text-base">
                We&apos;re curating the community-built companies and products
                that deserve to be seen.
              </p>
            </div>

            <Button asChild className="gap-2">
              <Link
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Feature Call
                <PhoneCall className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {FOUNDER_COMPANIES.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
