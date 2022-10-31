class Photographer {
    constructor(data){
        data && Object.assign(this, data)
        this.section = document.querySelector(".photograph-header")
        this.main = document.querySelector('main')
    }

    get picture(){
        return `assets/photographers/${this.portrait}`;
    }

    createTemplateHeader(){
        const bigDiv = document.createElement('div')
        const firstDiv = document.createElement('div')
        firstDiv.setAttribute('class', 'photograph-header-infos')

        const aside = document.createElement('aside')

        const h1 = document.createElement( 'h1' );
        h1.textContent = this.name;
        firstDiv.appendChild(h1);


        const pCity = document.createElement('p')
        pCity.textContent = this.city + ', ' + this.country;
        firstDiv.appendChild(pCity);

        const pTagline = document.createElement('p')
        pTagline.textContent = this.tagline;
        firstDiv.appendChild(pTagline);
        

        // creation et ajout image
        const img = document.createElement( 'img' );
        img.setAttribute("src", this.picture)
        img.setAttribute("alt", this.name)

        const pPrice = document.createElement('p')
        pPrice.textContent = this.price + '€/jour';

        const divLikes = document.createElement('div')
        const pIcone = document.createElement('p')
        const icone = document.createElement('i')
        divLikes.setAttribute('class', 'number-likes')
        pIcone.textContent = ''
        icone.setAttribute('class', 'far fa-heart')

        divLikes.appendChild(pIcone)
        divLikes.appendChild(icone)
        aside.appendChild(divLikes)
        aside.appendChild(pPrice);

        bigDiv.appendChild(firstDiv);
        this.section.insertBefore(bigDiv, this.section.firstChild);
        this.section.appendChild(img);
        this.main.appendChild(aside) 
    }

    totalLikes(){
        console.log('yeah')
    }
}