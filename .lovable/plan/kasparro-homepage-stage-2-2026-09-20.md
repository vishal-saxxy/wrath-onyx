# Kasparro Homepage — Stage 2

Build

Create `src/content/homepage.ts` containing every supplied homepage string and structured list.

Build the ten homepage bands in the specified order, using the Stage 1 shell, tokens, reusable components, and illustrative source file.

Add only the interaction requested for ArtifactCards and the Brand Source of Truth record; keep all diagrams static.

Preserve the fixed 1440px desktop composition without breakpoints or touch specific behaviour.

Visual structure

Alternate light and dark bands exactly as specified and rotate compositions between split, centred, radial, editorial, and three zone layouts.

Keep diagrams illustrative, labelled, semantic, and below the requested ink density ceiling.

Use colour plus text, shape, borders, and labels so greyscale retains meaning.

Additional Stage 2 constraints

1. Before implementation, read `/BUILD-RULES.md` and `src/content/illustrative.ts`. They are authoritative for all content, terminology, illustrative entities, claims, accessibility strings, metadata, and implementation constraints.
2. Do not invent, rewrite, improve, shorten, expand, or infer any homepage copy, labels, annotations, accessibility strings, metadata, or illustrative content. Every string must come from the specified source files or the supplied Stage 2 specification.
3. All illustrative brands, sources, answers, claims, and website fragments must remain clearly illustrative. Northmere, Cottonwell, Halden Home, reviewledger.example, sleepguide.example, forum.example, and hometest.example must never be presented or implied as Kasparro clients, partners, real publications, or real measured entities.
4. Do not introduce any real company, client, competitor, publication, testimonial, outcome, statistic, score, ranking, benchmark, revenue claim, traffic claim, percentage, source count, or causal claim.
5. Do not introduce charts, graphs, sparklines, gauges, counters, rank numerals, progress indicators, upward arrows, before or after values, or any other visual that could be interpreted as a real measured result.
6. Future routes must not become finished looking blank public pages. Only the homepage is being built in Stage 2. Existing route structure may remain available for navigation, but unfinished pages must not contain invented content or placeholder UI.
7. Stage 2 has zero animation. Do not add entrance effects, scroll effects, pinned behaviour, timelines, travelling dots, automatic transitions, or other motion. Hover and focus states only where explicitly specified.
8. The static homepage must remain meaningful with JavaScript disabled. Render the actual page content in the initial HTML rather than depending on client side JavaScript for essential content.
9. Preserve all Stage 1 visual constraints, including no purple, violet, lavender, indigo, magenta, gradients, glow, glassmorphism, excessive shadows, stock imagery, fake browser chrome, fake navigation, fabricated avatars, or decorative WebGL or canvas elements.
10. Keep the seven canonical dimensions exactly as specified and never present them as seven products, tools, platforms, or feature cards.
11. Preserve the distinction between delivered, prepared, implementation ready, and implemented. Never claim that Kasparro implemented anything.
12. The homepage must not imply that Kasparro controls publishing or deployment. Client teams or technical partners publish and implement where required.
13. Preserve the persistent `Illustrative` label on every illustrative surface.

Verification

Check all ten blocks at a 1440px viewport.

Disable JavaScript and confirm the complete page remains understandable and all essential content remains present.

Inspect greyscale rendering, keyboard interactions, accessible states, rendered strings, numeral restrictions, semantic structure, and focus visibility.

Confirm there are no charts, counters, ranks, source counts, placeholders, motion, or forbidden terminology.

Search the rendered output for prohibited strings and confirm that no PRD instructions, BUILD RULES, TODOs, development notes, or internal implementation language is exposed.

Confirm every CTA uses the approved demo destination and no additional CTA labels have been invented.

Confirm `/styleguide` and unfinished routes are not exposed as finished production content.

Confirm the ten blocks appear in exactly the specified order, with the specified light and dark band alternation and the specified composition types.

Do not start Stage 3.

Reply in chat only using exactly the specified `STAGE 2 REPORT` format, with empty sections marked `None` where applicable.