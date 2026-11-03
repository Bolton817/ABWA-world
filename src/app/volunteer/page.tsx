import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  Heart,
  Compass,
  CameraOff,
  Users2,
  MapPin,
  Calendar,
  FileCheck,
  MessageCircle,
  Clock,
  Sparkles,
  CheckCircle2,
  Globe2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageHero } from "@/components/ui/PageHero";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export const metadata: Metadata = {
  title: "Volunteer With ABWA | International & Local Volunteer Work Camps in Kenya",
  description:
    "Join short-term (2–3 weeks) or long-term volunteer work camps with ABWA in Kenya. Promote peace, exchange skills and work alongside community groups.",
  alternates: {
    canonical: "https://abwaworld.org/volunteer",
  },
  openGraph: {
    title: "Volunteer With ABWA | International & Local Volunteer Work Camps in Kenya",
    description:
      "Join short-term (2–3 weeks) or long-term volunteer work camps with ABWA in Kenya. Promote peace, exchange skills and work alongside community groups.",
    url: "https://abwaworld.org/volunteer",
    type: "website",
  },
};

const shortTermActivities = [
  "Community clean-ups and environmental conservation",
  "Educational support and creative activities with children and young people",
  "Community art, murals, cultural exchange and creative workshops",
  "Urban farming, kitchen gardens, food security and environmental awareness",
  "Community visits and shared work days with local women's and youth groups",
  "Peacebuilding, teamwork and intercultural learning",
];

const longTermActivities = [
  "Supporting education, vocational training and digital literacy",
  "Developing sustainable agriculture and household food security projects",
  "Working alongside women, young people and low-income families on livelihood skills",
  "Supporting environmental conservation, tree planting and waste management",
  "Promoting peacebuilding, social inclusion and community cooperation",
  "Offering ongoing mentorship, skills sharing and local capacity building",
];

const projectLocations = [
  {
    location: "Mathare, Nairobi",
    focus: "Youth empowerment, art, music, learning support, urban kitchen gardens and environmental action.",
    href: "/programs/youth-empowerment",
  },
  {
    location: "Kangundo, Machakos County",
    focus: "Sustainable vegetable farming, water care and women's empowerment.",
    href: "/programs/womens-empowerment-sustainable-agriculture",
  },
  {
    location: "Kibwezi, Makueni County",
    focus: "Vegetable farming and kitchen gardens with the Umisiiyu Women Group.",
    href: "/programs/umisiiyu-women-group",
  },
  {
    location: "Kasigau, Taita Taveta County",
    focus: "Wildlife conservation, human and wildlife coexistence, Mount Kasigau nature education, tree planting and Taita cultural exchange.",
    href: "/programs/kasigau-wildlife-conservation",
  },
];

