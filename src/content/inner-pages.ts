import { homepage } from "./homepage";

export const inner = {
  close: { headline: "Find out what the answer says about you." },
  why: {
    eyebrow: "WHY NOW", headline: ["The question replaced", "the query."], lead: "Search returns a field of options to sort through. An answer returns a conclusion. That difference changes what a brand has to be good at.",
    sections: [
      { headline: "Same web. Different output.", body: "Both surfaces read the same public material. One hands back a list and leaves the choosing to the customer. The other does the choosing, names a few options, and explains why. A brand can be perfectly findable in the first and absent from the second." },
      { headline: "Answer Engine Optimisation.", definition: "AEO — Answer Engine Optimisation — is the discipline of being correctly found, read, trusted and represented by AI answer engines, as distinct from being ranked by search engines.", body: "The same work travels under other names. GEO and AI SEO describe the same concern from different starting points. The term here is AEO, and the distinction that matters is not the label but the output being optimised for." },
      { headline: "This is not an argument against search.", body: "Classic organic demand stays inside the measurement rather than beside it. Category Demand Capture reads live results pages for the non-branded searches a brand already sits close to. Answer engines and search engines are different surfaces with different outputs, and the work overlaps more than it competes." },
      { headline: "Which engines.", body: "Designed to measure major AI search and answer surfaces including ChatGPT, Claude, Perplexity, Gemini and Copilot. Every report names the engines actually tested, so the scope stays explicit." },
    ],
  },
  measurement: {
    eyebrow: "WHAT WE MEASURE", headline: ["Seven readings", "of one answer."], lead: "Each dimension asks a different question of the same material. Together they describe whether a brand is found, trusted, readable and accurately represented.",
    rows: [
      ["AI Shortlisting", "Buyer questions put to answer engines, branded and non-branded", "Whether you enter the shortlist, and how engines speak of you when you are named"],
      ["Category Demand Capture", "Live results pages for non-branded searches you already sit close to", "Where category demand is going instead, and which gaps sit nearest reach"],
      ["Brand Credentials", "Your own site, for findable proof of identity, qualification and track record", "Which proof an engine could locate, and which is present but unreachable"],
      ["Brand Authority", "The independent sources that stand behind you and behind the brands engines name", "Where your standing sits relative to the brands actually being named"],
      ["Machine Readiness", "Your pages as a machine reads them: structure, markup, answerability", "What an engine would understand, and where it would get you wrong"],
      ["Brand Perception", "Ordinary questions about your brand, put to engines directly", "What is said about you, with the wording kept"],
      ["AI Framing", "The hardest questions a sceptical buyer asks about you", "Whether the engine clears the worry or confirms it"],
    ],
    sections: [
      { headline: "Every finding carries its answer.", body: "A finding is not a judgement written after the fact. It is bound to the engine response, page or source it traces back to, and the wording is kept so it can be read again." },
      { headline: "A citation is not a cause.", body: "A displayed source shows that the engine attached it to a nearby claim. It does not show that the source was retrieved, that it shaped the wording, or that it decided the recommendation. Those remain inferences, and they are labelled as inferences." },
      { headline: "There is no permanent position.", body: "Answers move by engine, by question, by date and by context. One answer is an observation. A baseline is what a set of them looks like when the questions are held still, which is why the same questions are reused every time." },
    ],
    limitsHeadline: "What the measurement will not do.", limits: [
      "Where evidence is thin, a component is marked not computable. Never scored zero — measured-and-bad and not-measurable are different findings.",
      "Where a reading is structurally unsound, it halts and says why rather than publishing a number that would mislead.",
      "Where two readings disagree beyond tolerance, the disagreement stays visible rather than being averaged into a cleaner answer.",
    ],
    start: { headline: "Where to start.", body: "The free demo gives a focused, fast view of AI visibility and page readiness where there is enough data, showing the largest observed leaks and the evidence behind each. The full engagement expands coverage across all seven dimensions, then continues into fixes and re-measurement." },
  },
  fixes: {
    eyebrow: "WHAT WE FIX", headline: ["Findings are not", "the deliverable."], lead: "What an engine says about a brand is shaped by more than its content. Four workstreams cover the surfaces that actually move it.",
    streams: [
      { name: "Technical", question: "Can AI access, parse and correctly understand what matters?", body: "A page an engine cannot read properly is a page that cannot be quoted correctly. This covers how pages are reached, how they are structured, and whether what the markup says matches what the page shows.", details: "Structured data correctness and parity with visible copy · sitemaps · indexation · crawlability · page weight and render reliability · for Shopify, product-template markup, llms.txt, agents.md and on-page review-count parity" },
      { name: "Content", question: "What are buyers asking that nothing on your site answers?", body: "Some questions have no page behind them. Others have a page that answers a different question. This is the work of writing what is missing, in the language buyers actually use.", details: "Page headings that state what a page answers · question-and-answer blocks in buyer language · product page enrichment · product identity pages · practical usage guidance · topic gaps · comparison pages" },
      { name: "Authority", question: "Which independent sources shape what AI says about your category?", body: "Engines lean on material they did not get from you. This is about understanding which independent sources carry weight in your category, and where your evidence is absent from them.", details: "Which sources are cited in your category · where independent evidence about you is thin · what original material exists but has never been published" },
      { name: "User Voice", question: "What do customers repeatedly praise, question, complain about or compare?", body: "Communities and reviews show how people talk about a category and what they weigh when choosing. They show perception and experience — not verified product fact, and they are not treated as fact.", details: "Recurring questions · repeated objections · the language buyers compare in · experience issues that reach answers" },
    ],
    sections: [
      { headline: "Every fix ships with a way to check it.", body: "A fix is written against a specific finding and arrives with the instruction, the reason it matters, and a pass-or-fail acceptance criterion. Checking is not a matter of opinion — either the criterion is met or it is not." },
      { headline: "Produced here. Published there.", body: "Wrath produces the approved work and the implementation package. Your team or your partners publish and implement where required.", note: "Delivered means produced and handed over. Prepared means ready and waiting on a dependency. Implementation-ready means complete with instructions and acceptance criteria. Implemented means live on your property." },
    ],
  },
  truth: {
    eyebrow: "THE FACTUAL FOUNDATION", headline: ["Decide what is true", "once."], lead: "Most brands contradict themselves in public without noticing. Engines read all of it and repeat whichever version they found.",
    sections: [
      { headline: "One approved factual foundation.", body: "A governed record of what is true about a brand: its entities, facts, claims, the evidence behind them, its policies and constraints, its audiences and its competitive set. Everything written afterwards — every page, every fix, every description — is written from it." },
      { headline: "Two sources. No third.", body: "It draws on the brand's own website corpus and the briefs and data the brand supplies. Nothing else feeds it. It is built and maintained as part of the engagement rather than handed over as software to operate." },
      { headline: "Conflicts get ruled on, not averaged.", body: "When two pages state the same fact differently, the difference is logged and a ruling is made about which is correct. It is not quietly harmonised into a middle value, because a tidy wrong answer is worse than a visible conflict." },
      { headline: "It stores brand truth. It does not invent it.", body: "Facts that cannot be verified are logged as open items for the brand to rule on, not asserted. Values that must never be tidied up — the specific numbers and phrasings a brand depends on — are protected from being cleaned into inaccuracy." },
    ],
  },
  fit: {
    eyebrow: "WHO THIS FITS", headline: ["Brands whose buyers", "already moved."], lead: "The work matters most where customers have started asking an assistant before they ask you.",
    verticals: [["E-commerce and D2C", "Which product suits a specific need, and what the materials, conditions and policies actually are"], ["SaaS", "Whether a tool fits a stack, what it integrates with, and what it cannot do"], ["Services", "Who is qualified, what they cover, and whether they work the way a buyer needs"], ["Healthcare", "What something does, what evidence sits behind it, and what the limits are"], ["Education", "What a programme leads to, who it suits, and what is required to get in"]],
    situationsHeadline: "Three situations this is built for.", situations: ["Organic traffic holding while discovery falls — the shape of demand moving into answers before it reaches you.", "A suspicion that engines describe you with the wrong category or stale facts, and no way to see whether that is true.", "Needing a defensible baseline before committing budget to AI-facing content."],
  },
  work: { eyebrow: "OUR WORK", headline: ["What actually", "gets handed over."], lead: "Engagements are described by what was produced and who owns each remaining step.", honesty: "These pages describe work delivered and prepared. They do not claim measured change in AI answers, search traffic or revenue." },
  case: {
    eyebrow: "CLIENT ANONYMISED · E-COMMERCE AND D2C", headline: ["Five buying guides", "for shoppers comparing", "cooling sheets."], lead: "A consumer bedding brand needed a connected set of answers for shoppers comparing cooling sheets, with product claims reviewed and publishing responsibilities clearly assigned.",
    sections: [
      { headline: "A material name is not an answer.", body: "A shopper choosing sheets is weighing feel, warmth, fit, care and whatever evidence sits behind a cooling claim. Those questions needed a coherent set of answers across the brand's category content and product information." },
      { headline: "Five final pieces.", body: "Covering the main buying decisions: choosing cooling sheets, comparing options for hot sleepers, understanding heat and moisture comfort, evaluating materials and cooling claims, and caring for the sheets." },
      { headline: "Cool at first touch is not cool all night.", body: "The guides separated the feeling of a cool surface from comfort later in the night, and kept the limits of a product test beside the claim it supported. That gave shoppers better questions to ask, and stopped a narrow test result being read as a promise about the whole night." },
      { headline: "Where this stops.", body: "The documented result is an approved five-piece content package and a corresponding technical hand-off, with client approval and the division of publishing responsibilities on record. Full deployment and final live-page verification are separate milestones. No measured change in AI recommendations, search traffic or revenue is established here." },
    ],
    delivered: "Delivered: Finished page copy · Titles and descriptions · Product and supporting links · Publishing guidance.", prepared: "Prepared: Structured-data materials, prepared for the technical team.", tableHeadline: "Who did what.", table: [["Wrath", "Created the five final content pieces, incorporated the approved inputs, and supplied the corresponding structured-data materials."], ["Brand team", "Reviewed the content and product inputs, approved the package, and took responsibility for building the content pages."], ["Technical partner", "Was assigned the corresponding technical implementation, with the final approach subject to the brand's own technical decisions."]],
  },
  library: { eyebrow: "LIBRARY", headline: ["Field guides."], lead: "Working explanations of how AI answers get built, and what that means for a brand inside them." },
  about: { eyebrow: "ABOUT", headline: ["Who is behind this."], lead: "Wrath AI.", principles: [["MEASUREMENT BEFORE OPINION", "Every engagement opens with a reading, not a recommendation."], ["REAL ENGINES, NOT PROXIES", "Real questions go to real answer engines, and what comes back is kept."], ["FIXES, NOT JUST FINDINGS", "A finding without the work to resolve it is half a deliverable."], ["BRAND TRUTH AS INFRASTRUCTURE", "Decide what is true once, then write everything from it."]], facts: [] },
  dimensions: homepage.blocks.dimensions.items,
} as const;

