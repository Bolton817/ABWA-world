"use client";

import React, { useState, useMemo } from "react";
import { galleryProgrammes, GalleryImage, totalGalleryImages } from "@/content/gallery";
import { GalleryProgrammeSection } from "@/components/gallery/GalleryProgrammeSection";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { GalleryNav } from "@/components/gallery/GalleryNav";

export function GalleryClient() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const [activeProgrammeSlug, setActiveProgrammeSlug] = useState<string>(
    galleryProgrammes[0].slug
  );

  // Flatten all 378 images for seamless lightbox cycling across or within sections
  const allImages = useMemo(() => {
    return galleryProgrammes.flatMap((p) => p.images);
  }, []);

  return (
    <div className="relative w-full">
      {/* Sticky Programme Navigation Pill Bar */}
      <GalleryNav activeProgrammeSlug={activeProgrammeSlug} />

      {/* 12 Pinned Programme Sections */}
      <div className="relative w-full mt-4">
        {galleryProgrammes.map((section) => (
          <GalleryProgrammeSection
            key={section.id}
            section={section}
            onSelectImage={(img) => setActiveImage(img)}
            onSectionEnter={(slug) => setActiveProgrammeSlug(slug)}
          />
        ))}
      </div>

      {/* Global Fullscreen Lightbox Modal */}
      <GalleryLightbox
        activeImage={activeImage}
        allImages={allImages}
        onClose={() => setActiveImage(null)}
        onSelectImage={(img) => setActiveImage(img)}
      />
    </div>
  );
}
