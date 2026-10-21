import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SearchClient } from "@/components/search/SearchClient";

export const metadata: Metadata = {
  title: "Search | ABWA World",
  description:
    "Search across all programmes, articles, stories, FAQs, and pages on ABWA World.",
  alternates: {
    canonical: "https://www.abwaworld.org/search",
  },
  openGraph: {
    title: "Search | ABWA World",
    description:
      "Search across all programmes, articles, stories, FAQs, and pages on ABWA World.",
    url: "https://www.abwaworld.org/search",
    type: "website",
  },
};

export default function SearchPage() {
  return (
    <main id="main-content">
      {/* Header section */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 pt-10 pb-12 sm:pt-14 sm:pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Search", href: "/search" },
              ]}
            />
            <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl md:text-5xl">
              Search ABWA World
            </h1>
            <p className="mt-3 text-base sm:text-lg text-abwa-ink/75">
              Find programmes, articles, stories, FAQs, and pages across our site.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Search Component */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SearchClient />
          </div>
        </Container>
      </Section>
    </main>
  );
}
