"use client";

import type { Partner } from "@/lib/partners";
import { cn } from "@/lib/utils";

export interface PartnersSectionProps {
  partners: Partner[];
  className?: string;
}

interface PartnerLogoProps {
  partner: Partner;
}

function PartnerLogo({ partner }: PartnerLogoProps) {
  return (
    <div className="group flex h-14 w-36 shrink-0 items-center justify-center sm:h-16 sm:w-40">
      <div
        className={cn(
          "relative h-10 w-full sm:h-12",
          partner.scale && "overflow-visible"
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={partner.image}
          alt={partner.name}
          style={partner.scale ? { transform: `scale(${partner.scale})` } : undefined}
          className="h-full w-full object-contain object-center opacity-60 transition-all duration-300 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}

interface MarqueeTrackProps {
  partners: Partner[];
  ariaHidden?: boolean;
}

function MarqueeTrack({ partners, ariaHidden = false }: MarqueeTrackProps) {
  return (
    <div
      className="flex w-max shrink-0 items-center gap-12 sm:gap-16"
      aria-hidden={ariaHidden}
    >
      {partners.map((partner) => (
        <PartnerLogo key={partner.id} partner={partner} />
      ))}
    </div>
  );
}

export function PartnersSection({ partners, className }: PartnersSectionProps) {
  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className={cn(
        "w-full overflow-hidden border-y border-neutral-200 bg-white py-12 md:py-14",
        className
      )}
    >
      <h2
        id="partners-heading"
        className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 lg:mb-5"
      >
        We have worked with
      </h2>

      <div
        className="mask-fade-x overflow-hidden"
        aria-label="Partner logos carousel"
        role="region"
      >
        <div className="flex w-max animate-marquee gap-12 sm:gap-16">
          <MarqueeTrack partners={partners} />
          <MarqueeTrack partners={partners} ariaHidden />
        </div>
      </div>
    </section>
  );
}
