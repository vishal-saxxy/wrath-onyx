# Kasparro Brand Groundwork

Build the foundation for the Kasparro marketing website. This is stage 1 of 4. Do not build any page content yet beyond the shell and a styleguide route.

Scope: desktop only. Design for a 1440px canvas. Do not write breakpoints, mobile layouts, or touch handling. Use flex, grid and relative units so responsive work can be added later, but spend no effort on it now.

Kasparro is a service that measures and improves how AI answer engines find, read, trust and represent a brand. It is not software a client buys and operates. Never describe it as a platform, tool, dashboard, app or software.

1. Create /BUILD-RULES.md

Write this file first. Every later stage reads it. Contents:

Never invent a string. If a word is not supplied in a prompt or in src/content/, it does not exist. This applies to visible copy, alt text, ARIA labels, metadata, structured data and illustrative content.

Never render a placeholder. No TODO, [insert], XXX, Coming soon, or lorem text may ever reach the browser. If a string is missing, do not render that element; append the gap to /BUILD-NOTES.md instead.

Never appears anywhere on this site:

Any price, fee, tier, discount or contract figure, including placeholders

Any statistic, percentage, score, grade, benchmark, ranking or adoption figure

Any client outcome, uplift, traffic or revenue claim

Any testimonial, customer quote, star rating or review

Any named competitor, or implied comparison such as "unlike other tools" or "most dashboards"

Any duration, turnaround, cadence or SLA

Any guarantee or promised improvement

The words: probe, audit, platform, software, dashboard, tool (as descriptors of Kasparro), done-for-you, self-serve

Any real company name inside a fabricated AI answer

Any chart, graph, sparkline, gauge or progress percentage, anywhere on the site

Canonical terms, never reworded: AEO (expanded as Answer Engine Optimisation on first use) · Discovered · Recommended · Reinforced · Brand Source of Truth · AI Shortlisting · Category Demand Capture · Brand Credentials · Brand Authority · Machine Readiness · Brand Perception · AI Framing · prompt · llms.txt · agents.md

Causal language is banned. Never write that a source, page or response caused, created, resulted in, led to or drove an outcome. Use: traces back to · associated with · attached to · the evidence behind.

