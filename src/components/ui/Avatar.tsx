import Image from "next/image";
import { photoPath, profile } from "@/content/site";

/** Round portrait with a teal→terracotta ring; shows the "HR" monogram until a photo is set. */
export function Avatar({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <span
      className={`relative inline-flex shrink-0 rounded-full bg-gradient-to-br from-signal to-warm p-[2px] ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <span className="theme-dark relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-ink-800">
        {photoPath ? (
          <Image src={photoPath} alt={profile.fullName} fill sizes={`${size}px`} className="object-cover" />
        ) : (
          <span aria-hidden="true" className="font-semibold tracking-tight text-paper" style={{ fontSize: size * 0.36 }}>
            HR
          </span>
        )}
      </span>
    </span>
  );
}
