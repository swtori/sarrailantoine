/**
 * Données projets – chargé avant projects.js
 * carousel : true = affiché dans le carrousel accueil (sous-ensemble)
 */
var PROJECTS = [
  {
    id: "mandela-biography",
    title: "Nelson Mandela – biographie (vitrine)",
    url: "https://steevenngouala05-lgtm.github.io/mandela-biography/",
    github: "https://github.com/steevenngouala05-lgtm/mandela-biography",
    image: "img/nelson-mandela.webp",
    detailHref: "projets/mandela-biography.html",
    carousel: true,
    description:
      "Site exclusivement esthétique : direction artistique vitrine, design soigné pour biographie et documentation.\n\nMise en avant typographique, hiérarchie visuelle, parcours de lecture clair.",
    tags: ["HTML", "CSS", "DA", "GitHub Pages"]
  },
  {
    id: "ongles-nailart",
    title: "Ongles – vitrine nail art",
    github: "https://github.com/swtori",
    image: "img/ongles-preview.webp",
    detailHref: "projets/ongles-nailart.html",
    carousel: false,
    description:
      "Site exclusivement esthétique : DA vitrine pour une entreprise de prestation nail art, référencement SEO naturel, responsive.\n\nObjectif : mettre en avant l’offre et la qualité du service.",
    tags: ["HTML", "CSS", "SEO", "Responsive"]
  },
  {
    id: "portfolios-builders",
    title: "Portfolios builders (série GitHub Pages)",
    url: "https://swtori.github.io/spinophore",
    github: "https://github.com/swtori",
    image: "img/project-portfolio.png",
    detailHref: "projets/portfolios-builders.html",
    carousel: true,
    description:
      "Plusieurs portfolios (série) pour des builders : mise en avant de leurs besoins, intégration responsive, hébergement GitHub Pages et SEO naturel léger.\n\nDéploiements : x_Ced_x, _Shusui, spinophore, Hqky.",
    tags: ["HTML", "CSS", "GitHub Pages", "SEO"]
  },
  {
    id: "noel321",
    title: "Compte à rebours Noël (JS)",
    url: "https://swtori.github.io/noel321/",
    github: "https://github.com/swtori",
    image: "img/noel321-preview.webp",
    detailHref: "projets/noel321.html",
    carousel: false,
    description:
      "Compteur simple en JavaScript : date du prochain Noël et décompte en temps réel.\n\nExercice de logique date/heure et interface minimaliste.",
    tags: ["JavaScript", "HTML", "CSS"]
  },
  {
    id: "lusciana-vitrine",
    title: "Lusciana.fr – vitrine & boutique",
    url: "https://lusciana.fr",
    github: "https://github.com/swtori",
    image: "img/lusciana.webp",
    detailHref: "projets/lusciana-vitrine.html",
    carousel: true,
    description:
      "Site vitrine et boutique pour l’entreprise : visibilité, vente en ligne, référencement. Nom de domaine, DNS (Cloudflare) et hébergement sur VPS.\n\nSuivi du trafic et des performances.",
    tags: ["PHP", "SEO", "VPS", "Cloudflare"]
  },
  {
    id: "lusciana-crm",
    title: "admin.lusciana.fr – CRM & commissions",
    url: "https://admin.lusciana.fr",
    github: "https://github.com/swtori",
    image: "img/lusciana-admin.webp",
    detailHref: "projets/lusciana-crm.html",
    carousel: true,
    description:
      "Application CRM : gestion des agents, commissions, todolist. Hébergement sur VPS, Docker, persistance des données sur volumes.\n\nAPI et interface d’administration sécurisée.",
    tags: ["Docker", "VPS", "MongoDB", "API"]
  },
  {
    id: "portfolio-sarrail",
    title: "Ce portfolio (articles & API)",
    url: "https://swtori.github.io/sarrailantoine/",
    github: "https://github.com/swtori/sarrailantoine",
    image: "img/project-portfolio.png",
    detailHref: "projets/portfolio-sarrail.html",
    carousel: true,
    description:
      "Portfolio statique (GitHub Pages) couplé à un back-office sur VPS : articles, gestion des utilisateurs, API pour publications régulières.\n\nHTML/CSS/JS vanilla, configuration externalisée.",
    tags: ["HTML", "CSS", "JavaScript", "API", "VPS"]
  },
  {
    id: "domaine-de-gach",
    title: "Domaine de Gach – chambres d’hôtes",
    url: "https://domainedegach.com",
    github: "https://github.com/swtori",
    image: "img/domainedegach.webp",
    detailHref: "projets/domaine-de-gach.html",
    carousel: true,
    description:
      "Site vitrine chambres d’hôtes : prise de contact via EmailJS, base de données hébergée sur VPS. Référencement, nom de domaine et hébergement IONOS.\n\nParcours visiteur et demandes de réservation.",
    tags: ["EmailJS", "SQL", "SEO", "IONOS"]
  },
  {
    id: "app-covoiturage-maui",
    title: "Application MAUI – covoiturage",
    github: "https://github.com/swtori",
    image: "img/project-maui-covoiturage.png",
    detailHref: "projets/covoiturage-maui.html",
    carousel: true,
    description:
      "Application .NET MAUI : cahier des charges complet, base de données, interface mobile et desktop.\n\nFonctionnalités : authentification, trajets, réservation.",
    tags: ["C#", ".NET MAUI", "SQL", "Mobile"]
  },
  {
    id: "the-bakery-python",
    title: "The Bakery – jeu Python (desktop)",
    github: "https://github.com/swtori",
    image: "img/project-the-bakery.png",
    detailHref: "projets/the-bakery.html",
    carousel: false,
    description:
      "Application desktop Python : organisation des fichiers, travail coopératif, cahier des charges complet.\n\nLogique de jeu et modularité du code.",
    tags: ["Python", "Desktop", "Travail d’équipe"]
  },
  {
    id: "site-jeux-olympiques",
    title: "Site thématique Jeux olympiques",
    github: "https://github.com/swtori",
    image: "img/project-jo.png",
    detailHref: "projets/jeux-olympiques.html",
    carousel: false,
    description:
      "Site vitrine esthétique : DA pensée comme une vitrine événementielle, design soigné, navigation par disciplines (maquette Figma), intégration responsive.\n\nHTML/CSS, hiérarchie visuelle sportive.",
    tags: ["HTML", "CSS", "Figma", "DA"]
  }
];
