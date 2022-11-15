const mobileMenu = document.getElementById("mobile-menu")
const mobileMenuIcon = document.getElementById("menu-icon")

function openMobileMenu() {
    mobileMenu.classList.toggle("opened")
    mobileMenuIcon.classList.toggle("mobile-menu-opened")
}