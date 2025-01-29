// ===== BURGER MENU TOGGLE =====
const burgerMenu = document.querySelector(".burger-menu-lines");
const offScreenMenu = document.querySelector(".off-screen-menu");
burgerMenu?.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});


// ===== FUNCTION FOR INSTALLING AN ACTIVE LINK =====
function setActiveLink() {
    const links = document.querySelectorAll(".nav-list-item");
    links.forEach((link) => {
        link.classList.remove("active");
    });

    const currentPage = window.location.pathname.split(".")[0];

    const pages = {
        "/": "home",  
        "/index": "home",
        "/news": "news",
        "/podcasts": "podcasts",
        "/resources": "resources",
        "/contact-us": "contact-us",
    };

    if (pages[currentPage]) {
        const link = document.querySelector(`.${pages[currentPage]}`);
        if (link) {
            link.classList.add("active");
        }
    }
}
document.addEventListener("DOMContentLoaded", setActiveLink);

