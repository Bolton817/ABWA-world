# ABWA World — Route and Asset Inventory

This document defines the comprehensive route map, page purposes, hero image requirements, and asset organization for the ABWA World website rebuild, per TDD Modules 008, 010, 016, and 018.

---

## 1. Route Map & Page Specifications

| Route Path | Page Title / Purpose | Hero Requirement | Meta Description Target | Primary CTA |
| :--- | :--- | :--- | :--- | :--- |
| `/` | **Home**: Complete introduction to ABWA | Image Hero (`/images/heroes/hero-home.webp`) | Core organisation overview (144 chars) | Explore Our Programmes (`/programs`) |
| `/about` | **About ABWA**: Story, purpose, focus areas | Image Hero (`/images/heroes/hero-about.webp`) | 2015 story, mission, focus areas (135 chars) | Explore Our Programmes (`/programs`) |
| `/programs` | **Programmes Index**: Filterable directory | Image Hero (`/images/heroes/hero-programs.webp`) | Programmes in Nairobi, Machakos, Makueni (145 chars) | Contact ABWA (`/contact`) |
| `/programs/youth-empowerment` | **Youth Empowerment & Skills**: Mathare | Image Hero (`/images/programs/youth-hero.webp`) | Art, music, learning, environmental action (148 chars) | Ask about the youth programme (`/contact?topic=youth`) |
| `/programs/womens-empowerment-sustainable-agriculture` | **Women's Farming & Empowerment**: Kangundo | Image Hero (`/images/programs/agriculture-hero.webp`) | Sustainable farming & leadership conversations (143 chars) | Ask about this programme (`/contact?topic=women-agriculture`) |
| `/programs/umisiiyu-women-group` | **Umisiiyu Women Group**: Kibwezi | Image Hero (`/images/programs/umisiiyu-hero.webp`) | Vegetable farming in dry climate (136 chars) | Ask about the Umisiiyu project (`/contact?topic=umisiiyu`) |
| `/programs/environmental-conservation` | **Environmental Conservation**: Trees & Recycling | Image Hero (`/images/programs/environment-hero.webp`) | Tree planting & creative recycling (113 chars) | Contact ABWA (`/contact`) |
| `/get-involved` | **Get Involved**: Multi-path engagement | Image Hero (`/images/heroes/hero-get-involved.webp`) | Volunteer, partner, give, share (134 chars) | Contact ABWA (`/contact`) |
| `/volunteer` | **Volunteer With ABWA**: Expectations & enquiry | Image Hero (`/images/heroes/hero-volunteer.webp`) | Honest volunteer information (157 chars) | Send my enquiry (In-page form) |
| `/donate` | **Support Our Work**: Transparent giving | Image Hero (`/images/heroes/hero-donate.webp`) | Transparent community support (120 chars) | Ask About Giving (`/contact?topic=giving`) |
| `/partner-with-us` | **Partner With Us**: Institutions & schools | Image Hero (`/images/heroes/hero-partner.webp`) | Collaboration & funding opportunities (138 chars) | Send partnership enquiry (In-page form) |
| `/impact` | **Our Impact**: Framework & evidence | Image Hero (`/images/heroes/hero-impact.webp`) | Honest metrics & community stories (125 chars) | Get Involved (`/get-involved`) |
| `/stories` | **Community Stories**: Authentic narratives | Image Hero (`/images/heroes/hero-stories.webp`) | Real people and places with consent (98 chars) | Get Involved (`/get-involved`) |
| `/gallery` | **Photo Gallery**: Moments from projects | Image Hero (`/images/heroes/hero-gallery.webp`) | Consent-cleared project photos (100 chars) | Get Involved (`/get-involved`) |
| `/blog` | **Blog Index**: Ideas & lessons | Image Hero (`/images/heroes/hero-blog.webp`) | Sustainable farming, youth, volunteering (97 chars) | Contact ABWA (`/contact`) |
| `/blog/sustainable-agriculture-resilient-communities-kenya` | **Launch Article 1**: Sustainable Farming | Image Hero (`/images/blog/farming-article.webp`) | Practical farming, soil, water care (150 chars) | Explore women's agriculture (`/programs/womens-empowerment-sustainable-agriculture`) |
| `/blog/youth-empowerment-creativity-skills-community-action` | **Launch Article 2**: Youth Empowerment | Image Hero (`/images/blog/youth-article.webp`) | Arts, skills, safe youth programs (147 chars) | Explore youth programme (`/programs/youth-empowerment`) |
| `/blog/ethical-community-volunteering-in-kenya` | **Launch Article 3**: Ethical Volunteering | Image Hero (`/images/blog/volunteering-article.webp`) | What ethical volunteering looks like (154 chars) | Send volunteer enquiry (`/volunteer`) |
| `/faq` | **Frequently Asked Questions**: 12 Q&As | Image Hero (`/images/heroes/hero-faq.webp`) | Straight answers about ABWA (123 chars) | Contact ABWA (`/contact`) |
| `/contact` | **Contact ABWA**: Phone, location, form | Image Hero (`/images/heroes/hero-contact.webp`) | Nairobi phone & topic contact form (141 chars) | Send message (In-page form) |
| `/privacy` | **Privacy Policy**: Plain data practices | **No Photo Hero** (Text-first header) | Data collection and user rights (86 chars) | Contact ABWA (`/contact`) |
| `/terms` | **Terms and Conditions**: Website usage | **No Photo Hero** (Text-first header) | Terms of use, enquiries, content (96 chars) | Contact ABWA (`/contact`) |
| `/search` | **Search Results**: Client-side query search | Compact Header | Search results across published content | Back to Search / Home |
| `/not-found` | **404 Not Found**: Recovery page | Compact Recovery Layout | Custom branded error recovery | Go to homepage (`/`) |

---

## 2. Image Asset Structure (`public/images/`)

All images must reside strictly under `public/images/` and be referenced using absolute local paths:

```
public/images/
├── brand/
│   ├── logo.svg               # Primary ABWA logo
│   └── logo-white.svg         # Inverted white logo for dark footers/overlays
├── heroes/
│   ├── hero-home.webp         # Authentic group collaboration photo
│   ├── hero-about.webp        # Team & community photo
│   ├── hero-programs.webp     # Active project session photo
│   ├── hero-get-involved.webp # Volunteers and community working together
│   ├── hero-volunteer.webp    # Community activity
│   ├── hero-donate.webp       # Practical community farming/learning
│   ├── hero-partner.webp      # Collaboration / workshop
│   ├── hero-impact.webp       # Community output / tree planting
│   ├── hero-stories.webp      # Authentic community portrait
│   ├── hero-gallery.webp      # Event / group snapshot
│   ├── hero-blog.webp         # Hands-on learning / workshop
│   ├── hero-faq.webp          # Welcoming community context
│   └── hero-contact.webp      # Nairobi / community scene
├── programs/
│   ├── youth-hero.webp        # Mathare youth creative workshop
│   ├── agriculture-hero.webp  # Kangundo women farming session
│   ├── umisiiyu-hero.webp     # Kibwezi kitchen garden
│   └── environment-hero.webp  # Tree planting / recycling initiative
├── blog/
│   ├── farming-article.webp   # Vegetables & irrigation in Kenya
│   ├── youth-article.webp     # Music/art youth workshop
│   └── volunteering-article.webp # Volunteers learning alongside community
├── gallery/
│   └── [categorized images with consent records]
└── icons/
    └── [custom SVG UI icons as needed]
```
