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
        document.querySelector('.lightbox').setAttribute('aria-hidden', 'false')
        if(this.currentElement.image !== undefined){
            image.src =`assets/images/${this.currentElement.photographerId}/${this.currentElement.image}`;
            image.classList.add('show-media')
            video.classList.remove('show-media')
        }else {
            video.src =`assets/videos/${this.currentElement.photographerId}/${this.currentElement.video}`
                image.classList.remove('show-media')
                video.classList.add('show-media')
        }
        document.querySelector('.content-title').textContent = this.currentElement.title;
        body.classList.add('hidden')
        body.setAttribute('aria-hidden', 'true')
        document.addEventListener('keyup', this.eventKey)
        video? video.focus() : image.focus()
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
        body.classList.remove('hidden')
        body.setAttribute('aria-hidden', 'false')
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
            case 'p':
                const video = document.querySelector('.content-video')
                if(video){
                    if(video.currentTime == 0 || video.paused || video.ended){
                        video.play()
                    } else if(video.currentTime > 0 && !video.paused && !video.ended) {
                        video.pause()
                    }
                }
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


