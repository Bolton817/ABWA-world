# ABWA World — Animation & Motion Distribution Map

This document establishes the official motion language, performance boundaries, and route distribution for GSAP and ScrollTrigger animations on the ABWA World website rebuild, per TDD Modules 099, 100, 101, 102, 108, 109, and 110.

---

## 1. Core Motion Principles

1. **Hierarchy & Clarity First**: Motion is used solely to communicate structure, sequence, and interaction feedback—never as empty visual decoration.
2. **Progressive Enhancement**: Content is always visible by default in HTML/CSS. If JavaScript fails or is disabled, all text, headings, images, and CTAs remain fully legible.
3. **Strict Accessibility**: Respects system `prefers-reduced-motion: reduce`. All vestibular triggers, rapid transforms, parallax offsets, and auto-advancing carousels are disabled under reduced motion.
4. **Compositor Efficiency**: Only animate GPU-accelerated properties (`transform` and `opacity`). Avoid animating `top`, `left`, `width`, or `height`.
5. **Lifecycle Hygiene**: All animations and ScrollTriggers are created inside `@gsap/react` (`useGSAP`) with scoped element references and clean unmount disposal to prevent memory leaks across Next.js App Router navigation.

---

## 2. Animation Distribution Matrix by Route

| Route / Area | Approved Motion Effect | Trigger | Desktop Behavior | Mobile / Reduced-Motion Fallback |
| :--- | :--- | :--- | :--- | :--- |
| **Home Hero** | Staggered text & CTA reveal | Page load | Eyebrow, H1, subtitle, and CTA buttons animate in sequence (0.5s duration, `stagger: 0.1s`). | Instant display or gentle 0.2s fade. |
| **Home Featured Strip** | Subtle image layer parallax | ScrollTrigger | Clipped container with subtle image offset (`yPercent: -10`). Foreground text stationary. | Parallax disabled; standard static crop. |
| **Home Section Reveals** | Vertical fade-in elevation | ScrollTrigger | Major sections elevate (`y: 24 -> 0`, `opacity: 0 -> 1`) when reaching `top 85%` of viewport. | Instant display; normal flow. |
| **Programmes Index** | Staggered card cascade | ScrollTrigger | Programme cards cascade in sequence (`stagger: 0.08s`). | Static grid without stagger. |
| **Programme Detail** | Hero entry & section fade | Page load & scroll | Clean header entrance and subtle section reveals. | Standard static layout. |
| **Blog Index & Articles** | Subtle reading entrance | Page load & scroll | Low-motion entry (0.3s fade) to preserve reading comfort and low distraction. | Instant display. |
| **Gallery Page** | Microinteractions & Lightbox | Hover & click | Micro hover zoom (`scale: 1.02`), smooth modal fade for lightbox overlay. | Tap states; instant modal reveal. |
| **FAQ / Contact / Legal** | Motion Calm | User click / focus | Native/CSS smooth accordion expansion; form feedback; zero parallax or scrub effects. | Standard CSS transition. |

---

## 3. Motion Tokens

- **Durations**:
  - Microinteractions (buttons, hovers): `0.2s`
  - Standard entrances / section reveals: `0.5s – 0.6s`
  - Pinned / horizontal sequences (if used): `1.0s – 1.2s`
- **Easing**:
  - Entrances: `"power2.out"`
  - Exits / dropdowns: `"power1.inOut"`
  - Hover states: `cubic-bezier(0.16, 1, 0.3, 1)`
