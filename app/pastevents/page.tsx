import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ADDITIONAL_PAST_EVENTS, PAST_EVENTS } from "@/lib/events";

export default function PastEventsPage() {
  return (
    <main className="mx-auto max-w-ui px-6 py-16 md:px-12 md:py-24">
      <Link
        href="/events"
        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to events
      </Link>

      <div className="mt-8">
        <h1 className="max-w-xl text-3xl tracking-tighter md:text-5xl">
          Past Events
        </h1>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {PAST_EVENTS.map((event) => (
          <div key={event.id} className="flex h-full flex-col gap-1">
            <div className="aspect-video overflow-hidden rounded-md bg-neutral-100">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover"
              />
            </div>

            <h2 className="mt-4 min-h-10 text-xl tracking-tight">
              {event.title}
            </h2>

            <p className="flex-1 text-base text-neutral-500">
              {event.description}
            </p>
          </div>
        ))}

        {ADDITIONAL_PAST_EVENTS.map((event) => (
          <div key={event.id} className="flex h-full flex-col gap-1">
            <div className="aspect-video overflow-hidden rounded-md bg-neutral-100">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover"
              />
            </div>

            <h2 className="mt-4 min-h-10 text-xl tracking-tight">
              {event.title}
            </h2>

            {event.description ? (
              <p className="flex-1 text-base text-neutral-500">
                {event.description}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </main>
  );
}
