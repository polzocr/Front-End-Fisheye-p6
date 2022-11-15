//creation du template pour chaque video
class Video {
    constructor(data){
        data && Object.assign(this, data)
        this.main = document.querySelector('main')
        this.newLike = data.likes
    }
    //on recupère le chemin des vidéos
    get picture(){
        return `assets/videos/${this.photographerId}/${this.video}`;
    }

    createTemplateMedia(){
        const article = document.createElement('article');
        article.classList.add('media');

        //creation de la card qui ouvrira la lightbox
        const link = document.createElement('a')
        link.setAttribute('href', '#')
        link.setAttribute('class', 'media-video')
        link.setAttribute('role', 'button')
        link.setAttribute('aria-label', 'ouverture gallerie avec ' + this.title)

        //creation de l'element vidéo
        const video = document.createElement( 'video');
        video.autoplay = false;
        video.muted = false;
        video.setAttribute("src", this.picture)
        link.appendChild(video);

        article.appendChild(link)

        
        //infos concernant la vidéo
        const footer = document.createElement('footer')

        const pFooter = document.createElement('p')
        pFooter.textContent = this.title;
        footer.appendChild(pFooter)

        //creation des likes pour les vidéos
        const divFooter = document.createElement('div')
        divFooter.setAttribute('class', 'media-div')
        //nombre de likes
        const pIcone = document.createElement('p')
        pIcone.textContent = this.likes
        divFooter.appendChild(pIcone)

        //ajout de l'icone des likes avec les evenements au clic et au clavier 
        const icone = document.createElement('i')
        icone.setAttribute('class', 'far fa-heart')
        icone.setAttribute('role', 'button')
        icone.setAttribute('aria-label', 'aimer le media')
        icone.setAttribute('tabindex', '0') //nous voulons pourvoir naviguer au clavier sur l'icone
        const that = this; //nous avons besoin ici de l'instance de la classe qui ne sera plus disponible dans levent
        //incrementation des likes quand on clique
        icone.addEventListener('click', function(){
            that.totalLikes(this.previousElementSibling, icone)
        })
        //incrementation des likes quand on appuie sur entrée
        icone.addEventListener('keydown', function(e){
            if(e.key == 'Enter'){
                that.totalLikes(this.previousElementSibling, icone)
            }
        })
        divFooter.appendChild(icone)

        
        //creation de larticle qu'on retourne a photographerPage

        footer.appendChild(divFooter)

        article.appendChild(footer)

        return article


    }

    //ajustement des likes de chaque article pareil que pour les photos (Photo.js ligne 75)
    totalLikes(element, icone){
        const pTotalLikes = document.querySelector('.number-likes p')
        if(this.newLike == this.likes){
            this.newLike += 1;
            element.textContent = this.newLike
            pTotalLikes.textContent = parseInt(pTotalLikes.textContent) + 1
            icone.classList.add('liked')
        } else {
            this.newLike -= 1
            element.textContent = this.newLike
            pTotalLikes.textContent = parseInt(pTotalLikes.textContent) - 1
            icone.classList.remove('liked')
        }
    }
    
}