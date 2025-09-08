//1. primitive datatypes are call by value, changes takes place in the copy of the reference memory only not to the original values [String, Number, Boolean, null, undefined, Symbol, bigint]
const score = 100
let scoreVal = 100.3
const isLoggedIn = false
let outsideTemp = null
let userEmail; //undefined
let userId = Symbol("123")
const otherUserId = Symbol("123") //unique
console.log(userId === otherUserId); //false
//let bigNumber = 1234567890123456789012345678901234567890n

//2. non-primitive/reference datatypes are call by reference and changes takes place in the original values also [Arrays, Objects, Functions]
const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = { //object data type can be of any data type
    name: "moumita",
    age: 22,
}

const myfunction = function (){  //objectfunction ~ datatype
    console.log("hello world");
}

console.log(typeof score);
console.log(typeof scoreVal);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof userId);
console.log(typeof bigNumber);
console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myfunction);

//JS is dynamically typed language, we don't need to specify datatype while declaring variable, it will automatically assign datatype based on the value we are assigning to the variable.
//we can reassign value of variable with different datatype

//***********************************   MEMORY ALLOCATION   **************************************

// STACK MEMORY[Primitive] & HEAP MEMORY[Non-Primitive]
//primitive datatypes are stored in stack memory
//non-primitive datatypes are stored in heap memory and reference of that memory is stored in stack memory
//stack memory is faster than heap memory
//primitive datatypes are faster than non-primitive datatypes
//primitive datatypes are immutable, we can't change the value of primitive datatypes, we can only reassign the value to the variable
//non-primitive datatypes are mutable, we can change the value of non-primitive datatypes
//when we copy the value of primitive datatypes to another variable, a new copy of the value is created in stack memory
//when we copy the value of non-primitive datatypes to another variable, a new reference of the same memory location is created in stack memory
//if we change the value of the new variable, the value of the original variable will also be changed
//if we change the value of the original variable, the value of the new variable will also be changed
//to avoid this, we can create a new copy of the non-primitive datatypes using spread operator or Object.assign() method
//spread operator is faster than Object.assign() method
let naam = "moumita" //stored in stack memory
let newname = naam //new copy of the value is created in stack memory
newname = "mmrg" //only newname variable is changed
console.log(naam); //moumita
console.log(newname); //mmrg

let userOne = {
    email : "mmrg@google.com",
    upi : "mmrg@upi"
}

let userTwo = userOne //new reference of the same memory location is created in heap memory
userTwo.email = "moumita@google.com" //both userOne and userTwo variable is changed
console.log(userOne.email); 
console.log(userTwo.email);