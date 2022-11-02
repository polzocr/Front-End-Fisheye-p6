class Lightbox{
    constructor(listMedias){
        this.currentElement = ''
        this.listMedias = listMedias
        this.manageEvents()
    }

    showModal(id){
        this.currentElement = this.listMedias.find(media => media.id == id);
        this.display()
        
    }

    display(){
        const body = document.querySelector('body')
        document.querySelector('.lightbox').classList.add("show")
        document.querySelector('.content-picture').src = 
            `assets/images/${this.currentElement.photographerId}/${this.currentElement.image}`;
        document.querySelector('.content-title').textContent = this.currentElement.title;
        body.style.overflow = 'hidden';
    }

    next(){
        const index = this.listMedias.findIndex(media => media.id == this.currentElement.id)
        if(index == this.listMedias.length -1){
            this.currentElement = this.listMedias[0]
        } else {
            this.currentElement = this.listMedias[index + 1]
        }
        this.display()
    }

    previous(){
        const index = this.listMedias.findIndex(media => media.id == this.currentElement.id)
        if(index == 0){
            this.currentElement = this.listMedias[this.listMedias.length - 1]
        } else {
            this.currentElement = this.listMedias[index - 1]
        }
        this.display()
    }

    close(){
        const body = document.querySelector('body')
        document.querySelector('.lightbox').classList.remove("show")
        body.style.overflow = 'initial';
    }

    manageEvents(){
        document.querySelector(".content-button.next").addEventListener('click', () => {
            this.next();
        })
        document.querySelector(".content-button.previous").addEventListener('click', () => {
            this.previous();
        })
        document.querySelector(".content-button.close").addEventListener('click', () => {
            this.close();
        })
    }



}


