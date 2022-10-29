class Index extends App{
    constructor(page, dataElement){
        super(dataElement)
        this.page = page
        this.element = document.querySelector(".photographer_section")
    }

}

const index = new Index('accueil', 'photographers')
index.main()








