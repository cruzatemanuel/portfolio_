# Design Agent — Modern Developer Portfolio Visual System

## Purpose

Use this skill when designing or redesigning modern developer portfolios, personal websites, landing pages, or developer-focused product interfaces.

The design direction should feel **minimal, editorial, technical, and contemporary**, using a restrained black-and-white foundation with a single green accent.

The goal is not to copy a specific website. Instead, apply the following visual principles consistently and adapt them to the project's content, brand, and usability requirements.

---

## Core Design Direction

### 1. Oversized Hero Typography

Make typography the primary visual element of the hero section.

- Use a very large, bold headline that immediately communicates who the person is and what they do.
- Prefer short, high-impact statements over paragraphs.
- Allow the headline to occupy substantial horizontal and vertical space.
- Use intentional line breaks to create composition.
- Combine black/white typography with the green accent for emphasis.
- The hero should remain visually strong even before supporting imagery is introduced.
- Avoid excessive decorative elements competing with the headline.

### 2. Single Accent Color

Use **green as the primary accent color** against a black-and-white base.

Color strategy:

- Base: black, white, and neutral grays.
- Accent: one consistent green.
- Use green selectively for:
  - Key words in hero typography
  - Buttons and calls to action
  - Links and hover states
  - Active navigation states
  - Tech-stack highlights
  - Small status indicators
  - Important interactive elements

Do not introduce multiple unrelated accent colors unless accessibility or functional requirements demand it.

The accent should create personality without turning the interface into a colorful marketing site.

### 3. Generous Whitespace

Prioritize breathing room.

- Use large section spacing.
- Keep content widths controlled.
- Avoid dense layouts unless the content genuinely requires density.
- Give headings and body copy sufficient separation.
- Let empty space become part of the visual composition.
- Do not fill empty areas simply because they exist.

Whitespace should make the interface feel intentional, premium, and easy to scan.

### 4. Clean Grotesque / Geometric Sans-Serif Typography

Use a modern sans-serif with clean geometry and strong readability.

Suitable directions include:

- Inter
- General Sans
- Satoshi
- Geist
- Manrope
- Space Grotesk

Typography hierarchy should be clear:

- Display / Hero: heavy or bold
- Section headings: semibold or bold
- Body: regular
- Metadata / labels: medium or semibold with restrained sizing

Avoid excessive font combinations. Prefer one primary typeface with weight and size variations.

Use tight letter spacing for oversized headlines when appropriate, while maintaining comfortable readability for body text.

### 5. Light / Dark Mode

Support both light and dark themes when technically appropriate.

#### Light Mode

- White or near-white background
- Black primary text
- Neutral gray secondary text
- Green accent

#### Dark Mode

- Near-black background rather than pure black where appropriate
- White or near-white primary text
- Muted gray secondary text
- Same green accent

The accent color must remain recognizable and accessible in both modes.

The theme toggle should:

- Be easy to discover
- Be visually minimal
- Preserve the current page state
- Avoid causing layout shifts
- Respect the user's system preference on first visit when possible

Do not design two completely unrelated themes. They should feel like the same visual system.

### 6. Tech Stack Badge Row

Represent technologies using compact badges or pill-shaped containers.

Each badge may contain:

- Technology icon
- Technology name
- Optional short category

Example categories:

- Languages
- Frameworks
- Databases
- Developer tools
- Cloud / infrastructure
- Analytics

Visual rules:

- Use restrained borders and backgrounds.
- Keep badge dimensions consistent.
- Use recognizable technology icons where available.
- Avoid oversized logos.
- Maintain enough spacing for scanning.
- Use the green accent sparingly for active, highlighted, or interactive states.

The purpose is to quickly communicate technical competence, not create a logo wall.

---

## Layout System

Use a strong editorial grid.

### Recommended structure

1. Navigation
2. Hero
3. Selected work / projects
4. About or capabilities
5. Tech stack
6. Experience / education, if relevant
7. Contact / CTA
8. Footer

Not every project requires every section. Remove sections that do not contribute meaningful information.

### Container

Use a centered content container with generous horizontal padding.

Recommended principles:

- Wide desktop composition
- Comfortable tablet margins
- Smaller but still intentional mobile padding
- Controlled maximum content width
- Consistent alignment between major sections

Maintain a common left/right alignment line across the page wherever possible.

---

## Hero Composition

The hero should answer three questions quickly:

1. Who is this?
2. What do they do?
3. What should the visitor do next?

A typical structure:

- Small eyebrow / role label
- Oversized headline
- Short supporting statement
- Primary CTA
- Secondary CTA or social links
- Optional subtle visual element

