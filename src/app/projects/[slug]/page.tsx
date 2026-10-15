import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Arrow";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { BrowserShot, PhoneShot } from "@/components/projects/OninaScreens";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.name} — ${p.category}`;
  const description = `${p.problem} ${p.solution}`.slice(0, 160);
  return {
    title,
    description,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { title, description, url: `/projects/${p.slug}`, type: "article" },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(i + 1) % projects.length];

  const blocks = [
    { k: "Contexte", v: p.context },
    { k: "Problème", v: p.problem },
    { k: "Solution", v: p.solution },
  ];

  return (
    <article className="pb-24 pt-32 sm:pt-40">
      <div className="container-site">
        <Reveal>
          <Link href="/#projects" className="group inline-flex items-center gap-2 font-mono text-xs text-paper-mute hover:text-paper">
            <Arrow direction="left" className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-1" />
            Tous les projets
          </Link>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <span className="eyebrow">Case study · {String(i + 1).padStart(2, "0")}</span>
          {p.status && <span className="chip">{p.status}</span>}
        </div>

        <h1 className="mt-6 text-display-lg font-bold">
          <RevealLines immediate lines={[p.name, <span key="c" className="serif-accent text-paper-dim">{p.category}</span>]} />
        </h1>

        <Reveal delay={0.2}>
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {[
              { k: "Rôle", v: p.role },
              { k: "Contexte", v: p.company },
              { k: "Période", v: p.year },
              { k: "Plateformes", v: p.platforms.join(" · ") },
            ].map((m) => (
              <div key={m.k} className="bg-ink p-5">
                <dt className="eyebrow">{m.k}</dt>
                <dd className="mt-2 text-sm text-paper">{m.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.25}>
          {p.slug === "onina" ? (
            // Real screenshots for Onina
            <div className="mt-6 rounded-3xl border border-line bg-gradient-to-br from-signal/15 via-ink-850 to-warm/10 p-5 sm:p-10">
              <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
                <BrowserShot priority />
                <PhoneShot className="mx-auto w-48 md:w-52" />
              </div>
              <p className="mt-4 font-mono text-xs text-paper-mute">
                Captures réelles d&apos;onina.mg — web (thème selon votre préférence) et version mobile.
              </p>
            </div>
          ) : (
            <div className="relative mt-6 aspect-[16/9] theme-dark overflow-hidden rounded-3xl border border-line bg-ink-850 md:aspect-[21/9]">
              <div className="group absolute inset-0">
                <ProjectCover slug={p.slug} />
              </div>
            </div>
          )}
        </Reveal>

        <div className="mt-24 grid gap-16 md:grid-cols-12">
          <div className="space-y-14 md:col-span-7">
            {blocks.map((b, j) => (
              <Reveal key={b.k} delay={j * 0.05}>
                <p className="flex items-center gap-3">
                  <span className="font-mono text-xs text-signal">0{j + 1}</span>
                  <span className="eyebrow">{b.k}</span>
                </p>
                <p className="mt-4 text-xl leading-relaxed text-paper text-pretty sm:text-2xl">{b.v}</p>
              </Reveal>
            ))}
          </div>

          <aside className="space-y-12 md:col-span-4 md:col-start-9">
            <Reveal>
              <h2 className="eyebrow">Mon rôle</h2>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {p.roleDetails.map((r) => (
                  <li key={r} className="py-3 text-paper-dim">
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="eyebrow">Fonctionnalités</h2>
              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-paper-dim">
                    <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-signal" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="eyebrow">Technologies</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
            {p.results && (
              <Reveal delay={0.15}>
                <h2 className="eyebrow">Résultats</h2>
                {p.results.map((r) => (
                  <p key={r.label} className="mt-4">
                    <span className="block text-6xl font-medium tracking-tighter text-signal">{r.value}</span>
                    <span className="text-paper-dim">{r.label}</span>
                  </p>
                ))}
              </Reveal>
            )}
          </aside>
        </div>

        <Reveal className="mt-32 border-t border-line pt-10">
          <Link href={`/projects/${next.slug}`} className="group flex flex-wrap items-end justify-between gap-6">
            <span>
              <span className="eyebrow">Projet suivant</span>
              <span className="mt-3 block text-display-md font-bold transition-colors duration-500 group-hover:text-signal">
                {next.name}
              </span>
            </span>
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:border-signal group-hover:bg-signal group-hover:text-on-signal">
              <Arrow className="h-4 w-4" />
            </span>
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
