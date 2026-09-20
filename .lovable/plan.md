# Stage 3 homepage motion plan

## Build

- Add one client-side homepage motion controller that:
  - detects reduced-motion and low-power conditions without storing visitor data;
  - runs the hero once on load;
  - observes Blocks 02, 04, 06, 08 and 10 for one-time entry sequences;
  - derives bounded progress for the two pinned sections using `requestAnimationFrame` and cached section geometry, with no layout-reading scroll listener;
  - updates the fixed Step Rail from the visible block and hides it in Block 10.
- Keep every diagram rendered in its complete final state in HTML. JavaScript only adds enhancement classes and state attributes after hydration, so failed or disabled scripts leave a finished page.
- Add the supplied motion tokens and CSS keyframes. Use only opacity, transform, and SVG stroke-dashoffset; every individual animation stays at or below 700ms and every stagger stays at or below 60ms.

## Section choreography

- **01 Hero:** Run the supplied 2,480ms sequence, including prompt reveal, send pulse, engine stagger, paths and travelling dots, answer assembly, brand rows, red status flip, hold, sources, and annotation. Stop afterward except for the permitted slow dot pulse.
- **02 Shift:** Pause the endless left-side link stream outside the viewport. Resolve the right answer, orange hard edge, and crossing arrow once on entry.
- **03 Consideration:** Create the 1.6-viewport-height pinned scene with three bounded highlight phases, ghosting earlier phases. Add an accessible step indicator and card controls that reapply each pass after release.
- **04 Evidence:** Run the one-time claim, connector, source, panel, and two qualification-line sequence; visibly weaken the connector from green to grey.
- **05 Dimensions:** Create the 1.8-viewport-height pinned scene with three grouped reveals. Add node isolation, nucleus reset, path dimming/brightening, and nucleus text state.
- **06 Movement:** Run the Measure → Diagnose → Fix → Verify sequence once, changing surfaces from neutral to implicated to addressed and reattaching the same question.
- **08 Brand Source of Truth:** Build the conflict-to-governed-record transformation once, while retaining interaction-only record fanning.
- **07, 09, 10:** Animate artifact expansion/collapse, add bounded guide-cover cursor parallax, and fade Block 10’s AnswerSurface in without positional movement.

## Handoffs and interaction

- Build the four requested visual handoffs as transform/opacity/palette state changes without adding scroll distance or new content.
- Add keyboard-equivalent button behavior for engine chips, source chips, the missing-status tag, brand rows, signal cards, dimension nodes, nucleus, surface bars, question chip, and the governed record.
- Render supplied explanatory strings only. Reuse existing content strings where the requested panel text already exists; add no invented copy.
- Limit pointer response to 2–4px translation and 1.02 scale, and disable pointer response/parallax/grain on low-power devices.

## Accessibility and degradation

- Under reduced motion, remove both pins, stop ambient motion, show all final states, and limit state changes to opacity under 100ms.
- Preserve normal tab order through both pinned sections; no focus trap, scroll hijacking, snapping, or clickable Step Rail.
- Keep colour-independent labels and borders so every state remains legible in greyscale.

## Verification

- Run typechecking and focused source scans for forbidden animation techniques, durations, copy changes, and extra pins.
- Test at 1440px with Playwright: hero timing, entry sequences, both pins, fast scrolling, keyboard activation, pin escape, reduced motion, no JavaScript, low-power mode, and 30-second rest behavior.
- Measure document height excluding the footer and keep it below nine viewport heights; tighten existing vertical spacing rather than adding animation space if needed.
- Confirm only Block 02 ambient motion continues while visible, no visual remains half-built, and all diagrams return to complete final states.
