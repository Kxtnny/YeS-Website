"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

export function isExternalHref(href: string) {
  return href.startsWith("http");
}

interface NavLinkProps {
  href: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
}

export function NavLink({ href, className, onClick, children }: NavLinkProps) {
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
