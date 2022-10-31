class PhotographerPage extends App{
    constructor( dataElement){
        super(dataElement)
        this.page = 'photographer'
        this.id = (new URL(document.location)).searchParams.get('id')
        this.cache = []
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
        const sectionMedia = document.createElement('section')
        sectionMedia.setAttribute('class', 'section-media')
        document.querySelector('#main').appendChild(sectionMedia)
        const mediaId = this.photographers.filter(photo => photo.photographerId == this.id)
        
        
        this.whichSort(mediaId, 'date')
        
        mediaId.forEach(media => {
            const mediaModel = new MediaFactory(media)
            const template = mediaModel.createTemplateMedia();
            this.cache.push(template)
            sectionMedia.appendChild(template)
        })
        this.likesIncrementation()

    }

    whichSort(datas, sortType){
        if(sortType == 'date'){
            console.log('date')
            this.sortDate(datas)
            return datas
        } else if(sortType == 'title'){
            console.log('title')
            this.sortTitle(datas)
        } else {
            console.log('famous')
            this.sortFamous(datas)
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

    async displayMedia(){
        await this.fetchData()
        this.displayDataMedia()
    }
}

const photographerHeader = new PhotographerPage('photographers')
photographerHeader.displayHeader()

const medias = new PhotographerPage('media')
medias.displayMedia()

