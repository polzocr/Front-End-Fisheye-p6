class PhotographerPage extends App{
    constructor( dataElement){
        super(dataElement)
        this.page = 'photographer'
    }

    async displayDataPhotograph(){
        const id = (new URL(document.location)).searchParams.get('id')
        let photograph = {}
        this.photographers.forEach(photographer => {
            if(photographer.id == id){
                photograph = photographer
            }
        })
        const photographerModel = new PhotographerFactory(photograph, this.page);
        photographerModel.createTemplateHeader()
    }   

    async displayHeader(){
        await this.fetchData()
        this.displayDataPhotograph()
    }
}

const photographerHeader = new PhotographerPage('photographers')
photographerHeader.displayHeader()


const params = (new URL(document.location)).searchParams
const id = params.get('id')
console.log(id)
