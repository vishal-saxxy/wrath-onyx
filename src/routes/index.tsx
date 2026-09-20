import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  ChevronDown,
  Cloud,
  GraduationCap,
  HeartPulse,
  Search,
  Send,
  ShoppingBag,
} from "lucide-react";
import { BandHeader } from "@/components/kasparro/components";
import { iconMap, type IconName } from "@/components/kasparro/icon-map";
import { Button } from "@/components/ui/button";
import { diagramLabels, homepage } from "@/content/homepage";
import { illustrative } from "@/content/illustrative";
import { useHomepageMotion } from "@/hooks/use-homepage-motion";
import { canonicalUrl } from "@/lib/site";

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

function BlockMark({ number }: { number: string }) {
  return <span className="block-mark label-mono" aria-hidden="true">{number}</span>;
}

function IllustrativeLabel() {
  return <span className="illustrative-label">{illustrative.illustrativeLabel}</span>;
}

function HeroAnswer({ quiet = false, activeBrand, onBrand, sourceActive, onSource }: { quiet?: boolean; activeBrand?: string | null; onBrand?: (brand: string) => void; sourceActive?: boolean; onSource?: () => void }) {
  return <article className={`home-answer layered-panel ${quiet ? "home-answer-quiet" : ""} ${sourceActive ? "source-support-active" : ""}`}>
    <IllustrativeLabel/>
    <header className="answer-heading"><span className="answer-dot"/><span>{illustrative.answerHeader}</span></header>
    <div className="answer-sources"><span className="label-mono text-grey">{illustrative.sourceRowLabel}</span>{illustrative.sources.slice(0, 3).map(source => <button type="button" className={`source-chip motion-control ${sourceActive ? "is-active" : ""}`} key={source} onClick={onSource}>{source}</button>)}</div>
    <p className="body-copy answer-copy">{illustrative.answerBody}</p>
    <div className="answer-brand-list">
      {illustrative.brands.map((brand, index) => <button type="button" className={`answer-brand-row motion-control ${activeBrand === brand ? "is-active" : ""}`} key={brand} onClick={() => onBrand?.(brand)}><span>{brand}</span>{!quiet && index === 3 ? <span className="missing-status-wrap"><span className="status-red label-mono">{b.hero.notMentioned}</span><span className="missing-panel label-mono">{b.hero.notMentionedDetail}</span></span> : null}</button>)}
    </div>
  </article>;
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
    <BlockMark number={b.hero.number}/>
    <div className="site-grid hero-grid">
      <div className="col-span-5 hero-copy">
        <div className="label-mono text-grey">{b.hero.eyebrow}</div>
        <h1 className="display-xl hero-title"><Headline lines={b.hero.headline}/></h1>
        <p className="lead hero-descriptor">{b.hero.descriptor}</p>
        <p className="body-copy hero-lead">{b.hero.lead}</p>
        <div className="hero-actions"><Button size="lg" asChild><a href={homepage.demoUrl} rel="noopener">{homepage.primaryCta}</a></Button><Button size="lg" variant="secondary" asChild><a href={homepage.demoUrl} rel="noopener">{homepage.secondaryCta}</a></Button></div>
        <p className="small text-grey hero-micro">{b.hero.micro}</p>
      </div>
      <div className="col-span-7 hero-visual" role="img" aria-label={diagramLabels.hero}>
        <div className="hero-prompt"><IllustrativeLabel/><Search aria-hidden="true" focusable="false" size={20} strokeWidth={1.5}/><span className="prompt-question">{illustrative.heroQuestion}</span><span className="send-pulse"><Send aria-hidden="true" focusable="false" size={20} strokeWidth={1.5}/></span></div>
        <div className="engine-row">{illustrative.engines.map((engine, index) => <button type="button" className={`engine-chip motion-control ${activeEngine === engine ? "is-active" : activeEngine ? "is-dimmed" : ""}`} style={{ "--item-index": index } as CSSProperties} key={engine} onClick={() => setActiveEngine(current => current === engine ? null : engine)}><span className="engine-dot"/>{engine}</button>)}</div>
        <svg className={`hero-paths ${activeEngine ? "has-selection" : ""}`} viewBox="0 0 720 180" aria-hidden="true" focusable="false"><path className={activeEngine && activeEngine !== illustrative.engines[0] ? "is-dimmed" : ""} d="M60 20 C 120 100, 430 0, 575 135"/><path className={activeEngine && activeEngine !== illustrative.engines[1] ? "is-dimmed" : ""} d="M220 20 C 260 100, 460 30, 575 135"/><path className={activeEngine && activeEngine !== illustrative.engines[2] ? "is-dimmed" : ""} d="M390 20 C 410 90, 500 80, 575 135"/><path className={activeEngine && activeEngine !== illustrative.engines[3] ? "is-dimmed" : ""} d="M555 20 C 550 70, 565 100, 575 135"/>{illustrative.engines.map((engine, index) => <circle className={`travelling-dot dot-${index + 1} ${activeEngine && activeEngine !== engine ? "is-dimmed" : ""}`} key={engine} r="4"/>)}</svg>
        <div className="hero-answer-wrap"><HeroAnswer activeBrand={activeBrand} onBrand={brand => setActiveBrand(current => current === brand ? null : brand)} sourceActive={sourceActive} onSource={() => setSourceActive(current => !current)}/><div className="hero-annotation"><span className="annotation">{illustrative.heroAnnotation}</span><svg viewBox="0 0 100 52" aria-hidden="true" focusable="false"><path d="M4 8c30 2 57 15 81 34m-14-2 15 3-5-14"/></svg></div></div>
        <p className="label-mono text-grey fiction-note">{illustrative.fictionFootnote}</p>
      </div>
      <div className="col-span-12 hero-rail">
        <div className="step-rail">{b.hero.rail.map(step => <div className="step-item" key={step.number}><span className="label-mono">{step.number}</span><span>{step.label}</span></div>)}</div>
        <p className="label-mono rail-caption">{b.hero.railCaption}</p>
      </div>
    </div>
  </section>;
}

