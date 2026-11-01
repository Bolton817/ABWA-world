import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Sparkles,
  Scale,
  ShieldCheck,
  Users,
  Sprout,
  Handshake,
  Heart,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function AboutValues() {
  const values = [
    {
      title: "Empowerment",
      description:
        "Supporting individuals and community groups with the skills and tools to become self-reliant.",
      icon: Sparkles,
      color: "bg-blue-50 text-abwa-blue border-blue-200",
    },
    {
      title: "Equality",
      description:
        "Promoting fair and equal opportunities for everyone, regardless of background.",
      icon: Scale,
      color: "bg-amber-50 text-abwa-gold border-amber-200",
    },
    {
      title: "Integrity",
      description:
        "Maintaining openness, honesty, accountability and responsible stewardship of every resource.",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      title: "Community Participation",
      description:
        "Making sure the people at the heart of every project lead in identifying needs and shaping solutions.",
      icon: Users,
      color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      title: "Sustainability",
      description:
        "Building long-term, practical solutions that continue to serve future generations.",
      icon: Sprout,
      color: "bg-teal-50 text-teal-700 border-teal-200",
    },
    {
      title: "Partnership",
      description:
        "Working collaboratively with local groups, volunteers, donors, schools and fellow organisations.",
      icon: Handshake,
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      title: "Compassion",
      description:
        "Walking alongside people with warmth, dignity and mutual respect.",
      icon: Heart,
      color: "bg-rose-50 text-rose-700 border-rose-200",
      centerCard: true,
    },
  ];

  return (
    <Section surface="pale">
      <Container>
        <ScrollReveal yOffset={20} duration={0.6}>
          <SectionHeader
            eyebrow="What we stand for"
            title="Our core values"
            description="Seven shared principles guide how we listen, plan, use resources and work alongside communities."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal
          stagger={0.1}
          yOffset={30}
          duration={0.65}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4"
        >
          {values.map((v, idx) => {
            const Icon = v.icon;
            const isCentered = v.centerCard;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl bg-white border border-abwa-border shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4 ${
                  isCentered ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${v.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-abwa-navy">{v.title}</h3>
                  <p className="text-sm text-abwa-muted leading-relaxed">
                    {v.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-abwa-border/50">
                  <span className="font-kaushan text-abwa-gold text-base tracking-wide">
                    Core Value 0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </ScrollReveal>
      </Container>
    </Section>
  );
}
