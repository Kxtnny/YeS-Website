import { AboutUsSection } from "@/components/sections/about-us";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { PARTNERS } from "@/lib/partners";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex h-[calc(100svh-4.5rem)] min-h-0 flex-col">
        <HeroSection className="flex min-h-0 flex-1 flex-col" />
        <PartnersSection
          partners={PARTNERS}
          className="shrink-0 border-t-0 py-8 md:py-9 lg:py-7"
        />
      </div>
      <AboutUsSection />
      <ImpactSection />
      <CtaSection />
    </main>
  );
}
