"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useGSAP, gsap, ScrollTrigger, isReducedMotion } from "@/lib/animation/gsap";

export function AboutPrinciples() {
  const containerRef = useRef<HTMLElement>(null);
  const spineContainerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const principles = [
    {
      num: "01",
      title: "We listen first",
      text: "Projects are shaped with community groups, not handed to them.",
    },
    {
      num: "02",
      title: "We work with local knowledge",
      text: "Farmers, teachers, artists and mentors in the community lead. Volunteers support.",
    },
    {
      num: "03",
      title: "We share skills that last",
      text: "We focus on things people can keep using after a project day ends.",
    },
    {
      num: "04",
      title: "We respect people's dignity",
      text: "We ask permission before sharing anyone's story or photograph, and we take particular care with children.",
    },
    {
      num: "05",
      title: "We say what we know and what we don't",
      text: "If we cannot back up a claim with evidence, we leave it out.",
    },
  ];

  useGSAP(
    () => {
      if (isReducedMotion() || !spineContainerRef.current) return;

      // 1. Vertical progress line scaleY scrub linked to ScrollTrigger per Animation 4A
      if (progressLineRef.current) {
        gsap.fromTo(
          progressLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: spineContainerRef.current,
              start: "top 70%",
              end: "bottom 60%",
              scrub: 0.4,
            },
          }
        );
      }

      // 2. Animate each principle node and badge border/fill as line passes
      const nodes = spineContainerRef.current.querySelectorAll(".principle-node");
      nodes.forEach((node) => {
        const badge = node.querySelector(".principle-badge");
        const card = node.querySelector(".principle-card");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: node,
            start: "top 68%",
            end: "top 55%",
            scrub: 0.3,
          },
        });

        if (badge) {
          tl.to(
            badge,
            {
              borderColor: "#B79045",
              backgroundColor: "#1E63B8",
              color: "#FFFFFF",
              scale: 1.08,
              duration: 0.4,
            },
            0
          );
        }

        if (card) {
          tl.fromTo(
            card,
            { y: 16, autoAlpha: 0.4 },
            { y: 0, autoAlpha: 1, duration: 0.4 },
            0
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-16 sm:py-24 bg-white relative">
      <Container>
        <SectionHeader
          eyebrow="Approach"
          title="How we work"
          description="Five foundational principles guiding every initiative, interaction and partnership."
          align="center"
        />

        <div
          ref={spineContainerRef}
          className="relative max-w-4xl mx-auto mt-12 sm:mt-16 pl-14 sm:pl-20 md:pl-0"
        >
          {/* Static Background Spine Track */}
          <div className="absolute top-4 bottom-4 left-5 sm:left-7 md:left-1/2 md:-translate-x-1/2 w-1 bg-[#EAF2FA] rounded-full pointer-events-none" />

          {/* Active Warm Gold Progress Line Overlay */}
          <div
            ref={progressLineRef}
            className="absolute top-4 bottom-4 left-5 sm:left-7 md:left-1/2 md:-translate-x-1/2 w-1 bg-[#B79045] rounded-full origin-top scale-y-0 pointer-events-none will-change-transform z-10"
          />

          {/* 5 Principles Timeline Nodes */}
          <div className="space-y-10 sm:space-y-12">
            {principles.map((item, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={idx}
                  className={`principle-node relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Spine Numbered Badge */}
                  <div className="absolute -left-14 sm:-left-20 md:left-1/2 md:-translate-x-1/2 top-4 z-20">
                    <div className="principle-badge w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-slate-300 text-abwa-navy font-mono font-bold text-xs sm:text-sm flex items-center justify-center shadow-xs transition-colors will-change-transform">
                      {item.num}
                    </div>
                  </div>

                  {/* Principle Card Content */}
                  <div
                    className={`principle-card w-full md:w-[calc(50%-2.5rem)] p-6 sm:p-7 rounded-2xl bg-slate-50 border border-abwa-border shadow-2xs space-y-2.5 transition-all ${
                      isEven ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-abwa-gold uppercase tracking-wider">
                        Principle {item.num}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-abwa-navy">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-abwa-muted leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
