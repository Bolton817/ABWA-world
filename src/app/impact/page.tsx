import React from "react";
import { Metadata } from "next";
import Image from "next/image";
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
  MapPin,
  Images,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { flagshipVideo } from "@/content/videos";

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
      "A tree planting day, an art or tailoring lesson, a sustainable farming session, or a school water tank installation.",
    note: "Direct and observable action",
    icon: Activity,
    color: "bg-blue-50 text-abwa-blue border-blue-200",
    imageSrc: "/images/programs/environmental_conservation_&_climate/5abwa (41).jpeg",
    imageAlt: "Volunteers and community members planting trees together in Kenya",
    tag: "Field Activity",
    location: "Kenya Community Sites",
  },
  {
    step: "Step 02",
    term: "Output",
    heading: "What the activity produces",
    description:
      "How many people took part, how many sessions ran, or what tools and learning materials were shared, counted only from verified records.",
    note: "Documented records only",
    icon: Layers,
    color: "bg-amber-50 text-abwa-gold border-amber-200",
    imageSrc: "/images/programs/education_&_child_development/1abwa (11).jpeg",
    imageAlt: "Primary school students with learning materials and books in classroom",
    tag: "Verified Records",
    location: "Community Primary Schools",
  },
  {
    step: "Step 03",
    term: "Outcome",
    heading: "What changes for people",
    description:
      "A practical skill used for income, a more reliable harvest, cleaner water at school, or stronger women and youth groups.",
    note: "Evidence based change",
    icon: Sparkles,
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    imageSrc: "/images/programs/women_empowerment_&_agriculture/6abwa (64).jpeg",
    imageAlt: "Community women farmers celebrating a bountiful agricultural harvest in Machakos",
    tag: "Observed Benefit",
    location: "Machakos County",
  },
  {
    step: "Step 04",
    term: "Long Term Impact",
    heading: "Lasting change over years",
    description:
      "More resilient, self reliant households and healthier neighbourhoods, something we work towards steadily and never claim prematurely.",
    note: "Long term community horizon",
    icon: TrendingUp,
    color: "bg-purple-50 text-purple-700 border-purple-200",
    imageSrc: "/images/programs/community_development_social_support/6abwa (73).jpeg",
    imageAlt: "Community members and local leaders gathered together celebrating long term development",
    tag: "Generational Horizon",
    location: "Rural and Urban Communities",
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
    description: "Who takes part, including children, young people, women groups or vulnerable households.",
  },
  {
    num: "05",
    title: "Planned activities and schedule",
    description: "A realistic step by step timetable agreed with the host group.",
  },
  {
    num: "06",
    title: "Detailed budget and funding sources",
    description: "Transparent costings showing what resources are needed and where they come from.",
  },
  {
    num: "07",
    title: "Expected outputs and outcomes",
    description: "Clear targets separating immediate deliverables from longer term changes.",
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
    title: "Comparative Skill Assessments",
    description:
      "Comparing conditions and skills before and after a project to understand real change.",
    icon: Scale,
    tag: "Comparative Evaluation",
  },
  {
    title: "Output & Outcome Tracking",
    description:
      "Measuring practical deliverables alongside longer term household and community improvements.",
    icon: TrendingUp,
    tag: "Deliverables & Shifts",
  },
  {
    title: "Periodic Partner Reviews",
    description:
      "Holding open review sessions with local women groups, youth leaders and partner organisations.",
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
    title: "Income generating activities",
    description:
      "Linking projects to small enterprises such as tailoring, poultry, vegetable sales or recycled crafts that help fund ongoing work.",
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
    title: "Follow up mentorship",
    description:
      "Providing ongoing guidance and technical check ins rather than walking away when a project closes.",
    icon: Sparkles,
  },
  {
    title: "Environmental stewardship",
    description:
      "Embedding water conservation, soil care, tree planting and waste reuse into every programme.",
    icon: TreePine,
  },
];

