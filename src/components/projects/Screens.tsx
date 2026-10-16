import Image from "next/image";
import type { Screenshots } from "@/content/projects";

/** Real web capture in a browser frame. With `webLight`, the light capture is shown in light mode. */
export function BrowserShot({ shots, className, priority }: { shots: Screenshots; className?: string; priority?: boolean }) {
  if (!shots.web) return null;
  const size = shots.webSize ?? { w: 16, h: 9 };
  const sizes = "(min-width: 1024px) 760px, 95vw";
  return (
    <div className={`overflow-hidden rounded-xl border border-paper/15 bg-ink-850 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.7)] ${className ?? ""}`}>
      <div className="flex items-center gap-3 border-b border-paper/10 px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-paper/20" />
          <span className="h-2 w-2 rounded-full bg-paper/20" />
          <span className="h-2 w-2 rounded-full bg-paper/20" />
        </span>
        {shots.url && (
          <span className="mx-auto flex w-1/2 items-center justify-center gap-1.5 truncate rounded-md bg-paper/[0.06] py-0.5 font-mono text-[0.6rem] text-paper-mute">
            <svg viewBox="0 0 16 16" className="h-2.5 w-2.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <rect x="3.5" y="7" width="9" height="6.5" rx="1.2" />
              <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
            </svg>
            {shots.url}
          </span>
        )}
        <span className="w-8" />
      </div>
      <div className="relative bg-white" style={{ aspectRatio: `${size.w} / ${size.h}` }}>
        <Image
          src={shots.web}
          alt={shots.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover object-top ${shots.webLight ? "show-dark" : ""}`}
        />
        {shots.webLight && (
          <Image src={shots.webLight} alt={shots.alt} fill priority={priority} sizes={sizes} className="show-light object-cover object-top" />
        )}
      </div>
    </div>
  );
}

export function PhoneShot({ shots, className }: { shots: Screenshots; className?: string }) {
  if (!shots.mobile) return null;
  return (
    <div className={`rounded-[1.9rem] border border-paper/20 bg-[#0b0f0e] p-1.5 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.85)] ${className ?? ""}`}>
      <div className="relative aspect-[1080/2340] overflow-hidden rounded-[1.5rem]">
        <Image src={shots.mobile} alt={`${shots.alt} — version mobile`} fill sizes="(min-width: 1024px) 220px, 35vw" className="object-cover" />
      </div>
    </div>
  );
}

/** Browser capture, with the phone capture overlapping when there is one. */
export function Screens({ shots, priority }: { shots: Screenshots; priority?: boolean }) {
  if (!shots.mobile) return <BrowserShot shots={shots} priority={priority} />;
  return (
    <div className="relative pb-6 pr-[12%]">
      <BrowserShot shots={shots} priority={priority} />
      <PhoneShot shots={shots} className="absolute -bottom-2 right-0 w-[26%] max-w-[12rem]" />
    </div>
  );
}
