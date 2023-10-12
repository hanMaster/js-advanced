'use strict';

const slot = document.getElementById('slot');

const formatter = new Intl.RelativeTimeFormat('ru-RU');

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
    const diff = newYear.getTime() - Date.now();

    const diffMonth = 11 - new Date().getMonth();
    const month = formatter.formatToParts(diffMonth, 'months');
    slot.innerText = `${month[1].value}${month[2].value},`;

    const diffDays = calcDays();
    const days = formatter.formatToParts(diffDays, 'days');
    slot.innerText += ` ${days[1].value}${days[2].value}, `;

    const diffHours = Math.floor((diff / 1000 / 60 / 60) % 24);
    const hrs = formatter.formatToParts(diffHours, 'hours');
    slot.innerText += ` ${hrs[1].value}${hrs[2].value}, `;

    const diffMinutes = Math.floor((diff / 1000 / 60) % 60);
    const min = formatter.formatToParts(diffMinutes, 'minutes');
    slot.innerText += ` ${min[1].value}${min[2].value}, `;

    const diffSeconds = Math.floor((diff / 1000) % 60);
    const sec = formatter.formatToParts(diffSeconds, 'seconds');
    slot.innerText += ` ${sec[1].value}${sec[2].value}`;
};

setEstimate();

setInterval(() => {
    setEstimate();
}, 1000);
