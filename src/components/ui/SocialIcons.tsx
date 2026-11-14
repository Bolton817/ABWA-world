import React from "react";
import { siteConfig } from "@/config/site";

export function FacebookIcon({
  className = "w-5 h-5",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function InstagramIcon({
  className = "w-5 h-5",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function TikTokIcon({
  className = "w-5 h-5",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.84-4.47V8.04a8.16 8.16 0 0 0 4.93 1.63V6.22a4.85 4.85 0 0 1-1-.15v.62z" />
    </svg>
  );
}

export function YouTubeIcon({
  className = "w-5 h-5",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export interface SocialChannelItem {
  id: "facebook" | "instagram" | "tiktok" | "youtube";
  name: string;
  handle: string;
  href: string;
  description: string;
  ariaLabel: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  brandColor: string;
  accentBg: string;
  accentText: string;
  hoverBorder: string;
}

export const socialChannels: readonly SocialChannelItem[] = [
  {
    id: "facebook",
    name: "Facebook",
    handle: "ABWA Kenya",
    href: siteConfig.social.facebook,
    description: "Join our active community on Facebook for regular field posts, news, and community milestones",
    ariaLabel: "Follow ABWA on Facebook",
    icon: FacebookIcon,
    brandColor: "#1877F2",
    accentBg: "bg-[#1877F2]/10",
    accentText: "text-[#1877F2]",
    hoverBorder: "hover:border-[#1877F2]/40",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@abwakenya",
    href: siteConfig.social.instagram,
    description: "Photographs and visual stories highlighting community progress in Nairobi and rural counties",
    ariaLabel: "Follow ABWA on Instagram",
    icon: InstagramIcon,
    brandColor: "#E4405F",
    accentBg: "bg-[#E4405F]/10",
    accentText: "text-[#E4405F]",
    hoverBorder: "hover:border-[#E4405F]/40",
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: "@abwaworld",
    href: siteConfig.social.tiktok,
    description: "Short videos celebrating youth talent, tailoring classes, and grassroots activities in Mathare",
    ariaLabel: "Follow ABWA on TikTok",
    icon: TikTokIcon,
    brandColor: "#000000",
    accentBg: "bg-slate-900/10",
    accentText: "text-slate-900",
    hoverBorder: "hover:border-slate-900/40",
  },
  {
    id: "youtube",
    name: "YouTube",
    handle: "@abwaworld",
    href: siteConfig.social.youtube,
    description: "Documentaries, community dialogues, and volunteer video stories from the ground",
    ariaLabel: "Subscribe to ABWA on YouTube",
    icon: YouTubeIcon,
    brandColor: "#FF0000",
    accentBg: "bg-[#FF0000]/10",
    accentText: "text-[#FF0000]",
    hoverBorder: "hover:border-[#FF0000]/40",
  },
] as const;
