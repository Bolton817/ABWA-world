import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { FadeIn } from "@/components/animation/FadeIn";
import { AboutOverview } from "@/components/sections/about/AboutOverview";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutPurpose } from "@/components/sections/about/AboutPurpose";
import { AboutFocusAreas } from "@/components/sections/about/AboutFocusAreas";
import { AboutPrinciples } from "@/components/sections/about/AboutPrinciples";
import { AboutAccountability } from "@/components/sections/about/AboutAccountability";
import { AboutGeography } from "@/components/sections/about/AboutGeography";

export const metadata: Metadata = {
  title: "About ABWA | Action for Better World Association, Nairobi",
  description:
    "Meet Action for Better World Association: our story since 2015, our purpose, our focus areas and how we work with communities in Kenya.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About ABWA | Action for Better World Association, Nairobi",
    description:
      "Meet Action for Better World Association: our story since 2015, our purpose, our focus areas and how we work with communities in Kenya.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* 1. Page Hero with single H1 & Breadcrumbs */}
      <PageHero
        title="About ABWA"
        subtitle="A Nairobi-based community organisation working with people towards a better world."
        description="Learn who we are, what we believe and how we work alongside women, young people and children in Kenya."
        imageSrc="/images/heroes/hero-about.svg"
        imageAlt="ABWA team and community partners collaborating in Nairobi"
        breadcrumbs={[{ label: "About ABWA" }]}
        primaryCta={{
          label: "Explore Our Programmes",
          href: "/programs",
          variant: "blue",
        }}
      />

      {/* 2. Overview & At a Glance */}
      <FadeIn direction="up">
        <AboutOverview />
      </FadeIn>

      {/* 3. Founding Story */}
      <FadeIn direction="up">
        <AboutStory />
      </FadeIn>

      {/* 4. Purpose, Vision & Objectives */}
      <FadeIn direction="up">
        <AboutPurpose />
      </FadeIn>

      {/* 5. Focus Areas */}
      <FadeIn direction="up">
        <AboutFocusAreas />
      </FadeIn>

      {/* 6. Operating Principles */}
      <FadeIn direction="up">
        <AboutPrinciples />
      </FadeIn>

      {/* 7. Accountability & Governance */}
      <FadeIn direction="up">
        <AboutAccountability />
      </FadeIn>

      {/* 8. Geography */}
      <FadeIn direction="up">
        <AboutGeography />
      </FadeIn>

      {/* 9. End Call to Action */}
      <SectionCTA
        surface="navy"
        title="See what we're working on"
        description="Explore our programmes, or tell us how you'd like to be involved."
        primaryCta={{
          label: "Explore Our Programmes",
          href: "/programs",
        }}
        secondaryCta={{
          label: "Get Involved",
          href: "/get-involved",
        }}
      />
    </div>
  );
}
