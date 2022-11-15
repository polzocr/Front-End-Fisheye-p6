//affichage des infos du photograhes sur sa propre page
class Photographer {
    constructor(data){
        data && Object.assign(this, data)
        this.section = document.querySelector(".photograph-header")
        this.main = document.querySelector('main')
    }
    
    //on recupere le bon chemin des images
    get picture(){
        return `assets/photographers/${this.portrait}`;
    }

    //template 
    createTemplateHeader(){
        const bigDiv = document.createElement('div')
        const firstDiv = document.createElement('div')
        firstDiv.setAttribute('class', 'photograph-header-infos')

        const aside = document.createElement('aside') //creation aside likes totaux

        //creation et ajout du nom faisant office de titre
        const h1 = document.createElement( 'h1' );
        h1.textContent = this.name;
        firstDiv.appendChild(h1);


        //creation et ajout pays
        const pCity = document.createElement('p')
        pCity.textContent = this.city + ', ' + this.country;
        firstDiv.appendChild(pCity);

        //creation et ajout slogan
        const pTagline = document.createElement('p')
        pTagline.textContent = this.tagline;
        firstDiv.appendChild(pTagline);
        

        // creation et ajout image
        const img = document.createElement( 'img' );
        img.setAttribute("src", this.picture)
        img.setAttribute("alt", this.name)

        //aside prix par jour
        const pPrice = document.createElement('p')
        pPrice.textContent = this.price + '€ / jour';
        
        //aside likes totaux
        const divLikes = document.createElement('div')
        const pIcone = document.createElement('p')
        const icone = document.createElement('i')
        icone.setAttribute('aria-hidden', 'true')
        divLikes.setAttribute('class', 'number-likes')
        pIcone.textContent = ''
        icone.setAttribute('class', 'far fa-heart')

        divLikes.appendChild(pIcone)
        divLikes.appendChild(icone)
        aside.appendChild(divLikes)
        aside.appendChild(pPrice);
        aside.setAttribute('role', 'complementary')
        aside.setAttribute('aria-label', 'nombre de likes et prix des prestations')

        //ajout du tout dans la section et dans le main
        bigDiv.appendChild(firstDiv);
        this.section.insertBefore(bigDiv, this.section.firstChild);
        this.section.appendChild(img);
        this.main.appendChild(aside);

        //ajout du nom dans la modale de contact
        const modalh2 = document.querySelector('.contact_modal h2')
        modalh2.textContent = this.name
    }
}