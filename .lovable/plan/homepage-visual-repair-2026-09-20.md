# Homepage visual repair

## Build

- Correct dark-band ghost and outline button colours, including wrapped nucleus text, after

  auditing every affected control.

- Rework the hero and shift visual positioning around their actual subjects: remove the scale

  workaround, place the fiction note in flow, anchor both annotations, point both arrows at

  their targets, and replace page-wide overflow hiding with horizontal clipping.

- Revert the 80px hero rail top margin added in the previous pass back to its original value,

  since the annotation collision it worked around is now fixed at source.

- Consolidate Block 03 selection into one state shared by scroll phases and clicks, then make

  Block 05 reveal dimming temporary while preserving click isolation.

- Replace Block 06's stadium with a closed four-node cycle and restore the orange implicated

  state.

- Rebalance Blocks 06 and 08 into true side-by-side layouts, rebuild Block 07 as seven

  horizontal in-place-expanding cards across the full twelve columns with the copy above them,

  reduce Block 04 quote sizing, and place Block 10's answer safely behind the copy.

- Remove nested illustrative labels and use the exact supplied Block 03 sentence with the

  requested highlights and correctly terminating connectors.

## Technical details

- The motion hook will dispatch the active Block 03 phase to React instead of writing a

  competing `data-phase`; clicks remain able to select each layer.

- Block 05 phase styles will only reveal upcoming groups and will clear once each group is

  reached or the pinned section exits.

- Absolute coordinates that remain will be checked against the repaired fixed desktop

  containers at 1440px.

- Block 07 cards must stay legible at their final width. Seven cards inside an eight-column

  band would be roughly 100px each, which is too narrow for an icon, name and descriptor, so

  the card row takes the full grid width.

- Removing page-wide overflow hiding may expose elements that were previously clipped. Those

  are repositioned or resized, never re-hidden.

## Constraints

- No copy changes anywhere except the Block 03 answer sentence specified in the prompt.

- No new statistics, counters, charts, rank numerals or scores introduced by any rebuilt

  visual.

- The Block 10 answer stays present, untagged, unranked, non-interactive and free of any

  upward motion.

## Verification

- Capture and inspect all ten homepage blocks at a 1440px viewport.

- Exercise Block 03 at rest, through each scroll phase, and through all three card clicks.

- Confirm all seven dimensions are fully lit after release and only click-isolated items dim.

- Check dark controls, the closed loop, orange implicated surfaces, annotation endpoints, the

  full dimension orbit, and every text overlap or overflow.

- Confirm nothing is dimmed or animating at rest, with no hover and no scroll, except the

  Block 02 ambient while in view.

- Confirm the page is still complete and readable with JavaScript disabled, and again under

  prefers-reduced-motion, after the Block 03 state refactor.

- Confirm Block 07 card text is legible at final width, with no truncation or horizontal

  scrolling.

- Measure total homepage height in viewport units and keep it below nine.