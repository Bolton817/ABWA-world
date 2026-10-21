import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  Heart,
  CheckCircle2,
  Compass,
  CameraOff,
  Users2,
  MapPin,
  Calendar,
  FileCheck,
  MessageCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { VolunteerForm } from "@/components/forms/VolunteerForm";

export const metadata: Metadata = {
  title: "Volunteer With ABWA | Community Volunteering in Kenya",
  description:
    "Thinking of volunteering with ABWA in Kenya? Read what to expect, what we ask of volunteers and how to send an enquiry. No promises, just honest information.",
  alternates: {
    canonical: "https://www.abwaworld.org/volunteer",
  },
  openGraph: {
    title: "Volunteer With ABWA | Community Volunteering in Kenya",
    description:
      "Thinking of volunteering with ABWA in Kenya? Read what to expect, what we ask of volunteers and how to send an enquiry. No promises, just honest information.",
    url: "https://www.abwaworld.org/volunteer",
    type: "website",
  },
};

const projectOptions = [
  {
    location: "Mathare, Nairobi",
    focus: "Youth empowerment, art, music, learning support and environmental action",
    slug: "youth-empowerment",
  },
  {
    location: "Kangundo, Machakos County",
    focus: "Vegetable farming, sustainable soil care and women's empowerment",
    slug: "womens-empowerment-sustainable-agriculture",
  },
  {
    location: "Kibwezi, Makueni County",
    focus: "Vegetable farming and kitchen gardens with the Umisiiyu Women Group in dry climates",
    slug: "umisiiyu-women-group",
  },
];

const expectations = [
  {
    title: "Come to learn",
    description: "Communities are experts in their own lives. Listen first and share knowledge collaboratively.",
    icon: Compass,
  },
  {
    title: "Respect local culture",
    description: "Embrace local customs, values, community leadership and everyday family routines.",
    icon: Heart,
  },
  {
    title: "Protect people's dignity",
    description:
      "Please do not photograph or share images of people, especially children, without clear, documented permission.",
    icon: CameraOff,
  },
  {
    title: "Follow host ground rules",
    description:
      "Respect community host policies: no smoking in public areas, no illegal substances, and alcohol only where permitted.",
    icon: Users2,
  },
];

const processSteps = [
  {
    step: "Step 1",
    title: "Send a short enquiry",
    description: "Tell us a little about yourself, your skills, and what you would like to help with.",
    icon: MessageCircle,
  },
  {
    step: "Step 2",
    title: "We reply",
    description: "We'll talk through current community needs, seasonal projects, and what is realistically possible.",
    icon: Clock,
  },
  {
    step: "Step 3",
    title: "Ask us anything",
    description: "Ask about costs, accommodation, safety, host groups, meals, and daily routines with complete openness.",
    icon: Sparkles,
  },
  {
    step: "Step 4",
    title: "Confirm in writing",
    description: "If there is a genuine mutual fit, all details are agreed and confirmed in writing before you commit.",
    icon: FileCheck,
  },
];

