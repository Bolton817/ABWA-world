"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, isReducedMotion } from "@/lib/animation/gsap";

export interface HeroRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  duration?: number;
  className?: string;
}

export function HeroReveal({
  children,
  delay = 0.1,
  stagger = 0.1,
  duration = 0.5,
  className = "",
  ...props
}: HeroRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isReducedMotion() || !containerRef.current) return;

      const items = containerRef.current.children;
      if (!items || items.length === 0) return;

      gsap.from(items, {
        opacity: 0,
        y: 20,
        duration,
        stagger,
        delay,
        ease: "power2.out",
        clearProps: "transform,opacity",
      });
    },
    { scope: containerRef, dependencies: [delay, stagger, duration] }
  );

  return (
    <div ref={containerRef} className={className} {...props}>
      {children}
    </div>
  );
}
