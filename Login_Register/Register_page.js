
const registrationForm = document.getElementById('form'); 
const firstnameInput = document.getElementById('firstname-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const repeatPasswordInput = document.getElementById('repeat-password-input');
const registrationErrorMessage = document.getElementById('error-message');


const loginForm = document.getElementById('login-form'); 
const loginEmailInput = document.getElementById('login-email-input');
const loginPasswordInput = document.getElementById('login-password-input');
const loginErrorMessage = document.getElementById('login-error-message');


if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
        const errors = getSignupFormErrors(
            firstnameInput?.value || '', 
            emailInput?.value || '', 
            passwordInput?.value || '', 
            repeatPasswordInput?.value || ''
        );

        if (errors.length > 0) {
            e.preventDefault();
            registrationErrorMessage.innerText = errors.join('. ');
        } else {
            e.preventDefault();
            alert("Form has been submitted successfully");
            window.location.href = "login.html";
            resetFormInputs([firstnameInput, emailInput, passwordInput, repeatPasswordInput]);
        }
    });
}


if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        const errors = getLoginFormErrors(
            loginEmailInput?.value || '', 
            loginPasswordInput?.value || ''
        );

        if (errors.length > 0) {
            e.preventDefault();
            loginErrorMessage.innerText = errors.join('. ');
        } else {
            e.preventDefault(); 
            alert("Logged in successfully");
            window.location.href = "../index.html";
            resetFormInputs([loginEmailInput, loginPasswordInput]);
        }
    });
}


function getSignupFormErrors(firstname, email, password, repeatPassword) {
    let errors = [];
    if (!firstname) {
        errors.push("Firstname is required");
        firstnameInput?.parentElement.classList.add('incorrect');
    }
    if (!email) {
        errors.push("Email is required");
        emailInput?.parentElement.classList.add('incorrect');
    }
    if (!password) {
        errors.push("Password is required");
        passwordInput?.parentElement.classList.add('incorrect');
    }
    if (password.length < 8) {
        errors.push("Password must have at least 8 characters");
        passwordInput?.parentElement.classList.add('incorrect');
    }
    if (password !== repeatPassword) {
        errors.push("Passwords do not match");
        passwordInput?.parentElement.classList.add('incorrect');
        repeatPasswordInput?.parentElement.classList.add('incorrect');
    }
    return errors;
}


function getLoginFormErrors(email, password) {
    let errors = [];
    if (!email) {
        errors.push('Email is required');
        loginEmailInput?.parentElement.classList.add('incorrect');
    }
    if (!password) {
        errors.push('Password is required');
        loginPasswordInput?.parentElement.classList.add('incorrect');
    }
    return errors;
}


function resetFormInputs(inputs) {
    inputs.forEach(input => {
        if (input) {
            input.value = ''; 
            input.parentElement.classList.remove('incorrect'); 
        }
    });
    if (registrationErrorMessage) registrationErrorMessage.innerText = ''; 
    if (loginErrorMessage) loginErrorMessage.innerText = ''; 
}


const allInputs = [
    firstnameInput, 
    emailInput, 
    passwordInput, 
    repeatPasswordInput,
    loginEmailInput, 
    loginPasswordInput
].filter(input => input != null);

allInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect'); 
            if (registrationErrorMessage) registrationErrorMessage.innerText = ''; 
            if (loginErrorMessage) loginErrorMessage.innerText = ''; 
        }
    });
});

