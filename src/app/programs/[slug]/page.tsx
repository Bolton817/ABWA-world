import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { programmesData } from "@/content/programmes";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animation/FadeIn";
import {
  MapPin,
  CheckCircle2,
  Check,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  BookOpen,
} from "lucide-react";

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
    },
  };
}

export default function ProgrammeDetailPage({ params }: ProgrammePageProps) {
  const programme = programmesData.find((p) => p.slug === params.slug);

  if (!programme) {
    notFound();
  }

  const relatedProgramme = programmesData.find((p) => p.slug === programme.relatedSlug);

  return (
    <div>
      {/* 1. Page Hero with single H1 & Breadcrumbs */}
      <PageHero
        title={programme.title}
        subtitle={programme.subtitle}
        description={programme.description}
        imageSrc={programme.heroImage}
        imageAlt={programme.heroImageAlt}
        breadcrumbs={[
          { label: "Our Programmes", href: "/programs" },
          { label: programme.title },
        ]}
        primaryCta={{
          label: programme.ctaText,
          href: `/contact?topic=${programme.contactTopic}`,
          variant: "blue",
        }}
        secondaryCta={
          programme.secondaryCta
            ? {
                label: programme.secondaryCta.label,
                href: programme.secondaryCta.href,
                variant: "outline-white",
              }
            : undefined
        }
      />

      {/* 2. Context & Need */}
      <Section surface="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
                  Context & Need
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                  About this programme
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-abwa-muted leading-relaxed">
                {programme.context.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Location & Status Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-abwa-pale border border-abwa-border space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
                  Programme Details
                </span>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-abwa-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-abwa-navy block">Location</span>
                      <span className="text-abwa-muted">{programme.location}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 pt-2 border-t border-abwa-border/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-abwa-navy block">Status</span>
                      <span className="text-emerald-700 font-semibold">{programme.status}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
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

      {/* 3. What Happens on the Programme */}
      <Section surface="pale">
        <Container>
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-2 mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
                Activities & Delivery
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                What happens on the programme
              </h2>
              <p className="text-sm sm:text-base text-abwa-muted">
                These are the collaborative learning and community action areas shaped alongside local partners.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programme.whatHappens.map((group, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-abwa-border shadow-2xs space-y-4"
              >
                <h3 className="text-lg font-bold text-abwa-navy border-b border-slate-100 pb-3">
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
        </Container>
      </Section>

      {/* 4. Intended Outcomes & Safeguarding */}
      <Section surface="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Intended Outcomes */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
                  Impact Framework
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                  What we hope to achieve
                </h2>
                <p className="text-sm text-abwa-muted">
                  This programme aims to build practical skills and confidence. We do not publish yield or employment promises without verifiable evidence.
                </p>
              </div>

              <div className="space-y-3">
                {programme.aims.map((aim, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-abwa-pale/60 border border-abwa-border flex items-start gap-3 text-sm text-abwa-ink"
                  >
                    <CheckCircle2 className="w-5 h-5 text-abwa-blue flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{aim}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safeguarding Card or Related Pillar */}
            <div className="lg:col-span-5 space-y-6">
              {programme.safeguardingNote && (
                <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/60 border border-amber-200/80 space-y-3 shadow-2xs">
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
                <div className="p-6 rounded-3xl bg-slate-50 border border-abwa-border space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-abwa-muted">
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
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Final Call to Action */}
      <SectionCTA
        surface="navy"
        title="Want to know more?"
        description="If you'd like to ask about this programme, support it or partner with us on it, we'd be glad to talk."
        primaryCta={{
          label: programme.ctaText,
          href: `/contact?topic=${programme.contactTopic}`,
        }}
        secondaryCta={{
          label: "Explore all programmes",
          href: "/programs",
        }}
      />
    </div>
  );
}