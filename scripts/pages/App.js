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
    test1(){
        console.log('lol')
    }
    
         
}

    



