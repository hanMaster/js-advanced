'use strict';

const displayTime = (time) => {
    return new Intl.DateTimeFormat('ru-RU', {
        minute: '2-digit',
        second: '2-digit',
    }).format(time);
};

const countDown = (timeInMinutesAndSeconds) => {
    const [min, sec] = timeInMinutesAndSeconds.split(':');

    let now = new Date();

    now.setMinutes(Number(min));
    now.setSeconds(Number(sec));

    console.log(displayTime(now));

    const tick = setInterval(() => {
        now -= 1000;
        console.log(displayTime(now));
    }, 1000);

    const timer = (Number(min) * 60 + Number(sec) - 1) * 1000;

    setTimeout(() => {
        clearInterval(tick);
        console.log('Pizza is ready!!!');
    }, timer);
};

countDown('01:15');
