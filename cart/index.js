'use strict';

const product1 = { id: 1, name: 'Bread', count: 1 };
const product2 = { id: 2, name: 'Butter', count: 1 };

const Cart = function () {};

Cart.prototype.productList = [];

Cart.prototype.addToCart = function (product) {
    const productInCart = this.productList.find((p) => p.id === product.id);
    if (productInCart) {
        productInCart.count++;
    } else {
        this.productList.push(product);
    }
};

Cart.prototype.increase = function (productId) {
    const productInCart = this.productList.find((p) => p.id === productId);
    if (productInCart) {
        productInCart.count++;
    }
};

Cart.prototype.decrease = function (productId) {
    const productInCart = this.productList.find((p) => p.id === productId);
    if (productInCart) {
        productInCart.count--;
    }
    if (productInCart.count === 0) {
        this.productList = this.productList.filter((p) => p.id !== productId);
    }
};

const cart = new Cart();

cart.addToCart(product1);
cart.addToCart(product1);
cart.addToCart(product2);

cart.increase(2);
cart.increase(2);

cart.decrease(1);
cart.decrease(1);

console.log(cart.productList);
