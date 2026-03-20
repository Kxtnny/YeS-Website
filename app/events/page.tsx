"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import { EVENTS } from "@/app/utils/events";

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming">("all");

  const filteredEvents =
    filter === "upcoming"
      ? EVENTS.filter((event) => event.tag === "upcoming")
      : EVENTS;

  return (
    <main className="min-h-[calc(100vh-var(--header-height))] bg-background flex flex-col items-center">
      <div className="flex w-full max-w-ui flex-col gap-10 px-6 py-10 md:px-10 md:py-12 lg:gap-12 lg:px-16">
        <div className="flex flex-col gap-4">
          <p className="text-sm md:text-base lg:text-lg font-semibold uppercase tracking-[0.2em] text-primary">
            Events
          </p>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Discover our Community Events
          </h1>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter("all")}
              className={`inline-flex rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                filter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary/20 bg-transparent text-foreground hover:bg-primary/10"
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter("upcoming")}
              className={`inline-flex rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                filter === "upcoming"
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary/20 bg-transparent text-foreground hover:bg-primary/10"
              }`}
            >
              Upcoming
            </button>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="flex flex-col gap-8">
              {filteredEvents.map((event) => (
                <article
                  key={`${event.title}-${event.date}`}
                  className="flex flex-col overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm xl:flex-row"
                >
                  <div className="relative flex h-72 w-full shrink-0 items-center justify-center bg-neutral-300 text-base font-medium text-neutral-700 xl:h-auto xl:w-[34%]">
                    {event.image ? (
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <span>No image</span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-6 p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                          {event.title}
                        </h2>
                        <span
                          className={`inline-flex shrink-0 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                            event.tag === "upcoming"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {event.tag}
                        </span>
                      </div>
                      <p className="text-base leading-7 text-foreground/80 md:text-lg">
                        {event.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 text-sm text-foreground/80 md:text-base">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 shrink-0 text-primary md:h-5 md:w-5" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CalendarDays className="h-4 w-4 shrink-0 text-primary md:h-5 md:w-5" />
                        <span>{event.date}</span>
                      </div>
                    </div>

                    {event.link ? (
                      <div className="pt-2">
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:text-base"
                        >
                          Read More
                        </a>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex justify-center py-12">
              <p className="text-center text-lg text-foreground/60">
                No events found for the selected filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
