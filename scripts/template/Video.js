class Video {
    constructor(data){
        data && Object.assign(this, data)
        this.main = document.querySelector('main')
        this.newLike = data.likes
    }

    get picture(){
        return `assets/videos/${this.photographerId}/${this.video}`;
    }

    createTemplateMedia(){
        console.log(this.video)
        const article = document.createElement('article');
        article.classList.add('media');

        const link = document.createElement('a')
        link.setAttribute('href', '#')

        const video = document.createElement( 'video');
        video.autoplay = false;
        video.controls = true;
        video.muted = false;
        video.setAttribute("src", this.picture)
        video.setAttribute("alt", this.title)
        video.setAttribute("type", 'video/mp4')
        link.appendChild(video);

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
        const that = this;
        icone.addEventListener('click', function(){
            that.testLikes(this.previousElementSibling)
        })
        divFooter.appendChild(icone)

        

        footer.appendChild(divFooter)

        article.appendChild(footer)

        return article


    }

    testLikes(element){
        if(this.newLike == this.likes){
            this.newLike += 1;
            element.textContent = this.newLike
        } else {
            this.newLike -= 1
            element.textContent = this.newLike
        }
    }
}