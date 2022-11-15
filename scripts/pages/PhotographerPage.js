/* extension de la classe APP
   recupération des données du photographes et ses médias associés
   puis appel de la classe qui gere le l'affichage
   ajout des methodes de like et sort
*/

class PhotographerPage extends App{
    constructor( dataElement){
        super(dataElement)
        this.page = 'photographer'
        this.id = (new URL(document.location)).searchParams.get('id') //recupération de l'id du photographe
    }

    //appel des données du bon photographe
    //et affichage
    async displayDataPhotograph(){
        let photograph = {}
        this.photographers.forEach(photographer => {
            if(photographer.id == this.id){ //verification de l'id
                photograph = photographer
            }
        })
        const photographerModel = new PhotographerFactory(photograph, this.page);
        photographerModel.createTemplateHeader()
    } 
    
    //appel des média selon le tri
    //affichage des templates pour chaque media
    //incrementation des fonction lightbox, like, et sort
    async displayDataMedia(sort){
        const sectionExists = document.querySelector('.section-media')
        if(sectionExists){                  //si les articles sont déja affichés
            sectionExists.remove()          //on les supprime car on les affichera avec un tri
        }
        const sectionMedia = document.createElement('section')
        sectionMedia.setAttribute('class', 'section-media')
        document.querySelector('#main').appendChild(sectionMedia)
        const mediaId = this.photographers.filter(photo => photo.photographerId == this.id) //recupération des bons medias avec id
        
        this.whichSort(mediaId, sort) //on tri nos medias selon la variable sort
        
        let lightbox = new Lightbox(mediaId) //on appel notre class lightbox avec les medias

        //pour chaque media, on appel la Media Factory
        //pour afficher un template selon que cela soit une photo ou une vidéo
        mediaId.forEach(media => {
            const mediaModel = new MediaFactory(media) //media factory
            const template = mediaModel.createTemplateMedia();
            sectionMedia.appendChild(template) //on insère l'article dans la section
            sectionMedia.setAttribute('role', 'region')
            sectionMedia.setAttribute('aria-label', 'medias')
            this.setLightbox(template, mediaModel.id, lightbox) //fonction setLighbox qui ajoute l'evenement d'affichage de la lightbox

        })
        this.likesIncrementation() //fonction de l'incerementation des likes totaux

    }

    //ouverture de la lightbox au clic d'une card
    setLightbox(template, id, lightbox){
        template.querySelector('a').addEventListener('click', function(){
            lightbox.showModal(id) //methode showmodal qui affiche a partir de l'element cliqué
        })
    }

    //quelle type de tri recherchons nous ?
    whichSort(datas, sortType){
        if(sortType === 'date'){
            return this.sortDate(datas)
        } else if(sortType === 'title'){
            return this.sortTitle(datas)
        } else {
            return this.sortFamous(datas)
        }
    }

    //tri par popularité
    sortFamous(datas){
        datas.sort((a, b) => b.likes - a.likes )
    }

    //tri par titre
    sortTitle(datas){
        datas.sort((a, b) => a.title.localeCompare(b.title))
    }
    
    //tri par date
    sortDate(datas){
        datas.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    }

    //sommes de tous les likes et ajout dans l'aside
    likesIncrementation(){
        const allLikes = document.querySelectorAll('.media-div p');
        const pLikes = document.querySelector('.number-likes p')
        let likes = 0;
        allLikes.forEach(like => likes += parseInt(like.textContent))
        pLikes.textContent = likes  
    }

    //afichage données photographe
    async displayHeader(){
        await this.fetchData()
        this.displayDataPhotograph()
    }

    //afichage médias
    async displayMedia(sort){
        await this.fetchData()
        this.displayDataMedia(sort)
    }
}

//on créé un instance pour les données du photographes et on l'affiche
const photographerHeader = new PhotographerPage('photographers')
photographerHeader.displayHeader()

//puis une autre instance pour les médias et on l'affiche
const medias = new PhotographerPage('media')
medias.displayMedia('date')

