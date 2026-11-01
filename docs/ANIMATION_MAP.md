# ABWA World — GSAP & ScrollTrigger Implementation Map

This document establishes the authoritative specification, component architecture, trigger values, and responsive/accessibility boundaries for the concrete GSAP 3 and ScrollTrigger animation pass implemented across the ABWA World website rebuild per TDD Modules 099–110.

---

## 1. Core Architectural & Motion Rules

1. **Safe Client Registration**: Both `ScrollTrigger` and `@gsap/react`'s `useGSAP` are registered once safely in client runtime within `src/lib/animation/gsap.ts` (`if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP)`).
2. **Server/Client Boundaries**: All Next.js page route entry points (`page.tsx`) remain Server Components exporting metadata and OpenGraph tags. All interactive animation logic is encapsulated in focused Client Components (`'use client'`).
3. **Lifecycle Hygiene & Strict Mode Safety**: All animations are constructed within `useGSAP(() => { ... }, { scope: containerRef })` to guarantee automatic cleanup, scroll trigger killing, and memory reclamation across Next.js App Router client-side page transitions.
4. **Responsive & Reduced-Motion Boundaries**: `gsap.matchMedia()` isolates desktop-only pinning and horizontal layouts to `(min-width: 1024px)`. Whenever `(prefers-reduced-motion: reduce)` is enabled in the operating system or browser, all transforms, scrubs, and parallax offsets are suppressed, displaying content statically.
5. **Progressive Enhancement**: Content is never set to permanent `opacity: 0` in markup. Animations use `gsap.from()` with `clearProps: "transform,opacity,visibility"`, ensuring that search engines, screen readers, and JavaScript-disabled browsers render all text, images, and links immediately.

---

## 2. Concrete Animation Specifications

### Animation 1: Hero Entrance Stagger & Background Image Parallax
- **Components**: [`PageHero.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/ui/PageHero.tsx) & [`HomeHero.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/sections/home/HomeHero.tsx)
- **Target Routes**: Homepage (`/`) and all subpages utilizing `<PageHero>` (`/about`, `/programs`, `/contact`, `/donate`, `/gallery`, `/impact`, `/stories`, `/volunteer`, `/partner-with-us`, `/faq`, `/blog`).
- **Entrance Animation**:
  - Scope: `contentRef` (`.hero-anim-item`)
  - Target elements: Breadcrumbs, Eyebrow badge, Single H1, Subtitle, Description, and CTA Button Group.
  - Tween: `gsap.from(animItems, { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", clearProps: "transform,opacity,visibility" })`
- **Background Image Parallax**:
  - Scope: `bgWrapperRef` (`scale: 1.12`, `will-change-transform`, `overflow-hidden`)
  - Trigger: `trigger: headerRef.current`, `start: "top top"`, `end: "bottom top"`, `scrub: true`
  - Tween: `gsap.to(bgWrapperRef.current, { yPercent: 18, ease: "none" })`
  - Foreground contrast: Maintained via 3-tier linear gradient (`from-abwa-navy/95 via-abwa-navy/85 to-abwa-navy/70`).
- **Desktop Boundary**: `(min-width: 1024px)` via `matchMedia`.
- **Mobile / Reduced-Motion Fallback**: Parallax scrub disabled; image displayed statically without transform.

---

### Animation 2: Pinned Split-Screen Storytelling
- **Component**: [`HomeFeaturedProgramme.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/sections/home/HomeFeaturedProgramme.tsx)
- **Target Route**: Homepage Section 4 (Featured Programme — Kangundo Women Group).
- **Split Layout**:
  - **Left Column (`leftColRef`)**: Eyebrow ("Featured programme"), H2 ("Growing food, skills and confidence together"), 2 introductory body paragraphs, status warning note, and dual action CTAs.
  - **Right Column (`rightColRef`)**: Featured photographic card + 6 "What happens" activity highlight cards (Phases 01 to 06).
- **Desktop Pinning Behavior (`min-width: 1024px`)**:
  - Container Structure: Left column housed in `<div className="lg:col-span-5 relative w-full h-full">`, stretching naturally across the grid row.
  - Pinned Behavior: Anchored via `lg:sticky lg:top-[110px]` clearing the compact sticky header at 110px with zero layout jumps, zero blank spaces, and GPU-accelerated frame rates. The left column remains pinned while the user scrolls through the entire right column, seamlessly unstitching when card 06 reaches the bottom.
- **Card Scrub Reveals**:
  - Target: `.featured-activity-card`
  - Tween: `fromTo(card, { x: 20, autoAlpha: 0.35, borderLeftColor: "rgba(226, 232, 240, 0.8)" }, { x: 0, autoAlpha: 1, borderLeftColor: "#B79045", ease: "power2.out", scrollTrigger: { trigger: card, start: "top 85%", end: "top 60%", scrub: 0.4 } })`
- **Mobile Fallback (`< 1024px`)**: Unpinned vertical stack with standard natural flow and static border styling.

---

### Animation 3: Pinned Horizontal Scroll Track
- **Component**: [`HomeGalleryPreview.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/sections/home/HomeGalleryPreview.tsx)
- **Target Route**: Homepage Section 8 (Gallery Preview — "Moments from our work").
- **Track Structure**: Single-row flex container (`display: flex; flex-nowrap; gap: 1.5rem; width: max-content`) holding 8 approved community photographs.
- **Desktop Horizontal Pinning (`min-width: 1024px`)**:
  - Pinning Trigger: `trigger: containerRef.current`, `pin: true`, `scrub: 1`, `start: "top 80px"`, `invalidateOnRefresh: true`
  - Horizontal Translation: `x: () => -(trackRef.scrollWidth - wrapperRef.clientWidth)`
  - Scroll Length: `end: () => "+=" + (trackRef.scrollWidth - wrapperRef.clientWidth)`
