'use strict';

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/ditto2';

function myFetch(url) {
    return new Promise((reslolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', url);
        req.send();

        req.addEventListener('load', function () {
            if (this.status === 200) {
                reslolve(JSON.parse(this.responseText));
            }
            reject(new Error('Failed to fetch data'));
        });
    });
}

myFetch(pokemonUrl)
    .then((d) => console.log(d))
    .catch((err) => console.error(`Ошибка: ${err.message}`));
