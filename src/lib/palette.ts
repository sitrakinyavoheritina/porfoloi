/**
 * Brand palette — fixed values used outside CSS (metadata, OG image, icon).
 * Theme-aware tokens live in src/app/globals.css.
 *
 * Primary accent: teal. Secondary accent: terracotta (kept from the original charter).
 */
export const palette = {
  dark: {
    bg: "#0A0E0D",
    surface: "#0F1413",
    text: "#E8EEEC",
    dim: "#A0AEAA",
    mute: "#707E7A",
  },
  light: {
    bg: "#FFFFFF",
    text: "#101816",
  },
  teal: "#3DD6B5",
  tealDeep: "#0D947A",
  warm: "#E8835A",
  terracotta: "#C74D2D",
} as const;
