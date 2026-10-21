import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";
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
}

export function SectionCTA({
  title,
  description,
  primaryCta,
  secondaryCta,
  surface = "navy",
  className,
}: SectionCTAProps) {
  const isNavy = surface === "navy";

  const surfaceStyles = {
    navy: "bg-abwa-navy text-white",
    pale: "bg-abwa-pale text-abwa-ink border-t border-abwa-border",
    white: "bg-white text-abwa-ink border-t border-abwa-border",
  };

  return (
    <section className={twMerge("py-16 sm:py-20", surfaceStyles[surface], className)}>
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2
            className={twMerge(
              "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight",
              isNavy ? "text-white" : "text-abwa-navy"
            )}
          >
            {title}
          </h2>
          <p
            className={twMerge(
              "text-base sm:text-lg leading-relaxed max-w-2xl mx-auto",
              isNavy ? "text-slate-200" : "text-abwa-muted"
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
