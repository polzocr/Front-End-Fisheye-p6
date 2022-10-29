
class PhotographerFactory {
    constructor(data, page){
        if(page === 'accueil'){
            return new Accueil(data)
        } else if (page ==='photographer'){
            return new Photographer(data)
        } else {
            throw 'Erreurr ici-même, thomasse'
        }
    }
}














// function photographerFactory(data) {
//     const { name, portrait, price, tagline, city, country, id  } = data;
//     const picture = `assets/photographers/${portrait}`;

//     function getUserCardDOM() {
//         const article = document.createElement( 'article' );

//         const link = document.createElement('a')
//         // let url = new URL("photographer.html")
//         link.setAttribute("href", "photographer.html?id=" + id)
//         article.appendChild(link)


//         //creation et ajout image
//         const img = document.createElement( 'img' );
//         img.setAttribute("src", picture)
//         img.setAttribute("alt", name)
//         link.appendChild(img);

//         //creation et ajout h2
//         const h2 = document.createElement( 'h2' );
//         h2.textContent = name;
//         link.appendChild(h2);


//         const pCity = document.createElement('p')
//         pCity.textContent = city + ', ' + country;
//         article.appendChild(pCity);
        
//         const pTagline = document.createElement('p')
//         pTagline.textContent = tagline;
//         article.appendChild(pTagline);
        
//         const pPrice = document.createElement('p')
//         pPrice.textContent = price + '€/jour';
//         article.appendChild(pPrice);
        
//         return (article);
//     }
//     return { getUserCardDOM }
// }

