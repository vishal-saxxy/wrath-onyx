import { ArrowRight, Search, Send } from "lucide-react";
import type { ReactNode } from "react";
import { illustrative } from "@/content/illustrative";
import { iconMap, type IconName } from "./icon-map";

const label = illustrative.illustrativeLabel;

type PromptBarState = "idle" | "typing" | "sent";
export function PromptBar({ state }: { state: PromptBarState }) {
  return <div className={`relative flex h-16 items-center gap-4 rounded-[10px] border bg-paper-raised px-5 ${state === "typing" ? "border-signal-blue" : state === "sent" ? "border-signal-green" : "border-hairline"}`}><span className="illustrative-label">{label}</span><Search aria-hidden="true" focusable="false" size={20} strokeWidth={1.5}/><span className="body-copy flex-1">{illustrative.heroQuestion}</span><Send aria-hidden="true" focusable="false" size={20} strokeWidth={1.5}/></div>;
}

type EngineChipState = "idle" | "receiving" | "answered" | "dimmed";
export function EngineChip({ engine, state }: { engine: (typeof illustrative.engines)[number]; state: EngineChipState }) {
  return <span className={`inline-flex h-9 items-center gap-2 rounded-full border px-4 text-sm font-medium ${state === "receiving" ? "border-signal-blue bg-signal-blue-tint text-signal-blue" : state === "answered" ? "border-signal-green bg-signal-green-tint text-signal-green" : state === "dimmed" ? "border-hairline text-grey" : "border-hairline bg-paper-raised"}`}><span className={`size-2 rounded-full ${state === "receiving" ? "bg-signal-blue" : state === "answered" ? "bg-signal-green" : "bg-grey"}`}/>{engine}</span>;
}

type SignalPathState = "hidden" | "drawing" | "active" | "dimmed";
type SignalTone = "question" | "intervention" | "verification";
export function SignalPath({ state, tone }: { state: SignalPathState; tone: SignalTone }) {
  const colour = tone === "question" ? "var(--signal-blue)" : tone === "intervention" ? "var(--signal-orange)" : "var(--signal-green)";
  return <div className="relative h-20 w-56"><span className="illustrative-label">{label}</span><svg aria-hidden="true" focusable="false" viewBox="0 0 224 80" className={`size-full ${state === "hidden" ? "invisible" : state === "dimmed" ? "opacity-30" : ""}`}><path d="M8 62 C 62 4, 142 4, 216 54" fill="none" stroke={colour} strokeWidth="1.5" strokeDasharray={state === "drawing" ? "7 6" : undefined}/><circle cx={state === "drawing" ? "108" : "216"} cy={state === "drawing" ? "22" : "54"} r="4" fill={colour}/></svg></div>;
}

type Status = "Not mentioned" | "Mentioned" | "Recommended" | "Verified";
export function StatusTag({ status }: { status: Status }) {
  const classes = status === "Not mentioned" ? "border-signal-red text-signal-red bg-signal-red-tint" : status === "Recommended" ? "border-signal-orange text-signal-orange bg-signal-orange-tint" : status === "Verified" ? "border-signal-green text-signal-green bg-signal-green-tint" : "border-hairline text-grey bg-paper-dim";
  return <span className={`inline-flex rounded-[4px] border px-2 py-1 label-mono ${classes}`}>{status}</span>;
}

type BrandRowState = "neutral" | "tagged" | "highlighted";
export function BrandRow({ brand, state, status }: { brand: (typeof illustrative.brands)[number]; state: BrandRowState; status?: Status }) {
  return <div className={`flex min-h-12 items-center justify-between border-b px-4 last:border-b-0 ${state === "highlighted" ? "bg-signal-orange-tint" : ""}`}><span>{brand}</span>{state !== "neutral" && status ? <StatusTag status={status}/> : null}</div>;
}

type SourceChipState = "idle" | "active" | "dimmed";
export function SourceChip({ source, state }: { source: (typeof illustrative.sources)[number]; state: SourceChipState }) {
  return <span className={`inline-flex rounded-full border px-3 py-1 data-mono ${state === "active" ? "border-signal-blue bg-signal-blue-tint text-signal-blue" : state === "dimmed" ? "border-hairline text-grey" : "border-hairline bg-paper-raised"}`}>{source}</span>;
}

type AnswerSurfaceState = "empty" | "assembling" | "complete" | "highlighted" | "zoomed";
export function AnswerSurface({ state }: { state: AnswerSurfaceState }) {
  return <article className={`layered-panel p-6 ${state === "zoomed" ? "scale-[1.03]" : ""}`}><span className="illustrative-label">{label}</span><header className="mb-5 flex items-center gap-3 border-b pb-4"><span className="size-2 rounded-full bg-signal-blue"/><span className="font-medium">{illustrative.answerHeader}</span></header>{state !== "empty" ? <><div className="mb-5 flex items-center gap-3"><span className="label-mono text-grey">{illustrative.sourceRowLabel}</span><SourceChip source={illustrative.sources[0]} state={state === "assembling" ? "dimmed" : "active"}/></div><p className={`body-copy mb-5 ${state === "assembling" ? "text-grey" : ""}`}>{illustrative.answerBody}</p><div className={`overflow-hidden rounded-[10px] border ${state === "highlighted" ? "border-signal-orange" : ""}`}><BrandRow brand={illustrative.brands[0]} state="tagged" status="Recommended"/><BrandRow brand={illustrative.brands[1]} state="neutral"/><BrandRow brand={illustrative.brands[3]} state="tagged" status="Not mentioned"/></div></> : null}</article>;
}

