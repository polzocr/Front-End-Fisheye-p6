//factory qui appelle les templates pour la page d'accueil 
//ou pour la page du photographe

class PhotographerFactory {
    constructor(data, page){
        if(page === 'accueil'){
            return new Accueil(data)
        } else if (page ==='photographer'){
            return new Photographer(data)
        } else {
            throw 'Erreurr ici-même'
        }
    }
}
