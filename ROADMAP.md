# Emanuel Cruzat Portfolio — Project Roadmap

**Stack:** React + TypeScript + Vite + React Router + CSS Modules · Motion/GSAP/OGL/MathJS as needed · Formspree · GitHub Pages + GitHub Actions · Vitest + React Testing Library

**Status:** All 13 Phases Complete! Production ready & GitHub Actions deployment workflow configured.

---

## Prerequisite Status

- `design.md` — ✅ Modern Developer Visual System (Black/White/Gray + Tech Green accent)
- `prompts/*.md` — ✅ All 7 component prompt files available
- Placeholder Content Model — ✅ Defined in Phase 2


---

## Phase overview

| Phase | Name                                | Focus                                                                       |
| ----- | ----------------------------------- | --------------------------------------------------------------------------- |
| 0     | Foundation & Scaffolding            | Repo, Vite/TS/React setup, routing skeleton, GitHub Pages plumbing          |
| 1     | Design Tokens & Theming             | Colors, type scale, spacing, light/dark theme system, persistence           |
| 2     | Content Model                       | Typed local content module — profile, socials, tools, experience, projects  |
| 3     | Shared Shell                        | Header, footer, nav, theme switcher, shared contact CTA                     |
| 4     | Referenced Components               | Build/port the 7 `@`-referenced components in isolation                     |
| 5     | Home Page                           | Assemble intro, marquee, experience, selected projects, CTA                 |
| 6     | Graphic Design & Dev Projects Pages | Hero variants, search/filter, empty state, ChromaGrid grids                 |
| 7     | Contact Page                        | Two-column layout, Stepper form, validation, review step                    |
| 8     | Contact Delivery (Formspree)        | Wiring, env/secret handling, sending/success/error states                   |
| 9     | Accessibility & Motion Preferences  | Keyboard nav, focus states, landmarks, reduced-motion/transparency/contrast |
| 10    | Responsive Pass                     | Desktop → tablet → mobile across every page                                 |
| 11    | Automated Testing                   | Vitest + RTL coverage per acceptance criteria                               |
| 12    | Deployment                          | GitHub Actions workflow, Pages config, base path, secrets                   |
| 13    | Asset Optimization & Final Polish   | Image compression, alt text audit, final QA against acceptance criteria     |

---

## Phase 0 — Foundation & Scaffolding

**Goal:** A running, empty-but-correct app skeleton that already knows it will live on GitHub Pages.

- Init Vite + React + TypeScript project
- Install React Router, set up hash-based routing (or GitHub Pages-compatible fallback) from day one — retrofitting routing later is painful
- Set relative Vite `base` so it resolves correctly at `https://<owner>.github.io/<repo>/`
- Set up CSS Modules + a global tokens file (empty shell for now, filled in Phase 1)
- Create route stubs: `/`, `/graphic-design`, `/dev-projects`, `/contact` — blank pages, just proving routing works
- `.gitignore`, `.env.example` (for the Formspree endpoint var), README skeleton
- Confirm `npm run build` and `npm run preview` work locally with the relative base

**Deliverable:** Blank site with working navigation between four routes, buildable and previewable.

**Blocking risk:** Getting hash routing + relative base wrong here compounds into every later phase, so this gets verified before anything else is built on top.

---

## Phase 1 — Design Tokens & Theming

**Goal:** The Apple-inspired visual language exists as reusable tokens, and light/dark switching works end-to-end.

