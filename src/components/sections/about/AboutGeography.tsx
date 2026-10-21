import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MapPin, Navigation } from "lucide-react";

export function AboutGeography() {
  const locations = [
    {
      place: "Mathare, Nairobi",
      tag: "Urban Community Hub",
      description:
        "Work with a local youth group on art, music, learning support and environmental action.",
    },
    {
      place: "Kangundo, Machakos County",
      tag: "Agricultural Partnership",
      description:
        "Work with a women's group on vegetable farming and shared learning.",
    },
    {
      place: "Kibwezi, Makueni County",
      tag: "Semi-Arid Kitchen Gardens",
      description:
        "Work with the Umisiiyu Women Group on vegetable farming and kitchen gardens.",
    },
  ];

  return (
    <Section surface="white">
      <Container>
        <SectionHeader
          eyebrow="Geography"
          title="Where we work"
          description="ABWA is based in Nairobi, Kenya. We work where we have built relationships with community groups, rather than claiming to be everywhere. Our project plans involve three places."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-abwa-pale/60 border border-abwa-border shadow-2xs space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white text-abwa-gold border border-abwa-border flex items-center justify-center shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-abwa-muted bg-white px-2.5 py-1 rounded-full border border-abwa-border">
                  {loc.tag}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-abwa-navy">{loc.place}</h3>
                <p className="text-sm text-abwa-muted leading-relaxed">
                  {loc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
