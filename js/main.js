/**
 * Portfolio Antoine Sarrail – Script principal
 * Navigation, année dynamique, liens blog/VPS depuis site-config.js
 */

(function () {
  "use strict";

  var cfg = window.SITE_CONFIG || {};
  var blogPublic = cfg.blogPublicUrl || "";
  var blogAdmin = cfg.blogAdminUrl || "";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var blogPublicLink = document.getElementById("blog-public-link");
  var blogAdminLink = document.getElementById("blog-admin-link");
  if (blogPublicLink && blogPublic) {
    blogPublicLink.href = blogPublic;
  }
  if (blogAdminLink && blogAdmin) {
    blogAdminLink.href = blogAdmin;
  }

  var toggle = document.querySelector(".nav__toggle");
  var list = document.querySelector(".nav__list");
  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });

    list.querySelectorAll(".nav__link").forEach(function (link) {
      link.addEventListener("click", function () {
        list.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Ouvrir le menu");
      });
    });
  }

  if (cfg.debugVpsLinks) {
    console.log("URL blog public:", blogPublic);
    console.log("URL back-office:", blogAdmin);
  }
})();
