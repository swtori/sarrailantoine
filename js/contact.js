/**
 * Portfolio Antoine Sarrail – Formulaire de contact (validation + mailto)
 */

(function () {
  "use strict";

  var form = document.getElementById("contact-form");
  if (!form) return;

  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    if (email && email.value.trim() && !emailRe.test(email.value.trim())) {
      valid = false;
      email.setAttribute("aria-invalid", "true");
    }

    if (!valid) {
      return;
    }

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
  });
})();
