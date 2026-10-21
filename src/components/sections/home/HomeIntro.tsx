import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HomeIntro() {
  return (
    <Section surface="white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
                Who we are
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy">
                Meet Action for Better World Association
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-abwa-muted leading-relaxed">
              <p>
                Action for Better World Association, or ABWA, is a community organisation based in
                Nairobi, Kenya. Since 2015 we have worked with women&apos;s groups, young people,
                children and volunteers from Kenya and around the world on projects that build skills,
                grow food, nurture creativity and care for the environment.
              </p>
              <p>
                Our purpose is to promote sustainable community development: improving people&apos;s
                social, economic and environmental wellbeing, and helping growth include everyone.
              </p>
              <p>
                We work with community groups because they know their own priorities best. Volunteers
                and supporters bring hands, ideas and resources to walk alongside them.
              </p>
            </div>

            <div className="pt-2">
              <Button href="/about" variant="primary" size="lg">
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Genuine Community Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-abwa-border shadow-md bg-abwa-pale aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="/images/heroes/about-our-charity-mondetta-usa.jpg"
                alt="ABWA team and community partners collaborating in Nairobi"
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
          </div>
        </div>
      </Container>
    </Section>
  );
}
