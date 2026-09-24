import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { homepage } from "@/content/homepage";
import { illustrative } from "@/content/illustrative";
import { inner } from "@/content/inner-pages";

export function PageHero({ eyebrow, headline, lead }: { eyebrow: string; headline: readonly string[]; lead: string }) {
  return <section className="inner-hero dark-band"><div className="site-grid"><div className="col-start-2 col-span-9"><div className="label-mono text-grey-on-dark">{eyebrow}</div><h1 className="display-m inner-title">{headline.map(line => <span key={line}>{line}<br/></span>)}</h1><p className="lead">{lead}</p></div></div></section>;
}

export function PageClose({ single = false }: { single?: boolean }) {
  return <section className="inner-close"><div className="site-grid"><div className="col-start-3 col-span-8"><h2 className="display-m">{inner.close.headline}</h2><div className="inner-close-actions"><Button size="lg" asChild><a href={homepage.demoUrl} rel="noopener">{homepage.primaryCta}</a></Button>{single ? null : <Button size="lg" variant="secondary" asChild><a href={homepage.demoUrl} rel="noopener">{homepage.secondaryCta}</a></Button>}</div></div></div></section>;
}

export function ReadingSections({ sections }: { sections: ReadonlyArray<{ headline: string; body: string; definition?: string; note?: string }> }) {
  return <div className="reading-sections">{sections.map(section => <section className="reading-section" key={section.headline}><div className="site-grid"><div className="col-start-3 col-span-7"><h2 className="display-m">{section.headline}</h2>{section.definition ? <p className="definition-block">{section.definition}</p> : null}<p className="body-copy">{section.body}</p>{section.note ? <p className="label-mono vocabulary-note">{section.note}</p> : null}</div></div></section>)}</div>;
}

export function WhyDiagram() {
  return <figure className="signature-visual why-diagram" role="img" aria-label="One set of sources producing two different outputs: a long list of results, and a single answer naming three brands."><span className="illustrative-label">{illustrative.illustrativeLabel}</span><div className="shared-source-layer" aria-hidden="true">{illustrative.sources.map(source => <span key={source}>{source}</span>)}</div><svg viewBox="0 0 1200 220" aria-hidden="true" focusable="false"><path d="M600 205 C450 165 270 155 170 40M600 205 C500 155 440 130 420 40M600 205 C700 155 770 120 800 40M600 205 C760 160 940 145 1050 40"/></svg><div className="why-output why-results" aria-hidden="true">{Array.from({length: 6}).map((_,i)=><span key={i}/>)}</div><div className="why-output why-answer"><div>{illustrative.answerHeader}</div>{illustrative.brands.slice(0,3).map(brand=><span key={brand}>{brand}</span>)}</div></figure>;
}

export function EvidenceFrame() {
  return <figure className="compact-evidence dark-band" role="img" aria-label="An illustrative claim from an AI answer, connected to the source attached to it, with the connection then marked as association rather than cause."><span className="illustrative-label">{illustrative.illustrativeLabel}</span><blockquote>{illustrative.evidenceSentence}</blockquote><svg viewBox="0 0 420 90" aria-hidden="true" focusable="false"><path d="M80 8 C110 70 290 20 350 80"/></svg><span className="source-chip">{illustrative.evidenceSource}</span><dl>{illustrative.capturePanel.map(row=><div key={row.label}><dt className="label-mono">{row.label}</dt><dd>{row.value}</dd></div>)}</dl></figure>;
}

export function MeasurementSystem() {
  const [selected, setSelected] = useState(0);
  return <section className="measurement-system" role="img" aria-label="Seven measurement dimensions arranged around a brand at the centre, each connected to the part of an AI answer it reads."><div className="measurement-layout site-grid"><div className="col-span-5 dimension-semantic-list">{inner.dimensions.map((item,index)=><Button key={item.name} variant="ghost" className={selected===index ? "is-active" : ""} onClick={()=>setSelected(index)}><span className="label-mono">{item.group}</span><strong>{item.name}</strong><span>{item.question}</span></Button>)}</div><div className="col-span-7 dimension-details">{inner.dimensions.map((dimension,index)=>{const row=inner.measurement.rows[index] ?? inner.measurement.rows[0];return <article className={`dimension-detail ${selected===index ? "is-active" : ""}`} key={dimension.name}><span className="label-mono">{dimension.name}</span><dl><div><dt>THE QUESTION</dt><dd>{dimension.question}</dd></div><div><dt>WHAT IT READS</dt><dd>{row[1]}</dd></div><div><dt>WHAT YOU SEE</dt><dd>{row[2]}</dd></div></dl></article>})}</div></div></section>;
}

export function TruthDiagram() {
  const [selected, setSelected] = useState(0);
  return <figure className="signature-visual truth-inner-diagram" role="img" aria-label="Three pages of one website stating the same fact differently, resolving into a single ruled record."><span className="illustrative-label">{illustrative.illustrativeLabel}</span><div className="truth-inner-fragments">{illustrative.bsotFragments.map((fragment,index)=><Button variant="ghost" className={selected===index ? "is-active" : ""} key={fragment.label} onClick={()=>setSelected(index)}><span className="label-mono">{fragment.label}</span><span>{fragment.value}</span><em>{illustrative.conflictLabel}</em></Button>)}</div><svg viewBox="0 0 1000 220" aria-hidden="true" focusable="false"><path d="M140 30C200 140 430 110 500 190M500 30v160M860 30C800 140 570 110 500 190"/></svg><div className="ruled-record"><span className="label-mono">{illustrative.ruledLabel}</span>{illustrative.bsotRecordRows.map(row=><span className={row===illustrative.bsotRecordRows[selected] ? "is-active" : ""} key={row}>{row}</span>)}</div></figure>;
}

export function FixStreams() {
  const [active,setActive]=useState(0);
  return <section className="fix-streams"><div className="site-grid"><div className="col-span-12 fix-stream-grid">{inner.fixes.streams.map((stream,index)=><article key={stream.name} className={active===index ? "is-active" : ""}><Button variant="ghost" className="stream-trigger" aria-expanded={active===index} onClick={()=>setActive(index)}><span className="label-mono">{stream.name}</span><strong>{stream.question}</strong><ChevronDown aria-hidden="true" focusable="false"/></Button><p className="body-copy">{stream.body}</p><div className="stream-detail"><span className="label-mono">{stream.name}</span><p>{stream.details}</p></div></article>)}</div></div></section>;
}

export function WorkSignature() {
  return <figure className="work-signature" role="img" aria-label="A stack of five delivered content guides beside a list of what each contained."><span className="illustrative-label">{illustrative.illustrativeLabel}</span><div className="guide-stack-static">{homepage.blocks.work.panelOneItems.map((item,index)=><span style={{transform:`translate(${index*14}px, ${index*18}px)`}} key={item}>{item}</span>)}</div><div><h2>{homepage.blocks.work.panelTwo}</h2><ul>{homepage.blocks.work.panelTwoItems.map(item=><li key={item}>{item}</li>)}</ul></div></figure>;
}

export function SectionLink({to, children}:{to:string;children:ReactNode}) { return <Link to={to} className="inner-link">{children}<ArrowRight aria-hidden="true" focusable="false"/></Link>; }

export function SplitSearchIcon(){return <Search aria-hidden="true" focusable="false"/>;}
