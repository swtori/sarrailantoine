/**
 * Révélations au scroll — fiches projet (story)
 */
(function () {
  "use strict";

  var root = document.getElementById("projet-story");
  if (!root) return;

  var prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var targets = root.querySelectorAll(".story-reveal");
  if (!targets.length) return;

  if (prefersReduced || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
