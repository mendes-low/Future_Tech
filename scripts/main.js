// ===== BURGER MENU TOGGLE =====
function burgerMenu() {
    const burgerMenu = document.querySelector(".burger-menu-lines");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    if (burgerMenu && offScreenMenu) {
        burgerMenu.addEventListener("click", () => {
            burgerMenu.classList.toggle("active");
            offScreenMenu.classList.toggle("active");
        });
    }
}

// ===== VALIDATION FORM =====
function formValidation() {
    const authForm = document.getElementById("authForm");

    if (!authForm) {
        console.error("Форма не найдена!");
        return;
    }

    authForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let username = document.getElementById("username");
        let email = document?.getElementById("email");
        let password = document.getElementById("password");
        let usernameError = document.getElementById("usernameError");
        let emailError = document?.getElementById("emailError");
        let passwordError = document.getElementById("passwordError");

        let isValid = true;

        usernameError.textContent = "";
        if (emailError) emailError.textContent = "";
        passwordError.textContent = "";
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (username.value.trim().length < 5) {
            usernameError.textContent =
                "Username must be at least 5 characters.";
            username.style.borderColor = "red";
            usernameError.style.color = "red";
            isValid = false;
        } else {
            username.style.borderColor = "green";
            usernameError.textContent = "Valid!";
            usernameError.style.color = "green";
        }

        if (email) {
            if (!emailPattern.test(email.value.trim())) {
                emailError.textContent = "Invalid email.";
                email.style.borderColor = "red";
                emailError.style.color = "red";
                isValid = false;
            } else {
                email.style.borderColor = "green";
                emailError.textContent = "Valid!";
                emailError.style.color = "green";
            }
        }

        if (password.value.length < 8) {
            passwordError.textContent =
                "Password must be at least 8 characters.";
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
}

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

document.addEventListener("DOMContentLoaded", () => {
    setActiveLink();
    accordion();
    burgerMenu();
    formValidation();
});


// ===== SCROLL REVEAL ANIMATION =====
const sr = ScrollReveal()

sr.reveal(".fade-up", {
    origin: "bottom",
    distance: "50px",
    duration: 1300,
    easing: "linear",
    opacity: 0, 
    // reset: false, 
});

sr.reveal(".fade-down", {
    origin: "top",
    distance: "50px",
    duration: 1300,
    easing: "linear",
    opacity: 0,
    // reset: false,
});

sr.reveal(".fade-left", {
    origin: "left",
    distance: "100px",
    duration: 1300,
    opacity: 0,
    // reset: false,
});

sr.reveal(".fade-right", {
    origin: "right",
    distance: "100px",
    duration: 1300,
    opacity: 0,
    // reset: false,
});

sr.reveal(".zoom-in", {
    scale: 1.3,
    duration: 1500,
    opacity: 0,
    // reset: false,
});