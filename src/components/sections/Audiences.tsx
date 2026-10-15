import { audiences, method } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<(typeof audiences)[number]["icon"], React.ReactNode> = {
  person: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 20a8 8 0 0 1 16 0M17 14.5l1.5 1.5 3-3" />,
  handshake: <path d="M3 11l4-4 5 2 5-2 4 4-4 4M8 13l3 3a1.5 1.5 0 0 0 2-2M11 16l1.5 1.5a1.5 1.5 0 0 0 2-2L13 14M3 11l3 3" />,
  team: <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 19a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.5M18 19a6 6 0 0 0-3-5.2" />,
};

export function Audiences() {
  return (
    <section className="py-12 sm:py-16" aria-label="Pour qui">
      <div className="container-site space-y-5">
        <ul className="grid gap-5 md:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal as="li" key={a.tag} delay={i * 0.08} className="card group p-7 transition-colors duration-300 hover:border-signal/40">
              <div className="flex items-start justify-between">
                <span className="label">{a.tag}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-signal transition-colors group-hover:border-signal/50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {icons[a.icon]}
                  </svg>
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight">{a.title}</h3>
              <p className="mt-3 leading-relaxed text-paper-dim">{a.body}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="card overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-7 py-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Méthode</p>
            <p className="text-lg font-bold tracking-tight">How I build</p>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5">
            {method.map((m, i) => (
              <li key={m.title} className="flex gap-3 border-line p-6 max-lg:border-b lg:border-r lg:last:border-r-0">
                <span className="font-mono text-sm text-warm">0{i + 1}</span>
                <div>
                  <p className="flex items-center gap-2 font-bold">
                    {m.title}
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-signal" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <circle cx="8" cy="8" r="6.5" />
                      <path d="M5.2 8.2l1.9 1.9 3.7-3.9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-paper-dim">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
