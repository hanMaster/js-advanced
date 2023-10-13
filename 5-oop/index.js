'use strict';

const Character = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
};

Character.prototype.say = function () {
    console.log(`Language: ${this.language}, Name: ${this.name}`);
};

const Orc = function (name, weapon) {
    Character.call(this, 'Orc', name, 'Orcish');
    this.weapon = weapon;
};

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.attack = function () {
    console.log('Orc attack');
};

const Elf = function (name, spell) {
    Character.call(this, 'Elf', name, 'Elven');
    this.spell = spell;
};

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.castSpell = function () {
    console.log('Elf cast spell');
};

const orc = new Orc('Balagur', 'hummer');
orc.say();
orc.attack();

const elf = new Elf('Galadriel', 'wand');
elf.say();
elf.castSpell();
