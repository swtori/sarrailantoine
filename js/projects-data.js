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
    title: "The Bakery – jeu Python (desktop)",
    github: "https://github.com/swtori",
    image: "img/the-bakery/project-the-bakery.png",
    detailHref: "projets/the-bakery.html",
    carousel: false,
    description:
      "Jeu desktop Python en équipe : cahier des charges, logique de jeu et code modulaire.",
    tags: ["Python", "Desktop", "Travail d’équipe"]
  },
  {
    id: "app-covoiturage-maui",
    title: "Application MAUI – covoiturage",
    github: "https://github.com/swtori",
    image: "img/covoiturage-maui/project-maui-covoiturage.png",
    detailHref: "projets/covoiturage-maui.html",
    carousel: true,
    description:
      "App .NET MAUI multiplateforme : authentification, trajets, réservation et base de données.",
    tags: ["C#", ".NET MAUI", "SQL", "Mobile"]
  },
  {
    id: "site-jeux-olympiques",
    title: "Site thématique Jeux olympiques",
    github: "https://github.com/swtori",
    image: "img/jeux-olympiques/project-jo.png",
    detailHref: "projets/jeux-olympiques.html",
    carousel: false,
    description:
      "Vitrine événementielle responsive : DA Figma et navigation par disciplines.",
    tags: ["HTML", "CSS", "Figma", "DA"]
  },
  {
    id: "ongles-nailart",
    title: "Ongles – vitrine nail art",
    github: "https://github.com/swtori",
    image: "img/ongles/ongles-preview.webp",
    detailHref: "projets/ongles-nailart.html",
    carousel: false,
    description:
      "Vitrine nail art responsive : DA soignée et référencement SEO naturel.",
    tags: ["HTML", "CSS", "SEO", "Responsive"]
  },
  {
    id: "portfolios-builders",
    title: "Portfolios builders (série GitHub Pages)",
    url: "https://swtori.github.io/spinophore",
    github: "https://github.com/swtori",
    image: "img/portfolios-builders/portfolios-builders-preview.png",
    detailHref: "projets/portfolios-builders.html",
    carousel: true,
    description:
      "Série de portfolios builders sur GitHub Pages : x_Ced_x, _Shusui, spinophore, Hqky.",
    tags: ["HTML", "CSS", "GitHub Pages", "SEO"]
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
      "Vitrine biographique : direction artistique, typographie et parcours de lecture.",
    tags: ["HTML", "CSS", "DA", "GitHub Pages"]
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
    id: "lusciana-crm",
    title: "admin.lusciana.fr – CRM & commissions",
    url: "https://admin.lusciana.fr",
    github: "https://github.com/swtori",
    image: "img/lusciana/lusciana-admin.webp",
    detailHref: "projets/lusciana-crm.html",
    carousel: true,
    description:
      "CRM agents et commissions : Docker, MongoDB et API sécurisée sur VPS.",
    tags: ["Docker", "VPS", "MongoDB", "API"]
  }
];
