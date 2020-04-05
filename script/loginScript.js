"use strict";
exports.__esModule = true;
/**
 * Constant variables defining the HTML input elements
 */
var usernameField = document.getElementById('username-field');
var passwordField = document.getElementById('password-field');
console.log(usernameField, passwordField);
/**
 * Validate function that returns a boolean value to allow the form to submit the request.
 * @returns boolean
 */
function validate() {
    checkInputFieldError(usernameField, passwordField);
    return checkUsernameInput(usernameField) && checkPasswordInput(passwordField);
}
/**
 * Function that checks if input field of the username is valid or not.
 * @param {HTMLElement} usernameField - HTML input element
 * @returns boolean
 */
function checkUsernameInput(usernameField) {
    var usernameInput = usernameField.value;
    if (usernameInput != undefined && usernameInput != "") {
        return true;
    }
    else {
        usernameField.classList.remove('username-input');
        usernameField.classList.add('error-input');
        usernameField.setAttribute('placeholder', 'Type a valid username');
    }
    return false;
}
exports.checkUsernameInput = checkUsernameInput;
/**
 * Function that checks if input field of the password is valid or not.
 * @param {HTMLElement} passwordField - HTML input element
 * @returns boolean
 */
function checkPasswordInput(passwordField) {
    var passwordInput = passwordField.value;
    if (passwordInput != undefined && passwordInput != "") {
        return true;
    }
    else {
        passwordField.classList.remove('password-input');
        passwordField.classList.add('error-input');
        passwordField.setAttribute('placeholder', 'Type a valid password');
    }
    return false;
}
exports.checkPasswordInput = checkPasswordInput;
/**
 * Function that checks if the elements have previously setted the 'error-input' class, indicating that the user has wrongly typed the value.
 * If the element has the class, the function removes it, otherwise it doesn't do nothing.
 * @param {HTMLElement} usernameField - HTML input element of the username
 * @param {HTMLElement} passwordField - HTML input element of the password
 */
function checkInputFieldError(usernameField, passwordField) {
    var usernameInput = usernameField;
    var passwordInput = passwordField;
    if (usernameInput.classList.contains('error-input')) {
        usernameField.classList.remove('error-input');
        usernameField.classList.add('username-input');
        usernameField.setAttribute('placeholder', 'Type your username');
    }
    if (passwordInput.classList.contains('error-input')) {
        passwordField.classList.remove('error-input');
        passwordField.classList.add('password-input');
        passwordField.setAttribute('placeholder', 'Type your password');
    }
}
exports.checkInputFieldError = checkInputFieldError;
