import React from "react";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/ui/PageHero";

export function HomeHero() {
  return (
    <PageHero
      eyebrow={`${siteConfig.formalName} · ${siteConfig.contact.location}`}
      title="Community action for a better world"
      subtitle="Working with women, young people and children in Kenyan communities."
      description={`Since ${siteConfig.foundingYear}, ABWA has worked alongside community groups on farming, creative skills, environmental action and learning. We believe lasting change is built with people, not delivered to them, and we'd love you to be part of it.`}
      imageSrc="/images/heroes/hero-community-gathering.jpg"
      imageAlt="Community members collaborating on agricultural and skills projects in Kenya"
      primaryCta={{
        label: "Explore Our Programmes",
        href: "/programs",
        variant: "blue",
      }}
      secondaryCta={{
        label: "About ABWA",
        href: "/about",
        variant: "outline-white",
      }}
    />
  );
}
