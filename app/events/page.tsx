import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PAST_EVENTS } from "@/lib/events";
import { LUMA_EVENTS_URL } from "@/lib/links";

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-ui px-6 py-24 md:px-12">
      <h2 className="max-w-xl text-3xl tracking-tighter md:text-5xl">
        Upcoming Events
      </h2>
      <br />

      <iframe
        src="https://luma.com/embed/calendar/cal-KjgCjhRxOmY4cCC/events"
        width="100%"
        height="400"
        title="YeS Events Calendar"
        className="rounded-lg border"
      />

      <a
        href={LUMA_EVENTS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
      >
        Sign up to be the first to know of upcoming events!
      </a>

      <section className="w-full py-20 lg:py-40">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="max-w-xl text-3xl tracking-tighter md:text-5xl">
              Previous Events
            </h2>

            <Button
              asChild
              className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              <Link href="/pastevents">View all events</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PAST_EVENTS.map((event) => (
              <div key={event.id} className="flex h-full flex-col gap-1">
                <div className="aspect-video overflow-hidden rounded-md bg-neutral-100">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="mt-4 min-h-10 text-xl tracking-tight">
                  {event.title}
                </h3>

                <p className="flex-1 text-base text-neutral-500">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
