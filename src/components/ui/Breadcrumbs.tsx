import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  light?: boolean;
}

export function Breadcrumbs({ items, className = "", light = false }: BreadcrumbsProps) {
  const homeItem: BreadcrumbItem = { label: "Home", href: "/" };
  const allItems = [homeItem, ...items];

  const textDefault = light ? "text-slate-300 hover:text-white" : "text-abwa-muted hover:text-abwa-ink";
  const textCurrent = light ? "text-abwa-gold font-medium" : "text-abwa-navy font-semibold";
  const separatorColor = light ? "text-slate-400" : "text-slate-400";

  return (
    <nav aria-label="Breadcrumb" className={`py-2 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className={`w-3.5 h-3.5 ${separatorColor} flex-shrink-0`} aria-hidden="true" />
              )}
              {isLast || !item.href ? (
                <span className={textCurrent} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={`transition-colors ${textDefault}`}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
