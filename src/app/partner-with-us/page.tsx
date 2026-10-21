import React from "react";
import { Metadata } from "next";
import {
  Handshake,
  GraduationCap,
  Coins,
  Lightbulb,
  CheckCircle2,
  Users2,
  FileSignature,
  HeartHandshake,
  MessageSquare,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { PartnerForm } from "@/components/forms/PartnerForm";

export const metadata: Metadata = {
  title: "Partner With ABWA | Collaboration and Funding in Kenya",
  description:
    "Organisations, funders, schools and businesses are invited to partner with ABWA on community projects in Kenya. Start a conversation here.",
  alternates: {
    canonical: "https://www.abwaworld.org/partner-with-us",
  },
  openGraph: {
    title: "Partner With ABWA | Collaboration and Funding in Kenya",
    description:
      "Organisations, funders, schools and businesses are invited to partner with ABWA on community projects in Kenya. Start a conversation here.",
    url: "https://www.abwaworld.org/partner-with-us",
    type: "website",
  },
};

const waysToWorkTogether = [
  {
    title: "Programme partnerships",
    description: "Work with us directly on active youth empowerment, sustainable agriculture, or environmental initiatives.",
    icon: Handshake,
  },
  {
    title: "Funding and grants",
    description: "Support a programme or a specific piece of community work. We share transparent records of how funds are used.",
    icon: Coins,
  },
  {
    title: "Skills and expertise",
    description: "Offer training, mentorship, or technical advisory in farming, education, creative arts, or ecological restoration.",
    icon: Lightbulb,
  },
  {
    title: "Schools, universities & groups",
    description: "Explore how groups of students or volunteers can take part in structured, respectful, community-led learning visits.",
    icon: GraduationCap,
  },
];

const partnershipPillars = [
  {
    title: "Conversation first",
    description: "We start with an open conversation about shared values and long-term community goals.",
    icon: MessageSquare,
  },
  {
    title: "Clear agreements",
    description: "We agree clearly on what each side will do, avoiding ambiguity and mismatched expectations.",
    icon: FileSignature,
  },
  {
    title: "Community at the centre",
    description: "Local community groups remain the primary decision-makers for activities affecting their lives.",
    icon: Users2,
  },
  {
    title: "Honest updates",
    description: "We share transparent progress reports, celebrating milestones while discussing challenges openly.",
    icon: CheckCircle2,
  },
];

export default function PartnerWithUsPage() {
  return (
    <main id="main-content">
      {/* 1. Page Hero */}
      <PageHero
        title="Partner With Us"
        subtitle="Organisations, funders, schools and businesses: let's talk."
        description="ABWA works best alongside others. If your goals overlap with ours, we'd like to hear from you."
        imageSrc="/images/heroes/hero-partner.svg"
        imageAlt="Collaborative partnership workshop"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Partner With Us", href: "/partner-with-us" },
        ]}
      />

      {/* 2. Why Partner With ABWA */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
              Collaborative Philosophy
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
              Why partner with ABWA
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-abwa-ink/80 sm:text-lg">
              <p>
                We are a community organisation with working relationships with women&apos;s and youth groups in
                Nairobi, Machakos and Makueni counties. We combine local knowledge with the skills and resources
                partners bring.
              </p>
              <p>
                We&apos;d rather build a few good partnerships than collect many logos. We approach every partnership
                as a conversation first.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Ways We Could Work Together */}
      <Section className="bg-slate-50/70 border-t border-slate-100">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
              Collaboration Pathways
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
              Ways we could work together
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {waysToWorkTogether.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-abwa-blue/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-abwa-pale text-abwa-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-abwa-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-abwa-ink/75">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 4. What Partnership Looks Like */}
      <Section className="bg-white border-t border-slate-100">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
              Working Standards
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
              What partnership looks like
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {partnershipPillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-abwa-blue shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-abwa-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-abwa-ink/75">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 5. Start a Conversation (Partner Form) */}
      <Section id="partner-enquiry" className="bg-abwa-pale/40 border-t border-slate-200">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
                Initiate Dialogue
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
                Start a conversation
              </h2>
              <p className="mt-3 text-sm text-abwa-ink/75">
                Tell us about your organisation and the kind of collaboration you would like to explore.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10">
              <PartnerForm />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
