/**
 * Portfolio Antoine Sarrail – Projets (données en variable)
 * Affiche les cartes en grille (quinconce)
 */

var PROJECTS = [
  {
    id: "domaine-de-gach",
    title: "Domaine de gach",
    url: "https://domainedegach.com",
    github: "https://github.com/swtori",
    image: "img/domainedegach.png",
    description:
      "Objectif : Développer un site web dynamique de chambre d'hôte avec une présentation professionnelle et une gestion du contenu.\n\nTechnologies : HTML, CSS, JavaScript, PHP, MySQL/SQL.\n\nFonctionnalités : affichage dynamique des contenus, formulaire de contact, structure responsive, gestion des données via base SQL.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "SQL"]
  },
  {
    id: "lusciana",
    title: "Lusciana",
    url: "https://lusciana.fr",
    github: "https://github.com/swtori",
    image: "img/lusciana.png",
    description:
      "Objectif : Concevoir un site vitrine pour présenter l'activité de build & development de l'entreprise.\n\nTechnologies : HTML, CSS, JavaScript, PHP, SQL.\n\nFonctionnalités : pages de présentation, navigation claire, adaptation mobile/desktop, base structurée pour les évolutions futures.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "SQL"]
  }
];

(function () {
  "use strict";

  var grid = document.getElementById("projects-grid");
  if (!grid) return;

  function escapeHtml(text) {
    if (!text) return "";
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function getDomain(url) {
    if (!url) return "";
    return url.replace(/^https?:\/\//, "").split("/")[0];
  }

  function renderMedia(project) {
    var domain = getDomain(project.url);
    var faviconUrl =
      "https://www.google.com/s2/favicons?domain=" +
      encodeURIComponent(domain) +
      "&sz=128";
    if (project.image) {
      return (
        '<div class="project-card__media">' +
        '<a href="' +
        escapeHtml(project.url || "#") +
        '" target="_blank" rel="noopener noreferrer" class="project-card__media-link" aria-label="Voir ' +
        escapeHtml(project.title) +
        '">' +
        '<img src="' +
        escapeHtml(project.image) +
        '" alt="' +
        escapeHtml(project.title) +
        '" width="400" height="250" loading="lazy">' +
        "</a>" +
        '<div class="project-card__media-fallback" aria-hidden="true">' +
        '<img src="' +
        escapeHtml(faviconUrl) +
        '" alt="" class="project-card__favicon">' +
        '<span class="project-card__domain">' +
        escapeHtml(domain) +
        "</span>" +
        '<span class="project-card__open">Ouvrir le site →</span>' +
        "</div>" +
        "</div>"
      );
    }
    if (project.url) {
      return (
        '<div class="project-card__media project-card__media--fallback">' +
        '<a href="' +
        escapeHtml(project.url) +
        '" target="_blank" rel="noopener noreferrer" class="project-card__media-link">' +
        '<img src="' +
        escapeHtml(faviconUrl) +
        '" alt="" class="project-card__favicon">' +
        '<span class="project-card__domain">' +
        escapeHtml(domain) +
        "</span>" +
        '<span class="project-card__open">Ouvrir le site →</span>' +
        "</a>" +
        "</div>"
      );
    }
    return "";
  }

  function renderCard(project, index) {
    var card = document.createElement("article");
    card.className = "project-card";
    card.id = project.id || "projet-" + (index + 1);
    card.setAttribute("role", "listitem");

    var media = renderMedia(project);

    var titleHtml =
      "<h3 class=\"project-card__title\">" + escapeHtml(project.title) + "</h3>";

    var tags = "";
    if (project.tags && project.tags.length) {
      tags =
        '<ul class="project-card__tags">' +
        project.tags
          .map(function (tag) {
            return "<li>" + escapeHtml(tag) + "</li>";
          })
          .join("") +
        "</ul>";
    }

    var linkBlock = project.url
      ? '<p class="project-card__link"><a href="' +
        escapeHtml(project.url) +
        '" target="_blank" rel="noopener noreferrer">Voir le site →</a></p>'
      : "";

    var githubBlock = project.github
      ? '<p class="project-card__link"><a href="' +
        escapeHtml(project.github) +
        '" target="_blank" rel="noopener noreferrer">Voir le code source (GitHub) →</a></p>'
      : "";

    card.innerHTML =
      media +
      "<div class=\"project-card__body\">" +
      titleHtml +
      '<p class="project-card__desc">' +
      escapeHtml(project.description || "") +
      "</p>" +
      linkBlock +
      githubBlock +
      tags +
      "</div>";

    return card;
  }

  grid.innerHTML = "";
  PROJECTS.forEach(function (project, index) {
    var card = renderCard(project, index);
    grid.appendChild(card);
    var img = card.querySelector(".project-card__media img[loading=lazy]");
    if (img) {
      img.onerror = function () {
        var media = img.closest(".project-card__media");
        if (media) media.classList.add("is-fallback");
      };
    }
  });
})();

/* ========== Carrousel projets (page d'accueil) ========== */
(function () {
  "use strict";

  var carousel = document.getElementById("featured-carousel");
  if (!carousel || !window.PROJECTS || PROJECTS.length === 0) return;

  var track = carousel.querySelector(".featured-carousel__track");
  var content = carousel.querySelector(".featured-carousel__content");
  var dotsContainer = carousel.querySelector(".featured-carousel__dots");
  var btnPrev = carousel.querySelector(".featured-carousel__btn--prev");
  var btnNext = carousel.querySelector(".featured-carousel__btn--next");

  if (!track || !dotsContainer || !content) return;

  function escapeHtml(text) {
    if (!text) return "";
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function getDomain(url) {
    if (!url) return "";
    return url.replace(/^https?:\/\//, "").split("/")[0];
  }

  function renderSlideMedia(project) {
    var domain = getDomain(project.url);
    var faviconUrl =
      "https://www.google.com/s2/favicons?domain=" +
      encodeURIComponent(domain) +
      "&sz=128";
    if (project.image) {
      return (
        '<div class="featured-carousel__media featured-card__media">' +
        '<a href="' +
        escapeHtml(project.url || "#") +
        '" target="_blank" rel="noopener noreferrer" class="project-card__media-link" aria-label="Voir ' +
        escapeHtml(project.title) +
        '">' +
        '<img src="' +
        escapeHtml(project.image) +
        '" alt="' +
        escapeHtml(project.title) +
        '" width="600" height="360">' +
        "</a>" +
        '<div class="featured-card__media-fallback" aria-hidden="true">' +
        '<img src="' +
        escapeHtml(faviconUrl) +
        '" alt="" class="project-card__favicon">' +
        '<span class="project-card__domain">' +
        escapeHtml(domain) +
        "</span>" +
        '<span class="project-card__open">Ouvrir le site →</span>' +
        "</div>" +
        "</div>"
      );
    }
    if (project.url) {
      return (
        '<div class="featured-carousel__media featured-card__media featured-card__media--fallback">' +
        '<a href="' +
        escapeHtml(project.url) +
        '" target="_blank" rel="noopener noreferrer" class="project-card__media-link">' +
        '<img src="' +
        escapeHtml(faviconUrl) +
        '" alt="" class="project-card__favicon">' +
        '<span class="project-card__domain">' +
        escapeHtml(domain) +
        "</span>" +
        '<span class="project-card__open">Ouvrir le site →</span>' +
        "</a>" +
        "</div>"
      );
    }
    return "";
  }

  var currentIndex = 0;
  var intervalId = null;
  var AUTOPLAY_MS = 30000; // 30 secondes

  function renderSlide(project, index) {
    var slide = document.createElement("article");
    slide.className = "featured-carousel__slide" + (index === 0 ? " is-active" : "");
    slide.setAttribute("role", "tabpanel");
    slide.id = "slide-" + (project.id || index);
    slide.setAttribute("aria-hidden", index !== 0);

    var mediaHtml = renderSlideMedia(project);

    var linkHtml = project.url
      ? '<a href="' +
        escapeHtml(project.url) +
        '" target="_blank" rel="noopener noreferrer" class="btn btn--primary">Voir le site</a>'
      : '<a href="projects.html#' +
        escapeHtml(project.id || "projet-" + (index + 1)) +
        '" class="btn btn--primary">Voir le projet</a>';

    slide.innerHTML =
      '<div class="featured-carousel__card">' +
      mediaHtml +
      '<div class="featured-carousel__body">' +
      '<h3 class="featured-carousel__title">' +
      escapeHtml(project.title) +
      "</h3>" +
      '<p class="featured-carousel__desc">' +
      escapeHtml(project.description || "") +
      "</p>" +
      linkHtml +
      "</div>" +
      "</div>";

    return slide;
  }

  function goTo(index) {
    var n = PROJECTS.length;
    currentIndex = ((index % n) + n) % n;

    track.querySelectorAll(".featured-carousel__slide").forEach(function (el, i) {
      var active = i === currentIndex;
      el.classList.toggle("is-active", active);
      el.setAttribute("aria-hidden", !active);
    });

    dotsContainer.querySelectorAll("button").forEach(function (btn, i) {
      btn.setAttribute("aria-selected", i === currentIndex);
      btn.classList.toggle("is-active", i === currentIndex);
    });

    resetAutoplay();
  }

  function next() {
    goTo(currentIndex + 1);
  }

  function prev() {
    goTo(currentIndex - 1);
  }

  function resetAutoplay() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(next, AUTOPLAY_MS);
  }

  // Remplir le track
  PROJECTS.forEach(function (project, index) {
    var slide = renderSlide(project, index);
    track.appendChild(slide);
    var img = slide.querySelector(".featured-carousel__media .project-card__media-link > img");
    if (img) {
      img.onerror = function () {
        var media = img.closest(".featured-carousel__media");
        if (media) media.classList.add("is-fallback");
      };
    }
  });

  // Points
  PROJECTS.forEach(function (project, index) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "featured-carousel__dot" + (index === 0 ? " is-active" : "");
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-label", "Projet " + (index + 1) + " : " + project.title);
    btn.setAttribute("aria-selected", index === 0);
    btn.setAttribute("aria-controls", "slide-" + (project.id || index));
    btn.addEventListener("click", function () {
      goTo(index);
    });
    dotsContainer.appendChild(btn);
  });

  if (btnPrev) btnPrev.addEventListener("click", prev);
  if (btnNext) btnNext.addEventListener("click", next);

  resetAutoplay();
})();
