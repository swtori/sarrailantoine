/**
 * Portfolio Antoine Sarrail – Chargement des projets depuis data/projects.json
 * Affiche les cartes en grille (quinconce)
 */

(function () {
  "use strict";

  var grid = document.getElementById("projects-grid");
  if (!grid) return;

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function renderCard(project, index) {
    var card = document.createElement("article");
    card.className = "project-card";
    card.id = project.id || "projet-" + (index + 1);
    card.setAttribute("role", "listitem");

    var media = project.image
      ? '<div class="project-card__media"><img src="' +
        escapeHtml(project.image) +
        '" alt="' +
        escapeHtml(project.title) +
        '" width="400" height="250"></div>'
      : "";

    var tags = "";
    if (project.tags && project.tags.length) {
      tags =
        '<ul class="project-card__tags">' +
        project.tags
          .map(function (tag) {
            return '<li>' + escapeHtml(tag) + "</li>";
          })
          .join("") +
        "</ul>";
    }

    var link = "";
    if (project.url) {
      link =
        '<a href="' +
        escapeHtml(project.url) +
        '" class="project-card__link" target="_blank" rel="noopener noreferrer">Voir le site</a>';
    }

    card.innerHTML =
      media +
      '<div class="project-card__body">' +
      '<h3 class="project-card__title">' +
      escapeHtml(project.title) +
      "</h3>" +
      '<p class="project-card__desc">' +
      escapeHtml(project.description || "") +
      "</p>" +
      tags +
      link +
      "</div>";

    return card;
  }

  function showError(message) {
    grid.innerHTML =
      '<p class="projects-fallback">Impossible de charger les projets. ' +
      escapeHtml(message) +
      "</p>";
  }

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data/projects.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status !== 200) {
      showError("Fichier data/projects.json introuvable ou erreur réseau.");
      return;
    }
    try {
      var projects = JSON.parse(xhr.responseText);
      if (!Array.isArray(projects) || projects.length === 0) {
        showError("Aucun projet dans data/projects.json.");
        return;
      }
      grid.innerHTML = "";
      projects.forEach(function (project, index) {
        grid.appendChild(renderCard(project, index));
      });
    } catch (e) {
      showError("Erreur de lecture du JSON.");
    }
  };
  xhr.send();
})();
