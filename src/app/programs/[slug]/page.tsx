import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { programmesData } from "@/content/programmes";
import { Programme } from "@/types";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { FadeIn } from "@/components/animation/FadeIn";
import {
  MapPin,
  CheckCircle2,
  Check,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Target,
  FolderCheck,
  Sparkles,
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema";

interface ProgrammePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return programmesData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: ProgrammePageProps): Promise<Metadata> {
  const programme = programmesData.find((p) => p.slug === params.slug);
  if (!programme) {
    return {
      title: "Programme Not Found | ABWA World",
    };
  }

  return {
    title: programme.metaTitle,
    description: programme.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/programs/${programme.slug}`,
    },
    openGraph: {
      title: programme.metaTitle,
      description: programme.metaDescription,
      url: `${siteConfig.url}/programs/${programme.slug}`,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}${programme.heroImage}`,
          alt: programme.heroImageAlt,
        },
      ],
    },
  };
}

function getPrimaryCtaHref(prog: Programme): string {
  if (
    prog.slug === "health-community-wellbeing" ||
    prog.slug === "water-sanitation-hygiene-wash" ||
    prog.slug === "community-development-social-support"
  ) {
    return "/partner-with-us";
  }
  if (
    prog.slug === "environmental-conservation" ||
    prog.slug === "arts-culture-creative-development"
  ) {
    return "/volunteer";
  }
  if (prog.slug === "poverty-reduction-livelihoods") {
    return "/get-involved";
  }
  return `/contact?topic=${prog.contactTopic}`;
}

