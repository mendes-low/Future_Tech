document
    .getElementById("authForm")
    .addEventListener("submit", function (event) {
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
            usernameError.textContent =
                "Username must be at least 3 characters.";
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
