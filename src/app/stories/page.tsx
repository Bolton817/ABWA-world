import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, MapPin, ArrowRight, HeartHandshake, Eye } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { communityStoriesData, consentChecklist } from "@/content/stories";
import { StaggerGroup } from "@/components/animation/StaggerGroup";

export const metadata: Metadata = {
  title: "Community Stories | ABWA World",
  description:
    "Real people and real places from ABWA's community projects in Kenya, shared with their permission.",
  alternates: {
    canonical: "https://abwaworld.org/stories",
  },
  openGraph: {
    title: "Community Stories | ABWA World",
    description:
      "Real people and real places from ABWA's community projects in Kenya, shared with their permission.",
    url: "https://abwaworld.org/stories",
    type: "website",
  },
};

export default function StoriesPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        title="Community Stories"
        subtitle="Real people, real places, shared with their permission."
        description="These stories come from the groups and volunteers we work with. We tell them with care."
        imageSrc="/images/heroes/19-most-popular-africa-facts-november-2015-africa-facts.jpg"
        imageAlt="Dignified community members sharing personal journeys of resilience in Kenya"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Community Stories", href: "/stories" },
        ]}
      />

      {/* 2. How We Tell Stories & Consent Checklist */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
              Dignity & Consent
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
              How we tell stories
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-abwa-ink/80 sm:text-lg">
              <p>
                Every story here is shared with the informed consent of the people in it. For children, that includes a
                parent or guardian. People can ask us to change or remove their story at any time.
              </p>
              <p>
                We try to tell stories that show people&apos;s skills, leadership and choices, not only their hardships.
                We believe community members are experts in their own lives.
              </p>
            </div>

            {/* Consent Checklist Box */}
            <div className="mt-10 rounded-2xl border-2 border-abwa-blue/20 bg-abwa-pale/50 p-6 sm:p-8">
              <div className="flex items-center gap-3 text-abwa-navy">
                <ShieldCheck className="h-6 w-6 text-abwa-blue" />
                <h3 className="font-heading text-lg font-bold">
                  Our Four-Point Consent Protocol
                </h3>
              </div>
              <ul className="mt-4 space-y-3">
                {consentChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-abwa-ink/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Community Stories Grid */}
      <Section className="bg-slate-50/70 border-t border-slate-100">
        <Container>
          <StaggerGroup stagger={0.12} className="mx-auto max-w-4xl space-y-12">
            {communityStoriesData.map((story) => (
              <article
                key={story.slug}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-abwa-blue/30 hover:shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* Photo Column */}
                  <div className="relative aspect-[16/10] md:aspect-auto md:col-span-5 bg-slate-100">
                    <Image
                      src={story.heroImage}
                      alt={story.heroImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-emerald-700 shadow-sm backdrop-blur-sm">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        Consent Verified
                      </span>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className="p-6 sm:p-8 md:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-abwa-ink/60">
                        <span className="flex items-center gap-1 text-abwa-blue font-semibold">
                          <MapPin className="h-3.5 w-3.5" />
                          {story.location}
                        </span>
                        <span>•</span>
                        <span>{story.programmeTag}</span>
                      </div>

                      <h3 className="mt-3 font-heading text-2xl font-bold leading-tight text-abwa-navy">
                        {story.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-abwa-gold">
                        {story.subtitle}
                      </p>

                      <div className="mt-4 space-y-3 text-sm leading-relaxed text-abwa-ink/80">
                        {story.content.map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-abwa-ink/60">
                      <span>Published: {story.publishedDate}</span>
                      <Link
                        href="/programs"
                        className="inline-flex items-center gap-1 font-semibold text-abwa-blue hover:text-abwa-navy"
                      >
                        <span>Related programme</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </StaggerGroup>

          {/* Unconditional Takedown Policy Notice */}
          <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-slate-200 bg-white p-6 text-center text-sm text-abwa-ink/75">
            <h4 className="font-heading font-bold text-abwa-navy">
              Our Takedown Commitment
            </h4>
            <p className="mt-2">
              If you or a member of your family appears in any story, image, or mention on this website and would like
              it edited, anonymised, or removed, please{" "}
              <Link href="/contact" className="font-semibold text-abwa-blue underline hover:text-abwa-navy">
                contact us
              </Link>
              . We will honor your request promptly and without question.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. Closing CTA */}
      <SectionCTA
        title="Be part of these stories"
        description="Whether you would like to volunteer your time, collaborate as an institutional partner, or support community projects, there is a place for you."
        primaryCta={{
          label: "Get Involved",
          href: "/get-involved",
        }}
        secondaryCta={{
          label: "Read Our Blog",
          href: "/blog",
        }}
        surface="pale"
      />
    </>
  );
}