Avoid making the hero dependent on a large profile photograph unless the project specifically calls for one.

The headline should remain the dominant element.

---

## Component Style

### Buttons

Use simple, high-contrast buttons.

Primary button:

- Black in light mode
- White or high-contrast surface in dark mode
- Green reserved for important emphasis where appropriate

Secondary button:

- Transparent
- Thin border
- Neutral text

Use subtle hover transitions rather than dramatic animations.

### Cards

Keep cards minimal.

Prefer:

- Thin borders
- Subtle background changes
- Generous internal spacing
- Clear typography hierarchy
- Small interaction states

Avoid:

- Excessive shadows
- Heavy gradients
- Glassmorphism everywhere
- Multiple competing colors

### Navigation

Navigation should be compact and unobtrusive.

Include only the most important destinations.

Possible structure:

`Work · About · Stack · Contact`

Place the light/dark mode toggle in a predictable location.

---

## Motion & Interaction

Use motion to reinforce hierarchy rather than decorate the page.

Preferred:

- Subtle hover transitions
- Smooth theme transitions
- Small button/icon movement
- Gentle reveal animations
- Project card interactions
- Underline or color transitions on links

Avoid:

- Excessive parallax
- Long loading animations
- Constant motion
- Large animated backgrounds
- Animations that interfere with reading

Respect `prefers-reduced-motion`.

---

## Responsive Design

The design must be responsive from the beginning.

### Desktop

- Oversized hero typography
- Wide editorial grid
- Horizontal project layouts where appropriate
- Spacious navigation

### Tablet

- Reduce display typography proportionally
- Preserve whitespace
- Collapse complex multi-column layouts when necessary

### Mobile

- Reduce hero typography without losing its visual dominance
- Stack CTAs
- Convert horizontal badge rows into wrapping or horizontally scrollable groups
- Simplify navigation
- Reduce section spacing proportionally, not drastically
- Ensure all interactive elements have comfortable touch targets

Never simply shrink the desktop layout. Recompose it for mobile.

---

## Accessibility

Accessibility takes priority over visual styling.

Ensure:

- Sufficient text/background contrast
- Keyboard-accessible controls
- Visible focus states
- Semantic HTML
- Descriptive link and button labels
- Accessible theme toggle
- Reduced-motion support
- Icons do not carry essential meaning without text or accessible labels

Do not use green as the only indicator of state.

---

## Design Tokens

Establish reusable design tokens before implementing components.

Example conceptual tokens:

```css
--color-bg
--color-surface
--color-text
--color-text-muted
--color-border
--color-accent
--font-sans
--font-display
--radius-sm
--radius-md
--space-xs
--space-sm
--space-md
--space-lg
--space-xl
--space-2xl
--container-max
```

Keep the system small and consistent.

---

## Visual QA Checklist

Before considering the design complete, verify:

### Typography
- [ ] Hero headline is the strongest visual element.
- [ ] Font hierarchy is obvious.
- [ ] Line lengths are comfortable.
- [ ] Display text does not create accidental awkward breaks.

### Color
- [ ] Black/white/neutral foundation is maintained.
- [ ] Green is the only primary accent.
- [ ] Accent usage is intentional.
- [ ] Both themes maintain sufficient contrast.

### Layout
- [ ] Sections have generous whitespace.
- [ ] Content aligns consistently to the grid.
- [ ] No section feels unnecessarily crowded.
- [ ] Mobile composition has been intentionally redesigned.

### Components
- [ ] Buttons have clear hierarchy.
- [ ] Cards remain visually restrained.
- [ ] Tech badges are consistent.
- [ ] Navigation is simple.

### Interaction
- [ ] Hover/focus states are clear.
- [ ] Theme switching feels seamless.
- [ ] Motion is subtle.
- [ ] Reduced-motion behavior is supported.

### Overall
- [ ] The interface feels modern without relying on trends alone.
- [ ] Content remains more important than decoration.
- [ ] The design communicates technical competence.
- [ ] The visual system is consistent across every page.

---

## Design Agent Behavior

When applying this skill:

1. Start with hierarchy, not decoration.
2. Establish typography and spacing before adding visual effects.
3. Use the black/white/green palette consistently.
4. Make the hero typography visually dominant.
5. Preserve generous whitespace.
6. Use badges to communicate technical breadth efficiently.
7. Treat light and dark mode as one coherent system.
8. Prefer simple geometry and restrained surfaces.
9. Avoid adding trends that conflict with the core visual language.
10. Prioritize usability, accessibility, responsiveness, and content clarity over visual novelty.

The final result should feel like a **high-quality modern developer portfolio**: minimal, confident, technical, spacious, and typography-led.
