const api_marvel = {

    print:() => {
        const API = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=a9ede7a730f33a8c23f8d8a18f99b686&hash=73621f0299923fc5dc40f14af8614930';
        const content = document.querySelector('#marvel-row');
        let putInfos = '';

        // API request
        fetch(API)

        // Promisses
        .then(res => res.json())
        .then((json) => {

            // JSON data - iterations
            for (const hero of json.data.results) {
                let heroes = hero.urls[0].url;
                let description = hero.description;

                if (description === '') {
                    description = 'Sorry, description not available :-('
                }

                // Writing HTML loop...
                putInfos += `
                    <div class="col-12 mx-auto">
                        <a href="${heroes}" target="_blank">
                            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                        </a>
                        <h3 class="title">${hero.name}</h3>
                        <p>${description}</p>
                    </div>
                `;
            }
            content.innerHTML = putInfos;
        })
    }
};
api_marvel.print();
