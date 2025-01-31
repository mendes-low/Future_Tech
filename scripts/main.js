// ===== BURGER MENU TOGGLE =====
const burgerMenu = document.querySelector(".burger-menu-lines");
const offScreenMenu = document.querySelector(".off-screen-menu");
burgerMenu?.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});


// ===== VALIDATION FORM =====
const authForm = document.getElementById("authForm");
authForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let usernameError = document.getElementById("usernameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    let isValid = true;

    username.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (username.value.trim().length < 3) {
        usernameError.textContent = "Username must be at least 3 characters.";
        username.style.borderColor = "red";
        usernameError.style.color = "red";
        isValid = false;
    } else {
        username.style.borderColor = "green";
        usernameError.textContent = "Valid!";
        usernameError.style.color = "green";
    }

    if (
        !email.value.includes("@") &&
        !email.value.includes("gmail") &&
        !email.value.includes("com")
    ) {
        emailError.textContent = "Invalid email.";
        email.style.borderColor = "red";
        emailError.style.color = "red";
        isValid = false;
    } else {
        email.style.borderColor = "green";
        emailError.textContent = "Valid!";
        emailError.style.color = "green";
    }

    if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        password.style.borderColor = "red";
        passwordError.style.color = "red";
        isValid = false;
    } else {
        password.style.borderColor = "green";
        passwordError.textContent = "Valid!";
        passwordError.style.color = "green";
    }

    if (isValid) {
        alert("Form submitted successfully");
    }
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


// ===== ACCORDION =====
function accordion() {
    document.querySelectorAll(".accordion-header").forEach((header) => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector(".icon");

            header.classList.toggle("active");
            content.classList.toggle("active");

            icon.src = content.classList.contains("active")
                ? "./assets/images/icons/minus-icon.svg"
                : "./assets/images/icons/plus-icon.svg";
        });
    });
}

document.addEventListener("DOMContentLoaded", setActiveLink, accordion);
