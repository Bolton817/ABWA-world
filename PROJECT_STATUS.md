# ABWA World ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â Project Status & Implementation Tracker

## 1. Project Overview
- **Project Name**: ABWA World Website Rebuild
- **Client**: Action for Better World Association (ABWA)
- **Target Stack**: Next.js App Router, TypeScript, Tailwind CSS, GSAP + ScrollTrigger
- **Current Stage**: **Stage 01 ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â Framework Foundation and Design Tokens (Completed)**
- **Next Stage**: **Stage 02 ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â Fonts, Image Inventory and Shared UI Primitives**
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
| **00** | **Repository Audit and Baseline** | **In Progress (Active)** | Environment verified, Git repo initialized, baseline documentation created |
| **01** | **Framework Foundation and Design Tokens** | **Completed** | Next.js App Router, Tailwind, colour/typography tokens |
| **02** | **Fonts, Image Inventory and Shared UI Primitives** | **Completed** | Brand assets, PageHero, Container, Button variants |
| **03** | **Header, Footer and Floating Controls** | **Completed** | Two-tier desktop header, mobile drawer, 4-col footer, action hub |
| **04** | **GSAP Integration and Motion System** | **Completed** | `useGSAP`, ScrollTrigger setup, reduced motion handling |
| **05** | **Homepage Structure and Responsive Layout** | **Completed** | 11 homepage sections per Copy Deck |
| **06** | **About Page** | **Completed** | Story, purpose, focus areas, governance |
| 07 | Programme Index and Detail Template | Pending | 4 active/planned programmes + dynamic detail template |
| 08 | Get Involved, Volunteer, Donate and Partner | Pending | Engagement routes with safe enquiry/payment decision gates |
| 09 | Blog, Stories and Three Complete Launch Posts | Pending | 3 complete launch articles, MDX/content data |
| 10 | FAQ, Contact and Search | Pending | Accordions, verified phone/contact, client search |
| 11 | Legal Pages and System States | Pending | Privacy Policy, Terms, 404, Error boundaries |
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
| `/get-involved` | Engagement pathways overview | 066 | Baseline Planned |
| `/volunteer` | Volunteering expectations & enquiry form | 067ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“068 | Baseline Planned |
| `/donate` | Support Our Work (Version A enquiry fallback) | 069 | Baseline Planned |
| `/partner-with-us` | Institutional collaboration & enquiry form | 070 | Baseline Planned |
| `/impact` | Impact definitions & qualitative evidence | 071 | Baseline Planned |
| `/stories` & `[slug]` | Community stories & consent framework | 072 | Baseline Planned |
| `/gallery` | Photo gallery & accessible lightbox | 073 | Baseline Planned |
| `/blog` | Blog index & category tags | 074 | Baseline Planned |
| `/blog/sustainable-agriculture-resilient-communities-kenya` | Launch Article 1 (888 words) | 076 | Baseline Planned |
| `/blog/youth-empowerment-creativity-skills-community-action` | Launch Article 2 (941 words) | 077 | Baseline Planned |
| `/blog/ethical-community-volunteering-in-kenya` | Launch Article 3 (872 words) | 078 | Baseline Planned |
| `/faq` | Frequently Asked Questions (12 questions) | 079 | Baseline Planned |
| `/contact` | Contact information & general form | 081ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“082 | Baseline Planned |
| `/privacy` | Privacy Policy (no photo hero) | 083 | Baseline Planned |
| `/terms` | Terms and Conditions (no photo hero) | 084 | Baseline Planned |
| `/sitemap.xml` | Dynamic canonical sitemap | 094 | Baseline Planned |
| `/robots.txt` | Dynamic crawler directives | 095 | Baseline Planned |

---

## 5. Known Issues & Blockers
- **No blocking issues for Stage 00**.
- Note for all npm commands on Windows PowerShell: Use `npm.cmd` or `npx.cmd` to bypass PowerShell script execution restrictions.
