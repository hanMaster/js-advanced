'use strict';

const url = 'https://dummyjson.com/products';
const badUrl = 'https://dummyjson.com/products1';
const msg = 'Ошибка получения данных';

function handleResponse(response, errorMessage) {
    if (!response.ok) {
        throw new Error(errorMessage);
    }
    return response.json();
}

function getData(url, errorMessage) {
    fetch(url)
        .then((res) => handleResponse(res, errorMessage))
        .then((data) => {
            console.log(data.products);
        })
        .catch((err) => console.error(err.message));
}

getData(url, msg);
getData(badUrl, msg);
