import { createFileRoute } from "@tanstack/react-router";
import { PageClose, PageHero, ReadingSections, TruthDiagram } from "@/components/kasparro/inner-pages";
import { inner, meta } from "@/content/inner-pages";
import { pageMeta } from "@/lib/page-meta";
export const Route=createFileRoute("/brand-source-of-truth")({staticData:{sitemap:true},head:()=>pageMeta(...meta.truth),component:TruthPage});
function TruthPage(){return <main id="main-content" className="inner-page"><PageHero {...inner.truth}/><TruthDiagram/><ReadingSections sections={inner.truth.sections}/><PageClose/></main>}
