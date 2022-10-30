class Index extends App{
    constructor(page, dataElement){
        super(dataElement)
        this.page = 'accueil'
        this.element = document.querySelector(".photographer_section")
    }

    async displayDataAccueil(){
        const photographersSection = this.element;
        this.photographers.forEach((photographer) => {
        
        const photographerModel = new PhotographerFactory(photographer, this.page);
        const userCardDOM = photographerModel.createTemplate();
        photographersSection.appendChild(userCardDOM);
        })
    } 

   async main(){
    await this.fetchData()
    this.displayDataAccueil()
   }

    }

const index = new Index('accueil', 'photographers')
index.main()








