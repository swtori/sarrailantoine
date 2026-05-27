/**
 * Portfolio Antoine Sarrail – Affichage grille + carrousel (données : projects-data.js)
 */

(function () {
  "use strict";

  if (typeof PROJECTS === "undefined" || !PROJECTS.length) {
    return;
  }

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

  function primaryLink(project) {
    return project.url || project.github || "";
  }

  function renderMedia(project) {
    var baseUrl = primaryLink(project);
    var domain = getDomain(baseUrl);
    var faviconUrl =
      "https://www.google.com/s2/favicons?domain=" +
      encodeURIComponent(domain || "github.com") +
      "&sz=128";
    if (project.image) {
      return (
        '<div class="project-card__media">' +
        '<a href="' +
        escapeHtml(baseUrl || "#") +
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
        '<span class="project-card__open">Ouvrir →</span>' +
        "</div>" +
        "</div>"
      );
    }
    if (baseUrl) {
      return (
        '<div class="project-card__media project-card__media--fallback">' +
        '<a href="' +
        escapeHtml(baseUrl) +
        '" target="_blank" rel="noopener noreferrer" class="project-card__media-link">' +
        '<img src="' +
        escapeHtml(faviconUrl) +
        '" alt="" class="project-card__favicon">' +
        '<span class="project-card__domain">' +
        escapeHtml(domain) +
        "</span>" +
        '<span class="project-card__open">Ouvrir →</span>' +
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
        '" target="_blank" rel="noopener noreferrer">Code source (GitHub) →</a></p>'
      : "";

    var detailBlock = project.detailHref
      ? '<p class="project-card__link project-card__link--detail"><a href="' +
        escapeHtml(project.detailHref) +
        '">Fiche projet détaillée →</a></p>'
      : "";

    card.innerHTML =
      media +
      "<div class=\"project-card__body\">" +
      titleHtml +
      '<p class="project-card__desc">' +
      escapeHtml(project.description || "") +
      "</p>" +
      detailBlock +
      linkBlock +
      githubBlock +
      tags +
      "</div>";

    return card;
  }

  var grid = document.getElementById("projects-grid");
  if (grid) {
    grid.innerHTML = "";
    PROJECTS.forEach(function (project, index) {
      var card = renderCard(project, index);
      grid.appendChild(card);
      var img = card.querySelector(".project-card__media img[loading=lazy]");
      if (img) {
        img.onerror = function () {
          var mediaEl = img.closest(".project-card__media");
          if (mediaEl) mediaEl.classList.add("is-fallback");
        };
      }
    });
  }

  var CAROUSEL_PROJECTS = PROJECTS.filter(function (p) {
    return p.carousel === true;
  });
  if (CAROUSEL_PROJECTS.length < 3) {
    CAROUSEL_PROJECTS = PROJECTS.slice(0, Math.min(6, PROJECTS.length));
  }

  var carousel = document.getElementById("featured-carousel");
  if (!carousel || !CAROUSEL_PROJECTS.length) return;

  var track = carousel.querySelector(".featured-carousel__track");
  var content = carousel.querySelector(".featured-carousel__content");
  var dotsContainer = carousel.querySelector(".featured-carousel__dots");
  var btnPrev = carousel.querySelector(".featured-carousel__btn--prev");
  var btnNext = carousel.querySelector(".featured-carousel__btn--next");

  if (!track || !dotsContainer || !content) return;

  function renderSlideMedia(project) {
    var baseUrl = primaryLink(project);
    var domain = getDomain(baseUrl);
    var faviconUrl =
      "https://www.google.com/s2/favicons?domain=" +
      encodeURIComponent(domain || "github.com") +
      "&sz=128";
    if (project.image) {
      return (
        '<div class="featured-carousel__media featured-card__media">' +
        '<a href="' +
        escapeHtml(baseUrl || "#") +
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
        '<span class="project-card__open">Ouvrir →</span>' +
        "</div>" +
        "</div>"
      );
    }
    if (baseUrl) {
      return (
        '<div class="featured-carousel__media featured-card__media featured-card__media--fallback">' +
        '<a href="' +
        escapeHtml(baseUrl) +
        '" target="_blank" rel="noopener noreferrer" class="project-card__media-link">' +
        '<img src="' +
        escapeHtml(faviconUrl) +
        '" alt="" class="project-card__favicon">' +
        '<span class="project-card__domain">' +
        escapeHtml(domain) +
        "</span>" +
        '<span class="project-card__open">Ouvrir →</span>' +
        "</a>" +
        "</div>"
      );
    }
    return "";
  }

  var currentIndex = 0;
  var intervalId = null;
  var AUTOPLAY_MS = 30000;

  function renderSlide(project, index) {
    var slide = document.createElement("article");
    slide.className = "featured-carousel__slide" + (index === 0 ? " is-active" : "");
    slide.id = "slide-" + (project.id || index);
    slide.setAttribute("aria-hidden", index !== 0);

    var mediaHtml = renderSlideMedia(project);

    var linkHtml = "";
    if (project.url) {
      linkHtml =
        '<a href="' +
        escapeHtml(project.url) +
        '" target="_blank" rel="noopener noreferrer" class="btn btn--primary">Voir le site</a>';
    } else if (project.detailHref) {
      linkHtml =
        '<a href="' +
        escapeHtml(project.detailHref) +
        '" class="btn btn--primary">Fiche projet</a>';
    } else if (project.github) {
      linkHtml =
        '<a href="' +
        escapeHtml(project.github) +
        '" target="_blank" rel="noopener noreferrer" class="btn btn--primary">Voir GitHub</a>';
    } else {
      linkHtml =
        '<a href="projects.html#' +
        escapeHtml(project.id || "projet-" + (index + 1)) +
        '" class="btn btn--primary">Voir le projet</a>';
    }

    var detailExtra = "";
    if (project.detailHref && project.url) {
      detailExtra =
        '<a href="' +
        escapeHtml(project.detailHref) +
        '" class="btn btn--outline featured-carousel__btn-secondary">Fiche détaillée</a>';
    }

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
      '<div class="featured-carousel__actions">' +
      linkHtml +
      detailExtra +
      "</div>" +
      "</div>" +
      "</div>";

    return slide;
  }

  function goTo(index) {
    var n = CAROUSEL_PROJECTS.length;
    currentIndex = ((index % n) + n) % n;

    track.querySelectorAll(".featured-carousel__slide").forEach(function (el, i) {
      var active = i === currentIndex;
      el.classList.toggle("is-active", active);
      el.setAttribute("aria-hidden", !active);
    });

    dotsContainer.querySelectorAll("button").forEach(function (btn, i) {
      var active = i === currentIndex;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-current", active ? "true" : "false");
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

  CAROUSEL_PROJECTS.forEach(function (project, index) {
    var slide = renderSlide(project, index);
    track.appendChild(slide);
    var img = slide.querySelector(".featured-carousel__media .project-card__media-link > img");
    if (img) {
      img.onerror = function () {
        var mediaEl = img.closest(".featured-carousel__media");
        if (mediaEl) mediaEl.classList.add("is-fallback");
      };
    }
  });

  CAROUSEL_PROJECTS.forEach(function (project, index) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "featured-carousel__dot" + (index === 0 ? " is-active" : "");
    btn.setAttribute("aria-label", "Projet " + (index + 1) + " : " + project.title);
    btn.setAttribute("aria-controls", "slide-" + (project.id || index));
    btn.setAttribute("aria-current", index === 0 ? "true" : "false");
    btn.addEventListener("click", function () {
      goTo(index);
    });
    dotsContainer.appendChild(btn);
  });

  if (btnPrev) btnPrev.addEventListener("click", prev);
  if (btnNext) btnNext.addEventListener("click", next);

  resetAutoplay();
})();
