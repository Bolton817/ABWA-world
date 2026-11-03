"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { X, ChevronDown, Phone, MapPin, Search, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useGSAP, gsap, isReducedMotion } from "@/lib/animation/gsap";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const isClosingRef = useRef(false);
  const prevPathnameRef = useRef(pathname);

  // Trigger smooth exit animation
  const triggerExit = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;

    if (isReducedMotion() || !drawerRef.current || !backdropRef.current) {
      setShouldRender(false);
      isClosingRef.current = false;
      onClose();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setShouldRender(false);
        isClosingRef.current = false;
        onClose();
      },
    });

    tl.to(drawerRef.current, {
      x: "100%",
      scale: 0.96,
      opacity: 0.2,
      duration: 0.28,
      ease: "power2.in",
    }).to(
      backdropRef.current,
      {
        opacity: 0,
        duration: 0.22,
        ease: "power2.in",
      },
      "-=0.15"
    );
  }, [onClose]);

  // Sync state when isOpen prop changes
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      isClosingRef.current = false;
    } else if (shouldRender && !isClosingRef.current) {
      triggerExit();
    }
  }, [isOpen, shouldRender, triggerExit]);

  // Close drawer when pathname changes
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      if (shouldRender) {
        triggerExit();
      }
    }
  }, [pathname, shouldRender, triggerExit]);

  // Handle Escape key and body scroll lock
  useEffect(() => {
    if (!shouldRender) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        triggerExit();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [shouldRender, triggerExit]);

  // Premium GSAP entrance animation sequence
  useGSAP(
    () => {
      if (!shouldRender || !drawerRef.current || !backdropRef.current) return;
      if (isReducedMotion()) return;

      const tl = gsap.timeline();

      // 1. Silky frosted glass backdrop fade
      tl.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.32, ease: "power2.out" }
      );

      // 2. High-end drawer pop and sweep
      tl.fromTo(
        drawerRef.current,
        {
          x: "100%",
          scale: 0.96,
          opacity: 0,
        },
        {
          x: "0%",
          scale: 1,
          opacity: 1,
          duration: 0.42,
          ease: "power3.out",
        },
        "-=0.22"
      );

      // 3. Header and search box glide in
      const headerEl = drawerRef.current.querySelector(".mobile-nav-header");
      const searchEl = drawerRef.current.querySelector(".mobile-nav-search");
      if (headerEl && searchEl) {
        tl.fromTo(
          [headerEl, searchEl],
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.28, stagger: 0.05, ease: "power2.out" },
          "-=0.24"
        );
      }

      // 4. Staggered cascade for navigation items
      const navItems = drawerRef.current.querySelectorAll(".mobile-nav-item");
      if (navItems.length > 0) {
        tl.fromTo(
          navItems,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.32, stagger: 0.035, ease: "power2.out" },
          "-=0.18"
        );
      }

      // 5. Drawer footer rise
      const footerEl = drawerRef.current.querySelector(".mobile-nav-footer");
      if (footerEl) {
        tl.fromTo(
          footerEl,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
          "-=0.15"
        );
      }
    },
    { dependencies: [shouldRender], scope: containerRef }
  );

  if (!shouldRender) return null;

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Frosted Luxury Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-abwa-navy/75 backdrop-blur-md transition-opacity cursor-pointer"
        onClick={triggerExit}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-[340px] sm:max-w-sm bg-white shadow-[-16px_0_48px_-8px_rgba(11,37,69,0.35)] flex flex-col z-50 border-l border-white/20 will-change-transform rounded-l-3xl overflow-hidden"
      >
        {/* Drawer Header */}
        <div className="mobile-nav-header flex items-center justify-between p-4 border-b border-slate-100 bg-white">
          <Link href="/" onClick={triggerExit} className="flex items-center group">
            <Image
              src="/images/brand/abwa-logo1.png"
              alt={siteConfig.name}
              width={160}
              height={56}
              className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>
          <button
            type="button"
            onClick={triggerExit}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-abwa-pale text-abwa-navy hover:text-abwa-blue transition-all duration-200 active:scale-90 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue group"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="mobile-nav-search px-4 py-3 border-b border-slate-100 bg-slate-50/70">
          <form action="/search" method="GET" onSubmit={triggerExit}>
            <div className="relative">
              <input
                type="search"
                name="q"
                aria-label="Search ABWA World"
                placeholder="Search programmes, stories..."
                className="w-full h-10 pl-9 pr-3 text-sm rounded-xl border border-abwa-border/80 bg-white text-abwa-ink placeholder-abwa-muted focus:outline-none focus:border-abwa-blue focus:ring-2 focus:ring-abwa-blue/20 transition-all shadow-2xs"
              />
              <Search className="w-4 h-4 text-abwa-muted absolute left-3 top-3 pointer-events-none" />
            </div>
          </form>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1 scrollbar-none">
          {siteConfig.nav.main.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isSubmenuOpen = openSubmenu === item.label;
            const isActive = pathname === item.href || (hasChildren && pathname.startsWith(item.href));

            if (!hasChildren) {
              return (
                <div key={item.href} className="mobile-nav-item">
                  <Link
                    href={item.href}
                    onClick={triggerExit}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all active:scale-[0.99] ${
                      isActive
                        ? "bg-abwa-pale text-abwa-blue font-bold shadow-2xs"
                        : "text-abwa-navy hover:bg-slate-50 hover:text-abwa-blue"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-abwa-gold" />
                    )}
                  </Link>
                </div>
              );
            }

            return (
              <div key={item.label} className="mobile-nav-item border-b border-slate-100/80 last:border-b-0 py-0.5">
                <button
                  type="button"
                  onClick={() => toggleSubmenu(item.label)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors active:scale-[0.99] ${
                    isActive
                      ? "text-abwa-blue bg-abwa-pale/50"
                      : "text-abwa-navy hover:bg-slate-50 hover:text-abwa-blue"
                  }`}
                  aria-expanded={isSubmenuOpen}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-abwa-gold" />
                    )}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-abwa-muted transition-transform duration-200 ${
                      isSubmenuOpen ? "rotate-180 text-abwa-blue" : ""
                    }`}
                  />
                </button>

                {/* Smooth Animated Accordion Grid */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isSubmenuOpen ? "grid-rows-[1fr] opacity-100 my-1" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-3 pr-2 py-1.5 space-y-0.5 bg-slate-50/90 rounded-xl border border-slate-100/90">
                      {item.children?.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={triggerExit}
                            className={`px-3 py-2 min-h-[40px] flex items-center justify-between rounded-lg text-sm font-medium transition-all ${
                              isChildActive
                                ? "bg-white text-abwa-blue font-bold shadow-xs border-l-2 border-abwa-gold pl-2.5"
                                : "text-abwa-ink hover:text-abwa-blue hover:bg-white/80"
                            }`}
                            aria-current={isChildActive ? "page" : undefined}
                          >
                            <span className="line-clamp-1">{child.label}</span>
                            {isChildActive && (
                              <ArrowRight className="w-3.5 h-3.5 text-abwa-gold" />
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Drawer Footer Actions */}
        <div className="mobile-nav-footer p-4 border-t border-slate-100 bg-slate-50/80 space-y-3">
          <Button
            href="/get-involved"
            variant="blue"
            size="md"
            className="w-full justify-center shadow-xs text-sm font-semibold h-11"
            onClick={triggerExit}
          >
            <Heart className="w-4 h-4 text-white/95 mr-1" />
            <span>Support Our Work</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={siteConfig.contact.phoneHref}
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl text-xs font-semibold text-abwa-navy hover:bg-white hover:text-abwa-blue transition-colors border border-slate-200 bg-white/80 shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-abwa-gold" />
              <span>Call Us</span>
            </a>
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl text-xs font-semibold text-emerald-800 hover:bg-white transition-colors border border-emerald-200 bg-emerald-50/70 shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-abwa-muted pt-0.5">
            <MapPin className="w-3 h-3 text-abwa-gold" />
            <span>{siteConfig.contact.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
