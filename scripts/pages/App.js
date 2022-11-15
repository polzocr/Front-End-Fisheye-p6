/*  class générique des pages
    elle gère l'api factory selon qu'on lui passe en
    dataElement les medias ou les photographes
*/
  
  class App{
    constructor(dataElement){
        this.api = new ApiFactory('../data/photographers.json', dataElement) //data appelées ici
        this.photographers = []   //stockés ici pour les photographes
        this.dataElement = dataElement
    }


    async fetchData(){
        const dataApi = await this.api.get()
        this.photographers = dataApi
    }
    
         
}

    