- **Nested Parallax Shift**:
  - Target: `.gallery-card-inner-img` inside each `.gallery-horizontal-card`
  - Linked to horizontal scroll tween via `containerAnimation: horizontalTween`
  - Tween: `fromTo(img, { xPercent: -8 }, { xPercent: 8, ease: "none", scrollTrigger: { trigger: card, containerAnimation: horizontalTween, start: "left right", end: "right left", scrub: true } })`
- **Mobile & Reduced-Motion Fallback**: Section is not pinned. Rendered as a smooth, touch-scrollable horizontal track (`overflow-x-auto snap-x snap-mandatory scrollbar-none`) with individual cards snapping into view.

---

### Animation 4: Scroll-Linked Scrub Progress & Process Spine

#### Target A: "How we work" 5 Operating Principles
- **Component**: [`AboutPrinciples.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/sections/about/AboutPrinciples.tsx)
- **Target Route**: About Page (`/about` Section 3).
- **Spine Structure**: Central vertical line on desktop (`md:left-1/2 md:-translate-x-1/2`) and left-aligned on mobile (`left-5 sm:left-7`).
  - Static background track: `w-1 bg-[#EAF2FA] rounded-full`
  - Active progress overlay: `w-1 bg-[#B79045] rounded-full origin-top scale-y-0`
- **Progress Line Scrub**:
  - Trigger: `trigger: spineContainerRef.current`, `start: "top 70%"`, `end: "bottom 60%"`, `scrub: 0.4`
  - Tween: `fromTo(progressLineRef, { scaleY: 0 }, { scaleY: 1, ease: "none" })`
- **Node Activation**:
  - Badge: Border changes to `#B79045`, background fills to `#1E63B8`, text turns white, and badge scales `1.08`.
  - Card text: Animates `y: 16 -> 0`, `autoAlpha: 0.4 -> 1` (`scrub: 0.3`).

#### Target B: Article Reading Progress Bar
- **Component**: [`ArticleReadingProgress.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/blog/ArticleReadingProgress.tsx)
- **Target Route**: Blog Article Detail Template (`/blog/[slug]`).
- **Placement**: Fixed bar at the top edge of the window (`fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200/40`).
- **Progress Scrub**:
  - Target: `<article id="blog-article-content">`
  - Trigger: `trigger: targetArticle`, `start: "top 100px"`, `end: "bottom bottom"`, `scrub: 0.2`
  - Tween: `fromTo(barRef, { scaleX: 0 }, { scaleX: 1, ease: "none" })`

---

### Animation 5: ScrollTrigger Batch & Section Reveals Across Pages
- **Component**: [`ScrollReveal.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/animation/ScrollReveal.tsx)
- **Core Parameters**:
  - Section Headers: `y: 20`, `autoAlpha: 0`, `duration: 0.6`, `start: "top 85%"`, `once: true`.
  - Staggered Card Grids: `y: 32`, `autoAlpha: 0`, `duration: 0.65`, `stagger: 0.12`, `ease: "power2.out"`, `start: "top 85%"`, `once: true`.
- **Targeted Sections**:
  - **Homepage**:
    - Section 2: Intro split reveal ([`HomeIntro.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/sections/home/HomeIntro.tsx)).
    - Section 3: Programmes header & 4-card grid ([`HomeProgrammes.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/sections/home/HomeProgrammes.tsx)).
    - Section 5: Our Approach header & 4 principle cards ([`HomeApproach.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/sections/home/HomeApproach.tsx)).
    - Section 9: Blog preview header & 3-card grid ([`HomeBlogPreview.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/sections/home/HomeBlogPreview.tsx)).
  - **About Page (`/about`)**:
    - Purpose & Vision split cards ([`AboutPurpose.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/sections/about/AboutPurpose.tsx)).
    - 4 Core Objectives cards ([`AboutPurpose.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/sections/about/AboutPurpose.tsx)).
    - 4 Priorities / Focus Areas cards ([`AboutFocusAreas.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/sections/about/AboutFocusAreas.tsx)).
    - 3 Geographic Location cards ([`AboutGeography.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/sections/about/AboutGeography.tsx)).
  - **Programmes Index (`/programs`)**:
    - 4-card detailed programme grid ([`src/app/programs/page.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/app/programs/page.tsx)).
  - **Blog Index (`/blog`)**:
    - Category-filtered articles grid ([`BlogIndexClient.tsx`](file:///c:/Users/admin/Desktop/antigravity%20projects/ABWA%20World/src/components/blog/BlogIndexClient.tsx)).
