"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { pipeline } from "@/content/site";
import { SectionHead } from "@/components/ui/SectionHead";

/** Horizontal flow client → data → AI. The highlighted stage advances on its own; pausable and clickable. */
export function Architecture() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const [active, setActive] = useState(2);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduce || !inView) return;
    const t = setInterval(() => setActive((a) => (a + 1) % pipeline.length), 2600);
    return () => clearInterval(t);
  }, [paused, reduce, inView]);

  const pct = (active / (pipeline.length - 1)) * 100;

  return (
    <section id="architecture" className="py-20 sm:py-28" aria-labelledby="architecture-title">
      <div className="container-site">
        <SectionHead
          id="architecture-title"
          kicker="Architecture"
          title="Du client à la donnée, le même fil"
          intro="Un schéma générique des briques que je maîtrise — pas l'architecture d'un projet en particulier."
          aside={
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2.5 font-mono text-xs text-paper-dim transition-colors hover:text-paper"
            >
              <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor" aria-hidden="true">
                {paused ? <path d="M4 2.5v11l9-5.5z" /> : <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" />}
              </svg>
              {paused ? "Relancer le flux" : "Mettre le flux en pause"}
            </button>
          }
        />

        <div ref={ref} className="mt-14">
          {/* rail */}
          <div className="relative mx-[10%] hidden h-4 lg:block" aria-hidden="true">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line" />
            <motion.div
              className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-signal to-warm"
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            {pipeline.map((_, i) => (
              <span
                key={i}
                className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ${
                  i === active
                    ? "h-4 w-4 bg-warm shadow-[0_0_20px_rgb(var(--warm)/0.8)]"
                    : i < active
                      ? "h-2.5 w-2.5 bg-signal"
                      : "h-2.5 w-2.5 border border-paper/30 bg-ink"
                }`}
                style={{ left: `${(i / (pipeline.length - 1)) * 100}%` }}
              />
            ))}
          </div>

          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pipeline.map((s, i) => {
              const on = i === active;
              return (
                <li key={s.tag}>
                  <button
                    type="button"
                    onClick={() => {
                      setActive(i);
                      setPaused(true);
                    }}
                    aria-pressed={on}
                    className={`card flex h-full w-full flex-col p-5 text-left transition-all duration-500 ${
                      on ? "border-warm/60 bg-gradient-to-b from-warm/10 to-transparent shadow-[0_20px_50px_-25px_rgb(var(--warm)/0.6)] lg:-translate-y-1" : "hover:border-paper/20"
                    }`}
                  >
                    <span className={`font-mono text-xs uppercase tracking-[0.16em] ${on ? "text-warm" : "text-signal"}`}>{s.tag}</span>
                    <span className={`mt-3 font-bold leading-snug tracking-tight ${on ? "text-xl" : "text-lg"}`}>{s.title}</span>
                    <span className="mt-2 text-sm leading-relaxed text-paper-dim">{s.body}</span>
                    <span className={`mt-4 flex flex-wrap gap-1.5 transition-opacity duration-500 ${on ? "opacity-100" : "opacity-0 max-lg:opacity-100"}`}>
                      {s.tags.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <p className="mt-6 font-mono text-xs text-paper-mute">
            Livraison : Docker · Docker Compose · GitHub Actions · GitLab CI · Nginx · Linux · Vercel · EAS
          </p>
        </div>
      </div>
    </section>
  );
}
