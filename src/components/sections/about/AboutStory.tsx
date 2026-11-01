import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heart, Sparkles } from "lucide-react";

export function AboutStory() {
  return (
    <Section surface="pale">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-abwa-border shadow-md aspect-[4/3] bg-white">
              <Image
                src="/images/heroes/hero-community-gathering.jpg"
                alt="Community members and volunteers working together in Nairobi"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs text-abwa-gold font-bold uppercase tracking-wider block">
                  Shared Purpose
                </span>
                <span className="text-sm font-semibold">
                  Working together since 2015
                </span>
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
                Origins
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy">
                Our story
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-abwa-muted leading-relaxed">
              <p>
                ABWA was founded in 2015 in Nairobi. We began with a belief that is still at the heart
                of our work: that all it takes to change the world is a little support, and that
                support is strongest when neighbours, friends and volunteers from far away share it.
              </p>
              <p>
                Since then we have involved young people, women, children and international
                volunteers in community development projects, always with the same aim of making a
                difference through volunteering and shared effort.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-abwa-border text-sm text-abwa-ink space-y-1">
              <div className="flex items-center gap-2 font-bold text-abwa-navy">
                <Heart className="w-4 h-4 text-abwa-gold" />
                <span>Our Founding Belief</span>
              </div>
              <p className="text-xs text-abwa-muted leading-relaxed">
                All it takes to change the world is a little support, and that support is strongest
                when neighbours, friends and volunteers from far away share it.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
