export type ProgrammeStatus = "Active" | "Planned" | "Completed";

export interface Programme {
  slug: string;
  title: string;
  summary: string;
  location: string;
  status: ProgrammeStatus;
  heroImage: string;
  heroImageAlt: string;
  subtitle: string;
  description: string;
  context: string[];
  whatHappens: {
    title: string;
    items: string[];
  }[];
  aims: string[];
  relatedSlug?: string;
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
