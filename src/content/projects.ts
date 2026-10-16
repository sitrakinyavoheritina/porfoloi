export type Screenshots = {
  /** Web capture shown in a browser frame (dark theme, or the only capture). */
  web?: string;
  /** Optional light-theme capture of the same screen, shown when the site is in light mode. */
  webLight?: string;
  /** Pixel size of the web capture (all web captures of a project share it). */
  webSize?: { w: number; h: number };
  /** Mobile capture shown in a phone frame. */
  mobile?: string;
  /** Address shown in the browser bar. */
  url?: string;
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  company: string;
  role: string;
  stack: string[];
  platforms: string[];
  /** The flagship project, shown large at the top of the Projects section. */
  featured?: boolean;
  /** Short pitch used on the flagship card. */
  pitch?: string;
  /** Short highlights (2 columns) used on the flagship card. */
  highlights?: string[];
  context: string;
  problem: string;
  solution: string;
  roleDetails: string[];
  features: string[];
  /** Only real, provided results. Leave undefined when unknown — never invent. */
  results?: { value: string; label: string }[];
  status?: string;
  screenshots?: Screenshots;
};

export const projects: Project[] = [
  {
    slug: "ecorec",
    name: "EcoREC",
    category: "Plateforme de gestion métier",
    year: "2021 — 2026",
    company: "Kerlog",
    role: "Full-Stack Developer",
    stack: ["Angular 19", "TypeScript"],
    platforms: ["Web"],
    featured: true,
    pitch:
      "Le logiciel de gestion des entreprises françaises de collecte, récupération, recyclage et traitement des déchets. Une suite de modules métier, utilisée par plus de 350 clients, sur laquelle j'ai développé et fait évoluer plusieurs modules pendant plus de 5 ans.",
    highlights: [
      "Interventions & stock",
      "Tournées & contenants",
      "Parc & maintenance",
      "Relation client & devis",
      "Contrats",
      "Facturation & paiements",
    ],
    context:
      "Plateforme de gestion destinée aux entreprises françaises de collecte, récupération, recyclage et traitement des déchets, développée chez Kerlog.",
    problem:
      "Des entreprises du secteur des déchets ont besoin d'un logiciel de gestion adapté à leurs métiers, capable d'évoluer avec leurs besoins.",
    solution:
      "Une suite de modules métier (EcoBAC, EcoBennes, EcoGAR, EcoGRC, EcoContrat, EcoFact…) réunis dans un même tableau de bord. J'y ai développé et fait évoluer plusieurs modules et des fonctionnalités web complexes en Angular 19 et TypeScript, avec des interfaces métier et des composants réutilisables.",
    roleDetails: [
      "Développement et évolution de plusieurs modules",
      "Analyse des besoins métier",
      "Conception d'interfaces métier",
      "Création de composants réutilisables",
      "Maintenance évolutive et corrective",
      "Collaboration avec les équipes techniques et fonctionnelles",
    ],
    features: [
      "Tableau de bord unique donnant accès à tous les modules",
      "Interventions, validation des interventions et stock (EcoBAC)",
      "Tournées, contenants, planning et retours des bons (EcoBennes)",
      "Parc et entretien, planning des moyens et de la maintenance (EcoGAR)",
      "Rendez-vous, devis et relances (EcoGRC)",
      "Contrats : approvisionnement, expédition, facturation (EcoContrat)",
      "Facturation, pro forma, achats, ventes, paiements et relances (EcoFact)",
    ],
    results: [{ value: "350+", label: "clients utilisent la plateforme" }],
    screenshots: {
      web: "/projects/ecorec/dashboard.png",
      webSize: { w: 1919, h: 928 },
      url: "ecorec · tableau de bord",
      alt: "EcoREC — tableau de bord donnant accès aux modules EcoBAC, EcoBennes, EcoGAR, EcoGRC, EcoContrat et EcoFact",
    },
  },
  {
    slug: "onina",
    name: "Onina",
    category: "Plateforme immobilière",
    year: "2025 — aujourd'hui",
    company: "Onina · Founder",
    role: "Founder & Full-Stack Developer",
    stack: ["NestJS", "Next.js", "React Native", "OpenAI API"],
    platforms: ["Web", "Mobile", "AI"],
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
    screenshots: {
      web: "/projects/onina/web-dark.png",
      webLight: "/projects/onina/web-light.png",
      webSize: { w: 1847, h: 929 },
      mobile: "/projects/onina/mobile.jpg",
      url: "onina.mg",
      alt: "Onina — recherche, filtres, annonces et carte des biens",
    },
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
