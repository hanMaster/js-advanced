(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    class User {
        constructor(task) {
            this.task = task;
        }

        do() {
            this.task.run();
        }
    }

    class Task {
        run() {
            console.log('Пишем код');
        }
    }

    const user = new User(new Task());
    user.do();

}));
