import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import {
  flagshipVideo,
  artVideo,
  educationVideo,
  upcyclingShort,
} from "@/content/videos";
import { siteConfig } from "@/config/site";
import { YouTubeIcon } from "@/components/ui/SocialIcons";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { MapPin, ArrowRight, ExternalLink, Sparkles } from "lucide-react";

export function StoriesVideoSection() {
  return (
    <Section surface="white" className="border-t border-slate-100">
      <Container>
        {/* Section Heading */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
              Community in Motion
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-abwa-navy">
              Watch Our Stories from the Field
            </h2>
            <p className="text-base sm:text-lg text-abwa-muted leading-relaxed">
              Real journeys of resilience, creative youth enterprise, and global partnership captured on film.
            </p>
          </div>
        </ScrollReveal>

        {/* 1. Featured Flagship Documentary (Hero Card) */}
        <ScrollReveal yOffset={24} duration={0.6} delay={0.1}>
          <div className="rounded-3xl bg-abwa-pale/40 border border-abwa-border p-6 sm:p-8 lg:p-10 shadow-xs mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left: 16:9 Player */}
              <div className="lg:col-span-7">
                <YouTubeEmbed
                  videoId={flagshipVideo.id}
                  title={flagshipVideo.title}
                  aspectRatio="16:9"
                  badge={flagshipVideo.badge}
                  duration={flagshipVideo.duration}
                />
              </div>

              {/* Right: Narrative & Context */}
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-abwa-gold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Documentary Film</span>
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

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/partner-with-us"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-abwa-blue text-white text-xs sm:text-sm font-semibold hover:bg-abwa-blue-hover transition-colors shadow-sm"
                  >
                    <span>Partner With Us</span>
                  </Link>
                  <a
                    href={flagshipVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white border border-abwa-border text-xs sm:text-sm font-semibold text-abwa-navy hover:bg-abwa-pale transition-colors shadow-2xs"
                  >
                    <YouTubeIcon className="w-4 h-4 text-[#FF0000]" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. Three Card Community Voices Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Arts & Culture (16:9) */}
          <ScrollReveal yOffset={24} duration={0.6} delay={0.15}>
            <div className="h-full flex flex-col justify-between rounded-3xl bg-white border border-abwa-border shadow-xs hover:shadow-md transition-shadow p-5 sm:p-6 space-y-5">
              <div className="space-y-4">
                <YouTubeEmbed
                  videoId={artVideo.id}
                  title={artVideo.title}
                  aspectRatio="16:9"
                  badge={artVideo.badge}
                  duration={artVideo.duration}
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-abwa-blue uppercase tracking-wider">
                      {artVideo.badge}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-abwa-muted">
                      {artVideo.locations.join(", ")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-abwa-navy leading-snug">
                    {artVideo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-abwa-muted leading-relaxed line-clamp-3">
                    {artVideo.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/programs/arts-culture-creative-development"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-abwa-blue hover:text-abwa-navy transition-colors"
                >
                  <span>View Arts Programme</span>
                  <ArrowRight className="w-3.5 h-3.5 text-abwa-gold" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Education Testimonial (16:9) */}
          <ScrollReveal yOffset={24} duration={0.6} delay={0.25}>
            <div className="h-full flex flex-col justify-between rounded-3xl bg-white border border-abwa-border shadow-xs hover:shadow-md transition-shadow p-5 sm:p-6 space-y-5">
              <div className="space-y-4">
                <YouTubeEmbed
                  videoId={educationVideo.id}
                  title={educationVideo.title}
                  aspectRatio="16:9"
                  badge={educationVideo.badge}
                  duration={educationVideo.duration}
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-abwa-gold uppercase tracking-wider">
                      {educationVideo.badge}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-abwa-muted">
                      {educationVideo.locations.join(", ")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-abwa-navy leading-snug">
                    {educationVideo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-abwa-muted leading-relaxed line-clamp-3">
                    {educationVideo.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/programs/education-child-wellbeing"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-abwa-blue hover:text-abwa-navy transition-colors"
                >
                  <span>View Education Programme</span>
                  <ArrowRight className="w-3.5 h-3.5 text-abwa-gold" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Youth Enterprise Short (9:16 vertical) */}
          <ScrollReveal yOffset={24} duration={0.6} delay={0.35}>
            <div className="h-full flex flex-col justify-between rounded-3xl bg-white border border-abwa-border shadow-xs hover:shadow-md transition-shadow p-5 sm:p-6 space-y-5">
              <div className="space-y-4">
                <div className="max-w-[240px] mx-auto">
                  <YouTubeEmbed
                    videoId={upcyclingShort.id}
                    title={upcyclingShort.title}
                    aspectRatio="9:16"
                    badge={upcyclingShort.badge}
                    duration={upcyclingShort.duration}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
                      {upcyclingShort.badge}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-abwa-muted">
                      {upcyclingShort.locations.join(", ")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-abwa-navy leading-snug">
                    {upcyclingShort.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-abwa-muted leading-relaxed line-clamp-3">
                    {upcyclingShort.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/programs/youth-empowerment"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-abwa-blue hover:text-abwa-navy transition-colors"
                >
                  <span>View Youth Programme</span>
                  <ArrowRight className="w-3.5 h-3.5 text-abwa-gold" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 3. YouTube Channel Subscribe Banner */}
        <ScrollReveal yOffset={20} duration={0.6} delay={0.2}>
          <div className="rounded-3xl bg-gradient-to-r from-abwa-navy via-abwa-blue to-abwa-navy text-white p-7 sm:p-9 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <YouTubeIcon className="w-8 h-8 text-[#FF0000]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Subscribe to Our Official YouTube Channel
                </h3>
                <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                  Watch new community stories, field updates, and project documentaries directly from Kenya.
                </p>
              </div>
            </div>

            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF0000] text-white text-xs sm:text-sm font-bold hover:bg-[#CC0000] transition-colors shadow-sm shrink-0"
            >
              <YouTubeIcon className="w-4 h-4 text-white" />
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/80" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
