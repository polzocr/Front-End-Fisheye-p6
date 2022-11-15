//affichage de tous les photographes
class Accueil {
    constructor(data){
        data && Object.assign(this, data)
        this.section = document.querySelector('.photographer_section')
    }

    //on recupere le bon chemin des images
    get picture(){
        return `assets/photographers/${this.portrait}`;
    }

    //creation des cards des photographes
    createTemplate(){
        const article = document.createElement( 'article' );
        
        //lien
        const link = document.createElement('a')
        link.setAttribute('href', 'photographer.html?id=' + this.id)
        link.setAttribute('role', 'link')
        link.setAttribute('aria-label', 'lien page ' + this.name)
        
        article.appendChild(link)


        //creation et ajout image
        const img = document.createElement( 'img' );
        img.setAttribute('src', this.picture)
        img.setAttribute('alt', '')
        link.appendChild(img);

        //creation et ajout h2
        const h2 = document.createElement( 'h2' );
        h2.textContent = this.name;
        link.appendChild(h2);

        //creation et ajout ville
        const pCity = document.createElement('p')
        pCity.textContent = this.city + ', ' + this.country;
        article.appendChild(pCity);
        
        //creation et ajout slogan
        const pTagline = document.createElement('p')
        pTagline.textContent = this.tagline;
        article.appendChild(pTagline);
        
        //creation et ajout tarif
        const pPrice = document.createElement('p')
        pPrice.textContent = this.price + '€/jour';
        article.appendChild(pPrice);
        
        //creation finale de larticle dans la section choisie dans le constructeur
        this.section.appendChild(article); 
    }
}