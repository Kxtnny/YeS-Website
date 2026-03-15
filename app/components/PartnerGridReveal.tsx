"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Partner = {
  name: string;
  image: string;
};

type Props = {
  partners: Partner[];
};

export default function PartnerGridReveal({ partners }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="grid w-full max-w-ui grid-cols-3 md:flex flex-row justify-center gap-4 pt-8 md:pt-12 pb-48"
    >
      {partners.map((partner, index) => (
        <motion.div
          key={partner.image}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.1,
          }}
          className="relative aspect-square grid-cols-1 md:flex-1 overflow-hidden rounded-lg bg-white"
        >
          <Image
            src={partner.image}
            alt={partner.name}
            fill
            className="object-contain p-1"
          />
        </motion.div>
      ))}
    </div>
  );
}
