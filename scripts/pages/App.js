  class App{
    constructor(dataElement){
        this.api = new ApiFactory('../data/photographers.json', dataElement)
        this.photographers = []
        this.dataElement = dataElement
    }


    async fetchData(){
        const dataApi = await this.api.get()
        this.photographers = dataApi
    }

    async displayData(photographers, page){
        const photographersSection = this.element;
        if(page === 'accueil'){
            photographers.forEach((photographer) => {
            
            const photographerModel = new PhotographerFactory(photographer, page);
            const userCardDOM = photographerModel.createTemplate();
            photographersSection.appendChild(userCardDOM);
            })
        } else if(page === 'photographer'){
            const params = (new URL(document.location)).searchParams
            const id = params.get('id')
            let photograph = {}
            photographers.forEach(photographer => {
                if(photographer.id == id){
                    photograph = photographer
                }
            })
            const photographerModel = new PhotographerFactory(photograph, page);
            const divUserCardDOM = photographerModel.createTemplate().bigDiv.querySelector('div');
            const imgUserCardDOM = photographerModel.createTemplate().bigDiv.querySelector('img');
            const priceUserCardDOM = photographerModel.createTemplate().aside;
            photographersSection.insertBefore(divUserCardDOM, photographersSection.firstChild);
            photographersSection.appendChild(imgUserCardDOM);
            document.querySelector('main').appendChild(priceUserCardDOM)
        }
        
    }

    async main(){
        await this.fetchData()
        this.displayData(this.photographers, this.page)
    }
}


