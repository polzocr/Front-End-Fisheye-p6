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
    
    async displayDataMedia(sort){
        const sectionExists = document.querySelector('.section-media')
        if(sectionExists){
            sectionExists.remove()
        }
        const sectionMedia = document.createElement('section')
        sectionMedia.setAttribute('class', 'section-media')
        document.querySelector('#main').appendChild(sectionMedia)
        const mediaId = this.photographers.filter(photo => photo.photographerId == this.id)
        
        this.whichSort(mediaId, sort)
        
        let lightbox = new Lightbox(mediaId)

        mediaId.forEach(media => {
            const mediaModel = new MediaFactory(media)
            const template = mediaModel.createTemplateMedia();
            sectionMedia.appendChild(template)
            this.setLightbox(template, mediaModel.id, lightbox)

        })
        this.likesIncrementation()

    }

    setLightbox(template, id, lightbox){
        template.querySelector('a').addEventListener('click', function(e){
            console.log('ici')
            lightbox.showModal(id)
        })
    }

    whichSort(datas, sortType){
        if(sortType == 'date'){
            return this.sortDate(datas)
        } else if(sortType == 'title'){
            return this.sortTitle(datas)
        } else {
            return this.sortFamous(datas)
        }
    }

    sortFamous(datas){
        datas.sort((a, b) => b.likes - a.likes )
    }

    sortTitle(datas){
        datas.sort((a, b) => a.title.localeCompare(b.title))
    }
    
    sortDate(datas){
        datas.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
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

    async displayMedia(sort){
        await this.fetchData()
        this.displayDataMedia(sort)
    }
}

const photographerHeader = new PhotographerPage('photographers')
photographerHeader.displayHeader()

const medias = new PhotographerPage('media')
medias.displayMedia('date')

