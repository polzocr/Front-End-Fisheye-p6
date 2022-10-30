class PhotographerPage extends App{
    constructor(page, dataElement){
        super(dataElement)
        this.page = page
        this.element = document.querySelector(".photograph-header")
    }
}

// const photographerPage = new PhotographerPage('photographer', 'photographers')
// photographerPage.main()


const params = (new URL(document.location)).searchParams
const id = params.get('id')
console.log(id)
