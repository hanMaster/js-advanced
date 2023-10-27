'use strict';

const buttonsContainer = document.querySelector('.buttons');
const divCounter = document.querySelector('#counter');
let counter = 0;
divCounter.innerText = counter;

function resetLabels() {
    for (const btn of buttonsContainer.children) {
        btn.innerText = 'Нажми меня';
        btn.style.background = 'inherit';
    }
}

buttonsContainer.addEventListener('click', function (event) {
    resetLabels();
    for (const btn of buttonsContainer.children) {
        if (event.target === btn) {
            counter++;
            divCounter.innerText = counter;
            btn.innerText = 'Нажата!';
            btn.style.background = 'salmon';
        }
    }
});
