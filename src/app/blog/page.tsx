import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { blogPostsData } from "@/content/blog";
import { BlogIndexClient } from "@/components/blog/BlogIndexClient";

export const metadata: Metadata = {
  title: "Blog | Community Development Stories and Ideas | ABWA",
  description:
    "Read ABWA's articles on sustainable farming, youth empowerment and ethical volunteering in Kenya.",
  alternates: {
    canonical: "https://abwaworld.org/blog",
  },
  openGraph: {
    title: "Blog | Community Development Stories and Ideas | ABWA",
    description:
      "Read ABWA's articles on sustainable farming, youth empowerment and ethical volunteering in Kenya.",
    url: "https://abwaworld.org/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        title="Blog"
        subtitle="Notes from our work, and ideas worth sharing."
        description="Short, practical reads on community development, volunteering and the thinking behind our programmes."
        imageSrc="/images/programs/youth_empowerment_&_skills/7abwa (31).jpeg"
        imageAlt="Young people and volunteers participating in community activities and skills development in Kenya"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      {/* 2. Introduction from the ABWA Team */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
              Knowledge Sharing
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
              From the ABWA team
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-abwa-ink/80">
              We write about what we&apos;re learning and what we believe, including the things we are still working out.
              We aim to be useful first, and we try to keep the claims honest.
            </p>
          </div>

          {/* Interactive Articles Grid with Category Filter */}
          <div className="mt-12">
            <BlogIndexClient initialPosts={blogPostsData} />
          </div>
        </Container>
      </Section>

      {/* 3. Closing CTA */}
      <SectionCTA
        surface="navy"
        title="Have a question or an idea?"
        description="We'd love to hear your thoughts on these articles or explore ideas for practical collaboration."
        imageSrc="/images/programs/women_empowerment_&_agriculture/6abwa (60).jpeg"
        imageAlt="Women community leaders and farmers exchanging knowledge and techniques in Kenya"
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
