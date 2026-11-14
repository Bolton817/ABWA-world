import { NavItem } from "@/types";

export const siteConfig = {
  name: "ABWA World",
  formalName: "Action for Better World Association",
  tagline: "Transforming Lives Through Action",
  description:
    "Action for Better World Association is a Nairobi-based community organisation working with women, young people and children on skills, farming, creativity and the environment.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.abwaworld.org",
  foundingYear: 2015,
  contact: {
    location: "Buruburu, Nairobi, Kenya",
    phone: "+254 733 595 906",
    phoneHref: "tel:+254733595906",
    whatsapp: "+254 733 595 906",
    whatsappHref: "https://wa.me/254733595906?text=Hello%20ABWA%2C%20I%20would%20like%20to%20get%20in%20touch.",
    postalBox: "P.O. Box 1204-00515 Buruburu, Nairobi, Kenya",
    email: undefined as string | undefined, // Verified: add only once ABWA confirms
  },
  social: {
    facebook: "https://www.facebook.com/share/1FKHHtfuTz/",
    instagram: "https://www.instagram.com/abwakenya?obrf=MW80Zmw0b3lrbTdoNg==",
    tiktok: "https://www.tiktok.com/@abwaworld?_r=1&_t=ZS-9Amzl9y9W44",
    youtube: "https://youtube.com/@abwaworld-e6f9q?si=A9B1TUQjCfAhXTvk",
  },
  features: {
    showPostalBox: process.env.NEXT_PUBLIC_SHOW_POSTAL_BOX === "true",
    enableDonationPayment: process.env.NEXT_PUBLIC_ENABLE_DONATION_PAYMENT === "true",
  },
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      {
        label: "Programmes",
        href: "/programs",
        children: [
          { label: "All Programmes", href: "/programs" },
          { label: "Education & Child Development", href: "/programs/education-child-wellbeing" },
          { label: "Youth Empowerment & Skills", href: "/programs/youth-empowerment" },
          {
            label: "Women's Empowerment & Agriculture",
            href: "/programs/womens-empowerment-sustainable-agriculture",
          },
          {
            label: "Food Security & Sustainable Agriculture",
            href: "/programs/food-security-sustainable-agriculture",
          },
          { label: "Umisiiyu Women Group (Kibwezi)", href: "/programs/umisiiyu-women-group" },
          { label: "Health & Community Wellbeing", href: "/programs/health-community-wellbeing" },
          {
            label: "Environmental Conservation & Climate",
            href: "/programs/environmental-conservation",
          },
          {
            label: "Kasigau Wildlife Conservation",
            href: "/programs/kasigau-wildlife-conservation",
          },
          {
            label: "Poverty Reduction & Livelihoods",
            href: "/programs/poverty-reduction-livelihoods",
          },
          {
            label: "Water, Sanitation & Hygiene (WASH)",
            href: "/programs/water-sanitation-hygiene-wash",
          },
          {
            label: "Arts, Culture & Creative Development",
            href: "/programs/arts-culture-creative-development",
          },
          {
            label: "Community Development & Social Support",
            href: "/programs/community-development-social-support",
          },
        ],
      },
      {
        label: "Impact & Stories",
        href: "/impact",
        children: [
          { label: "Our Impact", href: "/impact" },
          { label: "Stories", href: "/stories" },
          { label: "Gallery", href: "/gallery" },
          { label: "Blog", href: "/blog" },
        ],
      },
      {
        label: "Get Involved",
        href: "/get-involved",
        children: [
          { label: "Ways to Take Part", href: "/get-involved" },
          { label: "Volunteer", href: "/volunteer" },
          { label: "Donate", href: "/donate" },
          { label: "Partner With Us", href: "/partner-with-us" },
          { label: "FAQ", href: "/faq" },
        ],
      },
      { label: "Contact", href: "/contact" },
    ] as readonly NavItem[],
  },
} as const;

export type SiteConfig = typeof siteConfig;