function ShiftBlock() {
  return <section className="home-band dark-band shift-band">
    <BlockMark number={b.shift.number}/>
    <div className="site-grid">
      <div className="col-span-5"><BandHeader eyebrow={b.shift.eyebrow} headline={<Headline lines={b.shift.headline}/>} lead={b.shift.lead}/><TextLink label={b.shift.link} to={b.shift.linkHref}/></div>
      <div className="col-span-7 shift-visual" role="img" aria-label={diagramLabels.shift}>
        <IllustrativeLabel/>
        <div className="shift-panel search-panel"><div className="label-mono">{b.shift.traditionalLabel}</div><p className="small text-grey-on-dark">{b.shift.traditionalCaption}</p><div className="search-field"><Search aria-hidden="true" size={17}/></div><div className="search-bars" aria-hidden="true">{Array.from({ length: 9 }).map((_, index) => <span key={index}/>)}</div></div>
        <div className="shift-cross" aria-hidden="true"><ArrowRight size={24} strokeWidth={1.5}/></div>
        <div className="shift-panel answer-panel"><div className="label-mono">{b.shift.answerLabel}</div><p className="small text-grey-on-dark">{b.shift.answerCaption}</p><div className="compact-answer"><div className="compact-line"/>{illustrative.brands.slice(0, 3).map(brand => <div className="compact-brand" key={brand}>{brand}</div>)}</div><div className="answer-hard-edge"/></div>
        <div className="shift-annotation"><span className="annotation">{illustrative.shiftAnnotation}</span><svg viewBox="0 0 72 36" aria-hidden="true"><path d="M3 7c21 1 39 9 60 20m-11-11 12 11-15 2"/></svg></div>
      </div>
    </div>
  </section>;
}

