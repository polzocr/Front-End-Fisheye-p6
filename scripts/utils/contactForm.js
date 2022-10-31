function displayModal() {
    const body = document.querySelector('body')
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    body.style.overflow = 'hidden';

}

function closeModal() {
    const body = document.querySelector('body')
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    body.style.overflow = 'initial';
}

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const message = document.getElementById('message');

const regexNames =  /^[a-zA-Zàáâäãåąčćęèéêëėįìíîïłńòóôöõùúûüųūÿýżźñç,.'-]+$/u;
const regexEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function test(regex, value){
  if (regex.test(value.value)){
    return true
  } else {
    return false
  }
}

//le champ n'est pas vide
function notEmpty(value){
  if (value.value.trim() !== ''){
    return true;
  } else{
    return false;
  }
}

function validationInput(element, regex){
    if(notEmpty(element) && regex.test(element.value.trim())){
        return true
    } else {
        createError(element)
        return false
    }
}

function validationMessage(element){
    if(notEmpty(element)){
        return true
    } else {
        createError(element)
        return false
    }
}

function createError(element){
   const error = document.querySelector(`.${element.name}-error`)
   error.style.display = 'contents'
}

function removeError(element){
     
    element.addEventListener('focus', function(){
        document.querySelector(`.${element.name}-error`).style.display = 'none'
    })
}

function removeValueModal(){
    const inputs = document.querySelectorAll('input')
    const textarea = document.getElementById('message')
    inputs.forEach(input => input.value = '')
    textarea.value = ''
}

removeError(firstName)
removeError(lastName)
removeError(email)
removeError(message)


function sendData(){
     let validation = true
    if(!validationInput(firstName, regexNames, validation )){
        validation = false;
    }
    if(!validationInput(lastName, regexNames, validation)){
        validation = false;
    }
    if(!validationInput(email, regexEmail,validation)){
        validation = false;
    }
    if(!validationMessage(message)){
        validation = false;
    }
    if(validation){
        console.log('Message envoyé avec succès');
        console.log("Prénom: " + firstName.value);
        console.log("Nom: " + lastName.value);
        console.log("Email: " + email.value);
        console.log("Message: " + message.value);
        removeValueModal();
        closeModal();
        return false
    } else {
        return false
    }
}