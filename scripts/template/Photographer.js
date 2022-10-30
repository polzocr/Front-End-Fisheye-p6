class Photographer {
    constructor(data){
        data && Object.assign(this, data)
    }

    get picture(){
        return `assets/photographers/${this.portrait}`;
    }

    createTemplate(){
        // const article = document.createElement( 'article' );

        // const link = document.createElement('a')
        // // let url = new URL("photographer.html")
        // link.setAttribute("href", "photographer.html?id=" + this.id)
        // article.appendChild(link)
        const bigDiv = document.createElement('div')
        const firstDiv = document.createElement('div')
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


        bigDiv.appendChild(firstDiv);
        bigDiv.appendChild(img);

        
        


        
        
        
        
        const pPrice = document.createElement('p')
        pPrice.textContent = this.price + '€/jour';
        aside.appendChild(pPrice);
        
        
        
        return {bigDiv, aside};
    }
}