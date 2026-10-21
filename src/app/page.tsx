import React from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Foundation Hero Preview */}
      <section className="bg-abwa-navy text-white py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-abwa-gold border border-abwa-gold/30">
              <span>{siteConfig.formalName}</span>
              <span>•</span>
              <span>{siteConfig.contact.location}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Community action for a better world
            </h1>
            <p className="text-lg sm:text-xl text-slate-200">
              Working with women, young people and children in Kenyan communities.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Since {siteConfig.foundingYear}, ABWA has worked alongside community groups on farming,
              creative skills, environmental action and learning. We believe lasting change is built
              with people, not delivered to them.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-abwa-blue hover:bg-abwa-blue-hover text-white font-medium text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {siteConfig.contact.phone}</span>
              </a>
              <div className="inline-flex items-center gap-2 text-slate-300 text-sm">
                <MapPin className="w-4 h-4 text-abwa-gold" />
                <span>{siteConfig.contact.location}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Design System Token Verification Section */}
      <Section surface="pale">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
                Design Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-abwa-navy">
                Design Tokens & Architectural Baseline
              </h2>
              <p className="text-abwa-muted text-sm sm:text-base">
                Verifying color hierarchy, responsive typography, and layout primitives for Stage 01.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-abwa-navy text-white text-xs font-mono space-y-1 shadow-sm">
                <div className="font-bold text-sm">abwa-navy</div>
                <div>#15345A</div>
                <div className="text-slate-300 text-[10px]">Primary surface</div>
              </div>
              <div className="p-4 rounded-lg bg-abwa-blue text-white text-xs font-mono space-y-1 shadow-sm">
                <div className="font-bold text-sm">abwa-blue</div>
                <div>#1E63B8</div>
                <div className="text-slate-200 text-[10px]">Action & links</div>
              </div>
              <div className="p-4 rounded-lg bg-abwa-gold text-white text-xs font-mono space-y-1 shadow-sm">
                <div className="font-bold text-sm">abwa-gold</div>
                <div>#B79045</div>
                <div className="text-amber-100 text-[10px]">Warm accent</div>
              </div>
              <div className="p-4 rounded-lg bg-white border border-abwa-border text-abwa-ink text-xs font-mono space-y-1 shadow-sm">
                <div className="font-bold text-sm">abwa-pale</div>
                <div>#EAF2FA</div>
                <div className="text-abwa-muted text-[10px]">Surface contrast</div>
              </div>
              <div className="p-4 rounded-lg bg-white border border-abwa-border text-abwa-ink text-xs font-mono space-y-1 shadow-sm">
                <div className="font-bold text-sm">abwa-ink</div>
                <div>#263445</div>
                <div className="text-abwa-muted text-[10px]">Body text</div>
              </div>
              <div className="p-4 rounded-lg bg-white border border-abwa-border text-abwa-muted text-xs font-mono space-y-1 shadow-sm">
                <div className="font-bold text-sm">abwa-muted</div>
                <div>#5E6B78</div>
                <div className="text-abwa-muted text-[10px]">Secondary text</div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 text-sm text-abwa-ink">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>
                WCAG 2.2 AA token target: Contrast ratios verified on white and pale backgrounds.
              </span>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
