//factory pour les api, on appelles soit l'api qui retourne les média 
//soit l'api qui retourne les photographes
 
class ApiFactory {
    constructor(url, dataType) {
        if(dataType === 'photographers'){
            return new ApiPhotographers(url)
        } else if(dataType === 'media'){
            return new ApiMedia(url)
        }
    }

    
}