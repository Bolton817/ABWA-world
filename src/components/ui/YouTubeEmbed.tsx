"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";

export interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  aspectRatio?: "16:9" | "9:16";
  badge?: string;
  duration?: string;
  className?: string;
  priority?: boolean;
}

export function YouTubeEmbed({
  videoId,
  title,
  aspectRatio = "16:9",
  badge,
  duration,
  className = "",
  priority = false,
}: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  const thumbnailUrl = thumbError
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  const isVertical = aspectRatio === "9:16";

  const containerClasses = isVertical
    ? `aspect-[9/16] w-full max-w-[320px] mx-auto rounded-2xl overflow-hidden shadow-xl border border-slate-200/40 relative bg-slate-900 group cursor-pointer select-none ${className}`
    : `aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200/40 relative bg-slate-900 group cursor-pointer select-none ${className}`;

  if (isPlaying) {
    return (
      <div className={containerClasses}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Play video: ${title}`}
      onClick={() => setIsPlaying(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsPlaying(true);
        }
      }}
      className={containerClasses}
    >
      {/* High-Resolution Thumbnail */}
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        sizes={isVertical ? "(max-width: 640px) 280px, 320px" : "(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"}
        priority={priority}
        unoptimized
        onError={() => setThumbError(true)}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Subtle Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30 transition-colors duration-300 group-hover:via-black/15" />

      {/* Top Left Category Badge */}
      {badge && (
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-abwa-gold text-abwa-navy font-bold text-xs tracking-wider shadow-md uppercase">
            {badge}
          </span>
        </div>
      )}

      {/* Bottom Right Duration Pill */}
      {duration && (
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-xs text-white font-semibold text-xs shadow-md">
            <Clock className="w-3 h-3 text-abwa-gold" />
            <span>{duration}</span>
          </span>
        </div>
      )}

      {/* Center Animated Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="relative flex items-center justify-center">
          {/* Outer Pulsing Aura */}
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-abwa-gold/30 blur-md transition-all duration-300 group-hover:scale-125 group-hover:bg-abwa-gold/50" />

          {/* Solid Play Circle */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-abwa-gold text-abwa-navy flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-300 group-active:scale-95">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-7 sm:h-7 ml-0.5"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
