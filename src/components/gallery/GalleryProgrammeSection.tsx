"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { GalleryImage, GalleryProgrammeSection as SectionType } from "@/content/gallery";
import { useGSAP, gsap, ScrollTrigger, isReducedMotion } from "@/lib/animation/gsap";

interface GalleryProgrammeSectionProps {
  section: SectionType;
  onSelectImage: (image: GalleryImage) => void;
  onSectionEnter?: (slug: string) => void;
}

export function GalleryProgrammeSection({
  section,
  onSelectImage,
  onSectionEnter,
}: GalleryProgrammeSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  // Desktop 4 Column Refs
  const dCol1Ref = useRef<HTMLDivElement>(null);
  const dCol2Ref = useRef<HTMLDivElement>(null);
  const dCol3Ref = useRef<HTMLDivElement>(null);
  const dCol4Ref = useRef<HTMLDivElement>(null);

  // Mobile 2 Column Refs
  const mCol1Ref = useRef<HTMLDivElement>(null);
  const mCol2Ref = useRef<HTMLDivElement>(null);

  // Distribute images for Desktop (4 columns)
  const dCols: GalleryImage[][] = [[], [], [], []];
  section.images.forEach((img, i) => {
    dCols[i % 4].push(img);
  });

  // Distribute images for Mobile (2 columns)
  const mCols: GalleryImage[][] = [[], []];
  section.images.forEach((img, i) => {
    mCols[i % 2].push(img);
  });

  // Calculate dynamic scroll track height based on image count
  // Minimum 250vh, scaling smoothly with number of images per column
  const trackHeightVh = Math.max(
    250,
    180 + Math.ceil(section.images.length / 4) * 28
  );

  useGSAP(
    () => {
      if (isReducedMotion() || !containerRef.current || !pinRef.current) return;

      const mm = gsap.matchMedia();

      // DESKTOP: >= 1024px (4 Columns Opposing Parallax)
      mm.add("(min-width: 1024px)", () => {
        const c1 = dCol1Ref.current;
        const c2 = dCol2Ref.current;
        const c3 = dCol3Ref.current;
        const c4 = dCol4Ref.current;

        if (!c1 || !c2 || !c3 || !c4) return;

        // Calculate travel distance needed for each column to reveal all images
        const vh = window.innerHeight;
        const dist1 = Math.max(0, c1.scrollHeight - vh + 120);
        const dist2 = Math.max(0, c2.scrollHeight - vh + 120);
        const dist3 = Math.max(0, c3.scrollHeight - vh + 120);
        const dist4 = Math.max(0, c4.scrollHeight - vh + 120);

        // Initial positions:
        // Col 1 & 3 start at top (y: 0) and move UP (-dist)
        // Col 2 & 4 start scrolled (-dist) and move DOWN (0)
        gsap.set(c1, { y: 0 });
        gsap.set(c2, { y: -dist2 });
        gsap.set(c3, { y: 0 });
        gsap.set(c4, { y: -dist4 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: pinRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            anticipatePin: 1,
            onEnter: () => onSectionEnter?.(section.slug),
            onEnterBack: () => onSectionEnter?.(section.slug),
          },
        });

        tl.to(c1, { y: -dist1, ease: "none" }, 0);
        tl.to(c2, { y: 0, ease: "none" }, 0);
        tl.to(c3, { y: -dist3, ease: "none" }, 0);
        tl.to(c4, { y: 0, ease: "none" }, 0);
      });

      // MOBILE: < 1024px (2 Columns Opposing Parallax)
      mm.add("(max-width: 1023px)", () => {
        const mc1 = mCol1Ref.current;
        const mc2 = mCol2Ref.current;

        if (!mc1 || !mc2) return;

        const vh = window.innerHeight;
        const dist1 = Math.max(0, mc1.scrollHeight - vh + 100);
        const dist2 = Math.max(0, mc2.scrollHeight - vh + 100);

        // Col 1 moves UP, Col 2 moves DOWN
        gsap.set(mc1, { y: 0 });
        gsap.set(mc2, { y: -dist2 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: pinRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            anticipatePin: 1,
            onEnter: () => onSectionEnter?.(section.slug),
            onEnterBack: () => onSectionEnter?.(section.slug),
          },
        });

        tl.to(mc1, { y: -dist1, ease: "none" }, 0);
        tl.to(mc2, { y: 0, ease: "none" }, 0);
      });

      return () => {
        mm.revert();
      };
    },
    { scope: containerRef, dependencies: [section.slug] }
  );

  return (
    <section
      ref={containerRef}
      id={`section-${section.slug}`}
      style={{ height: `${trackHeightVh}vh` }}
      className="relative w-full bg-[#0a1128] text-white"
    >
      {/* Pinned Screen Viewport */}
      <div
        ref={pinRef}
        className="relative w-full h-screen overflow-hidden flex flex-col justify-between"
      >
        {/* Subtle Luxury Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060c1d] via-[#0b142d] to-[#060c1d] pointer-events-none" />

        {/* Ambient Glow Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-abwa-blue/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-abwa-gold/10 rounded-full blur-3xl pointer-events-none" />

        {/* Desktop 4-Column Opposing Masonry */}
        <div className="hidden lg:grid grid-cols-4 gap-6 w-full h-full px-8 pt-24 pb-28 pointer-events-auto">
          {/* Column 1: Moves UP */}
          <div ref={dCol1Ref} className="flex flex-col gap-6 will-change-transform">
            {dCols[0].map((img, idx) => (
              <ImageCard
                key={img.id}
                img={img}
                priority={idx < 2}
                onSelect={onSelectImage}
              />
            ))}
          </div>

          {/* Column 2: Moves DOWN */}
          <div ref={dCol2Ref} className="flex flex-col gap-6 will-change-transform">
            {dCols[1].map((img, idx) => (
              <ImageCard
                key={img.id}
                img={img}
                priority={idx < 2}
                onSelect={onSelectImage}
              />
            ))}
          </div>

          {/* Column 3: Moves UP */}
          <div ref={dCol3Ref} className="flex flex-col gap-6 will-change-transform">
            {dCols[2].map((img, idx) => (
              <ImageCard
                key={img.id}
                img={img}
                priority={idx < 2}
                onSelect={onSelectImage}
              />
            ))}
          </div>

          {/* Column 4: Moves DOWN */}
          <div ref={dCol4Ref} className="flex flex-col gap-6 will-change-transform">
            {dCols[3].map((img, idx) => (
              <ImageCard
                key={img.id}
                img={img}
                priority={idx < 2}
                onSelect={onSelectImage}
              />
            ))}
          </div>
        </div>

        {/* Mobile 2-Column Opposing Masonry */}
        <div className="grid lg:hidden grid-cols-2 gap-3 sm:gap-4 w-full h-full px-3 sm:px-6 pt-20 pb-24 pointer-events-auto">
          {/* Mobile Col 1: Moves UP */}
          <div ref={mCol1Ref} className="flex flex-col gap-3 sm:gap-4 will-change-transform">
            {mCols[0].map((img, idx) => (
              <ImageCard
                key={img.id}
                img={img}
                priority={idx < 2}
                onSelect={onSelectImage}
              />
            ))}
          </div>

          {/* Mobile Col 2: Moves DOWN */}
          <div ref={mCol2Ref} className="flex flex-col gap-3 sm:gap-4 will-change-transform">
            {mCols[1].map((img, idx) => (
              <ImageCard
                key={img.id}
                img={img}
                priority={idx < 2}
                onSelect={onSelectImage}
              />
            ))}
          </div>
        </div>

        {/* Pinned Section Overlay Badge (Center-Bottom) */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center px-4 pointer-events-none">
          <div className="pointer-events-auto max-w-xl w-full p-4 sm:p-5 rounded-2xl bg-abwa-navy/90 backdrop-blur-xl border border-white/15 text-white shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-kaushan text-abwa-gold text-sm sm:text-base">
                  {section.number} / 12
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white truncate">
                {section.title}
              </h3>
            </div>

            <Link
              href={`/programs/${section.slug}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-abwa-blue text-white text-xs font-semibold transition-colors shrink-0"
            >
              <span>View Programme</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ImageCardProps {
  img: GalleryImage;
  priority?: boolean;
  onSelect: (image: GalleryImage) => void;
}

function ImageCard({ img, priority = false, onSelect }: ImageCardProps) {
  return (
    <div
      onClick={() => onSelect(img)}
      className="group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 border border-white/10 shadow-lg hover:shadow-2xl hover:border-abwa-gold/50 transition-all duration-300 cursor-pointer"
    >
      {/* Aspect Ratio Container (varies slightly to give Pinterest organic feel) */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 1023px) 50vw, 25vw"
          loading={priority ? undefined : "lazy"}
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 text-white">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] sm:text-xs font-semibold text-white/90 line-clamp-1">
              {img.programmeTitle}
            </span>
            <div className="min-w-[28px] min-h-[28px] flex items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
