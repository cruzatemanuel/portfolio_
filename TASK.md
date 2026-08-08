# Emanuel Cruzat Portfolio

## Project Goal

Create a polished, responsive portfolio that presents Emanuel Cruzat as a Graphic Designer and aspiring Data Engineer. The experience should feel calm, intentional, and premium: Apple-inspired visual hierarchy, system typography, subtle translucency, ocean-blue accents, and motion that supports interaction rather than distracts from the work.

The primary desktop layout must adapt gracefully to tablet and phone screens without losing hierarchy or becoming crowded.

## Deployment

Deploy the finished static site through **GitHub Pages**. The repository should include a GitHub Actions workflow that builds the production site on pushes to `main` and publishes the generated output to GitHub Pages.

- Use a relative Vite asset base so the app works at `https://<owner>.github.io/<repository>/`.
- Use hash-based client-side routing, or an equivalent GitHub Pages-compatible fallback, so direct links and refreshes do not result in a 404 page.
- Do not place private keys or credentials in the repository. Store build-time configuration in GitHub Actions secrets where appropriate.

## Required Features

- Light and dark themes, respecting the system preference on first visit and remembering the user’s selection.
- A contact flow that lets visitors enter their name, email address, and message, review their details, and submit the message by email through a static-site-compatible service.
- A gradual blur treatment across the page chrome, used sparingly so content remains readable.
- Keyboard-accessible navigation and controls, visible focus states, semantic landmarks, descriptive image alternatives, and reduced-motion/transparency/contrast fallbacks.
- Responsive behavior for desktop, tablet, and mobile widths.

## Design Direction

Follow the guidance in `AppleDesign_SKILLS.md`:

- Use system-first typography with deliberate scale, tracking, and line-height.
- Use translucent surfaces only where they convey hierarchy, such as the navigation shell or overlays.
- Make feedback immediate; use short, interruptible motion and avoid decorative motion when `prefers-reduced-motion` is enabled.
- Use ocean blue as the accent color for labels, interactive states, and small visual details.

## Provided Component References

The `prompts/` directory contains implementation references. Use the named reference when a component below includes `@`.

- `@ShinyText.md` — animated ocean-blue section labels and role text.
- `@SpecularButton.md` — primary résumé and contact calls to action.
- `@ChromaGrid.md` — project-card grid.
- `@ClickSpark.md` — restrained click interaction for the Graphic Design page hero.
- `@PixelBlast.md` — background treatment for the Dev Projects page hero.
- `@Stepper.md` — multi-step contact form.
- `@GradualBlur.md` — gradual page-edge blur treatment.

## Pages and Content

### Shared shell

- Header: Emanuel Cruzat [not a monogram/logo, just the text. the directory is same as the home], navigation for Home, Graphic Design, Dev Projects, and Contact, plus a theme switcher.
- Footer: logo only; LinkedIn, GitHub, Instagram, and email links.
- Shared contact call to action: a concise collaboration-focused message and a `Contact me` SpecularButton linking to the Contact page.

### Home (`/`)

1. **Introduction**
   - Portrait image.
   - Name: `Emanuel Cruzat`.
   - Role: `A Graphic Designer and an Aspiring Data Engineer`, rendered with `@ShinyText.md` in ocean blue.
   - SpecularButton linking to the Google Docs résumé.
   - LinkedIn, GitHub, Instagram, and email links below the portrait or hero content.
2. **Tool marquee**
   - Continuously scrolling horizontal list of design and development tools.
3. **Experience**
   - `Background` ShinyText label, `Experience` heading, and a short supporting description.
   - Experience records display logo, role, organization, and year.
4. **Selected projects**
   - `My work` ShinyText label and `Selected Projects` heading.
   - Featured project cards in `@ChromaGrid.md`; every card shows image, project title, category, and date.
5. **Contact call to action**.

### Graphic Design (`/graphic-design`)

- Hero uses `@ClickSpark.md`, `My work` label, `Graphic Design` heading, and a search input.
- Search filters the page’s project cards by title, category, and year; it must show an empty state and a clear-search action when no entries match.
- `@ChromaGrid.md` cards contain image, title, `Graphic Design` category, and date.
- Shared contact call to action and footer.

### Dev Projects (`/dev-projects`)

- Hero uses `@PixelBlast.md`, `My work` label, `Dev Projects` heading, and a search input.
- Search behavior matches the Graphic Design page.
- `@ChromaGrid.md` cards contain image, title, `Dev Project` category, and date.
- Shared contact call to action and footer.

### Contact (`/contact`)

- Desktop: two-column layout; introduction/content and portrait/social links on one side, form on the other. Stack cleanly on smaller screens.
- Use `@Stepper.md` to collect:
  1. Full name
  2. Email address
  3. Message
  4. Review and submit
- Validate required fields and email format before allowing progress.
- Preserve entered values when moving backwards.
- Show sending, success, and recoverable error states after submission.

## Content Management

Store profile details, social links, résumé URL, technology list, experience records, and project records in one typed local content module. Until final assets are supplied, use clearly labeled placeholders for the portrait, logos, project images, project URLs, social URLs, and résumé link.

Each project record needs: ID, title, category, year/date, image URL and alt text, destination URL, accent color, and optional featured flag.

## Technical Stack — Confirmed

- React with TypeScript
- Vite
- React Router
- CSS Modules plus global design tokens
- Motion, GSAP, OGL, and MathJS where required by the provided component references
- GitHub Pages and GitHub Actions for deployment
- npm for dependency management and project scripts
- Formspree for contact-form delivery from the static GitHub Pages site
- Repository-managed, optimized images for the portrait and project work
- Vitest and React Testing Library for automated behavior tests
- No analytics in v1

## Contact Delivery

- Use Formspree as the form endpoint. Store its endpoint in a local environment file for development and a GitHub Actions secret for production builds; never commit credentials.
- Configure the form with Formspree's available spam protection and show a recoverable error if submission fails.

## Asset Handling

- Store portrait, project, and logo images in the repository under a public asset directory.
- Export and commit web-ready images: use modern formats where practical, supply meaningful alt text, and keep individual assets reasonably compressed to preserve GitHub Pages performance.

## Automated Testing

- Use Vitest and React Testing Library.
- Cover theme persistence, route navigation, project search and its empty state, contact-step validation, backward navigation with preserved values, and Formspree success/error states.

## Acceptance Criteria

- `npm run build` produces a production-ready static bundle.
- The GitHub Actions deployment succeeds from `main`, and every route works from the published GitHub Pages URL.
- All navigation, résumé/social links, project links, search, theme persistence, and contact form states work as specified.
- Layout remains legible and usable at desktop, tablet, and mobile widths.
- The experience honors reduced-motion, reduced-transparency, and increased-contrast preferences.
- The Vitest suite passes for the shared interactions, search, theme, and contact flow.
