import { interventions } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

type Item = (typeof interventions)[number];

/** Bento grid: two wide cards (text + visual side by side) and two tall cards (visual on top). */
export function Interventions() {
  const [a, b, c, d] = interventions;
  return (
    <section id="interventions" className="py-20 sm:py-28" aria-labelledby="interventions-title">
      <div className="container-site">
        <SectionHead id="interventions-title" kicker="Interventions" title="Quatre situations que l'on me confie" />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <Wide item={a} index={0} className="lg:col-span-8" />
          <Tall item={b} index={1} className="lg:col-span-4" />
          <Tall item={c} index={2} className="lg:col-span-4" />
          <Wide item={d} index={3} className="lg:col-span-8" />
        </div>
      </div>
    </section>
  );
}

function Text({ item, index }: { item: Item; index: number }) {
  return (
    <div className="p-7">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em]">
        <span className="text-warm">0{index + 1}</span>
        <span className="h-px w-5 bg-line" />
        <span className="text-signal">{item.tag}</span>
      </p>
      <h3 className="mt-4 text-2xl font-bold tracking-tight text-balance">{item.title}</h3>
      <p className="mt-3 leading-relaxed text-paper-dim">{item.body}</p>
    </div>
  );
}

function Wide({ item, index, className }: { item: Item; index: number; className?: string }) {
  return (
    <Reveal delay={0.05} className={`card grid overflow-hidden md:grid-cols-2 ${className ?? ""}`}>
      <div className="flex items-center">
        <Text item={item} index={index} />
      </div>
      <div className="dots relative min-h-[22rem] border-line max-md:border-t md:border-l">
        <Visual id={item.id} />
      </div>
    </Reveal>
  );
}

function Tall({ item, index, className }: { item: Item; index: number; className?: string }) {
  return (
    <Reveal delay={0.1} className={`card flex flex-col overflow-hidden ${className ?? ""}`}>
      <div className="dots relative min-h-[13rem] border-b border-line">
        <Visual id={item.id} />
      </div>
      <Text item={item} index={index} />
    </Reveal>
  );
}

/* Syntax colors for the code snippet (theme tokens, readable in light and dark). */
const K = ({ children }: { children: React.ReactNode }) => <span className="text-warm">{children}</span>; // keyword
const T = ({ children }: { children: React.ReactNode }) => <span className="text-signal">{children}</span>; // type / symbol
const S = ({ children }: { children: React.ReactNode }) => <span className="text-paper-dim">{children}</span>; // string
const C = ({ children }: { children: React.ReactNode }) => <span className="italic text-paper-mute">{children}</span>; // comment

/**
 * Modern Angular 19 component as an editor excerpt: standalone, OnPush, inject(),
 * signal inputs, computed state and a typed output — plus the layered architecture it sits in.
 * Illustrative code, not copied from a client codebase.
 */
