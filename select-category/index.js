'use strict';

const select = document.querySelector('select');

fetch('https://dummyjson.com/products/categories')
    .then((res) => res.json())
    .then((data) => {
        for (const el of data) {
            select.innerHTML += `<option value='${el}'>${el}</option>`;
        }
    })
    .catch((err) => console.error(err));
