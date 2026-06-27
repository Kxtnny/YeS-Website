"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MoveRight, X } from "lucide-react";
import { useState, type MouseEvent, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LUMA_EVENTS_URL } from "@/lib/links";
import { NAVIGATION_ITEMS, type NavigationItem } from "@/lib/navigation";

function isExternalHref(href: string) {
  return href.startsWith("http");
}

interface NavLinkProps {
  href: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
}

function NavLink({ href, className, onClick, children }: NavLinkProps) {
  const external = isExternalHref(href);

  if (external) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function BrandLogo({ onClick }: { onClick?: (event: MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <NavLink
      href="/"
      onClick={onClick}
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

function DesktopDropdownPanel({ item }: { item: NavigationItem }) {
  if (!item.items?.length) {
    return null;
  }

  return (
    <NavigationMenuContent className="!w-[450px] p-4">
      <div className="grid grid-cols-2 items-start gap-4">
        <div className="flex flex-col">
          <p className="text-base font-medium text-foreground">{item.title}</p>
          <p className="mt-1 text-sm text-neutral-500">{item.description}</p>
        </div>
        <div className="flex flex-col text-sm">
          {item.items.map((subItem) => (
            <NavigationMenuLink key={subItem.title} asChild>
              <NavLink
                href={subItem.href}
                className="flex flex-row items-center justify-between rounded px-4 py-2 transition-colors hover:bg-primary/5 hover:text-primary"
              >
                <span>{subItem.title}</span>
                <MoveRight
                  className="size-4 text-neutral-400"
                  aria-hidden="true"
                />
              </NavLink>
            </NavigationMenuLink>
          ))}
        </div>
      </div>
    </NavigationMenuContent>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      closeMenu();
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "/");
    closeMenu();
  };

  return (
    <header className="sticky top-0 left-0 z-40 w-full bg-background">
      <div className="relative mx-auto flex min-h-20 w-full max-w-ui flex-row items-center justify-between gap-4 px-6 md:px-12">
        <div className="flex items-center gap-2">
          <BrandLogo onClick={handleHomeClick} />

          <NavigationMenu className="hidden justify-start lg:flex">
            <NavigationMenuList className="justify-start gap-1">
              {NAVIGATION_ITEMS.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <NavigationMenuLink asChild>
                      <NavLink href={item.href}>
                        <Button variant="ghost">{item.title}</Button>
                      </NavLink>
                    </NavigationMenuLink>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="text-sm font-medium">
                        {item.title}
                      </NavigationMenuTrigger>
                      <DesktopDropdownPanel item={item} />
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Button asChild className="hidden lg:inline-flex">
            <NavLink href={LUMA_EVENTS_URL}>Get Started</NavLink>
          </Button>

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
        </div>

        {isOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute left-0 right-0 top-20 flex w-full flex-col gap-8 border-t border-neutral-200 bg-background px-6 py-4 shadow-lg md:px-12 lg:hidden"
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
      </div>
    </header>
  );
}
