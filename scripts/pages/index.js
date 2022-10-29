class Index extends App{
    constructor(page){
        super()
        this.page = page
        this.element = document.querySelector(".photographer_section")
    }
}

const index = new Index('accueil')
index.main()








