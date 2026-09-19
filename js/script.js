console.log("Portfolio loaded!");

const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
});

mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
    });
});