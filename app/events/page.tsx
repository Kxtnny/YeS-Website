import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";

type Event = {
  image: string | null;
  title: string;
  description: string;
  link: string | null;
  date: string;
  location: string;
};

const EVENTS: Event[] = [
  {
    image: "/events/founder-centric-mixer.jpg",
    title: "First Founder-Centric Mixer",
    description:
      "Do you have a great idea, but somehow still feel stuck? At YeS that's exactly who these mixers are built for: young entrepreneurs across Singapore who are still pre-funding, pre-fame, but serious about their idea. YeS co-hosted this founder-only room (with our invite only community: The Collective) where founders could swap ideas, share struggles, and build connections with other ambitious people.",
    link: "https://www.linkedin.com/posts/shrujan-beesetty_do-you-have-a-great-idea-but-somehow-still-ugcPost-7405232419722870785-rmjL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFUoomsBTNPyF7QOnjE-wjvRk1eQrzC8gus",
    date: "8 Jan 2026",
    location: "Open Sourced Cafe, Singapore",
  },
  {
    image: "/events/student-founder-pitch-night.jpg",
    title: "Student Founder Pitch Night",
    description:
      "An evening showcasing student-led and youth-led startups building in Singapore. ​Join us at BLOCK71 for a fast-paced pitch night featuring live startup pitches, candid feedback from experienced founders and investors, and relaxed networking with fellow builders.",
    link: "https://luma.com/6kh14jwj",
    date: "16 Jan 2026",
    location: "BLOCK71, Singapore",
  },
  
];

export default function EventsPage() {
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
          {EVENTS.map((event) => (
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
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    {event.title}
                  </h2>
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
      </div>
    </main>
  );
}
