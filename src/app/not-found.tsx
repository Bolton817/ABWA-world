import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  Home,
  Compass,
  PhoneCall,
  Search,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title: "Page Not Found | ABWA World",
  description: "We can't find that page. Here are a few good places to start instead.",
};

export default function NotFound() {
  return (
    <div className="bg-[#FAF7EE] min-h-[80vh] flex items-center py-24 md:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Visual 404 Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF2FA] text-[#15345A] font-bold text-sm mb-6 border border-[#1E63B8]/20">
            <HelpCircle className="w-4 h-4 text-[#B79045]" />
            <span>Error 404 • Page Not Found</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#15345A] tracking-tight mb-4">
            We can't find that page
          </h1>

          <p className="text-[#263445]/80 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            The link may be out of date, or the page may have moved. Here are a few good places to start instead.
          </p>

          {/* Quick Search Form */}
          <form
            action="/search"
            method="GET"
            className="max-w-md mx-auto mb-12 flex items-center bg-white rounded-full border border-[#263445]/15 shadow-sm p-1.5 focus-within:ring-2 focus-within:ring-[#1E63B8] focus-within:border-transparent transition-all"
          >
            <div className="pl-4 text-[#263445]/40">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              name="q"
              placeholder="Search programmes, articles and answers..."
              className="w-full px-3 py-2 text-sm text-[#263445] placeholder-[#263445]/40 bg-transparent focus:outline-none"
              aria-label="Search query"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-[#15345A] text-white text-xs font-semibold hover:bg-[#1E63B8] transition-colors"
            >
              Search
            </button>
          </form>

          {/* Curated Recovery Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <Link
              href="/"
              className="group p-5 rounded-2xl bg-white border border-[#263445]/10 shadow-sm hover:border-[#1E63B8]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EAF2FA] text-[#15345A] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Home className="w-5 h-5" />
                </div>
                <h2 className="font-semibold text-base text-[#15345A] mb-1 group-hover:text-[#1E63B8] transition-colors">
                  Go to the homepage
                </h2>
                <p className="text-xs text-[#263445]/70 leading-relaxed">
                  Start from the beginning and learn about our mission in Nairobi.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#1E63B8]">
                <span>Visit home</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/programs"
              className="group p-5 rounded-2xl bg-white border border-[#263445]/10 shadow-sm hover:border-[#1E63B8]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EAF2FA] text-[#1E63B8] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                <h2 className="font-semibold text-base text-[#15345A] mb-1 group-hover:text-[#1E63B8] transition-colors">
                  Explore Our Programmes
                </h2>
                <p className="text-xs text-[#263445]/70 leading-relaxed">
                  Discover initiatives in Mathare, Kangundo, and Kibwezi.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#1E63B8]">
                <span>View all programmes</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/contact"
              className="group p-5 rounded-2xl bg-white border border-[#263445]/10 shadow-sm hover:border-[#1E63B8]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF7EE] text-[#B79045] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h2 className="font-semibold text-base text-[#15345A] mb-1 group-hover:text-[#1E63B8] transition-colors">
                  Contact ABWA
                </h2>
                <p className="text-xs text-[#263445]/70 leading-relaxed">
                  Speak directly with our team or send us an enquiry.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#1E63B8]">
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
