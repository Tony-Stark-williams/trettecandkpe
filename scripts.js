document.addEventListener("DOMContentLoaded", function () {
  // Keep the footer year current (falls back to the year typed in the HTML)
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Contact form
  var form = document.querySelector("form");
  var thanks = document.getElementById("thanks");
  if (!form || !thanks) return;

  // Runs only when the browser has already checked the required fields,
  // so an empty email or district can no longer show "Thank you".
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // NOTE: nothing is sent anywhere yet. When you have a place to receive
    // the sign-ups (email service, form backend, etc.), send the data here:
    // var data = new FormData(form);

    thanks.textContent = "Thank you for your submission!";
    thanks.style.opacity = "1";
    form.reset();
  });
});