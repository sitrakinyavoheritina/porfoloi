import type { Config } from "tailwindcss";

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Theme-aware tokens (values in globals.css, switched by html[data-theme]):
      // `ink` = background surfaces, `paper` = text, `signal` = teal accent, `warm` = terracotta accent.
      colors: {
        ink: {
          DEFAULT: v("ink"),
          900: v("ink"),
          850: v("ink-850"),
          800: v("ink-800"),
          700: v("ink-700"),
        },
        paper: {
          DEFAULT: v("paper"),
          dim: v("paper-dim"),
          mute: v("paper-mute"),
        },
        line: "rgb(var(--paper) / 0.1)",
        signal: { DEFAULT: v("signal"), soft: "rgb(var(--signal) / 0.12)" },
        warm: { DEFAULT: v("warm"), soft: "rgb(var(--warm) / 0.12)" },
        /** Text color on top of a `bg-signal` fill. */
        "on-signal": v("on-signal"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 7vw, 5.75rem)", { lineHeight: "0.98", letterSpacing: "-0.045em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.25rem)", { lineHeight: "1", letterSpacing: "-0.04em" }],
        "display-md": ["clamp(1.9rem, 3.6vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.035em" }],
      },
      maxWidth: { site: "80rem" },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.85)" },
        },
        dash: { to: { strokeDashoffset: "-20" } },
      },
      animation: {
        "pulse-dot": "pulseDot 2.4s ease-in-out infinite",
        dash: "dash 1s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
