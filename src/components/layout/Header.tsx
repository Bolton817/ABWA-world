"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { Phone, MapPin, Search, ChevronDown, Menu, Heart, ArrowRight } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleCloseMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Scroll listener for sticky header condensation per TDD Module 023
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Tier 1: Utility Bar (Desktop + Mobile, hides smoothly on scroll) */}
        <div
          className={`bg-abwa-navy text-white text-xs border-b border-white/10 transition-all duration-300 overflow-hidden ${
            isScrolled ? "h-0 opacity-0 pointer-events-none border-b-0" : "h-8 md:h-9 opacity-100"
          }`}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8">
            {/* Mobile View: Slogan Only */}
            <div className="md:hidden flex items-center justify-center h-8 text-center">
              <span className="text-abwa-gold font-medium tracking-wide text-xs sm:text-sm font-goldie">
                Transforming Lives Through Action
              </span>
            </div>

            {/* Desktop View: Contact, Location, Tagline & Search */}
            <div className="hidden md:flex h-9 items-center justify-between">
              {/* Contact & Location utilities */}
              <div className="flex items-center gap-6">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-abwa-gold" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
                <span className="text-white/20">•</span>
                <div className="inline-flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-abwa-gold" />
                  <span>{siteConfig.contact.location}</span>
                </div>
              </div>

              {/* Tagline & Search */}
              <div className="flex items-center gap-6">
                <span className="text-abwa-gold/90 font-medium tracking-wide hidden lg:inline font-goldie text-sm">
                  {siteConfig.tagline}
                </span>
                <form action="/search" method="GET" className="relative">
                  <input
                    type="search"
                    name="q"
                    placeholder="Search ABWA World"
                    className="w-44 pl-7 pr-2.5 py-1 text-xs rounded bg-white/10 text-white placeholder-slate-400 border border-white/15 focus:outline-none focus:bg-white/20 focus:border-abwa-gold"
                  />
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-1.5" />
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: Main Navigation Bar */}
        <div
          className={`w-full bg-white/95 backdrop-blur-md border-b border-abwa-border transition-all duration-300 ${
            isScrolled ? "shadow-md py-2.5" : "py-3.5 sm:py-4"
          }`}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <Link href="/" className="flex items-center flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue rounded">
                <Image
                  src="/images/brand/abwa-logo1.png"
                  alt={`${siteConfig.name} - Home`}
                  width={210}
                  height={73}
                  priority
                  className={`w-auto object-contain transition-all duration-300 ${
                    isScrolled ? "h-9 sm:h-10" : "h-11 sm:h-12"
                  }`}
                />
              </Link>

              {/* Desktop Nav Items */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                {siteConfig.nav.main.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isActive = pathname === item.href || (hasChildren && pathname.startsWith(item.href));

                  if (!hasChildren) {
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                          isActive
                            ? "text-abwa-blue bg-abwa-pale"
                            : "text-abwa-ink hover:text-abwa-blue hover:bg-slate-50"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className={`inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                          isActive
                            ? "text-abwa-blue bg-abwa-pale"
                            : "text-abwa-ink hover:text-abwa-blue hover:bg-slate-50"
                        }`}
                        aria-expanded={activeDropdown === item.label}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-abwa-muted transition-transform duration-200" />
                      </button>

                      {/* Dropdown Menu */}
                      {activeDropdown === item.label && (
                        <div
                          className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 ${
                            item.label === "Programmes"
                              ? "w-[560px] xl:w-[620px]"
                              : "w-64"
                          }`}
                        >
                          <div className="bg-white rounded-2xl shadow-xl border border-abwa-border overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
                            {item.label === "Programmes" ? (
                              <div>
                                {/* Header Link for All Programmes */}
                                <div className="px-4 py-3 bg-abwa-pale/70 border-b border-abwa-border flex items-center justify-between">
                                  <div>
                                    <span className="font-kaushan text-abwa-gold text-base tracking-wide block">
                                      Thematic Pillars &amp; Projects
                                    </span>
                                    <span className="text-xs font-bold text-abwa-navy">
                                      10 Focus Areas &amp; Community Partnerships
                                    </span>
                                  </div>
                                  <Link
                                    href="/programs"
                                    onClick={() => setActiveDropdown(null)}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-abwa-blue text-white text-xs font-semibold hover:bg-abwa-blue-hover transition-colors shadow-2xs"
                                  >
                                    <span>All Programmes</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>

                                {/* 2-Column Grid of 11 Programmes */}
                                <div className="grid grid-cols-2 gap-1 p-2.5">
                                  {item.children?.slice(1).map((child) => {
                                    const isChildActive = pathname === child.href;
                                    return (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className={`flex items-center px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                                          isChildActive
                                            ? "bg-abwa-pale text-abwa-blue"
                                            : "text-abwa-ink hover:bg-slate-50 hover:text-abwa-blue"
                                        }`}
                                        aria-current={isChildActive ? "page" : undefined}
                                      >
                                        <span className="line-clamp-1">{child.label}</span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            ) : (
                              <div className="p-2 space-y-0.5">
                                {item.children?.map((child) => {
                                  const isChildActive = pathname === child.href;
                                  return (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className={`block px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                                        isChildActive
                                          ? "bg-abwa-pale text-abwa-blue"
                                          : "text-abwa-ink hover:bg-slate-50 hover:text-abwa-blue"
                                      }`}
                                      aria-current={isChildActive ? "page" : undefined}
                                    >
                                      {child.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Action Button & Mobile Trigger */}
              <div className="flex items-center gap-3">
                <Button
                  href="/get-involved"
                  variant="blue"
                  size="md"
                  className="hidden sm:inline-flex h-11 px-5 text-sm font-semibold shadow-sm tracking-wide"
                >
                  <Heart className="w-4 h-4 text-white/95" />
                  <span>Support Our Work</span>
                </Button>

                {/* Mobile Menu Button with Tactile Feedback */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="lg:hidden w-11 h-11 rounded-xl text-abwa-navy hover:text-abwa-blue hover:bg-abwa-pale transition-all duration-200 active:scale-90 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue border border-transparent hover:border-abwa-border/50 group"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label="Open main menu"
                >
                  <Menu className="w-6 h-6 transition-transform duration-200 group-hover:scale-105 active:rotate-12" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={handleCloseMobileMenu} />
    </>
  );
}
