import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Check, Info, ArrowRight } from "lucide-react";

export function HomeFeaturedProgramme() {
  const activities = [
    "Choosing crops that suit the place",
    "Preparing land and soil",
    "Using water wisely",
    "Caring for crops and managing pests",
    "Talking about leadership and money decisions",
    "Sharing food, stories and traditions",
  ];

  return (
    <Section surface="white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-abwa-border aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="/images/heroes/kenya-s-apollo-agriculture-raises-6m-series-a-led-by-anthemis-techcrunch.jpg"
                alt="Women group members tending to vegetable crops in Kangundo"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-semibold text-abwa-gold block">
                  Kangundo, Machakos County
                </span>
                <span className="text-sm font-bold text-white">
                  Women&apos;s Empowerment & Sustainable Agriculture
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
                Featured programme
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-abwa-navy">
                Growing food, skills and confidence together
              </h2>
            </div>

            <div className="space-y-3 text-base sm:text-lg text-abwa-muted leading-relaxed">
              <p>
                In Kangundo, in Machakos County, women&apos;s group members and volunteers share what
                they know about growing vegetables: which crops suit the local climate, how to prepare
                the soil, how to use local water well, and how to manage pests with care for the wider
                environment.
              </p>
              <p>
                Alongside the farming, our plans include conversations about leadership, financial
                decision-making and having a say in your own life. Farming days are also days of
                cooking, storytelling and cultural exchange.
              </p>
            </div>

            {/* What happens list */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-abwa-navy">
                What happens on the programme:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-abwa-ink">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Line */}
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-abwa-gold flex-shrink-0 mt-0.5" />
              <span>
                Dates and availability for volunteering differ by project. Ask us what is possible right now.
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Button
                href="/programs/womens-empowerment-sustainable-agriculture"
                variant="primary"
                size="md"
              >
                <span>Explore the programme</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/volunteer" variant="secondary" size="md">
                Ask about volunteering
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
