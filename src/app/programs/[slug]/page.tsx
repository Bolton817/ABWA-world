import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
  Calendar,
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
  if (prog.primaryCtaHref) {
    return prog.primaryCtaHref;
  }
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
        eyebrow={programme.eyebrow || `${programme.category} · ${programme.location}`}
        imageSrc={programme.heroImage}
        imageAlt={programme.heroImageAlt}
        breadcrumbs={[
          { label: "Our Programmes", href: "/programs" },
          { label: programme.title },
        ]}
        primaryCta={
          programme.heroPrimaryCta
            ? {
                label: programme.heroPrimaryCta.label,
                href: programme.heroPrimaryCta.href,
                variant: "blue",
              }
            : {
                label: programme.ctaText,
                href: primaryCtaHref,
                variant: "blue",
              }
        }
        secondaryCta={
          programme.heroSecondaryCta
            ? {
                label: programme.heroSecondaryCta.label,
                href: programme.heroSecondaryCta.href,
                variant: "outline-white",
              }
            : programme.secondaryCta
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
                  {programme.overviewEyebrow || "Overview & Purpose"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                  {programme.overviewTitle || "About this programme"}
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
                      {programme.goalTitle || "Overarching Programme Goal"}
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

              {/* Project Vision & Mission Callouts */}
              {(programme.vision || programme.mission) && (
                <div
                  className={`grid grid-cols-1 ${
                    programme.vision && programme.mission ? "sm:grid-cols-2" : ""
                  } gap-4 pt-4`}
                >
                  {programme.vision && (
                    <div className="p-6 rounded-3xl bg-abwa-pale border border-abwa-border space-y-2">
                      <span className="font-kaushan text-abwa-blue text-base tracking-wide block">
                        {programme.vision.title === "Our belief"
                          ? "Core conviction"
                          : "Project vision"}
                      </span>
                      <h3 className="text-xl font-bold text-abwa-navy">
                        {programme.vision.title}
                      </h3>
                      <p className="text-sm text-abwa-ink leading-relaxed">
                        {programme.vision.body}
                      </p>
                    </div>
                  )}
                  {programme.mission && (
                    <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200 space-y-2">
                      <span className="font-kaushan text-abwa-gold text-base tracking-wide block">
                        Project mission
                      </span>
                      <h3 className="text-xl font-bold text-abwa-navy">
                        {programme.mission.title}
                      </h3>
                      <p className="text-sm text-abwa-ink leading-relaxed">
                        {programme.mission.body}
                      </p>
                    </div>
                  )}
                </div>
              )}
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

      {/* 2. Achievements & Challenges 2-Column Comparison Block */}
      {programme.achievementsAndChallenges && (
        <Section surface="pale">
          <Container>
            <FadeIn direction="up">
              <div className="max-w-3xl space-y-2 mb-10">
                <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                  {programme.achievementsAndChallenges.eyebrow || "On The Ground & Looking Forward"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                  {programme.achievementsAndChallenges.title || "Progress on the ground and current challenges"}
                </h2>
                {programme.achievementsAndChallenges.subtitle && (
                  <p className="text-sm sm:text-base text-abwa-muted">
                    {programme.achievementsAndChallenges.subtitle}
                  </p>
                )}
              </div>
            </FadeIn>

            <div
              className={`grid grid-cols-1 ${
                programme.achievementsAndChallenges.currentActivitiesItems
                  ? "lg:grid-cols-3"
                  : "lg:grid-cols-2"
              } gap-8 items-stretch`}
            >
              {/* Optional Column 1: Current Activities in the Workshop */}
              {programme.achievementsAndChallenges.currentActivitiesItems && (
                <div className="p-7 sm:p-8 rounded-3xl bg-white border border-abwa-border shadow-sm flex flex-col space-y-5">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-100 text-abwa-blue flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-abwa-blue" />
                    </div>
                    <div>
                      <span className="font-kaushan text-abwa-blue text-sm tracking-wide block">
                        {programme.achievementsAndChallenges.currentActivitiesEyebrow || "What the group does today"}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-abwa-navy">
                        {programme.achievementsAndChallenges.currentActivitiesTitle || "Current activities"}
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-3.5 flex-1">
                    {programme.achievementsAndChallenges.currentActivitiesItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-abwa-ink">
                        <div className="w-5 h-5 rounded-full bg-blue-50 text-abwa-blue border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Column 2: Verified Progress & Partner Support */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-abwa-border shadow-sm flex flex-col space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <span className="font-kaushan text-emerald-700 text-sm tracking-wide block">
                      {programme.achievementsAndChallenges.achievedEyebrow || "Community action and partner support"}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-abwa-navy">
                      {programme.achievementsAndChallenges.achievedTitle}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3.5 flex-1">
                  {programme.achievementsAndChallenges.achievedItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-abwa-ink">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Current Challenges We Are Working to Solve */}
              <div className="p-7 sm:p-8 rounded-3xl bg-amber-50/60 border border-amber-200/90 shadow-sm flex flex-col space-y-5">
                <div className="flex items-center gap-3 border-b border-amber-200/60 pb-4">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-amber-800" />
                  </div>
                  <div>
                    <span className="font-kaushan text-amber-800 text-sm tracking-wide block">
                      {programme.achievementsAndChallenges.challengesEyebrow || "Challenges the group faces today"}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-abwa-navy">
                      {programme.achievementsAndChallenges.challengesTitle}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3.5 flex-1">
                  {programme.achievementsAndChallenges.challengesItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-amber-950">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 3. Objectives */}
      {programme.objectives && programme.objectives.length > 0 && (
        <Section surface={programme.achievementsAndChallenges ? "white" : "pale"}>
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

      {/* 4. Projects and Activities on the Ground / Five Year Roadmap */}
      {programme.roadmap ? (
        <Section surface="white">
          <Container>
            <FadeIn direction="up">
              <div className="max-w-3xl space-y-2 mb-10">
                <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                  {programme.roadmap.eyebrow || "Five Year Vision"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                  {programme.roadmap.title}
                </h2>
                <p className="text-sm sm:text-base text-abwa-muted leading-relaxed">
                  {programme.roadmap.intro}
                </p>
              </div>
            </FadeIn>

            {/* Five Future Focus Areas */}
            <div className="space-y-6 mb-12">
              <h3 className="text-lg sm:text-xl font-bold text-abwa-navy border-b border-slate-200/80 pb-3">
                {programme.roadmap.focusAreasTitle || "Five Future Focus Areas"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programme.roadmap.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-abwa-pale/50 border border-abwa-border shadow-2xs space-y-2.5 flex flex-col"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-abwa-blue border border-blue-200 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {idx + 1}
                      </div>
                      <h4 className="font-bold text-abwa-navy text-base">
                        {area.title}
                      </h4>
                    </div>
                    <p className="text-sm text-abwa-ink leading-relaxed flex-1">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Five Year Implementation Timeline */}
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-abwa-navy border-b border-slate-200/80 pb-3">
                {programme.roadmap.timelineTitle || "Five Year Implementation Timeline"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {programme.roadmap.timeline.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-white border-2 border-abwa-border shadow-sm space-y-3 relative overflow-hidden"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-abwa-pale text-abwa-blue text-xs font-bold uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5 text-abwa-gold" />
                      <span>{step.period}</span>
                    </div>
                    <h4 className="text-lg font-bold text-abwa-navy">
                      {step.title}
                    </h4>
                    <p className="text-sm text-abwa-ink leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ) : (
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
                {programme.whatHappens.map((group, idx) => {
                  const activityImg = programme.activityImages?.[idx];
                  return (
                    <div
                      key={idx}
                      className="rounded-3xl bg-abwa-pale/50 border border-abwa-border shadow-2xs overflow-hidden flex flex-col"
                    >
                      {activityImg && (
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                          <Image
                            src={activityImg.src}
                            alt={activityImg.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6 sm:p-8 space-y-4 flex-1">
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
                    </div>
                  );
                })}
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
      )}

      {/* Community Moments Strip (Curated Photo Mosaic) */}
      {programme.momentsGallery && programme.momentsGallery.length > 0 && (
        <Section surface="white" className="border-t border-abwa-border/50">
          <Container>
            <FadeIn direction="up">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div className="space-y-2">
                  <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                    Community In Action
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                    Moments from our {programme.title} work
                  </h2>
                  <p className="text-sm sm:text-base text-abwa-muted max-w-2xl">
                    Everyday moments of learning, collaboration and community life shared with dignity and consent.
                  </p>
                </div>
                <Link
                  href={`/gallery#section-${programme.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-abwa-blue hover:text-abwa-blue-hover self-start sm:self-auto shrink-0"
                >
                  <span>Explore in photo gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {programme.momentsGallery.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-3xl bg-abwa-pale border border-abwa-border shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {img.caption && (
                    <div className="p-4 bg-white border-t border-abwa-border/50 text-xs text-abwa-ink font-medium leading-relaxed">
                      {img.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* How We Work & Safety Principles */}
      {programme.howWeWork && (
        <Section surface="white" className="border-t border-abwa-border/50">
          <Container>
            <FadeIn direction="up">
              <div className="max-w-3xl space-y-2 mb-10">
                <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                  Safety &amp; Responsibility
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                  {programme.howWeWork.title || "How we work and keep everyone safe"}
                </h2>
                {programme.howWeWork.description && (
                  <p className="text-sm sm:text-base text-abwa-muted">
                    {programme.howWeWork.description}
                  </p>
                )}
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programme.howWeWork.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-abwa-pale/40 border border-abwa-border space-y-2 shadow-2xs"
                >
                  <h3 className="font-heading text-base font-bold text-abwa-navy">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-abwa-ink/80 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>

            {programme.howWeWork.safetyCallout && (
              <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-amber-50/80 border-2 border-amber-300 text-amber-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <ShieldCheck className="w-5 h-5 text-abwa-gold shrink-0" />
                  <h3 className="text-base font-bold">Safety and responsible conservation</h3>
                </div>
                <p className="text-sm leading-relaxed text-amber-950/90">
                  {programme.howWeWork.safetyCallout}
                </p>
              </div>
            )}
          </Container>
        </Section>
      )}

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

              {programme.visionCallout && (
                <div className="p-6 rounded-3xl bg-white border border-abwa-border/90 shadow-2xs space-y-2">
                  <span className="font-kaushan text-abwa-gold text-base tracking-wide block">
                    {programme.visionCalloutTitle || "Project Vision"}
                  </span>
                  <p className="text-base sm:text-lg font-semibold text-abwa-navy leading-relaxed">
                    {programme.visionCallout}
                  </p>
                </div>
              )}

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

              {/* Who Takes Part Card */}
              {programme.whoTakesPart && (
                <div className="p-6 rounded-3xl bg-white border border-abwa-border space-y-3 shadow-2xs">
                  <span className="font-kaushan text-abwa-gold text-base tracking-wide block">
                    Participation &amp; Community
                  </span>
                  <h4 className="text-base font-bold text-abwa-navy">
                    Who takes part
                  </h4>
                  <p className="text-xs sm:text-sm text-abwa-muted leading-relaxed">
                    {programme.whoTakesPart}
                  </p>
                </div>
              )}

              {/* Related Links Card */}
              {programme.relatedLinks && programme.relatedLinks.length > 0 && (
                <div className="p-6 rounded-3xl bg-white border border-abwa-border space-y-3 shadow-2xs">
                  <span className="font-kaushan text-abwa-gold text-base tracking-wide block">
                    Related Links
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
                    {programme.relatedLinks.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-1.5 text-abwa-blue hover:text-abwa-navy transition-colors"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-abwa-gold shrink-0" />
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
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

      {/* 5b. Support / Ways to Partner Section */}
      {programme.supportSection && (
        <Section surface="white" className="border-t border-abwa-border/50">
          <Container>
            <FadeIn direction="up">
              <div className="max-w-3xl space-y-2 mb-10">
                <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                  {programme.supportSection.eyebrow || "Support & Partnership"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                  {programme.supportSection.title}
                </h2>
                <p className="text-sm sm:text-base text-abwa-muted leading-relaxed">
                  {programme.supportSection.intro}
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {programme.supportSection.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-abwa-pale/60 border border-abwa-border shadow-2xs flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-abwa-navy leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {programme.supportSection.closingBelief && (
              <div className="p-7 sm:p-8 rounded-3xl bg-abwa-blue text-white shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/20 text-white flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-5 h-5 text-abwa-gold" />
                </div>
                <div className="space-y-1">
                  <span className="font-kaushan text-abwa-gold text-sm tracking-wide block">
                    Our Shared Conviction
                  </span>
                  <p className="text-base sm:text-lg font-semibold leading-relaxed text-white">
                    {programme.supportSection.closingBelief}
                  </p>
                </div>
              </div>
            )}
          </Container>
        </Section>
      )}

      {/* 6. Final Call to Action */}
      <SectionCTA
        surface="navy"
        imageSrc={programme.ctaImage?.src}
        imageAlt={programme.ctaImage?.alt}
        title={programme.ctaSectionTitle || "Want to get involved?"}
        description={
          programme.ctaSectionDescription ||
          "Whether you would like to volunteer on this programme, partner with our teams, or support community activities, we would be glad to talk."
        }
        primaryCta={{
          label: programme.ctaText,
          href: primaryCtaHref,
        }}
        secondaryCta={
          programme.secondaryCta
            ? {
                label: programme.secondaryCta.label,
                href: programme.secondaryCta.href,
              }
            : {
                label: "Explore all programmes",
                href: "/programs",
              }
        }
      />
    </div>
  );
}