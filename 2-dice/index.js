'use strict';

function randomDice(dice) {
    return Math.trunc(1 + Math.random() * Number(dice.slice(1)));
}

console.log(randomDice('d20'));