function ConsiderationBlock() {
  const [selected, setSelected] = useState(3);
  return <section className="home-band consideration-band">
    <BlockMark number={b.consideration.number}/>
    <div className="pin-stage site-grid">
      <div className="col-span-5"><BandHeader eyebrow={b.consideration.eyebrow} headline={<Headline lines={b.consideration.headline}/>} lead={b.consideration.lead}/><TextLink label={b.consideration.link} to={b.consideration.linkHref}/></div>
       <div className="col-start-6 col-span-7 consideration-answer" role="img" aria-label={diagramLabels.consideration}><LayeredAnswer selected={selected}/><div className="pin-step label-mono" aria-hidden="true"><span className={selected === 1 ? "is-active" : ""}>{b.consideration.cards[0].name}</span><span className={selected === 2 ? "is-active" : ""}>{b.consideration.cards[1].name}</span><span className={selected === 3 ? "is-active" : ""}>{b.consideration.cards[2].name}</span></div></div>
       <div className="col-span-12 signal-cards">{b.consideration.cards.map((card, index) => { const Icon = iconMap[card.icon as IconName]; const pass = index + 1; return <button type="button" className={`signal-card motion-control ${selected === pass ? "is-active" : ""}`} onClick={() => setSelected(pass)} key={card.name}><span className={`signal-card-icon ${toneClasses[card.tone]}`}><Icon aria-hidden="true" focusable="false" size={22} strokeWidth={1.5}/></span><h3 className="font-display text-2xl font-semibold">{card.name}</h3><p className="body-copy text-graphite">{card.copy}</p></button>; })}</div>
      <p className="col-span-12 label-mono text-grey consideration-note">{b.consideration.note}</p>
    </div>
  </section>;
}

function LayeredAnswer({ selected }: { selected: number }) {
  const firstBrand = illustrative.brands[0];
  return <article className="layered-answer layered-panel" data-selected={selected}><IllustrativeLabel/><header className="answer-heading"><span className="answer-dot"/><span>{illustrative.answerHeader}</span></header><p className="body-copy"><span className="highlight-blue">{firstBrand}</span> <span className="highlight-orange">{illustrative.evidenceClaimSpan}</span></p><div className="answer-brand-list">{illustrative.brands.slice(0, 3).map(brand => <div className="answer-brand-row" key={brand}>{brand}</div>)}</div><div className="layered-sources">{illustrative.sources.slice(0, 3).map(source => <button type="button" className="source-chip source-green motion-control" key={source}>{source}</button>)}</div><svg className="layered-connectors" viewBox="0 0 600 110" aria-hidden="true" focusable="false"><path d="M90 15 C 110 80, 160 80, 185 100"/><path d="M295 15 C 295 70, 300 70, 300 100"/><path d="M505 15 C 490 80, 440 80, 415 100"/></svg></article>;
}

function EvidenceBlock() {
  const claimAt = illustrative.evidenceSentence.indexOf(illustrative.evidenceClaimSpan);
  const before = illustrative.evidenceSentence.slice(0, claimAt);
  const claim = illustrative.evidenceClaimSpan;
  const after = illustrative.evidenceSentence.slice(claimAt + illustrative.evidenceClaimSpan.length);
  return <section className="home-band dark-band evidence-band">
    <BlockMark number={b.evidence.number}/>
    <div className="site-grid evidence-heading"><div className="col-span-7 col-start-2"><BandHeader eyebrow={b.evidence.eyebrow} headline={<Headline lines={b.evidence.headline}/>} lead={b.evidence.lead}/></div></div>
    <div className="evidence-frame" role="img" aria-label={diagramLabels.evidence}><IllustrativeLabel/><div className="evidence-quote"><p>{before}<mark>{claim}</mark>{after}</p><svg viewBox="0 0 430 130" aria-hidden="true"><path d="M70 4 C 70 75, 270 65, 350 120"/></svg><span className="source-chip source-qualified">{illustrative.evidenceSource}</span></div><dl className="capture-panel">{illustrative.capturePanel.map(row => <div key={row.label}><dt className="label-mono text-grey-on-dark">{row.label}</dt><dd>{row.value}</dd></div>)}</dl></div>
    <div className="site-grid evidence-copy"><div className="col-start-2 col-span-7"><p className="label-mono">{b.evidence.limitOne}</p><p className="label-mono">{b.evidence.limitTwo}</p><TextLink label={b.evidence.link} to={b.evidence.linkHref}/></div></div>
  </section>;
}

