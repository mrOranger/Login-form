"use strict";
exports.__esModule = true;
var loginScript_1 = require("./loginScript");
/**
 * Constant variables defining the HTML input elements
 */
var nameField = document.getElementById('name-field');
var surnameField = document.getElementById('surname-field');
var usernameField = document.getElementById('username-field');
var passwordField = document.getElementById('password-field');
/**
 * Validate function that returns a boolean value to allow the form to submit the request.
 * @returns boolean
 */
function validate() {
    checkInputFieldError(nameField, surnameField, usernameField, passwordField);
    return checkNameInput(nameField) && checkSurnameInput(surnameField) && loginScript_1.checkUsernameInput(usernameField) && loginScript_1.checkPasswordInput(passwordField);
}
/**
 * Function that checks if input field of the name is valid or not.
 * @param {HTMLElement} nameField - HTML input element
 * @returns boolean
 */
function checkNameInput(nameField) {
    var nameInput = nameField.value;
    if (nameInput != undefined && nameInput != "") {
        return true;
    }
    else {
        console.log('Not a valid name!');
        nameField.classList.remove('name-input');
        nameField.classList.add('error-input');
        nameField.setAttribute('placeholder', 'Type a valid name');
    }
    return false;
}
/**
 * Function that checks if input field of the surname is valid or not.
 * @param {HTMLElement} surnameField - HTML input element
 * @returns boolean
 */
function checkSurnameInput(surnameField) {
    var surnameInput = surnameField.value;
    if (surnameInput != undefined && surnameInput != "") {
        return true;
    }
    else {
        console.log('Not a valid surname!');
        surnameField.classList.remove('surname-input');
        surnameField.classList.add('error-input');
        surnameField.setAttribute('placeholder', 'Type a valid surname');
    }
    return false;
}
/**
 * Function that checks if the elements have previously setted the 'error-input' class, indicating that the user has wrongly typed the value.
 * If the element has the class, the function removes it, otherwise it doesn't do nothing.
 * @param {HTMLElement} nameField - HTML input element of the name
 * @param {HTMLElement} surnameField - HTML input element of the surname
 * @param {HTMLElement} usernameField - HTML input element of the username
 * @param {HTMLElement} passwordField - HTML input element of the password
 */
function checkInputFieldError(nameField, surnameField, usernameField, passwordField) {
    var nameInput = nameField;
    var surnameInput = surnameField;
    loginScript_1.checkInputFieldError(usernameField, passwordField);
    if (nameInput.classList.contains('error-input')) {
        nameField.classList.remove('error-input');
        nameField.classList.add('name-input');
        nameField.setAttribute('placeholder', 'Type your name');
    }
    if (surnameInput.classList.contains('error-input')) {
        surnameField.classList.remove('error-input');
        surnameField.classList.add('surname-input');
        surnameField.setAttribute('placeholder', 'Type your surname');
    }
}
