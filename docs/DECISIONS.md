# ABWA World — Decision Register

This register documents all technical, architectural, brand, and content decisions for the ABWA World website rebuild, tracking their authority, rationale, and current status (CONFIRMED, PROPOSED, VERIFY, DEFERRED) in accordance with TDD Module 011.

---

## Decision Status Definitions
- **CONFIRMED**: Backed by verified client facts or authoritative specifications in the TDD/Copy Deck. Must be implemented as stated.
- **PROPOSED**: Architectural or design recommendations provided in the TDD baseline. Implemented as the baseline standard unless amended.
- **VERIFY**: Items drawn from draft sources or legacy materials requiring explicit client sign-off before public release.
- **DEFERRED**: Features explicitly scoped out of the initial build to avoid premature complexity or unverified integrations.

---

## Register

### 1. Architectural & Technical Decisions

| ID | Topic | Decision | Status | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **DEC-001** | Framework | Next.js App Router with TypeScript | **CONFIRMED** | High performance, static generation capabilities, built-in SEO metadata API, robust server/client boundaries. |
| **DEC-002** | Styling | Tailwind CSS + CSS custom property tokens | **CONFIRMED** | Rapid consistent development, design token centralized maintenance, utility-first layout control. |
| **DEC-003** | Animation | GSAP + ScrollTrigger via `@gsap/react` | **CONFIRMED** | Professional scroll-linked interaction and high-performance animations, scoped within React client components with strict lifecycle cleanup. |
| **DEC-004** | Content Architecture | Content-as-code (typed TS / Markdown / MDX) | **CONFIRMED** | Zero overhead, version-controlled copy, no database needed for initial launch; clean migration path to headless CMS if required later. |
| **DEC-005** | Image Strategy | Local assets stored strictly in `public/images/` | **CONFIRMED** | Ensures stability, privacy, performance optimization via `next/image`, and prevents broken external links. |

---

### 2. Brand & Identity Decisions

| ID | Topic | Decision | Status | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **DEC-006** | Colour Palette | Navy (`#15345A`), Blue (`#1E63B8`), Pale Blue (`#EAF2FA`), Warm Gold (`#B79045`), Ink (`#263445`), White (`#FFFFFF`) | **CONFIRMED** | Blue-led identity with white surfaces and restrained warm-gold accents, tested for WCAG 2.2 AA contrast. |
| **DEC-007** | Brand Naming | "Action for Better World Association" (formal) / "ABWA World" (site) | **CONFIRMED** | Established across TDD and Copy Deck. |
| **DEC-008** | Working Tagline | *"Transforming Lives Through Action"* | **VERIFY** | Appears on information sheets. Paired with realistic copy on how community change happens. |
| **DEC-009** | Founding Year | Founded in **2015** | **CONFIRMED** | Confirmed by TDD; supersedes legacy website's mention of 2014. |
| **DEC-010** | Official Language | British English throughout (*"Programmes"*, *"organisations"*, *"wellbeing"*) | **CONFIRMED** | Consistent international English standard specified in Copy Deck. |

---

### 3. Contact & Engagement Decision Gates

| ID | Topic | Decision | Status | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **DEC-011** | Official Phone | `+254 720 021 001` (`tel:+254720021001`) | **CONFIRMED** | Verified phone number in TDD. Legacy number `+254 733 595 906` is retired. |
| **DEC-012** | Official Email | Pending client confirmation | **VERIFY** | Old site shows `abworld80@gmail.com` and `info@abwaaworld.org`. No email published until client confirms. |
| **DEC-013** | Postal Address | P.O. Box 1204-00515 Buruburu | **VERIFY** | Kept optional; published only upon client sign-off. Street address is not inferred. |
| **DEC-014** | Donation Flow | Launch with **Version A** (direct giving enquiry) | **CONFIRMED** | No live payment integration or fake transactions until verified payment provider details are provided by ABWA. |
| **DEC-015** | Volunteer Intake | General enquiry only (no instant booking / prices) | **CONFIRMED** | Prevents false representations of active work camps or pricing before ABWA confirms dates and logistics. |

---

### 4. Deferred Features (Out of Scope for Launch)

| ID | Feature | Status | Notes |
| :--- | :--- | :--- | :--- |
| **DEC-016** | User / Member Accounts | **DEFERRED** | Unnecessary complexity for public NGO portal. |
| **DEC-017** | Online Payment Gateway | **DEFERRED** | Awaiting ABWA credentials for M-Pesa / Stripe / PayPal. |
| **DEC-018** | External Headless CMS | **DEFERRED** | Content-as-code satisfies launch requirements with higher performance and zero recurring cost. |
| **DEC-019** | Complex CRM / Mailchimp API | **DEFERRED** | Initial form handling will use clean server-side endpoints with fallback notification. |
