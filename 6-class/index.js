'use strict';

class Car {
    #brend;
    #model;
    #distance;

    constructor(brend, model, distance) {
        this.#brend = brend;
        this.#model = model;
        this.#distance = distance;
    }

    /**
     * @param {number} distance
     */
    set distance(distance) {
        this.#distance = distance;
    }

    info() {
        return `Марка: ${this.#brend}, модель: ${this.#model}, пробег: ${
            this.#distance
        }`;
    }
}

const car = new Car('BMW', 'X5', 100500);

console.log(car.info());

car.distance = 356000;

console.log(car.info());
