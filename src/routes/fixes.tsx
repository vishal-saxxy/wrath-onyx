import { createFileRoute } from "@tanstack/react-router";
import { FixStreams, PageClose, PageHero, ReadingSections } from "@/components/kasparro/inner-pages";
import { inner, meta } from "@/content/inner-pages";
import { pageMeta } from "@/lib/page-meta";
export const Route=createFileRoute("/fixes")({head:()=>pageMeta(...meta.fixes),component:FixesPage});
function FixesPage(){return <main id="main-content" className="inner-page"><PageHero {...inner.fixes}/><FixStreams/><ReadingSections sections={inner.fixes.sections}/><PageClose/></main>}
