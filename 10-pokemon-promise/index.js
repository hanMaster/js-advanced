'use strict';
const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

function getData(url) {
    return fetch(url).then((res) => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    });
}

getData(pokemonUrl)
    .then((data) => {
        return getData(data.abilities[0].ability.url);
    })
    .then((data) => console.log(data.effect_entries.find((e) => e.language.name === 'en').effect))
    .catch((err) => console.error('ops, server response with status', err.message));
