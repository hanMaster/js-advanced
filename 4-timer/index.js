'use strict';

const slot = document.getElementById('slot');

const displayTime = (time) => {
    return new Intl.DateTimeFormat('ru-RU').format(time);
};

const formatter = new Intl.RelativeTimeFormat('ru-RU', { numeric: 'auto' });

const displayInterval = (time) => {
    const now = new Date();
    console.log('hours', now.getHours());
    const M = formatter.formatToParts(11 - now.getMonth(), 'month');
    const d = formatter.formatToParts(0, 'day');
    const h = formatter.formatToParts(24 - now.getHours(), 'hour');
    const m = formatter.formatToParts(27, 'minute');
    const s = formatter.formatToParts(2, 'second');

    return `${M[1].value}${M[2].value}, ${d[1].value}${d[2].value}, ${h[1].value}${h[2].value}, ${m[1].value}${m[2].value}, ${s[1].value}${s[2].value}`;
};

const year = new Date().getFullYear() + 1;

const newYear = new Date(year, 0, 1, 0, 0, 0);

console.log('New Year', newYear);

const diff = newYear.getTime() - Date.now();

console.log(displayTime(diff));

slot.innerText = displayInterval(new Date(diff));

// const countDown = () => {
//     setInterval(() => {
//         now -= 1000;
//         console.log(displayTime(now));
//     }, 1000);
// };

// countDown();
