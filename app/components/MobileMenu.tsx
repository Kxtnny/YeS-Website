"use client";

import { Menu, MoveRight, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { NavLink } from "@/app/components/nav-link";
import { Button } from "@/components/ui/button";
import { LUMA_EVENTS_URL } from "@/lib/links";
import { NAVIGATION_ITEMS } from "@/lib/navigation";

const LG_BREAKPOINT = 1024;

export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= LG_BREAKPOINT) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, closeMenu]);

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="lg:hidden"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </Button>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full flex w-full flex-col gap-8 border-t border-neutral-200 bg-background px-6 py-4 shadow-lg md:px-12 lg:hidden"
        >
          {NAVIGATION_ITEMS.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              {item.href ? (
                <NavLink
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  <span>{item.title}</span>
                  <MoveRight
                    className="size-4 stroke-1 text-neutral-400"
                    aria-hidden="true"
                  />
                </NavLink>
              ) : (
                <>
                  <p className="text-lg font-medium text-foreground">
                    {item.title}
                  </p>
                  {item.items?.map((subItem) => (
                    <NavLink
                      key={subItem.title}
                      href={subItem.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between pl-4 transition-colors hover:text-primary"
                    >
                      <span className="text-neutral-500">{subItem.title}</span>
                      <MoveRight
                        className="size-4 stroke-1 text-neutral-400"
                        aria-hidden="true"
                      />
                    </NavLink>
                  ))}
                </>
              )}
            </div>
          ))}

          <Button asChild className="w-full">
            <NavLink href={LUMA_EVENTS_URL} onClick={closeMenu}>
              Get Started
            </NavLink>
          </Button>
        </nav>
      ) : null}
    </>
  );
}
