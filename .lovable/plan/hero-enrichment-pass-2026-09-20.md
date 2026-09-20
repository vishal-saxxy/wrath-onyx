# Hero enrichment pass

## Build

- Compress only the hero's vertical composition so the complete answer card is visible at

  1440×900 without scaling or changing copy.

- Align all four connector paths exactly to the answer card edge and remove floating endpoint

  dots.

- Apply the supplied paper, raised, dim, and hairline values while preserving ink and signal

  colours.

- Add a flat paper-dim visual field with a faint dot trace, then strengthen the answer-card

  depth and lightly lift the prompt.

- Add colour only to the AI answer header, source chips, engine dots, and missing-brand row as

  specified.

- Add one post-load, sequential travelling-dot loop in the hero that stops under reduced motion.

## Constraints

- Block 02's scrolling search bars are a deliberate ambient animation and must be preserved

  exactly as they are. The one-loop limit applies to the hero only, so the page carries two

  ambient loops in total: the hero dot and the Block 02 bars.

- The paper-dim field bleeds off the right edge without creating any horizontal scrollbar at

  1440px or at the 1280px minimum width.

- The dot trace sits at 5% opacity inside the field only, never on the rest of the light band,

  and must not read as noise behind the answer card.

- The neutral change is global, so every page that uses these tokens must be re-checked, not

  just the homepage.

- No glassmorphism, blur, frosted panels, gradients, glow, purple, particles or shadows beyond

  the existing --shadow-lift token.

- No copy changes anywhere.

## Verification

- Check the hero in a real browser at 1440×900, including the fourth brand row and red status.

- Inspect connector/card geometry and confirm no floating dots.

- Measure requested text, label, signal, icon, and border contrast against the new neutral

  surfaces, on the homepage and on at least two inner pages.

- Inspect live computed animations after the load sequence and confirm exactly two loops remain:

  the hero travelling dot and the Block 02 search bars.

- Confirm no horizontal scrollbar appears at 1440px, and that the page still scrolls cleanly at

  the 1280px minimum width.

- Confirm the previously fixed items have not regressed: no founder names, no block numbers, no

  Block 09 overlap, and all seven dimensions fully lit after a fast scroll past Block 05.