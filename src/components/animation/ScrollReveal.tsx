"use client";

import React, { useRef } from "react";
import { useGSAP, gsap, isReducedMotion } from "@/lib/animation/gsap";

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  stagger?: number;
  yOffset?: number;
  duration?: number;
  delay?: number;
  start?: string;
  className?: string;
}

export function ScrollReveal({
  children,
  stagger = 0,
  yOffset = 20,
  duration = 0.6,
  delay = 0,
  start = "top 85%",
  className = "",
  ...props
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isReducedMotion() || !containerRef.current) return;

      if (stagger > 0) {
        const items = containerRef.current.children;
        if (!items || items.length === 0) return;

        gsap.from(items, {
          y: yOffset || 32,
          autoAlpha: 0,
          duration: duration || 0.65,
          stagger,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            once: true,
          },
          clearProps: "transform,opacity,visibility",
        });
      } else {
        gsap.from(containerRef.current, {
          y: yOffset,
          autoAlpha: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            once: true,
          },
          clearProps: "transform,opacity,visibility",
        });
      }
    },
    { scope: containerRef, dependencies: [stagger, yOffset, duration, delay, start] }
  );

  return (
    <div ref={containerRef} className={className} {...props}>
      {children}
    </div>
  );
}
