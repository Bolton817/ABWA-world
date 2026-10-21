import { BlogPost, FAQItem } from "@/types";

export const SITE_URL = "https://abwaworld.org";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Generates Schema.org/NGO for Action for Better World Association
 * Strict compliance with TDD Module 091: confirmed facts only
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": ORGANIZATION_ID,
    name: "Action for Better World Association",
    alternateName: ["ABWA", "ABWA World"],
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/logo.svg`,
    description:
      "A Nairobi-based community organisation working with women, young people and children on skills, farming, creativity and the environment.",
    foundingDate: "2015",
    telephone: "+254 720 021 001",
    email: "contact@abwaworld.org",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
      postOfficeBoxNumber: "1204-00515 Buruburu",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Nairobi County",
      },
      {
        "@type": "AdministrativeArea",
        name: "Machakos County",
      },
      {
        "@type": "AdministrativeArea",
        name: "Makueni County",
      },
      {
        "@type": "Country",
        name: "Kenya",
      },
    ],
    knowsAbout: [
      "Sustainable Agriculture",
      "Youth Empowerment",
      "Environmental Conservation",
      "Community Development",
    ],
  };
}

/**
 * Generates Schema.org/WebSite with internal SearchAction
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: "ABWA World",
    description: "Community Action in Nairobi, Kenya",
    inLanguage: "en-GB",
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generates Schema.org/BreadcrumbList matching breadcrumbs on the page
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Generates Schema.org/BlogPosting for published essays
 */
export function getBlogPostingSchema(post: BlogPost) {
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.heroImage.startsWith("http")
    ? post.heroImage
    : `${SITE_URL}${post.heroImage.startsWith("/") ? "" : "/"}${post.heroImage}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.summary,
    image: imageUrl,
    datePublished: post.publishedDate,
    wordCount: post.wordCount,
    inLanguage: "en-GB",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    author: {
      "@type": "Organization",
      name: post.author || "ABWA team",
      url: SITE_URL,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };
}

/**
 * Generates Schema.org/FAQPage embedding verified questions and answers
 */
export function getFAQPageSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
