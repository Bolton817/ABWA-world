"use client";

import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger, isReducedMotion } from "@/lib/animation/gsap";

interface ArticleReadingProgressProps {
  targetSelector?: string;
}

export function ArticleReadingProgress({
  targetSelector = "#blog-article-content",
}: ArticleReadingProgressProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isReducedMotion() || !barRef.current) return;

      const target = document.querySelector(targetSelector);
      if (!target) return;

      gsap.fromTo(
        barRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: target,
            start: "top 100px",
            end: "bottom bottom",
            scrub: 0.2,
          },
        }
      );
    },
    { dependencies: [targetSelector] }
  );

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200/40 pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full bg-abwa-gold origin-left scale-x-0 will-change-transform shadow-xs"
      />
    </div>
  );
}
