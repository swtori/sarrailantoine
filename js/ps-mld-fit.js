/**
 * Ajuste la taille du MLD texte pour tenir sans scroll horizontal (une ligne par table).
 */
(function () {
  "use strict";

  var MIN_PX = 7;
  var MAX_PX = 14;
  var STEP = 0.25;

  function fitBlock(pre) {
    var lines = pre.querySelectorAll(".ps-mld-line");
    if (!lines.length) return;

    var styles = getComputedStyle(pre);
    var available =
      pre.clientWidth -
      parseFloat(styles.paddingLeft) -
      parseFloat(styles.paddingRight);

    if (available <= 0) return;

    var size = MAX_PX;
    lines.forEach(function (line) {
      line.style.fontSize = size + "px";
    });

    while (size > MIN_PX) {
      var overflow = false;
      lines.forEach(function (line) {
        if (line.scrollWidth > available) overflow = true;
      });
      if (!overflow) break;
      size -= STEP;
      lines.forEach(function (line) {
        line.style.fontSize = size + "px";
      });
    }
  }

  function fitAll() {
    document.querySelectorAll("[data-mld-fit]").forEach(fitBlock);
  }

  function init() {
    fitAll();

    if ("ResizeObserver" in window) {
      document.querySelectorAll("[data-mld-fit]").forEach(function (pre) {
        new ResizeObserver(fitAll).observe(pre);
      });
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitAll);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.addEventListener("resize", fitAll);
})();
