# Stage 3 homepage motion plan

## Build

Add one client side homepage motion controller that:

1. Detects reduced motion and low power conditions without storing visitor data.
2. Runs the hero once on load.
3. Observes Blocks 02, 04, 06, 08 and 10 for their one time entry sequences.
4. Derives bounded progress for the two pinned sections using `requestAnimationFrame` and cached section geometry, with no layout reading scroll listener.
5. Updates the fixed Step Rail from the visible block and hides it in Block 10.
6. Never becomes a dependency for essential page content.

Keep every diagram rendered in its complete final state in HTML. JavaScript only adds enhancement classes and state attributes after hydration, so failed, disabled, or delayed scripts leave a finished page.

Add the supplied motion tokens and CSS keyframes. Use only opacity, transform, and SVG stroke dashoffset for animation. Do not animate layout properties such as width, height, top, left or margin.

Every individual animation must remain at or below 700ms and every stagger must remain at or below 60ms.

## Section choreography

• **01 Hero:** Run the supplied hero sequence once on load, including prompt reveal, send pulse, engine stagger, paths and travelling dots, answer assembly, brand rows, red status flip, hold, sources, annotation and arrow. The final resting state must remain identical to the Stage 2 static state.

Important timing correction: do not blindly reproduce any timing that causes the total hero sequence to exceed the stated limit. The complete hero choreography must finish within 2,480ms and under the absolute 2,600ms ceiling. The final source and annotation sequence must therefore be fitted inside that limit without adding animation duration.

After the sequence, everything rests. No looping motion except the explicitly permitted slow travelling dot pulse at four second intervals.

• **02 Shift:** Pause the endless left side link stream outside the viewport. Resolve the right answer, orange hard edge, and crossing arrow once on entry.

• **03 Consideration:** Create the 1.6 viewport height pinned scene with three bounded highlight phases, ghosting earlier phases. Add an accessible step indicator and card controls that reapply each pass after release.

• **04 Evidence:** Run the one time claim, connector, source, panel, and two qualification line sequence. The connector must visibly weaken from green to grey.

• **05 Dimensions:** Create the 1.8 viewport height pinned scene with three grouped reveals. Add node isolation, nucleus reset, path dimming and brightening, and nucleus text state.

• **06 Movement:** Run the Measure → Diagnose → Fix → Verify sequence once, changing surfaces from neutral to implicated to addressed and reattaching the same question.

• **08 Brand Source of Truth:** Build the conflict to governed record transformation once, while retaining interaction only record fanning.

• **07, 09, 10:** Animate ArtifactCard expansion and collapse, add bounded guide cover cursor parallax, and fade Block 10's AnswerSurface in at its final position without positional movement.

## Handoffs and interaction

Build the four requested visual handoffs using only permitted transform and opacity based motion.

Palette inversion at handoff boundaries may change state, but must not introduce animated colour interpolation or any additional animated property. No background colour tweening, layout animation, blur, glow, or scale based decorative transition.

Do not add scroll distance, new content, new sections, or new UI elements to support the handoffs.

Add keyboard equivalent button behaviour for engine chips, source chips, the missing status tag, brand rows, signal cards, dimension nodes, nucleus, surface bars, question chip, and governed record.

Everything revealed on hover must be reachable by keyboard focus and must behave equivalently on Enter or Space.

Limit pointer response to 2 to 4px translation and maximum 1.02 scale. Disable pointer response, parallax and grain on low power devices.

Render supplied explanatory strings only. Reuse existing content strings where the requested panel text already exists. Add no invented copy.

Do not change any Stage 2 copy, layout, content structure, terminology, route structure, or illustrative entities.

## Accessibility and degradation

Under `prefers-reduced-motion: reduce`:

1. Remove both pinned sections as interactive scroll experiences and render them as static stacked states.
2. Stop ambient motion entirely.
3. Show all final states.
4. Limit state changes to opacity transitions under 100ms.
5. Preserve all content, meaning, labels and keyboard access.

Preserve normal tab order through both pinned sections. No focus trap, scroll hijacking, snapping, altered scroll speed, or clickable Step Rail.

Keep colour independent labels, borders, icons and shapes so every state remains legible in greyscale.

Low power detection may use the specified hardware capability signals, but must never inspect, store, infer, or personalise based on visitor identity, company, domain, industry, IP, referrer, cookies, URL parameters, storage, or enrichment data.

## Verification

Run typechecking and focused source scans for forbidden animation techniques, durations, copy changes, extra pins, placeholder strings, and prohibited terminology.

Test at 1440px with Playwright:

1. Hero timing and final resting state
2. Entry sequences
3. Both pinned sections
4. Fast scrolling
5. Keyboard activation
6. Pin escape
7. Reduced motion
8. JavaScript disabled
9. Low power mode
10. 30 second rest behaviour
11. Greyscale rendering
12. Focus visibility and keyboard parity

With JavaScript disabled, every diagram must still show its complete final state and the homepage must remain fully understandable.

Measure total document height excluding the footer and keep it below nine viewport heights. Never increase page height to accommodate animation. Tighten existing vertical spacing or shorten choreography when necessary.

Verify:

1. No third pinned section exists.
2. No layout properties are animated.
3. No animation exceeds 700ms.
4. No stagger exceeds 60ms.
5. The hero finishes within 2,480ms and never exceeds the absolute 2,600ms ceiling.
6. No visual remains half built after fast scrolling or failed scripts.
7. Only Block 02 ambient motion continues while it is visible.
8. Reduced motion produces a complete static page.
9. JavaScript disabled produces a complete static page.
10. No new copy, claims, clients, sources, metrics, or terminology have been introduced.

Do not start Stage 4.

## Report back

Reply in chat only, no report file. Use exactly this format:

**STAGE 3 REPORT**

**COMPLETED**

[sequences, pins, handoffs and interactions built]

**NOT COMPLETED**

[anything skipped or partial, and why]

**DEVIATIONS**

[anything built differently, and why]

**MOTION CHECK**

Longest single animation: [ms]  
Largest stagger interval: [ms]  
Hero choreography duration: [ms]  
Total homepage scroll height: [x viewport heights]  
Pinned sections: [count]  
Anything still animating at rest: yes/no  
Complete under reduced motion: yes/no  
Complete with JS disabled: yes/no

**NEEDS INPUT**

[anything blocked]

If everything succeeded, still send the report with empty sections marked None. Do not start Stage 4.