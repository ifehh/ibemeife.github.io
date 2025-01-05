const hamburger = document.querySelector(".nav_hamburger");
const linksContainer = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav_menu_links");

hamburger.addEventListener("click", () => {
    linksContainer.classList.toggle("active");
    hamburger.classList.toggle("active");
});

window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 700px)").matches) {
        closeMenu();
    }
})

if (window.matchMedia("(max-width: 700px)").matches) {
    closeMenu();
}

function closeMenu() {
    links.forEach((link) => {
        link.addEventListener("click", () => {
            linksContainer.classList.remove("active");
            hamburger.classList.remove("active");
        });   
    });
}