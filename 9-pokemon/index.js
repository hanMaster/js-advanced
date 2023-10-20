'use strict';

const req1 = new XMLHttpRequest();
req1.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
req1.send();

req1.addEventListener('load', function () {
    const data1 = JSON.parse(this.responseText);

    const req2 = new XMLHttpRequest();
    req2.open('GET', data1.abilities[0].ability.url);
    req2.send();
    req2.addEventListener('load', function () {
        const data2 = JSON.parse(this.responseText);
        console.log(data2.effect_entries.find((e) => e.language.name === 'en').effect);
    });
});
