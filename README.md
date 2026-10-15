# Heritiana Sitrakiniavo Randrianarisoa — Portfolio

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion. Statically generated.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Before deploying

| What | Where |
| --- | --- |
| Production URL (canonical, Open Graph, sitemap, robots) | `NEXT_PUBLIC_SITE_URL=https://your-domain` env var |
| Portrait (round avatar in the hero and navbar) | drop a photo in `public/` and set `photoPath` in `src/content/site.ts` (monogram shown while `null`) |
| "Download CV" button | drop the PDF in `public/` and set `cvPath` in `src/content/site.ts` (hidden while `null`) |

## Editing content

All text lives in `src/content/` — components never hard-code profile data:

- `site.ts` — identity, contact, SEO, nav, audiences, method, interventions, architecture flow, stack cards, languages, education
- `experience.ts` — experience timeline + career trajectory
- `projects.ts` — project case studies (`/projects/[slug]` pages are generated from it). `results` is optional: only add real, verifiable figures.

Adding a project = adding an entry to `projects.ts` (optionally a cover in `src/components/projects/ProjectCover.tsx`).

## Structure

```
src/
  app/            layout (fonts, metadata, JSON-LD), home, /projects/[slug], sitemap, robots, OG image, manifest
  components/
    layout/       Navbar (compacts on scroll, active section), Footer
    sections/     Hero, Intro, About, Trajectory, Experience, Onina (sticky case study), Projects,
                  Stack, Process, Architecture, AI, Background, Contact
    projects/     ProjectCover (CSS/SVG illustrations, no images to load)
    ui/           Reveal / RevealLines, SectionHeader, MotionProvider, Arrow
  content/        typed data
```

Motion respects `prefers-reduced-motion` (global `MotionConfig reducedMotion="user"` + CSS guards).
