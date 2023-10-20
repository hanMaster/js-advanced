'use strict';

class Enemy {
    #health;
    constructor(health) {
        this.#health = health;
    }

    receiveDamage(damage) {
        this.#health -= damage;
    }

    get health() {
        return this.#health;
    }
}

class Sword {
    #damage;
    constructor(damage) {
        this.#damage = damage;
    }

    hit(enemy) {
        enemy.receiveDamage(this.#damage);
    }
}

class Orc extends Enemy {
    constructor(health) {
        super(health);
    }

    receiveDamage(damage) {
        if (Math.random() > 0.5) {
            super.receiveDamage(damage);
        }
    }
}

const orc = new Orc(500);
const sword = new Sword(10);

console.log('Orc health:', orc.health);
sword.hit(orc);
console.log('Orc health:', orc.health);