function DimensionsBlock() {
  const orbitPoints = [[380,70],[625,190],[690,430],[545,650],[255,690],[70,470],[125,190]] as const;
  const [isolated, setIsolated] = useState<string | null>(null);
  return <section className="home-band dark-band dimensions-band">
    <BlockMark number={b.dimensions.number}/>
    <div className="pin-stage site-grid dimensions-grid">
      <div className="col-span-5 dimensions-copy"><BandHeader eyebrow={b.dimensions.eyebrow} headline={<Headline lines={b.dimensions.headline}/>} lead={b.dimensions.lead}/><p className="label-mono dimensions-note">{b.dimensions.note}</p><TextLink label={b.dimensions.link} to={b.dimensions.linkHref}/></div>
      <div className="col-span-7 dimension-orbit"><IllustrativeLabel/><svg className="orbit-lines" viewBox="0 0 760 760" role="img" aria-label={diagramLabels.dimensions} focusable="false"><circle cx="380" cy="380" r="310"/><circle cx="380" cy="380" r="225"/><circle cx="380" cy="380" r="140"/>{orbitPoints.map((points, index) => { const item = b.dimensions.items[index]; return item ? <path className={isolated && isolated !== item.name ? "is-dimmed" : ""} key={item.name} d={`M${points[0]} ${points[1]} L380 380`}/> : null; })}</svg><Button type="button" variant="ghost" className="dimension-nucleus" onClick={() => setIsolated(null)}>{b.dimensions.nucleus}</Button><ol className="dimension-list">{b.dimensions.items.map((item, index) => { const Icon = iconMap[item.name as IconName]; const dimmed = isolated && isolated !== item.name; return <li className={`dimension-item dimension-item-${index + 1} ${dimmed ? "is-dimmed" : ""}`} key={item.name}><Button type="button" variant="ghost" className={`dimension-button dimension-${item.tone} ${isolated === item.name ? "is-active" : ""}`} onClick={() => setIsolated(current => current === item.name ? null : item.name)}><span className="dimension-group label-mono">{item.group}</span><Icon aria-hidden="true" focusable="false" size={19} strokeWidth={1.5}/><span className="dimension-name">{item.name}</span><span className="small">{item.question}</span></Button></li>; })}</ol></div>
    </div>
  </section>;
}

function MovementBlock() {
  const [activeSurface, setActiveSurface] = useState<string | null>(null);
  return <section className="home-band movement-band">
    <BlockMark number={b.movement.number}/>
    <div className="site-grid movement-grid">
      <div className="col-span-5"><BandHeader eyebrow={b.movement.eyebrow} headline={<Headline lines={b.movement.headline}/>} lead={b.movement.lead}/><TextLink label={b.movement.link} to={b.movement.linkHref}/></div>
      <p className="col-start-9 col-span-4 lead movement-second">{b.movement.second}</p>
      <div className="col-start-3 col-span-8 process-loop" role="img" aria-label={diagramLabels.movement}><IllustrativeLabel/><svg viewBox="0 0 820 280" aria-hidden="true" focusable="false"><rect x="68" y="54" width="684" height="160" rx="80"/><path className="loop-arc loop-arc-one" d="M160 54h166"/><path className="loop-arc loop-arc-two" d="M326 54h334"/><path className="loop-arc loop-arc-three" d="M660 214H160"/></svg><button type="button" className="question-chip motion-control">{illustrative.heroQuestion}<span className="question-repeat">{illustrative.heroQuestion}</span></button><div className="loop-steps">{b.movement.steps.map(step => <span key={step}>{step}</span>)}</div></div>
      <div className="col-start-2 col-span-10 surface-bars">{b.movement.surfaces.map(surface => <button type="button" className={`surface-bar surface-${surface.state.toLowerCase()} motion-control ${activeSurface === surface.name ? "is-active" : ""}`} onClick={() => setActiveSurface(current => current === surface.name ? null : surface.name)} key={surface.name}><span>{surface.name}</span><span className="surface-descriptor label-mono">{activeSurface === surface.name ? surface.name : surface.state}</span></button>)}</div>
      <p className="col-start-3 col-span-8 label-mono text-grey movement-note">{b.movement.note}</p>
    </div>
  </section>;
}

