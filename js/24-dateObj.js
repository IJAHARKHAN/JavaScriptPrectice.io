// console.log("I am going to learn Date Object");

let today = new Date();
// console.log(today);
let otherDate = new Date('10-07-1992');
otherDate = new Date('oct 07 1992');
otherDate = new Date('12/13/2020');
console.log(otherDate);
let a;
let getDateValue = new Date();
console.log(getDateValue);

a = getDateValue.getDay();
a = getDateValue.getMonth();
a = getDateValue.getDate();
a = getDateValue.getFullYear();
a = getDateValue.getHours();
a = getDateValue.getMinutes();
a = getDateValue.getSeconds();
a = getDateValue.getMilliseconds();
a = getDateValue.getTime();
console.log(a);

let d = getDateValue.getDate();
let m = getDateValue.getMonth() + 1;
let y = getDateValue.getFullYear();


let currentDateMnthYear  =  d + '-' + m + '-' + y;
console.log(currentDateMnthYear);





