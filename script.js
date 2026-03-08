var btn = document.getElementById("btn");

var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

function validateName() {
    var name = nameInput.value.trim();

    if (name === "") {
        nameError.innerHTML = "Name is required";
        return false;
    } else {
        nameError.innerHTML = "";
        return true;
    }
}

function validateEmail() {
    var email = emailInput.value.trim();
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        emailError.innerHTML = "Email is required";
        return false;
    }
    else if (!email.match(emailPattern)) {
        emailError.innerHTML = "Enter valid email";
        return false;
    }
    else {
        emailError.innerHTML = "";
        return true;
    }
}

function validatePassword() {
    var password = passwordInput.value.trim();

    if (password === "") {
        passwordError.innerHTML = "Password is required";
        return false;
    }
    else if (password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters";
        return false;
    }
    else {
        passwordError.innerHTML = "";
        return true;
    }
}

function checkForm() {
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();

    if (name !== "" && email !== "" && password.length >= 6) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}
nameInput.addEventListener("input", function () {
    validateName();
    checkForm();
})

emailInput.addEventListener("input", function () {
   validateName();
    checkForm();
})
passwordInput.addEventListener("input", function () {
    validateName();
    checkForm();
})

nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);

form.addEventListener("submit", function (event) {
    var nameValid = validateName();
    var emailValid = validateEmail();
    var passwordValid = validatePassword();

    if (nameValid && emailValid && passwordValid) {
        var name = nameInput.value.trim();
        alert("You are successfully registered! Welcome " + name);
    }

});

