import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { programmesData } from "@/content/programmes";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { FadeIn } from "@/components/animation/FadeIn";
import { ProgrammesGridClient } from "@/components/sections/programs/ProgrammesGridClient";
import { Tag, CheckCircle2, Clock, MapPin, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programmes | 10 Thematic Pillars & Community Projects | ABWA World",
  description:
    "Explore ABWA's 10 programme pillars and grassroots community projects in Mathare (Nairobi), Kangundo (Machakos County), and Kibwezi (Makueni County).",
  alternates: {
    canonical: `${siteConfig.url}/programs`,
  },
  openGraph: {
    title: "Our Programmes | 10 Thematic Pillars & Community Projects | ABWA World",
    description:
      "Explore ABWA's 10 programme pillars and grassroots community projects in Mathare (Nairobi), Kangundo (Machakos County), and Kibwezi (Makueni County).",
    url: `${siteConfig.url}/programs`,
  },
};

export default function ProgrammesPage() {
  return (
    <div>
      {/* 1. Page Hero with single H1 & Breadcrumbs */}
      <PageHero
        title="Our Programmes"
        subtitle="10 thematic pillars and place-based community projects across Kenya."
        description="Explore the areas we work in, what happens on the ground with communities, and how you can get involved."
        imageSrc="/images/gallery/gallery-community-education.jpg"
        imageAlt="Community members and students participating in local skills and educational programmes in Kenya"
        breadcrumbs={[{ label: "Our Programmes" }]}
      />

      {/* 2. Place-Based Community Partnerships Highlight Banner */}
      <Section surface="white" className="border-b border-abwa-border/50">
        <Container>
          <FadeIn direction="up">
            <div className="p-6 sm:p-8 rounded-3xl bg-abwa-pale border border-abwa-border space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                    Place-Based Partnerships
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-abwa-navy">
                    Active community partnerships across Kenya
                  </h2>
                </div>
                <Link
                  href="/about#geography"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-abwa-blue hover:text-abwa-blue-hover self-start sm:self-auto"
                >
                  <span>See all locations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Mathare */}
                <div className="p-4 rounded-2xl bg-white border border-abwa-border space-y-2">
                  <div className="flex items-center gap-2 text-abwa-navy font-bold text-sm">
                    <MapPin className="w-4 h-4 text-abwa-blue flex-shrink-0" />
                    <span>Mathare, Nairobi</span>
                  </div>
                  <p className="text-xs text-abwa-muted leading-relaxed">
                    Youth empowerment, digital training, creative arts, community clean-ups, river tree planting, and urban kitchen gardening.
                  </p>
                </div>

                {/* Kangundo */}
                <div className="p-4 rounded-2xl bg-white border border-abwa-border space-y-2">
                  <div className="flex items-center gap-2 text-abwa-navy font-bold text-sm">
                    <MapPin className="w-4 h-4 text-abwa-blue flex-shrink-0" />
                    <span>Kangundo, Machakos County</span>
                  </div>
                  <p className="text-xs text-abwa-muted leading-relaxed">
                    Women&apos;s empowerment, sustainable agriculture, tailoring training, village savings circles, and climate-resilient farming.
                  </p>
                </div>

                {/* Kibwezi */}
                <div className="p-4 rounded-2xl bg-white border border-abwa-border space-y-2">
                  <div className="flex items-center gap-2 text-abwa-navy font-bold text-sm">
                    <MapPin className="w-4 h-4 text-abwa-blue flex-shrink-0" />
                    <span>Kibwezi, Makueni County</span>
                  </div>
                  <p className="text-xs text-abwa-muted leading-relaxed">
                    Umisiiyu Women Group partnership, drought-resilient kitchen gardening, water conservation, and community mutual support.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* 3. Introduction, Status Transparency & Filterable Grid */}
      <Section surface="white">
        <Container>
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-4 mb-10">
              <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                Approach &amp; Structure
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                Our 10 thematic pillars and community initiatives
              </h2>
              <p className="text-base sm:text-lg text-abwa-muted leading-relaxed">
                Each programme is shaped with the community group it serves. We describe them plainly: what happens, who takes part, and what we set out to achieve together.
              </p>

              {/* Status Labels Indicator */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                <span className="font-bold text-abwa-navy">Status standards:</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Active</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Planned</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Completed</span>
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Interactive Client-Side Category Filter & Grid */}
          <ProgrammesGridClient programmes={programmesData} />
        </Container>
      </Section>

      {/* 4. Closing Call to Action */}
      <SectionCTA
        surface="navy"
        title="Want to partner or get involved?"
        description="Tell us what area interests you—from volunteer work camps to institutional partnerships—and we'll connect you with the right team."
        primaryCta={{
          label: "Contact ABWA",
          href: "/contact",
        }}
        secondaryCta={{
          label: "Volunteer Work Camps",
          href: "/volunteer",
        }}
      />
    </div>
  );
}
