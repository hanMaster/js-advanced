'use strict';

const slot = document.getElementById('slot');

let res = [];

const formatter = new Intl.RelativeTimeFormat('ru-RU');

const generateStr = (diff, interval) => {
    const parts = formatter.formatToParts(diff, interval);
    res.push(`${parts[1].value}${parts[2].value}`);
};

const year = new Date().getFullYear();
const newYear = new Date(year + 1, 0, 1, 0, 0, 0, 0);

const countDaysInCurrentMonth = () => {
    const today = new Date();
    const m31 = [1, 3, 5, 7, 8, 10, 12];
    const month = today.getMonth() + 1;

    if (m31.includes(month)) {
        return 31;
    }

    if (today.getFullYear() % 4 === 0 && month === 2) {
        return 29;
    }

    if (today.getFullYear() % 4 !== 0 && month === 2) {
        return 28;
    }

    return 30;
};

const calcDays = () => {
    return countDaysInCurrentMonth() - new Date().getDate();
};

const setEstimate = () => {
    res = [];
    const diff = newYear.getTime() - Date.now();

    generateStr(11 - new Date().getMonth(), 'months');
    generateStr(calcDays(), 'days');
    generateStr(Math.floor((diff / 1000 / 60 / 60) % 24), 'hours');
    generateStr(Math.floor((diff / 1000 / 60) % 60), 'minutes');
    generateStr(Math.floor((diff / 1000) % 60), 'seconds');

    slot.innerText = res.join(', ');
};

setEstimate();

setInterval(() => {
    setEstimate();
}, 1000);
