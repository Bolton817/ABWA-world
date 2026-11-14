import React from "react";
import Link from "next/link";
import { LegalDocument } from "@/types";
import { Container } from "@/components/ui/Container";
import {
  FileText,
  Phone,
  Mail,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

interface LegalPageLayoutProps {
  document: LegalDocument;
}

export default function LegalPageLayout({ document }: LegalPageLayoutProps) {
  return (
    <div className="bg-[#FAF7EE] text-[#263445] min-h-screen">
      {/* 1. Text-First Page Header (No Photographic Hero per TDD Module 083/084) */}
      <section className="bg-gradient-to-b from-[#15345A] to-[#1a3f6d] text-white pt-28 pb-16 border-b border-[#2a5080]">
        <Container>
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-[#EAF2FA]/70 mb-6"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B79045]" />
            <span className="text-[#EAF2FA] font-medium" aria-current="page">
              {document.title}
            </span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wide uppercase mb-4 border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B79045]" />
              <span>{document.version} • Legal Documentation</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight mb-4">
              {document.title}
            </h1>

            <p className="text-[#EAF2FA]/90 text-sm md:text-base mb-6 leading-relaxed">
              Effective Date: {document.effectiveDate}
            </p>

            {/* Status notice */}
            <div className="bg-[#15345A]/90 border border-[#B79045]/40 rounded-xl p-4 md:p-5 flex items-start gap-3.5 shadow-sm">
              <AlertCircle className="w-5 h-5 text-[#B79045] flex-shrink-0 mt-0.5" />
              <div className="text-xs md:text-sm text-[#EAF2FA]/90 leading-relaxed">
                <strong className="text-white font-medium block mb-1">
                  Draft for Client & Legal Review:
                </strong>
                {document.statusNotice}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Main Content & Sidebar TOC */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Desktop Sticky Table of Contents (4 cols) */}
            <aside className="lg:col-span-4 hidden lg:block sticky top-28 bg-white rounded-2xl p-6 border border-[#263445]/10 shadow-sm">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#263445]/10">
                <FileText className="w-4 h-4 text-[#1E63B8]" />
                <h2 className="font-semibold text-sm uppercase tracking-wider text-[#15345A]">
                  Table of Contents
                </h2>
              </div>

              <nav aria-label="Table of contents">
                <ol className="space-y-2 text-xs text-[#263445]/80 max-h-[60vh] overflow-y-auto pr-2">
                  {document.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block py-1 hover:text-[#1E63B8] hover:translate-x-1 transition-all rounded"
                      >
                        <span className="font-medium text-[#15345A]">
                          {section.number}.
                        </span>{" "}
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="mt-6 pt-6 border-t border-[#263445]/10 text-xs text-[#263445]/70 space-y-2">
                <p>
                  Questions about our terms or your data? Call our team:
                </p>
                <a
                  href="tel:+254733595906"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#15345A] hover:text-[#1E63B8] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B79045]" />
                  +254 733 595 906
                </a>
              </div>
            </aside>

            {/* Document Reader Area (8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 md:p-12 border border-[#263445]/10 shadow-sm">
              {/* Introduction paragraphs */}
              {document.intro && document.intro.length > 0 && (
                <div className="mb-10 pb-8 border-b border-[#263445]/10 space-y-4 text-base md:text-lg text-[#263445]/90 leading-relaxed font-sans">
                  {document.intro.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}

              {/* Document Sections */}
              <div className="space-y-12">
                {document.sections.map((section) => (
                  <article
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-32"
                  >
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EAF2FA] text-[#15345A] font-bold text-xs flex items-center justify-center">
                        {section.number}
                      </span>
                      <h2 className="text-xl md:text-2xl font-bold font-serif text-[#15345A] tracking-tight">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-4 text-sm md:text-base text-[#263445]/85 leading-relaxed pl-10">
                      {section.content.map((p, pIndex) => (
                        <p key={pIndex}>{p}</p>
                      ))}

                      {section.listItems && section.listItems.length > 0 && (
                        <ul className="space-y-2 my-4 list-disc pl-5 text-[#263445]/90">
                          {section.listItems.map((item, lIndex) => (
                            <li key={lIndex} className="pl-1">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.callout && (
                        <div className="mt-4 p-4 rounded-xl bg-[#EAF2FA]/60 border-l-4 border-[#B79045] text-xs md:text-sm text-[#15345A] font-medium leading-relaxed">
                          {section.callout}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              {/* Bottom Support & Contact Card */}
              <div className="mt-14 pt-10 border-t border-[#263445]/10 bg-[#FAF7EE] rounded-xl p-6 md:p-8">
                <h3 className="font-serif text-lg md:text-xl font-bold text-[#15345A] mb-2">
                  Need Clarification or Have a Concern?
                </h3>
                <p className="text-sm text-[#263445]/80 mb-6 leading-relaxed">
                  We believe in plain, open communication. If you have any question about this {document.title.toLowerCase()}, wish to exercise your data rights, or want to discuss community consent, our leadership team is readily available.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <a
                    href="tel:+254733595906"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#15345A] text-white hover:bg-[#1E63B8] transition-colors font-medium shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#B79045]" />
                    Call +254 733 595 906
                  </a>
                  <a
                    href="mailto:contact@abwaworld.org"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[#263445]/20 text-[#15345A] hover:bg-[#EAF2FA] transition-colors font-medium"
                  >
                    <Mail className="w-4 h-4 text-[#1E63B8]" />
                    contact@abwaworld.org
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[#1E63B8] hover:text-[#15345A] font-medium underline underline-offset-4"
                  >
                    Contact page <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
