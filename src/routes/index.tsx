import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  ChevronUp,
  ChevronDown,
  Cloud,
  FileText,
  GraduationCap,
  HeartPulse,
  Search,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { BandHeader } from "@/components/kasparro/components";
import { iconMap, type IconName } from "@/components/kasparro/icon-map";
import { Button } from "@/components/ui/button";
import { diagramLabels, homepage } from "@/content/homepage";
import { illustrative } from "@/content/illustrative";
import { useHomepageMotion } from "@/hooks/use-homepage-motion";
import { canonicalUrl } from "@/lib/site";
import geminiMark from "@/assets/gemini.svg.asset.json";

export const Route = createFileRoute("/")({staticData:{sitemap:true},
  head: () => ({
    meta: [
      { title: "Kasparro — Be the brand AI recommends." },
      { name: "description", content: "Measure what AI says about your brand, find what sits behind it, fix it, and verify the change. Answer Engine Optimisation, end to end." },
      { property: "og:title", content: "Kasparro — Be the brand AI recommends." },
      { property: "og:description", content: "Measure what AI says about your brand, find what sits behind it, fix it, and verify the change. Answer Engine Optimisation, end to end." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl("/") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kasparro — Be the brand AI recommends." },
      { name: "twitter:description", content: "Measure what AI says about your brand, find what sits behind it, fix it, and verify the change. Answer Engine Optimisation, end to end." },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/") }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Kasparro", url: canonicalUrl("/"), foundingDate: "2026", address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" } }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "Kasparro", url: canonicalUrl("/") }) },
    ],
  }),
  component: Homepage,
});

const b = homepage.blocks;
const toneClasses = {
  blue: "border-signal-blue bg-signal-blue-tint text-signal-blue",
  orange: "border-signal-orange bg-signal-orange-tint text-ink",
  green: "border-signal-green bg-signal-green-tint text-signal-green",
} as const;

function Headline({ lines }: { lines: readonly string[] }) {
  return <>{lines.map((line, index) => <span className="block" key={line}>{line}{index < lines.length - 1 ? <br /> : null}</span>)}</>;
}

function TextLink({ label, to }: { label: string; to: string }) {
  return <Link to={to} className="interactive-press mt-8 inline-flex items-center gap-2 font-medium text-signal-blue">{label}<ArrowRight aria-hidden="true" focusable="false" size={16} strokeWidth={1.5}/></Link>;
}

function IllustrativeLabel() {
  return <span className="illustrative-label">{illustrative.illustrativeLabel}</span>;
}

function HeroAnswer({ quiet = false, featured = false, activeBrand, onBrand, sourceActive, onSource }: { quiet?: boolean; featured?: boolean; activeBrand?: string | null; onBrand?: (brand: string) => void; sourceActive?: boolean; onSource?: () => void }) {
  return <article className={`home-answer layered-panel ${quiet ? "home-answer-quiet" : ""} ${sourceActive ? "source-support-active" : ""}`}>
    <header className="answer-heading">{featured ? <Sparkles className="answer-sparkle" aria-hidden="true" focusable="false" size={18} strokeWidth={1.5}/> : <span className="answer-dot"/>}<span>{illustrative.answerHeader}</span>{featured ? <ChevronUp className="answer-chevron" aria-hidden="true" focusable="false" size={18} strokeWidth={1.5}/> : null}</header>
    <div className="answer-sources"><span className="label-mono text-grey">{illustrative.sourceRowLabel}</span>{illustrative.sources.slice(0, 3).map(source => <button type="button" className={`source-chip motion-control ${sourceActive ? "is-active" : ""}`} key={source} onClick={onSource}>{source}</button>)}</div>
    <p className="body-copy answer-copy">{illustrative.answerBody}</p>
    <div className="answer-brand-list">
      {illustrative.brands.map((brand, index) => <button type="button" className={`answer-brand-row motion-control ${activeBrand === brand ? "is-active" : ""}`} key={brand} onClick={() => onBrand?.(brand)}><span>{brand}</span>{featured && index < 3 ? <span className="brand-dash" aria-hidden="true"/> : null}{!quiet && index === 3 ? <span className="missing-status-wrap"><span className="status-red label-mono">{b.hero.notMentioned}</span><span className="missing-panel label-mono">{b.hero.notMentionedDetail}</span></span> : null}</button>)}
    </div>
  </article>;
}

const heroFeatures = [
  { first: "Real sources.", second: "Not guesses.", Icon: FileText, tone: "blue" },
  { first: "Verifiable", second: "reasons.", Icon: ShieldCheck, tone: "green" },
  { first: "Clear next", second: "steps.", Icon: BarChart3, tone: "blue" },
] as const;

function EngineMark({ engine }: { engine: (typeof illustrative.engines)[number] }) {
  if (engine === "Gemini") return <img className="engine-logo" src={geminiMark.url} alt="" aria-hidden="true"/>;
  return <span className="engine-dot"/>;
}

function Homepage() {
  useHomepageMotion();
  return <main id="main-content" className="homepage">
    <CollapsedStepRail/>
    <HeroBlock/>
    <ShiftBlock/>
    <ConsiderationBlock/>
    <EvidenceBlock/>
    <DimensionsBlock/>
    <MovementBlock/>
    <ArtifactsBlock/>
    <TruthBlock/>
    <WorkBlock/>
    <CloseBlock/>
  </main>;
}

function CollapsedStepRail() {
  return <div className="collapsed-step-rail" aria-hidden="true">{b.hero.rail.map(step => <span className="collapsed-step" data-step={step.label.toLowerCase()} key={step.number}><span className="label-mono">{step.number}</span><span>{step.label}</span></span>)}</div>;
}

function HeroBlock() {
  const [activeEngine, setActiveEngine] = useState<string | null>(null);
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const [sourceActive, setSourceActive] = useState(false);
  return <section className="home-band hero-band">
    <div className="site-grid hero-grid">
      <div className="col-span-5 hero-copy">
        <div className="label-mono text-grey">{b.hero.eyebrow}</div>
        <h1 className="display-xl hero-title"><span className="block">{b.hero.headline[0]}</span><span className="block"><span className="hero-ai">{b.hero.headline[1].slice(0, 2)}</span>{b.hero.headline[1].slice(2)}</span></h1>
        <p className="lead hero-descriptor">{b.hero.descriptor}</p>
        <p className="body-copy hero-lead">{b.hero.lead}</p>
        <div className="hero-actions"><Button size="lg" asChild><a href={homepage.demoUrl} rel="noopener">{homepage.primaryCta}<ArrowRight aria-hidden="true" focusable="false" size={16} strokeWidth={1.5}/></a></Button><Button size="lg" variant="secondary" asChild><a href={homepage.demoUrl} rel="noopener">{homepage.secondaryCta}</a></Button></div>
        <p className="small text-grey hero-micro">{b.hero.micro}</p>
      </div>
      <div className="col-span-7 hero-visual" role="img" aria-label={diagramLabels.hero}>
        <IllustrativeLabel/>
        <div className="hero-halo" aria-hidden="true"/>
        <div className="hero-prompt"><Search aria-hidden="true" focusable="false" size={20} strokeWidth={1.5}/><span className="prompt-question">{illustrative.heroQuestion}</span><span className="send-pulse"><Send aria-hidden="true" focusable="false" size={20} strokeWidth={1.5}/></span></div>
        <div className="engine-row">{illustrative.engines.map((engine, index) => <button type="button" className={`engine-chip motion-control ${activeEngine === engine ? "is-active" : activeEngine ? "is-dimmed" : ""}`} style={{ "--item-index": index } as CSSProperties} key={engine} onClick={() => setActiveEngine(current => current === engine ? null : engine)}><EngineMark engine={engine}/>{engine}</button>)}</div>
        <svg className={`hero-paths ${activeEngine ? "has-selection" : ""}`} viewBox="0 0 720 180" aria-hidden="true" focusable="false"><path className={activeEngine && activeEngine !== illustrative.engines[0] ? "is-dimmed" : ""} d="M32 20 C 48 72, 128 104, 194 140"/><path className={activeEngine && activeEngine !== illustrative.engines[1] ? "is-dimmed" : ""} d="M160 20 C 176 72, 246 106, 308 140"/><path className={activeEngine && activeEngine !== illustrative.engines[2] ? "is-dimmed" : ""} d="M288 20 C 302 72, 366 106, 422 140"/><path className={activeEngine && activeEngine !== illustrative.engines[3] ? "is-dimmed" : ""} d="M440 20 C 450 72, 500 106, 536 140"/>{illustrative.engines.map((engine, index) => <circle className={`travelling-dot dot-${index + 1} ${activeEngine && activeEngine !== engine ? "is-dimmed" : ""}`} key={engine} r="4"/>)}</svg>
        <div className="engine-annotation"><span>Multiple AI engines.<br/>One answer.</span><svg viewBox="0 0 104 54" aria-hidden="true" focusable="false"><path d="M98 5C91 25 70 39 11 47m14 5L9 48l11-12"/></svg></div>
        <div className="hero-feature-stack">{heroFeatures.map(({ first, second, Icon, tone }) => <article className="hero-feature-card" key={first}><Icon className={`feature-icon feature-${tone}`} aria-hidden="true" focusable="false" size={18} strokeWidth={1.5}/><span>{first}</span><span>{second}</span></article>)}</div>
        <svg className="hero-feature-connectors" viewBox="0 0 720 550" aria-hidden="true" focusable="false"><path d="M152 247 C 95 247, 100 320, 180 320"/><path d="M164 351 C 108 351, 112 418, 180 418"/><path d="M152 455 C 100 455, 108 520, 180 520"/>{[[152,247],[180,320],[164,351],[180,418],[152,455],[180,520]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3"/>)}</svg>
        <div className="hero-answer-wrap"><HeroAnswer featured activeBrand={activeBrand} onBrand={brand => setActiveBrand(current => current === brand ? null : brand)} sourceActive={sourceActive} onSource={() => setSourceActive(current => !current)}/></div>
        <div className="hero-annotation"><svg viewBox="0 0 260 54" aria-hidden="true" focusable="false"><path d="M252 47C196 51 117 45 10 10m13-3L8 9l9 10"/></svg><span className="annotation">{illustrative.heroAnnotation}</span></div>
        <p className="label-mono text-grey fiction-note">{illustrative.fictionFootnote}</p>
      </div>
      <svg className="hero-contours" viewBox="0 0 620 220" aria-hidden="true" focusable="false"><path d="M-20 196C86 124 154 231 260 164S440 77 640 146"/><path d="M-28 216C77 147 164 251 273 185S457 101 644 166"/><path d="M-35 174C74 100 144 207 250 139S431 52 634 123"/><path d="M-42 151C62 78 133 181 239 116S417 28 629 99"/></svg>
      <div className="col-span-12 hero-rail">
        <div className="step-rail">{b.hero.rail.map(step => <div className="step-item" key={step.number}><span className="label-mono">{step.number}</span><span>{step.label}</span></div>)}</div>
        <p className="label-mono rail-caption">{b.hero.railCaption}</p>
      </div>
    </div>
  </section>;
}

function ShiftBlock() {
  return <section className="home-band dark-band shift-band">
    <div className="site-grid">
      <div className="col-span-5"><BandHeader eyebrow={b.shift.eyebrow} headline={<Headline lines={b.shift.headline}/>} lead={b.shift.lead}/><TextLink label={b.shift.link} to={b.shift.linkHref}/></div>
      <div className="col-span-7 shift-visual" role="img" aria-label={diagramLabels.shift}>
        <IllustrativeLabel/>
        <div className="shift-panel search-panel"><div className="label-mono">{b.shift.traditionalLabel}</div><p className="small text-grey-on-dark">{b.shift.traditionalCaption}</p><div className="search-field"><Search aria-hidden="true" size={17}/></div><div className="search-bars" aria-hidden="true">{Array.from({ length: 9 }).map((_, index) => <span key={index}/>)}</div></div>
        <div className="shift-cross" aria-hidden="true"><ArrowRight size={24} strokeWidth={1.5}/></div>
        <div className="shift-panel answer-panel"><div className="label-mono">{b.shift.answerLabel}</div><p className="small text-grey-on-dark">{b.shift.answerCaption}</p><div className="compact-answer"><div className="compact-line"/>{illustrative.brands.slice(0, 3).map(brand => <div className="compact-brand" key={brand}>{brand}</div>)}</div><div className="answer-edge-anchor"><div className="answer-hard-edge"/><div className="shift-annotation"><svg viewBox="0 0 72 42" aria-hidden="true" focusable="false"><path d="M66 37C47 31 25 19 7 5m2 13L6 4l15 4"/></svg><span className="annotation">{illustrative.shiftAnnotation}</span></div></div></div>
      </div>
    </div>
  </section>;
}

function ConsiderationBlock() {
  const [selected, setSelected] = useState(3);
  useEffect(() => {
    const selectPhase = (event: Event) => setSelected((event as CustomEvent<number>).detail);
    window.addEventListener("homepage-consideration-phase", selectPhase);
    return () => window.removeEventListener("homepage-consideration-phase", selectPhase);
  }, []);
  return <section className="home-band consideration-band">
    <div className="pin-stage site-grid">
      <div className="col-span-5"><BandHeader eyebrow={b.consideration.eyebrow} headline={<Headline lines={b.consideration.headline}/>} lead={b.consideration.lead}/><TextLink label={b.consideration.link} to={b.consideration.linkHref}/></div>
       <div className="col-start-6 col-span-7 consideration-answer" role="img" aria-label={diagramLabels.consideration}><LayeredAnswer selected={selected}/><div className="pin-step label-mono" aria-hidden="true"><span className={selected === 1 ? "is-active" : ""}>{b.consideration.cards[0].name}</span><span className={selected === 2 ? "is-active" : ""}>{b.consideration.cards[1].name}</span><span className={selected === 3 ? "is-active" : ""}>{b.consideration.cards[2].name}</span></div></div>
       <div className="col-span-12 signal-cards">{b.consideration.cards.map((card, index) => { const Icon = iconMap[card.icon as IconName]; const pass = index + 1; return <button type="button" className={`signal-card motion-control ${selected === pass ? "is-active" : ""}`} onClick={() => setSelected(pass)} key={card.name}><span className={`signal-card-icon ${toneClasses[card.tone]}`}><Icon aria-hidden="true" focusable="false" size={22} strokeWidth={1.5}/></span><h3 className="font-display text-2xl font-semibold">{card.name}</h3><p className="body-copy text-graphite">{card.copy}</p></button>; })}</div>
      <p className="col-span-12 label-mono text-grey consideration-note">{b.consideration.note}</p>
    </div>
  </section>;
}

function LayeredAnswer({ selected }: { selected: number }) {
  const answer = illustrative.evidenceSentence;
  const firstBrand = illustrative.brands[0];
  const brandEnd = firstBrand.length;
  const claimAt = answer.indexOf(illustrative.evidenceClaimSpan);
  return <article className="layered-answer layered-panel" data-selected={selected}><IllustrativeLabel/><header className="answer-heading"><span className="answer-dot"/><span>{illustrative.answerHeader}</span></header><p className="body-copy"><span className="highlight-blue">{firstBrand}</span>{answer.slice(brandEnd, claimAt)}<span className="highlight-orange">{illustrative.evidenceClaimSpan}</span>{answer.slice(claimAt + illustrative.evidenceClaimSpan.length)}</p><div className="answer-brand-list">{illustrative.brands.slice(0, 3).map(brand => <div className="answer-brand-row" key={brand}>{brand}</div>)}</div><div className="layered-sources">{illustrative.sources.slice(0, 3).map(source => <button type="button" className="source-chip source-green motion-control" key={source}>{source}</button>)}</div><svg className="layered-connectors" viewBox="0 0 600 110" aria-hidden="true" focusable="false"><path d="M92 4 C 110 52, 150 76, 190 105"/><path d="M300 4 C 300 48, 300 72, 300 105"/><path d="M508 4 C 490 52, 450 76, 410 105"/></svg></article>;
}

function EvidenceBlock() {
  const claimAt = illustrative.evidenceSentence.indexOf(illustrative.evidenceClaimSpan);
  const before = illustrative.evidenceSentence.slice(0, claimAt);
  const claim = illustrative.evidenceClaimSpan;
  const after = illustrative.evidenceSentence.slice(claimAt + illustrative.evidenceClaimSpan.length);
  return <section className="home-band dark-band evidence-band">
    <div className="site-grid evidence-heading"><div className="col-span-7 col-start-2"><BandHeader eyebrow={b.evidence.eyebrow} headline={<Headline lines={b.evidence.headline}/>} lead={b.evidence.lead}/></div></div>
    <div className="evidence-frame" role="img" aria-label={diagramLabels.evidence}><IllustrativeLabel/><div className="evidence-quote"><p>{before}<mark>{claim}</mark>{after}</p><svg viewBox="0 0 430 130" aria-hidden="true"><path d="M70 4 C 70 75, 270 65, 350 120"/></svg><span className="source-chip source-qualified">{illustrative.evidenceSource}</span></div><dl className="capture-panel">{illustrative.capturePanel.map(row => <div key={row.label}><dt className="label-mono text-grey-on-dark">{row.label}</dt><dd>{row.value}</dd></div>)}</dl></div>
    <div className="site-grid evidence-copy"><div className="col-start-2 col-span-7"><p className="label-mono">{b.evidence.limitOne}</p><p className="label-mono">{b.evidence.limitTwo}</p><TextLink label={b.evidence.link} to={b.evidence.linkHref}/></div></div>
  </section>;
}

function DimensionsBlock() {
  const orbitPoints = [[380,70],[625,190],[690,430],[545,650],[255,690],[70,470],[125,190]] as const;
  const [isolated, setIsolated] = useState<string | null>(null);
  return <section className="home-band dark-band dimensions-band">
    <div className="pin-stage site-grid dimensions-grid">
      <div className="col-span-5 dimensions-copy"><BandHeader eyebrow={b.dimensions.eyebrow} headline={<Headline lines={b.dimensions.headline}/>} lead={b.dimensions.lead}/><p className="label-mono dimensions-note">{b.dimensions.note}</p><TextLink label={b.dimensions.link} to={b.dimensions.linkHref}/></div>
      <div className="col-span-7 dimension-orbit"><IllustrativeLabel/><svg className="orbit-lines" viewBox="0 0 760 760" role="img" aria-label={diagramLabels.dimensions} focusable="false"><circle cx="380" cy="380" r="310"/><circle cx="380" cy="380" r="225"/><circle cx="380" cy="380" r="140"/>{orbitPoints.map((points, index) => { const item = b.dimensions.items[index]; return item ? <path className={isolated && isolated !== item.name ? "is-dimmed" : ""} key={item.name} d={`M${points[0]} ${points[1]} L380 380`}/> : null; })}</svg><Button type="button" variant="ghost" className="dimension-nucleus" onClick={() => setIsolated(null)}>{b.dimensions.nucleus}</Button><ol className="dimension-list">{b.dimensions.items.map((item, index) => { const Icon = iconMap[item.name as IconName]; const dimmed = isolated && isolated !== item.name; return <li className={`dimension-item dimension-item-${index + 1} ${dimmed ? "is-dimmed" : ""}`} key={item.name}><Button type="button" variant="ghost" className={`dimension-button dimension-${item.tone} ${isolated === item.name ? "is-active" : ""}`} onClick={() => setIsolated(current => current === item.name ? null : item.name)}><span className="dimension-group label-mono">{item.group}</span><Icon aria-hidden="true" focusable="false" size={19} strokeWidth={1.5}/><span className="dimension-name">{item.name}</span><span className="small">{item.question}</span></Button></li>; })}</ol></div>
    </div>
  </section>;
}

function MovementBlock() {
  const [activeSurface, setActiveSurface] = useState<string | null>(null);
  return <section className="home-band movement-band">
    <div className="site-grid movement-grid">
      <div className="col-span-5 movement-copy"><BandHeader eyebrow={b.movement.eyebrow} headline={<Headline lines={b.movement.headline}/>} lead={b.movement.lead}/><p className="lead movement-second">{b.movement.second}</p><TextLink label={b.movement.link} to={b.movement.linkHref}/></div>
      <div className="col-span-7 process-loop" role="img" aria-label={diagramLabels.movement}><IllustrativeLabel/><svg viewBox="0 0 760 380" aria-hidden="true" focusable="false"><defs><marker id="loop-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z"/></marker></defs><path className="loop-arc loop-arc-one" markerEnd="url(#loop-arrow)" d="M190 92C285 42 475 42 570 92"/><path className="loop-arc loop-arc-two" markerEnd="url(#loop-arrow)" d="M620 140C670 190 670 260 620 310"/><path className="loop-arc loop-arc-three" markerEnd="url(#loop-arrow)" d="M570 338C475 378 285 378 190 338"/><path className="loop-arc loop-arc-four" markerEnd="url(#loop-arrow)" d="M140 310C78 254 78 162 140 104"/>{[[165,100],[595,115],[595,325],[165,325]].map(([cx,cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="40"/>)}</svg><button type="button" className="question-chip motion-control">{illustrative.heroQuestion}<span className="question-repeat">{illustrative.heroQuestion}</span></button><div className="loop-steps">{b.movement.steps.map((step, index) => <span className={`loop-step-${index + 1}`} key={step}>{step}</span>)}</div></div>
      <div className="col-start-2 col-span-10 surface-bars">{b.movement.surfaces.map(surface => <button type="button" className={`surface-bar surface-${surface.state.toLowerCase()} motion-control ${activeSurface === surface.name ? "is-active" : ""}`} onClick={() => setActiveSurface(current => current === surface.name ? null : surface.name)} key={surface.name}><span>{surface.name}</span><span className="surface-descriptor label-mono">{activeSurface === surface.name ? surface.name : surface.state}</span></button>)}</div>
      <p className="col-start-3 col-span-8 label-mono text-grey movement-note">{b.movement.note}</p>
    </div>
  </section>;
}

function ArtifactsBlock() {
  const [open, setOpen] = useState<string | null>(null);
  return <section className="home-band artifacts-band">
    <div className="site-grid artifacts-grid">
      <div className="col-span-6"><BandHeader eyebrow={b.artifacts.eyebrow} headline={<Headline lines={b.artifacts.headline}/>} lead={b.artifacts.lead}/><TextLink label={b.artifacts.link} to={b.artifacts.linkHref}/></div>
      <div className="col-span-12 artifact-list">{b.artifacts.items.map(item => { const Icon = iconMap[item.icon as IconName]; const isOpen = open === item.name; const panelId = `artifact-${item.number}`; return <article className={`artifact-home-card ${isOpen ? "artifact-open" : ""}`} key={item.name}><Button variant="ghost" className="artifact-trigger" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpen(isOpen ? null : item.name)}><span className="label-mono artifact-number">{item.number}</span><span className="artifact-icon"><Icon aria-hidden="true" focusable="false" size={22} strokeWidth={1.5}/></span><span className="artifact-heading"><strong>{item.name}</strong><small>{item.descriptor}</small></span><ChevronDown aria-hidden="true" focusable="false" size={20} strokeWidth={1.5}/></Button><div id={panelId} className="artifact-fragment" hidden={!isOpen}><ArtifactFragment item={item}/></div></article>; })}</div>
      <p className="col-span-12 artifact-close">{b.artifacts.close}</p>
    </div>
  </section>;
}

function ArtifactFragment({ item }: { item: (typeof b.artifacts.items)[number] }) {
  const fragment = item.fragment;
  if (fragment.type === "states") return <div className="fragment-row"><span>{fragment.dimension}</span>{fragment.states.map(state => <span className="fragment-state" key={state}>{state}</span>)}</div>;
  if (fragment.type === "evidence") return <div className="fragment-row"><span>{illustrative.capturePanel[1].value}</span><span>{illustrative.evidenceSource}</span></div>;
  if (fragment.type === "line") return <p>{fragment.line}</p>;
  if (fragment.type === "priorities") return <ol>{fragment.rows.map(row => <li key={row}>{row}</li>)}</ol>;
  if (fragment.type === "fix") return <div className="fragment-table"><span className="label-mono">{fragment.headings[0]}</span><span className="label-mono">{fragment.headings[1]}</span><span></span><span>{fragment.value}</span></div>;
  if (fragment.type === "ruled") return <div>{fragment.rows.map(row => <div className="fragment-row" key={row}><span>{row}</span><span className="fragment-state">{fragment.state}</span></div>)}</div>;
  return <div className="verification-fragment">{fragment.labels.map(label => <div key={label}><span className="label-mono">{label}</span><p>{illustrative.heroQuestion}</p></div>)}</div>;
}

function TruthBlock() {
  const [fanned, setFanned] = useState(false);
  return <section className="home-band dark-band truth-band">
    <div className="site-grid truth-grid">
      <div className="col-span-5 truth-copy"><div className="label-mono text-grey-on-dark">{b.truth.eyebrow}</div><h2 className="truth-title"><Headline lines={b.truth.headline}/></h2><p className="lead">{b.truth.lead}</p><p className="body-copy text-grey-on-dark truth-third">{b.truth.third}</p><TextLink label={b.truth.link} to={b.truth.linkHref}/></div>
      <div className={`col-span-7 truth-diagram ${fanned ? "is-fanned" : ""}`} role="img" aria-label={diagramLabels.truth}><IllustrativeLabel/><div className="truth-fragments">{illustrative.bsotFragments.map((fragment, index) => <div className={`truth-fragment truth-fragment-${index + 1}`} key={fragment.label}><span className="label-mono text-grey-on-dark">{fragment.label}</span><span>{fragment.value}</span><em>{illustrative.conflictLabel}</em></div>)}</div><svg viewBox="0 0 620 260" aria-hidden="true" focusable="false"><path d="M125 40 C 190 130, 340 100, 475 210"/><path d="M250 80 C 320 120, 380 150, 475 210"/><path d="M410 65 C 440 110, 455 160, 475 210"/></svg><Button type="button" variant="ghost" className="governed-record" aria-expanded={fanned} onClick={() => setFanned(current => !current)}><span className="label-mono">{illustrative.ruledLabel}</span><span className="record-rows">{illustrative.bsotRecordRows.map(row => <span key={row}>{row}</span>)}</span></Button></div>
    </div>
  </section>;
}

function WorkBlock() {
  const handleParallax = (event: MouseEvent<HTMLDivElement>) => {
    if (document.documentElement.dataset["power"] === "low") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const amount = Math.max(-3, Math.min(3, ((event.clientX - rect.left) / rect.width - 0.5) * 6));
    event.currentTarget.style.setProperty("--parallax", `${amount}px`);
  };
  return <section className="home-band dark-band work-band">
    <div className="site-grid">
      <div className="col-span-5"><BandHeader eyebrow={b.work.eyebrow} headline={<Headline lines={b.work.headline}/>} lead={b.work.lead}/><TextLink label={b.work.link} to={b.work.linkHref}/></div>
      <div className="col-span-7 work-visual" role="img" aria-label={diagramLabels.work}><IllustrativeLabel/><div className="guide-stack" onMouseMove={handleParallax} onMouseLeave={event => event.currentTarget.style.removeProperty("--parallax")}>{b.work.panelOneItems.map((topic, index) => <div className={`guide-cover guide-${index + 1}`} key={topic}><BookOpen aria-hidden="true" focusable="false" size={20} strokeWidth={1.5}/><span>{topic}</span></div>)}</div><div className="work-panels"><article><h3>{b.work.panelOne}</h3><ul>{b.work.panelOneItems.map(item => <li key={item}>{item}</li>)}</ul></article><article><h3>{b.work.panelTwo}</h3><ul>{b.work.panelTwoItems.map(item => <li key={item}>{item}</li>)}</ul></article></div><p className="label-mono work-bound">{b.work.bound}</p></div>
    </div>
  </section>;
}

const verticalsWithIcons = [
  [b.close.verticals[0], ShoppingBag],
  [b.close.verticals[1], Cloud],
  [b.close.verticals[2], Building2],
  [b.close.verticals[3], HeartPulse],
  [b.close.verticals[4], GraduationCap],
] as const;
function CloseBlock() {
  return <section className="home-band close-band">
    <div className="site-grid fit-zone"><div className="col-span-6"><BandHeader eyebrow={b.close.fitEyebrow} headline={<Headline lines={b.close.fitHeadline}/>} lead={null}/><TextLink label={b.close.link} to={b.close.linkHref}/></div><div className="col-start-8 col-span-5"><ul className="vertical-list">{verticalsWithIcons.map(([vertical, Icon]) => <li key={vertical}><Icon aria-hidden="true" focusable="false" size={20} strokeWidth={1.5}/><span>{vertical}</span></li>)}</ul><ul className="trigger-list">{b.close.triggers.map(trigger => <li key={trigger}><span aria-hidden="true"/>{trigger}</li>)}</ul></div></div>
    <dl className="credibility-strip site-grid">{b.close.facts.map(fact => <div className="col-span-6" key={fact.value}>{fact.label ? <dt className="label-mono text-grey">{fact.label}</dt> : null}<dd>{fact.value}</dd></div>)}</dl>
    <div className="site-grid close-zone"><div className="col-start-3 col-span-8 close-copy"><h2 className="display-l">{b.close.headline}</h2><p className="lead">{b.close.lead}</p><div className="close-actions"><Button size="lg" asChild><a href={homepage.demoUrl} rel="noopener">{homepage.primaryCta}</a></Button><Button size="lg" variant="secondary" asChild><a href={homepage.demoUrl} rel="noopener">{homepage.secondaryCta}</a></Button></div></div><div className="col-start-5 col-span-4 close-answer" aria-hidden="true"><HeroAnswer quiet/></div></div>
  </section>;
}
