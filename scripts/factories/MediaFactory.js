//factory qui appelle les templates soit pour les photos 
//soit pour les vidéos

class MediaFactory {
    constructor(data){
        if(Object.prototype.hasOwnProperty.call(data, 'video')){
            return new Video(data)
        } else if (Object.prototype.hasOwnProperty.call(data, 'image')){
            return new Photo(data)
        } else {
            throw 'Erreurr ici-même'
        }
    }

    
}