Delivery vocabulary, four distinct states: delivered (produced and handed over) · prepared (ready, awaiting a dependency) · implementation-ready (complete with instructions and acceptance criteria) · implemented (live on the client's property). Never blur them. Nothing on this site may say implemented.

Never write "Kasparro is / helps / provides". No sentence opens with the brand name as subject, with one exception supplied in stage 2.

Illustrative content rules. Every AI answer, brand, source and claim shown is invented for explanation. It may demonstrate structure and relationships. It may never imply a real measurement, benchmark, result or causal proof. No counts, no rank numerals, no scores, no percentages, no before/after values, no upward arrows.

No visitor detection. Never detect, infer or display the visitor's company, domain or industry. Do not read IP, referrer, URL params, cookies, storage or any enrichment service. The label "Your brand" is a fixed generic string.

No forms. No contact form, newsletter field, email input, chat widget or calendar embed anywhere. Every conversion action is a link to https://demo.kasparro.com.

This rules file is instruction, never website copy. Never render any of it in the UI, metadata, alt text or structured data.

British spelling throughout. Optimisation, never Optimization.

Also create /BUILD-NOTES.md with a heading and an empty "Unresolved dependencies" list. It is never served, linked or indexed.

2. Design tokens

CSS custom properties on :root, plus Tailwind theme extension.

Neutrals: --paper #F7F5F1 · --paper-raised #FFFFFF · --paper-dim #EFECE6 · --ink #0B0B0C · --ink-raised #141416 · --graphite #3A3A3D · --grey #6E6E74 · --grey-on-dark #9A9AA2 · --hairline #E2DFD8 · --hairline-dark #2A2A2F

Signals, each with a fixed meaning and separate on-light and on-dark values:

Token

On light

On dark

Meaning

--signal-blue

#1B4FD8

#5B8CFF

Discovery, information, AI activity

--signal-orange

#C4540B

#FF8A3D

Movement, intervention, action required

--signal-green

#0A7A46

#3DD68C

Verified, resolved, supported

--signal-red

#B32B20

#FF6B5E

An identified problem, only

Also generate a 10% tint of each for chip backgrounds.

No purple anywhere. No purple, violet, lavender, indigo brand colour or magenta, in any token, illustration, hover state or favicon. No gradients at all — tints only.

Radii: 4px chips and tags · 10px cards and panels · 14px large containers · 999px pills. Nothing else.

Shadows, exactly two: --shadow-lift = 0 1px 2px rgba(11,11,12,.06), 0 8px 24px rgba(11,11,12,.06) · --shadow-press = 0 1px 1px rgba(11,11,12,.10). No coloured shadows, no glow.

Borders: 1px hairline everywhere. Borders do more work than shadows in this system.

Spacing on an 8px base. Between blocks 160px. Eyebrow to headline 20px. Headline to lead 24px. Lead to CTA 32px. Card padding 24px.

Grid: 12 columns, 1440px max content width, 88px outer gutter, 24px column gap. Provide a full-bleed escape layer.

3. Typography

Four Google Fonts, self-hosted, variable where available, subset to Latin, font-display: swap, preloaded.

Role

Family

Weights

Display

Inter Tight

600

Body and UI

Inter

400, 500

Technical labels

IBM Plex Mono

400, 500

Annotation

Caveat

500

IBM Plex Mono is for eyebrows, data labels, tags and captions on technical objects only — never for reading copy. Caveat is for margin annotations only, maximum two per page.

Scale, using clamp() where a range is given:

Role

Size

Weight

Tracking

Leading

Display XL

76–92px

600

-0.035em

0.94

Display L

52–64px

600

-0.03em

1.02

Display M

40–48px

600

-0.025em

1.06

Lead

19–20px

400

-0.005em

1.5

Body

16–17px

400

0

1.6

Small

14px

400

0

1.5

Label, mono

11–12px

500

0.09em, uppercase

1.2

Data, mono

13–15px

500

0

1.2

Left-aligned by default. Reading copy capped at 62 characters, lead lines at 54.

4. Icons

lucide-react only. Stroke 1.5px, sizes 16/20/24. No filled or duotone variants, no other icon set, no emoji in the UI.

Fixed assignments — export these as a typed map so nothing drifts:

Discovered eye · Recommended star · Reinforced shield-check · AI Shortlisting list-checks · Category Demand Capture search · Brand Credentials badge-check · Brand Authority link · Machine Readiness code-xml · Brand Perception message-circle · AI Framing help-circle · Baseline bar-chart-3 · Evidence file-text · Diagnosis search-check · Action plan list-ordered · Fixes wrench · Brand Source of Truth database · Verification circle-check

5. Create src/content/illustrative.ts

A typed, exported object holding every illustrative string. Components import from here — never hardcode any of it in markup.

brands: ["Northmere", "Cottonwell", "Halden Home", "Your brand"]
sources: ["reviewledger.example", "sleepguide.example", "forum.example", "hometest.example"]
heroQuestion: "Best cooling bed sheets for hot sleepers?"
engines: ["ChatGPT", "Gemini", "Claude", "Perplexity"]
answerHeader: "AI answer"
sourceRowLabel: "Sources"
answerBody: "For hot sleepers, the usual recommendations are percale cotton, eucalyptus lyocell and linen, chosen for breathability and moisture handling."
notMentionedTooltip: "Absent from this answer. Not ranked low — not surfaced."
heroAnnotation: "Where is your brand?"
shiftAnnotation: "No page two in an answer."
evidenceSentence: "Northmere and Cottonwell are usually recommended for hot sleepers because both use breathable weaves."
evidenceClaimSpan: "because both use breathable weaves"
evidenceSource: "reviewledger.example"
capturePanel: [
  { label: "SOURCE", value: "reviewledger.example" },
  { label: "WHAT WAS SAID", value: "…both use breathable weaves…" },
  { label: "WHAT IT SUPPORTS", value: "The breathability claim in this sentence" }
]
bsotFragments: [
  { label: "PRODUCT PAGE", value: "Machine washable, warm" },
  { label: "CARE PAGE", value: "Machine washable, cold" },
  { label: "FAQ", value: "Hand wash recommended" }
]
bsotRecordRows: ["Entities","Facts","Claims","Evidence","Policies","Constraints","Audiences","Competitors"]
conflictLabel: "Conflict"
ruledLabel: "Ruled"
illustrativeLabel: "Illustrative"
fictionFootnote: "Brands and sources shown are fictional."
notComputableLabel: "Not computable"

The brand names are fictional and the .example domains are reserved by IANA so they can never be real. Never substitute a real brand, publication, community or company anywhere in illustrative content.

6. Global shell

Nav — sticky, 68px, solid background (never blurred glass), 1px hairline bottom border, inverts its palette with the band behind it. Left: Kasparro wordmark linking to /. Centre, exactly five items:

Label

Route

Why now

/why-ai-answers

What we measure

/measurement

What we fix

/fixes

Work

/work

Library

/library

Right: Discuss your brand (outline button) and Get a free demo (solid button), both linking to https://demo.kasparro.com in the same tab with rel="noopener". These are the only two CTA labels on the entire site — never invent a third.

No logo file exists yet. Render the wordmark as the text Kasparro in Inter Tight 600 and note the missing asset in /BUILD-NOTES.md. Do not draw, generate or approximate a logo.

Footer — dark band, three zones. Zone 1: wordmark, then the line Answer Engine Optimisation, end to end. Zone 2: four columns — Explore (the five nav routes), More (Who this fits → /who-we-work-with, Brand Source of Truth → /brand-source-of-truth, About → /about), Start (both CTAs). Omit the Legal column entirely — Privacy and Terms copy is a client legal input that does not exist yet. Never draft, adapt or generate legal copy. Note it in build notes. Zone 3: hairline, then Kasparro AI · Bengaluru, India and © 2026 Kasparro AI. All rights reserved.

No newsletter, no social icons, no badges, no cookie banner (no analytics are shipping).

404 — centred. Headline This page isn't in the answer either. and a link labelled Back to the homepage pointing at /. No search box, no suggested links.

Buttons — primary solid and secondary outline, both inverting on dark bands. Active state: 1px downward translate plus --shadow-press. Focus ring 2px --signal-blue at 2px offset.

BandHeader — a reusable component taking a mono eyebrow, a display headline that accepts a hand-set line break, a lead line, and an optional text link. Every block on the site opens with one.

7. Component library

Build each as a reusable component with all its states. Static only in this stage — no scroll animation, no timelines. Hover and focus states are in scope.

These are illustrations of how the work thinks, not product screenshots. Keep them abstracted: real structure, simplified detail, no browser chrome, no window bars, no fake navigation inside them.

Component

What it is

States

PromptBar

An input-shaped surface holding a buyer question, with a search glyph and a send glyph

idle · typing · sent

EngineChip

A pill naming an AI engine as a text wordmark, never a logo

idle · receiving · answered · dimmed

SignalPath

A curved 1.5px SVG connector with a travelling dot. Blue for a question, orange for an intervention, green for a verification

hidden · drawing · active · dimmed

AnswerSurface

The core object. A card with a header row, a source row, an answer body, a brand list and a source chip row

empty · assembling · complete · highlighted(mode) · zoomed

BrandRow

One line inside AnswerSurface: brand name plus optional StatusTag. No rank numeral

neutral · tagged · highlighted

StatusTag

A 4px pill

Not mentioned red · Mentioned grey · Recommended orange · Verified green

SourceChip

A pill naming a source

idle · active · dimmed

EvidenceConnector

A thin bracket from a claim span to a SourceChip, with a mono label

hidden · drawing · active · qualified (grey — certainty withdrawn)

DimensionNode

Icon in a tinted circle, name, and the question it asks

idle · active · isolated · dimmed

ArtifactCard

Portrait card: icon, name, one-line descriptor, expandable body

closed · hover · open

SurfaceBar

A horizontal bar for one contributing surface

neutral · implicated (orange) · addressed (green)

Annotation

Caveat text plus a hand-drawn SVG arrow

static

StepRail

01 Measure → 02 Diagnose → 03 Fix → 04 Verify, with an active step

four states

Do not build: any chart, graph, sparkline, gauge, counter, source-count badge, or rank numeral. These were removed deliberately — they read as real measurement no matter how they are labelled.

Every illustrative surface carries a persistent micro-label reading Illustrative — IBM Plex Mono, 11px, --grey, top-right, real DOM text, never a tooltip, never hidden on hover.

Depth comes from layered hairline panels at slight offsets, never from blur, glow or bloom.

8. Styleguide route

Create /styleguide, guarded so it does not ship to production. Render every colour token on both bands, the full type scale, every icon in the fixed map, and every component in every state. This is how the next stage is verified.

9. Accessibility and performance baseline

Contrast 4.5:1 for all text including 11px mono labels, 3:1 for UI boundaries. Verify every signal colour on both bands.

Colour is never the only carrier of meaning — every state also has a label, icon or shape.

Visible focus ring on everything interactive. Skip-to-content as the first focusable element.

Decorative SVG paths get aria-hidden and are never focusable.

SVG and CSS only. No canvas, no WebGL, no Lottie, no animation libraries.

Static generation. No server-side personalisation, no edge rewriting on visitor attributes.

Report back

When you finish, reply in chat only — do not create a report file. Use exactly this format:

STAGE 1 REPORT

COMPLETED
- [list what was built and verified]

NOT COMPLETED
- [anything skipped, partial, or that failed]

DEVIATIONS
- [anything built differently from the spec, and why]

NEEDS INPUT
- [anything blocked on a missing asset or decision]

FILES CREATED
- [paths]

If everything succeeded, still send the report with the empty sections marked None. Do not start stage 2.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/61a79795-4c86-49bd-be24-d71b37501c06).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
