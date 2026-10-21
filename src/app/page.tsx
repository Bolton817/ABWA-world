import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero per TDD Module 030 & 033 */}
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

      {/* 2. Brand Identity & Shared UI Primitives Preview */}
      <Section surface="white">
        <Container>
          <SectionHeader
            eyebrow="Stage 02 Primitives"
            title="Brand Assets, UI Primitives & Image Inventory"
            description="All brand SVGs, button variants, responsive cards, and hero templates now resolve from local files."
          />

          {/* Logo showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-8 rounded-xl border border-abwa-border bg-white flex flex-col justify-between space-y-4 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-abwa-muted">
                Primary Brand Mark (`logo.svg`)
              </span>
              <div className="py-2">
                <Image
                  src="/images/brand/logo.svg"
                  alt="Action for Better World Association primary logo"
                  width={300}
                  height={75}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-xs text-abwa-muted">
                Used in expanded desktop header, brand navigation, and light surfaces.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-abwa-navy bg-abwa-navy text-white flex flex-col justify-between space-y-4 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
                Inverted Brand Mark (`logo-white.svg`)
              </span>
              <div className="py-2">
                <Image
                  src="/images/brand/logo-white.svg"
                  alt="Action for Better World Association white logo"
                  width={300}
                  height={75}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-xs text-slate-300">
                Used in dark footers and high-contrast hero headers.
              </p>
            </div>
          </div>

          {/* Button variants showcase */}
          <div className="p-8 rounded-xl bg-abwa-pale border border-abwa-border space-y-4">
            <h3 className="text-lg font-bold text-abwa-navy">
              Standardized Button Variants & States
            </h3>
            <p className="text-sm text-abwa-muted">
              Built with polymorphic Next.js Link support, loading indicators, and WCAG focus-visible rings.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="primary" size="md">
                Primary Navy
              </Button>
              <Button variant="blue" size="md">
                Brand Blue
              </Button>
              <Button variant="gold" size="md">
                Warm Gold
              </Button>
              <Button variant="secondary" size="md">
                Secondary Pale
              </Button>
              <Button variant="outline" size="md">
                Outline
              </Button>
              <Button variant="ghost" size="md">
                Ghost Action
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Sample Programme Cards Grid with Local Images */}
      <Section surface="pale">
        <Container>
          <SectionHeader
            eyebrow="Local Media Verification"
            title="Programme Card Primitives"
            description="Testing local SVG asset rendering, responsive card grid, and hover microinteractions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
        </Container>
      </Section>

      {/* 4. Final Section CTA Primitive */}
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
