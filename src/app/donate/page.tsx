import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  PhoneCall,
  Sprout,
  Palette,
  Truck,
  Building,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Support ABWA's Work | Giving to ABWA World",
  description:
    "Learn how to support ABWA's community projects in Kenya, and how we will be open with you about where your support goes.",
  alternates: {
    canonical: "https://abwaworld.org/donate",
  },
  openGraph: {
    title: "Support ABWA's Work | Giving to ABWA World",
    description:
      "Learn how to support ABWA's community projects in Kenya, and how we will be open with you about where your support goes.",
    url: "https://abwaworld.org/donate",
    type: "website",
  },
};

const practicalCosts = [
  {
    title: "Tools, Seeds & Saplings",
    description: "Quality indigenous tree seedlings, farm implements, and seeds for women's kitchen gardens.",
    icon: Sprout,
  },
  {
    title: "Art & Learning Supplies",
    description: "Paints, brushes, music production equipment, and learning materials for youth in Mathare.",
    icon: Palette,
  },
  {
    title: "Project Transport",
    description: "Facilitating volunteer travel, community exchange trips, and transporting supplies between sites.",
    icon: Truck,
  },
  {
    title: "Everyday Running",
    description: "Meeting spaces, water access, and logistical coordination for community partner groups.",
    icon: Building,
  },
];

export default function DonatePage() {
  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        title="Support Our Work"
        subtitle="Your support helps community projects keep going, and we'll tell you plainly where it goes."
        description="Here is how giving to ABWA works, and how to be sure your gift reaches us."
        imageSrc="/images/heroes/food-and-mattresses-donation.jpg"
        imageAlt="Community relief, direct support, and resource distribution reaching families in Kenya"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Support Our Work", href: "/donate" },
        ]}
      />

      {/* 2. Why Your Support Matters */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
              Practical & Transparent
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
              Why your support matters
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-abwa-ink/80 sm:text-lg">
              <p>
                ABWA&apos;s projects run on shared effort: community members&apos; time and knowledge, volunteers&apos;
                skills, and financial support from friends and partners.
              </p>
              <p>
                Gifts help cover the practical costs of projects, such as tools, seeds and saplings, art supplies,
                transport and the everyday running of our programmes.
              </p>
            </div>

            {/* Our Promise Box */}
            <div className="mt-8 rounded-2xl border border-abwa-blue/20 bg-abwa-pale/60 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-abwa-blue text-white shadow-sm">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-abwa-navy">
                    Our Promise
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-abwa-ink/80">
                    We will tell you plainly how your support is used, and share updates on the work it makes possible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Practical costs grid */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {practicalCosts.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition hover:border-abwa-blue/30 hover:bg-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-abwa-blue shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-abwa-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-abwa-ink/75">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3. Version A: Direct Giving Enquiry Fallback */}
      <Section className="bg-slate-50/70 border-t border-slate-100">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border-2 border-abwa-blue/30 bg-white p-8 shadow-sm sm:p-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-abwa-pale text-abwa-blue">
              <Heart className="h-7 w-7" />
            </div>
            <span className="mt-4 block font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide">
              Direct Enquiry
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-abwa-navy sm:text-4xl">
              How to give right now
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-abwa-ink/80">
              We&apos;re setting up a secure way to give online. In the meantime, please get in touch and we&apos;ll share
              ABWA&apos;s official giving details with you directly.
            </p>
            <p className="mt-2 text-sm text-abwa-ink/60">
              It only takes a minute to ask.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?topic=giving"
                className="inline-flex items-center gap-2 rounded-xl bg-abwa-navy px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-abwa-blue hover:shadow-lg"
              >
                <span>Ask About Giving</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+254720021001"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-abwa-ink transition hover:bg-slate-50"
              >
                <PhoneCall className="h-4 w-4 text-abwa-blue" />
                <span>+254 720 021 001</span>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Giving Safely (Fraud Prevention Notice) */}
      <Section className="bg-white border-t border-slate-100">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-amber-950">
                  Giving safely
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-amber-900">
                  Please only give using the details published on this website or sent to you directly by ABWA. If
                  anyone asks you to send money to a different account in ABWA&apos;s name, please check with us first
                  by calling{" "}
                  <a href="tel:+254720021001" className="font-semibold underline hover:text-amber-950">
                    +254 720 021 001
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Child Protection Safeguard Note */}
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50/50 p-6 text-sm leading-relaxed text-abwa-ink/75">
            <h4 className="font-heading text-sm font-bold text-abwa-navy">
              Safeguarding & Community Equity Policy
            </h4>
            <p className="mt-2">
              To protect child privacy, dignity, and prevent inequality within community groups, ABWA does not offer
              individual child sponsorship programmes. All donations are pooled transparently into shared community
              facilities, collective farming inputs, and group learning environments.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Other Ways to Help */}
      <Section className="bg-slate-50/70 border-t border-slate-100">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-abwa-pale text-abwa-blue">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="mt-4 font-heading text-2xl font-bold text-abwa-navy sm:text-3xl">
              Other ways to help
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-abwa-ink/80">
              Giving isn&apos;t the only way. You can volunteer your time, offer a skill, introduce us to a partner, or
              share our story with your network.
            </p>
            <div className="mt-6">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 font-heading text-sm font-bold text-abwa-blue hover:text-abwa-navy hover:underline"
              >
                <span>Explore all ways to get involved</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
