"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { contact, navItems, profile } from "@/content/site";
import { Avatar } from "@/components/ui/Avatar";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, mass: 0.3 });

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = navItems.map((n) => n.href.split("#")[1]);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
        setActive(ids.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* reading progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-signal to-warm"
      />

      <div className="container-site pt-3 sm:pt-4">
        <nav
          aria-label="Navigation principale"
          className="mx-auto flex w-full max-w-fit items-center gap-1 rounded-full border border-line bg-ink/75 p-1.5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl max-lg:w-full max-lg:max-w-none max-lg:justify-between"
        >
          <Link href="/" className="flex items-center gap-2.5 rounded-full py-0.5 pl-0.5 pr-4" aria-label={`${profile.fullName} — accueil`}>
            <Avatar size={34} />
            <span className="text-[0.95rem] font-bold tracking-tight">
              Heritiana <span className="max-sm:hidden">Randrianarisoa</span>
            </span>
          </Link>

          <ul className="hidden items-center lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.href.split("#")[1];
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm transition-colors ${
                      isActive ? "text-paper" : "text-paper-dim hover:text-paper"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full border border-line bg-ink-800"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      />
                    )}
                    {isActive && <span className="h-1 w-1 rounded-full bg-signal" />}
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-3.5 py-2 text-sm text-paper-dim transition-colors hover:text-paper"
              >
                LinkedIn
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-1.5">
            <ThemeToggle className="h-9 w-9 rounded-full" />
            <Link
              href="/#contact"
              className="hidden rounded-full bg-signal px-5 py-2 text-sm font-semibold text-on-signal shadow-[0_0_24px_-6px_rgb(var(--signal)/0.7)] transition hover:brightness-110 sm:inline-flex"
            >
              Projet
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-line lg:hidden"
            >
              <span className={`absolute h-px w-4 bg-paper transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1"}`} />
              <span className={`absolute h-px w-4 bg-paper transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1"}`} />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="container-site mt-2 lg:hidden"
          >
            <ul className="card space-y-1 p-3 backdrop-blur-xl">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-medium hover:bg-ink-800">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-2 p-2">
                <Link href="/#contact" onClick={() => setOpen(false)} className="btn-primary flex-1 py-3">
                  Proposer un projet
                </Link>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost py-3">
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
