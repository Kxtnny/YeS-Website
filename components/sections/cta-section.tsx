import Link from "next/link";
import { MoveRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CAL_BOOKING_URL, LUMA_EVENTS_URL } from "@/lib/links";
import { cn } from "@/lib/utils";

export interface CtaSectionProps {
  className?: string;
}

export function CtaSection({ className }: CtaSectionProps) {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className={cn("relative w-full overflow-hidden bg-white pb-16 md:pb-24", className)}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-6 pt-4 text-center sm:gap-10 sm:pt-6 md:px-12">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2
            id="cta-heading"
            className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl md:leading-[1.1]"
          >
            Ready to build something meaningful?
          </h2>
          <p className="text-base leading-relaxed text-neutral-600 sm:text-lg md:leading-[1.7]">
            We believe the best ideas don&apos;t need a slide deck to get started
            — they need someone willing to listen. Book a call, and let&apos;s
            figure out your next step together.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Button variant="outline" asChild className="gap-2">
            <Link
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Jump on a call
              <PhoneCall className="size-4" aria-hidden="true" />
            </Link>
          </Button>

          <Button asChild className="gap-2">
            <Link
              href={LUMA_EVENTS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our community now
              <MoveRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
