"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, isReducedMotion } from "@/lib/animation/gsap";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Sparkles, Eye, ShieldCheck, Activity } from "lucide-react";

export function MotionPrototype() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxImageRef = useRef<HTMLDivElement>(null);
  const [reducedMotionActive, setReducedMotionActive] = useState(false);

  useEffect(() => {
    setReducedMotionActive(isReducedMotion());
  }, []);

  useGSAP(
    () => {
      if (isReducedMotion() || !parallaxImageRef.current || !sectionRef.current) return;

      // Subtle parallax effect per TDD Module 103 (only foreground stationary, background offset)
      gsap.to(parallaxImageRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="my-12">
      {/* Parallax Container */}
      <div className="relative rounded-2xl overflow-hidden bg-abwa-navy text-white min-h-[380px] sm:min-h-[440px] flex items-center border border-abwa-navy/20 shadow-lg">
        {/* Animated Background Layer */}
        <div
          ref={parallaxImageRef}
          className="absolute inset-0 -top-12 -bottom-12 z-0 will-change-transform"
        >
          <Image
            src="/images/heroes/hero-community-gathering.jpg"
            alt="Community gathering in Kenya"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
        </div>

        {/* Stationary Foreground Content */}
        <Container className="relative z-10 py-12">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-abwa-gold" />
              <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide">
                GSAP Motion Prototype
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-mequin">
              Subtle Parallax & Performance-Scoped Scroll
            </h3>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              This banner tests controlled image scrub motion (`yPercent: 12`) while foreground text remains stationary and readable. On reduced motion, the image locks into place automatically.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>
                  Reduced Motion: {reducedMotionActive ? "DETECTED (Animations Disabled)" : "Inactive"}
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 text-slate-200">
                <Sparkles className="w-4 h-4 text-abwa-gold" />
                <span>ScrollTrigger Scoped</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
