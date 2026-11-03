"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useGSAP, gsap, ScrollTrigger, isReducedMotion } from "@/lib/animation/gsap";

export function HomeGalleryPreview() {
  const containerRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const photos = [
    {
      src: "/images/programs/education_&_child_development/5abwa (83).jpeg",
      alt: "Smiling children and youth participating in educational support in Kenya",
      caption: "Joyful learning and community education",
    },
    {
      src: "/images/programs/food_security_&_sustainable_agriculture/6abwa (67).jpeg",
      alt: "Women farmers and volunteers with harvested cassava in a community garden",
      caption: "Harvesting sustainable crops and kitchen gardens",
    },
    {
      src: "/images/programs/arts_culture_&_creative_development/7abwa (7).jpeg",
      alt: "Children and youth proudly displaying their sunset landscape paintings",
      caption: "Creative arts, painting and talent development",
    },
    {
      src: "/images/programs/community_development_social_support/6abwa (72).jpeg",
      alt: "Machakos Super Cup youth football team with coaches and mentors",
      caption: "Youth sports, team spirit and leadership",
    },
    {
      src: "/images/programs/environmental_conservation_&_climate/7abwa (24).jpeg",
      alt: "Volunteers and community members planting indigenous tree sapling",
      caption: "Tree planting and environmental climate action",
    },
    {
      src: "/images/programs/women_empowerment_&_agriculture/5abwa (17).jpeg",
      alt: "Traditional colorful handwoven sisal baskets crafted by women artisans",
      caption: "Traditional crafts, Kiondo weaving and enterprise",
    },
    {
      src: "/images/programs/water_sanitation_&_hygiene/1abwa (13).jpeg",
      alt: "Boy sitting by rural water reservoir and water storage containers",
      caption: "Water access, rainwater harvesting and WASH",
    },
    {
      src: "/images/programs/Kasiagu_Wildlife_conservation/6abwa (85).jpeg",
      alt: "Giraffe grazing across the Mount Kasigau savannah plains in Kenya",
      caption: "Wildlife conservation and habitat protection in Kasigau",
    },
  ];

  useGSAP(
    () => {
      if (isReducedMotion() || !containerRef.current) return;

      const mm = gsap.matchMedia();

      // Desktop layout (min-width: 1024px): Pinned horizontal scrub with calibrated top offset
      mm.add("(min-width: 1024px)", () => {
        if (!wrapperRef.current || !trackRef.current || !containerRef.current) return;

        const getScrollDistance = () => {
          return trackRef.current!.scrollWidth - wrapperRef.current!.clientWidth;
        };

        // Pin section flush with the 60px sticky header and scrub horizontal track along X-axis
        const horizontalTween = gsap.to(trackRef.current, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: "top 60px",
            end: () => "+=" + getScrollDistance(),
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        // Nested image parallax shift (-8% to 8%) per card linked via containerAnimation
        const cards = trackRef.current.querySelectorAll(".gallery-horizontal-card");
        cards.forEach((card) => {
          const img = card.querySelector(".gallery-card-inner-img");
          if (img) {
            gsap.fromTo(
              img,
              { xPercent: -8 },
              {
                xPercent: 8,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: horizontalTween,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                },
              }
            );
          }
        });
      });

      // Mobile layout (max-width: 1023px): Normal vertical flow with alternating side-entry scroll animations
      mm.add("(max-width: 1023px)", () => {
        const mobileCards = containerRef.current?.querySelectorAll<HTMLElement>(".gallery-mobile-card");
        if (!mobileCards || mobileCards.length === 0) return;

        mobileCards.forEach((card, index) => {
          // Interchangeable entry: even indexes from left (-60px), odd indexes from right (60px)
          const fromLeft = index % 2 === 0;

          gsap.fromTo(
            card,
            {
              x: fromLeft ? -60 : 60,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.65,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-12 sm:py-16 lg:py-6 bg-slate-50 border-y border-abwa-border relative overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <SectionHeader
          eyebrow="Gallery"
          title="Moments from our work"
          description="A few glimpses of community projects. We share photographs only with the consent of the people in them."
          className="mb-8 lg:mb-5"
          action={
            <Button href="/gallery" variant="outline" size="md" className="hidden lg:inline-flex">
              <span>View the full gallery</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          }
        />

        {/* 1. Desktop Horizontal Track (lg:block, hidden on mobile) */}
        <div
          ref={wrapperRef}
          className="hidden lg:block overflow-hidden"
        >
          <div
            ref={trackRef}
            className="flex flex-nowrap gap-6 w-max items-center py-2"
          >
            {photos.map((item, idx) => (
              <Link
                key={idx}
                href="/gallery"
                className="gallery-horizontal-card group relative flex-shrink-0 w-[340px] xl:w-[380px] aspect-[4/3] rounded-2xl overflow-hidden border border-abwa-border shadow-xs bg-slate-100 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
              >
                <div className="gallery-card-inner-img absolute inset-0 will-change-transform scale-110">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1280px) 340px, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/90 via-abwa-navy/25 to-transparent flex items-end p-5 z-10 transition-opacity">
                  <span className="text-xs sm:text-sm font-semibold text-white line-clamp-2 leading-snug">
                    {item.caption}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 2. Mobile Vertical Stack with Interchangeable Side Entry (lg:hidden) */}
        <div className="lg:hidden flex flex-col gap-6 sm:gap-8">
          {photos.map((item, idx) => (
            <Link
              key={idx}
              href="/gallery"
              className="gallery-mobile-card group relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-abwa-border shadow-xs bg-slate-100 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue will-change-transform"
            >
              <div className="absolute inset-0">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/90 via-abwa-navy/25 to-transparent flex items-end p-5 z-10">
                <span className="text-sm font-semibold text-white line-clamp-2 leading-snug">
                  {item.caption}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View full gallery CTA */}
        <div className="pt-8 text-center lg:hidden">
          <Button href="/gallery" variant="primary" size="lg" className="w-full sm:w-auto">
            <span>View the full gallery</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
