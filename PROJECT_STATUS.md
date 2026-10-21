# ABWA World ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â Project Status & Implementation Tracker

## 1. Project Overview
- **Project Name**: ABWA World Website Rebuild
- **Client**: Action for Better World Association (ABWA)
- **Target Stack**: Next.js App Router, TypeScript, Tailwind CSS, GSAP + ScrollTrigger
- **Current Stage**: **Stage 11 — Legal Pages and System States (Completed)**
- **Next Stage**: **Stage 12 — SEO, Metadata, Structured Data, Sitemap and Robots**
- **Last Updated**: 2026-10-21

---

## 2. Environment & System Baseline
- **OS**: Windows (PowerShell)
- **Node.js**: `v24.19.0`
- **Package Manager**: `npm 11.17.0` (Note: Invoked via `npm.cmd` due to Windows PowerShell script execution policy)
- **Version Control**: `git 2.55.0.windows.5`
- **Core Specifications**:
  - `ABWA_TDD.pdf` (Version 1.0, 21 October 2026, 154 pages, 152 specification modules)
  - `ABWA_World_Website_Copy_Deck.pdf` (Version 1.0, 21 October 2026, 69 pages)

---

## 3. Staged Implementation Progress

| Stage | Name | Status | Notes |
| :--- | :--- | :--- | :--- |
| **00** | **Repository Audit and Baseline** | **Completed** | Environment verified, Git repo initialized, baseline documentation created |
| **01** | **Framework Foundation and Design Tokens** | **Completed** | Next.js App Router, Tailwind, colour/typography tokens |
| **02** | **Fonts, Image Inventory and Shared UI Primitives** | **Completed** | Brand assets, PageHero, Container, Button variants |
| **03** | **Header, Footer and Floating Controls** | **Completed** | Two-tier desktop header, mobile drawer, 4-col footer, action hub |
| **04** | **GSAP Integration and Motion System** | **Completed** | `useGSAP`, ScrollTrigger setup, reduced motion handling |
| **05** | **Homepage Structure and Responsive Layout** | **Completed** | 10 homepage sections per Copy Deck |
| **06** | **About Page** | **Completed** | Story, purpose, focus areas, governance |
| **07** | **Programme Index and Detail Template** | **Completed** | 4 active programmes + dynamic detail template |
| **08** | **Get Involved, Volunteer, Donate and Partner** | **Completed** | Engagement routes with safe enquiry/payment decision gates & forms |
| **09** | **Blog, Stories and Three Complete Launch Posts** | **Completed** | 3 complete launch articles (2,700+ words), dynamic reader, stories & consent charter |
| **10** | **FAQ, Contact and Search** | **Completed** | 12-question accordion with server-rendered HTML, verified contact & topic form, instant client search |
| **11** | **Legal Pages and System States** | **Completed** | Text-first Privacy Policy & Terms with desktop TOC, custom 404 recovery with search, sanitized client error boundary |
| 12 | SEO, Metadata, Structured Data, Sitemap and Robots | Pending | JSON-LD NGO/WebSite/BlogPosting, sitemap.ts, robots.ts |
| 13 | Apply the Approved Animation Map | Pending | Staged GSAP reveals and desktop scroll effects |
| 14 | Accessibility, Performance and Full QA | Pending | WCAG 2.2 AA audit, Core Web Vitals, cross-viewport checks |
| 15 | Launch, Redirects and Handover | Pending | Production build, DNS notes, client handover package |

---

## 4. Route Status Matrix

| Route | Expected Content | TDD Module | Status |
| :--- | :--- | :--- | :--- |
| `/` | Homepage (11 sections) | 032ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“043 | Baseline Planned |
| `/about` | About ABWA, history, purpose, focus areas | 044ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“050 | Baseline Planned |
| `/programs` | Programmes directory | 051ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“052 | Baseline Planned |
| `/programs/youth-empowerment` | Youth Empowerment and Skills (Mathare) | 057 | Baseline Planned |
| `/programs/womens-empowerment-sustainable-agriculture` | Women's Farming & Empowerment (Kangundo) | 058 | Baseline Planned |
| `/programs/umisiiyu-women-group` | Umisiiyu Women Group (Kibwezi) | 059 | Baseline Planned |
| `/programs/environmental-conservation` | Environmental Conservation | 060 | Baseline Planned |
| `/get-involved` | Engagement pathways overview | 066 | Live / Verified |
| `/volunteer` | Volunteering expectations & enquiry form | 067–068 | Live / Verified |
| `/donate` | Support Our Work (Version A enquiry fallback) | 069 | Live / Verified |
| `/partner-with-us` | Institutional collaboration & enquiry form | 070 | Live / Verified |
| `/impact` | Impact definitions & qualitative evidence | 071 | Baseline Planned |
| `/stories` & `[slug]` | Community stories & consent framework | 072 | Live / Verified |
| `/gallery` | Photo gallery & accessible lightbox | 073 | Baseline Planned |
| `/blog` | Blog index & category tags | 074 | Live / Verified |
| `/blog/sustainable-agriculture-resilient-communities-kenya` | Launch Article 1 (888 words) | 076 | Live / Verified |
| `/blog/youth-empowerment-creativity-skills-community-action` | Launch Article 2 (941 words) | 077 | Live / Verified |
| `/blog/ethical-community-volunteering-in-kenya` | Launch Article 3 (872 words) | 078 | Live / Verified |
| `/faq` | Frequently Asked Questions (12 questions) | 079 | Live / Verified |
| `/contact` | Contact information & general form | 081–082 | Live / Verified |
| `/search` | Site-wide live search | 080 | Live / Verified |
| `/privacy` | Privacy Policy (no photo hero) | 083 | Live / Verified |
| `/terms` | Terms and Conditions (no photo hero) | 084 | Live / Verified |
| `/sitemap.xml` | Dynamic canonical sitemap | 094 | Baseline Planned |
| `/robots.txt` | Dynamic crawler directives | 095 | Baseline Planned |

---

## 5. Known Issues & Blockers
- **No blocking issues for Stage 00**.
- Note for all npm commands on Windows PowerShell: Use `npm.cmd` or `npx.cmd` to bypass PowerShell script execution restrictions.
