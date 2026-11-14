"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MessageSquare, X, Phone, Heart, Mail, ArrowUp } from "lucide-react";
import { socialChannels } from "@/components/ui/SocialIcons";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
            className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-abwa-border p-3 space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-200"
          >
            <div className="px-3 py-1.5 border-b border-slate-100">
              <span className="font-kaushan text-abwa-gold text-base tracking-wide block">
                Get in touch
              </span>
              <p className="text-xs text-abwa-muted">We would love to hear from you.</p>
            </div>

            {/* WhatsApp Direct Chat */}
            {siteConfig.contact.whatsappHref && (
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={() => setHubOpen(false)}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50 text-abwa-ink transition-colors text-xs font-semibold group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-4.5 h-4.5 fill-current" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-abwa-navy group-hover:text-emerald-700 transition-colors truncate">
                    Message on WhatsApp
                  </div>
                  <div className="text-[11px] text-abwa-muted truncate">
                    Chat directly with our team
                  </div>
                </div>
              </a>
            )}

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

            {/* Social Channels Quick Tray */}
            <div className="pt-2 mt-1 border-t border-slate-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-abwa-muted block px-1 mb-2">
                Follow ABWA
              </span>
              <div className="grid grid-cols-4 gap-1.5 px-1">
                {socialChannels.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.ariaLabel}
                      onClick={() => setHubOpen(false)}
                      className={`h-8 rounded-lg border border-slate-200/80 hover:border-slate-300 ${item.accentBg} flex items-center justify-center transition-all duration-150 hover:scale-105 shadow-2xs group`}
                    >
                      <Icon
                        className="w-3.5 h-3.5 group-hover:scale-110 transition-transform"
                        style={{ color: item.brandColor }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
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
