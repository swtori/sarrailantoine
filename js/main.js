/**
 * Portfolio Antoine Sarrail – Script principal
 * Navigation, année dynamique, comportements communs
 */

(function () {
  "use strict";

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
})();
