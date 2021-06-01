let year = 2012;
let month = 5;
let added_month = 35;

let a = new Date(year, month);
let b = new Date(year, month+added_month);

console.log(b.getFullYear());