"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";
import { BlogPost } from "@/types";

interface BlogIndexClientProps {
  initialPosts: BlogPost[];
}

const categories = ["All", "Agriculture", "Youth", "Volunteering"] as const;

export function BlogIndexClient({ initialPosts }: BlogIndexClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? initialPosts
      : initialPosts.filter((post) => post.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                isActive
                  ? "bg-abwa-navy text-white shadow-sm"
                  : "bg-slate-100 text-abwa-ink/70 hover:bg-slate-200 hover:text-abwa-navy"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Articles Grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all hover:border-abwa-blue/30 hover:shadow-md"
          >
            <div>
              {/* Image thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={post.heroImage}
                  alt={post.heroImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-abwa-navy shadow-sm backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-abwa-ink/60">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.publishedDate}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-xl font-bold leading-snug text-abwa-navy hover:text-abwa-blue">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-abwa-ink/75 line-clamp-3">
                  {post.summary}
                </p>
              </div>
            </div>

            {/* Read CTA */}
            <div className="border-t border-slate-100 p-6 pt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 font-heading text-sm font-bold text-abwa-blue transition hover:text-abwa-navy"
              >
                <span>Read the article</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-12 text-center text-abwa-ink/70">
          <BookOpen className="mx-auto h-10 w-10 text-abwa-ink/40" />
          <h3 className="mt-4 font-heading text-lg font-bold text-abwa-navy">
            No articles in this category yet
          </h3>
          <p className="mt-2 text-sm">
            Check back soon as we publish further notes and reflections from our projects.
          </p>
        </div>
      )}
    </div>
  );
}
