'use strict';

const app = document.querySelector('.app');
let input;
let items;

function generateItems(count) {
    const margin = document.createElement('br');
    app.appendChild(margin);

    items = document.createElement('div');
    items.classList.add('items');

    for (let i = 1; i <= count; i++) {
        const item = document.createElement('div');
        item.setAttribute('id', `item${i}`);
        item.innerText = `Lorem ipsum dolor sit amet consectetur, item${i} adipisicing elit. Molestias, quasi!`;
        items.appendChild(item);
    }
    app.appendChild(items);
}

function genSearchForm() {
    const form = document.createElement('form');
    const label = document.createElement('label');
    label.setAttribute('for', 'search');
    label.innerText = 'Введите строку поиска';
    form.appendChild(label);
    input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'search');
    form.appendChild(input);
    app.appendChild(form);
}

function cleanSelections() {
    for (const item of items.children) {
        item.style.border = 'none';
    }
}

function markText(str, element) {
    let text = element.innerHTML;
    const pattern = `<mark>${str}</mark>`;
    text = text.replace(str, pattern);

    element.innerHTML = text;
}

function unmarkText() {
    for (const item of items.children) {
        let text = item.innerText;
        text = text.replace('<mark>', '');
        text = text.replace('</mark>', '');
        item.innerText = text;
    }
}

genSearchForm();
generateItems(15);

input.addEventListener('input', function () {
    cleanSelections();
    unmarkText();
    for (const item of items.children) {
        if (this.value && item.innerText.includes(this.value)) {
            item.style.border = '1px solid red';
            markText(this.value, item);
        }
    }
});
