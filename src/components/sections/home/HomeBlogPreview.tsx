import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { blogPostsData } from "@/content/blog";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function HomeBlogPreview() {
  const categoryVariantMap: Record<string, "default" | "gold" | "green"> = {
    Agriculture: "green",
    Youth: "gold",
    Volunteering: "default",
  };

  return (
    <Section surface="pale">
      <Container>
        {/* Section Header with ScrollReveal */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <SectionHeader
            eyebrow="From our blog"
            title="Ideas, lessons and updates"
            description="Short reads on community development, volunteering and the thinking behind our programmes."
            action={
              <Button href="/blog" variant="outline" size="md">
                <span>Read all articles</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            }
          />
        </ScrollReveal>

        {/* 3-Card Blog Preview with Staggered ScrollReveal */}
        <ScrollReveal
          stagger={0.12}
          yOffset={32}
          duration={0.65}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {blogPostsData.map((post) => (
            <Card
              key={post.slug}
              title={post.title}
              subtitle={`${post.category} • ${post.readTime}`}
              description={post.summary}
              imageSrc={post.heroImage}
              imageAlt={post.heroImageAlt}
              badge={post.category}
              badgeVariant={categoryVariantMap[post.category] || "default"}
              href={`/blog/${post.slug}`}
              ctaLabel="Read the article"
            />
          ))}
        </ScrollReveal>

        <div className="pt-8 text-center md:hidden">
          <Button href="/blog" variant="primary" size="lg" className="w-full sm:w-auto">
            <span>Read all articles</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
