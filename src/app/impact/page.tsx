import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Sparkles, Sprout, TreePine, BookOpen } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Our Impact | How ABWA Measures and Shares Change | ABWA World",
  description:
    "How ABWA thinks about impact, what we can show honestly so far, and how we will share verified results and community stories.",
  alternates: {
    canonical: "https://abwaworld.org/impact",
  },
  openGraph: {
    title: "Our Impact | How ABWA Measures and Shares Change | ABWA World",
    description:
      "How ABWA thinks about impact, what we can show honestly so far, and how we will share verified results and community stories.",
    url: "https://abwaworld.org/impact",
    type: "website",
  },
};

export default function ImpactPage() {
  const breadcrumbsList = [
    { name: "Home", url: "/" },
    { name: "Our Impact", url: "/impact" },
  ];

  const frameworks = [
    {
      term: "Activity",
      meaning: "What we do.",
      example: "A tree-planting day, an art lesson, a farming session.",
      note: "Observable and direct.",
    },
    {
      term: "Output",
      meaning: "What the activity produces.",
      example: "How many people took part, how many sessions ran.",
      note: "Counted only once we have verified records.",
    },
    {
      term: "Outcome",
      meaning: "What changes for people.",
      example: "A new skill, a better harvest, more confidence.",
      note: "Described only once there is evidence.",
    },
    {
      term: "Long-term impact",
      meaning: "Lasting change over years.",
      example: "Self-sustaining livelihoods, cleaner rivers, stronger community resilience.",
      note: "Something we hope for and do not claim until we can show it.",
    },
  ];

  const pillars = [
    {
      title: "Art & Music with Young People",
      description: "Creative workshops, talent recording, and community engagement in Mathare.",
      icon: Sparkles,
      href: "/programs/youth-empowerment",
    },
    {
      title: "Tree Planting & Waste Reduction",
      description: "Environmental action along the Mathare River, cleanups, and creative plastic reuse.",
      icon: TreePine,
      href: "/programs/environmental-conservation",
    },
    {
      title: "Vegetable Farming with Women's Groups",
      description: "Sustainable cultivation, soil care, and kitchen gardens in Kangundo and Kibwezi.",
      icon: Sprout,
      href: "/programs/womens-empowerment-sustainable-agriculture",
    },
    {
      title: "Learning Support in Schools",
      description: "Classroom assistance, peer mentoring for teenage girls, and skills sharing.",
      icon: BookOpen,
      href: "/programs",
    },
  ];

  return (
    <>
      <JsonLd data={[getBreadcrumbSchema(breadcrumbsList)]} />

      {/* 1. Page Hero */}
      <PageHero
        title="Our Impact"
        subtitle="How we think about change, and what we can honestly show so far."
        description="We would rather share a few things we can stand behind than many we can't."
        imageSrc="/images/heroes/hero-community-gathering.jpg"
        imageAlt="Community members gathered for local planning in Kenya"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Impact", href: "/impact" },
        ]}
      />

      {/* 2. Four different things, kept apart */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
              Accountability Framework
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
              Four different things, kept apart
            </h2>
            <p className="mt-4 text-base leading-relaxed text-abwa-ink/80 sm:text-lg">
              People often use &ldquo;impact&rdquo; to mean everything from an event to a lifetime of change. We
              try to be more careful, and to keep these four things apart.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {frameworks.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-abwa-blue">
                      Level {idx + 1}
                    </span>
                    <span className="text-xs text-abwa-ink/50 italic">{item.note}</span>
                  </div>
                  <h3 className="mt-2 font-heading text-xl font-bold text-abwa-navy">
                    {item.term}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-abwa-gold">
                    {item.meaning}
                  </p>
                  <p className="mt-3 text-sm text-abwa-ink/80 leading-relaxed">
                    {item.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. What we can share now */}
      <Section className="bg-slate-50/70 border-t border-slate-100">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
              Ground Reality
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
              What we can share now
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-abwa-ink/80 sm:text-lg text-left">
              <p>
                Right now, the most honest thing we can offer is a clear picture of what our projects involve: art
                and music with young people, tree planting and waste reduction, vegetable farming with women&apos;s
                groups, and learning support in schools. You can read about each on our programme pages.
              </p>
              <p>
                We&apos;re gathering and checking the figures and stories behind this work. When we publish a number,
                we&apos;ll tell you what it counts, the time period it covers and where it comes from.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={idx}
                  href={pillar.href}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-abwa-blue/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-abwa-pale text-abwa-blue flex items-center justify-center group-hover:bg-abwa-blue group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-abwa-navy group-hover:text-abwa-blue transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-abwa-ink/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-abwa-blue group-hover:text-abwa-navy">
                    <span>View programme details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-xl bg-abwa-navy px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-abwa-blue transition"
            >
              <span>Explore Our Programmes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 4. Stories from the communities */}
      <Section className="bg-white border-t border-slate-100">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-abwa-border/80 bg-abwa-pale/40 p-8 sm:p-10 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
              Real Lives
            </span>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-abwa-navy">
              Stories from the communities
            </h2>
            <p className="mt-4 text-base text-abwa-ink/80 leading-relaxed">
              Numbers can&apos;t tell the whole story. We share stories only with the informed consent of the
              people in them.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/stories"
                className="inline-flex items-center gap-2 rounded-xl bg-abwa-blue px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-abwa-blue-hover transition"
              >
                <span>Read community stories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-abwa-navy hover:bg-slate-50 transition"
              >
                <span>View project gallery</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Closing Call to Action */}
      <SectionCTA
        title="Help us tell this story well"
        description="If you'd like to support our work, or ask how we measure it, we'd be glad to talk."
        primaryCta={{
          label: "Get Involved",
          href: "/get-involved",
        }}
        secondaryCta={{
          label: "Contact ABWA",
          href: "/contact",
        }}
        surface="pale"
      />
    </>
  );
}
