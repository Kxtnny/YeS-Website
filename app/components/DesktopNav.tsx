"use client";

import { MoveRight } from "lucide-react";

import { NavLink } from "@/app/components/nav-link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NAVIGATION_ITEMS, type NavigationItem } from "@/lib/navigation";

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

export default function DesktopNav() {
  return (
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
  );
}
