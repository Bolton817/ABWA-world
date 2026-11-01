import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { programmesData } from "@/content/programmes";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const FEATURED_SLUGS = [
  "education-child-wellbeing",
  "youth-empowerment",
  "womens-empowerment-sustainable-agriculture",
  "food-security-sustainable-agriculture",
  "environmental-conservation",
  "health-community-wellbeing",
];

const ctaMap: Record<string, string> = {
  "education-child-wellbeing": "Explore education support",
  "youth-empowerment": "Explore youth skills",
  "womens-empowerment-sustainable-agriculture": "Explore women's enterprise",
  "food-security-sustainable-agriculture": "Explore food security",
  "environmental-conservation": "Explore climate action",
  "health-community-wellbeing": "Explore health & wellbeing",
};

export function HomeProgrammes() {
  const featuredProgrammes = FEATURED_SLUGS.map((slug) =>
    programmesData.find((p) => p.slug === slug)
  ).filter((p): p is (typeof programmesData)[number] => Boolean(p));

  return (
    <Section surface="pale">
      <Container>
        {/* Section Header with ScrollReveal */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <SectionHeader
            eyebrow="What we do"
            title="Our programmes"
            description="Our work grows out of conversations with the communities we partner with. These are the main thematic areas we focus on."
            action={
              <Button href="/programs" variant="outline" size="md">
                <span>View all 10 programme areas</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            }
          />
        </ScrollReveal>

        {/* 6-Card Programmes Grid with Staggered ScrollReveal */}
        <ScrollReveal
          stagger={0.12}
          yOffset={32}
          duration={0.65}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {featuredProgrammes.map((item) => (
            <Card
              key={item.slug}
              title={item.title}
              subtitle={item.location}
              badge={item.category}
              badgeVariant="default"
              description={item.summary}
              imageSrc={item.heroImage}
              imageAlt={item.heroImageAlt}
              href={`/programs/${item.slug}`}
              ctaLabel={ctaMap[item.slug] || "Explore programme"}
            />
          ))}
        </ScrollReveal>

        <div className="pt-10 text-center md:hidden">
          <Button href="/programs" variant="primary" size="lg" className="w-full sm:w-auto">
            <span>View all 10 programme areas</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
