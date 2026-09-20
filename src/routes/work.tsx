import { createFileRoute } from "@tanstack/react-router";
import { PageClose, PageHero, SectionLink, WorkSignature } from "@/components/kasparro/inner-pages";
import { inner, meta } from "@/content/inner-pages";
import { pageMeta } from "@/lib/page-meta";
export const Route=createFileRoute("/work")({head:()=>pageMeta(...meta.work),component:WorkPage});
function WorkPage(){return <main id="main-content" className="inner-page"><PageHero {...inner.work}/><p className="work-honesty">{inner.work.honesty}</p><section className="reading-section"><div className="site-grid"><div className="col-start-2 col-span-10 delivery-card"><WorkSignature/><SectionLink to="/work/bedding-content">Know more about it</SectionLink></div></div></section><PageClose/></main>}
