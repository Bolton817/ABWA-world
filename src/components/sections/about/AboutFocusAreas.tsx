import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, Sparkles, Sprout, TreePine, BookOpen } from "lucide-react";

export function AboutFocusAreas() {
  const focusAreas = [
    {
      title: "Youth empowerment and creativity",
      description:
        "Giving young people space to build skills, share their talents and take part in community life.",
      href: "/programs/youth-empowerment",
      icon: Sparkles,
      linkText: "Explore youth empowerment",
    },
    {
      title: "Women's livelihoods and sustainable agriculture",
      description:
        "Sharing practical farming knowledge and supporting women's decision-making and income.",
      href: "/programs/womens-empowerment-sustainable-agriculture",
      icon: Sprout,
      linkText: "Explore women's agriculture",
    },
    {
      title: "Environmental care",
      description:
        "Planting trees, reducing waste and finding new uses for what would be thrown away.",
      href: "/programs/environmental-conservation",
      icon: TreePine,
      linkText: "Explore environmental action",
    },
    {
      title: "Learning and skills",
      description:
        "Supporting teaching and training so that people can use new skills in everyday life.",
      href: "/programs",
      icon: BookOpen,
      linkText: "View learning programmes",
    },
  ];

  return (
    <Section surface="pale">
      <Container>
        <SectionHeader
          eyebrow="Priorities"
          title="Where we focus"
          description="A focus area is a long-term priority. A programme is a specific piece of work within it. Here is how they connect."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <Link
                key={idx}
                href={area.href}
                className="group p-6 sm:p-8 rounded-3xl bg-white border border-abwa-border shadow-xs hover:shadow-md hover:border-abwa-blue/50 transition-all flex flex-col justify-between space-y-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-abwa-pale text-abwa-blue border border-abwa-border flex items-center justify-center group-hover:bg-abwa-blue group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-abwa-navy group-hover:text-abwa-blue transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm sm:text-base text-abwa-muted leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-abwa-blue group-hover:text-abwa-blue-hover transition-colors">
                  <span>{area.linkText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
