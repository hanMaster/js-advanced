'use strict';

class Billing {
    #amount = 100;

    calculateTotal() {
        return this.#amount;
    }
}

class FixBilling extends Billing {}

class HourBilling extends Billing {
    constructor(hours) {
        super();
        this.hours = hours;
    }
    calculateTotal() {
        return super.calculateTotal() * this.hours;
    }
}

class ItemBilling extends Billing {
    constructor(items) {
        super();
        this.items = items;
    }
    calculateTotal() {
        return super.calculateTotal() * this.items;
    }
}

class Bill {
    prepareBill(billing) {
        return billing.calculateTotal();
    }
}

const bill1 = new Bill();
console.log('fix', bill1.prepareBill(new FixBilling()));

const bill2 = new Bill();
console.log('hours', bill2.prepareBill(new HourBilling(20)));

const bill3 = new Bill();
console.log('items', bill3.prepareBill(new ItemBilling(15)));
