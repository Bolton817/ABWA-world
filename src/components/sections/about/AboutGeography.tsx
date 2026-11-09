import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MapPin, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function AboutGeography() {
  const locations = [
    {
      place: "Mathare, Nairobi",
      tag: "Urban Community Hub",
      description:
        "Educational support at Caso Upendo Primary School, youth enterprise with the Miami Florida Youth Group, and tailoring with the Young Mothers Women Group.",
      link: "/programs/youth-empowerment",
      imageSrc: "/images/programs/youth_empowerment_&_skills/4abwa (7).jpeg",
      imageAlt: "Youth and community members participating in skills training in Mathare Nairobi",
    },
    {
      place: "Kangundo, Machakos County",
      tag: "Agricultural Partnership",
      description:
        "Work with a women's group on vegetable farming and shared learning.",
      link: "/programs/womens-empowerment-sustainable-agriculture",
      imageSrc: "/images/programs/women_empowerment_&_agriculture/3abwa (5).jpeg",
      imageAlt: "Women farmers in Kangundo Machakos County harvesting vegetables",
    },
    {
      place: "Kibwezi, Makueni County",
      tag: "Semi Arid Kitchen Gardens",
      description:
        "Work with the Umisiiyu Women Group on vegetable farming and kitchen gardens.",
      link: "/programs/umisiiyu-women-group",
      imageSrc: "/images/programs/umisiiyu_women_group_kibwezi/5abwa (76).jpeg",
      imageAlt: "Umisiiyu Women Group members tending to kitchen gardens in Kibwezi Makueni",
    },
    {
      place: "Kasigau, Taita Taveta County",
      tag: "Wildlife Conservation",
      description:
        "Work alongside the Taita community, wildlife rangers and volunteers on community wildlife conservation, peaceful coexistence, forest restoration and cultural exchange around Mount Kasigau.",
      link: "/programs/kasigau-wildlife-conservation",
      imageSrc: "/images/programs/Kasiagu_Wildlife_conservation/5abwa (54).jpeg",
      imageAlt: "Wildlife conservation community rangers and volunteers near Mount Kasigau",
    },
  ];

  return (
    <Section surface="pale">
      <Container>
        {/* Section Header with ScrollReveal */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <SectionHeader
            eyebrow="Geography"
            title="Where we work"
            description="ABWA is based in Nairobi, Kenya. We work where we have built relationships with community groups, rather than claiming to be everywhere. Our project plans involve four places across Nairobi, Machakos, Makueni and Taita Taveta counties."
          />
        </ScrollReveal>

        {/* 4 Location Cards with Staggered ScrollReveal */}
        <ScrollReveal
          stagger={0.12}
          yOffset={32}
          duration={0.65}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="group p-5 sm:p-6 rounded-3xl bg-white border border-abwa-border shadow-2xs space-y-4 hover:shadow-md hover:border-abwa-blue/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Authentic Location Photo */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-200 border border-abwa-border/80 shadow-2xs">
                  <Image
                    src={loc.imageSrc}
                    alt={loc.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="flex items-center justify-between pt-0.5">
                  <div className="w-9 h-9 rounded-xl bg-white text-abwa-gold border border-abwa-border flex items-center justify-center shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-kaushan text-abwa-gold text-sm sm:text-base tracking-wide">
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

              {loc.link && (
                <div className="pt-3 border-t border-abwa-border/50">
                  <Link
                    href={loc.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-abwa-blue hover:text-abwa-navy transition-colors"
                  >
                    <span>View programme details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </ScrollReveal>
      </Container>
    </Section>
  );
}
