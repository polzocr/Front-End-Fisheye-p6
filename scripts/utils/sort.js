let dropdown = document.querySelector(".dropdown")
dropdown.onclick = function() {
    addBorder()
    dropdown.classList.toggle("active")

}

const date = document.getElementById('date')
const famous = document.getElementById('famous')
const title = document.getElementById('title')
date.style.display = 'none'

date.addEventListener('click', function(){
    changeText('Date')
    addBorder()
    const dateMedia = new PhotographerPage('media')
    dateMedia.displayMedia('date')
})
famous.addEventListener('click', function(){
    changeText('Popularité')
    addBorder()
    const famousMedia = new PhotographerPage('media')
    famousMedia.displayMedia('famous')
})
title.addEventListener('click', function(){
    changeText('Titre')
    addBorder()
    const titleMedia = new PhotographerPage('media')
    titleMedia.displayMedia('title')
})
  
    function changeText(value){
    let text = document.getElementById('text')
    text.value = value;
    
    if(text.value == 'Date'){
      date.style.display = 'none'
      famous.style.display  = 'block'
      title.style.display  = 'block'
    } else if(text.value == 'Popularité'){
      famous.style.display = 'none'
      date.style.display  = 'block'
      title.style.display  = 'block'
    } else if(text.value == 'Titre'){
      title.style.display  = 'none'
      date.style.display  = 'block'
      famous.style.display = 'block'
    }
  }

function addBorder(){
    let value = document.getElementById('text').value
    const dateSpan = document.querySelector('#date span')
    const famousSpan = document.querySelector('#famous span')
    if(value == 'Popularité' || value == 'Titre'){
        dateSpan.style.borderBottom = '2px solid white'
        dateSpan.style.borderTop = '2px solid white'
        famousSpan.style.border = 'none'
    } else {
        famousSpan.style.borderBottom = '2px solid white'
        famousSpan.style.borderTop = '2px solid white' 
        dateSpan.style.border = 'none'
    }
}
  

