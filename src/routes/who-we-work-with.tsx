import { createFileRoute } from "@tanstack/react-router";
import { PageClose, PageHero } from "@/components/wrath/inner-pages";
import { inner, meta } from "@/content/inner-pages";
import { pageMeta } from "@/lib/page-meta";
export const Route=createFileRoute("/who-we-work-with")({staticData:{sitemap:true},head:()=>pageMeta(...meta.fit),component:FitPage});
function FitPage(){return <main id="main-content" className="inner-page"><PageHero {...inner.fit}/><section className="reading-section"><div className="site-grid"><div className="col-start-2 col-span-10 vertical-panels">{inner.fit.verticals.map(([name,question])=><article key={name}><span className="label-mono">{name}</span><p>{question}</p></article>)}</div></div></section><section className="reading-section"><div className="site-grid"><div className="col-start-3 col-span-7"><h2 className="display-m">{inner.fit.situationsHeadline}</h2><ul className="green-list">{inner.fit.situations.map(item=><li key={item}>{item}</li>)}</ul></div></div></section><PageClose/></main>}
