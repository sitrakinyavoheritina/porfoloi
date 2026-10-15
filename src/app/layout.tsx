import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { themeInitScript } from "@/lib/theme";
import { contact, profile, seo, siteUrl } from "@/content/site";
import { palette } from "@/lib/palette";
import "./globals.css";

const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: seo.title, template: `%s — ${profile.fullName}` },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: profile.fullName, url: siteUrl }],
  creator: profile.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "fr_FR",
    url: siteUrl,
    siteName: profile.fullName,
    title: seo.title,
    description: seo.description,
    firstName: "Heritiana Sitrakiniavo",
    lastName: "Randrianarisoa",
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: palette.dark.bg },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
  colorScheme: "dark light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  givenName: "Heritiana Sitrakiniavo",
  familyName: "Randrianarisoa",
  jobTitle: "Full-Stack Developer — Web & Mobile",
  url: siteUrl,
  email: `mailto:${contact.email}`,
  sameAs: [contact.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Antananarivo", addressCountry: "MG" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Université d'Antananarivo" },
  knowsAbout: [
    "Angular", "TypeScript", "React", "Next.js", "NestJS", "Node.js", "React Native",
    "Software Architecture", "Microservices", "WebSocket", "CI/CD", "OpenAI API",
  ],
  knowsLanguage: ["mg", "fr", "en"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${mono.variable}`} data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
        >
          Aller au contenu
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
