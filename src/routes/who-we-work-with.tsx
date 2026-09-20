import { createFileRoute, notFound } from "@tanstack/react-router";
export const Route = createFileRoute("/who-we-work-with")({
  beforeLoad: () => { throw notFound(); },
  head: () => ({ meta: [{ title: "Who this fits" }, { name: "description", content: "Who this fits" }, { property: "og:title", content: "Who this fits" }, { property: "og:description", content: "Who this fits" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => null,
});
