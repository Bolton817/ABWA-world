import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  surface?: "white" | "pale" | "navy";
  className?: string;
  children: React.ReactNode;
}

export function Section({ surface = "white", className, children, ...props }: SectionProps) {
  const surfaceStyles = {
    white: "bg-white text-abwa-ink",
    pale: "bg-abwa-pale text-abwa-ink",
    navy: "bg-abwa-navy text-white",
  };

  return (
    <section
      className={twMerge("py-12 sm:py-16 lg:py-20", surfaceStyles[surface], className)}
      {...props}
    >
      {children}
    </section>
  );
}
