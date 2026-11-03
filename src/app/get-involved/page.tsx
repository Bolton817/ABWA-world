import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Users, Handshake, HeartHandshake, Share2, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";

export const metadata: Metadata = {
  title: "Get Involved | Volunteer, Partner or Support ABWA",
  description:
    "There is more than one way to be part of ABWA's work. Volunteer, partner with us, give, or help spread the word. Find your place here.",
  alternates: {
    canonical: "https://abwaworld.org/get-involved",
  },
  openGraph: {
    title: "Get Involved | Volunteer, Partner or Support ABWA",
    description:
      "There is more than one way to be part of ABWA's work. Volunteer, partner with us, give, or help spread the word. Find your place here.",
    url: "https://abwaworld.org/get-involved",
    type: "website",
  },
};

const pathways = [
  {
    title: "Volunteer with ABWA",
    description:
      "Join a short-term work camp (2–3 weeks) or a long-term placement (2 months or more) to share skills, promote peace and learn alongside Kenyan communities.",
    href: "/volunteer",
    ctaLabel: "Volunteer With ABWA",
    icon: Users,
    tag: "Time & Skills",
  },
  {
    title: "Partner with us",
    description: "Schools, businesses, funders and other organisations can work with us on shared goals.",
    href: "/partner-with-us",
    ctaLabel: "Partner With Us",
    icon: Handshake,
    tag: "Organisations",
  },
  {
    title: "Support our work",
    description: "Find out how to give, and how we will tell you where your support goes.",
    href: "/donate",
    ctaLabel: "Support Our Work",
    icon: HeartHandshake,
    tag: "Financial Support",
  },
  {
    title: "Share our story",
    description: "Follow ABWA on social media and tell someone who might want to help spread the word.",
    href: "/about",
    ctaLabel: "Learn About Us",
    icon: Share2,
    tag: "Advocacy",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        title="Get Involved"
        subtitle="There is more than one way to be part of this."
        description="Whether you have time, a skill, a connection or a gift to give, here is how you can take part."
        imageSrc="/images/programs/youth_empowerment_&_skills/7abwa (25).jpeg"
        imageAlt="Community youth and volunteers working side by side on community development projects in Kenya"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
        ]}
      />

      {/* 2. Introduction & Honesty Charter */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
              Ways to take part
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
              Find your way in
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-abwa-ink/80">
              Every kind of support matters, and not all of it is money. People get involved with ABWA by giving their
              time, sharing a skill, making an introduction, partnering through their organisation, or giving
              financially.
            </p>
          </div>

          {/* Truth-first honesty note */}
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-abwa-blue/20 bg-abwa-pale/60 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-abwa-blue/10 text-abwa-blue">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-abwa-navy">
                  A quick note on honesty
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-abwa-ink/80">
                  What is available changes from month to month, and we confirm every opportunity with you directly.
                  Nothing on this page is a guarantee of a place or a date. We would rather talk to you first than
                  promise something we cannot deliver.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Four Core Pathway Cards */}
      <Section className="bg-slate-50/70 border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {pathways.map((pathway) => {
              const Icon = pathway.icon;
              return (
                <div
                  key={pathway.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all hover:border-abwa-blue/30 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-abwa-pale text-abwa-blue">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-kaushan text-abwa-gold text-base tracking-wide">
                        {pathway.tag}
                      </span>
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-bold text-abwa-navy">
                      {pathway.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-abwa-ink/80">
                      {pathway.description}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-6">
                    <Link
                      href={pathway.href}
                      className="inline-flex items-center gap-2 font-heading text-sm font-bold text-abwa-blue transition hover:text-abwa-navy"
                    >
                      <span>{pathway.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 4. Closing CTA */}
      <SectionCTA
        title="Not sure where you fit?"
        description="Tell us a little about yourself and we'll suggest where you could help. You can also read our answers to common questions first."
        primaryCta={{
          label: "Contact ABWA",
          href: "/contact",
        }}
        secondaryCta={{
          label: "Read the FAQ",
          href: "/faq",
        }}
        surface="pale"
      />
    </>
  );
}
