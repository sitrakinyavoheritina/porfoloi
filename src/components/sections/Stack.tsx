import { education, languages, stackCards } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

const icons: Record<(typeof stackCards)[number]["icon"], React.ReactNode> = {
  layout: <path d="M4 5h16v14H4zM4 9h16M9 9v10" />,
  server: <path d="M4 5h16v6H4zM4 13h16v6H4zM8 8h.01M8 16h.01" />,
  ship: <path d="M12 3l7 4v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V7l7-4zM9 12l2 2 4-4" />,
};

export function Stack() {
  return (
    <section id="stack" className="py-20 sm:py-28" aria-labelledby="stack-title">
      <div className="container-site">
        <SectionHead id="stack-title" kicker="Stack" title="Outils déjà ouverts en production" />

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {stackCards.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 0.08} className="card p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-signal">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {icons[c.icon]}
                  </svg>
                </span>
                <h3 className="text-lg font-bold tracking-tight">{c.title}</h3>
              </div>
              <ul className="mt-5 divide-y divide-line">
                {c.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 py-3 text-paper-dim">
                    <span className="text-signal" aria-hidden="true">›</span>
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-5 inline-flex items-center gap-3 rounded-full border border-warm/40 px-4 py-2 font-mono text-xs text-paper-dim" delay={0.1}>
          <span className="h-1.5 w-1.5 rounded-full bg-warm" />
          Stack principale : Angular · TypeScript · React · Next.js · NestJS · Node.js · React Native
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <Reveal className="card p-7 sm:p-9">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Formation</p>
              <CardIcon d="M3 9l9-5 9 5-9 5-9-5zM7 11.5V16c0 1.5 2.5 3 5 3s5-1.5 5-3v-4.5" />
            </div>
            <p className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">{education.degree}</p>
            <p className="mt-3 text-paper-dim">
              {education.school} · {education.period}
            </p>
          </Reveal>

          <Reveal className="card p-7 sm:p-9" delay={0.08}>
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Langues & au-delà du code</p>
              <CardIcon d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z" />
            </div>
            <ul className="mt-5 divide-y divide-line">
              {languages.map((l) => (
                <li key={l.name} className="flex items-center gap-3 py-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-warm" aria-hidden="true" />
                  <span className="font-medium">{l.name}</span>
                  <span className="ml-auto font-mono text-xs text-paper-mute">{l.level}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-xs text-paper-mute">🎹 Musique — composition, arrangement, piano · 🎣 Pêche</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CardIcon({ d }: { d: string }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-signal">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={d} />
      </svg>
    </span>
  );
}
