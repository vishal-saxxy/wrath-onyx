import { createFileRoute, notFound } from "@tanstack/react-router";
export const Route = createFileRoute("/library")({
  beforeLoad: () => { throw notFound(); },
  head: () => ({ meta: [{ title: "Library" }, { name: "description", content: "Library" }, { property: "og:title", content: "Library" }, { property: "og:description", content: "Library" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => null,
});
