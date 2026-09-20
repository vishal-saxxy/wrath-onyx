import { createFileRoute, notFound } from "@tanstack/react-router";
export const Route = createFileRoute("/brand-source-of-truth")({
  beforeLoad: () => { throw notFound(); },
  head: () => ({ meta: [{ title: "Brand Source of Truth" }, { name: "description", content: "Brand Source of Truth" }, { property: "og:title", content: "Brand Source of Truth" }, { property: "og:description", content: "Brand Source of Truth" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => null,
});
