import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/work/bedding-content")({
  beforeLoad: () => {
    throw notFound();
  },
  component: () => null,
});
