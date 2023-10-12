'use strict';

function isMoreThan14(birthdayStr) {
    const bidthday = new Date(birthdayStr);
    const now = new Date();
    if (
        now.getFullYear() - bidthday.getFullYear() >= 14 &&
        now.getMonth() >= bidthday.getMonth() &&
        now.getDate() >= bidthday.getDate()
    ) {
        return true;
    }
    return false;
}

console.log('2012-09-11', isMoreThan14('2008-09-11'));
console.log('2012-10-11', isMoreThan14('2009-10-11'));
console.log('2009-10-12', isMoreThan14('2009-10-12'));
console.log('2010-10-12', isMoreThan14('2010-10-12'));
