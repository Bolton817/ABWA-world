import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  dark = false,
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={twMerge(
        "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12",
        isCenter && "text-center md:flex-col md:items-center",
        className
      )}
    >
      <div className={twMerge("space-y-2.5", isCenter ? "max-w-2xl mx-auto" : "max-w-3xl")}>
        {eyebrow && (
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-abwa-gold">
            {eyebrow}
          </span>
        )}
        <h2
          className={twMerge(
            "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight",
            dark ? "text-white" : "text-abwa-navy"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={twMerge(
              "text-base sm:text-lg leading-relaxed",
              dark ? "text-slate-300" : "text-abwa-muted"
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && !isCenter && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}
