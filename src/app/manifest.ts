import type { MetadataRoute } from "next";
import { profile } from "@/content/site";
import { palette } from "@/lib/palette";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.fullName} — Full-Stack Developer`,
    short_name: profile.firstName,
    start_url: "/",
    display: "standalone",
    background_color: palette.dark.bg,
    theme_color: palette.dark.bg,
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
