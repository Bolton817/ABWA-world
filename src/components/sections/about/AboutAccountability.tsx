import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Mail, ArrowRight } from "lucide-react";

export function AboutAccountability() {
  return (
    <Section surface="pale">
      <Container>
        <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border border-abwa-border shadow-xs space-y-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-abwa-blue border border-blue-200 flex items-center justify-center mx-auto shadow-2xs">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
              Governance & Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-abwa-navy">
              Accountability
            </h2>
          </div>

          <div className="space-y-3 text-base text-abwa-muted leading-relaxed max-w-2xl mx-auto">
            <p>
              We think organisations should be easy to hold to account. If you are a funder,
              partner, researcher or community member and would like to know more about how ABWA is
              run, please ask us and we will share what we can.
            </p>
            <p className="text-sm text-slate-500">
              We&apos;ll add our registration and governance details to this page as soon as they
              have been checked and approved.
            </p>
          </div>

          <div className="pt-2">
            <Button href="/contact" variant="primary" size="md">
              <Mail className="w-4 h-4 mr-1.5" />
              <span>Contact ABWA</span>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
