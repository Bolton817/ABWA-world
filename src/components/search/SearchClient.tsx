"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search as SearchIcon, X, ArrowRight, FileText, BookOpen, Users, HelpCircle, Layers } from "lucide-react";
import { siteSearchIndex } from "@/content/searchIndex";
import { SearchableItem } from "@/types";

function SearchClientInner() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Programme", "Article", "Story", "Page", "FAQ"] as const;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return selectedCategory === "All"
        ? siteSearchIndex
        : siteSearchIndex.filter((item) => item.category === selectedCategory);
    }

    return siteSearchIndex.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      if (!matchesCategory) return false;

      const titleMatch = item.title.toLowerCase().includes(q);
      const snippetMatch = item.snippet.toLowerCase().includes(q);
      const keywordMatch = item.keywords?.some((k) => k.toLowerCase().includes(q));

      return titleMatch || snippetMatch || keywordMatch;
    });
  }, [query, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programme":
        return Layers;
      case "Article":
        return BookOpen;
      case "Story":
        return Users;
      case "FAQ":
        return HelpCircle;
      default:
        return FileText;
    }
  };

  return (
    <div className="space-y-8">
      {/* Search Input Box */}
      <div className="relative mx-auto max-w-2xl">
        <div className="relative flex items-center">
          <SearchIcon className="pointer-events-none absolute left-4 h-5 w-5 text-abwa-ink/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search programmes, articles, stories, FAQs, or pages"
            placeholder="Search programmes, articles, stories, FAQs, or pages..."
            className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-12 text-base text-abwa-ink placeholder:text-abwa-ink/40 shadow-sm focus:border-abwa-blue focus:outline-none focus:ring-2 focus:ring-abwa-blue/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-4 w-8 h-8 rounded-full flex items-center justify-center text-abwa-ink/40 hover:bg-slate-100 hover:text-abwa-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
              aria-label="Clear search query"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 min-h-[38px] flex items-center justify-center text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue ${
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

      {/* Results Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-xs text-abwa-ink/60">
        <span>
          Showing {results.length} {results.length === 1 ? "result" : "results"}
          {query ? ` for "${query}"` : ""}
        </span>
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="text-abwa-blue hover:underline"
          >
            Reset query
          </button>
        )}
      </div>

      {/* Results List */}
      <div className="space-y-4">
        {results.map((item) => {
          const Icon = getCategoryIcon(item.category);
          return (
            <Link
              key={item.url + item.title}
              href={item.url}
              className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-abwa-blue/30 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-abwa-pale text-abwa-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-abwa-ink/70">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="mt-2 font-heading text-lg font-bold text-abwa-navy group-hover:text-abwa-blue">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-abwa-ink/75 line-clamp-2">
                      {item.snippet}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-abwa-ink/40 transition group-hover:translate-x-1 group-hover:text-abwa-blue">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Empty State */}
      {results.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-12 text-center">
          <SearchIcon className="mx-auto h-12 w-12 text-abwa-ink/30" />
          <h3 className="mt-4 font-heading text-xl font-bold text-abwa-navy">
            No matches found for &ldquo;{query}&rdquo;
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-abwa-ink/70">
            Try searching for common topics such as <strong>farming</strong>, <strong>youth</strong>,{" "}
            <strong>volunteering</strong>, <strong>Mathare</strong>, or <strong>Kangundo</strong>.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/programs"
              className="rounded-xl bg-abwa-navy px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-abwa-blue"
            >
              Browse Programmes
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-abwa-ink hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export function SearchClient() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-abwa-ink/60">Loading search...</div>}>
      <SearchClientInner />
    </Suspense>
  );
}
