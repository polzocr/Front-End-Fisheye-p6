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
        const mediaId = this.photographers.filter(photo => photo.photographerId == this.id)
        mediaId.forEach(media => {
            const mediaModel = new MediaFactory(media)
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

// const params = (new URL(document.location)).searchParams
// const id = params.get('id')
// console.log(id)
