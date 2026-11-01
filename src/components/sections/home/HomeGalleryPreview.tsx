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
      src: "/images/gallery/beautiful-children.jpg",
      alt: "Children participating in educational session",
      caption: "Creative learning and community activities",
    },
    {
      src: "/images/gallery/children-of-the-nations.jpg",
      alt: "Youth group session in Nairobi",
      caption: "Youth gathering and teamwork",
    },
    {
      src: "/images/gallery/gallery-community-education.jpg",
      alt: "Parents and teachers engaged in dialogue",
      caption: "Community members sharing ideas",
    },
    {
      src: "/images/gallery/joy.jpg",
      alt: "Community celebration and shared meal",
      caption: "Cultural exchange and connection",
    },
    {
      src: "/images/gallery/oh-joy.jpg",
      alt: "Smiles and group moments during project work",
      caption: "Shared effort on project days",
    },
    {
      src: "/images/gallery/donate-ghni.jpg",
      alt: "Community gathering and resource distribution",
      caption: "Practical support and cooperation",
    },
    {
      src: "/images/gallery/support-ugandan-girls-with-tailoring-materials.jpg",
      alt: "Participants practicing practical craft skills",
      caption: "Skills training and craft workshops",
    },
    {
      src: "/images/gallery/the-life-you-can-save-best-charities.jpg",
      alt: "Community members gathered for project planning",
      caption: "Community reflection and collaboration",
    },
  ];

  useGSAP(
    () => {
      if (isReducedMotion() || !containerRef.current) return;

      const mm = gsap.matchMedia();

      // Desktop behavior (min-width: 1024px) per Animation 3 specifications
      mm.add("(min-width: 1024px)", () => {
        if (!wrapperRef.current || !trackRef.current || !containerRef.current) return;

        const getScrollDistance = () => {
          return trackRef.current!.scrollWidth - wrapperRef.current!.clientWidth;
        };

        // Pin entire section and scrub horizontal track along X-axis
        const horizontalTween = gsap.to(trackRef.current, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: "top 80px",
            end: () => "+=" + getScrollDistance(),
            invalidateOnRefresh: true,
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

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-24 bg-slate-50 border-y border-abwa-border relative overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <SectionHeader
          eyebrow="Gallery"
          title="Moments from our work"
          description="A few glimpses of community projects. We share photographs only with the consent of the people in them."
          action={
            <Button href="/gallery" variant="outline" size="md">
              <span>View the full gallery</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          }
        />

        {/* Horizontal Track Wrapper */}
        <div
          ref={wrapperRef}
          className="overflow-x-auto lg:overflow-hidden pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-none"
        >
          <div
            ref={trackRef}
            className="flex flex-nowrap gap-6 w-max items-center"
          >
            {photos.map((item, idx) => (
              <Link
                key={idx}
                href="/gallery"
                className="gallery-horizontal-card group relative flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] aspect-[4/3] rounded-2xl overflow-hidden border border-abwa-border shadow-xs bg-slate-100 snap-start block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
              >
                <div className="gallery-card-inner-img absolute inset-0 will-change-transform scale-110">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 280px, 380px"
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

        {/* Mobile View full gallery CTA */}
        <div className="pt-8 text-center md:hidden">
          <Button href="/gallery" variant="primary" size="lg" className="w-full sm:w-auto">
            <span>View the full gallery</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
