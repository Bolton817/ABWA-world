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
import { FadeIn } from "@/components/animation/FadeIn";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero */}
      <HomeHero />

      {/* 2. Introduction */}
      <FadeIn direction="up">
        <HomeIntro />
      </FadeIn>

      {/* 3. Programmes Overview */}
      <FadeIn direction="up">
        <HomeProgrammes />
      </FadeIn>

      {/* 4. Featured Programme */}
      <FadeIn direction="up">
        <HomeFeaturedProgramme />
      </FadeIn>

      {/* 5. Our Approach */}
      <FadeIn direction="up">
        <HomeApproach />
      </FadeIn>

      {/* 6. Impact and Evidence */}
      <FadeIn direction="up">
        <HomeImpact />
      </FadeIn>

      {/* 7. Community Voices */}
      <FadeIn direction="up">
        <HomeCommunityVoices />
      </FadeIn>

      {/* 8. Gallery Preview */}
      <FadeIn direction="up">
        <HomeGalleryPreview />
      </FadeIn>

      {/* 9. Blog and Stories Preview */}
      <FadeIn direction="up">
        <HomeBlogPreview />
      </FadeIn>

      {/* 10. FAQ Preview */}
      <FadeIn direction="up">
        <HomeFAQPreview />
      </FadeIn>

      {/* 11. Final Call to Action */}
      <SectionCTA
        surface="navy"
        title="Let's build something good together"
        description="Whether you want to volunteer, partner with us, or simply learn more, we'd be glad to hear from you."
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
