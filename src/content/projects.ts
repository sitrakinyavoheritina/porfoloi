export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  company: string;
  role: string;
  stack: string[];
  platforms: string[];
  featured?: boolean;
  context: string;
  problem: string;
  solution: string;
  roleDetails: string[];
  features: string[];
  /** Only real, provided results. Leave undefined when unknown — never invent. */
  results?: { value: string; label: string }[];
  status?: string;
};

export const projects: Project[] = [
  {
    slug: "onina",
    name: "Onina",
    category: "Real Estate Platform",
    year: "2025 — aujourd'hui",
    company: "Onina · Founder",
    role: "Founder & Full-Stack Developer",
    stack: ["NestJS", "Next.js", "React Native", "OpenAI API"],
    platforms: ["Web", "Mobile", "AI"],
    featured: true,
    status: "En cours",
    context:
      "Projet entrepreneurial lancé en 2025 à Madagascar. Onina est une plateforme web et mobile dédiée au secteur immobilier.",
    problem:
      "Les différents acteurs de l'immobilier à Madagascar ont besoin d'un espace commun pour se trouver et se connecter.",
    solution:
      "Onina.mg : une plateforme web et mobile où propriétaires, intermédiaires et agences publient leurs biens à louer ou à vendre, avec une recherche classique et une recherche IA, appuyée sur un backend NestJS et l'API OpenAI.",
    roleDetails: [
      "Identification du besoin",
      "Conception du produit",
      "Architecture technique",
      "Développement frontend, backend et mobile",
      "Déploiement",
      "Intégration de fonctionnalités basées sur l'IA (API OpenAI)",
    ],
    features: [
      "Recherche par commune ou quartier, et recherche IA",
      "Filtres : louer / acheter, type de bien, prix, publié par (propriétaire, intermédiaire, agence)",
      "Filtres avancés : sans commission, sans caution, sans droit de visite",
      "Carte des biens « Près de vous »",
      "Publication d'annonces, likes et commentaires",
      "Messagerie, demandes et gestion de ses biens",
      "Interface en français et en malagasy, thème clair et sombre",
      "Web (Next.js) et mobile (React Native) sur une API NestJS",
    ],
  },
  {
    slug: "ecorec",
    name: "EcoREC",
    category: "Business Management Platform",
    year: "2021 — 2026",
    company: "Kerlog",
    role: "Full-Stack Developer",
    stack: ["Angular 19", "TypeScript"],
    platforms: ["Web"],
    context:
      "Plateforme de gestion destinée aux entreprises françaises de collecte, récupération, recyclage et traitement des déchets, développée chez Kerlog.",
    problem:
      "Des entreprises du secteur des déchets ont besoin d'un logiciel de gestion adapté à leurs métiers, capable d'évoluer avec leurs besoins.",
    solution:
      "Développement et évolution de plusieurs modules et de fonctionnalités web complexes en Angular 19 et TypeScript, avec des interfaces métier et des composants réutilisables.",
    roleDetails: [
      "Développement et évolution de plusieurs modules",
      "Analyse des besoins métier",
      "Conception d'interfaces métier",
      "Création de composants réutilisables",
      "Maintenance évolutive et corrective",
      "Collaboration avec les équipes techniques et fonctionnelles",
    ],
    features: [
      "Modules métier",
      "Fonctionnalités web complexes",
      "Interfaces métier",
      "Bibliothèque de composants réutilisables",
    ],
    results: [{ value: "350+", label: "clients utilisent la plateforme" }],
  },
  {
    slug: "platip",
    name: "Platip",
    category: "Food Marketplace & Delivery",
    year: "2018 — 2020",
    company: "Freelance",
    role: "Full-Stack Web & Mobile Developer",
    stack: ["NestJS", "Next.js", "React Native", "MongoDB"],
    platforms: ["Web", "Mobile"],
    context: "Projet réalisé en freelance : une plateforme web et mobile autour des plats faits maison.",
    problem:
      "Mettre en relation les personnes qui préparent des plats faits maison et celles qui souhaitent les commander, jusqu'à la livraison.",
    solution:
      "Une plateforme web en Next.js et une application mobile en React Native, reposant sur une API NestJS et une base MongoDB.",
    roleDetails: [
      "Développement web (Next.js)",
      "Développement mobile (React Native)",
      "Développement backend (NestJS)",
      "Modélisation des données (MongoDB)",
    ],
    features: ["Mise en relation", "Livraison de plats faits maison", "Web + mobile"],
  },
  {
    slug: "volanaka",
    name: "Volanaka",
    category: "Expense Management Mobile App",
    year: "2018 — 2020",
    company: "Freelance",
    role: "Full-Stack Mobile Developer",
    stack: ["React Native", "NestJS"],
    platforms: ["Mobile"],
    context: "Projet réalisé en freelance : une application mobile de gestion des dépenses.",
    problem: "Permettre de suivre et de gérer ses dépenses directement depuis son téléphone.",
    solution: "Une application mobile React Native connectée à un backend NestJS.",
    roleDetails: ["Développement mobile (React Native)", "Développement backend (NestJS)"],
    features: ["Gestion des dépenses", "Application mobile", "API dédiée"],
  },
  {
    slug: "frepro",
    name: "Frepro",
    category: "Expense Report Mobile App",
    year: "2018 — 2020",
    company: "Freelance",
    role: "Full-Stack Mobile Developer",
    stack: ["Angular", "Ionic", "Firebase"],
    platforms: ["Mobile"],
    context: "Projet réalisé en freelance : une application mobile de gestion des notes de frais.",
    problem: "Simplifier la gestion des notes de frais en la rendant accessible depuis le mobile.",
    solution: "Une application mobile hybride construite avec Angular et Ionic, s'appuyant sur Firebase.",
    roleDetails: ["Développement mobile (Angular · Ionic)", "Intégration Firebase"],
    features: ["Gestion des notes de frais", "Application mobile hybride", "Backend Firebase"],
  },
  {
    slug: "skhay-platforms",
    name: "SK'hay Platforms",
    category: "Real-time Web Platforms",
    year: "2020 — 2021",
    company: "SK'hay",
    role: "Lead Developer",
    stack: ["Angular", "Laravel", "MySQL", "WebSocket"],
    platforms: ["Web", "Real-time"],
    context: "Plateformes de rencontre développées et maintenues chez SK'hay, au sein d'une équipe que j'encadrais.",
    problem: "Des plateformes de rencontre où les échanges entre utilisateurs doivent se faire en temps réel.",
    solution:
      "Des applications web Angular reposant sur un backend Laravel et MySQL, avec des fonctionnalités temps réel intégrées via WebSocket.",
    roleDetails: [
      "Analyse des besoins et conception technique",
      "Encadrement de l'équipe de développement",
      "Répartition des tâches et suivi de développement",
      "Code review",
      "Développement et maintenance des plateformes",
      "Intégration de WebSocket",
    ],
    features: ["Fonctionnalités temps réel", "Intégration WebSocket", "Plateformes de rencontre"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
