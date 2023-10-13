'use strict';

class Character {
    #race;
    #name;
    #language;
    constructor(race, name, language) {
        this.#race = race;
        this.#name = name;
        this.#language = language;
    }

    get name() {
        return this.#name;
    }

    get language() {
        return this.#language;
    }

    say() {
        console.log(`Language: ${this.language}, Name: ${this.name}`);
    }
}

class Orc extends Character {
    #weapon;
    constructor(name, weapon) {
        super('Orc', name, 'Orcish');
        this.#weapon = weapon;
    }

    say() {
        console.log('Orc says his name', this.name, 'on', this.language);
    }

    attack() {
        console.log('Orc attack with', this.#weapon);
    }
}

class Elf extends Character {
    #spell;
    constructor(name, spell) {
        super('Elf', name, 'Elven');
        this.#spell = spell;
    }

    say() {
        console.log('Elf says his name is:', this.name, 'on', this.language);
    }

    castSpell() {
        console.log('Elf cast spell with', this.#spell);
    }
}

const orc = new Orc('Balagur', 'hummer');
orc.say();
orc.attack();

const elf = new Elf('Galadriel', 'wand');
elf.say();
elf.castSpell();
