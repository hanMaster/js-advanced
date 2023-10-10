'use strict';

let weatherMap = new Map([
    ['London', 10],
    ['Moscow', 7],
    ['Paris', 14],
]);

weatherMap = new Map([...weatherMap.entries()].map(([k, v]) => [v, k]));

console.log(weatherMap);
