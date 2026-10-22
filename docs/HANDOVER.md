# ABWA World — Client Handover & Maintenance Guide

**Project**: Action for Better World Association (ABWA) Official Website Rebuild  
**Domain**: `https://abwaworld.org`  
**Baseline Standards**: Built strictly in accordance with `ABWA_TDD.pdf` (154 pages) and `ABWA_World_Website_Copy_Deck.pdf` (69 pages).

---

## 1. Technical Architecture Overview

The website is engineered for speed, stability, zero recurring database costs, and strict truth-first transparency:
- **Framework**: Next.js 14 (App Router) with React 18 and TypeScript.
- **Styling**: Tailwind CSS with custom brand tokens (Navy `#15345A`, Blue `#1E63B8`, Pale Blue `#EAF2FA`, Warm Gold `#B79045`, Ink `#263445`).
- **Animation**: GSAP 3 & ScrollTrigger (`@gsap/react`) with automated `prefers-reduced-motion` accessibility bypass.
- **Content Architecture**: Content-as-code (strictly typed TypeScript modules under `src/content/`). No database is required for normal operation.
- **Hosting**: Optimized for zero-maintenance serverless deployment (Vercel, AWS Amplify, or Node.js Docker).

---

## 2. Content Maintenance Guide

All website copy, programmes, articles, and stories reside in clean, typed files under `src/content/`. To update content, edit the corresponding file and commit changes.

### Adding or Updating a Programme
- File: `src/content/programmes.ts`
- Each programme object contains:
  ```ts
  {
    slug: "my-programme-slug",
    title: "Programme Title",
    location: "Location, County",
    status: "Active" | "Planned" | "Completed",
    summary: "One sentence overview.",
    heroImage: "/images/heroes/photo.jpg",
    heroImageAlt: "Descriptive alt text for accessibility",
    whatWeDo: ["Bullet 1", "Bullet 2"],
    whoTakesPart: ["Group 1", "Group 2"],
    // ...
  }
  ```
- New programmes automatically generate dynamic routes at `/programs/[slug]` and are indexed in `sitemap.ts` and `searchIndex.ts`.

### Publishing a New Blog Article
- File: `src/content/blog.ts`
- Each article contains: `slug`, `title`, `category`, `publishedDate`, `author`, `readTime`, `heroImage`, `heroImageAlt`, and structured `sections` (`heading`, `paragraphs`).
- Automatically generates `/blog/[slug]` with Schema.org `BlogPosting` JSON-LD.

### Adding a Community Story
- File: `src/content/stories.ts`
- **Consent Protocol (TDD Module 072)**: Every story must have verified, documented consent from the participant (or parent/guardian if under 18). Never include surnames of children, home locations, or school schedules.

### Adding a Photograph to the Gallery
- File: `src/components/gallery/GalleryClient.tsx`
- Place optimized photo in `public/images/gallery/` or `public/images/heroes/`.
- Add an entry with `id`, `src`, `alt` (descriptive text), `caption`, and `category`.

### Updating Contact Information
- File: `src/config/site.ts`
- Centralized configuration for phone number (`+254 720 021 001`), postal box, and official email once verified.

---

## 3. Developer Commands

All commands should be executed from the project root using Windows PowerShell or bash:

```powershell
# Install dependencies
npm.cmd install

# Start local development server (http://localhost:3000 or 3001)
npm.cmd run dev

# Check TypeScript validity
npm.cmd run typecheck

# Build optimized production bundle
npm.cmd run build

# Start production server
npm.cmd run start
```

---

## 4. Key Decisions & Safeguards Register

| Decision Area | Status / Value | Rule |
| :--- | :--- | :--- |
| **Legal Registration** | Left unstated | Do not claim NGO registration until officially gazetted constitution is confirmed. |
| **Beneficiary Counts** | Omitted | No unverified numbers ("430 children fed") until verified records exist. |
| **Donations** | Direct enquiry fallback | Do not activate live payment forms until ABWA provides verified merchant accounts. |
| **Phone Number** | `+254 720 021 001` | Single verified contact phone for all public communications. |
| **Takedown Policy** | Active unconditional promise | Any community member requesting photo or story removal is handled immediately. |

---

## 5. Future Roadmap & Enhancements

When ABWA is ready to expand technical capabilities:
1. **Online Payment Gateway (DEC-017)**: Integrate M-Pesa Daraja API, Stripe, or PayPal once merchant credentials and banking accounts are configured.
2. **Headless CMS (DEC-018)**: Connect a visual headless CMS (e.g. Sanity, Strapi) if non-technical staff prefer web-based editing over Git commits.
3. **Multi-language Support**: Add Swahili (`sw-KE`) localization using Next.js internationalization.
