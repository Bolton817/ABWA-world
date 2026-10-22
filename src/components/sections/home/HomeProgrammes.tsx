import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { programmesData } from "@/content/programmes";
import { ArrowRight } from "lucide-react";
import { StaggerGroup } from "@/components/animation/StaggerGroup";

export function HomeProgrammes() {
  const ctaMap: Record<string, string> = {
    "youth-empowerment": "Explore youth empowerment",
    "womens-empowerment-sustainable-agriculture": "Explore women's agriculture",
    "umisiiyu-women-group": "Explore the Umisiiyu project",
    "environmental-conservation": "Explore environmental action",
  };

  return (
    <Section surface="pale">
      <Container>
        <SectionHeader
          eyebrow="What we do"
          title="Our programmes"
          description="Our work grows out of conversations with the communities we partner with. These are the main areas we focus on."
          action={
            <Button href="/programs" variant="outline" size="md">
              <span>View all programmes</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          }
        />

        <StaggerGroup stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programmesData.map((item) => (
            <Card
              key={item.slug}
              title={item.title}
              subtitle={item.location}
              description={item.summary}
              imageSrc={item.heroImage}
              imageAlt={item.heroImageAlt}
              href={`/programs/${item.slug}`}
              ctaLabel={ctaMap[item.slug] || "Explore programme"}
            />
          ))}
        </StaggerGroup>

        <div className="pt-10 text-center md:hidden">
          <Button href="/programs" variant="primary" size="lg" className="w-full sm:w-auto">
            <span>View all programmes</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
