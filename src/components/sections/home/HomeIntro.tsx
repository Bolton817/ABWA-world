import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function HomeIntro() {
  return (
    <Section surface="white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content with ScrollReveal */}
          <ScrollReveal yOffset={20} duration={0.6} className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                Who we are · Empowering Communities
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy">
                Meet Action for Better World Association
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-abwa-muted leading-relaxed">
              <p>
                Action for Better World Association, or ABWA, is a community-focused organisation based in
                Nairobi, Kenya. Since 2015, we have worked alongside local communities, women&apos;s
                groups, young people, volunteers and partner organisations to build practical, lasting
                solutions to social and economic challenges.
              </p>
              <p>
                We believe that everyone deserves a fair chance to live a healthy, dignified and
                fulfilling life. Through initiatives in education, skills development, sustainable
                farming, health awareness and environmental conservation, we support children, young
                people, women and low-income families to build self-reliant communities.
              </p>
              <p>
                We start with local groups because they know their own priorities best. Volunteers and
                partners bring hands, ideas and resources to walk alongside them.
              </p>
            </div>

            <div className="pt-2">
              <Button href="/about" variant="primary" size="lg">
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </ScrollReveal>

          {/* Genuine Community Visual with ScrollReveal */}
          <ScrollReveal yOffset={24} duration={0.65} delay={0.15} className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-abwa-border shadow-md bg-abwa-pale aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="/images/programs/women_empowerment_&_agriculture/6abwa (75).jpeg"
                alt="ABWA community members and volunteers collaborating warmly in Kenya"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-goldie text-abwa-gold font-bold tracking-wide block">
                  Action for Better World Association
                </span>
                <span className="text-xs text-slate-200">
                  Nairobi • Founded 2015
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
