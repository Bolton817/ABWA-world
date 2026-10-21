import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { MessageSquareQuote, ShieldCheck, ArrowRight } from "lucide-react";

export function HomeCommunityVoices() {
  return (
    <Section surface="pale">
      <Container>
        <SectionHeader
          eyebrow="Community voices"
          title="In their own words"
          description="Short reflections from people we work alongside, shared with their permission."
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-abwa-border shadow-xs space-y-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-abwa-gold border border-amber-200 flex items-center justify-center mx-auto shadow-xs">
              <MessageSquareQuote className="w-6 h-6" />
            </div>

            <p className="text-base sm:text-lg text-abwa-ink leading-relaxed italic font-serif">
              &ldquo;We share stories and reflections only with the informed consent of the people
              involved. Real change comes from the knowledge, energy and dedication of community
              members themselves.&rdquo;
            </p>

            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-abwa-muted">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Safeguarding & consent-cleared publishing</span>
              </div>
              <Link
                href="/stories"
                className="font-semibold text-abwa-blue hover:text-abwa-blue-hover inline-flex items-center gap-1"
              >
                <span>Read community stories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
