export const illustrative = {
  brands: ["Northmere", "Cottonwell", "Halden Home", "Your brand"],
  sources: ["reviewledger.example", "sleepguide.example", "forum.example", "hometest.example"],
  heroQuestion: "Best cooling bed sheets for hot sleepers?",
  engines: ["ChatGPT", "Gemini", "Claude", "Perplexity"],
  answerHeader: "AI answer",
  sourceRowLabel: "Sources",
  answerBody: "For hot sleepers, the usual recommendations are percale cotton, eucalyptus lyocell and linen, chosen for breathability and moisture handling.",
  notMentionedTooltip: "Absent from this answer. Not ranked low — not surfaced.",
  heroAnnotation: "Where is your brand?",
  shiftAnnotation: "No page two in an answer.",
  evidenceSentence: "Northmere and Cottonwell are usually recommended for hot sleepers because both use breathable weaves.",
  evidenceClaimSpan: "because both use breathable weaves",
  evidenceSource: "reviewledger.example",
  capturePanel: [
    { label: "SOURCE", value: "reviewledger.example" },
    { label: "WHAT WAS SAID", value: "…both use breathable weaves…" },
    { label: "WHAT IT SUPPORTS", value: "The breathability claim in this sentence" },
  ],
  bsotFragments: [
    { label: "PRODUCT PAGE", value: "Machine washable, warm" },
    { label: "CARE PAGE", value: "Machine washable, cold" },
    { label: "FAQ", value: "Hand wash recommended" },
  ],
  bsotRecordRows: ["Entities", "Facts", "Claims", "Evidence", "Policies", "Constraints", "Audiences", "Competitors"],
  conflictLabel: "Conflict",
  ruledLabel: "Ruled",
  illustrativeLabel: "Illustrative",
  fictionFootnote: "Brands and sources shown are fictional.",
  notComputableLabel: "Not computable",
} as const;

export type IllustrativeContent = typeof illustrative;
