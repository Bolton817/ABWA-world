"use client";

import React, { useState } from "react";
import { galleryProgrammes } from "@/content/gallery";
import { ChevronDown, Sparkles } from "lucide-react";

interface GalleryNavProps {
  activeProgrammeSlug: string;
}

export function GalleryNav({ activeProgrammeSlug }: GalleryNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const activeProg =
    galleryProgrammes.find((p) => p.slug === activeProgrammeSlug) ||
    galleryProgrammes[0];

  const handleJump = (slug: string) => {
    setIsOpen(false);
    const target = document.getElementById(`section-${slug}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-20 z-30 w-full px-4 sm:px-6 pointer-events-none">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 p-2 sm:p-2.5 rounded-full bg-abwa-navy/90 backdrop-blur-md border border-white/15 text-white shadow-xl pointer-events-auto transition-all">
        {/* Left: Active Section Indicator */}
        <div className="flex items-center gap-2.5 pl-3 truncate">
          <span className="font-kaushan text-abwa-gold text-sm sm:text-base whitespace-nowrap">
            {activeProg.number} / 12
          </span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="text-xs sm:text-sm font-semibold truncate text-white/95">
            {activeProg.title}
          </span>
        </div>

        {/* Right: Quick Jump Menu Button */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
            aria-expanded={isOpen}
            aria-label="Select programme collection"
          >
            <Sparkles className="w-3.5 h-3.5 text-abwa-gold" />
            <span className="hidden xs:inline">Jump to Pillar</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <>
              <div
                className="fixed inset-0 z-40 bg-black/20"
                onClick={() => setIsOpen(false)}
              />
              <div className="absolute right-0 top-full mt-2 z-50 w-72 sm:w-80 max-h-96 overflow-y-auto rounded-2xl bg-abwa-navy/95 backdrop-blur-xl border border-white/15 p-2 shadow-2xl text-left">
                <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-white/50 border-b border-white/10">
                  Select Programme (12 Collections)
                </div>
                <div className="py-1">
                  {galleryProgrammes.map((p) => {
                    const isActive = p.slug === activeProgrammeSlug;
                    return (
                      <button
                        key={p.slug}
                        type="button"
                        onClick={() => handleJump(p.slug)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm text-left transition-colors ${
                          isActive
                            ? "bg-abwa-blue text-white font-bold"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span className="truncate">
                          <span className="font-kaushan text-abwa-gold mr-2">
                            {p.number}.
                          </span>
                          {p.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
