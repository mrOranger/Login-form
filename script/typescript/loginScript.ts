/**
 * Constant variables defining the HTML input elements
 */
const usernameField : HTMLElement = document.getElementById('username-field');
const passwordField : HTMLElement = document.getElementById('password-field');
console.log(usernameField, passwordField);

/**
 * Validate function that returns a boolean value to allow the form to submit the request.
 * @returns boolean
 */
function validate(): boolean {
    checkInputFieldError(usernameField, passwordField);
    return checkUsernameInput(usernameField) && checkPasswordInput(passwordField);
}

/**
 * Function that checks if input field of the username is valid or not.
 * @param {HTMLElement} usernameField - HTML input element
 * @returns boolean
 */
export function checkUsernameInput(usernameField: HTMLElement) : boolean {
    let usernameInput = (<HTMLInputElement>usernameField).value;
    if(usernameInput != undefined && usernameInput != ""){
        return true;
    }else{
        (<HTMLInputElement>usernameField).classList.remove('username-input');
        (<HTMLInputElement>usernameField).classList.add('error-input');
        (<HTMLInputElement>usernameField).setAttribute('placeholder', 'Type a valid username');
    }
    return false;
}

/**
 * Function that checks if input field of the password is valid or not.
 * @param {HTMLElement} passwordField - HTML input element
 * @returns boolean
 */
export function checkPasswordInput(passwordField: HTMLElement) : boolean {
    let passwordInput = (<HTMLInputElement>passwordField).value;
    if(passwordInput != undefined && passwordInput != ""){
        return true;
    }else{
        (<HTMLInputElement>passwordField).classList.remove('password-input');
        (<HTMLInputElement>passwordField).classList.add('error-input');
        (<HTMLInputElement>passwordField).setAttribute('placeholder', 'Type a valid password');
    }
    return false;
}

/**
 * Function that checks if the elements have previously setted the 'error-input' class, indicating that the user has wrongly typed the value.
 * If the element has the class, the function removes it, otherwise it doesn't do nothing.
 * @param {HTMLElement} usernameField - HTML input element of the username
 * @param {HTMLElement} passwordField - HTML input element of the password
 */
export function checkInputFieldError(usernameField : HTMLElement, passwordField : HTMLElement) : void {
    let usernameInput = (<HTMLInputElement>usernameField);
    let passwordInput = (<HTMLInputElement>passwordField);

    if(usernameInput.classList.contains('error-input')){
        usernameField.classList.remove('error-input');
        usernameField.classList.add('username-input');
        usernameField.setAttribute('placeholder', 'Type your username');
    }

    if(passwordInput.classList.contains('error-input')){
        passwordField.classList.remove('error-input');
        passwordField.classList.add('password-input');
        passwordField.setAttribute('placeholder', 'Type your password');
    }
}
