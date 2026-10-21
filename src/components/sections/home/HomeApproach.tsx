import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Users2, Wrench, Sprout, HeartHandshake } from "lucide-react";

export function HomeApproach() {
  const principles = [
    {
      title: "Community first",
      description:
        "We start by listening. Projects are shaped with the groups we partner with, because they know their own priorities best.",
      icon: Users2,
      color: "bg-blue-50 text-abwa-blue border-blue-200",
    },
    {
      title: "Practical skills",
      description:
        "From soil preparation to painting, music to teaching, we focus on skills people can use in everyday life.",
      icon: Wrench,
      color: "bg-amber-50 text-abwa-gold border-amber-200",
    },
    {
      title: "Care for the environment",
      description:
        "Tree planting, waste reduction and sustainable farming sit alongside everything else we do.",
      icon: Sprout,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      title: "Respect and partnership",
      description:
        "Volunteers and partners are welcome as guests and collaborators. We ask everyone to arrive curious and respectful, and to learn as much as they give.",
      icon: HeartHandshake,
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
  ];

  return (
    <Section surface="pale">
      <Container>
        <SectionHeader
          eyebrow="How we work"
          title="Built with communities, not for them"
          description="These are the ideas that guide how we plan and carry out our projects."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-abwa-border shadow-xs space-y-4 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-abwa-navy">{item.title}</h3>
                <p className="text-sm text-abwa-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
