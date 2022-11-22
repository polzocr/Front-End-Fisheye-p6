//class permettant de gérer la lightbox

class Lightbox{
    constructor(listMedias){
        this.currentElement = ''
        this.listMedias = listMedias
        this.manageEvents() //on place les evenements dans le constructeur
    }


    //recupération de l'id du media
    //current element devient ce media
    //on appelle la fonction d'affichage
    showModal(id){
        this.currentElement = this.listMedias.find(media => media.id === id);
        this.display()
        
    }
    
    //fonction d'affichage
    display(){
        const body = document.querySelector('body')
        const image = document.querySelector('.content-picture')
        const video = document.querySelector('.content-video')
        document.querySelector('.lightbox').classList.add('show') //affichage de la lightbox
        document.querySelector('.lightbox').setAttribute('aria-hidden', 'false')
        if(this.currentElement.image !== undefined){ //si c'est une image
            image.src =`assets/images/${this.currentElement.photographerId}/${this.currentElement.image}`;
            image.classList.add('show-media') //on affiche l'image
            video.classList.remove('show-media') //on cache la video
        }else { //si c'est une vidéo
            video.src =`assets/videos/${this.currentElement.photographerId}/${this.currentElement.video}`
            image.classList.remove('show-media') //cache l'image
            video.classList.add('show-media')   //affiche la vidéo
        }
        document.querySelector('.content-title').textContent = this.currentElement.title;
        body.classList.add('hidden') //on evite de pouvoir interagir avec le reste de la page
        body.setAttribute('aria-hidden', 'true')
        document.addEventListener('keyup', this.eventKey) //on ajout la fonction qui gere la navigation au clavier
        video? video.focus() : image.focus() // on place le focus sur l'element
    }

    //fonction qui permet de passer au media suivant
    next(){
        const index = this.listMedias.findIndex(media => media.id === this.currentElement.id)
        if(index === this.listMedias.length -1){ //si on est a la fin
            this.currentElement = this.listMedias[0] //retour au debut
        } else {
            this.currentElement = this.listMedias[index + 1]
        }
        this.display() //on l'affiche
    }
    //fonction qui permet de passer au media precedent
    previous(){
        const index = this.listMedias.findIndex(media => media.id === this.currentElement.id)
        if(index === 0){
            this.currentElement = this.listMedias[this.listMedias.length - 1]
        } else {
            this.currentElement = this.listMedias[index - 1]
        }
        this.display()
    }

    //fermeture de la lightbox
    close(){
        const body = document.querySelector('body')
        document.querySelector('.lightbox').classList.remove('show')
        body.classList.remove('hidden')
        body.setAttribute('aria-hidden', 'false')
        document.removeEventListener('keyup', this.eventKey) // on supprime les evenements au clavier
    }




    //liste des elements claviers et leur fonction associée
    eventKey = (e) => {
        const mediaVideo = document.querySelector('.content-video')
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
            case 'p': //on aimerait pouvoir lancer la vidéo des lappuie d'une seule touche
                if(mediaVideo){
                    if(mediaVideo.currentTime === 0 || mediaVideo.paused || mediaVideo.ended){
                        mediaVideo.play()
                    } else if(mediaVideo.currentTime > 0 && !mediaVideo.paused && !mediaVideo.ended) {
                        mediaVideo.pause()
                    }
                }
                break;
            default:
                break;
        }
    }

    //nos evenements next previous et close avec leurs bouton associé
    manageEvents(){
        document.querySelector('.content-button.next').addEventListener('click', () => {
            this.next();
        })
        document.querySelector('.content-button.previous').addEventListener('click', () => {
            this.previous();
        })
        document.querySelector('.content-button.close').addEventListener('click', () => {
            this.close();
        })
    }



}


