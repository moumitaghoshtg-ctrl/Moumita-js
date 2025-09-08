"use strict"; //treat all JS code as newer version, it will not allow to use undeclared variable

// alert(3+3) //we are using nodejs, not browser

console.log(3+3)
console.log("Moumita")

let name = "moumita"
let age = 22
let isLoggedIn = false

//number => 2 to power 53 [range]
//bigint use dfor big numbers linke in trading, stock marketing
//string ""
//boolean => true/false
//null => standalone value
//undefined => value not assigned
//symbol => unique


//object => key value pairs

console.log(typeof "moumita")
console.log(typeof age)
console.log(typeof isLoggedIn)  
console.log(typeof null)  //bug in JS o/p=object
console.log(typeof undefined)
console.log(typeof 9007199254741991n) //bigint
console.log(typeof Symbol("id"))
console.log(typeof {name:"moumita", age:22, isLoggedIn:false}) //object