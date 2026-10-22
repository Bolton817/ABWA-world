# ABWA World — Legacy URL Redirects Matrix

This document records the authoritative redirection matrix implemented in `next.config.mjs` in accordance with Specification Module 096 of the ABWA World Technical Design Document (TDD v1.0).

---

## 1. Redirection Principles

1. **Preserve SEO Authority**: Ensure legacy bookmarks, backlink profiles, and Search Console indexed URLs resolve smoothly to their closest equivalent new pages.
2. **Permanent 301 Status**: All mapped redirects use permanent HTTP status 301 (`permanent: true`) to signal search engines to update their canonical indexes.
3. **No Indiscriminate Homepage Dumping**: Per TDD Module 096, old routes are never redirected blindly to the homepage. Each maps to genuine equivalent content; obsolete routes without equivalents return a deliberate, helpful 404 recovery state.
4. **Canonical Host Normalization**: Canonical production domain is strictly `https://abwaworld.org` (non-www).

---

## 2. Redirection Table

| Incoming Source Route | Target Destination | Status | Rationale |
| :--- | :--- | :--- | :--- |
| `/programmes` | `/programs` | 301 Permanent | Maps British English spelling alias to canonical directory |
| `/our-programs` | `/programs` | 301 Permanent | Legacy descriptive path |
| `/our-programmes` | `/programs` | 301 Permanent | Legacy descriptive path |
| `/programs.html` | `/programs` | 301 Permanent | Static file extension legacy link |
| `/about-us` | `/about` | 301 Permanent | Standard legacy about path |
| `/about.html` | `/about` | 301 Permanent | Static file extension legacy link |
| `/who-we-are` | `/about` | 301 Permanent | Legacy informational page alias |
| `/contact-us` | `/contact` | 301 Permanent | Standard legacy contact path |
| `/contact.html` | `/contact` | 301 Permanent | Static file extension legacy link |
| `/volunteering` | `/volunteer` | 301 Permanent | Gerund form alias to canonical volunteer route |
| `/volunteer.html` | `/volunteer` | 301 Permanent | Static file extension legacy link |
| `/donation` | `/donate` | 301 Permanent | Singular noun alias to canonical giving page |
| `/donations` | `/donate` | 301 Permanent | Plural noun alias to canonical giving page |
| `/support` | `/donate` | 301 Permanent | Generic support link to canonical giving page |
| `/support-us` | `/donate` | 301 Permanent | Descriptive support link to canonical giving page |
| `/donate.html` | `/donate` | 301 Permanent | Static file extension legacy link |
| `/partners` | `/partner-with-us` | 301 Permanent | Plural noun alias to institutional collaboration page |
| `/partner` | `/partner-with-us` | 301 Permanent | Singular noun alias to institutional collaboration page |
| `/partnership` | `/partner-with-us` | 301 Permanent | Formal noun alias to institutional collaboration page |
| `/faqs` | `/faq` | 301 Permanent | Plural FAQ abbreviation alias |
| `/faq.html` | `/faq` | 301 Permanent | Static file extension legacy link |
| `/articles` | `/blog` | 301 Permanent | Content alias mapping to editorial blog index |
| `/news` | `/blog` | 301 Permanent | Legacy news updates mapping to blog index |
| `/photos` | `/gallery` | 301 Permanent | Legacy photo archive mapping to photo gallery |
| `/gallery.html` | `/gallery` | 301 Permanent | Static file extension legacy link |
| `/our-impact` | `/impact` | 301 Permanent | Descriptive impact alias to canonical impact page |
| `/impact.html` | `/impact` | 301 Permanent | Static file extension legacy link |
| `/privacy-policy` | `/privacy` | 301 Permanent | Formal legal path alias to canonical privacy policy |
| `/terms-and-conditions` | `/terms` | 301 Permanent | Formal legal path alias to canonical terms page |
| `/terms-of-service` | `/terms` | 301 Permanent | Common service terms alias to canonical terms page |

---

## 3. Testing and Maintenance
- Configured in `next.config.mjs` under the `redirects()` lifecycle.
- Tested continuously via `scratch/audit_redirects.js`.
- Post-launch: Monitor Google Search Console 404 reports for unexpected legacy paths not covered above.
