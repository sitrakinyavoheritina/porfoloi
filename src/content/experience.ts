export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  start: number;
  meta: string;
  /** Stage in the career story: Developer → Full-Stack Engineer → Lead → Product Builder → Founder. */
  chapter: string;
  /** Short list shown on the home page, condensed from the responsibilities. */
  keyPoints: string[];
  badge?: string;
  highlight?: { value: string; label: string };
  summary: string;
  responsibilities: string[];
  stack: string[];
  projects?: { name: string; description: string; stack: string[] }[];
  projectSlug?: string;
};

/** Display order of the experience timeline. */
export const experiences: Experience[] = [
  {
    id: "kerlog",
    chapter: "Product Builder",
    keyPoints: [
      "Développement et évolution de plusieurs modules",
      "Fonctionnalités web complexes en Angular 19 et TypeScript",
      "Interfaces métier et composants réutilisables",
      "Analyse des besoins métier",
    ],
    company: "Kerlog",
    role: "Full-Stack Developer",
    period: "02/2021 — 09/2026",
    start: 2021,
    meta: "CDI · 100% Remote",
    highlight: { value: "350+", label: "clients utilisent EcoREC" },
    summary:
      "Développement sur EcoREC, plateforme de gestion destinée aux entreprises françaises de collecte, récupération, recyclage et traitement des déchets — un produit métier utilisé à grande échelle.",
    responsibilities: [
      "Développement et évolution de plusieurs modules",
      "Développement de fonctionnalités web complexes",
      "Angular 19 et TypeScript",
      "Conception d'interfaces métier",
      "Création de composants réutilisables",
      "Analyse des besoins métier",
      "Maintenance évolutive et corrective",
      "Collaboration avec les équipes techniques et fonctionnelles",
    ],
    stack: ["Angular 19", "TypeScript"],
    projectSlug: "ecorec",
  },
  {
    id: "onina",
    chapter: "Founder",
    keyPoints: [
      "Identification du besoin et conception du produit",
      "Architecture technique",
      "Frontend, backend, mobile et déploiement",
      "Intégration de l'IA avec l'API OpenAI",
    ],
    company: "Onina",
    role: "Founder & Full-Stack Developer",
    period: "2025 — aujourd'hui",
    start: 2025,
    meta: "Madagascar · Entrepreneurial Project",
    badge: "Founder · Product · Engineering · AI",
    summary:
      "Plateforme web et mobile visant à connecter les différents acteurs de l'immobilier à Madagascar. Un produit porté de l'identification du besoin jusqu'au déploiement, avec des fonctionnalités basées sur l'IA.",
    responsibilities: [
      "Identification du besoin",
      "Conception du produit",
      "Architecture technique",
      "Développement frontend",
      "Développement backend",
      "Développement mobile",
      "Déploiement",
      "Intégration de fonctionnalités basées sur l'IA",
      "Utilisation de l'API OpenAI",
    ],
    stack: ["NestJS", "Next.js", "React Native", "OpenAI API"],
    projectSlug: "onina",
  },
  {
    id: "skhay",
    chapter: "Lead",
    keyPoints: [
      "Encadrement de l'équipe et répartition des tâches",
      "Analyse des besoins et conception technique",
      "Code review et suivi de développement",
      "Fonctionnalités temps réel avec WebSocket",
    ],
    company: "SK'hay",
    role: "Lead Developer",
    period: "05/2020 — 02/2021",
    start: 2020,
    meta: "Antananarivo · CDI",
    badge: "Technical Leadership",
    summary:
      "Direction technique de l'équipe de développement sur des plateformes de rencontre temps réel : de l'analyse des besoins à la revue de code, en passant par la répartition et le suivi des tâches.",
    responsibilities: [
      "Analyse des besoins",
      "Conception technique",
      "Encadrement de l'équipe de développement",
      "Répartition des tâches",
      "Suivi de développement",
      "Code review",
      "Développement et maintenance de plateformes de rencontre",
      "Développement de fonctionnalités temps réel",
      "Intégration de WebSocket",
    ],
    stack: ["Angular", "Laravel", "MySQL", "WebSocket"],
    projectSlug: "skhay-platforms",
  },
  {
    id: "freelance",
    chapter: "Full-Stack Engineer",
    keyPoints: [],
    company: "Freelance",
    role: "Full-Stack Web & Mobile Developer",
    period: "06/2018 — 04/2020",
    start: 2018,
    meta: "Antananarivo",
    summary:
      "Conception et développement de produits web et mobiles complets pour différents clients, du backend jusqu'aux applications mobiles.",
    responsibilities: [],
    stack: ["NestJS", "Next.js", "React Native", "MongoDB", "Angular", "Ionic", "Firebase"],
    projects: [
      {
        name: "Platip",
        description: "Plateforme web et mobile de mise en relation et de livraison de plats faits maison.",
        stack: ["NestJS", "Next.js", "React Native", "MongoDB"],
      },
      {
        name: "Volanaka",
        description: "Application mobile de gestion des dépenses.",
        stack: ["React Native", "NestJS"],
      },
      {
        name: "Frepro",
        description: "Application mobile de gestion des notes de frais.",
        stack: ["Angular", "Ionic", "Firebase"],
      },
    ],
  },
  {
    id: "eqima",
    chapter: "Developer",
    keyPoints: [
      "Interfaces web et développement mobile",
      "Applications et systèmes bancaires",
      "Outils d'administration système",
      "Intégration de services",
    ],
    company: "EQIMA Solution",
    role: "Junior Developer",
    period: "08/2016 — 04/2018",
    start: 2016,
    meta: "Avaradrano, Antananarivo · CDI",
    badge: "Le début du parcours",
    summary:
      "Première expérience professionnelle : interfaces web, applications mobiles et systèmes bancaires — les fondations d'un parcours full-stack.",
    responsibilities: [
      "Développement d'interfaces web",
      "Développement mobile",
      "Applications et systèmes bancaires",
      "Outils d'administration système",
      "Intégration de services",
      "Développement fonctionnel",
    ],
    stack: ["Angular", "Ionic", "Laravel"],
  },
];

