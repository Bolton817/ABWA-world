import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Phone, MapPin, Mail, ArrowUpRight } from "lucide-react";
import { socialChannels } from "@/components/ui/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-abwa-navy text-white pt-16 pb-12 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-gold rounded">
              <Image
                src="/images/brand/abwa-logo2.png"
                alt={siteConfig.name}
                width={200}
                height={70}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              A community organisation based in Buruburu, Nairobi, Kenya working with women, young people and children
              on skills, farming, creativity and the environment.
            </p>
            <div className="pt-2 space-y-1">
              <span className="font-kaushan text-abwa-gold text-base tracking-wide block">
                Empowering Communities
              </span>
              <span className="text-sm text-abwa-gold font-goldie tracking-wide block">
                {siteConfig.tagline}
              </span>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-abwa-gold font-sans">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About ABWA
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-slate-300 hover:text-white transition-colors">
                  Our Programmes
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-slate-300 hover:text-white transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-slate-300 hover:text-white transition-colors">
                  Community Stories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Blog & Ideas
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-white transition-colors">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-abwa-gold font-sans">
              Get Involved
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/get-involved" className="text-slate-300 hover:text-white transition-colors">
                  Ways to Take Part
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-slate-300 hover:text-white transition-colors">
                  Volunteer With ABWA
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-slate-300 hover:text-white transition-colors">
                  Support Our Work (Giving)
                </Link>
              </li>
              <li>
                <Link href="/partner-with-us" className="text-slate-300 hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-abwa-gold font-sans">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-abwa-gold flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.location}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-abwa-gold flex-shrink-0 mt-0.5" />
                <a
                  href={siteConfig.contact.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              {siteConfig.features.showPostalBox && siteConfig.contact.postalBox && (
                <li className="text-xs text-slate-400 pl-6">
                  {siteConfig.contact.postalBox}
                </li>
              )}
              {siteConfig.contact.email && (
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-abwa-gold flex-shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              )}
            </ul>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-abwa-gold hover:text-amber-300 transition-colors"
              >
                <span>Send us a message</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Social Media Channels */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2.5">
                Follow ABWA
              </span>
              <div className="flex items-center gap-2.5">
                {socialChannels.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.ariaLabel}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-slate-200 hover:text-abwa-navy border border-white/10 hover:border-white flex items-center justify-center transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-gold shadow-xs"
                    >
                      <Icon className="w-4 h-4 fill-current" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {siteConfig.formalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            <span>•</span>
            <span className="text-slate-500">Non profit organisation</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
