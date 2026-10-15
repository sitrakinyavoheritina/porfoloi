import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** "—— KICKER" + large title (+ optional intro and right-side slot). */
export function SectionHead({
  id,
  kicker,
  title,
  intro,
  aside,
}: {
  id: string;
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <Reveal>
        <p className="kicker">{kicker}</p>
        <h2 id={id} className="mt-5 max-w-3xl text-display-md font-bold text-balance">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-lg text-paper-dim text-pretty">{intro}</p>}
      </Reveal>
      {aside && <Reveal delay={0.1}>{aside}</Reveal>}
    </div>
  );
}
