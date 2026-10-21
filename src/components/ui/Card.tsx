import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  badge?: string;
  badgeVariant?: "default" | "gold" | "green";
  href?: string;
  ctaLabel?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Card({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = "",
  badge,
  badgeVariant = "default",
  href,
  ctaLabel,
  className,
  children,
}: CardProps) {
  const badgeStyles = {
    default: "bg-abwa-pale text-abwa-navy border border-abwa-border",
    gold: "bg-amber-50 text-abwa-gold border border-amber-200",
    green: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };

  const content = (
    <div
      className={twMerge(
        "group h-full flex flex-col rounded-xl overflow-hidden border border-abwa-border bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-abwa-blue/50",
        href && "cursor-pointer",
        className
      )}
    >
      {imageSrc && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-abwa-navy/5">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          {badge && (
            <div className="absolute top-3 left-3">
              <span
                className={twMerge(
                  "px-2.5 py-1 text-xs font-semibold rounded-full shadow-sm backdrop-blur-sm",
                  badgeStyles[badgeVariant]
                )}
              >
                {badge}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {!imageSrc && badge && (
            <span
              className={twMerge(
                "inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full mb-1",
                badgeStyles[badgeVariant]
              )}
            >
              {badge}
            </span>
          )}
          {subtitle && (
            <p className="text-xs font-medium text-abwa-gold uppercase tracking-wider">
              {subtitle}
            </p>
          )}
          <h3 className="text-xl font-bold text-abwa-navy group-hover:text-abwa-blue transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-abwa-muted leading-relaxed line-clamp-3">
              {description}
            </p>
          )}
          {children}
        </div>

        {ctaLabel && (
          <div className="pt-2 flex items-center gap-1.5 text-sm font-semibold text-abwa-blue group-hover:text-abwa-blue-hover transition-colors">
            <span>{ctaLabel}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue rounded-xl">
        {content}
      </Link>
    );
  }

  return content;
}
