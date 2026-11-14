import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { educationVideo, upcyclingShort, artVideo } from "@/content/videos";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  Sparkles,
  Quote,
  GraduationCap,
  Scissors,
  Palette,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ProgrammeVideoSpotlightProps {
  slug: string;
}

export function ProgrammeVideoSpotlight({ slug }: ProgrammeVideoSpotlightProps) {
  if (slug === "education-child-wellbeing") {
    return (
      <Section surface="pale" className="border-t border-abwa-border/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Video Embed */}
            <div className="lg:col-span-7">
              <ScrollReveal yOffset={24} duration={0.6}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="font-kaushan text-abwa-gold text-lg tracking-wide block">
                      Student Testimonial
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy">
                      Student Voices: Angelina&apos;s Story
                    </h2>
                  </div>

                  <YouTubeEmbed
                    videoId={educationVideo.id}
                    title={educationVideo.title}
                    aspectRatio="16:9"
                    badge={educationVideo.badge}
                    duration={educationVideo.duration}
                    thumbnail={educationVideo.thumbnail}
                  />

                  <p className="text-xs text-abwa-muted italic">
                    Angelina shares what continuing her primary school education means for her dreams in Mathare.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Pull Quote & Sponsorship Callout */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal yOffset={24} duration={0.6} delay={0.1}>
                {/* Pull Quote Card */}
                <div className="p-6 sm:p-7 rounded-3xl bg-white border border-abwa-border/80 shadow-xs relative">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-abwa-gold flex items-center justify-center mb-4">
                    <Quote className="w-5 h-5 text-abwa-gold" />
                  </div>
                  <blockquote className="text-base sm:text-lg text-abwa-navy font-semibold leading-relaxed mb-4">
                    &ldquo;My dream is to complete my education and become a teacher. When ABWA supported my schooling, it gave my family relief and gave me back my future.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-abwa-pale text-abwa-blue flex items-center justify-center font-bold text-xs">
                      A
                    </div>
                    <div>
                      <p className="text-sm font-bold text-abwa-navy">Angelina</p>
                      <p className="text-xs text-abwa-muted">Primary School Student, Mathare</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Impact Highlights */}
              <ScrollReveal yOffset={20} duration={0.6} delay={0.2}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-abwa-ink">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct school fees, uniforms, and learning supplies</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-abwa-ink">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Safe classroom environments and student mentoring</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-abwa-ink">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Holistic health checkups and nutritional support</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal yOffset={20} duration={0.6} delay={0.3}>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/partner-with-us"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-abwa-blue text-white text-xs sm:text-sm font-semibold hover:bg-abwa-blue-hover transition-colors shadow-sm"
                  >
                    <GraduationCap className="w-4 h-4 text-abwa-gold" />
                    <span>Support a Student</span>
                  </Link>
                  <Link
                    href="/stories"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white border border-abwa-border text-xs sm:text-sm font-semibold text-abwa-navy hover:bg-abwa-pale transition-colors shadow-2xs"
                  >
                    <span>Read More Stories</span>
                    <ArrowRight className="w-3.5 h-3.5 text-abwa-gold" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  if (slug === "youth-empowerment") {
    return (
      <Section surface="pale" className="border-t border-abwa-border/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: 9:16 Short Video Embed */}
            <div className="lg:col-span-5 flex justify-center">
              <ScrollReveal yOffset={24} duration={0.6} className="w-full">
                <div className="space-y-4">
                  <div className="space-y-2 lg:hidden">
                    <span className="font-kaushan text-abwa-gold text-lg tracking-wide block">
                      Youth Enterprise Spotlight
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                      Youth Enterprise in Action: Taka Rework
                    </h2>
                  </div>

                  <YouTubeEmbed
                    videoId={upcyclingShort.id}
                    title={upcyclingShort.title}
                    aspectRatio="9:16"
                    badge={upcyclingShort.badge}
                    duration={upcyclingShort.duration}
                    thumbnail={upcyclingShort.thumbnail}
                  />

                  <p className="text-xs text-abwa-muted text-center italic">
                    Watch Felix Ochieng Diambo craft designer bags from discarded jeans.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Narrative & Circular Economy Impact */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal yOffset={24} duration={0.6}>
                <div className="hidden lg:block space-y-2">
                  <span className="font-kaushan text-abwa-gold text-lg tracking-wide block">
                    Youth Enterprise Spotlight
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy">
                    Youth Enterprise in Action: Taka Rework
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal yOffset={20} duration={0.6} delay={0.1}>
                <p className="text-base sm:text-lg text-abwa-muted leading-relaxed">
                  In Mathare, discarded denim and textile waste are being transformed into durable backpacks, tote bags, and accessories. Led by young innovator Felix Ochieng Diambo, Taka Rework demonstrates how creative ingenuity creates sustainable livelihoods while tackling environmental waste.
                </p>
              </ScrollReveal>

              {/* Three Pillars Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ScrollReveal yOffset={16} duration={0.5} delay={0.15}>
                  <div className="p-4 rounded-2xl bg-white border border-abwa-border/80 space-y-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-abwa-blue flex items-center justify-center">
                      <Scissors className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-abwa-navy">Upcycled Denim</h3>
                    <p className="text-xs text-abwa-muted leading-relaxed">
                      Repurposing second hand fabrics into market ready fashion goods.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal yOffset={16} duration={0.5} delay={0.25}>
                  <div className="p-4 rounded-2xl bg-white border border-abwa-border/80 space-y-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-abwa-navy">Circular Economy</h3>
                    <p className="text-xs text-abwa-muted leading-relaxed">
                      Preventing textile rubbish from clogging waterways and alleys.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal yOffset={16} duration={0.5} delay={0.35}>
                  <div className="p-4 rounded-2xl bg-white border border-abwa-border/80 space-y-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                      <Heart className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-abwa-navy">Youth Jobs</h3>
                    <p className="text-xs text-abwa-muted leading-relaxed">
                      Equipping young artisans with industrial sewing skills and steady income.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Action Buttons */}
              <ScrollReveal yOffset={20} duration={0.6} delay={0.4}>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/partner-with-us"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-abwa-blue text-white text-xs sm:text-sm font-semibold hover:bg-abwa-blue-hover transition-colors shadow-sm"
                  >
                    <Heart className="w-4 h-4 text-abwa-gold" />
                    <span>Partner With Youth Makers</span>
                  </Link>
                  <Link
                    href="/programs/arts-culture-creative-development"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white border border-abwa-border text-xs sm:text-sm font-semibold text-abwa-navy hover:bg-abwa-pale transition-colors shadow-2xs"
                  >
                    <span>View Arts Programme</span>
                    <ArrowRight className="w-3.5 h-3.5 text-abwa-gold" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  if (slug === "arts-culture-creative-development") {
    return (
      <Section surface="pale" className="border-t border-abwa-border/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: 16:9 Video Embed */}
            <div className="lg:col-span-7">
              <ScrollReveal yOffset={24} duration={0.6}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="font-kaushan text-abwa-gold text-lg tracking-wide block">
                      Creative Expression on the Ground
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy">
                      Transforming Mathare Through Art
                    </h2>
                  </div>

                  <YouTubeEmbed
                    videoId={artVideo.id}
                    title={artVideo.title}
                    aspectRatio="16:9"
                    badge={artVideo.badge}
                    duration={artVideo.duration}
                    thumbnail={artVideo.thumbnail}
                  />

                  <p className="text-xs text-abwa-muted italic">
                    Featuring the Miami Florida Youth Group in Mathare and their vision for community murals.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Narrative & Studio Vision */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal yOffset={24} duration={0.6} delay={0.1}>
                <p className="text-base sm:text-lg text-abwa-muted leading-relaxed">
                  Art serves as both a mirror and a catalyst for change. Through our partnership with the Miami Florida Youth Group in Mathare, young painters use community walls to convey hope, promote peace, and turn bare streets into vibrant outdoor galleries.
                </p>
              </ScrollReveal>

              {/* Art Vision Highlights */}
              <div className="space-y-3.5">
                <ScrollReveal yOffset={14} duration={0.5} delay={0.2}>
                  <div className="p-3.5 rounded-2xl bg-white border border-abwa-border/80 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-amber-50 text-amber-800 shrink-0">
                      <Palette className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-abwa-navy">Public Murals</h3>
                      <p className="text-xs text-abwa-muted leading-relaxed">
                        Brightening community corridors and communicating positive civic values.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal yOffset={14} duration={0.5} delay={0.28}>
                  <div className="p-3.5 rounded-2xl bg-white border border-abwa-border/80 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-blue-50 text-abwa-blue shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-abwa-navy">Five Year Art Centre Vision</h3>
                      <p className="text-xs text-abwa-muted leading-relaxed">
                        Establishing a permanent studio space with reliable supplies, paint, and exhibition opportunities.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Action Buttons */}
              <ScrollReveal yOffset={20} duration={0.6} delay={0.4}>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/volunteer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-abwa-blue text-white text-xs sm:text-sm font-semibold hover:bg-abwa-blue-hover transition-colors shadow-sm"
                  >
                    <Palette className="w-4 h-4 text-abwa-gold" />
                    <span>Support the Art Centre</span>
                  </Link>
                  <Link
                    href="/stories"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white border border-abwa-border text-xs sm:text-sm font-semibold text-abwa-navy hover:bg-abwa-pale transition-colors shadow-2xs"
                  >
                    <span>Explore Stories</span>
                    <ArrowRight className="w-3.5 h-3.5 text-abwa-gold" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  return null;
}
