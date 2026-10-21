export type ProgrammeStatus = "Active" | "Planned" | "Completed";

export interface ProgrammeActivity {
  title: string;
  items: string[];
}

export interface Programme {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  location: string;
  status: ProgrammeStatus;
  heroImage: string;
  heroImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  context: string[];
  whatHappens: ProgrammeActivity[];
  aims: string[];
  safeguardingNote?: {
    title: string;
    body: string;
  };
  contactTopic: string;
  ctaText: string;
  secondaryCta?: {
    label: string;
    href: string;
  };
  relatedSlug?: string;
  relatedPostSlug?: string;
}

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  listItems?: string[];
  callout?: {
    title?: string;
    text: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: "Agriculture" | "Youth" | "Volunteering" | "Community";
  author: string;
  publishedDate: string;
  readTime: string;
  wordCount: number;
  heroImage: string;
  heroImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  sections: BlogSection[];
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export interface CommunityStory {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  programmeTag: string;
  location: string;
  publishedDate: string;
  heroImage: string;
  heroImageAlt: string;
  consentVerified: boolean;
  content: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface NavChildItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: readonly NavChildItem[];
}

export interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "gold";
  accessibleName?: string;
}

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phone?: string;
  country?: string;
  interestArea: string;
  availability?: string;
  message: string;
  consent: boolean;
  honeypot?: string;
}

export interface PartnerFormData {
  organisation: string;
  contactName: string;
  email: string;
  interestArea: string;
  message: string;
  consent: boolean;
  honeypot?: string;
}

export interface EnquiryResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
  consent: boolean;
  honeypot?: string;
}

export interface SearchableItem {
  title: string;
  url: string;
  category: "Programme" | "Article" | "Story" | "Page" | "FAQ";
  snippet: string;
  keywords?: string[];
}


