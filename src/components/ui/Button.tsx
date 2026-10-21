import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "blue" | "gold" | "secondary" | "outline" | "outline-white" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-abwa-blue disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    primary: "bg-abwa-navy hover:bg-[#0E233D] text-white shadow-sm active:scale-[0.98]",
    blue: "bg-abwa-blue hover:bg-abwa-blue-hover text-white shadow-sm active:scale-[0.98]",
    gold: "bg-abwa-gold hover:bg-abwa-gold-hover text-white shadow-sm active:scale-[0.98]",
    secondary: "bg-abwa-pale text-abwa-ink hover:bg-[#DCE9F6] border border-abwa-border active:scale-[0.98]",
    outline: "border-2 border-abwa-navy text-abwa-navy hover:bg-abwa-navy hover:text-white active:scale-[0.98]",
    "outline-white": "border-2 border-white text-white hover:bg-white hover:text-abwa-navy active:scale-[0.98]",
    ghost: "text-abwa-ink hover:bg-abwa-pale active:bg-abwa-border/50",
  };

  const combinedClasses = twMerge(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          aria-disabled={disabled || isLoading}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} aria-disabled={disabled || isLoading}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <>
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
