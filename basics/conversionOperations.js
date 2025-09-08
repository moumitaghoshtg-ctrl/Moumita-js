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

//  ***********************************   OPERATIONS   **************************************

//Application memes:)
let value = 3
let negValue = -value
console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3); //2^3
//console.log(2/2);
//console.log(5%2); //remainder

let str1 = "hello"
let str2 = "world"
let str3 = str1 + " " + str2
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
// the conclusion from the above case is if string is present first then everything will be converted to string, otherwise addition will be done first.
console.log(true)
console.log(+true)  //convert to number = 1
//console.log(true+) ~ this will give error;
//Assignment operator:
let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num1, num2, num3);

let gameCounter = 100
//gameCounter = gameCounter + 1
gameCounter ++  // postfix increment operator
console.log(gameCounter);
--gameCounter //prefix decrement operator
console.log(gameCounter);