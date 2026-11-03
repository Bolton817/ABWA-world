import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { GalleryClient } from "@/components/gallery/GalleryClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Photo Gallery | ABWA World Community Projects | ABWA World",
  description:
    "Photographs from ABWA's community projects in Kenya, shared with the consent of the people pictured.",
  alternates: {
    canonical: "https://abwaworld.org/gallery",
  },
  openGraph: {
    title: "Photo Gallery | ABWA World Community Projects | ABWA World",
    description:
      "Photographs from ABWA's community projects in Kenya, shared with the consent of the people pictured.",
    url: "https://abwaworld.org/gallery",
    type: "website",
  },
};

export default function GalleryPage() {
  const breadcrumbsList = [
    { name: "Home", url: "/" },
    { name: "Gallery", url: "/gallery" },
  ];

  return (
    <>
      <JsonLd data={[getBreadcrumbSchema(breadcrumbsList)]} />

      {/* 1. Page Hero */}
      <PageHero
        title="Gallery"
        subtitle="A look at life in our projects."
        description="Photographs from community projects and events, shared with consent."
        imageSrc="/images/programs/arts_culture_&_creative_development/7abwa (7).jpeg"
        imageAlt="Children and young people holding creative artwork and celebrating community creativity in Kenya"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />

      {/* 2. Consent & Takedown Promise (Verbatim Copy Deck p. 44) */}
      <Section className="bg-white pb-6">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
              Dignity & Consent
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
              Moments from our work
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-abwa-ink/80">
              Every photograph here is shared with the permission of the people in it. If you appear in a photo and
              would like it taken down, please contact us and we will remove it promptly.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Pinned Opposing-Scroll Gallery Across 12 Programme Collections (378 Authentic Photos) */}
      <div className="w-full">
        <GalleryClient />
      </div>

      {/* 4. Closing Call to Action (Verbatim Copy Deck p. 45) */}
      <SectionCTA
        surface="navy"
        title="Want to see this for yourself?"
        description="There is more than one way to be part of our work, whether through volunteering, partnership, or community support."
        imageSrc="/images/programs/arts_culture_&_creative_development/7abwa (7).jpeg"
        imageAlt="Children and young people presenting creative paintings and cultural artwork in Mathare, Nairobi"
        primaryCta={{
          label: "Get Involved",
          href: "/get-involved",
        }}
        secondaryCta={{
          label: "Contact ABWA",
          href: "/contact",
        }}
      />
    </>
  );
}
