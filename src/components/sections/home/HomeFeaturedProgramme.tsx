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
      title: "Choosing crops that suit the place",
      desc: "Selecting drought-resilient vegetables and indigenous crops suited for local microclimates and seasonal rainfall patterns.",
    },
    {
      num: "02",
      title: "Preparing land and soil",
      desc: "Building natural compost, mulching beds, and applying regenerative soil enrichment techniques that protect long-term land fertility.",
    },
    {
      num: "03",
      title: "Using water wisely",
      desc: "Rainwater harvesting, sunken garden beds, and water-wise conservation practices to sustain crops across dry periods.",
    },
    {
      num: "04",
      title: "Caring for crops and managing pests",
      desc: "Companion planting, botanical deterrents, and careful biological observation without reliance on costly synthetic inputs.",
    },
    {
      num: "05",
      title: "Talking about leadership and money decisions",
      desc: "Table banking, financial literacy, group savings, and open dialogues that empower women's voices in household and community decisions.",
    },
    {
      num: "06",
      title: "Sharing food, stories and traditions",
      desc: "Celebrating harvest days with communal cooking, storytelling, and intergenerational knowledge exchange between elders and youth.",
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
                  Growing food, skills and confidence together
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-abwa-muted leading-relaxed">
                <p>
                  In Kangundo, in Machakos County, women&apos;s group members and volunteers share what
                  they know about growing vegetables: which crops suit the local climate, how to prepare
                  the soil, how to use local water well, and how to manage pests with care for the wider
                  environment.
                </p>
                <p>
                  Alongside the farming, our plans include conversations about leadership, financial
                  decision-making and having a say in your own life. Farming days are also days of
                  cooking, storytelling and cultural exchange.
                </p>
              </div>

              {/* Status note */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
                <Info className="w-4 h-4 text-abwa-gold flex-shrink-0 mt-0.5" />
                <span>
                  Dates and availability for volunteering differ by project. Ask us what is possible right now.
                </span>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Button
                  href="/programs/womens-empowerment-sustainable-agriculture"
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
                src="/images/heroes/kenya-s-apollo-agriculture-raises-6m-series-a-led-by-anthemis-techcrunch.jpg"
                alt="Women group members tending to vegetable crops in Kangundo"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/80 via-transparent to-transparent z-10" />
              <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                <span className="text-xs font-semibold text-abwa-gold block">
                  Kangundo, Machakos County
                </span>
                <span className="text-sm font-bold text-white">
                  Women&apos;s Empowerment & Sustainable Agriculture
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
