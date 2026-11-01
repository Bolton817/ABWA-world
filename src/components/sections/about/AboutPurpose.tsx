import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eye, Target, HeartHandshake } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function AboutPurpose() {
  return (
    <Section surface="white">
      <Container>
        <div className="max-w-4xl mx-auto space-y-10">
          <ScrollReveal yOffset={20} duration={0.6}>
            <SectionHeader
              eyebrow="Our purpose"
              title="Vision, mission and commitment"
              description="Guided by client-approved principles to support children, young people, women and families across Kenya."
              align="center"
            />
          </ScrollReveal>

          {/* Vision & Mission Split Cards */}
          <ScrollReveal
            stagger={0.12}
            yOffset={28}
            duration={0.65}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Vision Card */}
            <div className="p-8 rounded-3xl bg-abwa-pale border border-abwa-border shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-abwa-blue border border-abwa-border flex items-center justify-center shadow-2xs">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-abwa-navy">Our vision</h3>
                <p className="text-base text-abwa-ink leading-relaxed">
                  A world where all people have equal opportunities to live healthy, dignified,
                  productive and fulfilling lives.
                </p>
              </div>
              <span className="font-kaushan text-abwa-blue text-base tracking-wide block pt-2">
                Long-Term Horizon
              </span>
            </div>

            {/* Mission Card */}
            <div className="p-8 rounded-3xl bg-abwa-pale border border-abwa-border shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-abwa-gold border border-abwa-border flex items-center justify-center shadow-2xs">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-abwa-navy">Our mission</h3>
                <p className="text-base text-abwa-ink leading-relaxed">
                  To empower communities through education, skills development, sustainable
                  livelihoods, food security, environmental conservation and community-led
                  development initiatives.
                </p>
              </div>
              <span className="font-kaushan text-abwa-gold text-base tracking-wide block pt-2">
                Everyday Mandate
              </span>
            </div>
          </ScrollReveal>

          {/* Commitment Callout Card */}
          <ScrollReveal yOffset={24} duration={0.65} delay={0.15}>
            <div className="p-8 sm:p-10 rounded-3xl bg-abwa-navy text-white shadow-md relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-abwa-gold flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                    Our Promise
                  </span>
                  <h3 className="text-2xl font-bold text-white">Our commitment</h3>
                </div>
              </div>
              <p className="pt-5 text-base sm:text-lg text-slate-200 leading-relaxed font-sans">
                We are committed to working with communities to create practical, lasting responses
                to poverty, youth unemployment, educational barriers, food insecurity and
                environmental degradation—so that families can strengthen their livelihoods and
                shape their own future.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
