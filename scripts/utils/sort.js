let dropdown = document.querySelector(".dropdown")
dropdown.onclick = function() {
    dropdown.classList.toggle("active")
}

const date = document.getElementById('date')
const famous = document.getElementById('famous')
const title = document.getElementById('title')
date.style.display = 'none'

date.addEventListener('click', function(){
    changeText('Date')
    const dateMedia = new PhotographerPage('media')
    dateMedia.displayMedia('date')
})
famous.addEventListener('click', function(){
    changeText('Popularité')
    const famousMedia = new PhotographerPage('media')
    famousMedia.displayMedia('famous')
})
title.addEventListener('click', function(){
    changeText('Titre')
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
  

