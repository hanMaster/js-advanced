'use strict';

const url = 'https://dummyjson.com/products';

function getData(url, errorMessage) {
    return fetch(url).then((res) => {
        if (!res.ok) {
            throw new Error(errorMessage);
        }
        return res.json();
    });
}

getData(url, 'Ошибка получения данных')
    .then((data) => {
        return getData(`${url}/${data.products[0].id}`, 'Ошибка получения продукта');
    })
    .then((data) => console.log(data))
    .catch((err) => console.error(err.message));
