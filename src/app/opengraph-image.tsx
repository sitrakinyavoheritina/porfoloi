import { ImageResponse } from "next/og";
import { profile } from "@/content/site";
import { palette } from "@/lib/palette";

export const alt = `${profile.fullName} — Full-Stack Developer | Web & Mobile`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: palette.dark.bg,
          color: palette.dark.text,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, color: palette.dark.dim }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, background: palette.teal }} />
          Antananarivo, Madagascar · Remote
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: -3, lineHeight: 1 }}>Heritiana Sitrakiniavo</div>
          <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: -3, lineHeight: 1.05, color: palette.dark.dim }}>
            Randrianarisoa
          </div>
          <div style={{ marginTop: 36, fontSize: 34, display: "flex", gap: 16 }}>
            <span>Full-Stack Developer</span>
            <span style={{ color: palette.teal }}>Web · Mobile · Backend · AI</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: palette.dark.mute }}>
          9 ans d&apos;expérience · Angular · TypeScript · React · Next.js · NestJS · React Native
        </div>
      </div>
    ),
    size,
  );
}
