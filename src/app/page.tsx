import React from "react";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeIntro } from "@/components/sections/home/HomeIntro";
import { HomeProgrammes } from "@/components/sections/home/HomeProgrammes";
import { HomeFeaturedProgramme } from "@/components/sections/home/HomeFeaturedProgramme";
import { HomeApproach } from "@/components/sections/home/HomeApproach";
import { HomeImpact } from "@/components/sections/home/HomeImpact";
import { HomeCommunityVoices } from "@/components/sections/home/HomeCommunityVoices";
import { HomeGalleryPreview } from "@/components/sections/home/HomeGalleryPreview";
import { HomeBlogPreview } from "@/components/sections/home/HomeBlogPreview";
import { HomeFAQPreview } from "@/components/sections/home/HomeFAQPreview";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero: Coordinated Reveal & Background Parallax */}
      <HomeHero />

      {/* 2. Introduction: Split Text & Visual Reveal */}
      <HomeIntro />

      {/* 3. Programmes Overview: Staggered 4-Card Cascade */}
      <HomeProgrammes />

      {/* 4. Featured Programme: Pinned Split-Screen Storytelling (Unwrapped to allow full viewport fixed pinning) */}
      <HomeFeaturedProgramme />

      {/* 5. Our Approach: Staggered Principles */}
      <HomeApproach />

      {/* 6. Impact and Evidence */}
      <ScrollReveal yOffset={24} duration={0.6}>
        <HomeImpact />
      </ScrollReveal>

      {/* 7. Community Voices */}
      <ScrollReveal yOffset={24} duration={0.6}>
        <HomeCommunityVoices />
      </ScrollReveal>

      {/* 8. Gallery Preview: Pinned Horizontal Scroll Track (Unwrapped to allow full viewport fixed pinning) */}
      <HomeGalleryPreview />

      {/* 9. Blog and Stories Preview: Staggered Article Cards */}
      <HomeBlogPreview />

      {/* 10. FAQ Preview */}
      <ScrollReveal yOffset={24} duration={0.6}>
        <HomeFAQPreview />
      </ScrollReveal>

      {/* 11. Final Call to Action */}
      <SectionCTA
        surface="navy"
        title="Let's build something good together"
        description="Whether you want to volunteer, partner with us, or simply learn more, we'd be glad to hear from you."
        imageSrc="/images/programs/community_development_social_support/6abwa (73).jpeg"
        imageAlt="Grassroots community gathering and mutual social support network in Kenya"
        primaryCta={{
          label: "Get Involved",
          href: "/get-involved",
        }}
        secondaryCta={{
          label: "Contact ABWA",
          href: "/contact",
        }}
      />
    </div>
  );
}
