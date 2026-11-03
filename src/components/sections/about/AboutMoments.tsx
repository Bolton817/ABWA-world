import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { ArrowRight, Images } from "lucide-react";

export function AboutMoments() {
  const moments = [
    {
      title: "Education & Child Development",
      description: "Nurturing curiosity, learning materials and mentorship in schools",
      imageSrc: "/images/programs/education_&_child_development/1abwa (11).jpeg",
      imageAlt: "Children in school classroom reading and participating in learning activities",
      tag: "Learning in Action",
    },
    {
      title: "Sustainable Agriculture",
      description: "Promoting climate resilient kitchen gardens and healthy food",
      imageSrc: "/images/programs/food_security_&_sustainable_agriculture/5abwa (80).jpeg",
      imageAlt: "Community women harvesting fresh crops in rural vegetable garden",
      tag: "Food Security",
    },
    {
      title: "Environmental Action",
      description: "Tree planting, clean up campaigns and local ecological restoration",
      imageSrc: "/images/programs/environmental_conservation_&_climate/5abwa (41).jpeg",
      imageAlt: "Volunteers and community members planting trees for environmental conservation",
      tag: "Conservation",
    },
    {
      title: "Creative Expression",
      description: "Youth talent workshops, artistic mentorship and community murals",
      imageSrc: "/images/programs/arts_culture_&_creative_development/2abwa (8).jpeg",
      imageAlt: "Youth engaged in creative arts and community painting workshop",
      tag: "Youth Arts",
    },
  ];

  return (
    <Section surface="white">
      <Container>
        {/* Header */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <SectionHeader
            eyebrow="Community in action"
            title="Moments from the ground"
            description="Across education, sustainable agriculture, environmental care and creative youth expression, real people are making a lasting difference every day."
            align="center"
          />
        </ScrollReveal>

        {/* 4 Photo Showcase Grid */}
        <ScrollReveal
          stagger={0.1}
          yOffset={28}
          duration={0.65}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4"
        >
          {moments.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-slate-100 border border-abwa-border shadow-2xs hover:shadow-lg transition-all flex flex-col justify-end aspect-[4/5]"
            >
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/90 via-abwa-navy/35 to-transparent pointer-events-none" />

              {/* Tag & Narrative Overlay */}
              <div className="relative z-10 p-5 sm:p-6 space-y-2 text-white">
                <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-mono font-bold uppercase tracking-wider text-abwa-gold">
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug drop-shadow-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </ScrollReveal>

        {/* Link to Full Gallery */}
        <ScrollReveal yOffset={16} duration={0.6} delay={0.2} className="pt-10 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-abwa-pale text-abwa-navy font-semibold text-sm sm:text-base border border-abwa-border hover:bg-abwa-blue hover:text-white hover:border-abwa-blue transition-all shadow-2xs group"
          >
            <Images className="w-4 h-4 text-abwa-gold group-hover:text-white transition-colors" />
            <span>Explore all photos in our community gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
