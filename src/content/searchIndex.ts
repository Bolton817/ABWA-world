import { SearchableItem } from "@/types";
import { programmesData } from "./programmes";
import { blogPostsData } from "./blog";
import { communityStoriesData } from "./stories";
import { faqData } from "./faq";

export const siteSearchIndex: SearchableItem[] = [
  // Core Navigation Pages
  {
    title: "About ABWA",
    url: "/about",
    category: "Page",
    snippet: "Our story since 2015, our constitutional purpose, focus areas and how we work with communities in Kenya.",
    keywords: ["history", "founded", "story", "purpose", "mission", "nairobi", "governance", "team"],
  },
  {
    title: "Our Programmes Directory",
    url: "/programs",
    category: "Page",
    snippet: "Explore community-led initiatives in Nairobi, Machakos, and Makueni counties.",
    keywords: ["projects", "initiatives", "work", "locations", "mathare", "kangundo", "kibwezi"],
  },
  {
    title: "Get Involved",
    url: "/get-involved",
    category: "Page",
    snippet: "Find your way in: volunteer, partner with us, give, or help share our story.",
    keywords: ["participate", "collaborate", "ways to help", "support"],
  },
  {
    title: "Volunteer With ABWA",
    url: "/volunteer",
    category: "Page",
    snippet: "Share your time and skills, and learn from local communities in Kenya. Honest expectations and enquiry form.",
    keywords: ["volunteering", "work camps", "skills", "teaching", "farming", "mathare", "application"],
  },
  {
    title: "Support Our Work",
    url: "/donate",
    category: "Page",
    snippet: "How giving works at ABWA, practical project costs, transparency commitments, and direct giving enquiries.",
    keywords: ["donate", "giving", "financial support", "contributions", "tools", "seeds"],
  },
  {
    title: "Partner With Us",
    url: "/partner-with-us",
    category: "Page",
    snippet: "Collaboration, grant funding, and joint programmes for organisations, schools, and funders.",
    keywords: ["institutions", "schools", "funding", "grants", "collaboration", "corporate"],
  },
  {
    title: "Frequently Asked Questions (FAQ)",
    url: "/faq",
    category: "Page",
    snippet: "Straight answers to common questions about who we are, where we work, costs, and safeguarding.",
    keywords: ["questions", "answers", "costs", "fees", "camps", "booking", "contact"],
  },
  {
    title: "Contact Us",
    url: "/contact",
    category: "Page",
    snippet: "Get in touch directly with our team in Nairobi via phone (+254 720 021 001) or online form.",
    keywords: ["phone", "telephone", "address", "buruburu", "location", "message", "enquiry"],
  },
  {
    title: "Community Stories",
    url: "/stories",
    category: "Page",
    snippet: "Real people and real places from ABWA's community projects in Kenya, shared with informed consent.",
    keywords: ["stories", "consent", "dignity", "people", "profiles"],
  },
  {
    title: "Our Impact",
    url: "/impact",
    category: "Page",
    snippet: "How ABWA thinks about change, what we can show honestly so far, and how we keep activities, outputs and outcomes distinct.",
    keywords: ["impact", "results", "evidence", "outcomes", "outputs", "reporting", "measurement"],
  },
  {
    title: "Photo Gallery",
    url: "/gallery",
    category: "Page",
    snippet: "Photographs from community projects and events across youth, farming, environment, and volunteering, shared with consent.",
    keywords: ["gallery", "photos", "images", "pictures", "lightbox", "events"],
  },
  {
    title: "Blog & Reflections",
    url: "/blog",
    category: "Page",
    snippet: "Practical reads on sustainable agriculture, youth empowerment, and ethical community volunteering.",
    keywords: ["articles", "essays", "farming", "youth", "volunteering"],
  },
  {
    title: "Privacy Policy",
    url: "/privacy",
    category: "Page",
    snippet: "How ABWA collects, uses and protects personal information shared through this website.",
    keywords: ["privacy", "data", "protection", "rights", "cookies", "consent", "takedown", "safeguarding"],
  },
  {
    title: "Terms and Conditions",
    url: "/terms",
    category: "Page",
    snippet: "The terms for using the ABWA World website, including how we treat enquiries, content and links.",
    keywords: ["terms", "conditions", "rules", "usage", "legal", "enquiries", "liability"],
  },

  // Dynamic Programmes
  ...programmesData.map((prog) => ({
    title: prog.title,
    url: `/programs/${prog.slug}`,
    category: "Programme" as const,
    snippet: prog.summary,
    keywords: [prog.location, prog.status, prog.category, ...(prog.aims || prog.intendedOutcomes || [])],
  })),

  // Dynamic Blog Articles
  ...blogPostsData.map((post) => ({
    title: post.title,
    url: `/blog/${post.slug}`,
    category: "Article" as const,
    snippet: post.summary,
    keywords: [post.category, post.author, post.readTime],
  })),

  // Community Stories
  ...communityStoriesData.map((story) => ({
    title: story.title,
    url: "/stories",
    category: "Story" as const,
    snippet: story.excerpt,
    keywords: [story.location, story.programmeTag],
  })),

  // Key FAQ Items
  ...faqData.map((faq) => ({
    title: faq.question,
    url: "/faq",
    category: "FAQ" as const,
    snippet: faq.answer,
    keywords: [faq.category || "General"],
  })),
];
