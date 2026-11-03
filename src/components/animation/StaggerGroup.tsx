"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, isReducedMotion } from "@/lib/animation/gsap";

export interface StaggerGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  stagger?: number;
  duration?: number;
  yOffset?: number;
  triggerOnScroll?: boolean;
  className?: string;
}

export function StaggerGroup({
  children,
  stagger = 0.1,
  duration = 0.5,
  yOffset = 20,
  triggerOnScroll = true,
  className = "",
  ...props
}: StaggerGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isReducedMotion() || !containerRef.current) return;

      const items = containerRef.current.children;
      if (!items.length) return;

      const animationVars: gsap.TweenVars = {
        autoAlpha: 0,
        y: yOffset,
        duration,
        stagger,
        ease: "power2.out",
        clearProps: "transform,opacity,visibility",
      };

      if (triggerOnScroll) {
        animationVars.scrollTrigger = {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        };
      }

      gsap.from(items, animationVars);
    },
    { scope: containerRef, dependencies: [stagger, duration, yOffset, triggerOnScroll] }
  );

  return (
    <div ref={containerRef} className={className} {...props}>
      {children}
    </div>
  );
}
