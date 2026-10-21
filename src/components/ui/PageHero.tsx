import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button, ButtonProps } from "@/components/ui/Button";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
}: PageHeroProps) {
  // Text-first header for Legal pages (Privacy Policy & Terms) without photographic background
  if (textOnly || !imageSrc) {
    return (
      <header className={twMerge("bg-abwa-navy text-white pt-12 pb-14 sm:pt-16 sm:pb-20 border-b border-white/10", className)}>
        <Container>
          <div className="max-w-3xl space-y-4">
            {breadcrumbs && <Breadcrumbs items={breadcrumbs} light className="mb-2" />}
            {eyebrow && (
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-abwa-gold">
                {eyebrow}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg sm:text-xl text-slate-200 font-medium">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
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
    <header className={twMerge("relative min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center bg-abwa-navy text-white overflow-hidden", className)}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark contrast overlay per TDD Module 030 */}
        <div className="absolute inset-0 bg-gradient-to-r from-abwa-navy/95 via-abwa-navy/85 to-abwa-navy/70 z-10" />
      </div>

      {/* Content */}
      <Container className="relative z-20 py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} light className="mb-1" />}
          
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-abwa-gold border border-abwa-gold/30 backdrop-blur-sm">
              <span>{eyebrow}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg sm:text-xl text-slate-200 font-medium">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="pt-3 flex flex-wrap items-center gap-4">
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
