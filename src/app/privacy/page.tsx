import { Metadata } from "next";
import { privacyPolicy } from "@/content/legal";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: privacyPolicy.metaTitle,
  description: privacyPolicy.metaDescription,
  openGraph: {
    title: privacyPolicy.metaTitle,
    description: privacyPolicy.metaDescription,
    url: "https://abwaworld.org/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return <LegalPageLayout document={privacyPolicy} />;
}
