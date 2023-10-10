'use strict';

function randomInRange(min, max) {
    return Math.trunc(min + Math.random() * (max - min));
}

console.log(randomInRange(10, 30));
