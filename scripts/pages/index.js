     function getPhotographers() {
        
        // const response = await fetch('../data/photographers.json')
        // if(!response){
        //     throw response
        // }
        // const data = await response.json()
        // const photographers = await data.photographers
        // return photographers
        
        
        
        fetch('../data/photographers.json')
        .then(res => {
            if(res.ok){
                return res.json()
            }
        })
        .then(datas => {
            const photographers = datas.photographers;
            displayData(photographers)
        })       
        .catch(err => {
            console.log(err)
        })
       
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            console.log(photographerModel, 'yeah')
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    // async function init() {
    //     const photographers = await getPhotographers();
    //     console.log(photographers)
    //     displayData(photographers);
    // };
    
    // init();

   getPhotographers()

  