import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { SkipLink } from "@/components/ui/SkipLink";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ABWA World | Community Action in Nairobi, Kenya",
    template: "%s | ABWA World",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "ABWA World | Community Action in Nairobi, Kenya",
    description: siteConfig.description,
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
  return (
    <html lang="en-KE" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-abwa-ink font-sans antialiased">
        <SkipLink />
        <div className="flex-1 flex flex-col">
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
