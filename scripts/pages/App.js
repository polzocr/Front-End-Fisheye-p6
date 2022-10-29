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
        photographers.forEach((photographer) => {
            
            const photographerModel = new PhotographerFactory(photographer, page);
            const userCardDOM = photographerModel.createTemplate();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async main(){
        await this.fetchData()
        this.displayData(this.photographers, this.page)
    }
}


