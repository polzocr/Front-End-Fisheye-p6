class Photo {
    constructor(data){
        data && Object.assign(this, data)
        this.newLike = data.likes
    }

    get picture(){
        return `assets/images/${this.photographerId}/${this.image}`;
    }

    createTemplateMedia(){
        const article = document.createElement('article');
        article.classList.add('media');

        const link = document.createElement('a')
        link.setAttribute('href', '#')
        link.setAttribute('role', 'button')
        link.setAttribute('aria-label', 'ouverture gallerie avec ' + this.title)

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
        icone.setAttribute('role', 'button')
        icone.setAttribute('aria-label', 'aimer le media')
        icone.setAttribute('tabindex', '0')
        const that = this;
        icone.addEventListener('click', function(){
            that.totalLikes(this.previousElementSibling, icone)
        })
        icone.addEventListener('keydown', function(e){
            if(e.key == 'Enter'){
                that.totalLikes(this.previousElementSibling, icone)
            }
        })

        divFooter.appendChild(icone)

        footer.appendChild(divFooter)

        article.appendChild(footer)

        return article
    }

    totalLikes(element, icone){
        const pTotalLikes = document.querySelector('.number-likes p')
        if(this.newLike == this.likes){
            this.newLike += 1;
            element.textContent = this.newLike
            pTotalLikes.textContent = parseInt(pTotalLikes.textContent) + 1
            icone.classList.add('liked')
        } else {
            this.newLike -= 1
            element.textContent = this.newLike
            pTotalLikes.textContent = parseInt(pTotalLikes.textContent) - 1
            icone.classList.remove('liked')
        }
    }
    
    

    

}