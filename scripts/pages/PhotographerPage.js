class PhotographerPage extends App{
    constructor( dataElement){
        super(dataElement)
        this.page = 'photographer'
        this.id = (new URL(document.location)).searchParams.get('id')
    }

    async displayDataPhotograph(){
        let photograph = {}
        this.photographers.forEach(photographer => {
            if(photographer.id == this.id){
                photograph = photographer
            }
        })
        const photographerModel = new PhotographerFactory(photograph, this.page);
        photographerModel.createTemplateHeader()
    } 
    
    async displayDataMedia(){
        const sectionMedia = document.createElement('section')
        sectionMedia.setAttribute('class', 'section-media')
        document.querySelector('#main').appendChild(sectionMedia)
        const mediaId = this.photographers.filter(photo => photo.photographerId == this.id)
        mediaId.forEach(media => {
            const mediaModel = new MediaFactory(media)
            console.log(mediaModel)
            const template = mediaModel.createTemplateMedia();
            sectionMedia.appendChild(template)
        })
        this.likesIncrementation()

    }

    likesIncrementation(){
        const allLikes = document.querySelectorAll('.media-div p');
        const pLikes = document.querySelector('.number-likes p')
        let likes = 0;
        allLikes.forEach(like => likes += parseInt(like.textContent))
        pLikes.textContent = likes  
    }

    async displayHeader(){
        await this.fetchData()
        this.displayDataPhotograph()
    }

    async displayMedia(){
        await this.fetchData()
        this.displayDataMedia()
    }
}

const photographerHeader = new PhotographerPage('photographers')
photographerHeader.displayHeader()

const medias = new PhotographerPage('media')
medias.displayMedia()

