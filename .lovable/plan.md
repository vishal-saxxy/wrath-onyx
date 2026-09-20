# Homepage visual repair

## Build

- Correct dark-band ghost and outline button colours, including wrapped nucleus text, after auditing every affected control.
- Rework the hero and shift visual positioning around their actual subjects: remove the scale workaround, place the fiction note in flow, anchor both annotations, point both arrows at their targets, and replace page-wide overflow hiding with horizontal clipping.
- Consolidate Block 03 selection into one state shared by scroll phases and clicks, then make Block 05 reveal dimming temporary while preserving click isolation.
- Replace Block 06’s stadium with a closed four-node cycle and restore the orange implicated state.
- Rebalance Blocks 06 and 08 into true side-by-side layouts, rebuild Block 07 as seven horizontal in-place-expanding cards, reduce Block 04 quote sizing, and place Block 10’s answer safely behind the copy.
- Remove nested illustrative labels and use the exact supplied Block 03 sentence with the requested highlights and correctly terminating connectors.

## Technical details

- The motion hook will dispatch the active Block 03 phase to React instead of writing a competing `data-phase`; clicks remain able to select each layer.
- Block 05 phase styles will only reveal upcoming groups and will clear once each group is reached or the pinned section exits.
- Absolute coordinates that remain will be checked against the repaired fixed desktop containers at 1440px.

## Verification

- Capture and inspect all ten homepage blocks at a 1440px viewport.
- Exercise Block 03 at rest, through each scroll phase, and through all three card clicks.
- Confirm all seven dimensions are fully lit after release and only click-isolated items dim.
- Check dark controls, the closed loop, orange implicated surfaces, annotation endpoints, the full dimension orbit, and every text overlap or overflow.
- Measure total homepage height in viewport units and keep it below nine.
