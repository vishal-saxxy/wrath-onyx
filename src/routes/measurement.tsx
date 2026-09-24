import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { EvidenceFrame, MeasurementSystem, PageClose, PageHero, ReadingSections } from "@/components/wrath/inner-pages";
import { homepage } from "@/content/homepage";
import { inner, meta } from "@/content/inner-pages";
import { pageMeta } from "@/lib/page-meta";
export const Route=createFileRoute("/measurement")({staticData:{sitemap:true},head:()=>pageMeta(...meta.measurement),component:MeasurementPage});
function MeasurementPage(){return <main id="main-content" className="inner-page"><PageHero {...inner.measurement}/><MeasurementSystem/><ReadingSections sections={[inner.measurement.sections[0]]}/><div className="site-grid"><div className="col-start-3 col-span-8"><EvidenceFrame/></div></div><ReadingSections sections={inner.measurement.sections.slice(1)}/><section className="reading-section"><div className="site-grid"><div className="col-start-3 col-span-7"><h2 className="display-m">{inner.measurement.limitsHeadline}</h2><ul className="green-list">{inner.measurement.limits.map(item=><li key={item}>{item}</li>)}</ul></div></div></section><section className="reading-section"><div className="site-grid"><div className="col-start-3 col-span-7"><h2 className="display-m">{inner.measurement.start.headline}</h2><p className="body-copy">{inner.measurement.start.body}</p><Button size="lg" asChild><a href={homepage.demoUrl} rel="noopener">{homepage.primaryCta}</a></Button></div></div></section><PageClose/></main>}