type EvidenceConnectorState = "hidden" | "drawing" | "active" | "qualified";
export function EvidenceConnector({ state }: { state: EvidenceConnectorState }) {
  return <div className={`relative rounded-[10px] border bg-paper-raised p-6 pt-12 ${state === "hidden" ? "invisible" : ""}`}><span className="illustrative-label">{label}</span><p className="body-copy">{illustrative.evidenceSentence}</p><div className="mt-6 flex items-center gap-3"><svg aria-hidden="true" focusable="false" viewBox="0 0 60 24" className={`h-6 w-16 ${state === "drawing" ? "opacity-60" : ""}`}><path d="M2 2v10c0 6 5 10 11 10h45" fill="none" stroke={state === "qualified" ? "var(--grey)" : "var(--signal-blue)"} strokeWidth="1.5" strokeDasharray={state === "drawing" ? "5 4" : undefined}/></svg><span className="label-mono text-grey">{illustrative.evidenceClaimSpan}</span><SourceChip source={illustrative.evidenceSource} state={state === "qualified" ? "dimmed" : "active"}/></div></div>;
}

type DimensionNodeState = "idle" | "active" | "isolated" | "dimmed";
export function DimensionNode({ name, state }: { name: IconName; state: DimensionNodeState }) {
  const Icon = iconMap[name];
  return <div className={`relative flex min-h-28 items-center gap-4 rounded-[10px] border p-6 pt-10 ${state === "active" ? "border-signal-blue" : state === "isolated" ? "border-signal-orange" : state === "dimmed" ? "opacity-50" : "border-hairline"}`}><span className="illustrative-label">{label}</span><span className="grid size-10 place-items-center rounded-full bg-signal-blue-tint text-signal-blue"><Icon aria-hidden="true" focusable="false" size={20} strokeWidth={1.5}/></span><div><div className="font-medium">{name}</div><div className="small text-grey">{illustrative.heroQuestion}</div></div></div>;
}

type ArtifactCardState = "closed" | "hover" | "open";
export function ArtifactCard({ name, state }: { name: IconName; state: ArtifactCardState }) {
  const Icon = iconMap[name];
  return <article className={`relative min-h-48 rounded-[10px] border bg-paper-raised p-6 pt-12 ${state === "hover" ? "shadow-lift" : state === "open" ? "border-signal-blue" : ""}`}><span className="illustrative-label">{label}</span><Icon aria-hidden="true" focusable="false" size={24} strokeWidth={1.5}/><h3 className="mt-5 font-display text-2xl font-semibold">{name}</h3>{state === "open" ? <div className="mt-5 border-t pt-5 data-mono text-grey">{illustrative.notComputableLabel}</div> : null}</article>;
}

type SurfaceBarState = "neutral" | "implicated" | "addressed";
export function SurfaceBar({ state }: { state: SurfaceBarState }) {
  return <div className={`relative flex h-14 items-center rounded-[10px] border px-4 pt-2 ${state === "implicated" ? "border-signal-orange bg-signal-orange-tint" : state === "addressed" ? "border-signal-green bg-signal-green-tint" : "border-hairline bg-paper-raised"}`}><span className="illustrative-label">{label}</span><span className="data-mono">{illustrative.bsotFragments[0].label}</span></div>;
}

export function Annotation({ children }: { children: ReactNode }) {
  return <div className="relative inline-flex items-center gap-3 text-signal-orange"><span className="annotation">{children}</span><svg aria-hidden="true" focusable="false" viewBox="0 0 64 32" className="h-8 w-16"><path d="M2 8c18 1 31 7 51 15m-9-9 10 9-13 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></div>;
}

const steps = ["Measure", "Diagnose", "Fix", "Verify"] as const;
export function StepRail({ active }: { active: (typeof steps)[number] }) {
  return <div className="relative grid grid-cols-4 overflow-hidden rounded-[10px] border bg-paper-raised pt-8"><span className="illustrative-label">{label}</span>{steps.map((step, index) => <div key={step} className={`border-r px-5 py-4 last:border-r-0 ${active === step ? "bg-signal-blue-tint text-signal-blue" : ""}`}><span className="label-mono">{String(index + 1).padStart(2, "0")}</span><span className="ml-3 font-medium">{step}</span></div>)}</div>;
}

export function BandHeader({ eyebrow, headline, lead, link }: { eyebrow: ReactNode; headline: ReactNode; lead: ReactNode; link?: { label: ReactNode; href: string } }) {
  return <header><div className="label-mono text-grey">{eyebrow}</div><h2 className="display-l mt-5">{headline}</h2><div className="lead mt-6 text-graphite">{lead}</div>{link ? <a href={link.href} className="interactive-press mt-8 inline-flex items-center gap-2 font-medium text-signal-blue">{link.label}<ArrowRight aria-hidden="true" focusable="false" size={16} strokeWidth={1.5}/></a> : null}</header>;
}
