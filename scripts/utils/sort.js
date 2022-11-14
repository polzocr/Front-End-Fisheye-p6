const dropdown = document.querySelector(".dropdown")
const date = document.getElementById('date')
const famous = document.getElementById('famous')
const title = document.getElementById('title')
const popup = document.getElementById('text')
const listbox = document.querySelector('.dropdown-options')


popup.onclick = function() {
    addBorder()
    dropdown.classList.toggle("active")
    popup.ariaExpanded = true
    listbox.ariaSelected = true
}



date.addEventListener('click', function(){
    changeText('Date')
    addBorder()
    popup.ariaExpanded = false
    listbox.ariaSelected = false
    dropdown.classList.remove('active')
    const dateMedia = new PhotographerPage('media')
    dateMedia.displayMedia('date')
})
famous.addEventListener('click', function(){
    changeText('Popularité')
    addBorder()
    popup.ariaExpanded = false
    listbox.ariaSelected = false
    dropdown.classList.remove('active')
    const famousMedia = new PhotographerPage('media')
    famousMedia.displayMedia('famous')
})
title.addEventListener('click', function(){
    changeText('Titre')
    addBorder()
    popup.ariaExpanded = false
    listbox.ariaSelected = false
    dropdown.classList.remove('active')
    const titleMedia = new PhotographerPage('media')
    titleMedia.displayMedia('title')
})
  
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
  

