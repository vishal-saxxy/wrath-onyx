import { createFileRoute, notFound } from "@tanstack/react-router";
import { illustrative } from "@/content/illustrative";
import { iconMap } from "@/components/kasparro/icon-map";
import { Annotation, AnswerSurface, ArtifactCard, BandHeader, BrandRow, DimensionNode, EngineChip, EvidenceConnector, PromptBar, SignalPath, SourceChip, StatusTag, StepRail, SurfaceBar } from "@/components/kasparro/components";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/styleguide")({
  beforeLoad: () => { if (import.meta.env.PROD) throw notFound(); },
  head: () => ({ meta: [{ title: "Styleguide" }, { name: "robots", content: "noindex, nofollow" }] }),
  component: Styleguide,
});

const colours = [
  ["paper", "bg-paper"], ["paper-raised", "bg-paper-raised"], ["paper-dim", "bg-paper-dim"], ["ink", "bg-ink"],
  ["ink-raised", "bg-ink-raised"], ["graphite", "bg-graphite"], ["grey", "bg-grey"], ["grey-on-dark", "bg-grey-on-dark"],
  ["hairline", "bg-hairline"], ["hairline-dark", "bg-hairline-dark"], ["signal-blue", "bg-signal-blue"], ["signal-orange", "bg-signal-orange"],
  ["signal-green", "bg-signal-green"], ["signal-red", "bg-signal-red"], ["signal-blue-tint", "bg-signal-blue-tint"],
  ["signal-orange-tint", "bg-signal-orange-tint"], ["signal-green-tint", "bg-signal-green-tint"], ["signal-red-tint", "bg-signal-red-tint"],
] as const;
const states = ["idle", "typing", "sent"] as const;
const engineStates = [["idle", "ChatGPT"], ["receiving", "Gemini"], ["answered", "Claude"], ["dimmed", "Perplexity"]] as const;
const signalStates = ["hidden", "drawing", "active", "dimmed"] as const;
const answerStates = ["empty", "assembling", "complete", "highlighted", "zoomed"] as const;
const evidenceStates = ["hidden", "drawing", "active", "qualified"] as const;
const dimensionStates = ["idle", "active", "isolated", "dimmed"] as const;
const artifactStates = ["closed", "hover", "open"] as const;
const surfaceStates = ["neutral", "implicated", "addressed"] as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) { return <section className="site-grid py-20"><h2 className="display-m col-span-12 mb-10 border-b pb-6">{title}</h2><div className="col-span-12">{children}</div></section>; }
function StateLabel({ children }: { children: React.ReactNode }) { return <div className="label-mono mb-3 text-grey">{children}</div>; }
function Styleguide() {
  return <main id="main-content">
    <Section title="Colour"><div className="grid grid-cols-6 gap-6">{colours.map(([name, colour]) => <div key={name}><div className={`h-24 rounded-[10px] border ${colour}`}/><div className="data-mono mt-3">--{name}</div></div>)}</div><div className="dark-band mt-10 grid grid-cols-6 gap-6 rounded-[14px] p-6">{colours.map(([name, colour]) => <div key={name}><div className={`h-24 rounded-[10px] border ${colour}`}/><div className="data-mono mt-3">--{name}</div></div>)}</div></Section>
    <Section title="Typography"><div className="space-y-10"><div className="display-xl">Display XL</div><div className="display-l">Display L</div><div className="display-m">Display M</div><div className="lead">Lead</div><div className="body-copy">Body</div><div className="small">Small</div><div className="label-mono">Label, mono</div><div className="data-mono">Data, mono</div><div className="annotation">Annotation</div></div></Section>
    <Section title="Icons"><div className="grid grid-cols-6 gap-6">{Object.entries(iconMap).map(([name, Icon]) => <div key={name} className="rounded-[10px] border bg-paper-raised p-6"><Icon aria-hidden="true" focusable="false" size={24} strokeWidth={1.5}/><div className="small mt-4">{name}</div></div>)}</div></Section>
    <Section title="Buttons"><div className="flex gap-4"><Button>Get a free demo</Button><Button variant="secondary">Discuss your brand</Button></div><div className="dark-band mt-6 flex gap-4 rounded-[14px] p-6"><Button>Get a free demo</Button><Button variant="secondary">Discuss your brand</Button></div></Section>
    <Section title="BandHeader"><BandHeader eyebrow={illustrative.illustrativeLabel} headline={<>Brand Source of Truth<br/>AI Shortlisting</>} lead={illustrative.answerBody}/></Section>
    <Section title="PromptBar"><div className="space-y-6">{states.map(s => <div key={s}><StateLabel>{s}</StateLabel><PromptBar state={s}/></div>)}</div></Section>
    <Section title="EngineChip"><div className="flex gap-6">{engineStates.map(([state, engine]) => <div key={state}><StateLabel>{state}</StateLabel><EngineChip state={state} engine={engine}/></div>)}</div></Section>
    <Section title="SignalPath"><div className="flex gap-6">{signalStates.map((s,i) => <div key={s}><StateLabel>{s}</StateLabel><SignalPath state={s} tone={i === 1 ? "intervention" : i === 2 ? "verification" : "question"}/></div>)}</div></Section>
    <Section title="AnswerSurface"><div className="grid grid-cols-2 gap-10">{answerStates.map(s => <div key={s}><StateLabel>{s}</StateLabel><AnswerSurface state={s}/></div>)}</div></Section>
    <Section title="BrandRow"><div className="overflow-hidden rounded-[10px] border"><BrandRow brand={illustrative.brands[0]} state="neutral"/><BrandRow brand={illustrative.brands[1]} state="tagged" status="Mentioned"/><BrandRow brand={illustrative.brands[2]} state="highlighted" status="Recommended"/></div></Section>
    <Section title="StatusTag"><div className="flex gap-4"><StatusTag status="Not mentioned"/><StatusTag status="Mentioned"/><StatusTag status="Recommended"/><StatusTag status="Verified"/></div></Section>
    <Section title="SourceChip"><div className="flex gap-4"><SourceChip source={illustrative.sources[0]} state="idle"/><SourceChip source={illustrative.sources[1]} state="active"/><SourceChip source={illustrative.sources[2]} state="dimmed"/></div></Section>
    <Section title="EvidenceConnector"><div className="grid grid-cols-2 gap-8">{evidenceStates.map(s => <div key={s}><StateLabel>{s}</StateLabel><EvidenceConnector state={s}/></div>)}</div></Section>
    <Section title="DimensionNode"><div className="grid grid-cols-2 gap-6">{dimensionStates.map((s,i) => <div key={s}><StateLabel>{s}</StateLabel><DimensionNode name={Object.keys(iconMap)[i] as keyof typeof iconMap} state={s}/></div>)}</div></Section>
    <Section title="ArtifactCard"><div className="grid grid-cols-3 gap-6">{artifactStates.map((s,i) => <div key={s}><StateLabel>{s}</StateLabel><ArtifactCard name={Object.keys(iconMap)[i+10] as keyof typeof iconMap} state={s}/></div>)}</div></Section>
    <Section title="SurfaceBar"><div className="space-y-6">{surfaceStates.map(s => <div key={s}><StateLabel>{s}</StateLabel><SurfaceBar state={s}/></div>)}</div></Section>
    <Section title="Annotation"><Annotation>{illustrative.heroAnnotation}</Annotation></Section>
    <Section title="StepRail"><div className="space-y-6">{(["Measure", "Diagnose", "Fix", "Verify"] as const).map(s => <div key={s}><StateLabel>{s}</StateLabel><StepRail active={s}/></div>)}</div></Section>
  </main>;
}
