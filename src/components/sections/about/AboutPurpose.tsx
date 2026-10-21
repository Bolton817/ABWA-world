import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Briefcase, HeartHandshake, Leaf, GraduationCap, Compass } from "lucide-react";

export function AboutPurpose() {
  const objectives = [
    {
      title: "Economic opportunity",
      description:
        "We aim to support local entrepreneurship and small businesses, especially in rural areas and urban informal settlements, through training, market links and access to finance.",
      icon: Briefcase,
    },
    {
      title: "Inclusion and equity",
      description:
        "We aim to run initiatives that empower people who are often left out, including people living with disability.",
      icon: HeartHandshake,
    },
    {
      title: "Care for the environment",
      description:
        "We aim to promote sustainable practices and conservation with communities, including tree planting and waste management.",
      icon: Leaf,
    },
    {
      title: "Skills and mentoring",
      description:
        "We aim to offer training, mentoring and capacity-building so that community members can grow their skills.",
      icon: GraduationCap,
    },
  ];

  return (
    <Section surface="white">
      <Container>
        {/* Purpose & Vision Cards */}
        <div className="max-w-4xl mx-auto space-y-10 mb-16">
          <SectionHeader
            eyebrow="Mission & Vision"
            title="What we aim to do"
            description="Our purpose is rooted in long-term community wellbeing and inclusive local growth."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Purpose */}
            <div className="p-8 rounded-3xl bg-abwa-navy text-white shadow-md space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-abwa-gold flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Purpose</h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  ABWA aims to promote sustainable community development to improve people&apos;s
                  quality of life and to foster inclusive growth by improving their social,
                  economic and environmental wellbeing.
                </p>
              </div>
              <span className="text-[11px] text-abwa-gold/80 font-mono pt-2">
                Core Organizational Objective
              </span>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-abwa-pale border border-abwa-border shadow-xs space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white text-abwa-blue border border-abwa-border flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-abwa-navy">Our Vision</h3>
                <p className="text-sm sm:text-base text-abwa-muted leading-relaxed font-serif italic">
                  &ldquo;A world where communities have the skills, opportunities and support to shape
                  their own futures.&rdquo;
                </p>
              </div>
              <span className="text-[11px] text-abwa-muted font-mono pt-2">
                Shared Horizon
              </span>
            </div>
          </div>
        </div>

        {/* Four Objectives */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-abwa-navy">Our objectives</h3>
            <p className="text-sm text-abwa-muted">
              These four pillars shape how we choose, plan and evaluate our community projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, idx) => {
              const Icon = obj.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-abwa-border shadow-xs space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-abwa-pale text-abwa-blue flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-abwa-navy">{obj.title}</h4>
                    <p className="text-xs sm:text-sm text-abwa-muted leading-relaxed">
                      {obj.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
