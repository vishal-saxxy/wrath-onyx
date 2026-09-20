import { createFileRoute, notFound } from "@tanstack/react-router";
export const Route = createFileRoute("/work")({
  beforeLoad: () => { throw notFound(); },
  head: () => ({ meta: [{ title: "Work" }, { name: "description", content: "Work" }, { property: "og:title", content: "Work" }, { property: "og:description", content: "Work" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => null,
});
