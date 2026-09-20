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
