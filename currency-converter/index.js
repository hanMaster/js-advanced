'use strict';

const usdRate = 101;
const eurRate = 107;

const rubOptions = {
    style: 'currency',
    currency: 'RUB',
};

const usdOptions = {
    style: 'currency',
    currency: 'USD',
};

const eurOptions = {
    style: 'currency',
    currency: 'EUR',
};

function convert(amount, from, to) {
    switch (true) {
        case from === 'rub' && to === 'usd':
            return Intl.NumberFormat('en-US', usdOptions).format(
                amount / usdRate
            );
        case from === 'rub' && to === 'eur':
            return Intl.NumberFormat('en-GB', eurOptions).format(
                amount / eurRate
            );
        case from === 'usd' && to === 'rub':
            return Intl.NumberFormat('ru-RU', rubOptions).format(
                amount * usdRate
            );
        case from === 'eur' && to === 'rub':
            return Intl.NumberFormat('ru-RU', rubOptions).format(
                amount * eurRate
            );
        default:
            return null;
    }
}

console.log(convert(1000, 'rub', 'usd'));
console.log(convert(1000, 'rub', 'eur'));
console.log(convert(1000, 'usd', 'rub'));
console.log(convert(1000, 'eur', 'rub'));
