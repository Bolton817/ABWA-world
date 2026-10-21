import { Metadata } from "next";
import { termsAndConditions } from "@/content/legal";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: termsAndConditions.metaTitle,
  description: termsAndConditions.metaDescription,
  openGraph: {
    title: termsAndConditions.metaTitle,
    description: termsAndConditions.metaDescription,
    url: "https://abwaworld.org/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return <LegalPageLayout document={termsAndConditions} />;
}
