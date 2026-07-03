"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

import { NavLink } from "@/app/components/nav-link";

export default function BrandLogo() {
  const pathname = usePathname();

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "/");
  };

  return (
    <NavLink
      href="/"
      onClick={handleHomeClick}
      className="flex items-center gap-2 rounded-md px-2 py-1 transition-colors hover:bg-primary/5 hover:text-primary"
    >
      <Image
        src="/images/brand/yes-logo.svg"
        alt="YeS Logo"
        width={52}
        height={52}
        className="h-10 w-10 shrink-0 object-contain md:h-12 md:w-12"
      />
      <span className="text-xs font-semibold leading-tight text-foreground md:text-base lg:text-sm">
        Young Entrepreneurs
        <br />
        of Singapore
      </span>
    </NavLink>
  );
}
