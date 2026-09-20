import { createFileRoute, notFound } from "@tanstack/react-router";
export const Route = createFileRoute("/about")({
  beforeLoad: () => { throw notFound(); },
  head: () => ({ meta: [{ title: "About" }, { name: "description", content: "About" }, { property: "og:title", content: "About" }, { property: "og:description", content: "About" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => null,
});
