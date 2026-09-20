# Hero mockup match

## Build

- Repair the four connector endpoints, source wrapping, field/card boundary, layered edge, and

  missing-brand annotation target.

- Enhance only the homepage hero with the specified blue halo, stronger dot trace, decorative

  contour lines, orange "AI", arrow CTAs, answer-header icons, brand-row dashes, floating

  feature cards, and second annotation.

- Use official first-party engine SVG marks where available; retain the existing dot for any

  mark that cannot be sourced officially.

- Keep all existing hero and Block 02 animation behaviour unchanged; new elements remain static.

## Technical details

- Keep new fixed strings local to the hero and preserve all existing copy.

- Use hero-scoped CSS and semantic tokens so no later block or inner page changes.

- Recalculate the SVG path geometry and matching motion paths together so the travelling dots

  preserve their timings.

- Keep decorative graphics hidden from accessibility APIs and maintain text contrast.

- Engine marks are used as supplied by each vendor: official SVG only, unmodified paths,

  original colours, no tracing, no redrawing, no recolouring, no filled-circle substitutes. All

  four render inside an identical 18px box with identical spacing so no mark appears visually

  heavier than the others. Any mark that cannot be sourced officially keeps its existing dot and

  is named in the report.

- The blue halo is a single-hue radial derived from --signal-blue at low opacity. If it reads as

  a coloured smudge rather than a soft field, ship the hero without it and say so. The same

  applies to the contour graphic: if it reads as noise rather than a faint texture, omit it.

  A missing decorative element is better than a bad one.

- The three floating cards must not overlap the answer card, the connector paths, or each other

  at 1440px.

## Verification

- Compare the rendered hero against the supplied reference at 1440×900 using screenshots.

- Visually confirm connector contact, source containment, field containment, clean card edge,

  both arrow targets, matching logo boxes, and above-fold missing-brand status.

- Confirm the four engine marks sit at consistent visual weight, with none appearing larger,

  heavier or differently aligned than the rest.

- Confirm the hero load sequence, its timings and the three-second travelling dot are unchanged

  after the path geometry was recalculated.

- Check 1440px and 1280px horizontal overflow, exactly two resting loops, founder/block-number

  regressions, and all seven dimensions after a fast scroll.