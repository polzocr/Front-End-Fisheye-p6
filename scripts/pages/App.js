  class App{
    constructor(){
        this.api = new Api('../data/photographers.json')
        this.photographers = []
    }


    async fetchData(){
        const dataApi = await this.api.get()
        this.photographers = dataApi
        console.log(this.photographers)
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


