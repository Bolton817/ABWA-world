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
      label: "We work with",
      value: "Women's groups, young people, children and volunteers",
      icon: Users,
    },
    {
      label: "Our focus",
      value: "Skills, farming and livelihoods, creativity, learning and the environment",
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
              <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
                Overview
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy">
                Who we are
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-abwa-muted leading-relaxed">
              <p>
                Action for Better World Association (ABWA) is a community organisation based in
                Nairobi, Kenya. We work with women&apos;s groups, young people and children, and with
                volunteers who join us from Kenya and abroad, on projects that build skills,
                strengthen livelihoods and care for the environment.
              </p>
              <p>
                Our tagline is{" "}
                <span className="text-abwa-navy font-semibold">
                  Transforming Lives Through Action
                </span>
                . It is a big promise, so we try to keep it honest. Change is slow, it belongs to
                the people living it, and our role is to walk alongside them with practical help,
                shared skills and patience.
              </p>
            </div>
          </div>

          {/* At a Glance Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-abwa-pale border border-abwa-border shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
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
