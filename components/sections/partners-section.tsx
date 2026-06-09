"use client";

import Image from "next/image";

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
    <div className="group flex h-16 w-40 shrink-0 items-center justify-center px-6 transition-all duration-300 sm:h-20 sm:w-48">
      {partner.image ? (
        <Image
          src={partner.image}
          alt={partner.name}
          width={160}
          height={64}
          className="max-h-12 w-auto object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 sm:max-h-14"
        />
      ) : (
        <span className="text-lg font-bold tracking-tight text-neutral-500 grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 sm:text-xl">
          {partner.name}
        </span>
      )}
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
      className="flex w-max shrink-0 items-center"
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
        "w-full border-y border-neutral-200 bg-background py-12 md:py-16",
        className
      )}
    >
      <h2
        id="partners-heading"
        className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500"
      >
        Trusted by leading institutions
      </h2>

      <div
        className="mask-fade-x overflow-hidden"
        aria-label="Partner logos carousel"
        role="region"
      >
        <div className="flex w-max animate-marquee">
          <MarqueeTrack partners={partners} />
          <MarqueeTrack partners={partners} ariaHidden />
        </div>
      </div>
    </section>
  );
}
