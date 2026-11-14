import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import {
  flagshipVideo,
  artVideo,
  educationVideo,
} from "@/content/videos";
import { MapPin, ArrowRight, Sparkles, Heart } from "lucide-react";

export function HomeVideoSection() {
  return (
    <Section surface="white" className="border-t border-abwa-border/50">
      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
            Stories of Change
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-abwa-navy">
            Watch Our Impact in Action
          </h2>
          <p className="text-base sm:text-lg text-abwa-muted leading-relaxed">
            Authentic documentaries and field video stories from our community partnerships in Nairobi and Machakos County.
          </p>
        </div>

        {/* 1. Featured Main Player (Top Hero Card) */}
        <div className="rounded-3xl bg-abwa-pale/40 border border-abwa-border p-6 sm:p-8 lg:p-10 shadow-xs mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: 16:9 Video Player */}
            <div className="lg:col-span-7">
              <YouTubeEmbed
                videoId={flagshipVideo.id}
                title={flagshipVideo.title}
                aspectRatio="16:9"
                badge={flagshipVideo.badge}
                duration={flagshipVideo.duration}
                thumbnail={flagshipVideo.thumbnail}
                priority
              />
            </div>

            {/* Right: Documentary Narrative & Context */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-abwa-gold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Documentary</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-abwa-navy leading-tight">
                  {flagshipVideo.title}
                </h3>
              </div>

              {/* Location Badges */}
              <div className="flex flex-wrap items-center gap-2">
                {flagshipVideo.locations.map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-abwa-border text-xs font-semibold text-abwa-ink shadow-2xs"
                  >
                    <MapPin className="w-3 h-3 text-abwa-blue" />
                    <span>{loc}</span>
                  </span>
                ))}
              </div>

              <p className="text-sm sm:text-base text-abwa-muted leading-relaxed">
                {flagshipVideo.description}
              </p>

              {/* Action Links */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/partner-with-us"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-abwa-blue text-white text-xs sm:text-sm font-semibold hover:bg-abwa-blue-hover transition-colors shadow-sm"
                >
                  <Heart className="w-4 h-4 text-abwa-gold" />
                  <span>Partner With Us</span>
                </Link>
                <Link
                  href="/stories"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white border border-abwa-border text-xs sm:text-sm font-semibold text-abwa-navy hover:bg-abwa-pale transition-colors shadow-2xs"
                >
                  <span>Explore All Stories</span>
                  <ArrowRight className="w-3.5 h-3.5 text-abwa-gold" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Community Voices Grid (2-Card Symmetrical 16:9 Showcase) */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-abwa-navy tracking-tight">
              Community Voices &amp; Creative Journeys
            </h3>
            <Link
              href="/stories"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-abwa-blue hover:text-abwa-navy transition-colors"
            >
              <span>View all video stories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Card 1: Arts & Culture */}
            <div className="flex flex-col justify-between rounded-3xl border border-abwa-border bg-white p-5 sm:p-6 shadow-xs hover:border-abwa-blue/30 transition-colors">
              <div className="space-y-4">
                <YouTubeEmbed
                  videoId={artVideo.id}
                  title={artVideo.title}
                  aspectRatio="16:9"
                  badge={artVideo.badge}
                  duration={artVideo.duration}
                  thumbnail={artVideo.thumbnail}
                />
                <div className="space-y-2">
                  <span className="text-xs font-bold text-abwa-gold uppercase tracking-wider block">
                    {artVideo.badge}
                  </span>
                  <h4 className="text-lg font-bold text-abwa-navy leading-snug">
                    {artVideo.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-abwa-muted leading-relaxed">
                    {artVideo.description}
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link
                  href="/programs/arts-culture-creative-development"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-abwa-blue hover:text-abwa-navy transition-colors"
                >
                  <span>Learn about our art project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Education Testimonial */}
            <div className="flex flex-col justify-between rounded-3xl border border-abwa-border bg-white p-5 sm:p-6 shadow-xs hover:border-abwa-blue/30 transition-colors">
              <div className="space-y-4">
                <YouTubeEmbed
                  videoId={educationVideo.id}
                  title={educationVideo.title}
                  aspectRatio="16:9"
                  badge={educationVideo.badge}
                  duration={educationVideo.duration}
                  thumbnail={educationVideo.thumbnail}
                />
                <div className="space-y-2">
                  <span className="text-xs font-bold text-abwa-gold uppercase tracking-wider block">
                    {educationVideo.badge}
                  </span>
                  <h4 className="text-lg font-bold text-abwa-navy leading-snug">
                    {educationVideo.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-abwa-muted leading-relaxed">
                    {educationVideo.description}
                  </p>
                  {educationVideo.quote && (
                    <blockquote className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs italic text-amber-950/90 leading-relaxed">
                      &ldquo;{educationVideo.quote}&rdquo;
                    </blockquote>
                  )}
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link
                  href="/programs/education-child-wellbeing"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-abwa-blue hover:text-abwa-navy transition-colors"
                >
                  <span>Learn about education support</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
