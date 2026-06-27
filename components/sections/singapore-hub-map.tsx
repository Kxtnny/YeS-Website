"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const MAP_SRC = "/images/brand/singapore-hub.svg";
const MAP_ALT =
  "Network map of Singapore representing YeS as a founder hub for youth founders";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

interface MapImageProps {
  className?: string;
}

function MapImage({ className }: MapImageProps) {
  return (
    <img
      src={MAP_SRC}
      alt={MAP_ALT}
      draggable={false}
      className={cn("h-full w-full object-contain", className)}
    />
  );
}

export function SingaporeHubMap() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  if (prefersReducedMotion) {
    return <MapImage className="opacity-90" />;
  }

  return (
    <motion.div
      className="h-full w-full"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1.1, ease: REVEAL_EASE }}
    >
      <motion.div
        className="h-full w-full"
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MapImage className="opacity-90" />
      </motion.div>
    </motion.div>
  );
}
