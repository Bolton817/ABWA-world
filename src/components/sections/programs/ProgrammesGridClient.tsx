"use client";

import React, { useState, useMemo } from "react";
import { Programme, ProgrammeCategory } from "@/types";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { CheckCircle2, Clock, MapPin, Sparkles } from "lucide-react";

interface ProgrammesGridClientProps {
  programmes: Programme[];
}

const CATEGORIES: Array<"All" | ProgrammeCategory> = [
  "All",
  "Education & Youth",
  "Women & Livelihoods",
  "Agriculture & Environment",
  "Health & WASH",
  "Community & Inclusion",
];

const ctaMap: Record<string, string> = {
  "education-child-wellbeing": "Explore education support",
  "youth-empowerment": "Explore youth skills",
  "womens-empowerment-sustainable-agriculture": "Explore women's enterprise",
  "food-security-sustainable-agriculture": "Explore food security",
  "umisiiyu-women-group": "Explore Umisiiyu project",
  "health-community-wellbeing": "Explore health & wellbeing",
  "environmental-conservation": "Explore climate action",
  "poverty-reduction-livelihoods": "Explore livelihood projects",
  "water-sanitation-hygiene-wash": "Explore WASH initiatives",
  "arts-culture-creative-development": "Explore creative arts",
  "community-development-social-support": "Explore community support",
};

export function ProgrammesGridClient({ programmes }: ProgrammesGridClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProgrammeCategory>("All");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: programmes.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = programmes.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, [programmes]);

  const filteredProgrammes = useMemo(() => {
    if (selectedCategory === "All") return programmes;
    return programmes.filter((p) => p.category === selectedCategory);
  }, [programmes, selectedCategory]);

  return (
    <div className="space-y-10">
      {/* Category Filter Bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="font-kaushan text-abwa-gold text-base tracking-wide block">
            Filter by focus area:
          </label>
          <span className="text-xs text-abwa-muted font-medium">
            Showing {filteredProgrammes.length} of {programmes.length} programmes
          </span>
        </div>

        <div
          role="tablist"
          aria-label="Filter programmes by thematic category"
          className="flex flex-wrap gap-2 sm:gap-2.5 pb-2"
        >
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            const count = categoryCounts[category] || 0;

            return (
              <button
                key={category}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-abwa-blue text-white shadow-sm ring-2 ring-abwa-blue ring-offset-2"
                    : "bg-white text-abwa-ink border border-abwa-border hover:border-abwa-blue/50 hover:bg-slate-50"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                    isSelected ? "bg-white/25 text-white" : "bg-slate-100 text-abwa-muted"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Programmes Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProgrammes.map((item) => (
          <Card
            key={item.slug}
            badge={item.category}
            badgeVariant="default"
            subtitle={item.location}
            title={item.title}
            description={item.summary}
            imageSrc={item.heroImage}
            imageAlt={item.heroImageAlt}
            href={`/programs/${item.slug}`}
            ctaLabel={ctaMap[item.slug] || "Explore programme"}
            className="hover:scale-[1.01] transition-transform duration-200"
          />
        ))}
      </div>

      {/* Empty State Fallback (Defensive) */}
      {filteredProgrammes.length === 0 && (
        <div className="text-center py-12 px-4 rounded-3xl bg-slate-50 border border-abwa-border">
          <p className="text-base text-abwa-muted">
            No programmes found in this category.
          </p>
          <button
            onClick={() => setSelectedCategory("All")}
            className="mt-4 px-4 py-2 text-sm font-semibold text-abwa-blue hover:underline"
          >
            Reset filter to show all
          </button>
        </div>
      )}
    </div>
  );
}
