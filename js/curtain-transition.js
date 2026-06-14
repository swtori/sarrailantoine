/**
 * Transition rideau — fermeture au clic vers Projets, ouverture à l’arrivée.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-curtain";
  var DURATION_MS = 950;
  var FADE_OUT_MS = 420;
  var FOLD_COUNT = 9;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function isProjectsPage() {
    var path = location.pathname.split("/").pop() || "";
    return /^projects\.html$/i.test(path);
  }

  function isProjectsLink(anchor) {
    if (!anchor.href || anchor.target === "_blank" || anchor.hasAttribute("download")) {
      return false;
    }
    try {
      var url = new URL(anchor.href, location.href);
      return url.origin === location.origin && /\/projects\.html$/i.test(url.pathname);
    } catch (err) {
      return false;
    }
  }

  function getCurtain() {
    return document.getElementById("page-curtain");
  }

  function buildSide(sideClass) {
    var side = document.createElement("div");
    side.className = "page-curtain__side " + sideClass;

    for (var i = 0; i < FOLD_COUNT; i++) {
      var fold = document.createElement("div");
      fold.className = "page-curtain__fold";
      fold.style.setProperty("--fold-i", String(i));
      side.appendChild(fold);
    }

    return side;
  }

  function enhanceCurtain() {
    var curtain = getCurtain();
    if (!curtain || curtain.classList.contains("page-curtain--enhanced")) {
      return;
    }

    var valance = document.createElement("div");
    valance.className = "page-curtain__valance";
    valance.setAttribute("aria-hidden", "true");

    var hem = document.createElement("div");
    hem.className = "page-curtain__hem";
    hem.setAttribute("aria-hidden", "true");

    curtain.textContent = "";
    curtain.appendChild(valance);
    curtain.appendChild(buildSide("page-curtain__side--left"));
    curtain.appendChild(buildSide("page-curtain__side--right"));
    curtain.appendChild(hem);
    curtain.classList.add("page-curtain--enhanced");
  }

  function resetCurtain(curtain) {
    if (!curtain) {
      return;
    }

    curtain.classList.remove("is-closing", "is-entering", "is-open", "is-fading-out");
    document.documentElement.classList.remove("curtain-preload");

    curtain.querySelectorAll(".page-curtain__fold").forEach(function (fold) {
      fold.style.animation = "none";
      fold.style.transform = "";
    });
  }

  function closeThenNavigate(url) {
    if (reducedMotion) {
      location.href = url;
      return;
    }

    enhanceCurtain();

    var curtain = getCurtain();
    if (!curtain) {
      location.href = url;
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, "1");
    curtain.classList.remove("is-open", "is-entering");
    curtain.classList.add("is-closing");

    window.setTimeout(function () {
      location.href = url;
    }, DURATION_MS);
  }

  function openOnArrival() {
    if (sessionStorage.getItem(STORAGE_KEY) !== "1") {
      return;
    }

    sessionStorage.removeItem(STORAGE_KEY);

    if (reducedMotion) {
      document.documentElement.classList.remove("curtain-preload");
      return;
    }

    enhanceCurtain();

    var curtain = getCurtain();
    if (!curtain) {
      document.documentElement.classList.remove("curtain-preload");
      return;
    }

    curtain.classList.remove("is-closing");
    curtain.classList.add("is-entering");

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        curtain.classList.add("is-open");
        document.documentElement.classList.remove("curtain-preload");

        window.setTimeout(function () {
          curtain.classList.remove("is-entering");
          curtain.classList.add("is-fading-out");

          window.setTimeout(function () {
            resetCurtain(curtain);
          }, FADE_OUT_MS);
        }, DURATION_MS);
      });
    });
  }

  function bindLinks() {
    document.addEventListener("click", function (event) {
      var anchor = event.target.closest("a");
      if (!anchor || !isProjectsLink(anchor) || isProjectsPage()) {
        return;
      }

      event.preventDefault();
      closeThenNavigate(anchor.href);
    });
  }

  function init() {
    bindLinks();
    if (isProjectsPage()) {
      openOnArrival();
    } else {
      resetCurtain(getCurtain());
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
