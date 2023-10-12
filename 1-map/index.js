'use strict';

const arr = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
];

const set = new Set(arr.map((i) => i.id));

const uniqueArray = [];

for (const item of set) {
    uniqueArray.push(arr.find((i) => i.id === item));
}

console.log(uniqueArray);
