"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { Phone, MapPin, Search, ChevronDown, Menu, Heart } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
        {/* Tier 1: Utility Bar (Desktop only, hides smoothly on scroll) */}
        <div
          className={`bg-abwa-navy text-white text-xs border-b border-white/10 transition-all duration-300 overflow-hidden ${
            isScrolled ? "h-0 opacity-0 pointer-events-none" : "h-9 opacity-100 hidden md:block"
          }`}
        >
          <Container>
            <div className="h-9 flex items-center justify-between">
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
          </Container>
        </div>

        {/* Tier 2: Main Navigation Bar */}
        <div
          className={`w-full bg-white/95 backdrop-blur-md border-b border-abwa-border transition-all duration-300 ${
            isScrolled ? "shadow-md py-2.5" : "py-3.5 sm:py-4"
          }`}
        >
          <Container>
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <Link href="/" className="flex items-center flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue rounded">
                <Image
                  src="/images/brand/logo.svg"
                  alt={`${siteConfig.name} - Home`}
                  width={210}
                  height={52}
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
                        <div className="absolute top-full left-0 w-64 pt-2 z-50">
                          <div className="bg-white rounded-xl shadow-xl border border-abwa-border p-2 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-200">
                            {item.children?.map((child) => {
                              const isChildActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
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
                  size="sm"
                  className="hidden sm:inline-flex"
                >
                  <Heart className="w-3.5 h-3.5 text-white/90" />
                  <span>Support Our Work</span>
                </Button>

                {/* Mobile Menu Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="lg:hidden w-11 h-11 rounded-lg text-abwa-navy hover:bg-abwa-pale transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label="Open main menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </Container>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