const programObjectives = [
  "Promote peace, unity and mutual understanding among people from different cultures.",
  "Encourage practical cooperation between international and local volunteers.",
  "Foster genuine cultural exchange and two-way learning.",
  "Support sustainable, community-led development initiatives.",
  "Strengthen local communities through skills sharing and capacity building.",
  "Encourage young people to grow as active citizens and community leaders.",
  "Build lasting partnerships between local groups and international organisations.",
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
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="International and Local Volunteering"
        title="Volunteer With ABWA"
        subtitle="Work hand in hand with Kenyan communities to share skills, build peace and create lasting change."
        description="We organise short-term and long-term volunteer work camps that bring local and international volunteers together with community groups. Read how our work camps run and send us an enquiry."
        imageSrc="/images/programs/community_development_social_support/6abwa (66).jpeg"
        imageAlt="Volunteers and community children sharing joyful moments and local life in Kenya"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Volunteer With ABWA", href: "/volunteer" },
        ]}
        primaryCta={{
          label: "Send an enquiry",
          href: "#volunteer-enquiry",
          variant: "blue",
        }}
        secondaryCta={{
          label: "Explore Our Programmes",
          href: "/programs",
        }}
      />

      {/* 2. Program Overview & Work Camp Vision */}
      <Section surface="white">
        <Container>
          <div className="mx-auto max-w-4xl space-y-10">
            <ScrollReveal yOffset={20} duration={0.6}>
              <div className="space-y-3">
                <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                  How our work camps work
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy">
                  International and local volunteer work camps
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.65} className="space-y-4 text-base sm:text-lg text-abwa-muted leading-relaxed">
              <p>
                Action for Better World Association (ABWA), in collaboration with local and
                international volunteers, organises short-term and long-term work camps aimed at
                promoting peace, cultural exchange, community development and international
                cooperation.
              </p>
              <p>
                Our work camps bring together people from different backgrounds to work side by
                side with local community groups—addressing everyday social challenges,
                exchanging practical knowledge and skills, and supporting community-led solutions.
              </p>
            </ScrollReveal>

            {/* Work Camp Vision Callout Card */}
            <ScrollReveal yOffset={28} duration={0.65}>
              <div className="p-8 sm:p-10 rounded-3xl bg-abwa-pale border-2 border-abwa-gold/40 shadow-xs relative overflow-hidden">
                <div className="flex items-center gap-3 pb-3 border-b border-abwa-gold/20">
                  <div className="w-10 h-10 rounded-xl bg-white text-abwa-blue border border-abwa-border flex items-center justify-center shadow-2xs">
                    <Globe2 className="w-5 h-5 text-abwa-gold" />
                  </div>
                  <div>
                    <span className="font-kaushan text-abwa-blue text-base sm:text-lg tracking-wide block">
                      Core Purpose
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-abwa-navy">
                      Our work camp vision
                    </h3>
                  </div>
                </div>
                <p className="pt-4 text-base sm:text-lg text-abwa-ink leading-relaxed font-serif italic">
                  &ldquo;To build a peaceful, inclusive and sustainable world where people from
                  different backgrounds work together to create positive change.&rdquo;
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* 3. Honest Expectations Callout */}
      <Section surface="pale">
        <Container>
          <div className="mx-auto max-w-4xl rounded-3xl border-2 border-amber-300 bg-amber-50/80 p-6 sm:p-10 text-abwa-ink shadow-sm">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-200/80 text-amber-900 shadow-2xs mt-1">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <span className="font-kaushan text-amber-900 text-lg sm:text-xl tracking-wide block">
                  Honest expectations
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-950">
                  Before you enquire
                </h2>
                <div className="space-y-3 text-base text-amber-950/90 leading-relaxed">
                  <p>
                    Volunteering with ABWA depends on active community projects and what our local
                    host groups need at the time. Sending an enquiry starts a conversation—it does
                    not guarantee a placement. Dates, accommodation arrangements and any practical
                    costs differ by project, and we confirm everything with you in writing before you
                    commit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Two Ways to Volunteer — Short-Term & Long-Term Tracks */}
      <Section surface="white">
        <Container>
          <div className="mx-auto max-w-4xl space-y-12">
            <ScrollReveal yOffset={20} duration={0.6}>
              <SectionHeader
                eyebrow="Choose your timeframe"
                title="Short-term and long-term work camps"
                description="Whether you have a couple of weeks to join a group work camp or several months to walk alongside a project in depth, we shape placements around community priorities."
                align="center"
              />
            </ScrollReveal>

            {/* 2 Track Cards Comparison */}
            <ScrollReveal
              stagger={0.15}
              yOffset={32}
              duration={0.65}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Short-Term Card */}
              <div className="p-8 rounded-3xl bg-white border border-abwa-border shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-kaushan text-abwa-blue text-base sm:text-lg tracking-wide">
                      Duration: 2–3 weeks
                    </span>
                    <Clock className="w-5 h-5 text-abwa-gold" />
                  </div>

                  <h3 className="text-2xl font-bold text-abwa-navy">
                    Short-term work camps
                  </h3>

                  <p className="text-sm text-abwa-muted leading-relaxed">
                    Short-term camps bring international and local volunteers together for focused,
                    hands-on community activities, cultural understanding and shared learning.
                  </p>

                  <div className="pt-2 border-t border-abwa-border">
                    <span className="text-xs font-bold uppercase tracking-wider text-abwa-navy block mb-3">
                      Key Activities:
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-abwa-ink">
                      {shortTermActivities.map((act, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-abwa-blue shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-abwa-border/50">
                  <Link
                    href="#volunteer-enquiry"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-abwa-blue hover:text-abwa-blue-hover transition-colors"
                  >
                    <span>Enquire about short-term camps</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Long-Term Card */}
              <div className="p-8 rounded-3xl bg-white border border-abwa-border shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-kaushan text-abwa-gold text-base sm:text-lg tracking-wide">
                      Duration: 2 months to several years
                    </span>
                    <Calendar className="w-5 h-5 text-abwa-gold" />
                  </div>

                  <h3 className="text-2xl font-bold text-abwa-navy">
                    Long-term volunteer programmes
                  </h3>

                  <p className="text-sm text-abwa-muted leading-relaxed">
                    Long-term placements are for local and international volunteers who want to take
                    part in sustained community development—working closely with local groups and
                    partner organisations to strengthen capacity over time.
                  </p>

                  <div className="pt-2 border-t border-abwa-border">
                    <span className="text-xs font-bold uppercase tracking-wider text-abwa-navy block mb-3">
                      Key Activities:
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-abwa-ink">
                      {longTermActivities.map((act, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-abwa-gold shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-abwa-border/50">
                  <Link
                    href="#volunteer-enquiry"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-abwa-blue hover:text-abwa-blue-hover transition-colors"
                  >
                    <span>Enquire about long-term volunteering</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Community Project Locations Sub-block */}
            <ScrollReveal yOffset={24} duration={0.65} className="pt-6">
              <div className="p-8 rounded-3xl bg-abwa-pale/60 border border-abwa-border space-y-6">
                <div className="space-y-2">
                  <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                    Where you could be placed
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-abwa-navy">
                    Where volunteers work alongside local groups
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {projectLocations.map((loc, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-abwa-border shadow-2xs space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-abwa-blue">
                          <MapPin className="w-4 h-4 shrink-0 text-abwa-gold" />
                          <h4 className="font-bold text-sm text-abwa-navy">
                            {loc.location}
                          </h4>
                        </div>
                        <p className="text-xs text-abwa-muted leading-relaxed">
                          {loc.focus}
                        </p>
                      </div>

                      <Link
                        href={loc.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-abwa-blue hover:underline pt-2 border-t border-slate-100"
                      >
                        <span>View programme details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* 5. Work Camp Objectives & Expected Outcomes */}
      <Section surface="pale">
        <Container>
          <div className="mx-auto max-w-4xl space-y-10">
            <ScrollReveal yOffset={20} duration={0.6}>
              <SectionHeader
                eyebrow="Why we host work camps"
                title="What our work camps aim to achieve"
                description="Our work camps are structured around clear principles that deliver genuine two-way value for host communities and volunteers alike."
                align="center"
              />
            </ScrollReveal>

            <ScrollReveal
              stagger={0.12}
              yOffset={28}
              duration={0.65}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: 7 Objectives */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-abwa-border shadow-xs space-y-5">
                <div className="space-y-1">
                  <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                    Framework
                  </span>
                  <h3 className="text-xl font-bold text-abwa-navy">
                    Our main objectives
                  </h3>
                </div>

                <ol className="space-y-3.5 text-sm text-abwa-ink">
                  {programObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-abwa-pale text-abwa-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-abwa-border">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Right Column: Expected Outcomes */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-abwa-navy text-white shadow-md space-y-5">
                <div className="space-y-2">
                  <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                    Mutual Impact
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Expected outcomes for communities and volunteers
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                  Through these work camps, we aim to strengthen community relationships, deepen
                  intercultural understanding, build practical local skills and support the
                  wellbeing of participating households.
                </p>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans pt-2 border-t border-white/10">
                  At the same time, volunteers gain the chance to live simply alongside hosts, learn
                  from Kenyan communities and contribute meaningfully to work that lasts.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* 6. Who Can Enquire, Ground Rules & 4-Step Process */}
      <Section surface="white">
        <Container>
          <div className="mx-auto max-w-4xl space-y-16">
            {/* Eligibility Note */}
            <div className="space-y-4">
              <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                Eligibility & Openness
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
                Who can enquire
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-abwa-muted sm:text-lg">
                <p>
                  We welcome enquiries from local and international volunteers. You do not need
                  special qualifications to ask. Curiosity, respect and a willingness to learn matter
                  more than a CV.
                </p>
                <p>
                  Skills that are often useful include teaching and learning support, art, music,
                  farming and gardening, and environmental work. If you have another skill you would
                  like to share, tell us.
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-abwa-border bg-abwa-pale/60 p-5 text-sm text-abwa-ink">
                <p>
                  <strong className="text-abwa-navy">A note on sensitive information:</strong>{" "}
                  Please do not submit passport numbers, personal identification documents, or medical
                  records in your initial message. We will never ask for these prior to mutual
                  consultation.
                </p>
              </div>
            </div>

            {/* What We Ask of You (Ground Rules) */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                  Our Commitments
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-abwa-navy">
                  What we ask of you
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {expectations.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-abwa-border bg-white p-6 sm:p-7 shadow-xs space-y-3"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-abwa-pale text-abwa-blue border border-abwa-border shadow-2xs">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-bold text-abwa-navy">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-abwa-muted">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4-Step Process */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                  Simple & Transparent
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-abwa-navy">
                  How an enquiry works
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.step}
                      className="rounded-3xl border border-abwa-border bg-abwa-pale/40 p-6 flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <span className="inline-block rounded-md bg-abwa-pale px-2.5 py-1 text-xs font-bold text-abwa-navy border border-abwa-border">
                          {step.step}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-abwa-blue shadow-2xs">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="text-base font-bold text-abwa-navy">
                          {step.title}
                        </h4>
                        <p className="text-xs leading-relaxed text-abwa-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form Container */}
            <div id="volunteer-enquiry" className="pt-6">
              <div className="rounded-3xl border border-abwa-border bg-abwa-pale/40 p-6 sm:p-10 shadow-sm">
                <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
                  <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                    Get in touch
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-abwa-navy">
                    Send us an enquiry
                  </h3>
                  <p className="text-sm text-abwa-muted">
                    Fill out the form below to start a conversation. We will review your message and
                    reply promptly.
                  </p>
                </div>

                <div className="rounded-2xl border border-abwa-border bg-white p-6 sm:p-10 shadow-xs">
                  <VolunteerForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Closing CTA */}
      <SectionCTA
        surface="navy"
        title="Still deciding?"
        description="Read our guide to ethical community volunteering in Kenya, or browse our answers to common questions."
        imageSrc="/images/programs/environmental_conservation_&_climate/7abwa (24).jpeg"
        imageAlt="Volunteers and community members planting indigenous tree saplings together in Kenya"
        primaryCta={{
          label: "Read: Ethical Volunteering in Kenya",
          href: "/blog/ethical-community-volunteering-in-kenya",
        }}
        secondaryCta={{
          label: "Read the FAQ",
          href: "/faq",
        }}
      />
    </>
  );
}
