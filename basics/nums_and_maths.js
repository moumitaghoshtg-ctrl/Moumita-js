const score = 400
console.log(score);

const balance = new Number(200)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // upto 2 decimal points

const otherNumber = 123.183456
console.log(otherNumber.toPrecision(4)); // total 4 digits, ranges 1-21, returns a string.

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN")); // 1,00,00,000

//*******************************     MATHS     *******************************

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-500));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.min(4,1,5,6,3,-2));
console.log(Math.max(4,1,5,6,3,-2));
console.log(Math.random()); // 0 to 0.9999999
console.log(Math.random() * 10 +1); // 1 to 10
console.log(Math.floor(Math.random() * 10 +1)); // 1 to 10

// Random number between a range


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10 to 20