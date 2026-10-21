import React from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animation/FadeIn";
import { StaggerGroup } from "@/components/animation/StaggerGroup";
import { MotionPrototype } from "@/components/animation/MotionPrototype";
import { Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Template with Local Image & Dark Overlay */}
      <PageHero
        eyebrow={`${siteConfig.formalName} · ${siteConfig.contact.location}`}
        title="Community action for a better world"
        subtitle="Working with women, young people and children in Kenyan communities."
        description={`Since ${siteConfig.foundingYear}, ABWA has worked alongside community groups on farming, creative skills, environmental action and learning. We believe lasting change is built with people, not delivered to them, and we'd love you to be part of it.`}
        imageSrc="/images/heroes/hero-home.svg"
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

      {/* 2. Motion System Verification & Scoped Reveals */}
      <Section surface="white">
        <Container>
          <FadeIn direction="up">
            <SectionHeader
              eyebrow="Stage 04 Verification"
              title="GSAP Integration & Motion System"
              description="ScrollTrigger reveals, staggered card cascades, and reduced-motion-safe animations are now wired with scoped component cleanup."
            />
          </FadeIn>

          {/* Motion Prototype with Parallax Image */}
          <MotionPrototype />

          {/* Typography & Premium Fonts Showcase */}
          <FadeIn direction="up" delay={0.1}>
            <div className="p-8 rounded-2xl bg-slate-50 border border-abwa-border space-y-6 mb-12 shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-abwa-gold" />
                <h3 className="text-lg font-bold text-abwa-navy font-sans">
                  Selective Premium Fonts Palette
                </h3>
              </div>
              <p className="text-sm text-abwa-muted leading-relaxed">
                Loaded via Next.js local font optimization and applied selectively via Tailwind utilities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Bold Headings */}
                <div className="p-5 rounded-xl bg-white border border-abwa-border space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-abwa-gold">
                    Display / Headings (`font-mequin` & `font-leeds`)
                  </span>
                  <div className="text-2xl font-bold text-abwa-navy font-mequin tracking-wide">
                    Action for Better World
                  </div>
                  <div className="text-xl font-bold text-abwa-navy font-leeds tracking-normal">
                    Community Leadership & Growth
                  </div>
                </div>

                {/* Calligraphy & Script */}
                <div className="p-5 rounded-xl bg-white border border-abwa-border space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-abwa-gold">
                    Calligraphy / Subheadings (`font-kaushan` & `font-ragnar`)
                  </span>
                  <div className="text-xl text-abwa-blue font-kaushan">
                    Transforming Lives Through Action
                  </div>
                  <div className="text-lg text-abwa-navy font-ragnar tracking-wider">
                    Sustainable Agriculture & Youth Skills
                  </div>
                </div>

                {/* Handwritten Accents */}
                <div className="p-5 rounded-xl bg-white border border-abwa-border space-y-2 md:col-span-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-abwa-gold">
                    Handwritten / Personal Accents (`font-anak` & `font-goldie`)
                  </span>
                  <div className="flex flex-wrap items-center gap-6">
                    <span className="text-2xl text-abwa-gold font-goldie">
                      "Built with communities, not for them."
                    </span>
                    <span className="text-lg text-abwa-ink font-anak">
                      Nairobi • Machakos • Makueni
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Staggered Programme Cards Grid */}
          <FadeIn direction="up">
            <SectionHeader
              eyebrow="Our Work"
              title="Featured Community Programmes"
              description="Cards animate with gentle staggered entry when entering viewport."
            />
          </FadeIn>

          <StaggerGroup stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              badge="Active Candidate"
              badgeVariant="green"
              subtitle="Mathare, Nairobi"
              title="Youth Empowerment and Skills"
              description="Art, music, learning support and community action led together with young people in Mathare."
              imageSrc="/images/programs/youth-hero.svg"
              imageAlt="Young people engaged in creative art, music, and learning in Mathare"
              href="/programs/youth-empowerment"
              ctaLabel="Explore youth empowerment"
            />
            <Card
              badge="Active Candidate"
              badgeVariant="gold"
              subtitle="Kangundo, Machakos"
              title="Women's Empowerment & Agriculture"
              description="Practical farming knowledge and shared learning with a women's group in Kangundo."
              imageSrc="/images/programs/agriculture-hero.svg"
              imageAlt="Women's group members preparing vegetable farming beds in Kangundo"
              href="/programs/womens-empowerment-sustainable-agriculture"
              ctaLabel="Explore women's agriculture"
            />
            <Card
              badge="Active Candidate"
              badgeVariant="default"
              subtitle="Kibwezi, Makueni"
              title="Umisiiyu Women Group"
              description="Vegetable farming and kitchen gardens in dry-climate conditions with women farmers."
              imageSrc="/images/programs/umisiiyu-hero.svg"
              imageAlt="Umisiiyu Women Group tending to drought-resilient kitchen gardens in Kibwezi"
              href="/programs/umisiiyu-women-group"
              ctaLabel="Explore Umisiiyu project"
            />
          </StaggerGroup>
        </Container>
      </Section>

      {/* 3. Final Conversion CTA Banner */}
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
