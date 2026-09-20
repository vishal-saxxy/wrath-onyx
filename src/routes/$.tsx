import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  head: () => ({ meta: [{ title: "This page isn't in the answer either." }, { name: "robots", content: "noindex" }] }),
  component: MissingPage,
});

function MissingPage() {
  return <main id="main-content" className="site-grid min-h-[calc(100vh-68px)] place-items-center"><div className="col-span-12 text-center"><h1 className="display-m">This page isn't in the answer either.</h1><Link to="/" className="interactive-press mt-8 inline-block font-medium text-signal-blue">Back to the homepage</Link></div></main>;
}