'use strict';

const slot = document.querySelector('span');
const url = 'https://api.bigdatacloud.net/data/reverse-geocode-client?';

function getGeolocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
            },
            (err) => reject(err)
        );
    });
}

const run = async () => {
    try {
        const coords = await getGeolocation();
        const fullUrl = `${url}latitude=${coords.latitude}&longtitude=${coords.longitude}`;
        const response = await fetch(fullUrl);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        slot.innerText = data.city;
    } catch (err) {
        slot.innerText = `Ошибка получения геопозиции: ${err.message}`;
        slot.style.color = 'salmon';
    }
};

run();
