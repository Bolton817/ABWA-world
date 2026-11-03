import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { twMerge } from "tailwind-merge";

export interface CTAAction {
  label: string;
  href: string;
}

export interface SectionCTAProps {
  title: string;
  description: string;
  primaryCta: CTAAction;
  secondaryCta?: CTAAction;
  surface?: "navy" | "pale" | "white";
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function SectionCTA({
  title,
  description,
  primaryCta,
  secondaryCta,
  surface = "navy",
  className,
  imageSrc,
  imageAlt,
}: SectionCTAProps) {
  const isNavy = surface === "navy" || Boolean(imageSrc);

  const surfaceStyles = {
    navy: "bg-abwa-navy text-white",
    pale: "bg-abwa-pale text-abwa-ink border-t border-abwa-border",
    white: "bg-white text-abwa-ink border-t border-abwa-border",
  };

  return (
    <section
      className={twMerge(
        "relative py-20 sm:py-28 overflow-hidden",
        surfaceStyles[surface],
        className
      )}
    >
      {/* Background Image & Clear, Reduced-Intensity Dark Overlay */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={imageAlt || ""}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle translucent black overlay so image is vividly visible while text remains crisp */}
          <div className="absolute inset-0 bg-black/45 bg-gradient-to-t from-black/70 via-black/40 to-black/55" />
        </div>
      )}

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2
            className={twMerge(
              "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight",
              isNavy ? "text-white drop-shadow-md" : "text-abwa-navy"
            )}
          >
            {title}
          </h2>
          <p
            className={twMerge(
              "text-base sm:text-lg leading-relaxed max-w-2xl mx-auto",
              isNavy ? "text-white/95 drop-shadow-sm font-medium" : "text-abwa-muted"
            )}
          >
            {description}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button
              href={primaryCta.href}
              variant={isNavy ? "blue" : "primary"}
              size="lg"
            >
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant={isNavy ? "outline-white" : "secondary"}
                size="lg"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
