import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { AboutOverview } from "@/components/sections/about/AboutOverview";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutPurpose } from "@/components/sections/about/AboutPurpose";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { AboutFocusAreas } from "@/components/sections/about/AboutFocusAreas";
import { AboutPrinciples } from "@/components/sections/about/AboutPrinciples";
import { AboutAccountability } from "@/components/sections/about/AboutAccountability";
import { AboutMoments } from "@/components/sections/about/AboutMoments";
import { AboutGeography } from "@/components/sections/about/AboutGeography";

export const metadata: Metadata = {
  title: "About ABWA | Action for Better World Association, Nairobi",
  description:
    "Learn who we are, the values that guide us, and how we partner with women, young people, children and families in Kenya.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About ABWA | Action for Better World Association, Nairobi",
    description:
      "Learn who we are, the values that guide us, and how we partner with women, young people, children and families in Kenya.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Section 1: Page Hero with single H1 & Breadcrumbs */}
      <PageHero
        eyebrow="Empowering Communities"
        title="About ABWA"
        subtitle="A Nairobi-based community organisation working alongside people towards a fairer, more sustainable world."
        description="Learn who we are, the values that guide us, and how we partner with women, young people, children and families in Kenya."
        imageSrc="/images/programs/women_empowerment_&_agriculture/6abwa (75).jpeg"
        imageAlt="ABWA community partners and volunteers collaborating warmly in Kenya"
        breadcrumbs={[{ label: "About ABWA" }]}
        primaryCta={{
          label: "Explore Our Programmes",
          href: "/programs",
          variant: "blue",
        }}
      />

      {/* Section 2: Overview — Who We Are */}
      <AboutOverview />

      {/* Section 3: Our Story — Working Together Since 2015 */}
      <AboutStory />

      {/* Section 4: Vision, Mission & Our Commitment */}
      <AboutPurpose />

      {/* Section 5: Our Core Values */}
      <AboutValues />

      {/* Section 6: Thematic Pillars & 5-Step Process Spine */}
      <AboutFocusAreas />
      <AboutPrinciples />

      {/* Section 7: Project Planning, Accountability & Sustainability */}
      <AboutAccountability />

      {/* Section 8: Community In Action Moments */}
      <AboutMoments />

      {/* Section 9: Where We Work & Final Call to Action */}
      <AboutGeography />

      <SectionCTA
        surface="navy"
        title="See what we're working on"
        description="Explore our programmes, or tell us how you'd like to be involved."
        imageSrc="/images/programs/community_development_social_support/1abwa (12).jpeg"
        imageAlt="Community partners and volunteers gathered together in Kenya"
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
