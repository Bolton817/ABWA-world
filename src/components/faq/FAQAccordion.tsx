"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Layers } from "lucide-react";
import { ExtendedFAQItem } from "@/content/faq";

interface FAQAccordionProps {
  items: ExtendedFAQItem[];
}

const categories = [
  "All",
  "About",
  "Programmes",
  "Volunteering",
  "Giving",
  "Partnership",
  "Safeguarding",
  "Contact",
] as const;

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0])); // First open by default

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  const handleExpandAll = () => {
    setOpenIndices(new Set(filteredItems.map((_, i) => i)));
  };

  const handleCollapseAll = () => {
    setOpenIndices(new Set());
  };

  return (
    <div className="space-y-8">
      {/* Category Pills & Expand/Collapse Toggle */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndices(new Set([0]));
                }}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-abwa-navy text-white shadow-sm"
                    : "bg-slate-100 text-abwa-ink/70 hover:bg-slate-200 hover:text-abwa-navy"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Expand / Collapse All buttons */}
        <div className="flex items-center gap-2 text-xs font-medium text-abwa-ink/60 shrink-0">
          <button
            type="button"
            onClick={handleExpandAll}
            className="hover:text-abwa-blue hover:underline"
          >
            Expand all
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={handleCollapseAll}
            className="hover:text-abwa-blue hover:underline"
          >
            Collapse all
          </button>
        </div>
      </div>

      {/* Accordion list */}
      <div className="space-y-4">
        {filteredItems.map((faq, idx) => {
          const isOpen = openIndices.has(idx);
          const questionId = `faq-q-${idx}`;
          const answerId = `faq-a-${idx}`;

          return (
            <div
              key={faq.question}
              className={`rounded-2xl border transition-all duration-200 ${
                isOpen
                  ? "border-abwa-blue/30 bg-white shadow-sm"
                  : "border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-white"
              }`}
            >
              <button
                id={questionId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => toggleItem(idx)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-abwa-pale text-xs font-bold text-abwa-blue">
                    Q
                  </span>
                  <span className="font-heading text-lg font-bold text-abwa-navy sm:text-xl">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-abwa-pale text-abwa-blue" : "text-abwa-ink/40"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              {/* Server-rendered HTML answer container */}
              <div
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                className={`overflow-hidden px-6 transition-all duration-300 ${
                  isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                }`}
              >
                <div className="border-t border-slate-100 pt-4 pl-10 text-base leading-relaxed text-abwa-ink/80">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
