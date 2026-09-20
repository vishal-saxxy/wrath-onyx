# Hero mockup match

## Build
- Repair the four connector endpoints, source wrapping, field/card boundary, layered edge, and missing-brand annotation target.
- Enhance only the homepage hero with the specified blue halo, stronger dot trace, decorative contour lines, orange “AI”, arrow CTAs, answer-header icons, brand-row dashes, floating feature cards, and second annotation.
- Use official first-party engine SVG marks where available; retain the existing dot for any mark that cannot be sourced officially.
- Keep all existing hero and Block 02 animation behaviour unchanged; new elements remain static.

## Technical details
- Keep new fixed strings local to the hero and preserve all existing copy.
- Use hero-scoped CSS and semantic tokens so no later block or inner page changes.
- Recalculate the SVG path geometry and matching motion paths together so the travelling dots preserve their timings.
- Keep decorative graphics hidden from accessibility APIs and maintain text contrast.

## Verification
- Compare the rendered hero against the supplied reference at 1440×900 using screenshots.
- Visually confirm connector contact, source containment, field containment, clean card edge, both arrow targets, matching logo boxes, and above-fold missing-brand status.
- Check 1440px and 1280px horizontal overflow, exactly two resting loops, founder/block-number regressions, and all seven dimensions after a fast scroll.
