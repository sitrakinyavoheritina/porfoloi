import Link from "next/link";
import { projects, type Project } from "@/content/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { OninaScreens } from "@/components/projects/OninaScreens";

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 sm:py-28" aria-labelledby="projects-title">
      <div className="container-site">
        <SectionHead
          id="projects-title"
          kicker="Projets"
          title="Des produits livrés, pas des maquettes"
          intro="Plateformes métier, marketplace, applications mobiles et temps réel — chaque projet a son étude de cas."
        />

        {featured && <Featured project={featured} />}

        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={(i % 3) * 0.06}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
          <Reveal as="li" delay={0.1}>
            <Link
              href="/#contact"
              className="card group flex h-full min-h-[16rem] flex-col justify-between border-dashed p-7 transition-colors hover:border-signal/60"
            >
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-signal">Prochain projet</span>
              <span>
                <span className="block text-2xl font-bold tracking-tight">Le vôtre ?</span>
                <span className="mt-2 block text-paper-dim">Décrivez le besoin, on regarde ensemble l&apos;architecture.</span>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-signal">
                  Parlons-en <Chevron />
                </span>
              </span>
            </Link>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}

function Featured({ project: p }: { project: Project }) {
  return (
    <Reveal className="mt-12">
      <article id="onina" className="card grid scroll-mt-28 overflow-hidden lg:grid-cols-12">
        <div className="flex flex-col p-7 sm:p-10 lg:col-span-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="label">Projet phare</span>
            {p.status && (
              <span className="inline-flex items-center gap-2 font-mono text-xs text-paper-mute">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-warm" /> {p.status}
              </span>
            )}
          </div>
          <h3 className="mt-6 text-4xl font-bold tracking-tight">
            {p.name} <span className="text-gradient">· {p.category}</span>
          </h3>
          <p className="mt-4 leading-relaxed text-paper-dim">
            Plateforme web et mobile visant à connecter les différents acteurs de l&apos;immobilier à Madagascar. Fondateur et
            développeur : besoin, produit, architecture, frontend, backend, mobile, déploiement et intégration de l&apos;IA.
          </p>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-warm">Founder · Product · Engineering · AI</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-paper-dim">
            {["Recherche IA", "Filtres avancés", "Carte des biens", "Messagerie", "Publication d'annonces", "Français · Malagasy"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-signal" aria-hidden="true">›</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-auto lg:pt-8">
            <Link href={`/projects/${p.slug}`} className="btn-primary">
              Lire l&apos;étude de cas <Chevron />
            </Link>
            <span className="font-mono text-xs text-paper-mute">{p.year}</span>
          </div>
        </div>
        <div className="relative flex items-center overflow-hidden border-line bg-gradient-to-br from-signal/15 via-ink-850 to-warm/10 p-6 max-lg:border-t sm:p-10 lg:col-span-7 lg:border-l">
          <div className="w-full">
            <OninaScreens />
            <p className="mt-3 font-mono text-[0.68rem] text-paper-mute">Captures réelles · onina.mg · web et mobile</p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <Link href={`/projects/${p.slug}`} className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-signal/50">
      <div className="theme-dark dots relative aspect-[16/9] overflow-hidden border-b border-line bg-ink-850">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
          <ProjectCover slug={p.slug} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">{p.category}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">{p.name}</h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-paper-dim">{p.problem}</p>
        {p.results && (
          <p className="mt-3 text-sm">
            <span className="font-semibold text-warm">{p.results[0].value}</span> <span className="text-paper-dim">{p.results[0].label}</span>
          </p>
        )}
        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <p className="font-mono text-xs text-paper-mute">{p.stack.join(" · ")}</p>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-paper-dim transition-colors group-hover:border-signal group-hover:bg-signal group-hover:text-on-signal">
            <Chevron />
          </span>
        </div>
      </div>
    </Link>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