export default function ProgrammeDetailPage({ params }: ProgrammePageProps) {
  const programme = programmesData.find((p) => p.slug === params.slug);

  if (!programme) {
    notFound();
  }

  const relatedProgramme = programmesData.find((p) => p.slug === programme.relatedSlug);
  const primaryCtaHref = getPrimaryCtaHref(programme);

  const breadcrumbsList = [
    { name: "Home", url: "/" },
    { name: "Our Programmes", url: "/programs" },
    { name: programme.title, url: `/programs/${programme.slug}` },
  ];

  return (
    <div>
      <JsonLd data={getBreadcrumbSchema(breadcrumbsList)} />

      {/* 1. Page Hero with single H1 & Category Badge */}
      <PageHero
        title={programme.title}
        subtitle={programme.subtitle}
        description={programme.description}
        eyebrow={`${programme.category} · ${programme.location}`}
        imageSrc={programme.heroImage}
        imageAlt={programme.heroImageAlt}
        breadcrumbs={[
          { label: "Our Programmes", href: "/programs" },
          { label: programme.title },
        ]}
        primaryCta={{
          label: programme.ctaText,
          href: primaryCtaHref,
          variant: "blue",
        }}
        secondaryCta={
          programme.secondaryCta
            ? {
                label: programme.secondaryCta.label,
                href: programme.secondaryCta.href,
                variant: "outline-white",
              }
            : {
                label: "All Programmes",
                href: "/programs",
                variant: "outline-white",
              }
        }
      />

      {/* 2. Goal & Community Context */}
      <Section surface="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                  Overview & Purpose
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                  About this programme
                </h2>
              </div>

              {/* Highlighted Overarching Goal */}
              {programme.goal && (
                <div className="p-6 rounded-3xl bg-abwa-pale border border-abwa-border/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-abwa-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-kaushan text-abwa-blue text-base tracking-wide block">
                      Overarching Programme Goal
                    </span>
                    <p className="text-base sm:text-lg font-semibold text-abwa-navy leading-snug">
                      {programme.goal}
                    </p>
                  </div>
                </div>
              )}

              {/* Context Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-abwa-muted leading-relaxed">
                {programme.context.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Location & Status Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-abwa-pale border border-abwa-border space-y-5">
                <span className="font-kaushan text-abwa-gold text-base sm:text-lg tracking-wide block">
                  Programme Details
                </span>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-bold text-abwa-navy block text-xs uppercase tracking-wider text-slate-500 mb-1">
                      Pillar Category
                    </span>
                    <span className="font-kaushan text-abwa-blue text-base tracking-wide inline-flex items-center gap-1.5">
                      <FolderCheck className="w-4 h-4 text-abwa-blue" />
                      <span>{programme.category}</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 pt-3 border-t border-abwa-border/60">
                    <MapPin className="w-4 h-4 text-abwa-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-abwa-navy block">Location</span>
                      <span className="text-abwa-muted">{programme.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-3 border-t border-abwa-border/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-abwa-navy block">Current Status</span>
                      <span className="text-emerald-700 font-semibold">{programme.status}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-abwa-border/60">
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-abwa-blue hover:text-abwa-blue-hover"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to all programmes</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Objectives */}
      {programme.objectives && programme.objectives.length > 0 && (
        <Section surface="pale">
          <Container>
            <FadeIn direction="up">
              <div className="max-w-3xl space-y-2 mb-10">
                <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                  Core Objectives
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                  What this programme sets out to do
                </h2>
                <p className="text-sm sm:text-base text-abwa-muted">
                  Clear, participatory priorities established together with community partners and local groups.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programme.objectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-abwa-border shadow-2xs flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-abwa-blue border border-blue-200 flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm sm:text-base text-abwa-ink leading-relaxed font-medium">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 4. Projects and Activities on the Ground */}
      <Section surface="white">
        <Container>
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-2 mb-10">
              <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                Grassroots Delivery
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                Projects and activities on the ground
              </h2>
              <p className="text-sm sm:text-base text-abwa-muted">
                Practical, collaborative activities led alongside local residents, schools, youth and women&apos;s groups.
              </p>
            </div>
          </FadeIn>

          {/* If whatHappens exists, render structured groups; otherwise render activities grid */}
          {programme.whatHappens && programme.whatHappens.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programme.whatHappens.map((group, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-abwa-pale/50 border border-abwa-border shadow-2xs space-y-4"
                >
                  <h3 className="text-lg font-bold text-abwa-navy border-b border-slate-200/80 pb-3">
                    {group.title}
                  </h3>
                  <ul className="space-y-3">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-sm text-abwa-ink">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programme.activities.map((act, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-abwa-pale/50 border border-abwa-border flex items-start gap-3 text-sm text-abwa-ink"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-relaxed">{act}</span>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* 5. Expected Outcomes (What we hope to achieve) & Safeguarding */}
      <Section surface="pale">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Intended Outcomes */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                  Impact Framework
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                  What we hope to achieve
                </h2>
                <p className="text-sm text-abwa-muted">
                  These intended outcomes reflect our goals and working commitments. In keeping with our accountability principles, we do not present future aims as verified past metrics.
                </p>
              </div>

              <div className="space-y-3">
                {programme.intendedOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-abwa-border flex items-start gap-3.5 text-sm sm:text-base text-abwa-ink shadow-2xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-abwa-blue flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safeguarding Card or Connected Pillar */}
            <div className="lg:col-span-5 space-y-6">
              {programme.safeguardingNote && (
                <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/70 border border-amber-200/90 space-y-3 shadow-2xs">
                  <div className="flex items-center gap-2 text-amber-900 font-bold">
                    <ShieldCheck className="w-5 h-5 text-abwa-gold" />
                    <h3 className="text-base font-bold">{programme.safeguardingNote.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
                    {programme.safeguardingNote.body}
                  </p>
                </div>
              )}

              {/* Related Programme Card */}
              {relatedProgramme && (
                <div className="p-6 rounded-3xl bg-white border border-abwa-border space-y-3 shadow-2xs">
                  <span className="font-kaushan text-abwa-gold text-base tracking-wide block">
                    Connected Programme
                  </span>
                  <h4 className="text-base font-bold text-abwa-navy">
                    {relatedProgramme.title}
                  </h4>
                  <p className="text-xs text-abwa-muted line-clamp-2">
                    {relatedProgramme.summary}
                  </p>
                  <Link
                    href={`/programs/${relatedProgramme.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-abwa-blue hover:text-abwa-blue-hover pt-1"
                  >
                    <span>View connected project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

              {/* General Accountability Link */}
              <div className="p-6 rounded-3xl bg-white border border-abwa-border space-y-3 shadow-2xs">
                <div className="flex items-center gap-2 text-abwa-navy font-bold">
                  <Sparkles className="w-4 h-4 text-abwa-blue" />
                  <h4 className="text-sm font-bold">Our Impact &amp; M&amp;E Framework</h4>
                </div>
                <p className="text-xs text-abwa-muted leading-relaxed">
                  Learn how ABWA plans projects, conducts monitoring and evaluation, and ensures community handover.
                </p>
                <Link
                  href="/impact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-abwa-blue hover:text-abwa-blue-hover"
                >
                  <span>Read our impact framework</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Final Call to Action */}
      <SectionCTA
        surface="navy"
        title="Want to get involved?"
        description="Whether you would like to volunteer on this programme, partner with our teams, or support community activities, we would be glad to talk."
        primaryCta={{
          label: programme.ctaText,
          href: primaryCtaHref,
        }}
        secondaryCta={{
          label: "Explore all programmes",
          href: "/programs",
        }}
      />
    </div>
  );
}