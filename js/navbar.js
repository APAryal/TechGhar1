document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navbar-toggle");
  const menu = document.getElementById("mobile-menu");
  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});