export default function VolunteerPage() {
  return (
    <main id="main-content">
      {/* 1. Page Hero */}
      <PageHero
        title="Volunteer With ABWA"
        subtitle="Share your time and skills, and learn from the communities you join."
        description="We welcome local and international volunteers. Here is what to expect before you get in touch."
        imageSrc="/images/heroes/hero-volunteer.svg"
        imageAlt="Volunteers and community members working side by side"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Volunteer With ABWA", href: "/volunteer" },
        ]}
      />

      {/* 2. Before You Enquire Alert Box */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl border-2 border-amber-300 bg-amber-50/70 p-6 sm:p-8 text-abwa-ink shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                <AlertTriangle className="h-7 w-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  Honest expectations
                </span>
                <h2 className="mt-1 font-heading text-2xl font-bold text-amber-950 sm:text-3xl">
                  Before you enquire
                </h2>
                <div className="mt-4 space-y-3 text-base leading-relaxed text-amber-900">
                  <p>
                    <strong>Please read this first.</strong> Volunteering with ABWA depends on current projects and on
                    what our community partners want. Sending an enquiry does not guarantee a place.
                  </p>
                  <p>
                    Dates, costs, accommodation, meals, transport and insurance differ by project, and we confirm them
                    in writing before you commit. <strong>Nothing on this website should be taken as a booking or a price.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Who Can Enquire */}
      <Section className="bg-slate-50/70 border-t border-slate-100">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
              Eligibility & Openness
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
              Who can enquire
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-abwa-ink/80 sm:text-lg">
              <p>
                We welcome enquiries from local and international volunteers. You do not need special qualifications to
                ask. Curiosity, respect and a willingness to learn matter more than a CV.
              </p>
              <p>
                Skills that are often useful include teaching and learning support, art, music, farming and gardening,
                and environmental work. If you have another skill you would like to share, tell us.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 text-sm text-abwa-ink/70">
              <p>
                <strong className="text-abwa-navy">A note on sensitive information:</strong> Please do not submit
                passport numbers, personal identification documents, or medical records in your initial message. We
                will never ask for these prior to mutual consultation.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. What Volunteering Can Look Like */}
      <Section className="bg-white border-t border-slate-100">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
              The Experience
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
              What volunteering can look like
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-abwa-ink/80">
              <p>
                Our work-camp plans describe small groups spending around two weeks with a community project. Days are
                shaped by the host group: working on a farm or kitchen garden, helping with lessons, taking part in art
                or music, planting trees, and sharing meals, games and stories.
              </p>
              <p>
                Volunteers usually live simply, often with host families or in basic shared accommodation, and take part
                in everyday household tasks such as cooking together.
              </p>
            </div>

            {/* Project Locations */}
            <h3 className="mt-10 font-heading text-xl font-bold text-abwa-navy">
              Current Project Areas
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {projectOptions.map((project) => (
                <div
                  key={project.location}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 transition hover:border-abwa-blue/30 hover:bg-white"
                >
                  <div className="flex items-center gap-2 text-abwa-blue">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <h4 className="font-heading text-sm font-bold text-abwa-navy">
                      {project.location}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-abwa-ink/75">
                    {project.focus}
                  </p>
                  <Link
                    href={`/programs/${project.slug}`}
                    className="mt-3 inline-block text-xs font-semibold text-abwa-blue hover:underline"
                  >
                    View programme details &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. What We Ask of You (Dignity & Respect) */}
      <Section className="bg-slate-50/70 border-t border-slate-100">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
              Our Commitments
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
              What we ask of you
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {expectations.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-abwa-pale text-abwa-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-abwa-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-abwa-ink/80">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 6. How an Enquiry Works (4 Steps) */}
      <Section className="bg-white border-t border-slate-100">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
              Simple & Transparent
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
              How an enquiry works
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
                >
                  <div>
                    <span className="inline-block rounded-md bg-abwa-pale px-2.5 py-1 text-xs font-bold text-abwa-navy">
                      {step.step}
                    </span>
                    <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-abwa-blue shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-heading text-base font-bold text-abwa-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-abwa-ink/75">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 7. Interactive Enquiry Form */}
      <Section id="enquire" className="bg-abwa-pale/40 border-t border-slate-200">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
                Get in touch
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
                Send us an enquiry
              </h2>
              <p className="mt-3 text-sm text-abwa-ink/75">
                Fill out the form below to start a conversation. We will review your message and reply promptly.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10">
              <VolunteerForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. Closing CTA */}
      <SectionCTA
        title="Still deciding?"
        description="Read our guide to ethical volunteering, or browse our frequently asked questions."
        primaryCta={{
          label: "Read: Ethical Volunteering in Kenya",
          href: "/blog/ethical-community-volunteering-in-kenya",
        }}
        secondaryCta={{
          label: "Read the FAQ",
          href: "/faq",
        }}
        surface="white"
      />
    </main>
  );
}
