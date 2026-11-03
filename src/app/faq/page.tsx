import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { faqData } from "@/content/faq";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFAQPageSchema, getBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | ABWA World",
  description:
    "Straight answers about ABWA: who we are, where we work, how to volunteer, how to give, and how we protect people's privacy.",
  alternates: {
    canonical: "https://abwaworld.org/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | ABWA World",
    description:
      "Straight answers about ABWA: who we are, where we work, how to volunteer, how to give, and how we protect people's privacy.",
    url: "https://abwaworld.org/faq",
    type: "website",
  },
};

export default function FAQPage() {
  const breadcrumbsList = [
    { name: "Home", url: "/" },
    { name: "Frequently Asked Questions", url: "/faq" },
  ];

  return (
    <>
      <JsonLd data={[getFAQPageSchema(faqData), getBreadcrumbSchema(breadcrumbsList)]} />
      {/* 1. Page Hero */}
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Straight answers to common questions."
        description="If you can't find what you're looking for, we're happy to help."
        imageSrc="/images/programs/education_&_child_development/1abwa (1).jpeg"
        imageAlt="Community meeting and discussion on local initiatives and programmes in Kenya"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Frequently Asked Questions", href: "/faq" },
        ]}
      />

      {/* 2. FAQ Accordion Section */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                Clear & Honest Answers
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
                Questions and answers
              </h2>
              <p className="mt-3 text-base text-abwa-ink/75">
                Browse by topic below or expand all questions to read our complete responses.
              </p>
            </div>

            {/* Accordion Component */}
            <FAQAccordion items={faqData} />
          </div>
        </Container>
      </Section>

      {/* 3. Closing CTA */}
      <SectionCTA
        surface="navy"
        title="Still have a question?"
        description="If you can't find the answer you're looking for, we'd be glad to talk through any details directly."
        imageSrc="/images/programs/water_sanitation_&_hygiene/1abwa (13).jpeg"
        imageAlt="Community water access point management and hygiene education in Kenya"
        primaryCta={{
          label: "Contact ABWA",
          href: "/contact",
        }}
        secondaryCta={{
          label: "Explore Programmes",
          href: "/programs",
        }}
      />
    </>
  );
}
