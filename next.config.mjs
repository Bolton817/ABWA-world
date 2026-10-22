/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // British/American spelling & legacy programme routes
      {
        source: "/programmes",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/our-programs",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/our-programmes",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/programs.html",
        destination: "/programs",
        permanent: true,
      },
      // About legacy routes
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/who-we-are",
        destination: "/about",
        permanent: true,
      },
      // Contact legacy routes
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      // Volunteer legacy routes
      {
        source: "/volunteering",
        destination: "/volunteer",
        permanent: true,
      },
      {
        source: "/volunteer.html",
        destination: "/volunteer",
        permanent: true,
      },
      // Donate & Support legacy routes
      {
        source: "/donation",
        destination: "/donate",
        permanent: true,
      },
      {
        source: "/donations",
        destination: "/donate",
        permanent: true,
      },
      {
        source: "/support",
        destination: "/donate",
        permanent: true,
      },
      {
        source: "/support-us",
        destination: "/donate",
        permanent: true,
      },
      {
        source: "/donate.html",
        destination: "/donate",
        permanent: true,
      },
      // Partnership legacy routes
      {
        source: "/partners",
        destination: "/partner-with-us",
        permanent: true,
      },
      {
        source: "/partner",
        destination: "/partner-with-us",
        permanent: true,
      },
      {
        source: "/partnership",
        destination: "/partner-with-us",
        permanent: true,
      },
      // FAQ legacy routes
      {
        source: "/faqs",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/faq.html",
        destination: "/faq",
        permanent: true,
      },
      // Blog / Articles legacy routes
      {
        source: "/articles",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/news",
        destination: "/blog",
        permanent: true,
      },
      // Gallery legacy routes
      {
        source: "/photos",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/gallery.html",
        destination: "/gallery",
        permanent: true,
      },
      // Impact legacy routes
      {
        source: "/our-impact",
        destination: "/impact",
        permanent: true,
      },
      {
        source: "/impact.html",
        destination: "/impact",
        permanent: true,
      },
      // Legal legacy routes
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
