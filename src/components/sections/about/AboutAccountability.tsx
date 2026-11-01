import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ClipboardList, ShieldCheck, Sprout, ArrowRight, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function AboutAccountability() {
  const pillars = [
    {
      title: "How we design projects",
      tag: "Thoughtful Planning",
      description:
        "We identify and design initiatives around the priorities community members raise themselves. Before a project begins, we set out a clear problem statement, specific goals, a practical schedule, a transparent budget, measurable indicators and an agreed sustainability plan.",
      icon: ClipboardList,
      color: "bg-blue-50 text-abwa-blue border-blue-200",
    },
    {
      title: "Accountability and learning",
      tag: "M&E and Financial Openness",
      description:
        "We track our work through attendance and activity records, site visits, before-and-after assessments, financial expenditure reports and regular review meetings with community groups. We strive to keep transparent financial records and share honest updates with community members, partners and supporters.",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      title: "Designed for community ownership",
      tag: "Sustainability Strategy",
      description:
        "We want projects to thrive long after a grant or volunteer visit ends. We do this by training local management committees, supporting income-generating activities, mobilising local resources, and providing follow-up mentorship.",
      icon: Sprout,
      color: "bg-amber-50 text-abwa-gold border-amber-200",
    },
  ];

  return (
    <Section surface="pale">
      <Container>
        {/* Section Header with ScrollReveal */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <SectionHeader
            eyebrow="How we plan and stay accountable"
            title="Built to last, and open to scrutiny"
            description="Good intentions are not enough. Every ABWA project is planned with the community from the start, monitored honestly while it runs, and designed to keep going after initial funding ends."
            align="center"
          />
        </ScrollReveal>

        {/* 3 Pillars Grid with Staggered ScrollReveal */}
        <ScrollReveal
          stagger={0.12}
          yOffset={32}
          duration={0.65}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4"
        >
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-abwa-border shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${item.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-kaushan text-abwa-gold text-base tracking-wide">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-abwa-navy">{item.title}</h3>

                  <p className="text-sm text-abwa-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-abwa-border/50 text-[11px] font-mono text-abwa-gold uppercase tracking-wider">
                  Framework Pillar 0{idx + 1}
                </div>
              </div>
            );
          })}
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal yOffset={20} duration={0.6} delay={0.2} className="pt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/impact" variant="primary" size="lg">
            <span>See how we measure impact</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            <Mail className="w-4 h-4 mr-1.5" />
            <span>Contact ABWA</span>
          </Button>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
