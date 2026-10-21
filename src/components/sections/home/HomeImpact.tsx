import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Palette, TreePine, Carrot, BookOpen, ArrowRight, ShieldCheck } from "lucide-react";

export function HomeImpact() {
  const pillars = [
    {
      title: "Art & Music with Youth",
      description: "Creative workshops, talent recording, and community engagement in Mathare.",
      icon: Palette,
    },
    {
      title: "Tree Planting & Waste Care",
      description: "Environmental action along the Mathare River, cleanups, and creative plastic reuse.",
      icon: TreePine,
    },
    {
      title: "Vegetable Farming",
      description: "Sustainable cultivation, soil care, and kitchen gardens with women's groups.",
      icon: Carrot,
    },
    {
      title: "Learning Support",
      description: "Classroom assistance, peer mentoring for teenage girls, and skills sharing.",
      icon: BookOpen,
    },
  ];

  return (
    <Section surface="white">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
            Our impact
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy">
            What our work looks like on the ground
          </h2>
          <p className="text-base sm:text-lg text-abwa-muted leading-relaxed">
            We would rather show you real activity than quote big numbers. Our projects focus on art
            and music with young people, tree planting and waste reduction, vegetable farming with
            women&apos;s groups, and learning support in schools.
          </p>
          <p className="text-sm text-abwa-muted leading-relaxed">
            We&apos;re gathering and checking the figures and stories behind our work, so that
            anything we publish here is accurate and agreed with the people involved. Until then,
            we&apos;ll show you what we do rather than overstate what we&apos;ve achieved.
          </p>
        </div>

        {/* Four Focus Pillars (Qualitative Evidence) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-abwa-pale/60 border border-abwa-border space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-abwa-blue border border-abwa-border flex items-center justify-center shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-abwa-navy">{item.title}</h3>
                <p className="text-xs text-abwa-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button href="/impact" variant="outline" size="md">
            <span>See how we think about impact</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
