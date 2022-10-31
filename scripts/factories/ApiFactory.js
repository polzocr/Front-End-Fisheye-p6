 class ApiFactory {
    constructor(url, dataType) {
        if(dataType === 'photographers'){
            return new ApiPhotographers(url)
        } else if(dataType === 'media'){
            return new ApiMedia(url)
        }
    }

    
}