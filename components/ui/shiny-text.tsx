"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface ShinyTextProps {
  children: ReactNode;
  className?: string;
  /** How long the section must stay in view and idle before the shine starts (ms). */
  idleDelay?: number;
}

export function ShinyText({
  children,
  className,
  idleDelay = 1500,
}: ShinyTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const activeRef = useRef(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let timer: number | undefined;
    let inView = false;

    const clear = () => {
      if (timer) {
        window.clearTimeout(timer);
        timer = undefined;
      }
    };

    const activate = () => {
      activeRef.current = true;
      setActive(true);
    };

    const schedule = () => {
      clear();
      if (inView && !activeRef.current) {
        timer = window.setTimeout(activate, idleDelay);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) {
          schedule();
        } else {
          clear();
          activeRef.current = false;
          setActive(false);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);

    const onScroll = () => {
      if (!activeRef.current) {
        schedule();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      clear();
      window.removeEventListener("scroll", onScroll);
    };
  }, [idleDelay]);

  return (
    <span
      ref={ref}
      className={cn(active ? "shiny-text-primary" : "text-primary", className)}
    >
      {children}
    </span>
  );
}
