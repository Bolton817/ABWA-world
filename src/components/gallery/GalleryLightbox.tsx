"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { GalleryImage } from "@/content/gallery";

interface GalleryLightboxProps {
  activeImage: GalleryImage | null;
  allImages: GalleryImage[];
  onClose: () => void;
  onSelectImage: (image: GalleryImage) => void;
}

export function GalleryLightbox({
  activeImage,
  allImages,
  onClose,
  onSelectImage,
}: GalleryLightboxProps) {
  const currentIndex = activeImage
    ? allImages.findIndex((img) => img.id === activeImage.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex <= 0) {
      onSelectImage(allImages[allImages.length - 1]);
    } else {
      onSelectImage(allImages[currentIndex - 1]);
    }
  }, [currentIndex, allImages, onSelectImage]);

  const handleNext = useCallback(() => {
    if (currentIndex >= allImages.length - 1 || currentIndex === -1) {
      onSelectImage(allImages[0]);
    } else {
      onSelectImage(allImages[currentIndex + 1]);
    }
  }, [currentIndex, allImages, onSelectImage]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!activeImage) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, onClose, handlePrev, handleNext]);

  if (!activeImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview lightbox"
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl text-white select-none animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Header Bar */}
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 bg-black/50">
        <div className="flex items-center gap-3">
          <span className="font-kaushan text-abwa-gold text-base sm:text-lg">
            {activeImage.programmeNumber} / 12
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="text-xs sm:text-sm font-semibold text-white/90 truncate max-w-[200px] sm:max-w-md">
            {activeImage.programmeTitle}
          </span>
          <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full text-white/70 font-mono">
            {currentIndex + 1} of {allImages.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close image lightbox"
          className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      {/* Main Image Stage */}
      <div className="relative flex-1 w-full h-full flex items-center justify-center p-2 sm:p-6 md:p-10">
        {/* Previous Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous image"
          className="absolute left-3 sm:left-6 z-20 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full bg-black/60 hover:bg-white/20 border border-white/20 text-white shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Image */}
        <div className="relative w-full h-full max-w-6xl max-h-[80vh] flex items-center justify-center">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="100vw"
            priority
            className="object-contain drop-shadow-2xl"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next image"
          className="absolute right-3 sm:right-6 z-20 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full bg-black/60 hover:bg-white/20 border border-white/20 text-white shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Information Footer */}
      <footer className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-8 py-3 sm:py-4 border-t border-white/10 bg-black/60 text-xs sm:text-sm text-white/80">
        <p className="line-clamp-2 text-center sm:text-left text-white/90 max-w-3xl">
          {activeImage.caption}
        </p>

        <Link
          href={`/programs/${activeImage.programmeSlug}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-abwa-blue text-white hover:bg-abwa-blue-hover font-semibold text-xs transition-colors shrink-0"
        >
          <span>Explore Programme</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </footer>
    </div>
  );
}
