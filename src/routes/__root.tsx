import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadContent, Link, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_INDEXABLE } from "@/lib/site";
import appCss from "../styles.css?url";

const nav = [
  ["Why now", "/why-ai-answers"],
  ["What we measure", "/measurement"],
  ["What we fix", "/fixes"],
  ["Work", "/work"],
  ["Library", "/library"],
] as const;
const more = [["Who this fits", "/who-we-work-with"], ["Brand Source of Truth", "/brand-source-of-truth"], ["About", "/about"]] as const;
const demo = "https://www.linkedin.com/in/vishal-kumar-gupta-b5a664252/";

function NotFoundComponent() {
  return <main id="main-content" className="site-grid min-h-[calc(100vh-68px)] place-items-center"><div className="col-span-12 text-center"><h1 className="display-m">This page isn't in the answer either.</h1><Link to="/" className="interactive-press mt-8 inline-block font-medium text-signal-blue">Back to the homepage</Link></div></main>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  staticData: { sitemap: false },
  head: () => ({
    meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=1440" }, { property: "og:site_name", content: "wrath" }, { property: "og:locale", content: "en_GB" }, ...(SITE_INDEXABLE ? [] : [{ name: "robots", content: "noindex, nofollow" }])],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preload", href: "/fonts/inter-tight-latin-wght-normal.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "preload", href: "/fonts/inter-latin-wght-normal.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "preload", href: "/fonts/ibm-plex-mono-400.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "preload", href: "/fonts/ibm-plex-mono-500.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "preload", href: "/fonts/caveat-latin-wght-normal.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return <html lang="en"><head><HeadContent/></head><body><a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-[4px] bg-ink px-4 py-2 text-paper-raised focus:translate-y-0">Skip to content</a>{children}<Scripts/></body></html>;
}

function Header() {
  return <header className="sticky top-0 z-50 h-[68px] border-b bg-paper"><div className="site-grid h-full items-center"><Link to="/" className="col-span-2 font-display text-2xl font-semibold">wrath</Link><nav className="col-span-7 flex items-center justify-center gap-7">{nav.map(([label, to]) => <Link key={to} to={to} className="text-sm font-medium hover:text-signal-blue">{label}</Link>)}</nav><div className="col-span-3 flex justify-end gap-2"><Button variant="secondary" asChild><a href={demo} rel="noopener">Discuss your brand</a></Button><Button asChild><a href={demo} rel="noopener">Get a free demo<ArrowRight aria-hidden="true" focusable="false" size={16} strokeWidth={1.5}/></a></Button></div></div></header>;
}

function Footer() {
  return <footer className="dark-band border-t border-hairline-dark bg-ink text-paper-raised"><div className="site-grid py-20"><div className="col-span-4"><Link to="/" className="font-display text-3xl font-semibold">wrath</Link><p className="lead mt-6 text-grey-on-dark">Answer Engine Optimisation, end to end.</p></div><div className="col-span-8 grid grid-cols-3 gap-6"><FooterColumn heading="Explore" links={nav}/><FooterColumn heading="More" links={more}/><div><h2 className="label-mono text-grey-on-dark">Start</h2><div className="mt-5 flex flex-col items-start gap-3"><a href={demo} rel="noopener">Discuss your brand</a><a href={demo} rel="noopener">Get a free demo</a></div></div></div><div className="col-span-12 mt-20 border-t border-hairline-dark pt-6 text-right text-sm text-grey-on-dark"><span>© 2026 wrath. All rights reserved.</span></div></div></footer>;
}
function FooterColumn({ heading, links }: { heading: string; links: ReadonlyArray<readonly [string, string]> }) {
  return <div><h2 className="label-mono text-grey-on-dark">{heading}</h2><nav className="mt-5 flex flex-col items-start gap-3">{links.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}</nav></div>;
}
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><Header/><Outlet/><Footer/></QueryClientProvider>; }
