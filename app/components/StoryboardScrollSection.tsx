"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const PAGE_HEIGHT_VH = 100;

type Props = {
  pages: ReactNode[];
};

function OverlayLayer({
  pageIndex,
  count,
  scrollYProgress,
  children,
}: {
  pageIndex: number;
  count: number;
  scrollYProgress: MotionValue<number>;
  children: ReactNode;
}) {
  const y = useTransform(scrollYProgress, (p) => {
    const h = typeof window !== "undefined" ? window.innerHeight : 900;
    // scrollYProgress 0→1 over (count-1)*100vh of section scroll.
    // Each overlay gets one full viewport of scroll:
    // page 2 => 0..100vh, page 3 => 100..200vh, etc.
    const sectionScrollRangePx = (count - 1) * PAGE_HEIGHT_VH * (h / 100);
    const transitionStartPx = (pageIndex - 1) * PAGE_HEIGHT_VH * (h / 100);
    const transitionEndPx = pageIndex * PAGE_HEIGHT_VH * (h / 100);
    const startP = transitionStartPx / sectionScrollRangePx;
    const endP = transitionEndPx / sectionScrollRangePx;
    if (p <= startP) return h;
    if (p >= endP) return 0;
    return h - ((p - startP) / (endP - startP)) * h;
  });

  return (
    <motion.div
      className="absolute inset-0 w-full"
      style={{ height: "100vh", zIndex: pageIndex, y }}
    >
      {children}
    </motion.div>
  );
}

export function StoryboardScrollSection({ pages }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const count = pages.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `${count * PAGE_HEIGHT_VH}vh` }}
    >
      <div
        className="sticky top-0 left-0 w-full overflow-hidden"
        style={{ height: "100vh" }}
      >
        {pages.map((page, i) =>
          i === 0 ? (
            <div
              key={i}
              className="absolute inset-0 z-0 w-full"
              style={{ height: "100vh" }}
            >
              {page}
            </div>
          ) : (
            <OverlayLayer
              key={i}
              pageIndex={i}
              count={count}
              scrollYProgress={scrollYProgress}
            >
              {page}
            </OverlayLayer>
          )
        )}
      </div>
    </div>
  );
}
