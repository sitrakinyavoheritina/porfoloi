import { contact } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

const mail = (subject: string) => `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28" aria-labelledby="contact-title">
      <div className="container-site">
        <Reveal className="card relative overflow-hidden px-7 py-14 sm:px-14 sm:py-20">
          {/* glows */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -left-20 -top-24 h-[26rem] w-[26rem] rounded-full bg-signal/15 blur-[110px]" />
            <div className="absolute -bottom-32 right-0 h-[24rem] w-[24rem] rounded-full bg-warm/10 blur-[110px]" />
            <div className="dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_70%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/60 to-transparent" />
          </div>

          <div className="relative">
            <p className="kicker">Contact</p>
            <h2 id="contact-title" className="mt-6 max-w-3xl text-display-lg font-bold text-balance">
              Un produit à construire, une app à faire <span className="text-gradient">évoluer</span>.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-dim">
              Vous avez une idée à transformer en solution concrète ? Décrivez le besoin et le délai. Pour un recrutement,
              le contexte du poste suffit.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={mail("Projet — prise de contact")} className="btn-primary">
                <Icon d="M4 6h16v12H4zM4 7l8 6 8-6" />
                Proposer un projet
              </a>
              <a href={mail("Opportunité de poste")} className="btn-ghost">
                <Icon d="M4 8h16v11H4zM9 8V5h6v3M4 13h16" />
                Proposer un poste
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Icon d="M14 4h6v6M20 4l-9 9M18 14v5H5V6h5" />
                LinkedIn
              </a>
              <a href={`mailto:${contact.email}`} className="btn-ghost">
                <Icon d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1" />
                {contact.email}
              </a>
            </div>

            <p className="mt-8 font-mono text-xs text-paper-mute">{contact.location} · Remote</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
