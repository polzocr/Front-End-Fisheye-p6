/* extension de la classe APP
   recupération des photographes
   et appel de la classe qui gere le l'affichage
*/
class Index extends App{
    constructor(dataElement){
        super(dataElement) 
        this.page = 'accueil' 
    }

    //pour chaque photographes, on appelle PhotographerFactory
    //pour savoir quelles données afficher
    async displayDataAccueil(){ 
        this.photographers.forEach((photographer) => {
            const photographerModel = new PhotographerFactory(photographer, this.page); //appel du bon template
            photographerModel.createTemplate(); //creation de l'affichage
        })
    } 

    async main(){
        await this.fetchData()
        this.displayDataAccueil()
    }

}

const index = new Index('photographers') //creation d'une instance avec appel de ses methodes
index.main()








