"use client";

import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Color, type Mesh, type MeshBasicMaterial } from "three";

import { BRAND_COLOR } from "@/lib/brand";
import { cn } from "@/lib/utils";

const BRAND_RED = BRAND_COLOR;

export interface ImpactStat {
  value: string;
  label: string;
}

export interface ImpactSectionProps {
  className?: string;
  stats?: ImpactStat[];
}

const DEFAULT_STATS: ImpactStat[] = [
  { value: "1,000+", label: "Students Activated" },
  { value: "50+", label: "Founders Connected" },
  { value: "20+", label: "Ecosystem Partners" },
];

const IMPACT_HEADING_TYPO = "font-semibold tracking-tight";

const IMPACT_TEXT_ACCENT = "text-primary";

function EngineCoreMesh({ reducedMotion }: { reducedMotion: boolean }) {
  const meshRef = useRef<Mesh>(null);
  const [isClicked, setIsClicked] = useState(false);
  const currentColor = useRef(new Color(BRAND_RED));
  const targetColor = useRef(new Color(BRAND_RED));

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    if (!reducedMotion) {
      const elapsed = state.clock.elapsedTime;
      mesh.rotation.y = elapsed * 0.35;
      mesh.rotation.x = Math.sin(elapsed * 0.4) * 0.25;
      const pulse = 1 + Math.sin(elapsed * 1.2) * 0.06;
      mesh.scale.setScalar(pulse);
    }

    targetColor.current.set(BRAND_RED);
    currentColor.current.lerp(targetColor.current, 0.1);

    const material = mesh.material as MeshBasicMaterial;
    material.color.copy(currentColor.current);
  });

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsClicked((clicked) => !clicked);
  };

  return (
    <mesh ref={meshRef} onClick={handleClick}>
      <icosahedronGeometry args={[2, 1]} />
      <meshBasicMaterial
        wireframe
        transparent
        opacity={0.75}
        color={BRAND_RED}
      />
    </mesh>
  );
}

function EngineCoreScene({ reducedMotion }: { reducedMotion: boolean }) {
  return <EngineCoreMesh reducedMotion={reducedMotion} />;
}

interface EngineCoreCanvasProps {
  reducedMotion: boolean;
}

function EngineCoreCanvas({ reducedMotion }: EngineCoreCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="absolute inset-0 touch-none"
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <EngineCoreScene reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
}

export function ImpactSection({
  className,
  stats = DEFAULT_STATS,
}: ImpactSectionProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className={cn("relative w-full overflow-hidden bg-white", className)}
    >
      {/* Header + metrics — Stripe-style top block */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 pb-0 md:pt-28">
        <h2
          id="impact-heading"
          className={cn(
            "mx-auto max-w-4xl text-center text-4xl sm:text-5xl md:text-[3.25rem] md:leading-[1.08]",
            IMPACT_HEADING_TYPO,
            IMPACT_TEXT_ACCENT
          )}
        >
          The Hub for Singapore&apos;s Youth Founders
        </h2>

        <dl className="relative mt-14 border-y border-neutral-200/90 sm:mt-16 md:mt-20">
          {/* Subtle red glow along the top divider — mirrors Stripe's purple accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
          />

          <div className="grid grid-cols-1 divide-y divide-neutral-200/90 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-6 py-10 text-center sm:px-8 sm:py-12 md:py-14"
              >
                <dt className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-[2.75rem] md:leading-none">
                  {stat.value}
                </dt>
                <dd
                  className={cn(
                    "mt-4 max-w-xs text-center text-xl leading-snug sm:mt-5 sm:text-2xl sm:leading-snug md:text-3xl md:leading-tight",
            IMPACT_HEADING_TYPO,
            IMPACT_TEXT_ACCENT
                  )}
                >
                  {stat.label}
                </dd>
              </div>
            ))}
          </div>
        </dl>
      </div>

      {/* Visualization area — 3D model below metrics with bottom red glow */}
      <div className="relative mt-0 w-full">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_100%,rgba(171,46,46,0.14),transparent_68%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_85%,rgba(171,46,46,0.08),transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_70%,rgba(171,46,46,0.12),transparent_50%)]"
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-8 pt-8 sm:pb-10 sm:pt-10 md:pb-12 md:pt-12">
          <p className="sr-only">
            Interactive 3D wireframe. Click to toggle highlight color.
          </p>
          <div className="relative mx-auto h-[360px] w-full max-w-3xl cursor-pointer sm:h-[440px] md:h-[520px] lg:h-[560px]">
            <EngineCoreCanvas reducedMotion={reducedMotion} />
          </div>
        </div>
      </div>
    </section>
  );
}
