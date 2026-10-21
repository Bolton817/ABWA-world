"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { faqData } from "@/content/faq";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

export function HomeFAQPreview() {
  const homeQuestions = faqData.filter((item) => item.showOnHome);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section surface="white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="Questions people often ask us"
            description="Clear, straightforward answers about who we are, where we work, and how to get involved."
            align="center"
          />

          <div className="space-y-3 mb-10">
            {homeQuestions.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-abwa-border bg-white shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="text-base sm:text-lg font-bold text-abwa-navy pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-abwa-muted flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-abwa-blue" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-abwa-muted leading-relaxed border-t border-slate-100 pt-3"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button href="/faq" variant="outline" size="md">
              <span>See all questions</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