const verifiedEvidencePoints = [
  {
    title: "Primary Education & School Support",
    location: "Mathare, Nairobi",
    programme: "Education & Child Wellbeing",
    description:
      "Partnering with Caso Upendo Primary School in Mathare, Nairobi to deliver computers, learning materials and school support alongside visiting teams from VTC Hong Kong.",
    evidenceNote: "Monitored through physical attendance logs, headteacher records and learning progress check ins.",
    imageSrc: "/images/programs/education_&_child_development/5abwa (83).jpeg",
    imageAlt: "Primary school students engaged in reading and classroom lessons supported by ABWA in Kenya",
  },
  {
    title: "Climate Resilient Kitchen Gardens",
    location: "Makueni County",
    programme: "Food Security & Agriculture",
    description:
      "Equipping smallholder women farmers with drip bottle irrigation, compost timing methods and drought resilient vegetable varieties to ensure dependable food and market income.",
    evidenceNote: "Documented through weekly harvest logs and surplus produce sold in local rural markets.",
    imageSrc: "/images/programs/food_security_&_sustainable_agriculture/5abwa (80).jpeg",
    imageAlt: "Women farmers harvesting fresh vegetables in a community kitchen garden in Makueni County",
  },
  {
    title: "Youth Skills & Creative Mentorship",
    location: "Mathare, Nairobi",
    programme: "Youth Skills & Creative Arts",
    description:
      "Working with the Miami Florida Youth Group on recycling, urban farming and training, and the Young Mothers Women Group on tailoring in Mathare, Nairobi.",
    evidenceNote: "Verified through workshop sign in sheets, finished craft products and peer mentor logs.",
    imageSrc: "/images/programs/arts_culture_&_creative_development/7abwa (7).jpeg",
    imageAlt: "Young creators and mentors collaborating on creative arts and community painting in Kenya",
  },
  {
    title: "Community Conservation & Water Access",
    location: "Kasigau & Machakos",
    programme: "Conservation & WASH",
    description:
      "Mobilising youth and volunteers to nurture indigenous tree nurseries, protect wildlife corridors and install school rainwater storage tanks for clean drinking water.",
    evidenceNote: "Tracked through seedling survival counts, rainfall harvest logs and conservation patrol records.",
    imageSrc: "/images/programs/Kasiagu_Wildlife_conservation/6abwa (82).jpeg",
    imageAlt: "Community conservation volunteers and indigenous tree nursery stewardship in Kasigau Kenya",
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
        imageSrc="/images/programs/food_security_&_sustainable_agriculture/7abwa (77).jpeg"
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

      {/* Section 2: Results Chain in Action (4 Photographic Framework Cards) */}
      <Section surface="white">
        <Container>
          <div className="mx-auto max-w-5xl space-y-12">
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
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {impactFrameworks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group rounded-3xl overflow-hidden bg-white border border-abwa-border shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Photographic Header */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/85 via-abwa-navy/30 to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono font-bold text-abwa-navy shadow-xs">
                          {item.step}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-abwa-navy/80 backdrop-blur-md text-[11px] font-medium text-white border border-white/20">
                          <MapPin className="w-3 h-3 text-abwa-gold" />
                          <span>{item.location}</span>
                        </span>
                      </div>

                      {/* Bottom Banner on Image */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="font-kaushan text-abwa-gold text-lg tracking-wide block drop-shadow-sm">
                          {item.term}
                        </span>
                        <h3 className="text-xl font-bold text-white drop-shadow-sm">
                          {item.heading}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between bg-abwa-pale/30">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center border ${item.color}`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider text-abwa-blue">
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-sm text-abwa-muted leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-abwa-border/60 flex items-center justify-between text-xs">
                        <span className="text-abwa-ink/60 font-medium">
                          M&E Verification Rule
                        </span>
                        <span className="font-semibold text-abwa-navy">
                          {item.note}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Section 3: Project Design & Field Planning (Featured Photo Anchor + 10 Building Blocks) */}
      <Section surface="pale">
        <Container>
          <div className="mx-auto max-w-6xl space-y-12">
            <ScrollReveal yOffset={20} duration={0.6}>
              <SectionHeader
                eyebrow="Before work begins"
                title="How we plan and design projects"
                description="We identify, design and carry out projects according to the priorities of the communities we serve. Before any initiative begins on the ground, we work with community members and partners to set out ten essential building blocks:"
                align="center"
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Visual Photo Anchor Card */}
              <ScrollReveal
                yOffset={24}
                duration={0.65}
                className="lg:col-span-5 space-y-6"
              >
                <div className="group relative rounded-3xl overflow-hidden bg-white border border-abwa-border shadow-md">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/images/programs/community_development_social_support/1abwa (12).jpeg"
                      alt="Community members, elders and local leaders discussing priority needs during a participatory planning meeting in Kenya"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-abwa-navy shadow-xs">
                        Participatory Co Design
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs sm:text-sm font-medium leading-relaxed drop-shadow-sm text-slate-100">
                        Community consultation circles bring together neighbours, elders and project leads to agree on priorities before work commences.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 space-y-3 bg-white">
                    <div className="flex items-center gap-2 text-abwa-navy font-bold text-base">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>100% Community Co Designed</span>
                    </div>
                    <p className="text-xs sm:text-sm text-abwa-muted leading-relaxed">
                      Good project design begins with attentive listening. We never impose external blueprints, choosing instead to agree on practical schedules, transparent budgets and local leadership roles with resident families.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/80 border border-abwa-border text-xs text-abwa-ink space-y-2">
                  <span className="font-bold text-abwa-navy uppercase tracking-wider block">
                    Our Field Principle
                  </span>
                  <p className="text-abwa-muted leading-relaxed">
                    Local ownership is not added at the end of a project. It is established during the very first conversation when community priorities are mapped out.
                  </p>
                </div>
              </ScrollReveal>

              {/* Right Column: 10 Planning Building Blocks */}
              <ScrollReveal
                stagger={0.06}
                yOffset={24}
                duration={0.65}
                className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {planningElements.map((el, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-abwa-border shadow-2xs hover:shadow-md transition-shadow flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-xl bg-abwa-pale text-abwa-blue font-bold text-xs flex items-center justify-center shrink-0 border border-abwa-border">
                      {el.num}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-abwa-navy">
                        {el.title}
                      </h3>
                      <p className="text-xs text-abwa-muted leading-relaxed">
                        {el.description}
                      </p>
                    </div>
                  </div>
                ))}
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 4: Monitoring, Evaluation and Financial Openness */}
      <Section surface="white">
        <Container>
          <div className="mx-auto max-w-6xl space-y-12">
            <ScrollReveal yOffset={20} duration={0.6}>
              <SectionHeader
                eyebrow="Checking our work"
                title="Monitoring, evaluation and financial openness"
                description="We monitor our programmes to check progress, understand what is working, and spot where we need to improve. We strive to maintain transparent financial records and provide accurate, timely reports to community groups, volunteers, partners and donors."
                align="center"
              />
            </ScrollReveal>

            {/* Field Verification in Practice: Dual Photographic Feature */}
            <ScrollReveal
              stagger={0.12}
              yOffset={28}
              duration={0.65}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Feature A: On Site Inspection */}
              <div className="group rounded-3xl overflow-hidden bg-abwa-pale/40 border border-abwa-border shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/programs/water_sanitation_&_hygiene/1abwa (13).jpeg"
                    alt="Water and sanitation infrastructure inspection and community water point verification in Kenya"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-abwa-navy shadow-xs">
                      On Site Physical Verification
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-base sm:text-lg font-bold drop-shadow-sm">
                      Infrastructure and WASH Facility Checks
                    </h4>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <p className="text-xs sm:text-sm text-abwa-muted leading-relaxed">
                    Inspectors and community volunteers verify school rainwater storage tanks, hand washing stations and local pipeline connections directly on the ground.
                  </p>
                </div>
              </div>

              {/* Feature B: Direct Community Barazas */}
              <div className="group rounded-3xl overflow-hidden bg-abwa-pale/40 border border-abwa-border shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/programs/umisiiyu_women_group_kibwezi/7abwa (50).jpeg"
                    alt="Umisiiyu Women Group holding regular field review and group welfare meeting in Kibwezi"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-abwa-navy shadow-xs">
                      Community Feedback Circles
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-base sm:text-lg font-bold drop-shadow-sm">
                      Direct Community Dialogue & Reviews
                    </h4>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <p className="text-xs sm:text-sm text-abwa-muted leading-relaxed">
                    Meeting consistently with women and youth committees to review activity logs, discuss budget allocations and adjust methods based on local lived experience.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 7 M&E Practice Cards */}
            <ScrollReveal
              stagger={0.08}
              yOffset={28}
              duration={0.65}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4"
            >
              {mePractices.map((practice, idx) => {
                const Icon = practice.icon;
                const isSpan = idx === 6;
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

      {/* Section 5: Sustainability Strategy & Community Ownership */}
      <Section surface="pale">
        <Container>
          <div className="mx-auto max-w-6xl space-y-12">
            <ScrollReveal yOffset={20} duration={0.6}>
              <SectionHeader
                eyebrow="Beyond initial funding"
                title="How we build projects to last"
                description="Short term relief has its place, but our main goal is to help communities build projects that continue benefiting families long after a grant or work camp ends. Our sustainability approach rests on seven practical habits:"
                align="center"
              />
            </ScrollReveal>

            {/* Community Ownership in Action: Split Editorial Card */}
            <ScrollReveal
              yOffset={24}
              duration={0.65}
              className="rounded-3xl overflow-hidden bg-white border border-abwa-border shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center"
            >
              <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:h-full w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/programs/youth_empowerment_&_skills/7abwa (31).jpeg"
                  alt="Young entrepreneurs and community artisans managing their tailoring and production workshop independently in Kenya"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-mono font-bold text-abwa-gold uppercase tracking-wider block">
                    Locally Owned Enterprise
                  </span>
                  <span className="text-sm font-semibold">
                    Youth tailoring and production workshop in Kenya
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-4">
                <div className="space-y-1.5">
                  <span className="font-kaushan text-abwa-gold text-lg tracking-wide block">
                    Community Leadership
                  </span>
                  <h3 className="text-2xl font-bold text-abwa-navy">
                    Handover to independent local management
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-abwa-muted leading-relaxed">
                  Real sustainability means transferring operational and financial ownership to local leadership. By training management committees and linking initiatives to practical income generating enterprises such as tailoring, poultry, vegetable nurseries and craft making, projects continue thriving long after external support concludes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-abwa-pale/60 border border-abwa-border/70 space-y-1">
                    <span className="text-xs font-bold text-abwa-navy block">
                      Local Committees
                    </span>
                    <span className="text-[11px] text-abwa-muted leading-snug block">
                      Autonomous decision making rooted in neighbourhoods.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-abwa-pale/60 border border-abwa-border/70 space-y-1">
                    <span className="text-xs font-bold text-abwa-navy block">
                      Local Revenue
                    </span>
                    <span className="text-[11px] text-abwa-muted leading-snug block">
                      Small enterprises funding ongoing maintenance costs.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-abwa-pale/60 border border-abwa-border/70 space-y-1">
                    <span className="text-xs font-bold text-abwa-navy block">
                      Ongoing Check Ins
                    </span>
                    <span className="text-[11px] text-abwa-muted leading-snug block">
                      Mentorship rather than walking away after completion.
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 7 Sustainability Measures */}
            <ScrollReveal
              stagger={0.08}
              yOffset={28}
              duration={0.65}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {sustainabilityMeasures.map((measure, idx) => {
                const Icon = measure.icon;
                const isSpan = idx === 6;
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

      {/* Section 6: Documentary Evidence on the Ground */}
      <Section surface="pale" className="border-t border-abwa-border/50">
        <Container>
          <div className="mx-auto max-w-6xl space-y-10">
            <ScrollReveal yOffset={20} duration={0.6}>
              <div className="max-w-3xl space-y-2">
                <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                  Documentary Evidence
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy">
                  Verified Impact on the Ground
                </h2>
                <p className="text-base text-abwa-muted leading-relaxed">
                  Moving beyond numbers to see genuine community ownership, sustainable clean water systems, and cooperative learning captured in our official documentary film.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <YouTubeEmbed
                  videoId={flagshipVideo.id}
                  title={flagshipVideo.title}
                  aspectRatio="16:9"
                  badge={flagshipVideo.badge}
                  duration={flagshipVideo.duration}
                />
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-abwa-navy">
                    Documented Field Deliverables
                  </h3>
                  <p className="text-sm text-abwa-muted leading-relaxed">
                    This video tracks the August 2026 collaboration between Hong Kong volunteers and community leaders across Nairobi and Machakos County.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-abwa-border/70 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-bold text-abwa-navy block">Water Storage Installation</span>
                      <span className="text-abwa-muted">Verified school rainwater harvesting systems providing safe water.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-abwa-border/70 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-bold text-abwa-navy block">Vocational Livelihood Tools</span>
                      <span className="text-abwa-muted">Sewing machines and tailoring training for young mothers in Mathare.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-abwa-border/70 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-bold text-abwa-navy block">Tree Planting &amp; Conservation</span>
                      <span className="text-abwa-muted">Indigenous tree saplings planted and nurtured in Tala rural plots.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/stories"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-abwa-navy text-white text-xs sm:text-sm font-semibold hover:bg-abwa-blue transition-colors shadow-xs"
                  >
                    <span>Explore More Video Stories</span>
                    <ArrowRight className="w-3.5 h-3.5 text-abwa-gold" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 7: Verified Evidence Across Our Focus Counties */}
      <Section surface="white">
        <Container>
          <div className="mx-auto max-w-6xl space-y-12">
            <ScrollReveal yOffset={20} duration={0.6}>
              <SectionHeader
                eyebrow="Where we are today"
                title="Verified evidence across our focus counties"
                description="Right now, the clearest evidence of our work is the day to day activity across our community programmes in Nairobi, Machakos and Makueni counties. Here is what documented action looks like in the field:"
                align="center"
              />
            </ScrollReveal>

            {/* 4 Photographic Evidence Cards */}
            <ScrollReveal
              stagger={0.12}
              yOffset={28}
              duration={0.65}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {verifiedEvidencePoints.map((item, idx) => (
                <div
                  key={idx}
                  className="group rounded-3xl overflow-hidden bg-white border border-abwa-border shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/85 via-abwa-navy/25 to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-abwa-navy shadow-xs">
                        <MapPin className="w-3.5 h-3.5 text-abwa-gold" />
                        <span>{item.location}</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-abwa-navy/80 backdrop-blur-md text-[11px] font-mono text-abwa-gold border border-white/20">
                        {item.programme}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold text-white drop-shadow-sm">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between bg-abwa-pale/20">
                    <p className="text-sm text-abwa-muted leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-3 border-t border-abwa-border/60 space-y-1">
                      <div className="text-[11px] font-mono font-bold uppercase text-abwa-blue tracking-wider">
                        Field Verification
                      </div>
                      <p className="text-xs text-abwa-ink/75 leading-relaxed">
                        {item.evidenceNote}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollReveal>

            {/* Transparent Accountability Commitment Callout Box */}
            <ScrollReveal
              yOffset={24}
              duration={0.65}
              className="p-8 sm:p-10 rounded-3xl bg-abwa-pale/50 border border-abwa-border shadow-xs space-y-6"
            >
              <div className="space-y-2">
                <span className="font-kaushan text-abwa-gold text-lg tracking-wide block">
                  Commitment to Transparency
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-abwa-navy">
                  Verified dossiers in progress
                </h3>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-abwa-muted leading-relaxed max-w-4xl">
                <p>
                  We are actively gathering and verifying historical attendance records, project outputs and participant reflections so that every future evaluation report published on this page has a clear date, verified source and informed consent. When full audit dossiers are ready for public download, they will appear here.
                </p>
                <p>
                  In the meantime, you are welcome to inspect our work across 12 distinct programme pillars or browse over 300 authentic field photographs documenting our daily partnerships in Kenya.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 rounded-xl bg-abwa-navy px-5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-abwa-blue transition"
                >
                  <span>Explore Our Programmes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 rounded-xl border border-abwa-border bg-white px-5 py-2.5 text-sm font-semibold text-abwa-navy hover:bg-slate-50 transition"
                >
                  <Images className="w-4 h-4 text-abwa-gold" />
                  <span>View Community Photo Gallery</span>
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

      {/* Section 7: Closing Call to Action */}
      <SectionCTA
        surface="navy"
        title="Help us build stronger, self reliant communities"
        description="We are committed to working alongside children, young people, women and families to build practical, lasting responses to poverty, educational barriers, food insecurity and environmental challenges. If you would like to support a project or ask how we measure our work, we would be glad to talk."
        imageSrc="/images/programs/food_security_&_sustainable_agriculture/6abwa (67).jpeg"
        imageAlt="Smallholder farmers and community volunteers celebrating a thriving harvest in Kenya"
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
