function photographerFactory(data) {
    const { name, portrait, price, tagline, city, country, id  } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        //creation et ajout image
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        article.appendChild(img);

        //creation et ajout h2
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(h2);


        const pCity = document.createElement('p')
        pCity.textContent = city + ', ' + country;
        article.appendChild(pCity);
        
        const pTagline = document.createElement('p')
        pTagline.textContent = tagline;
        article.appendChild(pTagline);
        
        const pPrice = document.createElement('p')
        pPrice.textContent = price + '€/jour';
        article.appendChild(pPrice);
        
        return (article);
    }
    return { getUserCardDOM }
}