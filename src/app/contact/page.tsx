import React from "react";
import { Metadata } from "next";
import { Phone, MapPin, Mail, Mailbox, Clock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact ABWA | Nairobi, Kenya",
  description:
    "Get in touch with Action for Better World Association in Nairobi, Kenya. Call us or send a message about volunteering, partnership or giving.",
  alternates: {
    canonical: "https://www.abwaworld.org/contact",
  },
  openGraph: {
    title: "Contact ABWA | Nairobi, Kenya",
    description:
      "Get in touch with Action for Better World Association in Nairobi, Kenya. Call us or send a message about volunteering, partnership or giving.",
    url: "https://www.abwaworld.org/contact",
    type: "website",
  },
};

const contactCards = [
  {
    title: "Telephone",
    value: "+254 720 021 001",
    href: "tel:+254720021001",
    description: "Available during business hours East Africa Time (EAT)",
    icon: Phone,
    isLink: true,
  },
  {
    title: "Headquarters & Base",
    value: "Nairobi, Kenya",
    description: "Coordination office for community partnerships across Kenya",
    icon: MapPin,
    isLink: false,
  },
  {
    title: "Postal Address",
    value: "P.O. Box 1204-00515 Buruburu",
    description: "Postal correspondence and official documents",
    icon: Mailbox,
    isLink: false,
  },
];

export default function ContactPage() {
  return (
    <main id="main-content">
      {/* 1. Page Hero */}
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you."
        description="Ask a question, offer your skills, or start a conversation about working together."
        imageSrc="/images/heroes/hero-contact.svg"
        imageAlt="Community coordination in Nairobi"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />

      {/* 2. Contact Details & Official Channel Cards */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
              Direct Communication
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-3 text-base text-abwa-ink/75">
              Call our team directly or send an online message using the form below.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 text-center transition hover:border-abwa-blue/30 hover:bg-white hover:shadow-sm"
                >
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-abwa-pale text-abwa-blue">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-heading text-base font-bold text-abwa-navy">
                      {card.title}
                    </h3>
                    {card.isLink && card.href ? (
                      <a
                        href={card.href}
                        className="mt-2 block font-heading text-lg font-bold text-abwa-blue transition hover:text-abwa-navy hover:underline"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="mt-2 font-heading text-base font-bold text-abwa-navy">
                        {card.value}
                      </p>
                    )}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-abwa-ink/65">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3. Interactive Contact Form */}
      <Section id="message-form" className="bg-abwa-pale/40 border-t border-slate-200">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
                Send a Message
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
                How can we help?
              </h2>
              <p className="mt-3 text-sm text-abwa-ink/75">
                Whether you have a question about volunteering, giving, partnering, or our programmes, we will reply
                carefully to your email.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10">
              <ContactForm />
            </div>

            {/* Privacy Reassurance Note */}
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-abwa-ink/60">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>We respect your privacy. Details sent through this form are used solely to reply to you.</span>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
