"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MessageSquare, X, Phone, Heart, Mail, ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [hubOpen, setHubOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll progress for Scroll-to-Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close hub on Escape key
  useEffect(() => {
    if (!hubOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setHubOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [hubOpen]);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      {/* 1. Bottom-Left Scroll-to-Top Control per TDD Module 028 */}
      <div
        className={`fixed bottom-6 left-6 z-40 transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 rounded-lg bg-white/90 backdrop-blur-sm border border-abwa-border text-abwa-navy hover:text-abwa-blue hover:bg-abwa-pale hover:border-abwa-blue/50 shadow-md flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* 2. Bottom-Right Floating Contact & Action Hub per TDD Module 027 */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {/* Expanded Shortcut Menu */}
        {hubOpen && (
          <div
            role="menu"
            aria-label="Contact options"
            className="mb-3 w-64 bg-white rounded-2xl shadow-2xl border border-abwa-border p-3 space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-200"
          >
            <div className="px-3 py-1.5 border-b border-slate-100">
              <span className="font-kaushan text-abwa-gold text-base tracking-wide block">
                Get in touch
              </span>
              <p className="text-xs text-abwa-muted">We’d love to hear from you.</p>
            </div>

            <a
              href={siteConfig.contact.phoneHref}
              role="menuitem"
              onClick={() => setHubOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-abwa-pale text-abwa-ink transition-colors text-xs font-semibold"
            >
              <div className="w-8 h-8 rounded-lg bg-abwa-navy/10 text-abwa-navy flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-abwa-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-abwa-navy truncate">Call Direct</div>
                <div className="text-[11px] text-abwa-muted truncate">{siteConfig.contact.phone}</div>
              </div>
            </a>

            <Link
              href="/contact"
              role="menuitem"
              onClick={() => setHubOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-abwa-pale text-abwa-ink transition-colors text-xs font-semibold"
            >
              <div className="w-8 h-8 rounded-lg bg-abwa-gold/15 text-abwa-gold flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-abwa-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-abwa-navy truncate">Send a Message</div>
                <div className="text-[11px] text-abwa-muted truncate">Use our contact form</div>
              </div>
            </Link>

            <Link
              href="/get-involved"
              role="menuitem"
              onClick={() => setHubOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-abwa-pale text-abwa-ink transition-colors text-xs font-semibold"
            >
              <div className="w-8 h-8 rounded-lg bg-abwa-blue/15 text-abwa-blue flex items-center justify-center flex-shrink-0">
                <Heart className="w-4 h-4 text-abwa-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-abwa-navy truncate">Support Our Work</div>
                <div className="text-[11px] text-abwa-muted truncate">Explore ways to help</div>
              </div>
            </Link>
          </div>
        )}

        {/* Main Floating Trigger Button */}
        <button
          type="button"
          onClick={() => setHubOpen(!hubOpen)}
          aria-expanded={hubOpen}
          aria-label={hubOpen ? "Close contact options" : "Open contact options"}
          className="flex items-center justify-center gap-2.5 px-4 py-3 min-h-[44px] min-w-[44px] rounded-full bg-abwa-navy hover:bg-[#0E233D] text-white shadow-xl transition-all duration-200 border-2 border-white/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-gold"
        >
          {hubOpen ? (
            <>
              <X className="w-5 h-5 text-white" />
              <span className="text-xs font-bold tracking-wide">Close</span>
            </>
          ) : (
            <>
              <MessageSquare className="w-5 h-5 text-abwa-gold" />
              <span className="text-xs font-bold tracking-wide hidden sm:inline">Get in touch</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
