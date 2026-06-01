/**
 * Données projets – chargé avant projects.js
 * carousel : true = affiché dans le carrousel accueil (sous-ensemble)
 */
var PROJECTS = [
  {
    id: "lusciana-vitrine",
    title: "Lusciana.fr – vitrine & boutique",
    url: "https://lusciana.fr",
    github: "https://github.com/swtori",
    image: "img/lusciana/lusciana.webp",
    detailHref: "projets/lusciana-vitrine.html",
    carousel: true,
    description:
      "Vitrine et boutique en ligne : DNS Cloudflare, hébergement VPS et suivi des performances.",
    tags: ["PHP", "SEO", "VPS", "Cloudflare"]
  },
  {
    id: "domaine-de-gach",
    title: "Domaine de Gach – chambres d’hôtes",
    url: "https://domainedegach.com",
    github: "https://github.com/swtori",
    image: "img/domainedegach/domainedegach.webp",
    detailHref: "projets/domaine-de-gach.html",
    carousel: true,
    description:
      "Site chambres d’hôtes : contact EmailJS, base SQL sur VPS, domaine et hébergement IONOS.",
    tags: ["EmailJS", "SQL", "SEO", "IONOS"]
  },
  {
    id: "portfolio-sarrail",
    title: "Ce portfolio (articles & API)",
    url: "https://swtori.github.io/sarrailantoine/",
    github: "https://github.com/swtori/sarrailantoine",
    image: "img/portfolio-sarrail/portfolio-sarrail-preview.webp",
    detailHref: "projets/portfolio-sarrail.html",
    carousel: true,
    description:
      "Portfolio GitHub Pages couplé à un back-office VPS : articles, utilisateurs et API.",
    tags: ["HTML", "CSS", "JavaScript", "FrankenPHP", "SQLite", "Docker", "VPS"]
  },
  {
    id: "the-bakery-python",
    title: "Bakery Clicker – jeu Python (desktop)",
    github: "https://github.com/swtori",
    image: "img/the-bakery/project-the-bakery.webp",
    detailHref: "projets/the-bakery.html",
    carousel: false,
    description:
      "Jeu Python en équipe : identification des besoins, cahier des charges, suivi du projet et développement desktop.",
    tags: ["Python", "Mode projet", "Cahier des charges", "Travail d’équipe"]
  },
  {
    id: "app-covoiturage-maui",
    title: "Application MAUI – covoiturage",
    github: "https://github.com/swtori",
    image: "img/covoiturage-maui/project-maui-covoiturage.webp",
    detailHref: "projets/covoiturage-maui.html",
    carousel: true,
    description:
      "Application mobile C# .NET MAUI réalisée seul : BDD, authentification, gestion des covoiturages (CDC), tests et déploiement.",
    tags: ["C#", ".NET MAUI", "SQL", "Projet solo", "Mobile"]
  },
  {
    id: "site-jeux-olympiques",
    title: "BMX Freestyle JO — site vitrine",
    github: "https://github.com/swtori/Bmx-Freestyle",
    image: "img/jeux-olympiques/jo-preview.webp",
    detailHref: "projets/jeux-olympiques.html",
    carousel: false,
    description:
      "Site vitrine HTML/CSS (CDC) : BMX Freestyle JO Paris 2024 — règles, palmarès et pages statiques.",
    tags: ["HTML", "CSS", "Site vitrine", "Cahier des charges"]
  },
  {
    id: "ongles-nailart",
    title: "CM Beauty – vitrine onglerie",
    github: "https://github.com/swtori",
    image: "img/ongles/ongles-preview.webp",
    detailHref: "projets/ongles-nailart.html",
    carousel: false,
    description:
      "Site vitrine pour une cliente onglerie : besoins, références esthétiques, mode projet et service en ligne fonctionnel.",
    tags: ["HTML", "CSS", "Mode projet", "Présence en ligne"]
  },
  {
    id: "portfolios-builders",
    title: "Portfolios builders (série GitHub Pages)",
    url: "https://swtori.github.io/spinophore",
    github: "https://github.com/swtori",
    image: "img/portfolios-builders/portfolios-builders-preview.webp",
    detailHref: "projets/portfolios-builders.html",
    carousel: true,
    description:
      "Quatre sites vitrine pour builders : besoins, portfolios, SEO léger, mode projet en équipe et déploiement GitHub Pages.",
    tags: ["HTML", "GitHub Pages", "Mode projet", "SEO"]
  },
  {
    id: "mandela-biography",
    title: "Nelson Mandela – biographie (vitrine)",
    url: "https://steevenngouala05-lgtm.github.io/mandela-biography/",
    github: "https://github.com/steevenngouala05-lgtm/mandela-biography",
    image: "img/mandela-biography/nelson-mandela.webp",
    detailHref: "projets/mandela-biography.html",
    carousel: true,
    description:
      "Site biographique : besoins, design moderne, mode projet, déploiement et hébergement pour une présence en ligne valorisée.",
    tags: ["HTML", "CSS", "Mode projet", "Hébergement"]
  },
  {
    id: "noel321",
    title: "Compte à rebours Noël (JS)",
    url: "https://swtori.github.io/noel321/",
    github: "https://github.com/swtori",
    image: "img/noel321/noel321-preview.webp",
    detailHref: "projets/noel321.html",
    carousel: false,
    description:
      "Décompte JavaScript jusqu’au prochain Noël, mis à jour en temps réel.",
    tags: ["JavaScript", "HTML", "CSS"]
  },
  {
    id: "admin-lusciana-crm",
    title: "admin.lusciana.fr – CRM & commissions",
    url: "https://admin.lusciana.fr",
    github: "https://github.com/swtori",
    image: "img/adminlusciana/admin-preview.webp",
    detailHref: "projets/lusciana-crm.html",
    carousel: true,
    description:
      "CRM équipe et commissions : API REST MVC PHP, MongoDB, Docker, VPS Hostinger — backend, MCD/MLD et déploiement.",
    tags: ["PHP", "MVC", "Docker", "Mode projet"]
  }
];
