"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { contact, profile } from "@/content/site";
import { Avatar } from "@/components/ui/Avatar";
import { Console } from "./Console";

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

const companies = ["Kerlog", "EcoREC", "Onina", "SK'hay", "EQIMA Solution"];
const contexts = ["Logiciel métier", "Immobilier", "Marketplace", "Temps réel", "Banque"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28" aria-labelledby="hero-title">
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-signal/10 blur-[120px]" />
        <div className="absolute -right-20 top-40 h-[28rem] w-[28rem] rounded-full bg-warm/10 blur-[120px]" />
        <div className="dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      </div>

      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <motion.div {...fadeUp(0)} className="flex flex-wrap items-center gap-4">
            <Avatar size={84} />
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-850 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-paper-dim">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" />
              Full-Stack Developer<span className="max-sm:hidden"> · Web & Mobile</span>
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} id="hero-title" className="mt-8 text-display-xl font-bold text-balance">
            <span className="sr-only">{profile.fullName} — </span>
            Du besoin métier au produit en <span className="text-gradient">production</span>
            <span className="text-warm">.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-7 max-w-2xl text-lg leading-relaxed text-paper-dim text-pretty sm:text-xl">
            Je suis <span className="font-semibold text-paper">{profile.fullName}</span>. {profile.tagline} {profile.subline}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${contact.email}?subject=${encodeURIComponent("Projet — prise de contact")}`} className="btn-primary">
              <MailIcon />
              Décrire votre projet
            </a>
            <Link href="/#projects" className="btn-ghost">
              Voir les projets
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M8 3v10M4 9l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="mt-10 max-w-xl space-y-1.5 border-t border-line pt-6 font-mono text-sm">
            <p className="text-paper-dim">{contexts.join(" · ")}</p>
            <p className="text-paper-mute">{companies.join(" · ")}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: EASE }}
          className="lg:col-span-5"
        >
          <Console />
        </motion.div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h16v12H4zM4 7l8 6 8-6" />
    </svg>
  );
}
