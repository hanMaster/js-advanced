'use strict';

async function race(promises) {
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            promise.then((res) => resolve(res)).catch((res) => reject(res));
        }
    });
}

const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve('Success'), 5);
});
const promise2 = new Promise((reject) => {
    setTimeout(() => reject('Fail'), 10);
});

async function main() {
    const result = await race([promise1, promise2]);
    console.log(result);
}

main();
