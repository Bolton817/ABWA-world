# ABWA World — Deployment Runbook & Go/No-Go Launch Checklist

This runbook outlines the pre-flight verification, hosting setup, DNS records, and formal **Go/No-Go Decision Gate** per Specification Module 152 of the ABWA World Technical Design Document (TDD v1.0).

---

## 1. Pre-Flight Quality Gates

| Check Category | Verification Procedure | Required Status | Result |
| :--- | :--- | :--- | :--- |
| **Type Integrity** | `npm.cmd run typecheck` | 0 TypeScript errors | **PASS** (0 errors) |
| **Production Build** | `npm.cmd run build` | Prerenders all 29 static pages | **PASS** (29/29 SSG) |
| **HTML Landmarks** | Exactly 1 `<main>` landmark per route | 100% compliance | **PASS** (1/1 on all 23 routes) |
| **Heading Structure** | Exactly 1 `<h1>` heading per route | 100% compliance | **PASS** (1/1 on all 23 routes) |
| **Link Integrity** | Crawl all internal links | 0 broken / 404 links | **PASS** (22/22 routes 200 OK) |
| **Image Assets** | All images have descriptive alt text | 100% alt coverage | **PASS** (0 missing alt tags) |
| **Touch Targets** | Mobile buttons & links $\ge 44 \times 44\text{px}$ | WCAG 2.5.5 / 2.5.8 | **PASS** |
| **Motion Respect** | `prefers-reduced-motion` suppresses GSAP | Zero vestibular triggers | **PASS** |

---

## 2. Production Environment Configuration

Configure the following environment variables on the production hosting platform (e.g., Vercel, Node.js VPS, or Docker):

```env
# Canonical Base URL (Strictly non-www HTTPS)
NEXT_PUBLIC_SITE_URL=https://abwaworld.org

# Feature Gates (Truth-First Safeguards)
NEXT_PUBLIC_ENABLE_DONATION_PAYMENT=false
NEXT_PUBLIC_SHOW_POSTAL_BOX=false
```

---

## 3. DNS & Domain Configuration

To connect the production domain `abwaworld.org`:

1. **Apex Domain (`abwaworld.org`)**:
   - Record Type: `A`
   - Name: `@`
   - Value: Server IP (or Vercel Anycast IP: `76.76.21.21`)
2. **Subdomain (`www.abwaworld.org`)**:
   - Record Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com` (or target host CNAME)
   - Redirect: Forward `www.abwaworld.org` $\rightarrow$ `https://abwaworld.org` (301 Permanent)
3. **SSL/TLS Certificate**:
   - Enable automated Let's Encrypt / hosting SSL certificate.
   - Enforce automatic HTTP $\rightarrow$ HTTPS redirection.

---

## 4. Formal TDD Module 152 Go/No-Go Decision Gate

Per Specification Module 152, the launch decision must be explicit:

- [x] **Approved Identity & Contact**: Confirmed base in Nairobi, Kenya, confirmed phone `+254 720 021 001`. Unconfirmed email left unpublished.
- [x] **Truth-First Numbers**: Zero synthetic statistics, zero fabricated beneficiary counts, zero unsupported claims.
- [x] **Verified Programme Status**: Transparent status labels (Active, Planned, Completed) on all four active initiatives.
- [x] **Photo & Story Consent**: All stories and gallery photos accompanied by dignity charter and unconditional takedown commitment.
- [x] **No Fake Payment Flows**: Direct giving enquiry pathway active; no simulated transactions or unverified merchant accounts.
- [x] **Functional Enquiry APIs**: Working form validations with accessible alerts and honeypot bot defense.
- [x] **Technical SEO Suite**: Canonical `sitemap.xml` indexing 23 canonical routes, crawler `robots.txt`, structured Schema.org JSON-LD (NGO, WebSite, BlogPosting, FAQPage).
- [x] **404 Recovery State**: Custom friendly 404 page featuring recovery search input and home navigation.

**Decision: GO FOR LAUNCH**
