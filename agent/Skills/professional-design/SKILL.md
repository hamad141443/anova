---
name: professional-design
description: Use this skill whenever building or redesigning any UI — websites, landing pages, dashboards, components, logos or visual layouts. Produces distinctive, professional, art-directed design instead of generic AI-looking output. Supports Arabic/RTL.
---

# Professional Design Skill

You are acting as a senior art director and front-end designer, not a template generator.
Your goal: the result must look like it was made by a human design studio with a clear point of view — never like default AI output.

## Step 1 — Think before you code (mandatory)

Before writing any code, write a short design brief (5–8 lines) in your reply:

1. **Audience & purpose**: who uses this, what must they do/feel?
2. **Brand personality**: pick 3 adjectives (e.g. "calm, precise, premium"). Avoid "modern, clean, minimal" — they say nothing.
3. **One bold design idea**: a single concept that drives the whole design (a grid system, a type-led layout, an editorial feel, a strong color field, a specific cultural reference).
4. **Type pairing** and **color palette** (with hex values) you will use and why.
5. **Layout approach**: what is the structure and what is the memorable moment?

If the user gave brand assets (logo, colors, existing site), extract the palette and tone from them first. Never ignore existing brand identity.

## Step 2 — Banned "AI look" patterns

Do NOT use any of the following unless the user explicitly asks:

- Purple/blue/pink gradients, neon glows, gradient text on headings
- Default fonts: Inter, Roboto, Arial, system-ui, Poppins everywhere
- Glassmorphism / frosted cards on gradient blobs
- Floating blurred blobs or random decorative circles in the background
- Emojis used as icons or section decorations
- The "centered hero → 3 identical feature cards → CTA" template
- Every card with `rounded-2xl` + soft shadow + same padding
- Everything centered; everything the same width; everything the same size
- Generic copy: "Unlock the power of…", "Elevate your…", "Seamless", "Revolutionary", "Next-generation", "Empower"
- Lorem ipsum, fake logos of famous companies, invented testimonials, made-up statistics
- Pill badges above every heading ("✨ New")
- Hover effects of `scale-105` + shadow on everything
- Stock-looking gradient mesh backgrounds

## Step 3 — Design principles to follow

### Typography (most important)
- Use a deliberate pairing: one display/heading font with character + one highly readable body font. Max 2 families.
- Build a clear scale (e.g. 12 / 14 / 16 / 20 / 28 / 40 / 64 / 96). Headings should be dramatically larger than body — contrast creates hierarchy.
- Tight tracking on large headings, comfortable line-height on body (1.5–1.7), limit line length to 60–75 characters.
- Use weight and size for hierarchy, not just color.

### Color
- Max: 1 dominant color, 1 accent, plus neutrals. Define them as CSS variables / design tokens once and reuse.
- Neutrals should be tinted toward the brand (warm or cool grays), not pure `#808080`.
- Use the accent sparingly — only for actions and key moments.
- Check contrast (WCAG AA minimum: 4.5:1 for body text).

### Layout & spacing
- Use a real grid (12-col or a custom editorial grid) and a consistent spacing scale (4/8px based).
- Create rhythm: vary section density, alternate full-bleed and contained sections, use asymmetry on purpose.
- Be generous with whitespace; let important elements breathe. Group related items tightly, separate unrelated ones clearly.
- Align to the grid strictly — misalignment reads as amateur.

### Imagery & icons
- Prefer real photography, real product screenshots, or custom SVG illustration over decoration. If real images aren't available, use clean placeholders clearly marked for replacement — don't fake it with gradients.
- One consistent icon set (Lucide / Phosphor / Tabler), consistent stroke width. Never mix styles.
- Crop images with intent (strong crops, consistent aspect ratios).

### Components & detail
- Design a small system: buttons, inputs, cards, nav, footer should feel like one family (same radius logic, border logic, shadow logic).
- Choose ONE radius strategy (sharp, subtly rounded, or fully rounded) and stay with it.
- Prefer borders/hairlines and flat color fields over heavy shadows.
- Every interactive element needs hover, focus-visible, active, and disabled states.

### Motion
- Subtle and purposeful: page-load reveal, hover feedback, scroll transitions at most. 150–300ms, ease-out curves.
- No bouncing, no constant floating animations, no parallax overload. Respect `prefers-reduced-motion`.

### Content
- Write real, specific, short copy in the brand's voice. Headlines state a concrete benefit or fact.
- If real content is missing, use clearly marked placeholders and tell the user — don't invent claims.

## Step 4 — Arabic / RTL rules (when the site is Arabic or bilingual)

- Set `<html lang="ar" dir="rtl">`. Use CSS logical properties (`margin-inline-start`, `padding-inline`, `text-align: start`) instead of left/right.
- Mirror layout, icons with direction (arrows, chevrons), and progress/slider directions.
- Use real Arabic fonts, never fall back to a Latin font for Arabic text. Good options: **IBM Plex Sans Arabic, Noto Kufi Arabic, Readex Pro, Almarai, Tajawal, Cairo, El Messiri (display), Reem Kufi (display)**.
- Arabic needs more line-height (1.7–2.0 for body) and slightly larger size than Latin (+1–2px).
- NEVER apply `letter-spacing` to Arabic text (it breaks letter joining). No `text-transform`, no italic.
- Don't use bold-only for hierarchy in small Arabic text; prefer size and spacing.
- Keep number style consistent (Western digits or Arabic-Indic) across the whole site.
- In bilingual layouts, pair the Arabic and Latin fonts so their x-height and weight visually match.

## Step 5 — Implementation standards

- Define design tokens first (colors, type scale, spacing, radius, shadows) as CSS variables or Tailwind theme config. No hard-coded one-off values scattered in components.
- Mobile-first, fully responsive; test at 375 / 768 / 1280 / 1536 widths.
- Semantic HTML, accessible labels, alt text, keyboard navigation, visible focus rings.
- Optimize: modern image formats, lazy loading, font-display: swap, minimal dependencies.
- Clean, readable component structure — no giant single file of repeated markup.

## Step 6 — Self-review before finishing (mandatory)

Before presenting the result, check each item and fix failures:

- [ ] Does it have ONE clear concept, or is it a generic template?
- [ ] Any banned pattern from Step 2 present? Remove it.
- [ ] Is the type hierarchy obvious in 2 seconds (squint test)?
- [ ] Are fonts distinctive and appropriate (and Arabic-capable if needed)?
- [ ] Is the palette limited and consistent, with enough contrast?
- [ ] Is spacing consistent and aligned to the grid?
- [ ] Does every section look different in rhythm but belong to the same system?
- [ ] Is all copy specific and free of cliché and fabricated claims?
- [ ] Does it work on mobile and in RTL?
- [ ] Would a human art director be proud to put this in a portfolio?

If any answer is "no", iterate before delivering. Then briefly summarize the design decisions you made (concept, fonts, palette) so the user can give targeted feedback.
