var btn = document.getElementById("btn");
var form = document.getElementById("form");

var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() !== "") {
        nameError.innerHTML = "";
    }
})

emailInput.addEventListener("input", function () {
    if (emailInput.value.trim() !== "") {
        emailError.innerHTML = "";
    }
})
passwordInput.addEventListener("input", function () {
    if (passwordInput.value.trim() !== "") {
        passwordError.innerHTML = "";
    }
})

nameInput.addEventListener("blur", function () {
    if (nameInput.value.trim() === "") {
        nameError.innerHTML = "Name is empty";
    }
});

emailInput.addEventListener("blur", function () {
    if (emailInput.value.trim() === "") {
        emailError.innerHTML = "Email is empty";
    }
});

passwordInput.addEventListener("blur", function () {
    var password = passwordInput.value.trim();
    if (password === "") {
        passwordError.innerHTML = "Password is empty";
    } else if (password.length < 6) {
        passwordError.innerHTML = "Password is too short";
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var isValid = true;
    var name = nameInput.value.trim();
    if (name === "") {
        nameError.innerHTML = "Name is empty";
        isValid = false;
    } else {
        nameError.innerHTML = "";
    }

    var email = emailInput.value.trim();
    if (email === "") {
        emailError.innerHTML = "Email is empty";
        isValid = false;
    } else {
        emailError.innerHTML = "";
    }

    var password = passwordInput.value.trim();
    if (password === "") {
        passwordError.innerHTML = "Password is empty";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.innerHTML = "Password is too short";
        isValid = false;
    } else {
        passwordError.innerHTML = "";
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});