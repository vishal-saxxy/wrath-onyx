import { createFileRoute, notFound } from "@tanstack/react-router";
export const Route = createFileRoute("/fixes")({
  beforeLoad: () => { throw notFound(); },
  head: () => ({ meta: [{ title: "What we fix" }, { name: "description", content: "What we fix" }, { property: "og:title", content: "What we fix" }, { property: "og:description", content: "What we fix" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => null,
});
