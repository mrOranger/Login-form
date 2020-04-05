import {checkPasswordInput, checkUsernameInput, checkInputFieldError as checkUsernameAndPassword} from "./loginScript";

/**
 * Constant variables defining the HTML input elements
 */
const nameField : HTMLElement = document.getElementById('name-field');
const surnameField : HTMLElement = document.getElementById('surname-field');
const usernameField : HTMLElement = document.getElementById('username-field');
const passwordField : HTMLElement = document.getElementById('password-field');

/**
 * Validate function that returns a boolean value to allow the form to submit the request.
 * @returns boolean
 */
function validate(): boolean {
    checkInputFieldError(nameField, surnameField, usernameField, passwordField);
    return checkNameInput(nameField) && checkSurnameInput(surnameField) && checkUsernameInput(usernameField) && checkPasswordInput(passwordField);
}

/**
 * Function that checks if input field of the name is valid or not.
 * @param {HTMLElement} nameField - HTML input element
 * @returns boolean
 */
function checkNameInput(nameField: HTMLElement) : boolean {
    let nameInput = (<HTMLInputElement>nameField).value;
    if(nameInput != undefined && nameInput != ""){
        return true;
    }else{
        console.log('Not a valid name!');
        (<HTMLInputElement>nameField).classList.remove('name-input');
        (<HTMLInputElement>nameField).classList.add('error-input');
        (<HTMLInputElement>nameField).setAttribute('placeholder', 'Type a valid name');
    }
    return false;
}

/**
 * Function that checks if input field of the surname is valid or not.
 * @param {HTMLElement} surnameField - HTML input element
 * @returns boolean
 */
function checkSurnameInput(surnameField: HTMLElement) : boolean {
    let surnameInput = (<HTMLInputElement>surnameField).value;
    if(surnameInput != undefined && surnameInput != ""){
        return true;
    }else{
        console.log('Not a valid surname!');
        (<HTMLInputElement>surnameField).classList.remove('surname-input');
        (<HTMLInputElement>surnameField).classList.add('error-input');
        (<HTMLInputElement>surnameField).setAttribute('placeholder', 'Type a valid surname');
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
function checkInputFieldError(nameField : HTMLElement, surnameField: HTMLElement, usernameField : HTMLElement, passwordField : HTMLElement) : void {
    let nameInput = (<HTMLInputElement>nameField);
    let surnameInput = (<HTMLInputElement>surnameField);

    checkUsernameAndPassword(usernameField, passwordField);

    if(nameInput.classList.contains('error-input')){
        nameField.classList.remove('error-input');
        nameField.classList.add('name-input');
        nameField.setAttribute('placeholder', 'Type your name');
    }

    if(surnameInput.classList.contains('error-input')){
        surnameField.classList.remove('error-input');
        surnameField.classList.add('surname-input');
        surnameField.setAttribute('placeholder', 'Type your surname');
    }
}