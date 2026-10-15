"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Status chips shown at the top of the console. */
const services = [
  { label: "Web", tech: "Next.js" },
  { label: "Mobile", tech: "React Native" },
  { label: "API", tech: "NestJS" },
  { label: "IA", tech: "OpenAI API" },
];

/** CI/CD steps typed in the terminal, one after the other. */
const steps = [
  { cmd: "lint", detail: "eslint · prettier" },
  { cmd: "test", detail: "jest · cypress" },
  { cmd: "build", detail: "next build · eas build" },
  { cmd: "deploy", detail: "docker · nginx" },
];

/**
 * Hero illustration: a fake "supervision" console — status chips, an animated architecture,
 * and a CI/CD pipeline that replays. Clearly labelled as an illustration.
 */
export function Console() {
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [step, setStep] = useState(reduce ? steps.length : 0);

  useEffect(() => {
    if (paused || reduce) return;
    const done = step >= steps.length;
    const t = setTimeout(() => setStep(done ? 0 : step + 1), done ? 2600 : step === 0 ? 900 : 1100);
    return () => clearTimeout(t);
  }, [step, paused, reduce]);

  const progress = Math.min(step, steps.length) / steps.length;
  const animate = !paused && !reduce;

  return (
    <figure className="theme-dark card relative overflow-hidden bg-ink-850 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.8)]" aria-label="Illustration : console de supervision d'un produit web et mobile">
      {/* header */}
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        </span>
        <span className="font-mono text-xs text-paper-mute">onina · pipeline</span>
        <span className="ml-auto rounded-full border border-warm/50 px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-warm">
          Illustration
        </span>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Relancer l'animation" : "Mettre l'animation en pause"}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-paper-dim hover:text-paper"
        >
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor" aria-hidden="true">
            {paused ? <path d="M4 2.5v11l9-5.5z" /> : <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" />}
          </svg>
        </button>
      </div>

      <div className="space-y-3 p-4">
        {/* status chips */}
        <ul className="grid grid-cols-2 gap-2">
          {services.map((s, i) => (
            <li key={s.label} className="flex items-center gap-2 rounded-lg border border-line bg-ink/60 px-3 py-2 font-mono text-xs">
              <span className={`h-1.5 w-1.5 rounded-full bg-signal ${animate ? "animate-pulse-dot" : ""}`} style={{ animationDelay: `${i * 0.4}s` }} />
              <span className="text-paper">{s.label}</span>
              <span className="truncate text-paper-mute">· {s.tech}</span>
            </li>
          ))}
        </ul>

        {/* architecture */}
        <div className="dots relative rounded-xl border border-line bg-ink/40 p-3">
          <svg viewBox="0 0 400 150" className="h-auto w-full" aria-hidden="true">
            {[
              "M88 38 C 130 38, 130 75, 160 75",
              "M88 112 C 130 112, 130 75, 160 75",
              "M240 75 C 270 75, 270 38, 302 38",
              "M240 75 C 270 75, 270 112, 302 112",
            ].map((d, i) => (
              <path
                key={i}
                d={d}
                fill="none"
                style={{ stroke: i < 2 ? "rgb(var(--signal))" : "rgb(var(--warm))" }}
                strokeOpacity="0.8"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                className={animate ? "animate-dash" : ""}
              />
            ))}
            <Node x={8} y={22} label="WEB" sub="Next.js" />
            <Node x={8} y={96} label="MOBILE" sub="React Native" />
            <Node x={160} y={52} w={80} h={46} label="API" sub="NestJS" accent />
            <Node x={302} y={22} w={92} label="DATA" sub="SQL · NoSQL" />
            <Node x={302} y={96} w={92} label="IA" sub="OpenAI API" warm />
          </svg>
        </div>

        {/* terminal */}
        <div className="rounded-xl border border-line bg-ink/70 p-4 font-mono text-[0.78rem] leading-relaxed">
          <p>
            <span className="text-signal">~/onina$</span> <span className="text-paper">git push origin main</span>
          </p>
          <ul className="mt-2 min-h-[6.2rem]">
            <AnimatePresence initial={false}>
              {steps.slice(0, step).map((s) => (
                <motion.li
                  key={s.cmd}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex gap-2"
                >
                  <span className="text-warm">▸</span>
                  <span className="w-14 text-paper">{s.cmd}</span>
                  <span className="flex-1 truncate text-paper-mute">{s.detail}</span>
                  <span className="text-signal">ok</span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-paper-mute">pipeline</span>
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-paper/10">
              <motion.span
                className="block h-full rounded-full bg-gradient-to-r from-signal to-warm"
                animate={{ width: `${progress * 100}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </span>
            <span className="w-10 text-right text-paper">{Math.round(progress * 100)}%</span>
          </div>
        </div>
      </div>

      <figcaption className="border-t border-line px-4 py-2.5 font-mono text-[0.68rem] text-paper-mute">
        Illustration : pipeline de démonstration, pas des mesures réelles.
      </figcaption>
    </figure>
  );
}

function Node({
  x,
  y,
  w = 80,
  h = 32,
  label,
  sub,
  accent,
  warm,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  sub: string;
  accent?: boolean;
  warm?: boolean;
}) {
  const stroke = accent ? "rgb(var(--signal))" : warm ? "rgb(var(--warm))" : "rgb(var(--paper) / 0.18)";
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={7} style={{ fill: "rgb(var(--ink-850))", stroke }} strokeOpacity={accent || warm ? 0.8 : 1} />
      <text
        x={x + 9}
        y={y + (h > 40 ? 20 : 14)}
        fontSize="8"
        letterSpacing="1.4"
        style={{ fill: accent ? "rgb(var(--signal))" : warm ? "rgb(var(--warm))" : "rgb(var(--paper-mute))", fontFamily: "var(--font-mono)" }}
      >
        {label}
      </text>
      <text x={x + 9} y={y + (h > 40 ? 34 : 26)} fontSize="9.5" style={{ fill: "rgb(var(--paper))", fontFamily: "var(--font-mono)" }}>
        {sub}
      </text>
    </g>
  );
}