function ArtifactsBlock() {
  const [open, setOpen] = useState<string | null>(null);
  return <section className="home-band artifacts-band">
    <BlockMark number={b.artifacts.number}/>
    <div className="site-grid artifacts-grid">
      <div className="col-span-4"><BandHeader eyebrow={b.artifacts.eyebrow} headline={<Headline lines={b.artifacts.headline}/>} lead={b.artifacts.lead}/><TextLink label={b.artifacts.link} to={b.artifacts.linkHref}/></div>
      <div className="col-span-8 artifact-list">{b.artifacts.items.map(item => { const Icon = iconMap[item.icon as IconName]; const isOpen = open === item.name; const panelId = `artifact-${item.number}`; return <article className={`artifact-home-card ${isOpen ? "artifact-open" : ""}`} key={item.name}><Button variant="ghost" className="artifact-trigger" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpen(isOpen ? null : item.name)}><span className="label-mono artifact-number">{item.number}</span><span className="artifact-icon"><Icon aria-hidden="true" focusable="false" size={22} strokeWidth={1.5}/></span><span className="artifact-heading"><strong>{item.name}</strong><small>{item.descriptor}</small></span><ChevronDown aria-hidden="true" focusable="false" size={20} strokeWidth={1.5}/></Button><div id={panelId} className="artifact-fragment" hidden={!isOpen}><ArtifactFragment item={item}/></div></article>; })}</div>
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
    <BlockMark number={b.truth.number}/>
    <div className="site-grid truth-grid">
      <div className="col-span-7"><div className="label-mono text-grey-on-dark">{b.truth.eyebrow}</div><h2 className="truth-title"><Headline lines={b.truth.headline}/></h2><p className="lead">{b.truth.lead}</p><p className="body-copy text-grey-on-dark truth-third">{b.truth.third}</p><TextLink label={b.truth.link} to={b.truth.linkHref}/></div>
      <div className={`col-start-7 col-span-6 truth-diagram ${fanned ? "is-fanned" : ""}`} role="img" aria-label={diagramLabels.truth}><IllustrativeLabel/><div className="truth-fragments">{illustrative.bsotFragments.map((fragment, index) => <div className={`truth-fragment truth-fragment-${index + 1}`} key={fragment.label}><span className="label-mono text-grey-on-dark">{fragment.label}</span><span>{fragment.value}</span><em>{illustrative.conflictLabel}</em></div>)}</div><svg viewBox="0 0 620 260" aria-hidden="true" focusable="false"><path d="M125 40 C 190 130, 340 100, 475 210"/><path d="M250 80 C 320 120, 380 150, 475 210"/><path d="M410 65 C 440 110, 455 160, 475 210"/></svg><Button type="button" variant="ghost" className="governed-record" aria-expanded={fanned} onClick={() => setFanned(current => !current)}><span className="label-mono">{illustrative.ruledLabel}</span><span className="record-rows">{illustrative.bsotRecordRows.map(row => <span key={row}>{row}</span>)}</span></Button></div>
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
    <BlockMark number={b.work.number}/>
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
    <BlockMark number={b.close.number}/>
    <div className="site-grid fit-zone"><div className="col-span-6"><BandHeader eyebrow={b.close.fitEyebrow} headline={<Headline lines={b.close.fitHeadline}/>} lead={null}/><TextLink label={b.close.link} to={b.close.linkHref}/></div><div className="col-start-8 col-span-5"><ul className="vertical-list">{verticalsWithIcons.map(([vertical, Icon]) => <li key={vertical}><Icon aria-hidden="true" focusable="false" size={20} strokeWidth={1.5}/><span>{vertical}</span></li>)}</ul><ul className="trigger-list">{b.close.triggers.map(trigger => <li key={trigger}><span aria-hidden="true"/>{trigger}</li>)}</ul></div></div>
    <dl className="credibility-strip site-grid">{b.close.facts.map(fact => <div className="col-span-4" key={fact.value}>{fact.label ? <dt className="label-mono text-grey">{fact.label}</dt> : null}<dd>{fact.value}</dd></div>)}</dl>
    <div className="site-grid close-zone"><div className="col-start-3 col-span-8 close-copy"><h2 className="display-l">{b.close.headline}</h2><p className="lead">{b.close.lead}</p><div className="close-actions"><Button size="lg" asChild><a href={homepage.demoUrl} rel="noopener">{homepage.primaryCta}</a></Button><Button size="lg" variant="secondary" asChild><a href={homepage.demoUrl} rel="noopener">{homepage.secondaryCta}</a></Button></div></div><div className="col-start-5 col-span-4 close-answer" aria-hidden="true"><HeroAnswer quiet/></div></div>
  </section>;
}
