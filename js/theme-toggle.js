document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const html = document.documentElement;
  const sun = document.getElementById("theme-icon-sun");
  const moon = document.getElementById("theme-icon-moon");

  function updateIcons() {
    if (html.classList.contains("dark")) {
      sun.classList.add("hidden");
      moon.classList.remove("hidden");
    } else {
      sun.classList.remove("hidden");
      moon.classList.add("hidden");
    }
  }

  // Initial mode
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
  updateIcons();

  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    const newTheme = html.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    updateIcons();
  });
});