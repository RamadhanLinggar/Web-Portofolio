console.log("Portfolio loaded!");

const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

// Hamburger menu
menuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

mobileLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
  });
});

// Active navbar
const navLinks = document.querySelectorAll(".nav-link, .mobile-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach(function (item) {
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});
