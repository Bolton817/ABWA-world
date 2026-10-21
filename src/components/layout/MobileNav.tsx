"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { X, ChevronDown, Phone, MapPin, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Close drawer when route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Handle Escape key and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-abwa-navy/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-abwa-border">
          <Link href="/" onClick={onClose} className="flex items-center">
            <Image
              src="/images/brand/logo.svg"
              alt={siteConfig.name}
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-md text-abwa-ink hover:text-abwa-blue hover:bg-abwa-pale transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
            aria-label="Close main menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-abwa-border bg-slate-50">
          <form action="/search" method="GET" onSubmit={onClose}>
            <div className="relative">
              <input
                type="search"
                name="q"
                placeholder="Search ABWA World..."
                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-abwa-border bg-white text-abwa-ink placeholder-abwa-muted focus:outline-none focus:border-abwa-blue focus:ring-1 focus:ring-abwa-blue"
              />
              <Search className="w-4 h-4 text-abwa-muted absolute left-3 top-2.5" />
            </div>
          </form>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {siteConfig.nav.main.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isSubmenuOpen = openSubmenu === item.label;
            const isActive = pathname === item.href;

            if (!hasChildren) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-abwa-pale text-abwa-blue"
                      : "text-abwa-navy hover:bg-slate-50 hover:text-abwa-blue"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label} className="border-b border-slate-100 last:border-b-0">
                <button
                  type="button"
                  onClick={() => toggleSubmenu(item.label)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold text-abwa-navy hover:bg-slate-50 transition-colors"
                  aria-expanded={isSubmenuOpen}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-abwa-muted transition-transform duration-200 ${
                      isSubmenuOpen ? "rotate-180 text-abwa-blue" : ""
                    }`}
                  />
                </button>

                {isSubmenuOpen && (
                  <div className="pl-4 pr-2 pb-2 space-y-1 bg-slate-50/70 rounded-lg mb-2">
                    {item.children?.map((child) => {
                      const isChildActive = pathname === child.href;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            isChildActive
                              ? "bg-white text-abwa-blue font-semibold shadow-xs"
                              : "text-abwa-ink hover:text-abwa-blue hover:bg-white"
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
            );
          })}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-abwa-border bg-slate-50 space-y-3">
          <Button
            href="/get-involved"
            variant="blue"
            size="md"
            className="w-full justify-center"
            onClick={onClose}
          >
            <span>Support Our Work</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center justify-center gap-2 p-2.5 rounded-lg text-xs font-semibold text-abwa-navy hover:bg-abwa-pale transition-colors border border-abwa-border"
          >
            <Phone className="w-3.5 h-3.5 text-abwa-gold" />
            <span>{siteConfig.contact.phone}</span>
          </a>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-abwa-muted">
            <MapPin className="w-3 h-3 text-abwa-gold" />
            <span>{siteConfig.contact.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
