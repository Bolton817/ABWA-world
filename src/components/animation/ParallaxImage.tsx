"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, isReducedMotion } from "@/lib/animation/gsap";

export interface ParallaxImageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  offsetPercent?: number;
  className?: string;
}

export function ParallaxImage({
  children,
  offsetPercent = 8,
  className = "",
  ...props
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isReducedMotion() || !containerRef.current || !imageInnerRef.current) return;

      const mm = gsap.matchMedia();

      // Only enable subtle parallax on desktop screens (>= 1024px)
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          imageInnerRef.current,
          {
            yPercent: -offsetPercent,
          },
          {
            yPercent: offsetPercent,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [offsetPercent] }
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <div
        ref={imageInnerRef}
        className="w-full h-full will-change-transform scale-[1.14]"
      >
        {children}
      </div>
    </div>
  );
}
