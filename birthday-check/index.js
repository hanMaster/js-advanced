'use strict';

const user1 = {
    name: 'Вася',
    birthday: '12/23/2022',
};
const user2 = {
    name: 'Петя',
    birthday: '10/11/2003',
};

const isBirthdayToday = (user) => {
    const now = new Date();
    return (
        new Date(user.birthday).getDate() === now.getDate() &&
        new Date(user.birthday).getMonth() === now.getMonth()
    );
};

console.log(isBirthdayToday(user1));
console.log(isBirthdayToday(user2));
