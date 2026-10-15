"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { experiences } from "@/content/experience";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

/** "Angular 19" and "Angular" are the same filter. */
const norm = (t: string) => t.replace(/\s*\d+\+?$/, "");

export function Missions() {
  const [filter, setFilter] = useState<string | null>(null);

  const ordered = useMemo(() => [...experiences].sort((a, b) => b.start - a.start), []);
  const techs = useMemo(() => {
    const count = new Map<string, number>();
    experiences.forEach((e) => new Set(e.stack.map(norm)).forEach((t) => count.set(t, (count.get(t) ?? 0) + 1)));
    return [...count.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([t]) => t);
  }, []);

  return (
    <section id="experience" className="py-20 sm:py-28" aria-labelledby="missions-title">
      <div className="container-site">
        <SectionHead
          id="missions-title"
          kicker="Parcours"
          title="Ce qui a été tenu en production"
          intro="Cliquez une technologie pour repérer les missions qui l'utilisent."
        />

        <Reveal className="mt-8 flex flex-wrap gap-2" delay={0.05}>
          {techs.map((t) => {
            const on = filter === t;
            return (
              <button
                key={t}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(on ? null : t)}
                className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                  on ? "border-signal bg-signal text-on-signal" : "border-line text-paper-dim hover:border-signal/50 hover:text-paper"
                }`}
              >
                {t}
              </button>
            );
          })}
          {filter && (
            <button type="button" onClick={() => setFilter(null)} className="px-2 font-mono text-xs text-warm hover:underline">
              Effacer ×
            </button>
          )}
        </Reveal>

        <ol className="relative mt-12">
          {ordered.map((e, i) => {
            const match = !filter || e.stack.some((t) => norm(t) === filter);
            return (
              <Reveal
                as="li"
                key={e.id}
                delay={i * 0.04}
                className={`relative grid gap-4 pb-6 transition-opacity duration-500 md:grid-cols-[9rem_1fr] md:gap-8 ${match ? "" : "opacity-30"}`}
              >
                {/* date + rail */}
                <div className="relative flex items-start gap-3 md:justify-end md:pt-7">
                  <span className="font-mono text-sm text-paper-mute md:text-right">{e.period}</span>
                  <span
                    className={`absolute -right-[2.35rem] top-8 hidden h-3 w-3 rounded-full border-2 md:block ${
                      i === 0 ? "border-signal bg-signal shadow-[0_0_14px_rgb(var(--signal)/0.8)]" : "border-signal bg-ink"
                    }`}
                    aria-hidden="true"
                  />
                </div>
                {i < ordered.length - 1 && (
                  <span className="absolute bottom-0 left-[calc(9rem+1rem-0.5px)] top-10 hidden w-px bg-line md:block" aria-hidden="true" />
                )}

                <article className={`card p-6 sm:p-7 ${match && filter ? "border-signal/50" : ""}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">{e.role}</h3>
                      <p className="mt-1">
                        <span className="font-semibold text-signal">{e.company}</span>
                        <span className="text-paper-mute"> · {e.meta}</span>
                      </p>
                    </div>
                    {e.highlight ? (
                      <span className="rounded-full border border-warm/50 bg-warm-soft px-3 py-1 font-mono text-xs text-warm">
                        {e.highlight.value} {e.highlight.label}
                      </span>
                    ) : e.badge ? (
                      <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-paper-dim">{e.badge}</span>
                    ) : null}
                  </div>

                  <p className="mt-4 leading-relaxed text-paper-dim">{e.summary}</p>

                  {e.projects && (
                    <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                      {e.projects.map((p) => (
                        <li key={p.name} className="rounded-xl border border-line bg-ink/50 p-3.5">
                          <p className="font-semibold">{p.name}</p>
                          <p className="mt-1 text-sm text-paper-dim">{p.description}</p>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line pt-5">
                    {e.stack.map((t) => (
                      <span key={t} className={`tag ${filter && norm(t) === filter ? "border-signal text-signal" : ""}`}>
                        {t}
                      </span>
                    ))}
                    {e.projectSlug && (
                      <Link
                        href={`/projects/${e.projectSlug}`}
                        className="ml-auto font-mono text-xs text-signal hover:underline"
                      >
                        Étude de cas →
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
