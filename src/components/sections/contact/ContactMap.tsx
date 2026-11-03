import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { MapPin, Navigation, ExternalLink, Clock, Phone } from "lucide-react";

export function ContactMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  // If API key is provided, use Google Maps Embed API v1 with attribution; otherwise fall back to standard embed
  const mapSrc = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Buruburu%2C+Nairobi%2C+Kenya&zoom=14&solution_id=gmp_git_agentskills_v1`
    : `https://maps.google.com/maps?q=Buruburu%2C%20Nairobi%2C%20Kenya&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Buruburu,+Nairobi,+Kenya";
  const googleMapsSearchUrl = "https://www.google.com/maps/search/?api=1&query=Buruburu,+Nairobi,+Kenya";

  return (
    <Section className="bg-white border-t border-slate-200">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-kaushan text-abwa-gold text-lg sm:text-xl tracking-wide block">
            Our location
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl">
            Find us in Buruburu, Nairobi
          </h2>
          <p className="mt-3 text-base text-abwa-ink/75">
            Action for Better World Association is based in Buruburu, Nairobi, Kenya. Our coordination
            office supports community partnerships and grassroots projects across the country.
          </p>
        </div>

        {/* Map Container Card */}
        <div className="mt-10 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
          {/* Top Info & Quick Actions Bar */}
          <div className="px-6 py-4 bg-abwa-pale/70 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-abwa-blue border border-abwa-border flex items-center justify-center flex-shrink-0 shadow-2xs">
                <MapPin className="w-5 h-5 text-abwa-blue" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-abwa-navy">
                  Buruburu, Nairobi, Kenya
                </h3>
                <p className="text-xs text-abwa-muted">
                  Headquarters and Community Coordination Office
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-abwa-blue text-white text-xs font-semibold hover:bg-abwa-blue-hover transition shadow-2xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get directions</span>
              </a>
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-abwa-border text-abwa-navy text-xs font-semibold hover:bg-slate-50 transition shadow-2xs"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-abwa-muted" />
              </a>
            </div>
          </div>

          {/* Interactive Google Map Iframe */}
          <div className="relative w-full h-[380px] sm:h-[460px] bg-slate-100">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ABWA World Location in Buruburu, Nairobi, Kenya"
              className="w-full h-full"
            />
          </div>

          {/* Bottom Details Strip */}
          <div className="p-6 bg-slate-50/70 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-abwa-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="font-bold text-abwa-navy block">Physical Base</span>
                <span className="text-abwa-muted leading-relaxed">
                  Buruburu Phase 1, Nairobi, Kenya
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-abwa-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="font-bold text-abwa-navy block">Office Hours</span>
                <span className="text-abwa-muted leading-relaxed">
                  Monday to Friday, 8:30 AM to 5:00 PM EAT
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="font-bold text-abwa-navy block">Telephone & WhatsApp</span>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="text-abwa-blue hover:underline font-semibold"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
