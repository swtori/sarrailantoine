/**
 * Portfolio Antoine Sarrail – Script principal
 * Navigation, année dynamique, comportements communs
 */

(function () {
  "use strict";

  // Debug reseau utile quand le site est heberge sur GitHub Pages
  // et que le back-office tourne sur un VPS externe.
  // Passe DEBUG_VPS_LINKS a true pour afficher les URLs en console.
  var DEBUG_VPS_LINKS = false;

  // Année dans le footer
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Menu mobile : toggle
  var toggle = document.querySelector(".nav__toggle");
  var list = document.querySelector(".nav__list");
  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });

    // Fermer le menu en cliquant sur un lien (mobile)
    list.querySelectorAll(".nav__link").forEach(function (link) {
      link.addEventListener("click", function () {
        list.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Ouvrir le menu");
      });
    });
  }

  if (DEBUG_VPS_LINKS) {
    console.log("URL blog public:", "http://72.60.91.85:8088/");
    console.log("URL back-office:", "http://72.60.91.85:8088/login.php");
  }
})();
