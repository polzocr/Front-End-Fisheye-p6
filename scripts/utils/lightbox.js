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
        const image = document.querySelector('.content-picture')
        const video = document.querySelector('.content-video')
        document.querySelector('.lightbox').classList.add("show")
        if(this.currentElement.image !== undefined){
            image.src =`assets/images/${this.currentElement.photographerId}/${this.currentElement.image}`;
            image.style.display = 'initial'
            video.style.display = 'contents'
        }else {
            video.src =`assets/videos/${this.currentElement.photographerId}/${this.currentElement.video}`
                image.style.display = 'none'
                video.style.display = 'block'
        }
        document.querySelector('.content-title').textContent = this.currentElement.title;
        body.style.overflow = 'hidden';
        document.addEventListener('keyup', this.eventKey)
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
        document.removeEventListener('keyup', this.eventKey)
    }

    eventKey = (e) => {
        switch(e.key){
            case 'ArrowRight': 
                this.next();
                break;
            case 'ArrowLeft':
                this.previous()
                break;
            case 'Escape':
                this.close()
                break;
            default:
                break;
        }
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


