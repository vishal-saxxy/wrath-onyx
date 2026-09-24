import { createFileRoute } from "@tanstack/react-router";
import { PageClose, PageHero, ReadingSections, WhyDiagram } from "@/components/wrath/inner-pages";
import { inner, meta } from "@/content/inner-pages";
import { pageMeta } from "@/lib/page-meta";
export const Route = createFileRoute("/why-ai-answers")({staticData:{sitemap:true}, head:()=>pageMeta(...meta.why), component:WhyPage });
function WhyPage(){return <main id="main-content" className="inner-page"><PageHero {...inner.why}/><WhyDiagram/><ReadingSections sections={inner.why.sections}/><PageClose/></main>}
