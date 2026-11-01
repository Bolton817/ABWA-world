import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { Calendar, MapPin, Users, Target, CheckCircle2 } from "lucide-react";

export function AboutOverview() {
  const atAGlance = [
    { label: "Founded", value: "2015", icon: Calendar },
    { label: "Based in", value: "Nairobi, Kenya", icon: MapPin },
    {
      label: "Who we work with",
      value:
        "Children, young people, women's groups, low-income families and local/international volunteers",
      icon: Users,
    },
    {
      label: "Our focus",
      value:
        "Education, youth and women's skills, sustainable agriculture, WASH, health awareness, creative arts and environmental care",
      icon: Target,
    },
  ];

  return (
    <Section surface="white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Overview Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                Overview
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy">
                Who we are
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-abwa-muted leading-relaxed">
              <p>
                Action for Better World Association (ABWA) is a community-focused organisation
                committed to working alongside underserved communities across Kenya. Founded in
                2015 and based in Nairobi, we promote education, economic empowerment, food
                security, health awareness, environmental conservation and community-led
                development.
              </p>
              <p>
                We believe that everyone deserves the opportunity to live a better life. Rather than
                handing down ready-made answers, we work hand in hand with local community groups,
                volunteers and partner organisations to address everyday social and economic
                challenges affecting children, young people, women and low-income households.
              </p>
            </div>
          </div>

          {/* At a Glance Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-abwa-pale border border-abwa-border shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="font-kaushan text-abwa-gold text-base sm:text-lg tracking-wide block">
                  Summary
                </span>
                <h3 className="text-xl font-bold text-abwa-navy">At a glance</h3>
              </div>

              <div className="space-y-4">
                {atAGlance.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5 pt-2 first:pt-0">
                      <div className="w-8 h-8 rounded-lg bg-white text-abwa-blue border border-abwa-border flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-abwa-navy uppercase tracking-wider">
                          {item.label}
                        </div>
                        <div className="text-sm text-abwa-ink font-medium leading-relaxed">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
