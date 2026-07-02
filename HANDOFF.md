# Gilleland Cleaning Services — Agent Handoff

Copy everything below into a new Cursor chat to continue this project.

---

## Project overview

Marketing + intake site for **Gilleland Cleaning Services, LLC** (production domain: **sgcleans.com**).

**Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, deployed on Vercel. **Resend** planned for form email (not wired yet).

**Repo path:** `c:\Users\edger\OneDrive\Documents\gcs`

**Run locally:** `npm run dev` → http://localhost:3000

Read `AGENTS.md` before writing Next.js code — this project uses a non-standard Next.js version; check `node_modules/next/dist/docs/` for current APIs.

---

## What's built (Prompts 1, 1b, 2, 3)

### Routes

| Route | Layout group | Footer? | Status |
|---|---|---|---|
| `/` | `(home)` | No | Complete — fork landing page |
| `/residential` | `(site)` | Yes | Complete — full page (Prompt 2) |
| `/commercial` | `(site)` | Yes | Complete — full page (Prompt 3) |

**Stub/missing routes (nav links 404):** `/services`, `/story`, `/contact`

### Homepage (`/`)

- **Not a modal anymore** — the fork IS the page (`components/HomeLanding.tsx`)
- Two large image cards: Residential → `/residential`, Commercial → `/commercial`
- Images: `/residential-hero.png`, `/commercial-hero.png`
- Desktop: no-scroll viewport fit via `HomeViewport` + `html.home-landing` CSS
- **No footer** on homepage (intentional)
- **No logo** on homepage (black-box PNG issue; logo lives only where needed elsewhere)

### Residential (`/residential`)

**Hero:** Split-frame layout (matches commercial) — cream content panel left, image right, gold top accent, border + shadow frame.

- Image: `/public/residential-page-hero.png` (kitchen; upscaled version)
- Headline: **"Give yourself back your time."**
- Label: **Residential** (gold, semibold)
- CTA: solid gold `GoldButton` → `#estimate`

**Sections:** Trust strip → Services grid (with image hero slots) → Trust quote → How it works → Estimate CTA band (`#estimate`)

**Service card images (NOT YET ADDED to `/public/`):**
- `/residential-service-standard.png`
- `/residential-service-deep.png`
- `/residential-service-move.png`

**TODO in code:** Estimate/CTA buttons need questionnaire routing (Prompt 4)

### Commercial (`/commercial`)

**Hero:** Same split-frame layout as residential.

- Image: `/public/commercial-hero.png`
- Headline: **"A standard your facility can rely on."**
- Label: **Commercial** (gold, semibold)
- Subhead: Two sentences, no em dash
- CTA: `OutlineGoldButton` (light variant on cream) → `#quote`

**Sections:** Pricing strip ($0.10/sqft) → Why Gilleland → Facility types → How it works → Quote CTA (`#quote`)

**TODO in code:** Quote buttons need questionnaire routing (Prompt 4)

---

## Design system (do not redefine)

### Fonts (via `next/font` in `app/layout.tsx`)

- **Fraunces** → `--font-display` (headings)
- **Work Sans** → `--font-body` (UI, body)

Tailwind: `font-display`, `font-body`

### Colors (in `app/globals.css` `@theme`)

| Token | Hex | Use |
|---|---|---|
| cream | #F7F4EC | Page background |
| stone | #E8E2D3 | Cards, bands |
| line | #E2DBCB | Borders |
| ink | #2C2A26 | Headings, footer |
| body | #4A463E | Body copy |
| taupe | #8A8172 | Muted text, eyebrows |
| gold | #C4A468 | Accent, CTAs |
| gold-tint | #D8C9A3 | Light gold |
| slate | #3C3F45 | Commercial register |

### Shared components (`components/`)

- `Nav.tsx` — wordmark "GILLELAND Cleaning Services", links, phone, mobile hamburger
- `Footer.tsx` — ink bg, 3 zones, gold hairline (only on `(site)` pages)
- `GoldButton.tsx` — solid gold CTA (residential)
- `OutlineGoldButton.tsx` — outline gold CTA, `variant="light"` for cream bg, `variant="dark"` for ink bg
- `HomeLanding.tsx` — homepage fork cards
- `HomeViewport.tsx` — homepage desktop no-scroll class toggle
- `PageHero.tsx` — **unused legacy**, can delete if not needed

### Layout architecture

```
app/
  layout.tsx          → fonts, metadata, bare <body>
  (home)/
    layout.tsx        → Nav + main (no footer)
    page.tsx          → HomeLanding
  (site)/
    layout.tsx        → Nav + main + Footer
    residential/page.tsx
    commercial/page.tsx
  globals.css
```

---

## Public assets (`/public/`)

| File | Used for |
|---|---|
| `logo.png` | Has baked-in black bg — avoid on cream surfaces |
| `hero.png` | Legacy |
| `residential-hero.png` | Homepage residential fork card |
| `commercial-hero.png` | Homepage commercial fork card + commercial page could share |
| `residential-page-hero.png` | `/residential` hero (kitchen) |
| `residential-service-*.png` | **Missing** — service card heroes on residential page |

---

## Known issues / decisions

1. **`logo.png` is not transparent** — black rectangle on cream. Do not put on cream backgrounds without re-exporting with alpha channel.
2. **Route groups** — empty `app/commercial/` or `app/residential/` folders at root will cause Next.js duplicate route errors. Only use `(site)/` paths.
3. **Global CSS** sets `h1–h6 { color: ink }` and `p { color: body }` — dark hero text needs explicit overrides or cream-panel layouts (current approach).
4. **Nav links** to `/services`, `/story`, `/contact` are placeholders.

---

## What's NOT built yet (Prompts 4 & 5)

Per original 5-prompt plan (user has prompts in Downloads):

- **Prompt 4:** Residential + commercial questionnaires / intake forms, wire CTAs:
  - Residential `#estimate` buttons → residential questionnaire
  - Commercial `#quote` buttons → commercial questionnaire
- **Prompt 5:** Likely scheduler, Resend email, or final polish (check user's `gilleland-prompt-04-*.md` and `gilleland-prompt-05-*.md`)

**Resend** mentioned in original spec but not installed.

---

## Recent UX decisions (for continuity)

- Homepage = fork only, no footer, no duplicate modal
- Residential & commercial heroes use **matching split-frame** layout (cream panel + image, gold bar, border, shadow)
- Commercial tone: structured, B2B, slate sections, outline CTAs, no exclamation points
- Residential tone: warm, editorial, solid gold CTAs
- User disliked: text-over-image heroes (legibility), full-bleed Coverall-style overlay, dark navbar with logo

---

## Suggested next task

Ask the user for **Prompt 4** (`gilleland-prompt-04-*.md`) and/or residential service tile images (`residential-service-standard.png`, etc.).

When implementing Prompt 4:
1. Replace `href="#"` and `{/* TODO: route to ... questionnaire in Prompt 4 */}` in both pages
2. Keep `GoldButton` / `OutlineGoldButton` patterns
3. Do not rebuild Nav/Footer/fonts/colors

---

## Quick verify checklist

```bash
npm run build   # should pass — 4 routes: /, /residential, /commercial, /_not-found
```

- [ ] `/` — two fork cards, no footer, desktop fits viewport
- [ ] `/residential` — split hero, all 6 sections, footer
- [ ] `/commercial` — split hero, all 6 sections, footer
- [ ] CTAs scroll to `#estimate` / `#quote` on same page
