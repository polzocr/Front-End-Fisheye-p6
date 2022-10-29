 class ApiMedia {
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.media)
            .catch(err => console.log('an error occurs', err))
    }
}