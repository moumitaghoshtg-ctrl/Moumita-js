// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(undefined == 0); //false
console.log(undefined > 0); //false

// the reason behind this is that null is converted to a number for the comparisons.
// When comparing null with >, <, >=, or <=, JavaScript converts null to 0.
// However, when using ==, null is only equal to undefined and not to any other value.

// === strict equality operator, which checks for both value and type equality without performing type coercion.
console.log(2 === 2); //true checks value and type both.
log(2 === "2"); //false checks value and type both.
console.log(2 == "2"); //true only checks value not type