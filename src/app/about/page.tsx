import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { AboutOverview } from "@/components/sections/about/AboutOverview";
import { AboutPurpose } from "@/components/sections/about/AboutPurpose";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { AboutFocusAreas } from "@/components/sections/about/AboutFocusAreas";
import { AboutPrinciples } from "@/components/sections/about/AboutPrinciples";
import { AboutAccountability } from "@/components/sections/about/AboutAccountability";
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
        imageSrc="/images/heroes/about-our-charity-mondetta-usa.jpg"
        imageAlt="ABWA team and community partners collaborating in Nairobi, Kenya"
        breadcrumbs={[{ label: "About ABWA" }]}
        primaryCta={{
          label: "Explore Our Programmes",
          href: "/programs",
          variant: "blue",
        }}
      />

      {/* Section 2: Overview — Who We Are */}
      <AboutOverview />

      {/* Section 3: Vision, Mission & Our Commitment */}
      <AboutPurpose />

      {/* Section 4: Our Core Values */}
      <AboutValues />

      {/* Section 5: Thematic Pillars & 5-Step Process Spine */}
      <AboutFocusAreas />
      <AboutPrinciples />

      {/* Section 6: Project Planning, Accountability & Sustainability */}
      <AboutAccountability />

      {/* Section 7: Where We Work & Final Call to Action */}
      <AboutGeography />

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
