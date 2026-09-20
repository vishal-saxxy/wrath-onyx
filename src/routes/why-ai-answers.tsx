import { createFileRoute } from "@tanstack/react-router";
import { PageClose, PageHero, ReadingSections, WhyDiagram } from "@/components/kasparro/inner-pages";
import { inner, meta } from "@/content/inner-pages";
import { pageMeta } from "@/lib/page-meta";
export const Route = createFileRoute("/why-ai-answers")({ head:()=>pageMeta(...meta.why), component:WhyPage });
function WhyPage(){return <main id="main-content" className="inner-page"><PageHero {...inner.why}/><WhyDiagram/><ReadingSections sections={inner.why.sections}/><PageClose/></main>}
