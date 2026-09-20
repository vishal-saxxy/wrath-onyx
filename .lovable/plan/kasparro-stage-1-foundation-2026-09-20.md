# Kasparro Stage 1 Foundation

## Scope

Build only the desktop marketing-site foundation, shared shell, reusable illustrative component library, and development-only `/styleguide`. No stage 2 page content will be added.

## Implementation

- Add the complete semantic token system in `src/styles.css`: exact colours and tints, typography, radii, shadows, borders, spacing, 12-column grid, full-bleed layer, focus treatment, and reduced-motion handling.
- Self-host and preload the specified Latin font files for Inter Tight, Inter, IBM Plex Mono, and Caveat.
- Add the typed illustrative content object and typed Lucide icon assignment map.
- Build the shared header, footer, CTA links, skip link, desktop content shell, `BandHeader`, and specified 404 treatment.
- Build all requested reusable illustrative components and their static states, with persistent “Illustrative” labels and accessible SVG treatment.
- Keep `/` as an intentionally content-free shell page for this stage.
- Add every named future navigation route as an empty shell route so all navigation is valid without inventing page content.
- Add `/styleguide` with all tokens, type roles, fixed icons, and every component state. Guard the route so production receives a not-found response.
- Record the missing logo asset and missing legal input in `BUILD-NOTES.md`.

## Verification

- Check source for forbidden placeholders, prohibited visual treatments, forbidden descriptions, hardcoded illustrative strings, and unintended responsive rules.
- Verify type/build checks supplied by the project harness.
- Exercise `/`, `/styleguide`, navigation, CTA links, focus states, and 404 at a 1440px desktop viewport.
- Confirm `/styleguide` is available in development and guarded by production mode.  

  Additional Stage 1 constraints
  Before implementation, apply these adjustments to the scope above:
  1. Future routes may be created structurally for routing readiness, but must not appear as finished blank public pages. Keep unfinished routes development only, or use the existing 404 treatment until their actual stage is built.
  2. All illustrative components must remain clearly illustrative. Northmere, Cottonwell, Halden Home, reviewledger.example, sleepguide.example, forum.example, hometest.example, and every other fictional entity must never be interpreted or presented as Kasparro clients, partners, publications, or real measured entities.
  3. SignalPath states such as drawing and active are static visual states in Stage 1. Do not implement travelling dot animation, scroll animation, timelines, or motion logic yet.
  4. /styleguide is strictly development only. It must not appear in production navigation, sitemap, indexing, canonical metadata, structured data, or any public discovery path.
  5. Accessibility must be actually verified, not merely assumed from token definitions. Verify contrast for every text and signal colour combination specified in the brief, including small technical labels.
  6. Do not add, rewrite, infer, improve, or invent any visible copy, illustrative content, metadata, accessibility string, label, or description. Follow BUILD RULES exactly.
  7. Do not introduce responsive layouts, mobile breakpoints, or touch behaviour in Stage 1. Stage 1 remains desktop only at the specified 1440px canvas.
  8. Do not create any chart, graph, sparkline, gauge, counter, score, ranking numeral, source count, progress percentage, or other visual that could be interpreted as real measurement.
  Final verification
  After implementation, verify all of the following:
  • Build and type checks pass.
  • All specified colour tokens, typography, icons, spacing, borders, shadows, grid, focus treatment, and reduced motion behaviour are implemented.
  • No purple, violet, lavender, indigo, magenta, gradients, glow, glassmorphism, or other prohibited visual treatment exists.
  • No forbidden placeholder, fabricated client, fabricated company, fabricated measurement, statistic, score, ranking, benchmark, outcome, testimonial, review, or causal claim appears anywhere in rendered output.
  • Every illustrative surface contains the persistent “Illustrative” label.
  • /, navigation, CTA links, skip link, keyboard focus states, and 404 behaviour work correctly at 1440px.
  • /styleguide works in development and is unavailable in production.
  • /styleguide is not indexed, linked, included in sitemap, canonical metadata, or structured data.
  • No unintended responsive rules or mobile implementation have been introduced.
  • SignalPath and all other motion related components remain static in Stage 1.
  • Decorative SVG elements are correctly hidden from assistive technology and are not keyboard focusable.
  • Keyboard navigation, focus visibility, semantic structure, and reduced motion handling work as specified.
  • [BUILD-RULES.md](http://BUILD-RULES.md) and [BUILD-NOTES.md](http://BUILD-NOTES.md) exist and are not rendered, linked, or indexed.
  Do not start Stage 2.
  Return exactly the STAGE 1 REPORT format specified in the original brief, including empty sections marked None where applicable.  
    
