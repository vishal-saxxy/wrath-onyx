import { createFileRoute } from "@tanstack/react-router";
import { PageClose, PageHero } from "@/components/wrath/inner-pages";
import { inner, meta } from "@/content/inner-pages";
import { pageMeta } from "@/lib/page-meta";
export const Route=createFileRoute("/library")({staticData:{sitemap:true},head:()=>pageMeta(...meta.library),component:LibraryPage});
function LibraryPage(){return <main id="main-content" className="inner-page library-page"><PageHero {...inner.library}/><div className="empty-guide-list"/><PageClose/></main>}
