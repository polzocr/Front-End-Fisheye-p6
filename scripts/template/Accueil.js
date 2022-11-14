class Accueil {
    constructor(data){
        data && Object.assign(this, data)
        this.section = document.querySelector(".photographer_section")
    }

    get picture(){
        return `assets/photographers/${this.portrait}`;
    }

    createTemplate(){
        const article = document.createElement( 'article' );
        

        const link = document.createElement('a')
        // let url = new URL("photographer.html")
        link.setAttribute("href", "photographer.html?id=" + this.id)
        link.setAttribute("role", "link")
        link.setAttribute("aria-label", "lien page " + this.name)
        
        article.appendChild(link)


        //creation et ajout image
        const img = document.createElement( 'img' );
        img.setAttribute("src", this.picture)
        img.setAttribute("alt", '')
        link.appendChild(img);

        //creation et ajout h2
        const h2 = document.createElement( 'h2' );
        h2.textContent = this.name;
        link.appendChild(h2);


        const pCity = document.createElement('p')
        pCity.textContent = this.city + ', ' + this.country;
        article.appendChild(pCity);
        
        const pTagline = document.createElement('p')
        pTagline.textContent = this.tagline;
        article.appendChild(pTagline);
        
        const pPrice = document.createElement('p')
        pPrice.textContent = this.price + '€/jour';
        article.appendChild(pPrice);
        
       this.section.appendChild(article);
    }
}