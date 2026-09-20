import { createFileRoute, notFound } from "@tanstack/react-router";
export const Route = createFileRoute("/why-ai-answers")({
  beforeLoad: () => { throw notFound(); },
  head: () => ({ meta: [{ title: "Why now" }, { name: "description", content: "Why now" }, { property: "og:title", content: "Why now" }, { property: "og:description", content: "Why now" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => null,
});
