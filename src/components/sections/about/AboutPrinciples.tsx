import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerGroup } from "@/components/animation/StaggerGroup";

export function AboutPrinciples() {
  const principles = [
    {
      num: "01",
      title: "We listen first",
      text: "Projects are shaped with community groups, not handed to them.",
    },
    {
      num: "02",
      title: "We work with local knowledge",
      text: "Farmers, teachers, artists and mentors in the community lead. Volunteers support.",
    },
    {
      num: "03",
      title: "We share skills that last",
      text: "We focus on things people can keep using after a project day ends.",
    },
    {
      num: "04",
      title: "We respect people's dignity",
      text: "We ask permission before sharing anyone's story or photograph, and we take particular care with children.",
    },
    {
      num: "05",
      title: "We say what we know and what we don't",
      text: "If we cannot back up a claim with evidence, we leave it out.",
    },
  ];

  return (
    <Section surface="white">
      <Container>
        <SectionHeader
          eyebrow="Approach"
          title="How we work"
          description="Five foundational principles guiding every initiative, interaction and partnership."
        />

        <StaggerGroup stagger={0.07} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-abwa-border shadow-2xs space-y-3 relative overflow-hidden"
            >
              <div className="text-3xl font-extrabold text-abwa-gold/40 font-mono">
                {item.num}
              </div>
              <h3 className="text-lg font-bold text-abwa-navy">{item.title}</h3>
              <p className="text-sm text-abwa-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
