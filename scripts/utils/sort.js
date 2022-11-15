//c'est ici que l'on gere le menu de tri

const dropdown = document.querySelector(".dropdown")
const date = document.getElementById('date')
const famous = document.getElementById('famous')
const title = document.getElementById('title')
const popup = document.getElementById('text')
const listbox = document.querySelector('.dropdown-options')


//si on clique sur le bouton, le menu déroulant s'affiche
popup.onclick = function() {
    addBorder()
    dropdown.classList.toggle("active")
    popup.ariaExpanded = true
}


/*On a ici trois evenement, selon sur quel bouton on appuie : 
date, popularité ou titre
*/

date.addEventListener('click', function(){
    changeText('Date')
    addBorder()
    popup.ariaExpanded = false
    dropdown.classList.remove('active')
    const dateMedia = new PhotographerPage('media') //on appel nos datas media
    dateMedia.displayMedia('date') //et on les affiche trier par date
})
famous.addEventListener('click', function(){
    changeText('Popularité')
    addBorder()
    popup.ariaExpanded = false
    dropdown.classList.remove('active')
    const famousMedia = new PhotographerPage('media')
    famousMedia.displayMedia('famous') //et on les affiche trier par popularité
})
title.addEventListener('click', function(){
    changeText('Titre')
    addBorder()
    popup.ariaExpanded = false
    dropdown.classList.remove('active')
    const titleMedia = new PhotographerPage('media')
    titleMedia.displayMedia('title') //et on les affiche trier par titre
})

//on change ici les elements du menu déroulant
function changeText(value){
  let text = document.querySelector('#text span')
  text.textContent = value;
  
  if(text.textContent == 'Date'){
    date.classList.add('undisplayed')
    famous.classList.remove('undisplayed')
    title.classList.remove('undisplayed')
  } else if(text.textContent == 'Popularité'){
    famous.classList.add('undisplayed')
    date.classList.remove('undisplayed')
    title.classList.remove('undisplayed')
  } else if(text.textContent == 'Titre'){
    title.classList.add('undisplayed')
    date.classList.remove('undisplayed')
    famous.classList.remove('undisplayed')
  }
}

//on ajout des bordures aux bons elements pour séparer les deux elements du menu
function addBorder(){
    let value = document.querySelector('#text span').textContent
    const dateSpan = document.querySelector('#date span')
    const famousSpan = document.querySelector('#famous span')
    if(value == 'Popularité' || value == 'Titre'){
        dateSpan.classList.add('bordered')
        famousSpan.classList.remove('bordered')
    } else {
        famousSpan.classList.add('bordered')
        dateSpan.classList.remove('bordered')
    }
}
  

