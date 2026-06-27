import { SingaporeHubMap } from "@/components/sections/singapore-hub-map";
import { cn } from "@/lib/utils";

export interface ImpactStat {
  value: string;
  label: string;
}

export interface ImpactSectionProps {
  className?: string;
  stats?: ImpactStat[];
}

const DEFAULT_STATS: ImpactStat[] = [
  { value: "1,000+", label: "Students Activated" },
  { value: "50+", label: "Founders Connected" },
  { value: "20+", label: "Ecosystem Partners" },
];

const IMPACT_HEADING_TYPO = "font-semibold tracking-tight";

const IMPACT_TEXT_ACCENT = "text-primary";

export function ImpactSection({
  className,
  stats = DEFAULT_STATS,
}: ImpactSectionProps) {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className={cn("relative w-full overflow-hidden bg-white", className)}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 pb-0 md:pt-28">
        <h2
          id="impact-heading"
          className={cn(
            "mx-auto max-w-4xl text-center text-4xl sm:text-5xl md:text-[3.25rem] md:leading-[1.08]",
            IMPACT_HEADING_TYPO,
            IMPACT_TEXT_ACCENT
          )}
        >
          The Hub for Singapore&apos;s Youth Founders
        </h2>

        <dl className="relative mt-14 border-y border-neutral-200/90 sm:mt-16 md:mt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
          />

          <div className="grid grid-cols-1 divide-y divide-neutral-200/90 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-6 py-10 text-center sm:px-8 sm:py-12 md:py-14"
              >
                <dt className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-[2.75rem] md:leading-none">
                  {stat.value}
                </dt>
                <dd
                  className={cn(
                    "mt-4 max-w-xs text-center text-xl leading-snug sm:mt-5 sm:text-2xl sm:leading-snug md:text-3xl md:leading-tight",
                    IMPACT_HEADING_TYPO,
                    IMPACT_TEXT_ACCENT
                  )}
                >
                  {stat.label}
                </dd>
              </div>
            ))}
          </div>
        </dl>
      </div>

      <div className="relative mt-0 w-full">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-8 pt-8 sm:pb-10 sm:pt-10 md:pb-12 md:pt-12">
          <div className="relative mx-auto h-[360px] w-full max-w-3xl sm:h-[440px] md:h-[520px] lg:h-[560px]">
            <SingaporeHubMap />
          </div>
        </div>
      </div>
    </section>
  );
}
