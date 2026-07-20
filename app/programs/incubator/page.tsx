"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MomentumHero } from "@/components/programs/momentum-hero-warp";
import { MomentumTimeline } from "@/components/programs/momentum-timeline";
import {
  INCUBATOR_ORGANISERS,
  INCUBATOR_PARTNERS,
  type IncubatorOrganiser,
  type IncubatorPartner,
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

function OrganiserCard({ organiser }: { organiser: IncubatorOrganiser }) {
  return (
    <article className="flex flex-col items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm shadow-neutral-200/50">
      {organiser.image ? (
        <img
          src={organiser.image}
          alt={organiser.name}
          className="size-20 rounded-full object-cover ring-1 ring-neutral-200"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex size-20 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold text-neutral-400 ring-1 ring-neutral-200"
        >
          {organiser.name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase())
            .join("")}
        </div>
      )}
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold tracking-tight text-neutral-950">
          {organiser.name}
        </p>
        <p className="text-sm font-medium text-primary">{organiser.title}</p>
      </div>
    </article>
  );
}

function PartnerCard({ partner }: { partner: IncubatorPartner }) {
  const content = (
    <>
      {partner.logo ? (
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          className="h-10 w-auto object-contain"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-12 w-full items-center justify-center rounded-lg bg-neutral-100 text-sm font-semibold text-neutral-400"
        >
          Logo
        </div>
      )}
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold tracking-tight text-neutral-950">
          {partner.name}
        </h3>
        <p className="text-sm leading-relaxed text-neutral-500">
          {partner.description}
        </p>
      </div>
    </>
  );

  if (partner.website) {
    return (
      <Link
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10"
      >
        {content}
      </Link>
    );
  }

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-200/50">
      {content}
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
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {INCUBATOR_ORGANISERS.map((organiser) => (
              <OrganiserCard key={organiser.id} organiser={organiser} />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="partners-heading"
        className="mx-auto w-full max-w-ui px-6 py-24 md:px-12 md:py-32"
      >
        <SectionHeading
          id="partners-heading"
          title="Partners"
          description="Companies working with us to provide software, tools, and assistance for founders in the program."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INCUBATOR_PARTNERS.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
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
