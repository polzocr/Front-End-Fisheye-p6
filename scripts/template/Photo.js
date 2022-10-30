class Photo {
    constructor(data){
        data && Object.assign(this, data)
    }

    get picture(){
        return `assets/images/${this.photographerId}/${this.image}`;
    }

    createTemplateMedia(){
        const article = document.createElement('article');
        article.classList.add('media');

        const link = document.createElement('a')
        link.setAttribute('href', '#')

        const img = document.createElement( 'img');
        img.setAttribute("src", this.picture)
        img.setAttribute("alt", this.title)
        link.appendChild(img);

        article.appendChild(link)

        ////////////////////////////////////

        const footer = document.createElement('footer')

        const pFooter = document.createElement('p')
        pFooter.textContent = this.title;
        footer.appendChild(pFooter)

        const divFooter = document.createElement('div')
        divFooter.setAttribute('class', 'media-div')

        const pIcone = document.createElement('p')
        pIcone.textContent = this.likes
        divFooter.appendChild(pIcone)

        const icone = document.createElement('i')
        icone.setAttribute('class', 'far fa-heart')
        divFooter.appendChild(icone)

        

        footer.appendChild(divFooter)

        article.appendChild(footer)

        return article
    }
}