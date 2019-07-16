const marvel = {
    render:() => {
        const urlAPI = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=a9ede7a730f33a8c23f8d8a18f99b686&hash=73621f0299923fc5dc40f14af8614930';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            for (const hero of json.data.results) {
                let urlHero = hero.urls[0].url;
                contentHTML += `
                    <div class="col-12 mx-auto">
                        <a href="${urlHero}" target="_blank">
                            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                        </a>
                        <h3 class="title">${hero.name}</h3>
                    </div>`;
            }
            container.innerHTML = contentHTML;
        })
    }
};
marvel.render();