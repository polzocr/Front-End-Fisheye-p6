class PhotographerPage extends App{
    constructor(page){
        super()
        this.page = page
        this.element = document.querySelector(".photograph-header")
    }
}

const photographerPage = new PhotographerPage('photographer')
photographerPage.main()
