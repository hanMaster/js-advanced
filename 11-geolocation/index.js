'use strict';

const slot = document.querySelector('span');

function getGeolocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
            },
            (err) => reject(new Error(err.message))
        );
    });
}

getGeolocation()
    .then((coords) => {
        slot.innerText = `Latitude: ${coords.latitude}\nLongtitude: ${coords.longitude}`;
    })
    .catch((err) => {
        slot.innerText = `Ошибка получения геопозиции: ${err.message}`;
        slot.style.color = 'salmon';
    });