function AngularSnippet() {
  const lines: React.ReactNode[] = [
    <><T>@Component</T>({"{"}</>,
    <>  selector: <S>&apos;eco-intervention-list&apos;</S>,</>,
    <>  changeDetection: <T>OnPush</T>,</>,
    <>  imports: [<T>DataTable</T>, <T>StatusBadge</T>],</>,
    <>{"})"}</>,
    <><K>export class</K> <T>InterventionList</T> {"{"}</>,
    <>  <K>private</K> store = <T>inject</T>(<T>InterventionStore</T>);</>,
    <>  filters = <T>input</T>.required&lt;<T>Filters</T>&gt;();</>,
    <>  selected = <T>output</T>&lt;<T>Intervention</T>&gt;();</>,
    <>  <C>{"// état dérivé, mémoïsé"}</C></>,
    <>  rows = <T>computed</T>(() =&gt;</>,
    <>    <K>this</K>.store.query(<K>this</K>.filters()));</>,
    <>{"}"}</>,
  ];

  return (
    <div className="absolute inset-0 flex flex-col p-4 sm:p-5" aria-hidden="true">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-line bg-ink/80">
        {/* editor tabs */}
        <div className="flex items-center gap-1 border-b border-line px-2 pt-2 font-mono text-[0.62rem]">
          <span className="whitespace-nowrap rounded-t-md border border-b-0 border-line bg-ink-850 px-2.5 py-1 text-paper">intervention-list.ts</span>          <span className="ml-auto flex items-center gap-1.5 px-2 text-paper-mute">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" /> strict
          </span>
        </div>
        <pre className="flex-1 overflow-hidden px-3 py-2.5 font-mono text-[0.66rem] leading-[1.6] text-paper sm:text-[0.7rem]">
          {lines.map((l, i) => (
            <div key={i} className="flex">
              <span className="w-6 shrink-0 select-none pr-2 text-right text-paper-mute/60">{i + 1}</span>
              <span className="whitespace-pre">{l}</span>
            </div>
          ))}
        </pre>
      </div>

      {/* layered architecture + practices */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5 font-mono text-[0.62rem]">
        {["feature", "data-access", "ui"].map((layer, i) => (
          <span key={layer} className="flex items-center gap-1.5">
            <span className={`rounded-md border px-2 py-0.5 ${i === 0 ? "border-signal/50 bg-signal-soft text-signal" : "border-line text-paper"}`}>{layer}</span>
            {i < 2 && <span className="text-paper-mute">→</span>}
          </span>
        ))}
        <span className="ml-auto text-paper-mute">Signals · OnPush · standalone · RxJS</span>
      </div>
    </div>
  );
}

/** Small diagrammatic illustrations, one per intervention. */
function Visual({ id }: { id: Item["id"] }) {
  switch (id) {
    case "frontend":
      return <AngularSnippet />;
    case "mobile":
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 font-mono text-[0.7rem]" aria-hidden="true">
          <div className="flex gap-4">
            {["iOS", "Android"].map((os, i) => (
              <div key={os} className="flex h-28 w-[4.5rem] flex-col rounded-2xl border border-line bg-ink-850 p-2">
                <span className="mx-auto h-1 w-6 rounded-full bg-paper/20" />
                <span className={`mt-2 h-9 rounded-md ${i ? "bg-warm/25" : "bg-signal/25"}`} />
                <span className="mt-1.5 h-1 w-3/4 rounded-full bg-paper/15" />
                <span className="mt-1 h-1 w-1/2 rounded-full bg-paper/15" />
                <span className="mt-auto text-center text-paper-mute">{os}</span>
              </div>
            ))}
          </div>
          <span className="text-paper-mute">React Native · Ionic · EAS</span>
        </div>
      );
    case "realtime":
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 font-mono text-xs" aria-hidden="true">
          <div className="flex items-center gap-2">
            <span className="rounded-md border border-line bg-ink-850 px-2.5 py-1.5 text-paper">client</span>
            <svg width="44" height="10" viewBox="0 0 44 10" className="text-signal">
              <path d="M0 5h44" stroke="currentColor" strokeDasharray="4 4" className="animate-dash" />
            </svg>
            <span className="flex items-center gap-1.5 rounded-md border border-signal/50 bg-signal-soft px-2.5 py-1.5 text-signal">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" /> ws
            </span>
            <svg width="44" height="10" viewBox="0 0 44 10" className="text-signal">
              <path d="M0 5h44" stroke="currentColor" strokeDasharray="4 4" className="animate-dash" />
            </svg>
            <span className="rounded-md border border-line bg-ink-850 px-2.5 py-1.5 text-paper">NestJS</span>
          </div>
          <p className="text-paper-mute">REST · GraphQL · WebSocket</p>
        </div>
      );
    case "ai":
      return (
        <div className="absolute inset-0 flex flex-col justify-center gap-3 p-7 font-mono text-xs" aria-hidden="true">
          <div className="ml-auto max-w-[80%] rounded-xl rounded-br-sm border border-line bg-ink-850 px-3 py-2 text-paper-dim">
            <span className="block h-1.5 w-40 max-w-full rounded-full bg-paper/20" />
            <span className="mt-1.5 block h-1.5 w-24 rounded-full bg-paper/20" />
          </div>
          <div className="flex items-center gap-2 text-paper-mute">
            <span className="h-px flex-1 bg-line" />
            <span className="rounded-full border border-warm/50 px-2 py-0.5 text-warm">OpenAI API</span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <div className="max-w-[85%] rounded-xl rounded-bl-sm border border-signal/40 bg-signal-soft px-3 py-2">
            <span className="block h-1.5 w-48 max-w-full rounded-full bg-signal/50" />
            <span className="mt-1.5 block h-1.5 w-36 rounded-full bg-signal/50" />
            <span className="mt-1.5 block h-1.5 w-20 rounded-full bg-signal/50" />
          </div>
          <p className="text-paper-mute">fonctionnalité IA · intégrée au produit</p>
        </div>
      );
  }
}
