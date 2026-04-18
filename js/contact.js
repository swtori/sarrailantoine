/**
 * Portfolio Antoine Sarrail – Formulaire de contact
 * Comportement basique : validation côté client, pas de backend (option mailto ou service tiers à brancher)
 */

(function () {
  "use strict";

  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = form.querySelector("#name");
    var email = form.querySelector("#email");
    var message = form.querySelector("#message");

    var valid = true;
    [name, email, message].forEach(function (field) {
      if (!field.value.trim()) {
        valid = false;
        field.setAttribute("aria-invalid", "true");
      } else {
        field.removeAttribute("aria-invalid");
      }
    });

    if (!valid) {
      return;
    }

    // Option 1 : ouvrir le client mail avec mailto (simple, pas de serveur)
    var subject = encodeURIComponent("Contact portfolio – " + (name ? name.value.trim() : ""));
    var body =
      "Nom : " +
      (name ? name.value.trim() : "") +
      "\nEmail : " +
      (email ? email.value.trim() : "") +
      "\n\nMessage :\n" +
      (message ? message.value.trim() : "");
    var mailto =
      "mailto:sarrailantoine@gmail.com?subject=" + subject + "&body=" + encodeURIComponent(body);
    window.location.href = mailto;

    // Option 2 : si vous branchez un backend ou un service (Formspree, Netlify Forms, etc.),
    // décommentez et adaptez :
    // fetch("/api/contact", { method: "POST", body: new FormData(form) })
    //   .then(function () { alert("Message envoyé."); form.reset(); })
    //   .catch(function () { alert("Erreur d’envoi."); });
  });
})();
