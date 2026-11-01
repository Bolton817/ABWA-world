import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  GraduationCap,
  Sparkles,
  Briefcase,
  Sprout,
  Activity,
  TreePine,
  TrendingUp,
  Droplets,
  Palette,
  Users2,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function AboutFocusAreas() {
  const pillars = [
    {
      num: "01",
      title: "Education & Child Development",
      description:
        "School sponsorship, feeding support, learning materials, computer labs and mentorship.",
      href: "/programs",
      icon: GraduationCap,
      linkText: "View education work",
    },
    {
      num: "02",
      title: "Youth Empowerment & Skills",
      description:
        "Vocational training, tailoring, digital literacy, entrepreneurship, leadership and talent development.",
      href: "/programs/youth-empowerment",
      icon: Sparkles,
      linkText: "Explore youth empowerment",
    },
    {
      num: "03",
      title: "Women's Empowerment & Enterprise",
      description:
        "Tailoring, small-business training, village savings groups, poultry farming and support for young mothers.",
      href: "/programs/womens-empowerment-sustainable-agriculture",
      icon: Briefcase,
      linkText: "Explore women's enterprise",
    },
    {
      num: "04",
      title: "Food Security & Sustainable Agriculture",
      description:
        "Climate-smart vegetable farming, urban kitchen gardens, rainwater harvesting and market access.",
      href: "/programs/womens-empowerment-sustainable-agriculture",
      icon: Sprout,
      linkText: "Explore sustainable farming",
    },
    {
      num: "05",
      title: "Health & Community Wellbeing",
      description:
        "Preventive health campaigns, mental health and psychosocial support, nutrition and maternal/child health awareness.",
      href: "/programs",
      icon: Activity,
      linkText: "Learn about health initiatives",
    },
    {
      num: "06",
      title: "Environmental Conservation & Climate Action",
      description:
        "Community tree planting, clean-ups, plastic recycling, composting and environmental education.",
      href: "/programs/environmental-conservation",
      icon: TreePine,
      linkText: "Explore conservation work",
    },
    {
      num: "07",
      title: "Poverty Reduction & Livelihoods",
      description:
        "Start-up support, financial literacy, business tools, value addition and household livelihood initiatives.",
      href: "/programs",
      icon: TrendingUp,
      linkText: "View livelihood projects",
    },
    {
      num: "08",
      title: "Water, Sanitation & Hygiene (WASH)",
      description:
        "Water tank installation, rainwater harvesting, school handwashing stations and hygiene education.",
      href: "/programs",
      icon: Droplets,
      linkText: "Learn about WASH action",
    },
    {
      num: "09",
      title: "Arts, Culture & Creative Development",
      description:
        "Community murals, drawing and painting workshops, recycled-art projects and creative entrepreneurship.",
      href: "/programs",
      icon: Palette,
      linkText: "Explore arts & culture",
    },
    {
      num: "10",
      title: "Community Development & Social Support",
      description:
        "Community needs assessments, support for elderly people and people living with disability, and local capacity building.",
      href: "/programs",
      icon: Users2,
      linkText: "View community support",
    },
  ];

  return (
    <Section surface="white">
      <Container>
        {/* Section Header with ScrollReveal */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <SectionHeader
            eyebrow="Our thematic pillars"
            title="Where we focus our work"
            description="A focus area is a long-term commitment; a programme is the practical work on the ground. Today, our work spans ten interconnected areas of community life."
            align="center"
          />
        </ScrollReveal>

        {/* 10 Pillars Responsive Grid with Staggered ScrollReveal */}
        <ScrollReveal
          stagger={0.08}
          yOffset={28}
          duration={0.65}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Link
                key={idx}
                href={pillar.href}
                className="group p-6 sm:p-7 rounded-3xl bg-abwa-pale/50 border border-abwa-border hover:border-abwa-blue/60 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between space-y-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-white text-abwa-blue border border-abwa-border flex items-center justify-center group-hover:bg-abwa-blue group-hover:text-white transition-colors shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-abwa-gold">
                      Pillar {pillar.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-abwa-navy group-hover:text-abwa-blue transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-abwa-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-abwa-blue group-hover:text-abwa-blue-hover transition-colors">
                  <span>{pillar.linkText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </ScrollReveal>
      </Container>
    </Section>
  );
}
