"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button, ButtonProps } from "@/components/ui/Button";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { twMerge } from "tailwind-merge";
import { useGSAP, gsap, isReducedMotion } from "@/lib/animation/gsap";

export interface HeroCTA {
  label: string;
  href: string;
  variant?: ButtonProps["variant"];
}

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  eyebrow?: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryCta?: HeroCTA;
  secondaryCta?: HeroCTA;
  breadcrumbs?: BreadcrumbItem[];
  textOnly?: boolean;
  className?: string;
  overlayClassName?: string;
}

export function PageHero({
  title,
  subtitle,
  description,
  eyebrow,
  imageSrc,
  imageAlt = "",
  primaryCta,
  secondaryCta,
  breadcrumbs,
  textOnly = false,
  className,
  overlayClassName,
}: PageHeroProps) {
  const headerRef = useRef<HTMLElement>(null);
  const bgWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isReducedMotion() || !headerRef.current) return;

      // 1. Entrance timeline staggering items on mount per Animation 1
      const animItems = contentRef.current?.querySelectorAll(".hero-anim-item");
      if (animItems && animItems.length > 0) {
        gsap.from(animItems, {
          y: 24,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        });
      }

      // 2. Parallax Behavior on desktop (min-width: 1024px)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        if (bgWrapperRef.current && headerRef.current) {
          gsap.to(bgWrapperRef.current, {
            yPercent: 18,
            ease: "none",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });

      return () => mm.revert();
    },
    { scope: headerRef }
  );

  // Text-first header for Legal pages (Privacy Policy & Terms) without photographic background
  if (textOnly || !imageSrc) {
    return (
      <header
        ref={headerRef}
        className={twMerge(
          "bg-slate-950 text-white pt-12 pb-14 sm:pt-16 sm:pb-20 border-b border-white/10",
          className
        )}
      >
        <Container>
          <div ref={contentRef} className="max-w-3xl space-y-4">
            {breadcrumbs && (
              <div className="hero-anim-item">
                <Breadcrumbs items={breadcrumbs} light className="mb-2" />
              </div>
            )}
            {eyebrow && (
              <div className="hero-anim-item">
                <span className="font-kaushan text-abwa-gold text-lg sm:text-xl md:text-2xl tracking-wide block">
                  {eyebrow}
                </span>
              </div>
            )}
            <h1 className="hero-anim-item text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="hero-anim-item text-lg sm:text-xl text-slate-200 font-medium">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="hero-anim-item text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
          </div>
        </Container>
      </header>
    );
  }

  // Standard public content hero with real local image, dark overlay and high contrast
  return (
    <header
      ref={headerRef}
      className={twMerge(
        "relative min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center bg-slate-950 text-white overflow-hidden",
        className
      )}
    >
      {/* Background Image with desktop ScrollTrigger parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          ref={bgWrapperRef}
          className="relative w-full h-full will-change-transform scale-[1.12]"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* Black contrast overlay with reduced intensity */}
        <div
          className={twMerge(
            "absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35 z-10",
            overlayClassName
          )}
        />
      </div>

      {/* Content */}
      <Container className="relative z-20 py-16 sm:py-20 lg:py-24">
        <div ref={contentRef} className="max-w-3xl space-y-4 sm:space-y-5">
          {breadcrumbs && (
            <div className="hero-anim-item">
              <Breadcrumbs items={breadcrumbs} light className="mb-1" />
            </div>
          )}

          {eyebrow && (
            <div className="hero-anim-item">
              <span className="font-kaushan text-abwa-gold text-lg sm:text-xl md:text-2xl tracking-wide block">
                {eyebrow}
              </span>
            </div>
          )}

          <h1 className="hero-anim-item text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="hero-anim-item text-lg sm:text-xl text-slate-200 font-medium">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="hero-anim-item text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="hero-anim-item pt-3 flex flex-wrap items-center gap-4">
              {primaryCta && (
                <Button
                  href={primaryCta.href}
                  variant={primaryCta.variant || "blue"}
                  size="lg"
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant={secondaryCta.variant || "outline-white"}
                  size="lg"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
