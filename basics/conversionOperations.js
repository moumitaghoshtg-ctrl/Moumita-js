let score = 33
console.log(typeof score);
let val = "33abc"
console.log(typeof val);
let newVal = Number(val)  //NaN => not a number
console.log(typeof newVal);
console.log(newVal);
let nw = "undefined"
console.log(typeof nw);
let wn = null
console.log(wn);
console.log(typeof wn);
let wn1 = Number(wn)
console.log(wn1);
let bool = true
let bool1 = Number(bool)
console.log(bool1);
console.log(bool);
console.log(typeof bool);

//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0
//null => 0
//undefined => NaN

let isLoggedIn = 1  
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

//1 => true
//0 => false
//"" => false
//"abc" => true
//null => false
//undefined => false
//NaN => false

let somenum = 33
let stringNum = String(somenum)
console.log(stringNum);
console.log(typeof stringNum);

//33 => "33"
//true => "true"
//false => "false"
//null => "null"
//undefined => "undefined"
//NaN => "NaN"