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
            console.log(media)
            const mediaModel = new MediaFactory(media)
            const template = mediaModel.createTemplateMedia();
            sectionMedia.appendChild(template)
        })
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

