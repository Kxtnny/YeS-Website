"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MomentumHero } from "@/components/programs/momentum-hero-warp";
import { MomentumTimeline } from "@/components/programs/momentum-timeline";
import {
  INCUBATOR_ORGANISER_GROUPS,
  type IncubatorOrganiser,
} from "@/lib/incubator";
import { CONTACT_MAILTO } from "@/lib/links";
import { cn } from "@/lib/utils";

function SectionHeading({
  id,
  title,
  description,
  className,
}: {
  id: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-12 max-w-2xl text-center", className)}>
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-neutral-500 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function OrganiserCard({ organiser }: { organiser: IncubatorOrganiser }) {
  return (
    <article className="flex items-start gap-3.5">
      {organiser.image ? (
        <img
          src={organiser.image}
          alt={organiser.name}
          className="size-14 shrink-0 rounded-full object-cover ring-1 ring-neutral-200 sm:size-16"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex size-14 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold text-neutral-400 ring-1 ring-neutral-200 sm:size-16"
        >
          {organiser.name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase())
            .join("")}
        </div>
      )}
      <div className="min-w-0 flex-1 pt-0.5">
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-semibold tracking-tight text-neutral-950 sm:text-base">
            {organiser.name}
          </p>
          {organiser.linkedin ? (
            <a
              href={organiser.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${organiser.name} on LinkedIn`}
              className="shrink-0 text-[#0A66C2] transition-opacity hover:opacity-70"
            >
              <LinkedInIcon className="size-3.5" />
            </a>
          ) : null}
        </div>
        <p className="mt-0.5 text-sm leading-snug text-primary">
          {organiser.title}
        </p>
      </div>
    </article>
  );
}

export default function IncubatorPage() {
  return (
    <main className="flex flex-col">
      <MomentumHero />

      <section
        id="program-timeline"
        aria-labelledby="timeline-heading"
        className="w-full scroll-mt-20 border-t border-neutral-100 bg-neutral-50/50"
      >
        <div className="mx-auto w-full max-w-ui px-6 py-24 md:px-12 md:py-32">
          <SectionHeading
            id="timeline-heading"
            title="Program timeline"
            description="Seven stages across four months — from validating the problem to launching in public."
            className="mb-6 md:mb-12"
          />
          <MomentumTimeline />
        </div>
      </section>

      <section
        aria-labelledby="organisers-heading"
        className="border-t border-neutral-100 bg-neutral-50/60"
      >
        <div className="mx-auto w-full max-w-ui px-6 py-24 md:px-12 md:py-32">
          <SectionHeading
            id="organisers-heading"
            title="Meet the organisers"
            description="The team running mentorship, curriculum, and community for this cohort."
          />
          <div className="flex flex-col gap-12 sm:gap-14">
            {INCUBATOR_ORGANISER_GROUPS.map((group) => (
              <div key={group.id}>
                <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">
                  {group.title}
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8 lg:grid-cols-3">
                  {group.organisers.map((organiser) => (
                    <OrganiserCard key={organiser.id} organiser={organiser} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-heading"
        className="border-t border-neutral-100 bg-neutral-950"
      >
        <div className="mx-auto flex w-full max-w-ui flex-col items-center gap-8 px-6 py-20 text-center md:px-12 md:py-28">
          <div className="flex max-w-2xl flex-col gap-4">
            <h2
              id="contact-heading"
              className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Interested in joining or sponsoring?
            </h2>
            <p className="text-base leading-relaxed text-neutral-400 sm:text-lg">
              Whether you want to build in the cohort or support the next
              generation of founders, we&apos;d love to hear from you.
            </p>
          </div>

          <Button
            size="lg"
            asChild
            className="gap-2 bg-white text-neutral-950 hover:bg-neutral-100"
          >
            <Link href={CONTACT_MAILTO}>
              Get in touch
              <Mail className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
