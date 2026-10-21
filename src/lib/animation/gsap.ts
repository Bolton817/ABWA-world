import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Safely register ScrollTrigger only in client-side runtime
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Global motion defaults per TDD Module 100
  gsap.defaults({
    duration: 0.6,
    ease: "power2.out",
  });
}

/**
 * Returns true if the user's OS or browser has requested reduced motion.
 */
export function isReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger };
