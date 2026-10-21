import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { programmesData } from "@/content/programmes";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/animation/FadeIn";
import { StaggerGroup } from "@/components/animation/StaggerGroup";
import { Tag, CheckCircle2, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programmes | ABWA World, Nairobi, Kenya",
  description:
    "Explore ABWA's community programmes in Nairobi, Machakos and Makueni counties: youth empowerment, women's farming, environmental action and more.",
  alternates: {
    canonical: `${siteConfig.url}/programs`,
  },
  openGraph: {
    title: "Our Programmes | ABWA World, Nairobi, Kenya",
    description:
      "Explore ABWA's community programmes in Nairobi, Machakos and Makueni counties: youth empowerment, women's farming, environmental action and more.",
    url: `${siteConfig.url}/programs`,
  },
};

export default function ProgrammesPage() {
  const ctaMap: Record<string, string> = {
    "youth-empowerment": "Explore youth empowerment",
    "womens-empowerment-sustainable-agriculture": "Explore women's agriculture",
    "umisiiyu-women-group": "Explore the Umisiiyu project",
    "environmental-conservation": "Explore environmental action",
  };

  return (
    <div>
      {/* 1. Page Hero with single H1 & Breadcrumbs */}
      <PageHero
        title="Our Programmes"
        subtitle="Community-led projects in Nairobi, Machakos and Makueni counties."
        description="Explore the areas we work in, what happens on a project, and how you can take part."
        imageSrc="/images/heroes/hero-programs.svg"
        imageAlt="Community members participating in local skills and farming projects in Kenya"
        breadcrumbs={[{ label: "Our Programmes" }]}
      />

      {/* 2. Introduction & Status Transparency */}
      <Section surface="white">
        <Container>
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-4 mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
                Approach
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                What we do, and how we label it
              </h2>
              <p className="text-base sm:text-lg text-abwa-muted leading-relaxed">
                Each programme is shaped with the community group it serves. We have tried to
                describe them plainly: what happens, who takes part, and where.
              </p>
              <p className="text-sm sm:text-base text-abwa-muted leading-relaxed">
                We also mark each programme with its current status, so you always know whether it
                is active, completed or planned.
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

          {/* 3. Programmes Cards Grid */}
          <StaggerGroup stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {programmesData.map((item) => (
              <Card
                key={item.slug}
                badge={item.status}
                badgeVariant="green"
                subtitle={item.location}
                title={item.title}
                description={item.summary}
                imageSrc={item.heroImage}
                imageAlt={item.heroImageAlt}
                href={`/programs/${item.slug}`}
                ctaLabel={ctaMap[item.slug] || "Explore programme"}
                className="hover:scale-[1.01]"
              />
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* 4. Closing Call to Action */}
      <SectionCTA
        surface="navy"
        title="Not sure where to start?"
        description="Tell us what interests you and we'll point you in the right direction."
        primaryCta={{
          label: "Contact ABWA",
          href: "/contact",
        }}
        secondaryCta={{
          label: "Read our FAQ",
          href: "/faq",
        }}
      />
    </div>
  );
}
