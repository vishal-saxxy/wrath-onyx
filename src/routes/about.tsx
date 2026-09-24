import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/wrath/inner-pages";
import { inner, meta } from "@/content/inner-pages";
import { pageMeta } from "@/lib/page-meta";
export const Route=createFileRoute("/about")({staticData:{sitemap:true},head:()=>pageMeta(...meta.about),component:AboutPage});
function AboutPage(){return <main id="main-content" className="inner-page about-page"><PageHero {...inner.about}/><section className="about-body"><div className="site-grid"><div className="col-start-2 col-span-10 principle-grid">{inner.about.principles.map(([label,line])=><article key={label}><span className="label-mono">{label}</span><p>{line}</p></article>)}</div><div className="col-start-2 col-span-10 facts-strip">{inner.about.facts.map(fact=><span key={fact}>{fact}</span>)}</div></div></section></main>}