export const meta = {
  why: ["Why now — Wrath", "Why now", "Search returns a field of options. An answer returns a conclusion. Why visibility inside an AI answer is a different problem from visibility in search.", "/why-ai-answers"],
  measurement: ["What we measure — Wrath", "What we measure", "Seven dimensions of how AI finds, reads, trusts and represents a brand, with the engine response behind every finding kept and re-readable.", "/measurement"],
  fixes: ["What we fix — Wrath", "What we fix", "Four workstreams covering the surfaces that shape what an engine says: technical, content, authority and user voice.", "/fixes"],
  truth: ["Brand Source of Truth — Wrath", "Brand Source of Truth", "One approved factual foundation for everything a brand says, so contradictions get ruled on rather than repeated.", "/brand-source-of-truth"],
  fit: ["Who this fits — Wrath", "Who this fits", "Built for e-commerce and D2C, SaaS, services, healthcare and education brands whose buyers have started asking an assistant first.", "/who-we-work-with"],
  work: ["Work — Wrath", "Work", "Engagements described by what was produced and who owns each remaining step.", "/work"],
  case: ["Five buying guides for a bedding brand — Wrath", "Five buying guides for a bedding brand", "A delivered five-piece content package with structured-data materials prepared and publishing responsibilities assigned.", "/work/bedding-content"],
  library: ["Field guides — Wrath", "Field guides", "Working explanations of how AI answers get built, and what that means for a brand inside them.", "/library"],
  about: ["About — Wrath", "About", "Wrath AI.", "/about"],
} as const;
