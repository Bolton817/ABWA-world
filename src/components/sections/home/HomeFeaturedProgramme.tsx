"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Info, ArrowRight, CheckCircle2 } from "lucide-react";
import { useGSAP, gsap, isReducedMotion } from "@/lib/animation/gsap";

export function HomeFeaturedProgramme() {
  const sectionRef = useRef<HTMLElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const activities = [
    {
      num: "01",
      title: "Collecting and recycling neighbourhood waste",
      desc: "Collecting plastic bottles and scrap metal across Mathare neighbourhoods to sell for recycling and earn steady daily income.",
    },
    {
      num: "02",
      title: "Cultivating urban riverbank kitchen gardens",
      desc: "Transforming vacant riverbank plots into productive organic vegetable gardens that supply fresh spinach, kales and greens for local families.",
    },
    {
      num: "03",
      title: "Mentoring children with art and porridge",
      desc: "Hosting weekly weekend creative art sessions and serving warm nutritious porridge to dozens of neighbourhood children in a safe caring space.",
    },
    {
      num: "04",
      title: "Building leadership and neighbourhood safety",
      desc: "Strengthening youth leadership, team fitness, life skills and peer mentorship networks that provide positive alternatives to crime and street risks.",
    },
    {
      num: "05",
      title: "Welcoming international volunteer teams",
      desc: "Collaborating with visiting international volunteers and partners like Voltra Hong Kong on joint community work camps and shared learning.",
    },
    {
      num: "06",
      title: "Establishing the Community Training Centre",
      desc: "Securing resources to build a permanent centre in Mathare equipped for vocational workshops, apprenticeships and youth enterprise.",
    },
  ];

  useGSAP(
    () => {
      if (isReducedMotion() || !sectionRef.current) return;

      const mm = gsap.matchMedia();

      // Desktop layout (min-width: 1024px)
      mm.add("(min-width: 1024px)", () => {
        if (!rightColRef.current) return;

        // Animate each of the 6 activity cards with ScrollTrigger scrub as it enters viewport
        const cards = rightColRef.current.querySelectorAll(".featured-activity-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              x: 20,
              autoAlpha: 0.35,
              borderLeftColor: "rgba(226, 232, 240, 0.8)",
            },
            {
              x: 0,
              autoAlpha: 1,
              borderLeftColor: "#B79045",
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 60%",
                scrub: 0.4,
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white relative">
      <Container>
        {/* Split-screen 2-column grid: left column stays pinned/sticky while right column scrolls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column container (stretches to the full height of the row) */}
          <div className="lg:col-span-5 relative w-full h-full">
            {/* Sticky pinned column: sticks smoothly at top 110px below the header on desktop */}
            <div className="w-full space-y-6 pt-2 lg:sticky lg:top-[110px]">
              <div className="space-y-2">
                <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                  Featured programme
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy leading-tight">
                  Building skills, livelihoods and community care in Mathare
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-abwa-muted leading-relaxed">
                <p>
                  In Mathare, Nairobi, the Miami Florida Youth Group is taking ownership of their
                  neighbourhood. Faced with high youth unemployment and crowded living conditions, these
                  young leaders came together to turn waste recycling, urban farming and creative arts
                  into positive livelihoods.
                </p>
                <p>
                  Alongside weekly children&apos;s art sessions and community clean ups, the group is
                  working towards establishing a permanent Community Training Centre that will offer
                  accredited vocational courses, tool libraries and enterprise incubation for local youth.
                </p>
              </div>

              {/* Status note */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
                <Info className="w-4 h-4 text-abwa-gold flex-shrink-0 mt-0.5" />
                <span>
                  Activities run year round in Mathare. Talk with us about partnerships or visiting during a volunteer work camp.
                </span>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Button
                  href="/programs/youth-empowerment"
                  variant="primary"
                  size="md"
                >
                  <span>Explore the programme</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button href="/volunteer" variant="secondary" size="md">
                  Ask about volunteering
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column (Scrolling content with photo & 6 activity highlight cards) */}
          <div ref={rightColRef} className="lg:col-span-7 space-y-8">
            {/* Featured Photograph */}
            <div className="relative rounded-2xl overflow-hidden border border-abwa-border shadow-md aspect-[16/10] bg-slate-100">
              <Image
                src="/images/programs/youth_empowerment_&_skills/4abwa (7).jpeg"
                alt="Miami Florida Youth Group members participating in skills training and community action in Mathare Nairobi"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/80 via-transparent to-transparent z-10" />
              <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                <span className="text-xs font-semibold text-abwa-gold block">
                  Mathare, Nairobi
                </span>
                <span className="text-sm font-bold text-white">
                  Youth Employment and Skills Development
                </span>
              </div>
            </div>

            {/* 6 "What happens" highlight cards */}
            <div className="space-y-4">
              <div className="pb-2">
                <span className="font-kaushan text-abwa-navy text-lg sm:text-xl tracking-wide block">
                  What happens on the programme
                </span>
              </div>

              {activities.map((item, idx) => (
                <div
                  key={idx}
                  className="featured-activity-card p-5 sm:p-6 rounded-2xl bg-slate-50 border-l-4 border-l-slate-200 border border-abwa-border shadow-2xs space-y-2 transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-abwa-gold">
                      Phase {item.num}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-abwa-navy">
                    {item.title}
                  </h3>
                  <p className="text-sm text-abwa-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
