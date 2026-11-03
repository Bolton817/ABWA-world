import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Layers,
  Sparkles,
  TrendingUp,
  ClipboardList,
  ShieldCheck,
  Sprout,
  Users2,
  FileText,
  Search,
  Scale,
  CalendarCheck,
  HeartHandshake,
  ArrowRight,
  Coins,
  Building2,
  TreePine,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Impact | Monitoring, Evaluation & Sustainability | ABWA World",
  description:
    "How ABWA plans with communities, monitors results honestly, and builds lasting ownership. Project design, M&E frameworks, and verified evidence.",
  alternates: {
    canonical: "https://abwaworld.org/impact",
  },
  openGraph: {
    title: "Our Impact | Monitoring, Evaluation & Sustainability | ABWA World",
    description:
      "How ABWA plans with communities, monitors results honestly, and builds lasting ownership. Project design, M&E frameworks, and verified evidence.",
    url: "https://abwaworld.org/impact",
    type: "website",
  },
};

const impactFrameworks = [
  {
    step: "Step 01",
    term: "Activity",
    heading: "What we do",
    description:
      "A tree-planting day, an art or tailoring lesson, a sustainable farming session, or a school water tank installation.",
    note: "Direct & observable",
    icon: Activity,
    color: "bg-blue-50 text-abwa-blue border-blue-200",
  },
  {
    step: "Step 02",
    term: "Output",
    heading: "What the activity produces",
    description:
      "How many people took part, how many sessions ran, or what tools and learning materials were shared (counted only from verified records).",
    note: "Documented records only",
    icon: Layers,
    color: "bg-amber-50 text-abwa-gold border-amber-200",
  },
  {
    step: "Step 03",
    term: "Outcome",
    heading: "What changes for people",
    description:
      "A practical skill used for income, a more reliable harvest, cleaner water at school, or stronger women's and youth groups (described only where there is evidence).",
    note: "Evidence-based change",
    icon: Sparkles,
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    step: "Step 04",
    term: "Long-Term Impact",
    heading: "Lasting change over years",
    description:
      "More resilient, self-reliant households and healthier neighbourhoods—something we work towards steadily and never claim prematurely.",
    note: "Long-term community horizon",
    icon: TrendingUp,
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
];

const planningElements = [
  {
    num: "01",
    title: "Project title and location",
    description: "Clear grounding in the specific neighbourhood, school or county.",
  },
  {
    num: "02",
    title: "Background and problem statement",
    description: "An honest picture of the local challenge and why it matters to residents.",
  },
  {
    num: "03",
    title: "Project goal and specific objectives",
    description: "Plain statements of what the project aims to achieve.",
  },
  {
    num: "04",
    title: "Participating community members",
    description: "Who takes part—children, young people, women's groups or vulnerable households.",
  },
  {
    num: "05",
    title: "Planned activities and schedule",
    description: "A realistic step-by-step timetable agreed with the host group.",
  },
  {
    num: "06",
    title: "Detailed budget and funding sources",
    description: "Transparent costings showing what resources are needed and where they come from.",
  },
  {
    num: "07",
    title: "Expected outputs and outcomes",
    description: "Clear targets separating immediate deliverables from longer-term changes.",
  },
  {
    num: "08",
    title: "Monitoring and evaluation indicators",
    description: "How progress and quality will be checked along the way.",
  },
  {
    num: "09",
    title: "Sustainability and handover strategy",
    description: "How the project will keep running after the initial funding period ends.",
  },
  {
    num: "10",
    title: "Financial accountability and reporting",
    description: "Agreed procedures for bookkeeping, receipts and partner reporting.",
  },
];

const mePractices = [
  {
    title: "Participant & Attendance Records",
    description:
      "Keeping accurate registration and attendance logs for workshops, school support and training sessions.",
    icon: FileText,
    tag: "Field Logs",
  },
  {
    title: "Project Activity Reports",
    description:
      "Documenting what took place during each field session, work camp or community outreach day.",
    icon: ClipboardList,
    tag: "Field Documentation",
  },
  {
    title: "Financial & Expenditure Reports",
    description:
      "Tracking how project funds and material donations are spent against the agreed budget.",
    icon: Coins,
    tag: "Fiscal Openness",
  },
  {
    title: "Site Visits & Community Feedback",
    description:
      "Visiting projects regularly and listening directly to community members about what is helpful and what needs adjusting.",
    icon: Search,
    tag: "Ground Reality",
  },
  {
    title: "Before-and-After Assessments",
    description:
      "Comparing conditions and skills before and after a project to understand real change.",
    icon: Scale,
    tag: "Comparative Evaluation",
  },
  {
    title: "Output & Outcome Tracking",
    description:
      "Measuring practical deliverables alongside longer-term household and community improvements.",
    icon: TrendingUp,
    tag: "Deliverables & Shifts",
  },
  {
    title: "Periodic Partner & Community Reviews",
    description:
      "Holding open review sessions with local women's groups, youth leaders and partner organisations.",
    icon: CalendarCheck,
    tag: "Shared Dialogue",
  },
];

const sustainabilityMeasures = [
  {
    title: "Independent local management",
    description:
      "Training community members with the technical and practical skills to run projects themselves.",
    icon: Users2,
  },
  {
    title: "Community ownership committees",
    description:
      "Supporting local management committees so decisions stay in the neighbourhood.",
    icon: HeartHandshake,
  },
  {
    title: "Income-generating activities",
    description:
      "Linking projects to small enterprises—such as tailoring, poultry, vegetable sales or recycled crafts—that help fund ongoing work.",
    icon: Coins,
  },
  {
    title: "Local resource mobilisation",
    description:
      "Encouraging communities to pool local skills, land, tools and savings alongside external support.",
    icon: Building2,
  },
  {
    title: "Institutional partnerships",
    description:
      "Connecting community groups with local schools, health providers and county extension services.",
    icon: ShieldCheck,
  },
  {
    title: "Follow-up mentorship",
    description:
      "Providing ongoing guidance and technical check-ins rather than walking away when a project closes.",
    icon: Sparkles,
  },
  {
    title: "Environmental stewardship",
    description:
      "Embedding water conservation, soil care, tree planting and waste reuse into every programme.",
    icon: TreePine,
  },
];

export default function ImpactPage() {
  const breadcrumbsList = [
    { name: "Home", url: "/" },
    { name: "Our Impact", url: "/impact" },
  ];

  return (
    <>
      <JsonLd data={[getBreadcrumbSchema(breadcrumbsList)]} />

      {/* Section 1: Hero */}
      <PageHero
        eyebrow="Impact, Accountability and Learning"
        title="Our Impact"
        subtitle="How we plan with communities, measure change honestly, and build work that lasts."
        description="We believe good community development requires clear planning, open financial stewardship, and honest reporting on both what works and what is hard."
        imageSrc="/images/programs/food_security_&_sustainable_agriculture/6abwa (67).jpeg"
        imageAlt="Community women and volunteers celebrating a productive harvest from sustainable agriculture in Kenya"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Impact", href: "/impact" },
        ]}
        primaryCta={{
          label: "Explore Our Programmes",
          href: "/programs",
          variant: "blue",
        }}
      />

      {/* Section 2: How We Talk About Impact (4-Card Grid) */}
      <Section surface="white">
        <Container>
          <div className="mx-auto max-w-4xl space-y-12">
            <ScrollReveal yOffset={20} duration={0.6}>
              <SectionHeader
                eyebrow="Clear language"
                title="Four different things, kept apart"
                description="People often use the word &ldquo;impact&rdquo; to describe everything from a single afternoon workshop to a lifetime of change. We try to be more careful, and to keep these four steps distinct."
                align="center"
              />
            </ScrollReveal>

            <ScrollReveal
              stagger={0.12}
              yOffset={28}
              duration={0.65}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {impactFrameworks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-8 rounded-3xl bg-abwa-pale/50 border border-abwa-border shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-5"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${item.color}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-abwa-gold">
                          {item.step}
                        </span>
                      </div>

                      <div>
                        <span className="font-kaushan text-abwa-blue text-base tracking-wide block">
                          {item.term}
                        </span>
                        <h3 className="text-xl font-bold text-abwa-navy mt-1">
                          {item.heading}
                        </h3>
                      </div>

                      <p className="text-sm text-abwa-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-abwa-border/50 text-[11px] text-abwa-ink/60 font-medium">
                      Standard: {item.note}
                    </div>
                  </div>
                );
              })}
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Section 3: How We Plan Every Project (10-Point Framework Grid) */}
      <Section surface="pale">
        <Container>
          <div className="mx-auto max-w-4xl space-y-12">
            <ScrollReveal yOffset={20} duration={0.6}>
              <SectionHeader
                eyebrow="Before work begins"
                title="How we plan and design projects"
                description="We identify, design and carry out projects according to the priorities of the communities we serve. Before any initiative begins on the ground, we work with community members and partners to set out ten essential building blocks:"
                align="center"
              />
            </ScrollReveal>

            <ScrollReveal
              stagger={0.08}
              yOffset={24}
              duration={0.65}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {planningElements.map((el, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-abwa-border shadow-2xs hover:shadow-md transition-shadow flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-abwa-pale text-abwa-blue font-bold text-xs flex items-center justify-center shrink-0 border border-abwa-border">
                    {el.num}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-abwa-navy">
                      {el.title}
                    </h3>
                    <p className="text-sm text-abwa-muted leading-relaxed">
                      {el.description}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Section 4: Monitoring, Evaluation and Accountability (7 M&E Practices) */}
      <Section surface="white">
        <Container>
          <div className="mx-auto max-w-4xl space-y-12">
            <ScrollReveal yOffset={20} duration={0.6}>
              <SectionHeader
                eyebrow="Checking our work"
                title="Monitoring, evaluation and financial openness"
                description="We monitor our programmes to check progress, understand what is working, and spot where we need to improve. We strive to maintain transparent financial records and provide accurate, timely reports to community groups, volunteers, partners and donors."
                align="center"
              />
            </ScrollReveal>

            <ScrollReveal
              stagger={0.08}
              yOffset={28}
              duration={0.65}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {mePractices.map((practice, idx) => {
                const Icon = practice.icon;
                const isSpan = idx === 6; // 7th card spans nicely
                return (
                  <div
                    key={idx}
                    className={`p-6 sm:p-7 rounded-3xl bg-abwa-pale/40 border border-abwa-border shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4 ${
                      isSpan ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-white text-abwa-blue border border-abwa-border flex items-center justify-center shadow-2xs">
                          <Icon className="w-5 h-5 text-abwa-blue" />
                        </div>
                        <span className="font-kaushan text-abwa-gold text-sm tracking-wide">
                          {practice.tag}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-abwa-navy">
                        {practice.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-abwa-muted leading-relaxed">
                        {practice.description}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-abwa-border/50 text-[10px] font-mono text-abwa-ink/60 uppercase">
                      Practice 0{idx + 1}
                    </div>
                  </div>
                );
              })}
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Section 5: Our Sustainability Strategy (7 Measures) */}
      <Section surface="pale">
        <Container>
          <div className="mx-auto max-w-4xl space-y-12">
            <ScrollReveal yOffset={20} duration={0.6}>
              <SectionHeader
                eyebrow="Beyond initial funding"
                title="How we build projects to last"
                description="Short-term relief has its place, but our main goal is to help communities build projects that continue benefiting families long after a grant or work camp ends. Our sustainability approach rests on seven practical habits:"
                align="center"
              />
            </ScrollReveal>

            <ScrollReveal
              stagger={0.08}
              yOffset={28}
              duration={0.65}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {sustainabilityMeasures.map((measure, idx) => {
                const Icon = measure.icon;
                const isSpan = idx === 6; // 7th card centered
                return (
                  <div
                    key={idx}
                    className={`p-6 sm:p-7 rounded-3xl bg-white border border-abwa-border shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4 ${
                      isSpan ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-abwa-pale text-abwa-gold border border-abwa-border flex items-center justify-center shadow-2xs">
                        <Icon className="w-5 h-5 text-abwa-gold" />
                      </div>
                      <h3 className="text-base font-bold text-abwa-navy">
                        {measure.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-abwa-muted leading-relaxed">
                        {measure.description}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-abwa-border/50 text-[10px] font-mono text-abwa-blue uppercase tracking-wider">
                      Measure 0{idx + 1}
                    </div>
                  </div>
                );
              })}
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Section 6: What We Can Share Right Now & Community Stories */}
      <Section surface="white">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            <ScrollReveal yOffset={20} duration={0.6} className="text-center space-y-3">
              <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                Where we are today
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                What we can show honestly right now
              </h2>
            </ScrollReveal>

            <ScrollReveal
              yOffset={24}
              duration={0.65}
              className="p-8 sm:p-10 rounded-3xl bg-abwa-pale/50 border border-abwa-border shadow-xs space-y-6 text-abwa-muted leading-relaxed text-base sm:text-lg"
            >
              <p>
                Right now, the clearest evidence of our work is the day-to-day activity across our
                community programmes in Nairobi, Machakos and Makueni counties: supporting
                children&apos;s education, training young people and women in practical skills,
                growing food in urban and rural gardens, promoting clean water and health
                awareness, and caring for the environment.
              </p>
              <p className="text-sm sm:text-base border-t border-abwa-border/70 pt-4">
                We are gathering and verifying historical attendance records, project outputs and
                participant reflections so that every figure or story published on this page has a
                clear date, source and informed consent. When verified reports are ready for public
                download, they will appear here.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 rounded-xl bg-abwa-navy px-5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-abwa-blue transition"
                >
                  <span>Explore Our Programmes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/partner-with-us"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-abwa-navy hover:bg-slate-50 transition"
                >
                  <span>Partner With Us</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Section 7: Closing Call to Action ("Our Commitment") */}
      <SectionCTA
        surface="navy"
        title="Help us build stronger, self-reliant communities"
        description="We are committed to working alongside children, young people, women and families to build practical, lasting responses to poverty, unemployment, educational barriers, food insecurity and environmental challenges. If you would like to support a project or ask how we measure our work, we would be glad to talk."
        primaryCta={{
          label: "Get Involved",
          href: "/get-involved",
        }}
        secondaryCta={{
          label: "Contact ABWA",
          href: "/contact",
        }}
      />
    </>
  );
}
