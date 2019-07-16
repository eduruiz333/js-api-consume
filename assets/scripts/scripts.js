const marvel = {
    render:() => {
        const urlAPI = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=a2bdef82f196b54c3025e425bef0e191&hash=c525012accf61f39b0964d120aab9a6c';
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