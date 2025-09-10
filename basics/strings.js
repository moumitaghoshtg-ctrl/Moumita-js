const name = "Moumita"
const age = 28
console.log("My name is " + name + " and my age is " + age); //string concatenation old way
console.log(`My name is ${name} and my age is ${age}`); //string interpolation modern way, we can apply methods directly. Use backticks ``.

const gameName = new String("Cricket") //String object[new]
console.log(gameName); //String value ~ key:value pair
console.log(typeof gameName); //object
console.log(gameName.toUpperCase()); //CRICKET
console.log(gameName.charAt(2)); //i
console.log(gameName.length); //7
console.log(gameName[0]); //C
console.log(gameName.__proto__); //String methods
console.log(gameName.indexOf("C")); //0
console.log(gameName.lastIndexOf("c")); 

const newString = gameName.substring(0,4) //substring method negative values not accepted starts from 0 to 3
console.log(newString); //Cric

const anotherString = gameName.slice(-7,4) //slice method accepts negative values, starts from -7 to 3
console.log(anotherString); //Cric

const newStringOne = "    Hello World    "
console.log(newStringOne.trim()); //Hello World, trim removes white spaces from both sides

const url = "https://moumita.com/moumita%20ghosh" //%20 is space in url
console.log(url.replace("%20", "-")); //https://moumita.com/moumita-ghosh
console.log(url.includes("moumita")); //true
console.log(url.split("/")); //['https:', '', 'moumita.com', 'moumita%20ghosh']
console.log(url.split("/")[2]); //moumita.com
console.log(url.toLowerCase()); //https://moumita.com/moumita%20ghosh
console.log(url.toUpperCase()); //HTTPS://MOUMITA.COM/MOUMITA%20GHOSH