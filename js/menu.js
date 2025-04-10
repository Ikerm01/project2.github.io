document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    toggleBtn.addEventListener("click", function () {
      navMenu.classList.toggle("hidden");
      navMenu.classList.toggle("active");
    });
  });