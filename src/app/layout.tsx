import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { SkipLink } from "@/components/ui/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { PageTransitionLoader } from "@/components/ui/PageTransitionLoader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fontMequin = localFont({
  src: "../assets/fonts/Mequin.otf",
  variable: "--font-mequin",
  display: "swap",
});

const fontImpact = localFont({
  src: "../assets/fonts/Impact Strike.otf",
  variable: "--font-impact",
  display: "swap",
});

const fontLeeds = localFont({
  src: "../assets/fonts/Leeds - Personal Use.otf",
  variable: "--font-leeds",
  display: "swap",
});

const fontKaushan = localFont({
  src: "../assets/fonts/KaushanScript-Regular.otf",
  variable: "--font-kaushan",
  display: "swap",
});

const fontRagnar = localFont({
  src: "../assets/fonts/RagnarGothic-Regular.otf",
  variable: "--font-ragnar",
  display: "swap",
});

const fontAnak = localFont({
  src: "../assets/fonts/Anak Bijak.otf",
  variable: "--font-anak",
  display: "swap",
});

const fontGoldie = localFont({
  src: "../assets/fonts/GoldieClassic-Regular.ttf",
  variable: "--font-goldie",
  display: "swap",
});

import { JsonLd } from "@/components/seo/JsonLd";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ABWA World | Community Action in Nairobi, Kenya",
    template: "%s | ABWA World",
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/images/brand/abwa-icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/brand/abwa-icon.png",
    apple: [
      { url: "/images/brand/abwa-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "ABWA World | Community Action in Nairobi, Kenya",
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/images/brand/abwa-logo1.png`,
        width: 1750,
        height: 608,
        alt: "ABWA World — Action for Better World Association",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABWA World | Community Action in Nairobi, Kenya",
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/brand/abwa-logo1.png`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = [
    inter.variable,
    fontMequin.variable,
    fontImpact.variable,
    fontLeeds.variable,
    fontKaushan.variable,
    fontRagnar.variable,
    fontAnak.variable,
    fontGoldie.variable,
  ].join(" ");

  return (
    <html lang="en-KE" className={fontVariables}>
      <head>
        <JsonLd data={[getOrganizationSchema(), getWebSiteSchema()]} />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-abwa-ink font-sans antialiased selection:bg-abwa-pale selection:text-abwa-navy">
        <PageTransitionLoader />
        <SkipLink />
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
