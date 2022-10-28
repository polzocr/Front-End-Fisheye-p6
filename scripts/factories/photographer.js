function photographerFactory(data) {
    const { name, portrait, price, tagline, city, country, id  } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const pCity = document.createElement('p')
        const pTagline = document.createElement('p')
        const pPrice = document.createElement('p')
        h2.textContent = name;
        pCity.textContent = city + ', ' + country;
        pTagline.textContent = tagline;
        pPrice.textContent = price + '€/jour';
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pCity);
        article.appendChild(pTagline);
        article.appendChild(pPrice);
        return (article);
    }
    return { getUserCardDOM }
}