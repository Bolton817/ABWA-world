import Image from "next/image";

interface BrandSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export function BrandSpinner({
  className = "",
  size = "md",
  showTagline = true,
}: BrandSpinnerProps) {
  const spinnerDimensions = {
    sm: "w-11 h-11",
    md: "w-14 h-14",
    lg: "w-16 h-16 sm:w-[72px] sm:h-[72px]",
  }[size];

  const logoWidth = {
    sm: "w-36",
    md: "w-48 sm:w-56",
    lg: "w-56 sm:w-64",
  }[size];

  return (
    <div
      className={`flex flex-col items-center justify-center gap-6 select-none ${className}`}
      role="status"
      aria-label="Loading page content"
    >
      {/* ABWA Logo above the spinner */}
      <div className={`relative ${logoWidth} h-auto transition-transform duration-500`}>
        <Image
          src="/images/brand/abwa-logo1.png"
          alt="ABWA Logo"
          width={1750}
          height={608}
          priority
          className="w-full h-auto object-contain animate-pulse-subtle drop-shadow-sm"
        />
      </div>

      {/* Balanced Multi Ring Orbital Spinner */}
      <div className={`relative ${spinnerDimensions} flex items-center justify-center`}>
        {/* Outer Ring */}
        <div
          className="absolute inset-0 rounded-full border-[3px] sm:border-[3.5px] border-abwa-blue/20 border-t-abwa-blue border-r-abwa-blue/70 animate-spin"
          style={{ animationDuration: "1.1s" }}
        />
        {/* Inner Counter Rotating Ring */}
        <div
          className="absolute inset-2 sm:inset-2.5 rounded-full border-[2.5px] sm:border-[3px] border-abwa-gold/25 border-b-abwa-gold border-l-abwa-gold/75 animate-spin-reverse"
          style={{ animationDuration: "1.3s" }}
        />
        {/* Center Golden Core */}
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-abwa-gold shadow-[0_0_10px_rgba(183,144,69,0.75)] animate-pulse" />
      </div>

      {/* Slogan */}
      {showTagline && (
        <span className="font-kaushan text-abwa-navy/80 text-sm sm:text-base tracking-wide transition-opacity duration-300">
          Action for Better World
        </span>
      )}
    </div>
  );
}
