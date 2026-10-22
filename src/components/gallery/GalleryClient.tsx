"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, CheckCircle2, Eye } from "lucide-react";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: "Youth and creativity" | "Farming and food" | "Environment" | "Volunteers and community";
}

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/heroes/hero-community-gathering.jpg",
    alt: "Community members gathered for agricultural skills discussion in Kenya",
    caption: "Community members collaborating on agricultural planning and skills sharing in Kenya.",
    category: "Farming and food",
  },
  {
    id: "g2",
    src: "/images/heroes/kenya-s-apollo-agriculture-raises-6m-series-a-led-by-anthemis-techcrunch.jpg",
    alt: "Women farmers tending to rows of vegetable crops in Kangundo",
    caption: "Women's group members tending to vegetable plots in Kangundo, Machakos County.",
    category: "Farming and food",
  },
  {
    id: "g3",
    src: "/images/heroes/youth-empowerment-kenya.jpg",
    alt: "Young people participating in creative music and talent development in Mathare",
    caption: "Young artists and music mentors collaborating at a creative workshop in Mathare, Nairobi.",
    category: "Youth and creativity",
  },
  {
    id: "g4",
    src: "/images/gallery/the-life-you-can-save-best-charities.jpg",
    alt: "Community youth gathered for mentorship and creative learning",
    caption: "Youth peer learning and skills mentorship gathering.",
    category: "Youth and creativity",
  },
  {
    id: "g5",
    src: "/images/gallery/download-22.jpg",
    alt: "Volunteers and community members participating in environmental cleanups along Mathare River",
    caption: "Environmental volunteers working along the Mathare River.",
    category: "Environment",
  },
  {
    id: "g6",
    src: "/images/gallery/download-19.jpg",
    alt: "Community members planting trees and caring for local green spaces",
    caption: "Tree planting and ecological care initiative in local community spaces.",
    category: "Environment",
  },
  {
    id: "g7",
    src: "/images/heroes/about-our-charity-mondetta-usa.jpg",
    alt: "Local and visiting volunteers working alongside community members in Nairobi",
    caption: "Volunteers and community partners collaborating on community projects in Nairobi.",
    category: "Volunteers and community",
  },
  {
    id: "g8",
    src: "/images/gallery/gallery-community-education.jpg",
    alt: "Volunteer teaching practical skills in a community workshop setting",
    caption: "Practical training and skills sharing with community group members.",
    category: "Volunteers and community",
  },
];

const categories = ["All", "Youth and creativity", "Farming and food", "Environment", "Volunteers and community"] as const;

export function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  // Close lightbox on Escape key, navigate on arrows
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, filteredItems.length]);

  const activeItem = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2 min-h-[44px] flex items-center justify-center text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue ${
                isActive
                  ? "bg-abwa-navy text-white shadow-sm"
                  : "bg-slate-100 text-abwa-ink/70 hover:bg-slate-200 hover:text-abwa-navy"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all cursor-pointer"
            onClick={() => setActiveImageIndex(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveImageIndex(idx);
              }
            }}
            aria-label={`Open image ${idx + 1} of ${filteredItems.length}: ${item.alt}`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-abwa-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-2 rounded-full bg-white/90 text-abwa-navy shadow-md">
                  <Eye className="w-5 h-5" />
                </span>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-abwa-blue block">
                {item.category}
              </span>
              <p className="text-xs text-abwa-ink/80 line-clamp-2 leading-relaxed">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {activeItem && activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-abwa-navy/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
        >
          <div className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            {/* Lightbox Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <span className="text-xs font-semibold text-abwa-ink/60">
                Image {activeImageIndex + 1} of {filteredItems.length}
              </span>
              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                aria-label="Close gallery"
                className="w-11 h-11 rounded-lg text-abwa-ink/70 hover:text-abwa-navy hover:bg-slate-100 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Image Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-900">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-contain"
              />
            </div>

            {/* Lightbox Footer & Controls */}
            <div className="px-6 py-4 bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-abwa-ink font-medium">
                {activeItem.caption}
              </p>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
                    )
                  }
                  aria-label="Previous image"
                  className="w-11 h-11 rounded-lg bg-white border border-slate-200 text-abwa-navy hover:bg-slate-100 flex items-center justify-center shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
                    )
                  }
                  aria-label="Next image"
                  className="w-11 h-11 rounded-lg bg-white border border-slate-200 text-abwa-navy hover:bg-slate-100 flex items-center justify-center shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
