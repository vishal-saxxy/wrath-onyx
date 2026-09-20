import { createFileRoute, notFound } from "@tanstack/react-router";
export const Route = createFileRoute("/measurement")({
  beforeLoad: () => { throw notFound(); },
  head: () => ({ meta: [{ title: "What we measure" }, { name: "description", content: "What we measure" }, { property: "og:title", content: "What we measure" }, { property: "og:description", content: "What we measure" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => null,
});
