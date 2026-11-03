import React from "react";
import { Container } from "@/components/ui/Container";
import { Users2, Wrench, Sprout, HeartHandshake } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

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
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-fixed bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/programs/community_development_social_support/6abwa (74).jpeg')",
      }}
    >
      {/* Light, non-overpowering dark overlay for natural photo visibility */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header with ScrollReveal & dark shadow readability */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-8 sm:mb-12">
            <span className="inline-block font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)] drop-shadow-md">
              How we work
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white [text-shadow:_0_3px_12px_rgba(0,0,0,0.95)] drop-shadow-lg">
              Built with communities, not for them
            </h2>
            <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)] drop-shadow-md">
              These are the ideas that guide how we plan and carry out our projects.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid with Staggered ScrollReveal */}
        <ScrollReveal
          stagger={0.12}
          yOffset={32}
          duration={0.65}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
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
        </ScrollReveal>
      </Container>
    </section>
  );
}
