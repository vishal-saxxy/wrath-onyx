import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Kasparro" },
    { name: "description", content: "Answer Engine Optimisation, end to end." },
    { property: "og:title", content: "Kasparro" },
    { property: "og:description", content: "Answer Engine Optimisation, end to end." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});
function Index() { return <main id="main-content" className="min-h-[calc(100vh-68px)]"/>; }
