import { createFileRoute } from "@tanstack/react-router";
import { PageClose, PageHero, ReadingSections } from "@/components/kasparro/inner-pages";
import { inner, meta } from "@/content/inner-pages";
import { pageMeta } from "@/lib/page-meta";
export const Route=createFileRoute("/work/bedding-content")({staticData:{sitemap:true},head:()=>pageMeta(...meta.case),component:CasePage});
function CasePage(){const [first,pieces,third,last]=inner.case.sections;return <main id="main-content" className="inner-page"><PageHero {...inner.case}/><ReadingSections sections={[first,pieces]}/><div className="site-grid"><div className="col-start-3 col-span-7 delivery-lines"><p>{inner.case.delivered}</p><p>{inner.case.prepared}</p></div></div><ReadingSections sections={[third]}/><section className="reading-section"><div className="site-grid"><div className="col-start-3 col-span-8"><h2 className="display-m">{inner.case.tableHeadline}</h2><div className="responsibility-table">{inner.case.table.map(([role,body])=><div key={role}><strong>{role}</strong><p>{body}</p></div>)}</div></div></div></section><ReadingSections sections={[last]}/><PageClose/></main>}
