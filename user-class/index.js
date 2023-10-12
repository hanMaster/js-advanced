'use strict';

class User {
    #login;
    #password;

    constructor(login, password) {
        this.#login = login;
        this.#password = this.#crypt(password);
    }

    get login() {
        return this.#login;
    }

    compare(password) {
        return this.#password === this.#crypt(password);
    }

    changePassword(oldPassword, newPassword) {
        if (this.compare(oldPassword)) {
            this.#password = this.#crypt(newPassword);
            return true;
        }
        return false;
    }

    #crypt(password) {
        return password.split('').reverse().join('');
    }
}

const user = new User('ivan', '1234567');

console.log('login:', user.login);
console.log(user.compare('1qaz'));
console.log(user.changePassword('1234567', '2wsx'));
console.log(user.compare('2wsx'));
