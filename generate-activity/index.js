'use strict';

const url = 'https://www.boredapi.com/api/activity';

async function getActivity() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        return data.activity;
    } catch (err) {
        console.log(err);
    }
}

const container = document.querySelector('.activities');

async function main() {
    const activities = await Promise.all([getActivity(), getActivity(), getActivity()]);
    container.innerHTML = '';
    for (const activity of activities) {
        container.innerHTML += `<div class='card'>${activity}</div>`;
    }
}

main();

const btn = document.querySelector('.refresh');
btn.addEventListener('click', main);
