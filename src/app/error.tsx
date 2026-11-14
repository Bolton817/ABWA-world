"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AlertTriangle, RotateCcw, Home, Phone } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log sanitized error in development without leaking secrets to the UI
    if (process.env.NODE_ENV === "development") {
      console.error("ABWA Application Error caught by boundary:", error);
    }
  }, [error]);

  return (
    <div className="bg-[#FAF7EE] min-h-[80vh] flex items-center py-24 md:py-32">
      <Container>
        <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-8 md:p-14 border border-[#263445]/10 shadow-sm">
          {/* Visual Alert Badge */}
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-700 mx-auto flex items-center justify-center mb-6 border border-amber-200">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <h1 className="text-2xl md:text-4xl font-bold font-serif text-[#15345A] tracking-tight mb-4">
            Something went wrong on our side
          </h1>

          <p className="text-[#263445]/80 text-base md:text-lg mb-8 leading-relaxed font-sans">
            We&apos;re sorry about that. Please try again. If the problem continues, you can still reach us on{" "}
            <a
              href="tel:+254733595906"
              className="font-semibold text-[#15345A] hover:text-[#1E63B8] underline underline-offset-4"
            >
              +254 733 595 906
            </a>
            .
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => reset()}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#15345A] text-white hover:bg-[#1E63B8] transition-colors font-medium text-sm shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Try again
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-[#263445]/20 text-[#15345A] hover:bg-[#EAF2FA] transition-colors font-medium text-sm"
            >
              <Home className="w-4 h-4" />
              Go to the homepage
            </Link>

            <a
              href="tel:+254733595906"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FAF7EE] text-[#15345A] hover:bg-[#EAF2FA] border border-[#B79045]/40 transition-colors font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-[#B79045]" />
              Call +254 733 595 906
            </a>
          </div>

          {/* Confidentiality reminder */}
          <p className="mt-8 text-xs text-[#263445]/50">
            Reference digest: {error.digest || "abwa-client-error"}
          </p>
        </div>
      </Container>
    </div>
  );
}
