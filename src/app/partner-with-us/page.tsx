import React from "react";
import { Metadata } from "next";
import {
  Handshake,
  GraduationCap,
  Coins,
  Lightbulb,
  Building2,
  Users2,
  ClipboardList,
  ShieldCheck,
  Sprout,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageHero } from "@/components/ui/PageHero";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export const metadata: Metadata = {
  title: "Partner With ABWA | Collaboration and Partnerships in Kenya",
  description:
    "ABWA welcomes collaboration with NGOs, funders, schools, businesses and community groups. Learn how we work together and start a conversation.",
  alternates: {
    canonical: "https://abwaworld.org/partner-with-us",
  },
  openGraph: {
    title: "Partner With ABWA | Collaboration and Partnerships in Kenya",
    description:
      "ABWA welcomes collaboration with NGOs, funders, schools, businesses and community groups. Learn how we work together and start a conversation.",
    url: "https://abwaworld.org/partner-with-us",
    type: "website",
  },
};

const waysToWorkTogether = [
  {
    title: "Local & International NGOs and CBOs",
    tag: "Civil Society",
    description:
      "Co-design and deliver community programmes in education, youth skills, women's enterprise, health, WASH and environmental conservation.",
    icon: Handshake,
    color: "bg-blue-50 text-abwa-blue border-blue-200",
  },
  {
    title: "Funders, Donors & Grantmakers",
    tag: "Financial Stewardship",
    description:
      "Support a specific community project or thematic pillar with clear budgets, measurable indicators, before-and-after assessments and transparent financial accountability.",
    icon: Coins,
    color: "bg-amber-50 text-abwa-gold border-amber-200",
  },
  {
    title: "Educational Institutions & Universities",
    tag: "Learning & Research",
    description:
      "Collaborate on student exchanges, ethical work camps, digital literacy labs, school improvements and community research.",
    icon: GraduationCap,
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    title: "Private-Sector & Corporate Partners",
    tag: "CSR & Enterprise",
    description:
      "Partner through CSR initiatives, vocational training, mentorship, equipment donations (such as computers, sewing machines or water tanks) and market linkages for local enterprises.",
    icon: Building2,
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    title: "Technical Experts & Skills Partners",
    tag: "Advisory & Mentorship",
    description:
      "Share practical expertise in climate-smart agriculture, health outreach, creative arts, entrepreneurship or financial literacy alongside local mentors.",
    icon: Lightbulb,
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    title: "Public & Community Institutions",
    tag: "Local Coordination",
    description:
      "Coordinate with schools, qualified health providers and local leadership to ensure community projects align with local needs and safeguard participants.",
    icon: Users2,
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
];

const planningHighlights = [
  {
    title: "Structured Project Design",
    description:
      "Every joint project includes a clear background and problem statement, specific objectives, planned schedule, detailed budget, and agreed monitoring indicators.",
    icon: ClipboardList,
  },
  {
    title: "Transparent Monitoring & Reporting",
    description:
      "We track progress through attendance and activity records, site visits, community feedback and financial expenditure reports shared openly with partners.",
    icon: ShieldCheck,
  },
  {
    title: "Built-In Exit & Sustainability Strategy",
    description:
      "We train community management committees and link projects to local income generation so initiatives continue thriving after initial funding ends.",
    icon: Sprout,
  },
];

export default function PartnerWithUsPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Partnerships and Collaboration"
        title="Partner With Us"
        subtitle="Organisations, schools, funders, businesses and community groups: let's work together."
        description="ABWA welcomes collaboration with local and international partners to share knowledge, mobilise resources, strengthen local capacity and expand sustainable community development."
        imageSrc="/images/heroes/tracing-turkey-s-development-aid-in-namibia.jpg"
        imageAlt="Community partners, leaders, and organisations collaborating on sustainable development in Kenya"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Partner With Us", href: "/partner-with-us" },
        ]}
        primaryCta={{
          label: "Start a conversation",
          href: "#partner-enquiry",
          variant: "blue",
        }}
      />

      {/* 2. Why Partner With ABWA */}
      <Section surface="white">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
            <ScrollReveal yOffset={20} duration={0.6}>
              <div className="space-y-3">
                <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                  Working together
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy">
                  Why partner with ABWA
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.65} className="space-y-4 text-base sm:text-lg text-abwa-muted leading-relaxed">
              <p>
                Action for Better World Association works directly with women&apos;s groups, young
                people, schools and families in Nairobi, Machakos and Makueni counties. We combine
                deep local relationships with the technical skills, volunteer energy and funding
                that partners bring.
              </p>
              <p>
                We welcome collaboration with local and international NGOs, community-based
                organisations (CBOs), educational institutions, private-sector partners, volunteer
                networks, donors and government agencies where appropriate.
              </p>
              <p>
                We approach every partnership as an open conversation first—agreeing clearly on
                shared goals, keeping communities at the centre of decisions, and providing
                transparent activity and financial reporting.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* 3. Who We Collaborate With & Ways to Work Together (6-Card Grid) */}
      <Section surface="pale">
        <Container>
          <div className="mx-auto max-w-4xl space-y-12">
            <ScrollReveal yOffset={20} duration={0.6}>
              <SectionHeader
                eyebrow="How we collaborate"
                title="Ways we can work together"
                description="We partner across six collaborative channels to build sustainable, community-led initiatives."
                align="center"
              />
            </ScrollReveal>

            <ScrollReveal
              stagger={0.1}
              yOffset={30}
              duration={0.65}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {waysToWorkTogether.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-abwa-border shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${item.color}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-kaushan text-abwa-gold text-base tracking-wide">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-abwa-navy">
                        {item.title}
                      </h3>

                      <p className="text-sm text-abwa-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <a
                        href="#partner-enquiry"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-abwa-blue hover:text-abwa-blue-hover transition-colors"
                      >
                        <span>Explore this pathway</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* 4. How We Plan, Monitor and Sustain Partner Projects */}
      <Section surface="white">
        <Container>
          <div className="mx-auto max-w-4xl space-y-10">
            <ScrollReveal yOffset={20} duration={0.6}>
              <SectionHeader
                eyebrow="Our commitment to partners"
                title="Clear planning, honest reporting and lasting ownership"
                description="We know that strong partnerships depend on clear expectations, open communication and demonstrable local ownership."
                align="center"
              />
            </ScrollReveal>

            <ScrollReveal
              stagger={0.12}
              yOffset={28}
              duration={0.65}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {planningHighlights.map((block, idx) => {
                const Icon = block.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-8 rounded-3xl bg-abwa-pale/60 border border-abwa-border shadow-2xs space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-11 h-11 rounded-2xl bg-white text-abwa-blue border border-abwa-border flex items-center justify-center shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-abwa-navy">
                        {block.title}
                      </h3>
                      <p className="text-sm text-abwa-muted leading-relaxed">
                        {block.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-abwa-border/50 text-[11px] font-mono text-abwa-gold uppercase tracking-wider">
                      Standard 0{idx + 1}
                    </div>
                  </div>
                );
              })}
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* 5. Start a Conversation (Partner Form) */}
      <Section id="partner-enquiry" surface="pale">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="text-center space-y-2 mb-8">
              <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                Initiate Dialogue
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
                Start a conversation
              </h2>
              <p className="text-sm text-abwa-muted">
                Tell us about your organisation and the kind of collaboration you would like to explore.
              </p>
            </div>

            <div className="rounded-3xl border border-abwa-border bg-white p-6 sm:p-10 shadow-sm">
              <PartnerForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
