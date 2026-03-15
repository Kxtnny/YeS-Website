"use client";

import { useRef, ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useMotionTemplate,
} from "framer-motion";

const PAGE_HEIGHT_VH = 100;

type Props = {
  id?: string;
  pages: ReactNode[];
  pageIds?: Array<string | undefined>;
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
  const segmentCount = Math.max(count - 1, 1);
  const startProgress = (pageIndex - 1) / segmentCount;
  const endProgress = pageIndex / segmentCount;
  const translateY = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [100, 0],
    { clamp: true }
  );
  const y = useMotionTemplate`${translateY}vh`;

  return (
    <motion.div
      className="absolute inset-0 w-full"
      style={{ height: "100vh", zIndex: pageIndex, y }}
    >
      {children}
    </motion.div>
  );
}

export function StoryboardScrollSection({ id, pages, pageIds }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const count = pages.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      id={id}
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `${count * PAGE_HEIGHT_VH}vh` }}
    >
      {pageIds?.map((pageId, index) =>
        pageId ? (
          <div
            key={pageId}
            id={pageId}
            aria-hidden="true"
            className="absolute left-0 h-px w-px pointer-events-none"
            style={{ top: `${index * PAGE_HEIGHT_VH}vh` }}
          />
        ) : null
      )}
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
