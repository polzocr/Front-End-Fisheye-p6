//creation du template pour chaque photo
class Photo {
    constructor(data){
        data && Object.assign(this, data)
        this.newLike = data.likes
    }

    //recuperation du chemin de l'image
    get picture(){
        return `assets/images/${this.photographerId}/${this.image}`;
    }

    createTemplateMedia(){
        const article = document.createElement('article');
        article.classList.add('media');

        //creation dun lien par card
        const link = document.createElement('a')
        link.setAttribute('href', '#')
        link.setAttribute('role', 'button')
        link.setAttribute('aria-label', 'ouverture gallerie avec ' + this.title)
        //creation image par card
        const img = document.createElement( 'img');
        img.setAttribute("src", this.picture)
        img.setAttribute("alt", this.title)
        link.appendChild(img);
        //ajoue dans larticle
        article.appendChild(link)

        
        //footer de larticle contenant des infos
        const footer = document.createElement('footer')

        const pFooter = document.createElement('p')
        pFooter.textContent = this.title;
        footer.appendChild(pFooter)


        //infos sur les likes de larticle
        const divFooter = document.createElement('div')
        divFooter.setAttribute('class', 'media-div')
        //nombre de like
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

        //creation de larticle qu'on retourne a photographerPage
        divFooter.appendChild(icone)

        footer.appendChild(divFooter)

        article.appendChild(footer)

        return article
    }

    //ajustement des likes de chaque article
    totalLikes(element, icone){
        const pTotalLikes = document.querySelector('.number-likes p')
        if(this.newLike == this.likes){ //si nb like est egal au nombre de like recupéré par lapi
            this.newLike += 1;          //on ajoute un like
            element.textContent = this.newLike  //changement du html de larticle
            pTotalLikes.textContent = parseInt(pTotalLikes.textContent) + 1 //changement de l'html des likes totaux
            icone.classList.add('liked')
        } else {    // pareil mais on enlève un like
            this.newLike -= 1
            element.textContent = this.newLike
            pTotalLikes.textContent = parseInt(pTotalLikes.textContent) - 1
            icone.classList.remove('liked')
        }
    }
}