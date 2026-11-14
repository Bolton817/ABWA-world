import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { flagshipVideo } from "@/content/videos";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { Globe, Users, Droplets, ArrowRight } from "lucide-react";

export function AboutGlobalSolidarity() {
  const pillars = [
    {
      icon: Users,
      title: "Mutual Learning and Respect",
      description:
        "International volunteers work alongside Kenyan innovators as equals, learning from community wisdom while sharing complementary skills.",
    },
    {
      icon: Droplets,
      title: "Tangible Community Infrastructure",
      description:
        "Direct collaboration delivers clean water storage tanks, tailoring workshops, sustainable kitchen gardens, and school support.",
    },
    {
      icon: Globe,
      title: "Bridging Mathare and Rural Tala",
      description:
        "Connecting urban informal settlements and rural smallholder farmers to international solidarity networks that endure across years.",
    },
  ];

  return (
    <Section surface="pale" className="border-t border-abwa-border/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Documentary Player */}
          <div className="lg:col-span-7">
            <ScrollReveal yOffset={24} duration={0.6}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="font-kaushan text-abwa-gold text-lg tracking-wide block">
                    Cross Cultural Exchange
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy">
                    Global Solidarity &amp; Grassroots Action
                  </h2>
                </div>

                <YouTubeEmbed
                  videoId={flagshipVideo.id}
                  title={flagshipVideo.title}
                  aspectRatio="16:9"
                  badge={flagshipVideo.badge}
                  duration={flagshipVideo.duration}
                  thumbnail={flagshipVideo.thumbnail}
                />

                <p className="text-xs text-abwa-muted italic">
                  Watch international volunteers from Hong Kong and local community partners unite across Mathare and Tala.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Pillars & Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal yOffset={24} duration={0.6} delay={0.1}>
              <p className="text-sm sm:text-base text-abwa-muted leading-relaxed">
                At ABWA, we believe that true transformation happens when global friendship meets community driven leadership. In August 2026, volunteers from Hong Kong joined hands with our Kenyan teams to construct water systems, support tailoring initiatives, and mentor students.
              </p>
            </ScrollReveal>

            {/* Key Pillars */}
            <div className="space-y-4">
              {pillars.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <ScrollReveal
                    key={item.title}
                    yOffset={16}
                    duration={0.5}
                    delay={0.15 + index * 0.08}
                  >
                    <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-abwa-border/60 shadow-2xs">
                      <div className="p-2 rounded-xl bg-abwa-pale text-abwa-blue shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold text-abwa-navy">
                          {item.title}
                        </h3>
                        <p className="text-xs text-abwa-muted leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Action Buttons */}
            <ScrollReveal yOffset={20} duration={0.6} delay={0.4}>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-abwa-blue text-white text-xs sm:text-sm font-semibold hover:bg-abwa-blue-hover transition-colors shadow-sm"
                >
                  <span>Join Our Volunteer Network</span>
                </Link>
                <Link
                  href="/stories"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white border border-abwa-border text-xs sm:text-sm font-semibold text-abwa-navy hover:bg-abwa-pale transition-colors shadow-2xs"
                >
                  <span>Explore Stories</span>
                  <ArrowRight className="w-3.5 h-3.5 text-abwa-gold" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
