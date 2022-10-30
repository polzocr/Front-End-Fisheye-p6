class MediaFactory {
    constructor(data){
        if(data.hasOwnProperty('video')){
            return new Video(data)
        } else if (data.hasOwnProperty('image')){
            return new Photo(data)
        } else {
            throw 'Erreurr ici-même, thomasse'
        }
    }
}
