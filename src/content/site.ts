export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const profile = {
  firstName: "Heritiana",
  fullName: "Heritiana Sitrakiniavo Randrianarisoa",
  displayName: ["Heritiana", "Sitrakiniavo", "Randrianarisoa"],
  role: "Full-Stack Developer",
  domains: ["Web", "Mobile", "Backend", "AI"],
  tagline: "Je conçois et développe des applications web et mobiles, de l'idée à la production.",
  subline:
    "9 ans d'expérience à transformer des besoins métier en produits logiciels robustes, maintenables et évolutifs.",
  location: "Antananarivo, Madagascar",
  availability: "Remote",
  yearsOfExperience: 9,
  since: 2016,
  coreStack: ["Angular", "TypeScript", "React", "Next.js", "NestJS", "Node.js", "React Native"],
} as const;

export const contact = {
  email: "sitrakinyavoheritina@gmail.com",
  linkedin: "https://www.linkedin.com/in/sitralinyavoheritina1103/",
  linkedinHandle: "in/sitralinyavoheritina1103",
  location: "Antananarivo, Madagascar",
} as const;

/**
 * Path of the CV inside /public. Leave `null` to hide the "Download CV" button.
 * Example: drop `cv-heritiana-randrianarisoa.pdf` in /public and set the path below.
 */
export const cvPath: string | null = null;

/**
 * Portrait shown in the round avatar (hero + navbar). Leave `null` to show the "HR" monogram.
 * Example: drop `heritiana.jpg` in /public and set "/heritiana.jpg".
 */
export const photoPath: string | null = "/heritiana.jpg";

export const navItems = [
  { label: "Interventions", href: "/#interventions" },
  { label: "Architecture", href: "/#architecture" },
  { label: "Projets", href: "/#projects" },
  { label: "Parcours", href: "/#experience" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" },
] as const;

/** Who reads this portfolio and what each one needs to know. */
export const audiences = [
  {
    tag: "Recruteur",
    icon: "person",
    title: "Senior, chaîne complète",
    body: "9 ans d'expérience. Angular, React, Next.js, NestJS, Node.js, React Native. Français courant, anglais intermédiaire. Basé à Madagascar, en remote.",
  },
  {
    tag: "Client",
    icon: "handshake",
    title: "Du besoin à la production",
    body: "Analyse du besoin, conception, architecture, développement web et mobile, tests, CI/CD et mise en production. Un seul interlocuteur sur toute la chaîne.",
  },
  {
    tag: "Équipe tech",
    icon: "team",
    title: "Un lead qui tient la qualité",
    body: "Encadrement d'équipe, répartition des tâches, code review, composants réutilisables et maintenance évolutive sur des produits utilisés à grande échelle.",
  },
] as const;

/** How I build — the five steps, shown as a checklist band. */
export const method = [
  { title: "Understand", body: "Comprendre le besoin et le contexte métier." },
  { title: "Design", body: "Concevoir l'architecture et l'expérience utilisateur." },
  { title: "Build", body: "Architecture propre, composants réutilisables." },
  { title: "Test", body: "Automatiser les tests, sécuriser les fonctionnalités." },
  { title: "Ship", body: "CI/CD, déploiement, monitoring et évolution." },
] as const;

/** What people hand me — shown as a bento grid with small illustrations. */
export const interventions = [
  {
    id: "frontend",
    tag: "Frontend métier",
    title: "Une application métier doit évoluer sans casser",
    body: "Modules, fonctionnalités web complexes et interfaces métier en Angular 19 et TypeScript, avec des composants réutilisables. C'est mon quotidien sur EcoREC.",
  },
  {
    id: "mobile",
    tag: "Mobile",
    title: "Le produit doit aussi vivre sur mobile",
    body: "Applications iOS et Android avec React Native ou Ionic, branchées sur la même API que le web, jusqu'au build et à la publication.",
  },
  {
    id: "realtime",
    tag: "Backend & temps réel",
    title: "Les échanges doivent arriver en direct",
    body: "APIs REST et GraphQL avec NestJS, Node.js ou Laravel. Fonctionnalités temps réel avec WebSocket, comme sur les plateformes SK'hay.",
  },
  {
    id: "ai",
    tag: "IA dans le produit",
    title: "L'IA doit servir l'utilisateur",
    body: "Fonctionnalités basées sur l'IA intégrées au produit avec l'API OpenAI. C'est ce que je construis dans Onina.",
  },
] as const;

/** Generic architecture flow — reflects mastered technologies, not one specific project. */
export const pipeline = [
  { tag: "Clients", title: "Next.js · Angular · React Native", body: "Interfaces web et applications mobiles.", tags: ["React", "Ionic", "TypeScript"] },
  { tag: "API", title: "REST · GraphQL · WebSocket", body: "Contrats d'échange, synchrones ou temps réel.", tags: ["Swagger", "Postman"] },
  { tag: "Backend", title: "NestJS · Node.js · Laravel", body: "Logique métier, services, microservices et fonctionnalités event-driven.", tags: ["Microservices", "Event-driven", "Tests Jest"] },
  { tag: "Données", title: "PostgreSQL · MySQL · MongoDB", body: "Relationnel ou document, selon le produit.", tags: ["Firebase", "SQL", "NoSQL"] },
  { tag: "Services & IA", title: "OpenAI API", body: "Services externes et IA intégrés comme des briques du produit.", tags: ["Intégrations", "Automatisation"] },
] as const;

/** Stack, grouped as in the reference "outils déjà ouverts en production" cards. */
export const stackCards = [
  {
    icon: "layout",
    title: "Frontend & Mobile",
    items: [
      "Angular 19+, Signals, RxJS",
      "React, Next.js",
      "TypeScript, JavaScript ES6+",
      "Redux, TanStack, Zustand",
      "React Native, Ionic, EAS",
      "HTML, CSS, Figma",
    ],
  },
  {
    icon: "server",
    title: "Backend & Données",
    items: [
      "NestJS, Node.js",
      "Laravel",
      "REST, GraphQL, WebSocket",
      "PostgreSQL, MySQL",
      "MongoDB, Firebase",
      "OpenAI API",
    ],
  },
  {
    icon: "ship",
    title: "Qualité & Livraison",
    items: [
      "Jest, Jasmine, Karma, Cypress",
      "Docker, Docker Compose",
      "GitHub Actions, GitLab CI",
      "Nginx, Linux",
      "Vercel, Firebase Hosting",
      "Git, Postman, Swagger",
    ],
  },
] as const;

export const seo = {
  title: "Heritiana Sitrakiniavo Randrianarisoa — Full-Stack Developer | Web & Mobile",
  shortTitle: "Heritiana Randrianarisoa — Full-Stack Developer",
  description:
    "Full-Stack Developer avec 9 ans d'expérience en applications web et mobiles, spécialisé en Angular, TypeScript, NestJS, React, React Native, Node.js et intégration IA.",
  keywords: [
    "Heritiana Randrianarisoa",
    "Heritiana Sitrakiniavo",
    "Heritiana Sitrakiniavo Randrianarisoa",
    "Full Stack Developer Madagascar",
    "Full Stack Developer Antananarivo",
    "Angular Developer Madagascar",
    "NestJS Developer",
    "React Native Developer",
    "Web Developer Madagascar",
    "Next.js Developer",
    "TypeScript",
    "Onina",
  ],
} as const;

export const languages = [
  { name: "Malagasy", level: "Langue maternelle" },
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Intermédiaire" },
] as const;

export const education = {
  degree: "Master en Mathématiques et Informatique",
  school: "Université d'Antananarivo",
  period: "2010 — 2015",
} as const;
