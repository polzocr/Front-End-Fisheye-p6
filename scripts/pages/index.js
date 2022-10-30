class Index extends App{
    constructor(dataElement){
        super(dataElement)
        this.page = 'accueil'
    }

    async displayDataAccueil(){
        this.photographers.forEach((photographer) => {
        const photographerModel = new PhotographerFactory(photographer, this.page);
        photographerModel.createTemplate();
        })
    } 

   async main(){
    await this.fetchData()
    this.displayDataAccueil()
   }

}

const index = new Index('photographers')
index.main()








