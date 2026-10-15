import Image from "next/image";

/**
 * Real Onina screenshots: the web app in a browser frame (dark or light capture, following
 * the site theme) and the mobile version in a phone frame.
 */
export function BrowserShot({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-paper/15 bg-ink-850 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.7)] ${className ?? ""}`}>
      <div className="flex items-center gap-3 border-b border-paper/10 px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-paper/20" />
          <span className="h-2 w-2 rounded-full bg-paper/20" />
          <span className="h-2 w-2 rounded-full bg-paper/20" />
        </span>
        <span className="mx-auto flex w-1/2 items-center justify-center gap-1.5 rounded-md bg-paper/[0.06] py-0.5 font-mono text-[0.6rem] text-paper-mute">
          <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <rect x="3.5" y="7" width="9" height="6.5" rx="1.2" />
            <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
          </svg>
          onina.mg
        </span>
        <span className="w-8" />
      </div>
      <div className="relative aspect-[1847/929]">
        <Image
          src="/projects/onina/web-dark.png"
          alt="Onina — page d'accueil web, thème sombre : recherche, filtres, annonces et carte"
          fill
          priority={priority}
          sizes="(min-width: 1024px) 700px, 95vw"
          className="show-dark object-cover object-top"
        />
        <Image
          src="/projects/onina/web-light.png"
          alt="Onina — page d'accueil web, thème clair : recherche, filtres, annonces et carte"
          fill
          priority={priority}
          sizes="(min-width: 1024px) 700px, 95vw"
          className="show-light object-cover object-top"
        />
      </div>
    </div>
  );
}

export function PhoneShot({ className }: { className?: string }) {
  return (
    <div className={`rounded-[1.9rem] border border-paper/20 bg-[#0b0f0e] p-1.5 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.85)] ${className ?? ""}`}>
      <div className="relative aspect-[1080/2340] overflow-hidden rounded-[1.5rem]">
        <Image
          src="/projects/onina/mobile.jpg"
          alt="Onina — version mobile : recherche, recherche IA et fil d'annonces"
          fill
          sizes="(min-width: 1024px) 200px, 35vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

/** Browser + overlapping phone composition. */
export function OninaScreens({ priority }: { priority?: boolean }) {
  return (
    <div className="relative pb-6 pr-[12%]">
      <BrowserShot priority={priority} />
      <PhoneShot className="absolute -bottom-2 right-0 w-[26%] max-w-[12rem]" />
    </div>
  );
}
