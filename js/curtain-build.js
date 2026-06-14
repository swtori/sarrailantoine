/**
 * Construction synchrone du rideau (avant peinture — anti-flash).
 */
(function () {
  "use strict";

  var FOLD_COUNT = 9;
  var curtain = document.getElementById("page-curtain");

  if (!curtain || curtain.classList.contains("page-curtain--enhanced")) {
    return;
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
})();
