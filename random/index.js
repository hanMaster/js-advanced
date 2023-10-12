'use strict';

function randomInRange(min, max) {
    return Math.trunc(min + Math.random() * (max - min + 1));
}

console.log(randomInRange(1, 6));
