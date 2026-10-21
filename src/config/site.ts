export const siteConfig = {
  name: "ABWA World",
  formalName: "Action for Better World Association",
  tagline: "Transforming Lives Through Action",
  description:
    "Action for Better World Association is a Nairobi-based community organisation working with women, young people and children on skills, farming, creativity and the environment.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.abwaworld.org",
  foundingYear: 2015,
  contact: {
    location: "Nairobi, Kenya",
    phone: "+254 720 021 001",
    phoneHref: "tel:+254720021001",
    postalBox: "P.O. Box 1204-00515 Buruburu",
    email: undefined as string | undefined, // Verified: add only once ABWA confirms
  },
  features: {
    showPostalBox: process.env.NEXT_PUBLIC_SHOW_POSTAL_BOX === "true",
    enableDonationPayment: process.env.NEXT_PUBLIC_ENABLE_DONATION_PAYMENT === "true",
  },
  nav: {
    main: [
      { label: "About", href: "/about" },
      {
        label: "Programmes",
        href: "/programs",
        children: [
          { label: "All Programmes", href: "/programs" },
          { label: "Youth Empowerment and Skills", href: "/programs/youth-empowerment" },
          {
            label: "Women's Empowerment & Sustainable Agriculture",
            href: "/programs/womens-empowerment-sustainable-agriculture",
          },
          { label: "Umisiiyu Women Group", href: "/programs/umisiiyu-women-group" },
          { label: "Environmental Conservation", href: "/programs/environmental-conservation" },
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
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
