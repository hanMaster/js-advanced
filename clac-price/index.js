'use strict';

function apiCall() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/products');
    request.send();

    request.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        const prices = data.products.map((p) => p.price);
        const avgPrice = prices.reduce((acc, item) => acc + item / prices.length, 0);
        console.log(avgPrice.toFixed(0));
    });
}

apiCall();
