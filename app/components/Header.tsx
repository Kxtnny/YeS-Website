import dynamic from "next/dynamic";

import BrandLogo from "@/app/components/BrandLogo";
import MobileMenu from "@/app/components/MobileMenu";
import { NavLink } from "@/app/components/nav-link";
import { Button } from "@/components/ui/button";
import { LUMA_EVENTS_URL } from "@/lib/links";

const DesktopNav = dynamic(() => import("@/app/components/DesktopNav"), {
  ssr: true,
});

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-40 w-full bg-background">
      <div className="relative mx-auto flex h-20 w-full max-w-ui flex-row items-center justify-between gap-4 px-6 md:px-12">
        <div className="flex items-center gap-2">
          <BrandLogo />
          <DesktopNav />
        </div>

        <div className="flex items-center justify-end gap-4">
          <Button asChild className="hidden lg:inline-flex">
            <NavLink href={LUMA_EVENTS_URL}>Get Started</NavLink>
          </Button>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
