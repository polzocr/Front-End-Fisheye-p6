//creation de la modale de contact

const arrowSection = document.querySelector('#sort')
const body = document.querySelector('body')
const modal = document.querySelector(".contact_modal");
const elements = ['button', 'input', 'textarea'];
const focusElements = modal.querySelectorAll(...elements)

//affichage de la modale
function displayModal() {
    arrowSection.style.display = 'none'
	  modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false')
    body.classList.add('hidden');
    body.setAttribute('aria-hidden', 'true')
}

//fermeture de la modale
function closeModal() {
    modal.classList.remove('open')
    arrowSection.style.display = 'initial'
    body.classList.remove('hidden')
    body.setAttribute('aria-hidden', 'false')
    modal.setAttribute('aria-hidden', 'true')
}

//ajoue de l'évènement de fermeture sur la touche echappe
//navigation au clavier dans cette modale sans pouvoir en sortir

document.addEventListener('keydown', (e) => {
  const tab = e.key === 'Tab';
  const escape = e.key === 'Escape';
  if (!escape && !tab){
    return
  }
  if (escape) { 
    closeModal();
    e.preventDefault()
  }
  if (e.shiftKey) { 
    if (document.activeElement === focusElements[0]) { //si on arrive au premier element et qu'on revient en arriere
      focusElements[focusElements.length-1].focus();   //on met le focus sur le dernier element
      e.preventDefault();
    }
  } else if (document.activeElement === focusElements[focusElements.length-1]) {  //si on arrive au dernier element et qu'on continue
    focusElements[0].focus();                                                     //on met le focus sur le premier element
    e.preventDefault();
  }
});

//creation des paramètres de validation du formulaire
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const message = document.getElementById('message');

const regexNames =  /^[a-zA-Zàáâäãåąčćęèéêëėįìíîïłńòóôöõùúûüųūÿýżźñç,.'-]+$/u;
const regexEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//test du regex
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

//l'input répond aux demandes ?
function validationInput(element, regex){
    if(notEmpty(element) && regex.test(element.value.trim())){
        return true
    } else {
        createError(element) //sinon création d'une erreur
        return false
    }
}

//le message n'est pas vide
function validationMessage(element){
    if(notEmpty(element)){
        return true
    } else {
        createError(element) //sinon création d'une erreur
        return false
    }
}

//creation d'une erreur personnalisée
function createError(element){
   const error = document.querySelector(`.${element.name}-error`)
   error.classList.add('show-error')
}

//suppression du message d'erreur si on veut réécrire quelque chose
function removeError(element){
  element.addEventListener('focus', function(){
      document.querySelector(`.${element.name}-error`).classList.remove('show-error')
  })
}

//réinitialisation du formulaire s'il est validé
function removeValueModal(){
    const inputs = document.querySelectorAll('input')
    const textarea = document.getElementById('message')
    inputs.forEach(input => input.value = '')
    textarea.value = ''
}

//suppresion des messages d'erreurs au focus
removeError(firstName)
removeError(lastName)
removeError(email)
removeError(message)


//appelée lors du submit, vérifie tous les champs de formulaires
//console.log() les résultats
//ferme la modale
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