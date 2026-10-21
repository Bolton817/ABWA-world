import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        abwa: {
          navy: "#15345A",
          blue: {
            DEFAULT: "#1E63B8",
            hover: "#164E92",
            light: "#EAF2FA",
          },
          pale: "#EAF2FA",
          gold: {
            DEFAULT: "#B79045",
            hover: "#9C7733",
            light: "#F7F2E7",
          },
          ink: "#263445",
          muted: "#5E6B78",
          border: "#D1DFED",
        },
      },
      maxWidth: {
        container: "75rem", // 1200px
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mequin: ["var(--font-mequin)", "system-ui", "sans-serif"],
        impact: ["var(--font-impact)", "Impact", "sans-serif"],
        leeds: ["var(--font-leeds)", "serif"],
        kaushan: ["var(--font-kaushan)", "cursive"],
        ragnar: ["var(--font-ragnar)", "fantasy", "sans-serif"],
        anak: ["var(--font-anak)", "cursive", "sans-serif"],
        goldie: ["var(--font-goldie)", "cursive", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
