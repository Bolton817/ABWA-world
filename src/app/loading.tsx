import { BrandSpinner } from "@/components/ui/BrandSpinner";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/95 backdrop-blur-sm pointer-events-none transition-opacity duration-300"
      aria-live="polite"
    >
      <BrandSpinner size="lg" />
    </div>
  );
}