- Translate `AppleDesign_SKILLS.md` guidance into CSS custom properties: type scale, tracking, line-height, spacing, ocean-blue accent, translucency levels, blur values, motion durations/easing
- Implement theme system: `light` / `dark` / `system` — read `prefers-color-scheme` on first visit, persist the user's explicit choice (localStorage) after that
- Theme switcher component (logic only here; placed into the header shell in Phase 3)
- Verify tokens respond correctly to `prefers-reduced-transparency` and `prefers-contrast` at the token level (not yet wired into every component — that's Phase 9, but the token _foundation_ needs to support it now)

**Deliverable:** A documented token set and a working theme toggle on a blank page, with persistence surviving a refresh.

**Dependency:** Needs `AppleDesign_SKILLS.md` content to do this accurately rather than guessing at "Apple-inspired."

---

## Phase 2 — Content Model

**Goal:** One typed source of truth for all site content, so every later phase pulls from data instead of hardcoding strings.

- Define TypeScript types: `Profile`, `SocialLinks`, `Tool`, `ExperienceRecord`, `ProjectRecord`
- `ProjectRecord` per spec: id, title, category, year/date, image URL + alt text, destination URL, accent color, optional `featured` flag
- Populate with clearly labeled placeholders (e.g. `"[PLACEHOLDER — portrait image]"`, `"[PLACEHOLDER — résumé URL]"`) everywhere real assets/content aren't supplied yet
- Structure it so swapping placeholders for real content later is a data-only change, not a code change

**Deliverable:** A single content module every component in later phases imports from.

---

## Phase 3 — Shared Shell

**Goal:** Header, footer, and the shared contact CTA exist and render on every route.

- Header: "Emanuel Cruzat" as text (not a logo/monogram), nav links to all four routes, theme switcher slotted in from Phase 1
- Footer: logo only, social links (LinkedIn, GitHub, Instagram, email) pulled from the content model
- Shared contact CTA block: collaboration-focused copy + `Contact me` SpecularButton → links to `/contact`
- Active-route styling in nav
- This is also where semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`) get established as a pattern, ahead of the full accessibility pass in Phase 9

**Deliverable:** Every route now has consistent chrome, navigable and themed.

---

## Phase 4 — Referenced Components

**Goal:** Each `@`-referenced component built and verified in isolation before being dropped into real pages, so problems get caught in a small surface area instead of a full page layout.

Components, in a sensible build order (simplest/most-reused first):

1. `ShinyText` — animated ocean-blue label/role text
2. `SpecularButton` — CTA button (résumé, contact)
3. `ChromaGrid` — project-card grid layout
4. `GradualBlur` — page-edge blur treatment
5. `ClickSpark` — restrained click interaction (Graphic Design hero)
6. `PixelBlast` — background treatment (Dev Projects hero)
7. `Stepper` — multi-step form shell (contact form logic comes in Phase 7; this phase just builds the stepping mechanism)

Each gets a throwaway test route/page to visually confirm it works before deletion, so it doesn't leave a stray dev-only route in the shipped nav.

**Deliverable:** Seven working, isolated components ready to be composed into real pages.

**Dependency:** This is the phase that needs the actual `prompts/*.md` reference files most directly — building these from the names alone risks getting the intended interaction/visual wrong.

---

## Phase 5 — Home Page

**Goal:** Assemble the five home sections from already-built pieces.

- Introduction: portrait, name, `ShinyText` role line, `SpecularButton` → résumé, social links
- Tool marquee: continuously scrolling horizontal tool list, pulled from content model
- Experience: `Background` label + `Experience` heading + description, records showing logo/role/organization/year
- Selected Projects: `My work` label + heading, featured projects (via `featured` flag) in `ChromaGrid`
- Shared contact CTA (from Phase 3)

**Deliverable:** Fully composed, content-driven home page.

---

## Phase 6 — Graphic Design & Dev Projects Pages

**Goal:** The two project-listing pages, including working search/filter.

- Graphic Design: `ClickSpark` hero, `My work` label, `Graphic Design` heading, search input, `ChromaGrid` filtered to `Graphic Design` category
- Dev Projects: `PixelBlast` hero, same pattern, `Dev Project` category
- Shared search logic (title/category/year matching) built once, reused across both pages
- Empty state + clear-search action when a search yields no matches
- Shared contact CTA + footer on both

**Deliverable:** Both listing pages functional, searchable, with correct empty-state handling.

---

## Phase 7 — Contact Page

**Goal:** Two-column desktop layout with a validated multi-step form.

- Desktop: intro/content + portrait/socials on one side, form on the other; clean stacking on smaller screens (full responsive polish still comes in Phase 10, but the stacking behavior gets built now since it's structural, not cosmetic)
- `Stepper` wired to collect: full name → email → message → review & submit
- Required-field validation + email format validation before allowing step progress
- Backward navigation preserves already-entered values
- Review step shows entered details before submit

**Deliverable:** A working, validated, navigable contact form — not yet connected to Formspree (that's Phase 8).

---

## Phase 8 — Contact Delivery (Formspree)

**Goal:** The form actually sends email, with proper state handling and secret management.

- Formspree endpoint stored in local `.env` for dev, GitHub Actions secret for production — never committed
- Configure Formspree's spam protection
- Wire submit action from the Stepper's final step
- Implement sending / success / recoverable-error UI states
- Confirm no credentials end up in the repo (double-check `.gitignore` and build output)

**Deliverable:** End-to-end working contact form against a real (or test) Formspree endpoint.

---

## Phase 9 — Accessibility & Motion Preferences

**Goal:** A full pass ensuring every interactive surface meets the spec's accessibility requirements — not just the pieces touched incidentally in earlier phases.

- Keyboard-only navigation audit across all routes and components
- Visible focus states everywhere (nav, buttons, form fields, search, theme switcher)
- Semantic landmark audit (confirm Phase 3's pattern held throughout)
- Descriptive alt text audit (portrait, project images, logos)
- `prefers-reduced-motion`: verify `ClickSpark`, `PixelBlast`, `ShinyText`, marquee, and any Stepper transitions degrade to short/no decorative motion
- `prefers-reduced-transparency` and `prefers-contrast`: verify token-level fallbacks (from Phase 1) actually apply everywhere translucency/blur is used

**Deliverable:** Full site passes a manual accessibility + preference-emulation walkthrough.

---

## Phase 10 — Responsive Pass

**Goal:** Systematic verification (not just incidental correctness) across desktop, tablet, and mobile.

- Home, Graphic Design, Dev Projects, Contact — each checked at desktop/tablet/mobile breakpoints
- Marquee, ChromaGrid, Stepper, and the Contact two-column layout get particular attention since they're the most layout-complex pieces
- Confirm blur/translucency treatments don't degrade legibility at narrow widths
- Fix any crowding or hierarchy loss found

**Deliverable:** Site is legible and usable at all three target widths, verified page by page.

---

## Phase 11 — Automated Testing

**Goal:** Vitest + RTL coverage matching the spec's explicit list.

- Theme persistence (system preference on first visit, remembers explicit choice after)
- Route navigation across all four routes
- Project search + empty state (both listing pages)
- Contact step validation (required fields, email format)
- Backward navigation with preserved values
- Formspree success/error states

**Deliverable:** Passing test suite covering every item the spec calls out.

---

## Phase 12 — Deployment

**Goal:** Live, working GitHub Pages deployment via Actions.

- GitHub Actions workflow: build on push to `main`, publish to GitHub Pages
- Confirm the relative Vite base (Phase 0) actually resolves correctly at the real Pages URL, not just locally
- Confirm hash routing survives direct links and refreshes on the live URL (this is the one thing that's very hard to fully verify until it's actually deployed)
- Move Formspree endpoint into GitHub Actions secrets for the production build
- Verify no secrets leak into the built bundle or repo history

**Deliverable:** Live site at the GitHub Pages URL, every route reachable directly.

---

## Phase 13 — Asset Optimization & Final Polish

**Goal:** Final pass against every acceptance criterion before calling this done.

- Compress/optimize all committed images, confirm modern-format usage where practical
- Final alt-text sweep
- Full acceptance-criteria checklist walkthrough (see below) against the live deployed site, not just local dev
- Swap in any real content that's arrived by this point (portrait, résumé link, project data, social URLs) — if some placeholders are still outstanding, document exactly what's left as placeholder so it's a clean handoff rather than a silent gap

**Deliverable:** Production-ready, deployed site meeting every acceptance criterion in the spec.

---

## Acceptance criteria (from spec, for final verification)

- [ ] `npm run build` produces a production-ready static bundle
- [ ] GitHub Actions deployment succeeds from `main`; every route works from the published URL
- [ ] All navigation, résumé/social links, project links, search, theme persistence, and contact form states work as specified
- [ ] Layout legible/usable at desktop, tablet, mobile widths
- [ ] Reduced-motion, reduced-transparency, increased-contrast preferences honored
- [ ] Vitest suite passes for shared interactions, search, theme, and contact flow

---

## Suggested working order note

Phases 0–3 are close to strictly sequential (each depends on the last). Phase 4's seven components can be built in roughly any internal order, but all should land before Phase 5 starts, since Home is the page that draws on the most of them at once. Phases 9–11 are framed as dedicated passes rather than "build it right the first time" specifically because motion/accessibility/responsive correctness is easy to get partially right incidentally and hard to verify was gotten _completely_ right without a systematic sweep — that's deliberate, not padding.
