import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Users2, ShieldCheck, Sprout, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function HomeImpact() {
  const highlights = [
    {
      title: "Community-Led Design",
      description: "Shaped around the priorities community members identify themselves.",
      icon: Users2,
      color: "bg-blue-50 text-abwa-blue border-blue-200",
    },
    {
      title: "Honest Monitoring",
      description:
        "Tracked through attendance logs, before-and-after assessments and transparent financial records.",
      icon: ShieldCheck,
      color: "bg-amber-50 text-abwa-gold border-amber-200",
    },
    {
      title: "Built to Last",
      description:
        "Handed over to trained local committees and supported by income-generating activities.",
      icon: Sprout,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ];

  return (
    <Section surface="white">
      <Container>
        <div className="max-w-4xl mx-auto space-y-10">
          <ScrollReveal yOffset={20} duration={0.6} className="text-center space-y-4">
            <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
              Our impact and accountability
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy">
              What our work looks like on the ground
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-abwa-muted leading-relaxed max-w-3xl mx-auto">
              <p>
                We would rather show you practical community work and how we track it than quote
                big, unverified numbers. Across our programmes, our day-to-day activities focus on
                education and child wellbeing, youth and women&apos;s skills, sustainable farming,
                clean water and hygiene, creative arts and environmental care.
              </p>
              <p className="text-sm sm:text-base">
                Every ABWA initiative is designed with the local community, monitored through
                activity records, site visits and community feedback, and built with a clear
                sustainability plan so local groups can manage projects independently over time.
              </p>
            </div>
          </ScrollReveal>

          {/* 3 Mini Highlight Cards with Staggered ScrollReveal */}
          <ScrollReveal
            stagger={0.12}
            yOffset={28}
            duration={0.65}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-abwa-pale/60 border border-abwa-border shadow-2xs hover:shadow-md transition-shadow space-y-3.5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${item.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-abwa-navy">{item.title}</h3>
                    <p className="text-sm text-abwa-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-abwa-border/50 text-[11px] font-mono text-abwa-gold uppercase tracking-wider">
                    Pillar 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal yOffset={20} duration={0.6} delay={0.15} className="text-center pt-2">
            <Button href="/impact" variant="primary" size="lg">
              <span>See how we plan and measure impact</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
