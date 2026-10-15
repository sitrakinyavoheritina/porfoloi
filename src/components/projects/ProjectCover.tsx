import { BrowserShot } from "@/components/projects/OninaScreens";

/** Cover per project: real screenshot for Onina, abstract data-free illustration otherwise. */
export function ProjectCover({ slug }: { slug: string }) {
  switch (slug) {
    case "onina":
      return (
        <div className="absolute inset-0 flex items-end justify-center overflow-hidden px-8 pt-10">
          <BrowserShot className="w-full max-w-2xl translate-y-6 transition-transform duration-700 ease-out group-hover:translate-y-2" />
        </div>
      );
    case "ecorec":
      return (
        <div className="absolute inset-0 flex flex-col justify-center gap-2 p-8" aria-hidden="true">
          <div className="flex gap-2">
            {["w-16", "w-20", "w-14"].map((w, i) => (
              <span key={i} className={`h-5 ${w} rounded border ${i === 0 ? "border-signal/50 bg-signal-soft" : "border-line"}`} />
            ))}
          </div>
          {Array.from({ length: 5 }).map((_, r) => (
            <div key={r} className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-3 border-b border-line py-2 transition-transform duration-500 group-hover:translate-x-1" style={{ transitionDelay: `${r * 40}ms` }}>
              {[0, 1, 2, 3].map((c) => (
                <span key={c} className={`h-1.5 rounded-full ${c === 0 ? "bg-paper/25" : "bg-paper/10"}`} style={{ width: `${55 + ((r * 7 + c * 13) % 40)}%` }} />
              ))}
            </div>
          ))}
        </div>
      );
    case "platip":
      return (
        <svg viewBox="0 0 300 180" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M0 60 H300 M0 120 H300 M80 0 V180 M200 0 V180" stroke="rgba(232,238,236,0.05)" />
          <path
            d="M40 140 C 80 140, 90 60, 150 70 S 230 40, 260 50"
            fill="none"
            stroke="#E8835A"
            strokeWidth="1.5"
            strokeDasharray="4 5"
            className="transition-all duration-700 group-hover:[stroke-dashoffset:-40]"
          />
          <circle cx="40" cy="140" r="5" fill="#0A0E0D" stroke="rgba(232,238,236,0.7)" />
          <circle cx="260" cy="50" r="9" fill="rgba(232,131,90,0.2)" />
          <circle cx="260" cy="50" r="4" fill="#E8835A" />
        </svg>
      );
    case "volanaka":
    case "frepro":
      return (
        <div className="absolute inset-0 flex items-end justify-center" aria-hidden="true">
          <div className="h-[85%] w-36 translate-y-6 rounded-t-[1.6rem] border border-b-0 border-paper/15 bg-ink-850 p-4 transition-transform duration-700 ease-out group-hover:translate-y-2">
            <span className="mx-auto block h-1.5 w-10 rounded-full bg-paper/15" />
            {slug === "volanaka" ? (
              <div className="mt-6 flex h-20 items-end gap-1.5">
                {[40, 65, 30, 80, 55, 70, 45].map((h, i) => (
                  <span key={i} className={`flex-1 rounded-sm ${i === 3 ? "bg-signal" : "bg-paper/15"}`} style={{ height: `${h}%` }} />
                ))}
              </div>
            ) : (
              <div className="mt-6 space-y-2 rounded-md border border-dashed border-paper/20 p-3">
                {[90, 70, 80, 50].map((w, i) => (
                  <span key={i} className="block h-1.5 rounded-full bg-paper/15" style={{ width: `${w}%` }} />
                ))}
                <span className="mt-3 block h-2 w-1/2 rounded-full bg-signal/70" />
              </div>
            )}
            <div className="mt-4 space-y-2">
              <span className="block h-1.5 w-full rounded-full bg-paper/10" />
              <span className="block h-1.5 w-2/3 rounded-full bg-paper/10" />
            </div>
          </div>
        </div>
      );
    case "skhay-platforms":
      return (
        <div className="absolute inset-0 flex flex-col justify-center gap-3 px-10" aria-hidden="true">
          {[
            { side: "l", w: "55%" },
            { side: "r", w: "45%" },
            { side: "l", w: "35%" },
          ].map((b, i) => (
            <span
              key={i}
              className={`h-7 rounded-2xl transition-transform duration-500 ${
                b.side === "r" ? "ml-auto rounded-br-sm bg-signal/25 group-hover:-translate-x-1" : "rounded-bl-sm bg-paper/10 group-hover:translate-x-1"
              }`}
              style={{ width: b.w }}
            />
          ))}
          <span className="flex items-center gap-2 font-mono text-[0.6rem] text-paper-mute">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" /> ws://live
          </span>
        </div>
      );
    default:
      return null;
  }
}
