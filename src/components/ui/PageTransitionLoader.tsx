"use client";

import { useEffect, useState, useRef, useCallback, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { BrandSpinner } from "./BrandSpinner";

function PageTransitionLoaderContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const minTimerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const currentUrlRef = useRef<string>("");

  const stopLoading = useCallback(() => {
    const elapsed = Date.now() - startTimeRef.current;
    const minDisplayTime = 300; // minimum duration in ms for a smooth visual experience
    const remainingTime = Math.max(0, minDisplayTime - elapsed);

    minTimerRef.current = setTimeout(() => {
      setIsLoading(false);
      // Wait for fade-out transition to finish before unmounting from DOM
      setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }, remainingTime);
  }, []);

  const startLoading = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (minTimerRef.current) clearTimeout(minTimerRef.current);

    startTimeRef.current = Date.now();
    setShouldRender(true);
    // Microtask to allow DOM render before triggering opacity transition
    requestAnimationFrame(() => {
      setIsLoading(true);
    });

    // Safety timeout: auto dismiss after 4 seconds to never trap the user
    timeoutRef.current = setTimeout(() => {
      stopLoading();
    }, 4000);
  }, [stopLoading]);

  // When pathname or searchParams change, route transition has completed
  useEffect(() => {
    const fullUrl = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`;
    if (currentUrlRef.current && currentUrlRef.current !== fullUrl) {
      stopLoading();
    }
    currentUrlRef.current = fullUrl;
  }, [pathname, searchParams, stopLoading]);

  // Intercept click events on internal navigation links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Ignore modified clicks (new tab, etc.) or non-left clicks
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore anchor jumps on same page, protocols, downloads, or external links
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      // Check origin
      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;

        // Ignore if clicking link to the current exact page + hash
        const isCurrentPage =
          url.pathname === window.location.pathname &&
          url.search === window.location.search;

        if (isCurrentPage) {
          return;
        }

        // Internal navigation target is different; start the loader
        startLoading();
      } catch {
        // invalid URL string, skip
      }
    };

    // Listen to popstate (browser back/forward button)
    const handlePopState = () => {
      startLoading();
    };

    document.addEventListener("click", handleClick, { capture: true });
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      window.removeEventListener("popstate", handlePopState);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (minTimerRef.current) clearTimeout(minTimerRef.current);
    };
  }, [startLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-white/95 backdrop-blur-md transition-opacity duration-300 ease-out ${
        isLoading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-live="assertive"
      role="status"
    >
      <BrandSpinner size="lg" />
    </div>
  );
}

export function PageTransitionLoader() {
  return (
    <Suspense fallback={null}>
      <PageTransitionLoaderContent />
    </Suspense>
  );
}
